/**
 * Term detail modal.
 * Opens a modal showing a term's full explanation when a card is clicked.
 */

import { toTermId } from './utils.js'
import { getDemoHTML, hasDemo } from '../demos/registry.js'
import { categoryDisplay, termDisplay, getLang, t } from './i18n.js'
import { findShowcaseCode, buildIframeDoc } from './renderer.js'

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
let modalEl = null
let demoEl = null
let categoryEl = null
let nameEl = null
let nameEnEl = null
let descEl = null
let promptTextEl = null
let promptCopyBtn = null
let codeSectionEl = null
let codeTextEl = null
let codeCopyBtn = null
let lastFocused = null
let copyResetTimer = null
let codeCopyResetTimer = null

const buildLookup = (categories) => {
  const map = new Map()
  categories.forEach((category) => {
    const terms = category.terms || []
    terms.forEach((term) => {
      const key = `${category.id}-${toTermId(term.name)}`
      map.set(key, { term, category })
    })
  })
  return map
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
  const text = codeTextEl.textContent || ''
  try {
    await copyToClipboard(text)
    updateCodeCopyButtonState('copied')
  } catch (err) {
    updateCodeCopyButtonState('error')
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
  } catch (err) {
    updateCopyButtonState('error')
  }
  if (copyResetTimer) {
    clearTimeout(copyResetTimer)
  }
  copyResetTimer = setTimeout(() => updateCopyButtonState('idle'), 2000)
}

const openModal = (entry) => {
  if (!modalEl || !entry) {
    return
  }

  const { term, category } = entry
  const termId = toTermId(term.name)

  // Use the same code-based iframe preview as the card whenever possible,
  // so the modal visual matches the card. Fall back to the registry demo
  // for glossary concepts that have neither.
  demoEl.innerHTML = ''
  demoEl.classList.remove('term-modal-demo--iframe')
  const previewCode = findShowcaseCode(term)
  if (previewCode) {
    demoEl.classList.add('term-modal-demo--iframe')
    const iframe = document.createElement('iframe')
    iframe.className = 'term-modal-iframe'
    iframe.title = `${term.name} preview`
    iframe.setAttribute('sandbox', 'allow-scripts')
    iframe.srcdoc = buildIframeDoc(previewCode, { interactive: true })
    demoEl.appendChild(iframe)
  } else if (hasDemo(termId)) {
    demoEl.innerHTML = getDemoHTML(termId, category.id)
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

  if (codeSectionEl && codeTextEl) {
    if (term.code) {
      codeTextEl.textContent = term.code
      codeSectionEl.hidden = false
    } else {
      codeTextEl.textContent = ''
      codeSectionEl.hidden = true
    }
  }
  updateCodeCopyButtonState('idle')

  lastFocused = document.activeElement
  modalEl.hidden = false
  modalEl.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
  // Allow the browser to paint the hidden→visible state before animating
  requestAnimationFrame(() => {
    modalEl.classList.add('open')
  })

  const closeBtn = modalEl.querySelector('.term-modal-close')
  if (closeBtn) {
    closeBtn.focus()
  }
}

const closeModal = () => {
  if (!modalEl || modalEl.hidden) {
    return
  }

  modalEl.classList.remove('open')
  modalEl.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')

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
  codeSectionEl = document.getElementById('term-modal-code-section')
  codeTextEl = document.getElementById('term-modal-code-text')
  codeCopyBtn = document.getElementById('term-modal-code-copy')

  termLookup = buildLookup(categories)

  modalEl.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', closeModal)
  })

  if (promptCopyBtn) {
    promptCopyBtn.addEventListener('click', copyPromptToClipboard)
  }
  if (codeCopyBtn) {
    codeCopyBtn.addEventListener('click', copyCodeToClipboard)
  }

  document.addEventListener('click', handleCardActivation)
  document.addEventListener('keydown', handleKeydown)

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
