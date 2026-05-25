/**
 * UI Parts — Apple.com (jp) style components.
 * Production-ready, copy-paste-friendly HTML + CSS snippets inspired by
 * Apple Japan's product pages: thin sticky navigation, centered product
 * heroes, comparison rows, and the tall multi-column footer.
 */

export const category = {
  id: 'ui-parts-site-apple',
  title: 'Apple.com 風 サイト骨格',
  titleEn: 'Apple.com Style Site Skeleton',
  description:
    'Apple Japan のサイトでよく見られる、薄いセリフ風サンセリフの大型見出し、半透明ナビ、商品グリッド、長大フッターなど、コピペでサイトの骨格になるパーツです。',
  descriptionEn:
    'Apple Japan-style site building blocks: translucent sticky nav, centered product hero, "Buy / Learn more" CTAs, product grids, and the iconic tall footer.',
  terms: [
    {
      name: 'Apple Global Nav',
      nameJa: 'Apple グローバルナビ(半透明)',
      desc: '半透明・ぼかし背景の薄型ナビ。中央寄せの細い文字、検索とバッグアイコン付き。',
      detail:
        'Apple のすべてのページ上部にある、半透明背景にぼかしを掛けた高さ44pxの極細グローバルナビです。中央にプロダクト名(Mac, iPad, iPhone…)が薄い13pxで並び、両端にロゴと検索/バッグアイコンを配置します。下にスクロールしても固定で残るため、スティッキー実装が定番です。ぼかしは `backdrop-filter: blur` で、CSS変数で色を切替えやすくしておくと夜モードにも対応できます。',
      descEn:
        'A translucent, blurred 44px-tall sticky nav with centered category links and a logo + search + bag pair on the sides.',
      detailEn:
        'This is the very thin (44px) sticky navigation at the top of every Apple page. Translucent with a `backdrop-filter: blur`, it places product names (Mac, iPad, iPhone…) in light 13px text across the middle, with the logo and search/bag icons pinned to either end. It stays fixed during scroll. Storing colors in CSS variables makes it easy to swap between light and dark schemes.',
      code: `<!-- Inspired by Apple Global Nav -->
<header class="ui-aap-nav">
  <nav class="ui-aap-nav__inner" aria-label="グローバルナビゲーション">
    <a class="ui-aap-nav__logo" href="#" aria-label="Apple"></a>
    <ul class="ui-aap-nav__list">
      <li><a href="#">ストア</a></li>
      <li><a href="#">Mac</a></li>
      <li><a href="#">iPad</a></li>
      <li><a href="#">iPhone</a></li>
      <li><a href="#">Watch</a></li>
      <li><a href="#">Vision</a></li>
      <li><a href="#">AirPods</a></li>
      <li><a href="#">サポート</a></li>
    </ul>
    <div class="ui-aap-nav__icons">
      <button type="button" aria-label="検索">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      </button>
      <button type="button" aria-label="バッグ">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2"/></svg>
      </button>
    </div>
  </nav>
</header>

<style>
  .ui-aap-nav{position:sticky;top:0;z-index:50;height:44px;background:rgba(22,22,23,0.72);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);border-bottom:1px solid rgba(255,255,255,0.04);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif}
  .ui-aap-nav__inner{max-width:1024px;margin:0 auto;padding:0 22px;height:100%;display:flex;align-items:center;gap:18px}
  .ui-aap-nav__logo{width:14px;height:44px;background:no-repeat center/14px 14px;-webkit-mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><path d='M17.05 13.4c.05 2.78 2.46 3.7 2.49 3.71-.03.07-.4 1.35-1.32 2.66-.79 1.13-1.61 2.26-2.9 2.28-1.27.02-1.68-.75-3.13-.75s-1.91.73-3.11.77c-1.25.05-2.2-1.22-3-2.34-1.62-2.32-2.87-6.55-1.2-9.41.83-1.42 2.31-2.32 3.92-2.34 1.23-.02 2.39.83 3.13.83.74 0 2.15-1.02 3.63-.87.62.03 2.36.25 3.48 1.88-.09.06-2.07 1.21-2.05 3.59zM14.7 5.04c.66-.79 1.1-1.9.98-3-.95.04-2.09.63-2.77 1.42-.61.7-1.14 1.83-1 2.91 1.06.08 2.13-.54 2.79-1.33z'/></svg>") center/contain no-repeat;mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><path d='M17.05 13.4c.05 2.78 2.46 3.7 2.49 3.71-.03.07-.4 1.35-1.32 2.66-.79 1.13-1.61 2.26-2.9 2.28-1.27.02-1.68-.75-3.13-.75s-1.91.73-3.11.77c-1.25.05-2.2-1.22-3-2.34-1.62-2.32-2.87-6.55-1.2-9.41.83-1.42 2.31-2.32 3.92-2.34 1.23-.02 2.39.83 3.13.83.74 0 2.15-1.02 3.63-.87.62.03 2.36.25 3.48 1.88-.09.06-2.07 1.21-2.05 3.59zM14.7 5.04c.66-.79 1.1-1.9.98-3-.95.04-2.09.63-2.77 1.42-.61.7-1.14 1.83-1 2.91 1.06.08 2.13-.54 2.79-1.33z'/></svg>") center/contain no-repeat;background-color:#f5f5f7;flex-shrink:0}
  .ui-aap-nav__list{list-style:none;margin:0;padding:0;display:flex;align-items:center;gap:0;flex:1;justify-content:center}
  .ui-aap-nav__list li a{padding:0 10px;font:400 12px/44px -apple-system,sans-serif;color:rgba(245,245,247,0.8);text-decoration:none;letter-spacing:-.01em;transition:color .15s}
  .ui-aap-nav__list li a:hover{color:#f5f5f7}
  .ui-aap-nav__icons{display:flex;gap:6px;flex-shrink:0}
  .ui-aap-nav__icons button{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;color:#f5f5f7;background:transparent;border:0;cursor:pointer;border-radius:4px;transition:opacity .15s}
  .ui-aap-nav__icons button:hover{opacity:.75}
  @media (max-width:700px){.ui-aap-nav__list li a{padding:0 6px;font-size:11px}}
</style>`,
    },
    {
      name: 'Apple Product Hero',
      nameJa: 'Apple 中央寄せ プロダクトヒーロー',
      desc: '製品名・タグライン・価格・「購入する/詳しく見る」の鉄板4要素を中央配置。',
      detail:
        'Apple の新製品ページ最上部の鉄板レイアウトです。最上部の小さな製品名(細字)、巨大なタグライン(2行で改行)、価格表記、「購入する」(青塗りpill)+「詳しく見る ›」(青テキスト+矢印)の2CTA を中央寄せで縦に並べます。背景は無垢の白か黒、装飾はゼロ。製品画像を入れる場合は CTA の下に大きく差し込みます。タイポグラフィだけで魅せる構成で、製品の存在感を最大化できます。',
      descEn:
        'Apple\'s signature product-launch hero: product name, giant tagline, price, then "Buy" (filled blue pill) and "Learn more ›" CTAs, all centered.',
      detailEn:
        'The cookbook layout at the top of any Apple product page: a small product name in light weight, a giant two-line tagline, a price line, and a centered pair of CTAs — "Buy" (filled blue pill) and "Learn more ›" (blue text with an arrow). The background is pure white or black with zero decoration. If you have a product image, drop it under the CTAs at full width. Typography alone carries the room and the product feels unmistakable.',
      code: `<!-- Inspired by Apple Product Hero -->
<section class="ui-aap-hero">
  <p class="ui-aap-hero__eyebrow">新発売</p>
  <h1 class="ui-aap-hero__name">MacBook Air</h1>
  <p class="ui-aap-hero__tag">速さ、軽さ、そして<br>息をのむほどの美しさ。</p>
  <p class="ui-aap-hero__price">198,800円から または 月々8,283円から*</p>
  <div class="ui-aap-hero__cta">
    <a class="ui-aap-hero__btn ui-aap-hero__btn--p" href="#">購入する</a>
    <a class="ui-aap-hero__btn ui-aap-hero__btn--s" href="#">詳しく見る <span aria-hidden="true">›</span></a>
  </div>
  <p class="ui-aap-hero__finep">* Apple Card による分割払いの利用例。詳細は店舗まで。</p>
</section>

<style>
  .ui-aap-hero{background:#fbfbfd;color:#1d1d1f;padding:56px 24px 48px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;max-width:980px;margin:0 auto}
  .ui-aap-hero__eyebrow{font:600 17px/1 -apple-system,sans-serif;color:#bf4800;margin:0 0 6px;letter-spacing:.005em}
  .ui-aap-hero__name{font:600 56px/1.05 -apple-system,sans-serif;letter-spacing:-.015em;margin:0 0 4px;color:#1d1d1f}
  .ui-aap-hero__tag{font:500 28px/1.2 -apple-system,sans-serif;letter-spacing:-.003em;color:#1d1d1f;margin:0 0 18px;max-width:560px;margin-left:auto;margin-right:auto}
  .ui-aap-hero__price{font:400 17px/1.3 -apple-system,sans-serif;color:#1d1d1f;margin:0 0 22px}
  .ui-aap-hero__cta{display:flex;gap:24px;justify-content:center;align-items:center;flex-wrap:wrap;margin-bottom:16px}
  .ui-aap-hero__btn{display:inline-flex;align-items:center;text-decoration:none;font:400 17px/1 -apple-system,sans-serif;border-radius:980px;padding:12px 22px;transition:background .15s,color .15s}
  .ui-aap-hero__btn--p{background:#0071e3;color:#fff;min-width:120px;justify-content:center}
  .ui-aap-hero__btn--p:hover{background:#0077ed}
  .ui-aap-hero__btn--s{color:#0066cc;background:transparent;padding:12px 4px}
  .ui-aap-hero__btn--s span{margin-left:4px;font-size:19px;line-height:1}
  .ui-aap-hero__btn--s:hover{text-decoration:underline}
  .ui-aap-hero__finep{font:400 12px/1.4 -apple-system,sans-serif;color:#86868b;max-width:520px;margin:18px auto 0}
  @media (max-width:640px){.ui-aap-hero__name{font-size:44px}.ui-aap-hero__tag{font-size:22px}}
</style>`,
    },
    {
      name: 'Apple Product Grid',
      nameJa: 'Apple プロダクトグリッド(比較カード)',
      desc: '製品画像・名前・短いタグライン・価格・購入リンク2種を並べる比較風カードグリッド。',
      detail:
        'Apple のラインアップページ(Mac全モデル、iPad全モデルなど)で必ず登場する、横並びの製品カード群です。各カードは(上から)製品画像、製品名、1行のタグライン、価格、「購入する」「詳しく見る」の2CTA という揃った構成で、ユーザーが横スクロールで比較しやすくしています。grid または flex+overflow-x で実装します。背景は淡いグレーに、カード自体は背景白か無背景で、写真を主役にするのが定番です。',
      descEn:
        'A horizontal row of comparison cards used on Apple lineup pages, each showing image, name, short tagline, price, and Buy / Learn-more CTAs.',
      detailEn:
        'You see this on every Apple lineup page (every Mac, every iPad). Each card has a uniform structure — product image, name, one-line tagline, price, and the "Buy" + "Learn more" pair — so it is easy to scan side by side. Implement with grid, or flex + overflow-x for horizontal scroll. Use a soft gray page background with white or transparent cards so the product photography stays the hero.',
      code: `<!-- Inspired by Apple Product Grid -->
<section class="ui-aap-grid">
  <h2 class="ui-aap-grid__h">Mac ラインナップを比較する</h2>
  <div class="ui-aap-grid__row">
    <article class="ui-aap-card">
      <div class="ui-aap-card__img" aria-hidden="true">
        <div class="ui-aap-card__device ui-aap-card__device--air"></div>
      </div>
      <span class="ui-aap-card__new">新発売</span>
      <h3 class="ui-aap-card__name">MacBook Air</h3>
      <p class="ui-aap-card__sub">薄く、軽く、ずっと速い。</p>
      <p class="ui-aap-card__price">¥198,800〜</p>
      <div class="ui-aap-card__cta">
        <a class="ui-aap-card__btn ui-aap-card__btn--p" href="#">購入する</a>
        <a class="ui-aap-card__btn ui-aap-card__btn--s" href="#">詳しく見る ›</a>
      </div>
    </article>
    <article class="ui-aap-card">
      <div class="ui-aap-card__img" aria-hidden="true">
        <div class="ui-aap-card__device ui-aap-card__device--pro"></div>
      </div>
      <h3 class="ui-aap-card__name">MacBook Pro</h3>
      <p class="ui-aap-card__sub">プロが求める、すべての速さ。</p>
      <p class="ui-aap-card__price">¥248,800〜</p>
      <div class="ui-aap-card__cta">
        <a class="ui-aap-card__btn ui-aap-card__btn--p" href="#">購入する</a>
        <a class="ui-aap-card__btn ui-aap-card__btn--s" href="#">詳しく見る ›</a>
      </div>
    </article>
    <article class="ui-aap-card">
      <div class="ui-aap-card__img" aria-hidden="true">
        <div class="ui-aap-card__device ui-aap-card__device--mini"></div>
      </div>
      <h3 class="ui-aap-card__name">Mac mini</h3>
      <p class="ui-aap-card__sub">小さい筐体に、大きな実力。</p>
      <p class="ui-aap-card__price">¥84,800〜</p>
      <div class="ui-aap-card__cta">
        <a class="ui-aap-card__btn ui-aap-card__btn--p" href="#">購入する</a>
        <a class="ui-aap-card__btn ui-aap-card__btn--s" href="#">詳しく見る ›</a>
      </div>
    </article>
  </div>
</section>

<style>
  .ui-aap-grid{background:#fbfbfd;padding:40px 24px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#1d1d1f;max-width:1140px;margin:0 auto}
  .ui-aap-grid__h{font:600 30px/1.2 -apple-system,sans-serif;letter-spacing:-.012em;text-align:center;margin:0 0 32px}
  .ui-aap-grid__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px}
  .ui-aap-card{background:#fff;border-radius:18px;padding:28px 24px 26px;text-align:center;position:relative;box-shadow:0 1px 2px rgba(0,0,0,.04)}
  .ui-aap-card__img{height:120px;display:flex;align-items:flex-end;justify-content:center;margin-bottom:16px}
  .ui-aap-card__device{width:140px;height:90px;border-radius:8px;background:linear-gradient(180deg,#e8e8ed 0%,#d2d2d7 100%);position:relative;box-shadow:0 6px 20px rgba(0,0,0,.06)}
  .ui-aap-card__device--air{background:linear-gradient(180deg,#f5f5f7 0%,#e8e8ed 100%)}
  .ui-aap-card__device--pro{background:linear-gradient(180deg,#3a3a3c 0%,#1d1d1f 100%)}
  .ui-aap-card__device--mini{width:90px;height:90px;border-radius:14px;background:linear-gradient(180deg,#f5f5f7 0%,#d2d2d7 100%)}
  .ui-aap-card__new{font:600 12px/1 -apple-system,sans-serif;color:#bf4800;letter-spacing:.005em;display:block;margin-bottom:4px}
  .ui-aap-card__name{font:600 22px/1.2 -apple-system,sans-serif;letter-spacing:-.005em;margin:0 0 4px}
  .ui-aap-card__sub{font:400 14px/1.4 -apple-system,sans-serif;color:#6e6e73;margin:0 0 8px;min-height:1.4em}
  .ui-aap-card__price{font:400 14px/1.4 -apple-system,sans-serif;color:#1d1d1f;margin:0 0 14px}
  .ui-aap-card__cta{display:flex;gap:12px;justify-content:center;align-items:center;flex-wrap:wrap}
  .ui-aap-card__btn{display:inline-flex;align-items:center;text-decoration:none;font:400 14px/1 -apple-system,sans-serif;border-radius:980px;padding:8px 16px;transition:.15s}
  .ui-aap-card__btn--p{background:#0071e3;color:#fff}
  .ui-aap-card__btn--p:hover{background:#0077ed}
  .ui-aap-card__btn--s{color:#0066cc;padding:8px 0}
  .ui-aap-card__btn--s:hover{text-decoration:underline}
</style>`,
    },
    {
      name: 'Apple Feature Tile',
      nameJa: 'Apple フィーチャータイル(2分割大判)',
      desc: '画面いっぱいの2分割タイル。それぞれに大見出し+CTAリンクを配置するスタイル。',
      detail:
        'Apple のトップページや「ホリデーギフトガイド」で見られる、画面いっぱいに2つのタイルを縦並び/横並びにするレイアウトです。各タイル内は中央寄せの大見出し+短い説明+「購入する/詳しく見る」2リンクの構成。画面の高さの2/3〜全画面サイズを占めることが多く、ヒーロー直下から続けて並べることで「カテゴリの入口」を強く打ち出します。横並び時は等幅2カラム、縦並び時は高さ揃えで実装します。',
      descEn:
        'Two large feature tiles side by side, each with a centered headline and dual CTAs — used on Apple\'s home and seasonal pages.',
      detailEn:
        'Apple\'s homepage and seasonal guides love this layout: two giant tiles, side by side (or stacked), each centered with a headline, short copy, and the "Buy / Learn more" pair. They\'re typically 2/3 of screen height — placed right after the hero, they\'re the gateway into categories. Use a 2-column grid for wide viewports; stack with equal heights for narrow.',
      code: `<!-- Inspired by Apple Feature Tiles -->
<section class="ui-aap-tiles">
  <article class="ui-aap-tile ui-aap-tile--a">
    <div class="ui-aap-tile__inner">
      <h2 class="ui-aap-tile__h">iPhone</h2>
      <p class="ui-aap-tile__sub">未来を握りしめる感触。</p>
      <div class="ui-aap-tile__cta">
        <a class="ui-aap-tile__btn ui-aap-tile__btn--p" href="#">詳しく見る</a>
        <a class="ui-aap-tile__btn ui-aap-tile__btn--s" href="#">購入する ›</a>
      </div>
    </div>
  </article>
  <article class="ui-aap-tile ui-aap-tile--b">
    <div class="ui-aap-tile__inner">
      <h2 class="ui-aap-tile__h">Apple Watch</h2>
      <p class="ui-aap-tile__sub">健康を、いつも腕の上に。</p>
      <div class="ui-aap-tile__cta">
        <a class="ui-aap-tile__btn ui-aap-tile__btn--p" href="#">詳しく見る</a>
        <a class="ui-aap-tile__btn ui-aap-tile__btn--s" href="#">購入する ›</a>
      </div>
    </div>
  </article>
</section>

<style>
  .ui-aap-tiles{display:grid;grid-template-columns:1fr 1fr;gap:14px;background:#fbfbfd;padding:14px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;max-width:1180px;margin:0 auto}
  .ui-aap-tile{position:relative;min-height:360px;border-radius:22px;overflow:hidden;display:flex;align-items:flex-start;justify-content:center;padding:40px 24px}
  .ui-aap-tile--a{background:radial-gradient(ellipse at 50% 110%,#5e6ae3 0%,#1f2238 50%,#0b0c13 100%);color:#f5f5f7}
  .ui-aap-tile--b{background:radial-gradient(ellipse at 50% 110%,#ff9a3c 0%,#b73a3a 60%,#191919 100%);color:#1d1d1f}
  .ui-aap-tile__inner{max-width:480px;text-align:center}
  .ui-aap-tile__h{font:600 42px/1.05 -apple-system,sans-serif;letter-spacing:-.012em;margin:0 0 6px}
  .ui-aap-tile__sub{font:500 19px/1.3 -apple-system,sans-serif;margin:0 0 22px;opacity:.85}
  .ui-aap-tile__cta{display:flex;gap:18px;justify-content:center;align-items:center;flex-wrap:wrap}
  .ui-aap-tile__btn{display:inline-flex;align-items:center;text-decoration:none;font:400 17px/1 -apple-system,sans-serif;border-radius:980px;padding:11px 22px;transition:.15s}
  .ui-aap-tile__btn--p{background:#0071e3;color:#fff}
  .ui-aap-tile__btn--p:hover{background:#0077ed}
  .ui-aap-tile__btn--s{color:#2997ff;padding:11px 4px}
  .ui-aap-tile--b .ui-aap-tile__btn--s{color:#1d1d1f}
  .ui-aap-tile__btn--s:hover{text-decoration:underline}
  @media (max-width:760px){.ui-aap-tiles{grid-template-columns:1fr}.ui-aap-tile{min-height:280px}.ui-aap-tile__h{font-size:32px}}
</style>`,
    },
    {
      name: 'Apple Compare Strip',
      nameJa: 'Apple Compare 横スクロール比較',
      desc: '機能ごとに6項目を横並びで比較する短冊状のリスト。アクセサリや機能差を一覧化。',
      detail:
        'Apple の製品詳細ページで「ぜんぶで何ができる?」を一覧化する、6〜8項目の横スクロールリストです。各項目は等幅の短冊で、アイコン(または画像)、機能名、1行の説明、「詳しく見る ›」の構成。スマホでは横スクロール、PCでは固定グリッドで表示します。CSS scroll-snap でスマホのスクロールを項目単位にスナップさせるのが定石。製品の機能をフラットに並列して伝えたい時に強力です。',
      descEn:
        'A 6–8 item horizontal strip used on Apple product pages to flatten features into a glance-able row.',
      detailEn:
        'Apple product pages use this to summarize "what does this thing do?" — six to eight equal-width tiles in a horizontal row, each with an icon, feature name, a one-line description, and "Learn more ›". On phones it scrolls horizontally with CSS scroll-snap snapping to each tile; on desktop it lays out as a grid. Use it whenever you want to flatten a feature set into one fast read.',
      code: `<!-- Inspired by Apple Compare Strip -->
<section class="ui-aap-strip">
  <h2 class="ui-aap-strip__h">気になる機能を、すべて。</h2>
  <ul class="ui-aap-strip__row">
    <li class="ui-aap-strip__cell">
      <span class="ui-aap-strip__icon" aria-hidden="true">⚡</span>
      <h3>M3 チップ</h3>
      <p>新しい世代の高性能と省電力を両立。</p>
      <a href="#">詳しく見る ›</a>
    </li>
    <li class="ui-aap-strip__cell">
      <span class="ui-aap-strip__icon" aria-hidden="true">🔋</span>
      <h3>18 時間</h3>
      <p>朝から夜まで電源を気にせず使える。</p>
      <a href="#">詳しく見る ›</a>
    </li>
    <li class="ui-aap-strip__cell">
      <span class="ui-aap-strip__icon" aria-hidden="true">🎨</span>
      <h3>Liquid Retina</h3>
      <p>圧倒的に鮮やかな新世代ディスプレイ。</p>
      <a href="#">詳しく見る ›</a>
    </li>
    <li class="ui-aap-strip__cell">
      <span class="ui-aap-strip__icon" aria-hidden="true">🛡️</span>
      <h3>Touch ID</h3>
      <p>触れるだけで、安全に。</p>
      <a href="#">詳しく見る ›</a>
    </li>
    <li class="ui-aap-strip__cell">
      <span class="ui-aap-strip__icon" aria-hidden="true">📷</span>
      <h3>FaceTime HD</h3>
      <p>1080p の鮮明なビデオ通話。</p>
      <a href="#">詳しく見る ›</a>
    </li>
    <li class="ui-aap-strip__cell">
      <span class="ui-aap-strip__icon" aria-hidden="true">♻️</span>
      <h3>循環素材</h3>
      <p>50% 以上のリサイクル素材で構成。</p>
      <a href="#">詳しく見る ›</a>
    </li>
  </ul>
</section>

<style>
  .ui-aap-strip{background:#fbfbfd;padding:48px 24px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#1d1d1f;max-width:1180px;margin:0 auto}
  .ui-aap-strip__h{font:600 30px/1.2 -apple-system,sans-serif;letter-spacing:-.012em;text-align:center;margin:0 0 28px}
  .ui-aap-strip__row{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:16px}
  .ui-aap-strip__cell{background:#fff;padding:22px 18px;border-radius:18px;display:flex;flex-direction:column;align-items:flex-start;box-shadow:0 1px 2px rgba(0,0,0,.04)}
  .ui-aap-strip__icon{font-size:28px;line-height:1;margin-bottom:14px}
  .ui-aap-strip__cell h3{font:600 18px/1.25 -apple-system,sans-serif;letter-spacing:-.005em;margin:0 0 4px}
  .ui-aap-strip__cell p{font:400 13px/1.45 -apple-system,sans-serif;color:#6e6e73;margin:0 0 12px;flex:1}
  .ui-aap-strip__cell a{font:400 13px/1 -apple-system,sans-serif;color:#0066cc;text-decoration:none}
  .ui-aap-strip__cell a:hover{text-decoration:underline}
  @media (max-width:640px){.ui-aap-strip__row{grid-auto-flow:column;grid-auto-columns:75%;grid-template-columns:none;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:8px}.ui-aap-strip__cell{scroll-snap-align:start}}
</style>`,
    },
    {
      name: 'Apple Multi-Column Footer',
      nameJa: 'Apple 6カラム長大フッター',
      desc: '6カテゴリ × 数リンクの長い列で構成された、Apple定番の超大型フッター。',
      detail:
        'Apple の全ページ最下部にある、6つのカラムで構成された巨大フッターです。各カラムに「ショップとサポート」「サービス」「Apple Store」「ビジネス」「教育機関」「For Apple Values」のような見出し+5〜8リンクを並べます。一番上には法的補足の小さなテキスト、最下部には著作権・地域選択(国旗)・利用規約・サイトマップを配置。サポート系・購入系の動線を網羅するための定石レイアウトで、文字色#6e6e73、12px、行間広めが特徴です。',
      descEn:
        'The iconic six-column footer Apple uses on every page, each column a heading plus 5–8 links.',
      detailEn:
        'You see this at the bottom of every Apple page — six columns, each a category heading ("Shop and Support", "Services", "Apple Store", "Business", "Education", "For Apple Values" etc.) followed by 5–8 links. Above them sits a small line of legal copy; below sits copyright, country flag, terms, and sitemap. It is the canonical multi-funnel footer — neutral text color (#6e6e73), 12px, generous line height.',
      code: `<!-- Inspired by Apple Footer -->
<footer class="ui-aap-foot">
  <p class="ui-aap-foot__fine">
    * 月々のお支払い額は、当社の小売りパートナーが提供する分割払いの目安です。実際の金利・条件はお取引内容により異なります。
    <a href="#">分割払いの詳細を見る ›</a>
  </p>
  <div class="ui-aap-foot__cols">
    <div>
      <h4>ショップとサポート</h4>
      <ul>
        <li><a href="#">ストア</a></li>
        <li><a href="#">Mac</a></li>
        <li><a href="#">iPad</a></li>
        <li><a href="#">iPhone</a></li>
        <li><a href="#">Apple Watch</a></li>
      </ul>
    </div>
    <div>
      <h4>サービス</h4>
      <ul>
        <li><a href="#">iCloud+</a></li>
        <li><a href="#">Apple Music</a></li>
        <li><a href="#">Apple TV+</a></li>
        <li><a href="#">Apple One</a></li>
        <li><a href="#">Apple Pay</a></li>
      </ul>
    </div>
    <div>
      <h4>アカウント</h4>
      <ul>
        <li><a href="#">Apple ID</a></li>
        <li><a href="#">iCloud.com</a></li>
        <li><a href="#">マイサポート</a></li>
      </ul>
    </div>
    <div>
      <h4>ビジネス</h4>
      <ul>
        <li><a href="#">Apple for Business</a></li>
        <li><a href="#">ビジネス向けに購入</a></li>
      </ul>
    </div>
    <div>
      <h4>教育機関</h4>
      <ul>
        <li><a href="#">Apple and Education</a></li>
        <li><a href="#">教育機関向けに購入</a></li>
      </ul>
    </div>
    <div>
      <h4>Apple Values</h4>
      <ul>
        <li><a href="#">アクセシビリティ</a></li>
        <li><a href="#">環境への取り組み</a></li>
        <li><a href="#">プライバシー</a></li>
      </ul>
    </div>
  </div>
  <div class="ui-aap-foot__bar">
    <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
    <ul>
      <li><a href="#">プライバシーポリシー</a></li>
      <li><a href="#">利用規約</a></li>
      <li><a href="#">販売条件</a></li>
      <li><a href="#">サイトマップ</a></li>
    </ul>
    <a class="ui-aap-foot__country" href="#">🇯🇵 日本</a>
  </div>
</footer>

<style>
  .ui-aap-foot{background:#f5f5f7;color:#6e6e73;padding:18px 22px 22px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;border-top:1px solid #d2d2d7;max-width:1180px;margin:0 auto}
  .ui-aap-foot__fine{font:400 12px/1.65 -apple-system,sans-serif;color:#6e6e73;border-bottom:1px solid #d2d2d7;padding-bottom:16px;margin:0 0 18px}
  .ui-aap-foot__fine a{color:#0066cc;text-decoration:none}
  .ui-aap-foot__fine a:hover{text-decoration:underline}
  .ui-aap-foot__cols{display:grid;grid-template-columns:repeat(6,1fr);gap:22px;border-bottom:1px solid #d2d2d7;padding-bottom:18px;margin-bottom:14px}
  .ui-aap-foot__cols h4{font:600 12px/1 -apple-system,sans-serif;color:#1d1d1f;margin:0 0 12px}
  .ui-aap-foot__cols ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px}
  .ui-aap-foot__cols a{font:400 12px/1.35 -apple-system,sans-serif;color:#6e6e73;text-decoration:none}
  .ui-aap-foot__cols a:hover{text-decoration:underline;color:#1d1d1f}
  .ui-aap-foot__bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;font:400 12px/1 -apple-system,sans-serif;color:#6e6e73}
  .ui-aap-foot__bar p{margin:0}
  .ui-aap-foot__bar ul{display:flex;gap:18px;list-style:none;margin:0;padding:0;flex-wrap:wrap}
  .ui-aap-foot__bar a{color:#6e6e73;text-decoration:none}
  .ui-aap-foot__bar a:hover{text-decoration:underline;color:#1d1d1f}
  .ui-aap-foot__country{display:inline-flex;align-items:center;gap:6px}
  @media (max-width:920px){.ui-aap-foot__cols{grid-template-columns:repeat(3,1fr)}}
  @media (max-width:520px){.ui-aap-foot__cols{grid-template-columns:repeat(2,1fr)}}
</style>`,
    },
  ],
}
