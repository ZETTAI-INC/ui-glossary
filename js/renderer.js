/**
 * Renderer module.
 * Creates and inserts glossary content (category sections and term cards)
 * into the DOM, with scroll-triggered visibility animations.
 */

import { slugify, escapeHtml, toTermId } from './utils.js'
import { getDemoHTML, hasDemo, initDemoInteractions } from '../demos/registry.js'
import { getCategorySection } from './sections.js'
import { categoryDisplay, termDisplay, t } from './i18n.js'
import { isFavorite } from './favorites.js'

/**
 * Create a term card element.
 *
 * @param {Object} term - Term data { name, desc }
 * @param {string} categoryId - Parent category identifier
 * @returns {HTMLElement} The term card DOM element
 */
/**
 * Wrap raw HTML+CSS+JS into an isolated iframe document so card previews
 * can render the snippet exactly as it would in a real page.
 */
/**
 * Build a sandboxed iframe document that renders snippets inside a fixed
 * 720x420 "virtual stage", then auto-scales the stage to fit whatever size
 * the iframe ends up with. This ensures grid / masonry / hero / feed
 * components show their full layout instead of being clipped at the top.
 */
export const buildIframeDoc = (code, opts = {}) => {
  const VW = 720
  const VH = 420
  const interactive = Boolean(opts.interactive)
  const pointerEvents = interactive ? 'auto' : 'none'

  // Strip any leading `/* Inspired by … */` / `<!-- Inspired by … -->`
  // annotations so they don't render as visible text in the preview.
  const cleanedCode = String(code || '')
    .replace(/\/\*\s*Inspired by[\s\S]*?\*\//gi, '')
    .replace(/<!--\s*Inspired by[\s\S]*?-->/gi, '')
    .replace(/^\s+/, '')
  // Center-anchored stage. Even if JS doesn't run, the CSS fallback scale
  // keeps the preview visible at a sane size, dead-centered in the iframe.
  const fitScript = `(function(){
    function ensureWidth(){
      // Layout snippets (Grid, Masonry, Hero, etc.) usually rely on the
      // body giving them width. Inside our centered stage they collapse to
      // 0 unless we explicitly stretch them. Inline elements (buttons,
      // badges) stay at their natural size.
      var s=document.getElementById('__stage');
      if(!s)return;
      var child=s.firstElementChild;
      if(!child)return;
      try{
        var disp=window.getComputedStyle(child).display;
        if(disp==='block'||disp==='grid'||disp==='flex'||disp==='flow-root'){
          if(!child.style.width)child.style.width='100%';
        }
      }catch(e){}
    }
    function fit(){
      var s=document.getElementById('__stage');
      if(!s)return;
      ensureWidth();
      var child=s.firstElementChild;
      if(!child)return;
      // Measure child at scale 1 (no transform) to get its natural size.
      s.style.transform='translate(-50%, -50%)';
      var rect=child.getBoundingClientRect();
      var cw=rect.width, ch=rect.height;
      var w=window.innerWidth||document.documentElement.clientWidth;
      var h=window.innerHeight||document.documentElement.clientHeight;
      if(!cw||!ch||!w||!h){
        s.style.transform='translate(-50%, -50%) scale(0.5)';
        return;
      }
      // Generous padding on every side so content always sits in the
      // middle of the preview with breathing room.
      var pad=48;
      var sx=(w-pad)/cw;
      var sy=(h-pad)/ch;
      // Scale down only when content is bigger than the iframe — never zoom past 1.
      var sc=Math.min(sx,sy,1);
      if(sc<0.05)sc=0.05;
      s.style.transform='translate(-50%, -50%) scale('+sc+')';
    }
    function autoOpen(){
      // Force common "click-to-open" UI parts into their open state so
      // previews actually show their content. Class names are guesses
      // that match patterns used throughout the snippet collection.
      var sel=[
        '.ui-dd','.ui-dropdown','.ui-select','.ui-combobox','.ui-autocomplete',
        '.ui-kebab','.ui-meatball','.ui-bento','.ui-doner','.ui-mega-menu','.ui-megamenu','.ui-mega','.ui-context-menu','.ui-contextmenu','.ui-ctx','.ui-menu',
        '.ui-cmd-palette','.ui-cmdk','.ui-cmd','.ui-palette','.ui-cmdpalette',
        '.ui-action-sheet','.ui-actionsheet','.ui-bottom-sheet','.ui-bottomsheet','.ui-sheet',
        '.ui-drawer','.ui-side-drawer','.ui-sidebar-drawer',
        '.ui-popover','.ui-popup','.ui-pop',
        '.ui-modal','.ui-dialog','.ui-confirm','.ui-confirmation','.ui-confirmation-dialog',
        '.ui-notification','.ui-notif','.ui-notification-panel','.ui-notif-panel','.ui-inbox',
        '.ui-toast','.ui-snack','.ui-snackbar','.ui-alert','.ui-banner',
        '.ui-tooltip','.ui-tip',
        '.ui-walkthrough','.ui-onboard','.ui-tour','.ui-spotlight',
        '.ui-welcome','.ui-checklist',
        '.ui-multi-select','.ui-multiselect','.ui-tags','.ui-tag-input',
        '.ui-color-picker','.ui-colorpicker',
        '.ui-date-picker','.ui-datepicker','.ui-calendar',
        '.ui-emoji','.ui-reactions','.ui-emoji-picker',
        '.ui-mention','.ui-mention-popover',
        '.ui-status','.ui-status-dot',
        '.ui-filter-pills','.ui-pills',
        '.ui-cookie','.ui-cookie-banner',
        '.ui-mobile-fab-menu','.ui-fab-menu','.ui-speed-dial'
      ].join(',');
      try{
        document.querySelectorAll(sel).forEach(function(el){
          el.classList.add('open','show','visible','active','is-open','expanded');
          if(el.setAttribute)el.setAttribute('aria-expanded','true');
          el.style.opacity='1';
          el.style.visibility='visible';
          el.style.pointerEvents='auto';
        });
      }catch(e){}
      // <dialog> elements — open as non-modal
      try{
        document.querySelectorAll('dialog').forEach(function(d){
          if(typeof d.show==='function'){try{d.show();}catch(e){d.setAttribute('open','');}}
          else{d.setAttribute('open','');}
        });
      }catch(e){}
      // <details>
      try{
        document.querySelectorAll('details').forEach(function(d){d.open=true;});
      }catch(e){}
      // Inject CSS to force hover-only tooltips/popovers visible
      try{
        if(!document.getElementById('__preview-css')){
          var st=document.createElement('style');
          st.id='__preview-css';
          st.textContent=
            '[data-tip]::after,[data-tip]::before{opacity:1!important;visibility:visible!important}'+
            '.ui-tooltip-trigger::after,.ui-tooltip-trigger::before,.ui-tip-trigger::after,.ui-tip-trigger::before{opacity:1!important;visibility:visible!important}'+
            '.ui-popover-trigger + .ui-popover,.ui-pop-trigger + .ui-popover{opacity:1!important;visibility:visible!important;display:block!important}'+
            '/* keep aria-pressed elements visible */ [aria-hidden="true"].ui-popover,[aria-hidden="true"].ui-tooltip{aria-hidden:false}';
          document.head.appendChild(st);
        }
      }catch(e){}
    }
    fit();
    autoOpen();
    window.addEventListener('resize',fit);
    document.addEventListener('DOMContentLoaded',function(){fit();autoOpen();});
    window.addEventListener('load',function(){fit();autoOpen();});
    if(typeof requestAnimationFrame==='function'){requestAnimationFrame(function(){fit();autoOpen();});}
    setTimeout(function(){fit();autoOpen();},30);
    setTimeout(function(){fit();autoOpen();},150);
    setTimeout(function(){fit();autoOpen();},500);
  })();`
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{margin:0;padding:0;background:transparent;height:100%;width:100%;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Inter','Hiragino Sans','Noto Sans JP',sans-serif;color:#1d1d1f;-webkit-font-smoothing:antialiased}
    body{pointer-events:${pointerEvents};-webkit-user-select:${interactive ? 'text' : 'none'};user-select:${interactive ? 'text' : 'none'};position:relative}
    .__stage{
      width:${VW}px;height:${VH}px;
      position:absolute;top:50%;left:50%;
      display:grid;place-items:center;
      padding:32px;box-sizing:border-box;
      transform-origin:50% 50%;
      transform:translate(-50%, -50%) scale(0.42);
      will-change:transform;
      text-align:center;
    }
  </style>
  <script>${fitScript}</script>
  </head><body><div class="__stage" id="__stage">${cleanedCode}</div></body></html>`
}

/**
 * Map from `term.name` (lowercased) → code, built from all showcase categories.
 * Lets glossary terms with the same name reuse the showcase's iframe preview.
 */
let showcaseCodeByName = new Map()

const normalizeName = (name) =>
  String(name || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()

export const buildShowcaseLookup = (categories) => {
  const map = new Map()
  categories.forEach((cat) => {
    if (!cat.id || !cat.id.startsWith('ui-parts')) return
    ;(cat.terms || []).forEach((t) => {
      if (t && t.code) {
        map.set(normalizeName(t.name), t.code)
        if (t.nameJa) map.set(normalizeName(t.nameJa), t.code)
      }
    })
  })
  return map
}

/**
 * Public accessor for the showcase code lookup (used by modal.js too).
 */
export const findShowcaseCode = (term) => {
  if (!term) return null
  if (term.code) return term.code
  const byEn = showcaseCodeByName.get(normalizeName(term.name))
  if (byEn) return byEn
  const byJa = showcaseCodeByName.get(normalizeName(term.nameJa))
  if (byJa) return byJa
  return null
}

export const renderTermCard = (term, categoryId) => {
  const termId = toTermId(term.name)
  const card = document.createElement('div')
  card.className = 'term-card'
  card.setAttribute('data-term-id', `${categoryId}-${termId}`)
  card.setAttribute('data-term-name', term.name)

  const isPart = Boolean(term.code)
  if (isPart) {
    card.classList.add('term-card--part')
  } else {
    card.classList.add('term-card--concept')
  }

  // Determine a code snippet to preview:
  //  - term.code (showcase entries)
  //  - or the same-named showcase part (glossary terms with matching name)
  const previewCode = findShowcaseCode(term)

  let demoSection = ''
  if (previewCode) {
    demoSection = `<div class="term-card-demo term-card-demo--iframe"></div>`
  } else if (hasDemo(termId)) {
    demoSection = `<div class="term-card-demo">${getDemoHTML(termId, categoryId)}</div>`
  }

  const { primary, secondary, desc } = termDisplay(term)
  const badge = isPart
    ? '<span class="term-card-badge term-card-badge--part" aria-hidden="true">CODE</span>'
    : '<span class="term-card-badge term-card-badge--concept" aria-hidden="true">TERM</span>'

  const cardKey = `${categoryId}-${termId}`
  const starred = isFavorite(cardKey)
  const starBtn = `
    <button class="term-card-fav${starred ? ' is-on' : ''}" type="button"
      aria-label="${escapeHtml(t('favorite.toggle'))}" aria-pressed="${starred ? 'true' : 'false'}"
      data-fav-toggle data-fav-key="${escapeHtml(cardKey)}">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    </button>
  `

  card.innerHTML = `
    ${demoSection}
    ${starBtn}
    <div class="term-card-body">
      ${badge}
      <h3 class="term-card-name">${escapeHtml(primary)}</h3>
      <p class="term-card-name-en">${escapeHtml(secondary)}</p>
      <p class="term-card-desc">${escapeHtml(desc)}</p>
    </div>
  `

  // Insert iframe preview safely via DOM API (srcdoc holds raw HTML).
  if (previewCode) {
    const wrap = card.querySelector('.term-card-demo--iframe')
    if (wrap) {
      const iframe = document.createElement('iframe')
      iframe.className = 'term-card-iframe'
      iframe.title = `${term.name} preview`
      iframe.loading = 'lazy'
      iframe.setAttribute('sandbox', 'allow-scripts')
      iframe.setAttribute('aria-hidden', 'true')
      iframe.setAttribute('tabindex', '-1')
      iframe.srcdoc = buildIframeDoc(previewCode)
      wrap.appendChild(iframe)
    }
  }

  return card
}

/**
 * Create a category section element containing a header and term grid.
 *
 * @param {Object} category - Category data (id, title, number, terms)
 * @param {number} index - Zero-based category index
 * @returns {HTMLElement} The category section DOM element
 */
export const renderCategory = (category, index) => {
  const section = document.createElement('section')
  section.className = 'category-section'
  section.id = `category-${slugify(category.id)}`
  section.setAttribute('data-section', getCategorySection(category))

  const number = String(index + 1).padStart(2, '0')

  const { title: catTitle, description: catDescription } = categoryDisplay(category)
  const header = document.createElement('div')
  header.className = 'category-header'
  header.innerHTML = `
    <h2 class="category-title">
      <span class="category-number">${number}</span>
      ${escapeHtml(catTitle)}
    </h2>
    ${
      catDescription
        ? `<p class="category-description">${escapeHtml(catDescription)}</p>`
        : ''
    }
  `

  const grid = document.createElement('div')
  grid.className = 'term-grid'

  const terms = category.terms || []
  terms.forEach((term) => {
    const card = renderTermCard(term, category.id)
    grid.appendChild(card)
  })

  section.appendChild(header)
  section.appendChild(grid)

  return section
}

/**
 * Observe term cards and add the 'visible' class when they scroll into view.
 *
 * @param {HTMLElement} container - The container holding all cards
 */
const observeCards = (container) => {
  // One-shot: once a card has been seen, keep it visible. Toggling .visible
  // off on scroll-out causes cards to disappear after the user returns from
  // the modal, which feels broken.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.01, rootMargin: '0px 0px 0px 0px' }
  )

  const cards = container.querySelectorAll('.term-card')
  cards.forEach((card) => observer.observe(card))
}

/**
 * Render the full glossary into the given container.
 *
 * @param {Array} categories - Array of category objects
 * @param {HTMLElement} container - DOM element to render into
 */
export const renderGlossary = (categories, container) => {
  // Build the showcase code lookup so glossary terms can reuse it
  showcaseCodeByName = buildShowcaseLookup(categories)

  // Build all sections in a document fragment for a single reflow
  const fragment = document.createDocumentFragment()

  // Numbering restarts per top-level section so each section reads 01, 02, …
  const counters = { parts: 0, glossary: 0 }
  categories.forEach((category) => {
    const sec = getCategorySection(category)
    const indexWithinSection = counters[sec]++
    const section = renderCategory(category, indexWithinSection)
    fragment.appendChild(section)
  })

  // Clear and append
  container.innerHTML = ''
  container.appendChild(fragment)

  // Start observing cards for entrance animation
  observeCards(container)

  // Set up interactive demo handlers
  initDemoInteractions()
}
