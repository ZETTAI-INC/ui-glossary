/**
 * Extra demos (batch 3) — mobile/touch, accessibility, typography,
 * color/visual, animation/motion, chart/visualization, ec/saas/business,
 * file/editor/tools, game/3d/special, legacy/minor, implementation/frontend.
 * Exports a frozen object `extras3` mapping term IDs to demo builder functions.
 */

/* ── Layout helpers ───────────────────────────────────────── */
const W = (inner) => `<div class="demo-wrapper">${inner}</div>`
const WS = (s, inner) => `<div class="demo-wrapper" style="${s}">${inner}</div>`
const svg = (w, h, inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
const ico = (p) => svg(16, 16, p)

/* ── Reusable icons ───────────────────────────────────────── */
const CHK = ico('<polyline points="4 8 7 11 12 5"/>')
const CLOSE = ico('<line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>')
const CHEV = ico('<polyline points="4 6 8 10 12 6"/>')
const CHEVR = ico('<polyline points="6 4 10 8 6 12"/>')
const EYE = ico('<path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/>')
const BELL = ico('<path d="M8 14c.6 0 1-.4 1-1H7c0 .6.4 1 1 1z"/><path d="M12 10V7a4 4 0 1 0-8 0v3l-1 2h10l-1-2z"/>')
const ARRL = ico('<line x1="12" y1="8" x2="4" y2="8"/><polyline points="7 4 3 8 7 12"/>')

/* ═══════════════════════════════════════════════════════════ */
export const extras3 = Object.freeze({

  /* ═══════════════════ MOBILE / TOUCH ═══════════════════ */

  'swipe-action': () => W(
    `<div style="width:280px;height:48px;position:relative;border-radius:8px;overflow:hidden">` +
    `<div style="position:absolute;right:0;top:0;bottom:0;width:70px;background:#ef4444;display:flex;align-items:center;justify-content:center;color:white;font-size:11px;font-weight:500">Delete</div>` +
    `<div style="position:absolute;left:-20px;top:0;bottom:0;right:70px;background:var(--color-surface);border:1px solid var(--color-border);display:flex;align-items:center;padding:0 12px;gap:8px">` +
    `<div style="width:28px;height:28px;border-radius:50%;background:#3b82f6;flex-shrink:0"></div>` +
    `<div><div style="font-size:10px;font-weight:500;color:var(--color-text-primary)">Newsletter Update</div>` +
    `<div style="font-size:9px;color:var(--color-text-tertiary)">Hey, check out the new...</div></div></div></div>`
  ),

  'swipe-to-dismiss': () => W(
    `<div style="width:200px;height:60px;position:relative">` +
    `<div style="position:absolute;inset:0;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:10px;font-size:10px;color:var(--color-text-secondary);transform:rotate(5deg) translateX(40px);opacity:0.4;box-shadow:var(--shadow-md)">` +
    `<div style="font-weight:500;color:var(--color-text-primary)">Notification</div>Swipe to dismiss</div></div>`
  ),

  'navigation-bar': () => W(
    `<div style="width:280px;display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px">` +
    `<span style="color:#3b82f6;font-size:11px;display:flex;align-items:center;gap:2px">${ARRL} Back</span>` +
    `<span style="font-size:12px;font-weight:600;color:var(--color-text-primary)">Settings</span>` +
    `<span style="font-size:11px;color:#3b82f6;font-weight:500">Done</span></div>`
  ),

  'status-bar': () => W(
    `<div style="width:280px;display:flex;align-items:center;justify-content:space-between;padding:4px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;font-weight:500">` +
    `<span style="color:var(--color-text-primary)">9:41</span>` +
    `<div style="display:flex;align-items:center;gap:6px;color:var(--color-text-secondary)">` +
    `${svg(14, 10, '<path d="M1 8l2-2m2-2l2-2" stroke-width="2"/><path d="M5 8l2-2m2-2" stroke-width="2"/><path d="M9 8l2-2" stroke-width="2"/><path d="M13 8" stroke-width="2"/>')}` +
    `${svg(18, 10, '<rect x="1" y="1" width="14" height="8" rx="1.5"/><rect x="16" y="3" width="1.5" height="4" rx="0.5" fill="currentColor"/><rect x="2.5" y="2.5" width="8" height="5" rx="0.5" fill="currentColor" stroke="none"/>')}</div></div>`
  ),

  'home-indicator': () => W(
    `<div style="width:200px;height:60px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:12px;position:relative;display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--color-text-tertiary)">` +
    `Screen Content` +
    `<div style="position:absolute;bottom:6px;left:50%;transform:translateX(-50%);width:100px;height:4px;background:var(--color-text-primary);border-radius:2px;opacity:0.3"></div></div>`
  ),

  'action-sheet': () => W(
    `<div style="width:180px;background:var(--color-surface);border-radius:10px;box-shadow:var(--shadow-lg);overflow:hidden;font-size:11px">` +
    ['Share', 'Copy Link', 'Delete'].map((t, i) =>
      `<div style="padding:8px 14px;color:${i === 2 ? '#ef4444' : 'var(--color-text-primary)'};border-bottom:${i < 2 ? '1px solid var(--color-border-subtle)' : 'none'};font-weight:${i === 2 ? '500' : 'normal'};text-align:center">${t}</div>`
    ).join('') +
    `<div style="margin-top:4px;border-top:4px solid var(--color-border-subtle)"><div style="padding:8px 14px;color:var(--color-text-secondary);text-align:center;font-weight:500">Cancel</div></div></div>`
  ),

  'edge-swipe': () => W(
    `<div style="width:200px;height:70px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;left:0;top:50%;transform:translateY(-50%);display:flex;align-items:center;gap:2px;color:#3b82f6">` +
    `<div style="width:3px;height:40px;background:#3b82f6;border-radius:0 2px 2px 0;opacity:0.6"></div>` +
    `${svg(24, 24, '<polyline points="8 6 16 12 8 18" stroke="#3b82f6" stroke-width="2"/>')}</div>` +
    `<div style="position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:9px;color:var(--color-text-tertiary)">Swipe from edge</div></div>`
  ),

  'double-tap': () => W(
    `<div style="position:relative;width:80px;height:80px;display:flex;align-items:center;justify-content:center">` +
    `<div style="position:absolute;width:60px;height:60px;border:2px solid rgba(59,130,246,0.2);border-radius:50%"></div>` +
    `<div style="position:absolute;width:36px;height:36px;border:2px solid rgba(59,130,246,0.4);border-radius:50%"></div>` +
    `<div style="width:12px;height:12px;background:#3b82f6;border-radius:50%"></div>` +
    `<div style="position:absolute;bottom:2px;font-size:8px;color:var(--color-text-tertiary)">x2</div></div>`
  ),

  'long-press': () => W(
    `<div style="position:relative;width:80px;height:80px;display:flex;align-items:center;justify-content:center">` +
    `<div style="position:absolute;width:50px;height:50px;border:2.5px solid var(--color-border);border-radius:50%;border-top-color:#3b82f6;border-right-color:#3b82f6;border-bottom-color:#3b82f6"></div>` +
    `<div style="width:16px;height:16px;background:#3b82f6;border-radius:50%;opacity:0.6"></div>` +
    `<div style="position:absolute;bottom:2px;font-size:8px;color:var(--color-text-tertiary)">hold</div></div>`
  ),

  'pinch-zoom': () => W(
    `<div style="position:relative;width:100px;height:80px;display:flex;align-items:center;justify-content:center">` +
    `<div style="width:10px;height:10px;background:#3b82f6;border-radius:50%;position:absolute;top:18px;left:28px"></div>` +
    `${svg(16, 16, '<polyline points="10 6 14 2" stroke="#3b82f6"/><polyline points="12 6 14 6 14 4" stroke="#3b82f6"/>')}` +
    `<div style="position:absolute;top:18px;left:28px;width:44px;height:44px;border:1.5px dashed rgba(59,130,246,0.3);border-radius:4px"></div>` +
    `<div style="width:10px;height:10px;background:#3b82f6;border-radius:50%;position:absolute;bottom:18px;right:28px"></div>` +
    `<div style="position:absolute;bottom:0;font-size:8px;color:var(--color-text-tertiary)">pinch</div></div>`
  ),

  'rotate-gesture': () => W(
    `<div style="position:relative;width:80px;height:80px;display:flex;align-items:center;justify-content:center">` +
    `${svg(60, 60, '<circle cx="30" cy="30" r="22" stroke="var(--color-border)" stroke-dasharray="4 3"/><path d="M30 8 Q52 8 52 30" stroke="#3b82f6" fill="none" stroke-width="2"/><polyline points="48 24 52 30 46 30" stroke="#3b82f6" fill="none" stroke-width="2"/>')}` +
    `<div style="width:8px;height:8px;background:#3b82f6;border-radius:50%;position:absolute;top:10px;left:50%;transform:translateX(-50%)"></div>` +
    `<div style="width:8px;height:8px;background:#3b82f6;border-radius:50%;position:absolute;right:10px;top:50%;transform:translateY(-50%)"></div></div>`
  ),

  'flick': () => W(
    `<div style="position:relative;width:100px;height:60px;display:flex;align-items:center;justify-content:flex-start;padding-left:12px">` +
    `<div style="width:14px;height:14px;background:#3b82f6;border-radius:50%"></div>` +
    `${svg(60, 20, '<line x1="0" y1="10" x2="48" y2="10" stroke="#3b82f6" stroke-width="2"/><polyline points="40 4 50 10 40 16" stroke="#3b82f6" stroke-width="2" fill="none"/>')}` +
    `<div style="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);font-size:8px;color:var(--color-text-tertiary)">flick</div></div>`
  ),

  /* ═══════════════════ ACCESSIBILITY ═══════════════════ */

  'landmark': () => W(
    `<div style="width:200px;height:90px;border:1.5px solid var(--color-border);border-radius:6px;overflow:hidden;display:flex;flex-direction:column">` +
    `<div style="padding:3px 6px;border-bottom:1px dashed rgba(59,130,246,0.3);font-size:8px;color:#3b82f6;background:rgba(59,130,246,0.04)">header</div>` +
    `<div style="display:flex;flex:1">` +
    `<div style="width:40px;padding:3px 4px;border-right:1px dashed rgba(59,130,246,0.3);font-size:8px;color:#3b82f6;background:rgba(59,130,246,0.04)">nav</div>` +
    `<div style="flex:1;padding:3px 6px;font-size:8px;color:#3b82f6;background:rgba(59,130,246,0.02)">main</div></div>` +
    `<div style="padding:3px 6px;border-top:1px dashed rgba(59,130,246,0.3);font-size:8px;color:#3b82f6;background:rgba(59,130,246,0.04)">footer</div></div>`
  ),

  'live-region': () => W(
    `<div style="display:flex;flex-direction:column;gap:6px;width:220px">` +
    `<div style="padding:8px 10px;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.3);border-radius:6px;font-size:10px;color:#16a34a;display:flex;align-items:center;gap:6px">` +
    `<span style="font-size:14px">●</span> New message arrived` +
    `</div>` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);font-family:var(--font-mono)">aria-live="polite"</div></div>`
  ),

  'tab-order': () => W(
    `<div style="display:flex;gap:12px;align-items:center">` +
    [1, 2, 3].map(n =>
      `<div style="position:relative;padding:6px 16px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;color:var(--color-text-secondary)">` +
      `Element` +
      `<span style="position:absolute;top:-6px;right:-6px;width:16px;height:16px;background:#3b82f6;color:white;border-radius:50%;font-size:8px;font-weight:700;display:flex;align-items:center;justify-content:center">${n}</span></div>`
    ).join('') + `</div>`
  ),

  'visible-focus': () => W(
    `<div style="display:flex;gap:16px;align-items:center">` +
    `<button class="demo-btn demo-btn-primary" style="font-size:10px;padding:6px 14px;box-shadow:0 0 0 3px rgba(59,130,246,0.4);outline:2px solid #3b82f6;outline-offset:2px">Focused</button>` +
    `<button class="demo-btn demo-btn-secondary" style="font-size:10px;padding:6px 14px">Normal</button></div>`
  ),

  'form-association': () => W(
    `<div style="display:flex;flex-direction:column;gap:2px;width:160px;position:relative">` +
    `<label style="font-size:10px;font-weight:600;color:var(--color-text-primary)">Email</label>` +
    `<div style="position:absolute;left:-12px;top:4px;width:8px;height:24px;border-left:1.5px solid #3b82f6;border-bottom:1.5px solid #3b82f6;border-radius:0 0 0 4px"></div>` +
    `<input class="demo-input" style="width:100%;font-size:10px" placeholder="you@example.com" readonly />` +
    `<div style="font-size:8px;color:var(--color-text-tertiary);font-family:var(--font-mono)">for="email" / id="email"</div></div>`
  ),

  'color-contrast': () => W(
    `<div style="display:flex;gap:12px;align-items:center">` +
    `<div style="display:flex;flex-direction:column;gap:2px;align-items:center">` +
    `<div style="padding:6px 12px;background:#1e293b;border-radius:4px;font-size:11px;color:white;font-weight:500">Good</div>` +
    `<span style="font-size:8px;color:#22c55e">AAA ✓</span></div>` +
    `<div style="display:flex;flex-direction:column;gap:2px;align-items:center">` +
    `<div style="padding:6px 12px;background:#e2e8f0;border-radius:4px;font-size:11px;color:#cbd5e1;font-weight:500">Poor</div>` +
    `<span style="font-size:8px;color:#ef4444">Fail ✕</span></div></div>`
  ),

  'touch-target-size': () => W(
    `<div style="display:flex;gap:20px;align-items:center">` +
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">` +
    `<div style="width:20px;height:20px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--color-text-tertiary)">×</div>` +
    `<span style="font-size:8px;color:#ef4444">20px</span></div>` +
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">` +
    `<div style="width:44px;height:44px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;color:var(--color-text-primary)">×</div>` +
    `<span style="font-size:8px;color:#22c55e">44px ✓</span></div></div>`
  ),

  /* ═══════════════════ TYPOGRAPHY ═══════════════════ */

  'typography': () => W(
    `<div style="display:flex;flex-direction:column;gap:3px;width:200px">` +
    `<div style="font-size:18px;font-weight:700;color:var(--color-text-primary);line-height:1.2">Heading</div>` +
    `<div style="font-size:13px;font-weight:500;color:var(--color-text-secondary)">Subheading text</div>` +
    `<div style="font-size:11px;color:var(--color-text-secondary)">Body text in regular weight</div>` +
    `<div style="font-size:9px;color:var(--color-text-tertiary)">Caption — small muted text</div></div>`
  ),

  'typeface': () => W(
    `<div style="display:flex;gap:20px;align-items:baseline">` +
    `<div style="display:flex;flex-direction:column;gap:2px;align-items:center">` +
    `<span style="font-family:Georgia,serif;font-size:16px;color:var(--color-text-primary)">Serif</span>` +
    `<span style="font-size:8px;color:var(--color-text-tertiary)">Georgia</span></div>` +
    `<div style="display:flex;flex-direction:column;gap:2px;align-items:center">` +
    `<span style="font-family:var(--font-sans);font-size:16px;color:var(--color-text-primary)">Sans-serif</span>` +
    `<span style="font-size:8px;color:var(--color-text-tertiary)">System</span></div></div>`
  ),

  'font': () => W(
    `<div style="display:flex;flex-direction:column;gap:4px;width:200px">` +
    `<span style="font-size:12px;color:var(--color-text-primary);font-weight:300">Light weight</span>` +
    `<span style="font-size:12px;color:var(--color-text-primary);font-weight:400;font-style:italic">Regular italic</span>` +
    `<span style="font-size:12px;color:var(--color-text-primary);font-weight:700">Bold weight</span></div>`
  ),

  'title': () => W(
    `<div style="font-size:22px;font-weight:700;color:var(--color-text-primary);letter-spacing:-0.5px">Page Title</div>`
  ),

  'subtitle': () => W(
    `<div style="display:flex;flex-direction:column;gap:2px">` +
    `<div style="font-size:16px;font-weight:700;color:var(--color-text-primary)">Main Title</div>` +
    `<div style="font-size:12px;color:var(--color-text-secondary)">Supporting subtitle text</div></div>`
  ),

  'overline': () => W(
    `<div style="display:flex;flex-direction:column;gap:2px">` +
    `<div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--color-text-tertiary)">CATEGORY</div>` +
    `<div style="font-size:14px;font-weight:600;color:var(--color-text-primary)">Article Title</div></div>`
  ),

  'eyebrow': () => W(
    `<div style="display:flex;flex-direction:column;gap:2px">` +
    `<div style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#3b82f6">NEW FEATURE</div>` +
    `<div style="font-size:14px;font-weight:600;color:var(--color-text-primary)">Introducing Dark Mode</div></div>`
  ),

  'caption': () => WS('flex-direction:column;gap:3px',
    `<div style="width:120px;height:40px;background:linear-gradient(135deg,#4facfe,#43e97b);border-radius:6px"></div>` +
    `<span style="font-size:9px;color:var(--color-text-tertiary)">Fig 1. Landscape view from summit</span>`
  ),

  'label-text': () => W(
    `<div style="display:flex;flex-direction:column;gap:3px;width:160px">` +
    `<label style="font-size:10px;font-weight:600;color:var(--color-text-primary)">Username</label>` +
    `<input class="demo-input" style="width:100%;font-size:10px" placeholder="Enter username" readonly /></div>`
  ),

  'text-wrap': () => W(
    `<div style="width:120px;padding:8px;border:1px solid var(--color-border);border-radius:6px;font-size:10px;color:var(--color-text-secondary);word-wrap:break-word">` +
    `This text wraps naturally when it reaches the container boundary.</div>`
  ),

  'no-wrap': () => W(
    `<div style="width:120px;padding:8px;border:1px solid var(--color-border);border-radius:6px;font-size:10px;color:var(--color-text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">` +
    `This text does not wrap and overflows the container</div>`
  ),

  'kerning': () => W(
    `<div style="display:flex;gap:24px;align-items:center">` +
    `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">` +
    `<span style="font-size:24px;font-weight:700;color:var(--color-text-primary);letter-spacing:-2px">AV</span>` +
    `<span style="font-size:8px;color:var(--color-text-tertiary)">tight</span></div>` +
    `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">` +
    `<span style="font-size:24px;font-weight:700;color:var(--color-text-primary);letter-spacing:6px">A V</span>` +
    `<span style="font-size:8px;color:var(--color-text-tertiary)">loose</span></div></div>`
  ),

  'tracking': () => W(
    `<div style="display:flex;flex-direction:column;gap:6px;width:200px">` +
    `<div><span style="font-size:12px;color:var(--color-text-primary);letter-spacing:-0.5px">TRACKING</span><span style="font-size:8px;color:var(--color-text-tertiary);margin-left:8px">-0.5px</span></div>` +
    `<div><span style="font-size:12px;color:var(--color-text-primary);letter-spacing:0px">TRACKING</span><span style="font-size:8px;color:var(--color-text-tertiary);margin-left:8px">0px</span></div>` +
    `<div><span style="font-size:12px;color:var(--color-text-primary);letter-spacing:4px">TRACKING</span><span style="font-size:8px;color:var(--color-text-tertiary);margin-left:8px">4px</span></div></div>`
  ),

  'leading': () => W(
    `<div style="display:flex;gap:16px;align-items:flex-start">` +
    `<div style="width:90px"><div style="font-size:8px;color:var(--color-text-tertiary);margin-bottom:2px">Tight (1.0)</div><div style="font-size:9px;color:var(--color-text-secondary);line-height:1.0">The quick brown fox jumps over lazy dog.</div></div>` +
    `<div style="width:90px"><div style="font-size:8px;color:var(--color-text-tertiary);margin-bottom:2px">Loose (1.8)</div><div style="font-size:9px;color:var(--color-text-secondary);line-height:1.8">The quick brown fox jumps over lazy dog.</div></div></div>`
  ),

  'baseline': () => W(
    `<div style="position:relative;display:inline-block;padding-bottom:6px">` +
    `<span style="font-size:20px;font-weight:700;color:var(--color-text-primary)">Hg</span>` +
    `<span style="font-size:12px;color:var(--color-text-secondary);margin-left:6px">baseline</span>` +
    `<div style="position:absolute;bottom:10px;left:0;right:0;border-bottom:1.5px solid #ef4444;opacity:0.5"></div>` +
    `<div style="position:absolute;bottom:8px;right:0;font-size:7px;color:#ef4444">baseline</div></div>`
  ),

  'readability': () => W(
    `<div style="width:220px;font-size:11px;line-height:1.6;color:var(--color-text-secondary)">` +
    `<p style="margin:0">Good typography improves readability. Use appropriate line-height, measure, and contrast for comfortable reading.</p></div>`
  ),

  /* ═══════════════════ COLOR / VISUAL ═══════════════════ */

  'primary-color': () => W(
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">` +
    `<div style="width:60px;height:40px;background:#3b82f6;border-radius:8px;box-shadow:0 2px 8px rgba(59,130,246,0.3)"></div>` +
    `<span style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Primary</span>` +
    `<span style="font-size:8px;color:var(--color-text-tertiary);font-family:var(--font-mono)">#3b82f6</span></div>`
  ),

  'secondary-color': () => W(
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">` +
    `<div style="width:60px;height:40px;background:#8b5cf6;border-radius:8px;box-shadow:0 2px 8px rgba(139,92,246,0.3)"></div>` +
    `<span style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Secondary</span>` +
    `<span style="font-size:8px;color:var(--color-text-tertiary);font-family:var(--font-mono)">#8b5cf6</span></div>`
  ),

  'accent-color': () => W(
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">` +
    `<div style="width:60px;height:40px;background:#f97316;border-radius:8px;box-shadow:0 2px 8px rgba(249,115,22,0.3)"></div>` +
    `<span style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Accent</span>` +
    `<span style="font-size:8px;color:var(--color-text-tertiary);font-family:var(--font-mono)">#f97316</span></div>`
  ),

  'success-color': () => W(
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">` +
    `<div style="width:60px;height:40px;background:#22c55e;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white">${CHK}</div>` +
    `<span style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Success</span></div>`
  ),

  'error-color': () => W(
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">` +
    `<div style="width:60px;height:40px;background:#ef4444;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white">${CLOSE}</div>` +
    `<span style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Error</span></div>`
  ),

  'warning-color': () => W(
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">` +
    `<div style="width:60px;height:40px;background:#f59e0b;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:18px;font-weight:700">!</div>` +
    `<span style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Warning</span></div>`
  ),

  'info-color': () => W(
    `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">` +
    `<div style="width:60px;height:40px;background:#3b82f6;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:16px;font-weight:700;font-style:italic;font-family:Georgia,serif">i</div>` +
    `<span style="font-size:9px;font-weight:600;color:var(--color-text-primary)">Info</span></div>`
  ),

  'neutral-color': () => W(
    `<div style="display:flex;gap:3px;align-items:flex-end">` +
    ['#f8fafc', '#e2e8f0', '#94a3b8', '#64748b', '#334155', '#0f172a'].map((c, i) =>
      `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">` +
      `<div style="width:28px;height:28px;background:${c};border-radius:4px;border:1px solid var(--color-border-subtle)"></div>` +
      `<span style="font-size:6px;color:var(--color-text-tertiary)">${(i + 1) * 100}</span></div>`
    ).join('') + `</div>`
  ),

  'background-color': () => W(
    `<div style="display:flex;gap:8px;align-items:center">` +
    `<div style="width:70px;height:50px;background:#ffffff;border:1px solid var(--color-border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:9px;color:#1e293b">Light</div>` +
    `<div style="width:70px;height:50px;background:#0f172a;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:9px;color:#e2e8f0">Dark</div></div>`
  ),

  'surface': () => W(
    `<div style="position:relative;width:200px;height:80px;background:var(--color-bg);border-radius:8px;display:flex;align-items:center;justify-content:center">` +
    `<div style="width:160px;height:60px;background:var(--color-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.08),0 4px 12px rgba(0,0,0,0.06);display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--color-text-secondary)">Elevated Surface</div></div>`
  ),

  'drop-shadow': () => W(
    `<div style="width:120px;height:50px;background:var(--color-surface);border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,0.15);display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--color-text-secondary)">Drop Shadow</div>`
  ),

  'inner-shadow': () => W(
    `<div style="width:120px;height:50px;background:var(--color-surface);border-radius:8px;box-shadow:inset 0 2px 8px rgba(0,0,0,0.12);display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--color-text-secondary)">Inset Shadow</div>`
  ),

  'stroke': () => W(
    `<div style="display:flex;gap:12px;align-items:center">` +
    `${svg(50, 30, '<rect x="2" y="2" width="46" height="26" rx="4" stroke="var(--color-text-secondary)" stroke-width="2"/>')}` +
    `${svg(50, 30, '<rect x="2" y="2" width="46" height="26" rx="4" stroke="var(--color-text-secondary)" stroke-width="2" stroke-dasharray="6 3"/>')}` +
    `${svg(50, 30, '<rect x="2" y="2" width="46" height="26" rx="4" stroke="var(--color-text-secondary)" stroke-width="2" stroke-dasharray="2 3"/>')}</div>`
  ),

  'backdrop-blur': () => W(
    `<div style="width:180px;height:60px;background:linear-gradient(135deg,#3b82f6,#ec4899,#f59e0b);border-radius:8px;position:relative;display:flex;align-items:center;justify-content:center">` +
    `<div style="padding:8px 16px;background:rgba(255,255,255,0.2);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-radius:6px;border:1px solid rgba(255,255,255,0.3);font-size:10px;color:white;font-weight:500">Frosted Glass</div></div>`
  ),

  'transparency': () => W(
    `<div style="position:relative;width:120px;height:60px">` +
    `<div style="position:absolute;left:0;top:0;width:50px;height:50px;background:rgba(59,130,246,0.6);border-radius:50%"></div>` +
    `<div style="position:absolute;left:25px;top:5px;width:50px;height:50px;background:rgba(239,68,68,0.5);border-radius:50%"></div>` +
    `<div style="position:absolute;left:50px;top:0;width:50px;height:50px;background:rgba(34,197,94,0.5);border-radius:50%"></div></div>`
  ),

  'overlay-color': () => W(
    `<div style="width:140px;height:60px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;inset:0;background:rgba(59,130,246,0.5);display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:500">Color Overlay</div></div>`
  ),

  'scrim-color': () => W(
    `<div style="width:180px;height:60px;background:linear-gradient(135deg,#4facfe,#43e97b);border-radius:8px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center">` +
    `<div style="font-size:10px;color:white;font-weight:500">Scrim Layer</div></div></div>`
  ),

  'light-mode': () => W(
    `<div style="width:140px;padding:10px;background:#ffffff;border:1px solid #e2e8f0;border-radius:8px">` +
    `<div style="font-size:11px;font-weight:600;color:#1e293b;margin-bottom:4px">Light Mode</div>` +
    `<div style="font-size:9px;color:#64748b">Clean and bright interface for daytime use.</div></div>`
  ),

  /* ═══════════════════ ANIMATION / MOTION ═══════════════════ */

  'ease-in': () => W(
    `<div style="width:200px;height:30px;position:relative;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);width:14px;height:14px;background:#3b82f6;border-radius:50%;animation:ease-in-demo 2s ease-in infinite"></div>` +
    `<style>@keyframes ease-in-demo{0%{left:8px}100%{left:calc(100% - 22px)}}</style>` +
    `<div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:8px;color:var(--color-text-tertiary)">ease-in</div></div>`
  ),

  'ease-out': () => W(
    `<div style="width:200px;height:30px;position:relative;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);width:14px;height:14px;background:#22c55e;border-radius:50%;animation:ease-out-demo 2s ease-out infinite"></div>` +
    `<style>@keyframes ease-out-demo{0%{left:8px}100%{left:calc(100% - 22px)}}</style>` +
    `<div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:8px;color:var(--color-text-tertiary)">ease-out</div></div>`
  ),

  'ease-in-out': () => W(
    `<div style="width:200px;height:30px;position:relative;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);width:14px;height:14px;background:#f59e0b;border-radius:50%;animation:ease-inout-demo 2s ease-in-out infinite alternate"></div>` +
    `<style>@keyframes ease-inout-demo{0%{left:8px}100%{left:calc(100% - 22px)}}</style>` +
    `<div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:8px;color:var(--color-text-tertiary)">ease-in-out</div></div>`
  ),

  'slide': () => W(
    `<div style="width:180px;height:40px;position:relative;overflow:hidden;border:1px solid var(--color-border);border-radius:6px">` +
    `<div style="position:absolute;top:50%;transform:translateY(-50%);padding:4px 12px;background:#3b82f6;color:white;border-radius:4px;font-size:10px;animation:slide-demo 2s ease-in-out infinite alternate">Slide</div>` +
    `<style>@keyframes slide-demo{0%{left:-60px}100%{left:8px}}</style></div>`
  ),

  'scale': () => W(
    `<div style="width:60px;height:60px;display:flex;align-items:center;justify-content:center">` +
    `<div style="width:30px;height:30px;background:#8b5cf6;border-radius:6px;animation:scale-demo 1.5s ease-in-out infinite alternate"></div>` +
    `<style>@keyframes scale-demo{0%{transform:scale(0.6)}100%{transform:scale(1.2)}}</style></div>`
  ),

  'rotate': () => W(
    `<div style="width:60px;height:60px;display:flex;align-items:center;justify-content:center">` +
    `<div style="width:28px;height:28px;background:#ec4899;border-radius:4px;animation:rotate-demo 3s linear infinite"></div>` +
    `<style>@keyframes rotate-demo{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style></div>`
  ),

  'crossfade': () => W(
    `<div style="position:relative;width:80px;height:40px">` +
    `<div style="position:absolute;inset:0;background:#3b82f6;border-radius:6px;animation:crossfade-a 3s ease-in-out infinite alternate;display:flex;align-items:center;justify-content:center;font-size:9px;color:white">A</div>` +
    `<div style="position:absolute;inset:0;background:#22c55e;border-radius:6px;animation:crossfade-b 3s ease-in-out infinite alternate;display:flex;align-items:center;justify-content:center;font-size:9px;color:white">B</div>` +
    `<style>@keyframes crossfade-a{0%{opacity:1}100%{opacity:0}}@keyframes crossfade-b{0%{opacity:0}100%{opacity:1}}</style></div>`
  ),

  'enter-animation': () => W(
    `<div style="width:80px;height:40px;display:flex;align-items:center;justify-content:center">` +
    `<div style="padding:6px 14px;background:#3b82f6;color:white;border-radius:6px;font-size:10px;animation:enter-demo 2s ease-out infinite">Enter</div>` +
    `<style>@keyframes enter-demo{0%{opacity:0;transform:scale(0.8)}20%{opacity:1;transform:scale(1)}80%{opacity:1;transform:scale(1)}100%{opacity:1;transform:scale(1)}}</style></div>`
  ),

  'exit-animation': () => W(
    `<div style="width:80px;height:40px;display:flex;align-items:center;justify-content:center">` +
    `<div style="padding:6px 14px;background:#ef4444;color:white;border-radius:6px;font-size:10px;animation:exit-demo 2.5s ease-in infinite">Exit</div>` +
    `<style>@keyframes exit-demo{0%{opacity:1;transform:scale(1)}70%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.7)}}</style></div>`
  ),

  'shimmer-effect': () => W(
    `<div style="width:200px;display:flex;flex-direction:column;gap:6px">` +
    `<div style="height:12px;background:#e2e8f0;border-radius:4px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent);animation:shimmer-demo 1.5s infinite"></div></div>` +
    `<div style="height:12px;width:70%;background:#e2e8f0;border-radius:4px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent);animation:shimmer-demo 1.5s infinite 0.2s"></div></div>` +
    `<style>@keyframes shimmer-demo{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}</style></div>`
  ),

  'duration': () => W(
    `<div style="display:flex;flex-direction:column;gap:6px;width:200px">` +
    `<div style="display:flex;align-items:center;gap:6px"><span style="font-size:8px;color:var(--color-text-tertiary);width:30px">150ms</span><div style="width:60px;height:6px;background:#3b82f6;border-radius:3px"></div></div>` +
    `<div style="display:flex;align-items:center;gap:6px"><span style="font-size:8px;color:var(--color-text-tertiary);width:30px">300ms</span><div style="width:120px;height:6px;background:#8b5cf6;border-radius:3px"></div></div>` +
    `<div style="display:flex;align-items:center;gap:6px"><span style="font-size:8px;color:var(--color-text-tertiary);width:30px">500ms</span><div style="width:160px;height:6px;background:#ec4899;border-radius:3px"></div></div></div>`
  ),

  'morphing': () => W(
    `<div style="width:60px;height:60px;display:flex;align-items:center;justify-content:center">` +
    `<div style="width:32px;height:32px;background:#8b5cf6;animation:morph-demo 3s ease-in-out infinite alternate"></div>` +
    `<style>@keyframes morph-demo{0%{border-radius:4px;transform:rotate(0deg)}100%{border-radius:50%;transform:rotate(90deg)}}</style></div>`
  ),

  /* ═══════════════════ CHART / VISUALIZATION ═══════════════════ */

  'column-chart': () => W(
    `<div style="display:flex;align-items:flex-end;gap:6px;height:60px;padding:0 8px">` +
    [40, 65, 35, 80, 55].map((h, i) =>
      `<div style="width:20px;height:${h}%;background:${i === 3 ? '#3b82f6' : 'rgba(59,130,246,0.4)'};border-radius:3px 3px 0 0"></div>`
    ).join('') +
    `<div style="position:absolute;bottom:0;left:8px;right:8px;border-top:1px solid var(--color-border)"></div></div>`
  ),

  'bubble-chart': () => W(
    `<div style="width:160px;height:80px;position:relative;border-left:1px solid var(--color-border);border-bottom:1px solid var(--color-border)">` +
    `<div style="position:absolute;left:20px;top:15px;width:24px;height:24px;background:rgba(59,130,246,0.4);border-radius:50%"></div>` +
    `<div style="position:absolute;left:60px;top:30px;width:36px;height:36px;background:rgba(139,92,246,0.4);border-radius:50%"></div>` +
    `<div style="position:absolute;left:110px;top:20px;width:18px;height:18px;background:rgba(34,197,94,0.4);border-radius:50%"></div>` +
    `<div style="position:absolute;left:85px;top:50px;width:28px;height:28px;background:rgba(249,115,22,0.4);border-radius:50%"></div></div>`
  ),

  'treemap': () => W(
    `<div style="width:180px;height:70px;display:flex;gap:2px;border-radius:6px;overflow:hidden">` +
    `<div style="flex:3;background:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:8px;color:white;font-weight:500">A</div>` +
    `<div style="flex:2;display:flex;flex-direction:column;gap:2px">` +
    `<div style="flex:2;background:#8b5cf6;display:flex;align-items:center;justify-content:center;font-size:8px;color:white">B</div>` +
    `<div style="flex:1;display:flex;gap:2px">` +
    `<div style="flex:1;background:#22c55e;display:flex;align-items:center;justify-content:center;font-size:7px;color:white">C</div>` +
    `<div style="flex:1;background:#f59e0b;display:flex;align-items:center;justify-content:center;font-size:7px;color:white">D</div></div></div></div>`
  ),

  'gantt-chart': () => W(
    `<div style="width:240px;display:flex;flex-direction:column;gap:4px;font-size:9px">` +
    `<div style="display:flex;align-items:center;gap:6px"><span style="width:40px;color:var(--color-text-tertiary);text-align:right">Task 1</span><div style="width:80px;height:12px;background:#3b82f6;border-radius:3px;margin-left:0"></div></div>` +
    `<div style="display:flex;align-items:center;gap:6px"><span style="width:40px;color:var(--color-text-tertiary);text-align:right">Task 2</span><div style="width:60px;height:12px;background:#8b5cf6;border-radius:3px;margin-left:30px"></div></div>` +
    `<div style="display:flex;align-items:center;gap:6px"><span style="width:40px;color:var(--color-text-tertiary);text-align:right">Task 3</span><div style="width:100px;height:12px;background:#22c55e;border-radius:3px;margin-left:50px"></div></div></div>`
  ),

  'legend': () => W(
    `<div style="display:flex;gap:12px;align-items:center;font-size:10px">` +
    [['Revenue', '#3b82f6'], ['Costs', '#ef4444'], ['Profit', '#22c55e']].map(([l, c]) =>
      `<div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;background:${c};border-radius:2px"></div><span style="color:var(--color-text-secondary)">${l}</span></div>`
    ).join('') + `</div>`
  ),

  'axis': () => W(
    `${svg(160, 80, '<line x1="30" y1="10" x2="30" y2="65" stroke="var(--color-text-tertiary)"/><line x1="30" y1="65" x2="150" y2="65" stroke="var(--color-text-tertiary)"/>' +
    '<text x="12" y="20" font-size="7" fill="var(--color-text-tertiary)" text-anchor="end" stroke="none">100</text>' +
    '<text x="12" y="40" font-size="7" fill="var(--color-text-tertiary)" text-anchor="end" stroke="none">50</text>' +
    '<text x="12" y="60" font-size="7" fill="var(--color-text-tertiary)" text-anchor="end" stroke="none">0</text>' +
    '<text x="60" y="75" font-size="7" fill="var(--color-text-tertiary)" text-anchor="middle" stroke="none">Jan</text>' +
    '<text x="100" y="75" font-size="7" fill="var(--color-text-tertiary)" text-anchor="middle" stroke="none">Feb</text>' +
    '<text x="140" y="75" font-size="7" fill="var(--color-text-tertiary)" text-anchor="middle" stroke="none">Mar</text>' +
    '<line x1="28" y1="18" x2="30" y2="18" stroke="var(--color-text-tertiary)"/>' +
    '<line x1="28" y1="38" x2="30" y2="38" stroke="var(--color-text-tertiary)"/>' +
    '<line x1="28" y1="58" x2="30" y2="58" stroke="var(--color-text-tertiary)"/>' +
    '<line x1="60" y1="65" x2="60" y2="67" stroke="var(--color-text-tertiary)"/>' +
    '<line x1="100" y1="65" x2="100" y2="67" stroke="var(--color-text-tertiary)"/>' +
    '<line x1="140" y1="65" x2="140" y2="67" stroke="var(--color-text-tertiary)"/>')}`
  ),

  'tick': () => W(
    `${svg(180, 30, '<line x1="10" y1="10" x2="170" y2="10" stroke="var(--color-text-tertiary)"/>' +
    [10, 50, 90, 130, 170].map(x => `<line x1="${x}" y1="10" x2="${x}" y2="16" stroke="var(--color-text-tertiary)"/>`).join('') +
    [10, 50, 90, 130, 170].map((x, i) => `<text x="${x}" y="25" font-size="7" fill="var(--color-text-tertiary)" text-anchor="middle" stroke="none">${i * 25}</text>`).join(''))}`
  ),

  'gridline': () => W(
    `${svg(160, 70, '' +
    [15, 30, 45, 60].map(y => `<line x1="20" y1="${y}" x2="155" y2="${y}" stroke="var(--color-border-subtle)" stroke-dasharray="2 2"/>`).join('') +
    [50, 90, 130].map(x => `<line x1="${x}" y1="10" x2="${x}" y2="65" stroke="var(--color-border-subtle)" stroke-dasharray="2 2"/>`).join('') +
    '<line x1="20" y1="10" x2="20" y2="65" stroke="var(--color-text-tertiary)"/>' +
    '<line x1="20" y1="65" x2="155" y2="65" stroke="var(--color-text-tertiary)"/>')}`
  ),

  'data-label': () => W(
    `<div style="display:flex;align-items:flex-end;gap:10px;height:70px;padding:0 8px;position:relative">` +
    [['42', 60], ['78', 95], ['35', 50], ['61', 78]].map(([v, h]) =>
      `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">` +
      `<span style="font-size:8px;font-weight:600;color:var(--color-text-primary)">${v}</span>` +
      `<div style="width:24px;height:${h}%;background:#3b82f6;border-radius:3px 3px 0 0"></div></div>`
    ).join('') + `</div>`
  ),

  'annotation': () => W(
    `${svg(180, 80, '<polyline points="20,60 50,40 80,50 110,20 140,30 160,15" fill="none" stroke="#3b82f6" stroke-width="2"/>' +
    '<circle cx="110" cy="20" r="3" fill="#ef4444" stroke="none"/>' +
    '<line x1="110" y1="23" x2="110" y2="40" stroke="#ef4444" stroke-dasharray="2 2"/>' +
    '<text x="112" y="50" font-size="8" fill="#ef4444" stroke="none">Peak: 92</text>' +
    '<line x1="20" y1="65" x2="160" y2="65" stroke="var(--color-text-tertiary)"/>')}`
  ),

  'timeline-chart': () => W(
    `<div style="width:260px;position:relative;padding:8px 0">` +
    `<div style="position:absolute;top:50%;left:10px;right:10px;height:2px;background:var(--color-border)"></div>` +
    [['2023', 20], ['2024', 40], ['2025', 60], ['2026', 80]].map(([y, p]) =>
      `<div style="position:absolute;left:${p}%;top:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:2px">` +
      `<span style="font-size:7px;color:var(--color-text-tertiary)">${y}</span>` +
      `<div style="width:8px;height:8px;border-radius:50%;background:#3b82f6;border:2px solid var(--color-surface)"></div></div>`
    ).join('') + `</div>`
  ),

  /* ═══════════════════ EC / SAAS / BUSINESS ═══════════════════ */

  'product-grid': () => W(
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;width:180px">` +
    [['$29', '#667eea'], ['$49', '#f093fb'], ['$19', '#4facfe'], ['$39', '#43e97b']].map(([p, c]) =>
      `<div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
      `<div style="height:24px;background:${c}"></div>` +
      `<div style="padding:4px 6px"><div style="font-size:8px;color:var(--color-text-secondary)">Product</div><div style="font-size:9px;font-weight:600;color:var(--color-text-primary)">${p}</div></div></div>`
    ).join('') + `</div>`
  ),

  'checkout-stepper': () => W(
    `<div style="display:flex;align-items:center;gap:0;font-size:9px">` +
    [['Cart', true], ['Shipping', true], ['Payment', false]].map(([l, done], i) => {
      const line = i < 2 ? `<div style="width:20px;height:2px;background:${done && i < 1 ? '#3b82f6' : '#d1d5db'}"></div>` : ''
      return `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">` +
        `<div style="width:20px;height:20px;border-radius:50%;background:${done ? '#3b82f6' : '#d1d5db'};color:${done ? 'white' : '#6b7280'};display:flex;align-items:center;justify-content:center;font-size:9px">${done ? CHK : i + 1}</div>` +
        `<span style="color:${done ? '#3b82f6' : 'var(--color-text-tertiary)'};font-size:8px">${l}</span></div>${line}`
    }).join('') + `</div>`
  ),

  'variant-selector': () => W(
    `<div style="display:flex;flex-direction:column;gap:6px">` +
    `<div style="display:flex;gap:4px">` +
    ['#1e293b', '#ef4444', '#3b82f6', '#22c55e'].map((c, i) =>
      `<div style="width:20px;height:20px;border-radius:50%;background:${c};${i === 0 ? 'box-shadow:0 0 0 2px var(--color-surface),0 0 0 3.5px ' + c : ''};cursor:pointer"></div>`
    ).join('') + `</div>` +
    `<div style="display:flex;gap:3px">` +
    ['S', 'M', 'L'].map((s, i) =>
      `<button style="padding:3px 10px;border-radius:4px;font-size:9px;font-weight:500;border:1px solid ${i === 1 ? '#3b82f6' : 'var(--color-border)'};background:${i === 1 ? '#3b82f6' : 'var(--color-surface)'};color:${i === 1 ? 'white' : 'var(--color-text-secondary)'};cursor:pointer">${s}</button>`
    ).join('') + `</div></div>`
  ),

  'coupon-field': () => W(
    `<div style="display:flex;gap:0;width:220px">` +
    `<input class="demo-input" style="border-radius:6px 0 0 6px;border-right:0;flex:1;font-size:10px" placeholder="Enter coupon code" readonly />` +
    `<button class="demo-btn demo-btn-primary" style="border-radius:0 6px 6px 0;padding:6px 12px;font-size:10px">Apply</button></div>`
  ),

  'price-filter': () => W(
    `<div style="display:flex;flex-direction:column;gap:4px;width:180px">` +
    `<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--color-text-tertiary)"><span>$0</span><span>$500</span></div>` +
    `<div style="position:relative;height:16px">` +
    `<div style="position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);height:4px;background:#e5e7eb;border-radius:2px"></div>` +
    `<div style="position:absolute;left:20%;right:40%;top:50%;transform:translateY(-50%);height:4px;background:#3b82f6;border-radius:2px"></div>` +
    `<div style="position:absolute;left:20%;top:50%;transform:translate(-50%,-50%);width:12px;height:12px;background:white;border:2px solid #3b82f6;border-radius:50%"></div>` +
    `<div style="position:absolute;left:60%;top:50%;transform:translate(-50%,-50%);width:12px;height:12px;background:white;border:2px solid #3b82f6;border-radius:50%"></div></div>` +
    `<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--color-text-primary);font-weight:500"><span>$100</span><span>$300</span></div></div>`
  ),

  'mini-cart': () => W(
    `<div style="width:180px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:8px;box-shadow:var(--shadow-lg)">` +
    `<div style="font-size:10px;font-weight:600;color:var(--color-text-primary);margin-bottom:6px">Cart (2)</div>` +
    [['T-Shirt', '$29'], ['Hoodie', '$59']].map(([n, p]) =>
      `<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--color-text-secondary);padding:3px 0;border-bottom:1px solid var(--color-border-subtle)"><span>${n}</span><span>${p}</span></div>`
    ).join('') +
    `<div style="display:flex;justify-content:space-between;font-size:10px;font-weight:600;color:var(--color-text-primary);margin-top:4px"><span>Total</span><span>$88</span></div></div>`
  ),

  'checkout': () => W(
    `<div style="width:180px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:10px">` +
    `<div style="font-size:10px;font-weight:600;color:var(--color-text-primary);margin-bottom:6px">Order Summary</div>` +
    `<div style="font-size:9px;color:var(--color-text-secondary);display:flex;justify-content:space-between;margin-bottom:2px"><span>2 items</span><span>$88</span></div>` +
    `<div style="font-size:9px;color:var(--color-text-secondary);display:flex;justify-content:space-between;margin-bottom:6px"><span>Shipping</span><span>$5</span></div>` +
    `<div style="border-top:1px solid var(--color-border);padding-top:4px;font-size:10px;font-weight:600;display:flex;justify-content:space-between;color:var(--color-text-primary)"><span>Total</span><span>$93</span></div>` +
    `<button class="demo-btn demo-btn-primary" style="width:100%;margin-top:6px;font-size:10px;padding:6px">Pay Now</button></div>`
  ),

  'metric-card': () => W(
    `<div style="padding:10px 14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;width:130px">` +
    `<div style="font-size:9px;color:var(--color-text-tertiary)">Revenue</div>` +
    `<div style="font-size:20px;font-weight:700;color:var(--color-text-primary);margin-top:2px">$24.5k</div>` +
    `<div style="font-size:9px;color:#22c55e;margin-top:2px;display:flex;align-items:center;gap:2px">${svg(10, 10, '<polyline points="2 8 5 3 8 5" stroke="#22c55e" stroke-width="1.5"/>')} +12.5%</div></div>`
  ),

  'notification-center': () => W(
    `<div style="display:flex;align-items:flex-start;gap:8px">` +
    `<div style="position:relative;color:var(--color-text-secondary)">${BELL}<span style="position:absolute;top:-2px;right:-2px;width:8px;height:8px;background:#ef4444;border-radius:50%;border:1.5px solid var(--color-surface)"></span></div>` +
    `<div style="width:180px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;box-shadow:var(--shadow-lg);overflow:hidden;font-size:9px">` +
    [['New comment on PR', '2m', true], ['Build passed', '1h', false]].map(([t, time, unread]) =>
      `<div style="padding:6px 8px;border-bottom:1px solid var(--color-border-subtle);display:flex;align-items:center;gap:4px;${unread ? 'background:rgba(59,130,246,0.04)' : ''}">` +
      `${unread ? '<div style="width:5px;height:5px;background:#3b82f6;border-radius:50%;flex-shrink:0"></div>' : ''}` +
      `<div style="flex:1"><div style="color:var(--color-text-primary)">${t}</div><div style="color:var(--color-text-tertiary);font-size:8px">${time} ago</div></div></div>`
    ).join('') + `</div></div>`
  ),

  'kanban-column': () => W(
    `<div style="width:120px;background:var(--color-surface-hover);border-radius:8px;padding:6px">` +
    `<div style="font-size:9px;font-weight:600;color:var(--color-text-tertiary);text-transform:uppercase;margin-bottom:6px;display:flex;justify-content:space-between"><span>In Progress</span><span>3</span></div>` +
    ['Design review', 'API integration', 'Unit tests'].map(t =>
      `<div style="padding:5px 6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;font-size:9px;color:var(--color-text-secondary);margin-bottom:3px">${t}</div>`
    ).join('') + `</div>`
  ),

  'approval-flow': () => W(
    `<div style="display:flex;align-items:center;gap:0;font-size:9px">` +
    [['Request', '#3b82f6', CHK], ['Review', '#f59e0b', '...'], ['Approved', '#d1d5db', '']].map(([l, c, icon], i) => {
      const line = i < 2 ? `<div style="width:16px;height:2px;background:${i === 0 ? '#3b82f6' : '#d1d5db'}"></div>` : ''
      return `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">` +
        `<div style="width:22px;height:22px;border-radius:50%;background:${c};display:flex;align-items:center;justify-content:center;color:white;font-size:8px">${icon}</div>` +
        `<span style="color:var(--color-text-tertiary);font-size:7px">${l}</span></div>${line}`
    }).join('') + `</div>`
  ),

  'audit-log': () => W(
    `<div style="width:220px;font-size:9px;display:flex;flex-direction:column;gap:3px">` +
    [['14:32', 'Alice updated settings'], ['14:28', 'Bob deleted item #42'], ['14:15', 'Eve created project']].map(([t, a]) =>
      `<div style="display:flex;gap:6px;padding:3px 6px;border-bottom:1px solid var(--color-border-subtle)">` +
      `<span style="color:var(--color-text-tertiary);font-family:var(--font-mono);white-space:nowrap">${t}</span>` +
      `<span style="color:var(--color-text-secondary)">${a}</span></div>`
    ).join('') + `</div>`
  ),

  'activity-log': () => W(
    `<div style="width:230px;font-size:9px;display:flex;flex-direction:column;gap:4px">` +
    [['A', '#3b82f6', 'pushed to main'], ['B', '#8b5cf6', 'opened PR #123'], ['C', '#22c55e', 'merged branch']].map(([n, c, a]) =>
      `<div style="display:flex;align-items:center;gap:6px;padding:3px 0">` +
      `<div style="width:18px;height:18px;border-radius:50%;background:${c};display:flex;align-items:center;justify-content:center;color:white;font-size:8px;flex-shrink:0">${n}</div>` +
      `<span style="color:var(--color-text-secondary)"><strong>${n === 'A' ? 'Alice' : n === 'B' ? 'Bob' : 'Carol'}</strong> ${a}</span></div>`
    ).join('') + `</div>`
  ),

  'account-switcher': () => W(
    `<div style="width:160px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:4px;box-shadow:var(--shadow-md);font-size:10px">` +
    [['Alice', 'Admin', '#3b82f6', true], ['Bob', 'Viewer', '#8b5cf6', false], ['Team', 'Org', '#22c55e', false]].map(([n, r, c, active]) =>
      `<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:4px;${active ? 'background:var(--color-surface-hover)' : ''}">` +
      `<div style="width:20px;height:20px;border-radius:50%;background:${c};display:flex;align-items:center;justify-content:center;color:white;font-size:8px;flex-shrink:0">${n[0]}</div>` +
      `<div><div style="font-weight:${active ? '500' : 'normal'};color:var(--color-text-primary)">${n}</div><div style="font-size:8px;color:var(--color-text-tertiary)">${r}</div></div>` +
      `${active ? '<span style="margin-left:auto;color:#3b82f6">' + CHK + '</span>' : ''}</div>`
    ).join('') + `</div>`
  ),

  'inbox': () => W(
    `<div style="width:220px;font-size:10px;display:flex;flex-direction:column;gap:0">` +
    [['Design Review', 'Please check the...', true], ['Weekly Update', 'This week we...', false], ['Bug Report', 'Found an issue...', true]].map(([t, d, unread]) =>
      `<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;border-bottom:1px solid var(--color-border-subtle);${unread ? 'background:rgba(59,130,246,0.03)' : ''}">` +
      `${unread ? '<div style="width:6px;height:6px;background:#3b82f6;border-radius:50%;flex-shrink:0"></div>' : '<div style="width:6px"></div>'}` +
      `<div style="flex:1;overflow:hidden"><div style="font-weight:${unread ? '600' : '400'};color:var(--color-text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t}</div>` +
      `<div style="font-size:8px;color:var(--color-text-tertiary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d}</div></div></div>`
    ).join('') + `</div>`
  ),

  'swimlane': () => W(
    `<div style="width:260px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="padding:4px 8px;background:rgba(59,130,246,0.06);border-bottom:1px solid var(--color-border);font-size:9px;font-weight:600;color:#3b82f6">Frontend Team</div>` +
    `<div style="padding:6px;display:flex;gap:4px">` +
    ['UI refactor', 'Fix modal', 'Add tests'].map(t =>
      `<div style="padding:4px 6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;font-size:8px;color:var(--color-text-secondary)">${t}</div>`
    ).join('') + `</div></div>`
  ),

  /* ═══════════════════ FILE / EDITOR / TOOLS ═══════════════════ */

  'rich-text-editor': () => W(
    `<div style="width:220px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="display:flex;gap:1px;padding:4px;background:var(--color-surface);border-bottom:1px solid var(--color-border)">` +
    ['B', 'I', 'U', 'Link'].map((t, i) =>
      `<button style="padding:3px 8px;border:none;background:${i === 0 ? 'var(--color-surface-hover)' : 'transparent'};border-radius:3px;font-size:9px;font-weight:${i === 0 ? '700' : i === 1 ? 'normal;font-style:italic' : 'normal'};color:var(--color-text-secondary);cursor:pointer${i === 2 ? ';text-decoration:underline' : ''}">${t}</button>`
    ).join('') + `</div>` +
    `<div style="padding:8px;font-size:10px;color:var(--color-text-secondary);min-height:30px">Type your content here...</div></div>`
  ),

  'wysiwyg-editor': () => W(
    `<div style="width:220px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="display:flex;gap:1px;padding:4px;background:var(--color-surface);border-bottom:1px solid var(--color-border)">` +
    `<button style="padding:3px 6px;border:none;background:transparent;border-radius:3px;font-size:9px;font-weight:700;color:var(--color-text-secondary)">H1</button>` +
    `<button style="padding:3px 6px;border:none;background:transparent;border-radius:3px;font-size:9px;font-weight:700;color:var(--color-text-secondary)">B</button>` +
    `<button style="padding:3px 6px;border:none;background:transparent;border-radius:3px;font-size:9px;color:var(--color-text-secondary)">${ico('<line x1="5" y1="12" x2="14" y2="12"/><line x1="5" y1="8" x2="14" y2="8"/><line x1="5" y1="4" x2="10" y2="4"/>')}</button></div>` +
    `<div style="padding:8px;font-size:10px;color:var(--color-text-secondary)"><strong style="font-size:13px;color:var(--color-text-primary)">Heading</strong><br>Formatted paragraph text...</div></div>`
  ),

  'formatting-toolbar': () => W(
    `<div style="display:flex;gap:2px;padding:4px 6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
    [
      ['B', 'font-weight:700'],
      ['I', 'font-style:italic'],
      ['U', 'text-decoration:underline'],
      ['S', 'text-decoration:line-through'],
    ].map(([t, s]) =>
      `<button style="padding:3px 8px;border:none;background:transparent;border-radius:3px;font-size:10px;${s};color:var(--color-text-secondary);cursor:pointer">${t}</button>`
    ).join('') +
    `<div style="width:1px;background:var(--color-border);margin:0 2px"></div>` +
    `<button style="padding:3px 6px;border:none;background:transparent;border-radius:3px;font-size:9px;color:#3b82f6;cursor:pointer">Link</button></div>`
  ),

  'slash-command-menu': () => W(
    `<div style="width:160px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:4px;box-shadow:var(--shadow-lg);font-size:10px">` +
    ['/heading', '/image', '/table', '/code'].map((c, i) =>
      `<div style="padding:4px 8px;border-radius:4px;color:var(--color-text-secondary);${i === 0 ? 'background:var(--color-surface-hover);color:var(--color-text-primary)' : ''};display:flex;align-items:center;gap:6px">` +
      `<span style="color:var(--color-text-tertiary);font-family:var(--font-mono);font-size:9px">${c}</span></div>`
    ).join('') + `</div>`
  ),

  'block-editor': () => W(
    `<div style="width:220px;display:flex;flex-direction:column;gap:4px">` +
    [['Heading Block', '14px;font-weight:600'], ['Paragraph block with text content...', '10px']].map(([t, s]) =>
      `<div style="display:flex;align-items:center;gap:4px">` +
      `<div style="width:12px;height:12px;display:flex;align-items:center;justify-content:center;color:var(--color-text-tertiary);cursor:grab;font-size:8px">${ico('<circle cx="5" cy="4" r="1" fill="currentColor" stroke="none"/><circle cx="5" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="11" cy="4" r="1" fill="currentColor" stroke="none"/><circle cx="11" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="11" cy="12" r="1" fill="currentColor" stroke="none"/>')}</div>` +
      `<div style="flex:1;padding:4px 8px;border:1px solid var(--color-border-subtle);border-radius:4px;font-size:${s};color:var(--color-text-primary)">${t}</div></div>`
    ).join('') + `</div>`
  ),

  'inline-toolbar': () => W(
    `<div style="display:flex;flex-direction:column;gap:4px;width:200px;position:relative">` +
    `<div style="display:flex;gap:2px;padding:3px 6px;background:#1e293b;border-radius:6px;box-shadow:var(--shadow-lg);width:fit-content">` +
    ['B', 'I', 'U', 'Link'].map(t =>
      `<button style="padding:2px 6px;border:none;background:transparent;border-radius:3px;font-size:9px;color:rgba(255,255,255,0.8);cursor:pointer${t === 'B' ? ';font-weight:700' : t === 'I' ? ';font-style:italic' : ''}">${t}</button>`
    ).join('') + `</div>` +
    `<div style="font-size:10px;color:var(--color-text-secondary)">The <span style="background:rgba(59,130,246,0.15);padding:0 2px;border-radius:2px">selected text</span> here shows inline toolbar.</div></div>`
  ),

  'floating-toolbar': () => W(
    `<div style="width:200px;height:60px;position:relative;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">` +
    `<div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);display:flex;gap:2px;padding:3px 6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;box-shadow:var(--shadow-lg)">` +
    ['B', 'I', 'U'].map(t =>
      `<button style="padding:2px 6px;border:none;background:transparent;border-radius:3px;font-size:9px;color:var(--color-text-secondary);cursor:pointer">${t}</button>`
    ).join('') + `</div>` +
    `<div style="position:absolute;bottom:8px;left:12px;font-size:9px;color:var(--color-text-tertiary)">Content area below</div></div>`
  ),

  'ruler': () => W(
    `<div style="width:240px;height:20px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:3px;position:relative;overflow:hidden">` +
    Array.from({ length: 25 }, (_, i) =>
      `<div style="position:absolute;left:${i * 10}px;top:${i % 5 === 0 ? '0' : '8'}px;width:1px;height:${i % 5 === 0 ? '12' : '6'}px;background:var(--color-text-tertiary);opacity:0.5"></div>` +
      (i % 5 === 0 ? `<div style="position:absolute;left:${i * 10 + 2}px;top:12px;font-size:6px;color:var(--color-text-tertiary)">${i * 10}</div>` : '')
    ).join('') + `</div>`
  ),

  'guide': () => W(
    `<div style="width:180px;height:80px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;left:40px;top:0;bottom:0;border-left:1px solid rgba(59,130,246,0.5)"></div>` +
    `<div style="position:absolute;left:140px;top:0;bottom:0;border-left:1px solid rgba(59,130,246,0.5)"></div>` +
    `<div style="position:absolute;top:30px;left:0;right:0;border-top:1px solid rgba(59,130,246,0.5)"></div>` +
    `<div style="position:absolute;top:22px;left:50px;width:80px;height:30px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.3);border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:8px;color:#3b82f6">element</div></div>`
  ),

  'selection-box': () => W(
    `<div style="width:120px;height:60px;position:relative;margin:8px">` +
    `<div style="position:absolute;inset:0;border:1.5px solid #3b82f6;border-radius:2px;background:rgba(59,130,246,0.04)"></div>` +
    [['0', '0'], ['0', '100%'], ['100%', '0'], ['100%', '100%'], ['50%', '0'], ['50%', '100%'], ['0', '50%'], ['100%', '50%']].map(([l, t]) =>
      `<div style="position:absolute;left:${l};top:${t};width:8px;height:8px;background:white;border:1.5px solid #3b82f6;border-radius:1px;transform:translate(-50%,-50%)"></div>`
    ).join('') + `</div>`
  ),

  'bounding-box': () => W(
    `<div style="width:120px;height:60px;position:relative;margin:8px">` +
    `<div style="position:absolute;inset:8px;background:rgba(139,92,246,0.1);border-radius:6px"></div>` +
    `<div style="position:absolute;inset:0;border:1.5px dashed #8b5cf6"></div>` +
    [['0', '0'], ['0', '100%'], ['100%', '0'], ['100%', '100%']].map(([l, t]) =>
      `<div style="position:absolute;left:${l};top:${t};width:8px;height:8px;background:#8b5cf6;border-radius:50%;transform:translate(-50%,-50%)"></div>`
    ).join('') + `</div>`
  ),

  'eyedropper': () => W(
    `<div style="display:flex;align-items:center;gap:10px">` +
    `${svg(24, 24, '<path d="M20 4L16 8M4 20l3-3m0 0l8-8 3 3-8 8-3-3z" stroke="#3b82f6" stroke-width="1.5"/><path d="M14 6l3 3" stroke="#3b82f6" stroke-width="1.5"/>')}` +
    `<div style="display:flex;align-items:center;gap:4px">` +
    `<div style="width:24px;height:24px;background:#3b82f6;border-radius:4px;border:1px solid rgba(0,0,0,0.1)"></div>` +
    `<span style="font-size:9px;color:var(--color-text-tertiary);font-family:var(--font-mono)">#3b82f6</span></div></div>`
  ),

  'artboard': () => W(
    `<div style="width:160px;height:70px;border:1.5px solid var(--color-border);border-radius:2px;position:relative;background:white">` +
    `<div style="position:absolute;top:-14px;left:0;font-size:8px;color:var(--color-text-tertiary)">Artboard — 375x812</div>` +
    `<div style="position:absolute;top:8px;left:8px;width:60px;height:20px;background:rgba(59,130,246,0.1);border-radius:3px"></div>` +
    `<div style="position:absolute;top:34px;left:8px;width:100px;height:8px;background:rgba(59,130,246,0.06);border-radius:2px"></div>` +
    `<div style="position:absolute;top:46px;left:8px;width:80px;height:8px;background:rgba(59,130,246,0.06);border-radius:2px"></div></div>`
  ),

  'diff-viewer': () => W(
    `<div style="width:240px;font-family:var(--font-mono);font-size:9px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
    `<div style="padding:3px 8px;background:rgba(239,68,68,0.08);color:#ef4444;border-bottom:1px solid var(--color-border-subtle)"><span style="color:var(--color-text-tertiary)">3</span> - const name = "old"</div>` +
    `<div style="padding:3px 8px;background:rgba(34,197,94,0.08);color:#22c55e;border-bottom:1px solid var(--color-border-subtle)"><span style="color:var(--color-text-tertiary)">3</span> + const name = "new"</div>` +
    `<div style="padding:3px 8px;color:var(--color-text-secondary)"><span style="color:var(--color-text-tertiary)">4</span> &nbsp; const version = 2</div></div>`
  ),

  'layer-panel': () => W(
    `<div style="width:160px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;overflow:hidden;font-size:9px">` +
    [['Header', true], ['Body', true], ['Footer', false], ['Background', true]].map(([n, visible], i) =>
      `<div style="display:flex;align-items:center;gap:6px;padding:4px 8px;border-bottom:1px solid var(--color-border-subtle);${i === 1 ? 'background:rgba(59,130,246,0.06)' : ''}">` +
      `<span style="color:${visible ? 'var(--color-text-tertiary)' : 'var(--color-border)'};cursor:pointer">${EYE}</span>` +
      `<span style="color:${visible ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'}">${n}</span></div>`
    ).join('') + `</div>`
  ),

  'properties-panel': () => W(
    `<div style="width:160px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px;font-size:9px;display:flex;flex-direction:column;gap:4px">` +
    `<div style="font-weight:600;color:var(--color-text-primary);margin-bottom:2px">Properties</div>` +
    [['Width', '200'], ['Height', '100'], ['X', '40'], ['Y', '80']].map(([k, v]) =>
      `<div style="display:flex;justify-content:space-between;align-items:center"><span style="color:var(--color-text-tertiary)">${k}</span><span style="padding:1px 6px;background:var(--color-bg);border:1px solid var(--color-border-subtle);border-radius:3px;font-family:var(--font-mono);color:var(--color-text-primary)">${v}</span></div>`
    ).join('') + `</div>`
  ),

  'inspector': () => W(
    `<div style="width:170px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px;font-size:9px">` +
    `<div style="font-weight:600;color:var(--color-text-primary);margin-bottom:4px">Inspector</div>` +
    `<div style="display:flex;flex-direction:column;gap:3px">` +
    [['Type', 'Rectangle'], ['Class', '.card'], ['Size', '200 x 100'], ['Fill', '#3b82f6']].map(([k, v]) =>
      `<div style="display:flex;gap:8px"><span style="color:var(--color-text-tertiary);width:40px">${k}</span><span style="color:var(--color-text-primary)">${v}</span></div>`
    ).join('') + `</div></div>`
  ),

  'canvas': () => W(
    `<div style="width:160px;height:70px;border:1px solid var(--color-border);border-radius:6px;position:relative;overflow:hidden;background:var(--color-surface)">` +
    `${svg(160, 70, Array.from({ length: 63 }, (_, i) => {
      const x = (i % 9) * 18 + 10
      const y = Math.floor(i / 9) * 12 + 8
      return '<circle cx="' + x + '" cy="' + y + '" r="1" fill="var(--color-border-subtle)" stroke="none"/>'
    }).join('') + '<rect x="40" y="20" width="60" height="30" rx="4" stroke="#3b82f6" fill="rgba(59,130,246,0.08)"/>')}` +
    `</div>`
  ),

  /* ═══════════════════ GAME / 3D / SPECIAL ═══════════════════ */

  'mana-bar': () => W(
    `<div style="width:160px;display:flex;flex-direction:column;gap:2px">` +
    `<div style="display:flex;justify-content:space-between;font-size:8px"><span style="color:#3b82f6;font-weight:600">MP</span><span style="color:var(--color-text-tertiary)">65/100</span></div>` +
    `<div style="height:10px;background:#1e293b;border-radius:4px;overflow:hidden;border:1px solid rgba(59,130,246,0.3)">` +
    `<div style="height:100%;width:65%;background:linear-gradient(180deg,#60a5fa,#2563eb);border-radius:3px"></div></div></div>`
  ),

  'stamina-bar': () => W(
    `<div style="width:160px;display:flex;flex-direction:column;gap:2px">` +
    `<div style="display:flex;justify-content:space-between;font-size:8px"><span style="color:#22c55e;font-weight:600">STA</span><span style="color:var(--color-text-tertiary)">80/100</span></div>` +
    `<div style="height:10px;background:#1e293b;border-radius:4px;overflow:hidden;border:1px solid rgba(34,197,94,0.3)">` +
    `<div style="height:100%;width:80%;background:linear-gradient(180deg,#4ade80,#16a34a);border-radius:3px"></div></div></div>`
  ),

  'pie-menu': () => W(
    `<div style="position:relative;width:90px;height:90px">` +
    `${svg(90, 90,
      '<circle cx="45" cy="45" r="38" fill="rgba(30,41,59,0.9)" stroke="var(--color-border)" stroke-width="1"/>' +
      '<line x1="45" y1="7" x2="45" y2="83" stroke="var(--color-border-subtle)" stroke-width="0.5"/>' +
      '<line x1="7" y1="45" x2="83" y2="45" stroke="var(--color-border-subtle)" stroke-width="0.5"/>' +
      '<text x="45" y="28" text-anchor="middle" font-size="8" fill="white" stroke="none">Up</text>' +
      '<text x="45" y="67" text-anchor="middle" font-size="8" fill="white" stroke="none">Down</text>' +
      '<text x="22" y="48" text-anchor="middle" font-size="8" fill="white" stroke="none">L</text>' +
      '<text x="68" y="48" text-anchor="middle" font-size="8" fill="#60a5fa" stroke="none">R</text>' +
      '<circle cx="45" cy="45" r="6" fill="var(--color-border)" stroke="none"/>'
    )}</div>`
  ),

  'quest-log': () => W(
    `<div style="width:180px;background:rgba(30,41,59,0.95);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px;font-size:9px;color:#e2e8f0">` +
    `<div style="font-weight:600;margin-bottom:6px;color:#fbbf24">Quest Log</div>` +
    [['Find the lost sword', true], ['Defeat 5 goblins (3/5)', false], ['Return to village', false]].map(([t, done]) =>
      `<div style="display:flex;align-items:center;gap:4px;padding:2px 0;${done ? 'text-decoration:line-through;opacity:0.5' : ''}">` +
      `<div style="width:10px;height:10px;border:1px solid ${done ? '#22c55e' : '#64748b'};border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:7px;color:#22c55e">${done ? '✓' : ''}</div>${t}</div>`
    ).join('') + `</div>`
  ),

  'dialogue-box': () => W(
    `<div style="width:240px;background:rgba(30,41,59,0.95);border:2px solid rgba(255,255,255,0.15);border-radius:8px;padding:8px 10px;position:relative">` +
    `<div style="font-size:10px;font-weight:600;color:#fbbf24;margin-bottom:4px">Elder Sage</div>` +
    `<div style="font-size:9px;color:#e2e8f0;line-height:1.5">The ancient crystal lies beyond the Dark Forest. You must retrieve it before moonrise...</div>` +
    `<div style="position:absolute;bottom:-6px;right:20px;width:10px;height:10px;background:rgba(30,41,59,0.95);border-right:2px solid rgba(255,255,255,0.15);border-bottom:2px solid rgba(255,255,255,0.15);transform:rotate(45deg)"></div>` +
    `<div style="text-align:right;margin-top:4px;font-size:8px;color:#64748b">▼ Next</div></div>`
  ),

  'choice-prompt': () => W(
    `<div style="width:220px;background:rgba(30,41,59,0.95);border:2px solid rgba(255,255,255,0.15);border-radius:8px;padding:8px 10px">` +
    `<div style="font-size:9px;color:#e2e8f0;margin-bottom:8px">The path splits in two. Which way do you go?</div>` +
    `<div style="display:flex;flex-direction:column;gap:3px">` +
    ['Take the forest path', 'Cross the bridge', 'Turn back'].map((t, i) =>
      `<button style="padding:4px 10px;background:${i === 0 ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.05)'};border:1px solid ${i === 0 ? '#3b82f6' : 'rgba(255,255,255,0.1)'};border-radius:4px;font-size:9px;color:#e2e8f0;text-align:left;cursor:pointer">${i + 1}. ${t}</button>`
    ).join('') + `</div></div>`
  ),

  'minimap': () => W(
    `<div style="width:80px;height:80px;background:#1a2332;border:2px solid rgba(255,255,255,0.15);border-radius:4px;position:relative;overflow:hidden">` +
    `<div style="position:absolute;top:10px;left:10px;width:25px;height:15px;background:#2d4a2e;border-radius:2px;opacity:0.6"></div>` +
    `<div style="position:absolute;bottom:15px;right:10px;width:20px;height:20px;background:#2d4a2e;border-radius:2px;opacity:0.4"></div>` +
    `<div style="position:absolute;top:30px;left:35px;width:30px;height:2px;background:#4a5568;opacity:0.5"></div>` +
    `<div style="position:absolute;top:45px;left:20px;width:10px;height:10px;background:rgba(59,130,246,0.2);border:1px solid #3b82f6;border-radius:1px"></div>` +
    `<div style="position:absolute;top:48px;left:23px;width:4px;height:4px;background:#fbbf24;border-radius:50%"></div></div>`
  ),

  'damage-indicator': () => W(
    `<div style="width:160px;height:70px;background:#1e293b;border-radius:8px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center">` +
    `<div style="position:absolute;inset:0;box-shadow:inset 0 0 30px 10px rgba(239,68,68,0.4);pointer-events:none"></div>` +
    `<div style="font-size:9px;color:#e2e8f0;z-index:1">Game Screen</div></div>`
  ),

  'reticle': () => W(
    `<div style="width:80px;height:80px;display:flex;align-items:center;justify-content:center;background:#1e293b;border-radius:8px">` +
    `${svg(50, 50,
      '<circle cx="25" cy="25" r="15" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>' +
      '<line x1="25" y1="5" x2="25" y2="15" stroke="rgba(255,255,255,0.6)"/>' +
      '<line x1="25" y1="35" x2="25" y2="45" stroke="rgba(255,255,255,0.6)"/>' +
      '<line x1="5" y1="25" x2="15" y2="25" stroke="rgba(255,255,255,0.6)"/>' +
      '<line x1="35" y1="25" x2="45" y2="25" stroke="rgba(255,255,255,0.6)"/>' +
      '<circle cx="25" cy="25" r="2" fill="rgba(239,68,68,0.8)" stroke="none"/>'
    )}</div>`
  ),

  /* ═══════════════════ LEGACY / MINOR ═══════════════════ */

  'jumbotron': () => W(
    `<div style="width:260px;padding:16px 20px;background:linear-gradient(135deg,#1e293b,#334155);border-radius:10px;text-align:center">` +
    `<div style="font-size:16px;font-weight:700;color:white;margin-bottom:4px">Welcome</div>` +
    `<div style="font-size:10px;color:#94a3b8;margin-bottom:8px">A large hero section for showcasing key content.</div>` +
    `<button class="demo-btn demo-btn-primary" style="font-size:10px;padding:5px 14px">Learn More</button></div>`
  ),

  'throbber': () => W(
    `<div style="width:24px;height:24px;border:2.5px solid var(--color-border);border-top-color:#3b82f6;border-radius:50%;animation:throbber-demo 0.8s linear infinite"></div>` +
    `<style>@keyframes throbber-demo{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>`
  ),

  'blink-text': () => W(
    `<span style="font-size:12px;color:#ef4444;font-weight:600;animation:blink-demo 1s step-end infinite">BLINK TEXT</span>` +
    `<style>@keyframes blink-demo{0%,100%{opacity:1}50%{opacity:0}}</style>`
  ),

  'interstitial': () => W(
    `<div style="width:200px;height:80px;background:rgba(0,0,0,0.8);border-radius:8px;display:flex;align-items:center;justify-content:center;position:relative">` +
    `<div style="text-align:center;color:white">` +
    `<div style="font-size:12px;font-weight:600;margin-bottom:4px">Loading Content...</div>` +
    `<div style="font-size:9px;color:#94a3b8">You will be redirected shortly</div></div>` +
    `<button style="position:absolute;top:6px;right:8px;background:none;border:none;color:rgba(255,255,255,0.5);cursor:pointer;font-size:10px">Skip</button></div>`
  ),

  'tree-control': () => WS('flex-direction:column;align-items:flex-start;gap:2px;font-size:10px',
    `<div style="display:flex;align-items:center;gap:3px;color:var(--color-text-primary)"><span style="font-size:8px">▼</span> Documents</div>` +
    `<div style="padding-left:14px;display:flex;align-items:center;gap:3px;color:var(--color-text-primary)"><span style="font-size:8px">▼</span> Projects</div>` +
    `<div style="padding-left:28px;color:var(--color-text-secondary)">Report.pdf</div>` +
    `<div style="padding-left:28px;color:var(--color-text-secondary)">Budget.xlsx</div>` +
    `<div style="padding-left:14px;display:flex;align-items:center;gap:3px;color:var(--color-text-tertiary)"><span style="font-size:8px">▶</span> Archive</div>`
  ),

  'property-sheet': () => {
    const tabStyle = (active) => active
      ? 'flex:1;padding:4px 8px;font-size:9px;text-align:center;background:var(--color-surface);font-weight:500;color:var(--color-text-primary);border-right:1px solid var(--color-border)'
      : 'flex:1;padding:4px 8px;font-size:9px;text-align:center;color:var(--color-text-tertiary)'
    return W(
      `<div style="width:180px;border:1px solid var(--color-border);border-radius:6px;overflow:hidden">` +
      `<div style="display:flex;border-bottom:1px solid var(--color-border)">` +
      ['General', 'Style'].map((t, i) =>
        `<div style="${tabStyle(i === 0)}">${t}</div>`
      ).join('') + `</div>` +
      `<div style="padding:6px 8px;font-size:9px;display:flex;flex-direction:column;gap:3px">` +
      [['Name', 'Button'], ['Visible', 'true']].map(([k, v]) =>
        `<div style="display:flex;justify-content:space-between"><span style="color:var(--color-text-tertiary)">${k}</span><span style="color:var(--color-text-primary)">${v}</span></div>`
      ).join('') + `</div></div>`
    )
  },

  'message-box': () => W(
    `<div style="width:200px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:12px;display:flex;flex-direction:column;align-items:center;gap:6px;box-shadow:var(--shadow-lg)">` +
    `<span style="font-size:24px">&#9432;</span>` +
    `<div style="font-size:11px;color:var(--color-text-primary);text-align:center">Operation completed.</div>` +
    `<button class="demo-btn demo-btn-primary" style="font-size:10px;padding:4px 16px">OK</button></div>`
  ),

  'dialog-box': () => W(
    `<div style="width:200px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;overflow:hidden;box-shadow:var(--shadow-lg)">` +
    `<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 8px;background:var(--color-surface-hover);border-bottom:1px solid var(--color-border)">` +
    `<span style="font-size:10px;font-weight:500;color:var(--color-text-primary)">Dialog</span>` +
    `<span style="color:var(--color-text-tertiary);cursor:pointer">${CLOSE}</span></div>` +
    `<div style="padding:10px 8px;font-size:10px;color:var(--color-text-secondary)">Dialog content area.</div>` +
    `<div style="padding:6px 8px;display:flex;justify-content:flex-end;gap:4px;border-top:1px solid var(--color-border-subtle)">` +
    `<button class="demo-btn demo-btn-secondary" style="font-size:9px;padding:3px 10px">Cancel</button>` +
    `<button class="demo-btn demo-btn-primary" style="font-size:9px;padding:3px 10px">OK</button></div></div>`
  ),

  'gripper': () => W(
    `<div style="display:flex;align-items:center;gap:6px">` +
    `<div style="display:grid;grid-template-columns:repeat(2,4px);gap:3px;cursor:grab">` +
    Array.from({ length: 6 }, () =>
      `<div style="width:4px;height:4px;background:var(--color-text-tertiary);border-radius:50%;opacity:0.5"></div>`
    ).join('') + `</div>` +
    `<span style="font-size:9px;color:var(--color-text-tertiary)">Drag handle</span></div>`
  ),

  'resize-grip': () => W(
    `<div style="width:100px;height:60px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;position:relative">` +
    `<div style="position:absolute;bottom:2px;right:2px;display:flex;flex-direction:column;gap:1px;align-items:flex-end">` +
    `<div style="display:flex;gap:1px"><div style="width:3px;height:3px;background:var(--color-text-tertiary);border-radius:1px;opacity:0.4"></div></div>` +
    `<div style="display:flex;gap:1px"><div style="width:3px;height:3px;background:var(--color-text-tertiary);border-radius:1px;opacity:0.4"></div><div style="width:3px;height:3px;background:var(--color-text-tertiary);border-radius:1px;opacity:0.4"></div></div>` +
    `<div style="display:flex;gap:1px"><div style="width:3px;height:3px;background:var(--color-text-tertiary);border-radius:1px;opacity:0.4"></div><div style="width:3px;height:3px;background:var(--color-text-tertiary);border-radius:1px;opacity:0.4"></div><div style="width:3px;height:3px;background:var(--color-text-tertiary);border-radius:1px;opacity:0.4"></div></div>` +
    `</div></div>`
  ),

  'chrome': () => W(
    `<div style="width:260px;border:1px solid var(--color-border);border-radius:8px 8px 0 0;overflow:hidden">` +
    `<div style="display:flex;align-items:center;gap:6px;padding:4px 8px;background:var(--color-surface-hover);border-bottom:1px solid var(--color-border)">` +
    `<div style="display:flex;gap:3px">` +
    `<span style="width:6px;height:6px;border-radius:50%;background:#ef4444"></span>` +
    `<span style="width:6px;height:6px;border-radius:50%;background:#eab308"></span>` +
    `<span style="width:6px;height:6px;border-radius:50%;background:#22c55e"></span></div>` +
    `<div style="flex:1;padding:2px 8px;background:var(--color-surface);border:1px solid var(--color-border-subtle);border-radius:4px;font-size:8px;color:var(--color-text-tertiary);display:flex;align-items:center;gap:4px">` +
    `${ico('<rect x="3" y="3" width="10" height="10" rx="1.5"/><line x1="3" y1="7" x2="13" y2="7"/>')} example.com</div></div>` +
    `<div style="height:20px;background:var(--color-surface)"></div></div>`
  ),

  'busy-cursor': () => W(
    `<div style="display:flex;align-items:center;gap:8px">` +
    `${svg(24, 24,
      '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="var(--color-text-tertiary)" stroke-width="2"/>'
    )}` +
    `<span style="font-size:9px;color:var(--color-text-tertiary)">Loading...</span></div>`
  ),

  'thumb': () => W(
    `<div style="width:160px;position:relative;height:20px;display:flex;align-items:center">` +
    `<div style="position:absolute;left:0;right:0;height:4px;background:var(--color-border);border-radius:2px"></div>` +
    `<div style="position:absolute;left:0;width:60%;height:4px;background:#3b82f6;border-radius:2px"></div>` +
    `<div style="position:absolute;left:60%;width:16px;height:16px;background:white;border:2px solid #3b82f6;border-radius:50%;transform:translateX(-50%);box-shadow:0 1px 3px rgba(0,0,0,0.15);cursor:pointer"></div>` +
    `<div style="position:absolute;left:60%;top:-12px;transform:translateX(-50%);font-size:7px;color:#3b82f6;font-weight:600">thumb</div></div>`
  ),

  'track': () => W(
    `<div style="width:160px;position:relative;height:20px;display:flex;align-items:center">` +
    `<div style="position:absolute;left:0;right:0;height:4px;background:var(--color-border);border-radius:2px"></div>` +
    `<div style="position:absolute;left:0;right:0;top:14px;display:flex;justify-content:center;font-size:7px;color:var(--color-text-tertiary)">track</div></div>`
  ),

  'well': () => W(
    `<div style="width:140px;height:50px;background:var(--color-bg);border:1px solid var(--color-border-subtle);border-radius:6px;box-shadow:inset 0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--color-text-tertiary)">Recessed area</div>`
  ),

  'picker': () => W(
    `<div style="width:140px;position:relative">` +
    `<div style="display:flex;align-items:center;justify-content:space-between;padding:5px 10px;border:1px solid var(--color-border);border-radius:6px;background:var(--color-surface);font-size:10px;color:var(--color-text-primary);cursor:pointer">Select... ${CHEV}</div></div>`
  ),

  /* ═══════════════════ IMPLEMENTATION / FRONTEND ═══════════════════ */

  'controlled-component': () => W(
    `<div style="display:flex;align-items:center;gap:8px;font-size:9px">` +
    `<div style="padding:6px 8px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:4px;font-family:var(--font-mono);color:#3b82f6">state: "Hi"</div>` +
    `<div style="display:flex;flex-direction:column;align-items:center;gap:1px;color:var(--color-text-tertiary)">` +
    `<span style="font-size:7px">value</span><span>↓</span></div>` +
    `<input class="demo-input" style="width:60px;font-size:9px;padding:4px 6px" value="Hi" readonly />` +
    `<div style="display:flex;flex-direction:column;align-items:center;gap:1px;color:var(--color-text-tertiary)">` +
    `<span>↑</span><span style="font-size:7px">onChange</span></div></div>`
  ),

  'slot': () => W(
    `<div style="width:200px;border:1.5px dashed var(--color-border);border-radius:8px;padding:8px;font-size:9px">` +
    `<div style="color:var(--color-text-tertiary);margin-bottom:4px;font-family:var(--font-mono)">&lt;Card&gt;</div>` +
    `<div style="padding:4px 8px;border:1.5px dashed #8b5cf6;border-radius:4px;background:rgba(139,92,246,0.04);color:#8b5cf6;font-family:var(--font-mono);margin-bottom:3px">slot: header</div>` +
    `<div style="padding:4px 8px;border:1.5px dashed #22c55e;border-radius:4px;background:rgba(34,197,94,0.04);color:#22c55e;font-family:var(--font-mono)">slot: default</div>` +
    `<div style="color:var(--color-text-tertiary);margin-top:4px;font-family:var(--font-mono)">&lt;/Card&gt;</div></div>`
  ),

  'css-in-js': () => W(
    `<div style="width:200px;padding:8px;background:#1e293b;border-radius:6px;font-family:var(--font-mono);font-size:9px;line-height:1.5">` +
    `<span style="color:#c084fc">const</span> <span style="color:#60a5fa">Button</span> <span style="color:#94a3b8">=</span> <span style="color:#f97316">styled</span><span style="color:#94a3b8">.</span><span style="color:#f97316">button</span><span style="color:#94a3b8">\`</span><br>` +
    `<span style="color:#fbbf24">&nbsp;&nbsp;color</span><span style="color:#94a3b8">:</span> <span style="color:#34d399">blue</span><span style="color:#94a3b8">;</span><br>` +
    `<span style="color:#fbbf24">&nbsp;&nbsp;padding</span><span style="color:#94a3b8">:</span> <span style="color:#34d399">8px</span><span style="color:#94a3b8">;</span><br>` +
    `<span style="color:#94a3b8">\`</span></div>`
  ),

  'media-query': () => W(
    `<div style="width:220px;padding:8px;background:#1e293b;border-radius:6px;font-family:var(--font-mono);font-size:8px;line-height:1.6">` +
    `<span style="color:#c084fc">@media</span> <span style="color:#94a3b8">(</span><span style="color:#fbbf24">max-width</span><span style="color:#94a3b8">:</span> <span style="color:#34d399">768px</span><span style="color:#94a3b8">) {</span><br>` +
    `<span style="color:#60a5fa">&nbsp;&nbsp;.grid</span> <span style="color:#94a3b8">{</span><br>` +
    `<span style="color:#fbbf24">&nbsp;&nbsp;&nbsp;&nbsp;columns</span><span style="color:#94a3b8">:</span> <span style="color:#34d399">1</span><span style="color:#94a3b8">;</span><br>` +
    `<span style="color:#94a3b8">&nbsp;&nbsp;}</span><br>` +
    `<span style="color:#94a3b8">}</span></div>`
  ),

  'container-query': () => W(
    `<div style="display:flex;gap:6px;align-items:flex-end">` +
    `<div style="width:70px;height:50px;border:1.5px solid var(--color-border);border-radius:4px;padding:4px;display:flex;flex-direction:column;gap:2px">` +
    `<div style="width:100%;height:6px;background:rgba(59,130,246,0.2);border-radius:2px"></div>` +
    `<div style="width:60%;height:6px;background:rgba(59,130,246,0.2);border-radius:2px"></div>` +
    `<div style="font-size:6px;color:var(--color-text-tertiary);margin-top:auto">small</div></div>` +
    `<div style="width:120px;height:50px;border:1.5px solid var(--color-border);border-radius:4px;padding:4px;display:flex;gap:4px">` +
    `<div style="width:30px;height:30px;background:rgba(59,130,246,0.2);border-radius:4px;flex-shrink:0"></div>` +
    `<div style="flex:1;display:flex;flex-direction:column;gap:2px"><div style="width:100%;height:6px;background:rgba(59,130,246,0.2);border-radius:2px"></div><div style="width:70%;height:6px;background:rgba(59,130,246,0.2);border-radius:2px"></div></div>` +
    `<div style="font-size:6px;color:var(--color-text-tertiary);align-self:flex-end">large</div></div></div>`
  ),

  'hydration': () => W(
    `<div style="display:flex;align-items:center;gap:6px;font-size:9px">` +
    `<div style="padding:6px 8px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;opacity:0.5;color:var(--color-text-tertiary)">Static HTML</div>` +
    `<div style="display:flex;flex-direction:column;align-items:center;gap:1px;color:#3b82f6"><span style="font-size:14px">→</span><span style="font-size:7px">hydrate</span></div>` +
    `<div style="padding:6px 8px;background:rgba(59,130,246,0.08);border:1.5px solid #3b82f6;border-radius:4px;color:#3b82f6;font-weight:500">Interactive</div></div>`
  ),

  'click-outside': () => W(
    `<div style="width:180px;height:60px;border:1px dashed var(--color-border);border-radius:8px;position:relative;display:flex;align-items:center;justify-content:center">` +
    `<div style="padding:6px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;color:var(--color-text-primary);box-shadow:var(--shadow-md)">Popup</div>` +
    `<div style="position:absolute;top:4px;right:6px;font-size:7px;color:var(--color-text-tertiary)">click outside</div>` +
    `<div style="position:absolute;bottom:4px;right:6px;color:var(--color-text-tertiary)">${svg(14, 14, '<path d="M2 8 L7 3 L7 6 L12 6 L12 10 L7 10 L7 13 Z" transform="rotate(135 7 8)" stroke="var(--color-text-tertiary)" fill="none"/>')}</div></div>`
  ),

  'escape-to-close': () => W(
    `<div style="display:flex;align-items:center;gap:8px">` +
    `<div style="padding:6px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:10px;color:var(--color-text-primary);box-shadow:var(--shadow-md)">Modal</div>` +
    `<kbd style="padding:3px 8px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;font-size:10px;font-family:var(--font-mono);color:var(--color-text-secondary);box-shadow:0 1px 0 var(--color-border)">ESC</kbd>` +
    `<span style="font-size:9px;color:var(--color-text-tertiary)">to close</span></div>`
  ),

  'stacking-context': () => W(
    `<div style="position:relative;width:140px;height:70px">` +
    `<div style="position:absolute;top:0;left:0;width:80px;height:40px;background:rgba(59,130,246,0.2);border:1px solid #3b82f6;border-radius:4px;display:flex;align-items:flex-end;padding:2px 4px;font-size:7px;color:#3b82f6">z:1</div>` +
    `<div style="position:absolute;top:12px;left:20px;width:80px;height:40px;background:rgba(139,92,246,0.2);border:1px solid #8b5cf6;border-radius:4px;display:flex;align-items:flex-end;padding:2px 4px;font-size:7px;color:#8b5cf6">z:2</div>` +
    `<div style="position:absolute;top:24px;left:40px;width:80px;height:40px;background:rgba(236,72,153,0.2);border:1px solid #ec4899;border-radius:4px;display:flex;align-items:flex-end;padding:2px 4px;font-size:7px;color:#ec4899">z:3</div></div>`
  ),
})
