/**
 * Term detail modal.
 * Opens a modal showing a term's full explanation when a card is clicked.
 */

import { toTermId } from './utils.js'
import { getDemoHTML, hasDemo } from '../demos/registry.js'
import { categoryDisplay, termDisplay, getLang, t } from './i18n.js'
import { findShowcaseCode, buildIframeDoc } from './renderer.js'
import { getCategorySection } from './sections.js'
import {
  pushModalState,
  replaceModalState,
  replaceModalCleared,
  registerModalHandlers,
} from './router.js'
import { recordCopy } from './copyHistory.js'
import { showToast } from './toast.js'

const INTERACTIVE_DEMO_SELECTOR = [
  '[data-demo-toggle]',
  '[data-demo-radio-group]',
  '.demo-accordion-header',
  '.demo-dropdown-trigger',
  '.demo-dropdown-option',
  'button',
  'a',
  'input',
  'select',
  'textarea',
].join(',')

let termLookup = new Map()
// Ordered list of entry keys per section, so prev/next can step through
// the same section the current term belongs to.
let sectionOrder = { parts: [], glossary: [] }
let modalEl = null
let demoEl = null
let categoryEl = null
let nameEl = null
let nameEnEl = null
let descEl = null
let promptTextEl = null
let promptCopyBtn = null
let codePanelEl = null
let codeTextEl = null
let codeCopyBtn = null
let tabsEl = null
let tabPreviewBtn = null
let tabCodeBtn = null
let prevBtn = null
let nextBtn = null
let activeTab = 'preview'
let lastFocused = null
let copyResetTimer = null
let codeCopyResetTimer = null
let currentEntryKey = null
let viewportEl = null
let viewportButtons = []
let codePenBtn = null
let currentCode = ''
let currentTitle = ''
let savedScrollY = 0

const buildLookup = (categories) => {
  const map = new Map()
  const order = { parts: [], glossary: [] }
  categories.forEach((category) => {
    const sec = getCategorySection(category)
    const terms = category.terms || []
    terms.forEach((term) => {
      const key = `${category.id}-${toTermId(term.name)}`
      map.set(key, { term, category })
      if (order[sec]) order[sec].push(key)
    })
  })
  sectionOrder = order
  return map
}

const findNeighbour = (key, delta) => {
  if (!key) return null
  for (const sec of ['parts', 'glossary']) {
    const list = sectionOrder[sec] || []
    const idx = list.indexOf(key)
    if (idx === -1) continue
    const nextIdx = idx + delta
    if (nextIdx < 0 || nextIdx >= list.length) return null
    return list[nextIdx]
  }
  return null
}

const updateNavButtons = () => {
  if (!prevBtn || !nextBtn) return
  const prevKey = findNeighbour(currentEntryKey, -1)
  const nextKey = findNeighbour(currentEntryKey, +1)
  prevBtn.disabled = !prevKey
  nextBtn.disabled = !nextKey
}

/**
 * Render code text into a <pre> as a list of <span class="cm-line">,
 * one per line, so CSS counters can paint line numbers in the gutter.
 * Preserves whitespace; HTML-escapes content.
 */
const renderCodeWithLineNumbers = (preEl, raw) => {
  const text = String(raw || '')
  // Stash the original text so copy actions return clean source (no
  // zero-width-space placeholders, no extra spans).
  preEl.dataset.rawSource = text
  preEl.innerHTML = ''
  preEl.classList.add('with-line-numbers')
  const lines = text.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const span = document.createElement('span')
    span.className = 'cm-line'
    // Empty lines need a zero-width char to keep height visible.
    span.textContent = lines[i].length === 0 ? '​' : lines[i]
    preEl.appendChild(span)
    if (i < lines.length - 1) {
      preEl.appendChild(document.createTextNode('\n'))
    }
  }
}

const setViewport = (size) => {
  if (!demoEl) return
  const wrap = document.getElementById('term-modal-demo-wrap')
  if (wrap) wrap.setAttribute('data-viewport', size)
  viewportButtons.forEach((btn) => {
    const match = btn.getAttribute('data-viewport') === size
    btn.classList.toggle('is-active', match)
    btn.setAttribute('aria-pressed', match ? 'true' : 'false')
  })
}

/**
 * Build a "view in CodePen" prefill URL using their documented
 * data-prefill form-POST trick. We split the snippet into html / css / js
 * heuristically by tag.
 */
const splitForCodePen = (code) => {
  const raw = String(code || '')
  const cssMatches = [...raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
  const jsMatches = [...raw.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)]
  const css = cssMatches.map((m) => m[1].trim()).join('\n\n')
  const js = jsMatches.map((m) => m[1].trim()).join('\n\n')
  const html = raw
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .trim()
  return { html, css, js }
}

const openInCodePen = () => {
  if (!currentCode) return
  const { html, css, js } = splitForCodePen(currentCode)
  const data = {
    title: currentTitle || 'UI Parts snippet',
    html,
    css,
    js,
    editors: '111',
    layout: 'left',
  }
  // CodePen takes a JSON string in a hidden form field. We submit a form to
  // their endpoint so the snippet opens in a new tab.
  const form = document.createElement('form')
  form.action = 'https://codepen.io/pen/define'
  form.method = 'POST'
  form.target = '_blank'
  form.rel = 'noopener'
  form.style.display = 'none'
  const input = document.createElement('input')
  input.type = 'hidden'
  input.name = 'data'
  input.value = JSON.stringify(data)
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
  // form.appendChild then form.submit — but the &quot;-escaped trick must use
  // the live value, not the displayed attribute, so set value directly.
  input.value = JSON.stringify(data)
  form.appendChild(input)
  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}

const setTab = (tab) => {
  // 'preview' or 'code'. Falls back to preview when code tab is hidden.
  if (tab === 'code' && tabsEl && tabsEl.hidden) {
    tab = 'preview'
  }
  activeTab = tab
  if (tabPreviewBtn) {
    const active = tab === 'preview'
    tabPreviewBtn.classList.toggle('is-active', active)
    tabPreviewBtn.setAttribute('aria-selected', active ? 'true' : 'false')
  }
  if (tabCodeBtn) {
    const active = tab === 'code'
    tabCodeBtn.classList.toggle('is-active', active)
    tabCodeBtn.setAttribute('aria-selected', active ? 'true' : 'false')
  }
  const onPreview = tab === 'preview'
  if (demoEl) demoEl.hidden = !onPreview
  if (codePanelEl) codePanelEl.hidden = onPreview
  // Hide the whole demo-wrap (incl. viewport switcher) on code tab so
  // the panel can claim full height.
  const wrap = document.getElementById('term-modal-demo-wrap')
  if (wrap) wrap.hidden = !onPreview
}

const navigateModal = (delta) => {
  if (!modalEl || modalEl.hidden) return
  const targetKey = findNeighbour(currentEntryKey, delta)
  if (!targetKey) return
  const entry = termLookup.get(targetKey)
  if (!entry) return
  // Replace (don't push) URL state when stepping through prev/next so the
  // browser back button always returns to the page underneath — not to
  // every modal item the user happened to scroll past.
  openModal(entry, { replaceUrl: true })
}

/**
 * Build a copy-paste-friendly prompt that a user can hand to an AI
 * to implement or add the UI element to their project.
 */
const buildPrompt = (term, category) => {
  const lang = getLang()
  const nameEn = term.name
  const nameJa = term.nameJa || term.name
  const { title: categoryTitle } = categoryDisplay(category)

  if (lang === 'en') {
    const description = term.detailEn || term.descEn || term.detail || term.desc || ''
    return [
      `You are a frontend development assistant. Please help me add and implement the following UI component in my project — provide concrete code and usage guidance.`,
      ``,
      `## Target UI`,
      `- Name: ${nameEn} (${nameJa})`,
      `- Category: ${categoryTitle}`,
      ``,
      `## What it is`,
      description,
      ``,
      `## What I need from you`,
      `1. Show complete sample code I can drop in.`,
      `   - Default to plain HTML / CSS / vanilla JavaScript unless a framework is specified.`,
      `   - If I name React / Vue / Svelte etc., match that.`,
      `2. Make it responsive (mobile / tablet / desktop).`,
      `3. Make it accessible:`,
      `   - Keyboard support (Tab / Enter / Esc as appropriate)`,
      `   - Appropriate ARIA and role attributes`,
      `   - Don't rely on color alone for state`,
      `4. Cover all necessary visual states: hover / focus / active / disabled / error.`,
      `5. Use a color palette that works in both light and dark themes (prefer CSS variables).`,
      `6. Add short inline comments explaining the non-obvious choices.`,
      ``,
      `## Also tell me`,
      `- Pitfalls and common mistakes when using this component`,
      `- Microinteractions or details that improve usability`,
      `- How to drop it into an existing page (where to put HTML / which CSS to import)`,
      ``,
      `Feel free to ask first about my project setup (framework, design system) before proposing the implementation.`,
    ].join('\n')
  }

  const description = term.detail || term.desc || ''
  return [
    `あなたはフロントエンド開発のアシスタントです。次のUI要素を、私のプロジェクトに追加・実装するための具体的なコードと使い方を提案してください。`,
    ``,
    `## 対象のUI`,
    `- 名称: ${nameJa}(${nameEn})`,
    `- カテゴリ: ${categoryTitle}`,
    ``,
    `## このUIの概要`,
    description,
    ``,
    `## 実装してほしい内容`,
    `1. 完成形のサンプルコードを提示してください。`,
    `   - 指定がなければ HTML / CSS / 素のJavaScript で書いてください。`,
    `   - もしReact・Vue・Svelte等のフレームワーク指定があれば、それに合わせてください。`,
    `2. レスポンシブ対応(スマホ・タブレット・PC)してください。`,
    `3. アクセシビリティに配慮してください。`,
    `   - キーボード操作(Tab/Enter/Escなど)に対応`,
    `   - 必要なARIA属性・role属性を付与`,
    `   - 色だけに依存せず、状態が分かるようにする`,
    `4. ホバー / フォーカス / アクティブ / 無効 / エラーなど、必要な状態(ステート)を全て設計してください。`,
    `5. ライトテーマ / ダークテーマの両方で見やすい配色にしてください(CSS変数推奨)。`,
    `6. コードには簡潔なコメントを入れ、なぜそうしているか分かるようにしてください。`,
    ``,
    `## 追加で教えてほしいこと`,
    `- このUIを使うときの注意点・よくある失敗例`,
    `- ユーザビリティを高めるための工夫(マイクロインタラクションなど)`,
    `- 既存のページに組み込むときの導入手順(HTMLのどこに置く / どのCSSを読み込むなど)`,
    ``,
    `必要であれば、私のプロジェクトの構成(使用しているフレームワーク、デザインシステムなど)を質問してから提案を始めてください。`,
  ].join('\n')
}

const updateCopyButtonState = (state) => {
  if (!promptCopyBtn) {
    return
  }
  promptCopyBtn.classList.remove('is-copied', 'is-error')
  const label = promptCopyBtn.querySelector('.term-modal-prompt-copy-label')
  if (state === 'copied') {
    promptCopyBtn.classList.add('is-copied')
    if (label) label.textContent = t('modal.copied')
  } else if (state === 'error') {
    promptCopyBtn.classList.add('is-error')
    if (label) label.textContent = t('modal.copyFailed')
  } else {
    if (label) label.textContent = t('modal.copy')
  }
}

const updateCodeCopyButtonState = (state) => {
  if (!codeCopyBtn) {
    return
  }
  codeCopyBtn.classList.remove('is-copied', 'is-error')
  const label = codeCopyBtn.querySelector('.term-modal-code-copy-label')
  if (state === 'copied') {
    codeCopyBtn.classList.add('is-copied')
    if (label) label.textContent = t('modal.copied')
  } else if (state === 'error') {
    codeCopyBtn.classList.add('is-error')
    if (label) label.textContent = t('modal.copyFailed')
  } else {
    if (label) label.textContent = t('modal.copy')
  }
}

const copyToClipboard = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text)
    return
  }
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.top = '-1000px'
  document.body.appendChild(ta)
  ta.select()
  document.execCommand('copy')
  document.body.removeChild(ta)
}

const copyCodeToClipboard = async () => {
  if (!codeTextEl) {
    return
  }
  const text = codeTextEl.dataset.rawSource || codeTextEl.textContent || ''
  try {
    await copyToClipboard(text)
    updateCodeCopyButtonState('copied')
    showToast(t('toast.copied'), { kind: 'success' })
    if (currentEntryKey) recordCopy(currentEntryKey, 'code')
  } catch (err) {
    updateCodeCopyButtonState('error')
    showToast(t('toast.copyFailed'), { kind: 'error' })
  }
  if (codeCopyResetTimer) {
    clearTimeout(codeCopyResetTimer)
  }
  codeCopyResetTimer = setTimeout(() => updateCodeCopyButtonState('idle'), 2000)
}

const copyPromptToClipboard = async () => {
  if (!promptTextEl) {
    return
  }
  const text = promptTextEl.textContent || ''
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
    } else {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.top = '-1000px'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    updateCopyButtonState('copied')
    showToast(t('toast.copied'), { kind: 'success' })
    if (currentEntryKey) recordCopy(currentEntryKey, 'prompt')
  } catch (err) {
    updateCopyButtonState('error')
    showToast(t('toast.copyFailed'), { kind: 'error' })
  }
  if (copyResetTimer) {
    clearTimeout(copyResetTimer)
  }
  copyResetTimer = setTimeout(() => updateCopyButtonState('idle'), 2000)
}

const openModal = (entry, { skipUrlPush = false, replaceUrl = false } = {}) => {
  if (!modalEl || !entry) {
    return
  }

  const { term, category } = entry
  const termId = toTermId(term.name)
  const wasAlreadyOpen = !modalEl.hidden
  currentEntryKey = `${category.id}-${termId}`
  updateNavButtons()

  if (!skipUrlPush) {
    if (replaceUrl) {
      replaceModalState(category.id, termId)
    } else {
      pushModalState(category.id, termId)
    }
  }

  // Use the same code-based iframe preview as the card whenever possible,
  // so the modal visual matches the card. Fall back to the registry demo
  // for glossary concepts that have neither.
  demoEl.innerHTML = ''
  demoEl.classList.remove('term-modal-demo--iframe')
  const previewCode = findShowcaseCode(term)
  currentCode = previewCode || ''
  currentTitle = term.nameJa || term.name || ''
  if (previewCode) {
    demoEl.classList.add('term-modal-demo--iframe')
    const iframe = document.createElement('iframe')
    iframe.className = 'term-modal-iframe'
    iframe.title = `${term.name} preview`
    iframe.setAttribute('sandbox', 'allow-scripts')
    iframe.srcdoc = buildIframeDoc(previewCode, { interactive: true })
    demoEl.appendChild(iframe)
    if (viewportEl) {
      viewportEl.hidden = false
      setViewport('full')
    }
  } else if (hasDemo(termId)) {
    demoEl.innerHTML = getDemoHTML(termId, category.id)
    if (viewportEl) viewportEl.hidden = true
  } else if (viewportEl) {
    viewportEl.hidden = true
  }

  const { title: catTitle } = categoryDisplay(category)
  const { primary, secondary, detail } = termDisplay(term)
  categoryEl.textContent = catTitle || ''
  nameEl.textContent = primary
  nameEnEl.textContent = secondary
  descEl.textContent = detail

  if (promptTextEl) {
    promptTextEl.textContent = buildPrompt(term, category)
  }
  updateCopyButtonState('idle')

  const hasCode = Boolean(term.code)
  if (codeTextEl) {
    if (hasCode) {
      renderCodeWithLineNumbers(codeTextEl, term.code)
    } else {
      codeTextEl.textContent = ''
    }
  }
  if (tabsEl) {
    tabsEl.hidden = !hasCode
  }
  // Default to preview whenever the modal switches to a new term so the
  // primary visual is always shown first. Glossary concepts (no code) stay
  // on preview implicitly.
  setTab('preview')
  updateCodeCopyButtonState('idle')

  if (!wasAlreadyOpen) {
    lastFocused = document.activeElement
    // Lock scroll without losing position: stash scrollY, pin body in place.
    savedScrollY = window.scrollY || window.pageYOffset || 0
    document.body.style.top = `-${savedScrollY}px`
  }
  modalEl.hidden = false
  modalEl.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
  // Allow the browser to paint the hidden→visible state before animating
  requestAnimationFrame(() => {
    modalEl.classList.add('open')
  })

  // Only steal focus on first open. Prev/next navigation keeps focus on
  // whichever nav button the user is pressing.
  if (!wasAlreadyOpen) {
    const closeBtn = modalEl.querySelector('.term-modal-close')
    if (closeBtn) {
      closeBtn.focus()
    }
  }
}

const closeModal = ({ skipUrlSync = false } = {}) => {
  if (!modalEl || modalEl.hidden) {
    return
  }

  modalEl.classList.remove('open')
  modalEl.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')
  // Restore scroll position from the locked-state stash.
  document.body.style.top = ''
  if (savedScrollY) {
    window.scrollTo(0, savedScrollY)
    savedScrollY = 0
  }
  currentEntryKey = null

  const onTransitionEnd = () => {
    modalEl.hidden = true
    demoEl.innerHTML = ''
    modalEl.removeEventListener('transitionend', onTransitionEnd)
  }
  modalEl.addEventListener('transitionend', onTransitionEnd)

  if (lastFocused && typeof lastFocused.focus === 'function') {
    lastFocused.focus()
  }
  lastFocused = null

  if (!skipUrlSync) {
    // Prefer history.back() so the previous URL (without ?term=...) is restored
    // and the back button feels natural. Falls back to a manual clear if the
    // current entry isn't a modal-open we pushed (e.g. direct landing).
    if (history.state && history.state.modal) {
      history.back()
    } else {
      replaceModalCleared()
    }
  }
}

const isInteractiveDemoClick = (target) => {
  const demoContainer = target.closest('.term-card-demo')
  if (!demoContainer) {
    return false
  }
  return Boolean(target.closest(INTERACTIVE_DEMO_SELECTOR))
}

const handleCardActivation = (event) => {
  const card = event.target.closest('.term-card')
  if (!card) {
    return
  }
  // Don't open the modal when the user is interacting with a demo control
  if (isInteractiveDemoClick(event.target)) {
    return
  }
  // Don't open the modal when the user clicks the favorite-toggle button.
  if (event.target.closest('[data-fav-toggle]')) {
    return
  }
  const key = card.getAttribute('data-term-id')
  const entry = termLookup.get(key)
  if (entry) {
    openModal(entry)
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && modalEl && !modalEl.hidden) {
    closeModal()
    return
  }

  // ←/→ steps through the current section while the modal is open.
  if (modalEl && !modalEl.hidden && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
    const tag = (event.target && event.target.tagName) || ''
    // Don't hijack arrow keys when the user is typing in a form control.
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
      return
    }
    event.preventDefault()
    navigateModal(event.key === 'ArrowLeft' ? -1 : +1)
    return
  }

  // Keyboard activation for term cards
  if (event.key === 'Enter' || event.key === ' ') {
    const active = document.activeElement
    if (active && active.classList && active.classList.contains('term-card')) {
      event.preventDefault()
      const key = active.getAttribute('data-term-id')
      const entry = termLookup.get(key)
      if (entry) {
        openModal(entry)
      }
    }
  }
}

/**
 * Initialize the term detail modal.
 *
 * @param {Array} categories - Array of category objects
 */
/**
 * Programmatically open a term by category and term id — used by the
 * command palette and any other external launcher.
 */
export const openTermById = (categoryId, termId) => {
  const entry = termLookup.get(`${categoryId}-${termId}`)
  if (entry) openModal(entry)
}

export const initModal = (categories) => {
  modalEl = document.getElementById('term-modal')
  if (!modalEl) {
    return
  }

  demoEl = document.getElementById('term-modal-demo')
  categoryEl = document.getElementById('term-modal-category')
  nameEl = document.getElementById('term-modal-name')
  nameEnEl = document.getElementById('term-modal-name-en')
  descEl = document.getElementById('term-modal-desc')
  promptTextEl = document.getElementById('term-modal-prompt-text')
  promptCopyBtn = document.getElementById('term-modal-prompt-copy')
  codePanelEl = document.getElementById('term-modal-code-panel')
  codeTextEl = document.getElementById('term-modal-code-text')
  codeCopyBtn = document.getElementById('term-modal-code-copy')
  tabsEl = document.getElementById('term-modal-tabs')
  tabPreviewBtn = document.getElementById('term-modal-tab-preview')
  tabCodeBtn = document.getElementById('term-modal-tab-code')
  prevBtn = document.getElementById('term-modal-prev')
  nextBtn = document.getElementById('term-modal-next')
  viewportEl = document.getElementById('term-modal-viewport')
  viewportButtons = viewportEl ? Array.from(viewportEl.querySelectorAll('[data-viewport]')) : []
  codePenBtn = document.getElementById('term-modal-code-pen')

  termLookup = buildLookup(categories)

  if (prevBtn) prevBtn.addEventListener('click', () => navigateModal(-1))
  if (nextBtn) nextBtn.addEventListener('click', () => navigateModal(+1))
  if (tabPreviewBtn) tabPreviewBtn.addEventListener('click', () => setTab('preview'))
  if (tabCodeBtn) tabCodeBtn.addEventListener('click', () => setTab('code'))

  viewportButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const size = btn.getAttribute('data-viewport')
      if (size) setViewport(size)
    })
  })

  if (codePenBtn) {
    codePenBtn.addEventListener('click', openInCodePen)
  }

  registerModalHandlers({
    open: (categoryId, termId) => {
      const entry = termLookup.get(`${categoryId}-${termId}`)
      if (entry) openModal(entry, { skipUrlPush: true })
    },
    close: () => closeModal({ skipUrlSync: true }),
    isOpenWith: (categoryId, termId) =>
      currentEntryKey === `${categoryId}-${termId}`,
  })

  modalEl.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', () => closeModal())
  })

  if (promptCopyBtn) {
    promptCopyBtn.addEventListener('click', copyPromptToClipboard)
  }
  if (codeCopyBtn) {
    codeCopyBtn.addEventListener('click', copyCodeToClipboard)
  }

  document.addEventListener('click', handleCardActivation)
  document.addEventListener('keydown', handleKeydown)
  // Capture-phase fallback: even if some inner element swallows the bubble,
  // an ESC anywhere in the host document still closes the modal.
  window.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Escape' && modalEl && !modalEl.hidden) {
        closeModal()
      }
    },
    true,
  )

  // Iframe previews dispatch a postMessage when focus has moved inside them
  // and the host keydown listener can't see the keyup, or when the user
  // clicks the iframe margin (outside the preview stage).
  window.addEventListener('message', (event) => {
    if (!event || !event.data) return
    const type = event.data.type
    if (
      (type === 'ui-glossary-esc' || type === 'ui-glossary-close') &&
      modalEl &&
      !modalEl.hidden
    ) {
      closeModal()
    }
  })

  // Make every term card keyboard-accessible
  const makeCardsAccessible = () => {
    document.querySelectorAll('.term-card').forEach((card) => {
      if (!card.hasAttribute('tabindex')) {
        card.setAttribute('tabindex', '0')
      }
      if (!card.hasAttribute('role')) {
        card.setAttribute('role', 'button')
      }
      if (!card.hasAttribute('aria-label')) {
        const name = card.getAttribute('data-term-name') || ''
        card.setAttribute('aria-label', `${name}${t('modal.openTermLabel')}`)
      }
    })
  }
  makeCardsAccessible()
  // Re-apply after search-driven re-renders
  const content = document.getElementById('glossary-content')
  if (content) {
    const observer = new MutationObserver(makeCardsAccessible)
    observer.observe(content, { childList: true, subtree: true })
  }
}
