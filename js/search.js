/**
 * Search module.
 * Provides debounced full-text search across term names and descriptions,
 * with match highlighting and result count display.
 */

import { debounce, escapeHtml, toTermId } from './utils.js'
import { getCurrentSection, getCategorySection } from './sections.js'
import { termDisplay, t } from './i18n.js'
import { registerSearchHandlers, replaceQueryState } from './router.js'

const DEBOUNCE_DELAY = 200

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

  if (!query.trim()) {
    clearSearch(categories)
    return
  }

  // Show clear button
  if (clearButton) {
    clearButton.hidden = false
  }

  // Hide hero and intro so the search results take focus
  const hero = document.getElementById('hero')
  if (hero) hero.hidden = true
  const intro = document.getElementById('intro')
  if (intro) intro.hidden = true

  const regex = new RegExp(escapeRegExp(query.trim()), 'gi')
  let matchCount = 0
  // Only search within the currently visible top-level section
  const activeSection = getCurrentSection()
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

      if (termMatchesQuery(term, regex)) {
        cardEl.style.display = ''
        matchCount += 1
        categoryHasMatch = true

        // Apply highlight to name, English name, and description
        const nameEl = cardEl.querySelector('.term-card-name')
        const nameEnEl = cardEl.querySelector('.term-card-name-en')
        const descEl = cardEl.querySelector('.term-card-desc')

        const disp = termDisplay(term)
        if (nameEl) {
          nameEl.innerHTML = highlightMatches(disp.primary, regex)
        }
        if (nameEnEl) {
          nameEnEl.innerHTML = highlightMatches(disp.secondary, regex)
        }
        if (descEl) {
          descEl.innerHTML = highlightMatches(disp.desc, regex)
        }
      } else {
        cardEl.style.display = 'none'
      }
    })

    // Hide empty category sections
    if (sectionEl) {
      sectionEl.style.display = categoryHasMatch ? '' : 'none'
    }
  })

  // Update results info
  if (resultsInfo) {
    resultsInfo.hidden = false
    resultsInfo.innerHTML = `
      <span class="result-count">${matchCount}</span>${t('search.results.suffix')}
      ${t('search.results.for')}「${escapeHtml(query.trim())}」
    `
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
  }, DEBOUNCE_DELAY)

  ;[
    { inputId: 'search-input-parts', clearId: 'search-clear-parts' },
    { inputId: 'search-input-glossary', clearId: 'search-clear-glossary' },
  ].forEach(({ inputId, clearId }) => {
    const input = document.getElementById(inputId)
    const clear = document.getElementById(clearId)
    if (!input) return

    input.addEventListener('input', (e) => {
      debouncedSearch(e.target.value)
    })

    if (clear) {
      clear.addEventListener('click', () => {
        input.value = ''
        clearSearch(categories)
        replaceQueryState('')
        input.focus()
      })
    }
  })

  registerSearchHandlers({
    apply: (q) => applyQueryFromUrl(categories, q),
    clear: () => clearSearchFromUrl(categories),
    getCurrent: () => {
      const input = getActiveSearchInput()
      return input ? input.value : ''
    },
  })
}
