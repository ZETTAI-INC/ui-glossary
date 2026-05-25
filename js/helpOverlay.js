/**
 * Keyboard shortcuts help overlay.
 * Press "?" anywhere (outside form fields) to show the cheat sheet.
 */

import { t } from './i18n.js'
import { escapeHtml } from './utils.js'

let overlayEl = null
let lastFocused = null

const isMac =
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent || '')

const mod = () => (isMac ? '⌘' : 'Ctrl')

const renderShortcuts = () => {
  const rows = [
    { keys: [mod(), 'K'], desc: t('help.shortcut.palette') },
    { keys: ['/'], desc: t('help.shortcut.palette') },
    { keys: ['['], desc: t('help.shortcut.sidebar') },
    { keys: ['←', '→'], desc: t('help.shortcut.prevNext') },
    { keys: ['Esc'], desc: t('help.shortcut.close') },
    { keys: ['?'], desc: t('help.shortcut.help') },
  ]
  return rows
    .map(
      (r) =>
        `<dt>${r.keys.map((k) => `<kbd>${escapeHtml(k)}</kbd>`).join('<span class="help-plus">+</span>')}</dt>
         <dd>${escapeHtml(r.desc)}</dd>`
    )
    .join('')
}

const build = () => {
  if (overlayEl) return overlayEl
  const wrap = document.createElement('div')
  wrap.id = 'help-overlay'
  wrap.className = 'help-overlay'
  wrap.hidden = true
  wrap.setAttribute('role', 'dialog')
  wrap.setAttribute('aria-modal', 'true')
  wrap.setAttribute('aria-label', t('help.title'))
  wrap.innerHTML = `
    <div class="help-overlay__backdrop" data-help-close></div>
    <div class="help-overlay__panel" role="document">
      <button class="help-overlay__close" type="button" data-help-close aria-label="${escapeHtml(t('modal.close'))}">×</button>
      <h2 class="help-overlay__title">${escapeHtml(t('help.title'))}</h2>
      <dl class="help-overlay__list">${renderShortcuts()}</dl>
    </div>
  `
  document.body.appendChild(wrap)
  overlayEl = wrap
  wrap.querySelectorAll('[data-help-close]').forEach((el) => {
    el.addEventListener('click', close)
  })
  return wrap
}

const refresh = () => {
  if (!overlayEl) return
  overlayEl.setAttribute('aria-label', t('help.title'))
  const title = overlayEl.querySelector('.help-overlay__title')
  if (title) title.textContent = t('help.title')
  const list = overlayEl.querySelector('.help-overlay__list')
  if (list) list.innerHTML = renderShortcuts()
}

export const openHelp = () => {
  build()
  if (!overlayEl.hidden) return
  lastFocused = document.activeElement
  refresh()
  overlayEl.hidden = false
  requestAnimationFrame(() => overlayEl.classList.add('is-open'))
  const closeBtn = overlayEl.querySelector('.help-overlay__close')
  if (closeBtn) setTimeout(() => closeBtn.focus(), 10)
}

export const close = () => {
  if (!overlayEl || overlayEl.hidden) return
  overlayEl.classList.remove('is-open')
  const finish = () => {
    overlayEl.hidden = true
    overlayEl.removeEventListener('transitionend', finish)
  }
  overlayEl.addEventListener('transitionend', finish)
  if (lastFocused && typeof lastFocused.focus === 'function') {
    lastFocused.focus()
  }
  lastFocused = null
}

export const initHelpOverlay = () => {
  document.addEventListener('keydown', (e) => {
    // Escape closes overlay regardless of where focus is.
    if (e.key === 'Escape' && overlayEl && !overlayEl.hidden) {
      e.preventDefault()
      close()
      return
    }
    if (e.metaKey || e.ctrlKey || e.altKey) return
    const tag = (e.target && e.target.tagName) || ''
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
    if (e.target && e.target.isContentEditable) return
    // "?" is Shift+/ on most layouts. Match via e.key OR explicit Shift+Slash
    // to survive Japanese / kana keyboards where e.key sometimes differs.
    const isQuestion = e.key === '?' || (e.shiftKey && e.code === 'Slash')
    if (isQuestion) {
      e.preventDefault()
      if (overlayEl && !overlayEl.hidden) {
        close()
      } else {
        openHelp()
      }
    }
  })
}
