/**
 * Sidebar navigation module.
 * Handles category navigation, active state, and mobile toggle.
 */

import { slugify } from './utils.js'

/**
 * Build the HTML string for a single sidebar nav item.
 *
 * @param {Object} category - Category data
 * @param {number} index - Zero-based index
 * @returns {string} HTML string
 */
const buildNavItemHtml = (category, index) => {
  const number = String(index + 1).padStart(2, '0')
  const termCount = category.terms ? category.terms.length : 0

  return `
    <div class="sidebar-nav-item"
         data-category-id="${slugify(category.id)}"
         role="button"
         tabindex="0">
      <span class="nav-number">${number}</span>
      <span class="nav-title">${category.title}</span>
      <span class="nav-count">${termCount}</span>
    </div>
  `
}

/**
 * Scroll smoothly to the category section matching the given id.
 *
 * @param {string} categoryId - The category identifier
 */
const scrollToCategory = (categoryId) => {
  const section = document.getElementById(`category-${categoryId}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Close the mobile sidebar.
 */
const closeSidebar = () => {
  const sidebar = document.getElementById('sidebar')
  if (sidebar) {
    sidebar.classList.remove('open')
  }
}

/**
 * Open the mobile sidebar.
 */
const openSidebar = () => {
  const sidebar = document.getElementById('sidebar')
  if (sidebar) {
    sidebar.classList.add('open')
  }
}

/**
 * Set up mobile toggle behavior for the sidebar.
 */
const setupMobileToggle = () => {
  const menuToggle = document.getElementById('menu-toggle')
  const overlay = document.getElementById('sidebar-overlay')

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar')
      if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar()
      } else {
        openSidebar()
      }
    })
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar)
  }
}

/**
 * Initialize the sidebar navigation.
 * Populates the nav with category links and sets up click handlers.
 *
 * @param {Array} categories - Array of category objects
 */
export const initSidebar = (categories) => {
  const nav = document.getElementById('sidebar-nav')
  if (!nav) {
    return
  }

  const html = categories
    .map((category, index) => buildNavItemHtml(category, index))
    .join('')

  nav.innerHTML = html

  // Update total term count in footer
  const totalTerms = categories.reduce(
    (sum, cat) => sum + (cat.terms ? cat.terms.length : 0),
    0
  )
  const termCountEl = document.getElementById('term-count')
  if (termCountEl) {
    termCountEl.textContent = `${totalTerms} terms`
  }

  // Attach click/keyboard handlers to nav items
  const navItems = nav.querySelectorAll('.sidebar-nav-item')
  navItems.forEach((item) => {
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

  setupMobileToggle()
}

/**
 * Highlight the sidebar nav item for the given category.
 * Removes active state from all other items.
 *
 * @param {string} categoryId - The category identifier to activate
 */
export const setActiveCategory = (categoryId) => {
  const nav = document.getElementById('sidebar-nav')
  if (!nav) {
    return
  }

  const items = nav.querySelectorAll('.sidebar-nav-item')
  items.forEach((item) => {
    const id = item.getAttribute('data-category-id')
    if (id === categoryId) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })

  // Update header section title
  const sectionHeader = document.getElementById('current-section')
  const activeItem = nav.querySelector(
    `.sidebar-nav-item[data-category-id="${categoryId}"]`
  )
  if (sectionHeader && activeItem) {
    const title = activeItem.querySelector('.nav-title')
    sectionHeader.textContent = title ? title.textContent : ''
  }
}
