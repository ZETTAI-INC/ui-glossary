/**
 * Favorites UI glue.
 * Wires up:
 *   - the star toggle button on each term card
 *   - the sidebar "Show favorites only" filter button
 *   - syncing card / sidebar state when favorites change
 */

import {
  toggleFavorite,
  isFavorite,
  onChange,
  setFilterMode,
  isFilterMode,
  getFavorites,
} from './favorites.js'
import { t } from './i18n.js'
import { getCurrentSection, getCategorySection } from './sections.js'
import { toTermId } from './utils.js'

const FAV_FILTER_BTN_ID = (section) => `fav-filter-${section}`

const updateCardStar = (card, on) => {
  card.classList.toggle('is-on', on)
  card.setAttribute('aria-pressed', on ? 'true' : 'false')
}

const handleStarClick = (event) => {
  const btn = event.target.closest('[data-fav-toggle]')
  if (!btn) return
  event.preventDefault()
  event.stopPropagation()
  const key = btn.getAttribute('data-fav-key')
  const on = toggleFavorite(key)
  updateCardStar(btn, on)
}

/**
 * Apply / unapply the favorites filter to the visible cards.
 * Cards already hidden by search are left as-is so the filters compose.
 */
const applyFilter = (categories) => {
  const on = isFilterMode()
  const activeSection = getCurrentSection()
  const visibleCategories = categories.filter(
    (c) => getCategorySection(c) === activeSection
  )

  visibleCategories.forEach((category) => {
    let hasVisible = false
    const sectionEl = document.getElementById(`category-${category.id}`)
    const terms = category.terms || []
    terms.forEach((term) => {
      const key = `${category.id}-${toTermId(term.name)}`
      const card = document.querySelector(`[data-term-id="${key}"]`)
      if (!card) return
      // Track whether search hid it (data attribute previously set by search?
      // search currently uses inline style — respect that.)
      const hiddenBySearch = card.style.display === 'none'
      if (on && !isFavorite(key)) {
        if (!hiddenBySearch) card.dataset.favFiltered = 'true'
        card.style.display = 'none'
      } else if (card.dataset.favFiltered === 'true') {
        delete card.dataset.favFiltered
        card.style.display = ''
      }
      if (!hiddenBySearch && (!on || isFavorite(key))) {
        hasVisible = true
      }
    })

    if (sectionEl && on) {
      sectionEl.style.display = hasVisible ? '' : 'none'
    } else if (sectionEl && !on) {
      // Only clear if no search filter set the display
      if (sectionEl.dataset.favHidden === 'true') {
        delete sectionEl.dataset.favHidden
        sectionEl.style.display = ''
      }
    }
  })
}

const updateFilterButtonsState = () => {
  const on = isFilterMode()
  const count = getFavorites().length
  document.querySelectorAll('[data-fav-filter]').forEach((btn) => {
    btn.classList.toggle('is-on', on)
    btn.setAttribute('aria-pressed', on ? 'true' : 'false')
    const labelEl = btn.querySelector('.fav-filter-label')
    if (labelEl) {
      labelEl.textContent = `${t('favorite.filter')} (${count})`
    }
  })
}

const insertFilterButton = (sidebarId, section) => {
  const sidebar = document.getElementById(sidebarId)
  if (!sidebar) return
  // Skip if already inserted
  if (sidebar.querySelector('[data-fav-filter]')) return
  const nav = sidebar.querySelector('.sidebar-nav')
  if (!nav) return
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = 'fav-filter'
  btn.id = FAV_FILTER_BTN_ID(section)
  btn.setAttribute('data-fav-filter', '')
  btn.setAttribute('aria-pressed', 'false')
  btn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
    <span class="fav-filter-label">${t('favorite.filter')} (0)</span>
  `
  nav.parentNode.insertBefore(btn, nav)
}

export const initFavorites = (categories) => {
  // Single delegated handler for every star button on the page.
  document.addEventListener('click', handleStarClick, true)

  // Insert favorites filter button into each sidebar.
  insertFilterButton('sidebar-parts', 'parts')
  insertFilterButton('sidebar-glossary', 'glossary')

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-fav-filter]')
    if (!btn) return
    setFilterMode(!isFilterMode())
    applyFilter(categories)
    updateFilterButtonsState()
  })

  // When favorites change, re-sync card stars (other cards with same key)
  // and refresh the filter view if active.
  onChange(() => {
    // Sync all stars on all rendered cards to match storage.
    document.querySelectorAll('[data-fav-toggle]').forEach((b) => {
      const key = b.getAttribute('data-fav-key')
      updateCardStar(b, isFavorite(key))
    })
    if (isFilterMode()) {
      applyFilter(categories)
    }
    updateFilterButtonsState()
  })

  updateFilterButtonsState()
}

/**
 * Re-apply the filter after the glossary content is re-rendered
 * (e.g. on language toggle which rebuilds the sidebar).
 */
export const refreshFavoritesView = (categories) => {
  insertFilterButton('sidebar-parts', 'parts')
  insertFilterButton('sidebar-glossary', 'glossary')
  if (isFilterMode()) applyFilter(categories)
  updateFilterButtonsState()
}
