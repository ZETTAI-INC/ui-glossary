/**
 * Main entry point for the UI Glossary Gallery app.
 * Imports all modules and initializes the application on DOMContentLoaded.
 */

import { categories } from '../data/index.js'
import { renderGlossary } from './renderer.js'
import { initSidebar, setActiveCategory } from './sidebar.js'
import { initSearch } from './search.js'
import { initTheme } from './theme.js'
import { slugify } from './utils.js'

/**
 * Set up an IntersectionObserver to track which category section
 * is currently in view and update the sidebar active state.
 *
 * @param {Array} cats - Array of category objects
 */
const setupCategoryObserver = (cats) => {
  const sections = cats
    .map((cat) => document.getElementById(`category-${slugify(cat.id)}`))
    .filter(Boolean)

  if (sections.length === 0) {
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      // Find the most visible entry that is intersecting
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length > 0) {
        const sectionId = visible[0].target.id.replace('category-', '')
        setActiveCategory(sectionId)
      }
    },
    { threshold: [0, 0.25, 0.5], rootMargin: '-80px 0px -40% 0px' }
  )

  sections.forEach((section) => observer.observe(section))
}

/**
 * Set up the back-to-top button visibility and click handler.
 */
const setupBackToTop = () => {
  const button = document.getElementById('back-to-top')
  if (!button) {
    return
  }

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      button.hidden = false
      button.classList.add('visible')
    } else {
      button.classList.remove('visible')
      // Delay hiding to allow fade-out transition
      setTimeout(() => {
        if (!button.classList.contains('visible')) {
          button.hidden = true
        }
      }, 300)
    }
  }

  window.addEventListener('scroll', toggleVisibility, { passive: true })

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

/**
 * Set up the grid/list view toggle button.
 */
const setupViewToggle = () => {
  const button = document.getElementById('view-toggle')
  const content = document.getElementById('glossary-content')
  if (!button || !content) {
    return
  }

  button.addEventListener('click', () => {
    const grids = content.querySelectorAll('.term-grid')
    const isListMode = button.classList.toggle('list-mode')

    grids.forEach((grid) => {
      if (isListMode) {
        grid.classList.add('list-mode')
      } else {
        grid.classList.remove('list-mode')
      }
    })
  })
}

/**
 * Initialize the entire application.
 */
const init = () => {
  const container = document.getElementById('glossary-content')
  if (!container) {
    return
  }

  // Initialize sidebar navigation
  initSidebar(categories)

  // Render all glossary content
  renderGlossary(categories, container)

  // Initialize search
  initSearch(categories)

  // Initialize theme toggle
  initTheme()

  // Set up back-to-top button
  setupBackToTop()

  // Set up grid/list view toggle
  setupViewToggle()

  // Track active category via scroll observation
  setupCategoryObserver(categories)

  // Activate the first category initially
  if (categories.length > 0) {
    setActiveCategory(slugify(categories[0].id))
  }
}

document.addEventListener('DOMContentLoaded', init)
