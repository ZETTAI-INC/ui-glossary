/**
 * Tiny toast — bottom-center floating notification used for copy feedback etc.
 * Self-creates its DOM lazily.
 */

let toastEl = null
let timer = null

const ensure = () => {
  if (toastEl) return toastEl
  toastEl = document.createElement('div')
  toastEl.id = 'toast'
  toastEl.className = 'toast'
  toastEl.setAttribute('role', 'status')
  toastEl.setAttribute('aria-live', 'polite')
  toastEl.hidden = true
  document.body.appendChild(toastEl)
  return toastEl
}

/**
 * Show a toast with the given message.
 * @param {string} message
 * @param {{ kind?: 'success'|'error'|'info', duration?: number }} [opts]
 */
export const showToast = (message, opts = {}) => {
  const { kind = 'success', duration = 1700 } = opts
  const el = ensure()
  el.className = `toast toast--${kind}`
  el.textContent = message
  el.hidden = false
  requestAnimationFrame(() => el.classList.add('is-visible'))
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    el.classList.remove('is-visible')
    const cleanup = () => {
      el.hidden = true
      el.removeEventListener('transitionend', cleanup)
    }
    el.addEventListener('transitionend', cleanup)
  }, duration)
}
