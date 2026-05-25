/**
 * Search module.
 * Provides debounced full-text search across term names and descriptions,
 * with match highlighting and result count display.
 */

import { debounce, escapeHtml, toTermId } from './utils.js'
import { getCurrentSection, getCategorySection } from './sections.js'
import { termDisplay, t } from './i18n.js'
import { registerSearchHandlers, replaceQueryState } from './router.js'
import { isFavorite } from './favorites.js'

const DEBOUNCE_DELAY = 200
const HISTORY_KEY = 'uiGlossary.searchHistory'
const HISTORY_MAX = 6

// Per-section filter state.
//   type:      'all' | 'code' | 'concept' (radio)
//   favorites: toggle
//   styles:    Set of 'dark' | 'light' | 'gradient' | 'glass' | 'anim'    (OR)
//   tech:      Set of 'js' | 'responsive' | 'svg' | 'hover' | 'themed'    (OR)
//   elems:     Set of 'form' | 'button' | 'card' | 'nav' | 'display'      (OR)
//   genres:    Set of 'showcase' | 'ref' | 'app' | 'corp' | 'site'        (OR)
const newFilterState = () => ({
  type: 'all',
  favorites: false,
  styles: new Set(),
  tech: new Set(),
  elems: new Set(),
  genres: new Set(),
})
const filterState = {
  parts: newFilterState(),
  glossary: newFilterState(),
}

const getFilterState = (section) => filterState[section] || filterState.parts

const SHOWCASE_IDS = new Set([
  'ui-parts-showcase',
  'ui-parts-display',
  'ui-parts-display-2',
  'ui-parts-input',
  'ui-parts-input-2',
  'ui-parts-feedback',
  'ui-parts-nav-mobile',
])
const APP_IDS = new Set([
  'ui-parts-ai-chat',
  'ui-parts-music',
  'ui-parts-video',
  'ui-parts-ecommerce',
  'ui-parts-social-feed',
  'ui-parts-dev-tools',
  'ui-parts-productivity',
  'ui-parts-finance',
  'ui-parts-maps-travel',
  'ui-parts-messaging',
  'ui-parts-mobile-os',
  'ui-parts-creator-content',
])

const categoryGenre = (cat) => {
  const id = cat.id || ''
  if (id.startsWith('ui-parts-site-')) return 'site'
  if (id.startsWith('ui-parts-corp-')) return 'corp'
  if (id.startsWith('ui-parts-ref-')) return 'ref'
  if (SHOWCASE_IDS.has(id)) return 'showcase'
  if (APP_IDS.has(id)) return 'app'
  return 'basic'
}

// Lightweight heuristic checks against a term's raw code. These are rough
// classifications used purely for filter chip matching — false positives
// are fine, missing the rare snippet is fine too.
const termTraits = (term) => {
  const code = (term.code || '').toLowerCase()
  if (!code) return null
  return {
    dark:
      /background\s*:\s*#0[0-9a-f]|background\s*:\s*#1[0-9a-f]|color\s*:\s*#fff|background\s*:\s*black|background\s*:\s*rgba\(0\s*,\s*0\s*,\s*0/.test(
        code,
      ),
    light: /background\s*:\s*#f|background\s*:\s*white|background\s*:\s*#e[8-f]/.test(code),
    gradient: /linear-gradient|radial-gradient|conic-gradient/.test(code),
    glass: /backdrop-filter/.test(code),
    anim: /@keyframes|animation\s*:|transition\s*:/.test(code),
    js: /<script/.test(code),
    responsive: /@media/.test(code),
    svg: /<svg/.test(code),
    hover: /:hover/.test(code),
    themed: /prefers-color-scheme|data-theme/.test(code),
    form: /<input|<textarea|<select/.test(code),
    button: /<button/.test(code),
    card: /border-radius/.test(code),
    nav: /<nav|class="[^"]*nav/.test(code),
    display: /<h1|<h2|<h3|<section|<article|<header|<footer/.test(code),
  }
}

const filterCount = (s) =>
  (s.type !== 'all' ? 1 : 0) +
  (s.favorites ? 1 : 0) +
  s.styles.size +
  s.tech.size +
  s.elems.size +
  s.genres.size

const isFilteringActive = (section) => filterCount(getFilterState(section)) > 0

const setMatchesAny = (set, traits, keys) => {
  for (const k of keys) {
    if (set.has(k) && traits && traits[k]) return true
  }
  return false
}

const termPassesFilter = (term, category, section) => {
  const s = getFilterState(section)
  if (s.type === 'code' && !term.code) return false
  if (s.type === 'concept' && term.code) return false
  if (s.favorites) {
    const key = `${category.id}-${toTermId(term.name)}`
    if (!isFavorite(key)) return false
  }
  if (s.genres.size && !s.genres.has(categoryGenre(category))) return false
  // Trait-based filters (style/tech/elem) all require term.code; concept terms
  // can never satisfy these, which is the natural reading anyway.
  if (s.styles.size || s.tech.size || s.elems.size) {
    const traits = termTraits(term)
    if (!traits) return false
    if (s.styles.size && !setMatchesAny(s.styles, traits, ['dark', 'light', 'gradient', 'glass', 'anim']))
      return false
    if (s.tech.size && !setMatchesAny(s.tech, traits, ['js', 'responsive', 'svg', 'hover', 'themed']))
      return false
    if (s.elems.size && !setMatchesAny(s.elems, traits, ['form', 'button', 'card', 'nav', 'display']))
      return false
  }
  return true
}

const loadHistory = () => {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr.slice(0, HISTORY_MAX) : []
  } catch (_) {
    return []
  }
}

const saveHistory = (list) => {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, HISTORY_MAX)))
  } catch (_) {
    /* ignore */
  }
}

const recordHistory = (query) => {
  const q = query.trim()
  if (!q) return
  const list = loadHistory().filter((v) => v !== q)
  list.unshift(q)
  saveHistory(list)
}

/**
 * Escape special regex characters in a string.
 *
 * @param {string} str - The string to escape
 * @returns {string} Regex-safe string
 */
const escapeRegExp = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Wrap matched substrings with a highlight span.
 *
 * @param {string} text - Original text
 * @param {RegExp} regex - Pattern to highlight
 * @returns {string} HTML string with highlights
 */
const highlightMatches = (text, regex) => {
  const escaped = escapeHtml(text)
  if (!regex) {
    return escaped
  }

  // Build a new regex from the escaped version of the source pattern
  // so that it matches against the escaped text properly.
  return escaped.replace(regex, (match) => {
    return `<span class="search-highlight">${match}</span>`
  })
}

/**
 * Test whether a term matches the search query.
 *
 * @param {Object} term - Term object with name and description
 * @param {RegExp} regex - Compiled search pattern
 * @returns {boolean} True if the term matches
 */
const termMatchesQuery = (term, regex) => {
  return (
    regex.test(term.name) ||
    regex.test(term.nameJa || '') ||
    regex.test(term.desc || '') ||
    regex.test(term.descEn || '')
  )
}

/**
 * Apply search results to the DOM by showing/hiding cards
 * and highlighting matching text.
 *
 * @param {string} query - The raw search query
 * @param {Array} categories - All category data
 */
const getActiveSearchClear = () => {
  const sec = getCurrentSection()
  return document.getElementById(`search-clear-${sec}`)
}

const applySearch = (query, categories) => {
  const resultsInfo = document.getElementById('search-results-info')
  const clearButton = getActiveSearchClear()
  const activeSection = getCurrentSection()
  const trimmed = (query || '').trim()
  const filtersActive = isFilteringActive(activeSection)

  // Nothing to filter on — reset to full view
  if (!trimmed && !filtersActive) {
    clearSearch(categories)
    return
  }

  // Show clear button only when there's text
  if (clearButton) {
    clearButton.hidden = !trimmed
  }

  // Hide hero and intro so results take focus
  const hero = document.getElementById('hero')
  if (hero) hero.hidden = true
  const intro = document.getElementById('intro')
  if (intro) intro.hidden = true

  const regex = trimmed ? new RegExp(escapeRegExp(trimmed), 'gi') : null
  let matchCount = 0

  const visibleCategories = categories.filter(
    (c) => getCategorySection(c) === activeSection
  )

  visibleCategories.forEach((category) => {
    const sectionEl = document.getElementById(`category-${category.id}`)
    let categoryHasMatch = false

    const terms = category.terms || []
    terms.forEach((term) => {
      const termId = toTermId(term.name)
      const cardEl = document.querySelector(
        `[data-term-id="${category.id}-${termId}"]`
      )
      if (!cardEl) {
        return
      }

      const passesFilter = termPassesFilter(term, category, activeSection)
      const passesQuery = regex ? termMatchesQuery(term, regex) : true

      if (passesFilter && passesQuery) {
        cardEl.style.display = ''
        matchCount += 1
        categoryHasMatch = true

        const nameEl = cardEl.querySelector('.term-card-name')
        const nameEnEl = cardEl.querySelector('.term-card-name-en')
        const descEl = cardEl.querySelector('.term-card-desc')
        const disp = termDisplay(term)

        if (regex) {
          if (nameEl) nameEl.innerHTML = highlightMatches(disp.primary, regex)
          if (nameEnEl) nameEnEl.innerHTML = highlightMatches(disp.secondary, regex)
          if (descEl) descEl.innerHTML = highlightMatches(disp.desc, regex)
        } else {
          if (nameEl) nameEl.textContent = disp.primary
          if (nameEnEl) nameEnEl.textContent = disp.secondary
          if (descEl) descEl.textContent = disp.desc
        }
      } else {
        cardEl.style.display = 'none'
      }
    })

    if (sectionEl) {
      sectionEl.style.display = categoryHasMatch ? '' : 'none'
    }
  })

  // Update results info
  if (resultsInfo) {
    resultsInfo.hidden = false
    const summary = trimmed
      ? `${t('search.results.for')}「${escapeHtml(trimmed)}」`
      : ''
    if (matchCount === 0) {
      resultsInfo.classList.add('is-empty')
      resultsInfo.innerHTML = `
        <span class="result-count">0</span>${t('search.results.suffix')}
        ${summary}
        <span class="search-results-hint">${t('search.noResultsHint')}</span>
      `
    } else {
      resultsInfo.classList.remove('is-empty')
      resultsInfo.innerHTML = `
        <span class="result-count">${matchCount}</span>${t('search.results.suffix')}
        ${summary}
      `
    }
  }
}

/**
 * Reset search state — show all cards, remove highlights, hide results info.
 *
 * @param {Array} categories - All category data
 */
const clearSearch = (categories) => {
  const resultsInfo = document.getElementById('search-results-info')

  if (resultsInfo) {
    resultsInfo.hidden = true
    resultsInfo.innerHTML = ''
  }

  // Hide both clear buttons; the active one's input gets cleared too
  ;['search-clear-parts', 'search-clear-glossary'].forEach((id) => {
    const btn = document.getElementById(id)
    if (btn) btn.hidden = true
  })

  // Restore hero and intro
  const hero = document.getElementById('hero')
  if (hero) hero.hidden = false
  const intro = document.getElementById('intro')
  if (intro) intro.hidden = false

  const activeSection = getCurrentSection()
  const visibleCategories = categories.filter(
    (c) => getCategorySection(c) === activeSection
  )

  visibleCategories.forEach((category) => {
    const sectionEl = document.getElementById(`category-${category.id}`)
    if (sectionEl) {
      sectionEl.style.display = ''
    }

    const terms = category.terms || []
    terms.forEach((term) => {
      const termId = toTermId(term.name)
      const cardEl = document.querySelector(
        `[data-term-id="${category.id}-${termId}"]`
      )
      if (!cardEl) {
        return
      }

      cardEl.style.display = ''

      // Restore original text (remove highlights)
      const nameEl = cardEl.querySelector('.term-card-name')
      const nameEnEl = cardEl.querySelector('.term-card-name-en')
      const descEl = cardEl.querySelector('.term-card-desc')

      const disp = termDisplay(term)
      if (nameEl) {
        nameEl.textContent = disp.primary
      }
      if (nameEnEl) {
        nameEnEl.textContent = disp.secondary
      }
      if (descEl) {
        descEl.textContent = disp.desc
      }
    })
  })
}

const getActiveSearchInput = () => {
  const sec = getCurrentSection()
  return document.getElementById(`search-input-${sec}`)
}

/**
 * Programmatically apply a query (used by router on URL load).
 */
const applyQueryFromUrl = (categories, query) => {
  const input = getActiveSearchInput()
  if (input) {
    input.value = query
  }
  applySearch(query, categories)
}

const clearSearchFromUrl = (categories) => {
  const input = getActiveSearchInput()
  if (input) {
    input.value = ''
  }
  clearSearch(categories)
}

const ensureHistoryPanel = (container) => {
  let panel = container.querySelector('.search-history')
  if (panel) return panel
  panel = document.createElement('div')
  panel.className = 'search-history'
  panel.hidden = true
  panel.innerHTML = `
    <span class="search-history__label"></span>
    <div class="search-history__chips"></div>
  `
  container.appendChild(panel)
  return panel
}

const renderHistoryChips = (container) => {
  const panel = ensureHistoryPanel(container)
  const label = panel.querySelector('.search-history__label')
  const chips = panel.querySelector('.search-history__chips')
  const list = loadHistory()
  if (list.length === 0) {
    panel.hidden = true
    return
  }
  if (label) label.textContent = t('search.recent')
  chips.innerHTML = ''
  for (const q of list) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'search-history__chip'
    btn.setAttribute('data-search-chip', q)
    btn.textContent = q
    chips.appendChild(btn)
  }
  panel.hidden = false
}

const hideHistoryPanel = (container) => {
  const panel = container.querySelector('.search-history')
  if (panel) panel.hidden = true
}

/**
 * Initialize the search system.
 * Sets up debounced input listener, clear button, and results display.
 *
 * @param {Array} categories - Array of category objects
 */
export const initSearch = (categories) => {
  const debouncedSearch = debounce((query) => {
    applySearch(query, categories)
    replaceQueryState(query.trim())
    // Only record once the query has settled and is non-empty.
    if (query.trim()) recordHistory(query)
  }, DEBOUNCE_DELAY)

  ;[
    { inputId: 'search-input-parts', clearId: 'search-clear-parts' },
    { inputId: 'search-input-glossary', clearId: 'search-clear-glossary' },
  ].forEach(({ inputId, clearId }) => {
    const input = document.getElementById(inputId)
    const clear = document.getElementById(clearId)
    if (!input) return
    const container = input.closest('.search-container')

    const filterBarEl = container ? container.querySelector('.search-filters') : null
    const sectionKey = filterBarEl
      ? filterBarEl.getAttribute('data-section') || 'parts'
      : 'parts'

    // Show filters only while the user is actively searching: input focused,
    // query non-empty, or any filter currently active. Hide when none apply.
    const updateFilterVisibility = (forceShow = false) => {
      if (!filterBarEl) return
      const hasQuery = Boolean(input.value)
      const hasFilters = isFilteringActive(sectionKey)
      const visible = forceShow || hasQuery || hasFilters
      filterBarEl.classList.toggle('is-visible', visible)
    }

    input.addEventListener('input', (e) => {
      const value = e.target.value
      debouncedSearch(value)
      if (container) {
        if (!value) {
          renderHistoryChips(container)
        } else {
          hideHistoryPanel(container)
        }
      }
      updateFilterVisibility(true)
    })

    input.addEventListener('focus', () => {
      if (container && !input.value) {
        renderHistoryChips(container)
      }
      updateFilterVisibility(true)
    })

    input.addEventListener('blur', () => {
      // Delay so clicking a chip is still registered before the panel hides.
      setTimeout(() => {
        if (container) hideHistoryPanel(container)
        updateFilterVisibility(false)
      }, 150)
    })

    if (clear) {
      clear.addEventListener('click', () => {
        input.value = ''
        // Re-apply with empty query — filters (if any) remain active.
        applySearch('', categories)
        replaceQueryState('')
        input.focus()
        if (container) renderHistoryChips(container)
      })
    }

    // Filter chips & controls inside this section's container
    const filterBar = filterBarEl
    if (filterBar) {
      const section = sectionKey
      const advPanel = filterBar.querySelector('[data-filter-adv]')
      const toggleBtn = filterBar.querySelector('[data-filter-toggle]')
      const countBadge = filterBar.querySelector('[data-filter-count]')

      // Keep input focused when clicking inside the filter bar so blur
      // doesn't hide it before the click registers.
      filterBar.addEventListener('mousedown', (event) => {
        if (event.target.closest('button')) event.preventDefault()
      })

      const updateCountBadge = () => {
        if (!countBadge) return
        const adv = filterCount(getFilterState(section)) -
          (getFilterState(section).type !== 'all' ? 1 : 0) -
          (getFilterState(section).favorites ? 1 : 0)
        if (adv > 0) {
          countBadge.hidden = false
          countBadge.textContent = String(adv)
        } else {
          countBadge.hidden = true
        }
      }

      const setRadio = (key) => {
        filterBar
          .querySelectorAll(`[data-filter-${key}]`)
          .forEach((b) =>
            b.classList.toggle(
              'is-active',
              b.getAttribute(`data-filter-${key}`) === getFilterState(section)[key],
            ),
          )
      }

      const toggleSetFilter = (chip, setKey, attr) => {
        const value = chip.getAttribute(attr)
        if (!value) return
        const set = getFilterState(section)[setKey]
        if (set.has(value)) set.delete(value)
        else set.add(value)
        chip.classList.toggle('is-active', set.has(value))
      }

      filterBar.addEventListener('click', (event) => {
        // Expand / collapse
        if (event.target.closest('[data-filter-toggle]')) {
          const expanded = toggleBtn.getAttribute('aria-expanded') === 'true'
          toggleBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true')
          if (advPanel) advPanel.hidden = expanded
          return
        }
        // Reset all
        if (event.target.closest('[data-filter-reset]')) {
          filterState[section] = newFilterState()
          // Reset chip UI
          filterBar.querySelectorAll('.search-filters__chip').forEach((c) => {
            c.classList.remove('is-active')
            if (c.hasAttribute('data-filter-favorites')) c.setAttribute('aria-pressed', 'false')
          })
          // Re-mark default "all" chip
          const allChip = filterBar.querySelector('[data-filter-type="all"]')
          if (allChip) allChip.classList.add('is-active')
          updateCountBadge()
          applySearch(input.value, categories)
          updateFilterVisibility(document.activeElement === input)
          return
        }
        const chip = event.target.closest('.search-filters__chip')
        if (!chip) return
        const state = getFilterState(section)
        if (chip.hasAttribute('data-filter-favorites')) {
          state.favorites = !state.favorites
          chip.classList.toggle('is-active', state.favorites)
          chip.setAttribute('aria-pressed', state.favorites ? 'true' : 'false')
        } else if (chip.hasAttribute('data-filter-type')) {
          state.type = chip.getAttribute('data-filter-type') || 'all'
          setRadio('type')
        } else if (chip.hasAttribute('data-filter-style')) {
          toggleSetFilter(chip, 'styles', 'data-filter-style')
        } else if (chip.hasAttribute('data-filter-tech')) {
          toggleSetFilter(chip, 'tech', 'data-filter-tech')
        } else if (chip.hasAttribute('data-filter-elem')) {
          toggleSetFilter(chip, 'elems', 'data-filter-elem')
        } else if (chip.hasAttribute('data-filter-genre')) {
          toggleSetFilter(chip, 'genres', 'data-filter-genre')
        }
        updateCountBadge()
        applySearch(input.value, categories)
        updateFilterVisibility(true)
      })
    }

    // Initial visibility — if the URL or persisted state already has a query
    // or filters active, show the panel.
    updateFilterVisibility(false)

    if (container) {
      container.addEventListener('mousedown', (event) => {
        const chip = event.target.closest('[data-search-chip]')
        if (!chip) return
        event.preventDefault()
        const q = chip.getAttribute('data-search-chip')
        input.value = q
        applySearch(q, categories)
        replaceQueryState(q)
        recordHistory(q)
        hideHistoryPanel(container)
        input.focus()
      })
    }
  })

  // Cmd/Ctrl+K is now owned by the global command palette (commandPalette.js).
  // The sidebar search inputs remain available via click / focus.

  registerSearchHandlers({
    apply: (q) => applyQueryFromUrl(categories, q),
    clear: () => clearSearchFromUrl(categories),
    getCurrent: () => {
      const input = getActiveSearchInput()
      return input ? input.value : ''
    },
  })
}
