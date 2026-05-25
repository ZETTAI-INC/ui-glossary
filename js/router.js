/**
 * URL state router.
 * Synchronises modal-open state and search query with the URL search params
 * so individual terms and filtered views become shareable / bookmarkable.
 *
 * URL shape:
 *   hash:   #parts | #glossary   (existing — owned by sections.js)
 *   search: ?term=<categoryId>/<termId>   (modal open state)
 *           ?q=<query>                    (search query, scoped to section)
 */

const KEY_TERM = 'term'
const KEY_QUERY = 'q'

let modalHandlers = {
  open: null,    // (categoryId, termId) => void
  close: null,   // () => void
  isOpenWith: null, // (categoryId, termId) => boolean
}
let searchHandlers = {
  apply: null,   // (query) => void
  clear: null,   // () => void
  getCurrent: null, // () => string
}

const parseTermParam = (raw) => {
  if (!raw) return null
  const idx = raw.indexOf('/')
  if (idx <= 0) return null
  return { categoryId: raw.slice(0, idx), termId: raw.slice(idx + 1) }
}

export const readUrlState = () => {
  const params = new URLSearchParams(window.location.search)
  return {
    term: parseTermParam(params.get(KEY_TERM)),
    query: params.get(KEY_QUERY) || '',
  }
}

const buildUrl = (mutations) => {
  const params = new URLSearchParams(window.location.search)
  for (const [k, v] of Object.entries(mutations)) {
    if (v === null || v === undefined || v === '') {
      params.delete(k)
    } else {
      params.set(k, v)
    }
  }
  const qs = params.toString()
  return `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`
}

/**
 * Push a new history entry for a freshly opened modal.
 * Call this when the user opens the modal interactively.
 */
export const pushModalState = (categoryId, termId) => {
  const url = buildUrl({ [KEY_TERM]: `${categoryId}/${termId}` })
  history.pushState({ modal: `${categoryId}/${termId}` }, '', url)
}

/**
 * Replace the current entry to drop the modal param.
 * Use this when the modal closes without a popstate.
 */
export const replaceModalCleared = () => {
  const url = buildUrl({ [KEY_TERM]: null })
  history.replaceState({ ...(history.state || {}), modal: null }, '', url)
}

/**
 * Replace the current entry's `?q=` so search state is shareable
 * without polluting the back stack on every keystroke.
 */
export const replaceQueryState = (query) => {
  const url = buildUrl({ [KEY_QUERY]: query || null })
  history.replaceState(history.state || {}, '', url)
}

export const registerModalHandlers = (handlers) => {
  modalHandlers = { ...modalHandlers, ...handlers }
}

export const registerSearchHandlers = (handlers) => {
  searchHandlers = { ...searchHandlers, ...handlers }
}

/**
 * Sync UI state from the current URL.
 * Called on initial load and whenever popstate fires.
 */
const syncFromUrl = ({ skipQuerySync = false } = {}) => {
  const { term, query } = readUrlState()

  // Search: keep input + filter aligned with ?q.
  if (!skipQuerySync && searchHandlers.apply && searchHandlers.getCurrent) {
    const current = searchHandlers.getCurrent()
    if (query && query !== current) {
      searchHandlers.apply(query)
    } else if (!query && current && searchHandlers.clear) {
      searchHandlers.clear()
    }
  }

  // Modal: open / close to match ?term.
  if (term && modalHandlers.open) {
    const alreadyOpen =
      modalHandlers.isOpenWith &&
      modalHandlers.isOpenWith(term.categoryId, term.termId)
    if (!alreadyOpen) {
      modalHandlers.open(term.categoryId, term.termId)
    }
  } else if (!term && modalHandlers.close) {
    modalHandlers.close()
  }
}

export const initRouter = () => {
  window.addEventListener('popstate', () => syncFromUrl())
  // Run once after handlers register so initial-load URLs are honoured.
  // Caller is responsible for invoking applyInitialUrlState() after init.
}

/**
 * Apply the URL state once at startup. Separate from initRouter so that
 * modal/search handlers can register before the first sync runs.
 */
export const applyInitialUrlState = () => {
  syncFromUrl()
}
