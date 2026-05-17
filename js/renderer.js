/**
 * Renderer module.
 * Creates and inserts glossary content (category sections and term cards)
 * into the DOM, with scroll-triggered visibility animations.
 */

import { slugify, escapeHtml, toTermId } from './utils.js'
import { getDemoHTML, hasDemo, initDemoInteractions } from '../demos/registry.js'

/**
 * Create a term card element.
 *
 * @param {Object} term - Term data { name, desc }
 * @param {string} categoryId - Parent category identifier
 * @returns {HTMLElement} The term card DOM element
 */
export const renderTermCard = (term, categoryId) => {
  const termId = toTermId(term.name)
  const card = document.createElement('div')
  card.className = 'term-card'
  card.setAttribute('data-term-id', `${categoryId}-${termId}`)
  card.setAttribute('data-term-name', term.name)

  const showDemo = hasDemo(termId)
  const demoSection = showDemo
    ? `<div class="term-card-demo">${getDemoHTML(termId, categoryId)}</div>`
    : ''

  const displayName = term.nameJa || term.name

  card.innerHTML = `
    ${demoSection}
    <div class="term-card-body">
      <h3 class="term-card-name">${escapeHtml(displayName)}</h3>
      <p class="term-card-name-en">${escapeHtml(term.name)}</p>
      <p class="term-card-desc">${escapeHtml(term.desc || '')}</p>
    </div>
  `

  return card
}

/**
 * Create a category section element containing a header and term grid.
 *
 * @param {Object} category - Category data (id, title, number, terms)
 * @param {number} index - Zero-based category index
 * @returns {HTMLElement} The category section DOM element
 */
export const renderCategory = (category, index) => {
  const section = document.createElement('section')
  section.className = 'category-section'
  section.id = `category-${slugify(category.id)}`

  const number = String(index + 1).padStart(2, '0')

  const header = document.createElement('div')
  header.className = 'category-header'
  header.innerHTML = `
    <h2 class="category-title">
      <span class="category-number">${number}</span>
      ${escapeHtml(category.title)}
    </h2>
    ${
      category.description
        ? `<p class="category-description">${escapeHtml(category.description)}</p>`
        : ''
    }
  `

  const grid = document.createElement('div')
  grid.className = 'term-grid'

  const terms = category.terms || []
  terms.forEach((term) => {
    const card = renderTermCard(term, category.id)
    grid.appendChild(card)
  })

  section.appendChild(header)
  section.appendChild(grid)

  return section
}

/**
 * Observe term cards and add the 'visible' class when they scroll into view.
 *
 * @param {HTMLElement} container - The container holding all cards
 */
const observeCards = (container) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )

  const cards = container.querySelectorAll('.term-card')
  cards.forEach((card) => observer.observe(card))
}

/**
 * Render the full glossary into the given container.
 *
 * @param {Array} categories - Array of category objects
 * @param {HTMLElement} container - DOM element to render into
 */
export const renderGlossary = (categories, container) => {
  // Build all sections in a document fragment for a single reflow
  const fragment = document.createDocumentFragment()

  categories.forEach((category, index) => {
    const section = renderCategory(category, index)
    fragment.appendChild(section)
  })

  // Clear and append
  container.innerHTML = ''
  container.appendChild(fragment)

  // Start observing cards for entrance animation
  observeCards(container)

  // Set up interactive demo handlers
  initDemoInteractions()
}
