/**
 * UI Parts Showcase (Corporate Navigation) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-nav',
  title: '企業サイト ナビゲーション',
  titleEn: 'Corporate Navigation',
  description: 'Microsoft・IBM・Apple・Google・Accenture などの企業サイトに多いヘッダー/メガナビゲーションのコピペスニペット集です。',
  terms: [
    {
      name: 'Mega Menu Panel',
      nameJa: 'メガメニューパネル',
      desc: 'ヘッダーから開く幅いっぱいの大型メニュー。複数列のリンクと右側の特集カードで構成。',
      detail: 'メガメニューは、企業サイトのグローバルナビゲーションで頻繁に使われる、ドロップダウンを大型化したパネル型のメニューです。複数のセクション見出しの下にリンクリストを縦に並べ、最後の列に「注目のソリューション」「最新ホワイトペーパー」のような特集カードを置く構成が定番です。製品カテゴリが多い企業サイト(Microsoft、SAP、AWSなど)で、深い階層をフラットに見せるために使われます。クリックでなくホバーで開く実装も多いですが、モバイル・アクセシビリティ観点ではクリック起動が安全です。',
      descEn: 'A full-width dropdown panel with multi-column link lists and a feature card on the right.',
      detailEn: 'A mega menu is the oversized dropdown you see on corporate sites — sections of headings with link lists beneath them, plus a featured card on the far right for "spotlight solutions" or "latest whitepaper." It is the staple navigation for sites with many product categories (Microsoft, SAP, AWS) because it flattens a deep hierarchy into one scannable panel. Hover-to-open is common, but click-to-open is friendlier for mobile and assistive tech. Keep each column to roughly six items so the panel does not feel like a sitemap dump.',
      code: `<!-- Inspired by Microsoft -->
<div class="ui-mega">
  <header class="ui-mega__bar">
    <div class="ui-mega__brand"><span class="ui-mega__logo"></span>Contoso</div>
    <nav class="ui-mega__nav">
      <button type="button" class="ui-mega__trigger is-open">Products <span>⌄</span></button>
      <a>Industries</a><a>Resources</a><a>Support</a>
    </nav>
    <div class="ui-mega__cta">Sign in</div>
  </header>
  <div class="ui-mega__panel">
    <div class="ui-mega__col">
      <h4>Cloud</h4>
      <a>Azure Compute</a><a>Storage &amp; databases</a><a>Networking</a><a>Identity</a><a>Hybrid &amp; multicloud</a>
    </div>
    <div class="ui-mega__col">
      <h4>Productivity</h4>
      <a>Microsoft 365</a><a>Teams</a><a>Outlook</a><a>SharePoint</a><a>Viva</a>
    </div>
    <div class="ui-mega__col">
      <h4>AI &amp; Data</h4>
      <a>Copilot Studio</a><a>Fabric</a><a>Power BI</a><a>OpenAI service</a><a>Synapse</a>
    </div>
    <a class="ui-mega__feat">
      <div class="ui-mega__feat-tag">Featured</div>
      <div class="ui-mega__feat-h">Copilot for Enterprise</div>
      <div class="ui-mega__feat-d">Bring agents into every workflow. Generally available in 38 regions.</div>
      <div class="ui-mega__feat-link">Read the announcement →</div>
    </a>
  </div>
</div>

<style>
  .ui-mega{max-width:720px;font:14px "Segoe UI",-apple-system,sans-serif;color:#262626;background:#fff;border:1px solid #e5e5e5}
  .ui-mega__bar{display:flex;align-items:center;gap:24px;padding:0 20px;height:48px;border-bottom:1px solid #f0f0f0}
  .ui-mega__brand{display:flex;align-items:center;gap:8px;font-weight:600;font-size:15px}
  .ui-mega__logo{width:18px;height:18px;background:conic-gradient(from 0deg,#f25022 0 25%,#7fba00 0 50%,#00a4ef 0 75%,#ffb900 0)}
  .ui-mega__nav{display:flex;gap:20px;font-size:13.5px}
  .ui-mega__nav a,.ui-mega__trigger{color:#262626;background:none;border:0;padding:0;cursor:pointer;font:inherit}
  .ui-mega__trigger.is-open{color:#0067b8;font-weight:600}
  .ui-mega__cta{margin-left:auto;font-size:13.5px;color:#262626;cursor:pointer}
  .ui-mega__panel{display:grid;grid-template-columns:1fr 1fr 1fr 1.2fr;gap:28px;padding:24px 20px 28px;background:#fafafa}
  .ui-mega__col h4{margin:0 0 10px;font-size:11px;font-weight:600;color:#616161;text-transform:uppercase;letter-spacing:.08em}
  .ui-mega__col a{display:block;color:#262626;text-decoration:none;font-size:13px;padding:5px 0;cursor:pointer}
  .ui-mega__col a:hover{color:#0067b8;text-decoration:underline}
  .ui-mega__feat{display:block;text-decoration:none;color:inherit;background:linear-gradient(135deg,#0067b8,#003a75);color:#fff;padding:16px;border-radius:2px;cursor:pointer}
  .ui-mega__feat-tag{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;opacity:.85}
  .ui-mega__feat-h{font-size:16px;font-weight:600;margin:8px 0 6px}
  .ui-mega__feat-d{font-size:12.5px;line-height:1.45;opacity:.92}
  .ui-mega__feat-link{margin-top:14px;font-size:12.5px;font-weight:600}
</style>`,
    },
    {
      name: 'Sticky Compact Header',
      nameJa: 'スクロール圧縮ヘッダー',
      desc: '上部では大きく透過、スクロールで細く不透明になるヘッダー。',
      detail: 'スクロール量に応じてヘッダーの高さや背景色を変える、いわゆる「シュリンク型ヘッダー」です。ページ最上部ではタイトルやロゴを大きく見せたい一方、読み進めるにつれて画面を広く使いたいというニーズに応えるパターンで、Apple、Stripe、Awwwards受賞サイトなどでよく見ます。JavaScriptでwindow.scrollYを監視し、しきい値を超えたらヘッダーに「is-shrink」クラスを付け外しするのが定番実装です。height、padding、background、box-shadowをCSSのtransitionで滑らかに変化させると上品に仕上がります。',
      descEn: 'A header that starts tall and transparent, then compacts into a slim solid bar on scroll.',
      detailEn: 'This is the "shrink-on-scroll" header pattern. At the top of the page the header is tall and transparent so the hero can breathe; once the user scrolls past a threshold it collapses into a slim solid bar with a subtle shadow. Apple, Stripe, and most award-winning corporate sites use a variant of this. The implementation is standard: listen for window.scrollY, toggle a class like "is-shrink" once it crosses ~40px, and animate height / padding / background via CSS transitions. Keep the transition under 250ms so it feels responsive, not laggy.',
      code: `<!-- Inspired by Stripe -->
<div class="ui-shead" id="ushead">
  <div class="ui-shead__bg"></div>
  <header class="ui-shead__inner">
    <div class="ui-shead__brand"><span class="ui-shead__mark"></span>Lumen</div>
    <nav class="ui-shead__nav"><a>Products</a><a>Solutions</a><a>Developers</a><a>Pricing</a></nav>
    <div class="ui-shead__right"><a>Sign in</a><button type="button" class="ui-shead__cta">Contact sales →</button></div>
  </header>
  <section class="ui-shead__hero">
    <h1>Payments infrastructure for the internet.</h1>
    <p>Scroll down ↓ — the header above compacts.</p>
    <div class="ui-shead__spacer"></div>
    <p style="opacity:.75">More content here…</p>
  </section>
</div>

<style>
  .ui-shead{position:relative;max-width:720px;height:380px;overflow-y:auto;background:linear-gradient(180deg,#0a2540 0%,#0a2540 200px,#fff 200px);font:14px -apple-system,"Inter",sans-serif;color:#fff;border-radius:8px}
  .ui-shead__bg{position:sticky;top:0;height:0;z-index:5}
  .ui-shead__inner{position:sticky;top:0;display:flex;align-items:center;gap:24px;padding:22px 28px;background:transparent;color:#fff;transition:padding .2s ease,background .2s ease,box-shadow .2s ease,color .2s ease;z-index:10}
  .ui-shead__inner.is-shrink{padding:10px 28px;background:rgba(255,255,255,.98);color:#0a2540;box-shadow:0 1px 0 rgba(10,37,64,.08),0 2px 12px rgba(10,37,64,.06);backdrop-filter:saturate(180%) blur(10px)}
  .ui-shead__brand{display:flex;align-items:center;gap:8px;font-weight:700;font-size:18px;letter-spacing:-.01em}
  .ui-shead__inner.is-shrink .ui-shead__brand{font-size:15px}
  .ui-shead__mark{width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#7a73ff,#00d4ff)}
  .ui-shead__nav{display:flex;gap:22px;font-size:14px}
  .ui-shead__nav a{color:inherit;cursor:pointer;opacity:.92}
  .ui-shead__right{margin-left:auto;display:flex;align-items:center;gap:16px}
  .ui-shead__right a{color:inherit;cursor:pointer;font-size:14px}
  .ui-shead__cta{border:0;background:#fff;color:#0a2540;padding:7px 14px;border-radius:20px;font:600 13px inherit;cursor:pointer}
  .ui-shead__inner.is-shrink .ui-shead__cta{background:#635bff;color:#fff}
  .ui-shead__hero{padding:40px 28px 60px;color:#fff}
  .ui-shead__hero h1{font-size:28px;font-weight:700;margin:0 0 8px;letter-spacing:-.02em;line-height:1.1}
  .ui-shead__hero p{color:rgba(255,255,255,.85)}
  .ui-shead__spacer{height:200px;background:linear-gradient(180deg,transparent,#fff)}
</style>

<script>
  (function(){
    const root=document.getElementById('ushead');
    const bar=root.querySelector('.ui-shead__inner');
    root.addEventListener('scroll',()=>{
      if(root.scrollTop>40) bar.classList.add('is-shrink');
      else bar.classList.remove('is-shrink');
    });
  })();
</script>`,
    },
    {
      name: 'Utility Bar + Main Nav',
      nameJa: 'ユーティリティバー+メインナビ',
      desc: '言語・問い合わせ・ログインが並ぶ細い上部バーと、その下に大きめのメインナビが乗る2段構成。',
      detail: 'IBM、SAP、Cisco、Fujitsuのような大手BtoB企業に多い、2段構成のヘッダーです。最上段に細い「ユーティリティバー」を置いて言語切り替え・地域切り替え・サポート・ログインといった頻度の低い導線をまとめ、その下にロゴと主要セクション(製品/業種/サービスなど)のメインナビを大きく置きます。情報量が多くてもユーザーが目的の階層を見つけやすいのが利点で、グローバル展開している企業ほどこのパターンを採用しがちです。視覚的にはユーティリティバーをグレーや黒、メインナビを白で塗り分けるとメリハリが出ます。',
      descEn: 'A thin utility bar (language, contact, login) stacked above a larger main navigation row.',
      detailEn: 'This two-row header is the IBM / SAP / Cisco staple. A thin "utility bar" along the top holds low-frequency links — language, region, support, login — while the main row below carries the brand and the primary sections (Products, Industries, Services). It is the workhorse of enterprise navigation because it keeps the high-traffic links big while still surfacing the global toggles a multinational visitor expects. Visually, painting the utility bar a darker shade and leaving the main row white gives the hierarchy a clear edge.',
      code: `<!-- Inspired by IBM -->
<div class="ui-corp">
  <div class="ui-corp__util">
    <div class="ui-corp__util-left"><span>🌐</span>Japan / 日本語 ▾</div>
    <div class="ui-corp__util-right">
      <a>お問い合わせ</a><span class="ui-corp__sep"></span>
      <a>サポート</a><span class="ui-corp__sep"></span>
      <a>マイアカウント</a><span class="ui-corp__sep"></span>
      <a>ログイン →</a>
    </div>
  </div>
  <header class="ui-corp__main">
    <div class="ui-corp__brand"><span class="ui-corp__mark">▤</span><span>Indigo</span></div>
    <nav class="ui-corp__nav">
      <a class="is-active">製品</a>
      <a>業種ソリューション</a>
      <a>コンサルティング</a>
      <a>サポート</a>
      <a>導入事例</a>
    </nav>
    <div class="ui-corp__tools"><span class="ui-corp__icon">⌕</span><span class="ui-corp__icon">☰</span></div>
  </header>
</div>

<style>
  .ui-corp{max-width:720px;font:14px "IBM Plex Sans","Helvetica Neue",-apple-system,sans-serif;color:#161616;background:#fff;border:1px solid #e0e0e0}
  .ui-corp__util{display:flex;align-items:center;justify-content:space-between;background:#161616;color:#c6c6c6;font-size:12px;padding:0 20px;height:32px}
  .ui-corp__util-left{display:flex;align-items:center;gap:6px;cursor:pointer}
  .ui-corp__util-right{display:flex;align-items:center;gap:12px}
  .ui-corp__util-right a{color:#c6c6c6;cursor:pointer}
  .ui-corp__util-right a:hover{color:#fff}
  .ui-corp__sep{width:1px;height:12px;background:#393939}
  .ui-corp__main{display:flex;align-items:center;gap:28px;padding:0 20px;height:56px;border-bottom:1px solid #e0e0e0}
  .ui-corp__brand{display:flex;align-items:center;gap:10px;font-weight:600;font-size:16px;letter-spacing:-.01em}
  .ui-corp__mark{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;background:#0f62fe;color:#fff;font-size:14px;border-radius:2px}
  .ui-corp__nav{display:flex;gap:24px;font-size:14px}
  .ui-corp__nav a{color:#161616;cursor:pointer;padding:18px 0;border-bottom:2px solid transparent}
  .ui-corp__nav a:hover{color:#0f62fe}
  .ui-corp__nav a.is-active{border-bottom-color:#0f62fe;font-weight:600}
  .ui-corp__tools{margin-left:auto;display:flex;gap:14px;color:#161616}
  .ui-corp__icon{font-size:18px;cursor:pointer}
</style>`,
    },
    {
      name: 'Search Overlay',
      nameJa: '全画面検索オーバーレイ',
      desc: '検索アイコンを押すと全画面に検索フォームと最近の検索履歴が広がる。',
      detail: 'Apple、Google、Stripeなどでよく使われる、検索アイコンを押すと画面全体が暗転して大きな検索フォームが現れるパターンです。普段はヘッダーをすっきり保ちつつ、検索したい瞬間にはタイピングと結果閲覧に集中できるようにできる、いわば「モーダル検索」です。最近の検索履歴・人気カテゴリ・サジェストを下にリストすることでCold Startを防ぎ、Escキーや背景クリックで閉じる挙動が標準です。アクセシビリティ上はオーバーレイ表示時に背後のフォーカスをトラップし、入力欄に自動フォーカスするのが推奨です。',
      descEn: 'A search icon that expands into a full-screen overlay with an input and recent-search list.',
      detailEn: 'This is the Apple / Google search experience: tap the magnifier and the whole viewport dims, revealing a giant input and a list of recent or trending queries. It keeps the header clean in everyday use but gives the user the full canvas the moment they want to search. Recent searches, popular categories, and live suggestions help users get unstuck even before they finish typing. For accessibility, trap focus inside the overlay, autofocus the input, and close on Escape or backdrop click.',
      code: `<!-- Inspired by Apple -->
<div class="ui-srch" id="usrch">
  <header class="ui-srch__bar">
    <div class="ui-srch__brand">◐ Aurora</div>
    <nav class="ui-srch__nav"><a>Store</a><a>Mac</a><a>iPhone</a><a>Watch</a><a>Support</a></nav>
    <button type="button" class="ui-srch__icon" id="usrch-open" aria-label="Search">⌕</button>
  </header>
  <section class="ui-srch__body">Press the ⌕ icon to open search.</section>
  <div class="ui-srch__overlay" id="usrch-ov" hidden>
    <div class="ui-srch__panel">
      <div class="ui-srch__input">
        <span>⌕</span>
        <input aria-label="Search aurora.com" type="text" placeholder="Search aurora.com" autofocus>
        <button type="button" class="ui-srch__close" id="usrch-close">Cancel</button>
      </div>
      <div class="ui-srch__section">Quick Links</div>
      <ul class="ui-srch__list">
        <li>›&nbsp; Find a Store</li>
        <li>›&nbsp; Aurora Vision Pro</li>
        <li>›&nbsp; AppleCare+ coverage</li>
        <li>›&nbsp; Order status</li>
      </ul>
      <div class="ui-srch__section">Recent Searches</div>
      <ul class="ui-srch__list ui-srch__list--muted">
        <li>⏱  MacBook Pro M4</li>
        <li>⏱  iPhone 16 trade-in value</li>
        <li>⏱  AirPods Pro firmware</li>
      </ul>
    </div>
  </div>
</div>

<style>
  .ui-srch{position:relative;max-width:720px;height:380px;background:#fff;font:14px -apple-system,"SF Pro Text",sans-serif;color:#1d1d1f;border:1px solid #d2d2d7;border-radius:8px;overflow:hidden}
  .ui-srch__bar{display:flex;align-items:center;gap:24px;padding:0 22px;height:48px;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);border-bottom:1px solid #d2d2d7}
  .ui-srch__brand{font-weight:600}
  .ui-srch__nav{display:flex;gap:22px;font-size:13px;color:#1d1d1f}
  .ui-srch__nav a{color:inherit;cursor:pointer;opacity:.85}
  .ui-srch__icon{margin-left:auto;background:none;border:0;font-size:16px;cursor:pointer;color:#1d1d1f}
  .ui-srch__body{padding:60px 24px;text-align:center;color:#86868b;font-size:14px}
  .ui-srch__overlay{position:absolute;inset:0;background:rgba(0,0,0,.45);backdrop-filter:blur(8px);display:flex;justify-content:center;padding-top:40px;z-index:30}
  .ui-srch__overlay[hidden]{display:none}
  .ui-srch__panel{width:88%;max-width:560px;background:rgba(255,255,255,.98);border-radius:14px;padding:18px 22px 22px;box-shadow:0 24px 60px rgba(0,0,0,.3)}
  .ui-srch__input{display:flex;align-items:center;gap:10px;padding-bottom:14px;border-bottom:1px solid #e6e6e9}
  .ui-srch__input span{font-size:18px;color:#6e6e73}
  .ui-srch__input input{flex:1;border:0;outline:0;font:400 22px -apple-system,sans-serif;color:#1d1d1f;background:transparent}
  .ui-srch__close{border:0;background:none;color:#0066cc;font-size:14px;cursor:pointer}
  .ui-srch__section{margin-top:14px;font-size:11px;color:#6e6e73;text-transform:uppercase;letter-spacing:.08em;font-weight:600}
  .ui-srch__list{list-style:none;margin:8px 0 0;padding:0;font-size:14px}
  .ui-srch__list li{padding:7px 0;cursor:pointer;color:#0066cc}
  .ui-srch__list--muted li{color:#1d1d1f}
  .ui-srch__list li:hover{opacity:.7}
</style>

<script>
  (function(){
    const root=document.getElementById('usrch');
    const ov=root.querySelector('#usrch-ov');
    root.querySelector('#usrch-open').addEventListener('click',()=>ov.hidden=false);
    root.querySelector('#usrch-close').addEventListener('click',()=>ov.hidden=true);
    ov.addEventListener('click',e=>{if(e.target===ov)ov.hidden=true});
  })();
</script>`,
    },
    {
      name: 'Industry × Service Mega Menu',
      nameJa: '業種×サービス2軸メガメニュー',
      desc: '左に「業種」、右に「サービス」、さらに右端に注目インサイトを並べたコンサル系メガメニュー。',
      detail: 'Accenture、PwC、Deloitte、McKinseyなどの大手コンサル/プロフェッショナルサービスのサイトでよく見る、2軸構造のメガメニューです。左列に「業種(金融/製造/ヘルスケア…)」、中央列に「サービス(戦略/テクノロジー/オペレーション…)」を並べ、右端に「最新インサイト」「採用情報」のようなマーケティングカードを置きます。来訪者は自分の業界か、興味のあるサービス機能のどちらからでも入口を選べるので、提供価値を多面的にアピールできるのが特徴です。色は白背景にダークテキスト、アクセントカラーは1色に絞るとプロフェッショナルな印象になります。',
      descEn: 'A two-axis mega menu with industries on the left, services in the middle, and a featured insight at the far right.',
      detailEn: 'This is the Accenture / PwC / Deloitte navigation pattern. The left column lists industries (Financial Services, Manufacturing, Healthcare…), the middle column lists service lines (Strategy, Technology, Operations…), and a third column promotes a hero insight or career hook. The structure lets visitors enter from whichever axis matches how they think — by industry vertical or by capability — so the firm can present its value from multiple angles. Stick to a white background with dark text and a single accent color to keep it feeling executive rather than busy.',
      code: `<!-- Inspired by Accenture -->
<div class="ui-axis">
  <header class="ui-axis__bar">
    <div class="ui-axis__brand">&gt; lumicon</div>
    <nav class="ui-axis__nav">
      <a class="is-open">What we do</a>
      <a>Who we are</a>
      <a>Insights</a>
      <a>Careers</a>
    </nav>
    <div class="ui-axis__cta">Contact us</div>
  </header>
  <div class="ui-axis__panel">
    <div class="ui-axis__col">
      <h4>Industries</h4>
      <a>Banking</a><a>Capital Markets</a><a>Insurance</a><a>Health</a><a>Life Sciences</a><a>Public Service</a><a>Energy</a>
    </div>
    <div class="ui-axis__col">
      <h4>Services</h4>
      <a>Strategy &amp; Consulting</a><a>Technology</a><a>Operations</a><a>Industry X</a><a>Song (Customer)</a><a>Data &amp; AI</a><a>Sustainability</a>
    </div>
    <div class="ui-axis__feat">
      <span class="ui-axis__tag">Featured insight</span>
      <h3>Reinvention in the age of generative AI</h3>
      <p>Our 2026 study of 2,400 C-suite leaders on closing the AI execution gap.</p>
      <span class="ui-axis__arrow">→ Read the report</span>
    </div>
  </div>
</div>

<style>
  .ui-axis{max-width:720px;font:14px "Graphik","Helvetica Neue",-apple-system,sans-serif;color:#000;background:#fff;border:1px solid #e6e6e6}
  .ui-axis__bar{display:flex;align-items:center;gap:28px;padding:0 22px;height:60px;border-bottom:1px solid #ebebeb}
  .ui-axis__brand{font:700 18px "Graphik",sans-serif;letter-spacing:-.01em;color:#000}
  .ui-axis__brand::first-letter{color:#a100ff}
  .ui-axis__nav{display:flex;gap:24px;font-size:14px}
  .ui-axis__nav a{color:#000;cursor:pointer;padding:20px 0;border-bottom:3px solid transparent;font-weight:500}
  .ui-axis__nav a.is-open{border-bottom-color:#a100ff;font-weight:600}
  .ui-axis__cta{margin-left:auto;background:#000;color:#fff;padding:9px 18px;font-size:13px;font-weight:500;cursor:pointer}
  .ui-axis__panel{display:grid;grid-template-columns:1fr 1fr 1.4fr;gap:36px;padding:28px 22px 32px;background:#fafafa}
  .ui-axis__col h4{margin:0 0 12px;font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:.1em}
  .ui-axis__col a{display:block;color:#000;font-size:13.5px;padding:5px 0;cursor:pointer;text-decoration:none}
  .ui-axis__col a:hover{color:#a100ff}
  .ui-axis__feat{background:#000;color:#fff;padding:22px;display:flex;flex-direction:column;gap:8px;cursor:pointer}
  .ui-axis__tag{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#a100ff}
  .ui-axis__feat h3{margin:4px 0 0;font-size:18px;font-weight:600;line-height:1.25}
  .ui-axis__feat p{margin:0;color:#bdbdbd;font-size:12.5px;line-height:1.5}
  .ui-axis__arrow{margin-top:auto;font-size:13px;font-weight:600;color:#fff}
</style>`,
    },
    {
      name: 'Underline Indicator Nav',
      nameJa: 'アンダーライン式ナビ',
      desc: 'ロゴと数個のリンクが横並びで、現在地のリンクの下にだけ短い下線が引かれるシンプルなナビ。',
      detail: 'Stripe、Linear、Vercel、Framerなど、近年のモダンなSaaS/開発者向け企業に多い、洗練されたミニマルナビゲーションです。ロゴとごく少数(4〜6個)のメインリンクを横並びにし、現在開いているページのリンクの下に2pxの細い下線を表示することで「いまここ」を控えめに示します。Hover時は色の濃淡を変える、または下線が左から伸びるアニメーションを入れると上品です。リンク数を絞ることで、デザインの余白が増え、ブランドのトーンが洗練された印象になります。',
      descEn: 'A clean horizontal nav with a short underline under the currently active link.',
      detailEn: 'This is the Stripe / Linear / Vercel look: just the wordmark and a handful (four to six) of nav links across the top, with a 2px underline under the active item to whisper "you are here." Hovering tweaks the color subtly or animates the underline in from the left — the restraint is the point. Limiting the link count gives the layout generous breathing room and lends the brand a tailored, modern feel. Pair it with a single primary CTA on the right and you have the default header for any modern SaaS.',
      code: `<!-- Inspired by Linear -->
<div class="ui-uln">
  <header class="ui-uln__bar">
    <div class="ui-uln__brand"><span class="ui-uln__mark"></span>Vector</div>
    <nav class="ui-uln__nav">
      <a>Product</a>
      <a class="is-active">Method</a>
      <a>Customers</a>
      <a>Pricing</a>
      <a>Changelog</a>
    </nav>
    <div class="ui-uln__right">
      <a class="ui-uln__signin">Log in</a>
      <button type="button" class="ui-uln__cta">Sign up</button>
    </div>
  </header>
  <section class="ui-uln__hero">
    <h2>The new standard for modern software teams.</h2>
    <p>Plan, build, and ship — in one place.</p>
  </section>
</div>

<style>
  .ui-uln{max-width:720px;font:14px -apple-system,"Inter",sans-serif;color:#f7f8f8;background:#08090a;border:1px solid #1f2023;border-radius:8px;overflow:hidden}
  .ui-uln__bar{display:flex;align-items:center;gap:28px;padding:0 22px;height:56px;border-bottom:1px solid #1f2023}
  .ui-uln__brand{display:flex;align-items:center;gap:8px;font-weight:600;font-size:15px;letter-spacing:-.01em}
  .ui-uln__mark{width:14px;height:14px;background:conic-gradient(from 0deg,#5e6ad2,#26d4d4,#5e6ad2);border-radius:3px}
  .ui-uln__nav{display:flex;gap:24px;font-size:13.5px}
  .ui-uln__nav a{position:relative;color:#9b9ba3;padding:18px 0;cursor:pointer;transition:color .15s}
  .ui-uln__nav a:hover{color:#f7f8f8}
  .ui-uln__nav a.is-active{color:#f7f8f8}
  .ui-uln__nav a.is-active::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:#5e6ad2;border-radius:1px}
  .ui-uln__right{margin-left:auto;display:flex;align-items:center;gap:14px}
  .ui-uln__signin{color:#9b9ba3;font-size:13.5px;cursor:pointer}
  .ui-uln__signin:hover{color:#f7f8f8}
  .ui-uln__cta{background:#5e6ad2;color:#fff;border:0;padding:7px 14px;border-radius:6px;font:500 13px inherit;cursor:pointer;box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}
  .ui-uln__cta:hover{background:#6872e0}
  .ui-uln__hero{padding:48px 24px 56px}
  .ui-uln__hero h2{font:600 26px -apple-system,sans-serif;letter-spacing:-.02em;margin:0 0 8px;line-height:1.15}
  .ui-uln__hero p{margin:0;color:#9b9ba3;font-size:15px}
</style>`,
    },
    {
      name: 'Region Selector',
      nameJa: '国/地域セレクター',
      desc: '国旗付きの一覧と検索ボックスから国/地域を選んで「適用」するドロップダウン。',
      detail: 'グローバル展開しているApple、PwC、Microsoft、Cisco などの企業サイトに必ずある「国/地域を選んでください」ドロップダウンです。多くの場合、フッターやヘッダーの末尾にある現在の国名(例: Japan / 日本語)をクリックすると、検索ボックスと国旗付きリストが大きく開きます。検索入力で国を絞り込み、選択して「Apply」ボタンで言語・通貨・コンテンツ切り替えが反映される、というのが標準的なフローです。リスト件数が200近くなることもあるので、検索とアルファベット順表示はほぼ必須です。',
      descEn: 'A dropdown listing flags + countries with a search box and an Apply button.',
      detailEn: 'The "choose your country/region" picker is a fixture of any globally distributed corporate site — Apple, PwC, Cisco, Microsoft all ship a version of it. The current locale (say, "Japan / 日本語") sits in the header or footer; clicking it opens a panel with a search field and a long alphabetized list of flags and country names. Users filter, pick, and hit Apply, after which language, currency, and content swap accordingly. With nearly 200 possible entries, both a search box and alphabetical grouping are effectively required.',
      code: `<!-- Inspired by Apple -->
<div class="ui-reg" id="ureg">
  <button type="button" class="ui-reg__trigger" id="ureg-t">🌐 Japan / 日本語 <span>⌄</span></button>
  <div class="ui-reg__panel" id="ureg-p" hidden>
    <div class="ui-reg__head">
      <input aria-label="Search 175 countries…" type="text" placeholder="Search 175 countries…" class="ui-reg__search">
    </div>
    <ul class="ui-reg__list">
      <li><span class="ui-reg__flag">🇯🇵</span>Japan<span class="ui-reg__lang">日本語</span></li>
      <li class="is-selected"><span class="ui-reg__flag">🇺🇸</span>United States<span class="ui-reg__lang">English</span></li>
      <li><span class="ui-reg__flag">🇬🇧</span>United Kingdom<span class="ui-reg__lang">English</span></li>
      <li><span class="ui-reg__flag">🇩🇪</span>Germany<span class="ui-reg__lang">Deutsch</span></li>
      <li><span class="ui-reg__flag">🇫🇷</span>France<span class="ui-reg__lang">Français</span></li>
      <li><span class="ui-reg__flag">🇰🇷</span>Korea<span class="ui-reg__lang">한국어</span></li>
      <li><span class="ui-reg__flag">🇸🇬</span>Singapore<span class="ui-reg__lang">English</span></li>
    </ul>
    <div class="ui-reg__foot">
      <span class="ui-reg__note">Changes site language &amp; currency</span>
      <button type="button" class="ui-reg__apply">Apply</button>
    </div>
  </div>
</div>

<style>
  .ui-reg{position:relative;display:inline-block;font:14px -apple-system,"SF Pro Text",sans-serif;color:#1d1d1f;margin:24px}
  .ui-reg__trigger{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid #d2d2d7;border-radius:8px;padding:9px 14px;cursor:pointer;font:inherit;color:#1d1d1f}
  .ui-reg__trigger:hover{border-color:#86868b}
  .ui-reg__trigger span{color:#86868b;font-size:11px}
  .ui-reg__panel{position:absolute;top:calc(100% + 8px);left:0;width:340px;background:#fff;border:1px solid #d2d2d7;border-radius:12px;box-shadow:0 12px 32px rgba(0,0,0,.12);overflow:hidden;z-index:20}
  .ui-reg__panel[hidden]{display:none}
  .ui-reg__head{padding:12px;border-bottom:1px solid #f0f0f2}
  .ui-reg__search{width:100%;border:1px solid #d2d2d7;border-radius:8px;padding:8px 12px;font:13.5px inherit;outline:0}
  .ui-reg__search:focus{border-color:#0066cc;box-shadow:0 0 0 3px rgba(0,102,204,.15)}
  .ui-reg__list{list-style:none;margin:0;padding:6px 0;max-height:200px;overflow-y:auto}
  .ui-reg__list li{display:flex;align-items:center;gap:10px;padding:8px 14px;cursor:pointer;font-size:13.5px}
  .ui-reg__list li:hover{background:#f5f5f7}
  .ui-reg__list li.is-selected{background:#e8f0fe;color:#0066cc;font-weight:600}
  .ui-reg__flag{font-size:18px;line-height:1}
  .ui-reg__lang{margin-left:auto;color:#86868b;font-size:12px;font-weight:400}
  .ui-reg__foot{display:flex;align-items:center;gap:10px;padding:10px 14px;border-top:1px solid #f0f0f2;background:#fbfbfd}
  .ui-reg__note{font-size:11.5px;color:#86868b}
  .ui-reg__apply{margin-left:auto;background:#0066cc;color:#fff;border:0;padding:7px 16px;border-radius:18px;font:600 12.5px inherit;cursor:pointer}
  .ui-reg__apply:hover{background:#0058b0}
</style>

<script>
  (function(){
    const root=document.getElementById('ureg');
    const t=root.querySelector('#ureg-t');
    const p=root.querySelector('#ureg-p');
    t.addEventListener('click',()=>p.hidden=!p.hidden);
    root.querySelectorAll('.ui-reg__list li').forEach(li=>li.addEventListener('click',()=>{
      root.querySelectorAll('.ui-reg__list li').forEach(x=>x.classList.remove('is-selected'));
      li.classList.add('is-selected');
    }));
    document.addEventListener('click',e=>{if(!root.contains(e.target))p.hidden=true});
  })();
</script>`,
    },
    {
      name: 'Breadcrumb With Dropdown',
      nameJa: '親階層ドロップダウン付きパンくず',
      desc: 'Home › Services › [Strategy ⌄] のように、現在の階層がドロップダウンになっているパンくず。',
      detail: '大規模な企業サイトやエンタープライズドキュメントサイトでよく見る、最後の階層が「兄弟ページへのドロップダウン」になったパンくずリストです。普通のパンくずは現在のページがテキスト表示で行き止まりですが、このパターンでは現在地から横移動(兄弟ページへのジャンプ)が1クリックで可能になります。SAP Help、AWS Documentation、Atlassianの製品ドキュメントなどで採用されており、深い階層構造を持つサイトのユーザーが「いまの階層から隣のページに行きたい」というニーズを満たします。階層が深いほど効果が大きいパターンです。',
      descEn: 'A breadcrumb whose final step is a dropdown to sibling pages — Home › Services › [Strategy ⌄].',
      detailEn: 'On large enterprise docs and corporate sites the final breadcrumb item is often a dropdown to sibling pages, not just a static label. SAP Help, AWS Documentation, and Atlassian product docs all do this. A normal breadcrumb dead-ends at the current page, but this variant lets users hop sideways to a sibling page in one click — invaluable in deep hierarchies where the user has already drilled in and just wants the page next door. The deeper the IA, the bigger the win.',
      code: `<!-- Inspired by AWS Documentation -->
<div class="ui-bc" id="ubc">
  <nav class="ui-bc__crumbs">
    <a>Home</a>
    <span class="ui-bc__sep">/</span>
    <a>Services</a>
    <span class="ui-bc__sep">/</span>
    <a>Compute</a>
    <span class="ui-bc__sep">/</span>
    <button type="button" class="ui-bc__current" id="ubc-cur">EC2 <span>⌄</span></button>
  </nav>
  <ul class="ui-bc__menu" id="ubc-menu" hidden>
    <li class="is-current">EC2 <span>Virtual servers</span></li>
    <li>Lambda <span>Run code without thinking about servers</span></li>
    <li>ECS <span>Run containers</span></li>
    <li>Fargate <span>Serverless compute for containers</span></li>
    <li>Lightsail <span>Easy-to-use cloud platform</span></li>
    <li>Batch <span>Fully managed batch processing</span></li>
  </ul>
  <h1 class="ui-bc__h1">Amazon EC2 — Getting started</h1>
</div>

<style>
  .ui-bc{position:relative;max-width:640px;font:14px "Amazon Ember",-apple-system,sans-serif;color:#16191f;background:#fff;padding:18px 22px;border:1px solid #d5dbdb;border-radius:4px}
  .ui-bc__crumbs{display:flex;align-items:center;flex-wrap:wrap;gap:6px;font-size:13.5px;color:#545b64}
  .ui-bc__crumbs a{color:#0972d3;cursor:pointer;text-decoration:none}
  .ui-bc__crumbs a:hover{text-decoration:underline}
  .ui-bc__sep{color:#aab7b8}
  .ui-bc__current{background:none;border:0;padding:2px 6px;border-radius:4px;font:600 13.5px inherit;color:#16191f;cursor:pointer;display:inline-flex;align-items:center;gap:4px}
  .ui-bc__current:hover{background:#f2f3f3}
  .ui-bc__current span{font-size:11px;color:#545b64;font-weight:400}
  .ui-bc__menu{position:absolute;top:46px;left:185px;list-style:none;margin:0;padding:6px;background:#fff;border:1px solid #d5dbdb;border-radius:6px;box-shadow:0 4px 12px rgba(0,28,36,.15);min-width:280px;z-index:20}
  .ui-bc__menu[hidden]{display:none}
  .ui-bc__menu li{display:flex;flex-direction:column;padding:8px 10px;border-radius:4px;cursor:pointer;font-size:13.5px;font-weight:600;color:#16191f}
  .ui-bc__menu li span{font-size:12px;color:#545b64;font-weight:400;margin-top:2px}
  .ui-bc__menu li:hover{background:#f2f8fd}
  .ui-bc__menu li.is-current{background:#ebf3fb;color:#0972d3}
  .ui-bc__h1{margin:18px 0 0;font:600 22px inherit;letter-spacing:-.01em}
</style>

<script>
  (function(){
    const root=document.getElementById('ubc');
    const cur=root.querySelector('#ubc-cur');
    const menu=root.querySelector('#ubc-menu');
    cur.addEventListener('click',e=>{e.stopPropagation();menu.hidden=!menu.hidden});
    document.addEventListener('click',e=>{if(!menu.contains(e.target))menu.hidden=true});
  })();
</script>`,
    },
    {
      name: 'In-Article Side Rail',
      nameJa: '「目次」サイドレール',
      desc: '記事の右側にスティッキー固定された見出しジャンプリスト。現在地の見出しがハイライトされる。',
      detail: '長い記事やドキュメントの右側に常時表示される「On this page / In this article」のサイドナビです。ページ内のh2/h3見出しをスキャンしてアンカーリンクのリストを作り、スクロール位置に応じて「いま読んでいる見出し」を強調表示します。Stripe Docs、MDN、Google Cloud Docs、Notion Help などで標準的に使われており、長文ドキュメントの読者が「自分がどこを読んでいるか」「あといくつ項目があるか」を把握しやすくします。IntersectionObserverで見出しの可視性を監視するのが現代的な実装方法です。',
      descEn: 'A sticky "in this article" anchor list on the right side of long-form content, with the active heading highlighted.',
      detailEn: 'This is the "On this page" side rail you see on Stripe Docs, MDN, Google Cloud Docs, and most modern documentation. It scrapes the article\'s h2/h3 headings into a sticky vertical list on the right; as you scroll, the heading you are currently reading lights up. The benefit on long pages is huge — readers always know where they are and how much is left. The modern implementation uses IntersectionObserver to detect which heading is in view, then toggles an active class on the matching anchor link.',
      code: `<!-- Inspired by Stripe Docs -->
<div class="ui-rail">
  <article class="ui-rail__article">
    <h1>Accept a payment</h1>
    <p>Securely accept payments online with the Lumen Payments API.</p>
    <h2>Overview</h2>
    <p>This guide walks you through creating a payment intent, mounting the Payment Element, and confirming the payment on the client.</p>
    <h2>Set up the server</h2>
    <p>Install the Lumen Node.js SDK and create a payment intent endpoint that returns a client_secret to the browser.</p>
    <h2>Mount the Payment Element</h2>
    <p>In your client app, initialize Lumen.js with your publishable key and mount the Payment Element into a container div.</p>
    <h2>Confirm the payment</h2>
    <p>Call lumen.confirmPayment() with the return_url you want the customer redirected to after the payment.</p>
  </article>
  <aside class="ui-rail__rail">
    <div class="ui-rail__title">On this page</div>
    <ul>
      <li><a>Overview</a></li>
      <li class="is-active"><a>Set up the server</a></li>
      <li><a>Mount the Payment Element</a></li>
      <li><a>Confirm the payment</a></li>
      <li><a>Test the integration</a></li>
      <li><a>Go live</a></li>
    </ul>
  </aside>
</div>

<style>
  .ui-rail{display:grid;grid-template-columns:1fr 180px;gap:32px;max-width:720px;font:14.5px -apple-system,"Inter",sans-serif;color:#1a1f36;background:#fff;padding:22px 24px;border:1px solid #e3e8ee;border-radius:8px}
  .ui-rail__article h1{margin:0 0 8px;font:700 22px inherit;letter-spacing:-.01em}
  .ui-rail__article h2{margin:20px 0 6px;font:600 15px inherit;color:#1a1f36}
  .ui-rail__article p{margin:0 0 6px;color:#425466;line-height:1.55;font-size:13.5px}
  .ui-rail__rail{position:sticky;top:20px;align-self:flex-start;font-size:13px;border-left:1px solid #e3e8ee;padding-left:18px}
  .ui-rail__title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#697386;margin-bottom:10px}
  .ui-rail__rail ul{list-style:none;margin:0;padding:0}
  .ui-rail__rail li{position:relative;padding:5px 0}
  .ui-rail__rail a{color:#697386;cursor:pointer;text-decoration:none;font-size:12.5px;line-height:1.4;display:block}
  .ui-rail__rail a:hover{color:#1a1f36}
  .ui-rail__rail li.is-active a{color:#635bff;font-weight:600}
  .ui-rail__rail li.is-active::before{content:"";position:absolute;left:-19px;top:6px;bottom:6px;width:2px;background:#635bff;border-radius:1px}
</style>`,
    },
    {
      name: 'Login + Get Started Pair',
      nameJa: 'ログイン+登録ボタンペア',
      desc: 'ヘッダー右端に「Sign in(テキスト)+ Get started(プライマリ)」のペアを揃えるパターン。',
      detail: 'Slack、Notion、Figma、Stripe、Atlassianなどの企業サイトに共通する、ヘッダー右端の定番CTAペアです。「Sign in」はテキストリンクとして控えめに、「Get started / Sign up free / Start free trial」のような新規導入CTAをプライマリ色のボタンとして並べることで、既存ユーザーと新規ユーザーの両方が迷わず行動できます。新規CTAのほうを強調することで、コンバージョン上のメインアクションが明確になり、サイト全体の主目的(新規獲得)を視覚的に伝えられます。CTAの文言は「Get started free」「Try for free」のように摩擦の少ない表現が定番です。',
      descEn: 'A right-aligned header pair of "Sign in" (text) and "Get started" (primary button).',
      detailEn: 'Slack, Notion, Figma, Stripe, Atlassian — every modern SaaS marketing site uses this header CTA pair. "Sign in" sits as an understated text link for returning users, while "Get started" / "Sign up free" / "Start free trial" is the primary button, painted in the brand color to pull new visitors forward. By styling the acquisition CTA more strongly than the login link the page makes its main goal (new signups) visually unmistakable, while still serving existing users. Friction-light copy like "Get started free" or "Try for free" keeps the bar to entry low.',
      code: `<!-- Inspired by Slack -->
<div class="ui-pair">
  <header class="ui-pair__bar">
    <div class="ui-pair__brand"><span class="ui-pair__mark"></span>chatter</div>
    <nav class="ui-pair__nav">
      <a>Features <span>⌄</span></a>
      <a>Solutions <span>⌄</span></a>
      <a>Enterprise</a>
      <a>Resources <span>⌄</span></a>
      <a>Pricing</a>
    </nav>
    <div class="ui-pair__cta">
      <a class="ui-pair__signin">Sign in</a>
      <button type="button" class="ui-pair__signup">Get started free →</button>
    </div>
  </header>
  <section class="ui-pair__hero">
    <h2>Where work happens.</h2>
    <p>Chatter brings your team, tools, and customers together in one place.</p>
  </section>
</div>

<style>
  .ui-pair{max-width:720px;font:15px "Helvetica Neue",-apple-system,sans-serif;color:#1d1c1d;background:#fff;border:1px solid #e8e8e8;border-radius:6px;overflow:hidden}
  .ui-pair__bar{display:flex;align-items:center;gap:28px;padding:0 22px;height:64px;border-bottom:1px solid #f0f0f0}
  .ui-pair__brand{display:flex;align-items:center;gap:10px;font:800 19px inherit;letter-spacing:-.02em;color:#1d1c1d}
  .ui-pair__mark{position:relative;width:18px;height:18px;background:radial-gradient(circle at 30% 30%,#ecb22e 0 6px,transparent 7px),radial-gradient(circle at 70% 30%,#36c5f0 0 6px,transparent 7px),radial-gradient(circle at 30% 70%,#2eb67d 0 6px,transparent 7px),radial-gradient(circle at 70% 70%,#e01e5a 0 6px,transparent 7px)}
  .ui-pair__nav{display:flex;gap:24px;font-size:14px}
  .ui-pair__nav a{display:inline-flex;align-items:center;gap:3px;color:#1d1c1d;cursor:pointer}
  .ui-pair__nav a span{font-size:10px;color:#616061}
  .ui-pair__nav a:hover{color:#611f69;text-decoration:underline}
  .ui-pair__cta{margin-left:auto;display:flex;align-items:center;gap:14px}
  .ui-pair__signin{font-size:14px;color:#1d1c1d;cursor:pointer;font-weight:500}
  .ui-pair__signin:hover{text-decoration:underline}
  .ui-pair__signup{background:#611f69;color:#fff;border:0;border-radius:4px;padding:10px 18px;font:700 14px inherit;letter-spacing:-.01em;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.06)}
  .ui-pair__signup:hover{background:#4a154b}
  .ui-pair__hero{padding:44px 24px 52px;text-align:center}
  .ui-pair__hero h2{margin:0 0 10px;font:800 30px inherit;letter-spacing:-.02em;color:#1d1c1d}
  .ui-pair__hero p{margin:0;color:#454245;font-size:15px;line-height:1.5}
</style>`,
    },
  ],
};
