/**
 * Internationalization module.
 * Switches the UI between Japanese and English.
 */

const STORAGE_KEY = 'uiGlossary.lang'

const STRINGS = {
  ja: {
    'nav.parts': 'UIパーツ集',
    'nav.glossary': 'UI用語集',
    'section.parts.title': 'UIパーツ集',
    'section.parts.subtitle': 'UI Parts Showcase',
    'section.glossary.title': 'UI用語集',
    'section.glossary.subtitle': 'Interactive Glossary',
    'search.placeholder': '用語を検索...',
    'search.placeholder.parts': 'パーツを検索...',
    'search.placeholder.glossary': '用語を検索...',
    'search.clear': '検索をクリア',
    'search.results.suffix': '件の結果',
    'search.results.for': '',
    'search.recent': '最近の検索',
    'search.noResultsHint': '別のキーワードや言語切替(JA/EN)を試してみてください。',
    'sidebar.terms': '用語',
    'header.menu': 'メニュー',
    'header.view': '表示切替',
    'header.theme': 'テーマ切り替え',
    'modal.close': '閉じる',
    'modal.aiPromptTitle': 'AIへの指示プロンプト',
    'modal.aiPromptHelp':
      '下記をコピーして、ChatGPT・Claude などのAIに貼り付けると、このUIを実装するコードや使い方を提案してもらえます。',
    'modal.codeHelp':
      'HTMLファイルに貼り付けるだけで使えます。プロジェクトに合わせて色やサイズを調整してください。',
    'modal.copy': 'コピー',
    'modal.copied': 'コピーしました',
    'modal.copyFailed': '失敗しました',
    'modal.openTermLabel': 'の解説を開く',
    'modal.prev': '前の項目',
    'modal.next': '次の項目',
    'modal.tab.preview': 'プレビュー',
    'modal.tab.code': 'コード',
    'favorite.toggle': 'お気に入りに追加',
    'favorite.filter': 'お気に入りのみ',
    'history.title': '最近コピーしたパーツ',
    'history.empty': 'まだコピーしていません',
    'history.clear': '履歴を消去',
    'backToTop.aria': '上に戻る',
    'unit.terms': '件',
    'cmdk.title': 'コマンドパレット',
    'cmdk.placeholder': 'パーツ・用語を検索 (例: モーダル, button)',
    'cmdk.empty': '一致する項目はありません。別のキーワードを試してください。',
    'cmdk.hint.navigate': '選択',
    'cmdk.hint.open': '開く',
    'cmdk.hint.close': '閉じる',
    'cmdk.open': 'コマンドパレットを開く',
    'help.title': 'キーボードショートカット',
    'help.shortcut.palette': 'コマンドパレットを開く',
    'help.shortcut.search': '検索にフォーカス',
    'help.shortcut.sidebar': 'サイドバー開閉',
    'help.shortcut.theme': 'ライト / ダーク切替',
    'help.shortcut.section': 'セクション切替 (パーツ / 用語集)',
    'help.shortcut.prevNext': 'モーダル内で前後の項目',
    'help.shortcut.close': 'モーダル・パレットを閉じる',
    'help.shortcut.help': 'このヘルプを表示',
    'help.openHelp': 'ヘルプを開く',
    'viewport.label': '画面幅',
    'viewport.phone': 'スマホ',
    'viewport.tablet': 'タブレット',
    'viewport.desktop': 'PC',
    'viewport.full': 'フル',
    'codepen.open': 'CodePenで開く',
    'toast.copied': 'コピーしました',
    'toast.copyFailed': 'コピーに失敗しました',
    'hero.parts.eyebrow': 'UI Parts · そのまま使える',
    'hero.parts.titleLine1': '触れて、見て、',
    'hero.parts.titleLine2': '使えるUIパーツ集。',
    'hero.parts.lead': '各カードに動くプレビューとコピペできるコードを用意しました。プロジェクトに貼り付けるだけですぐ動きます。',
    'hero.glossary.eyebrow': 'Glossary · 読んで学ぶ',
    'hero.glossary.titleLine1': '知っておきたい、',
    'hero.glossary.titleLine2': 'UIのことば。',
    'hero.glossary.lead': '画面づくりで耳にする「概念」「用語」を、誰が読んでもわかる平易な日本語と英語でまとめた辞書です。',
    'hero.categories': 'カテゴリ',
    'hero.parts': 'パーツ',
    'footer.note': 'UIに親しむための、人にやさしい辞書。',
    'intro.parts.title': 'このコレクションについて',
    'intro.parts.body':
      'よく使うUIを「そのままコピーして貼り付ければ動く」形でまとめた、ライブラリ不要のスニペット集です。HTML一枚にもReact/Vue/Svelteへの移植にも使えるよう、各パーツは標準のHTML・CSS・必要な場合のみJavaScriptだけで構成しています。実物のように動くプレビュー、コピペできるコード、AIに渡せる実装プロンプトがカードごとに付属するので、設計から実装までを一気に進められます。',
    'intro.parts.feature1.title': '動くプレビューが見える',
    'intro.parts.feature1.body':
      'カードの絵は実物のレンダリングそのまま。クリックすると大きな対話可能なデモが開きます。',
    'intro.parts.feature2.title': 'コピペで動く',
    'intro.parts.feature2.body':
      'HTML+CSS(必要ならJS)が1スニペットにまとまっており、貼り付けるだけで動作します。',
    'intro.parts.feature3.title': 'AIプロンプト付き',
    'intro.parts.feature3.body':
      'ChatGPT・Claudeに渡せる実装プロンプトをワンクリックでコピーできます。',
    'intro.glossary.title': 'この辞書について',
    'intro.glossary.body':
      'UIや画面づくりで耳にする「概念」「呼び名」「考え方」を、専門用語に頼らない平易な日本語と英語で解説した辞書です。最初から順番に読むのも、検索で気になる言葉を引くのも、サイドバーから1カテゴリ単位で巡るのもOK。エンジニアやデザイナーはもちろん、初めてUIに触れる方にも届くよう、必ず「これは何か / どこで見るか / なぜあるのか」をセットで説明しています。',
    'intro.glossary.feature1.title': '誰にでもわかる',
    'intro.glossary.feature1.body':
      '専門用語をそのまま使わず、日常の言葉に言い換えて説明します。',
    'intro.glossary.feature2.title': '日英バイリンガル',
    'intro.glossary.feature2.body':
      '右上の「JA / EN」で、すべての解説と説明が瞬時に切り替わります。',
    'intro.glossary.feature3.title': '1003件を網羅',
    'intro.glossary.feature3.body':
      '基本概念から実装現場で飛び交うニッチな用語まで、まとめて見られます。',
  },
  en: {
    'nav.parts': 'UI Parts',
    'nav.glossary': 'Glossary',
    'section.parts.title': 'UI Parts',
    'section.parts.subtitle': 'Copy-paste components',
    'section.glossary.title': 'Glossary',
    'section.glossary.subtitle': 'Interactive UI Dictionary',
    'search.placeholder': 'Search terms…',
    'search.placeholder.parts': 'Search parts…',
    'search.placeholder.glossary': 'Search terms…',
    'search.clear': 'Clear search',
    'search.results.suffix': ' results',
    'search.results.for': 'for ',
    'search.recent': 'Recent searches',
    'search.noResultsHint': 'Try a different keyword, or toggle JA/EN at the top right.',
    'sidebar.terms': 'terms',
    'header.menu': 'Menu',
    'header.view': 'Toggle view',
    'header.theme': 'Toggle theme',
    'modal.close': 'Close',
    'modal.aiPromptTitle': 'AI prompt',
    'modal.aiPromptHelp':
      'Copy and paste the prompt below into ChatGPT, Claude, or another AI to get implementation code and usage tips for this UI.',
    'modal.codeHelp':
      'Paste into an HTML file and it works. Adjust colors and sizes to match your project.',
    'modal.copy': 'Copy',
    'modal.copied': 'Copied',
    'modal.copyFailed': 'Failed',
    'modal.openTermLabel': ' — open details',
    'modal.prev': 'Previous',
    'modal.next': 'Next',
    'modal.tab.preview': 'Preview',
    'modal.tab.code': 'Code',
    'favorite.toggle': 'Add to favorites',
    'favorite.filter': 'Favorites only',
    'history.title': 'Recently copied',
    'history.empty': 'Nothing copied yet',
    'history.clear': 'Clear history',
    'backToTop.aria': 'Back to top',
    'unit.terms': 'terms',
    'cmdk.title': 'Command palette',
    'cmdk.placeholder': 'Search parts & terms (e.g. modal, button)',
    'cmdk.empty': 'No matches. Try a different keyword.',
    'cmdk.hint.navigate': 'navigate',
    'cmdk.hint.open': 'open',
    'cmdk.hint.close': 'close',
    'cmdk.open': 'Open command palette',
    'help.title': 'Keyboard shortcuts',
    'help.shortcut.palette': 'Open command palette',
    'help.shortcut.search': 'Focus search',
    'help.shortcut.sidebar': 'Toggle sidebar',
    'help.shortcut.theme': 'Light / Dark',
    'help.shortcut.section': 'Switch section (Parts / Glossary)',
    'help.shortcut.prevNext': 'Prev / next in modal',
    'help.shortcut.close': 'Close modal or palette',
    'help.shortcut.help': 'Show this help',
    'help.openHelp': 'Open help',
    'viewport.label': 'Viewport',
    'viewport.phone': 'Phone',
    'viewport.tablet': 'Tablet',
    'viewport.desktop': 'Desktop',
    'viewport.full': 'Full',
    'codepen.open': 'Open in CodePen',
    'toast.copied': 'Copied',
    'toast.copyFailed': 'Copy failed',
    'hero.parts.eyebrow': 'UI Parts · Ready to ship',
    'hero.parts.titleLine1': 'Touch, see, and',
    'hero.parts.titleLine2': 'ship — UI parts.',
    'hero.parts.lead': 'Every card includes a live preview and copy-and-paste code. Drop it into your project and it just works.',
    'hero.glossary.eyebrow': 'Glossary · Read and learn',
    'hero.glossary.titleLine1': 'The vocabulary',
    'hero.glossary.titleLine2': 'of UI, made plain.',
    'hero.glossary.lead': 'The "concepts" and "words" of screen design, explained in plain Japanese and English for anyone.',
    'hero.categories': 'categories',
    'hero.parts': 'parts',
    'footer.note': 'A friendlier dictionary for getting closer to UI.',
    'intro.parts.title': 'About this collection',
    'intro.parts.body':
      'A library-free snippet set of common UI parts you can paste in and immediately use. Each part is built from plain HTML, CSS, and (only when needed) a touch of JavaScript — so a single HTML file or any framework (React, Vue, Svelte) can host them. Every card ships with a live preview, copy-and-paste code, and an AI prompt that helps you carry it into your project.',
    'intro.parts.feature1.title': 'Live previews',
    'intro.parts.feature1.body':
      'Each card renders the part for real. Click to open a larger, interactive demo.',
    'intro.parts.feature2.title': 'Copy & paste',
    'intro.parts.feature2.body':
      'HTML + CSS (+ optional JS) ships in one snippet — paste it and it just works.',
    'intro.parts.feature3.title': 'AI prompt included',
    'intro.parts.feature3.body':
      'One click copies an implementation prompt you can hand to ChatGPT or Claude.',
    'intro.glossary.title': 'About this dictionary',
    'intro.glossary.body':
      'A dictionary of the concepts, names, and ideas you encounter when designing screens — explained in plain Japanese and English without leaning on jargon. Read it cover to cover, look up a single term with search, or wander a category from the sidebar. Every entry answers three questions together: what is it, where do you see it, and why does it exist — so it lands whether you are an engineer, a designer, or new to UI.',
    'intro.glossary.feature1.title': 'Plain language',
    'intro.glossary.feature1.body':
      'No jargon left unexplained — every term is recast in everyday words.',
    'intro.glossary.feature2.title': 'Bilingual JA / EN',
    'intro.glossary.feature2.body':
      'Toggle JA / EN in the top right and every explanation switches instantly.',
    'intro.glossary.feature3.title': '1,003 entries',
    'intro.glossary.feature3.body':
      'From basic concepts to niche terms tossed around in real projects — all in one place.',
  },
}

let currentLang = 'ja'
const listeners = new Set()

export const t = (key) => {
  const table = STRINGS[currentLang] || STRINGS.ja
  if (key in table) return table[key]
  if (key in STRINGS.ja) return STRINGS.ja[key]
  return key
}

export const getLang = () => currentLang

/**
 * Pick the appropriate display fields for a category given the current language.
 */
export const categoryDisplay = (category) => {
  if (currentLang === 'en') {
    return {
      title: category.titleEn || category.title || '',
      description:
        category.descriptionEn || category.description || '',
    }
  }
  return {
    title: category.title || category.titleEn || '',
    description: category.description || category.descriptionEn || '',
  }
}

/**
 * Pick the appropriate display fields for a term given the current language.
 * Falls back to JA when EN is missing.
 */
export const termDisplay = (term) => {
  if (currentLang === 'en') {
    return {
      primary: term.name || term.nameJa || '',
      secondary: term.nameJa || '',
      desc: term.descEn || term.desc || '',
      detail: term.detailEn || term.detail || term.descEn || term.desc || '',
    }
  }
  return {
    primary: term.nameJa || term.name || '',
    secondary: term.name || '',
    desc: term.desc || term.descEn || '',
    detail: term.detail || term.detailEn || term.desc || '',
  }
}

const HERO_STAGE_WORDS = {
  parts: {
    ja: ['ボタン', 'モーダル', 'トースト', 'タブ', 'カード', 'アコーディオン', 'スライダー', 'バッジ', 'カラーピッカー', 'カルーセル', 'ドロワー', 'タイムライン', 'プログレス', 'チップ', 'スピナー'],
    en: ['Button', 'Modal', 'Toast', 'Tabs', 'Card', 'Accordion', 'Slider', 'Badge', 'Color Picker', 'Carousel', 'Drawer', 'Timeline', 'Progress', 'Chip', 'Spinner'],
    keywords: ['COPY', 'PASTE', 'INTERACTIVE', 'LIVE', 'READY', 'SHIP', 'CODE'],
  },
  glossary: {
    ja: ['ユーザビリティ', 'アフォーダンス', 'コンポーネント', 'アクセシビリティ', 'インタラクション', 'レスポンシブ', 'マイクロインタラクション', 'ヒューリスティック', 'メタファー', 'スケルトン', 'シグニファイア', 'ゲシュタルト'],
    en: ['Usability', 'Affordance', 'Component', 'Accessibility', 'Interaction', 'Responsive', 'Microinteraction', 'Heuristic', 'Metaphor', 'Skeleton', 'Signifier', 'Gestalt'],
    keywords: ['JA · EN', 'PLAIN', 'WORDS', 'CONCEPTS', 'READ', 'LEARN'],
  },
}

let heroReshuffleTimer = null

/**
 * Populate the hero stage with floating UI words/keywords for the active section.
 * Reseeded on each section/language change, and a periodic gentle reshuffle
 * keeps things feeling alive instead of frozen.
 */
export const updateHeroStage = (section) => {
  const stage = document.getElementById('hero-stage')
  if (!stage) return
  const sec = section || 'parts'
  const cfg = HERO_STAGE_WORDS[sec]
  if (!cfg) return

  const lang = currentLang === 'en' ? 'en' : 'ja'
  const words = cfg[lang]
  const keys = cfg.keywords

  stage.innerHTML = ''

  // Deterministic-ish but staggered placement. Pick 9-11 items.
  const used = new Set()
  const pick = (arr) => {
    let attempts = 0
    while (attempts < 20) {
      const v = arr[Math.floor(Math.random() * arr.length)]
      if (!used.has(v)) {
        used.add(v)
        return v
      }
      attempts++
    }
    return arr[0]
  }

  const items = []
  // 2 large background words
  for (let i = 0; i < 2; i++) {
    items.push({ text: pick(words), size: 'lg' })
  }
  // 6 medium words
  for (let i = 0; i < 6; i++) {
    items.push({ text: pick(words), size: 'md' })
  }
  // 4 small uppercase keywords
  const usedKeys = new Set()
  for (let i = 0; i < Math.min(4, keys.length); i++) {
    let k = keys[i]
    if (usedKeys.has(k)) continue
    usedKeys.add(k)
    items.push({ text: k, size: 'sm', accent: i === 0 })
  }

  items.forEach((it, idx) => {
    const el = document.createElement('span')
    el.className =
      'hero-stage-item hero-stage-item--' + it.size + (it.accent ? ' hero-stage-item--accent' : '')
    el.textContent = it.text
    // Position randomly but biased to spread across the hero area
    const top = 8 + Math.random() * 78
    const left = -6 + Math.random() * 108
    el.style.top = `${top}%`
    el.style.left = `${left}%`
    el.style.animationDelay = `${(idx * 0.45).toFixed(2)}s, ${(idx * 0.7).toFixed(2)}s`
    el.style.animationDuration = `${16 + Math.random() * 10}s, ${6 + Math.random() * 6}s`
    stage.appendChild(el)
  })

  // Schedule a periodic gentle reshuffle so the hero never feels frozen.
  if (heroReshuffleTimer) {
    clearInterval(heroReshuffleTimer)
  }
  heroReshuffleTimer = setInterval(() => {
    if (!document.getElementById('hero-stage')) {
      clearInterval(heroReshuffleTimer)
      heroReshuffleTimer = null
      return
    }
    if (document.hidden) return
    // Swap one or two items' text and positions in place — much cheaper
    // than re-creating all elements, and the existing animations keep running.
    const liveItems = stage.querySelectorAll('.hero-stage-item')
    if (!liveItems.length) return
    const pool = lang === 'en' ? cfg.en : cfg.ja
    const swapCount = Math.min(2, liveItems.length)
    for (let i = 0; i < swapCount; i++) {
      const target = liveItems[Math.floor(Math.random() * liveItems.length)]
      // Only swap the larger word slots (skip the small uppercase keywords)
      if (target.classList.contains('hero-stage-item--sm')) continue
      target.style.opacity = '0'
      setTimeout(() => {
        target.textContent = pool[Math.floor(Math.random() * pool.length)]
        target.style.top = `${8 + Math.random() * 78}%`
        target.style.left = `${-6 + Math.random() * 108}%`
        target.style.opacity = ''
      }, 600)
    }
  }, 9000)
}

/**
 * Update the "About this collection / dictionary" intro block content.
 */
export const updateIntro = (section) => {
  const sec = section || 'parts'
  const set = (id, key) => {
    const el = document.getElementById(id)
    if (el) el.textContent = t(key)
  }
  set('intro-title', `intro.${sec}.title`)
  set('intro-body', `intro.${sec}.body`)
  set('intro-feature-1-title', `intro.${sec}.feature1.title`)
  set('intro-feature-1-body', `intro.${sec}.feature1.body`)
  set('intro-feature-2-title', `intro.${sec}.feature2.title`)
  set('intro-feature-2-body', `intro.${sec}.feature2.body`)
  set('intro-feature-3-title', `intro.${sec}.feature3.title`)
  set('intro-feature-3-body', `intro.${sec}.feature3.body`)
}

/**
 * Update the hero block content based on the currently active section + language + counts.
 * Called by sections.js when section changes and by setLang.
 */
export const updateHero = ({ section, partsCount, glossaryCount, partsCats, glossaryCats } = {}) => {
  const heroEyebrow = document.getElementById('hero-eyebrow')
  const heroTitle = document.getElementById('hero-title')
  const heroLead = document.getElementById('hero-lead')
  const heroCount = document.getElementById('hero-count')
  const heroCats = document.getElementById('hero-meta-categories')

  const sec = section || 'parts'
  const baseKey = `hero.${sec}`
  const count = sec === 'parts' ? partsCount : glossaryCount
  const cats = sec === 'parts' ? partsCats : glossaryCats

  if (heroEyebrow) heroEyebrow.textContent = t(`${baseKey}.eyebrow`)
  if (heroTitle) {
    heroTitle.innerHTML = `${t(`${baseKey}.titleLine1`)}<br>${t(`${baseKey}.titleLine2`)}`
  }
  if (heroLead) heroLead.textContent = t(`${baseKey}.lead`)
  if (typeof count === 'number' && heroCount) {
    heroCount.textContent = `${count} ${sec === 'parts' ? t('hero.parts') : t('unit.terms')}`
  }
  if (typeof cats === 'number' && heroCats) {
    heroCats.textContent = `${cats} ${t('hero.categories')}`
  }
}

const applyStaticTranslations = () => {
  // data-i18n: textContent OR a specific attribute via data-i18n-attr
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    const attr = el.getAttribute('data-i18n-attr')
    const value = t(key)
    if (attr) {
      el.setAttribute(attr, value)
    } else {
      el.textContent = value
    }
  })

  const docEl = document.documentElement
  docEl.lang = currentLang === 'en' ? 'en' : 'ja'

  // Both sidebar search inputs/aria
  ;['search-input-parts', 'search-input-glossary'].forEach((id) => {
    const input = document.getElementById(id)
    if (input && !input.hasAttribute('data-i18n')) {
      input.placeholder = t('search.placeholder')
    }
  })
  ;['search-clear-parts', 'search-clear-glossary'].forEach((id) => {
    const btn = document.getElementById(id)
    if (btn) btn.setAttribute('aria-label', t('search.clear'))
  })

  const menuToggle = document.getElementById('menu-toggle')
  if (menuToggle) menuToggle.setAttribute('aria-label', t('header.menu'))
  const viewToggle = document.getElementById('view-toggle')
  if (viewToggle) viewToggle.setAttribute('aria-label', t('header.view'))
  const themeToggle = document.getElementById('theme-toggle')
  if (themeToggle) themeToggle.setAttribute('aria-label', t('header.theme'))
  const backToTop = document.getElementById('back-to-top')
  if (backToTop) backToTop.setAttribute('aria-label', t('backToTop.aria'))

  // Modal labels
  const modalClose = document.querySelector('.term-modal-close')
  if (modalClose) modalClose.setAttribute('aria-label', t('modal.close'))
  const modalPrev = document.getElementById('term-modal-prev')
  if (modalPrev) modalPrev.setAttribute('aria-label', t('modal.prev'))
  const modalNext = document.getElementById('term-modal-next')
  if (modalNext) modalNext.setAttribute('aria-label', t('modal.next'))

  const promptTitle = document.querySelector('.term-modal-prompt-title span')
  if (promptTitle) promptTitle.textContent = t('modal.aiPromptTitle')
  const promptHelp = document.querySelector('.term-modal-prompt-help')
  if (promptHelp) promptHelp.textContent = t('modal.aiPromptHelp')

  const codeHelp = document.querySelector('.term-modal-code-help')
  if (codeHelp) codeHelp.textContent = t('modal.codeHelp')

  const promptCopyLabel = document.querySelector('.term-modal-prompt-copy-label')
  if (promptCopyLabel) promptCopyLabel.textContent = t('modal.copy')
  const codeCopyLabel = document.querySelector('.term-modal-code-copy-label')
  if (codeCopyLabel) codeCopyLabel.textContent = t('modal.copy')

  // Update lang toggle pressed state
  document.querySelectorAll('.top-bar-lang-btn').forEach((btn) => {
    const isActive = btn.getAttribute('data-lang') === currentLang
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false')
  })

  // Footer note
  const footerNote = document.getElementById('site-footer-note')
  if (footerNote) footerNote.textContent = t('footer.note')
}

export const setLang = (lang) => {
  if (lang !== 'ja' && lang !== 'en') return
  if (lang === currentLang) {
    applyStaticTranslations()
    return
  }
  currentLang = lang
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch (_) {
    /* ignore */
  }
  applyStaticTranslations()
  listeners.forEach((fn) => {
    try {
      fn(lang)
    } catch (_) {
      /* ignore */
    }
  })
}

export const onLangChange = (fn) => {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

const readInitialLang = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'ja' || stored === 'en') return stored
  } catch (_) {
    /* ignore */
  }
  // Auto-detect from browser
  const nav = (navigator.language || '').toLowerCase()
  if (nav.startsWith('en')) return 'en'
  return 'ja'
}

export const initI18n = () => {
  currentLang = readInitialLang()

  document.querySelectorAll('.top-bar-lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang')
      if (lang) setLang(lang)
    })
  })

  applyStaticTranslations()
}
