/**
 * UI Parts Showcase — Navigation, Actions & Mobile (Extended).
 * Additional copy-and-paste UI components inspired by reference sites.
 */

export const category = {
  id: 'ui-parts-ref-navigation',
  title: 'UIパーツ集(ナビ・操作・モバイル拡張)',
  titleEn: 'Navigation, Actions & Mobile (Extended)',
  description: '参考サイトから拾い上げた追加UIパーツ。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Tab Bar',
      nameJa: 'タブバー',
      desc: '画面下部に固定配置される主要セクションの切替UI。iOS/Androidの標準パターン。',
      detail: 'タブバーは、スマホアプリの画面下部にずっと表示されている、3〜5個程度のアイコン+ラベルからなるナビゲーションです。アプリの主要セクション(ホーム、検索、通知、マイページなど)へワンタップで移動できるのが特徴です。親指が届きやすい下端に置くことで片手操作に強く、現在のセクションがハイライトされるため迷いません。InstagramやX、Apple純正アプリなど、ほとんどのモバイルアプリで採用されている定番パターンです。',
      descEn: 'A primary section switcher fixed at the bottom. Standard for iOS/Android.',
      detailEn: 'A tab bar sits permanently at the bottom of a mobile app, showing three to five icon-and-label tabs for the app\'s main sections — home, search, notifications, profile, and the like. One tap jumps between top-level destinations, and the currently active tab is highlighted so users never get lost. Placing it at the bottom keeps it within easy thumb reach for one-handed use. It is the default pattern in almost every modern mobile app, from Instagram and X to Apple\'s own system apps.',
      code: `/* Inspired by Instagram */
<nav class="ui-tabbar" aria-label="Instagram bottom nav">
  <button type="button" class="ui-tabbar__item ui-tabbar__item--active" aria-label="Home">
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>
  </button>
  <button type="button" class="ui-tabbar__item" aria-label="Search">
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
  </button>
  <button type="button" class="ui-tabbar__item" aria-label="Reels">
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="m10 8 6 4-6 4z" fill="currentColor"/></svg>
  </button>
  <button type="button" class="ui-tabbar__item" aria-label="Shop">
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h18l-2 12H5z"/><path d="M8 8a4 4 0 0 1 8 0"/></svg>
  </button>
  <button type="button" class="ui-tabbar__item" aria-label="Profile">
    <span class="ui-tabbar__avatar"></span>
  </button>
</nav>

<style>
  .ui-tabbar{display:flex;justify-content:space-around;align-items:center;max-width:420px;padding:10px 12px 14px;background:#000;border-top:1px solid #262626;font-family:-apple-system,system-ui,sans-serif}
  .ui-tabbar__item{flex:1;display:flex;justify-content:center;align-items:center;padding:6px 0;background:transparent;border:0;cursor:pointer;color:#fff;opacity:.65;transition:.15s}
  .ui-tabbar__item:hover{opacity:1}
  .ui-tabbar__item--active{opacity:1}
  .ui-tabbar__avatar{width:26px;height:26px;border-radius:50%;background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);border:2px solid #fff}
</style>

<script>
  document.querySelectorAll('.ui-tabbar__item').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.ui-tabbar__item').forEach(b=>b.classList.remove('ui-tabbar__item--active'));
      btn.classList.add('ui-tabbar__item--active');
    });
  });
</script>`,
    },
    {
      name: 'Sidebar Navigation',
      nameJa: 'サイドバーナビ',
      desc: '画面左側に常時表示されるナビゲーション。デスクトップ管理画面の定番。',
      detail: 'サイドバーナビは、デスクトップ画面の左側に縦に固定されるナビゲーション領域で、メイン画面と並行して常に表示されます。管理画面、Slack、Notion、GmailなどのSaaSで定番の構造で、多数のメニュー項目をカテゴリ別に整理できるのが強みです。現在表示しているページがハイライトされ、アイコン+ラベルや折りたたみ式で省スペース化することもできます。情報量の多い業務系アプリと相性が良いパターンです。',
      descEn: 'Always-visible navigation on the left side. Standard for desktop admin panels.',
      detailEn: 'A sidebar navigation is a vertical strip pinned to the left of a desktop screen, visible at all times alongside the main content. It is a staple of SaaS dashboards and tools like Slack, Notion, and Gmail, where it groups many menu items into clear categories. The currently selected page is highlighted, and many sidebars can be collapsed to icons to save space. It is the natural choice for information-heavy work apps where users jump between many sections.',
      code: `/* Inspired by Linear */
<aside class="ui-sidebar">
  <div class="ui-sidebar__brand">
    <span class="ui-sidebar__logo">L</span>
    <span>Acme Inc</span>
    <span class="ui-sidebar__kbd">⌘K</span>
  </div>
  <nav class="ui-sidebar__nav">
    <a href="#" class="ui-sidebar__link"><span>⊙</span>Inbox<em>3</em></a>
    <a href="#" class="ui-sidebar__link"><span>◇</span>My issues</a>
    <a href="#" class="ui-sidebar__link"><span>◐</span>Views</a>
    <div class="ui-sidebar__group">Workspace</div>
    <a href="#" class="ui-sidebar__link ui-sidebar__link--active"><span>▸</span>Projects</a>
    <a href="#" class="ui-sidebar__link"><span>◦</span>Roadmap</a>
    <a href="#" class="ui-sidebar__link"><span>◆</span>Cycles</a>
    <div class="ui-sidebar__group">Teams</div>
    <a href="#" class="ui-sidebar__link"><span class="dot" style="background:#5e6ad2"></span>Engineering</a>
    <a href="#" class="ui-sidebar__link"><span class="dot" style="background:#eb5757"></span>Design</a>
  </nav>
</aside>

<style>
  .ui-sidebar{width:240px;height:420px;padding:8px;background:#08090a;border:1px solid #1f2023;border-radius:10px;font-family:'Inter',-apple-system,sans-serif;display:flex;flex-direction:column;gap:2px;color:#b4b8bf}
  .ui-sidebar__brand{display:flex;align-items:center;gap:8px;padding:8px 10px;font-weight:600;font-size:13px;color:#f7f8f8}
  .ui-sidebar__logo{width:20px;height:20px;border-radius:5px;background:#5e6ad2;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700}
  .ui-sidebar__kbd{margin-left:auto;padding:2px 6px;border:1px solid #2a2b30;border-radius:4px;font-size:10px;color:#62656c}
  .ui-sidebar__nav{display:flex;flex-direction:column;gap:1px}
  .ui-sidebar__group{padding:14px 10px 6px;font-size:11px;font-weight:500;color:#62656c;letter-spacing:.02em}
  .ui-sidebar__link{display:flex;align-items:center;gap:10px;padding:5px 10px;border-radius:6px;text-decoration:none;color:#b4b8bf;font-size:13px;font-weight:450;transition:.1s}
  .ui-sidebar__link span{display:inline-flex;width:14px;justify-content:center;font-size:12px;color:#62656c}
  .ui-sidebar__link .dot{width:8px;height:8px;border-radius:50%}
  .ui-sidebar__link em{margin-left:auto;font-style:normal;font-size:11px;color:#62656c;background:#1f2023;padding:1px 6px;border-radius:8px}
  .ui-sidebar__link:hover{background:#1a1b1e;color:#f7f8f8}
  .ui-sidebar__link--active{background:#1f2023;color:#f7f8f8}
</style>`,
    },
    {
      name: 'Mega Menu',
      nameJa: 'メガメニュー',
      desc: 'ホバーで大きなパネルが展開され、多数のリンクをカテゴリごとに表示する。',
      detail: 'メガメニューは、グローバルナビの項目にマウスを乗せると、画面横いっぱいの大きなパネルが展開して、その配下のリンクをカテゴリごとに一覧表示するUIです。ECサイトの「カテゴリ一覧」や、企業サイトの「製品」「サービス」など、リンクが多すぎて従来のドロップダウンに収まらないケースで使われます。リンクを列ごとに整理し、画像や説明文を添えることで「探す」ではなく「眺めて選ぶ」体験を実現できます。',
      descEn: 'A large panel that expands on hover, displaying categorized links.',
      detailEn: 'A mega menu is an expansive panel that opens when you hover over a top-level nav item, displaying a wide grid of links grouped by category. It is common on e-commerce sites with vast product hierarchies and on corporate sites where "Products" or "Services" branches into many sublinks too numerous for a normal dropdown. By arranging links in columns and optionally adding images or short descriptions, it turns browsing into a visual experience rather than a hunt through nested menus.',
      code: `/* Inspired by Nike */
<nav class="ui-mega">
  <div class="ui-mega__bar">
    <span class="ui-mega__logo">✓</span>
    <a href="#" class="ui-mega__top">New & Featured</a>
    <a href="#" class="ui-mega__top ui-mega__top--hot">Men</a>
    <a href="#" class="ui-mega__top">Women</a>
    <a href="#" class="ui-mega__top">Kids</a>
    <a href="#" class="ui-mega__top">Sale</a>
  </div>
  <div class="ui-mega__panel">
    <div class="ui-mega__col">
      <h4>Featured</h4>
      <a href="#">New Releases</a><a href="#">Best Sellers</a><a href="#">SNKRS Launch</a><a href="#">Member Exclusive</a>
    </div>
    <div class="ui-mega__col">
      <h4>Shoes</h4>
      <a href="#">All Shoes</a><a href="#">Lifestyle</a><a href="#">Jordan</a><a href="#">Running</a><a href="#">Basketball</a>
    </div>
    <div class="ui-mega__col">
      <h4>Clothing</h4>
      <a href="#">All Clothing</a><a href="#">Tops & T-Shirts</a><a href="#">Shorts</a><a href="#">Hoodies</a><a href="#">Pants</a>
    </div>
    <div class="ui-mega__col">
      <h4>Accessories</h4>
      <a href="#">Bags & Backpacks</a><a href="#">Hats & Headwear</a><a href="#">Socks</a><a href="#">Sunglasses</a>
    </div>
  </div>
</nav>

<style>
  .ui-mega{position:relative;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background:#fff;border:1px solid #e5e5e5;border-radius:0;width:760px}
  .ui-mega__bar{display:flex;align-items:center;gap:24px;padding:14px 24px;border-bottom:1px solid #e5e5e5}
  .ui-mega__logo{font-size:22px;font-weight:900;color:#111;margin-right:8px}
  .ui-mega__top{font-size:15px;font-weight:500;color:#111;text-decoration:none;padding:6px 0;border-bottom:2px solid transparent}
  .ui-mega__top:hover{border-bottom-color:#111}
  .ui-mega__top--hot{font-weight:700}
  .ui-mega__panel{display:none;grid-template-columns:repeat(4,1fr);gap:32px;padding:28px 24px 32px}
  .ui-mega:hover .ui-mega__panel{display:grid}
  .ui-mega__col h4{margin:0 0 14px;font-size:15px;font-weight:500;color:#111}
  .ui-mega__col a{display:block;padding:4px 0;color:#757575;text-decoration:none;font-size:14px}
  .ui-mega__col a:hover{color:#111}
</style>`,
    },
    {
      name: 'Infinite Scroll',
      nameJa: '無限スクロール',
      desc: 'スクロール末尾到達時に自動的にコンテンツを追加読み込みする。',
      detail: '無限スクロールは、ページの一番下に到達したタイミングで自動的に次のコンテンツを読み込み、ページ送りなしで延々と閲覧できる仕組みです。TwitterやInstagram、TikTokのフィードなど、ユーザーが「眺めて発見する」体験に向いています。ページネーションのようなクリック手間がなく没入感が高い一方、フッターに到達できない・特定の場所に戻りにくいといった欠点もあるため、ECサイトでは「もっと見る」ボタン併用が推奨されます。',
      descEn: 'Automatically loads more content when scrolling to the bottom.',
      detailEn: 'Infinite scroll automatically fetches the next chunk of content the moment the user reaches the bottom, so the feed extends endlessly without page breaks. It is ideal for "browse and discover" experiences like Twitter, Instagram, and TikTok feeds where engagement and immersion matter. The trade-off is that the footer becomes unreachable and it is hard to jump back to a specific spot, so e-commerce sites often combine it with a "Load more" button instead.',
      code: `/* Inspired by X (Twitter) */
<div class="ui-infinite" id="infList">
  <div class="ui-infinite__post">
    <div class="ui-infinite__avatar" style="background:#1d9bf0"></div>
    <div class="ui-infinite__body">
      <div class="ui-infinite__head"><b>Elon Musk</b><span>@elonmusk · 2h</span></div>
      <p>Mars, here we come!!</p>
      <div class="ui-infinite__act"><span>💬 4.2K</span><span>🔁 18K</span><span>♡ 92K</span></div>
    </div>
  </div>
  <div class="ui-infinite__post">
    <div class="ui-infinite__avatar" style="background:#7856ff"></div>
    <div class="ui-infinite__body">
      <div class="ui-infinite__head"><b>Vercel</b><span>@vercel · 5h</span></div>
      <p>Next.js 15 is here. Faster builds, better DX.</p>
      <div class="ui-infinite__act"><span>💬 124</span><span>🔁 2.1K</span><span>♡ 8.7K</span></div>
    </div>
  </div>
  <div class="ui-infinite__sentinel" id="infSentinel"><span class="ui-infinite__spin"></span></div>
</div>

<style>
  .ui-infinite{height:360px;overflow-y:auto;background:#000;color:#e7e9ea;font-family:'Segoe UI',system-ui,sans-serif;max-width:380px;border:1px solid #2f3336}
  .ui-infinite__post{display:flex;gap:12px;padding:12px 16px;border-bottom:1px solid #2f3336}
  .ui-infinite__avatar{flex:0 0 40px;width:40px;height:40px;border-radius:50%}
  .ui-infinite__body{flex:1;min-width:0}
  .ui-infinite__head{font-size:14px;display:flex;gap:6px}
  .ui-infinite__head b{color:#e7e9ea}
  .ui-infinite__head span{color:#71767b}
  .ui-infinite__body p{margin:2px 0 8px;font-size:14px;line-height:1.4}
  .ui-infinite__act{display:flex;gap:24px;color:#71767b;font-size:12px}
  .ui-infinite__sentinel{padding:18px;text-align:center}
  .ui-infinite__spin{display:inline-block;width:22px;height:22px;border:2px solid #2f3336;border-top-color:#1d9bf0;border-radius:50%;animation:uiSpin .8s linear infinite}
  @keyframes uiSpin{to{transform:rotate(360deg)}}
</style>

<script>
  (function(){
    const list=document.getElementById('infList'),sentinel=document.getElementById('infSentinel');
    const names=[['GitHub','@github','#24292f','Just shipped Copilot Workspace previews.'],['Figma','@figma','#a259ff','Dev Mode just got smarter with AI assist.'],['Linear','@linear','#5e6ad2','Cycle 42 retro: 89% completion. Keep shipping.'],['Stripe','@stripe','#635bff','Payment Links now support subscriptions.']];
    let i=0,loading=false;
    const io=new IntersectionObserver(es=>{
      es.forEach(e=>{
        if(e.isIntersecting && !loading && i<names.length){
          loading=true;
          setTimeout(()=>{
            const n=names[i++];
            const d=document.createElement('div');d.className='ui-infinite__post';
            d.innerHTML='<div class="ui-infinite__avatar" style="background:'+n[2]+'"></div><div class="ui-infinite__body"><div class="ui-infinite__head"><b>'+n[0]+'</b><span>'+n[1]+' · '+(i*3)+'h</span></div><p>'+n[3]+'</p><div class="ui-infinite__act"><span>💬 '+(i*42)+'</span><span>🔁 '+(i*210)+'</span><span>♡ '+(i*930)+'</span></div></div>';
            list.insertBefore(d,sentinel);loading=false;
            if(i>=names.length)sentinel.innerHTML='<span style="color:#71767b;font-size:13px">You\\'re all caught up</span>';
          },600);
        }
      });
    },{root:list});
    io.observe(sentinel);
  })();
</script>`,
    },
    {
      name: 'Sticky Header',
      nameJa: '固定ヘッダー',
      desc: 'スクロールしても画面上部に固定表示されるヘッダー。',
      detail: '固定ヘッダー(スティッキーヘッダー)は、ページをどれだけ下にスクロールしても画面の上端に常に張り付き続けるヘッダーです。ロゴ、グローバルナビ、検索バー、カートアイコンなど、いつでもアクセスしたい要素を入れておくことで、長いページでもユーザーが上端まで戻る必要がなくなります。コンテンツ閲覧中にスクロール量に応じて高さを縮めたり、影を付けて存在感を強調したりする工夫もよく行われます。',
      descEn: 'A header that stays fixed at the top while scrolling.',
      detailEn: 'A sticky header clings to the top of the viewport no matter how far you scroll down the page. By keeping the logo, global nav, search box, and cart icon always within reach, it saves users from scrolling all the way back up on long pages. Many sites refine the effect by shrinking the header\'s height as the user scrolls or adding a subtle shadow once it leaves the top of the document, making the transition feel deliberate.',
      code: `/* Inspired by Medium */
<div class="ui-sticky-wrap">
  <header class="ui-sticky-header">
    <div class="ui-sticky-header__l">
      <strong>Medium</strong>
      <input aria-label="Search" class="ui-sticky-header__search" placeholder="Search"/>
    </div>
    <div class="ui-sticky-header__r">
      <a href="#">Write</a>
      <span class="ui-sticky-header__avatar"></span>
    </div>
  </header>
  <article class="ui-sticky-body">
    <h1>The art of small habits</h1>
    <div class="ui-sticky-byline">
      <span class="ui-sticky-byline__av"></span>
      <div><b>James Clear</b><span> · 6 min read · Mar 12</span></div>
    </div>
    <p>Habits are the compound interest of self-improvement. Tiny changes, repeated daily, add up to remarkable results over years.</p>
    <p>Imagine getting just one percent better at something every day for a year. By day three hundred and sixty-five, you would be thirty-seven times better than when you started.</p>
    <p>The truth is, most people overestimate what they can do in a single day and underestimate what they can accomplish over months and years of consistent effort.</p>
  </article>
</div>

<style>
  .ui-sticky-wrap{height:360px;overflow-y:auto;background:#fff;font-family:'Charter','Georgia',serif;max-width:460px;border:1px solid #e6e6e6}
  .ui-sticky-header{position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background:#fff;border-bottom:1px solid #f2f2f2;z-index:5;font-family:'Helvetica Neue',sans-serif}
  .ui-sticky-header__l{display:flex;align-items:center;gap:14px}
  .ui-sticky-header strong{font-size:22px;color:#000;font-family:'Charter',serif;font-weight:700}
  .ui-sticky-header__search{border:0;background:#f9f9f9;border-radius:99px;padding:8px 14px;font-size:13px;width:120px;outline:0}
  .ui-sticky-header__r{display:flex;align-items:center;gap:14px}
  .ui-sticky-header__r a{font-size:13px;color:#242424;text-decoration:none}
  .ui-sticky-header__avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#ffb347,#ffcc33)}
  .ui-sticky-body{padding:24px 28px;color:#242424;line-height:1.7}
  .ui-sticky-body h1{font-size:24px;font-weight:700;margin:0 0 14px;letter-spacing:-.02em}
  .ui-sticky-byline{display:flex;align-items:center;gap:10px;margin-bottom:20px;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#6b6b6b}
  .ui-sticky-byline__av{width:32px;height:32px;border-radius:50%;background:#1a8917}
  .ui-sticky-byline b{color:#242424}
  .ui-sticky-body p{font-size:18px;margin:0 0 18px}
</style>`,
    },
    {
      name: 'Segmented Control',
      nameJa: 'セグメンテッドコントロール',
      desc: '2〜5個の排他的選択肢を横並びボタンで切り替える。タブの軽量版。',
      detail: 'セグメンテッドコントロールは、横一列に並んだ2〜5個のボタンで、そのうちひとつだけを選択できる排他的なUIです。iOS設定アプリの「ライト/ダーク」表示切替や、地図アプリの「標準/航空写真/交通機関」切替などでよく見られます。タブよりも視覚的に軽くスペースを取らず、ラジオボタンよりもタッチに馴染むため、トグル的に表示モードを切り替える小さな選択肢に向いています。',
      descEn: 'A row of 2–5 mutually exclusive buttons. Lightweight version of tabs.',
      detailEn: 'A segmented control is a row of two to five mutually exclusive buttons where exactly one is selected at a time. You see it in iOS Settings for toggling between Light and Dark, or in Maps for switching between Standard, Satellite, and Transit views. It is lighter and more compact than tabs, and more touch-friendly than radio buttons, which makes it a great fit for small mode-switching choices like view toggles or filter scopes.',
      code: `/* Inspired by X (Twitter) For You / Following */
<div class="ui-seg-wrap">
  <div class="ui-seg" role="tablist">
    <button type="button" class="ui-seg__btn ui-seg__btn--active" role="tab" aria-selected="true">For you</button>
    <button type="button" class="ui-seg__btn" role="tab" aria-selected="false">Following</button>
    <button type="button" class="ui-seg__btn" role="tab" aria-selected="false">Tech</button>
    <button type="button" class="ui-seg__btn" role="tab" aria-selected="false">Sports</button>
  </div>
</div>

<style>
  .ui-seg-wrap{background:rgba(0,0,0,.65);backdrop-filter:blur(12px);border-bottom:1px solid #2f3336;max-width:440px;font-family:'Segoe UI',system-ui,sans-serif}
  .ui-seg{display:flex}
  .ui-seg__btn{flex:1;position:relative;padding:16px 12px;background:transparent;border:0;font:500 15px 'Segoe UI',sans-serif;color:#71767b;cursor:pointer;transition:.15s}
  .ui-seg__btn:hover{background:rgba(231,233,234,.04);color:#e7e9ea}
  .ui-seg__btn--active{color:#e7e9ea;font-weight:700}
  .ui-seg__btn--active::after{content:"";position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:56px;height:4px;background:#1d9bf0;border-radius:2px}
</style>

<script>
  document.querySelectorAll('.ui-seg__btn').forEach(b=>{
    b.addEventListener('click',()=>{
      b.parentElement.querySelectorAll('.ui-seg__btn').forEach(o=>{o.classList.remove('ui-seg__btn--active');o.setAttribute('aria-selected','false')});
      b.classList.add('ui-seg__btn--active');b.setAttribute('aria-selected','true');
    });
  });
</script>`,
    },
    {
      name: 'Stepper / Wizard',
      nameJa: 'ステッパー',
      desc: '複数ステップのプロセスを順番に案内するナビゲーション。',
      detail: 'ステッパー(ウィザード)は、長い入力やセットアップを「①基本情報 → ②詳細 → ③確認」のように複数ページに分割し、ひとつずつ順番にガイドしていく仕組みです。一度に出す情報量を絞れるため、ユーザーの心理的負担が小さく完遂率が上がります。会員登録、決済フロー、初期セットアップなど、項目が多くて一画面に収まらない手続きで広く採用されます。ステップ表示と「次へ/戻る」のセットで構成するのが定番です。',
      descEn: 'Step-by-step navigation guiding users through a multi-step process.',
      detailEn: 'A stepper (or wizard) splits a long form or setup into a sequence like "1) Basics → 2) Details → 3) Confirm" and guides the user through one step at a time. By showing only a small amount of information per screen, it reduces cognitive load and improves completion rates. It is the go-to pattern for sign-ups, checkout flows, and onboarding where dozens of fields would otherwise overwhelm a single page. A progress indicator plus Next and Back buttons form its essential building blocks.',
      code: `/* Inspired by Stripe */
<div class="ui-wiz" id="wiz">
  <aside class="ui-wiz__side">
    <div class="ui-wiz__logo">stripe</div>
    <ol class="ui-wiz__steps">
      <li class="active"><span>1</span>Business details</li>
      <li><span>2</span>Verify identity</li>
      <li><span>3</span>Add bank account</li>
      <li><span>4</span>Review</li>
    </ol>
  </aside>
  <section class="ui-wiz__pane">
    <h3>Tell us about your business</h3>
    <p class="ui-wiz__sub">This information helps us comply with regulations.</p>
    <label>Legal business name<input value="Acme, Inc." readonly/></label>
    <label>Country<input value="United States" readonly/></label>
    <div class="ui-wiz__nav">
      <button type="button" class="ui-wiz__btn ghost" id="wizPrev" disabled>Back</button>
      <button type="button" class="ui-wiz__btn primary" id="wizNext">Continue →</button>
    </div>
  </section>
</div>

<style>
  .ui-wiz{display:flex;max-width:540px;border-radius:12px;background:#fff;font-family:-apple-system,'Segoe UI',sans-serif;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.04)}
  .ui-wiz__side{flex:0 0 200px;padding:24px 20px;background:linear-gradient(180deg,#635bff 0%,#7a73ff 100%);color:#fff}
  .ui-wiz__logo{font-size:20px;font-weight:700;letter-spacing:-.02em;margin-bottom:32px}
  .ui-wiz__steps{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
  .ui-wiz__steps li{display:flex;align-items:center;gap:10px;font-size:13px;opacity:.65;font-weight:500}
  .ui-wiz__steps li span{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.18);font-size:11px;font-weight:600}
  .ui-wiz__steps li.active{opacity:1}
  .ui-wiz__steps li.active span{background:#fff;color:#635bff}
  .ui-wiz__pane{flex:1;padding:28px 24px}
  .ui-wiz__pane h3{margin:0 0 6px;font-size:17px;font-weight:600;color:#1a1f36}
  .ui-wiz__sub{margin:0 0 20px;font-size:13px;color:#697386}
  .ui-wiz__pane label{display:block;font-size:12px;color:#697386;font-weight:500;margin-bottom:14px}
  .ui-wiz__pane input{display:block;margin-top:4px;width:100%;padding:8px 10px;border:1px solid #e3e8ee;border-radius:6px;font-size:14px;color:#1a1f36;box-shadow:0 1px 1px rgba(0,0,0,.03);box-sizing:border-box}
  .ui-wiz__nav{display:flex;justify-content:space-between;margin-top:24px}
  .ui-wiz__btn{padding:8px 16px;border-radius:6px;border:0;font:500 13px -apple-system,sans-serif;cursor:pointer}
  .ui-wiz__btn.ghost{background:#fff;color:#1a1f36;border:1px solid #e3e8ee}
  .ui-wiz__btn.primary{background:#635bff;color:#fff;box-shadow:0 1px 3px rgba(99,91,255,.4)}
  .ui-wiz__btn:disabled{opacity:.4;cursor:not-allowed}
</style>

<script>
  (function(){
    const sb=document.getElementById('wiz');
    const items=sb.querySelectorAll('.ui-wiz__steps li');
    const prev=document.getElementById('wizPrev'),next=document.getElementById('wizNext');
    let step=0;
    next.onclick=()=>{if(step<items.length-1){items[step].classList.remove('active');step++;items[step].classList.add('active');prev.disabled=false;if(step===items.length-1)next.textContent='Submit'}};
    prev.onclick=()=>{if(step>0){items[step].classList.remove('active');step--;items[step].classList.add('active');next.textContent='Continue →';if(step===0)prev.disabled=true}};
  })();
</script>`,
    },
    {
      name: 'Anchor Navigation',
      nameJa: 'アンカーナビ',
      desc: 'ページ内の各セクションへスムーズスクロールで移動するリンク群。',
      detail: 'アンカーナビは、同じページ内のセクションへジャンプするためのリンク集で、クリックするとスムーズスクロールで該当箇所まで移動します。長文記事の目次、ランディングページの「特徴 / 料金 / FAQ」ナビ、ドキュメントの章立て一覧などで使われます。スクロール位置に応じて現在地のリンクをハイライトする「スクロールスパイ」機能を組み合わせると、長いページ内での迷子を防げて読みやすさが大きく向上します。',
      descEn: 'Links that smooth-scroll to sections within the same page.',
      detailEn: 'Anchor navigation provides links that jump to sections within the same page, scrolling smoothly to the target. It powers article tables of contents, landing-page navs that hop between "Features / Pricing / FAQ", and sidebars in long documentation pages. Pairing it with a scroll-spy that highlights the link matching the current scroll position helps users keep their bearings on a long page and makes the content far easier to read.',
      code: `/* Inspired by Apple */
<div class="ui-anchor-wrap">
  <nav class="ui-anchor">
    <span class="ui-anchor__title">MacBook Pro</span>
    <a href="#sec1" class="active">Overview</a>
    <a href="#sec2">Design</a>
    <a href="#sec3">Performance</a>
    <a href="#sec4">Tech Specs</a>
    <button type="button" class="ui-anchor__buy">Buy</button>
  </nav>
  <div class="ui-anchor-body">
    <section id="sec1"><h3>Overview</h3><p>Mind-blowing. Head-turning. The most advanced Mac laptops ever.</p></section>
    <section id="sec2"><h3>Design</h3><p>Crafted from a single aluminum block. Now in Space Black.</p></section>
    <section id="sec3"><h3>Performance</h3><p>M3 Max blasts through workloads with up to 16-core CPU.</p></section>
    <section id="sec4"><h3>Tech Specs</h3><p>From 14" Liquid Retina XDR to 128GB unified memory.</p></section>
  </div>
</div>

<style>
  .ui-anchor-wrap{max-width:520px;font-family:-apple-system,'SF Pro Display',sans-serif;background:#fff}
  .ui-anchor{position:sticky;top:0;display:flex;align-items:center;gap:24px;padding:14px 22px;background:rgba(251,251,253,.85);backdrop-filter:saturate(180%) blur(20px);border-bottom:1px solid rgba(0,0,0,.08);z-index:5}
  .ui-anchor__title{font-size:21px;font-weight:600;color:#1d1d1f;letter-spacing:-.02em}
  .ui-anchor a{color:#1d1d1f;text-decoration:none;font:400 12px -apple-system,sans-serif;opacity:.85;transition:.15s}
  .ui-anchor a:hover{opacity:1}
  .ui-anchor a.active{opacity:1;font-weight:500}
  .ui-anchor__buy{margin-left:auto;padding:5px 14px;background:#0071e3;color:#fff;border:0;border-radius:980px;font:400 12px -apple-system,sans-serif;cursor:pointer}
  .ui-anchor-body{height:300px;overflow-y:auto;scroll-behavior:smooth;background:#fff}
  .ui-anchor-body section{padding:48px 22px;border-bottom:1px solid #f5f5f7}
  .ui-anchor-body h3{margin:0 0 10px;font-size:32px;font-weight:600;color:#1d1d1f;letter-spacing:-.02em}
  .ui-anchor-body p{margin:0;font-size:16px;color:#1d1d1f;line-height:1.5}
</style>

<script>
  (function(){
    const links=document.querySelectorAll('.ui-anchor a');
    const body=document.querySelector('.ui-anchor-body');
    links.forEach(a=>{
      a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t) body.scrollTo({top:t.offsetTop-body.offsetTop,behavior:'smooth'})});
    });
    const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))})},{root:body,threshold:.5});
    document.querySelectorAll('.ui-anchor-body section').forEach(s=>io.observe(s));
  })();
</script>`,
    },
    {
      name: 'FAB',
      nameJa: 'フローティングアクションボタン',
      desc: '画面上に浮遊する円形のメインアクションボタン。',
      detail: 'FAB(フローティングアクションボタン)は、画面の右下などに常に浮かんで表示される、円形のひときわ目立つボタンです。Googleが提唱したマテリアルデザインの代表的なパターンで、「新規作成」「投稿」「メッセージ送信」など、その画面で最も重要な単一アクションを担います。常に視界に入り、片手の親指で押しやすい位置にあるため、ユーザーは思い立ったらすぐに行動を起こせます。Gmailの「作成」やTwitterの「ツイート」ボタンが典型例です。',
      descEn: 'A floating circular button for the primary action.',
      detailEn: 'A FAB (floating action button) is a prominent circular button that hovers over the screen, typically anchored to the bottom-right corner. Introduced by Google\'s Material Design, it represents the single most important action on a screen — "Compose", "New post", or "Send message". Because it always stays visible and sits within easy thumb reach, users can act on it the instant inspiration strikes. Gmail\'s Compose button and X\'s Post button are textbook examples.',
      code: `/* Inspired by Gmail */
<div class="ui-fab-stage">
  <div class="ui-fab-mail">
    <div class="ui-fab-mail__row"><span class="ui-fab-mail__star">☆</span><b>Google</b><span class="ui-fab-mail__sub">Security alert · 9:42 AM</span></div>
    <div class="ui-fab-mail__row"><span class="ui-fab-mail__star">☆</span><b>Notion</b><span class="ui-fab-mail__sub">3 updates this week · 8:15 AM</span></div>
    <div class="ui-fab-mail__row"><span class="ui-fab-mail__star ui-fab-mail__star--on">★</span><b>GitHub</b><span class="ui-fab-mail__sub">Pull request #482 merged · Yesterday</span></div>
    <div class="ui-fab-mail__row"><span class="ui-fab-mail__star">☆</span><b>Figma</b><span class="ui-fab-mail__sub">Design system v2 shared · Tue</span></div>
  </div>
  <button type="button" class="ui-fab" aria-label="Compose" onclick="alert('Compose')">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1f1f1f" stroke-width="2" stroke-linecap="round"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/><path d="m14.06 6.19 3.75 3.75 2.07-2.07a1.5 1.5 0 0 0 0-2.12l-1.63-1.63a1.5 1.5 0 0 0-2.12 0z"/></svg>
    <span>Compose</span>
  </button>
</div>

<style>
  .ui-fab-stage{position:relative;width:360px;height:280px;background:#f6f8fc;font-family:'Google Sans','Roboto',sans-serif;overflow:hidden;border-radius:12px}
  .ui-fab-mail{padding:8px}
  .ui-fab-mail__row{display:flex;align-items:center;gap:12px;padding:12px 14px;background:#fff;border-bottom:1px solid #eef1f5;font-size:13px;color:#202124}
  .ui-fab-mail__star{color:#dadce0;font-size:16px}
  .ui-fab-mail__star--on{color:#f9ab00}
  .ui-fab-mail__sub{color:#5f6368;margin-left:auto;font-size:12px}
  .ui-fab{position:absolute;left:16px;bottom:16px;display:flex;align-items:center;gap:10px;padding:14px 22px 14px 16px;border-radius:16px;background:#c2e7ff;color:#001d35;border:0;font:500 14px 'Google Sans',sans-serif;cursor:pointer;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);transition:.2s}
  .ui-fab svg{stroke:#001d35}
  .ui-fab:hover{background:#b3deff;box-shadow:0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)}
</style>`,
    },
    {
      name: 'Context Menu',
      nameJa: 'コンテキストメニュー',
      desc: '右クリックで表示されるアクションメニュー。',
      detail: 'コンテキストメニューは、要素を右クリック(またはモバイルでは長押し)した際に、その場に現れる小さなアクションメニューです。「コピー」「貼り付け」「削除」など、対象に応じた操作だけを文脈的に表示するのが特徴で、PCのOSやファイラーで標準的に使われます。NotionやFigmaなどの本格的なWebアプリでも採用されることが増えており、右クリック=ショートカット的な操作と認識されている熟練ユーザーの作業効率を高めます。',
      descEn: 'An action menu displayed on right-click.',
      detailEn: 'A context menu pops up where the cursor is when the user right-clicks (or long-presses on mobile), offering only the actions relevant to whatever was clicked — Copy, Paste, Delete, and so on. It is the standard interaction across desktop operating systems and file managers, and is increasingly adopted by serious web apps like Notion and Figma. Power users associate right-clicking with shortcuts, so a thoughtful context menu can dramatically speed up their workflow.',
      code: `/* Inspired by macOS Finder */
<div class="ui-ctx-area" id="ctxArea">
  <div class="ui-ctx-file"><span>📄</span>Project-spec.pdf</div>
  <div class="ui-ctx-file ui-ctx-file--sel"><span>🖼</span>hero-banner.png</div>
  <div class="ui-ctx-file"><span>📁</span>Assets</div>
  <div class="ui-ctx-hint">Right-click on a file</div>
</div>
<ul class="ui-ctx-menu" id="ctxMenu" role="menu" hidden>
  <li role="menuitem">Open</li>
  <li role="menuitem">Open With<span class="ui-ctx-arrow">›</span></li>
  <li class="sep"></li>
  <li role="menuitem">Get Info</li>
  <li role="menuitem">Rename</li>
  <li role="menuitem">Compress "hero-banner.png"</li>
  <li role="menuitem">Duplicate</li>
  <li class="sep"></li>
  <li role="menuitem">Copy<span class="ui-ctx-kbd">⌘C</span></li>
  <li role="menuitem">Share<span class="ui-ctx-arrow">›</span></li>
  <li class="sep"></li>
  <li role="menuitem" class="danger">Move to Trash</li>
</ul>

<style>
  .ui-ctx-area{position:relative;width:320px;height:200px;padding:12px;background:linear-gradient(180deg,#f6f5f3 0%,#ecebe9 100%);border-radius:10px;font:13px -apple-system,'SF Pro Text',sans-serif;color:#1d1d1f;user-select:none}
  .ui-ctx-file{display:flex;align-items:center;gap:10px;padding:5px 8px;border-radius:4px;margin-bottom:1px}
  .ui-ctx-file span{font-size:18px}
  .ui-ctx-file--sel{background:#0a84ff;color:#fff}
  .ui-ctx-hint{position:absolute;left:0;right:0;bottom:8px;text-align:center;font-size:11px;color:#86868b}
  .ui-ctx-menu{position:fixed;list-style:none;margin:0;padding:5px;min-width:220px;background:rgba(245,245,245,.92);backdrop-filter:blur(40px) saturate(200%);border:.5px solid rgba(0,0,0,.18);border-radius:8px;box-shadow:0 12px 40px rgba(0,0,0,.22),0 0 0 .5px rgba(0,0,0,.05);font:13px -apple-system,'SF Pro Text',sans-serif;z-index:50}
  .ui-ctx-menu li{display:flex;align-items:center;padding:4px 12px;border-radius:4px;cursor:default;color:#1d1d1f}
  .ui-ctx-menu li:hover:not(.sep){background:#0a84ff;color:#fff}
  .ui-ctx-menu li:hover .ui-ctx-kbd,.ui-ctx-menu li:hover .ui-ctx-arrow{color:#fff}
  .ui-ctx-menu .sep{height:1px;padding:0;margin:4px 8px;background:rgba(0,0,0,.1);pointer-events:none}
  .ui-ctx-menu .danger{color:#1d1d1f}
  .ui-ctx-kbd,.ui-ctx-arrow{margin-left:auto;color:#86868b;font-size:12px}
</style>

<script>
  (function(){
    const area=document.getElementById('ctxArea'),menu=document.getElementById('ctxMenu');
    area.addEventListener('contextmenu',e=>{e.preventDefault();menu.hidden=false;menu.style.left=e.clientX+'px';menu.style.top=e.clientY+'px'});
    document.addEventListener('click',()=>menu.hidden=true);
    menu.addEventListener('click',e=>{if(e.target.matches('[role=menuitem]')){menu.hidden=true}});
  })();
</script>`,
    },
    {
      name: 'Split Button',
      nameJa: 'スプリットボタン',
      desc: 'メインアクションとドロップダウンによる追加アクションを組み合わせたボタン。',
      detail: 'スプリットボタンは、ひとつのボタンが「メインアクション部」と「下矢印部」の2つに分割されているUIです。左側を押すと既定のアクション(例:「保存」)が即実行され、右側の▾を押すと「名前を付けて保存」「下書きとして保存」など関連する追加アクションのメニューが開きます。「いつもの操作」をワンタップで実行しつつ、稀に使うバリエーションもひとつにまとめられるため、ツールバーがすっきりするのが利点です。',
      descEn: 'Combines a main action with a dropdown for additional actions.',
      detailEn: 'A split button is a single control divided into two halves: a main action area and a small dropdown arrow. Click the left side and it instantly performs the default action ("Save"), while clicking the small arrow opens a menu of related variants like "Save As" or "Save Draft". This lets users execute the most common action with one tap while still tucking away the rare variants in the same control, keeping toolbars uncluttered.',
      code: `/* Inspired by Linear */
<div class="ui-split-stage">
  <div class="ui-split" id="splitBtn">
    <button type="button" class="ui-split__main"><span class="ui-split__icon">+</span>New issue</button>
    <button type="button" class="ui-split__caret" aria-label="More options" aria-haspopup="menu">
      <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3 4.5 3 3 3-3"/></svg>
    </button>
    <ul class="ui-split__menu" role="menu">
      <li role="menuitem"><span>New issue</span><kbd>C</kbd></li>
      <li role="menuitem"><span>New sub-issue</span><kbd>⇧ C</kbd></li>
      <li role="menuitem"><span>New from template</span><kbd>⌘ ⇧ C</kbd></li>
      <li class="sep"></li>
      <li role="menuitem"><span>Import issues…</span></li>
    </ul>
  </div>
</div>

<style>
  .ui-split-stage{padding:24px;background:#08090a;border-radius:10px;font-family:'Inter',-apple-system,sans-serif}
  .ui-split{position:relative;display:inline-flex;border-radius:6px;overflow:visible}
  .ui-split__main,.ui-split__caret{background:#5e6ad2;color:#fff;border:0;font:500 13px 'Inter',sans-serif;cursor:pointer;transition:.12s;height:30px}
  .ui-split__main{display:flex;align-items:center;gap:6px;padding:0 12px;border-radius:6px 0 0 6px}
  .ui-split__icon{font-size:14px;line-height:1}
  .ui-split__caret{padding:0 9px;border-left:1px solid rgba(0,0,0,.22);border-radius:0 6px 6px 0;display:flex;align-items:center}
  .ui-split__main:hover,.ui-split__caret:hover{background:#6e78dd}
  .ui-split__menu{position:absolute;top:calc(100% + 6px);right:0;min-width:230px;display:none;list-style:none;margin:0;padding:4px;background:#1c1d20;border:1px solid #2a2b30;border-radius:8px;box-shadow:0 12px 32px rgba(0,0,0,.5);z-index:10}
  .ui-split.open .ui-split__menu{display:block}
  .ui-split__menu li{display:flex;align-items:center;padding:6px 10px;border-radius:5px;cursor:pointer;font-size:13px;color:#d1d4dc}
  .ui-split__menu li kbd{margin-left:auto;font:11px 'Inter';color:#62656c;background:transparent;padding:0 4px}
  .ui-split__menu li:hover{background:#2a2b30;color:#f7f8f8}
  .ui-split__menu .sep{height:1px;padding:0;margin:4px 4px;background:#2a2b30;pointer-events:none}
</style>

<script>
  (function(){
    const sb=document.getElementById('splitBtn');
    sb.querySelector('.ui-split__caret').addEventListener('click',e=>{e.stopPropagation();sb.classList.toggle('open')});
    document.addEventListener('click',e=>{if(!sb.contains(e.target))sb.classList.remove('open')});
  })();
</script>`,
    },
    {
      name: 'Button Group',
      nameJa: 'ボタングループ',
      desc: '関連するアクションボタンを横並びで結合表示する。',
      detail: 'ボタングループは、関連性のある複数のボタンを隙間なく横に連結して表示するUIです。「左寄せ・中央寄せ・右寄せ」「太字・斜体・下線」のように、互いに近い意味を持つ操作をひとまとめにすることで、ユーザーは関係性を直感的に把握できます。エディタのツールバー、フィルター切替、ビュー切替などで広く使われ、選択状態を持つ場合は色や凹みで現在地を示すのが定番です。アイコンだけのコンパクトな構成も多く採用されます。',
      descEn: 'Related action buttons combined side by side.',
      detailEn: 'A button group glues several related buttons together side by side without gaps so they read as a single control. Pairings like "Left / Center / Right" alignment or "Bold / Italic / Underline" formatting let users perceive the relationship at a glance. You will find it on editor toolbars, filter switches, and view selectors. When one option can be active, color or an inset look signals the current state, and many groups use icon-only buttons to stay compact.',
      code: `/* Inspired by Figma */
<div class="ui-btng-stage">
  <div class="ui-btng-label">Align</div>
  <div class="ui-btng" role="group" aria-label="Horizontal align">
    <button type="button" class="ui-btng__btn ui-btng__btn--active" aria-pressed="true" title="Align left">
      <svg viewBox="0 0 16 16" width="14" height="14"><rect x="2" y="2" width="1.5" height="12" fill="currentColor"/><rect x="5" y="4" width="8" height="2" fill="currentColor"/><rect x="5" y="10" width="5" height="2" fill="currentColor"/></svg>
    </button>
    <button type="button" class="ui-btng__btn" aria-pressed="false" title="Align center">
      <svg viewBox="0 0 16 16" width="14" height="14"><rect x="7.25" y="2" width="1.5" height="12" fill="currentColor"/><rect x="4" y="4" width="8" height="2" fill="currentColor"/><rect x="5.5" y="10" width="5" height="2" fill="currentColor"/></svg>
    </button>
    <button type="button" class="ui-btng__btn" aria-pressed="false" title="Align right">
      <svg viewBox="0 0 16 16" width="14" height="14"><rect x="12.5" y="2" width="1.5" height="12" fill="currentColor"/><rect x="3" y="4" width="8" height="2" fill="currentColor"/><rect x="6" y="10" width="5" height="2" fill="currentColor"/></svg>
    </button>
  </div>
  <div class="ui-btng" role="group" aria-label="Vertical align">
    <button type="button" class="ui-btng__btn" aria-pressed="false" title="Top">⊤</button>
    <button type="button" class="ui-btng__btn ui-btng__btn--active" aria-pressed="true" title="Middle">▭</button>
    <button type="button" class="ui-btng__btn" aria-pressed="false" title="Bottom">⊥</button>
  </div>
</div>

<style>
  .ui-btng-stage{display:flex;align-items:center;gap:8px;padding:10px 14px;background:#2c2c2c;border-radius:8px;font-family:'Inter','SF Pro',-apple-system,sans-serif;width:fit-content;color:#fff}
  .ui-btng-label{font-size:11px;color:#b3b3b3;margin-right:4px}
  .ui-btng{display:inline-flex;background:#1e1e1e;border-radius:6px;padding:2px;gap:1px}
  .ui-btng__btn{display:inline-flex;align-items:center;justify-content:center;width:28px;height:24px;background:transparent;border:0;border-radius:4px;color:#cccccc;cursor:pointer;transition:.12s;font-size:12px}
  .ui-btng__btn:hover{background:#383838;color:#fff}
  .ui-btng__btn--active{background:#0d99ff;color:#fff}
  .ui-btng__btn--active:hover{background:#0d99ff;color:#fff}
</style>

<script>
  document.querySelectorAll('.ui-btng').forEach(g=>{
    g.querySelectorAll('.ui-btng__btn').forEach(b=>{
      b.addEventListener('click',()=>{
        g.querySelectorAll('.ui-btng__btn').forEach(o=>{o.classList.remove('ui-btng__btn--active');o.setAttribute('aria-pressed','false')});
        b.classList.add('ui-btng__btn--active');b.setAttribute('aria-pressed','true');
      });
    });
  });
</script>`,
    },
    {
      name: 'Swipe Actions',
      nameJa: 'スワイプアクション',
      desc: 'リスト項目を左右にスワイプして操作するモバイルパターン。',
      detail: 'スワイプアクションは、リスト項目を指で左右にスライドすると、その下から「アーカイブ」「削除」などのアクションボタンが顔を出すモバイルUIパターンです。Apple純正のメール、Gmail、LINEなどで採用され、画面に常時ボタンを置かなくても直感的に操作できるのが強みです。スワイプ方向と色で意味を伝える(右に緑=アーカイブ、左に赤=削除など)のが定番で、慣れたユーザーには素早く、知らないユーザーには探索の余地を残せる柔軟なパターンです。',
      descEn: 'Swipe list items left/right to perform actions on mobile.',
      detailEn: 'Swipe actions reveal hidden buttons — "Archive", "Delete", and the like — beneath a list row when the user drags it sideways with a finger. Apple Mail, Gmail, and LINE all use the pattern, and its strength is letting users act intuitively without buttons cluttering the screen. Convention pairs direction and color with meaning: swipe right with green for archive, left with red for delete. Experienced users get a fast shortcut while newcomers can still discover the feature when they explore.',
      code: `/* Inspired by iOS Mail */
<div class="ui-swipe-stage">
  <div class="ui-swipe-head">
    <span class="ui-swipe-back">‹ Mailboxes</span>
    <span class="ui-swipe-title">Inbox</span>
  </div>
  <ul class="ui-swipe">
    <li class="ui-swipe__row">
      <div class="ui-swipe__actions"><button type="button" class="flag">Flag</button><button type="button" class="del">Trash</button></div>
      <div class="ui-swipe__content" data-tx="0">
        <span class="ui-swipe__dot"></span>
        <div class="ui-swipe__msg"><strong>Apple</strong><span class="ui-swipe__time">9:41 AM</span><p class="ui-swipe__pre">Your receipt from Apple</p><p class="ui-swipe__pre ui-swipe__pre--lite">Thank you for your purchase. Order #W123456789…</p></div>
      </div>
    </li>
    <li class="ui-swipe__row">
      <div class="ui-swipe__actions"><button type="button" class="flag">Flag</button><button type="button" class="del">Trash</button></div>
      <div class="ui-swipe__content" data-tx="0">
        <span class="ui-swipe__dot"></span>
        <div class="ui-swipe__msg"><strong>Sarah Chen</strong><span class="ui-swipe__time">Yesterday</span><p class="ui-swipe__pre">Re: Design review notes</p><p class="ui-swipe__pre ui-swipe__pre--lite">Thanks for the detailed feedback — pushed v3 this morning.</p></div>
      </div>
    </li>
    <li class="ui-swipe__row">
      <div class="ui-swipe__actions"><button type="button" class="flag">Flag</button><button type="button" class="del">Trash</button></div>
      <div class="ui-swipe__content" data-tx="0">
        <span class="ui-swipe__dot ui-swipe__dot--off"></span>
        <div class="ui-swipe__msg"><strong>GitHub</strong><span class="ui-swipe__time">Mon</span><p class="ui-swipe__pre">[acme/web] PR #482 was merged</p><p class="ui-swipe__pre ui-swipe__pre--lite">Branch feat/onboarding has been deleted.</p></div>
      </div>
    </li>
  </ul>
</div>

<style>
  .ui-swipe-stage{max-width:360px;background:#fff;font-family:-apple-system,'SF Pro Text',sans-serif;border-radius:12px;overflow:hidden}
  .ui-swipe-head{position:relative;padding:12px 16px 8px;border-bottom:.5px solid #c6c6c8;background:#f9f9f9}
  .ui-swipe-back{color:#007aff;font-size:14px}
  .ui-swipe-title{display:block;font-size:28px;font-weight:700;color:#000;letter-spacing:-.02em;margin-top:2px}
  .ui-swipe{list-style:none;margin:0;padding:0;background:#fff}
  .ui-swipe__row{position:relative;border-bottom:.5px solid #e5e5ea;overflow:hidden}
  .ui-swipe__actions{position:absolute;top:0;right:0;height:100%;display:flex}
  .ui-swipe__actions button{height:100%;padding:0 18px;border:0;color:#fff;font:600 14px -apple-system;cursor:pointer}
  .ui-swipe__actions .flag{background:#ff9500}
  .ui-swipe__actions .del{background:#ff3b30}
  .ui-swipe__content{position:relative;display:flex;gap:8px;background:#fff;padding:12px 16px 14px;transition:transform .2s;cursor:grab;z-index:1}
  .ui-swipe__dot{flex:0 0 10px;width:10px;height:10px;border-radius:50%;background:#007aff;margin-top:8px}
  .ui-swipe__dot--off{background:transparent}
  .ui-swipe__msg{flex:1;min-width:0}
  .ui-swipe__msg strong{font-size:16px;color:#000;font-weight:600}
  .ui-swipe__time{float:right;font-size:13px;color:#8e8e93}
  .ui-swipe__pre{margin:1px 0;font-size:14px;color:#000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-swipe__pre--lite{color:#8e8e93}
  .ui-swipe__content.open{transform:translateX(-160px)}
</style>

<script>
  document.querySelectorAll('.ui-swipe__content').forEach(c=>{
    let sx=0,dx=0,dragging=false;
    c.addEventListener('pointerdown',e=>{sx=e.clientX;dragging=true;c.setPointerCapture(e.pointerId);c.style.transition='none'});
    c.addEventListener('pointermove',e=>{if(!dragging)return;dx=Math.max(-180,Math.min(0,e.clientX-sx+(c.classList.contains('open')?-160:0)));c.style.transform='translateX('+dx+'px)'});
    c.addEventListener('pointerup',()=>{dragging=false;c.style.transition='';if(dx<-80){c.classList.add('open');c.style.transform=''}else{c.classList.remove('open');c.style.transform=''}dx=0});
  });
  document.querySelectorAll('.ui-swipe .del').forEach(b=>b.addEventListener('click',e=>{e.target.closest('.ui-swipe__row').remove()}));
</script>`,
    },
    {
      name: 'Pull to Refresh',
      nameJa: 'プルトゥリフレッシュ',
      desc: '画面を下に引いてコンテンツを更新するモバイルジェスチャー。',
      detail: 'プルトゥリフレッシュは、画面の一番上で指を下に引っ張ると、ローディングインジケータが現れてコンテンツを更新する、モバイル特有のジェスチャーです。TwitterのLoren Brichter氏が考案したことで知られ、今ではメール、SNS、フィード型アプリの標準動作になっています。「最新の状態に更新するボタン」を画面に置かなくて済むため見た目がすっきりし、ユーザーは自然な指の動きで更新を要求できます。フィードバックとして引っ張る量に応じてアイコンを動かすのがコツです。',
      descEn: 'Pull the screen down to refresh content on mobile.',
      detailEn: 'Pull to refresh is a mobile gesture in which the user drags the top of a list downward, releasing a spinner that reloads the content. Invented by Loren Brichter for an early Twitter app, it has become the de facto refresh interaction for email, social, and feed-style apps. It frees the UI from a dedicated refresh button while letting users request fresh content with a natural finger motion. The trick is to animate the indicator in proportion to the pull distance so the gesture feels alive and responsive.',
      code: `/* Inspired by X (Twitter) mobile */
<div class="ui-ptr" id="ptr">
  <div class="ui-ptr__hint" id="ptrHint"><span class="ui-ptr__spinner"></span></div>
  <div class="ui-ptr__body" id="ptrBody">
    <div class="ui-ptr__item">
      <div class="ui-ptr__av" style="background:#1d9bf0"></div>
      <div><div class="ui-ptr__head"><b>NASA</b> <span>@NASA · 1h</span></div><p>Webb sees new details in Saturn's rings.</p></div>
    </div>
    <div class="ui-ptr__item">
      <div class="ui-ptr__av" style="background:#ff7a59"></div>
      <div><div class="ui-ptr__head"><b>HubSpot</b> <span>@HubSpot · 2h</span></div><p>5 cold email templates that actually work.</p></div>
    </div>
    <div class="ui-ptr__item">
      <div class="ui-ptr__av" style="background:#5865f2"></div>
      <div><div class="ui-ptr__head"><b>Discord</b> <span>@discord · 3h</span></div><p>Activities just got a major upgrade.</p></div>
    </div>
  </div>
</div>

<style>
  .ui-ptr{position:relative;max-width:340px;height:300px;overflow:hidden;background:#000;font-family:'Segoe UI',system-ui,sans-serif;color:#e7e9ea;border-radius:12px}
  .ui-ptr__hint{position:absolute;top:0;left:0;right:0;height:50px;display:flex;align-items:center;justify-content:center;background:#000}
  .ui-ptr__spinner{width:20px;height:20px;border:2px solid #2f3336;border-top-color:#1d9bf0;border-radius:50%;animation:uiPtrSpin .8s linear infinite}
  @keyframes uiPtrSpin{to{transform:rotate(360deg)}}
  .ui-ptr__body{position:relative;height:100%;overflow-y:auto;background:#000;transition:transform .25s;will-change:transform}
  .ui-ptr__body.loading{transform:translateY(50px)}
  .ui-ptr__item{display:flex;gap:12px;padding:12px 16px;border-bottom:1px solid #2f3336}
  .ui-ptr__av{flex:0 0 36px;width:36px;height:36px;border-radius:50%}
  .ui-ptr__head{font-size:14px}
  .ui-ptr__head b{color:#e7e9ea}
  .ui-ptr__head span{color:#71767b}
  .ui-ptr__item p{margin:2px 0 0;font-size:14px;line-height:1.4;color:#e7e9ea}
</style>

<script>
  (function(){
    const body=document.getElementById('ptrBody');
    let sy=0,dy=0,pulling=false;
    body.addEventListener('pointerdown',e=>{if(body.scrollTop<=0){sy=e.clientY;pulling=true}});
    body.addEventListener('pointermove',e=>{if(!pulling)return;dy=Math.min(80,Math.max(0,e.clientY-sy));body.style.transform='translateY('+dy+'px)'});
    body.addEventListener('pointerup',()=>{if(!pulling)return;pulling=false;
      if(dy>55){body.classList.add('loading');body.style.transform='';
        setTimeout(()=>{const d=document.createElement('div');d.className='ui-ptr__item';d.innerHTML='<div class="ui-ptr__av" style="background:#fe2c55"></div><div><div class="ui-ptr__head"><b>TikTok</b> <span>@tiktok · now</span></div><p>What\\'s trending today on FYP.</p></div>';body.insertBefore(d,body.firstChild);body.classList.remove('loading')},700);
      } else {body.style.transform=''} dy=0;
    });
  })();
</script>`,
    },
    {
      name: 'Stories',
      nameJa: 'ストーリーズ',
      desc: '画面上部の円形アイコン行。タップで全画面コンテンツを表示する。',
      detail: 'ストーリーズは、画面上部に円形アイコンが横にずらりと並ぶUIで、タップすると全画面で短い写真や動画が再生される、SnapchatやInstagram発祥のパターンです。各アイコンの周りに色付きのリング(未読の合図)が表示され、ユーザーは気になるアカウントだけをワンタップで覗けます。24時間で消える「儚さ」と没入感の高い縦型コンテンツが特徴で、ニュースアプリやECサイトでも採用が広がっています。アバターのリング表現がアイデンティティになっています。',
      descEn: 'A row of circular icons at the top. Tap for fullscreen ephemeral content.',
      detailEn: 'Stories present a horizontal row of circular avatars at the top of a screen; tapping one launches a fullscreen sequence of short photos or videos. Popularized by Snapchat and Instagram, each avatar wears a colored ring that signals unread content, so users can dip into whichever account interests them with a single tap. The combination of ephemerality — content that vanishes after 24 hours — and immersive vertical media has spread beyond social apps to news and e-commerce. The colored ring around the avatar has become an icon in its own right.',
      code: `/* Inspired by Instagram Stories */
<div class="ui-stories">
  <button type="button" class="ui-story ui-story--me">
    <span class="ui-story__avatar" style="background:#888"></span>
    <span class="ui-story__plus">+</span>
    <span class="ui-story__name">Your story</span>
  </button>
  <button type="button" class="ui-story ui-story--unread">
    <span class="ui-story__ring"><span class="ui-story__avatar" style="background:linear-gradient(135deg,#ff6b6b,#ffa94d)"></span></span>
    <span class="ui-story__name">emma.k</span>
  </button>
  <button type="button" class="ui-story ui-story--unread">
    <span class="ui-story__ring"><span class="ui-story__avatar" style="background:linear-gradient(135deg,#4dabf7,#3bc9db)"></span></span>
    <span class="ui-story__name">jakob_w</span>
  </button>
  <button type="button" class="ui-story ui-story--unread">
    <span class="ui-story__ring"><span class="ui-story__avatar" style="background:linear-gradient(135deg,#9775fa,#f783ac)"></span></span>
    <span class="ui-story__name">sofia.dev</span>
  </button>
  <button type="button" class="ui-story">
    <span class="ui-story__ring ui-story__ring--seen"><span class="ui-story__avatar" style="background:linear-gradient(135deg,#51cf66,#fcc419)"></span></span>
    <span class="ui-story__name">marcus.t</span>
  </button>
  <button type="button" class="ui-story">
    <span class="ui-story__ring ui-story__ring--seen"><span class="ui-story__avatar" style="background:linear-gradient(135deg,#ff8787,#74c0fc)"></span></span>
    <span class="ui-story__name">yuki_77</span>
  </button>
</div>

<style>
  .ui-stories{display:flex;gap:14px;padding:14px 12px;overflow-x:auto;background:#000;font-family:-apple-system,'Segoe UI',sans-serif;max-width:400px;border-bottom:1px solid #262626}
  .ui-stories::-webkit-scrollbar{display:none}
  .ui-story{position:relative;display:flex;flex-direction:column;align-items:center;gap:6px;background:transparent;border:0;cursor:pointer;padding:0;flex-shrink:0}
  .ui-story__ring{display:flex;align-items:center;justify-content:center;width:66px;height:66px;border-radius:50%;background:linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);padding:2.5px;box-sizing:border-box}
  .ui-story__ring--seen{background:#262626}
  .ui-story__avatar{display:block;width:60px;height:60px;border-radius:50%;border:2px solid #000;box-sizing:border-box}
  .ui-story--me .ui-story__avatar{width:66px;height:66px;border:2px solid #262626}
  .ui-story__plus{position:absolute;bottom:24px;right:-2px;width:18px;height:18px;border-radius:50%;background:#0095f6;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;border:2px solid #000}
  .ui-story__name{font-size:12px;color:#fff;font-weight:400;max-width:64px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
</style>`,
    },
    {
      name: 'App Bar',
      nameJa: 'アプリバー',
      desc: 'アプリ画面上部のタイトルバー。戻るボタン・タイトル・アクションを含む。',
      detail: 'アプリバー(トップバー、ナビゲーションバーとも)は、モバイルアプリの画面最上部に表示される横長の領域で、左に「戻る」ボタン、中央に現在の画面タイトル、右に検索やメニューなどのアクションアイコンを配置するのが定番のレイアウトです。ユーザーに「いまどの画面にいるか」「ひとつ前に戻る方法」「この画面で可能な操作」を一目で伝える、ナビゲーションの中核UIです。iOSとAndroidで微妙にデザインが異なりますが、その役割と構造はほぼ共通しています。',
      descEn: 'A title bar at the top of mobile screens with back button, title, and actions.',
      detailEn: 'An app bar — also called a top bar or navigation bar — is the horizontal strip at the very top of a mobile screen, typically holding a back button on the left, the current screen\'s title in the center, and action icons like search or menu on the right. It tells users at a glance where they are, how to step back, and what they can do on this screen, making it the navigational anchor of the app. iOS and Android style it slightly differently, but the role and structure are essentially the same across platforms.',
      code: `/* Inspired by Gmail mobile */
<div class="ui-app">
  <header class="ui-appbar">
    <button type="button" class="ui-appbar__btn" aria-label="Menu">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#5f6368" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
    <input aria-label="Search in mail" class="ui-appbar__search" placeholder="Search in mail" />
    <button type="button" class="ui-appbar__avatar" aria-label="Account">A</button>
  </header>
  <div class="ui-app__list">
    <div class="ui-app__date">Today</div>
    <div class="ui-app__row">
      <div class="ui-app__av" style="background:#1a73e8">G</div>
      <div class="ui-app__msg"><div class="ui-app__head"><b>Google</b><span>10:24</span></div><div class="ui-app__sub">Your weekly Search insights</div><div class="ui-app__pre">View how people found your site this week…</div></div>
      <span class="ui-app__star">☆</span>
    </div>
    <div class="ui-app__row">
      <div class="ui-app__av" style="background:#34a853">M</div>
      <div class="ui-app__msg"><div class="ui-app__head"><b>Maya Patel</b><span>09:12</span></div><div class="ui-app__sub">Lunch tomorrow?</div><div class="ui-app__pre">Hey! Are you free around 12:30? Thinking of the…</div></div>
      <span class="ui-app__star ui-app__star--on">★</span>
    </div>
    <div class="ui-app__row">
      <div class="ui-app__av" style="background:#ea4335">N</div>
      <div class="ui-app__msg"><div class="ui-app__head"><b>Netflix</b><span>07:48</span></div><div class="ui-app__sub">New on Netflix this week</div><div class="ui-app__pre">Discover what's trending in your country right now.</div></div>
      <span class="ui-app__star">☆</span>
    </div>
  </div>
</div>

<style>
  .ui-app{max-width:380px;background:#fff;font-family:'Google Sans','Roboto',-apple-system,sans-serif;border-radius:12px;overflow:hidden;border:1px solid #e8eaed}
  .ui-appbar{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#f6f8fc}
  .ui-appbar__btn{width:36px;height:36px;border:0;background:transparent;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center}
  .ui-appbar__btn:hover{background:#e8eaed}
  .ui-appbar__search{flex:1;border:0;background:transparent;font-size:15px;color:#202124;outline:0;padding:6px 0}
  .ui-appbar__search::placeholder{color:#5f6368}
  .ui-appbar__avatar{width:32px;height:32px;border-radius:50%;background:#a142f4;color:#fff;border:0;font:500 13px 'Google Sans';cursor:pointer}
  .ui-app__list{background:#fff}
  .ui-app__date{padding:10px 16px 4px;font-size:12px;color:#5f6368;font-weight:500}
  .ui-app__row{display:flex;align-items:flex-start;gap:14px;padding:10px 14px}
  .ui-app__av{flex:0 0 36px;width:36px;height:36px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font:500 16px 'Google Sans';margin-top:4px}
  .ui-app__msg{flex:1;min-width:0}
  .ui-app__head{display:flex;justify-content:space-between;font-size:14px;color:#202124}
  .ui-app__head b{font-weight:500}
  .ui-app__head span{font-size:12px;color:#5f6368;font-weight:400}
  .ui-app__sub{font-size:14px;color:#202124;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-app__pre{font-size:13px;color:#5f6368;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-app__star{color:#dadce0;font-size:18px;margin-top:6px}
  .ui-app__star--on{color:#f9ab00}
</style>`,
    },
  ],
}
