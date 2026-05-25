/**
 * Command palette.
 * A Cmd/Ctrl+K (and "/" while not editing) global launcher that fuzzy-searches
 * across every part and glossary term and opens the term modal on selection.
 */

import { toTermId, escapeHtml } from './utils.js'
import { categoryDisplay, termDisplay, t, getLang } from './i18n.js'
import { getCategorySection, setSection, getCurrentSection } from './sections.js'

const MAX_RESULTS = 18
const RECENT_KEY = 'uiGlossary.paletteRecent'
const RECENT_MAX = 8

let entries = [] // { key, term, category, section, haystack }
let openTermFn = null
let paletteEl = null
let inputEl = null
let listEl = null
let emptyEl = null
let hintEl = null
let activeIndex = 0
let currentResults = []
let lastFocused = null

const loadRecent = () => {
  try {
    const raw = localStorage.getItem(RECENT_KEY)
    if (!raw) return []
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr.slice(0, RECENT_MAX) : []
  } catch (_) {
    return []
  }
}

const saveRecent = (list) => {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, RECENT_MAX)))
  } catch (_) {
    /* ignore */
  }
}

const recordRecent = (key) => {
  const list = loadRecent().filter((k) => k !== key)
  list.unshift(key)
  saveRecent(list)
}

const buildEntries = (categories) => {
  const out = []
  categories.forEach((category) => {
    const section = getCategorySection(category)
    const terms = category.terms || []
    terms.forEach((term) => {
      const key = `${category.id}-${toTermId(term.name)}`
      const haystack = [
        term.name,
        term.nameJa,
        term.desc,
        term.descEn,
        category.title,
        category.titleEn,
      ]
        .filter(Boolean)
        .join(' — ')
        .toLowerCase()
      out.push({ key, term, category, section, haystack })
    })
  })
  return out
}

/**
 * Lightweight scoring: prefer exact prefix on name, then word-boundary,
 * then a subsequence (fuzzy) match. Score is small = better.
 */
const scoreEntry = (entry, queryLower) => {
  if (!queryLower) return 0
  const name = (entry.term.nameJa || entry.term.name || '').toLowerCase()
  const nameEn = (entry.term.name || '').toLowerCase()

  if (name.startsWith(queryLower) || nameEn.startsWith(queryLower)) return 1
  // word boundary match
  if (
    name.split(/[\s　・·\-_/]/).some((w) => w.startsWith(queryLower)) ||
    nameEn.split(/\s+/).some((w) => w.startsWith(queryLower))
  ) {
    return 2
  }
  if (name.includes(queryLower) || nameEn.includes(queryLower)) return 3
  if (entry.haystack.includes(queryLower)) return 4
  // Subsequence test (Cmd-K style)
  let i = 0
  for (const ch of entry.haystack) {
    if (ch === queryLower[i]) i++
    if (i === queryLower.length) return 5
  }
  return -1
}

const filterEntries = (query) => {
  const q = query.trim().toLowerCase()
  if (!q) {
    const recent = loadRecent()
    const recentList = recent
      .map((k) => entries.find((e) => e.key === k))
      .filter(Boolean)
    if (recentList.length > 0) return recentList.slice(0, MAX_RESULTS)
    return entries.slice(0, MAX_RESULTS)
  }
  const scored = []
  for (const entry of entries) {
    const s = scoreEntry(entry, q)
    if (s > 0) scored.push({ entry, score: s })
  }
  scored.sort((a, b) => a.score - b.score)
  return scored.slice(0, MAX_RESULTS).map((s) => s.entry)
}

const highlight = (text, query) => {
  if (!query) return escapeHtml(text)
  const lower = text.toLowerCase()
  const q = query.toLowerCase()
  const idx = lower.indexOf(q)
  if (idx === -1) return escapeHtml(text)
  return (
    escapeHtml(text.slice(0, idx)) +
    `<mark>${escapeHtml(text.slice(idx, idx + q.length))}</mark>` +
    escapeHtml(text.slice(idx + q.length))
  )
}

const renderResults = (query) => {
  currentResults = filterEntries(query)
  if (currentResults.length === 0) {
    listEl.innerHTML = ''
    listEl.hidden = true
    emptyEl.hidden = false
    activeIndex = -1
    return
  }
  listEl.hidden = false
  emptyEl.hidden = true
  const lang = getLang()
  const recentKeys = !query.trim() ? new Set(loadRecent()) : new Set()

  listEl.innerHTML = currentResults
    .map((e, i) => {
      const { primary, secondary } = termDisplay(e.term)
      const cat = categoryDisplay(e.category).title
      const sectionBadge =
        e.section === 'parts'
          ? lang === 'en'
            ? 'PARTS'
            : 'パーツ'
          : lang === 'en'
            ? 'GLOSSARY'
            : '用語'
      const isRecent = recentKeys.has(e.key)
      return `
        <li class="cmdk-item${i === activeIndex ? ' is-active' : ''}"
            role="option"
            aria-selected="${i === activeIndex ? 'true' : 'false'}"
            data-cmdk-index="${i}"
            data-cmdk-key="${escapeHtml(e.key)}">
          <span class="cmdk-item__section cmdk-item__section--${e.section}">${sectionBadge}</span>
          <span class="cmdk-item__body">
            <span class="cmdk-item__name">${highlight(primary, query)}</span>
            <span class="cmdk-item__meta">${highlight(secondary, query)} <span class="cmdk-item__dot">·</span> ${escapeHtml(cat)}</span>
          </span>
          ${isRecent ? `<span class="cmdk-item__tag" aria-hidden="true">${lang === 'en' ? 'Recent' : '最近'}</span>` : ''}
          <span class="cmdk-item__enter" aria-hidden="true">↵</span>
        </li>
      `
    })
    .join('')
  if (activeIndex >= currentResults.length) activeIndex = 0
  if (activeIndex < 0) activeIndex = 0
  scrollActiveIntoView()
}

const scrollActiveIntoView = () => {
  const active = listEl.querySelector('.cmdk-item.is-active')
  if (active && typeof active.scrollIntoView === 'function') {
    active.scrollIntoView({ block: 'nearest' })
  }
}

const updateActiveAttribute = () => {
  listEl.querySelectorAll('.cmdk-item').forEach((el, i) => {
    el.classList.toggle('is-active', i === activeIndex)
    el.setAttribute('aria-selected', i === activeIndex ? 'true' : 'false')
  })
  scrollActiveIntoView()
}

const move = (delta) => {
  if (currentResults.length === 0) return
  activeIndex = (activeIndex + delta + currentResults.length) % currentResults.length
  updateActiveAttribute()
}

const choose = (index) => {
  const entry = currentResults[index]
  if (!entry || !openTermFn) return
  // Switch section if the chosen entry lives elsewhere — otherwise the modal
  // would open but be hidden behind a different section view.
  if (entry.section !== getCurrentSection()) {
    setSection(entry.section, { skipScroll: true })
  }
  recordRecent(entry.key)
  close()
  // Defer slightly so section switch DOM updates settle.
  setTimeout(() => openTermFn(entry.category.id, toTermId(entry.term.name)), 0)
}

const buildPaletteDom = () => {
  if (paletteEl) return paletteEl
  const wrap = document.createElement('div')
  wrap.id = 'cmdk-palette'
  wrap.className = 'cmdk-palette'
  wrap.hidden = true
  wrap.setAttribute('role', 'dialog')
  wrap.setAttribute('aria-modal', 'true')
  wrap.setAttribute('aria-label', t('cmdk.title'))
  wrap.innerHTML = `
    <div class="cmdk-backdrop" data-cmdk-close></div>
    <div class="cmdk-dialog" role="document">
      <div class="cmdk-input-row">
        <svg class="cmdk-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
        <input id="cmdk-input" class="cmdk-input" type="text"
               placeholder="${escapeHtml(t('cmdk.placeholder'))}"
               aria-label="${escapeHtml(t('cmdk.placeholder'))}"
               aria-controls="cmdk-list"
               aria-autocomplete="list"
               autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
        <button type="button" class="cmdk-close-btn" data-cmdk-close aria-label="${escapeHtml(t('modal.close'))}">Esc</button>
      </div>
      <ul id="cmdk-list" class="cmdk-list" role="listbox" aria-label="${escapeHtml(t('cmdk.title'))}"></ul>
      <div class="cmdk-empty" hidden>
        <p>${escapeHtml(t('cmdk.empty'))}</p>
      </div>
      <div class="cmdk-hint">
        <span><kbd>↑</kbd><kbd>↓</kbd> ${escapeHtml(t('cmdk.hint.navigate'))}</span>
        <span><kbd>↵</kbd> ${escapeHtml(t('cmdk.hint.open'))}</span>
        <span><kbd>Esc</kbd> ${escapeHtml(t('cmdk.hint.close'))}</span>
      </div>
    </div>
  `
  document.body.appendChild(wrap)
  paletteEl = wrap
  inputEl = wrap.querySelector('#cmdk-input')
  listEl = wrap.querySelector('#cmdk-list')
  emptyEl = wrap.querySelector('.cmdk-empty')
  hintEl = wrap.querySelector('.cmdk-hint')

  wrap.querySelectorAll('[data-cmdk-close]').forEach((el) => {
    el.addEventListener('click', close)
  })

  inputEl.addEventListener('input', (e) => {
    activeIndex = 0
    renderResults(e.target.value)
  })

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      move(+1)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      move(-1)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (activeIndex >= 0) choose(activeIndex)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      close()
    } else if (e.key === 'Home') {
      e.preventDefault()
      activeIndex = 0
      updateActiveAttribute()
    } else if (e.key === 'End') {
      e.preventDefault()
      activeIndex = Math.max(0, currentResults.length - 1)
      updateActiveAttribute()
    }
  })

  listEl.addEventListener('mousemove', (e) => {
    const item = e.target.closest('.cmdk-item')
    if (!item) return
    const idx = Number(item.getAttribute('data-cmdk-index'))
    if (!Number.isNaN(idx) && idx !== activeIndex) {
      activeIndex = idx
      updateActiveAttribute()
    }
  })

  listEl.addEventListener('click', (e) => {
    const item = e.target.closest('.cmdk-item')
    if (!item) return
    const idx = Number(item.getAttribute('data-cmdk-index'))
    if (!Number.isNaN(idx)) choose(idx)
  })

  return wrap
}

const open = () => {
  buildPaletteDom()
  if (!paletteEl.hidden) {
    inputEl.focus()
    inputEl.select()
    return
  }
  lastFocused = document.activeElement
  paletteEl.hidden = false
  document.body.classList.add('cmdk-open')
  requestAnimationFrame(() => paletteEl.classList.add('is-open'))
  inputEl.value = ''
  activeIndex = 0
  renderResults('')
  // focus after the transition starts so the keyboard pops cleanly
  setTimeout(() => inputEl.focus(), 10)
}

const close = () => {
  if (!paletteEl || paletteEl.hidden) return
  paletteEl.classList.remove('is-open')
  document.body.classList.remove('cmdk-open')
  const finish = () => {
    paletteEl.hidden = true
    paletteEl.removeEventListener('transitionend', finish)
  }
  paletteEl.addEventListener('transitionend', finish)
  if (lastFocused && typeof lastFocused.focus === 'function') {
    lastFocused.focus()
  }
  lastFocused = null
}

export const openPalette = () => open()
export const closePalette = () => close()

/**
 * Initialize the command palette.
 * @param {Array} categories
 * @param {(categoryId: string, termId: string) => void} openTerm
 */
export const initCommandPalette = (categories, openTerm) => {
  entries = buildEntries(categories)
  openTermFn = openTerm
  // Pre-build DOM so it's ready on first shortcut
  buildPaletteDom()

  document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K — primary trigger
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault()
      open()
      return
    }
    // "/" — like GitHub / Linear (only when not editing)
    if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const tag = (e.target && e.target.tagName) || ''
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (e.target && e.target.isContentEditable) return
      e.preventDefault()
      open()
    }
  })
}

/**
 * Re-index entries (called after language change so labels rebuild fresh).
 */
export const refreshPalette = (categories) => {
  entries = buildEntries(categories)
  // Update palette-static labels (placeholder, hint, etc.) to follow the
  // new language without rebuilding the whole DOM.
  if (paletteEl) {
    paletteEl.setAttribute('aria-label', t('cmdk.title'))
    if (inputEl) {
      inputEl.setAttribute('placeholder', t('cmdk.placeholder'))
      inputEl.setAttribute('aria-label', t('cmdk.placeholder'))
    }
    if (emptyEl) {
      const p = emptyEl.querySelector('p')
      if (p) p.textContent = t('cmdk.empty')
    }
    if (hintEl) {
      hintEl.innerHTML = `
        <span><kbd>↑</kbd><kbd>↓</kbd> ${escapeHtml(t('cmdk.hint.navigate'))}</span>
        <span><kbd>↵</kbd> ${escapeHtml(t('cmdk.hint.open'))}</span>
        <span><kbd>Esc</kbd> ${escapeHtml(t('cmdk.hint.close'))}</span>
      `
    }
  }
  // If currently open, re-render
  if (paletteEl && !paletteEl.hidden && inputEl) {
    renderResults(inputEl.value)
  }
}
