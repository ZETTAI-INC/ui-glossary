/**
 * Sidebar navigation module.
 * Two completely separate sidebars (UIパーツ集 / UI用語集) live in the DOM
 * side-by-side; one is shown at a time based on the active top-level section.
 */

import { slugify } from './utils.js'
import { getCategorySection } from './sections.js'
import { categoryDisplay, t } from './i18n.js'

const SECTION_TO_NAV_ID = {
  parts: 'sidebar-nav-parts',
  glossary: 'sidebar-nav-glossary',
}

const SECTION_TO_COUNT_ID = {
  parts: 'term-count-parts',
  glossary: 'term-count-glossary',
}

const COLLAPSE_STORAGE_KEY = 'uiGlossary.sidebarCollapsed'
const DESKTOP_MQ = '(min-width: 1025px)'

const isDesktop = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia(DESKTOP_MQ).matches

/**
 * Build the HTML string for a single sidebar nav item.
 */
const buildNavItemHtml = (category, index) => {
  const number = String(index + 1).padStart(2, '0')
  const termCount = category.terms ? category.terms.length : 0
  const section = getCategorySection(category)
  const { title } = categoryDisplay(category)

  return `
    <div class="sidebar-nav-item"
         data-category-id="${slugify(category.id)}"
         data-section="${section}"
         role="button"
         tabindex="0">
      <span class="nav-number">${number}</span>
      <span class="nav-title">${title}</span>
      <span class="nav-count">${termCount}</span>
    </div>
  `
}

/**
 * Scroll smoothly to the category section matching the given id.
 */
const scrollToCategory = (categoryId) => {
  const section = document.getElementById(`category-${categoryId}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Close the mobile sidebar drawer(s).
 */
const closeSidebar = () => {
  document.querySelectorAll('.sidebar').forEach((s) => s.classList.remove('open'))
}

/**
 * Open the mobile sidebar matching the active section.
 */
const openActiveSidebar = () => {
  const section = document.body.getAttribute('data-section') || 'parts'
  const id = section === 'glossary' ? 'sidebar-glossary' : 'sidebar-parts'
  const el = document.getElementById(id)
  if (el) el.classList.add('open')
}

/* ──────────────────────────────────────────────
   Sidebar collapse (desktop) — push main content
   to take over freed space. Mobile keeps using
   the drawer pattern via .sidebar.open.
   ────────────────────────────────────────────── */
const isCollapsed = () => document.body.classList.contains('sidebar-collapsed')

const persistCollapsed = (collapsed) => {
  try {
    localStorage.setItem(COLLAPSE_STORAGE_KEY, collapsed ? '1' : '0')
  } catch (_) {
    /* ignore */
  }
}

const readSavedCollapsed = () => {
  try {
    return localStorage.getItem(COLLAPSE_STORAGE_KEY) === '1'
  } catch (_) {
    return false
  }
}

const syncMenuToggleAria = () => {
  const btn = document.getElementById('menu-toggle')
  if (!btn) return
  const expanded = isDesktop() ? !isCollapsed() : Boolean(document.querySelector('.sidebar.open'))
  btn.setAttribute('aria-expanded', expanded ? 'true' : 'false')
  btn.setAttribute('aria-controls', 'sidebar-parts sidebar-glossary')
}

export const setSidebarCollapsed = (collapsed) => {
  if (isDesktop()) {
    document.body.classList.toggle('sidebar-collapsed', Boolean(collapsed))
    // Closing the drawer if it happened to be open from a viewport change.
    if (collapsed) closeSidebar()
    persistCollapsed(Boolean(collapsed))
  } else {
    // On mobile, "expanded" means open drawer.
    if (collapsed) {
      closeSidebar()
    } else {
      openActiveSidebar()
    }
  }
  syncMenuToggleAria()
}

export const toggleSidebar = () => {
  if (isDesktop()) {
    setSidebarCollapsed(!isCollapsed())
  } else {
    const anyOpen = Boolean(document.querySelector('.sidebar.open'))
    setSidebarCollapsed(anyOpen)
  }
}

const setupSidebarToggle = () => {
  const menuToggle = document.getElementById('menu-toggle')
  const overlay = document.getElementById('sidebar-overlay')

  if (menuToggle) {
    // Avoid double-binding when initSidebar is re-invoked on language change.
    if (!menuToggle.dataset.toggleBound) {
      menuToggle.addEventListener('click', toggleSidebar)
      menuToggle.dataset.toggleBound = '1'
    }
  }

  if (overlay && !overlay.dataset.bound) {
    overlay.addEventListener('click', closeSidebar)
    overlay.dataset.bound = '1'
  }

  // Keyboard shortcut: `[` or `\` toggles the sidebar (desktop & mobile)
  if (!document.body.dataset.sidebarKbdBound) {
    document.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const tag = (e.target && e.target.tagName) || ''
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (e.target && e.target.isContentEditable) return
      if (e.key === '[' || e.key === '\\') {
        e.preventDefault()
        toggleSidebar()
      }
    })
    document.body.dataset.sidebarKbdBound = '1'
  }

  // Re-evaluate viewport-driven state on resize. We don't auto-toggle on
  // resize, but we do keep the menu-toggle's aria-expanded in sync.
  if (!window.__sidebarMqlBound) {
    const mql = window.matchMedia(DESKTOP_MQ)
    const handler = () => {
      // When switching to mobile, collapse-state is irrelevant — the
      // drawer pattern takes over. When switching to desktop, restore
      // the user's saved collapse preference.
      if (mql.matches) {
        document.body.classList.toggle('sidebar-collapsed', readSavedCollapsed())
        closeSidebar()
      } else {
        document.body.classList.remove('sidebar-collapsed')
      }
      syncMenuToggleAria()
    }
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handler)
    } else if (typeof mql.addListener === 'function') {
      mql.addListener(handler)
    }
    window.__sidebarMqlBound = true
  }

  // Initial state
  if (isDesktop()) {
    document.body.classList.toggle('sidebar-collapsed', readSavedCollapsed())
  } else {
    document.body.classList.remove('sidebar-collapsed')
  }
  syncMenuToggleAria()
}

const attachItemHandlers = (navEl) => {
  navEl.querySelectorAll('.sidebar-nav-item').forEach((item) => {
    const categoryId = item.getAttribute('data-category-id')
    item.addEventListener('click', () => {
      scrollToCategory(categoryId)
      closeSidebar()
    })
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        scrollToCategory(categoryId)
        closeSidebar()
      }
    })
  })
}

/**
 * Initialize both sidebars. Each sidebar is populated only with the
 * categories belonging to its section.
 */
export const initSidebar = (categories) => {
  const grouped = { parts: [], glossary: [] }
  categories.forEach((cat) => {
    const sec = getCategorySection(cat)
    grouped[sec].push(cat)
  })

  ;['parts', 'glossary'].forEach((sec) => {
    const navEl = document.getElementById(SECTION_TO_NAV_ID[sec])
    if (!navEl) return
    const html = grouped[sec]
      .map((cat, idx) => buildNavItemHtml(cat, idx))
      .join('')
    navEl.innerHTML = html
    attachItemHandlers(navEl)

    const total = grouped[sec].reduce((n, c) => n + (c.terms?.length || 0), 0)
    const countEl = document.getElementById(SECTION_TO_COUNT_ID[sec])
    if (countEl) countEl.textContent = `${total} ${t('unit.terms')}`
  })

  setupSidebarToggle()
}

/**
 * Highlight the sidebar nav item for the given category — in whichever
 * sidebar currently contains it.
 */
export const setActiveCategory = (categoryId) => {
  document.querySelectorAll('.sidebar-nav-item').forEach((item) => {
    const id = item.getAttribute('data-category-id')
    if (id === categoryId) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })

  const sectionHeader = document.getElementById('current-section')
  const activeItem = document.querySelector(
    `.sidebar-nav-item[data-category-id="${categoryId}"]`
  )
  if (sectionHeader && activeItem) {
    const title = activeItem.querySelector('.nav-title')
    sectionHeader.textContent = title ? title.textContent : ''
  }
}

export const refreshSidebar = (categories) => {
  initSidebar(categories)
}
