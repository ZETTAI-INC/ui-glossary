/**
 * Utility functions for the UI Glossary Gallery app.
 */

/**
 * Returns a debounced version of the given function.
 * The returned function delays invoking fn until after delay ms
 * have elapsed since the last invocation.
 *
 * @param {Function} fn - The function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (fn, delay) => {
  let timerId = null

  return (...args) => {
    if (timerId !== null) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}

/**
 * Convert text to a URL-safe slug.
 *
 * @param {string} text - The text to slugify
 * @returns {string} URL-safe slug
 */
export const slugify = (text) => {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[\s\u3000]+/g, '-')
    .replace(/[^\w\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Convert a UI term name to a registry-compatible ID.
 * Handles cases like "Floating Action Button / FAB" → "floating-action-button-fab"
 *
 * @param {string} name - The term name
 * @returns {string} Registry-compatible ID
 */
export const toTermId = (name) => {
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/\//g, ' ')
    .replace(/[\s\u3000]+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Escape HTML entities to prevent XSS.
 *
 * @param {string} text - The text to escape
 * @returns {string} Escaped HTML string
 */
export const escapeHtml = (text) => {
  const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }

  return String(text).replace(/[&<>"']/g, (char) => escapeMap[char])
}
