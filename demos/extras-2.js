/**
 * Extra demos (batch 2) — table/data, overlay/popup, state/interaction,
 * collapse/expand, search/filter, loading/progress/feedback,
 * scroll/position, layout/structure.
 * Exports a frozen object `extras2` mapping term IDs to demo builder functions.
 */

/* ── Layout helpers ───────────────────────────────────────── */
const W = (inner) => `<div class="demo-wrapper">${inner}</div>`
const WS = (s, inner) => `<div class="demo-wrapper" style="${s}">${inner}</div>`
const svg = (w, h, inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
const ico = (p) => svg(16, 16, p)

/* ── Reusable icons ───────────────────────────────────────── */
const CHK = ico('<polyline points="4 8 7 11 12 5"/>')
const CHEV = ico('<polyline points="4 6 8 10 12 6"/>')
const CLOSE = ico('<line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>')
const SEARCH = ico('<circle cx="7" cy="7" r="4"/><line x1="10" y1="10" x2="14" y2="14"/>')
const CHEVR = ico('<polyline points="6 4 10 8 6 12"/>')
const PENCIL = ico('<path d="M11.5 1.5l3 3L5 14H2v-3L11.5 1.5z"/>')
const FUNNEL = ico('<polygon points="1 1 15 1 9 9 9 15 7 15 7 9"/>')
const INFO = ico('<circle cx="8" cy="8" r="6"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>')
const WARN = ico('<path d="M8 1L1 15h14L8 1z"/><line x1="8" y1="6" x2="8" y2="10"/><circle cx="8" cy="12" r="0.5" fill="currentColor" stroke="none"/>')
const LOCK = ico('<rect x="4" y="7" width="8" height="7" rx="1"/><path d="M6 7V5a2 2 0 0 1 4 0v2"/>')
const UNDO = ico('<path d="M4 7l-3 3 3 3"/><path d="M1 10h9a4 4 0 0 0 0-8H8"/>')
const REDO = ico('<path d="M12 7l3 3-3 3"/><path d="M15 10H6a4 4 0 0 1 0-8h2"/>')
const CLOCK = ico('<circle cx="8" cy="8" r="6"/><polyline points="8 4 8 8 11 10"/>')

/* ── Shared micro‑builders ────────────────────────────────── */
const tblCell = (text, extra = '') => `<td style="padding:3px 8px;font-size:10px;color:var(--color-text-secondary);border-bottom:1px solid var(--color-border-subtle);${extra}">${text}</td>`
const tblHead = (text, extra = '') => `<th style="padding:4px 8px;font-size:9px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase;text-align:left;border-bottom:1px solid var(--color-border);${extra}">${text}</th>`
const miniCb = (checked) => `<span class="demo-checkbox" style="width:14px;height:14px"><span class="demo-checkbox-box" style="width:14px;height:14px;${checked ? 'background:#3b82f6;border-color:#3b82f6' : ''}">${checked ? `<span class="demo-checkbox-check" style="color:white">${CHK}</span>` : ''}</span></span>`
const miniCbDash = () => `<span class="demo-checkbox" style="width:14px;height:14px"><span class="demo-checkbox-box" style="width:14px;height:14px;background:#3b82f6;border-color:#3b82f6"><span class="demo-checkbox-check" style="color:white;font-size:12px;font-weight:700">–</span></span></span>`

/* ═══════════════════════════════════════════════════════════ */
export const extras2 = Object.freeze({

  /* ═══════════════════ TABLE / DATA ═══════════════════ */

  'data-grid': () => W(
    `<table class="demo-table" style="width:280px;border-collapse:collapse;font-size:10px">` +
    `<tr>${tblHead('Name')}${tblHead('Role')}${tblHead('Status')}</tr>` +
    `<tr>${tblCell('Alice')}${tblCell('<span style="padding:2px 6px;border:2px solid #3b82f6;border-radius:4px;background:rgba(59,130,246,0.06)">Engineer</span>', 'position:relative')}${tblCell('Active')}</tr>` +
    `<tr>${tblCell('Bob')}${tblCell('Designer')}${tblCell('Away')}</tr></table>`
  ),

  'sort': () => W(
    `<div style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;font-weight:600;color:var(--color-text-primary)">` +
    `Name <span style="display:flex;flex-direction:column;line-height:0;gap:1px"><span style="font-size:8px;color:var(--color-text-tertiary)">▲</span><span style="font-size:8px;color:var(--color-text-tertiary)">▼</span></span></div>`
  ),

  'ascending-sort': () => W(
    `<div style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;font-weight:600;color:var(--color-text-primary)">` +
    `Name <span style="font-size:10px;color:#3b82f6">↑</span></div>`
  ),

  'descending-sort': () => W(
    `<div style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;font-weight:600;color:var(--color-text-primary)">` +
    `Name <span style="font-size:10px;color:#3b82f6">↓</span></div>`
  ),

  'filter': () => W(
    `<div style="display:inline-flex;align-items:center;gap:6px;padding:5px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;width:200px">` +
    `<span style="color:var(--color-text-tertiary)">${FUNNEL}</span>` +
    `<input class="demo-input" style="border:none;padding:0;font-size:11px;background:transparent;flex:1;outline:none" placeholder="Filter..." readonly /></div>`
  ),

  'row-selection': () => W(
    `<table class="demo-table" style="width:240px;border-collapse:collapse">` +
    `<tr>${tblHead('')}${tblHead('Name')}${tblHead('Email')}</tr>` +
    `<tr><td style="padding:3px 6px;border-bottom:1px solid var(--color-border-subtle)">${miniCb(true)}</td>${tblCell('<span style="font-weight:500;color:var(--color-text-primary)">Alice</span>')}${tblCell('alice@co')}</tr>` +
    `<tr style="background:rgba(59,130,246,0.04)"><td style="padding:3px 6px;border-bottom:1px solid var(--color-border-subtle)">${miniCb(false)}</td>${tblCell('Bob')}${tblCell('bob@co')}</tr></table>`
  ),

  'select-all': () => W(
    `<table class="demo-table" style="width:220px;border-collapse:collapse">` +
    `<tr><th style="padding:4px 6px;border-bottom:1px solid var(--color-border)">${miniCbDash()}</th>${tblHead('Item')}${tblHead('Qty')}</tr>` +
    `<tr><td style="padding:3px 6px;border-bottom:1px solid var(--color-border-subtle)">${miniCb(true)}</td>${tblCell('Widget A')}${tblCell('5')}</tr>` +
    `<tr><td style="padding:3px 6px;border-bottom:1px solid var(--color-border-subtle)">${miniCb(false)}</td>${tblCell('Widget B')}${tblCell('3')}</tr></table>`
  ),

  'expandable-row': () => W(
    `<table class="demo-table" style="width:260px;border-collapse:collapse">` +
    `<tr>${tblHead('')}${tblHead('Order')}${tblHead('Total')}</tr>` +
    `<tr><td style="padding:3px 6px;border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-tertiary)">${CHEV}</td>${tblCell('<span style="font-weight:500;color:var(--color-text-primary)">#1024</span>')}${tblCell('$120')}</tr>` +
    `<tr><td colspan="3" style="padding:4px 8px 6px 28px;font-size:9px;color:var(--color-text-tertiary);background:var(--color-surface);border-bottom:1px solid var(--color-border-subtle)">2× T-Shirt ($40) &nbsp;·&nbsp; 1× Hoodie ($80)</td></tr>` +
    `<tr><td style="padding:3px 6px;border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-tertiary)">${CHEVR}</td>${tblCell('#1025')}${tblCell('$85')}</tr></table>`
  ),

  'inline-edit': () => W(
    `<table class="demo-table" style="width:220px;border-collapse:collapse">` +
    `<tr>${tblHead('Field')}${tblHead('Value')}</tr>` +
    `<tr>${tblCell('Name')}${tblCell(`<span style="display:inline-flex;align-items:center;gap:4px;cursor:pointer">Alice <span style="color:var(--color-text-tertiary)">${PENCIL}</span></span>`)}</tr>` +
    `<tr>${tblCell('Email')}${tblCell('alice@co')}</tr></table>`
  ),

  'sticky-header': () => W(
    `<div style="width:220px;height:80px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative">` +
    `<div style="position:sticky;top:0;z-index:1;background:var(--color-surface);border-bottom:1px solid var(--color-border);padding:4px 8px;font-size:9px;font-weight:600;color:var(--color-text-tertiary);display:flex;gap:20px"><span>Name</span><span>Role</span></div>` +
    `<div style="padding:0 8px;font-size:10px;color:var(--color-text-secondary);line-height:1.8">Alice — Eng<br>Bob — Design<br>Carol — PM<br>Dave — QA</div>` +
    `<div style="position:absolute;bottom:0;left:0;right:0;height:16px;background:linear-gradient(transparent, var(--color-bg));pointer-events:none"></div></div>`
  ),

  'frozen-column': () => W(
    `<table class="demo-table" style="width:260px;border-collapse:collapse">` +
    `<tr>${tblHead('ID', 'background:rgba(59,130,246,0.06);position:sticky;left:0')}${tblHead('Name')}${tblHead('Role')}${tblHead('Dept')}</tr>` +
    `<tr>${tblCell('<strong>001</strong>', 'background:rgba(59,130,246,0.04);font-weight:500;color:var(--color-text-primary)')}${tblCell('Alice')}${tblCell('Eng')}${tblCell('Product')}</tr>` +
    `<tr>${tblCell('<strong>002</strong>', 'background:rgba(59,130,246,0.04);font-weight:500;color:var(--color-text-primary)')}${tblCell('Bob')}${tblCell('Design')}${tblCell('Brand')}</tr></table>`
  ),

  'density-control': () => W(
    `<div style="display:flex;gap:6px;align-items:center">` +
    ['Compact', 'Default', 'Spacious'].map((l, i) =>
      `<button class="demo-btn ${i === 1 ? 'demo-btn-primary' : 'demo-btn-ghost'}" style="font-size:9px;padding:4px 8px;display:flex;align-items:center;gap:4px">` +
      `<span style="display:flex;flex-direction:column;gap:${i === 0 ? '1' : i === 1 ? '2' : '3'}px"><span style="width:12px;height:1.5px;background:currentColor;border-radius:1px"></span><span style="width:12px;height:1.5px;background:currentColor;border-radius:1px"></span><span style="width:12px;height:1.5px;background:currentColor;border-radius:1px"></span></span> ${l}</button>`
    ).join('') + `</div>`
  ),

  'pagination-bar': () => W(
    `<div style="display:flex;align-items:center;justify-content:space-between;width:300px;font-size:10px;color:var(--color-text-secondary)">` +
    `<span>Rows: <select class="demo-input" style="width:auto;padding:2px 4px;font-size:9px;border-radius:4px"><option>10</option></select></span>` +
    `<div style="display:flex;align-items:center;gap:2px">` +
    `<button class="demo-page-btn" style="width:22px;height:22px;border:1px solid var(--color-border);border-radius:4px;background:var(--color-surface);font-size:9px;display:flex;align-items:center;justify-content:center;color:var(--color-text-tertiary)">‹</button>` +
    [1, 2, 3].map(n => `<button class="demo-page-btn" style="width:22px;height:22px;border:1px solid ${n === 1 ? '#3b82f6' : 'var(--color-border)'};border-radius:4px;background:${n === 1 ? '#3b82f6' : 'var(--color-surface)'};color:${n === 1 ? 'white' : 'var(--color-text-secondary)'};font-size:9px;display:flex;align-items:center;justify-content:center">${n}</button>`).join('') +
    `<button class="demo-page-btn" style="width:22px;height:22px;border:1px solid var(--color-border);border-radius:4px;background:var(--color-surface);font-size:9px;display:flex;align-items:center;justify-content:center;color:var(--color-text-tertiary)">›</button>` +
    `</div></div>`
  ),

  'column-chooser': () => W(
    `<div style="display:flex;align-items:flex-start;gap:8px">` +
    `<button class="demo-btn demo-btn-ghost" style="font-size:10px;padding:4px 8px">${ico('<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>')} Columns</button>` +
    `<div style="width:120px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px;box-shadow:var(--shadow-md);font-size:10px;display:flex;flex-direction:column;gap:3px">` +
    [['Name', true], ['Email', true], ['Role', false], ['Dept', true]].map(([l, on]) =>
      `<label style="display:flex;align-items:center;gap:5px;color:var(--color-text-secondary);cursor:pointer">${miniCb(on)} ${l}</label>`
    ).join('') + `</div></div>`
  ),

  'indeterminate-state': () => W(
    `<div style="display:flex;align-items:center;gap:12px">` +
    `<div style="display:flex;align-items:center;gap:5px">${miniCb(false)}<span style="font-size:10px;color:var(--color-text-secondary)">None</span></div>` +
    `<div style="display:flex;align-items:center;gap:5px">${miniCbDash()}<span style="font-size:10px;color:var(--color-text-secondary)">Some</span></div>` +
    `<div style="display:flex;align-items:center;gap:5px">${miniCb(true)}<span style="font-size:10px;color:var(--color-text-secondary)">All</span></div></div>`
  ),

  /* ═══════════════════ OVERLAY / POPUP ═══════════════════ */

  'dialog': () => W(
    `<div class="demo-modal-mini" style="width:220px;padding:0;border-radius:10px;box-shadow:var(--shadow-lg)">` +
    `<div class="demo-modal-mini-header" style="padding:10px 14px 6px"><span class="demo-modal-mini-title" style="font-size:12px">Notice</span></div>` +
    `<div class="demo-modal-mini-body" style="padding:0 14px 10px"><p class="demo-modal-mini-text" style="font-size:10px;margin:0">Your changes have been saved.</p></div>` +
    `<div class="demo-modal-mini-footer" style="padding:6px 14px 10px;display:flex;justify-content:flex-end"><button class="demo-btn demo-btn-primary" style="font-size:10px;padding:4px 14px">OK</button></div></div>`
  ),

  'alert-dialog': () => W(
    `<div class="demo-modal-mini" style="width:240px;padding:0;border-radius:10px;box-shadow:var(--shadow-lg);border-top:3px solid #ef4444">` +
    `<div class="demo-modal-mini-header" style="padding:10px 14px 4px;display:flex;align-items:center;gap:6px"><span style="color:#ef4444">${WARN}</span><span class="demo-modal-mini-title" style="font-size:12px;color:#ef4444">Warning</span></div>` +
    `<div class="demo-modal-mini-body" style="padding:0 14px 8px"><p class="demo-modal-mini-text" style="font-size:10px;margin:0">This action is irreversible.</p></div>` +
    `<div class="demo-modal-mini-footer" style="padding:6px 14px 10px;display:flex;justify-content:flex-end;gap:6px"><button class="demo-btn demo-btn-secondary" style="font-size:10px;padding:4px 12px">Cancel</button><button class="demo-btn demo-btn-destructive" style="font-size:10px;padding:4px 12px">Confirm</button></div></div>`
  ),

  'confirmation-dialog': () => W(
    `<div class="demo-modal-mini" style="width:240px;padding:0;border-radius:10px;box-shadow:var(--shadow-lg)">` +
    `<div class="demo-modal-mini-header" style="padding:10px 14px 4px"><span class="demo-modal-mini-title" style="font-size:12px">Delete item?</span></div>` +
    `<div class="demo-modal-mini-body" style="padding:0 14px 8px"><p class="demo-modal-mini-text" style="font-size:10px;margin:0">This cannot be undone.</p></div>` +
    `<div class="demo-modal-mini-footer" style="padding:6px 14px 10px;display:flex;justify-content:flex-end;gap:6px"><button class="demo-btn demo-btn-secondary" style="font-size:10px;padding:4px 12px">Cancel</button><button class="demo-btn demo-btn-destructive" style="font-size:10px;padding:4px 12px">Delete</button></div></div>`
  ),

  'rich-tooltip': () => W(
    `<div style="position:relative;display:inline-block">` +
    `<button class="demo-tooltip-trigger demo-btn demo-btn-ghost" style="font-size:10px;padding:4px 10px">Hover me</button>` +
    `<div class="demo-tooltip-box" style="position:absolute;bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:6px;width:180px;padding:8px 10px;background:#1e293b;color:white;border-radius:8px;font-size:9px;box-shadow:var(--shadow-lg)">` +
    `<div style="font-weight:600;font-size:10px;margin-bottom:3px">Tooltip Title</div>` +
    `<div style="color:#94a3b8;margin-bottom:4px">A short description of this element and its purpose.</div>` +
    `<a style="color:#60a5fa;font-size:8px;text-decoration:underline">Learn more →</a></div></div>`
  ),

  'callout': () => W(
    `<div style="position:relative;display:inline-block">` +
    `<div style="padding:8px 12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;font-size:10px;color:#1e40af;max-width:200px;position:relative">` +
    `This element controls the main settings.` +
    `<div style="position:absolute;bottom:-6px;left:20px;width:10px;height:10px;background:#eff6ff;border-right:1px solid #bfdbfe;border-bottom:1px solid #bfdbfe;transform:rotate(45deg)"></div></div></div>`
  ),

  'coach-mark': () => W(
    `<div style="width:260px;height:80px;background:rgba(0,0,0,0.7);border-radius:8px;position:relative;display:flex;align-items:center;justify-content:center">` +
    `<div style="padding:6px 14px;background:var(--color-surface);border-radius:6px;font-size:10px;color:var(--color-text-primary);box-shadow:0 0 0 3px rgba(59,130,246,0.5)">Button</div>` +
    `<div style="position:absolute;bottom:8px;right:12px;padding:5px 10px;background:white;border-radius:6px;font-size:9px;color:#1e293b;box-shadow:var(--shadow-md)">Click here ☝</div></div>`
  ),

  'onboarding-tooltip': () => W(
    `<div style="position:relative;display:inline-block">` +
    `<div style="padding:10px 14px;background:#1e293b;color:white;border-radius:8px;font-size:10px;width:200px;box-shadow:var(--shadow-lg)">` +
    `<div style="margin-bottom:6px">Select your workspace to get started.</div>` +
    `<div style="display:flex;justify-content:space-between;align-items:center">` +
    `<span style="color:#94a3b8;font-size:9px">1/3</span>` +
    `<button style="background:#3b82f6;color:white;border:none;padding:3px 10px;border-radius:4px;font-size:9px">Next</button></div></div></div>`
  ),

  'tour': () => W(
    `<div style="width:260px;height:80px;position:relative;background:rgba(0,0,0,0.5);border-radius:8px;display:flex;align-items:center;padding-left:16px">` +
    `<div style="padding:5px 12px;background:var(--color-surface);border-radius:6px;font-size:10px;color:var(--color-text-primary);box-shadow:0 0 0 3px rgba(59,130,246,0.4)">Settings</div>` +
    `<div style="position:absolute;right:12px;top:10px;padding:8px 10px;background:white;border-radius:8px;font-size:9px;color:#334155;box-shadow:var(--shadow-lg);width:120px">` +
    `<div style="margin-bottom:4px">Open Settings to configure.</div>` +
    `<div style="display:flex;gap:3px;justify-content:center">${[0, 1, 2].map(i => `<span style="width:5px;height:5px;border-radius:50%;background:${i === 1 ? '#3b82f6' : '#cbd5e1'}"></span>`).join('')}</div></div></div>`
  ),

  'spotlight': () => W(
    `<div style="width:260px;height:80px;position:relative;background:rgba(0,0,0,0.75);border-radius:8px;display:flex;align-items:center;justify-content:center">` +
    `<div style="width:60px;height:40px;border-radius:50%;background:var(--color-surface);display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--color-text-primary);box-shadow:0 0 0 4px rgba(255,255,255,0.2),0 0 30px rgba(255,255,255,0.15)">Focus</div></div>`
  ),

  'action-sheet': () => W(
    `<div style="width:180px;background:var(--color-surface);border-radius:10px;box-shadow:var(--shadow-lg);overflow:hidden;font-size:11px">` +
    ['Share', 'Copy Link', 'Delete'].map((t, i) =>
      `<div style="padding:8px 14px;color:${i === 2 ? '#ef4444' : 'var(--color-text-primary)'};border-bottom:${i < 2 ? '1px solid var(--color-border-subtle)' : 'none'};font-weight:${i === 2 ? '500' : 'normal'}">${t}</div>`
    ).join('') +
    `<div style="margin-top:4px;border-top:4px solid var(--color-border-subtle)"><div style="padding:8px 14px;color:var(--color-text-secondary);text-align:center">Cancel</div></div></div>`
  ),

  'side-sheet': () => W(
    `<div style="width:280px;height:90px;border:1px solid var(--color-border);border-radius:8px;position:relative;overflow:hidden;display:flex">` +
    `<div style="flex:1;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--color-text-tertiary)">Main Content</div>` +
    `<div style="width:130px;background:var(--color-surface);border-left:1px solid var(--color-border);padding:8px;box-shadow:-2px 0 8px rgba(0,0,0,0.06)">` +
    `<div style="font-size:10px;font-weight:600;color:var(--color-text-primary);margin-bottom:6px">Edit Item</div>` +
    `<div style="display:flex;flex-direction:column;gap:4px">` +
    `<input class="demo-input" style="font-size:9px;padding:3px 6px" value="Title" readonly />` +
    `<input class="demo-input" style="font-size:9px;padding:3px 6px" value="Description" readonly />` +
    `</div></div></div>`
  ),

  'hovercard': () => W(
    `<div style="display:flex;align-items:flex-start;gap:8px">` +
    `<span style="font-size:11px;color:#3b82f6;text-decoration:underline;cursor:pointer">@jane</span>` +
    `<div style="width:170px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:10px;box-shadow:var(--shadow-lg)">` +
    `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">` +
    `<div style="width:24px;height:24px;border-radius:50%;background:#8b5cf6;display:flex;align-items:center;justify-content:center;color:white;font-size:10px">J</div>` +
    `<div><div style="font-size:10px;font-weight:600;color:var(--color-text-primary)">Jane Doe</div><div style="font-size:9px;color:var(--color-text-tertiary)">@jane</div></div></div>` +
    `<div style="font-size:9px;color:var(--color-text-secondary)">Product designer, loves coffee.</div></div></div>`
  ),

  'preview-card': () => W(
    `<div style="width:200px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;overflow:hidden;box-shadow:var(--shadow-md)">` +
    `<div style="height:40px;background:linear-gradient(135deg,#3b82f6,#8b5cf6)"></div>` +
    `<div style="padding:8px 10px">` +
    `<div style="font-size:10px;font-weight:600;color:var(--color-text-primary);margin-bottom:2px">Article Title</div>` +
    `<div style="font-size:9px;color:var(--color-text-tertiary)">example.com/article</div></div></div>`
  ),

  'inline-notification': () => W(
    `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;width:260px">` +
    `<span style="color:#3b82f6;flex-shrink:0">${INFO}</span>` +
    `<span style="font-size:10px;color:#1e40af">Your trial expires in 7 days.</span></div>`
  ),

  'banner-notification': () => W(
    `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 12px;background:#3b82f6;border-radius:6px;width:300px">` +
    `<div style="display:flex;align-items:center;gap:6px;color:white">` +
    `${INFO}<span style="font-size:10px">New version available. Update now.</span></div>` +
    `<span style="color:rgba(255,255,255,0.7);cursor:pointer">${CLOSE}</span></div>`
  ),

  /* ═══════════════════ STATE / INTERACTION ═══════════════════ */

  'visited-state': () => W(
    `<div style="display:flex;gap:16px;align-items:center">` +
    `<span style="font-size:11px;color:#3b82f6;text-decoration:underline">Unvisited Link</span>` +
    `<span style="font-size:11px;color:#7c3aed;text-decoration:underline">Visited Link</span></div>`
  ),

  'dragging-state': () => W(
    `<div style="display:flex;gap:16px;align-items:center">` +
    `<div style="padding:8px 14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;font-size:10px;color:var(--color-text-secondary)">Card A</div>` +
    `<div style="padding:8px 14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;font-size:10px;color:var(--color-text-primary);transform:rotate(-3deg);box-shadow:var(--shadow-lg);opacity:0.9">Card B</div></div>`
  ),

  'valid-state': () => W(
    `<div style="position:relative;width:180px">` +
    `<input class="demo-input" style="border-color:#22c55e;padding-right:28px;width:100%;font-size:11px" value="valid@email.com" readonly />` +
    `<span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);color:#22c55e">${CHK}</span></div>`
  ),

  'invalid-state': () => W(
    `<div style="display:flex;flex-direction:column;gap:3px;width:180px">` +
    `<div style="position:relative">` +
    `<input class="demo-input" style="border-color:#ef4444;padding-right:28px;width:100%;font-size:11px" value="bad-email" readonly />` +
    `<span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);color:#ef4444">${CLOSE}</span></div>` +
    `<span style="font-size:9px;color:#ef4444">Invalid email address</span></div>`
  ),

  'pending-state': () => W(
    `<button class="demo-btn demo-btn-primary" style="font-size:11px;padding:6px 18px;display:flex;align-items:center;gap:6px;opacity:0.8">` +
    `<span class="demo-spinner" style="width:12px;height:12px;border-width:2px"></span> Saving…</button>`
  ),

  'info-state': () => W(
    `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;width:260px">` +
    `<span style="color:#3b82f6;flex-shrink:0">${INFO}</span>` +
    `<span style="font-size:10px;color:#1e40af">This section is read-only.</span></div>`
  ),

  'optimistic-ui': () => W(
    `<div style="display:flex;gap:12px;align-items:center">` +
    `<div style="padding:6px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;color:var(--color-text-tertiary);opacity:0.6">Sending…</div>` +
    `<span style="color:var(--color-text-tertiary);font-size:12px">→</span>` +
    `<div style="padding:6px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;color:#22c55e;display:flex;align-items:center;gap:4px">${CHK} Sent</div></div>`
  ),

  'pessimistic-ui': () => W(
    `<div style="display:flex;gap:12px;align-items:center">` +
    `<button class="demo-btn demo-btn-secondary" style="font-size:10px;padding:5px 12px;opacity:0.6;display:flex;align-items:center;gap:4px"><span class="demo-spinner" style="width:10px;height:10px;border-width:1.5px"></span> Loading</button>` +
    `<span style="color:var(--color-text-tertiary);font-size:12px">→</span>` +
    `<button class="demo-btn demo-btn-primary" style="font-size:10px;padding:5px 12px">Done ✓</button></div>`
  ),

  'undo': () => W(
    `<button class="demo-btn demo-btn-ghost" style="font-size:10px;padding:5px 10px;display:flex;align-items:center;gap:4px">${UNDO} Undo</button>`
  ),

  'redo': () => W(
    `<button class="demo-btn demo-btn-ghost" style="font-size:10px;padding:5px 10px;display:flex;align-items:center;gap:4px">${REDO} Redo</button>`
  ),

  'debounce': () => W(
    `<div style="display:flex;flex-direction:column;gap:6px;width:240px">` +
    `<div style="font-size:9px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase">Debounce</div>` +
    `<div style="display:flex;align-items:center;gap:2px">` +
    `<span style="font-size:8px;color:var(--color-text-tertiary)">input</span>` +
    `<div style="flex:1;height:12px;position:relative;background:var(--color-surface);border:1px solid var(--color-border);border-radius:3px">` +
    [10, 25, 38, 50, 55].map(p => `<div style="position:absolute;left:${p}%;top:2px;width:2px;height:8px;background:#94a3b8;border-radius:1px"></div>`).join('') +
    `</div></div>` +
    `<div style="display:flex;align-items:center;gap:2px">` +
    `<span style="font-size:8px;color:var(--color-text-tertiary)">exec</span>` +
    `<div style="flex:1;height:12px;position:relative;background:var(--color-surface);border:1px solid var(--color-border);border-radius:3px">` +
    `<div style="position:absolute;left:72%;top:2px;width:2px;height:8px;background:#3b82f6;border-radius:1px"></div>` +
    `</div></div>` +
    `<div style="display:flex;align-items:center;gap:2px"><span style="font-size:8px;color:var(--color-text-tertiary)"></span><div style="flex:1;display:flex;justify-content:space-between;font-size:7px;color:var(--color-text-tertiary)"><span>0ms</span><span style="color:#3b82f6">delay</span><span>500ms</span></div></div></div>`
  ),

  'throttle': () => W(
    `<div style="display:flex;flex-direction:column;gap:6px;width:240px">` +
    `<div style="font-size:9px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase">Throttle</div>` +
    `<div style="display:flex;align-items:center;gap:2px">` +
    `<span style="font-size:8px;color:var(--color-text-tertiary)">input</span>` +
    `<div style="flex:1;height:12px;position:relative;background:var(--color-surface);border:1px solid var(--color-border);border-radius:3px">` +
    [8, 15, 22, 30, 40, 48, 56, 65, 74, 82, 90].map(p => `<div style="position:absolute;left:${p}%;top:2px;width:2px;height:8px;background:#94a3b8;border-radius:1px"></div>`).join('') +
    `</div></div>` +
    `<div style="display:flex;align-items:center;gap:2px">` +
    `<span style="font-size:8px;color:var(--color-text-tertiary)">exec</span>` +
    `<div style="flex:1;height:12px;position:relative;background:var(--color-surface);border:1px solid var(--color-border);border-radius:3px">` +
    [8, 40, 74].map(p => `<div style="position:absolute;left:${p}%;top:2px;width:2px;height:8px;background:#22c55e;border-radius:1px"></div>`).join('') +
    `</div></div>` +
    `<div style="display:flex;align-items:center;gap:2px"><span style="font-size:8px;color:var(--color-text-tertiary)"></span><div style="flex:1;display:flex;justify-content:space-between;font-size:7px;color:var(--color-text-tertiary)"><span>0ms</span><span style="color:#22c55e">interval</span><span>500ms</span></div></div></div>`
  ),

  /* ═══════════════════ COLLAPSE / EXPAND ═══════════════════ */

  'collapse': () => W(
    `<div style="width:220px;border:1px solid var(--color-border);border-radius:8px;overflow:hidden">` +
    `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--color-surface)">` +
    `<span style="font-size:11px;font-weight:500;color:var(--color-text-primary)">Section</span>` +
    `<span style="color:var(--color-text-tertiary);transform:rotate(-90deg)">${CHEV}</span></div></div>`
  ),

  'expand': () => W(
    `<div style="width:220px;border:1px solid var(--color-border);border-radius:8px;overflow:hidden">` +
    `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--color-surface)">` +
    `<span style="font-size:11px;font-weight:500;color:var(--color-text-primary)">Section</span>` +
    `<span style="color:var(--color-text-tertiary)">${CHEV}</span></div>` +
    `<div style="padding:8px 12px;border-top:1px solid var(--color-border-subtle);font-size:10px;color:var(--color-text-secondary)">Expanded content here.</div></div>`
  ),

  'expandable-section': () => W(
    `<div style="width:240px;border:1px solid var(--color-border);border-radius:8px;overflow:hidden">` +
    `<div class="demo-accordion-item">` +
    `<div class="demo-accordion-header" style="padding:8px 12px;display:flex;justify-content:space-between;align-items:center;cursor:pointer">` +
    `<span style="font-size:11px;font-weight:500;color:var(--color-text-primary)">Advanced Options</span>` +
    `<span class="demo-accordion-chevron" style="color:var(--color-text-tertiary)">${CHEV}</span></div>` +
    `<div class="demo-accordion-body"><div class="demo-accordion-content" style="padding:6px 12px 10px;font-size:10px;color:var(--color-text-secondary)">Additional settings and configuration options.</div></div></div></div>`
  ),

  'collapsible-panel': () => W(
    `<div style="width:240px;border:1px solid var(--color-border);border-radius:8px;overflow:hidden">` +
    `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:var(--color-surface);border-bottom:1px solid var(--color-border-subtle)">` +
    `<span style="font-size:10px;font-weight:600;color:var(--color-text-primary)">Panel Title</span>` +
    `<button class="demo-btn-icon" style="width:20px;height:20px;color:var(--color-text-tertiary)">${ico('<polyline points="4 10 8 6 12 10"/>')}</button></div>` +
    `<div style="padding:8px 10px;font-size:10px;color:var(--color-text-secondary)">Panel content area</div></div>`
  ),

  'disclosure-triangle': () => W(
    `<div style="display:flex;gap:20px;align-items:center">` +
    `<div style="display:flex;align-items:center;gap:6px"><span style="color:var(--color-text-tertiary);font-size:10px">▶</span><span style="font-size:11px;color:var(--color-text-primary)">Closed</span></div>` +
    `<div style="display:flex;align-items:center;gap:6px"><span style="color:var(--color-text-tertiary);font-size:10px">▼</span><span style="font-size:11px;color:var(--color-text-primary)">Open</span></div></div>`
  ),

  'read-more': () => W(
    `<div style="width:220px">` +
    `<p style="font-size:10px;color:var(--color-text-secondary);margin:0;line-height:1.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">` +
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>` +
    `<a style="font-size:10px;color:#3b82f6;text-decoration:none;cursor:pointer;margin-top:2px;display:inline-block">Read more →</a></div>`
  ),

  'expand-all': () => W(
    `<button class="demo-btn demo-btn-ghost" style="font-size:10px;padding:5px 10px;display:flex;align-items:center;gap:4px">` +
    `${ico('<polyline points="4 6 8 10 12 6"/><polyline points="4 10 8 14 12 10"/>')} Expand All</button>`
  ),

  'collapse-all': () => W(
    `<button class="demo-btn demo-btn-ghost" style="font-size:10px;padding:5px 10px;display:flex;align-items:center;gap:4px">` +
    `${ico('<polyline points="4 10 8 6 12 10"/><polyline points="4 14 8 10 12 14"/>')} Collapse All</button>`
  ),

  /* ═══════════════════ SEARCH / FILTER ═══════════════════ */

  'search-bar': () => W(
    `<div style="display:flex;align-items:center;gap:0;width:260px">` +
    `<div style="flex:1;display:flex;align-items:center;gap:6px;padding:6px 10px;border:1px solid var(--color-border);border-right:none;border-radius:8px 0 0 8px;background:var(--color-surface)">` +
    `<span style="color:var(--color-text-tertiary)">${SEARCH}</span>` +
    `<span style="font-size:11px;color:var(--color-text-tertiary)">Search…</span></div>` +
    `<button class="demo-btn demo-btn-primary" style="border-radius:0 8px 8px 0;padding:6px 12px;font-size:11px">Search</button></div>`
  ),

  'instant-search': () => W(
    `<div style="width:220px;display:flex;flex-direction:column;gap:0">` +
    `<div style="display:flex;align-items:center;gap:6px;padding:6px 10px;border:1px solid #3b82f6;border-radius:8px 8px 0 0;background:var(--color-surface)">` +
    `<span style="color:var(--color-text-tertiary)">${SEARCH}</span>` +
    `<span style="font-size:11px;color:var(--color-text-primary)">des</span></div>` +
    `<div style="border:1px solid var(--color-border);border-top:none;border-radius:0 0 8px 8px;background:var(--color-surface);font-size:10px;box-shadow:var(--shadow-md)">` +
    `<div style="padding:5px 10px;color:var(--color-text-primary)"><strong>Des</strong>ign System</div>` +
    `<div style="padding:5px 10px;color:var(--color-text-secondary)"><strong>Des</strong>ktop App</div></div></div>`
  ),

  'live-search': () => W(
    `<div style="width:220px;display:flex;flex-direction:column;gap:0">` +
    `<div style="display:flex;align-items:center;gap:6px;padding:6px 10px;border:1px solid #3b82f6;border-radius:8px 8px 0 0;background:var(--color-surface)">` +
    `<span style="color:var(--color-text-tertiary)">${SEARCH}</span>` +
    `<span style="font-size:11px;color:var(--color-text-primary)">react</span></div>` +
    `<div style="border:1px solid var(--color-border);border-top:none;border-radius:0 0 8px 8px;background:var(--color-surface);font-size:10px;box-shadow:var(--shadow-md)">` +
    `<div style="padding:5px 10px;color:var(--color-text-secondary)">Using <mark style="background:#fef08a;padding:0 1px;border-radius:2px">React</mark> Hooks</div>` +
    `<div style="padding:5px 10px;color:var(--color-text-secondary)"><mark style="background:#fef08a;padding:0 1px;border-radius:2px">React</mark> Components</div></div></div>`
  ),

  'search-suggestions': () => W(
    `<div style="width:220px;display:flex;flex-direction:column;gap:0">` +
    `<div style="display:flex;align-items:center;gap:6px;padding:6px 10px;border:1px solid var(--color-border);border-radius:8px 8px 0 0;background:var(--color-surface)">` +
    `<span style="color:var(--color-text-tertiary)">${SEARCH}</span>` +
    `<span style="font-size:11px;color:var(--color-text-tertiary)">type to search…</span></div>` +
    `<div style="border:1px solid var(--color-border);border-top:none;border-radius:0 0 8px 8px;background:var(--color-surface);font-size:10px;box-shadow:var(--shadow-md)">` +
    ['Dashboard settings', 'User management', 'API reference'].map(t =>
      `<div style="padding:5px 10px;color:var(--color-text-secondary)">${t}</div>`
    ).join('') + `</div></div>`
  ),

  'recent-searches': () => W(
    `<div style="width:200px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:6px 0;font-size:10px;box-shadow:var(--shadow-md)">` +
    `<div style="padding:4px 10px;font-size:9px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase">Recent</div>` +
    ['dark mode', 'keyboard shortcuts', 'export data'].map(t =>
      `<div style="padding:4px 10px;display:flex;align-items:center;gap:6px;color:var(--color-text-secondary)"><span style="color:var(--color-text-tertiary)">${CLOCK}</span> ${t}</div>`
    ).join('') + `</div>`
  ),

  'faceted-navigation': () => W(
    `<div style="width:160px;font-size:10px;display:flex;flex-direction:column;gap:4px">` +
    `<div style="font-size:9px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase;margin-bottom:2px">Category</div>` +
    [['Electronics', 24, true], ['Books', 18, false], ['Clothing', 12, true]].map(([l, n, on]) =>
      `<label style="display:flex;align-items:center;gap:5px;color:var(--color-text-secondary)">${miniCb(on)} ${l} <span style="color:var(--color-text-tertiary);font-size:9px;margin-left:auto">(${n})</span></label>`
    ).join('') + `</div>`
  ),

  'filter-drawer': () => W(
    `<div style="display:flex;align-items:flex-start;gap:8px">` +
    `<button class="demo-btn demo-btn-secondary" style="font-size:10px;padding:5px 10px;display:flex;align-items:center;gap:4px">${FUNNEL} Filters</button>` +
    `<div style="width:140px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:10px;box-shadow:var(--shadow-lg);font-size:10px">` +
    `<div style="font-weight:600;color:var(--color-text-primary);margin-bottom:6px">Filters</div>` +
    `<div style="display:flex;flex-direction:column;gap:4px">` +
    `<label style="display:flex;align-items:center;gap:5px;color:var(--color-text-secondary)">${miniCb(true)} In stock</label>` +
    `<label style="display:flex;align-items:center;gap:5px;color:var(--color-text-secondary)">${miniCb(false)} On sale</label>` +
    `</div></div></div>`
  ),

  'clear-filters': () => W(
    `<div style="display:flex;align-items:center;gap:8px">` +
    `<span class="demo-chip" style="font-size:9px;padding:3px 8px;display:flex;align-items:center;gap:3px">Color: Red <span style="cursor:pointer;color:var(--color-text-tertiary)">×</span></span>` +
    `<span class="demo-chip" style="font-size:9px;padding:3px 8px;display:flex;align-items:center;gap:3px">Size: M <span style="cursor:pointer;color:var(--color-text-tertiary)">×</span></span>` +
    `<a style="font-size:10px;color:#3b82f6;text-decoration:none;cursor:pointer;white-space:nowrap">Clear all</a></div>`
  ),

  'filter-badge': () => W(
    `<button class="demo-btn demo-btn-secondary" style="font-size:10px;padding:5px 12px;display:flex;align-items:center;gap:6px">` +
    `${FUNNEL} Filters <span class="demo-badge" style="background:#3b82f6;color:white;font-size:8px;padding:1px 5px;border-radius:8px;min-width:16px;text-align:center">3</span></button>`
  ),

  'advanced-search': () => W(
    `<div style="width:280px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:6px">` +
    `<div style="font-size:10px;font-weight:600;color:var(--color-text-primary)">Advanced Search</div>` +
    `<div style="display:flex;gap:6px">` +
    `<div style="flex:1"><div style="font-size:8px;color:var(--color-text-tertiary);margin-bottom:2px">KEYWORD</div><input class="demo-input" style="font-size:9px;padding:3px 6px;width:100%" placeholder="term" readonly /></div>` +
    `<div style="flex:1"><div style="font-size:8px;color:var(--color-text-tertiary);margin-bottom:2px">CATEGORY</div><select class="demo-input" style="font-size:9px;padding:3px 6px;width:100%"><option>All</option></select></div></div>` +
    `<div><div style="font-size:8px;color:var(--color-text-tertiary);margin-bottom:2px">DATE RANGE</div><div style="display:flex;gap:4px;align-items:center"><input class="demo-input" style="font-size:9px;padding:3px 6px;width:80px" placeholder="From" readonly /><span style="font-size:9px;color:var(--color-text-tertiary)">–</span><input class="demo-input" style="font-size:9px;padding:3px 6px;width:80px" placeholder="To" readonly /></div></div></div>`
  ),

  'result-card': () => W(
    `<div style="width:260px;padding:10px;border:1px solid var(--color-border);border-radius:8px;background:var(--color-surface)">` +
    `<div style="font-size:11px;font-weight:500;color:#3b82f6;margin-bottom:2px">Getting Started Guide</div>` +
    `<div style="font-size:9px;color:var(--color-text-secondary);margin-bottom:4px;line-height:1.4">Learn how to set up your project and configure the environment for production…</div>` +
    `<div style="font-size:8px;color:var(--color-text-tertiary)">docs.example.com/guide</div></div>`
  ),

  'search-results': () => W(
    `<div style="width:260px;display:flex;flex-direction:column;gap:6px">` +
    [['API Reference', 'The <mark style="background:#fef08a;padding:0 1px;border-radius:2px">API</mark> endpoints for user management…'],
     ['Auth Guide', 'Configure <mark style="background:#fef08a;padding:0 1px;border-radius:2px">API</mark> keys and tokens…']].map(([t, d]) =>
      `<div style="padding:6px 10px;border:1px solid var(--color-border-subtle);border-radius:6px">` +
      `<div style="font-size:10px;font-weight:500;color:#3b82f6;margin-bottom:1px">${t}</div>` +
      `<div style="font-size:9px;color:var(--color-text-secondary)">${d}</div></div>`
    ).join('') + `</div>`
  ),

  /* ═══════════════════ LOADING / PROGRESS / FEEDBACK ═══════════════════ */

  'determinate-progress': () => W(
    `<div style="display:flex;flex-direction:column;gap:4px;width:220px">` +
    `<div style="display:flex;justify-content:space-between;font-size:10px"><span style="color:var(--color-text-secondary)">Uploading…</span><span style="color:var(--color-text-primary);font-weight:500">75%</span></div>` +
    `<div class="demo-progress" style="height:8px;border-radius:4px"><div class="demo-progress-bar" style="width:75%;border-radius:4px"></div></div></div>`
  ),

  'inline-alert': () => W(
    `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#fef3c7;border:1px solid #fbbf24;border-radius:8px;width:260px">` +
    `<span style="color:#d97706;flex-shrink:0">${WARN}</span>` +
    `<span style="font-size:10px;color:#92400e">Disk usage is above 85%.</span></div>`
  ),

  'error-banner': () => W(
    `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#fef2f2;border:1px solid #fca5a5;border-radius:6px;width:300px">` +
    `<span style="color:#ef4444;flex-shrink:0">${CLOSE}</span>` +
    `<span style="font-size:10px;color:#991b1b;flex:1">Failed to save changes. Please try again.</span></div>`
  ),

  'success-banner': () => W(
    `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#f0fdf4;border:1px solid #86efac;border-radius:6px;width:300px">` +
    `<span style="color:#22c55e;flex-shrink:0">${CHK}</span>` +
    `<span style="font-size:10px;color:#166534;flex:1">Changes saved successfully.</span></div>`
  ),

  'warning-banner': () => W(
    `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#fffbeb;border:1px solid #fbbf24;border-radius:6px;width:300px">` +
    `<span style="color:#f59e0b;flex-shrink:0">${WARN}</span>` +
    `<span style="font-size:10px;color:#92400e;flex:1">Your session will expire in 5 minutes.</span></div>`
  ),

  'info-banner': () => W(
    `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#eff6ff;border:1px solid #93c5fd;border-radius:6px;width:300px">` +
    `<span style="color:#3b82f6;flex-shrink:0">${INFO}</span>` +
    `<span style="font-size:10px;color:#1e40af;flex:1">A new version is available for download.</span></div>`
  ),

  'undo-snackbar': () => W(
    `<div class="demo-toast" style="display:flex;align-items:center;gap:12px;padding:8px 14px;background:#1e293b;color:white;border-radius:8px;box-shadow:var(--shadow-lg);width:220px">` +
    `<span style="font-size:11px;flex:1">Item deleted</span>` +
    `<button style="background:none;border:none;color:#60a5fa;font-size:11px;font-weight:600;cursor:pointer;padding:2px 6px">Undo</button></div>`
  ),

  'autosave-indicator': () => W(
    `<div style="display:flex;align-items:center;gap:5px;font-size:10px;color:var(--color-text-tertiary)">` +
    `<span style="color:#22c55e">${CHK}</span> Auto-saved at 14:30</div>`
  ),

  'empty-state-message': () => W(
    `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px;width:200px">` +
    `<div style="width:48px;height:40px;border:2px dashed var(--color-border);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--color-text-tertiary);font-size:18px">📦</div>` +
    `<div style="font-size:11px;font-weight:500;color:var(--color-text-primary)">No items yet</div>` +
    `<div style="font-size:9px;color:var(--color-text-tertiary);text-align:center">Add your first item to get started.</div></div>`
  ),

  /* ═══════════════════ SCROLL / POSITION ═══════════════════ */

  'scroll-container': () => W(
    `<div style="width:180px;height:70px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative">` +
    `<div style="padding:6px 8px;font-size:9px;color:var(--color-text-secondary);line-height:1.6">Line 1<br>Line 2<br>Line 3<br>Line 4<br>Line 5<br>Line 6</div>` +
    `<div style="position:absolute;right:1px;top:4px;width:5px;height:28px;background:var(--color-text-tertiary);border-radius:3px;opacity:0.4"></div></div>`
  ),

  'custom-scrollbar': () => W(
    `<div style="width:180px;height:70px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative">` +
    `<div style="padding:6px 8px;font-size:9px;color:var(--color-text-secondary);line-height:1.6">Item A<br>Item B<br>Item C<br>Item D<br>Item E</div>` +
    `<div style="position:absolute;right:2px;top:6px;width:3px;height:20px;background:#3b82f6;border-radius:2px;opacity:0.6"></div></div>`
  ),

  'virtual-scroll': () => W(
    `<div style="width:180px;height:80px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative;display:flex;flex-direction:column">` +
    `<div style="padding:2px 8px;font-size:8px;color:var(--color-text-tertiary);text-align:center;background:var(--color-surface)">↑ 47 items above</div>` +
    `<div style="flex:1;padding:2px 8px;font-size:9px;color:var(--color-text-secondary);line-height:1.6">Row 48<br>Row 49<br>Row 50</div>` +
    `<div style="padding:2px 8px;font-size:8px;color:var(--color-text-tertiary);text-align:center;background:var(--color-surface)">↓ 150 items below</div></div>`
  ),

  'sticky-footer': () => W(
    `<div style="width:180px;height:80px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;display:flex;flex-direction:column">` +
    `<div style="flex:1;padding:8px;font-size:9px;color:var(--color-text-tertiary);display:flex;align-items:center;justify-content:center">Content Area</div>` +
    `<div style="padding:6px 10px;background:var(--color-surface);border-top:1px solid var(--color-border);font-size:9px;color:var(--color-text-secondary);display:flex;justify-content:space-between"><span>© 2026</span><span>Footer pinned ↓</span></div></div>`
  ),

  'sticky-sidebar': () => W(
    `<div style="width:240px;height:80px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;display:flex">` +
    `<div style="width:60px;background:var(--color-surface);border-right:1px solid var(--color-border);padding:6px;font-size:8px;color:var(--color-text-tertiary);display:flex;flex-direction:column;gap:4px;flex-shrink:0">` +
    `<div style="font-weight:600;font-size:7px;text-transform:uppercase">Nav</div>` +
    `<div>Home</div><div>Docs</div><div>API</div></div>` +
    `<div style="flex:1;padding:6px 8px;font-size:9px;color:var(--color-text-secondary);position:relative">` +
    `Content scrolls here…<br>More text below…<br>Even more…` +
    `<div style="position:absolute;bottom:0;left:0;right:0;height:14px;background:linear-gradient(transparent, var(--color-bg))"></div></div></div>`
  ),

  'scroll-hint': () => W(
    `<div style="width:180px;height:70px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative">` +
    `<div style="padding:6px 8px;font-size:9px;color:var(--color-text-secondary);line-height:1.6">Content line 1<br>Content line 2<br>Content line 3</div>` +
    `<div style="position:absolute;bottom:0;left:0;right:0;height:24px;background:linear-gradient(transparent, var(--color-bg));display:flex;align-items:flex-end;justify-content:center;padding-bottom:3px">` +
    `<span style="font-size:8px;color:var(--color-text-tertiary)">${CHEV} scroll</span></div></div>`
  ),

  'scroll-lock': () => W(
    `<div style="width:180px;height:70px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative">` +
    `<div style="padding:6px 8px;font-size:9px;color:var(--color-text-secondary);line-height:1.6;filter:blur(1px)">Locked content<br>Cannot scroll<br>Login required</div>` +
    `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.15);display:flex;align-items:center;justify-content:center">` +
    `<span style="color:var(--color-text-primary)">${LOCK}</span></div></div>`
  ),

  'affix': () => W(
    `<div style="width:200px;height:80px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative">` +
    `<div style="padding:6px 8px;font-size:9px;color:var(--color-text-secondary);line-height:1.6">Content scrolls…<br>More content…<br>Even more…</div>` +
    `<div style="position:absolute;top:4px;right:4px;padding:3px 8px;background:#3b82f6;color:white;border-radius:4px;font-size:8px;box-shadow:var(--shadow-md)">Pinned</div></div>`
  ),

  'scroll-restoration': () => W(
    `<div style="display:flex;align-items:center;gap:10px">` +
    `<div style="display:flex;align-items:center;gap:4px;padding:5px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;color:var(--color-text-secondary)">` +
    `${ico('<line x1="12" y1="8" x2="4" y2="8"/><polyline points="7 4 3 8 7 12"/>')} Back</div>` +
    `<div style="width:30px;height:50px;border:1px solid var(--color-border);border-radius:4px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;right:1px;top:18px;width:3px;height:10px;background:#3b82f6;border-radius:2px;opacity:0.6"></div>` +
    `<div style="position:absolute;top:20px;left:3px;font-size:5px;color:var(--color-text-tertiary)">↤ pos</div></div></div>`
  ),

  /* ═══════════════════ LAYOUT / STRUCTURE ═══════════════════ */

  'stack': () => W(
    `<div style="display:flex;flex-direction:column;gap:4px;width:120px">` +
    [1, 2, 3].map(n => `<div style="padding:6px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;font-size:9px;color:var(--color-text-secondary);text-align:center">Item ${n}</div>`).join('') +
    `</div>`
  ),

  'hstack': () => W(
    `<div style="display:flex;gap:4px">` +
    [1, 2, 3].map(n => `<div style="padding:6px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;font-size:9px;color:var(--color-text-secondary);text-align:center">Item ${n}</div>`).join('') +
    `</div>`
  ),

  'vstack': () => W(
    `<div style="display:flex;flex-direction:column;gap:4px;width:120px">` +
    [1, 2, 3].map(n => `<div style="padding:6px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;font-size:9px;color:var(--color-text-secondary);text-align:center">Item ${n}</div>`).join('') +
    `</div>`
  ),

  'zstack': () => W(
    `<div style="position:relative;width:100px;height:70px">` +
    [0, 1, 2].map(i => `<div style="position:absolute;top:${i * 8}px;left:${i * 8}px;width:70px;height:40px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--color-text-secondary);box-shadow:var(--shadow-md);z-index:${3 - i}">${3 - i}</div>`).join('') +
    `</div>`
  ),

  'css-grid': () => W(
    `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto auto;gap:3px;width:180px">` +
    ['R1C1', 'R1C2', 'R1C3', 'R2C1', 'R2C2', 'R2C3'].map(l =>
      `<div style="padding:5px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:3px;font-size:8px;color:var(--color-text-tertiary);text-align:center">${l}</div>`
    ).join('') + `</div>`
  ),

  'gutter': () => W(
    `<div style="display:flex;gap:0;width:200px;align-items:stretch;height:50px">` +
    `<div style="flex:1;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--color-text-tertiary)">Col</div>` +
    `<div style="width:12px;display:flex;align-items:center;justify-content:center;position:relative"><div style="width:1px;height:100%;border-left:1px dashed var(--color-border)"></div><span style="position:absolute;background:var(--color-bg);font-size:7px;color:#3b82f6;padding:0 2px">gap</span></div>` +
    `<div style="flex:1;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--color-text-tertiary)">Col</div>` +
    `<div style="width:12px;display:flex;align-items:center;justify-content:center;position:relative"><div style="width:1px;height:100%;border-left:1px dashed var(--color-border)"></div><span style="position:absolute;background:var(--color-bg);font-size:7px;color:#3b82f6;padding:0 2px">gap</span></div>` +
    `<div style="flex:1;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--color-text-tertiary)">Col</div></div>`
  ),

  'spacing': () => W(
    `<div style="display:flex;flex-direction:column;gap:6px;width:180px">` +
    [[4, '#60a5fa'], [8, '#34d399'], [16, '#f472b6']].map(([v, c]) =>
      `<div style="display:flex;align-items:center;gap:6px"><span style="font-size:8px;color:var(--color-text-tertiary);width:20px;text-align:right">${v}px</span><div style="width:${v}px;height:14px;background:${c};opacity:0.3;border-radius:2px;border:1px solid ${c}"></div><div style="flex:1;height:14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:2px"></div></div>`
    ).join('') + `</div>`
  ),

  'alignment': () => W(
    `<div style="display:flex;flex-direction:column;gap:4px;width:160px;border:1px solid var(--color-border-subtle);border-radius:6px;padding:6px">` +
    [['flex-start', 'Left'], ['center', 'Center'], ['flex-end', 'Right']].map(([a, l]) =>
      `<div style="display:flex;justify-content:${a}"><div style="padding:3px 10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:3px;font-size:8px;color:var(--color-text-secondary)">${l}</div></div>`
    ).join('') + `</div>`
  ),

  'above-the-fold': () => W(
    `<div style="width:160px;height:80px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative">` +
    `<div style="padding:6px 8px;font-size:9px;color:var(--color-text-secondary)">Visible content<br>Hero section</div>` +
    `<div style="position:absolute;left:0;right:0;top:50px;border-top:2px dashed #ef4444;display:flex;justify-content:flex-end;padding-right:4px">` +
    `<span style="font-size:7px;color:#ef4444;background:var(--color-bg);padding:0 3px;position:relative;top:-8px">fold ↓</span></div>` +
    `<div style="padding:6px 8px;margin-top:10px;font-size:9px;color:var(--color-text-tertiary);opacity:0.5">Below fold</div></div>`
  ),

  'below-the-fold': () => W(
    `<div style="width:160px;height:80px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative">` +
    `<div style="padding:4px 8px;font-size:8px;color:var(--color-text-tertiary);opacity:0.4">Above fold…</div>` +
    `<div style="position:absolute;left:0;right:0;top:20px;border-top:2px dashed var(--color-border)"></div>` +
    `<div style="padding:6px 8px;margin-top:18px;font-size:9px;color:var(--color-text-secondary)">Content below<br>the fold area</div></div>`
  ),

  'master-detail-layout': () => W(
    `<div style="width:260px;height:80px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;display:flex">` +
    `<div style="width:80px;background:var(--color-surface);border-right:1px solid var(--color-border);padding:6px;font-size:8px;color:var(--color-text-secondary);display:flex;flex-direction:column;gap:3px;flex-shrink:0">` +
    ['Item 1', 'Item 2', 'Item 3'].map((t, i) =>
      `<div style="padding:3px 5px;border-radius:4px;${i === 1 ? 'background:#3b82f6;color:white;font-weight:500' : ''}">${t}</div>`
    ).join('') + `</div>` +
    `<div style="flex:1;padding:8px;font-size:9px;color:var(--color-text-secondary)"><div style="font-weight:600;color:var(--color-text-primary);font-size:10px;margin-bottom:4px">Item 2 Details</div>Description and properties…</div></div>`
  ),

  'fluid-layout': () => W(
    `<div style="width:240px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;position:relative">` +
    `<div style="padding:10px;background:var(--color-surface);font-size:9px;color:var(--color-text-secondary);text-align:center">Content stretches with viewport</div>` +
    `<div style="position:absolute;top:50%;left:4px;right:4px;display:flex;align-items:center;justify-content:space-between;font-size:8px;color:#3b82f6">` +
    `<span>←</span><span style="border-top:1px dashed #3b82f6;flex:1;margin:0 4px"></span><span>width: 100%</span><span style="border-top:1px dashed #3b82f6;flex:1;margin:0 4px"></span><span>→</span></div></div>`
  ),

  'canvas': () => W(
    `<div style="width:160px;height:70px;border:1px solid var(--color-border);border-radius:6px;background:var(--color-surface);position:relative;overflow:hidden">` +
    Array.from({ length: 63 }, (_, i) => {
      const x = (i % 9) * 18 + 10
      const y = Math.floor(i / 9) * 12 + 8
      return `<circle cx="${x}" cy="${y}" r="1" fill="var(--color-border-subtle)" />`
    }).reduce((acc, c) => acc + c, `<svg width="160" height="70" style="position:absolute;inset:0">`) + `</svg>` +
    `<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:8px;color:var(--color-text-tertiary)">Drawing Area</div></div>`
  ),

  'viewport': () => W(
    `<div style="width:180px;height:80px;position:relative">` +
    `<div style="width:180px;height:80px;border:2px solid var(--color-border);border-radius:8px 8px 0 0;overflow:hidden;position:relative">` +
    `<div style="height:12px;background:var(--color-surface);border-bottom:1px solid var(--color-border);display:flex;align-items:center;padding:0 6px;gap:3px">` +
    `<span style="width:4px;height:4px;border-radius:50%;background:#ef4444"></span>` +
    `<span style="width:4px;height:4px;border-radius:50%;background:#eab308"></span>` +
    `<span style="width:4px;height:4px;border-radius:50%;background:#22c55e"></span>` +
    `<div style="flex:1;margin-left:4px;height:6px;background:var(--color-bg);border-radius:3px"></div></div>` +
    `<div style="padding:6px 8px;font-size:8px;color:var(--color-text-tertiary)">Page content<br>rendered here</div></div></div>`
  ),
})
