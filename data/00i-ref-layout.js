/**
 * UI Parts Reference — Layout, Content & Media (Extended)
 * Additional UI components inspired by reference sites.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-ref-layout',
  title: 'UIパーツ集(レイアウト・コンテンツ・メディア拡張)',
  titleEn: 'Layout, Content & Media (Extended)',
  description: '参考サイトから拾い上げた追加UIパーツ。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Grid Layout',
      nameJa: 'グリッドレイアウト',
      desc: 'コンテンツを均等なグリッドセルに配置する基本レイアウト。',
      detail: 'グリッドレイアウトは、コンテンツを縦横の格子状に均等配置する、最も基本的なレイアウト手法です。CSS Gridを使えば数行で実装でき、商品一覧、ブログ記事のサムネイル、ポートフォリオなど、同じ種類の情報を整然と並べる場面で活躍します。画面サイズに応じて列数を自動調整するレスポンシブ対応も簡単に行えます。視線が左から右、上から下へと自然に流れるため、ユーザーが情報を比較しやすいのが利点です。',
      descEn: 'Arranges content in evenly spaced grid cells.',
      detailEn: 'Grid Layout is the most fundamental layout method, placing content into an evenly spaced matrix of rows and columns. CSS Grid lets you build one in just a few lines of code, making it ideal for product listings, blog thumbnails, or portfolios where similar items should sit in tidy rows. Responsive adjustments — like changing the column count based on screen width — are also straightforward. The natural left-to-right, top-to-bottom reading flow makes it easy for users to compare items.',
      code: `<!-- Inspired by Instagram -->
<div class="ui-grid">
  <div class="ui-grid__cell" style="background:linear-gradient(135deg,#feda75,#fa7e1e,#d62976)"></div>
  <div class="ui-grid__cell" style="background:linear-gradient(135deg,#962fbf,#4f5bd5)"></div>
  <div class="ui-grid__cell" style="background:linear-gradient(135deg,#0a0a0a,#262626)"><span class="ui-grid__reel">▶ 12.4K</span></div>
  <div class="ui-grid__cell" style="background:linear-gradient(135deg,#fcb045,#fd1d1d)"></div>
  <div class="ui-grid__cell" style="background:linear-gradient(135deg,#405de6,#5851db)"><span class="ui-grid__multi">⊞</span></div>
  <div class="ui-grid__cell" style="background:linear-gradient(135deg,#833ab4,#c13584)"></div>
  <div class="ui-grid__cell" style="background:linear-gradient(135deg,#e1306c,#fd1d1d)"></div>
  <div class="ui-grid__cell" style="background:linear-gradient(135deg,#1a1a1a,#3d3d3d)"><span class="ui-grid__reel">▶ 89.2K</span></div>
  <div class="ui-grid__cell" style="background:linear-gradient(135deg,#f56040,#feda75)"></div>
</div>

<style>
  .ui-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;max-width:380px;background:#000;padding:2px;font:14px -apple-system,system-ui,sans-serif}
  .ui-grid__cell{aspect-ratio:1;position:relative;cursor:pointer;transition:opacity .15s}
  .ui-grid__cell:hover{opacity:.85}
  .ui-grid__reel{position:absolute;top:8px;right:8px;color:#fff;font-weight:600;font-size:12px;text-shadow:0 1px 3px rgba(0,0,0,.5)}
  .ui-grid__multi{position:absolute;top:6px;right:8px;color:#fff;font-size:18px;text-shadow:0 1px 3px rgba(0,0,0,.5)}
</style>`,
    },
    {
      name: 'Masonry Layout',
      nameJa: 'メイソンリー',
      desc: '高さの異なるカードをレンガ積みのように隙間なく並べるレイアウト。',
      detail: 'メイソンリーレイアウトは、高さがバラバラなカードをレンガを積むように上に詰めて配置するレイアウト手法です。Pinterestが代表例で、画像の縦横比をそのまま生かしながら、余白なくびっしりと並べられるのが特徴です。同じ列の中で次のカードがすぐ上に詰まるため、グリッドのような無駄な空白が生まれません。写真ギャラリー、ブログ一覧、UIインスピレーション集など、要素サイズが揃わないコンテンツに最適です。',
      descEn: 'A brick-like layout filling gaps between cards of varying heights.',
      detailEn: 'Masonry layout stacks cards of varying heights upward like bricks, eliminating the gaps you would see in a strict grid. Pinterest is the classic example: images keep their natural aspect ratios while still fitting together densely. Within each column, the next card slots in just below the previous one, so no awkward whitespace appears. It is perfect for photo galleries, blog indexes, and inspiration boards where elements come in many sizes.',
      code: `<!-- Inspired by Pinterest -->
<div class="ui-pin">
  <div class="ui-pin__card" style="height:180px;background:linear-gradient(160deg,#ffb88c,#de6262)"><span>Cozy reading nook ideas</span></div>
  <div class="ui-pin__card" style="height:240px;background:linear-gradient(160deg,#83a4d4,#b6fbff)"><span>Coastal interior design</span></div>
  <div class="ui-pin__card" style="height:140px;background:linear-gradient(160deg,#c9d6ff,#e2e2e2)"><span>Minimal workspace</span></div>
  <div class="ui-pin__card" style="height:200px;background:linear-gradient(160deg,#f7797d,#fbd786,#c6ffdd)"><span>Brunch recipes</span></div>
  <div class="ui-pin__card" style="height:160px;background:linear-gradient(160deg,#414345,#232526)"><span>Black & white photography</span></div>
  <div class="ui-pin__card" style="height:280px;background:linear-gradient(160deg,#a8e063,#56ab2f)"><span>Indoor plants 101</span></div>
  <div class="ui-pin__card" style="height:120px;background:linear-gradient(160deg,#ee9ca7,#ffdde1)"><span>Nail art inspiration</span></div>
  <div class="ui-pin__card" style="height:220px;background:linear-gradient(160deg,#42275a,#734b6d)"><span>Autumn fashion lookbook</span></div>
  <div class="ui-pin__card" style="height:160px;background:linear-gradient(160deg,#dce35b,#45b649)"><span>Mountain hiking trails</span></div>
</div>

<style>
  .ui-pin{column-count:3;column-gap:12px;max-width:520px;font:14px -apple-system,system-ui,sans-serif;padding:12px;background:#fff}
  .ui-pin__card{break-inside:avoid;margin-bottom:12px;border-radius:16px;position:relative;cursor:zoom-in;overflow:hidden;transition:transform .2s}
  .ui-pin__card:hover{transform:scale(1.02);box-shadow:0 4px 16px rgba(0,0,0,.15)}
  .ui-pin__card span{position:absolute;bottom:10px;left:12px;right:12px;color:#fff;font-weight:600;font-size:13px;text-shadow:0 1px 4px rgba(0,0,0,.4);line-height:1.3}
  .ui-pin__card::after{content:"Save";position:absolute;top:10px;right:10px;background:#e60023;color:#fff;font-weight:700;font-size:12px;padding:6px 12px;border-radius:999px;opacity:0;transition:.15s}
  .ui-pin__card:hover::after{opacity:1}
  @media(max-width:480px){.ui-pin{column-count:2}}
</style>`,
    },
    {
      name: 'Card Layout',
      nameJa: 'カードレイアウト',
      desc: '情報を独立したカード単位にまとめて並べるパターン。',
      detail: 'カードレイアウトは、画像・タイトル・説明・操作ボタンなど関連する情報を1つの「カード」にまとめ、それを並べて表示するレイアウトパターンです。各カードが独立した塊として認識されるため、ユーザーは1件ずつの情報を比較しやすくなります。ECサイトの商品一覧、ニュース記事のサムネイル、SNSの投稿などで広く使われています。影や角丸を使うことで、紙のカードのように手に取れそうな質感を演出できます。',
      descEn: 'Groups information into independent card units arranged in a grid.',
      detailEn: 'Card layout packages related pieces of content — image, title, description, action button — into a single self-contained card, then arranges those cards side by side. Because each card reads as its own unit, users can scan and compare items one at a time. You see this everywhere: e-commerce product listings, news article previews, social media feeds. Light shadows and rounded corners give cards a tactile, paper-like feel that invites interaction.',
      code: `<!-- Inspired by Airbnb -->
<div class="ui-abnb">
  <article class="ui-abnb__card">
    <div class="ui-abnb__img" style="background:linear-gradient(135deg,#ff9a8b,#ff6a88,#ff99ac)"><button class="ui-abnb__heart">♥</button><span class="ui-abnb__badge">Guest favorite</span></div>
    <div class="ui-abnb__info">
      <div class="ui-abnb__row"><strong>Malibu, California</strong><span>★ 4.97</span></div>
      <div class="ui-abnb__sub">Ocean view · 2 beds</div>
      <div class="ui-abnb__sub">Nov 12 – 17</div>
      <div class="ui-abnb__price"><b>$342</b> night</div>
    </div>
  </article>
  <article class="ui-abnb__card">
    <div class="ui-abnb__img" style="background:linear-gradient(135deg,#4facfe,#00f2fe)"><button class="ui-abnb__heart">♥</button></div>
    <div class="ui-abnb__info">
      <div class="ui-abnb__row"><strong>Kyoto, Japan</strong><span>★ 4.89</span></div>
      <div class="ui-abnb__sub">Traditional machiya · 4 guests</div>
      <div class="ui-abnb__sub">Dec 3 – 8</div>
      <div class="ui-abnb__price"><b>$198</b> night</div>
    </div>
  </article>
</div>

<style>
  .ui-abnb{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;font:14px 'Circular',-apple-system,sans-serif;max-width:560px;color:#222}
  .ui-abnb__card{cursor:pointer}
  .ui-abnb__img{aspect-ratio:1;border-radius:12px;position:relative;margin-bottom:12px}
  .ui-abnb__heart{position:absolute;top:12px;right:12px;width:32px;height:32px;background:transparent;border:0;color:#fff;font-size:22px;cursor:pointer;text-shadow:0 1px 3px rgba(0,0,0,.5);filter:drop-shadow(0 1px 2px rgba(0,0,0,.3))}
  .ui-abnb__badge{position:absolute;top:12px;left:12px;background:#fff;color:#222;font-weight:600;font-size:12px;padding:5px 10px;border-radius:999px}
  .ui-abnb__row{display:flex;justify-content:space-between;font-size:15px;margin-bottom:2px}
  .ui-abnb__sub{color:#717171;font-size:14px}
  .ui-abnb__price{margin-top:6px;font-size:14px}
  .ui-abnb__price b{font-weight:600;text-decoration:underline}
</style>`,
    },
    {
      name: 'Split Screen',
      nameJa: 'スプリットスクリーン',
      desc: '画面を左右に2分割し、異なるコンテンツを並べるレイアウト。',
      detail: 'スプリットスクリーンは、画面を左右(または上下)に2分割し、それぞれに異なるコンテンツを配置するレイアウトです。ログインページで「左に説明・右にフォーム」のように見せたり、Before/Afterの比較、二者択一の選択肢提示などで使われます。両側に同じくらいの視覚的重みを与えることで「2つの選択肢が同等にある」と伝えられるのが特徴です。コードエディタとプレビュー、地図と詳細情報など、関連する情報を並べて見せたいときにも有効です。',
      descEn: 'Divides the screen into two halves with different content.',
      detailEn: 'Split screen divides the viewport into two equal halves (horizontally or vertically) and places different content in each. You see it on login pages with "intro on the left, form on the right," in before/after comparisons, or when presenting two equally-weighted choices. By giving both sides similar visual weight, it signals that the two options are peers. It is also useful for showing related information side by side, like code and preview, or map and details.',
      code: `<!-- Inspired by Linear -->
<div class="ui-lnr">
  <div class="ui-lnr__list">
    <div class="ui-lnr__head">Inbox <span>23</span></div>
    <div class="ui-lnr__row active"><span class="ui-lnr__id">ENG-412</span><span>Fix flicker on tab switch</span></div>
    <div class="ui-lnr__row"><span class="ui-lnr__id">ENG-411</span><span>Sidebar collapse animation</span></div>
    <div class="ui-lnr__row"><span class="ui-lnr__id">DES-87</span><span>New empty state illustrations</span></div>
    <div class="ui-lnr__row"><span class="ui-lnr__id">ENG-409</span><span>Migrate to React 19</span></div>
    <div class="ui-lnr__row"><span class="ui-lnr__id">OPS-22</span><span>Increase Postgres pool size</span></div>
  </div>
  <div class="ui-lnr__detail">
    <div class="ui-lnr__crumb">Triage › ENG-412</div>
    <h1>Fix flicker on tab switch</h1>
    <div class="ui-lnr__meta"><span class="ui-lnr__pill">● In Progress</span><span class="ui-lnr__pill">High</span><span class="ui-lnr__pill">v2.4</span></div>
    <p>Tabs briefly unmount before remount when switching between Workflows and Triage, causing visible content flash on Safari.</p>
  </div>
</div>

<style>
  .ui-lnr{display:grid;grid-template-columns:260px 1fr;background:#08090a;color:#e6e6e7;font:13px 'Inter',-apple-system,sans-serif;border:1px solid #1f1f22;border-radius:10px;overflow:hidden;max-width:640px;min-height:340px}
  .ui-lnr__list{border-right:1px solid #1f1f22;padding:14px 6px}
  .ui-lnr__head{padding:6px 10px 12px;font-weight:600;color:#9b9ba1;font-size:12px;display:flex;justify-content:space-between}
  .ui-lnr__row{display:flex;gap:10px;padding:7px 10px;border-radius:6px;cursor:pointer;color:#c4c4c8}
  .ui-lnr__row:hover{background:#141416}
  .ui-lnr__row.active{background:#1a1a1d;color:#fff}
  .ui-lnr__id{color:#5e6ad2;font-family:'JetBrains Mono',monospace;font-size:11px;flex-shrink:0}
  .ui-lnr__detail{padding:24px}
  .ui-lnr__crumb{color:#7a7a82;font-size:12px;margin-bottom:14px}
  .ui-lnr__detail h1{margin:0 0 14px;font-size:18px;color:#fff;font-weight:600}
  .ui-lnr__meta{display:flex;gap:6px;margin-bottom:16px}
  .ui-lnr__pill{background:#141416;border:1px solid #1f1f22;padding:3px 9px;border-radius:5px;font-size:11px;color:#c4c4c8}
  .ui-lnr__detail p{color:#9b9ba1;line-height:1.6;font-size:13px;margin:0}
</style>`,
    },
    {
      name: 'Bento Grid',
      nameJa: 'ベントグリッド',
      desc: '様々なサイズのカードをタイル状に配置するモダンレイアウト。',
      detail: 'ベントグリッドは、日本のお弁当箱のように、大小さまざまなサイズのタイルを組み合わせて配置するモダンなレイアウトです。AppleやLinear、Vercelなどの製品紹介ページで頻繁に使われており、視覚的なリズムを生み出しながら、重要な情報を大きなタイルで強調できるのが特徴です。均一なグリッドより遊び心があり、製品の機能を一画面でリッチに伝えたいときに最適。タイル内には画像・テキスト・アニメーションなど自由に配置できます。',
      descEn: 'A modern layout with variably-sized tiles arranged in a grid.',
      detailEn: 'Bento grid arranges tiles of varying sizes like compartments in a Japanese bento lunchbox. It has become a signature style on product pages for Apple, Linear, Vercel, and others, creating visual rhythm while letting you emphasize key features with larger tiles. Compared with a uniform grid, it feels more playful and is great when you want to communicate many features richly on a single screen. Each tile can host any mix of images, text, or animation.',
      code: `<!-- Inspired by Apple (Vision Pro) -->
<div class="ui-bento">
  <div class="ui-bento__t a"><span class="ui-bento__eyebrow">Display</span><h3>23 million pixels</h3><p>Across two micro-OLED displays.</p></div>
  <div class="ui-bento__t b"><span class="ui-bento__eyebrow">Audio</span><h3>Spatial Audio</h3></div>
  <div class="ui-bento__t c"><div class="ui-bento__ring"></div></div>
  <div class="ui-bento__t d"><span class="ui-bento__eyebrow">Chip</span><h3>M2 + R1</h3><p>Designed for spatial computing.</p></div>
  <div class="ui-bento__t e"><span class="ui-bento__eyebrow">EyeSight</span><h3>See & be seen</h3></div>
  <div class="ui-bento__t f"><span class="ui-bento__eyebrow">Battery</span><h3>2 hours</h3></div>
</div>

<style>
  .ui-bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:140px;gap:10px;font:-apple-system,'SF Pro Display',sans-serif;max-width:620px;background:#000;padding:10px;border-radius:20px}
  .ui-bento__t{background:#1d1d1f;border-radius:18px;padding:22px;display:flex;flex-direction:column;justify-content:flex-end;color:#f5f5f7;position:relative;overflow:hidden}
  .ui-bento__eyebrow{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#86868b;margin-bottom:6px;font-weight:600}
  .ui-bento__t h3{margin:0 0 4px;font-size:20px;font-weight:600;letter-spacing:-.01em}
  .ui-bento__t p{margin:0;font-size:13px;color:#a1a1a6;line-height:1.4}
  .ui-bento__t.a{grid-column:span 2;grid-row:span 2;background:radial-gradient(circle at 30% 20%,#3a3a3c,#1d1d1f)}
  .ui-bento__t.b{grid-column:span 2;background:linear-gradient(135deg,#1d1d1f,#2c2c2e)}
  .ui-bento__t.c{grid-column:span 1;background:#000;align-items:center;justify-content:center}
  .ui-bento__ring{width:60px;height:60px;border-radius:50%;border:3px solid #007aff;box-shadow:0 0 30px rgba(0,122,255,.5)}
  .ui-bento__t.d{grid-column:span 1;background:linear-gradient(160deg,#252528,#1a1a1c)}
  .ui-bento__t.e{grid-column:span 2;background:linear-gradient(120deg,#2c2c2e,#1d1d1f)}
  .ui-bento__t.f{grid-column:span 2;background:#1d1d1f}
</style>`,
    },
    {
      name: 'Holy Grail Layout',
      nameJa: 'ホーリーグレイル',
      desc: 'ヘッダー+フッター+3カラムの伝統的Webレイアウト。',
      detail: 'ホーリーグレイル(聖杯)レイアウトは、ヘッダー・フッター・左右サイドバー・中央メインコンテンツの5領域からなる、Web黎明期からある伝統的なレイアウトパターンです。「実装が難しいが理想的な構成」だったことから「聖杯」と呼ばれてきましたが、現在はCSS Gridを使えば数行で組めます。左サイドバーをナビゲーション、中央を本文、右サイドバーを補足情報や広告に使う、ニュースサイトや管理画面の定番構成です。',
      descEn: 'A classic web layout with header, footer, and 3 columns.',
      detailEn: 'The "Holy Grail" layout is a five-region pattern dating back to the early web: header, footer, left sidebar, main content, and right sidebar. It earned its mythical name because, before modern CSS, it was notoriously hard to build well — but CSS Grid now makes it a few lines of code. The left sidebar typically holds navigation, the center holds the main article, and the right sidebar carries supplementary info or ads. It is a staple of news sites and admin dashboards.',
      code: `<!-- Inspired by Gmail -->
<div class="ui-gmail">
  <header class="ui-gmail__top"><span class="ui-gmail__logo">M</span><span class="ui-gmail__brand">Gmail</span><input placeholder="Search mail"><span class="ui-gmail__avatar">A</span></header>
  <nav class="ui-gmail__nav"><button class="compose">✎ Compose</button><a class="on">📥 Inbox <span>1,284</span></a><a>⭐ Starred</a><a>🕓 Snoozed</a><a>📤 Sent</a><a>📝 Drafts</a></nav>
  <main class="ui-gmail__list">
    <div class="ui-gmail__row unread"><b>GitHub</b><span>[claude-ai/sdk] PR #4821 merged into main</span><time>10:42</time></div>
    <div class="ui-gmail__row unread"><b>Vercel</b><span>Deployment succeeded for ui-glossary</span><time>09:18</time></div>
    <div class="ui-gmail__row"><b>Linear</b><span>Weekly digest — 12 issues completed</span><time>Mon</time></div>
    <div class="ui-gmail__row"><b>Figma</b><span>Sarah commented on "Dashboard v3"</span><time>Mon</time></div>
  </main>
  <aside class="ui-gmail__side"><div class="ui-gmail__app">📅</div><div class="ui-gmail__app">📝</div><div class="ui-gmail__app">✓</div></aside>
  <footer class="ui-gmail__foot">Last account activity: 2 hours ago</footer>
</div>

<style>
  .ui-gmail{display:grid;grid-template-columns:240px 1fr 56px;grid-template-rows:56px 1fr 28px;grid-template-areas:"top top top" "nav list side" "foot foot foot";font:13px 'Google Sans','Roboto',sans-serif;max-width:680px;min-height:360px;background:#f6f8fc;border:1px solid #dadce0;border-radius:8px;overflow:hidden;color:#202124}
  .ui-gmail__top{grid-area:top;display:flex;align-items:center;gap:14px;padding:0 16px;background:#fff;border-bottom:1px solid #e8eaed}
  .ui-gmail__logo{width:32px;height:32px;background:#ea4335;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700}
  .ui-gmail__brand{font-size:18px;color:#5f6368;font-weight:500}
  .ui-gmail__top input{flex:1;background:#eaf1fb;border:0;padding:10px 14px;border-radius:8px;font-size:13px}
  .ui-gmail__avatar{width:32px;height:32px;background:#1a73e8;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600}
  .ui-gmail__nav{grid-area:nav;padding:14px 8px;display:flex;flex-direction:column;gap:2px;background:#f6f8fc}
  .ui-gmail__nav .compose{background:#c2e7ff;border:0;padding:14px 18px;border-radius:16px;font-weight:600;text-align:left;cursor:pointer;margin-bottom:10px;color:#001d35}
  .ui-gmail__nav a{padding:8px 18px;border-radius:0 16px 16px 0;color:#202124;cursor:pointer;display:flex;justify-content:space-between;font-size:13px}
  .ui-gmail__nav a.on{background:#d3e3fd;font-weight:700}
  .ui-gmail__nav a span{color:#5f6368;font-size:11px}
  .ui-gmail__list{grid-area:list;background:#fff;overflow:auto}
  .ui-gmail__row{display:grid;grid-template-columns:140px 1fr auto;gap:14px;padding:11px 16px;border-bottom:1px solid #f1f3f4;cursor:pointer;font-size:13px;align-items:center}
  .ui-gmail__row:hover{box-shadow:inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px rgba(60,64,67,.1)}
  .ui-gmail__row.unread{font-weight:600;background:#fff}
  .ui-gmail__row time{color:#5f6368;font-size:12px}
  .ui-gmail__side{grid-area:side;background:#f6f8fc;border-left:1px solid #e8eaed;display:flex;flex-direction:column;align-items:center;gap:14px;padding:14px 0}
  .ui-gmail__app{width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer}
  .ui-gmail__app:hover{background:#e8eaed}
  .ui-gmail__foot{grid-area:foot;background:#fff;border-top:1px solid #e8eaed;color:#5f6368;font-size:11px;text-align:center;line-height:28px}
</style>`,
    },
    {
      name: 'Full Bleed',
      nameJa: 'フルブリード',
      desc: 'コンテンツを画面幅いっぱいに広げるレイアウト。没入感を演出。',
      detail: 'フルブリードレイアウトは、コンテンツ(特に画像や動画)を画面の左右の端まで、余白なくいっぱいに広げる手法です。元は印刷用語で「裁ち落とし」を意味し、紙の端まで色や絵柄を伸ばす表現を指します。Webでは、ヒーローセクションやランディングページで写真や動画をフルブリードにすることで、ブランドの世界観に一気に引き込む没入感を生み出せます。ECやポートフォリオ、ニュースサイトの記事画像で頻繁に見られる手法です。',
      descEn: 'Extends content to the full screen width for an immersive feel.',
      detailEn: 'Full bleed stretches content — usually a hero image or video — all the way to the left and right edges of the screen, with no surrounding margin. The term comes from print, where "bleed" means ink running off the edge of the page. On the web, applying it to a hero section instantly immerses visitors in a brand\'s world, which is why you see it so often on landing pages, e-commerce sites, portfolios, and editorial article headers.',
      code: `<!-- Inspired by Apple (iPhone hero) -->
<section class="ui-hero">
  <nav class="ui-hero__nav"><span></span><a>Store</a><a>Mac</a><a>iPad</a><a>iPhone</a><a>Watch</a><a>Vision</a><a>Support</a></nav>
  <div class="ui-hero__stage">
    <p class="ui-hero__eyebrow">New</p>
    <h1>iPhone 16 Pro</h1>
    <p class="ui-hero__tag">Hello, Apple Intelligence.</p>
    <div class="ui-hero__cta"><a class="primary">Buy</a><a>Learn more ›</a></div>
    <div class="ui-hero__device"></div>
  </div>
</section>

<style>
  .ui-hero{background:#000;color:#f5f5f7;font:-apple-system,'SF Pro Display',sans-serif;border-radius:18px;overflow:hidden;max-width:720px}
  .ui-hero__nav{display:flex;gap:22px;padding:0 22px;height:44px;align-items:center;background:rgba(22,22,23,.8);backdrop-filter:blur(20px);font-size:12px;color:#f5f5f7}
  .ui-hero__nav span{font-size:18px}
  .ui-hero__nav span::before{content:""}
  .ui-hero__nav a{color:#f5f5f7;opacity:.88;cursor:pointer}
  .ui-hero__nav a:hover{opacity:1}
  .ui-hero__stage{padding:50px 22px 0;text-align:center;background:linear-gradient(180deg,#000 0%,#1c1c1e 60%,#000 100%)}
  .ui-hero__eyebrow{margin:0;color:#86868b;font-size:14px;letter-spacing:.02em}
  .ui-hero__stage h1{margin:4px 0 6px;font-size:52px;font-weight:600;letter-spacing:-.03em;background:linear-gradient(90deg,#bda9d9,#7c5fb5,#bda9d9);-webkit-background-clip:text;background-clip:text;color:transparent}
  .ui-hero__tag{margin:0 0 18px;font-size:21px;color:#f5f5f7;font-weight:400}
  .ui-hero__cta{display:flex;gap:24px;justify-content:center;margin-bottom:36px}
  .ui-hero__cta a{font-size:15px;color:#2997ff;cursor:pointer}
  .ui-hero__cta a.primary{background:#0071e3;color:#fff;padding:8px 18px;border-radius:980px}
  .ui-hero__device{height:170px;background:linear-gradient(180deg,#3a2d4d,#5b4880);border-radius:40px 40px 0 0;margin:0 80px;box-shadow:inset 0 0 60px rgba(0,0,0,.5),0 -20px 80px rgba(124,95,181,.4)}
</style>`,
    },
    {
      name: 'Sticky Sidebar',
      nameJa: 'スティッキーサイドバー',
      desc: 'メインコンテンツのスクロールに追従するサイドバー。',
      detail: 'スティッキーサイドバーは、ページをスクロールしてもサイドバーが画面内の一定位置にとどまり、メインコンテンツだけが流れていくように見えるレイアウトです。ブログ記事の目次、ドキュメントサイトのナビゲーション、ECサイトのフィルター・カート情報など、常に手元に置いておきたい情報を表示するのに最適。CSSのposition: stickyを使えば簡単に実装でき、ユーザーは長いページ内でも迷わず操作できます。',
      descEn: 'A sidebar that follows the main content on scroll.',
      detailEn: 'A sticky sidebar pins itself within the viewport so that, as users scroll the main content, the sidebar stays in place at a fixed position. It is perfect for table-of-contents lists in blog posts, navigation in documentation sites, or filters and cart summaries on e-commerce pages — anything users need within reach. CSS `position: sticky` makes it almost trivial to implement, and it keeps long pages from becoming confusing to navigate.',
      code: `<!-- Inspired by Notion -->
<div class="ui-ntn">
  <aside class="ui-ntn__side">
    <div class="ui-ntn__ws">🅰 Acme Workspace ⌄</div>
    <div class="ui-ntn__search">🔍 Search</div>
    <div class="ui-ntn__item">⏱ Updates</div>
    <div class="ui-ntn__item">⚙ Settings</div>
    <div class="ui-ntn__sec">Private</div>
    <div class="ui-ntn__item open">📔 Engineering Wiki</div>
    <div class="ui-ntn__item sub on">📄 Onboarding</div>
    <div class="ui-ntn__item sub">📄 Code review guide</div>
    <div class="ui-ntn__item sub">📄 Incident playbook</div>
    <div class="ui-ntn__item">🎯 OKRs Q4</div>
    <div class="ui-ntn__item">📅 Weekly meeting notes</div>
    <div class="ui-ntn__item add">+ Add a page</div>
  </aside>
  <main class="ui-ntn__main">
    <div class="ui-ntn__crumb">Engineering Wiki / Onboarding</div>
    <h1>📄 Onboarding</h1>
    <p>Welcome to the team! This page walks you through everything you need to know in your first two weeks.</p>
    <h2>Week 1: Setup</h2>
    <p>Install the dev environment, get access to all repos, and pair with your buddy.</p>
    <h2>Week 2: First PR</h2>
    <p>Pick a "good first issue" from the backlog and ship it end to end.</p>
  </main>
</div>

<style>
  .ui-ntn{display:grid;grid-template-columns:240px 1fr;font:14px -apple-system,'Segoe UI',sans-serif;max-width:680px;background:#fff;border:1px solid #e9e9e7;border-radius:6px;max-height:380px;overflow:auto;color:#37352f}
  .ui-ntn__side{background:#fbfbfa;padding:8px;position:sticky;top:0;align-self:start;border-right:1px solid #e9e9e7;font-size:14px}
  .ui-ntn__ws{padding:6px 8px;font-weight:600;font-size:13px;border-radius:4px;cursor:pointer}
  .ui-ntn__search{padding:6px 8px;color:#9b9a97;font-size:13px;margin:4px 0 10px;cursor:pointer}
  .ui-ntn__item{padding:4px 8px;border-radius:4px;cursor:pointer;color:#37352f;font-size:14px;line-height:1.4}
  .ui-ntn__item:hover{background:#efefee}
  .ui-ntn__item.sub{padding-left:24px;font-size:13px;color:#37352fcc}
  .ui-ntn__item.on{background:#e8e7e4;font-weight:500}
  .ui-ntn__item.add{color:#9b9a97;margin-top:6px}
  .ui-ntn__sec{padding:14px 8px 4px;font-size:11px;color:#9b9a97;font-weight:600;text-transform:uppercase;letter-spacing:.02em}
  .ui-ntn__main{padding:60px 80px}
  .ui-ntn__crumb{color:#9b9a97;font-size:12px;margin-bottom:30px}
  .ui-ntn__main h1{margin:0 0 14px;font-size:36px;font-weight:700;letter-spacing:-.01em}
  .ui-ntn__main h2{margin:24px 0 8px;font-size:20px;font-weight:600}
  .ui-ntn__main p{color:#37352f;line-height:1.5;font-size:15px;margin:0 0 8px}
</style>`,
    },
    {
      name: 'Carousel / Slider',
      nameJa: 'カルーセル',
      desc: '複数のコンテンツを左右にスワイプ/クリックで切り替える。',
      detail: 'カルーセル(スライダー)は、複数のコンテンツを同じ場所に重ねて表示し、左右の矢印やスワイプで切り替えるUIです。写真ギャラリー、おすすめ商品の紹介、ヒーローセクションでの複数バナー表示などでよく使われます。限られた縦スペースで多くのコンテンツを見せられる反面、ユーザーが2枚目以降を見ない傾向もあるため、最も重要なコンテンツは最初のスライドに置くのが鉄則。下部のドットインジケータで現在地と全体数を示すと親切です。',
      descEn: 'Swipe or click to cycle through multiple content items.',
      detailEn: 'A carousel (slider) stacks several pieces of content in the same area and lets users cycle through them with arrows or swipe gestures. It is common in photo galleries, "recommended" product showcases, and hero sections with multiple banners. While it lets you fit more content into limited vertical space, users often only see the first slide — so always put the most important content there. A row of dots below shows current position and total slides, making the UI more navigable.',
      code: `<!-- Inspired by Netflix -->
<div class="ui-nflx">
  <h2 class="ui-nflx__title">Trending Now</h2>
  <div class="ui-nflx__row" id="nflxRow">
    <div class="ui-nflx__tile" style="background:linear-gradient(135deg,#e50914,#7a0008)"><span class="ui-nflx__rank">1</span><span class="ui-nflx__label">Stranger Things</span></div>
    <div class="ui-nflx__tile" style="background:linear-gradient(135deg,#1a1a2e,#16213e)"><span class="ui-nflx__rank">2</span><span class="ui-nflx__label">The Crown</span></div>
    <div class="ui-nflx__tile" style="background:linear-gradient(135deg,#2d1b3e,#5a2a8a)"><span class="ui-nflx__rank">3</span><span class="ui-nflx__label">Wednesday</span></div>
    <div class="ui-nflx__tile" style="background:linear-gradient(135deg,#0f4c5c,#5f0f40)"><span class="ui-nflx__rank">4</span><span class="ui-nflx__label">Squid Game</span></div>
    <div class="ui-nflx__tile" style="background:linear-gradient(135deg,#3d0000,#950000)"><span class="ui-nflx__rank">5</span><span class="ui-nflx__label">Money Heist</span></div>
    <div class="ui-nflx__tile" style="background:linear-gradient(135deg,#1f1f1f,#3a3a3a)"><span class="ui-nflx__rank">6</span><span class="ui-nflx__label">Black Mirror</span></div>
  </div>
  <button class="ui-nflx__nav prev" data-d="-1">‹</button>
  <button class="ui-nflx__nav next" data-d="1">›</button>
</div>

<style>
  .ui-nflx{position:relative;background:#141414;padding:18px 0 28px;font:'Netflix Sans',-apple-system,sans-serif;max-width:560px;overflow:hidden}
  .ui-nflx__title{color:#e5e5e5;font-size:20px;font-weight:700;margin:0 0 12px 48px}
  .ui-nflx__row{display:flex;gap:6px;padding:0 48px;overflow-x:auto;scroll-behavior:smooth;scrollbar-width:none}
  .ui-nflx__row::-webkit-scrollbar{display:none}
  .ui-nflx__tile{flex:0 0 140px;aspect-ratio:2/3;border-radius:4px;position:relative;cursor:pointer;transition:transform .3s}
  .ui-nflx__tile:hover{transform:scale(1.08);z-index:2}
  .ui-nflx__rank{position:absolute;left:-14px;bottom:-10px;font-size:96px;font-weight:900;color:#000;-webkit-text-stroke:2px #e5e5e5;line-height:1;font-family:'Helvetica',sans-serif}
  .ui-nflx__label{position:absolute;bottom:8px;right:10px;color:#fff;font-weight:700;font-size:11px;text-shadow:0 1px 4px rgba(0,0,0,.8);text-align:right}
  .ui-nflx__nav{position:absolute;top:50%;width:40px;height:64px;border:0;background:rgba(20,20,20,.7);color:#fff;font-size:32px;cursor:pointer;z-index:3}
  .ui-nflx__nav.prev{left:0;border-radius:0 4px 4px 0}
  .ui-nflx__nav.next{right:0;border-radius:4px 0 0 4px}
  .ui-nflx__nav:hover{background:rgba(20,20,20,.9)}
</style>

<script>
  (()=>{const row=document.getElementById('nflxRow');document.querySelectorAll('.ui-nflx__nav').forEach(b=>b.addEventListener('click',()=>row.scrollBy({left:Number(b.dataset.d)*420,behavior:'smooth'})));})();
</script>`,
    },
    {
      name: 'Lightbox',
      nameJa: 'ライトボックス',
      desc: '画像をフルスクリーンオーバーレイで拡大表示する。',
      detail: 'ライトボックスは、画像のサムネイルをクリックしたとき、画面全体を暗く覆って中央に大きく拡大表示するUIです。元は写真用語でスライドを照らす台のことを指し、その「明るく照らして見せる」イメージから名付けられました。ギャラリー、商品写真、作品集など、画像をじっくり見せたい場面で活躍します。前後への移動ボタンや、Escキーでの閉じる動作を実装すると親切。背景クリックで閉じる挙動も標準です。',
      descEn: 'Displays an image in a fullscreen overlay for enlarged viewing.',
      detailEn: 'A lightbox dims the entire screen and shows a clicked thumbnail at a much larger size in the center. The name comes from photography — a light box was the illuminated panel for viewing slides, and the UI evokes that "brightly highlighted display" feel. It is great for galleries, product photos, and portfolios where users need to really study an image. Pair it with previous/next buttons, an Esc-to-close shortcut, and click-the-backdrop-to-close behavior for a polished experience.',
      code: `<!-- Inspired by X (Twitter) -->
<div class="ui-x">
  <button class="ui-x__close">✕</button>
  <div class="ui-x__stage">
    <button class="ui-x__arrow prev">‹</button>
    <div class="ui-x__photo"></div>
    <button class="ui-x__arrow next">›</button>
  </div>
  <div class="ui-x__meta">
    <div class="ui-x__user"><div class="ui-x__avatar">J</div><div><b>Jane Doe</b> <span>@janedoe · 4h</span><p>Caught this sunrise from my hotel window in Lisbon this morning. Worth the early alarm 🌅</p></div></div>
    <div class="ui-x__actions"><span>💬 142</span><span>🔁 1.2K</span><span>♥ 8.4K</span><span>📊 92K</span><span>↗</span></div>
  </div>
</div>

<style>
  .ui-x{position:relative;background:rgba(91,112,131,.4);backdrop-filter:blur(12px);width:100%;max-width:720px;height:480px;border-radius:16px;overflow:hidden;display:grid;grid-template-rows:1fr auto;font:14px -apple-system,'Segoe UI',sans-serif;color:#e7e9ea}
  .ui-x__close{position:absolute;top:14px;left:14px;width:36px;height:36px;border-radius:50%;border:0;background:rgba(0,0,0,.5);color:#fff;font-size:14px;cursor:pointer;z-index:3}
  .ui-x__stage{position:relative;display:flex;align-items:center;justify-content:center;background:#000}
  .ui-x__photo{width:90%;height:90%;background:linear-gradient(180deg,#1a3a5c 0%,#ff6b35 50%,#f7b801 80%,#3d3d3d 100%);border-radius:4px}
  .ui-x__arrow{position:absolute;width:40px;height:40px;border-radius:50%;border:0;background:rgba(0,0,0,.5);color:#fff;font-size:22px;cursor:pointer}
  .ui-x__arrow.prev{left:14px}
  .ui-x__arrow.next{right:14px}
  .ui-x__meta{background:#000;padding:14px 18px;border-top:1px solid #2f3336}
  .ui-x__user{display:flex;gap:10px;margin-bottom:10px}
  .ui-x__avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#1d9bf0,#7856ff);display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;color:#fff}
  .ui-x__user b{color:#e7e9ea}
  .ui-x__user span{color:#71767b;font-size:13px}
  .ui-x__user p{margin:2px 0 0;color:#e7e9ea;font-size:14px;line-height:1.4}
  .ui-x__actions{display:flex;justify-content:space-between;color:#71767b;font-size:13px;padding:6px 0 2px;max-width:520px}
  .ui-x__actions span{cursor:pointer}
  .ui-x__actions span:hover{color:#1d9bf0}
</style>`,
    },
    {
      name: 'Pricing Table',
      nameJa: '料金テーブル',
      desc: '複数プランを横並びで比較表示する。おすすめプランを強調。',
      detail: '料金テーブルは、サービスの複数の料金プラン(無料・スタンダード・プロなど)を横並びで比較表示するUIです。各プランごとに価格・対象ユーザー・含まれる機能・申し込みボタンを揃え、ユーザーが一目で違いを把握できるようにします。中央のプランを少し大きく、または色違いで強調し「おすすめ」と示すのが定番テクニック。SaaSのランディングページ、有料会員ページの中核要素として、コンバージョン率を左右する重要なUIです。',
      descEn: 'Side-by-side plan comparison. Highlights the recommended option.',
      detailEn: 'A pricing table shows multiple subscription plans — Free, Standard, Pro, and so on — in a side-by-side comparison. Each column lists the price, target audience, included features, and a call-to-action button, so users can see the differences at a glance. The middle plan is often visually enlarged or color-accented and labeled "Recommended," a proven technique to guide choice. It is a critical conversion element on SaaS landing pages and paid-plan signup screens.',
      code: `<!-- Inspired by Vercel -->
<div class="ui-vc">
  <div class="ui-vc__plan">
    <h3>Hobby</h3>
    <p class="ui-vc__sub">For personal projects.</p>
    <div class="ui-vc__price">Free</div>
    <button class="ui-vc__btn">Start Deploying</button>
    <ul>
      <li>✓ 100 GB Bandwidth</li>
      <li>✓ Unlimited Projects</li>
      <li>✓ Preview Deployments</li>
      <li>✓ Community Support</li>
    </ul>
  </div>
  <div class="ui-vc__plan pro">
    <div class="ui-vc__tag">Most Popular</div>
    <h3>Pro</h3>
    <p class="ui-vc__sub">For professional developers.</p>
    <div class="ui-vc__price">$20<span> per user / month</span></div>
    <button class="ui-vc__btn primary">Upgrade to Pro</button>
    <ul>
      <li>✓ 1 TB Bandwidth</li>
      <li>✓ Advanced Analytics</li>
      <li>✓ Password Protection</li>
      <li>✓ Email Support</li>
    </ul>
  </div>
  <div class="ui-vc__plan">
    <h3>Enterprise</h3>
    <p class="ui-vc__sub">For large teams.</p>
    <div class="ui-vc__price">Custom</div>
    <button class="ui-vc__btn">Contact Sales</button>
    <ul>
      <li>✓ Unlimited Bandwidth</li>
      <li>✓ SAML SSO</li>
      <li>✓ 99.99% SLA</li>
      <li>✓ Dedicated Support</li>
    </ul>
  </div>
</div>

<style>
  .ui-vc{display:grid;grid-template-columns:repeat(3,1fr);gap:0;font:14px 'Geist',-apple-system,sans-serif;max-width:720px;background:#000;border:1px solid #1f1f1f;border-radius:12px;overflow:hidden;color:#ededed}
  .ui-vc__plan{position:relative;padding:32px 24px;border-right:1px solid #1f1f1f;display:flex;flex-direction:column;gap:18px}
  .ui-vc__plan:last-child{border-right:0}
  .ui-vc__plan.pro{background:#0a0a0a}
  .ui-vc__tag{position:absolute;top:14px;right:14px;border:1px solid #333;color:#888;font-size:11px;padding:2px 8px;border-radius:4px;font-weight:500}
  .ui-vc__plan h3{margin:0;font-size:18px;font-weight:600}
  .ui-vc__sub{margin:0;color:#888;font-size:13px}
  .ui-vc__price{font-size:28px;font-weight:600;letter-spacing:-.02em}
  .ui-vc__price span{font-size:13px;color:#888;font-weight:400}
  .ui-vc__btn{padding:8px;background:transparent;color:#ededed;border:1px solid #333;border-radius:6px;font:600 13px inherit;cursor:pointer}
  .ui-vc__btn.primary{background:#fff;color:#000;border-color:#fff}
  .ui-vc__plan ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;font-size:13px;color:#a1a1a1}
  @media(max-width:560px){.ui-vc{grid-template-columns:1fr}.ui-vc__plan{border-right:0;border-bottom:1px solid #1f1f1f}}
</style>`,
    },
    {
      name: 'CTA Section',
      nameJa: 'CTAセクション',
      desc: 'ユーザーの行動を促す大きなボタンとメッセージのセクション。',
      detail: 'CTA(Call to Action)セクションは、ユーザーに次の行動を起こしてもらうために、強いメッセージと目立つボタンを配置した専用ブロックです。「無料で始める」「資料請求する」「今すぐ購入」など、サービス側が最も達成したい行動をシンプルに、しかし強く訴えかけます。ページの末尾や、各セクションの区切りに置くことで、興味を持ったユーザーをスムーズに次のステップへ誘導できます。背景色や大きさで他のセクションと差をつけるのが鉄則です。',
      descEn: 'A section with a large button and message to drive user action.',
      detailEn: 'A CTA (call-to-action) section is a dedicated block built around a compelling message and a prominent button, designed to push the user toward a specific next step. Phrases like "Start for free," "Request a demo," or "Buy now" present the action the business most wants to drive — clearly and confidently. Placed at the end of a page or between major sections, it smoothly guides interested visitors forward. Bold backgrounds or generous spacing help it stand out from surrounding content.',
      code: `<!-- Inspired by Stripe -->
<section class="ui-stp">
  <div class="ui-stp__inner">
    <p class="ui-stp__eyebrow">Ready to get started?</p>
    <h2>Start accepting payments in minutes.</h2>
    <p class="ui-stp__lead">Create an account instantly to get started or contact us to design a custom package for your business.</p>
    <div class="ui-stp__actions">
      <a class="ui-stp__btn primary">Start now →</a>
      <a class="ui-stp__btn">Contact sales →</a>
    </div>
  </div>
  <div class="ui-stp__orb a"></div>
  <div class="ui-stp__orb b"></div>
  <div class="ui-stp__orb c"></div>
</section>

<style>
  .ui-stp{position:relative;background:linear-gradient(180deg,#0a2540 0%,#003e6b 100%);color:#fff;padding:64px 32px;border-radius:8px;font:15px -apple-system,'Helvetica Neue',sans-serif;overflow:hidden;max-width:720px}
  .ui-stp__inner{position:relative;z-index:2;max-width:560px}
  .ui-stp__eyebrow{margin:0 0 12px;color:#7a9cc6;font-size:14px;font-weight:600;letter-spacing:.01em}
  .ui-stp h2{margin:0 0 18px;font-size:36px;font-weight:600;letter-spacing:-.02em;line-height:1.15}
  .ui-stp__lead{margin:0 0 28px;color:#adbdcc;font-size:17px;line-height:1.5;max-width:480px}
  .ui-stp__actions{display:flex;gap:12px;flex-wrap:wrap}
  .ui-stp__btn{padding:0 18px;height:38px;display:inline-flex;align-items:center;border-radius:18px;font-weight:600;font-size:14px;cursor:pointer;background:rgba(255,255,255,.1);color:#fff;text-decoration:none}
  .ui-stp__btn.primary{background:#fff;color:#0a2540}
  .ui-stp__btn:hover{transform:translateY(-1px);transition:.15s}
  .ui-stp__orb{position:absolute;border-radius:50%;filter:blur(40px);opacity:.35;pointer-events:none}
  .ui-stp__orb.a{width:280px;height:280px;background:#635bff;top:-60px;right:-40px}
  .ui-stp__orb.b{width:220px;height:220px;background:#00d4ff;bottom:-60px;right:120px}
  .ui-stp__orb.c{width:160px;height:160px;background:#ff5996;top:60px;right:300px}
</style>`,
    },
    {
      name: 'FAQ Section',
      nameJa: 'FAQセクション',
      desc: 'よくある質問とその回答をまとめた専用セクション。',
      detail: 'FAQセクションは、ユーザーが抱きがちな疑問とその回答をまとめて掲載する専用ブロックです。質問をクリック・タップすると回答が下に開く「アコーディオン」形式が定番で、画面を圧迫せず多くの情報を整理できます。「料金は?」「解約は簡単?」「サポート対応時間は?」など、購入や登録の障壁になりやすい疑問を先回りして解決することで、コンバージョン率を改善できる重要なセクションです。検索機能を付けると更に親切。',
      descEn: 'A dedicated section for frequently asked questions and answers.',
      detailEn: 'An FAQ section gathers common user questions along with their answers in one organized block. The accordion format — where clicking a question expands its answer below — is the de facto standard because it keeps the page tidy while housing a lot of content. Proactively answering doubts like "What does it cost?", "Is canceling easy?", or "What are support hours?" can dramatically lift conversion by removing purchase friction. Adding a search box makes it even more user-friendly.',
      code: `<!-- Inspired by GitHub -->
<section class="ui-gh">
  <div class="ui-gh__head"><h2>Frequently asked questions</h2><a class="ui-gh__link">Visit our Help Center →</a></div>
  <details open><summary>What is GitHub Copilot? <span>⌄</span></summary><p>GitHub Copilot is an AI pair programmer that helps you write code faster and with less work. It draws context from comments and code to suggest individual lines and whole functions instantly.</p></details>
  <details><summary>Who owns the code I write with Copilot? <span>⌄</span></summary><p>You retain ownership of all the code you write, including suggestions accepted from Copilot. As stated in our Terms of Service, you are responsible for your code.</p></details>
  <details><summary>Does Copilot work with my favorite editor? <span>⌄</span></summary><p>Yes. Copilot is available as an extension for Visual Studio Code, Visual Studio, Neovim, and JetBrains IDEs.</p></details>
  <details><summary>How is Copilot Business different from Individual? <span>⌄</span></summary><p>Business includes license management, organization-wide policy controls, and IP indemnity. Individual is designed for personal use.</p></details>
</section>

<style>
  .ui-gh{font:14px -apple-system,'Segoe UI',sans-serif;max-width:680px;color:#1f2328;padding:28px;background:#fff}
  .ui-gh__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:20px;border-bottom:1px solid #d1d9e0;padding-bottom:16px}
  .ui-gh__head h2{margin:0;font-size:24px;font-weight:600;letter-spacing:-.01em}
  .ui-gh__link{color:#0969da;font-size:14px;cursor:pointer;text-decoration:none}
  .ui-gh__link:hover{text-decoration:underline}
  .ui-gh details{border-bottom:1px solid #d1d9e0;padding:18px 4px}
  .ui-gh summary{cursor:pointer;font-weight:600;font-size:16px;display:flex;justify-content:space-between;align-items:center;list-style:none;color:#1f2328}
  .ui-gh summary::-webkit-details-marker{display:none}
  .ui-gh summary:hover{color:#0969da}
  .ui-gh summary span{color:#59636e;font-size:14px;transition:.2s;font-weight:400}
  .ui-gh details[open] summary span{transform:rotate(180deg)}
  .ui-gh p{margin:14px 0 4px;color:#59636e;line-height:1.6;font-size:14px}
</style>`,
    },
    {
      name: 'Feature Section',
      nameJa: 'フィーチャーセクション',
      desc: '製品の機能をアイコン+テキストでグリッド表示する。',
      detail: 'フィーチャーセクションは、製品やサービスの主要機能を、アイコン・タイトル・短い説明文の3点セットで並べて見せる紹介ブロックです。ランディングページの「製品の魅力を一気に伝える」核となる要素で、通常3〜6個の機能を2〜3列のグリッドで配置します。アイコンを使うことで視認性が高まり、ユーザーは流し読みでも機能の全体像をつかめます。アイコンの色やスタイルを統一すると、洗練された印象になります。',
      descEn: 'Displays product features in an icon + text grid.',
      detailEn: 'A feature section showcases the main capabilities of a product as a grid of icon-title-description triplets. It is a core element of landing pages, communicating "what this product can do" at a glance, typically with three to six features laid out in two or three columns. Icons make the section scannable, helping users grasp the overall scope even on a quick skim. Keeping the icon style and color consistent gives the whole section a polished, considered look.',
      code: `<!-- Inspired by Linear -->
<section class="ui-lncap">
  <p class="ui-lncap__eyebrow">Built for the modern product team</p>
  <h2 class="ui-lncap__title">Powerful features for any size of team</h2>
  <div class="ui-lncap__grid">
    <div class="ui-lncap__card">
      <div class="ui-lncap__ico" style="background:linear-gradient(135deg,#5e6ad2,#8d95f2)">⚡</div>
      <h3>Built for speed</h3>
      <p>Designed to be fast. Optimistic UI updates, real-time sync, and instant search.</p>
    </div>
    <div class="ui-lncap__card">
      <div class="ui-lncap__ico" style="background:linear-gradient(135deg,#26b5ce,#5dd6e6)">⌘</div>
      <h3>Keyboard-first</h3>
      <p>Linear was built for keyboard-first usage. Press Cmd+K to navigate anywhere.</p>
    </div>
    <div class="ui-lncap__card">
      <div class="ui-lncap__ico" style="background:linear-gradient(135deg,#f2994a,#f5c97b)">∞</div>
      <h3>Cycles</h3>
      <p>Build momentum and ship more with weekly cycles. Stay in flow with focused sprints.</p>
    </div>
    <div class="ui-lncap__card">
      <div class="ui-lncap__ico" style="background:linear-gradient(135deg,#bf4080,#e98ec3)">▦</div>
      <h3>Roadmaps</h3>
      <p>Plan visual projects and align your team around timelines that everyone can see.</p>
    </div>
  </div>
</section>

<style>
  .ui-lncap{background:#08090a;padding:64px 32px;font:14px 'Inter',-apple-system,sans-serif;max-width:720px;color:#e6e6e7;border-radius:12px}
  .ui-lncap__eyebrow{margin:0 0 10px;color:#5e6ad2;font-size:14px;font-weight:500;text-align:center}
  .ui-lncap__title{margin:0 0 40px;font-size:32px;font-weight:600;letter-spacing:-.02em;text-align:center;color:#fff}
  .ui-lncap__grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:#1f1f22;border:1px solid #1f1f22;border-radius:10px;overflow:hidden}
  .ui-lncap__card{background:#0e0e10;padding:28px 24px}
  .ui-lncap__ico{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;color:#fff;margin-bottom:18px}
  .ui-lncap__card h3{margin:0 0 6px;font-size:15px;font-weight:600;color:#fff}
  .ui-lncap__card p{margin:0;color:#9b9ba1;font-size:13px;line-height:1.55}
  @media(max-width:480px){.ui-lncap__grid{grid-template-columns:1fr}}
</style>`,
    },
    {
      name: 'Comparison Table',
      nameJa: '比較テーブル',
      desc: '複数のオプションを機能ごとに比較する表。',
      detail: '比較テーブルは、複数の製品・プラン・サービスを、機能や条件ごとに行で並べて比較できるようにする表組みUIです。料金テーブルと似ていますが、こちらは「機能の有無」を○×やチェックマークで一覧化するのに重点があります。SaaSのプラン比較、競合製品との優位性アピール、ハードウェアのスペック比較などで多用されます。ヘッダー行を固定するなどして、長い表でも見やすくする工夫が大切です。',
      descEn: 'Compares multiple options feature by feature in a table.',
      detailEn: 'A comparison table arranges multiple products, plans, or services as columns and lays out features as rows so they can be compared item by item. It overlaps with a pricing table, but here the focus is on presence-or-absence — usually with check marks or X marks — rather than just price. You see it in SaaS plan comparisons, "us vs. competitor" charts, and hardware spec sheets. Pinning the header row or first column makes long tables much easier to read.',
      code: `<!-- Inspired by Apple (iPhone compare) -->
<div class="ui-cmp">
  <table>
    <thead>
      <tr><th></th><th><div class="ui-cmp__device a"></div><b>iPhone 16 Pro</b><span>From $999</span></th><th><div class="ui-cmp__device b"></div><b>iPhone 16</b><span>From $799</span></th><th><div class="ui-cmp__device c"></div><b>iPhone 15</b><span>From $699</span></th></tr>
    </thead>
    <tbody>
      <tr><td>Display</td><td>6.3″ Super Retina XDR</td><td>6.1″ Super Retina XDR</td><td>6.1″ Super Retina XDR</td></tr>
      <tr><td>Chip</td><td><b>A18 Pro</b></td><td>A18</td><td>A16 Bionic</td></tr>
      <tr><td>Camera</td><td>48MP Fusion · 48MP Ultra Wide · 12MP 5× Telephoto</td><td>48MP Fusion · 12MP Ultra Wide</td><td>48MP Main · 12MP Ultra Wide</td></tr>
      <tr><td>Apple Intelligence</td><td>✓</td><td>✓</td><td>—</td></tr>
      <tr><td>Action button</td><td>✓</td><td>✓</td><td>—</td></tr>
      <tr><td>Material</td><td>Titanium</td><td>Aluminum</td><td>Aluminum</td></tr>
    </tbody>
  </table>
</div>

<style>
  .ui-cmp{font:-apple-system,'SF Pro Text',sans-serif;max-width:720px;color:#1d1d1f;background:#fff}
  .ui-cmp table{width:100%;border-collapse:collapse;font-size:13px}
  .ui-cmp th,.ui-cmp td{padding:16px 14px;text-align:center;border-bottom:1px solid #d2d2d7;vertical-align:top}
  .ui-cmp thead th{border-bottom:1px solid #d2d2d7;font-weight:400}
  .ui-cmp thead th b{display:block;font-size:17px;font-weight:600;margin-top:8px}
  .ui-cmp thead th span{display:block;color:#6e6e73;font-size:12px;margin-top:2px}
  .ui-cmp__device{width:50px;height:90px;border-radius:10px;margin:0 auto;border:2px solid #1d1d1f}
  .ui-cmp__device.a{background:linear-gradient(135deg,#8b8e96,#3a3a3c)}
  .ui-cmp__device.b{background:linear-gradient(135deg,#a8c5e8,#5b7eb0)}
  .ui-cmp__device.c{background:linear-gradient(135deg,#f6c1d2,#d68aa3)}
  .ui-cmp td:first-child,.ui-cmp th:first-child{text-align:left;color:#6e6e73;font-size:12px;font-weight:500;width:130px}
  .ui-cmp tbody td b{color:#1d1d1f;font-weight:600}
</style>`,
    },
    {
      name: 'Video Player',
      nameJa: 'ビデオプレーヤー',
      desc: '動画再生UI。再生/一時停止・シーク・音量・全画面のコントロールを含む。',
      detail: 'ビデオプレーヤーは、動画コンテンツを再生・操作するためのUI一式です。再生/一時停止ボタン、現在地を示すシークバー、音量調整、全画面切替、再生速度などのコントロールを備えます。YouTubeやNetflixのプレーヤーが代表例で、動画上にホバー(またはタップ)するとコントロールが表示され、しばらく操作がないと自動で消えるのが定番動作。動画の邪魔をせず、必要なときにすぐ手が届く、控えめで機能的なUIが理想です。',
      descEn: 'Video playback UI with play/pause, seek, volume, and fullscreen controls.',
      detailEn: 'A video player is the full set of controls for watching and operating video content. It usually includes play/pause, a seek bar showing current position, volume, fullscreen toggle, and playback speed. YouTube and Netflix players are the textbook examples: controls appear when you hover (or tap) and fade away after a few idle seconds. The ideal is unobtrusive but always within reach — a UI that stays out of the way of the video while remaining easy to grab.',
      code: `<!-- Inspired by YouTube -->
<div class="ui-yt">
  <div class="ui-yt__screen">
    <div class="ui-yt__title">Building Apps with Claude — Live Coding Stream</div>
  </div>
  <div class="ui-yt__bar">
    <div class="ui-yt__seek"><div class="ui-yt__buffered"></div><div class="ui-yt__played"></div><div class="ui-yt__dot"></div></div>
  </div>
  <div class="ui-yt__ctrls">
    <button class="ui-yt__btn play">▶</button>
    <button class="ui-yt__btn">⏭</button>
    <button class="ui-yt__btn">🔊</button>
    <span class="ui-yt__time">12:34 / 47:18</span>
    <div class="ui-yt__sp"></div>
    <button class="ui-yt__btn">CC</button>
    <button class="ui-yt__btn">⚙</button>
    <button class="ui-yt__btn">⊟</button>
    <button class="ui-yt__btn">⛶</button>
  </div>
</div>

<style>
  .ui-yt{width:100%;max-width:520px;background:#000;border-radius:0;overflow:hidden;font:14px 'Roboto',-apple-system,sans-serif;color:#fff}
  .ui-yt__screen{aspect-ratio:16/9;background:radial-gradient(circle at 40% 30%,#1a1a2e,#000);position:relative}
  .ui-yt__title{position:absolute;top:16px;left:16px;right:16px;font-size:13px;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.8);font-weight:500}
  .ui-yt__bar{padding:0 12px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.8))}
  .ui-yt__seek{position:relative;height:4px;background:rgba(255,255,255,.2);cursor:pointer}
  .ui-yt__seek:hover{height:6px}
  .ui-yt__buffered{position:absolute;top:0;left:0;height:100%;width:45%;background:rgba(255,255,255,.4)}
  .ui-yt__played{position:absolute;top:0;left:0;height:100%;width:26%;background:#ff0000}
  .ui-yt__dot{position:absolute;top:50%;left:26%;width:13px;height:13px;background:#ff0000;border-radius:50%;transform:translate(-50%,-50%)}
  .ui-yt__ctrls{display:flex;align-items:center;gap:4px;padding:4px 8px 8px;background:#000}
  .ui-yt__btn{background:transparent;border:0;color:#fff;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center}
  .ui-yt__btn:hover{background:rgba(255,255,255,.15)}
  .ui-yt__time{font-size:12px;color:#fff;margin-left:6px;font-variant-numeric:tabular-nums}
  .ui-yt__sp{flex:1}
</style>`,
    },
    {
      name: 'Audio Player',
      nameJa: 'オーディオプレーヤー',
      desc: '音声再生UI。再生ボタン・波形・プログレスバーを含む。',
      detail: 'オーディオプレーヤーは、音声コンテンツを再生するためのコンパクトなUIです。再生/一時停止ボタン、現在地を示すプログレスバーや波形、経過時間と全体時間、音量調整などで構成されます。SpotifyやApple Music、ポッドキャストアプリなどでおなじみで、波形を表示することで「いまどこを聴いているか」を直感的に伝えられるのが特徴です。ビデオプレーヤーより小さく、ページ内に埋め込んで使われることも多いUIです。',
      descEn: 'Audio playback UI with play button, waveform, and progress bar.',
      detailEn: 'An audio player is a compact UI for listening to sound content. It typically includes a play/pause button, a progress bar or waveform showing the current position, elapsed and total time, and a volume control. Spotify, Apple Music, and podcast apps showcase the style — a waveform makes it intuitive to see "where in the audio you are." Audio players tend to be smaller than video players and are often embedded inline within a page.',
      code: `<!-- Inspired by Spotify -->
<div class="ui-sp">
  <div class="ui-sp__np">
    <div class="ui-sp__art"></div>
    <div class="ui-sp__info">
      <b>Blinding Lights</b>
      <span>The Weeknd</span>
    </div>
    <button class="ui-sp__heart">♥</button>
  </div>
  <div class="ui-sp__player">
    <div class="ui-sp__btns">
      <button>⇄</button><button>⏮</button>
      <button class="ui-sp__play">▶</button>
      <button>⏭</button><button>↻</button>
    </div>
    <div class="ui-sp__seek">
      <span>1:24</span>
      <div class="ui-sp__bar"><div class="ui-sp__fill"></div></div>
      <span>3:42</span>
    </div>
  </div>
  <div class="ui-sp__extra">
    <button>≡</button><button>🖥</button><button>🔊</button>
    <div class="ui-sp__vol"><div></div></div>
  </div>
</div>

<style>
  .ui-sp{display:grid;grid-template-columns:1fr 1.4fr 1fr;align-items:center;gap:16px;background:#000;border-top:1px solid #282828;padding:14px 18px;font:13px 'Circular',-apple-system,sans-serif;color:#fff;max-width:680px}
  .ui-sp__np{display:flex;align-items:center;gap:12px}
  .ui-sp__art{width:56px;height:56px;border-radius:4px;background:linear-gradient(135deg,#ff0080,#7928ca);flex-shrink:0}
  .ui-sp__info{display:flex;flex-direction:column;gap:2px;min-width:0}
  .ui-sp__info b{font-size:13px;font-weight:400;color:#fff}
  .ui-sp__info span{font-size:11px;color:#a7a7a7}
  .ui-sp__heart{background:transparent;border:0;color:#1db954;font-size:18px;cursor:pointer}
  .ui-sp__player{display:flex;flex-direction:column;gap:6px;align-items:center}
  .ui-sp__btns{display:flex;gap:14px;align-items:center}
  .ui-sp__btns button{background:transparent;border:0;color:#a7a7a7;font-size:14px;cursor:pointer}
  .ui-sp__btns button:hover{color:#fff}
  .ui-sp__play{width:32px;height:32px;border-radius:50%;background:#fff !important;color:#000 !important;font-size:11px !important;display:flex;align-items:center;justify-content:center;padding-left:2px}
  .ui-sp__seek{display:flex;align-items:center;gap:8px;width:100%;font-size:11px;color:#a7a7a7;font-variant-numeric:tabular-nums}
  .ui-sp__bar{flex:1;height:4px;background:#4d4d4d;border-radius:999px;overflow:hidden;position:relative}
  .ui-sp__fill{height:100%;background:#fff;width:38%;border-radius:999px}
  .ui-sp__bar:hover .ui-sp__fill{background:#1db954}
  .ui-sp__extra{display:flex;align-items:center;gap:14px;justify-content:flex-end}
  .ui-sp__extra button{background:transparent;border:0;color:#a7a7a7;font-size:13px;cursor:pointer}
  .ui-sp__vol{width:90px;height:4px;background:#4d4d4d;border-radius:999px;overflow:hidden}
  .ui-sp__vol div{height:100%;width:62%;background:#fff;border-radius:999px}
</style>`,
    },
    {
      name: 'Image Gallery',
      nameJa: 'イメージギャラリー',
      desc: '複数画像をグリッドやスライドで表示する。タップで拡大。',
      detail: 'イメージギャラリーは、複数の画像を一覧表示し、ユーザーが気になったものを選んで拡大表示できるUIです。グリッド形式やメイソンリー形式でサムネイルを並べ、クリックでライトボックスを開くのが定番。ECサイトの商品写真、旅行サイトの宿の写真、ポートフォリオサイトの作品一覧などで使われます。最初の画像を大きく、残りを小さく並べる「ヒーロー+サムネ」パターンも人気で、視線の流れを設計できるのが利点です。',
      descEn: 'Displays multiple images in a grid or slider. Tap to enlarge.',
      detailEn: 'An image gallery presents multiple images at once and lets users tap to enlarge any one of them. Typical implementations lay out thumbnails in a grid or masonry layout, then open a lightbox on click. It is essential for e-commerce product photos, hotel listings on travel sites, and portfolio showcases. A popular variant is the "hero + thumbnails" pattern — one large image with smaller ones beside it — which gives designers control over how the eye moves through the set.',
      code: `<!-- Inspired by Apple Photos -->
<div class="ui-aph">
  <div class="ui-aph__head"><span>Library</span><span class="ui-aph__nav">For You · Albums · Search</span></div>
  <div class="ui-aph__year">August 2024 · Lisbon, Portugal · 124 photos</div>
  <div class="ui-aph__grid">
    <div class="big" style="background:linear-gradient(160deg,#ffb88c,#de6262)"></div>
    <div style="background:linear-gradient(160deg,#83a4d4,#b6fbff)"></div>
    <div style="background:linear-gradient(160deg,#f7797d,#fbd786)"></div>
    <div style="background:linear-gradient(160deg,#a8e063,#56ab2f)"></div>
    <div style="background:linear-gradient(160deg,#42275a,#734b6d)"></div>
    <div style="background:linear-gradient(160deg,#ee9ca7,#ffdde1)"></div>
    <div class="tall" style="background:linear-gradient(160deg,#414345,#232526)"></div>
    <div style="background:linear-gradient(160deg,#dce35b,#45b649)"></div>
    <div style="background:linear-gradient(160deg,#c9d6ff,#e2e2e2)"></div>
    <div style="background:linear-gradient(160deg,#ff6e7f,#bfe9ff)"></div>
    <div style="background:linear-gradient(160deg,#2c3e50,#fd746c)"></div>
    <div style="background:linear-gradient(160deg,#0f2027,#2c5364)"></div>
  </div>
</div>

<style>
  .ui-aph{font:13px -apple-system,'SF Pro Text',sans-serif;max-width:540px;background:#000;border-radius:12px;padding:16px;color:#fff}
  .ui-aph__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;font-size:22px;font-weight:700;letter-spacing:-.01em}
  .ui-aph__nav{font-size:13px;color:#0a84ff;font-weight:500}
  .ui-aph__year{color:#98989d;font-size:13px;margin:14px 0 8px;font-weight:500}
  .ui-aph__grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:64px;gap:2px;border-radius:6px;overflow:hidden}
  .ui-aph__grid > div{cursor:pointer;transition:transform .15s}
  .ui-aph__grid > div:hover{transform:scale(.97)}
  .ui-aph__grid .big{grid-column:span 2;grid-row:span 2}
  .ui-aph__grid .tall{grid-row:span 2}
</style>`,
    },
  ],
}
