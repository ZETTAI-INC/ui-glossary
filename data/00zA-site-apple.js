/**
 * UI Parts — Minimal product-site skeleton components.
 * Generic, copy-paste-ready snippets that capture a clean white-background
 * product-page design language: a thin promo strip, a light translucent
 * nav, a centered hero with a pair of pill CTAs, full-bleed dark product
 * tiles, and a tall multi-column footer.
 */

export const category = {
  id: 'ui-parts-site-minimal',
  title: 'ミニマル製品サイト骨格',
  titleEn: 'Minimal Product Site Skeleton',
  description:
    '白基調のミニマルな製品サイトをそのまま使える形で再現。薄グレー販促ストリップ、半透明白ナビ、中央寄せヒーロー+「青塗りpill+青枠線pill」のペアCTA、長大フッターまで一式。',
  descriptionEn:
    'A white-background minimal product-site skeleton: light-gray promo strip, translucent white nav, centered hero with paired filled-pill + outlined-pill CTAs, and a multi-column footer.',
  terms: [
    {
      name: 'Promo Strip',
      nameJa: '上部 販促ストリップ(薄グレー)',
      desc: 'ナビ直下にある、注釈つき販促文言+「詳しく ›」リンクの薄グレー細バー。',
      detail:
        'ナビゲーション直下に出る高さ48〜60pxほどの薄グレー販促ストリップです。背景は #f5f5f7、テキストは中央寄せの12〜14pxで、価格条件や下取り、キャリア割引など金融条件を「†」「*」付きで案内し、最後に青の「詳しく ›」リンクで詳細ページへ誘導します。シンプルですがコンバージョン上重要な役割を担い、文字色はナビと統一の濃グレー、リンクのみ青(#06c)で目線を集めます。',
      descEn:
        'A thin light-gray promo strip just under the nav — center-aligned offer copy with footnote markers and a blue "Learn more ›" link.',
      detailEn:
        'A 48–60px tall light-gray (#f5f5f7) band sits just under the nav. Centered 12–14px text describes pricing, trade-in, or carrier conditions with †/* footnote markers and ends with a blue "Learn more ›" link. Small but critical for conversion — text is the same dark gray as the nav, only the link gets brand blue (#06c).',
      code: `<!-- Promo strip -->
<div class="ui-msite-promo" role="region" aria-label="お知らせ">
  <p>
    対象モデルを下取りに出すと、新製品が実質月々2,133円*から。<sup>1</sup>
    24か月目のアップグレードで残りの支払いが不要に。<sup>2</sup>
    <a href="#">さらに詳しく <span aria-hidden="true">›</span></a>
  </p>
</div>

<style>
  .ui-msite-promo{background:#f5f5f7;padding:14px 22px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",sans-serif}
  .ui-msite-promo p{font:400 14px/1.45 -apple-system,sans-serif;color:#1d1d1f;margin:0;letter-spacing:-.016em;max-width:980px;margin-left:auto;margin-right:auto}
  .ui-msite-promo sup{font-size:9px;letter-spacing:0;color:#86868b;vertical-align:super}
  .ui-msite-promo a{color:#06c;text-decoration:none;font:400 14px/1.45 -apple-system,sans-serif;letter-spacing:-.016em;white-space:nowrap}
  .ui-msite-promo a:hover{text-decoration:underline}
  .ui-msite-promo a span{display:inline-block;margin-left:1px;transform:translateY(-1px)}
  @media (max-width:640px){.ui-msite-promo p{font-size:12px}}
</style>`,
    },
    {
      name: 'Light Global Nav',
      nameJa: 'グローバルナビ(白背景・44px・半透明)',
      desc: '半透明白ナビ。中央にカテゴリ、両端にホームマークと検索/バッグアイコン。',
      detail:
        '高さ44pxの白背景ナビゲーションです。背景は半透明白 + blur(20px)、テキストは濃グレー (#1d1d1f) の12px。左端に小さなブランドマーク、中央に "ストア/Mac/iPad/iPhone/Watch/Vision/AirPods/TV&Home/エンタメ/アクセサリ/サポート" 等のリンクを等間隔配置、右端に検索アイコンと買い物袋アイコン。ホバーでテキスト透明度が変わるだけのミニマル仕様。',
      descEn:
        'A 44px white translucent sticky nav — categories centered, brand mark on the left, search and bag icons on the right.',
      detailEn:
        'White, semi-transparent (rgba(255,255,255,.82)) with 20px blur, 44px tall. Dark-gray (#1d1d1f) 12px links spaced across the middle, mark on the left, search and bag icons on the right. Hover just nudges opacity — the design is the absence of design.',
      code: `<!-- Translucent light nav -->
<header class="ui-msite-nav" role="banner">
  <nav class="ui-msite-nav__inner" aria-label="Global">
    <a class="ui-msite-nav__logo" href="#" aria-label="Home">
      <span class="ui-msite-nav__mark" aria-hidden="true"></span>
    </a>
    <ul class="ui-msite-nav__list">
      <li><a href="#">ストア</a></li>
      <li><a href="#">Mac</a></li>
      <li><a href="#">iPad</a></li>
      <li><a href="#">iPhone</a></li>
      <li><a href="#">Watch</a></li>
      <li><a href="#">Vision</a></li>
      <li><a href="#">AirPods</a></li>
      <li><a href="#">TV &amp; Home</a></li>
      <li><a href="#">エンタメ</a></li>
      <li><a href="#">アクセサリ</a></li>
      <li><a href="#">サポート</a></li>
    </ul>
    <button class="ui-msite-nav__ico" type="button" aria-label="Search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="M14.5 14.5L19 19"/></svg>
    </button>
    <button class="ui-msite-nav__ico" type="button" aria-label="Bag">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 8h14l-1.4 12H6.4zM9 8V6a3 3 0 0 1 6 0v2"/></svg>
    </button>
  </nav>
</header>

<style>
  .ui-msite-nav{position:sticky;top:0;z-index:50;height:44px;background:rgba(255,255,255,0.82);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",sans-serif;max-width:1024px;margin:0 auto;border-bottom:1px solid rgba(0,0,0,.04)}
  .ui-msite-nav__inner{height:100%;display:flex;align-items:center;padding:0 22px;gap:0}
  .ui-msite-nav__logo{flex-shrink:0;width:14px;height:44px;display:inline-flex;align-items:center;justify-content:center;color:#1d1d1f;margin-right:22px}
  .ui-msite-nav__mark{width:10px;height:10px;border-radius:50%;background:#1d1d1f}
  .ui-msite-nav__list{display:flex;list-style:none;margin:0;padding:0;flex:1;justify-content:space-between;align-items:center}
  .ui-msite-nav__list a{display:inline-block;padding:0 8px;height:44px;line-height:44px;font:400 12px/44px -apple-system,sans-serif;color:#1d1d1f;text-decoration:none;letter-spacing:-.01em;opacity:.8;transition:opacity .12s}
  .ui-msite-nav__list a:hover{opacity:1}
  .ui-msite-nav__ico{flex-shrink:0;width:30px;height:44px;display:inline-flex;align-items:center;justify-content:center;color:#1d1d1f;background:transparent;border:0;cursor:pointer;padding:0;opacity:.8;transition:opacity .12s}
  .ui-msite-nav__ico:hover{opacity:1}
  .ui-msite-nav__ico svg{width:18px;height:18px}
  @media (max-width:740px){.ui-msite-nav__list a{padding:0 4px;font-size:11px}}
</style>`,
    },
    {
      name: 'Centered Hero (paired pills)',
      nameJa: '中央ヒーロー(青塗りpill + 青枠線pill)',
      desc: '「製品名 → タグライン → 青塗りpill + 青枠線pillのペア」の鉄板ヒーロー。',
      detail:
        'プロダクトのラインナップページ最上段で使われる中央寄せヒーローです。最上に巨大ボールド製品名(56〜72px, 700)、すぐ下に短い案内文(21px, 400, 中央寄せ)、その下に2つのpillボタンを横並びにします。1個目は青塗り(#0071e3 + 白文字)、2個目は青枠線+青文字+末尾「›」。背景は白(#fff)、CTAの下に大きな製品画像が続くのが定型です。',
      descEn:
        'A centered hero — giant product name, short tagline, then a filled-blue pill + outlined-blue pill side by side.',
      detailEn:
        'For product lineup pages — giant bold product name (56–72px / 700), a short 21px / 400 tagline below, then two pills side by side. One filled blue (#0071e3 + white text), the other outlined blue with a "›". Pure white background; product photo usually follows under the CTAs.',
      code: `<!-- Centered hero with paired pills -->
<section class="ui-msite-hero">
  <h1 class="ui-msite-hero__name">iPhone</h1>
  <p class="ui-msite-hero__tag">最新ラインナップを紹介します。</p>
  <div class="ui-msite-hero__cta">
    <a class="ui-msite-hero__btn ui-msite-hero__btn--p" href="#">さらに詳しく</a>
    <a class="ui-msite-hero__btn ui-msite-hero__btn--s" href="#">ラインナップを見る <span aria-hidden="true">›</span></a>
  </div>
  <div class="ui-msite-hero__pad" aria-hidden="true"></div>
</section>

<style>
  .ui-msite-hero{background:#fff;color:#1d1d1f;padding:54px 22px 28px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",sans-serif;max-width:980px;margin:0 auto}
  .ui-msite-hero__name{font:700 56px/1.07 -apple-system,sans-serif;letter-spacing:-.005em;margin:0 0 6px;color:#1d1d1f}
  .ui-msite-hero__tag{font:400 21px/1.38 -apple-system,sans-serif;color:#1d1d1f;margin:0 0 24px;letter-spacing:.011em;max-width:560px;margin-left:auto;margin-right:auto}
  .ui-msite-hero__cta{display:inline-flex;gap:14px;align-items:center;flex-wrap:wrap;justify-content:center}
  .ui-msite-hero__btn{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:44px;padding:0 22px;text-decoration:none;border-radius:980px;font:400 17px/1 -apple-system,sans-serif;letter-spacing:-.022em;transition:all .12s;border:1.5px solid transparent;box-sizing:border-box}
  .ui-msite-hero__btn--p{color:#fff;background:#0071e3;border-color:#0071e3}
  .ui-msite-hero__btn--p:hover{background:#0077ed;border-color:#0077ed}
  .ui-msite-hero__btn--s{color:#06c;background:transparent;border:1.5px solid #06c}
  .ui-msite-hero__btn--s:hover{background:#06c;color:#fff}
  .ui-msite-hero__btn--s span{font-size:20px;line-height:1;margin-left:3px;transform:translateY(-1px)}
  .ui-msite-hero__pad{height:14px;background:linear-gradient(180deg,#fff 0%,#e3eef8 100%);border-radius:0 0 12px 12px;margin-top:24px}
  @media (max-width:640px){.ui-msite-hero__name{font-size:40px}.ui-msite-hero__tag{font-size:17px}}
</style>`,
    },
    {
      name: 'Promo + Hero Combo',
      nameJa: '販促ストリップ + ヒーロー(セット)',
      desc: '販促ストリップ→白ヒーロー→ペアCTAを縦に重ねた、ページ最上部まるごとブロック。',
      detail:
        '「販促ストリップ + 製品ヒーロー」を一枚にまとめたコピペブロックです。上部に薄グレー販促ストリップ、その下に中央寄せ製品名+タグライン+ペアpill CTA を載せた構成で、そのままページ最上部に貼って製品ランディングページの骨格として機能します。',
      descEn:
        'A ready-made "promo strip + product hero" block — drop in at the top of a product landing page.',
      detailEn:
        'A combined "promo strip + product hero" block — paste at the top of a product landing page and it works.',
      code: `<!-- Promo + Hero combo -->
<div class="ui-msite-combo">
  <div class="ui-msite-combo__promo">
    <p>
      対象モデルを下取りに出すと、新製品が実質月々2,133円<sup>1</sup>から。
      <a href="#">さらに詳しく <span aria-hidden="true">›</span></a>
    </p>
  </div>
  <section class="ui-msite-combo__hero">
    <h1 class="ui-msite-combo__name">iPhone</h1>
    <p class="ui-msite-combo__tag">最新ラインナップを紹介します。</p>
    <div class="ui-msite-combo__cta">
      <a class="ui-msite-combo__btn ui-msite-combo__btn--p" href="#">さらに詳しく</a>
      <a class="ui-msite-combo__btn ui-msite-combo__btn--s" href="#">ラインナップを見る <span aria-hidden="true">›</span></a>
    </div>
    <div class="ui-msite-combo__stage" aria-hidden="true">
      <span class="ui-msite-combo__chip ui-msite-combo__chip--a"></span>
      <span class="ui-msite-combo__chip ui-msite-combo__chip--b"></span>
      <span class="ui-msite-combo__chip ui-msite-combo__chip--c"></span>
    </div>
  </section>
</div>

<style>
  .ui-msite-combo{font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",sans-serif;max-width:980px;margin:0 auto;background:#fff}
  .ui-msite-combo__promo{background:#f5f5f7;padding:14px 22px;text-align:center}
  .ui-msite-combo__promo p{font:400 14px/1.45 -apple-system,sans-serif;color:#1d1d1f;margin:0;letter-spacing:-.016em}
  .ui-msite-combo__promo sup{font-size:9px;color:#86868b;vertical-align:super}
  .ui-msite-combo__promo a{color:#06c;text-decoration:none;white-space:nowrap}
  .ui-msite-combo__promo a:hover{text-decoration:underline}
  .ui-msite-combo__promo a span{margin-left:1px;transform:translateY(-1px);display:inline-block}
  .ui-msite-combo__hero{background:#fff;color:#1d1d1f;padding:46px 22px 0;text-align:center}
  .ui-msite-combo__name{font:700 56px/1.07 -apple-system,sans-serif;letter-spacing:-.005em;margin:0 0 6px}
  .ui-msite-combo__tag{font:400 21px/1.38 -apple-system,sans-serif;margin:0 0 22px;letter-spacing:.011em}
  .ui-msite-combo__cta{display:inline-flex;gap:14px;align-items:center;flex-wrap:wrap;justify-content:center}
  .ui-msite-combo__btn{display:inline-flex;align-items:center;justify-content:center;height:44px;padding:0 22px;text-decoration:none;border-radius:980px;font:400 17px/1 -apple-system,sans-serif;letter-spacing:-.022em;transition:.12s;border:1.5px solid transparent}
  .ui-msite-combo__btn--p{color:#fff;background:#0071e3;border-color:#0071e3}
  .ui-msite-combo__btn--p:hover{background:#0077ed}
  .ui-msite-combo__btn--s{color:#06c;border:1.5px solid #06c}
  .ui-msite-combo__btn--s:hover{background:#06c;color:#fff}
  .ui-msite-combo__btn--s span{font-size:20px;line-height:1;margin-left:3px;transform:translateY(-1px)}
  .ui-msite-combo__stage{display:flex;justify-content:center;align-items:flex-end;gap:14px;margin:36px auto 0;height:120px;padding-bottom:8px}
  .ui-msite-combo__chip{width:54px;height:110px;border-radius:14px;display:inline-block}
  .ui-msite-combo__chip--a{background:linear-gradient(180deg,#2f2f3c 0%,#0a0c14 100%)}
  .ui-msite-combo__chip--b{background:linear-gradient(180deg,#f7f7f9 0%,#dedee2 100%)}
  .ui-msite-combo__chip--c{background:linear-gradient(180deg,#f9d5d4 0%,#e8a4a0 100%)}
  @media (max-width:640px){.ui-msite-combo__name{font-size:40px}.ui-msite-combo__tag{font-size:17px}}
</style>`,
    },
    {
      name: 'Full-Bleed Dark Tile',
      nameJa: 'フルブリード ダーク タイル',
      desc: '黒+ラジアルグラデの背景に、白文字で製品名・タグライン・青テキストリンク2つを縦配置。',
      detail:
        'ホームページのカテゴリ入口に使われるフルブリードの大判タイル。背景は黒地に放射状グラデ(中央が明るく外側が暗い)、文字は全て白の中央寄せ。製品名(48px・600)、タグライン(22px・600)、青のテキストリンク「さらに詳しく ›」「購入 ›」を横並び。角丸18px、最小高さ360pxほど。',
      descEn:
        'A full-bleed dark product tile with radial-gradient background and centered white name + tagline + two blue text links.',
      detailEn:
        'A full-bleed 18px-rounded tile for category entry points — black with a radial gradient warming toward center. All text centered white. Product name (48px / 600), tagline (22px / 600), two blue text-link CTAs.',
      code: `<!-- Full-bleed dark product tile -->
<section class="ui-msite-tile">
  <div class="ui-msite-tile__bg" aria-hidden="true"></div>
  <p class="ui-msite-tile__eye">新登場</p>
  <h2 class="ui-msite-tile__name">iPhone Pro</h2>
  <p class="ui-msite-tile__tag">圧倒的に Pro。</p>
  <div class="ui-msite-tile__cta">
    <a href="#">さらに詳しく <span aria-hidden="true">›</span></a>
    <a href="#">購入 <span aria-hidden="true">›</span></a>
  </div>
  <div class="ui-msite-tile__shape" aria-hidden="true"></div>
</section>

<style>
  .ui-msite-tile{position:relative;border-radius:18px;overflow:hidden;padding:48px 24px 32px;min-height:380px;text-align:center;color:#fff;font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",sans-serif;isolation:isolate;max-width:980px;margin:0 auto;background:#000}
  .ui-msite-tile__bg{position:absolute;inset:0;z-index:-1;background:radial-gradient(ellipse 70% 50% at 50% 30%,#3a3a3c 0%,#1c1c1e 55%,#000 100%)}
  .ui-msite-tile__eye{font:600 16px/1.2 -apple-system,sans-serif;color:#ff9f3a;margin:0 0 4px;letter-spacing:-.012em}
  .ui-msite-tile__name{font:600 48px/1.08 -apple-system,sans-serif;letter-spacing:-.012em;margin:0 0 4px}
  .ui-msite-tile__tag{font:600 22px/1.18 -apple-system,sans-serif;margin:0 0 16px}
  .ui-msite-tile__cta{display:flex;gap:30px;justify-content:center;align-items:center;flex-wrap:wrap;font:400 17px/1 -apple-system,sans-serif;letter-spacing:-.022em}
  .ui-msite-tile__cta a{display:inline-flex;align-items:center;color:#2997ff;text-decoration:none}
  .ui-msite-tile__cta a span{font-size:22px;line-height:1;margin-left:2px;transform:translateY(-1px)}
  .ui-msite-tile__cta a:hover{text-decoration:underline}
  .ui-msite-tile__shape{position:absolute;left:50%;bottom:-60px;width:280px;height:200px;transform:translateX(-50%);border-radius:32px;background:linear-gradient(180deg,#5a5a5e 0%,#28282c 70%,#000 100%);box-shadow:0 -30px 60px rgba(255,255,255,.06)}
  @media (max-width:640px){.ui-msite-tile__name{font-size:36px}.ui-msite-tile__tag{font-size:18px}}
</style>`,
    },
    {
      name: 'Multi-Column Footer',
      nameJa: '6カラム長大フッター',
      desc: '上部の注釈テキスト→6カラムリンク格子→下部の著作権・地域選択・サイトマップ。',
      detail:
        'ページ最下部の長大フッター。3層構成: (1) 細字12pxの脚注テキスト、(2) 6カラム × 各5〜8リンクのメインリンクリスト(見出し12px太字、リンク12px通常)、(3) コピーライト・サイトマップ・利用規約・国旗付き地域選択を横並びにしたバー。背景は薄グレー #f5f5f7、見出しは #1d1d1f、リンクは #6e6e73、ホバーで下線。',
      descEn:
        'A tall multi-column footer: thin disclaimer band → 6-column link grid → bottom legal bar with country selector.',
      detailEn:
        'Three-layer footer. (1) Tiny 12px footnote band. (2) Six columns with 5–8 links each, headings 12px bold (#1d1d1f), links 12px regular (#6e6e73). (3) Bottom bar with copyright, sitemap, terms, country/flag selector. Background is the soft gray #f5f5f7.',
      code: `<!-- Multi-column footer -->
<footer class="ui-msite-foot">
  <p class="ui-msite-foot__fn">
    1. 月々のお支払い額には頭金や送料は含まれません。詳細は<a href="#">こちら</a>。
  </p>
  <div class="ui-msite-foot__divider" aria-hidden="true"></div>
  <div class="ui-msite-foot__cols">
    <section><h4>ショップとサポート</h4><ul><li><a href="#">ストア</a></li><li><a href="#">Mac</a></li><li><a href="#">iPad</a></li><li><a href="#">iPhone</a></li><li><a href="#">Watch</a></li><li><a href="#">Vision</a></li></ul></section>
    <section><h4>サービス</h4><ul><li><a href="#">Music</a></li><li><a href="#">TV+</a></li><li><a href="#">Fitness+</a></li><li><a href="#">iCloud+</a></li><li><a href="#">One</a></li></ul></section>
    <section><h4>アカウント</h4><ul><li><a href="#">ID を管理</a></li><li><a href="#">Store アカウント</a></li><li><a href="#">iCloud.com</a></li></ul></section>
    <section><h4>Store</h4><ul><li><a href="#">店舗を探す</a></li><li><a href="#">Genius Bar</a></li><li><a href="#">下取り</a></li><li><a href="#">Trade In</a></li></ul></section>
    <section><h4>ビジネス</h4><ul><li><a href="#">ビジネス</a></li><li><a href="#">法人購入</a></li></ul></section>
    <section><h4>取り組み</h4><ul><li><a href="#">アクセシビリティ</a></li><li><a href="#">教育</a></li><li><a href="#">環境</a></li><li><a href="#">プライバシー</a></li></ul></section>
  </div>
  <div class="ui-msite-foot__divider" aria-hidden="true"></div>
  <div class="ui-msite-foot__bar">
    <p>Copyright © 2026 All rights reserved.</p>
    <ul>
      <li><a href="#">プライバシー</a></li>
      <li><a href="#">利用規約</a></li>
      <li><a href="#">販売条件</a></li>
      <li><a href="#">サイトマップ</a></li>
    </ul>
    <a class="ui-msite-foot__loc" href="#">🇯🇵 日本</a>
  </div>
</footer>

<style>
  .ui-msite-foot{background:#f5f5f7;color:#6e6e73;padding:20px 22px 22px;font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",sans-serif;max-width:1180px;margin:0 auto}
  .ui-msite-foot__fn{font:400 12px/1.5 -apple-system,sans-serif;color:#6e6e73;margin:0 0 14px}
  .ui-msite-foot__fn a{color:#06c;text-decoration:none}
  .ui-msite-foot__fn a:hover{text-decoration:underline}
  .ui-msite-foot__divider{height:1px;background:#d2d2d7;margin:14px 0}
  .ui-msite-foot__cols{display:grid;grid-template-columns:repeat(6,1fr);gap:24px}
  .ui-msite-foot__cols section h4{font:600 12px/1.5 -apple-system,sans-serif;color:#1d1d1f;margin:0 0 10px}
  .ui-msite-foot__cols ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
  .ui-msite-foot__cols a{font:400 12px/1.5 -apple-system,sans-serif;color:#6e6e73;text-decoration:none}
  .ui-msite-foot__cols a:hover{text-decoration:underline;color:#1d1d1f}
  .ui-msite-foot__bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;font:400 12px/1.5 -apple-system,sans-serif;color:#6e6e73}
  .ui-msite-foot__bar p{margin:0}
  .ui-msite-foot__bar ul{list-style:none;display:flex;gap:18px;margin:0;padding:0;flex-wrap:wrap}
  .ui-msite-foot__bar a{color:#6e6e73;text-decoration:none}
  .ui-msite-foot__bar a:hover{text-decoration:underline;color:#1d1d1f}
  .ui-msite-foot__loc{display:inline-flex;align-items:center;gap:6px}
  @media (max-width:900px){.ui-msite-foot__cols{grid-template-columns:repeat(3,1fr)}}
  @media (max-width:520px){.ui-msite-foot__cols{grid-template-columns:repeat(2,1fr)}}
</style>`,
    },
  ],
}
