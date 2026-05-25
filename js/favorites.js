/**
 * Favorites store.
 * Persists the set of starred term keys (categoryId-termId) to localStorage
 * and broadcasts changes to subscribers (cards, modal, sidebar filter).
 */

const STORAGE_KEY = 'uiGlossary.favorites'

let cache = null
const listeners = new Set()
let filterMode = false

const load = () => {
  if (cache) return cache
  cache = new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const arr = JSON.parse(raw)
      if (Array.isArray(arr)) arr.forEach((k) => cache.add(k))
    }
  } catch (_) {
    /* ignore */
  }
  return cache
}

const save = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...load()]))
  } catch (_) {
    /* ignore */
  }
}

const notify = () => {
  listeners.forEach((fn) => {
    try { fn() } catch (_) { /* ignore */ }
  })
}

export const isFavorite = (key) => load().has(key)

export const toggleFavorite = (key) => {
  if (!key) return false
  const set = load()
  if (set.has(key)) {
    set.delete(key)
  } else {
    set.add(key)
  }
  save()
  notify()
  return set.has(key)
}

export const getFavorites = () => [...load()]

export const onChange = (fn) => {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

/**
 * Filter mode — when true, only favourited cards are displayed.
 * Search and section toggles take precedence; favourites is an extra filter.
 */
export const isFilterMode = () => filterMode

export const setFilterMode = (on) => {
  filterMode = Boolean(on)
  notify()
}
