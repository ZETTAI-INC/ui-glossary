/**
 * Sidebar navigation module.
 * Two completely separate sidebars (UIパーツ集 / UI用語集) live in the DOM
 * side-by-side; one is shown at a time based on the active top-level section.
 */

import { slugify } from './utils.js'
import { getCategorySection } from './sections.js'
import { categoryDisplay, t } from './i18n.js'

const SECTION_TO_NAV_ID = {
  parts: 'sidebar-nav-parts',
  glossary: 'sidebar-nav-glossary',
}

const SECTION_TO_COUNT_ID = {
  parts: 'term-count-parts',
  glossary: 'term-count-glossary',
}

/**
 * Build the HTML string for a single sidebar nav item.
 */
const buildNavItemHtml = (category, index) => {
  const number = String(index + 1).padStart(2, '0')
  const termCount = category.terms ? category.terms.length : 0
  const section = getCategorySection(category)
  const { title } = categoryDisplay(category)

  return `
    <div class="sidebar-nav-item"
         data-category-id="${slugify(category.id)}"
         data-section="${section}"
         role="button"
         tabindex="0">
      <span class="nav-number">${number}</span>
      <span class="nav-title">${title}</span>
      <span class="nav-count">${termCount}</span>
    </div>
  `
}

/**
 * Scroll smoothly to the category section matching the given id.
 */
const scrollToCategory = (categoryId) => {
  const section = document.getElementById(`category-${categoryId}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Close the mobile sidebar(s).
 */
const closeSidebar = () => {
  document.querySelectorAll('.sidebar').forEach((s) => s.classList.remove('open'))
}

/**
 * Open the mobile sidebar matching the active section.
 */
const openActiveSidebar = () => {
  const section = document.body.getAttribute('data-section') || 'parts'
  const id = section === 'glossary' ? 'sidebar-glossary' : 'sidebar-parts'
  const el = document.getElementById(id)
  if (el) el.classList.add('open')
}

const setupMobileToggle = () => {
  const menuToggle = document.getElementById('menu-toggle')
  const overlay = document.getElementById('sidebar-overlay')

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const anyOpen = document.querySelector('.sidebar.open')
      if (anyOpen) {
        closeSidebar()
      } else {
        openActiveSidebar()
      }
    })
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar)
  }
}

const attachItemHandlers = (navEl) => {
  navEl.querySelectorAll('.sidebar-nav-item').forEach((item) => {
    const categoryId = item.getAttribute('data-category-id')
    item.addEventListener('click', () => {
      scrollToCategory(categoryId)
      closeSidebar()
    })
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        scrollToCategory(categoryId)
        closeSidebar()
      }
    })
  })
}

/**
 * Initialize both sidebars. Each sidebar is populated only with the
 * categories belonging to its section.
 */
export const initSidebar = (categories) => {
  const grouped = { parts: [], glossary: [] }
  categories.forEach((cat) => {
    const sec = getCategorySection(cat)
    grouped[sec].push(cat)
  })

  ;['parts', 'glossary'].forEach((sec) => {
    const navEl = document.getElementById(SECTION_TO_NAV_ID[sec])
    if (!navEl) return
    const html = grouped[sec]
      .map((cat, idx) => buildNavItemHtml(cat, idx))
      .join('')
    navEl.innerHTML = html
    attachItemHandlers(navEl)

    const total = grouped[sec].reduce((n, c) => n + (c.terms?.length || 0), 0)
    const countEl = document.getElementById(SECTION_TO_COUNT_ID[sec])
    if (countEl) countEl.textContent = `${total} ${t('unit.terms')}`
  })

  setupMobileToggle()
}

/**
 * Highlight the sidebar nav item for the given category — in whichever
 * sidebar currently contains it.
 */
export const setActiveCategory = (categoryId) => {
  document.querySelectorAll('.sidebar-nav-item').forEach((item) => {
    const id = item.getAttribute('data-category-id')
    if (id === categoryId) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })

  const sectionHeader = document.getElementById('current-section')
  const activeItem = document.querySelector(
    `.sidebar-nav-item[data-category-id="${categoryId}"]`
  )
  if (sectionHeader && activeItem) {
    const title = activeItem.querySelector('.nav-title')
    sectionHeader.textContent = title ? title.textContent : ''
  }
}

export const refreshSidebar = (categories) => {
  initSidebar(categories)
}
