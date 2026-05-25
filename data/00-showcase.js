/**
 * UI Parts Showcase — ready-to-use, copy-and-paste UI components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-showcase',
  title: '実用UIパーツ集',
  titleEn: 'UI Parts Showcase',
  description: 'すぐにコピーして使える、よく使うUIパーツ16種類。コードボタンから直接コピーできます。',
  terms: [
    {
      name: 'Button',
      nameJa: 'ボタン',
      desc: 'ユーザーがアクションを起こすための基本UI。送信・キャンセル・購入など。',
      detail: 'ボタンはUIで最も基本的な操作要素で、押すと何かが起きることをユーザーに伝えます。色や形、サイズで重要度を区別し、最も推したいアクションを「プライマリボタン(目立つ色)」、それ以外を「セカンダリ(控えめ)」「ゴースト(枠線のみ)」と段階分けするのが定石です。フォームの送信、決済、削除など、結果が大きく変わる操作はボタンで明示しましょう。',
      descEn: 'The most basic UI element for triggering an action — submit, cancel, buy, and so on.',
      detailEn: 'A button is the most fundamental control in a UI: pressing it tells users something will happen. Visual hierarchy through color, shape, and size signals importance — the action you most want to promote gets a bold "primary" style, while less critical ones become "secondary" (subtle) or "ghost" (outline only). Use buttons whenever an action has real consequences: form submission, payment, deletion. Good button design lets a user predict the result before they click.',
      code: `<!-- Inspired by Linear -->
<div class="ui-btn-wrap">
  <button type="button" class="ui-btn ui-btn--primary">Create issue</button>
  <button type="button" class="ui-btn ui-btn--secondary">Assign</button>
  <button type="button" class="ui-btn ui-btn--ghost">Cancel</button>
</div>

<style>
  .ui-btn-wrap{display:inline-flex;gap:8px;padding:24px;background:#08090a;border-radius:12px}
  .ui-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:6px;font:500 13px -apple-system,"Inter",sans-serif;letter-spacing:-.01em;cursor:pointer;border:1px solid transparent;transition:.12s;line-height:1}
  .ui-btn--primary{background:#5e6ad2;color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 1px 2px rgba(0,0,0,.4)}
  .ui-btn--primary:hover{background:#6872e0}
  .ui-btn--secondary{background:#1f2023;color:#e6e6e6;border-color:#2a2b30}
  .ui-btn--secondary:hover{background:#26272b;border-color:#37383d}
  .ui-btn--ghost{background:transparent;color:#9b9ba3}
  .ui-btn--ghost:hover{color:#e6e6e6;background:#1a1b1e}
</style>`,
    },
    {
      name: 'Dropdown',
      nameJa: 'ドロップダウン',
      desc: 'クリックすると選択肢のリストが下に開くUI。フォームや並び替え選択などで使う。',
      detail: 'ドロップダウンは、限られたスペースで複数の選択肢を提示するためのUIです。クリックでリストが下に展開し、ユーザーが1つを選ぶとリストが閉じて選択結果が表示されます。並び替え基準の選択、国・カテゴリ選択など、5〜20個程度の選択肢に向いています。選択肢が極端に多い場合は検索付きのコンボボックスを、2〜3個ならラジオボタンを検討するのがおすすめです。',
      descEn: 'A UI that opens a list of options downward when clicked — used for forms, sort selectors, and the like.',
      detailEn: 'A dropdown packs many options into a small space. Click it and the list expands downward; pick one and the list closes, showing your choice. It works best for 5–20 options, like sort orders, countries, or categories. If you have far more options, consider a searchable combobox; if you only have 2–3, radio buttons are usually easier to scan.',
      code: `<!-- Inspired by Notion -->
<div class="ui-dd" id="dd">
  <button class="ui-dd__trigger" type="button">
    <span class="ui-dd__lbl">Sort by</span>
    <span class="ui-dd__val">Last edited</span>
    <span class="ui-dd__caret">⌄</span>
  </button>
  <ul class="ui-dd__menu" role="listbox">
    <li role="option"><span>📝</span>Last edited</li>
    <li role="option"><span>🕐</span>Created time</li>
    <li role="option"><span>🔤</span>Name A→Z</li>
    <li role="option"><span>⭐</span>Manual</li>
  </ul>
</div>

<style>
  .ui-dd{position:relative;display:inline-block;font:14px ui-sans-serif,-apple-system,"Segoe UI",sans-serif;color:#37352f}
  .ui-dd__trigger{display:inline-flex;align-items:center;gap:6px;padding:6px 8px;border:0;background:transparent;border-radius:4px;cursor:pointer;color:#37352f}
  .ui-dd__trigger:hover{background:rgba(55,53,47,.08)}
  .ui-dd__lbl{color:rgba(55,53,47,.5)}
  .ui-dd__val{font-weight:500}
  .ui-dd__caret{font-size:12px;color:rgba(55,53,47,.45);margin-left:2px}
  .ui-dd__menu{position:absolute;top:calc(100% + 4px);left:0;min-width:200px;list-style:none;margin:0;padding:6px;background:#fff;border-radius:6px;box-shadow:rgba(15,15,15,.05) 0 0 0 1px,rgba(15,15,15,.1) 0 3px 6px,rgba(15,15,15,.2) 0 9px 24px;display:none;z-index:10}
  .ui-dd.open .ui-dd__menu{display:block}
  .ui-dd__menu li{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:4px;cursor:pointer;font-size:14px}
  .ui-dd__menu li:hover{background:rgba(55,53,47,.06)}
  .ui-dd__menu li span{width:18px;text-align:center;opacity:.7}
</style>

<script>
  const dd=document.getElementById('dd');
  const trg=dd.querySelector('.ui-dd__trigger');
  const val=dd.querySelector('.ui-dd__val');
  trg.addEventListener('click',()=>dd.classList.toggle('open'));
  dd.querySelectorAll('[role=option]').forEach(o=>o.addEventListener('click',()=>{val.textContent=o.textContent.trim();dd.classList.remove('open')}));
  document.addEventListener('click',e=>{if(!dd.contains(e.target))dd.classList.remove('open')});
</script>`,
    },
    {
      name: 'Toggle Switch',
      nameJa: 'トグルスイッチ',
      desc: 'オン/オフを切り替える、丸いつまみが左右にスライドするUI。設定画面で頻出。',
      detail: 'トグルスイッチは、機能のオン・オフを直感的に切り替えるためのUIです。物理的なスイッチを模した見た目で、現在の状態(オン/オフ)が一目で分かるのが特徴です。通知、ダークモード、Wi-Fiなど、即座に反映される設定によく使われます。「保存ボタンを押す前の暫定的な状態」がある場合はチェックボックスのほうが適しているなど、用途で使い分けます。',
      descEn: 'A round knob that slides left or right to flip something on or off — common in settings screens.',
      detailEn: 'A toggle switch lets users flip a feature on or off in a tactile, intuitive way. Modeled after a real-world switch, its position tells you the current state at a glance. It works well for settings that take effect immediately, like notifications, dark mode, or Wi-Fi. If the setting needs to be "tentative" until the user hits a save button, a checkbox is usually a better fit.',
      code: `<!-- Inspired by iOS Settings -->
<div class="ui-switch-list">
  <label class="ui-switch-row">
    <span class="ui-switch-row__icon" style="background:#34c759">✈︎</span>
    <span class="ui-switch-row__txt">機内モード</span>
    <input type="checkbox" class="ui-switch__input">
    <span class="ui-switch__track"></span>
  </label>
  <label class="ui-switch-row">
    <span class="ui-switch-row__icon" style="background:#007aff">📶</span>
    <span class="ui-switch-row__txt">Wi-Fi</span>
    <input type="checkbox" class="ui-switch__input" checked>
    <span class="ui-switch__track"></span>
  </label>
  <label class="ui-switch-row">
    <span class="ui-switch-row__icon" style="background:#5856d6">🅱︎</span>
    <span class="ui-switch-row__txt">Bluetooth</span>
    <input type="checkbox" class="ui-switch__input" checked>
    <span class="ui-switch__track"></span>
  </label>
</div>

<style>
  .ui-switch-list{background:#fff;border-radius:12px;overflow:hidden;font:-apple-system,"SF Pro Text",sans-serif;max-width:340px;box-shadow:0 1px 3px rgba(0,0,0,.06)}
  .ui-switch-row{display:flex;align-items:center;gap:12px;padding:10px 16px;cursor:pointer;border-bottom:.5px solid rgba(60,60,67,.18)}
  .ui-switch-row:last-child{border:0}
  .ui-switch-row__icon{width:28px;height:28px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:14px;flex-shrink:0}
  .ui-switch-row__txt{flex:1;font-size:17px;color:#000;letter-spacing:-.01em}
  .ui-switch__input{position:absolute;opacity:0;pointer-events:none}
  .ui-switch__track{position:relative;width:51px;height:31px;background:#e9e9eb;border-radius:999px;transition:background .25s;flex-shrink:0}
  .ui-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:27px;height:27px;background:#fff;border-radius:50%;box-shadow:0 3px 8px rgba(0,0,0,.15),0 1px 1px rgba(0,0,0,.1);transition:transform .25s}
  .ui-switch__input:checked ~ .ui-switch__track{background:#34c759}
  .ui-switch__input:checked ~ .ui-switch__track::after{transform:translateX(20px)}
</style>`,
    },
    {
      name: 'Toast',
      nameJa: 'トースト',
      desc: '画面の端に一瞬だけ表示されて自動で消える通知メッセージ。「保存しました」など。',
      detail: 'トーストは、操作の結果を控えめに、しかし確実に伝えるための通知UIです。画面の端(多くは右下や上)から滑り込むように表示され、数秒後に自動で消えます。「コピーしました」「メッセージを送信しました」など、ユーザーを止めずに結果を伝えたいときに最適です。重要な確認やエラーには使わず、軽い完了通知に使うのが鉄則です。',
      descEn: 'A small notification message that briefly appears at the edge of the screen and disappears on its own — think "Saved!"',
      detailEn: 'A toast delivers a quiet but reliable confirmation that an action succeeded. It slides in from the edge of the screen (usually the bottom-right or top) and fades away after a few seconds. It is perfect for low-stakes confirmations like "Copied" or "Message sent" that should not interrupt what the user is doing. Avoid using toasts for critical confirmations or errors — they are meant for light feedback only.',
      code: `<!-- Inspired by Slack -->
<button type="button" class="ui-trigger" onclick="showToast('Message sent to #design-crit')">Send message</button>
<div class="ui-toast-stack" id="toastStack"></div>

<style>
  .ui-trigger{padding:8px 14px;background:#007a5a;color:#fff;border:0;border-radius:4px;font:700 14px Lato,"Helvetica Neue",sans-serif;cursor:pointer}
  .ui-trigger:hover{background:#148567}
  .ui-toast-stack{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:9999}
  .ui-toast{display:flex;align-items:center;gap:10px;padding:10px 14px 10px 12px;background:#1d1c1d;color:#f8f8f8;border-radius:8px;font:500 14px Lato,-apple-system,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.32),0 0 0 1px rgba(255,255,255,.06);animation:tIn .22s cubic-bezier(.2,.9,.3,1.2),tOut .22s ease 2.6s forwards;min-width:280px}
  .ui-toast__check{width:18px;height:18px;border-radius:50%;background:#2eb67d;display:inline-flex;align-items:center;justify-content:center;color:#1d1c1d;font-size:11px;font-weight:900;flex-shrink:0}
  .ui-toast__close{margin-left:auto;background:none;border:0;color:#9b9b9d;cursor:pointer;font-size:16px;padding:0 4px}
  @keyframes tIn{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
  @keyframes tOut{to{transform:translateY(20px);opacity:0}}
</style>

<script>
  function showToast(msg){
    const s=document.getElementById('toastStack');
    const t=document.createElement('div');t.className='ui-toast';
    t.innerHTML='<span class="ui-toast__check">✓</span>'+msg+'<button type="button" class="ui-toast__close">✕</button>';
    t.querySelector('.ui-toast__close').onclick=()=>t.remove();
    s.appendChild(t);
    setTimeout(()=>t.remove(),3000);
  }
</script>`,
    },
    {
      name: 'Badge',
      nameJa: 'バッジ',
      desc: '数字や状態を小さく強調表示する印。「未読3件」「NEW」など。',
      detail: 'バッジは、何かの「数」や「状態」を一目で伝えるための小さなラベルです。アイコンの右上に重ねて未読件数を示したり、商品名の横に「NEW」「SALE」と付けたりして使います。色や形で意味を伝えるので(赤=要注意、緑=完了など)、配色のルールを統一しておくと一貫した体験になります。数字が3桁を超える場合は「99+」表記にするのが定石です。',
      descEn: 'A tiny label that highlights a count or status, like "3 unread" or "NEW".',
      detailEn: 'A badge is a small label that surfaces a number or status at a glance. It sits on the top-right of an icon to show unread counts, or next to a product name as "NEW" or "SALE". Color carries meaning here (red for attention, green for done, etc.), so keeping a consistent palette across the app makes the experience feel coherent. When a number goes over three digits, the convention is to show "99+" instead.',
      code: `<!-- Inspired by X (Twitter) -->
<nav class="ui-x-nav">
  <a class="ui-x-item active"><span class="ui-x-ic">🏠</span>Home</a>
  <a class="ui-x-item">
    <span class="ui-x-ic">🔔</span>Notifications
    <span class="ui-badge">12</span>
  </a>
  <a class="ui-x-item">
    <span class="ui-x-ic">✉︎</span>Messages
    <span class="ui-badge">3</span>
  </a>
  <a class="ui-x-item">
    <span class="ui-x-ic">👤</span>Profile
    <span class="ui-dot"></span>
  </a>
</nav>

<style>
  .ui-x-nav{display:inline-flex;flex-direction:column;gap:2px;padding:12px;background:#000;border-radius:16px;font:-apple-system,"Segoe UI",sans-serif;min-width:220px}
  .ui-x-item{position:relative;display:flex;align-items:center;gap:16px;padding:12px 16px;color:#e7e9ea;font-size:20px;font-weight:400;border-radius:999px;cursor:pointer;text-decoration:none}
  .ui-x-item:hover{background:rgba(231,233,234,.1)}
  .ui-x-item.active{font-weight:700}
  .ui-x-ic{font-size:24px;width:26px;text-align:center}
  .ui-badge{position:absolute;top:6px;left:30px;min-width:18px;height:18px;padding:0 5px;background:#1d9bf0;color:#fff;border-radius:999px;font:700 12px -apple-system,sans-serif;display:inline-flex;align-items:center;justify-content:center;border:2px solid #000}
  .ui-dot{position:absolute;top:14px;left:34px;width:8px;height:8px;background:#1d9bf0;border-radius:50%;border:2px solid #000}
</style>`,
    },
    {
      name: 'Modal',
      nameJa: 'ポップアップ(モーダル)',
      desc: '画面の上に重ねて表示する小窓。確認・入力など、注目してほしい情報を出すのに使う。',
      detail: 'モーダル(ポップアップウィンドウ)は、画面中央に重なって表示される小窓で、後ろの画面は薄暗くなって操作できなくなります。ユーザーに集中して読んで・選んでほしい内容(削除確認、ログイン、規約同意など)を一時的に表示するのに使います。Escキーや背景クリックで閉じられるようにし、開いたらフォーカスを内側に移動させると親切です。',
      descEn: 'A small window layered over the screen for important confirmations or quick input.',
      detailEn: 'A modal appears centered on the screen while everything behind it dims and becomes uninteractive. Use it to focus attention on something the user must read or decide — a delete confirmation, login form, or terms agreement. Make sure it can be dismissed with the Esc key or by clicking the backdrop. For accessibility, move keyboard focus inside the modal when it opens so it is easy to navigate.',
      code: `<!-- Inspired by Stripe Checkout -->
<button type="button" class="ui-pay-trigger" onclick="document.getElementById('sm').showModal()">Pay $49.00</button>

<dialog id="sm" class="ui-stripe-modal">
  <div class="ui-stripe-modal__head">
    <div class="ui-stripe-modal__logo">stripe</div>
    <button type="button" class="ui-stripe-modal__x" onclick="document.getElementById('sm').close()">✕</button>
  </div>
  <h2 class="ui-stripe-modal__title">Pay Acme, Inc.</h2>
  <div class="ui-stripe-modal__amt">$49.00 <span>USD</span></div>
  <div class="ui-stripe-modal__field"><label>Email</label><input value="lena.nakamura@gmail.com"></div>
  <div class="ui-stripe-modal__field"><label>Card information</label><input placeholder="1234 1234 1234 1234"></div>
  <button type="button" class="ui-stripe-modal__pay" onclick="document.getElementById('sm').close()">Pay $49.00</button>
  <p class="ui-stripe-modal__foot">Powered by <b>stripe</b> · Terms · Privacy</p>
</dialog>

<style>
  .ui-pay-trigger{padding:10px 18px;background:#635bff;color:#fff;border:0;border-radius:6px;font:600 14px -apple-system,"Inter",sans-serif;cursor:pointer;box-shadow:0 2px 8px rgba(99,91,255,.3)}
  .ui-stripe-modal{border:0;border-radius:12px;padding:28px;width:min(380px,92vw);box-shadow:0 30px 60px rgba(0,0,0,.3);font:-apple-system,"Inter",sans-serif;color:#1a1f36}
  .ui-stripe-modal::backdrop{background:rgba(26,31,54,.5);backdrop-filter:blur(6px)}
  .ui-stripe-modal__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
  .ui-stripe-modal__logo{font:900 18px -apple-system,sans-serif;color:#635bff;letter-spacing:-.02em}
  .ui-stripe-modal__x{border:0;background:transparent;color:#697386;font-size:16px;cursor:pointer;padding:4px}
  .ui-stripe-modal__title{margin:0 0 4px;font-size:15px;color:#697386;font-weight:500}
  .ui-stripe-modal__amt{font:700 28px -apple-system,sans-serif;margin-bottom:20px;letter-spacing:-.02em}
  .ui-stripe-modal__amt span{font-size:14px;color:#697386;font-weight:500;margin-left:4px}
  .ui-stripe-modal__field{margin-bottom:12px}
  .ui-stripe-modal__field label{display:block;font-size:13px;color:#1a1f36;margin-bottom:4px;font-weight:500}
  .ui-stripe-modal__field input{width:100%;padding:9px 12px;border:1px solid #e3e8ee;border-radius:6px;font-size:14px;box-shadow:0 1px 2px rgba(26,31,54,.04);box-sizing:border-box}
  .ui-stripe-modal__pay{width:100%;margin-top:8px;padding:11px;background:#635bff;color:#fff;border:0;border-radius:6px;font:600 14px -apple-system,sans-serif;cursor:pointer}
  .ui-stripe-modal__foot{margin:16px 0 0;text-align:center;font-size:12px;color:#697386}
</style>`,
    },
    {
      name: 'Breadcrumb',
      nameJa: 'パンくずリスト',
      desc: '今いるページの階層を「ホーム > カテゴリ > 商品」のように表示するナビ。',
      detail: 'パンくずリストは、サイトの階層構造の中で「自分が今どこにいるか」を一目で示すナビゲーションです。「ホーム > 服 > メンズ > シャツ」のように、上位階層への戻り道もリンクとして提供します。検索やリンクから直接深い階層に来たユーザーが迷子にならず、上の階層に戻ってカテゴリを広げて見られるのが利点です。ECサイトやドキュメントサイトに必須のUIです。',
      descEn: 'A trail showing the current page\'s position in a hierarchy, like "Home > Category > Product".',
      detailEn: 'Breadcrumbs show where the user is within the site\'s structure at a glance. They display a path like "Home > Clothing > Men > Shirts," with each step linking back to a higher level. This is especially helpful for users who arrive deep in the site from a search engine or external link, letting them zoom out to broader categories instead of feeling lost. Breadcrumbs are essentially required for e-commerce sites and documentation.',
      code: `<!-- Inspired by GitHub -->
<nav class="ui-gh-crumb" aria-label="Breadcrumb">
  <span class="ui-gh-crumb__icon">📂</span>
  <a href="#" class="ui-gh-crumb__owner">sora-dev</a>
  <span class="ui-gh-crumb__sep">/</span>
  <a href="#" class="ui-gh-crumb__repo">notion-clone</a>
  <span class="ui-gh-crumb__sep">/</span>
  <a href="#">src</a>
  <span class="ui-gh-crumb__sep">/</span>
  <a href="#">components</a>
  <span class="ui-gh-crumb__sep">/</span>
  <a href="#">editor</a>
  <span class="ui-gh-crumb__sep">/</span>
  <span class="ui-gh-crumb__file">BlockToolbar.tsx</span>
</nav>

<style>
  .ui-gh-crumb{display:flex;flex-wrap:wrap;align-items:center;gap:4px;padding:8px 12px;background:#f6f8fa;border:1px solid #d0d7de;border-radius:6px;font:13px -apple-system,"SF Mono",ui-monospace,monospace;color:#1f2328}
  .ui-gh-crumb a{color:#0969da;text-decoration:none;padding:2px 4px;border-radius:4px}
  .ui-gh-crumb a:hover{text-decoration:underline}
  .ui-gh-crumb__icon{margin-right:4px}
  .ui-gh-crumb__owner,.ui-gh-crumb__repo{font-weight:600}
  .ui-gh-crumb__sep{color:#656d76;font-weight:300;padding:0 2px}
  .ui-gh-crumb__file{font-weight:600;color:#1f2328;padding:2px 4px}
</style>`,
    },
    {
      name: 'Pagination',
      nameJa: 'ページネーション',
      desc: '記事や商品リストを複数ページに分けて、ページ番号で切り替える操作UI。',
      detail: 'ページネーションは、大量のコンテンツ(商品一覧、検索結果、記事一覧など)を一度に表示せず、ページ単位に分けて表示するためのUIです。ページ番号、前/次ボタン、「最初」「最後」へのジャンプボタンで構成されるのが定番です。スクロールし続ける必要がなく、特定ページを共有・ブックマークできるのが利点。最近は「もっと見る」ボタンや無限スクロールに置き換えられることも増えていますが、検索結果やECでは依然として主流です。',
      descEn: 'A control for splitting articles or product lists across numbered pages.',
      detailEn: 'Pagination breaks large amounts of content — product listings, search results, article archives — into bite-sized pages. It typically combines numbered page links, previous/next buttons, and sometimes jumps to the first or last page. Users do not have to scroll endlessly, and any specific page can be bookmarked or shared. While "Load more" buttons and infinite scroll have grown popular, traditional pagination is still the standard for search results and e-commerce.',
      code: `<!-- Inspired by Reddit -->
<nav class="ui-reddit-pager" aria-label="Pagination">
  <button type="button" class="ui-reddit-pager__prev" disabled>‹ prev</button>
  <div class="ui-reddit-pager__view">
    viewing page <strong>2</strong>
  </div>
  <button type="button" class="ui-reddit-pager__next">next ›</button>
</nav>

<div class="ui-reddit-pager-alt">
  <a class="ui-rp-link">1</a>
  <a class="ui-rp-link ui-rp-link--cur">2</a>
  <a class="ui-rp-link">3</a>
  <a class="ui-rp-link">4</a>
  <span class="ui-rp-gap">…</span>
  <a class="ui-rp-link">87</a>
</div>

<style>
  .ui-reddit-pager{display:inline-flex;gap:8px;align-items:center;padding:8px;background:#fff;border:1px solid #edeff1;border-radius:4px;font:600 12px IBMPlexSans,-apple-system,sans-serif;text-transform:uppercase;color:#1c1c1c;margin-bottom:12px}
  .ui-reddit-pager__prev,.ui-reddit-pager__next{padding:6px 12px;background:#ff4500;color:#fff;border:0;border-radius:999px;font:inherit;cursor:pointer;letter-spacing:.04em}
  .ui-reddit-pager__prev:disabled{background:#dadada;color:#878a8c;cursor:not-allowed}
  .ui-reddit-pager__next:hover{background:#e23d00}
  .ui-reddit-pager__view{padding:0 8px;color:#7c7c7c;text-transform:none;font-weight:500}
  .ui-reddit-pager__view strong{color:#1c1c1c}
  .ui-reddit-pager-alt{display:inline-flex;gap:2px;font:500 13px IBMPlexSans,sans-serif}
  .ui-rp-link{min-width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;color:#0079d3;cursor:pointer;text-decoration:none}
  .ui-rp-link:hover{background:#f6f7f8}
  .ui-rp-link--cur{background:#0079d3;color:#fff;font-weight:700}
  .ui-rp-gap{padding:0 6px;color:#878a8c;align-self:center}
</style>`,
    },
    {
      name: 'Hamburger Menu',
      nameJa: 'ハンバーガーメニュー',
      desc: '三本線アイコン。タップするとサイドメニューが開く、スマホで定番のUI。',
      detail: 'ハンバーガーメニューは、横3本線のアイコンで、見た目がハンバーガーのバンズと具材に似ていることが名前の由来です。タップするとサイドからメニューがスライドして開きます。画面の狭いスマホで、ナビゲーションを隠して本文に集中させるために広く使われています。一方で「中身が見えない」というデメリットもあり、重要なナビは外に出すのがUX的に推奨されています。',
      descEn: 'A three-line icon that opens a side menu — a staple of mobile UI.',
      detailEn: 'The hamburger menu is named after its three horizontal lines, which resemble a hamburger\'s buns and filling. Tap it and a navigation menu slides in from the side. It is widely used on phones to tuck navigation out of the way so the main content can take the spotlight. The downside is that the menu items are hidden — UX best practice says to keep your most important links visible rather than buried inside.',
      code: `<!-- Inspired by YouTube mobile -->
<div class="ui-yt">
  <header class="ui-yt__bar">
    <button type="button" class="ui-hamburger" id="hb" aria-label="Guide">
      <span></span><span></span><span></span>
    </button>
    <span class="ui-yt__logo"><b style="color:#ff0000">▶</b> YouTube</span>
  </header>
  <aside class="ui-yt__drawer" id="dw">
    <ul>
      <li class="active"><span>🏠</span>Home</li>
      <li><span>🔥</span>Shorts</li>
      <li><span>📺</span>Subscriptions</li>
      <li class="sep">You</li>
      <li><span>📜</span>History</li>
      <li><span>▶</span>Your videos</li>
      <li><span>⏰</span>Watch later</li>
      <li><span>👍</span>Liked videos</li>
    </ul>
  </aside>
</div>

<style>
  .ui-yt{position:relative;width:320px;height:240px;overflow:hidden;background:#0f0f0f;border-radius:12px;font:-apple-system,Roboto,sans-serif;color:#fff}
  .ui-yt__bar{display:flex;align-items:center;gap:12px;padding:10px 14px;background:#0f0f0f;border-bottom:1px solid #272727}
  .ui-hamburger{display:inline-flex;flex-direction:column;justify-content:center;gap:4px;width:32px;height:32px;background:transparent;border:0;cursor:pointer;padding:6px}
  .ui-hamburger span{display:block;width:18px;height:2px;background:#fff;border-radius:1px;transition:.2s}
  .ui-hamburger.open span:nth-child(1){transform:translateY(6px) rotate(45deg)}
  .ui-hamburger.open span:nth-child(2){opacity:0}
  .ui-hamburger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}
  .ui-yt__logo{font-weight:700;font-size:18px;letter-spacing:-.02em}
  .ui-yt__drawer{position:absolute;top:53px;left:-240px;width:240px;height:calc(100% - 53px);background:#212121;transition:left .22s ease;overflow-y:auto}
  .ui-yt__drawer.open{left:0;box-shadow:4px 0 24px rgba(0,0,0,.5)}
  .ui-yt__drawer ul{list-style:none;margin:0;padding:8px 0}
  .ui-yt__drawer li{display:flex;align-items:center;gap:24px;padding:9px 24px;font-size:14px;cursor:pointer}
  .ui-yt__drawer li:hover{background:#383838}
  .ui-yt__drawer li.active{background:#272727;font-weight:500}
  .ui-yt__drawer li.sep{font-size:16px;font-weight:500;padding:14px 16px 8px;cursor:default;color:#fff}
  .ui-yt__drawer li.sep:hover{background:transparent}
</style>

<script>
  const hb=document.getElementById('hb'),dw=document.getElementById('dw');
  hb.addEventListener('click',()=>{const o=hb.classList.toggle('open');dw.classList.toggle('open',o)});
</script>`,
    },
    {
      name: 'Kebab Menu',
      nameJa: 'ケバブメニュー',
      desc: '縦3つの点アイコン。タップすると「編集」「削除」などのメニューが開く。',
      detail: 'ケバブメニューは、縦に並んだ3つの点(︙)で表されるアイコンで、串焼き料理のケバブが名前の由来です。タップすると「編集」「削除」「共有」などのコンテキストメニュー(その場限定のオプション)が表示されます。投稿ごとの追加操作、行ごとのアクションなど、項目に紐づくサブ操作をまとめておくのに便利。Androidで広く使われ、Gmailや各種SNSでもおなじみです。',
      descEn: 'A vertical three-dot icon that opens a small menu of options like "Edit" or "Delete".',
      detailEn: 'The kebab menu is shown as three vertical dots (︙), named after a skewered kebab. Tapping it reveals a context menu — options that apply only to the item next to it, like "Edit", "Delete", or "Share". It is handy for tucking secondary actions next to each post or row in a list. Popular on Android, it is also a familiar sight in Gmail and most social media apps.',
      code: `<!-- Inspired by Gmail -->
<div class="ui-gmail">
  <div class="ui-gmail__row">
    <input type="checkbox" class="ui-gmail__chk">
    <span class="ui-gmail__star">☆</span>
    <span class="ui-gmail__from">Lena Nakamura</span>
    <span class="ui-gmail__subj"><b>Re: Q2 design review</b> — Happy to share the Figma file later today…</span>
    <span class="ui-gmail__date">2:14 PM</span>
    <div class="ui-kebab" id="kb">
      <button type="button" class="ui-kebab__btn" aria-label="More">⋮</button>
      <ul class="ui-kebab__menu" role="menu">
        <li role="menuitem"><span>↩︎</span>Reply</li>
        <li role="menuitem"><span>↪︎</span>Forward</li>
        <li role="menuitem"><span>🏷️</span>Add label</li>
        <li role="menuitem"><span>🔇</span>Mute</li>
        <li role="menuitem"><span>📌</span>Snooze</li>
        <li role="menuitem" class="danger"><span>🗑</span>Delete</li>
      </ul>
    </div>
  </div>
</div>

<style>
  .ui-gmail{font:14px "Google Sans",Roboto,-apple-system,sans-serif;background:#fff;border-radius:8px;padding:4px}
  .ui-gmail__row{display:flex;align-items:center;gap:10px;padding:6px 12px;border-radius:8px;color:#202124;position:relative}
  .ui-gmail__row:hover{box-shadow:inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px rgba(60,64,67,.15)}
  .ui-gmail__star{color:#dadce0;cursor:pointer}
  .ui-gmail__from{min-width:140px;font-weight:600}
  .ui-gmail__subj{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#5f6368}
  .ui-gmail__subj b{color:#202124;font-weight:600}
  .ui-gmail__date{font-size:12px;color:#5f6368;font-weight:600}
  .ui-kebab{position:relative}
  .ui-kebab__btn{width:32px;height:32px;border:0;background:transparent;border-radius:50%;font-size:18px;cursor:pointer;color:#5f6368;line-height:1}
  .ui-kebab__btn:hover{background:#f1f3f4}
  .ui-kebab__menu{position:absolute;top:calc(100% + 4px);right:0;min-width:200px;list-style:none;margin:0;padding:8px 0;background:#fff;border-radius:4px;box-shadow:0 2px 6px 2px rgba(60,64,67,.15);display:none;z-index:10}
  .ui-kebab.open .ui-kebab__menu{display:block}
  .ui-kebab__menu li{display:flex;align-items:center;gap:14px;padding:8px 16px;cursor:pointer;font-size:14px;color:#202124}
  .ui-kebab__menu li span{width:16px;text-align:center}
  .ui-kebab__menu li:hover{background:#f1f3f4}
  .ui-kebab__menu .danger{color:#d93025}
</style>

<script>
  const kb=document.getElementById('kb');
  kb.querySelector('.ui-kebab__btn').addEventListener('click',e=>{e.stopPropagation();kb.classList.toggle('open')});
  document.addEventListener('click',e=>{if(!kb.contains(e.target))kb.classList.remove('open')});
</script>`,
    },
    {
      name: 'Bento Menu',
      nameJa: 'お弁当メニュー',
      desc: '正方形に並んだ四角アイコン。Googleアプリ切り替えメニューでおなじみ。',
      detail: 'ベントー(お弁当)メニューは、3×3の正方形に四角いマスが並んだアイコンで、お弁当箱の仕切りに似ていることが名前の由来です。タップすると、関連サービスやアプリのリストが格子状に表示されます。GoogleのGmail画面右上にあるアプリ切替メニューが代表例で、「ここから他のサービスに移動できますよ」と知らせる役割を持ちます。同列のサービス・ツールを並列に並べたいときに使います。',
      descEn: 'A grid of small squares used for switching between related apps, famously seen in Google products.',
      detailEn: 'The bento menu is a 3×3 grid of small squares, named after a Japanese bento lunchbox with its compartmented dividers. Tap it to reveal a grid of related apps or services. The classic example is the app switcher in the top right of Gmail, which signals "you can jump to our other tools from here." Use it whenever you want to lay out a set of peer-level services side by side.',
      code: `<!-- Inspired by Google apps launcher -->
<div class="ui-goog">
  <div class="ui-goog__bar">
    <span class="ui-goog__title">Gmail</span>
    <div class="ui-bento" id="bn">
      <button type="button" class="ui-bento__btn" aria-label="Google apps">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </button>
      <div class="ui-bento__panel" role="menu">
        <a href="#"><span class="ui-bento__ic" style="color:#4285f4">📅</span>Calendar</a>
        <a href="#"><span class="ui-bento__ic" style="color:#fbbc04">📁</span>Drive</a>
        <a href="#"><span class="ui-bento__ic" style="color:#34a853">📝</span>Docs</a>
        <a href="#"><span class="ui-bento__ic" style="color:#0f9d58">📊</span>Sheets</a>
        <a href="#"><span class="ui-bento__ic" style="color:#ea4335">🎬</span>YouTube</a>
        <a href="#"><span class="ui-bento__ic" style="color:#4285f4">🗺</span>Maps</a>
        <a href="#"><span class="ui-bento__ic" style="color:#673ab7">📸</span>Photos</a>
        <a href="#"><span class="ui-bento__ic" style="color:#1a73e8">🌐</span>Translate</a>
        <a href="#"><span class="ui-bento__ic" style="color:#ea4335">📰</span>News</a>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-goog{font:14px "Google Sans",Roboto,sans-serif;padding:8px;background:#f6f8fc;border-radius:12px}
  .ui-goog__bar{display:flex;justify-content:space-between;align-items:center;background:#fff;padding:8px 16px;border-radius:8px}
  .ui-goog__title{font-size:22px;color:#5f6368;font-weight:400}
  .ui-bento{position:relative}
  .ui-bento__btn{display:grid;grid-template-columns:repeat(3,4px);grid-template-rows:repeat(3,4px);gap:3px;width:40px;height:40px;padding:10px;background:transparent;border:0;border-radius:50%;cursor:pointer;align-content:center;justify-content:center}
  .ui-bento__btn:hover{background:rgba(60,64,67,.08)}
  .ui-bento__btn span{background:#5f6368;border-radius:50%;width:4px;height:4px}
  .ui-bento__panel{position:absolute;top:calc(100% + 6px);right:0;width:320px;display:none;grid-template-columns:repeat(3,1fr);gap:4px;padding:12px;background:#fff;border-radius:8px;box-shadow:0 4px 8px 3px rgba(60,64,67,.15)}
  .ui-bento.open .ui-bento__panel{display:grid}
  .ui-bento__panel a{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 8px;text-decoration:none;color:#202124;font-size:13px;border-radius:8px}
  .ui-bento__panel a:hover{background:#f1f3f4}
  .ui-bento__ic{font-size:24px}
</style>

<script>
  const bn=document.getElementById('bn');
  bn.querySelector('.ui-bento__btn').addEventListener('click',e=>{e.stopPropagation();bn.classList.toggle('open')});
  document.addEventListener('click',e=>{if(!bn.contains(e.target))bn.classList.remove('open')});
</script>`,
    },
    {
      name: 'Meatball Menu',
      nameJa: 'ミートボールメニュー',
      desc: '横3つの点アイコン。投稿カードなど、項目ごとのオプションメニューに使われる。',
      detail: 'ミートボールメニューは、横に並んだ3つの点(⋯)で表されるアイコンで、丸い肉団子が並んでいる見た目が名前の由来です。基本機能はケバブメニューと同じで「項目に対する追加操作」を隠しておく用途ですが、配置の都合(横幅に余裕がある、縦の高さを節約したいなど)で使い分けます。TwitterやFacebookの投稿に付いている「・・・」ボタンが代表例です。',
      descEn: 'A horizontal three-dot icon for extra options on cards or posts, like in social feeds.',
      detailEn: 'The meatball menu shows three dots in a horizontal row (⋯), named after a line of round meatballs. It serves the same purpose as a kebab menu — hiding extra actions for an item — but you might pick this orientation when you have horizontal room to spare or want to save vertical space. The "..." button on Twitter and Facebook posts is the classic example.',
      code: `<!-- Inspired by Instagram -->
<article class="ui-ig">
  <header class="ui-ig__head">
    <div class="ui-ig__avatar"></div>
    <div class="ui-ig__who">
      <b>sora_dev</b>
      <span>Shibuya, Tokyo</span>
    </div>
    <div class="ui-meatball" id="mb">
      <button type="button" class="ui-meatball__btn" aria-label="More options">⋯</button>
      <ul class="ui-meatball__menu" role="menu">
        <li role="menuitem" class="danger">Report</li>
        <li role="menuitem" class="danger">Unfollow</li>
        <li role="menuitem">Add to favorites</li>
        <li role="menuitem">Go to post</li>
        <li role="menuitem">Share to…</li>
        <li role="menuitem">Copy link</li>
        <li role="menuitem">Embed</li>
        <li role="menuitem">About this account</li>
      </ul>
    </div>
  </header>
  <div class="ui-ig__img"></div>
</article>

<style>
  .ui-ig{width:300px;background:#fff;border:1px solid #dbdbdb;border-radius:8px;font:14px -apple-system,"Segoe UI",sans-serif;color:#262626}
  .ui-ig__head{display:flex;align-items:center;gap:10px;padding:10px 12px}
  .ui-ig__avatar{width:32px;height:32px;border-radius:50%;background:conic-gradient(from 180deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75);padding:2px;box-sizing:border-box;position:relative}
  .ui-ig__avatar::after{content:"";position:absolute;inset:2px;background:#fff;border-radius:50%}
  .ui-ig__who{flex:1;display:flex;flex-direction:column;line-height:1.2}
  .ui-ig__who b{font-weight:600;font-size:14px}
  .ui-ig__who span{font-size:12px;color:#262626}
  .ui-ig__img{height:200px;background:linear-gradient(135deg,#feda75 0%,#fa7e1e 25%,#d62976 50%,#962fbf 75%,#4f5bd5 100%)}
  .ui-meatball{position:relative}
  .ui-meatball__btn{padding:4px 8px;border:0;background:transparent;font-size:18px;letter-spacing:2px;cursor:pointer;color:#262626;font-weight:700}
  .ui-meatball__menu{position:absolute;top:calc(100% + 4px);right:0;min-width:240px;list-style:none;margin:0;padding:0;background:#fff;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,.18);display:none;overflow:hidden;z-index:10}
  .ui-meatball.open .ui-meatball__menu{display:block}
  .ui-meatball__menu li{padding:14px 16px;cursor:pointer;border-bottom:.5px solid #dbdbdb;font-size:14px;text-align:center}
  .ui-meatball__menu li:last-child{border:0}
  .ui-meatball__menu li:hover{background:#fafafa}
  .ui-meatball__menu .danger{color:#ed4956;font-weight:700}
</style>

<script>
  const mb=document.getElementById('mb');
  mb.querySelector('.ui-meatball__btn').addEventListener('click',e=>{e.stopPropagation();mb.classList.toggle('open')});
  document.addEventListener('click',e=>{if(!mb.contains(e.target))mb.classList.remove('open')});
</script>`,
    },
    {
      name: 'Doner Menu',
      nameJa: 'ドネルケバブメニュー',
      desc: '長さの違う横線が並んだアイコン。フィルター開閉ボタンや並び替えで使われる。',
      detail: 'ドネルケバブメニューは、長さの異なる横線が3〜4本並んだアイコンで、トルコ料理のドネルケバブを連想させる見た目が由来です。一般的にはフィルター(絞り込み)パネルの開閉ボタンや、並び替え機能の入口として使われます。「いま3つの条件で絞り込まれている」など、線の数や色で状態を示すこともでき、ハンバーガーメニューよりも「絞り込み・調整」の意味合いが強いアイコンです。',
      descEn: 'An icon of horizontal lines of varying lengths, often used to open a filter panel or sort menu.',
      detailEn: 'The doner menu icon shows three or four horizontal lines of different lengths, evoking a Turkish doner kebab. It typically opens a filter (refinement) panel or acts as an entry point to sort options. The number or color of the lines can hint at the current state — "three filters are active," for example. Compared with the hamburger menu, it leans more toward "refine and adjust" than general navigation.',
      code: `<!-- Inspired by Airbnb -->
<button type="button" class="ui-doner" id="dn" aria-expanded="false">
  <span class="ui-doner__icon">
    <span></span><span></span><span></span>
  </span>
  <em>Filters</em>
  <span class="ui-doner__badge">3</span>
</button>
<div class="ui-doner__panel" id="dnP">
  <h4>Price range</h4>
  <div class="ui-doner__pills">
    <button type="button" class="pill active">¥0–10,000</button>
    <button type="button" class="pill">¥10–20,000</button>
    <button type="button" class="pill">¥20,000+</button>
  </div>
  <h4>Type of place</h4>
  <label><input type="checkbox" checked>Entire place</label>
  <label><input type="checkbox" checked>Private room</label>
  <label><input type="checkbox">Shared room</label>
  <h4>Amenities</h4>
  <label><input type="checkbox" checked>Wifi</label>
  <button type="button" class="ui-doner__show">Show 248 stays</button>
</div>

<style>
  .ui-doner{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border:1px solid #dddddd;border-radius:999px;background:#fff;cursor:pointer;font:600 14px "Cereal","Circular",-apple-system,sans-serif;color:#222;box-shadow:0 1px 2px rgba(0,0,0,.08)}
  .ui-doner:hover{border-color:#222}
  .ui-doner__icon{display:flex;flex-direction:column;gap:3px;align-items:flex-start}
  .ui-doner__icon span{display:block;height:2px;background:#222;border-radius:1px}
  .ui-doner__icon span:nth-child(1){width:14px}
  .ui-doner__icon span:nth-child(2){width:10px}
  .ui-doner__icon span:nth-child(3){width:6px}
  .ui-doner em{font-style:normal}
  .ui-doner__badge{background:#222;color:#fff;font-size:11px;padding:1px 6px;border-radius:999px;font-weight:700}
  .ui-doner__panel{display:none;margin-top:10px;padding:20px;border:1px solid #ebebeb;border-radius:12px;background:#fff;font:14px "Cereal",sans-serif;max-width:320px;box-shadow:0 6px 16px rgba(0,0,0,.12);color:#222}
  .ui-doner__panel.open{display:block}
  .ui-doner__panel h4{margin:14px 0 8px;font-size:16px;font-weight:600}
  .ui-doner__panel h4:first-child{margin-top:0}
  .ui-doner__pills{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px}
  .ui-doner__pills .pill{padding:6px 12px;border:1px solid #dddddd;border-radius:999px;background:#fff;font:500 13px inherit;cursor:pointer}
  .ui-doner__pills .pill.active{background:#222;color:#fff;border-color:#222}
  .ui-doner__panel label{display:flex;align-items:center;gap:8px;padding:5px 0;cursor:pointer;font-size:14px}
  .ui-doner__show{margin-top:14px;width:100%;padding:12px;background:#ff385c;color:#fff;border:0;border-radius:8px;font:600 14px inherit;cursor:pointer}
</style>

<script>
  const dn=document.getElementById('dn'),dnP=document.getElementById('dnP');
  dn.addEventListener('click',()=>{const o=dnP.classList.toggle('open');dn.setAttribute('aria-expanded',o)});
</script>`,
    },
    {
      name: 'Progress Bar',
      nameJa: 'プログレスバー',
      desc: '作業の進み具合を棒グラフで見せるUI。ダウンロードやアップロードで定番。',
      detail: 'プログレスバーは、何かの進行状況を視覚的に伝えるためのUIです。0〜100%の範囲で「いまどこまで進んだか」を棒状に表示するため、ユーザーは「あとどれくらい待てばよいか」を見当できます。ファイルのアップロード、動画のロード、フォームの完成度などに使われます。終了時刻が分からない処理には「インディターミネート(往復するアニメーション)」型を使い、進捗が分かる処理には「ディターミネート(数値表示)」型を使い分けます。',
      descEn: 'A bar showing how far along a task is — a staple of file uploads and downloads.',
      detailEn: 'A progress bar visualizes how far through a task you are, filling from 0 to 100 percent so users can estimate the remaining wait. Common uses include file uploads, video loading, and even form completion. When the duration is unknown, use the "indeterminate" style with a looping animation; when you can measure progress precisely, use the "determinate" style with an actual percentage shown.',
      code: `<!-- Inspired by Spotify download -->
<div class="ui-spo">
  <div class="ui-spo__row">
    <div class="ui-spo__art"></div>
    <div class="ui-spo__meta">
      <div class="ui-spo__title">Midnight City</div>
      <div class="ui-spo__sub">M83 · Hurry Up, We're Dreaming</div>
      <div class="ui-spo__track">
        <div class="ui-spo__bar" style="width:64%"></div>
      </div>
      <div class="ui-spo__status">
        <span class="ui-spo__dl">⬇ Downloading…</span>
        <span>14 of 22 songs</span>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-spo{background:#121212;padding:18px;border-radius:12px;font:-apple-system,"Circular",sans-serif;max-width:360px;color:#fff}
  .ui-spo__row{display:flex;gap:14px;align-items:center}
  .ui-spo__art{width:56px;height:56px;border-radius:6px;background:linear-gradient(135deg,#1db954 0%,#191414 100%);flex-shrink:0;box-shadow:0 4px 16px rgba(0,0,0,.5)}
  .ui-spo__meta{flex:1;min-width:0}
  .ui-spo__title{font-weight:700;font-size:15px;letter-spacing:-.01em}
  .ui-spo__sub{font-size:12px;color:#a7a7a7;margin-bottom:8px}
  .ui-spo__track{height:4px;background:#4d4d4d;border-radius:999px;overflow:hidden;margin-bottom:6px}
  .ui-spo__bar{height:100%;background:#1db954;border-radius:999px;transition:width .3s ease;box-shadow:0 0 4px rgba(29,185,84,.6)}
  .ui-spo__status{display:flex;justify-content:space-between;font-size:11px;color:#a7a7a7}
  .ui-spo__dl{color:#1db954;font-weight:600}
</style>`,
    },
    {
      name: 'Step Indicator',
      nameJa: 'ステップインジケータ',
      desc: '「1. お届け先 / 2. 支払い / 3. 確認」と、複数段階の現在地を示すUI。',
      detail: 'ステップインジケータ(ステッパー)は、複数の手順からなる作業の中で「いま何ステップ目にいるか」を示すUIです。会員登録、購入手続き、設定ウィザードなど、3〜5ステップ程度の流れで使われます。完了済み・現在地・未着手を色や線で区別することで、ユーザーは「あと何ステップで終わるか」が分かり、安心して入力を進められます。番号と短いラベルを必ずセットにするのがコツです。',
      descEn: 'A breadcrumb of steps like "1. Address / 2. Payment / 3. Review" that shows where you are in a multi-step flow.',
      detailEn: 'A step indicator (or stepper) shows users which stage they are at in a multi-step process. It is great for sign-up flows, checkout, or setup wizards with around three to five steps. Distinguishing finished, current, and upcoming steps with color and lines lets users see how much is left, which makes filling out forms feel less daunting. The trick is to always pair each step number with a short label so people know what each one means.',
      code: `<!-- Inspired by Shopify checkout -->
<div class="ui-shop">
  <div class="ui-shop__logo">acme<span>.shop</span></div>
  <ol class="ui-stepper" aria-label="Checkout">
    <li class="done"><a>Cart</a></li>
    <li class="done"><a>Information</a></li>
    <li class="current" aria-current="step"><a>Shipping</a></li>
    <li><a>Payment</a></li>
  </ol>
</div>

<style>
  .ui-shop{padding:24px;background:#fafafa;border-radius:12px;font:14px -apple-system,"Inter","SF Pro Text",sans-serif;max-width:520px}
  .ui-shop__logo{font-weight:800;font-size:22px;letter-spacing:-.02em;color:#202223;margin-bottom:18px}
  .ui-shop__logo span{color:#008060}
  .ui-stepper{display:flex;align-items:center;list-style:none;padding:0;margin:0;font-size:13px;flex-wrap:wrap;gap:8px}
  .ui-stepper li{display:flex;align-items:center;color:#8c9196}
  .ui-stepper li:not(:last-child)::after{content:"›";margin:0 10px;color:#c9cccf;font-size:16px;font-weight:300}
  .ui-stepper a{text-decoration:none;color:inherit;padding:2px 0}
  .ui-stepper .done{color:#008060}
  .ui-stepper .done a{cursor:pointer}
  .ui-stepper .done a:hover{text-decoration:underline}
  .ui-stepper .current{color:#202223;font-weight:600}
</style>`,
    },
    {
      name: 'Tooltip',
      nameJa: 'ツールチップ',
      desc: 'アイコンに少しカーソルを乗せたとき、ぴょこんと出る小さな説明UI。',
      detail: 'ツールチップは、アイコンや要素にマウスを乗せたとき(またはフォーカス時)に、その意味や追加情報を短く表示する小さな吹き出しUIです。「設定」「お気に入り」など、アイコンだけでは意味が伝わりにくい要素を補助したり、入力欄に細かい注意事項を添えたりするのに使います。タッチデバイスでは表示されにくいので、重要な情報はツールチップだけに頼らない設計が大切です。',
      descEn: 'A small bubble of explanatory text that appears when you hover over an icon or element.',
      detailEn: 'A tooltip is a small speech-bubble of extra info that appears on hover (or keyboard focus). It is great for explaining icon-only buttons like "Settings" or "Favorites," or for adding fine-print rules to a form field. Because tooltips do not appear easily on touch devices, never put essential info inside one — treat them as a helpful supplement, not a replacement for clear labels.',
      code: `<!-- Inspired by Figma -->
<div class="ui-fig-toolbar">
  <button type="button" class="ui-tip" data-tip="Move" data-key="V"><span>▱</span></button>
  <button type="button" class="ui-tip" data-tip="Frame" data-key="F"><span>▢</span></button>
  <button type="button" class="ui-tip" data-tip="Rectangle" data-key="R"><span>◻</span></button>
  <button type="button" class="ui-tip" data-tip="Pen" data-key="P"><span>✎</span></button>
  <button type="button" class="ui-tip" data-tip="Text" data-key="T"><span>T</span></button>
  <span class="ui-fig-toolbar__sep"></span>
  <button type="button" class="ui-tip" data-tip="Comment" data-key="C"><span>💬</span></button>
</div>

<style>
  .ui-fig-toolbar{display:inline-flex;align-items:center;gap:2px;padding:6px;background:#2c2c2c;border-radius:10px;box-shadow:0 4px 16px rgba(0,0,0,.4),0 0 0 .5px rgba(255,255,255,.05)}
  .ui-fig-toolbar__sep{width:1px;height:18px;background:#444;margin:0 4px}
  .ui-tip{position:relative;width:32px;height:32px;border:0;background:transparent;border-radius:6px;color:#e6e6e6;font-size:14px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
  .ui-tip:hover{background:#0d99ff;color:#fff}
  .ui-tip::after{content:attr(data-tip) " " attr(data-key);position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%);padding:6px 8px;background:#1e1e1e;color:#fff;font:500 11px -apple-system,"Inter",sans-serif;white-space:nowrap;border-radius:4px;opacity:0;pointer-events:none;transition:opacity .12s .3s;box-shadow:0 2px 8px rgba(0,0,0,.4),0 0 0 .5px rgba(255,255,255,.08);letter-spacing:.02em}
  .ui-tip::before{content:"";position:absolute;top:calc(100% + 3px);left:50%;transform:translateX(-50%) rotate(45deg);width:6px;height:6px;background:#1e1e1e;opacity:0;transition:opacity .12s .3s}
  .ui-tip:hover::after,.ui-tip:hover::before{opacity:1}
</style>`,
    },
  ],
}
