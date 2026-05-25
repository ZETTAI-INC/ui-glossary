/**
 * Renders the "Recently copied" panel inside each sidebar.
 * Each entry links straight back to the term modal via the router URL state.
 */

import { getHistory, onChange, clearHistory } from './copyHistory.js'
import { t, termDisplay } from './i18n.js'
import { escapeHtml, toTermId } from './utils.js'
import { getCategorySection } from './sections.js'
import { openTermViaRouter } from './router.js'

let termLookup = new Map()

const buildLookup = (categories) => {
  const map = new Map()
  categories.forEach((category) => {
    ;(category.terms || []).forEach((term) => {
      map.set(`${category.id}-${toTermId(term.name)}`, { term, category })
    })
  })
  return map
}

const renderItem = (entry) => {
  const lookup = termLookup.get(entry.key)
  if (!lookup) return null
  const { term } = lookup
  const { primary } = termDisplay(term)
  const li = document.createElement('li')
  li.className = 'copy-history__item'
  li.innerHTML = `
    <button type="button" class="copy-history__btn" data-history-key="${escapeHtml(entry.key)}">
      <span class="copy-history__type" aria-hidden="true">${entry.type === 'prompt' ? 'AI' : '〈/〉'}</span>
      <span class="copy-history__name">${escapeHtml(primary)}</span>
    </button>
  `
  return li
}

const renderInto = (panel, section) => {
  const list = panel.querySelector('.copy-history__list')
  const empty = panel.querySelector('.copy-history__empty')
  list.innerHTML = ''
  const entries = getHistory().filter((e) => {
    const lookup = termLookup.get(e.key)
    if (!lookup) return false
    return getCategorySection(lookup.category) === section
  })
  if (entries.length === 0) {
    if (empty) empty.hidden = false
    panel.classList.add('is-empty')
    return
  }
  if (empty) empty.hidden = true
  panel.classList.remove('is-empty')
  for (const e of entries) {
    const node = renderItem(e)
    if (node) list.appendChild(node)
  }
}

const insertPanel = (sidebarId, section) => {
  const sidebar = document.getElementById(sidebarId)
  if (!sidebar) return null
  let panel = sidebar.querySelector('[data-copy-history]')
  if (panel) return panel
  const nav = sidebar.querySelector('.sidebar-nav')
  if (!nav) return null
  panel = document.createElement('section')
  panel.className = 'copy-history is-empty'
  panel.setAttribute('data-copy-history', section)
  panel.innerHTML = `
    <div class="copy-history__head">
      <span class="copy-history__title">${escapeHtml(t('history.title'))}</span>
      <button type="button" class="copy-history__clear" aria-label="${escapeHtml(t('history.clear'))}">×</button>
    </div>
    <p class="copy-history__empty">${escapeHtml(t('history.empty'))}</p>
    <ul class="copy-history__list"></ul>
  `
  nav.parentNode.insertBefore(panel, nav)
  return panel
}

const refreshAll = () => {
  document.querySelectorAll('[data-copy-history]').forEach((panel) => {
    const section = panel.getAttribute('data-copy-history')
    renderInto(panel, section)
  })
}

export const initCopyHistory = (categories) => {
  termLookup = buildLookup(categories)
  insertPanel('sidebar-parts', 'parts')
  insertPanel('sidebar-glossary', 'glossary')
  refreshAll()

  // Click on a history item → open the modal via the router so the URL
  // and back-stack behave the same as a normal card click.
  document.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-history-key]')
    if (!btn) return
    const key = btn.getAttribute('data-history-key')
    const lookup = termLookup.get(key)
    if (!lookup) return
    openTermViaRouter(lookup.category.id, toTermId(lookup.term.name))
  })

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.copy-history__clear')
    if (!btn) return
    clearHistory()
  })

  onChange(refreshAll)
}

/**
 * Re-insert + refresh after the sidebar is rebuilt (e.g. language toggle).
 */
export const refreshCopyHistoryView = (categories) => {
  termLookup = buildLookup(categories)
  insertPanel('sidebar-parts', 'parts')
  insertPanel('sidebar-glossary', 'glossary')
  refreshAll()
}
