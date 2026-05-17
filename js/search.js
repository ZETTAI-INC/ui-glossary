/**
 * Search module.
 * Provides debounced full-text search across term names and descriptions,
 * with match highlighting and result count display.
 */

import { debounce, escapeHtml, toTermId } from './utils.js'

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
  return regex.test(term.name) || regex.test(term.nameJa || '') || regex.test(term.desc || '')
}

/**
 * Apply search results to the DOM by showing/hiding cards
 * and highlighting matching text.
 *
 * @param {string} query - The raw search query
 * @param {Array} categories - All category data
 */
const applySearch = (query, categories) => {
  const resultsInfo = document.getElementById('search-results-info')
  const clearButton = document.getElementById('search-clear')

  if (!query.trim()) {
    clearSearch(categories)
    return
  }

  // Show clear button
  if (clearButton) {
    clearButton.hidden = false
  }

  const regex = new RegExp(escapeRegExp(query.trim()), 'gi')
  let matchCount = 0

  categories.forEach((category) => {
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

        if (nameEl) {
          nameEl.innerHTML = highlightMatches(term.nameJa || term.name, regex)
        }
        if (nameEnEl) {
          nameEnEl.innerHTML = highlightMatches(term.name, regex)
        }
        if (descEl) {
          descEl.innerHTML = highlightMatches(term.desc || '', regex)
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
      <span class="result-count">${matchCount}</span>件の結果
      「${escapeHtml(query.trim())}」
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
  const clearButton = document.getElementById('search-clear')

  if (resultsInfo) {
    resultsInfo.hidden = true
    resultsInfo.innerHTML = ''
  }

  if (clearButton) {
    clearButton.hidden = true
  }

  categories.forEach((category) => {
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

      if (nameEl) {
        nameEl.textContent = term.nameJa || term.name
      }
      if (nameEnEl) {
        nameEnEl.textContent = term.name
      }
      if (descEl) {
        descEl.textContent = term.desc || ''
      }
    })
  })
}

/**
 * Initialize the search system.
 * Sets up debounced input listener, clear button, and results display.
 *
 * @param {Array} categories - Array of category objects
 */
export const initSearch = (categories) => {
  const searchInput = document.getElementById('search-input')
  const clearButton = document.getElementById('search-clear')

  if (!searchInput) {
    return
  }

  const debouncedSearch = debounce((query) => {
    applySearch(query, categories)
  }, DEBOUNCE_DELAY)

  searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value)
  })

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      searchInput.value = ''
      clearSearch(categories)
      searchInput.focus()
    })
  }
}
