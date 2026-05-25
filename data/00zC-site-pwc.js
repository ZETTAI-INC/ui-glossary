/**
 * UI Parts — Photo-Hero Corporate Site Skeleton.
 * Generic, copy-paste-ready snippets for editorial corporate sites: a white
 * top nav with text categories, a huge photographic hero with an orange
 * parallelogram decorative band, an editorial-tile insights grid, an
 * industry icon grid, a newsletter signup bar, and service cards.
 */

export const category = {
  id: 'ui-parts-site-photo',
  title: '写真ヒーロー型 コーポレートサイト骨格',
  titleEn: 'Photo-Hero Corporate Site Skeleton',
  description:
    '写真をフルブリードで使うコーポレートサイト骨格。白の上部ナビ、巨大セリフ書体の見出しを写真の上に被せ、オレンジの斜めバー(パラレログラム)で装飾する編集デザインの定型。',
  descriptionEn:
    'A photo-led editorial corporate site skeleton: white top nav, a giant serif headline overlaid on a full-bleed photo, an orange parallelogram accent shape, plus insights grid, industry index, newsletter signup, and service cards.',
  terms: [
    {
      name: 'Top Nav (centered, lang + region)',
      nameJa: '上部ナビ(白背景・中央メニュー・地域/言語切替)',
      desc: '左にロゴ、中央にカテゴリリンク、右端に地域(📍 Japan)と言語(JA)切替+検索。',
      detail:
        '白背景の上部ナビ。左にカラー差し色のロゴ(小さなドット付き)、中央に5〜6個のカテゴリリンク(サービス/業種別/インサイト/Today\'s issues/グループ/採用情報)を等間隔配置、右端に「📍 Japan ▾」と「JA ▾」の地域&言語切替+検索アイコン。文字は中型(15px)の濃グレー、ホバーで下にオレンジ細線。',
      descEn:
        'A white top nav with brand logo on the left, centered category links, and a region (📍 Japan) + language (JA) selector plus search on the right.',
      detailEn:
        'White-background top nav. Brand logo on the left (with small accent dot), 5–6 category links centered, then "📍 Japan ▾" + "JA ▾" region + lang switchers plus a search magnifier on the right. Text is mid-weight gray (15px), hover adds a thin orange underline.',
      code: `<!-- Editorial top nav with region + language selector -->
<header class="ui-photo-nav" role="banner">
  <div class="ui-photo-nav__inner">
    <a class="ui-photo-nav__brand" href="#" aria-label="Home">
      <span class="ui-photo-nav__logo">brand</span>
      <span class="ui-photo-nav__dot" aria-hidden="true"></span>
    </a>
    <nav class="ui-photo-nav__menu" aria-label="Main">
      <a href="#">サービス</a>
      <a href="#">業種別</a>
      <a href="#">インサイト</a>
      <a href="#">Today's issues</a>
      <a href="#">グループ</a>
      <a href="#">採用情報</a>
    </nav>
    <div class="ui-photo-nav__tail">
      <button type="button" class="ui-photo-nav__sel">
        <span aria-hidden="true">📍</span> Japan <span aria-hidden="true">▾</span>
      </button>
      <button type="button" class="ui-photo-nav__sel">JA <span aria-hidden="true">▾</span></button>
      <button type="button" class="ui-photo-nav__ico" aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        Search
      </button>
    </div>
  </div>
</header>

<style>
  .ui-photo-nav{background:#fff;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;max-width:1180px;margin:0 auto;border-bottom:1px solid #eee}
  .ui-photo-nav__inner{display:flex;align-items:center;gap:18px;padding:14px 22px;min-height:60px}
  .ui-photo-nav__brand{flex-shrink:0;display:inline-flex;align-items:center;text-decoration:none;color:#2d2d2d;position:relative}
  .ui-photo-nav__logo{font:900 28px/1 "Helvetica Neue",sans-serif;letter-spacing:-.03em;color:#2d2d2d}
  .ui-photo-nav__dot{width:5px;height:5px;background:#d04a02;border-radius:50%;margin-left:2px;align-self:flex-end;margin-bottom:4px}
  .ui-photo-nav__menu{flex:1;display:flex;justify-content:center;gap:32px}
  .ui-photo-nav__menu a{color:#2d2d2d;text-decoration:none;font:500 14.5px/1.2 "Helvetica Neue",sans-serif;padding:8px 0;border-bottom:2px solid transparent;transition:border-color .15s,color .15s;white-space:nowrap}
  .ui-photo-nav__menu a:hover{color:#d04a02;border-bottom-color:#d04a02}
  .ui-photo-nav__tail{display:flex;align-items:center;gap:8px;flex-shrink:0}
  .ui-photo-nav__sel{display:inline-flex;align-items:center;gap:5px;color:#2d2d2d;background:transparent;border:0;font:500 13px/1 "Helvetica Neue",sans-serif;cursor:pointer;padding:8px;transition:color .15s}
  .ui-photo-nav__sel:hover{color:#d04a02}
  .ui-photo-nav__ico{display:inline-flex;align-items:center;gap:6px;color:#2d2d2d;background:transparent;border:0;font:500 13px/1 "Helvetica Neue",sans-serif;cursor:pointer;padding:8px;transition:color .15s}
  .ui-photo-nav__ico svg{width:16px;height:16px}
  .ui-photo-nav__ico:hover{color:#d04a02}
  @media (max-width:880px){.ui-photo-nav__menu{display:none}}
</style>`,
    },
    {
      name: 'Photo Hero with Parallelogram',
      nameJa: '写真ヒーロー(オレンジ斜めバー付き)',
      desc: 'フルブリードの写真背景に、巨大セリフ書体の見出し+オレンジ斜めバーを重ねる象徴的ヒーロー。',
      detail:
        '会社サイトの最上部に大きく置く、写真+巨大文字+オレンジ斜めバーのヒーローです。背景にフルブリードの写真(オフィス・人物・抽象)、その上に左寄せで「未来を拓く洞察」のような小タイトル(白・中型)、その下に巨大なセリフ書体タグライン(白・80px+・letter-spacing詰め)、さらにサブ説明を配置。中央〜右側にオレンジ(#e44e02)の斜めパラレログラム(平行四辺形)を1〜2枚被せて視覚のアクセントにします。バーは clip-path で斜辺をつくり、絶対配置で写真の上に乗せます。',
      descEn:
        'A full-bleed photo hero with a giant serif tagline overlaid plus an orange parallelogram accent shape — the signature editorial corporate hero.',
      detailEn:
        'The cornerstone hero: a full-bleed photo background, a small white headline upper-left, then a huge serif tagline (80px+, tight tracking), then a smaller sub-explanation. One or two orange (#e44e02) parallelograms (rotated trapezoids via clip-path) sit absolute on top of the photo as a graphic accent. The orange bars are the unmistakable identifier.',
      code: `<!-- Photo hero with orange parallelogram -->
<section class="ui-photo-hero">
  <div class="ui-photo-hero__photo" aria-hidden="true"></div>
  <div class="ui-photo-hero__shape ui-photo-hero__shape--a" aria-hidden="true"></div>
  <div class="ui-photo-hero__shape ui-photo-hero__shape--b" aria-hidden="true"></div>
  <div class="ui-photo-hero__inner">
    <p class="ui-photo-hero__pre">未来を拓く洞察と信頼できるテクノロジー</p>
    <h1 class="ui-photo-hero__h"><em>so you can</em></h1>
    <p class="ui-photo-hero__sub">それが、深い思考と迅速な行動、<br>優れた成果を生み出す</p>
  </div>
</section>

<style>
  .ui-photo-hero{position:relative;min-height:440px;overflow:hidden;font-family:"Helvetica Neue","Hiragino Sans",-apple-system,sans-serif;color:#fff;max-width:1280px;margin:0 auto;background:#0d1418}
  .ui-photo-hero__photo{position:absolute;inset:0;background:
    linear-gradient(115deg,rgba(8,18,28,.6) 0%,rgba(8,18,28,.2) 60%,rgba(8,18,28,.05) 100%),
    linear-gradient(180deg,#06212f 0%,#0a3140 30%,#073d4b 60%,#082831 100%),
    radial-gradient(circle at 75% 60%,rgba(0,140,200,.45) 0%,transparent 50%);
    background-blend-mode:normal,normal,screen}
  .ui-photo-hero__photo::after{content:"";position:absolute;inset:0;background:
    repeating-linear-gradient(90deg,transparent 0,transparent 80px,rgba(255,255,255,.04) 80px,rgba(255,255,255,.04) 81px),
    repeating-linear-gradient(0deg,transparent 0,transparent 90px,rgba(255,255,255,.03) 90px,rgba(255,255,255,.03) 91px)}
  .ui-photo-hero__shape{position:absolute;background:#e44e02;z-index:1}
  .ui-photo-hero__shape--a{right:8%;bottom:24%;width:38%;height:60px;clip-path:polygon(8% 0,100% 0,92% 100%,0 100%)}
  .ui-photo-hero__shape--b{right:18%;bottom:14%;width:30%;height:42px;clip-path:polygon(8% 0,100% 0,92% 100%,0 100%);opacity:.85}
  .ui-photo-hero__inner{position:relative;z-index:2;padding:48px 40px 40px;max-width:760px}
  .ui-photo-hero__pre{font:600 18px/1.4 "Helvetica Neue",sans-serif;color:#fff;margin:0 0 14px;letter-spacing:.005em}
  .ui-photo-hero__h{font:400 92px/0.92 Georgia,"Times New Roman",serif;color:#fff;margin:0 0 22px;letter-spacing:-.015em}
  .ui-photo-hero__h em{font-style:italic;font-weight:400}
  .ui-photo-hero__sub{font:500 19px/1.55 "Helvetica Neue",sans-serif;color:#fff;margin:0;letter-spacing:.01em;max-width:520px}
  @media (max-width:760px){.ui-photo-hero{min-height:360px}.ui-photo-hero__h{font-size:54px}.ui-photo-hero__pre{font-size:14px}.ui-photo-hero__sub{font-size:15px}}
</style>`,
    },
    {
      name: 'Insights Tile Grid (3 columns)',
      nameJa: 'インサイト記事タイル(3列・上部に赤線)',
      desc: '画像+カテゴリタグ+見出し+説明の編集デザインタイルを3列で並べる。',
      detail:
        '記事一覧の定番、3列タイルグリッド。各タイルは画像、カテゴリタグ(赤・オレンジの小文字)、見出し(太字18px)、短い説明、日付の構成。ホバーで上部に3pxのオレンジ線が現れ、見出し色も切り替わります。会計・コンサル・税理士事務所など大量の記事を一覧化する場面で有効。',
      descEn:
        'A three-column tile grid — image, category tag, headline, summary, date. Hover paints a thick orange top rule.',
      detailEn:
        'A three-column grid of editorial tiles — image, category tag (small caps, orange), bold 18px headline, short summary, date. On hover, a 3px orange top rule appears and the headline color shifts. Ideal for surfacing large article collections.',
      code: `<!-- 3-column insights tile grid -->
<section class="ui-photo-grid">
  <div class="ui-photo-grid__head">
    <h2>注目のインサイト</h2>
    <a href="#">一覧を見る <span aria-hidden="true">›</span></a>
  </div>
  <div class="ui-photo-grid__row">
    <article class="ui-photo-tile">
      <div class="ui-photo-tile__img ui-photo-tile__img--a" aria-hidden="true"></div>
      <span class="ui-photo-tile__tag">レポート · 税務</span>
      <h3>2026年度税制改正大綱の解説</h3>
      <p>所得課税、法人課税、消費課税、納税環境整備の各論点をクライアント目線でまとめました。</p>
      <p class="ui-photo-tile__date">2026年5月20日</p>
    </article>
    <article class="ui-photo-tile">
      <div class="ui-photo-tile__img ui-photo-tile__img--b" aria-hidden="true"></div>
      <span class="ui-photo-tile__tag">調査 · 経営</span>
      <h3>第28回 世界CEO意識調査</h3>
      <p>4,701名のCEOの声から見える、再構築の優先順位と AI 投資の現在地。</p>
      <p class="ui-photo-tile__date">2026年5月12日</p>
    </article>
    <article class="ui-photo-tile">
      <div class="ui-photo-tile__img ui-photo-tile__img--c" aria-hidden="true"></div>
      <span class="ui-photo-tile__tag">ブログ · サステナビリティ</span>
      <h3>GHG排出量算定の実装ガイド</h3>
      <p>Scope 1/2/3 の段階的導入と、社内データ収集を続けるためのオペレーション設計。</p>
      <p class="ui-photo-tile__date">2026年5月8日</p>
    </article>
  </div>
</section>

<style>
  .ui-photo-grid{background:#fff;padding:48px 32px;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;color:#2d2d2d;max-width:1180px;margin:0 auto}
  .ui-photo-grid__head{display:flex;align-items:baseline;justify-content:space-between;border-bottom:2px solid #d04a02;padding-bottom:12px;margin-bottom:28px}
  .ui-photo-grid__head h2{font:700 26px/1.2 "Helvetica Neue",sans-serif;letter-spacing:-.005em;margin:0}
  .ui-photo-grid__head a{color:#d04a02;text-decoration:none;font:600 13px/1 "Helvetica Neue",sans-serif}
  .ui-photo-grid__head a:hover{text-decoration:underline}
  .ui-photo-grid__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
  .ui-photo-tile{background:#fff;border-top:3px solid transparent;padding-top:12px;cursor:pointer;transition:border-color .15s}
  .ui-photo-tile:hover{border-top-color:#d04a02}
  .ui-photo-tile__img{aspect-ratio:16/10;background:#e8e8e8;margin-bottom:14px}
  .ui-photo-tile__img--a{background:linear-gradient(135deg,#fff5ed 0%,#ffcfa6 100%)}
  .ui-photo-tile__img--b{background:linear-gradient(135deg,#ffe7e3 0%,#ff9088 100%)}
  .ui-photo-tile__img--c{background:linear-gradient(135deg,#ebf4ed 0%,#7fbc8c 100%)}
  .ui-photo-tile__tag{display:inline-block;font:600 11px/1 "Helvetica Neue",sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#d04a02;margin-bottom:8px}
  .ui-photo-tile h3{font:700 18px/1.35 "Helvetica Neue",sans-serif;color:#2d2d2d;margin:0 0 8px;transition:color .15s}
  .ui-photo-tile:hover h3{color:#d04a02}
  .ui-photo-tile p{font:400 13px/1.55 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0 0 8px}
  .ui-photo-tile__date{font:400 11px/1 "Helvetica Neue",sans-serif;color:#9d9d9d;margin-top:6px}
</style>`,
    },
    {
      name: 'Industry Icon Grid (4 × 3)',
      nameJa: '業界アイコン格子(4×3・罫線で区切る)',
      desc: '4列のアイコン+業界名タイル。罫線で区切られた表組みのような索引。',
      detail:
        '「業界別ソリューション」「対応分野」「サービス領域」など、フラットなカテゴリを並列に並べたいときの定番、4列の罫線グリッド。各セルはアイコン+業界名のみ。タイルは細い罫線で区切られた表のように整列し、ホバーで罫線とテキストをオレンジに変える効果が定番。',
      descEn:
        'A 4-column industry index grid — each tile carries an icon and an industry name, organized by thin dividing lines.',
      detailEn:
        'For "industries / service areas / coverage" — a 4-column grid of small tiles, each just an icon and an industry name. Hover lights up the dividing line and text in brand orange. Tight and scan-able.',
      code: `<!-- Industry index grid (4 columns) -->
<section class="ui-photo-ind">
  <h2 class="ui-photo-ind__h">業界別ソリューション</h2>
  <p class="ui-photo-ind__sub">12 業界に深い専門性を持つチームが、それぞれの市場の課題に応えます。</p>
  <ul class="ui-photo-ind__grid">
    <li class="ui-photo-ind__cell"><span aria-hidden="true">🏭</span>製造業</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">💴</span>金融サービス</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">🏥</span>ヘルスケア</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">⚡</span>エネルギー</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">🛒</span>消費財・小売</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">📡</span>テクノロジー</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">🚗</span>自動車・モビリティ</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">🏛️</span>公共サービス</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">🏗️</span>建設・不動産</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">📺</span>メディア・通信</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">✈️</span>運輸・物流</li>
    <li class="ui-photo-ind__cell"><span aria-hidden="true">🎓</span>教育機関</li>
  </ul>
</section>

<style>
  .ui-photo-ind{background:#fff;padding:48px 32px;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;color:#2d2d2d;max-width:1080px;margin:0 auto}
  .ui-photo-ind__h{font:700 26px/1.2 "Helvetica Neue",sans-serif;letter-spacing:-.005em;margin:0 0 8px;padding-left:14px;border-left:4px solid #d04a02}
  .ui-photo-ind__sub{font:400 14px/1.55 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0 0 28px;padding-left:18px}
  .ui-photo-ind__grid{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #d6d6d6;border-left:1px solid #d6d6d6}
  .ui-photo-ind__cell{display:flex;align-items:center;gap:12px;padding:20px 18px;font:500 14px/1.3 "Helvetica Neue",sans-serif;color:#2d2d2d;border-right:1px solid #d6d6d6;border-bottom:1px solid #d6d6d6;cursor:pointer;transition:background .15s,color .15s}
  .ui-photo-ind__cell span{font-size:22px;line-height:1}
  .ui-photo-ind__cell:hover{background:#fff5ed;color:#d04a02}
  @media (max-width:780px){.ui-photo-ind__grid{grid-template-columns:repeat(2,1fr)}}
</style>`,
    },
    {
      name: 'Newsletter Signup Bar',
      nameJa: 'ニュースレター登録バー(オレンジ帯+メール入力)',
      desc: '左に見出し+説明、右にメール入力+オレンジ「登録する」ボタンの細長いバー。',
      detail:
        'フッター直前で頻繁に使われるニュースレター登録の細長いバー。背景は淡いベージュ、左に見出し+短い説明、右にメール入力欄+オレンジの登録ボタン。シンプル設計で関心ある訪問者を捕まえる、コンサル・税理士事務所など継続発信する事業のサイトに必須のフォーマット。',
      descEn:
        'A slim newsletter signup band — heading + helper on the left, email field + filled orange button on the right.',
      detailEn:
        'A slim signup band placed just above the footer. Soft beige background, left has heading + short helper, right has email input + filled orange submit. Minimum copy — just capture intent. Critical for publishing-heavy corporate sites.',
      code: `<!-- Newsletter signup bar -->
<section class="ui-photo-nl">
  <div class="ui-photo-nl__inner">
    <div class="ui-photo-nl__copy">
      <h3>最新情報をメールでお届け</h3>
      <p>税制・経営・サステナビリティの最新インサイトを月2回。いつでも配信解除できます。</p>
    </div>
    <form class="ui-photo-nl__form" onsubmit="event.preventDefault()">
      <label class="ui-photo-nl__field">
        <span class="ui-photo-nl__label">メールアドレス</span>
        <input type="email" required placeholder="you@example.com" autocomplete="email">
      </label>
      <button type="submit" class="ui-photo-nl__btn">登録する <span aria-hidden="true">›</span></button>
    </form>
  </div>
  <p class="ui-photo-nl__fine">登録は無料です。<a href="#">プライバシーポリシー</a>に同意したものとみなします。</p>
</section>

<style>
  .ui-photo-nl{background:#f7f3ee;padding:36px 32px;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;color:#2d2d2d;border-top:3px solid #d04a02;max-width:1180px;margin:0 auto}
  .ui-photo-nl__inner{display:grid;grid-template-columns:1fr 1.1fr;gap:32px;align-items:center;max-width:980px;margin:0 auto}
  .ui-photo-nl__copy h3{font:700 22px/1.25 "Helvetica Neue",sans-serif;letter-spacing:-.005em;margin:0 0 6px}
  .ui-photo-nl__copy p{font:400 14px/1.55 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0;max-width:380px}
  .ui-photo-nl__form{display:flex;gap:0}
  .ui-photo-nl__field{flex:1;position:relative}
  .ui-photo-nl__label{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}
  .ui-photo-nl__field input{width:100%;height:48px;padding:0 16px;font:400 15px/1 "Helvetica Neue",sans-serif;color:#2d2d2d;background:#fff;border:1px solid #d6d6d6;border-right:0;outline:none;transition:border-color .15s}
  .ui-photo-nl__field input:focus{border-color:#d04a02}
  .ui-photo-nl__btn{display:inline-flex;align-items:center;gap:6px;height:48px;padding:0 22px;background:#d04a02;color:#fff;border:0;font:600 14px/1 "Helvetica Neue",sans-serif;cursor:pointer;transition:background .15s}
  .ui-photo-nl__btn:hover{background:#a83c02}
  .ui-photo-nl__btn span{font-size:18px;line-height:1}
  .ui-photo-nl__fine{font:400 11px/1.55 "Helvetica Neue",sans-serif;color:#7d7d7d;max-width:980px;margin:14px auto 0;text-align:center}
  .ui-photo-nl__fine a{color:#d04a02;text-decoration:none}
  .ui-photo-nl__fine a:hover{text-decoration:underline}
  @media (max-width:780px){.ui-photo-nl__inner{grid-template-columns:1fr}}
</style>`,
    },
    {
      name: 'Service Cards (4 columns)',
      nameJa: 'サービスカード(4列・赤い番号付き)',
      desc: '4列の縦長サービスカード。赤い数字+大見出し+「>」リンク。',
      detail:
        'サービス紹介ページに頻出する4列の縦長カード。各カードは上に赤・オレンジで番号(01〜04)、大見出し、短い説明、「›」付きリンクの構成。背景は白、影は弱め、赤の番号が視線のフック。サービスを並列のメニューとして均等に見せたいときに最適で、会計・コンサル・法務・税務すべてのコーポレートサイトで通用するフォーマット。',
      descEn:
        'Four-column service cards — each with a red number, a bold headline, short copy, and an arrowed link.',
      detailEn:
        'On service pages — four columns of tall service cards. Each shows a red-orange serial number (01–04), a bold headline, a short paragraph, and a "›" link. White background, light shadow, the number is the visual hook.',
      code: `<!-- Service cards (4 columns, numbered) -->
<section class="ui-photo-svc">
  <h2 class="ui-photo-svc__h">サービス</h2>
  <p class="ui-photo-svc__sub">経営課題から実装まで、4 つの領域で支援します。</p>
  <div class="ui-photo-svc__row">
    <article class="ui-photo-svc__card">
      <span class="ui-photo-svc__num">01</span>
      <h3>戦略コンサルティング</h3>
      <p>市場分析からデジタル戦略まで、経営陣の意思決定を支援します。</p>
      <a href="#">詳しく見る <span aria-hidden="true">›</span></a>
    </article>
    <article class="ui-photo-svc__card">
      <span class="ui-photo-svc__num">02</span>
      <h3>監査・保証業務</h3>
      <p>独立した立場から、財務報告の信頼性を担保します。</p>
      <a href="#">詳しく見る <span aria-hidden="true">›</span></a>
    </article>
    <article class="ui-photo-svc__card">
      <span class="ui-photo-svc__num">03</span>
      <h3>税務サービス</h3>
      <p>国内外の税制対応とコンプライアンスをワンストップで。</p>
      <a href="#">詳しく見る <span aria-hidden="true">›</span></a>
    </article>
    <article class="ui-photo-svc__card">
      <span class="ui-photo-svc__num">04</span>
      <h3>リスクアドバイザリー</h3>
      <p>サイバー、コンプライアンス、サステナビリティのリスクに対応。</p>
      <a href="#">詳しく見る <span aria-hidden="true">›</span></a>
    </article>
  </div>
</section>

<style>
  .ui-photo-svc{background:#fff;padding:56px 32px;font-family:"Helvetica Neue",-apple-system,"Arial",sans-serif;color:#2d2d2d;max-width:1180px;margin:0 auto}
  .ui-photo-svc__h{font:700 30px/1.15 "Helvetica Neue",sans-serif;letter-spacing:-.005em;margin:0 0 8px;padding-left:14px;border-left:4px solid #d04a02}
  .ui-photo-svc__sub{font:400 15px/1.55 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0 0 32px;padding-left:18px;max-width:560px}
  .ui-photo-svc__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}
  .ui-photo-svc__card{background:#fff;border:1px solid #e8e8e8;padding:24px 22px 26px;display:flex;flex-direction:column;align-items:flex-start;transition:border-color .15s,transform .15s,box-shadow .15s;cursor:pointer}
  .ui-photo-svc__card:hover{border-color:#d04a02;box-shadow:0 8px 24px rgba(208,74,2,.1);transform:translateY(-2px)}
  .ui-photo-svc__num{font:700 32px/1 "Helvetica Neue",sans-serif;color:#d04a02;font-variant-numeric:tabular-nums;margin-bottom:14px}
  .ui-photo-svc__card h3{font:700 18px/1.3 "Helvetica Neue",sans-serif;color:#2d2d2d;margin:0 0 8px}
  .ui-photo-svc__card p{font:400 13.5px/1.6 "Helvetica Neue",sans-serif;color:#5d5d5d;margin:0 0 18px;flex:1}
  .ui-photo-svc__card a{display:inline-flex;align-items:center;gap:4px;color:#d04a02;text-decoration:none;font:600 13px/1 "Helvetica Neue",sans-serif}
  .ui-photo-svc__card a:hover{text-decoration:underline}
  .ui-photo-svc__card a span{font-size:16px;line-height:1}
</style>`,
    },
  ],
}
