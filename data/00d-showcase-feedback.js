/**
 * UI Parts Showcase — Feedback & Layout Components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-feedback',
  title: 'UIパーツ集(フィードバック系)',
  titleEn: 'Feedback & Layout Components',
  description: '状態や進捗を伝える / レイアウトを構成するUIパーツ。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Search Bar',
      nameJa: '検索バー',
      desc: '虫眼鏡アイコン付きのテキスト入力欄。入力するとクリアボタンが現れる定番UI。',
      detail: '検索バーは、ユーザーがキーワードを入力してコンテンツを探すための入り口となるUIです。左に虫眼鏡アイコンを置いて「ここに入れる」と伝え、入力中はテキストの右側に小さな×ボタンを表示して、一発で消せるようにするのが親切です。ECサイトやSNS、ドキュメントなど、情報量が多いサービスではトップやヘッダーに大きく配置することで「まず検索から」という導線を作れます。プレースホルダーで検索対象のヒントを示すと使いやすさが向上します。',
      descEn: 'A text input with a magnifier icon and a clear button that appears once you start typing.',
      detailEn: 'The search bar is the entry point for finding content by keyword. A magnifier icon on the left signals "type here," and showing a small × button on the right while text is entered lets users clear the input in one tap. On content-rich services like e-commerce sites, social apps, and documentation, placing a prominent search bar in the header invites a "search first" flow. A descriptive placeholder hints at what can be searched, making the bar even easier to use.',
      code: `/* Inspired by GitHub */
<div class="ui-search" id="sb">
  <svg class="ui-search__icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M11.5 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"/></svg>
  <input type="search" class="ui-search__input" placeholder="Type / to search" aria-label="Search GitHub">
  <kbd class="ui-search__kbd">/</kbd>
  <button class="ui-search__clear" type="button" aria-label="Clear" hidden>
    <svg width="12" height="12" viewBox="0 0 12 12"><path fill="currentColor" d="M3.72 3.72a.75.75 0 011.06 0L6 4.94l1.22-1.22a.75.75 0 111.06 1.06L7.06 6l1.22 1.22a.75.75 0 11-1.06 1.06L6 7.06 4.78 8.28a.75.75 0 01-1.06-1.06L4.94 6 3.72 4.78a.75.75 0 010-1.06z"/></svg>
  </button>
</div>

<style>
  .ui-search{display:inline-flex;align-items:center;gap:8px;width:min(360px,90vw);padding:0 8px 0 12px;background:#0d1117;border:1px solid #30363d;border-radius:6px;font:14px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;transition:.15s}
  .ui-search:focus-within{border-color:#0969da;box-shadow:0 0 0 3px rgba(9,105,218,.3)}
  .ui-search__icon{color:#7d8590}
  .ui-search__input{flex:1;border:0;background:transparent;padding:7px 0;font:inherit;color:#e6edf3;outline:none;min-width:0}
  .ui-search__input::placeholder{color:#7d8590}
  .ui-search__input::-webkit-search-cancel-button{display:none}
  .ui-search__kbd{font:11px ui-monospace,SFMono-Regular,Menlo,monospace;color:#7d8590;background:#161b22;border:1px solid #30363d;border-radius:3px;padding:1px 6px;line-height:1.4}
  .ui-search:focus-within .ui-search__kbd{display:none}
  .ui-search__clear{width:20px;height:20px;border:0;background:transparent;color:#7d8590;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0}
  .ui-search__clear:hover{background:#30363d;color:#e6edf3}
</style>

<script>
  const sb=document.getElementById('sb');
  const inp=sb.querySelector('.ui-search__input');
  const clr=sb.querySelector('.ui-search__clear');
  inp.addEventListener('input',()=>{clr.hidden=!inp.value});
  clr.addEventListener('click',()=>{inp.value='';clr.hidden=true;inp.focus()});
</script>`,
    },
    {
      name: 'Empty State',
      nameJa: '空状態',
      desc: 'データが何もないときに、絵と短いメッセージで親しみやすく案内する表示。',
      detail: '空状態(エンプティステート)は、リストや検索結果に表示する内容が一件もないときに表示するメッセージ画面です。ただ「データがありません」と冷たく出すのではなく、イラストや絵文字、次に何をすればよいかのアクションボタンを添えることで、ユーザーが迷わず次の行動に移れます。初回利用時、フィルター後に該当なし、削除後のリストなど、登場シーンは意外と多く、プロダクトの第一印象を左右する重要なUIです。',
      descEn: 'A friendly screen with a small illustration and message shown when there is no data yet.',
      detailEn: 'An empty state is the screen shown when a list or search result has nothing to display. Instead of a cold "No data found," pair the message with an illustration or emoji and an action button so users know what to do next. Empty states show up more often than you think — on first launch, after filters return no matches, after deletions — and a warm one can shape the entire first impression of a product.',
      code: `/* Inspired by Linear */
<div class="ui-empty">
  <div class="ui-empty__art" aria-hidden="true">
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="26" stroke="#3a3d4a" stroke-width="1.5" stroke-dasharray="3 4"/>
      <path d="M19 28h18M28 19v18" stroke="#5e6ad2" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </div>
  <h3 class="ui-empty__title">Inbox zero</h3>
  <p class="ui-empty__body">You've caught up on all your notifications. Nice work.</p>
  <div class="ui-empty__actions">
    <button class="ui-empty__btn ui-empty__btn--primary">Create issue<kbd>C</kbd></button>
    <button class="ui-empty__btn">View archive</button>
  </div>
</div>

<style>
  .ui-empty{display:flex;flex-direction:column;align-items:center;text-align:center;padding:56px 24px;background:#08090a;border:1px solid #1f2023;border-radius:8px;font:14px "Inter",-apple-system,sans-serif;max-width:440px;color:#e6e6e7}
  .ui-empty__art{margin-bottom:20px;opacity:.9}
  .ui-empty__title{margin:0 0 6px;font-size:15px;font-weight:500;color:#f7f8f8;letter-spacing:-.01em}
  .ui-empty__body{margin:0 0 22px;font-size:13px;color:#8a8f98;line-height:1.6;max-width:300px}
  .ui-empty__actions{display:flex;gap:8px}
  .ui-empty__btn{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;background:transparent;color:#d0d6e0;border:1px solid #1f2023;border-radius:6px;font:500 13px "Inter",sans-serif;cursor:pointer;transition:.12s}
  .ui-empty__btn:hover{background:#1a1b1e;border-color:#2a2b2f}
  .ui-empty__btn--primary{background:#5e6ad2;color:#fff;border-color:#5e6ad2}
  .ui-empty__btn--primary:hover{background:#7170ff;border-color:#7170ff}
  .ui-empty__btn kbd{font:500 11px ui-monospace,monospace;background:rgba(255,255,255,.15);padding:1px 5px;border-radius:3px;color:#fff}
</style>`,
    },
    {
      name: 'Alert / Banner',
      nameJa: 'アラート / バナー',
      desc: '画面の上に固定で出す成功・警告・エラーのお知らせ。閉じるボタンで消せる。',
      detail: 'アラートやバナーは、ページの上部や本文の冒頭に表示して、ユーザーに重要なお知らせを伝えるUIです。「保存しました」(成功)、「データが古い可能性があります」(警告)、「保存に失敗しました」(エラー)など、種類ごとに色とアイコンを変えて意味を直感的に伝えます。トーストと違って自動では消えず、ユーザーが×ボタンで閉じるか、状況が解決するまで表示され続けるのが特徴です。',
      descEn: 'A persistent banner for success, warning, or error messages that the user can dismiss.',
      detailEn: 'Alerts and banners sit at the top of a page (or top of a section) to convey important news. Different colors and icons signal the meaning at a glance: green for success ("Saved!"), yellow for warnings ("Your data may be out of date"), red for errors ("Save failed"). Unlike toasts, they stay visible until the user closes them with the × button or the underlying situation is resolved, ensuring critical info is not missed.',
      code: `/* Inspired by Vercel */
<div class="ui-alert ui-alert--info" role="status">
  <span class="ui-alert__icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M8 4.5v4M8 11h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
  </span>
  <div class="ui-alert__body">
    <strong>New deployment ready.</strong>
    <span>Preview is available at <a href="#">my-app-git-main.vercel.app</a></span>
  </div>
  <button class="ui-alert__close" aria-label="Dismiss" onclick="this.parentElement.remove()">
    <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
  </button>
</div>
<div class="ui-alert ui-alert--warning" role="alert">
  <span class="ui-alert__icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L15 14H1L8 1.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 6v3.5M8 11.5h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
  </span>
  <div class="ui-alert__body">
    <strong>Build cache disabled.</strong>
    <span>Subsequent builds will be slower. <a href="#">Re-enable in settings</a></span>
  </div>
  <button class="ui-alert__close" aria-label="Dismiss" onclick="this.parentElement.remove()">
    <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
  </button>
</div>
<div class="ui-alert ui-alert--error" role="alert">
  <span class="ui-alert__icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
  </span>
  <div class="ui-alert__body">
    <strong>Build failed.</strong>
    <span>Module not found: Can't resolve './components/Hero' in /pages</span>
  </div>
  <button class="ui-alert__close" aria-label="Dismiss" onclick="this.parentElement.remove()">
    <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
  </button>
</div>

<style>
  .ui-alert{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border-radius:8px;font:13px -apple-system,BlinkMacSystemFont,"Inter",sans-serif;margin-bottom:8px;border:1px solid;max-width:560px;background:#000}
  .ui-alert__icon{flex:none;margin-top:1px}
  .ui-alert__body{flex:1;line-height:1.55}
  .ui-alert__body strong{font-weight:600;margin-right:4px}
  .ui-alert__body a{color:inherit;text-decoration:underline;text-underline-offset:2px}
  .ui-alert__close{flex:none;width:22px;height:22px;border:0;background:transparent;color:#888;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;padding:0}
  .ui-alert__close:hover{background:rgba(255,255,255,.08);color:#fff}
  .ui-alert--info{color:#3a9eff;border-color:rgba(58,158,255,.3);background:linear-gradient(rgba(58,158,255,.06),rgba(58,158,255,.06)),#000}
  .ui-alert--info .ui-alert__body{color:#cfe6ff}
  .ui-alert--warning{color:#f5a623;border-color:rgba(245,166,35,.3);background:linear-gradient(rgba(245,166,35,.06),rgba(245,166,35,.06)),#000}
  .ui-alert--warning .ui-alert__body{color:#ffd99a}
  .ui-alert--error{color:#ee0000;border-color:rgba(238,0,0,.35);background:linear-gradient(rgba(238,0,0,.06),rgba(238,0,0,.06)),#000}
  .ui-alert--error .ui-alert__body{color:#ffc4c4}
</style>`,
    },
    {
      name: 'Snackbar',
      nameJa: 'スナックバー',
      desc: '画面下に出る、「元に戻す」などの操作リンクが付いた短い通知。',
      detail: 'スナックバーは、画面の下部に表示される短いメッセージ通知で、トーストとよく似ていますが「アクションリンク」が付いているのが特徴です。たとえばメールを削除した直後に「メールを削除しました」と表示しつつ、「元に戻す」ボタンを添えて取り消しを許可します。Material Designで定義された定番UIで、ユーザーが操作の結果を確認しつつ、すぐにリカバリーアクションを取れる便利な仕組みです。',
      descEn: 'A short notification at the bottom of the screen that includes an action like "Undo".',
      detailEn: 'A snackbar is a short notification that pops up at the bottom of the screen — similar to a toast but with an extra action link. For example, right after deleting an email, it might show "Email deleted" with an "Undo" button to reverse the action. Defined in Material Design, snackbars give users both confirmation of what happened and a quick way to recover, which is especially valuable for destructive actions like deletion.',
      code: `/* Inspired by Gmail */
<button class="ui-btn" onclick="showSnack()">Send message</button>
<div class="ui-snackbar-wrap" id="snackWrap"></div>

<style>
  .ui-btn{padding:9px 22px;background:#0b57d0;color:#fff;border:0;border-radius:18px;font:500 14px "Google Sans",Roboto,Arial,sans-serif;cursor:pointer;letter-spacing:.01em}
  .ui-btn:hover{background:#1967d2;box-shadow:0 1px 3px rgba(60,64,67,.3)}
  .ui-snackbar-wrap{position:fixed;left:24px;bottom:24px;z-index:9999;display:flex;flex-direction:column;gap:8px}
  .ui-snackbar{display:flex;align-items:center;gap:8px;min-width:288px;max-width:568px;padding:14px 8px 14px 16px;background:#323232;color:#fff;border-radius:4px;font:14px Roboto,Arial,sans-serif;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);animation:snackIn .25s cubic-bezier(.4,0,.2,1)}
  .ui-snackbar__msg{flex:1;color:#e8eaed;letter-spacing:.01em}
  .ui-snackbar__action{background:transparent;border:0;color:#8ab4f8;font:500 14px "Google Sans",Roboto,Arial,sans-serif;padding:6px 12px;cursor:pointer;border-radius:4px;letter-spacing:.04em;text-transform:none}
  .ui-snackbar__action:hover{background:rgba(138,180,248,.08)}
  .ui-snackbar__close{background:transparent;border:0;color:#9aa0a6;cursor:pointer;width:32px;height:32px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;padding:0}
  .ui-snackbar__close:hover{background:rgba(255,255,255,.08);color:#e8eaed}
  @keyframes snackIn{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
</style>

<script>
  function showSnack(){
    const wrap=document.getElementById('snackWrap');
    wrap.innerHTML='';
    const el=document.createElement('div');
    el.className='ui-snackbar';
    el.innerHTML='<span class="ui-snackbar__msg">Message sent.</span><button class="ui-snackbar__action">Undo</button><button class="ui-snackbar__action">View message</button><button class="ui-snackbar__close" aria-label="Dismiss"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>';
    wrap.appendChild(el);
    const t=setTimeout(()=>el.remove(),6000);
    el.querySelectorAll('.ui-snackbar__action')[0].onclick=()=>{clearTimeout(t);el.remove()};
    el.querySelector('.ui-snackbar__close').onclick=()=>{clearTimeout(t);el.remove()};
  }
</script>`,
    },
    {
      name: 'Floating Action Button',
      nameJa: 'FAB(フローティングボタン)',
      desc: '画面右下に浮かんで固定されている、丸い「+」の主要アクションボタン。',
      detail: 'FAB(フローティングアクションボタン)は、画面の右下などに常時浮かんで表示される丸いボタンで、そのアプリで最も重要なアクション(投稿作成、新規メール、メモ追加など)を呼び出すのに使います。Material Designで広まった概念で、スクロールしてもついてくるためいつでもアクションを起こせるのが利点です。1画面に1つだけ置くのが原則で、アイコンは「+」「✎」「✉」など、行為が即座に伝わるシンボルを選びます。',
      descEn: 'A round "+" button that floats fixed in the bottom-right corner for the app\'s primary action.',
      detailEn: 'A floating action button (FAB) is a round button that stays anchored — usually at the bottom-right — and triggers the most important action in the app: composing a post, starting a new email, adding a note. Popularized by Material Design, it stays visible during scroll so users can act at any time. The rule is one FAB per screen, and the icon should be instantly recognizable, like "+", "✎", or "✉".',
      code: `/* Inspired by Gmail */
<button class="ui-fab" aria-label="Compose">
  <span class="ui-fab__icon" aria-hidden="true">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20.7 7.04l-3.74-3.74a1 1 0 00-1.42 0L3 15.84V20h4.16L20.7 8.46a1 1 0 000-1.42zM6.34 18H5v-1.34l9.65-9.65 1.34 1.34L6.34 18zm10.65-10.65l-1.34-1.34L17 4.66 18.34 6l-1.35 1.35z" fill="#3c4043"/></svg>
  </span>
  <span class="ui-fab__label">Compose</span>
</button>

<style>
  .ui-fab{position:fixed;left:24px;top:88px;display:inline-flex;align-items:center;gap:12px;height:56px;padding:0 24px 0 16px;border:0;border-radius:16px;background:#c2e7ff;color:#001d35;cursor:pointer;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);transition:.18s cubic-bezier(.4,0,.2,1);z-index:100;font:500 14px "Google Sans",Roboto,Arial,sans-serif;letter-spacing:.01em}
  .ui-fab:hover{background:#b3deff;box-shadow:0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)}
  .ui-fab:active{background:#a8d6fc}
  .ui-fab__icon{display:inline-flex;align-items:center;justify-content:center}
</style>`,
    },
    {
      name: 'Speed Dial',
      nameJa: 'スピードダイヤル',
      desc: 'FABを押すと小さな複数のボタンが扇状に展開する、アクション集約UI。',
      detail: 'スピードダイヤルは、FABを進化させたUIで、メインの丸ボタンを押すと小さなサブボタンが上方向(または扇状)にスルスルと展開します。1つのFABから「写真を投稿」「動画を投稿」「テキストを投稿」など、関連するアクションを選ばせたいときに便利です。展開中は親ボタンを×アイコンに切り替えて閉じられることを示し、ラベルを横に表示してそれぞれの機能が分かるようにすると親切な実装になります。',
      descEn: 'A FAB that fans out smaller buttons when tapped, grouping related actions in one spot.',
      detailEn: 'A speed dial extends the FAB pattern: tapping the main round button reveals a set of smaller buttons that fan out, usually upward. It is useful when one entry point needs to lead to multiple related actions — "Post photo," "Post video," "Post text." For a friendly implementation, swap the main icon to an × when expanded (so users know how to close it) and show labels next to each sub-button so their purpose is clear.',
      code: `/* Inspired by Notion */
<div class="ui-speed" id="sd">
  <button class="ui-speed__action" data-label="Text"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 3h12v2H2zM2 7h12v2H2zM2 11h8v2H2z"/></svg></button>
  <button class="ui-speed__action" data-label="To-do list"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 8l2 2 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  <button class="ui-speed__action" data-label="Heading"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h2v5h6V2h2v12h-2V9H4v5H2z"/></svg></button>
  <button class="ui-speed__action" data-label="Page"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 1.5h6L13 5.5v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-12a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5"/><path d="M9 1.5V6h4" stroke="currentColor" stroke-width="1.5"/></svg></button>
  <button class="ui-speed__main" aria-label="Add a block" aria-expanded="false">
    <span class="ui-speed__plus">+</span>
  </button>
</div>

<style>
  .ui-speed{position:fixed;right:32px;bottom:32px;display:flex;flex-direction:column;align-items:flex-end;gap:8px;z-index:100;font:14px -apple-system,"Segoe UI",sans-serif}
  .ui-speed__main{width:40px;height:40px;border:1px solid rgba(55,53,47,.16);border-radius:50%;background:#fff;color:#37352f;cursor:pointer;box-shadow:rgba(15,15,15,.05) 0px 0px 0px 1px,rgba(15,15,15,.1) 0px 3px 6px,rgba(15,15,15,.2) 0px 9px 24px;transition:.18s}
  .ui-speed__main:hover{background:#f7f6f3}
  .ui-speed__plus{display:inline-block;font:400 22px/1 -apple-system,sans-serif;transition:.2s;color:#37352f}
  .ui-speed.open .ui-speed__plus{transform:rotate(45deg)}
  .ui-speed__action{position:relative;width:34px;height:34px;border:1px solid rgba(55,53,47,.12);border-radius:6px;background:#fff;color:#37352f;cursor:pointer;box-shadow:rgba(15,15,15,.05) 0px 1px 2px;opacity:0;transform:translateY(8px);pointer-events:none;transition:.2s;display:inline-flex;align-items:center;justify-content:center}
  .ui-speed__action:hover{background:#f1f1ef}
  .ui-speed__action::after{content:attr(data-label);position:absolute;right:44px;top:50%;transform:translateY(-50%);padding:3px 8px;background:#37352f;color:rgba(255,255,255,.95);font:500 12px -apple-system,sans-serif;border-radius:4px;white-space:nowrap;opacity:0;transition:.15s;pointer-events:none}
  .ui-speed.open .ui-speed__action{opacity:1;transform:translateY(0);pointer-events:auto}
  .ui-speed.open .ui-speed__action:hover::after{opacity:1}
</style>

<script>
  const sd=document.getElementById('sd');
  const main=sd.querySelector('.ui-speed__main');
  main.addEventListener('click',()=>{const o=sd.classList.toggle('open');main.setAttribute('aria-expanded',o)});
  document.addEventListener('click',e=>{if(!sd.contains(e.target))sd.classList.remove('open')});
</script>`,
    },
    {
      name: 'Carousel',
      nameJa: 'カルーセル',
      desc: '横にスワイプ/ボタンで切り替わる、画像やカードのスライダー。インジケータ付き。',
      detail: 'カルーセルは、画像やカードを横一列に並べて、矢印やドット(インジケータ)で次々に切り替えられるUIです。トップページのバナー、商品ギャラリー、特集記事の一覧など「複数のコンテンツを限られた幅で見せたい」場面で活躍します。一方で「ユーザーは2枚目以降をほとんど見ない」という研究もあるため、最初に出すコンテンツが最重要、自動再生は速すぎないことなど、設計には少し配慮が必要なUIでもあります。',
      descEn: 'A slider of images or cards advanced by arrows or dots, with swipe support.',
      detailEn: 'A carousel lines up images or cards horizontally and lets users move through them using arrows or dot indicators. It shines for hero banners, product galleries, and featured-article lists — anywhere you need to show many pieces of content in a narrow strip. Be careful, though: research shows users rarely look past the first slide, so put your most important content first, and avoid auto-rotating too quickly to give people a chance to read.',
      code: `/* Inspired by Spotify */
<section class="ui-carousel" id="cr">
  <header class="ui-carousel__head">
    <h2>Made For You</h2>
    <div class="ui-carousel__nav">
      <button class="ui-carousel__btn" data-dir="-1" aria-label="Previous">‹</button>
      <button class="ui-carousel__btn" data-dir="1" aria-label="Next">›</button>
    </div>
  </header>
  <div class="ui-carousel__viewport">
    <div class="ui-carousel__track">
      <a class="ui-card" href="#"><div class="ui-card__art" style="background:linear-gradient(135deg,#1db954,#0f6b30)"><span>♪</span></div><h3>Daily Mix 1</h3><p>The Strokes, Arctic Monkeys, The Killers and more</p></a>
      <a class="ui-card" href="#"><div class="ui-card__art" style="background:linear-gradient(135deg,#e8115b,#4a0e3a)"><span>♥</span></div><h3>Discover Weekly</h3><p>Your weekly mixtape of fresh music. Updates Monday</p></a>
      <a class="ui-card" href="#"><div class="ui-card__art" style="background:linear-gradient(135deg,#f59b23,#a04d0d)"><span>☀</span></div><h3>Release Radar</h3><p>Catch all the latest from artists you follow</p></a>
      <a class="ui-card" href="#"><div class="ui-card__art" style="background:linear-gradient(135deg,#509bf5,#1e3a78)"><span>◆</span></div><h3>Chill Mix</h3><p>Bon Iver, Phoebe Bridgers, Sufjan Stevens and more</p></a>
      <a class="ui-card" href="#"><div class="ui-card__art" style="background:linear-gradient(135deg,#a13fd1,#3a0f4a)"><span>♬</span></div><h3>On Repeat</h3><p>Songs you can't stop playing</p></a>
    </div>
  </div>
</section>

<style>
  .ui-carousel{width:min(720px,95vw);background:#121212;padding:20px;border-radius:8px;font:14px "Circular",-apple-system,"Helvetica Neue",sans-serif;color:#fff}
  .ui-carousel__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
  .ui-carousel__head h2{margin:0;font-size:22px;font-weight:700;letter-spacing:-.02em}
  .ui-carousel__nav{display:flex;gap:6px}
  .ui-carousel__btn{width:32px;height:32px;border:0;border-radius:50%;background:rgba(0,0,0,.7);color:#b3b3b3;font-size:18px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:.15s}
  .ui-carousel__btn:hover{color:#fff;background:#282828;transform:scale(1.05)}
  .ui-carousel__viewport{overflow:hidden}
  .ui-carousel__track{display:flex;gap:16px;transition:transform .35s ease}
  .ui-card{flex:none;width:170px;padding:14px;background:#181818;border-radius:8px;text-decoration:none;color:inherit;transition:.25s}
  .ui-card:hover{background:#282828}
  .ui-card__art{width:100%;aspect-ratio:1;border-radius:6px;margin-bottom:14px;display:flex;align-items:center;justify-content:center;font-size:48px;color:rgba(255,255,255,.85);box-shadow:0 8px 24px rgba(0,0,0,.5)}
  .ui-card h3{margin:0 0 4px;font-size:15px;font-weight:700;color:#fff}
  .ui-card p{margin:0;font-size:13px;color:#a7a7a7;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
</style>

<script>
  (function(){
    const cr=document.getElementById('cr');
    const track=cr.querySelector('.ui-carousel__track');
    let offset=0;
    cr.querySelectorAll('.ui-carousel__btn').forEach(b=>{
      b.onclick=()=>{
        const step=186;
        const max=track.scrollWidth-cr.querySelector('.ui-carousel__viewport').clientWidth;
        offset=Math.max(0,Math.min(max,offset+step*parseInt(b.dataset.dir)));
        track.style.transform='translateX('+(-offset)+'px)';
      };
    });
  })();
</script>`,
    },
    {
      name: 'Drawer',
      nameJa: 'ドロワー',
      desc: '画面の端からスライドインするサイドパネル。設定や追加情報の表示に使う。',
      detail: 'ドロワーは、画面の左右どちらかの端からスーッとスライドして出てくるパネル状のUIです。引き出しのように開閉できることから「Drawer(引き出し)」と呼ばれます。ナビゲーションメニュー、フィルター設定、詳細情報の表示など、画面遷移するほどではないけれど一定の領域を必要とする内容に使われます。背景に半透明のオーバーレイを敷いて、外側のクリックやEscキーで閉じられるようにするのが定番の作法です。',
      descEn: 'A side panel that slides in from the edge of the screen for settings or extra info.',
      detailEn: 'A drawer is a panel that slides in smoothly from the left or right edge — named for opening and closing like a real drawer. It is great for content that needs some elbow room but does not warrant a full page change: navigation menus, filter settings, detail views. The standard pattern is to dim the rest of the page with a semi-transparent overlay, and let users close the drawer by clicking outside it or pressing Esc.',
      code: `/* Inspired by Slack */
<button class="ui-btn" id="dwOpen">Open workspace</button>

<div class="ui-drawer-overlay" id="dwOv"></div>
<aside class="ui-drawer-panel" id="dwP" aria-hidden="true" aria-label="Workspace sidebar">
  <header class="ui-drawer-panel__head">
    <div class="ui-drawer-panel__ws">
      <strong>Acme Design</strong>
      <span>shun.fujieda</span>
    </div>
    <button class="ui-drawer-panel__close" id="dwClose" aria-label="Close">✕</button>
  </header>
  <nav class="ui-drawer-panel__body">
    <div class="ui-drawer-panel__section">
      <div class="ui-drawer-panel__sectionTitle">Channels</div>
      <a class="ui-drawer-panel__row is-active"><span class="hash">#</span>general</a>
      <a class="ui-drawer-panel__row"><span class="hash">#</span>design-crits</a>
      <a class="ui-drawer-panel__row"><span class="hash">#</span>product</a>
      <a class="ui-drawer-panel__row ui-drawer-panel__row--unread"><span class="hash">#</span>random<span class="badge">3</span></a>
      <a class="ui-drawer-panel__row"><span class="hash">#</span>announcements</a>
    </div>
    <div class="ui-drawer-panel__section">
      <div class="ui-drawer-panel__sectionTitle">Direct messages</div>
      <a class="ui-drawer-panel__row"><span class="dot" style="background:#2eb67d"></span>Aiko Tanaka</a>
      <a class="ui-drawer-panel__row"><span class="dot" style="background:#ecb22e"></span>Marcus Reid</a>
      <a class="ui-drawer-panel__row"><span class="dot" style="background:#bcbcbc"></span>Priya Shah</a>
    </div>
  </nav>
</aside>

<style>
  .ui-btn{padding:10px 16px;background:#611f69;color:#fff;border:0;border-radius:4px;font:700 14px Lato,"Helvetica Neue",sans-serif;cursor:pointer;letter-spacing:.01em}
  .ui-btn:hover{background:#4a154b}
  .ui-drawer-overlay{position:fixed;inset:0;background:rgba(0,0,0,.35);opacity:0;pointer-events:none;transition:opacity .2s;z-index:200}
  .ui-drawer-overlay.open{opacity:1;pointer-events:auto}
  .ui-drawer-panel{position:fixed;top:0;left:0;width:min(260px,80vw);height:100vh;background:#3f0e40;color:#fff;box-shadow:1px 0 0 rgba(255,255,255,.1);transform:translateX(-100%);transition:transform .25s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;z-index:201;font:15px Lato,"Helvetica Neue",sans-serif}
  .ui-drawer-panel.open{transform:translateX(0)}
  .ui-drawer-panel__head{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.1)}
  .ui-drawer-panel__ws strong{display:block;font-size:15px;font-weight:900;color:#fff;letter-spacing:-.01em}
  .ui-drawer-panel__ws span{display:flex;align-items:center;gap:6px;font-size:13px;color:rgba(255,255,255,.7);margin-top:2px}
  .ui-drawer-panel__ws span::before{content:"";width:8px;height:8px;border-radius:50%;background:#2bac76}
  .ui-drawer-panel__close{width:28px;height:28px;border:0;background:transparent;border-radius:4px;cursor:pointer;color:rgba(255,255,255,.7);font-size:13px}
  .ui-drawer-panel__close:hover{background:rgba(255,255,255,.08);color:#fff}
  .ui-drawer-panel__body{flex:1;padding:8px 0;overflow-y:auto}
  .ui-drawer-panel__section{padding:8px 0}
  .ui-drawer-panel__sectionTitle{padding:4px 16px;font:700 13px Lato,sans-serif;color:rgba(255,255,255,.65);letter-spacing:.01em}
  .ui-drawer-panel__row{display:flex;align-items:center;gap:8px;padding:4px 16px;font-size:15px;color:rgba(255,255,255,.75);cursor:pointer;text-decoration:none}
  .ui-drawer-panel__row:hover{background:rgba(255,255,255,.06)}
  .ui-drawer-panel__row.is-active{background:#1164a3;color:#fff;font-weight:700}
  .ui-drawer-panel__row .hash{font-weight:400;color:rgba(255,255,255,.65)}
  .ui-drawer-panel__row.is-active .hash{color:#fff}
  .ui-drawer-panel__row--unread{font-weight:900;color:#fff}
  .ui-drawer-panel__row .dot{width:8px;height:8px;border-radius:2px;flex:none}
  .ui-drawer-panel__row .badge{margin-left:auto;background:#cd2553;color:#fff;font:700 11px Lato;padding:1px 6px;border-radius:9px}
</style>

<script>
  (function(){
    const ov=document.getElementById('dwOv'),p=document.getElementById('dwP');
    const open=()=>{ov.classList.add('open');p.classList.add('open');p.setAttribute('aria-hidden','false')};
    const close=()=>{ov.classList.remove('open');p.classList.remove('open');p.setAttribute('aria-hidden','true')};
    document.getElementById('dwOpen').onclick=open;
    document.getElementById('dwClose').onclick=close;
    ov.onclick=close;
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  })();
</script>`,
    },
  ],
}
