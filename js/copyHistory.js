/**
 * Copy history store.
 * Records up to MAX_ENTRIES of recently copied (categoryId-termId, type) pairs
 * in localStorage and broadcasts changes so the sidebar list can re-render.
 */

const STORAGE_KEY = 'uiGlossary.copyHistory'
const MAX_ENTRIES = 8

let cache = null
const listeners = new Set()

const load = () => {
  if (cache) return cache
  cache = []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const arr = JSON.parse(raw)
      if (Array.isArray(arr)) cache = arr.slice(0, MAX_ENTRIES)
    }
  } catch (_) {
    /* ignore */
  }
  return cache
}

const save = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(load()))
  } catch (_) {
    /* ignore */
  }
}

const notify = () => {
  listeners.forEach((fn) => {
    try { fn() } catch (_) { /* ignore */ }
  })
}

/**
 * Record a copy event. Moves the entry to the top if it already exists.
 *
 * @param {string} key - categoryId-termId
 * @param {'code'|'prompt'} type
 */
export const recordCopy = (key, type) => {
  if (!key) return
  const list = load()
  const idx = list.findIndex((e) => e.key === key && e.type === type)
  if (idx !== -1) list.splice(idx, 1)
  list.unshift({ key, type, at: Date.now() })
  if (list.length > MAX_ENTRIES) list.length = MAX_ENTRIES
  cache = list
  save()
  notify()
}

export const getHistory = () => load().slice()

export const clearHistory = () => {
  cache = []
  save()
  notify()
}

export const onChange = (fn) => {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
