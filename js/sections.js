/**
 * Section switcher.
 * Toggles between "UIパーツ集" (parts) and "UI用語集" (glossary) views.
 */

/**
 * Determine which top-level section a category belongs to.
 *
 * @param {Object} category
 * @returns {'parts'|'glossary'}
 */
export const getCategorySection = (category) => {
  if (category && typeof category.id === 'string' && category.id.startsWith('ui-parts')) {
    return 'parts'
  }
  return 'glossary'
}

import { t } from './i18n.js'

const STORAGE_KEY = 'uiGlossary.section'

let currentSection = 'parts'
let onChangeCallback = null

const applySectionToDom = (section) => {
  document.body.setAttribute('data-section', section)

  // Show exactly one sidebar
  const sidebarParts = document.getElementById('sidebar-parts')
  const sidebarGlossary = document.getElementById('sidebar-glossary')
  if (sidebarParts) sidebarParts.hidden = section !== 'parts'
  if (sidebarGlossary) sidebarGlossary.hidden = section !== 'glossary'

  // Close any open mobile drawer when switching
  document.querySelectorAll('.sidebar.open').forEach((s) => s.classList.remove('open'))

  // Glossary content sections
  document.querySelectorAll('.category-section').forEach((sec) => {
    const secSection = sec.getAttribute('data-section') || 'glossary'
    sec.hidden = secSection !== section
  })

  // Tab pressed state
  document.querySelectorAll('.top-bar-tab').forEach((tab) => {
    const tabSection = tab.getAttribute('data-section')
    tab.setAttribute('aria-pressed', tabSection === section ? 'true' : 'false')
  })
}

const persistSection = (section) => {
  try {
    localStorage.setItem(STORAGE_KEY, section)
  } catch (_) {
    /* ignore */
  }
  // Reflect in URL hash for shareability (without breaking category hash links)
  const hash = window.location.hash
  if (!hash || hash === '#parts' || hash === '#glossary') {
    history.replaceState(null, '', `#${section}`)
  }
}

const readInitialSection = () => {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'parts' || hash === 'glossary') {
    return hash
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'parts' || stored === 'glossary') {
      return stored
    }
  } catch (_) {
    /* ignore */
  }
  return 'parts'
}

/**
 * Switch to the given section.
 */
export const setSection = (section, { skipScroll = false } = {}) => {
  if (section !== 'parts' && section !== 'glossary') {
    return
  }
  const sectionChanged = section !== currentSection
  currentSection = section
  applySectionToDom(section)
  persistSection(section)

  // Clear any active search when actually switching sections so the user
  // starts fresh in the new section.
  if (sectionChanged) {
    ;['search-input-parts', 'search-input-glossary'].forEach((id) => {
      const input = document.getElementById(id)
      if (input && input.value) {
        input.value = ''
        input.dispatchEvent(new Event('input', { bubbles: true }))
      }
    })
  }

  if (!skipScroll) {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  if (typeof onChangeCallback === 'function') {
    onChangeCallback(section)
  }
}

export const getCurrentSection = () => currentSection

/**
 * Initialize the section switcher.
 *
 * @param {Object} options
 * @param {Function} options.onChange - called whenever section changes
 */
export const initSections = ({ onChange } = {}) => {
  onChangeCallback = onChange || null

  document.querySelectorAll('.top-bar-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const sec = tab.getAttribute('data-section')
      if (sec && sec !== currentSection) {
        setSection(sec)
      }
    })
  })

  const initial = readInitialSection()
  setSection(initial, { skipScroll: true })
}
