/**
 * UI Parts — PwC.com style components.
 * Production-ready snippets inspired by PwC Japan: red-bar editorial hero,
 * insights tile grid, industry icon grid, newsletter signup.
 */

export const category = {
  id: 'ui-parts-site-pwc',
  title: 'PwC 風 サイト骨格',
  titleEn: 'PwC Style Site Skeleton',
  description:
    'PwC Japan の代表的なパターン:オレンジ/赤の縦アクセントバー、編集デザインのヒーロー、業界アイコン格子、ニュースレター登録。',
  descriptionEn:
    'PwC Japan-style building blocks: orange-red vertical accent bar, editorial hero, industry icon grid, newsletter signup band.',
  terms: [
    {
      name: 'PwC Red-Bar Hero',
      nameJa: 'PwC 赤バー編集デザインヒーロー',
      desc: 'タイトル左に PwC らしい赤/オレンジの縦バー。新聞・編集デザイン風のヒーロー。',
      detail:
        'PwC のサイト全ページに登場する、見出しの左に細い赤・オレンジの縦アクセントバー(2〜4px)を置く、編集デザイン風のヒーローです。新聞記事のように太字見出し+リード文+「>」付きCTAの三段構成。背景は白か淡いグレーで、典型的にはタグ付きの「業界別ブログ」「インサイト」「税務」などのコンテンツの見出しに使われます。会計・コンサル・金融系で「信頼感」と「編集の質」を両立させる定型レイアウトです。',
      descEn:
        'A vertical orange-red accent bar to the left of the headline, paired with editorial typography — PwC\'s signature.',
      detailEn:
        'On every PwC page, a 2–4px vertical orange-red bar sits to the left of the headline like a newspaper rule. Bold headline, a tight lead, and a "›" CTA — three stacked elements, no decoration. White or pale-gray background. You see it on industry blogs, insights, and tax pages. For accounting, consulting, and financial brands that want trust + editorial quality, it is the canonical layout.',
      code: `<!-- Inspired by PwC Red-Bar Hero -->
<section class="ui-pwc-hero">
  <div class="ui-pwc-hero__rule" aria-hidden="true"></div>
  <div class="ui-pwc-hero__body">
    <p class="ui-pwc-hero__eye">PwC Japan インサイト</p>
    <h1 class="ui-pwc-hero__h">不確実性の時代を、<br>信頼で乗りこえる。</h1>
    <p class="ui-pwc-hero__lead">経営・税務・サステナビリティの最新動向を、グローバルの知見と日本市場の実感の両側から。</p>
    <div class="ui-pwc-hero__meta">
      <span>更新 · 2026.05.20</span>
      <span class="ui-pwc-hero__sep" aria-hidden="true">│</span>
      <span>読了 6 分</span>
    </div>
    <a class="ui-pwc-hero__cta" href="#">全てのインサイトを見る <span aria-hidden="true">›</span></a>
  </div>
</section>

<style>
  .ui-pwc-hero{display:flex;gap:24px;align-items:stretch;background:#fafafa;padding:48px 32px;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;color:#2d2d2d;max-width:1080px;margin:0 auto}
  .ui-pwc-hero__rule{flex-shrink:0;width:4px;background:linear-gradient(180deg,#e0301e 0%,#d04a02 100%);border-radius:0}
  .ui-pwc-hero__body{max-width:680px}
  .ui-pwc-hero__eye{font:600 12px/1 "Helvetica Neue",sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#d04a02;margin:0 0 14px}
  .ui-pwc-hero__h{font:700 44px/1.15 "Helvetica Neue",-apple-system,sans-serif;letter-spacing:-.012em;margin:0 0 16px;color:#2d2d2d}
  .ui-pwc-hero__lead{font:400 17px/1.55 "Helvetica Neue",sans-serif;color:#535353;margin:0 0 18px;max-width:560px}
  .ui-pwc-hero__meta{display:flex;align-items:center;gap:10px;font:400 13px/1 "Helvetica Neue",sans-serif;color:#7d7d7d;margin-bottom:24px}
  .ui-pwc-hero__sep{color:#cfcfcf}
  .ui-pwc-hero__cta{display:inline-flex;align-items:center;gap:6px;background:#d04a02;color:#fff;text-decoration:none;font:600 14px/1 "Helvetica Neue",sans-serif;padding:13px 22px;border-radius:0;transition:background .15s}
  .ui-pwc-hero__cta:hover{background:#a83c02}
  .ui-pwc-hero__cta span{font-size:18px;line-height:1}
  @media (max-width:640px){.ui-pwc-hero__h{font-size:32px}.ui-pwc-hero__lead{font-size:15px}}
</style>`,
    },
    {
      name: 'PwC Insights Tile Grid',
      nameJa: 'PwC インサイト記事タイル(3列)',
      desc: '画像+カテゴリタグ+見出し+短い説明の編集デザインタイルを3列で並べる。',
      detail:
        'PwC のインサイト・ニュース・税務アラート一覧で頻繁に登場する、3列のタイルグリッドです。各タイルは画像、カテゴリタグ(赤・オレンジの小文字)、見出し(太字18-20px)、短い説明、日付の構成。タイル下半分にホバーで赤アンダーラインを表示するパターンが定番です。会計・税理・コンサル系で大量の記事を一覧化するときの強力なフォーマットで、画像なしでもタグ+見出しだけで成立します。',
      descEn:
        'A three-column tile grid for editorial articles — image, category tag, headline, summary, and date.',
      detailEn:
        'You see this in PwC\'s insights, news, and tax-alert listings — a three-column grid of editorial tiles. Each tile carries an image, a category tag (small caps, red or orange), a bold 18–20px headline, a short summary, and a date. Hover triggers a red underline on the headline. It is a powerful format for surfacing large article collections — and works fine without images if you have just tags and headlines.',
      code: `<!-- Inspired by PwC Insights Grid -->
<section class="ui-pwc-grid">
  <div class="ui-pwc-grid__head">
    <h2>注目のインサイト</h2>
    <a href="#">一覧を見る <span aria-hidden="true">›</span></a>
  </div>
  <div class="ui-pwc-grid__row">
    <article class="ui-pwc-tile">
      <div class="ui-pwc-tile__img ui-pwc-tile__img--a" aria-hidden="true"></div>
      <span class="ui-pwc-tile__tag">レポート · 税務</span>
      <h3>2026年度税制改正大綱の解説</h3>
      <p>所得課税、法人課税、消費課税、納税環境整備の各論点をクライアント目線でまとめました。</p>
      <p class="ui-pwc-tile__date">2026年5月20日</p>
    </article>
    <article class="ui-pwc-tile">
      <div class="ui-pwc-tile__img ui-pwc-tile__img--b" aria-hidden="true"></div>
      <span class="ui-pwc-tile__tag">調査 · 経営</span>
      <h3>第28回世界CEO意識調査</h3>
      <p>4,701名のCEOの声から見える、再構築の優先順位と AI 投資の現在地。</p>
      <p class="ui-pwc-tile__date">2026年5月12日</p>
    </article>
    <article class="ui-pwc-tile">
      <div class="ui-pwc-tile__img ui-pwc-tile__img--c" aria-hidden="true"></div>
      <span class="ui-pwc-tile__tag">ブログ · サステナビリティ</span>
      <h3>GHG排出量算定の実装ガイド</h3>
      <p>Scope 1/2/3 の段階的導入と、社内データ収集を続けるためのオペレーション設計。</p>
      <p class="ui-pwc-tile__date">2026年5月8日</p>
    </article>
  </div>
</section>

<style>
  .ui-pwc-grid{background:#fff;padding:48px 32px;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;color:#2d2d2d;max-width:1180px;margin:0 auto}
  .ui-pwc-grid__head{display:flex;align-items:baseline;justify-content:space-between;border-bottom:2px solid #d04a02;padding-bottom:12px;margin-bottom:28px}
  .ui-pwc-grid__head h2{font:700 26px/1.2 "Helvetica Neue",sans-serif;letter-spacing:-.005em;margin:0}
  .ui-pwc-grid__head a{color:#d04a02;text-decoration:none;font:600 13px/1 "Helvetica Neue",sans-serif}
  .ui-pwc-grid__head a:hover{text-decoration:underline}
  .ui-pwc-grid__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
  .ui-pwc-tile{background:#fff;border-top:3px solid transparent;padding-top:12px;cursor:pointer;transition:border-color .15s}
  .ui-pwc-tile:hover{border-top-color:#d04a02}
  .ui-pwc-tile__img{aspect-ratio:16/10;background:#e8e8e8;margin-bottom:14px}
  .ui-pwc-tile__img--a{background:linear-gradient(135deg,#fff5ed 0%,#ffcfa6 100%)}
  .ui-pwc-tile__img--b{background:linear-gradient(135deg,#ffe7e3 0%,#ff9088 100%)}
  .ui-pwc-tile__img--c{background:linear-gradient(135deg,#ebf4ed 0%,#7fbc8c 100%)}
  .ui-pwc-tile__tag{display:inline-block;font:600 11px/1 "Helvetica Neue",sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#d04a02;margin-bottom:8px}
  .ui-pwc-tile h3{font:700 18px/1.35 "Helvetica Neue",sans-serif;color:#2d2d2d;margin:0 0 8px;transition:color .15s}
  .ui-pwc-tile:hover h3{color:#d04a02}
  .ui-pwc-tile p{font:400 13px/1.55 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0 0 8px}
  .ui-pwc-tile__date{font:400 11px/1 "Helvetica Neue",sans-serif;color:#9d9d9d;margin-top:6px}
</style>`,
    },
    {
      name: 'PwC Industry Icon Grid',
      nameJa: 'PwC 業界アイコン格子',
      desc: '4×3の業界(製造業、金融、ヘルスケア…)タイルにアイコン+業界名を並べた索引。',
      detail:
        'PwC の「業界別ソリューション」ページに頻出する、4×3 のアイコングリッドです。各タイルは小さなアイコン(または絵文字)+業界名のみ。視覚的にコンパクトで、業界を一目で見渡せます。タイルは細い罫線で区切られた表のように整列し、ホバーで罫線を赤に変える効果が定番。コーポレートサイトの「サービス領域」「対応分野」「業界カバレッジ」など、何かのカテゴリを並列で示したい全ての場面で使えます。',
      descEn:
        'A 4-column industry index grid — each tile carries an icon and an industry name, organized by thin dividing lines.',
      detailEn:
        'On PwC\'s "industries" page you find this everywhere — a 4-column grid of small tiles, each just an icon and an industry name. Tight, scan-able. Hover lights up the dividing line in PwC red. Use it anywhere you need to display flat categories: industries, service areas, regions covered, expertise areas. Borders divide cleanly and the layout feels like a directory.',
      code: `<!-- Inspired by PwC Industry Grid -->
<section class="ui-pwc-ind">
  <h2 class="ui-pwc-ind__h">業界別ソリューション</h2>
  <p class="ui-pwc-ind__sub">12 業界に深い専門性を持つチームが、それぞれの市場の課題に応えます。</p>
  <ul class="ui-pwc-ind__grid">
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">🏭</span>製造業</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">💴</span>金融サービス</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">🏥</span>ヘルスケア</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">⚡</span>エネルギー</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">🛒</span>消費財・小売</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">📡</span>テクノロジー</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">🚗</span>自動車・モビリティ</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">🏛️</span>公共サービス</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">🏗️</span>建設・不動産</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">📺</span>メディア・通信</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">✈️</span>運輸・物流</li>
    <li class="ui-pwc-ind__cell"><span aria-hidden="true">🎓</span>教育機関</li>
  </ul>
</section>

<style>
  .ui-pwc-ind{background:#fff;padding:48px 32px;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;color:#2d2d2d;max-width:1080px;margin:0 auto}
  .ui-pwc-ind__h{font:700 26px/1.2 "Helvetica Neue",sans-serif;letter-spacing:-.005em;margin:0 0 8px;padding-left:14px;border-left:4px solid #d04a02}
  .ui-pwc-ind__sub{font:400 14px/1.55 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0 0 28px;padding-left:18px}
  .ui-pwc-ind__grid{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #d6d6d6;border-left:1px solid #d6d6d6}
  .ui-pwc-ind__cell{display:flex;align-items:center;gap:12px;padding:20px 18px;font:500 14px/1.3 "Helvetica Neue",sans-serif;color:#2d2d2d;border-right:1px solid #d6d6d6;border-bottom:1px solid #d6d6d6;cursor:pointer;transition:background .15s,color .15s}
  .ui-pwc-ind__cell span{font-size:22px;line-height:1}
  .ui-pwc-ind__cell:hover{background:#fff5ed;color:#d04a02}
  @media (max-width:780px){.ui-pwc-ind__grid{grid-template-columns:repeat(2,1fr)}}
</style>`,
    },
    {
      name: 'PwC Newsletter Signup',
      nameJa: 'PwC ニュースレター登録バー',
      desc: '赤帯にメール入力+登録ボタン。「最新情報をお届け」のシンプルな獲得CTA。',
      detail:
        'PwC のフッター直前で頻繁に見かける、ニュースレター登録の細長いバーです。背景は淡いベージュか白、左に見出し「最新情報をメールでお届け」+短い説明、右にメール入力欄+赤い登録ボタンを並べる構成。長文を載せずに、関心ある訪問者を捕まえるシンプル設計で、会計・コンサル・税理士事務所など継続的にコンテンツを発信する事業のサイトに必須のフォーマットです。',
      descEn:
        'A slim newsletter signup band — heading + helper on the left, email field + filled red button on the right.',
      detailEn:
        'A near-essential element on PwC pages, sitting just above the footer — a slim newsletter band. On a pale background, headline "Get our updates" with a short helper on the left, email input plus a filled red submit button on the right. No long copy — just capture intent. Critical for accounting / consulting / law firms that publish continuously.',
      code: `<!-- Inspired by PwC Newsletter -->
<section class="ui-pwc-nl">
  <div class="ui-pwc-nl__inner">
    <div class="ui-pwc-nl__copy">
      <h3>最新情報をメールでお届け</h3>
      <p>税制・経営・サステナビリティの最新インサイトを月2回。いつでも配信解除できます。</p>
    </div>
    <form class="ui-pwc-nl__form" onsubmit="event.preventDefault()">
      <label class="ui-pwc-nl__field">
        <span class="ui-pwc-nl__label">メールアドレス</span>
        <input type="email" required placeholder="you@example.com" autocomplete="email">
      </label>
      <button type="submit" class="ui-pwc-nl__btn">登録する <span aria-hidden="true">›</span></button>
    </form>
  </div>
  <p class="ui-pwc-nl__fine">登録は無料です。<a href="#">プライバシーポリシー</a>に同意したものとみなします。</p>
</section>

<style>
  .ui-pwc-nl{background:#f7f3ee;padding:36px 32px;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;color:#2d2d2d;border-top:3px solid #d04a02;max-width:1180px;margin:0 auto}
  .ui-pwc-nl__inner{display:grid;grid-template-columns:1fr 1.1fr;gap:32px;align-items:center;max-width:980px;margin:0 auto}
  .ui-pwc-nl__copy h3{font:700 22px/1.25 "Helvetica Neue",sans-serif;letter-spacing:-.005em;margin:0 0 6px}
  .ui-pwc-nl__copy p{font:400 14px/1.55 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0;max-width:380px}
  .ui-pwc-nl__form{display:flex;gap:0}
  .ui-pwc-nl__field{flex:1;position:relative}
  .ui-pwc-nl__label{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}
  .ui-pwc-nl__field input{width:100%;height:48px;padding:0 16px;font:400 15px/1 "Helvetica Neue",sans-serif;color:#2d2d2d;background:#fff;border:1px solid #d6d6d6;border-right:0;border-radius:0;outline:none;transition:border-color .15s}
  .ui-pwc-nl__field input:focus{border-color:#d04a02}
  .ui-pwc-nl__btn{display:inline-flex;align-items:center;gap:6px;height:48px;padding:0 22px;background:#d04a02;color:#fff;border:0;font:600 14px/1 "Helvetica Neue",sans-serif;cursor:pointer;border-radius:0;transition:background .15s}
  .ui-pwc-nl__btn:hover{background:#a83c02}
  .ui-pwc-nl__btn span{font-size:18px;line-height:1}
  .ui-pwc-nl__fine{font:400 11px/1.55 "Helvetica Neue",sans-serif;color:#7d7d7d;max-width:980px;margin:14px auto 0;text-align:center}
  .ui-pwc-nl__fine a{color:#d04a02;text-decoration:none}
  .ui-pwc-nl__fine a:hover{text-decoration:underline}
  @media (max-width:780px){.ui-pwc-nl__inner{grid-template-columns:1fr}}
</style>`,
    },
    {
      name: 'PwC Service Cards',
      nameJa: 'PwC サービスカード(4列縦長)',
      desc: '4列のサービスカード。各カードは赤い数字+大見出し+「>」リンクで構成。',
      detail:
        'PwC のサービス紹介ページで頻出する、4列の縦長サービスカードです。各カードは上に赤・オレンジで番号(01〜04)、大見出し、短い説明、「›」付きリンクの構成。背景は白、影は弱め、赤の番号が視線のフックになります。サービスを「並列のメニュー」として均等に見せたい時に最適で、コンサル・会計・法務・税務すべてのコーポレートサイトで通用するフォーマットです。',
      descEn:
        'Four-column service cards — each with a red number, a bold headline, short copy, and an arrowed link.',
      detailEn:
        'A core pattern on PwC service pages — four columns of tall service cards. Each shows a red-orange serial number (01–04) at the top, a bold headline, a short paragraph, and a "›" link. White background, light shadow, the number is the visual hook. Works whenever you want to present services as a parallel menu — equally useful for consulting, law, tax, audit, and finance corporate sites.',
      code: `<!-- Inspired by PwC Services -->
<section class="ui-pwc-svc">
  <h2 class="ui-pwc-svc__h">サービス</h2>
  <p class="ui-pwc-svc__sub">経営課題から実装まで、4 つの領域で支援します。</p>
  <div class="ui-pwc-svc__row">
    <article class="ui-pwc-svc__card">
      <span class="ui-pwc-svc__num">01</span>
      <h3>戦略コンサルティング</h3>
      <p>市場分析からデジタル戦略まで、経営陣の意思決定を支援します。</p>
      <a href="#">詳しく見る <span aria-hidden="true">›</span></a>
    </article>
    <article class="ui-pwc-svc__card">
      <span class="ui-pwc-svc__num">02</span>
      <h3>監査・保証業務</h3>
      <p>独立した立場から、財務報告の信頼性を担保します。</p>
      <a href="#">詳しく見る <span aria-hidden="true">›</span></a>
    </article>
    <article class="ui-pwc-svc__card">
      <span class="ui-pwc-svc__num">03</span>
      <h3>税務サービス</h3>
      <p>国内外の税制対応とコンプライアンスをワンストップで。</p>
      <a href="#">詳しく見る <span aria-hidden="true">›</span></a>
    </article>
    <article class="ui-pwc-svc__card">
      <span class="ui-pwc-svc__num">04</span>
      <h3>リスクアドバイザリー</h3>
      <p>サイバー、コンプライアンス、サステナビリティのリスクに対応。</p>
      <a href="#">詳しく見る <span aria-hidden="true">›</span></a>
    </article>
  </div>
</section>

<style>
  .ui-pwc-svc{background:#fff;padding:56px 32px;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;color:#2d2d2d;max-width:1180px;margin:0 auto}
  .ui-pwc-svc__h{font:700 30px/1.15 "Helvetica Neue",sans-serif;letter-spacing:-.005em;margin:0 0 8px;padding-left:14px;border-left:4px solid #d04a02}
  .ui-pwc-svc__sub{font:400 15px/1.55 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0 0 32px;padding-left:18px;max-width:560px}
  .ui-pwc-svc__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}
  .ui-pwc-svc__card{background:#fff;border:1px solid #e8e8e8;padding:24px 22px 26px;display:flex;flex-direction:column;align-items:flex-start;transition:border-color .15s,transform .15s,box-shadow .15s;cursor:pointer}
  .ui-pwc-svc__card:hover{border-color:#d04a02;box-shadow:0 8px 24px rgba(208,74,2,.1);transform:translateY(-2px)}
  .ui-pwc-svc__num{font:700 32px/1 "Helvetica Neue",sans-serif;color:#d04a02;font-variant-numeric:tabular-nums;margin-bottom:14px}
  .ui-pwc-svc__card h3{font:700 18px/1.3 "Helvetica Neue",sans-serif;color:#2d2d2d;margin:0 0 8px}
  .ui-pwc-svc__card p{font:400 13.5px/1.6 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0 0 18px;flex:1}
  .ui-pwc-svc__card a{display:inline-flex;align-items:center;gap:4px;color:#d04a02;text-decoration:none;font:600 13px/1 "Helvetica Neue",sans-serif}
  .ui-pwc-svc__card a:hover{text-decoration:underline}
  .ui-pwc-svc__card a span{font-size:16px;line-height:1}
</style>`,
    },
  ],
}
