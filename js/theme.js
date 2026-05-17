/**
 * Theme toggle module.
 * Manages light/dark theme switching with localStorage persistence.
 */

const STORAGE_KEY = 'ui-glossary-theme'
const DARK = 'dark'
const LIGHT = 'light'

/**
 * Read the saved theme preference from localStorage.
 *
 * @returns {string|null} Saved theme or null
 */
const getSavedTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Persist the current theme to localStorage.
 *
 * @param {string} theme - 'light' or 'dark'
 */
const saveTheme = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage unavailable — silently ignore
  }
}

/**
 * Apply the given theme to the document.
 *
 * @param {string} theme - 'light' or 'dark'
 */
const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
}

/**
 * Determine the current active theme from the document attribute.
 *
 * @returns {string} Current theme
 */
const getCurrentTheme = () => {
  return document.documentElement.getAttribute('data-theme') || LIGHT
}

/**
 * Initialize the theme system.
 * Reads saved preference, applies it, and sets up the toggle button.
 */
export const initTheme = () => {
  const saved = getSavedTheme()
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const initialTheme = saved || (prefersDark ? DARK : LIGHT)

  applyTheme(initialTheme)

  const toggleButton = document.getElementById('theme-toggle')
  if (!toggleButton) {
    return
  }

  toggleButton.addEventListener('click', () => {
    const next = getCurrentTheme() === DARK ? LIGHT : DARK
    applyTheme(next)
    saveTheme(next)
  })
}
