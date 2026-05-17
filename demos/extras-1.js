/**
 * Extra demos (batch 1) — navigation, button/action, input/form, display/content.
 * Exports a frozen object `extras1` mapping term IDs to demo builder functions.
 */

/* ── SVG helpers ────────────────────────────────────────────── */
const svg = (w, h, inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
const ico = (p) => svg(16, 16, p)

const W = (inner) => `<div class="demo-wrapper">${inner}</div>`
const WS = (s, inner) => `<div class="demo-wrapper" style="${s}">${inner}</div>`

/* ── Reusable icons ─────────────────────────────────────────── */
const I = Object.freeze({
  ham: ico('<line x1="2" y1="4" x2="14" y2="4"/><line x1="2" y1="8" x2="14" y2="8"/><line x1="2" y1="12" x2="14" y2="12"/>'),
  search: ico('<circle cx="7" cy="7" r="4"/><line x1="10" y1="10" x2="14" y2="14"/>'),
  user: ico('<circle cx="8" cy="5" r="2.5"/><path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>'),
  chev: ico('<polyline points="4 6 8 10 12 6"/>'),
  chevR: ico('<polyline points="6 4 10 8 6 12"/>'),
  close: ico('<line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>'),
  check: ico('<polyline points="4 8 7 11 12 5"/>'),
  arrL: ico('<line x1="12" y1="8" x2="4" y2="8"/><polyline points="7 4 3 8 7 12"/>'),
  arrR: ico('<line x1="4" y1="8" x2="12" y2="8"/><polyline points="9 4 13 8 9 12"/>'),
  plus: ico('<line x1="8" y1="3" x2="8" y2="13"/><line x1="3" y1="8" x2="13" y2="8"/>'),
  upload: ico('<polyline points="4 8 8 4 12 8"/><line x1="8" y1="4" x2="8" y2="13"/><line x1="3" y1="14" x2="13" y2="14"/>'),
  link: ico('<path d="M7 11l-1.5 1.5a2.12 2.12 0 0 1-3-3L5 8"/><path d="M9 5l1.5-1.5a2.12 2.12 0 0 1 3 3L11 8"/>'),
  gear: ico('<circle cx="8" cy="8" r="2.5"/><path d="M8 1.5v1.3M8 13.2v1.3M1.5 8h1.3M13.2 8h1.3M3.4 3.4l.9.9M11.7 11.7l.9.9M3.4 12.6l.9-.9M11.7 4.3l.9-.9"/>'),
  layers: ico('<polygon points="8 1 15 5 8 9 1 5"/><polyline points="1 9 8 13 15 9"/>'),
  eye: ico('<path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/>'),
  file: ico('<path d="M9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5L9 1z"/><polyline points="9 1 9 5 13 5"/>'),
  code: ico('<polyline points="5 4 1 8 5 12"/><polyline points="11 4 15 8 11 12"/>'),
  cal: ico('<rect x="2" y="3" width="12" height="12" rx="1.5"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5" y1="1" x2="5" y2="4"/><line x1="11" y1="1" x2="11" y2="4"/>'),
  bell: ico('<path d="M8 14c.6 0 1-.4 1-1H7c0 .6.4 1 1 1z"/><path d="M12 10V7a4 4 0 1 0-8 0v3l-1 2h10l-1-2z"/>'),
  pin: ico('<path d="M8 1v4M4 5h8l-1 5H5L4 5zM6 10v4M10 10v4"/>'),
  bolt: ico('<polygon points="9 1 4 9 8 9 7 15 12 7 8 7"/>'),
  grid: ico('<rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/>'),
  list: ico('<line x1="5" y1="4" x2="14" y2="4"/><line x1="5" y1="8" x2="14" y2="8"/><line x1="5" y1="12" x2="14" y2="12"/><circle cx="2" cy="4" r="1" fill="currentColor" stroke="none"/><circle cx="2" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="2" cy="12" r="1" fill="currentColor" stroke="none"/>'),
  clock: ico('<circle cx="8" cy="8" r="6"/><polyline points="8 4 8 8 11 10"/>'),
  globe: ico('<circle cx="8" cy="8" r="6"/><path d="M2 8h12"/><path d="M8 2c2 2 2.5 4 2.5 6S10 12 8 14"/><path d="M8 2c-2 2-2.5 4-2.5 6S6 12 8 14"/>'),
  phone: ico('<rect x="4" y="1" width="8" height="14" rx="1.5"/><line x1="7" y1="12" x2="9" y2="12"/>'),
  mail: ico('<rect x="2" y="3" width="12" height="10" rx="1.5"/><polyline points="2 4 8 9 14 4"/>'),
  hash: ico('<line x1="5" y1="2" x2="4" y2="14"/><line x1="12" y1="2" x2="11" y2="14"/><line x1="2" y1="6" x2="14" y2="6"/><line x1="2" y1="10" x2="14" y2="10"/>'),
  image: ico('<rect x="2" y="2" width="12" height="12" rx="1.5"/><circle cx="6" cy="6" r="1.5" fill="currentColor" stroke="none"/><polyline points="14 10 10 6 4 12 14 12"/>'),
  dots: ico('<circle cx="4" cy="8" r="1.5" fill="currentColor" stroke="none"/><circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none"/>'),
})

/* ── Demos ──────────────────────────────────────────────────── */
export const extras1 = Object.freeze({

  /* ═══════════════════ NAVIGATION ═══════════════════ */

  'global-navigation': () => W(
    `<div style="width:300px;display:flex;align-items:center;justify-content:space-between;padding:6px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px">` +
    `<div style="display:flex;align-items:center;gap:10px"><div style="width:18px;height:18px;background:#3b82f6;border-radius:4px"></div>` +
    `<div style="display:flex;gap:8px;font-size:11px"><span style="color:var(--color-text-primary);font-weight:500">Home</span><span style="color:var(--color-text-tertiary)">Products</span><span style="color:var(--color-text-tertiary)">About</span></div></div>` +
    `<div style="width:22px;height:22px;border-radius:50%;background:#8b5cf6;display:flex;align-items:center;justify-content:center;color:white;font-size:9px">U</div></div>`
  ),

  'header-navigation': () => W(
    `<div style="width:240px;display:flex;align-items:center;justify-content:space-between;padding:5px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
    `<div style="width:16px;height:16px;background:#3b82f6;border-radius:3px"></div>` +
    `<div style="display:flex;gap:8px;font-size:10px"><span style="color:var(--color-text-primary);font-weight:500">Home</span><span style="color:var(--color-text-tertiary)">Docs</span><span style="color:var(--color-text-tertiary)">Blog</span></div></div>`
  ),

  'footer-navigation': () => W(
    `<div style="width:260px;padding:8px 12px;border-top:1px solid var(--color-border);display:flex;gap:20px">` +
    `<div style="display:flex;flex-direction:column;gap:3px"><div style="font-size:9px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase">Product</div><div style="font-size:10px;color:var(--color-text-secondary);line-height:1.7">Features<br>Pricing</div></div>` +
    `<div style="display:flex;flex-direction:column;gap:3px"><div style="font-size:9px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase">Company</div><div style="font-size:10px;color:var(--color-text-secondary);line-height:1.7">About<br>Blog</div></div>` +
    `<div style="display:flex;flex-direction:column;gap:3px"><div style="font-size:9px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase">Legal</div><div style="font-size:10px;color:var(--color-text-secondary);line-height:1.7">Privacy<br>Terms</div></div></div>`
  ),

  'side-navigation': () => WS('flex-direction:column;align-items:stretch;gap:2px;width:110px',
    ['Dashboard', 'Projects', 'Settings'].map((t, i) =>
      `<div style="padding:5px 10px;font-size:11px;border-radius:6px;${i === 1 ? 'background:#3b82f6;color:white;font-weight:500' : 'color:var(--color-text-secondary)'}">${t}</div>`
    ).join('')
  ),

  'navigation-drawer': () => W(
    `<div style="width:180px;height:80px;border:1.5px solid var(--color-border);border-radius:6px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;top:0;left:0;width:45%;height:100%;background:var(--color-surface);border-right:1px solid var(--color-border);box-shadow:2px 0 8px rgba(0,0,0,0.08);display:flex;flex-direction:column;padding:8px 6px;gap:4px;z-index:1">` +
    `<div style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Menu</div>` +
    ['Home', 'Profile', 'Settings'].map(t => `<div style="font-size:9px;color:var(--color-text-secondary)">${t}</div>`).join('') +
    `</div><div style="position:absolute;inset:0;background:rgba(0,0,0,0.15)"></div></div>`
  ),

  'offcanvas': () => W(
    `<div style="width:180px;height:70px;border:1.5px solid var(--color-border);border-radius:6px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;top:0;left:0;width:35%;height:100%;display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--color-text-tertiary);opacity:0.5">Page</div>` +
    `<div style="position:absolute;top:0;right:0;width:55%;height:100%;background:var(--color-surface);border-left:1px solid var(--color-border);box-shadow:-2px 0 8px rgba(0,0,0,0.08);display:flex;flex-direction:column;padding:8px 6px;gap:3px">` +
    `<div style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Panel</div>` +
    `<div style="font-size:9px;color:var(--color-text-secondary)">Option A</div>` +
    `<div style="font-size:9px;color:var(--color-text-secondary)">Option B</div></div></div>`
  ),

  'flyout-menu': () => W(
    `<div style="display:flex;align-items:flex-start;gap:0">` +
    `<div style="width:90px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:4px;font-size:10px">` +
    `<div style="padding:4px 6px;color:var(--color-text-secondary)">File</div>` +
    `<div style="padding:4px 6px;background:var(--color-surface-hover);border-radius:4px;color:var(--color-text-primary);display:flex;justify-content:space-between;align-items:center">Export <span style="font-size:8px">${I.chevR}</span></div>` +
    `<div style="padding:4px 6px;color:var(--color-text-secondary)">Close</div></div>` +
    `<div style="width:70px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:4px;font-size:10px;box-shadow:var(--shadow-md);margin-top:14px;margin-left:-2px">` +
    `<div style="padding:4px 6px;color:var(--color-text-secondary)">PDF</div>` +
    `<div style="padding:4px 6px;color:var(--color-text-secondary)">CSV</div></div></div>`
  ),

  'overflow-menu': () => W(
    `<div style="display:flex;align-items:center;gap:4px">` +
    `<button class="demo-btn demo-btn-ghost" style="font-size:11px;padding:4px 8px">Edit</button>` +
    `<button class="demo-btn demo-btn-ghost" style="font-size:11px;padding:4px 8px">Share</button>` +
    `<div style="position:relative"><button class="demo-btn-icon" style="width:28px;height:28px">${I.dots}</button>` +
    `<div style="position:absolute;top:100%;right:0;margin-top:4px;width:80px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:3px;box-shadow:var(--shadow-md);font-size:10px">` +
    `<div style="padding:3px 6px;color:var(--color-text-secondary)">Archive</div>` +
    `<div style="padding:3px 6px;color:var(--color-text-secondary)">Delete</div></div></div></div>`
  ),

  'menu-bar': () => W(
    `<div style="display:flex;gap:0;padding:3px 6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
    ['File', 'Edit', 'View', 'Help'].map((t, i) =>
      `<div style="padding:3px 8px;font-size:10px;border-radius:4px;${i === 0 ? 'background:var(--color-surface-hover);color:var(--color-text-primary);font-weight:500' : 'color:var(--color-text-secondary)'}">${t}</div>`
    ).join('') + `</div>`
  ),

  'tab-panel': () => WS('flex-direction:column;gap:0;width:200px',
    `<nav class="demo-tabs" style="margin-bottom:0"><span class="demo-tab active">Tab A</span><span class="demo-tab">Tab B</span><span class="demo-tab">Tab C</span></nav>` +
    `<div style="padding:8px 10px;border:1px solid var(--color-border);border-top:none;border-radius:0 0 6px 6px;font-size:10px;color:var(--color-text-secondary)">Content for Tab A</div>`
  ),

  'content-switcher': () => WS('gap:0',
    `<button class="demo-btn demo-btn-primary" style="border-radius:8px 0 0 8px;padding:5px 12px;font-size:11px;display:flex;align-items:center;gap:4px">${I.grid} Grid</button>` +
    `<button class="demo-btn demo-btn-ghost" style="border-radius:0 8px 8px 0;padding:5px 12px;font-size:11px;display:flex;align-items:center;gap:4px;border-left:0">${I.list} List</button>`
  ),

  'scrollspy': () => WS('flex-direction:column;align-items:flex-start;gap:3px;width:120px',
    ['Introduction', 'Features', 'Pricing', 'FAQ'].map((t, i) =>
      `<div style="padding:2px 8px;font-size:10px;border-left:2px solid ${i === 1 ? '#3b82f6' : 'transparent'};${i === 1 ? 'color:#3b82f6;font-weight:500' : 'color:var(--color-text-tertiary)'}">${t}</div>`
    ).join('')
  ),

  'pager': () => W(
    `<div style="display:flex;align-items:center;gap:10px;font-size:11px">` +
    `<span style="color:#3b82f6;cursor:pointer;display:flex;align-items:center;gap:3px">${I.arrL} Prev</span>` +
    `<span style="color:var(--color-border)">|</span>` +
    `<span style="color:#3b82f6;cursor:pointer;display:flex;align-items:center;gap:3px">Next ${I.arrR}</span></div>`
  ),

  'progress-stepper': () => {
    const steps = [1, 2, 3].map((n, i) => {
      const bg = i <= 1 ? '#3b82f6' : '#d1d5db'
      const c = i <= 1 ? 'white' : '#6b7280'
      const ct = i === 0 ? I.check : n
      const line = i < 2 ? `<div style="width:24px;height:2px;background:${i === 0 ? '#3b82f6' : '#d1d5db'}"></div>` : ''
      return `<div style="width:24px;height:24px;border-radius:50%;background:${bg};color:${c};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600">${ct}</div>${line}`
    }).join('')
    return WS('gap:0', steps)
  },

  'timeline-navigation': () => WS('flex-direction:column;gap:0;align-items:flex-start;padding-left:8px',
    ['Jan 2025', 'Mar 2025', 'May 2025'].map((t, i) =>
      `<div style="display:flex;align-items:center;gap:8px;position:relative">` +
      `<div style="width:8px;height:8px;border-radius:50%;background:${i === 2 ? '#3b82f6' : '#d1d5db'};z-index:1;flex-shrink:0"></div>` +
      (i < 2 ? `<div style="position:absolute;left:3px;top:8px;width:2px;height:18px;background:#e5e7eb"></div>` : '') +
      `<span style="font-size:10px;color:${i === 2 ? '#3b82f6' : 'var(--color-text-tertiary)'};padding-bottom:${i < 2 ? '10' : '0'}px">${t}</span></div>`
    ).join('')
  ),

  'tree-navigation': () => WS('flex-direction:column;align-items:flex-start;gap:2px;font-size:10px',
    `<div style="display:flex;align-items:center;gap:3px;color:var(--color-text-primary)"><span style="font-size:8px">▼</span> src</div>` +
    `<div style="padding-left:14px;display:flex;align-items:center;gap:3px;color:var(--color-text-primary)"><span style="font-size:8px">▼</span> components</div>` +
    `<div style="padding-left:28px;color:#3b82f6">Button.tsx</div>` +
    `<div style="padding-left:28px;color:var(--color-text-secondary)">Card.tsx</div>` +
    `<div style="padding-left:14px;display:flex;align-items:center;gap:3px;color:var(--color-text-tertiary)"><span style="font-size:8px">▶</span> utils</div>`
  ),

  'previous-next-link': () => W(
    `<div style="display:flex;justify-content:space-between;width:240px;font-size:11px">` +
    `<span style="color:#3b82f6;display:flex;align-items:center;gap:3px">${I.arrL} Previous Article</span>` +
    `<span style="color:#3b82f6;display:flex;align-items:center;gap:3px">Next Article ${I.arrR}</span></div>`
  ),

  'sticky-navigation': () => W(
    `<div style="display:flex;align-items:center;gap:6px;padding:5px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;box-shadow:var(--shadow-md)">` +
    `<span style="color:var(--color-text-tertiary)">${I.pin}</span>` +
    `<div style="display:flex;gap:6px;font-size:10px"><span style="color:var(--color-text-primary);font-weight:500">Home</span><span style="color:var(--color-text-tertiary)">Docs</span><span style="color:var(--color-text-tertiary)">API</span></div></div>`
  ),

  'floating-navigation': () => W(
    `<div style="padding:6px 14px;background:#1f2937;border-radius:99px;box-shadow:var(--shadow-lg);display:flex;align-items:center;gap:10px">` +
    `<span style="color:white">${I.layers}</span>` +
    `<span style="color:rgba(255,255,255,0.5)">${I.search}</span>` +
    `<span style="color:rgba(255,255,255,0.5)">${I.user}</span></div>`
  ),

  'dock': () => W(
    `<div style="display:flex;gap:4px;padding:6px 10px;background:rgba(255,255,255,0.7);border:1px solid var(--color-border);border-radius:14px;backdrop-filter:blur(4px)">` +
    ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899'].map(c =>
      `<div style="width:28px;height:28px;border-radius:8px;background:${c};transition:transform 0.2s" onmouseenter="this.style.transform='scale(1.3) translateY(-4px)'" onmouseleave="this.style.transform='scale(1)'"></div>`
    ).join('') + `</div>`
  ),

  'launcher': () => W(
    `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:8px">` +
    ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899'].map((c, i) =>
      `<div style="display:flex;flex-direction:column;align-items:center;gap:3px">` +
      `<div style="width:28px;height:28px;border-radius:8px;background:${c}"></div>` +
      `<span style="font-size:8px;color:var(--color-text-tertiary)">App ${i + 1}</span></div>`
    ).join('') + `</div>`
  ),

  'quick-switcher': () => W(
    `<div style="width:200px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;box-shadow:var(--shadow-lg);overflow:hidden">` +
    `<div style="display:flex;align-items:center;gap:6px;padding:8px 10px;border-bottom:1px solid var(--color-border-subtle)">` +
    `<span style="color:var(--color-text-tertiary)">${I.search}</span>` +
    `<span style="font-size:12px;color:var(--color-text-tertiary)">Go to...</span>` +
    `<kbd style="margin-left:auto;padding:1px 5px;background:var(--color-surface-hover);border:1px solid var(--color-border);border-radius:3px;font-size:9px;font-family:var(--font-mono)">⌘K</kbd></div>` +
    `<div style="padding:4px"><div style="padding:5px 8px;font-size:11px;background:var(--color-surface-hover);border-radius:4px;color:var(--color-text-primary)">Dashboard</div>` +
    `<div style="padding:5px 8px;font-size:11px;color:var(--color-text-secondary)">Settings</div></div></div>`
  ),

  'app-switcher': () => WS('gap:6px',
    ['#3b82f6', '#ef4444', '#22c55e', '#8b5cf6'].map((c, i) =>
      `<div style="display:flex;flex-direction:column;align-items:center;gap:3px">` +
      `<div style="width:28px;height:28px;border-radius:8px;background:${c};${i === 0 ? 'box-shadow:0 0 0 2px white,0 0 0 4px ' + c : ''}"></div>` +
      (i === 0 ? `<div style="width:4px;height:4px;border-radius:50%;background:${c}"></div>` : `<div style="width:4px;height:4px"></div>`) +
      `</div>`
    ).join('')
  ),

  'workspace-switcher': () => W(
    `<div style="width:160px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:4px;box-shadow:var(--shadow-md)">` +
    [{ n: 'Production', c: '#22c55e' }, { n: 'Staging', c: '#f59e0b' }, { n: 'Dev', c: '#d1d5db' }].map((w, i) =>
      `<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:4px;font-size:11px;${i === 0 ? 'background:var(--color-surface-hover);font-weight:500' : 'color:var(--color-text-secondary)'}">` +
      `<div style="width:6px;height:6px;border-radius:50%;background:${w.c}"></div>${w.n}</div>`
    ).join('') + `</div>`
  ),

  'table-of-contents-toc': () => WS('flex-direction:column;align-items:flex-start;gap:3px;width:130px',
    `<div style="font-size:10px;color:#3b82f6;font-weight:500;padding-left:0">Introduction</div>` +
    `<div style="font-size:10px;color:var(--color-text-tertiary);padding-left:10px">Getting Started</div>` +
    `<div style="font-size:10px;color:var(--color-text-tertiary);padding-left:10px">Installation</div>` +
    `<div style="font-size:10px;color:var(--color-text-tertiary);padding-left:0">API Reference</div>` +
    `<div style="font-size:10px;color:var(--color-text-tertiary);padding-left:10px">Methods</div>`
  ),

  'anchor-link': () => W(
    `<div style="display:flex;align-items:center;gap:4px;font-size:12px">` +
    `<span style="color:#3b82f6">${I.hash}</span>` +
    `<span style="color:#3b82f6;text-decoration:underline;cursor:pointer">Section Title</span></div>`
  ),

  'in-page-navigation': () => W(
    `<div style="display:flex;gap:10px;padding:4px 0;border-bottom:2px solid var(--color-border-subtle);font-size:11px">` +
    ['Overview', 'Features', 'Pricing'].map((t, i) =>
      `<span style="padding-bottom:4px;${i === 0 ? 'border-bottom:2px solid #3b82f6;margin-bottom:-2px;color:#3b82f6;font-weight:500' : 'color:var(--color-text-tertiary)'}">${t}</span>`
    ).join('') + `</div>`
  ),

  'sitemap': () => WS('flex-direction:column;align-items:flex-start;gap:2px;font-size:10px',
    `<div style="color:var(--color-text-primary);font-weight:500">Home</div>` +
    `<div style="padding-left:12px;color:var(--color-text-secondary)">Products</div>` +
    `<div style="padding-left:24px;color:var(--color-text-tertiary)">Product A</div>` +
    `<div style="padding-left:24px;color:var(--color-text-tertiary)">Product B</div>` +
    `<div style="padding-left:12px;color:var(--color-text-secondary)">About</div>` +
    `<div style="padding-left:12px;color:var(--color-text-secondary)">Contact</div>`
  ),

  'related-links': () => W(
    `<div style="width:140px;padding:8px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px">` +
    `<div style="font-size:10px;font-weight:600;color:var(--color-text-primary);margin-bottom:4px">Related</div>` +
    ['Getting Started', 'API Docs', 'Examples'].map(t =>
      `<div style="font-size:10px;color:#3b82f6;line-height:1.8">${t}</div>`
    ).join('') + `</div>`
  ),

  'deep-link': () => W(
    `<div style="display:flex;align-items:center;gap:6px">` +
    `<div style="width:32px;height:50px;border:2px solid var(--color-border);border-radius:6px;position:relative;display:flex;align-items:center;justify-content:center">` +
    `<div style="width:12px;height:12px;background:var(--color-surface-hover);border-radius:2px"></div></div>` +
    `<span style="color:#3b82f6;display:flex;align-items:center">${I.arrR}</span>` +
    `<span style="color:#3b82f6">${I.link}</span></div>`
  ),


  /* ═══════════════════ BUTTON/ACTION ═══════════════════ */

  'inline-action': () => W(
    `<span style="font-size:12px;color:var(--color-text-secondary)">User name: John <span style="color:#3b82f6;cursor:pointer;font-size:11px">[edit]</span></span>`
  ),

  'batch-action': () => W(
    `<div style="display:flex;align-items:center;gap:6px;padding:6px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px">` +
    `<span style="font-size:10px;color:var(--color-text-tertiary)">3 selected</span>` +
    `<button class="demo-btn demo-btn-primary" style="padding:4px 10px;font-size:11px">Edit</button>` +
    `<button class="demo-btn demo-btn-destructive" style="padding:4px 10px;font-size:11px">Delete</button></div>`
  ),

  'quick-action': () => W(
    `<button class="demo-btn-icon" style="width:32px;height:32px;background:var(--color-surface-hover);color:#f59e0b">${I.bolt}</button>`
  ),

  'app-bar': () => W(
    `<div style="width:260px;display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px">` +
    `<div style="display:flex;align-items:center;gap:8px"><span style="color:var(--color-text-tertiary)">${I.ham}</span><span style="font-size:12px;font-weight:500;color:var(--color-text-primary)">App Title</span></div>` +
    `<div style="display:flex;gap:4px"><span style="color:var(--color-text-tertiary)">${I.search}</span><span style="color:var(--color-text-tertiary)">${I.bell}</span></div></div>`
  ),

  'command-bar': () => W(
    `<div style="width:260px;display:flex;align-items:center;gap:6px;padding:4px 8px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px">` +
    `<button class="demo-btn-icon" style="width:24px;height:24px">${I.code}</button>` +
    `<button class="demo-btn-icon" style="width:24px;height:24px">${I.eye}</button>` +
    `<div style="width:1px;height:16px;background:var(--color-border);margin:0 2px"></div>` +
    `<div style="flex:1;display:flex;align-items:center;gap:4px;padding:2px 6px;background:var(--color-surface-hover);border-radius:4px"><span style="color:var(--color-text-tertiary)">${I.search}</span><span style="font-size:10px;color:var(--color-text-tertiary)">Search...</span></div></div>`
  ),

  'ribbon': () => WS('flex-direction:column;gap:0;width:280px',
    `<div style="display:flex;gap:0;padding:0 6px;border-bottom:1px solid var(--color-border);font-size:9px">` +
    `<div style="padding:3px 8px;border-bottom:2px solid #3b82f6;color:#3b82f6;font-weight:500">Home</div>` +
    `<div style="padding:3px 8px;color:var(--color-text-tertiary)">Insert</div>` +
    `<div style="padding:3px 8px;color:var(--color-text-tertiary)">View</div></div>` +
    `<div style="display:flex;gap:2px;padding:4px 6px;background:var(--color-surface);border:1px solid var(--color-border);border-top:0;border-radius:0 0 6px 6px">` +
    `<div style="display:flex;gap:2px;padding-right:6px;border-right:1px solid var(--color-border-subtle)">` +
    `<button class="demo-btn-icon" style="width:22px;height:22px">${I.file}</button>` +
    `<button class="demo-btn-icon" style="width:22px;height:22px">${I.code}</button>` +
    `<button class="demo-btn-icon" style="width:22px;height:22px">${I.image}</button></div>` +
    `<div style="display:flex;gap:2px;padding-left:4px">` +
    `<button class="demo-btn-icon" style="width:22px;height:22px">${I.gear}</button>` +
    `<button class="demo-btn-icon" style="width:22px;height:22px">${I.eye}</button></div></div>`
  ),

  'toggle-group': () => WS('gap:0',
    ['Left', 'Center', 'Right'].map((t, i) =>
      `<button class="demo-btn ${i === 1 ? 'demo-btn-primary' : 'demo-btn-ghost'}" style="border-radius:${i === 0 ? '8px 0 0 8px' : i === 2 ? '0 8px 8px 0' : '0'};padding:5px 12px;font-size:11px;${i > 0 ? 'border-left:0' : ''}">${t}</button>`
    ).join('')
  ),


  /* ═══════════════════ INPUT/FORM ═══════════════════ */

  'form': () => WS('flex-direction:column;align-items:stretch;gap:6px;width:180px',
    `<div style="display:flex;flex-direction:column;gap:3px"><label style="font-size:10px;font-weight:600;color:var(--color-text-primary)">Name</label><input class="demo-input" style="width:100%" placeholder="Enter name..." readonly></div>` +
    `<button class="demo-btn demo-btn-primary" style="font-size:11px">Submit</button>`
  ),

  'email-field': () => W(
    `<div style="position:relative;display:inline-flex;align-items:center">` +
    `<span style="position:absolute;left:10px;color:#9ca3af">${I.mail}</span>` +
    `<input class="demo-input" style="padding-left:32px" placeholder="you@example.com" readonly></div>`
  ),

  'url-field': () => W(
    `<div style="display:flex;align-items:center;gap:0">` +
    `<div style="padding:6px 8px;background:var(--color-surface-hover);border:1.5px solid #d1d5db;border-right:0;border-radius:8px 0 0 8px;font-size:10px;color:var(--color-text-tertiary);display:flex;align-items:center;gap:4px">${I.globe} https://</div>` +
    `<input class="demo-input" style="border-radius:0 8px 8px 0;width:110px" placeholder="example.com" readonly></div>`
  ),

  'tel-field': () => W(
    `<div style="position:relative;display:inline-flex;align-items:center">` +
    `<span style="position:absolute;left:10px;color:#9ca3af">${I.phone}</span>` +
    `<input class="demo-input" style="padding-left:32px" value="090-1234-5678" readonly></div>`
  ),

  'time-picker': () => W(
    `<div style="position:relative;display:inline-flex;align-items:center">` +
    `<span style="position:absolute;left:10px;color:#9ca3af">${I.clock}</span>` +
    `<input class="demo-input" style="padding-left:32px" value="14:30" readonly></div>`
  ),

  'date-range-picker': () => WS('gap:6px;align-items:center',
    `<input class="demo-input" style="width:90px;font-size:11px" value="2026-05-01" readonly>` +
    `<span style="font-size:12px;color:var(--color-text-tertiary)">→</span>` +
    `<input class="demo-input" style="width:90px;font-size:11px" value="2026-05-17" readonly>`
  ),

  'calendar-picker': () => W(
    `<div style="width:160px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:6px;box-shadow:var(--shadow-md)">` +
    `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;font-size:10px;font-weight:500;padding:0 2px">` +
    `<span style="color:var(--color-text-tertiary)">${I.arrL}</span><span>May 2026</span><span style="color:var(--color-text-tertiary)">${I.arrR}</span></div>` +
    `<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:1px;font-size:8px;text-align:center">` +
    ['S','M','T','W','T','F','S'].map(d => `<div style="color:var(--color-text-tertiary);padding:2px">${d}</div>`).join('') +
    [' ',' ',' ',' ',' ',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(d =>
      `<div style="padding:2px;border-radius:3px;${d === 17 ? 'background:#3b82f6;color:white;font-weight:600' : d === ' ' ? '' : 'color:var(--color-text-secondary)'}">${d === ' ' ? '' : d}</div>`
    ).join('') + `</div></div>`
  ),

  'dropzone': () => W(
    `<div style="width:180px;height:60px;border:2px dashed #d1d5db;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#9ca3af;font-size:11px;cursor:pointer">${I.upload}<span>Drop files here</span></div>`
  ),

  'autocomplete': () => W(
    `<div style="position:relative;width:160px">` +
    `<input class="demo-input" style="width:100%" value="Rea" readonly>` +
    `<div style="position:absolute;top:100%;left:0;right:0;margin-top:4px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:3px;box-shadow:var(--shadow-md);font-size:11px">` +
    `<div style="padding:4px 6px;background:var(--color-surface-hover);border-radius:4px;color:var(--color-text-primary)"><strong>Rea</strong>ct</div>` +
    `<div style="padding:4px 6px;color:var(--color-text-secondary)"><strong>Rea</strong>d</div></div></div>`
  ),

  'listbox': () => WS('flex-direction:column;gap:0;width:130px',
    `<div style="border:1px solid var(--color-border);border-radius:6px;overflow:hidden;font-size:11px">` +
    ['Apple', 'Banana', 'Cherry', 'Date'].map((t, i) =>
      `<div style="padding:4px 8px;${i === 1 ? 'background:#3b82f6;color:white' : 'color:var(--color-text-secondary)'};${i < 3 ? 'border-bottom:1px solid var(--color-border-subtle)' : ''}">${t}</div>`
    ).join('') + `</div>`
  ),

  'multiselect': () => W(
    `<div style="width:160px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:4px;box-shadow:var(--shadow-md);font-size:11px">` +
    [{ t: 'React', c: true }, { t: 'Vue', c: true }, { t: 'Angular', c: false }].map(({ t, c }) =>
      `<div style="display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:4px">` +
      `<div style="width:12px;height:12px;border:1.5px solid ${c ? '#3b82f6' : '#d1d5db'};border-radius:3px;background:${c ? '#3b82f6' : 'transparent'};display:flex;align-items:center;justify-content:center;color:white;font-size:8px">${c ? I.check : ''}</div>` +
      `<span style="color:var(--color-text-secondary)">${t}</span></div>`
    ).join('') + `</div>`
  ),

  'tokenized-input': () => W(
    `<div style="display:flex;align-items:center;gap:4px;padding:4px 8px;border:1.5px solid #d1d5db;border-radius:8px;background:var(--color-surface);min-width:180px;flex-wrap:wrap">` +
    `<span class="demo-chip" style="font-size:10px;padding:2px 8px">React <span style="opacity:0.5;margin-left:2px">×</span></span>` +
    `<span class="demo-chip" style="font-size:10px;padding:2px 8px">TypeScript <span style="opacity:0.5;margin-left:2px">×</span></span>` +
    `<span style="font-size:10px;color:#9ca3af">add...</span></div>`
  ),

  'chip-input': () => W(
    `<div style="display:flex;align-items:center;gap:4px;padding:4px 8px;border:1.5px solid #d1d5db;border-radius:8px;background:var(--color-surface);min-width:160px;flex-wrap:wrap">` +
    `<span class="demo-chip" style="font-size:10px;padding:2px 8px">Design</span>` +
    `<span class="demo-chip" style="font-size:10px;padding:2px 8px">UI</span>` +
    `<span style="font-size:10px;color:#9ca3af">type...</span></div>`
  ),

  'multi-thumb-slider': () => W(
    `<div style="position:relative;width:160px;height:20px;display:flex;align-items:center">` +
    `<div style="position:absolute;left:0;right:0;height:4px;background:#e5e7eb;border-radius:2px"></div>` +
    `<div style="position:absolute;left:25%;right:35%;height:4px;background:#3b82f6;border-radius:2px"></div>` +
    `<div style="position:absolute;left:25%;width:14px;height:14px;background:white;border:2px solid #3b82f6;border-radius:50%;transform:translateX(-50%);box-shadow:0 1px 3px rgba(0,0,0,0.15)"></div>` +
    `<div style="position:absolute;left:65%;width:14px;height:14px;background:white;border:2px solid #3b82f6;border-radius:50%;transform:translateX(-50%);box-shadow:0 1px 3px rgba(0,0,0,0.15)"></div></div>`
  ),

  'pin-input': () => WS('gap:6px',
    ['5', '2', '8', ''].map(v =>
      `<div style="width:34px;height:40px;border:1.5px solid ${v ? '#3b82f6' : '#d1d5db'};border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:600;color:var(--color-text-primary)">${v}</div>`
    ).join('')
  ),

  'form-wizard': () => WS('flex-direction:column;gap:6px;width:200px',
    `<div style="display:flex;align-items:center;justify-content:center;gap:0">` +
    [1, 2, 3].map((n, i) => {
      const bg = i <= 0 ? '#3b82f6' : '#d1d5db'
      const c = i <= 0 ? 'white' : '#6b7280'
      const line = i < 2 ? `<div style="width:30px;height:2px;background:${i === 0 ? '#3b82f6' : '#d1d5db'}"></div>` : ''
      return `<div style="width:20px;height:20px;border-radius:50%;background:${bg};color:${c};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600">${n}</div>${line}`
    }).join('') + `</div>` +
    `<div style="display:flex;flex-direction:column;gap:4px">` +
    `<label style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Step 1: Name</label>` +
    `<input class="demo-input" style="width:100%;font-size:10px" placeholder="Enter name..." readonly></div>`
  ),

  'matrix-input': () => W(
    `<table style="border-collapse:collapse;font-size:9px">` +
    `<thead><tr><th></th><th style="padding:2px 6px;color:var(--color-text-tertiary)">Low</th><th style="padding:2px 6px;color:var(--color-text-tertiary)">Med</th><th style="padding:2px 6px;color:var(--color-text-tertiary)">High</th></tr></thead>` +
    `<tbody>` +
    [['Speed', 0], ['Quality', 1], ['Cost', 2]].map(([label, sel]) =>
      `<tr><td style="padding:2px 6px;color:var(--color-text-secondary)">${label}</td>` +
      [0, 1, 2].map(i =>
        `<td style="padding:2px;text-align:center"><div style="width:12px;height:12px;border-radius:50%;border:1.5px solid ${i === sel ? '#3b82f6' : '#d1d5db'};margin:auto;${i === sel ? 'background:#3b82f6' : ''}"></div></td>`
      ).join('') + `</tr>`
    ).join('') + `</tbody></table>`
  ),


  /* ═══════════════════ DISPLAY/CONTENT ═══════════════════ */

  'tile': () => W(
    `<div style="width:64px;height:64px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer">` +
    `<span style="color:#3b82f6">${I.layers}</span>` +
    `<span style="font-size:9px;color:var(--color-text-secondary)">Projects</span></div>`
  ),

  'panel': () => W(
    `<div style="width:180px;border:1px solid var(--color-border);border-radius:8px;overflow:hidden">` +
    `<div style="padding:6px 10px;background:var(--color-surface-hover);border-bottom:1px solid var(--color-border);font-size:11px;font-weight:500">Panel Header</div>` +
    `<div style="padding:8px 10px;font-size:10px;color:var(--color-text-secondary)">Panel content area.</div></div>`
  ),

  'gallery': () => WS('gap:4px',
    ['#667eea', '#f093fb', '#4facfe', '#43e97b'].map(c =>
      `<div style="width:40px;height:40px;border-radius:6px;background:linear-gradient(135deg,${c},${c}88);cursor:pointer"></div>`
    ).join('')
  ),

  'lightbox': () => W(
    `<div style="width:200px;height:80px;background:rgba(0,0,0,0.75);border-radius:8px;display:flex;align-items:center;justify-content:center;position:relative">` +
    `<div style="width:100px;height:60px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:4px"></div>` +
    `<div style="position:absolute;top:6px;right:8px;color:rgba(255,255,255,0.7);cursor:pointer">${I.close}</div></div>`
  ),

  'kanban-board': () => W(
    `<div style="display:flex;gap:4px;width:240px">` +
    [{ t: 'Todo', items: ['Task A'] }, { t: 'In Progress', items: ['Task B'] }, { t: 'Done', items: ['Task C'] }].map(col =>
      `<div style="flex:1;background:var(--color-surface-hover);border-radius:6px;padding:4px">` +
      `<div style="font-size:8px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase;margin-bottom:4px;padding:0 2px">${col.t}</div>` +
      col.items.map(item =>
        `<div style="padding:4px 6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;font-size:9px;color:var(--color-text-secondary)">${item}</div>`
      ).join('') + `</div>`
    ).join('') + `</div>`
  ),

  'calendar-view': () => W(
    `<div style="width:160px;font-size:9px">` +
    `<div style="text-align:center;font-weight:500;margin-bottom:4px">May 2026</div>` +
    `<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:1px;text-align:center">` +
    ['S','M','T','W','T','F','S'].map(d => `<div style="color:var(--color-text-tertiary);padding:2px;font-size:8px">${d}</div>`).join('') +
    Array.from({ length: 21 }, (_, i) => i + 1).map(d =>
      `<div style="padding:2px;border-radius:3px;${d === 17 ? 'background:#3b82f6;color:white;font-weight:600' : [5, 12].includes(d) ? 'background:rgba(59,130,246,0.1);color:#3b82f6' : 'color:var(--color-text-secondary)'}">${d}</div>`
    ).join('') + `</div></div>`
  ),

  'grid-view': () => W(
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;width:160px">` +
    ['A', 'B', 'C', 'D'].map(t =>
      `<div style="height:36px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--color-text-secondary)">Card ${t}</div>`
    ).join('') + `</div>`
  ),

  'list-view': () => WS('flex-direction:column;align-items:stretch;gap:0;width:180px',
    ['First item', 'Second item', 'Third item'].map(t =>
      `<div style="padding:6px 10px;border-bottom:1px solid var(--color-border-subtle);font-size:11px;color:var(--color-text-secondary)">${t}</div>`
    ).join('')
  ),

  'master-detail-view': () => W(
    `<div style="display:flex;width:220px;height:70px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="width:35%;border-right:1px solid var(--color-border);display:flex;flex-direction:column;font-size:9px">` +
    ['Item 1', 'Item 2', 'Item 3'].map((t, i) =>
      `<div style="padding:4px 6px;${i === 1 ? 'background:var(--color-surface-hover);color:#3b82f6;font-weight:500' : 'color:var(--color-text-secondary)'}">${t}</div>`
    ).join('') +
    `</div><div style="flex:1;padding:8px;font-size:10px;color:var(--color-text-secondary)"><div style="font-weight:500;color:var(--color-text-primary);margin-bottom:4px">Item 2</div>Detail content here</div></div>`
  ),

  'split-view': () => W(
    `<div style="display:flex;width:180px;height:60px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="flex:1;display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--color-text-tertiary)">Pane A</div>` +
    `<div style="width:4px;background:var(--color-border);cursor:col-resize"></div>` +
    `<div style="flex:1;display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--color-text-tertiary)">Pane B</div></div>`
  ),

  'figure': () => WS('flex-direction:column;gap:4px',
    `<div style="width:120px;height:50px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:6px"></div>` +
    `<span style="font-size:10px;color:var(--color-text-tertiary);text-align:center">Figure 1: Description</span>`
  ),

  'caption': () => WS('flex-direction:column;gap:3px',
    `<div style="width:100px;height:40px;background:linear-gradient(135deg,#4facfe,#43e97b);border-radius:6px"></div>` +
    `<span style="font-size:10px;color:var(--color-text-tertiary);font-style:italic">A scenic view</span>`
  ),

  'feed': () => WS('flex-direction:column;gap:6px;width:200px',
    [{ n: 'A', c: '#3b82f6', t: 'Just shipped a new feature!' }, { n: 'B', c: '#8b5cf6', t: 'Working on the design system.' }].map(p =>
      `<div style="display:flex;gap:6px;align-items:flex-start">` +
      `<div style="width:22px;height:22px;border-radius:50%;background:${p.c};display:flex;align-items:center;justify-content:center;color:white;font-size:9px;flex-shrink:0">${p.n}</div>` +
      `<div style="font-size:10px;color:var(--color-text-secondary);line-height:1.4">${p.t}</div></div>`
    ).join('')
  ),

  'activity-feed': () => WS('flex-direction:column;gap:0;padding-left:10px',
    [{ u: 'Alice', a: 'created a task', t: '2m ago' }, { u: 'Bob', a: 'closed issue', t: '5m ago' }, { u: 'Eve', a: 'commented', t: '10m ago' }].map((item, i) =>
      `<div style="display:flex;align-items:flex-start;gap:8px;position:relative;padding-bottom:${i < 2 ? '8' : '0'}px">` +
      `<div style="position:absolute;left:-10px;top:3px;width:6px;height:6px;border-radius:50%;background:${i === 0 ? '#3b82f6' : '#d1d5db'};z-index:1"></div>` +
      (i < 2 ? `<div style="position:absolute;left:-8px;top:9px;width:2px;height:14px;background:#e5e7eb"></div>` : '') +
      `<span style="font-size:9px;color:var(--color-text-secondary)"><strong>${item.u}</strong> ${item.a} <span style="color:var(--color-text-tertiary)">${item.t}</span></span></div>`
    ).join('')
  ),

  'news-feed': () => WS('flex-direction:column;gap:4px;width:200px',
    [{ t: 'New Release v3.0', d: 'Major update with...' }, { t: 'Security Patch', d: 'Fixed vulnerability...' }].map(article =>
      `<div style="padding:6px 8px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
      `<div style="font-size:11px;font-weight:500;color:var(--color-text-primary)">${article.t}</div>` +
      `<div style="font-size:9px;color:var(--color-text-tertiary);margin-top:2px">${article.d}</div></div>`
    ).join('')
  ),

  'board-view': () => W(
    `<div style="display:flex;gap:4px;width:200px">` +
    ['Backlog', 'Active', 'Review'].map(col =>
      `<div style="flex:1;background:var(--color-surface-hover);border-radius:6px;padding:4px">` +
      `<div style="font-size:8px;font-weight:600;color:var(--color-text-tertiary);margin-bottom:3px;padding:0 2px">${col}</div>` +
      `<div style="padding:3px 5px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:3px;font-size:8px;color:var(--color-text-secondary)">Item</div></div>`
    ).join('') + `</div>`
  ),

  'outline-view': () => WS('flex-direction:column;align-items:flex-start;gap:2px;font-size:10px',
    `<div style="color:var(--color-text-primary);font-weight:500">1. Introduction</div>` +
    `<div style="padding-left:14px;color:var(--color-text-secondary)">1.1 Overview</div>` +
    `<div style="padding-left:14px;color:var(--color-text-secondary)">1.2 Goals</div>` +
    `<div style="color:var(--color-text-primary);font-weight:500">2. Architecture</div>` +
    `<div style="padding-left:14px;color:var(--color-text-secondary)">2.1 Components</div>`
  ),

  'preview-pane': () => W(
    `<div style="display:flex;width:220px;height:70px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="width:35%;border-right:1px solid var(--color-border);display:flex;flex-direction:column;font-size:9px">` +
    ['email-1.md', 'email-2.md', 'email-3.md'].map((t, i) =>
      `<div style="padding:4px 6px;${i === 0 ? 'background:var(--color-surface-hover);color:#3b82f6;font-weight:500' : 'color:var(--color-text-secondary)'}">${t}</div>`
    ).join('') +
    `</div><div style="flex:1;padding:6px;font-size:9px;color:var(--color-text-secondary)"><div style="font-weight:500;color:var(--color-text-primary);margin-bottom:2px">email-1.md</div>Preview of file content...</div></div>`
  ),

  'widget-card': () => W(
    `<div style="padding:8px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;width:120px">` +
    `<div style="font-size:9px;color:var(--color-text-tertiary)">Revenue</div>` +
    `<div style="font-size:18px;font-weight:700;margin-top:2px">$12.4k</div>` +
    `<div style="margin-top:4px">${svg(80, 20, '<polyline points="2,16 15,10 30,14 45,6 60,12 78,4" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>')}</div></div>`
  ),
})
