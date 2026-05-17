/**
 * Extra demos (batch 4) — final batch of visual UI glossary demos.
 * Covers basic, input/form, display/content, table/data, overlay/popup,
 * state/interaction, search/filter, scroll/position, layout/structure,
 * animation/motion, ec/saas, file/editor, game/3d, and legacy terms.
 * Exports a frozen object `extras4` mapping term IDs to demo builder functions.
 */

/* ── Layout helpers ───────────────────────────────────────── */
const W = (inner) => `<div class="demo-wrapper">${inner}</div>`
const WS = (s, inner) => `<div class="demo-wrapper" style="${s}">${inner}</div>`
const svg = (w, h, inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
const ico = (p) => svg(16, 16, p)

/* ── Reusable icons ───────────────────────────────────────── */
const CHK = ico('<polyline points="4 8 7 11 12 5"/>')
const CLOSE = ico('<line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>')
const STAR = ico('<polygon points="8 2 9.8 6 14 6.5 10.9 9.3 11.8 14 8 11.8 4.2 14 5.1 9.3 2 6.5 6.2 6" fill="currentColor" stroke="none"/>')
const STAR_O = ico('<polygon points="8 2 9.8 6 14 6.5 10.9 9.3 11.8 14 8 11.8 4.2 14 5.1 9.3 2 6.5 6.2 6"/>')
const EYE = ico('<path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/>')
const LOCK = ico('<rect x="4" y="7" width="8" height="7" rx="1.5"/><path d="M6 7V5a2 2 0 0 1 4 0v2"/>')
const ARRL = ico('<line x1="12" y1="8" x2="4" y2="8"/><polyline points="7 4 3 8 7 12"/>')
const ARRR = ico('<line x1="4" y1="8" x2="12" y2="8"/><polyline points="9 4 13 8 9 12"/>')
const FILTER = ico('<polygon points="2 2 14 2 9 8.5 9 13 7 14 7 8.5"/>')

/* ═══════════════════════════════════════════════════════════ */
export const extras4 = Object.freeze({

  /* ═══════════════════ BASIC ═══════════════════ */

  'design-system': () => W(
    `<div style="display:flex;gap:20px;align-items:center">` +
    `<div style="text-align:center"><div style="width:28px;height:28px;border-radius:50%;background:#3b82f6;margin:0 auto 4px"></div><div style="font-size:8px;color:var(--color-text-tertiary)">Token</div></div>` +
    `<div style="text-align:center"><button style="padding:4px 12px;background:#3b82f6;color:white;border:none;border-radius:4px;font-size:9px;cursor:default">Button</button><div style="font-size:8px;color:var(--color-text-tertiary);margin-top:4px">Component</div></div>` +
    `<div style="text-align:center"><div style="display:flex;align-items:center;gap:2px"><div style="width:16px;height:2px;background:#f59e0b"></div><span style="font-size:7px;color:#f59e0b;font-family:var(--font-mono)">8px</span><div style="width:16px;height:2px;background:#f59e0b"></div></div><div style="font-size:8px;color:var(--color-text-tertiary);margin-top:4px">Rule</div></div></div>`
  ),

  'component': () => W(
    `<div style="text-align:center">` +
    `<div style="display:inline-flex;flex-direction:column;align-items:center;gap:6px;padding:16px 24px;border:2px dashed var(--color-border);border-radius:8px">` +
    `<button style="padding:6px 20px;background:#3b82f6;color:white;border:none;border-radius:6px;font-size:11px;font-weight:500;cursor:default">Component</button>` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);font-family:var(--font-mono)">&lt;Button /&gt;</div></div></div>`
  ),

  'widget': () => W(
    `<div style="width:120px;padding:10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;box-shadow:var(--shadow-md);text-align:center">` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-bottom:4px">Clock</div>` +
    `<div style="font-size:20px;font-weight:600;color:var(--color-text-primary);font-family:var(--font-mono)">14:30</div>` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-top:2px">Sun, May 17</div></div>`
  ),

  'shell': () => W(
    `<div style="width:260px;height:90px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;display:flex;flex-direction:column">` +
    `<div style="height:20px;background:var(--color-surface);border-bottom:1px solid var(--color-border);display:flex;align-items:center;padding:0 8px;font-size:8px;color:var(--color-text-tertiary)">Header</div>` +
    `<div style="flex:1;display:flex">` +
    `<div style="width:55px;background:var(--color-surface);border-right:1px solid var(--color-border);display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--color-text-tertiary)">Sidebar</div>` +
    `<div style="flex:1;display:flex;align-items:center;justify-content:center;font-size:8px;color:var(--color-text-tertiary);background:var(--color-bg)">Main</div></div></div>`
  ),

  'responsive-ui': () => W(
    `<div style="display:flex;gap:12px;align-items:flex-end">` +
    `<div style="width:40px;height:65px;border:1px solid var(--color-border);border-radius:4px;padding:3px;background:var(--color-surface)"><div style="width:100%;height:8px;background:#3b82f6;border-radius:2px;margin-bottom:2px"></div><div style="width:100%;height:3px;background:var(--color-border-subtle);border-radius:1px;margin-bottom:1px"></div><div style="width:80%;height:3px;background:var(--color-border-subtle);border-radius:1px"></div><div style="font-size:6px;color:var(--color-text-tertiary);text-align:center;margin-top:2px">Phone</div></div>` +
    `<div style="width:70px;height:55px;border:1px solid var(--color-border);border-radius:4px;padding:3px;background:var(--color-surface)"><div style="width:100%;height:8px;background:#3b82f6;border-radius:2px;margin-bottom:2px"></div><div style="width:100%;height:3px;background:var(--color-border-subtle);border-radius:1px;margin-bottom:1px"></div><div style="width:70%;height:3px;background:var(--color-border-subtle);border-radius:1px"></div><div style="font-size:6px;color:var(--color-text-tertiary);text-align:center;margin-top:2px">Tablet</div></div>` +
    `<div style="width:120px;height:50px;border:1px solid var(--color-border);border-radius:4px;padding:3px;background:var(--color-surface);display:flex;gap:3px"><div style="width:30px"><div style="width:100%;height:3px;background:var(--color-border-subtle);border-radius:1px;margin-bottom:2px"></div><div style="width:100%;height:3px;background:var(--color-border-subtle);border-radius:1px;margin-bottom:2px"></div><div style="width:100%;height:3px;background:var(--color-border-subtle);border-radius:1px"></div></div><div style="flex:1"><div style="width:100%;height:8px;background:#3b82f6;border-radius:2px;margin-bottom:2px"></div><div style="width:80%;height:3px;background:var(--color-border-subtle);border-radius:1px"></div></div><div style="font-size:6px;color:var(--color-text-tertiary);position:absolute;bottom:2px;right:6px">Desktop</div></div></div>`
  ),

  'adaptive-ui': () => W(
    `<div style="display:flex;gap:16px;align-items:center">` +
    `<div style="width:90px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden"><div style="height:10px;background:#3b82f6"></div><div style="padding:3px"><div style="height:3px;background:var(--color-border-subtle);border-radius:1px;margin-bottom:2px"></div><div style="height:3px;background:var(--color-border-subtle);border-radius:1px;width:70%"></div></div><div style="font-size:7px;color:var(--color-text-tertiary);text-align:center;padding:2px">Stack layout</div></div>` +
    `<span style="font-size:10px;color:var(--color-text-tertiary)">vs</span>` +
    `<div style="width:120px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;display:flex"><div style="width:30px;background:#3b82f6"></div><div style="flex:1;padding:3px"><div style="height:3px;background:var(--color-border-subtle);border-radius:1px;margin-bottom:2px"></div><div style="height:3px;background:var(--color-border-subtle);border-radius:1px;width:70%;margin-bottom:2px"></div><div style="height:3px;background:var(--color-border-subtle);border-radius:1px;width:50%"></div></div><div style="font-size:7px;color:var(--color-text-tertiary);position:absolute;bottom:2px;right:6px">Side layout</div></div></div>`
  ),

  'feedback': () => W(
    `<div style="display:flex;gap:16px;align-items:center">` +
    `<button style="padding:6px 16px;background:#3b82f6;color:white;border:none;border-radius:6px;font-size:10px;cursor:default">Save</button>` +
    `<span style="font-size:14px;color:var(--color-text-tertiary)">→</span>` +
    `<button style="padding:6px 16px;background:#22c55e;color:white;border:none;border-radius:6px;font-size:10px;cursor:default;display:flex;align-items:center;gap:4px">${ico('<polyline points="4 8 7 11 12 5" stroke="white"/>')} Saved</button></div>`
  ),

  'microinteraction': () => W(
    `<div style="display:flex;gap:24px;align-items:center">` +
    `<div style="text-align:center"><div style="color:var(--color-text-tertiary)">${svg(24, 24, '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>')}</div><div style="font-size:8px;color:var(--color-text-tertiary)">Normal</div></div>` +
    `<div style="text-align:center"><div style="color:#ef4444;transform:scale(1.3);transition:transform .2s">${svg(24, 24, '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444"/>')}</div><div style="font-size:8px;color:var(--color-text-tertiary)">Liked</div></div></div>`
  ),

  /* ═══════════════════ INPUT/FORM ═══════════════════ */

  'knob': () => W(
    `<div style="text-align:center">` +
    `${svg(80, 80, '<circle cx="40" cy="40" r="30" stroke-width="2" stroke="var(--color-border)"/><circle cx="40" cy="40" r="26" fill="var(--color-surface)" stroke="var(--color-border-subtle)"/>' + [0,30,60,90,120,150,180,210,240,270,300,330].map(a => { const r = a * Math.PI / 180; const x1 = 40 + 28 * Math.cos(r); const y1 = 40 + 28 * Math.sin(r); const x2 = 40 + 32 * Math.cos(r); const y2 = 40 + 32 * Math.sin(r); return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(--color-text-tertiary)" stroke-width="1"/>` }).join('') + '<line x1="40" y1="40" x2="40" y2="18" stroke="#3b82f6" stroke-width="2"/><circle cx="40" cy="40" r="4" fill="#3b82f6" stroke="none"/>')}` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-top:2px">Volume</div></div>`
  ),

  'dial': () => W(
    `<div style="text-align:center">` +
    `${svg(100, 60, '<path d="M15 50 A35 35 0 0 1 85 50" stroke="var(--color-border)" stroke-width="4" fill="none"/><path d="M15 50 A35 35 0 0 1 60 17" stroke="#3b82f6" stroke-width="4" fill="none"/><circle cx="60" cy="17" r="4" fill="#3b82f6" stroke="none"/><text x="50" y="48" text-anchor="middle" fill="var(--color-text-primary)" font-size="14" font-weight="600" stroke="none">72</text><text x="15" y="58" text-anchor="middle" fill="var(--color-text-tertiary)" font-size="8" stroke="none">0</text><text x="85" y="58" text-anchor="middle" fill="var(--color-text-tertiary)" font-size="8" stroke="none">100</text>')}` +
    `</div>`
  ),

  'input-mask': () => W(
    `<div style="width:200px">` +
    `<label style="font-size:9px;color:var(--color-text-secondary);margin-bottom:3px;display:block">Phone Number</label>` +
    `<div style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;background:var(--color-surface);font-size:12px;font-family:var(--font-mono);color:var(--color-text-primary);display:flex;align-items:center">` +
    `<span style="color:var(--color-text-primary)">(555) 123-</span><span style="color:var(--color-text-primary)">4567</span>` +
    `</div>` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-top:2px">(___) ___-____</div></div>`
  ),

  'dirty-state': () => W(
    `<div style="width:200px">` +
    `<label style="font-size:9px;color:var(--color-text-secondary);margin-bottom:3px;display:flex;align-items:center;gap:4px">Username <span style="width:6px;height:6px;background:#f59e0b;border-radius:50%;display:inline-block"></span></label>` +
    `<div style="padding:6px 10px;border:1px solid #f59e0b;border-radius:6px;background:var(--color-surface);font-size:11px;color:var(--color-text-primary)">john_doe_updated</div>` +
    `<div style="font-size:8px;color:#f59e0b;margin-top:2px">Unsaved changes</div></div>`
  ),

  'unsaved-changes-prompt': () => W(
    `<div style="width:220px;padding:14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;box-shadow:var(--shadow-lg)">` +
    `<div style="font-size:11px;font-weight:600;color:var(--color-text-primary);margin-bottom:4px">Unsaved Changes</div>` +
    `<div style="font-size:9px;color:var(--color-text-secondary);margin-bottom:10px">You have unsaved changes. Save before leaving?</div>` +
    `<div style="display:flex;gap:6px;justify-content:flex-end">` +
    `<button style="padding:4px 10px;background:none;border:1px solid var(--color-border);border-radius:4px;font-size:9px;color:var(--color-text-secondary);cursor:default">Discard</button>` +
    `<button style="padding:4px 10px;background:#3b82f6;border:none;border-radius:4px;font-size:9px;color:white;cursor:default">Save</button></div></div>`
  ),

  'validation': () => W(
    `<div style="display:flex;gap:12px">` +
    `<div style="width:120px"><label style="font-size:9px;color:var(--color-text-secondary);margin-bottom:3px;display:block">Email</label><div style="padding:5px 8px;border:1px solid #22c55e;border-radius:5px;background:var(--color-surface);font-size:10px;color:var(--color-text-primary);display:flex;align-items:center;justify-content:space-between">user@mail.com <span style="color:#22c55e">${ico('<polyline points="4 8 7 11 12 5" stroke="#22c55e"/>')}</span></div></div>` +
    `<div style="width:120px"><label style="font-size:9px;color:var(--color-text-secondary);margin-bottom:3px;display:block">Email</label><div style="padding:5px 8px;border:1px solid #ef4444;border-radius:5px;background:var(--color-surface);font-size:10px;color:var(--color-text-primary);display:flex;align-items:center;justify-content:space-between">not-valid <span style="color:#ef4444">${ico('<line x1="4" y1="4" x2="12" y2="12" stroke="#ef4444"/><line x1="12" y1="4" x2="4" y2="12" stroke="#ef4444"/>')}</span></div><div style="font-size:8px;color:#ef4444;margin-top:2px">Invalid email</div></div></div>`
  ),

  'hint-text': () => W(
    `<div style="width:200px">` +
    `<label style="font-size:9px;color:var(--color-text-secondary);margin-bottom:3px;display:block">Password</label>` +
    `<div style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;background:var(--color-surface);font-size:11px;color:var(--color-text-tertiary)">••••••••</div>` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-top:3px">Use 8+ characters with a mix of letters and numbers</div></div>`
  ),

  'optional-label': () => W(
    `<div style="width:200px">` +
    `<label style="font-size:9px;color:var(--color-text-secondary);margin-bottom:3px;display:block">Middle Name <span style="color:var(--color-text-tertiary);font-weight:normal">(optional)</span></label>` +
    `<div style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;background:var(--color-surface);font-size:11px;color:var(--color-text-tertiary)">Enter middle name</div></div>`
  ),

  'recaptcha': () => W(
    `<div style="width:200px;padding:10px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;display:flex;align-items:center;justify-content:space-between;box-shadow:var(--shadow-md)">` +
    `<div style="display:flex;align-items:center;gap:8px">` +
    `<div style="width:20px;height:20px;border:2px solid var(--color-border);border-radius:3px;background:var(--color-bg)"></div>` +
    `<span style="font-size:10px;color:var(--color-text-primary)">I'm not a robot</span></div>` +
    `<div style="text-align:center">${svg(24, 26, '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#4285f4" fill="none" stroke-width="1"/><path d="M12 6v6l4 2" stroke="#4285f4" stroke-width="1.5"/>')}<div style="font-size:6px;color:var(--color-text-tertiary)">reCAPTCHA</div></div></div>`
  ),

  /* ═══════════════════ DISPLAY/CONTENT ═══════════════════ */

  'image-preview': () => W(
    `<div style="width:100px;height:70px;background:linear-gradient(135deg,#dbeafe,#bfdbfe);border-radius:6px;position:relative;overflow:hidden;border:1px solid var(--color-border)">` +
    `<div style="position:absolute;top:15px;left:20px;width:20px;height:20px;background:#fbbf24;border-radius:50%"></div>` +
    `<div style="position:absolute;bottom:0;left:0;right:0;height:25px;background:linear-gradient(to right,#22c55e,#16a34a);clip-path:polygon(0 100%,30% 30%,60% 60%,100% 10%,100% 100%)"></div>` +
    `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;opacity:0.7">${svg(20, 20, '<polyline points="6 6 6 2 14 2 14 6" stroke="white"/><polyline points="6 14 6 18 14 18 14 14" stroke="white"/><polyline points="2 6 2 14" stroke="white"/><polyline points="18 6 18 14" stroke="white"/>')}</div></div>`
  ),

  'slider-carousel': () => W(
    `<div style="display:flex;align-items:center;gap:6px">` +
    `<div style="color:var(--color-text-tertiary);cursor:default">${ARRL}</div>` +
    `<div style="display:flex;gap:6px;overflow:hidden;width:220px">` +
    [1, 2, 3, 4].map(i =>
      `<div style="min-width:50px;height:40px;background:${i === 2 ? '#3b82f6' : 'var(--color-surface)'};border:1px solid ${i === 2 ? '#3b82f6' : 'var(--color-border)'};border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:9px;color:${i === 2 ? 'white' : 'var(--color-text-tertiary)'}">${i}</div>`
    ).join('') +
    `</div>` +
    `<div style="color:var(--color-text-tertiary);cursor:default">${ARRR}</div></div>`
  ),

  'slideshow': () => W(
    `<div style="width:200px;position:relative">` +
    `<div style="height:70px;background:linear-gradient(135deg,#dbeafe,#93c5fd);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;color:#1e40af;font-weight:500">Slide 2 of 5</div>` +
    `<div style="position:absolute;top:50%;left:4px;transform:translateY(-50%);color:white;cursor:default">${ARRL}</div>` +
    `<div style="position:absolute;top:50%;right:4px;transform:translateY(-50%);color:white;cursor:default">${ARRR}</div>` +
    `<div style="display:flex;justify-content:center;gap:4px;margin-top:6px">` +
    [0, 1, 2, 3, 4].map(i =>
      `<div style="width:6px;height:6px;border-radius:50%;background:${i === 1 ? '#3b82f6' : 'var(--color-border)'}"></div>`
    ).join('') +
    `</div></div>`
  ),

  'ordered-list': () => W(
    `<div style="width:180px;padding:10px 14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
    ['Buy groceries', 'Cook dinner', 'Walk the dog'].map((t, i) =>
      `<div style="display:flex;gap:8px;font-size:10px;color:var(--color-text-primary);padding:3px 0"><span style="color:var(--color-text-tertiary);font-weight:600;min-width:14px">${i + 1}.</span>${t}</div>`
    ).join('') +
    `</div>`
  ),

  'unordered-list': () => W(
    `<div style="width:180px;padding:10px 14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
    ['Apples', 'Bananas', 'Cherries'].map(t =>
      `<div style="display:flex;gap:8px;align-items:center;font-size:10px;color:var(--color-text-primary);padding:3px 0"><div style="width:4px;height:4px;border-radius:50%;background:var(--color-text-tertiary);flex-shrink:0"></div>${t}</div>`
    ).join('') +
    `</div>`
  ),

  'structured-list': () => W(
    `<div style="width:260px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    [
      { h: 'Invoice #1042', d: 'Payment for web design', m: 'Mar 15' },
      { h: 'Invoice #1043', d: 'Monthly retainer fee', m: 'Apr 01' },
    ].map((item, i) =>
      `<div style="padding:8px 12px;${i > 0 ? 'border-top:1px solid var(--color-border-subtle);' : ''}display:flex;justify-content:space-between;align-items:center">` +
      `<div><div style="font-size:10px;font-weight:500;color:var(--color-text-primary)">${item.h}</div><div style="font-size:8px;color:var(--color-text-tertiary)">${item.d}</div></div>` +
      `<span style="font-size:8px;color:var(--color-text-tertiary)">${item.m}</span></div>`
    ).join('') +
    `</div>`
  ),

  'definition-list': () => W(
    `<div style="width:220px;padding:10px 14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
    [
      { dt: 'API', dd: 'Application Programming Interface' },
      { dt: 'UI', dd: 'User Interface' },
      { dt: 'UX', dd: 'User Experience' },
    ].map((item, i) =>
      `<div style="padding:4px 0;${i > 0 ? 'border-top:1px solid var(--color-border-subtle);margin-top:4px;padding-top:6px;' : ''}"><div style="font-size:10px;font-weight:600;color:var(--color-text-primary)">${item.dt}</div><div style="font-size:9px;color:var(--color-text-secondary);margin-top:1px">${item.dd}</div></div>`
    ).join('') +
    `</div>`
  ),

  'placeholder-content': () => W(
    `<div style="width:200px;padding:12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
    `<div style="width:60%;height:10px;background:var(--color-border-subtle);border-radius:3px;margin-bottom:8px"></div>` +
    `<div style="width:100%;height:6px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:4px"></div>` +
    `<div style="width:90%;height:6px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:4px"></div>` +
    `<div style="width:70%;height:6px;background:var(--color-border-subtle);border-radius:2px"></div></div>`
  ),

  'zero-state': () => W(
    `<div style="width:220px;padding:20px;text-align:center;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px">` +
    `<div style="color:var(--color-text-tertiary);margin-bottom:6px">${svg(28, 28, '<rect x="4" y="4" width="20" height="20" rx="3" stroke-dasharray="3 3"/><line x1="14" y1="10" x2="14" y2="18"/><line x1="10" y1="14" x2="18" y2="14"/>')}</div>` +
    `<div style="font-size:10px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">No items yet</div>` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-bottom:8px">Create your first item to get started</div>` +
    `<button style="padding:4px 14px;background:#3b82f6;color:white;border:none;border-radius:4px;font-size:9px;cursor:default">Get Started</button></div>`
  ),

  'detail-view': () => W(
    `<div style="width:260px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="padding:10px 12px;border-bottom:1px solid var(--color-border-subtle)">` +
    `<div style="font-size:12px;font-weight:600;color:var(--color-text-primary)">Project Alpha</div>` +
    `<div style="display:flex;gap:8px;margin-top:4px;font-size:8px;color:var(--color-text-tertiary)"><span>Status: Active</span><span>Due: May 30</span><span>Owner: Jane</span></div></div>` +
    `<div style="padding:8px 12px"><div style="width:100%;height:5px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:3px"></div><div style="width:85%;height:5px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:3px"></div><div style="width:60%;height:5px;background:var(--color-border-subtle);border-radius:2px"></div></div></div>`
  ),

  'inspector-panel': () => W(
    `<div style="width:180px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;font-size:9px">` +
    `<div style="font-weight:600;color:var(--color-text-primary);margin-bottom:6px;font-size:10px">Inspector</div>` +
    [
      { k: 'X', v: '120 px' },
      { k: 'Y', v: '80 px' },
      { k: 'W', v: '200 px' },
      { k: 'H', v: '150 px' },
      { k: 'Fill', v: '#3b82f6' },
    ].map(item =>
      `<div style="display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid var(--color-border-subtle)"><span style="color:var(--color-text-tertiary)">${item.k}</span><span style="color:var(--color-text-primary);font-family:var(--font-mono)">${item.v}</span></div>`
    ).join('') +
    `</div>`
  ),

  'layers-panel': () => W(
    `<div style="width:180px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden;font-size:9px">` +
    `<div style="padding:6px 10px;font-weight:600;font-size:10px;color:var(--color-text-primary);border-bottom:1px solid var(--color-border)">Layers</div>` +
    [
      { name: 'Header', visible: true, sel: false },
      { name: 'Hero Image', visible: true, sel: true },
      { name: 'Card Group', visible: true, sel: false },
      { name: 'Footer', visible: false, sel: false },
    ].map(l =>
      `<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 10px;background:${l.sel ? 'rgba(59,130,246,0.1)' : 'transparent'};border-left:${l.sel ? '2px solid #3b82f6' : '2px solid transparent'}">` +
      `<span style="color:${l.sel ? '#3b82f6' : 'var(--color-text-primary)'}">${l.name}</span>` +
      `<span style="color:${l.visible ? 'var(--color-text-tertiary)' : 'var(--color-border-subtle)'}">${EYE}</span></div>`
    ).join('') +
    `</div>`
  ),

  /* ═══════════════════ TABLE/DATA ═══════════════════ */

  'spreadsheet-ui': () => W(
    `<div style="width:260px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;font-size:9px;font-family:var(--font-mono)">` +
    `<div style="display:flex;background:var(--color-surface)">` +
    `<div style="width:28px;padding:3px 4px;border-right:1px solid var(--color-border);border-bottom:1px solid var(--color-border);color:var(--color-text-tertiary)"></div>` +
    ['A', 'B', 'C', 'D'].map(c =>
      `<div style="flex:1;padding:3px 6px;border-right:1px solid var(--color-border-subtle);border-bottom:1px solid var(--color-border);color:var(--color-text-tertiary);text-align:center">${c}</div>`
    ).join('') + `</div>` +
    [1, 2, 3].map(r =>
      `<div style="display:flex">` +
      `<div style="width:28px;padding:3px 4px;border-right:1px solid var(--color-border);border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-tertiary);background:var(--color-surface);text-align:center">${r}</div>` +
      ['A', 'B', 'C', 'D'].map(c => {
        const sel = r === 2 && c === 'B'
        return `<div style="flex:1;padding:3px 6px;border-right:1px solid var(--color-border-subtle);border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-primary);${sel ? 'outline:2px solid #3b82f6;background:rgba(59,130,246,0.05);z-index:1;position:relative' : ''}">${sel ? '42' : ''}</div>`
      }).join('') +
      `</div>`
    ).join('') +
    `</div>`
  ),

  'faceted-filter': () => W(
    `<div style="width:170px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;font-size:9px">` +
    `<div style="font-weight:600;font-size:10px;color:var(--color-text-primary);margin-bottom:6px">Category</div>` +
    [
      { name: 'Electronics', count: 42, checked: true },
      { name: 'Clothing', count: 28, checked: false },
      { name: 'Books', count: 15, checked: true },
      { name: 'Home', count: 9, checked: false },
    ].map(f =>
      `<div style="display:flex;align-items:center;justify-content:space-between;padding:2px 0">` +
      `<label style="display:flex;align-items:center;gap:4px;color:var(--color-text-primary)"><div style="width:12px;height:12px;border:1px solid ${f.checked ? '#3b82f6' : 'var(--color-border)'};border-radius:2px;background:${f.checked ? '#3b82f6' : 'var(--color-bg)'};display:flex;align-items:center;justify-content:center">${f.checked ? '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="white" stroke-width="1.5"><polyline points="1.5 4 3 5.5 6.5 2"/></svg>' : ''}</div>${f.name}</label>` +
      `<span style="color:var(--color-text-tertiary);font-size:8px">${f.count}</span></div>`
    ).join('') +
    `</div>`
  ),

  'resizable-column': () => W(
    `<div style="width:260px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;font-size:9px">` +
    `<div style="display:flex;background:var(--color-surface);border-bottom:1px solid var(--color-border)">` +
    [
      { name: 'Name', w: '100px' },
      { name: 'Status', w: '80px' },
      { name: 'Date', w: '80px' },
    ].map((c, i) =>
      `<div style="width:${c.w};padding:5px 8px;font-weight:500;color:var(--color-text-secondary);position:relative;flex-shrink:0">${c.name}${i < 2 ? `<div style="position:absolute;right:0;top:2px;bottom:2px;width:3px;cursor:col-resize;background:var(--color-border);opacity:0.5;border-radius:1px"></div>` : ''}</div>`
    ).join('') +
    `</div>` +
    `<div style="display:flex;padding:5px 0"><div style="width:100px;padding:0 8px;color:var(--color-text-primary)">Document.pdf</div><div style="width:80px;padding:0 8px;color:var(--color-text-tertiary)">Active</div><div style="width:80px;padding:0 8px;color:var(--color-text-tertiary)">May 10</div></div></div>`
  ),

  'tree-table': () => W(
    `<div style="width:240px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;font-size:9px">` +
    `<div style="display:flex;background:var(--color-surface);padding:5px 8px;border-bottom:1px solid var(--color-border);font-weight:500;color:var(--color-text-secondary)"><span style="flex:1">Name</span><span style="width:50px">Size</span></div>` +
    `<div style="padding:4px 8px;display:flex;color:var(--color-text-primary);border-bottom:1px solid var(--color-border-subtle)"><span style="flex:1">▾ src/</span><span style="width:50px;color:var(--color-text-tertiary)">—</span></div>` +
    `<div style="padding:4px 8px;display:flex;color:var(--color-text-primary);border-bottom:1px solid var(--color-border-subtle);padding-left:20px"><span style="flex:1">▾ components/</span><span style="width:50px;color:var(--color-text-tertiary)">—</span></div>` +
    `<div style="padding:4px 8px;display:flex;color:var(--color-text-primary);border-bottom:1px solid var(--color-border-subtle);padding-left:32px"><span style="flex:1">Button.tsx</span><span style="width:50px;color:var(--color-text-tertiary)">2.4k</span></div>` +
    `<div style="padding:4px 8px;display:flex;color:var(--color-text-primary);padding-left:32px"><span style="flex:1">Card.tsx</span><span style="width:50px;color:var(--color-text-tertiary)">1.8k</span></div></div>`
  ),

  'batch-action-bar': () => W(
    `<div style="width:280px;padding:8px 14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;box-shadow:var(--shadow-lg);display:flex;align-items:center;justify-content:space-between">` +
    `<span style="font-size:10px;font-weight:500;color:var(--color-text-primary)">3 selected</span>` +
    `<div style="display:flex;gap:6px">` +
    ['Edit', 'Delete', 'Export'].map(a =>
      `<button style="padding:4px 10px;background:${a === 'Delete' ? '#ef4444' : 'var(--color-bg)'};color:${a === 'Delete' ? 'white' : 'var(--color-text-secondary)'};border:1px solid ${a === 'Delete' ? '#ef4444' : 'var(--color-border)'};border-radius:4px;font-size:9px;cursor:default">${a}</button>`
    ).join('') +
    `</div></div>`
  ),

  'search-in-table': () => W(
    `<div style="width:260px">` +
    `<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid var(--color-border);border-radius:6px;margin-bottom:6px;background:var(--color-surface)">` +
    `<span style="color:var(--color-text-tertiary)">${ico('<circle cx="7" cy="7" r="4"/><line x1="10" y1="10" x2="14" y2="14"/>')}</span>` +
    `<span style="font-size:10px;color:var(--color-text-tertiary)">Search table...</span></div>` +
    `<div style="border:1px solid var(--color-border);border-radius:4px;overflow:hidden;font-size:9px">` +
    `<div style="display:flex;padding:4px 8px;background:var(--color-surface);border-bottom:1px solid var(--color-border);font-weight:500;color:var(--color-text-secondary)"><span style="flex:1">Name</span><span style="width:60px">Role</span></div>` +
    `<div style="display:flex;padding:4px 8px;border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-primary)"><span style="flex:1">Alice</span><span style="width:60px;color:var(--color-text-tertiary)">Admin</span></div>` +
    `<div style="display:flex;padding:4px 8px;color:var(--color-text-primary)"><span style="flex:1">Bob</span><span style="width:60px;color:var(--color-text-tertiary)">Editor</span></div></div></div>`
  ),

  'column-filter': () => W(
    `<div style="width:240px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;font-size:9px">` +
    `<div style="display:flex;background:var(--color-surface);border-bottom:1px solid var(--color-border)">` +
    `<div style="flex:1;padding:5px 8px;font-weight:500;color:var(--color-text-secondary)">Name</div>` +
    `<div style="flex:1;padding:5px 8px;font-weight:500;color:var(--color-text-secondary);display:flex;align-items:center;gap:4px">Status <span style="color:#3b82f6">${FILTER}</span></div>` +
    `<div style="flex:1;padding:5px 8px;font-weight:500;color:var(--color-text-secondary)">Date</div></div>` +
    `<div style="display:flex;padding:4px 8px;border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-primary)"><span style="flex:1">Task A</span><span style="flex:1;color:#22c55e">Active</span><span style="flex:1;color:var(--color-text-tertiary)">May 10</span></div>` +
    `<div style="display:flex;padding:4px 8px;color:var(--color-text-primary)"><span style="flex:1">Task B</span><span style="flex:1;color:#22c55e">Active</span><span style="flex:1;color:var(--color-text-tertiary)">May 12</span></div></div>`
  ),

  'row-expansion': () => W(
    `<div style="width:260px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;font-size:9px">` +
    `<div style="display:flex;padding:5px 8px;background:var(--color-surface);border-bottom:1px solid var(--color-border);font-weight:500;color:var(--color-text-secondary)"><span style="width:16px"></span><span style="flex:1">Name</span><span style="width:60px">Status</span></div>` +
    `<div style="display:flex;padding:5px 8px;border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-primary);background:rgba(59,130,246,0.05)"><span style="width:16px;color:var(--color-text-tertiary)">▾</span><span style="flex:1;font-weight:500">Order #101</span><span style="width:60px;color:#22c55e">Active</span></div>` +
    `<div style="padding:6px 12px 6px 24px;background:rgba(59,130,246,0.03);border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-secondary)">` +
    `<div>Customer: John Doe</div><div>Items: 3 | Total: $99.00</div></div>` +
    `<div style="display:flex;padding:5px 8px;color:var(--color-text-primary)"><span style="width:16px;color:var(--color-text-tertiary)">▸</span><span style="flex:1">Order #102</span><span style="width:60px;color:var(--color-text-tertiary)">Pending</span></div></div>`
  ),

  /* ═══════════════════ OVERLAY/POPUP ═══════════════════ */

  'floating-panel': () => W(
    `<div style="width:180px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;box-shadow:var(--shadow-lg);overflow:hidden">` +
    `<div style="padding:4px 10px;background:var(--color-surface);border-bottom:1px solid var(--color-border);display:flex;align-items:center;justify-content:space-between">` +
    `<div style="display:flex;align-items:center;gap:4px"><div style="width:24px;height:4px;background:var(--color-border);border-radius:2px"></div><span style="font-size:9px;font-weight:500;color:var(--color-text-primary)">Panel</span></div>` +
    `<span style="color:var(--color-text-tertiary)">${CLOSE}</span></div>` +
    `<div style="padding:10px"><div style="width:100%;height:5px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:4px"></div><div style="width:70%;height:5px;background:var(--color-border-subtle);border-radius:2px"></div></div></div>`
  ),

  'backdrop': () => W(
    `<div style="width:220px;height:90px;background:rgba(0,0,0,0.5);border-radius:8px;display:flex;align-items:center;justify-content:center;position:relative">` +
    `<div style="width:140px;padding:12px;background:var(--color-surface);border-radius:8px;box-shadow:var(--shadow-lg);text-align:center">` +
    `<div style="font-size:10px;font-weight:500;color:var(--color-text-primary)">Modal Content</div>` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-top:2px">Backdrop behind</div></div></div>`
  ),

  'sheet': () => W(
    `<div style="width:200px;height:90px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:8px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;bottom:0;left:0;right:0;height:65px;background:var(--color-surface);border-top:1px solid var(--color-border);border-radius:12px 12px 0 0;padding:8px 12px">` +
    `<div style="width:30px;height:3px;background:var(--color-border);border-radius:2px;margin:0 auto 6px"></div>` +
    `<div style="font-size:10px;font-weight:500;color:var(--color-text-primary);margin-bottom:4px">Sheet</div>` +
    `<div style="width:100%;height:4px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:3px"></div>` +
    `<div style="width:70%;height:4px;background:var(--color-border-subtle);border-radius:2px"></div></div></div>`
  ),

  /* ═══════════════════ STATE/INTERACTION ═══════════════════ */

  'unchecked-state': () => W(
    `<div style="display:flex;align-items:center;gap:8px">` +
    `<div style="width:18px;height:18px;border:2px solid var(--color-border);border-radius:4px;background:var(--color-bg)"></div>` +
    `<span style="font-size:11px;color:var(--color-text-primary)">Unchecked</span></div>`
  ),

  'open-state': () => W(
    `<div style="width:160px">` +
    `<div style="padding:6px 10px;border:1px solid #3b82f6;border-radius:6px 6px 0 0;background:var(--color-surface);font-size:10px;color:var(--color-text-primary);display:flex;justify-content:space-between;align-items:center">Select... <span style="transform:rotate(180deg);display:inline-flex">${ico('<polyline points="4 6 8 10 12 6" stroke="#3b82f6"/>')}</span></div>` +
    `<div style="border:1px solid #3b82f6;border-top:none;border-radius:0 0 6px 6px;background:var(--color-surface);box-shadow:var(--shadow-md)">` +
    ['Option A', 'Option B', 'Option C'].map((o, i) =>
      `<div style="padding:5px 10px;font-size:10px;color:var(--color-text-primary);${i === 1 ? 'background:rgba(59,130,246,0.1);color:#3b82f6' : ''}">${o}</div>`
    ).join('') +
    `</div></div>`
  ),

  'closed-state': () => W(
    `<div style="width:160px">` +
    `<div style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;background:var(--color-surface);font-size:10px;color:var(--color-text-primary);display:flex;justify-content:space-between;align-items:center">Option B ${ico('<polyline points="4 6 8 10 12 6"/>')}</div></div>`
  ),

  'read-only-state': () => W(
    `<div style="width:200px">` +
    `<label style="font-size:9px;color:var(--color-text-secondary);margin-bottom:3px;display:block">Account ID</label>` +
    `<div style="padding:6px 10px;border:1px solid var(--color-border-subtle);border-radius:6px;background:var(--color-bg);font-size:10px;color:var(--color-text-tertiary);display:flex;align-items:center;justify-content:space-between">ACC-2024-00142 <span style="color:var(--color-text-tertiary)">${LOCK}</span></div></div>`
  ),

  'destructive-action': () => W(
    `<div style="display:flex;gap:12px;align-items:center">` +
    `<button style="padding:6px 16px;background:#ef4444;color:white;border:none;border-radius:6px;font-size:10px;font-weight:500;cursor:default;display:flex;align-items:center;gap:4px">${svg(12, 12, '<polyline points="3 3 9 9" stroke="white" stroke-width="2"/><polyline points="9 3 3 9" stroke="white" stroke-width="2"/>')} Delete</button>` +
    `<div style="font-size:8px;color:#ef4444;display:flex;align-items:center;gap:2px">${svg(12, 12, '<path d="M6 1L1 6l5 5M11 1l-5 5 5 5" stroke="#ef4444" stroke-width="1.5"/>')} This cannot be undone</div></div>`
  ),

  'reversible-action': () => W(
    `<div style="display:flex;gap:8px;align-items:center;padding:8px 14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;box-shadow:var(--shadow-md)">` +
    `<span style="font-size:10px;color:var(--color-text-primary)">Item archived.</span>` +
    `<button style="padding:2px 8px;background:none;border:none;color:#3b82f6;font-size:10px;font-weight:500;cursor:default;text-decoration:underline">Undo</button></div>`
  ),

  /* ═══════════════════ SEARCH/FILTER ═══════════════════ */

  'saved-search': () => W(
    `<div style="width:200px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden;font-size:9px">` +
    `<div style="padding:6px 10px;font-weight:600;font-size:10px;color:var(--color-text-primary);border-bottom:1px solid var(--color-border)">Saved Searches</div>` +
    [
      { name: 'Open bugs', starred: true },
      { name: 'Assigned to me', starred: true },
      { name: 'High priority', starred: false },
    ].map(s =>
      `<div style="display:flex;align-items:center;justify-content:space-between;padding:5px 10px;border-bottom:1px solid var(--color-border-subtle)">` +
      `<span style="color:var(--color-text-primary)">${s.name}</span>` +
      `<span style="color:${s.starred ? '#f59e0b' : 'var(--color-text-tertiary)'}">${s.starred ? STAR : STAR_O}</span></div>`
    ).join('') +
    `</div>`
  ),

  'facet': () => W(
    `<div style="width:170px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;font-size:9px">` +
    `<div style="font-weight:600;font-size:10px;color:var(--color-text-primary);margin-bottom:6px">Brand</div>` +
    [
      { name: 'Apple', count: 24, checked: true },
      { name: 'Samsung', count: 18, checked: false },
      { name: 'Sony', count: 12, checked: false },
    ].map(f =>
      `<div style="display:flex;align-items:center;justify-content:space-between;padding:2px 0">` +
      `<label style="display:flex;align-items:center;gap:4px;color:var(--color-text-primary)"><div style="width:12px;height:12px;border:1px solid ${f.checked ? '#3b82f6' : 'var(--color-border)'};border-radius:2px;background:${f.checked ? '#3b82f6' : 'var(--color-bg)'};display:flex;align-items:center;justify-content:center">${f.checked ? '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="white" stroke-width="1.5"><polyline points="1.5 4 3 5.5 6.5 2"/></svg>' : ''}</div>${f.name}</label>` +
      `<span style="color:var(--color-text-tertiary);font-size:8px">${f.count}</span></div>`
    ).join('') +
    `</div>`
  ),

  'rule-builder': () => W(
    `<div style="width:300px;padding:10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:9px">` +
    `<div style="font-weight:600;font-size:10px;color:var(--color-text-primary);margin-bottom:8px">Rule Builder</div>` +
    `<div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center">` +
    `<span style="padding:3px 6px;background:rgba(139,92,246,0.1);color:#8b5cf6;border-radius:3px;font-weight:500">If</span>` +
    `<span style="padding:3px 6px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:3px">status</span>` +
    `<span style="padding:3px 6px;background:rgba(59,130,246,0.1);color:#3b82f6;border-radius:3px">equals</span>` +
    `<span style="padding:3px 6px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:3px">active</span>` +
    `<span style="padding:3px 6px;background:rgba(245,158,11,0.1);color:#f59e0b;border-radius:3px;font-weight:500">AND</span>` +
    `<span style="padding:3px 6px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:3px">role</span>` +
    `<span style="padding:3px 6px;background:rgba(59,130,246,0.1);color:#3b82f6;border-radius:3px">is</span>` +
    `<span style="padding:3px 6px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:3px">admin</span></div></div>`
  ),

  /* ═══════════════════ SCROLL/POSITION ═══════════════════ */

  'scroll-thumb': () => W(
    `<div style="display:flex;gap:12px;align-items:center">` +
    `<div style="width:8px;height:80px;background:var(--color-border-subtle);border-radius:4px;position:relative">` +
    `<div style="position:absolute;top:20px;width:8px;height:24px;background:#3b82f6;border-radius:4px"></div></div>` +
    `<div style="font-size:9px;color:var(--color-text-tertiary)"><div style="margin-bottom:4px">↑ Scroll thumb</div><div>Draggable indicator</div></div></div>`
  ),

  'scroll-track': () => W(
    `<div style="display:flex;gap:12px;align-items:center">` +
    `<div style="width:10px;height:80px;background:var(--color-border-subtle);border-radius:5px;position:relative;box-shadow:inset 0 1px 3px rgba(0,0,0,0.1)">` +
    `<div style="position:absolute;top:15px;width:10px;height:20px;background:var(--color-text-tertiary);border-radius:5px;opacity:0.5"></div></div>` +
    `<div style="font-size:9px;color:var(--color-text-tertiary)"><div style="margin-bottom:2px">Track (full range)</div><div>Thumb sits inside track</div></div></div>`
  ),

  'fixed-position': () => W(
    `<div style="width:200px;height:80px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;position:relative;overflow:hidden">` +
    `<div style="padding:6px;font-size:8px;color:var(--color-text-tertiary)"><div style="height:4px;background:var(--color-border-subtle);border-radius:1px;margin-bottom:3px;width:80%"></div><div style="height:4px;background:var(--color-border-subtle);border-radius:1px;margin-bottom:3px;width:60%"></div><div style="height:4px;background:var(--color-border-subtle);border-radius:1px;width:90%"></div></div>` +
    `<div style="position:absolute;bottom:6px;right:6px;width:28px;height:28px;background:#3b82f6;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-md);color:white;font-size:14px;font-weight:300">+</div>` +
    `<div style="position:absolute;top:2px;right:2px;font-size:7px;color:var(--color-text-tertiary);background:var(--color-bg);padding:1px 3px;border-radius:2px">fixed</div></div>`
  ),

  'overscroll': () => W(
    `<div style="width:160px;height:80px;border:1px solid var(--color-border);border-radius:8px;position:relative;overflow:hidden;background:var(--color-surface)">` +
    `<div style="transform:translateY(8px)">` +
    `<div style="padding:6px 10px;font-size:9px;color:var(--color-text-primary);border-bottom:1px solid var(--color-border-subtle)">Item 1</div>` +
    `<div style="padding:6px 10px;font-size:9px;color:var(--color-text-primary);border-bottom:1px solid var(--color-border-subtle)">Item 2</div>` +
    `<div style="padding:6px 10px;font-size:9px;color:var(--color-text-primary)">Item 3</div></div>` +
    `<div style="position:absolute;top:0;left:0;right:0;height:10px;background:linear-gradient(to bottom,var(--color-bg),transparent)"></div>` +
    `<div style="position:absolute;top:2px;left:50%;transform:translateX(-50%);font-size:7px;color:var(--color-text-tertiary)">↕ bounce</div></div>`
  ),

  'lazy-render': () => W(
    `<div style="width:160px;height:90px;border:1px solid var(--color-border);border-radius:6px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;top:0;left:0;right:0;height:35px;background:repeating-linear-gradient(to bottom,var(--color-border-subtle) 0px,var(--color-border-subtle) 3px,transparent 3px,transparent 6px)"></div>` +
    `<div style="position:absolute;top:30px;left:0;right:0;height:30px;background:var(--color-surface);border-top:2px solid #3b82f6;border-bottom:2px solid #3b82f6;display:flex;align-items:center;justify-content:center;font-size:7px;color:#3b82f6;font-weight:500">Viewport (rendered)</div>` +
    `<div style="position:absolute;bottom:0;left:0;right:0;height:28px;background:repeating-linear-gradient(to bottom,var(--color-border-subtle) 0px,var(--color-border-subtle) 3px,transparent 3px,transparent 6px);opacity:0.4"></div>` +
    `<div style="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);font-size:7px;color:var(--color-text-tertiary)">unrendered</div></div>`
  ),

  /* ═══════════════════ LAYOUT/STRUCTURE ═══════════════════ */

  'column-grid': () => W(
    `<div style="width:280px;display:flex;gap:2px;height:50px">` +
    Array.from({ length: 12 }, (_, i) => {
      const highlight = i >= 1 && i <= 4
      return `<div style="flex:1;background:${highlight ? 'rgba(59,130,246,0.2)' : 'rgba(59,130,246,0.05)'};border:1px solid ${highlight ? '#3b82f6' : 'var(--color-border-subtle)'};border-radius:2px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:2px;font-size:6px;color:${highlight ? '#3b82f6' : 'var(--color-text-tertiary)'}">${i + 1}</div>`
    }).join('') +
    `</div>`
  ),

  'baseline-grid': () => W(
    `<div style="width:200px;height:70px;background:repeating-linear-gradient(to bottom,transparent,transparent 15px,rgba(59,130,246,0.1) 15px,rgba(59,130,246,0.15) 16px);padding:4px 8px;border:1px solid var(--color-border);border-radius:4px">` +
    `<div style="font-size:14px;font-weight:600;color:var(--color-text-primary);line-height:16px">Heading</div>` +
    `<div style="font-size:10px;color:var(--color-text-secondary);line-height:16px;margin-top:0">Body text aligned to</div>` +
    `<div style="font-size:10px;color:var(--color-text-secondary);line-height:16px">the baseline grid lines</div></div>`
  ),

  'waterfall-layout': () => W(
    `<div style="display:flex;gap:4px;width:200px">` +
    `<div style="flex:1;display:flex;flex-direction:column;gap:4px">` +
    `<div style="height:40px;background:#dbeafe;border-radius:4px"></div>` +
    `<div style="height:25px;background:#fce7f3;border-radius:4px"></div>` +
    `<div style="height:35px;background:#d1fae5;border-radius:4px"></div></div>` +
    `<div style="flex:1;display:flex;flex-direction:column;gap:4px">` +
    `<div style="height:28px;background:#fef3c7;border-radius:4px"></div>` +
    `<div style="height:42px;background:#e0e7ff;border-radius:4px"></div>` +
    `<div style="height:22px;background:#fee2e2;border-radius:4px"></div></div>` +
    `<div style="flex:1;display:flex;flex-direction:column;gap:4px">` +
    `<div style="height:35px;background:#f3e8ff;border-radius:4px"></div>` +
    `<div style="height:20px;background:#ccfbf1;border-radius:4px"></div>` +
    `<div style="height:38px;background:#fef9c3;border-radius:4px"></div></div></div>`
  ),

  'fixed-layout': () => W(
    `<div style="width:280px;height:60px;background:var(--color-bg);border:1px solid var(--color-border-subtle);border-radius:4px;display:flex;align-items:center;justify-content:center;position:relative">` +
    `<div style="width:160px;height:44px;background:var(--color-surface);border:1px solid #3b82f6;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:8px;color:#3b82f6;font-family:var(--font-mono)">max-width: 960px</div>` +
    `<div style="position:absolute;top:2px;left:4px;font-size:7px;color:var(--color-text-tertiary)">viewport</div></div>`
  ),

  'adaptive-layout': () => W(
    `<div style="display:flex;gap:16px;align-items:center">` +
    `<div style="width:50px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden"><div style="height:10px;background:#3b82f6"></div><div style="padding:3px"><div style="height:12px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:2px"></div><div style="height:12px;background:var(--color-border-subtle);border-radius:2px"></div></div><div style="font-size:6px;color:var(--color-text-tertiary);text-align:center;padding:2px">Phone</div></div>` +
    `<div style="width:140px;height:55px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;display:flex"><div style="width:35px;background:var(--color-surface);border-right:1px solid var(--color-border)"><div style="height:8px;background:#3b82f6"></div></div><div style="flex:1;padding:3px;display:flex;gap:3px"><div style="flex:1;background:var(--color-border-subtle);border-radius:2px"></div><div style="flex:1;background:var(--color-border-subtle);border-radius:2px"></div></div><div style="font-size:6px;color:var(--color-text-tertiary);position:absolute;bottom:2px;right:6px">Desktop</div></div></div>`
  ),

  'wrapper': () => W(
    `<div style="width:200px;padding:10px;border:2px dashed var(--color-border);border-radius:8px;position:relative">` +
    `<div style="position:absolute;top:-8px;left:10px;background:var(--color-bg);padding:0 4px;font-size:8px;color:var(--color-text-tertiary)">wrapper</div>` +
    `<div style="padding:12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;text-align:center;font-size:9px;color:var(--color-text-secondary)">Inner Content</div></div>`
  ),

  'frame': () => W(
    `<div style="width:180px;height:80px;border:2px solid var(--color-text-tertiary);border-radius:2px;position:relative;background:var(--color-bg)">` +
    `<div style="position:absolute;top:-12px;left:4px;font-size:8px;color:var(--color-text-tertiary);background:var(--color-bg);padding:0 3px;font-family:var(--font-mono)">Frame 1 — 375 x 812</div>` +
    `<div style="padding:8px"><div style="height:8px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:4px;width:60%"></div><div style="height:6px;background:var(--color-border-subtle);border-radius:2px;width:80%"></div></div>` +
    `<div style="position:absolute;top:-3px;left:-3px;width:6px;height:6px;background:var(--color-text-tertiary);border-radius:1px"></div>` +
    `<div style="position:absolute;top:-3px;right:-3px;width:6px;height:6px;background:var(--color-text-tertiary);border-radius:1px"></div>` +
    `<div style="position:absolute;bottom:-3px;left:-3px;width:6px;height:6px;background:var(--color-text-tertiary);border-radius:1px"></div>` +
    `<div style="position:absolute;bottom:-3px;right:-3px;width:6px;height:6px;background:var(--color-text-tertiary);border-radius:1px"></div></div>`
  ),

  'fold': () => W(
    `<div style="width:200px;height:90px;border:1px solid var(--color-border);border-radius:4px;position:relative;overflow:hidden;background:var(--color-surface)">` +
    `<div style="padding:6px 8px"><div style="height:6px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:3px;width:70%"></div><div style="height:6px;background:var(--color-border-subtle);border-radius:2px;width:50%"></div></div>` +
    `<div style="position:absolute;left:0;right:0;top:42px;border-top:2px dashed #ef4444;display:flex;align-items:center;justify-content:center">` +
    `<span style="background:var(--color-surface);padding:0 6px;font-size:7px;color:#ef4444;font-weight:500;position:relative;top:-1px">← the fold →</span></div>` +
    `<div style="padding:48px 8px 6px"><div style="height:6px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:3px;width:90%;opacity:0.5"></div><div style="height:6px;background:var(--color-border-subtle);border-radius:2px;width:60%;opacity:0.5"></div></div></div>`
  ),

  'main': () => W(
    `<div style="width:220px;height:70px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;display:flex;flex-direction:column">` +
    `<div style="height:16px;background:var(--color-surface);border-bottom:1px solid var(--color-border);font-size:7px;color:var(--color-text-tertiary);display:flex;align-items:center;padding:0 6px">header</div>` +
    `<div style="flex:1;display:flex">` +
    `<div style="width:40px;background:var(--color-surface);border-right:1px solid var(--color-border);font-size:7px;color:var(--color-text-tertiary);display:flex;align-items:center;justify-content:center">nav</div>` +
    `<div style="flex:1;background:rgba(59,130,246,0.1);border:2px solid #3b82f6;display:flex;align-items:center;justify-content:center;font-size:9px;color:#3b82f6;font-weight:600">main</div></div></div>`
  ),

  'aside': () => W(
    `<div style="width:220px;height:70px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;display:flex;flex-direction:column">` +
    `<div style="height:16px;background:var(--color-surface);border-bottom:1px solid var(--color-border);font-size:7px;color:var(--color-text-tertiary);display:flex;align-items:center;padding:0 6px">header</div>` +
    `<div style="flex:1;display:flex">` +
    `<div style="flex:1;background:var(--color-bg);font-size:7px;color:var(--color-text-tertiary);display:flex;align-items:center;justify-content:center">content</div>` +
    `<div style="width:55px;background:rgba(139,92,246,0.1);border-left:2px solid #8b5cf6;display:flex;align-items:center;justify-content:center;font-size:9px;color:#8b5cf6;font-weight:600">aside</div></div></div>`
  ),

  'content-area': () => W(
    `<div style="width:220px;height:70px;border:1px solid var(--color-border);border-radius:4px;overflow:hidden;display:flex;flex-direction:column">` +
    `<div style="height:16px;background:var(--color-surface);border-bottom:1px solid var(--color-border);font-size:7px;color:var(--color-text-tertiary);display:flex;align-items:center;padding:0 6px">header</div>` +
    `<div style="flex:1;display:flex">` +
    `<div style="width:40px;background:var(--color-surface);border-right:1px solid var(--color-border);font-size:7px;color:var(--color-text-tertiary);display:flex;align-items:center;justify-content:center">nav</div>` +
    `<div style="flex:1;background:rgba(34,197,94,0.1);border:2px solid #22c55e;display:flex;align-items:center;justify-content:center;font-size:8px;color:#22c55e;font-weight:600">content area</div>` +
    `<div style="width:40px;background:var(--color-surface);border-left:1px solid var(--color-border);font-size:7px;color:var(--color-text-tertiary);display:flex;align-items:center;justify-content:center">side</div></div></div>`
  ),

  'distribution': () => W(
    `<div style="width:260px">` +
    `<div style="display:flex;justify-content:space-between;align-items:center;height:40px;border:1px dashed var(--color-border);border-radius:4px;padding:0 12px">` +
    Array.from({ length: 5 }, () =>
      `<div style="width:24px;height:24px;background:rgba(59,130,246,0.2);border:1px solid #3b82f6;border-radius:4px"></div>`
    ).join('') +
    `</div>` +
    `<div style="display:flex;justify-content:space-between;margin-top:2px;padding:0 12px">` +
    Array.from({ length: 4 }, () =>
      `<div style="font-size:7px;color:var(--color-text-tertiary)">↔</div>`
    ).join('') +
    `</div></div>`
  ),

  /* ═══════════════════ ANIMATION/MOTION ═══════════════════ */

  'delay': () => W(
    `<div style="display:flex;flex-direction:column;gap:8px;width:200px">` +
    `<div style="display:flex;align-items:center;gap:8px"><div style="width:24px;height:24px;background:#3b82f6;border-radius:4px;transform:translateX(100px)"></div><span style="font-size:8px;color:var(--color-text-tertiary)">delay: 0ms</span></div>` +
    `<div style="display:flex;align-items:center;gap:8px"><div style="width:24px;height:24px;background:#8b5cf6;border-radius:4px;transform:translateX(50px)"></div><span style="font-size:8px;color:var(--color-text-tertiary)">delay: 200ms</span></div>` +
    `<div style="display:flex;align-items:center;gap:8px"><div style="width:24px;height:24px;background:#ec4899;border-radius:4px;transform:translateX(10px)"></div><span style="font-size:8px;color:var(--color-text-tertiary)">delay: 400ms</span></div></div>`
  ),

  'skeleton-animation': () => W(
    `<div style="width:220px;padding:10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;display:flex;gap:10px">` +
    `<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(90deg,var(--color-border-subtle) 25%,var(--color-border) 50%,var(--color-border-subtle) 75%);background-size:200% 100%;flex-shrink:0"></div>` +
    `<div style="flex:1"><div style="width:70%;height:8px;background:linear-gradient(90deg,var(--color-border-subtle) 25%,var(--color-border) 50%,var(--color-border-subtle) 75%);background-size:200% 100%;border-radius:3px;margin-bottom:6px"></div><div style="width:100%;height:6px;background:linear-gradient(90deg,var(--color-border-subtle) 25%,var(--color-border) 50%,var(--color-border-subtle) 75%);background-size:200% 100%;border-radius:3px;margin-bottom:4px"></div><div style="width:50%;height:6px;background:linear-gradient(90deg,var(--color-border-subtle) 25%,var(--color-border) 50%,var(--color-border-subtle) 75%);background-size:200% 100%;border-radius:3px"></div></div></div>`
  ),

  'page-transition': () => W(
    `<div style="display:flex;align-items:center;gap:10px">` +
    `<div style="width:80px;height:60px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px;position:relative"><div style="font-size:8px;font-weight:500;color:var(--color-text-primary)">Page A</div><div style="height:4px;background:var(--color-border-subtle);border-radius:1px;margin-top:4px;width:80%"></div><div style="height:4px;background:var(--color-border-subtle);border-radius:1px;margin-top:3px;width:60%"></div></div>` +
    `<div style="display:flex;flex-direction:column;align-items:center;gap:2px;color:#3b82f6">${svg(24, 16, '<line x1="4" y1="8" x2="18" y2="8" stroke="#3b82f6" stroke-width="2"/><polyline points="14 4 18 8 14 12" stroke="#3b82f6" stroke-width="2"/>')}<span style="font-size:7px">transition</span></div>` +
    `<div style="width:80px;height:60px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px;opacity:0.7"><div style="font-size:8px;font-weight:500;color:var(--color-text-primary)">Page B</div><div style="height:4px;background:var(--color-border-subtle);border-radius:1px;margin-top:4px;width:70%"></div><div style="height:4px;background:var(--color-border-subtle);border-radius:1px;margin-top:3px;width:90%"></div></div></div>`
  ),

  'physics-based-animation': () => W(
    `<div style="width:200px;height:80px;position:relative">` +
    `<div style="position:absolute;bottom:5px;left:0;right:0;height:1px;background:var(--color-border)"></div>` +
    `${svg(200, 80, '<path d="M20 10 Q50 70 80 40 Q95 25 110 35 Q120 40 125 38 Q135 33 140 36 Q145 38 150 37" stroke="#3b82f6" stroke-width="2" fill="none"/><circle cx="20" cy="10" r="6" fill="#3b82f6" stroke="none"/><circle cx="150" cy="37" r="6" fill="#3b82f6" stroke="none" opacity="0.5"/>')}` +
    `<div style="position:absolute;top:2px;right:4px;font-size:7px;color:var(--color-text-tertiary)">spring / bounce</div></div>`
  ),

  'shared-element-transition': () => W(
    `<div style="display:flex;align-items:center;gap:12px">` +
    `<div style="width:80px;height:60px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px;position:relative"><div style="width:18px;height:18px;background:#3b82f6;border-radius:4px;position:absolute;top:6px;left:6px"></div><div style="font-size:7px;color:var(--color-text-tertiary);position:absolute;bottom:4px;left:6px">List view</div></div>` +
    `<div style="color:#3b82f6">${svg(20, 20, '<path d="M4 10h12M12 6l4 4-4 4" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2 2"/>')}</div>` +
    `<div style="width:80px;height:60px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;position:relative;overflow:hidden"><div style="width:80px;height:30px;background:#3b82f6;border-radius:4px 4px 0 0"></div><div style="font-size:7px;color:var(--color-text-tertiary);padding:3px 6px">Detail view</div></div></div>`
  ),

  /* ═══════════════════ EC/SAAS ═══════════════════ */

  'settings-page': () => W(
    `<div style="width:260px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:10px 12px;font-size:9px">` +
    `<div style="font-weight:600;font-size:11px;color:var(--color-text-primary);margin-bottom:8px">Settings</div>` +
    [
      { label: 'Notifications', on: true },
      { label: 'Dark Mode', on: false },
      { label: 'Auto-save', on: true },
    ].map(s =>
      `<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--color-border-subtle)">` +
      `<span style="color:var(--color-text-primary)">${s.label}</span>` +
      `<div style="width:28px;height:16px;border-radius:8px;background:${s.on ? '#3b82f6' : 'var(--color-border)'};position:relative;cursor:default"><div style="position:absolute;top:2px;${s.on ? 'right:2px' : 'left:2px'};width:12px;height:12px;background:white;border-radius:50%"></div></div></div>`
    ).join('') +
    `</div>`
  ),

  'admin-panel': () => W(
    `<div style="width:280px;height:90px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;display:flex">` +
    `<div style="width:55px;background:var(--color-surface);border-right:1px solid var(--color-border);padding:6px 4px;font-size:8px">` +
    ['Dashboard', 'Users', 'Settings'].map((t, i) =>
      `<div style="padding:3px 4px;border-radius:3px;color:${i === 1 ? '#3b82f6' : 'var(--color-text-tertiary)'};${i === 1 ? 'background:rgba(59,130,246,0.1)' : ''};margin-bottom:2px;font-weight:${i === 1 ? '500' : 'normal'}">${t}</div>`
    ).join('') +
    `</div>` +
    `<div style="flex:1;padding:6px 8px;font-size:8px;background:var(--color-bg)">` +
    `<div style="font-weight:600;color:var(--color-text-primary);font-size:9px;margin-bottom:4px">Users</div>` +
    `<div style="display:flex;padding:3px 0;border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-tertiary);font-weight:500"><span style="flex:1">Name</span><span style="width:40px">Role</span></div>` +
    `<div style="display:flex;padding:3px 0;border-bottom:1px solid var(--color-border-subtle);color:var(--color-text-primary)"><span style="flex:1">Alice</span><span style="width:40px;color:var(--color-text-tertiary)">Admin</span></div>` +
    `<div style="display:flex;padding:3px 0;color:var(--color-text-primary)"><span style="flex:1">Bob</span><span style="width:40px;color:var(--color-text-tertiary)">User</span></div></div></div>`
  ),

  'ticket-list': () => W(
    `<div style="width:260px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden;font-size:9px">` +
    [
      { id: '#1042', title: 'Login issue', status: 'Open', color: '#22c55e' },
      { id: '#1043', title: 'Payment error', status: 'In Progress', color: '#f59e0b' },
      { id: '#1044', title: 'UI bug on mobile', status: 'Closed', color: 'var(--color-text-tertiary)' },
    ].map((t, i) =>
      `<div style="display:flex;align-items:center;padding:6px 10px;${i > 0 ? 'border-top:1px solid var(--color-border-subtle)' : ''}">` +
      `<span style="font-family:var(--font-mono);color:var(--color-text-tertiary);width:40px">${t.id}</span>` +
      `<span style="flex:1;color:var(--color-text-primary)">${t.title}</span>` +
      `<span style="padding:2px 6px;background:${t.color}20;color:${t.color};border-radius:3px;font-size:8px;font-weight:500">${t.status}</span></div>`
    ).join('') +
    `</div>`
  ),

  'merge-conflict-ui': () => W(
    `<div style="width:280px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;font-size:9px;font-family:var(--font-mono)">` +
    `<div style="display:flex;border-bottom:1px solid var(--color-border)"><div style="flex:1;padding:4px 8px;background:rgba(239,68,68,0.05);font-size:8px;color:var(--color-text-tertiary);border-right:1px solid var(--color-border)">Ours (main)</div><div style="flex:1;padding:4px 8px;background:rgba(59,130,246,0.05);font-size:8px;color:var(--color-text-tertiary)">Theirs (feature)</div></div>` +
    `<div style="display:flex">` +
    `<div style="flex:1;padding:4px 8px;background:rgba(239,68,68,0.05);border-right:1px solid var(--color-border)"><div style="color:var(--color-text-primary)">color: red;</div></div>` +
    `<div style="flex:1;padding:4px 8px;background:rgba(59,130,246,0.05)"><div style="color:var(--color-text-primary)">color: blue;</div></div></div>` +
    `<div style="display:flex;gap:4px;padding:4px 8px;background:var(--color-surface);border-top:1px solid var(--color-border)">` +
    `<button style="padding:2px 6px;background:#ef4444;color:white;border:none;border-radius:3px;font-size:7px;cursor:default">Ours</button>` +
    `<button style="padding:2px 6px;background:#3b82f6;color:white;border:none;border-radius:3px;font-size:7px;cursor:default">Theirs</button>` +
    `<button style="padding:2px 6px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:3px;font-size:7px;cursor:default;color:var(--color-text-secondary)">Both</button></div></div>`
  ),

  'organization-switcher': () => W(
    `<div style="width:200px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;box-shadow:var(--shadow-lg);overflow:hidden;font-size:9px">` +
    [
      { name: 'Acme Corp', avatar: '#3b82f6', selected: true },
      { name: 'Widgets Inc', avatar: '#22c55e', selected: false },
      { name: 'Startup Co', avatar: '#f59e0b', selected: false },
    ].map(org =>
      `<div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:${org.selected ? 'rgba(59,130,246,0.05)' : 'transparent'};border-left:${org.selected ? '2px solid #3b82f6' : '2px solid transparent'}">` +
      `<div style="width:22px;height:22px;border-radius:6px;background:${org.avatar};display:flex;align-items:center;justify-content:center;color:white;font-size:8px;font-weight:600;flex-shrink:0">${org.name[0]}</div>` +
      `<span style="color:${org.selected ? '#3b82f6' : 'var(--color-text-primary)'};font-weight:${org.selected ? '500' : 'normal'}">${org.name}</span>` +
      `${org.selected ? '<span style="margin-left:auto;color:#3b82f6">' + CHK + '</span>' : ''}</div>`
    ).join('') +
    `</div>`
  ),

  'role-selector': () => W(
    `<div style="width:180px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;font-size:9px">` +
    `<div style="font-weight:600;font-size:10px;color:var(--color-text-primary);margin-bottom:6px">Assign Role</div>` +
    ['Admin', 'Editor', 'Viewer'].map((role, i) =>
      `<div style="display:flex;align-items:center;gap:6px;padding:3px 0">` +
      `<div style="width:14px;height:14px;border-radius:50%;border:2px solid ${i === 1 ? '#3b82f6' : 'var(--color-border)'};display:flex;align-items:center;justify-content:center">${i === 1 ? '<div style="width:8px;height:8px;border-radius:50%;background:#3b82f6"></div>' : ''}</div>` +
      `<span style="color:var(--color-text-primary)">${role}</span></div>`
    ).join('') +
    `</div>`
  ),

  'collaborative-cursor': () => W(
    `<div style="width:220px;height:70px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;position:relative;padding:8px">` +
    `<div style="width:80%;height:5px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:4px"></div>` +
    `<div style="width:60%;height:5px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:4px"></div>` +
    `<div style="position:absolute;top:18px;left:80px">` +
    `${svg(12, 16, '<path d="M1 1l4 14 2-5 5-2z" fill="#3b82f6" stroke="#3b82f6" stroke-width="0.5"/>')}` +
    `<span style="font-size:7px;color:white;background:#3b82f6;padding:1px 3px;border-radius:2px;position:relative;top:-2px;left:2px">Alice</span></div>` +
    `<div style="position:absolute;top:30px;left:130px">` +
    `${svg(12, 16, '<path d="M1 1l4 14 2-5 5-2z" fill="#22c55e" stroke="#22c55e" stroke-width="0.5"/>')}` +
    `<span style="font-size:7px;color:white;background:#22c55e;padding:1px 3px;border-radius:2px;position:relative;top:-2px;left:2px">Bob</span></div></div>`
  ),

  'sla-badge': () => W(
    `<div style="display:flex;gap:12px;align-items:center">` +
    `<span style="padding:4px 10px;background:rgba(245,158,11,0.1);color:#f59e0b;border:1px solid rgba(245,158,11,0.3);border-radius:14px;font-size:10px;font-weight:500;display:flex;align-items:center;gap:4px">${svg(12, 12, '<circle cx="6" cy="6" r="4.5" stroke="#f59e0b"/><polyline points="6 3 6 6 8 7.5" stroke="#f59e0b"/>')} SLA: 4h remaining</span>` +
    `<span style="padding:4px 10px;background:rgba(239,68,68,0.1);color:#ef4444;border:1px solid rgba(239,68,68,0.3);border-radius:14px;font-size:10px;font-weight:500;display:flex;align-items:center;gap:4px">${svg(12, 12, '<circle cx="6" cy="6" r="4.5" stroke="#ef4444"/><line x1="6" y1="3" x2="6" y2="7" stroke="#ef4444"/><circle cx="6" cy="9" r="0.5" fill="#ef4444" stroke="none"/>')} SLA Breached</span></div>`
  ),

  'compare-checkbox': () => W(
    `<div style="display:flex;gap:12px">` +
    [
      { name: 'Product A', price: '$299', checked: true },
      { name: 'Product B', price: '$349', checked: true },
      { name: 'Product C', price: '$199', checked: false },
    ].map(p =>
      `<div style="width:80px;padding:8px;background:var(--color-surface);border:1px solid ${p.checked ? '#3b82f6' : 'var(--color-border)'};border-radius:6px;text-align:center;font-size:9px">` +
      `<div style="font-weight:500;color:var(--color-text-primary);margin-bottom:2px">${p.name}</div>` +
      `<div style="color:var(--color-text-tertiary);margin-bottom:4px">${p.price}</div>` +
      `<label style="display:flex;align-items:center;justify-content:center;gap:3px;font-size:8px;color:var(--color-text-secondary)"><div style="width:12px;height:12px;border:1px solid ${p.checked ? '#3b82f6' : 'var(--color-border)'};border-radius:2px;background:${p.checked ? '#3b82f6' : 'var(--color-bg)'};display:flex;align-items:center;justify-content:center">${p.checked ? '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="white" stroke-width="1.5"><polyline points="1.5 4 3 5.5 6.5 2"/></svg>' : ''}</div>Compare</label></div>`
    ).join('') +
    `</div>`
  ),

  'rating-histogram': () => W(
    `<div style="width:180px;padding:10px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:9px">` +
    `<div style="font-weight:600;font-size:10px;color:var(--color-text-primary);margin-bottom:6px">Ratings</div>` +
    [
      { stars: 5, pct: 60 },
      { stars: 4, pct: 25 },
      { stars: 3, pct: 8 },
      { stars: 2, pct: 4 },
      { stars: 1, pct: 3 },
    ].map(r =>
      `<div style="display:flex;align-items:center;gap:4px;margin-bottom:2px">` +
      `<span style="width:8px;color:var(--color-text-tertiary);text-align:right">${r.stars}</span>` +
      `<span style="color:#f59e0b;font-size:8px">★</span>` +
      `<div style="flex:1;height:6px;background:var(--color-border-subtle);border-radius:3px;overflow:hidden"><div style="width:${r.pct}%;height:100%;background:#f59e0b;border-radius:3px"></div></div>` +
      `<span style="width:22px;color:var(--color-text-tertiary);font-size:8px;text-align:right">${r.pct}%</span></div>`
    ).join('') +
    `</div>`
  ),

  /* ═══════════════════ FILE/EDITOR ═══════════════════ */

  'file-picker': () => W(
    `<div style="width:240px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;box-shadow:var(--shadow-lg);overflow:hidden;font-size:9px">` +
    `<div style="padding:6px 10px;border-bottom:1px solid var(--color-border);font-weight:600;font-size:10px;color:var(--color-text-primary)">Open File</div>` +
    `<div style="padding:4px 6px;max-height:60px;overflow:hidden">` +
    [
      { name: 'report.pdf', icon: '📄' },
      { name: 'photo.png', icon: '🖼' },
      { name: 'data.csv', icon: '📊' },
    ].map((f, i) =>
      `<div style="display:flex;align-items:center;gap:6px;padding:3px 6px;border-radius:3px;${i === 1 ? 'background:rgba(59,130,246,0.1)' : ''}"><span>${f.icon}</span><span style="color:var(--color-text-primary)">${f.name}</span></div>`
    ).join('') +
    `</div>` +
    `<div style="padding:6px 10px;border-top:1px solid var(--color-border);display:flex;justify-content:flex-end;gap:4px">` +
    `<button style="padding:3px 10px;background:none;border:1px solid var(--color-border);border-radius:4px;font-size:9px;color:var(--color-text-secondary);cursor:default">Cancel</button>` +
    `<button style="padding:3px 10px;background:#3b82f6;border:none;border-radius:4px;font-size:9px;color:white;cursor:default">Open</button></div></div>`
  ),

  'file-browser': () => W(
    `<div style="width:260px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden;font-size:9px">` +
    `<div style="display:flex;padding:5px 10px;background:var(--color-surface);border-bottom:1px solid var(--color-border);font-weight:500;color:var(--color-text-secondary)"><span style="flex:1">Name</span><span style="width:50px">Size</span><span style="width:60px">Modified</span></div>` +
    [
      { name: '📁 Documents', size: '—', date: 'May 10' },
      { name: '📄 readme.md', size: '2.1 KB', date: 'May 12' },
      { name: '🖼 logo.png', size: '45 KB', date: 'May 14' },
      { name: '📊 data.json', size: '8.3 KB', date: 'May 16' },
    ].map((f, i) =>
      `<div style="display:flex;padding:4px 10px;${i > 0 ? 'border-top:1px solid var(--color-border-subtle)' : ''};color:var(--color-text-primary)"><span style="flex:1">${f.name}</span><span style="width:50px;color:var(--color-text-tertiary)">${f.size}</span><span style="width:60px;color:var(--color-text-tertiary)">${f.date}</span></div>`
    ).join('') +
    `</div>`
  ),

  'markdown-editor': () => W(
    `<div style="width:280px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden;display:flex;height:80px">` +
    `<div style="flex:1;padding:6px 8px;font-family:var(--font-mono);font-size:8px;color:var(--color-text-primary);background:var(--color-bg);border-right:1px solid var(--color-border);line-height:1.6"><div style="color:#8b5cf6"># Hello</div><div>This is **bold** text</div><div style="color:var(--color-text-tertiary)">- List item</div></div>` +
    `<div style="flex:1;padding:6px 8px;font-size:9px;color:var(--color-text-primary);background:var(--color-surface);line-height:1.6"><div style="font-size:12px;font-weight:700">Hello</div><div>This is <strong>bold</strong> text</div><div style="display:flex;align-items:center;gap:3px"><div style="width:3px;height:3px;border-radius:50%;background:var(--color-text-primary)"></div>List item</div></div></div>`
  ),

  'breadcrumb-path': () => W(
    `<div style="display:flex;align-items:center;gap:4px;font-size:10px;padding:6px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
    ['Home', 'Documents', 'Projects'].map((part, i, arr) =>
      `<span style="color:${i === arr.length - 1 ? 'var(--color-text-primary)' : '#3b82f6'};font-weight:${i === arr.length - 1 ? '500' : 'normal'}">${part}</span>` +
      (i < arr.length - 1 ? `<span style="color:var(--color-text-tertiary)">/</span>` : '')
    ).join('') +
    `<span style="color:var(--color-text-tertiary)">/</span>` +
    `<span style="color:var(--color-text-primary);font-weight:500">file.txt</span></div>`
  ),

  'upload-queue': () => W(
    `<div style="width:220px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;font-size:9px">` +
    `<div style="font-weight:600;font-size:10px;color:var(--color-text-primary);margin-bottom:6px">Uploading 3 files</div>` +
    [
      { name: 'image.png', pct: 100 },
      { name: 'video.mp4', pct: 65 },
      { name: 'doc.pdf', pct: 20 },
    ].map(f =>
      `<div style="margin-bottom:4px"><div style="display:flex;justify-content:space-between;color:var(--color-text-primary);margin-bottom:2px"><span>${f.name}</span><span style="color:var(--color-text-tertiary)">${f.pct}%</span></div><div style="height:4px;background:var(--color-border-subtle);border-radius:2px;overflow:hidden"><div style="width:${f.pct}%;height:100%;background:${f.pct === 100 ? '#22c55e' : '#3b82f6'};border-radius:2px"></div></div></div>`
    ).join('') +
    `</div>`
  ),

  'progress-queue': () => W(
    `<div style="width:220px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;font-size:9px">` +
    `<div style="font-weight:600;font-size:10px;color:var(--color-text-primary);margin-bottom:6px">Task Queue</div>` +
    [
      { name: 'Build', status: 'done', pct: 100 },
      { name: 'Test', status: 'running', pct: 45 },
      { name: 'Deploy', status: 'pending', pct: 0 },
    ].map(t =>
      `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px"><span style="width:40px;color:var(--color-text-primary)">${t.name}</span><div style="flex:1;height:4px;background:var(--color-border-subtle);border-radius:2px;overflow:hidden"><div style="width:${t.pct}%;height:100%;background:${t.status === 'done' ? '#22c55e' : t.status === 'running' ? '#3b82f6' : 'transparent'};border-radius:2px"></div></div><span style="font-size:8px;color:${t.status === 'done' ? '#22c55e' : t.status === 'running' ? '#3b82f6' : 'var(--color-text-tertiary)'}">${t.status === 'done' ? '✓' : t.status === 'running' ? '...' : '○'}</span></div>`
    ).join('') +
    `</div>`
  ),

  'alignment-guide': () => W(
    `<div style="width:200px;height:80px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:4px;position:relative">` +
    `<div style="position:absolute;top:10px;left:40px;width:50px;height:30px;background:rgba(59,130,246,0.15);border:1px solid #3b82f6;border-radius:3px"></div>` +
    `<div style="position:absolute;top:40px;left:90px;width:50px;height:30px;background:rgba(139,92,246,0.15);border:1px solid #8b5cf6;border-radius:3px"></div>` +
    `<div style="position:absolute;top:0;bottom:0;left:90px;border-left:1px dashed #ef4444"></div>` +
    `<div style="position:absolute;left:0;right:0;top:40px;border-top:1px dashed #ef4444"></div>` +
    `<div style="position:absolute;top:38px;right:6px;font-size:7px;color:#ef4444">snap guide</div></div>`
  ),

  'crop-handle': () => W(
    `<div style="width:140px;height:90px;background:linear-gradient(135deg,#dbeafe,#bfdbfe);border-radius:4px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.4)"></div>` +
    `<div style="position:absolute;top:15px;left:20px;width:100px;height:60px;border:2px solid white;background:transparent">` +
    `<div style="position:absolute;top:-4px;left:-4px;width:8px;height:8px;background:white;border-radius:1px"></div>` +
    `<div style="position:absolute;top:-4px;right:-4px;width:8px;height:8px;background:white;border-radius:1px"></div>` +
    `<div style="position:absolute;bottom:-4px;left:-4px;width:8px;height:8px;background:white;border-radius:1px"></div>` +
    `<div style="position:absolute;bottom:-4px;right:-4px;width:8px;height:8px;background:white;border-radius:1px"></div>` +
    `<div style="position:absolute;top:50%;left:-4px;transform:translateY(-50%);width:8px;height:8px;background:white;border-radius:1px"></div>` +
    `<div style="position:absolute;top:50%;right:-4px;transform:translateY(-50%);width:8px;height:8px;background:white;border-radius:1px"></div>` +
    `<div style="position:absolute;top:33%;left:0;right:0;border-top:1px solid rgba(255,255,255,0.4)"></div>` +
    `<div style="position:absolute;top:66%;left:0;right:0;border-top:1px solid rgba(255,255,255,0.4)"></div>` +
    `<div style="position:absolute;left:33%;top:0;bottom:0;border-left:1px solid rgba(255,255,255,0.4)"></div>` +
    `<div style="position:absolute;left:66%;top:0;bottom:0;border-left:1px solid rgba(255,255,255,0.4)"></div></div></div>`
  ),

  /* ═══════════════════ GAME/3D ═══════════════════ */

  'quick-time-event-ui': () => W(
    `<div style="text-align:center;position:relative">` +
    `${svg(80, 80, '<circle cx="40" cy="40" r="35" stroke="var(--color-border)" stroke-width="3" opacity="0.3"/><circle cx="40" cy="40" r="35" stroke="#ef4444" stroke-width="3" stroke-dasharray="170 50" transform="rotate(-90 40 40)"/><circle cx="40" cy="40" r="24" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5"/><text x="40" y="44" text-anchor="middle" fill="var(--color-text-primary)" font-size="16" font-weight="700" stroke="none">F</text>')}` +
    `<div style="font-size:8px;color:#ef4444;font-weight:500;margin-top:2px">Press F now!</div></div>`
  ),

  'aim-assist-indicator': () => W(
    `<div style="width:160px;height:90px;background:#1a1a2e;border-radius:6px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center">` +
    `<div style="position:absolute;top:30px;right:50px;width:16px;height:16px;background:#ef4444;border-radius:50%;opacity:0.6"></div>` +
    `${svg(40, 40, '<circle cx="20" cy="20" r="14" stroke="rgba(255,255,255,0.3)" stroke-width="1"/><circle cx="20" cy="20" r="6" stroke="rgba(255,255,255,0.5)" stroke-width="1"/><line x1="20" y1="2" x2="20" y2="10" stroke="rgba(255,255,255,0.6)" stroke-width="1"/><line x1="20" y1="30" x2="20" y2="38" stroke="rgba(255,255,255,0.6)" stroke-width="1"/><line x1="2" y1="20" x2="10" y2="20" stroke="rgba(255,255,255,0.6)" stroke-width="1"/><line x1="30" y1="20" x2="38" y2="20" stroke="rgba(255,255,255,0.6)" stroke-width="1"/><circle cx="20" cy="20" r="2" fill="#22c55e" stroke="none"/>')}` +
    `<div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);font-size:7px;color:rgba(255,255,255,0.5)">aim assist active</div></div>`
  ),

  'ar-overlay': () => W(
    `<div style="width:200px;height:90px;background:linear-gradient(135deg,#87ceeb,#98d8c8);border-radius:8px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;top:15px;left:30px;padding:3px 8px;background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.3);border-radius:4px;font-size:8px;color:white;backdrop-filter:blur(4px)">☕ Cafe — 50m</div>` +
    `<div style="position:absolute;top:40px;right:25px;padding:3px 8px;background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.3);border-radius:4px;font-size:8px;color:white">🏪 Store — 120m</div>` +
    `<div style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%);width:40px;height:40px;border:2px solid rgba(255,255,255,0.6);border-radius:50%"></div>` +
    `<div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);font-size:7px;color:white;text-shadow:0 1px 2px rgba(0,0,0,0.5)">AR Camera</div></div>`
  ),

  'gaze-cursor': () => W(
    `<div style="width:160px;height:90px;background:#1a1a2e;border-radius:8px;display:flex;align-items:center;justify-content:center;position:relative">` +
    `${svg(60, 60, '<circle cx="30" cy="30" r="24" stroke="rgba(255,255,255,0.15)" stroke-width="2"/><circle cx="30" cy="30" r="18" stroke="rgba(255,255,255,0.3)" stroke-width="2"/><circle cx="30" cy="30" r="10" stroke="rgba(255,255,255,0.5)" stroke-width="2"/><circle cx="30" cy="30" r="3" fill="white" stroke="none"/>')}` +
    `<div style="position:absolute;bottom:6px;left:50%;transform:translateX(-50%);font-size:7px;color:rgba(255,255,255,0.5)">gaze cursor (VR)</div></div>`
  ),

  /* ═══════════════════ LEGACY ═══════════════════ */

  'gate': () => W(
    `<div style="width:200px;padding:16px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;box-shadow:var(--shadow-lg);text-align:center">` +
    `<div style="color:var(--color-text-tertiary);margin-bottom:6px">${svg(24, 24, '<rect x="5" y="11" width="14" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/>')}</div>` +
    `<div style="font-size:11px;font-weight:600;color:var(--color-text-primary);margin-bottom:2px">Access Required</div>` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-bottom:8px">Sign in to continue</div>` +
    `<button style="padding:5px 20px;background:#3b82f6;color:white;border:none;border-radius:6px;font-size:9px;cursor:default;width:100%">Sign In</button></div>`
  ),

  'mdi': () => W(
    `<div style="width:240px;height:90px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;position:relative;overflow:hidden;padding:4px">` +
    `<div style="position:absolute;top:8px;left:8px;width:100px;height:55px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;box-shadow:var(--shadow-md);overflow:hidden"><div style="height:14px;background:var(--color-surface);border-bottom:1px solid var(--color-border);display:flex;align-items:center;padding:0 4px;font-size:7px;color:var(--color-text-tertiary)">Doc 1</div><div style="padding:4px;font-size:7px;color:var(--color-text-secondary)">Content A</div></div>` +
    `<div style="position:absolute;top:20px;left:50px;width:100px;height:55px;background:var(--color-surface);border:1px solid #3b82f6;border-radius:4px;box-shadow:var(--shadow-lg);overflow:hidden;z-index:1"><div style="height:14px;background:#3b82f6;display:flex;align-items:center;padding:0 4px;font-size:7px;color:white">Doc 2</div><div style="padding:4px;font-size:7px;color:var(--color-text-secondary)">Content B</div></div>` +
    `<div style="position:absolute;top:12px;left:100px;width:100px;height:55px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;box-shadow:var(--shadow-md);overflow:hidden"><div style="height:14px;background:var(--color-surface);border-bottom:1px solid var(--color-border);display:flex;align-items:center;padding:0 4px;font-size:7px;color:var(--color-text-tertiary)">Doc 3</div><div style="padding:4px;font-size:7px;color:var(--color-text-secondary)">Content C</div></div></div>`
  ),

  'sdi': () => W(
    `<div style="width:200px;height:70px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden;box-shadow:var(--shadow-md)">` +
    `<div style="height:18px;background:var(--color-surface);border-bottom:1px solid var(--color-border);display:flex;align-items:center;justify-content:space-between;padding:0 8px"><span style="font-size:8px;font-weight:500;color:var(--color-text-primary)">Document.txt</span><span style="color:var(--color-text-tertiary)">${CLOSE}</span></div>` +
    `<div style="padding:6px 8px"><div style="height:4px;background:var(--color-border-subtle);border-radius:2px;margin-bottom:3px;width:80%"></div><div style="height:4px;background:var(--color-border-subtle);border-radius:2px;width:60%"></div></div></div>`
  ),

  'palette-window': () => W(
    `<div style="width:110px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;box-shadow:var(--shadow-lg);overflow:hidden">` +
    `<div style="height:16px;background:var(--color-surface);border-bottom:1px solid var(--color-border);display:flex;align-items:center;padding:0 6px;font-size:7px;color:var(--color-text-tertiary)">Tools</div>` +
    `<div style="padding:6px;display:grid;grid-template-columns:repeat(4,1fr);gap:3px">` +
    ['✏️', '🖌', '🔲', '⭕', '✂️', '🪣', '📐', '🔍'].map(t =>
      `<div style="width:20px;height:20px;display:flex;align-items:center;justify-content:center;border:1px solid var(--color-border-subtle);border-radius:3px;font-size:10px;cursor:default">${t}</div>`
    ).join('') +
    `</div></div>`
  ),

  'floating-palette': () => W(
    `<div style="width:40px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;box-shadow:var(--shadow-lg);padding:6px;display:flex;flex-direction:column;gap:4px;align-items:center">` +
    `<div style="width:4px;height:16px;background:var(--color-border);border-radius:2px;margin-bottom:2px"></div>` +
    [
      ico('<path d="M2 14l4-4 8-8"/>'),
      ico('<rect x="3" y="3" width="10" height="10" rx="1"/>'),
      ico('<circle cx="8" cy="8" r="5"/>'),
      ico('<line x1="3" y1="8" x2="13" y2="8"/>'),
    ].map((tool, i) =>
      `<div style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:4px;${i === 0 ? 'background:rgba(59,130,246,0.1);color:#3b82f6' : 'color:var(--color-text-tertiary)'};cursor:default">${tool}</div>`
    ).join('') +
    `</div>`
  ),

  'spinner-button': () => W(
    `<div style="display:flex;align-items:center">` +
    `<div style="width:60px;padding:5px 8px;border:1px solid var(--color-border);border-radius:4px 0 0 4px;font-size:11px;color:var(--color-text-primary);font-family:var(--font-mono);text-align:center;background:var(--color-surface)">42</div>` +
    `<div style="display:flex;flex-direction:column;border:1px solid var(--color-border);border-left:none;border-radius:0 4px 4px 0;overflow:hidden">` +
    `<button style="width:20px;height:14px;background:var(--color-surface);border:none;border-bottom:1px solid var(--color-border-subtle);cursor:default;display:flex;align-items:center;justify-content:center;color:var(--color-text-tertiary);font-size:8px">▲</button>` +
    `<button style="width:20px;height:14px;background:var(--color-surface);border:none;cursor:default;display:flex;align-items:center;justify-content:center;color:var(--color-text-tertiary);font-size:8px">▼</button></div></div>`
  ),

  'bezel': () => W(
    `<div style="width:160px;height:60px;background:var(--color-surface);border:3px solid;border-color:var(--color-border-subtle) var(--color-border) var(--color-border) var(--color-border-subtle);border-radius:4px;box-shadow:inset 1px 1px 0 rgba(255,255,255,0.3),inset -1px -1px 0 rgba(0,0,0,0.1),2px 2px 4px rgba(0,0,0,0.15);display:flex;align-items:center;justify-content:center;position:relative">` +
    `<span style="font-size:9px;color:var(--color-text-secondary)">Beveled bezel frame</span></div>`
  ),

  'wait-cursor': () => W(
    `<div style="display:flex;align-items:center;gap:16px">` +
    `<div style="text-align:center">` +
    `${svg(32, 32, '<path d="M10 4h12M10 28h12M10 4l-2 10 8 2-8 2 2 10M22 4l2 10-8 2 8 2-2 10" stroke="var(--color-text-primary)" stroke-width="1.5" fill="none"/><path d="M10 14l6 2-6 2" fill="var(--color-text-tertiary)" stroke="none" opacity="0.3"/>')}` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-top:2px">Hourglass</div></div>` +
    `<div style="text-align:center">` +
    `${svg(32, 32, '<circle cx="16" cy="16" r="10" stroke="var(--color-border)" stroke-width="2"/><path d="M16 6a10 10 0 0 1 10 10" stroke="#3b82f6" stroke-width="2"/><circle cx="16" cy="16" r="2" fill="var(--color-text-tertiary)" stroke="none"/>')}` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);margin-top:2px">Spinner</div></div></div>`
  ),
})
