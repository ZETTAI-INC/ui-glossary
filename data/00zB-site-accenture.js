/**
 * UI Parts — Accenture.com style components.
 * Production-ready editorial-style snippets inspired by Accenture's site:
 * bold purple/magenta accents, diagonal cut hero, numbered insights row,
 * dark CTA bar.
 */

export const category = {
  id: 'ui-parts-site-accenture',
  title: 'Accenture 風 サイト骨格',
  titleEn: 'Accenture Style Site Skeleton',
  description:
    'Accenture サイトの代表的なパターン:斜めにカットされたヒーロー、紫マゼンタのアクセント、ナンバリングされたインサイト、暗背景のCTAバーなど。',
  descriptionEn:
    'Accenture-style building blocks — diagonal-cut hero, purple-magenta brand accents, numbered insights row, and dark CTA bands.',
  terms: [
    {
      name: 'Accenture Diagonal Hero',
      nameJa: 'Accenture 斜めカット ヒーロー',
      desc: '斜めにカットされた紫のヒーローと白の太字見出し、アクセントの紫ライン。',
      detail:
        'Accenture のトップページの最も識別性の高い要素、「斜め(/)に切られた紫マゼンタの背景」を持つヒーローです。左に巨大な白の太字見出し+短いリード+「>」付きのCTAリンクを配置し、背景全体が右下に向かってクリップパスで斜めにカットされたグラデーションになっています。グローバルコンサルらしい知性とエネルギーを同時に伝える、極めて Accenture らしいスタイルです。',
      descEn:
        'Accenture\'s signature: a magenta-purple hero whose lower-right corner is sliced diagonally, paired with a giant white headline and an arrowed CTA.',
      detailEn:
        'The single most recognizable element on Accenture\'s homepage — a magenta-purple hero with a diagonal slash cut into its lower-right corner. On the left you place a giant white headline, a tight lead, and a "›" CTA. The background is a gradient clipped diagonally so the page feels like it\'s in motion. It conveys consulting-firm intellect and energy at once and is unmistakably Accenture.',
      code: `<!-- Inspired by Accenture Diagonal Hero -->
<section class="ui-acn-hero">
  <div class="ui-acn-hero__bg" aria-hidden="true"></div>
  <div class="ui-acn-hero__inner">
    <p class="ui-acn-hero__eye">Let there be change</p>
    <h1 class="ui-acn-hero__h">変化を、<br>価値に変える。</h1>
    <p class="ui-acn-hero__lead">テクノロジーと人間の創造性で、新しい未来を共につくる。</p>
    <a class="ui-acn-hero__cta" href="#">サービスを見る <span aria-hidden="true">›</span></a>
  </div>
</section>

<style>
  .ui-acn-hero{position:relative;min-height:380px;padding:60px 32px 80px;font-family:"Graphik",-apple-system,"Helvetica Neue",sans-serif;color:#fff;overflow:hidden;isolation:isolate;max-width:1180px;margin:0 auto}
  .ui-acn-hero__bg{position:absolute;inset:0;z-index:-1;background:linear-gradient(120deg,#a100ff 0%,#7500c0 40%,#460073 100%);clip-path:polygon(0 0,100% 0,100% 70%,0 100%)}
  .ui-acn-hero__inner{max-width:640px}
  .ui-acn-hero__eye{font:600 13px/1 -apple-system,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#ffd9f2;margin:0 0 16px;padding-left:14px;border-left:3px solid #ff50ad}
  .ui-acn-hero__h{font:700 56px/1.05 "Graphik",-apple-system,sans-serif;letter-spacing:-.015em;margin:0 0 18px;color:#fff}
  .ui-acn-hero__lead{font:400 19px/1.45 -apple-system,sans-serif;color:rgba(255,255,255,.86);max-width:480px;margin:0 0 28px}
  .ui-acn-hero__cta{display:inline-flex;align-items:center;gap:6px;color:#fff;text-decoration:none;font:600 17px/1 -apple-system,sans-serif;border:0;background:rgba(255,255,255,.16);backdrop-filter:blur(8px);padding:14px 22px;border-radius:0;transition:.18s}
  .ui-acn-hero__cta span{font-size:22px;transition:transform .18s}
  .ui-acn-hero__cta:hover{background:rgba(255,255,255,.28)}
  .ui-acn-hero__cta:hover span{transform:translateX(4px)}
  @media (max-width:640px){.ui-acn-hero__h{font-size:38px}.ui-acn-hero__lead{font-size:17px}}
</style>`,
    },
    {
      name: 'Accenture Sticky Top Bar',
      nameJa: 'Accenture 上部ナビ(細横線+検索)',
      desc: '太字ロゴ・カテゴリリンク・検索アイコン・地域選択を備えた、線で整理されたナビ。',
      detail:
        'Accenture サイト最上部のスティッキーナビゲーションで、左に太字ロゴ「>」マーク、中央にサービスメニュー(横線で区切られたカテゴリ)、右に検索・地域切替・お問い合わせを配置します。下に黒の細い1px線が引かれ、編集デザインの硬質感を演出します。スクロール時は薄く影をつけて浮かばせるパターンも定番。',
      descEn:
        'Accenture\'s sticky top bar: bold ">" logo, line-divided service categories in the middle, search + region + contact on the right, anchored by a 1px black underline.',
      detailEn:
        'The sticky bar at the top of Accenture\'s site puts the bold ">" logo on the left, line-separated service categories in the middle, and search / region / contact on the right. A single 1px black line anchors the whole strip, giving the editorial-design feel. On scroll, a soft drop shadow makes it lift off the page.',
      code: `<!-- Inspired by Accenture Top Bar -->
<header class="ui-acn-nav">
  <div class="ui-acn-nav__row">
    <a class="ui-acn-nav__brand" href="#">
      <span class="ui-acn-nav__caret">›</span> Accenture
    </a>
    <nav class="ui-acn-nav__menu" aria-label="メインメニュー">
      <a href="#">私たちについて</a>
      <a href="#">サービス</a>
      <a href="#">業界</a>
      <a href="#">インサイト</a>
      <a href="#">採用</a>
    </nav>
    <div class="ui-acn-nav__tail">
      <button type="button" class="ui-acn-nav__btn" aria-label="検索">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      </button>
      <button type="button" class="ui-acn-nav__btn" aria-label="地域">JP <span aria-hidden="true">▾</span></button>
      <a class="ui-acn-nav__contact" href="#">お問い合わせ <span aria-hidden="true">›</span></a>
    </div>
  </div>
</header>

<style>
  .ui-acn-nav{background:#fff;border-bottom:1px solid #000;font-family:"Graphik",-apple-system,"Helvetica Neue",sans-serif;max-width:1180px;margin:0 auto}
  .ui-acn-nav__row{display:flex;align-items:center;gap:18px;padding:18px 24px;position:relative}
  .ui-acn-nav__brand{display:inline-flex;align-items:center;gap:4px;color:#000;text-decoration:none;font:700 22px/1 "Graphik",-apple-system,sans-serif;letter-spacing:-.015em;flex-shrink:0}
  .ui-acn-nav__caret{color:#a100ff;font-size:24px;font-weight:900;line-height:1}
  .ui-acn-nav__menu{display:flex;gap:0;flex:1;justify-content:center}
  .ui-acn-nav__menu a{padding:0 16px;font:500 14px/1.2 -apple-system,sans-serif;color:#000;text-decoration:none;border-right:1px solid #d6d6d6;transition:color .15s}
  .ui-acn-nav__menu a:last-child{border-right:0}
  .ui-acn-nav__menu a:hover{color:#a100ff}
  .ui-acn-nav__tail{display:flex;align-items:center;gap:10px;flex-shrink:0}
  .ui-acn-nav__btn{display:inline-flex;align-items:center;gap:4px;color:#000;background:transparent;border:0;font:500 13px/1 -apple-system,sans-serif;cursor:pointer;padding:8px;border-radius:0}
  .ui-acn-nav__btn:hover{color:#a100ff}
  .ui-acn-nav__contact{display:inline-flex;align-items:center;gap:4px;color:#fff;background:#000;text-decoration:none;font:600 13px/1 -apple-system,sans-serif;padding:10px 14px;transition:background .15s}
  .ui-acn-nav__contact:hover{background:#a100ff}
  @media (max-width:780px){.ui-acn-nav__menu{display:none}}
</style>`,
    },
    {
      name: 'Accenture Numbered Insights',
      nameJa: 'Accenture 数字付き インサイト一覧',
      desc: '「01 / 02 / 03」と大きな数字をつけて並べる、ファインダーらしい記事リスト。',
      detail:
        'Accenture の「インサイト」「ニュース」「最新調査」セクションでよく見る、巨大な数字を左に配置した編集デザインリストです。各項目は「01」のような巨大ナンバー+タイトル+短い説明+カテゴリタグの構成。シリアルナンバーが視線誘導のリズムをつくり、コンテンツの階層を即座に伝えます。コンサルファーム・新聞社・出版社系のサイトに最適なパターンです。',
      descEn:
        'A numbered editorial list ("01 / 02 / 03") with each entry headline, summary, and tag — used on Accenture\'s insight and news sections.',
      detailEn:
        'You see this on Accenture\'s "Insights", "News", and "Latest Research" sections — large serial numbers (01, 02, 03) anchor each entry, paired with a headline, short summary, and tag. The numbers create a reading rhythm and signal hierarchy instantly. It is ideal for consulting firms, newspapers, and publishers who want their articles to feel curated and editorial.',
      code: `<!-- Inspired by Accenture Insights -->
<section class="ui-acn-list">
  <div class="ui-acn-list__head">
    <h2 class="ui-acn-list__h">最新インサイト</h2>
    <a class="ui-acn-list__more" href="#">すべて見る <span aria-hidden="true">›</span></a>
  </div>
  <ul class="ui-acn-list__items">
    <li class="ui-acn-list__item">
      <span class="ui-acn-list__num">01</span>
      <div class="ui-acn-list__body">
        <span class="ui-acn-list__tag">レポート</span>
        <h3>生成AIで生産性をどう再設計するか</h3>
        <p>1,491名の経営層調査が示す、新しい仕事の生産フロンティア。実務での導入は次のフェーズへ。</p>
      </div>
      <a class="ui-acn-list__link" href="#" aria-label="記事を読む">›</a>
    </li>
    <li class="ui-acn-list__item">
      <span class="ui-acn-list__num">02</span>
      <div class="ui-acn-list__body">
        <span class="ui-acn-list__tag">調査</span>
        <h3>サイバー攻撃の経済学:2026年のリスクは過去最大に</h3>
        <p>金融・製造・公共の3セクターで攻撃面が拡大、防御投資のROIを再計算する時期に。</p>
      </div>
      <a class="ui-acn-list__link" href="#" aria-label="記事を読む">›</a>
    </li>
    <li class="ui-acn-list__item">
      <span class="ui-acn-list__num">03</span>
      <div class="ui-acn-list__body">
        <span class="ui-acn-list__tag">ブログ</span>
        <h3>サステナブル経営は意思決定の解像度で決まる</h3>
        <p>データの民主化と部門横断の合意形成、その両輪で動く実装パターン。</p>
      </div>
      <a class="ui-acn-list__link" href="#" aria-label="記事を読む">›</a>
    </li>
  </ul>
</section>

<style>
  .ui-acn-list{background:#fff;padding:48px 32px;font-family:"Graphik",-apple-system,"Helvetica Neue",sans-serif;color:#000;max-width:1100px;margin:0 auto}
  .ui-acn-list__head{display:flex;align-items:baseline;justify-content:space-between;border-bottom:1px solid #000;padding-bottom:14px;margin-bottom:8px}
  .ui-acn-list__h{font:700 28px/1.1 "Graphik",-apple-system,sans-serif;letter-spacing:-.012em;margin:0}
  .ui-acn-list__more{color:#000;text-decoration:none;font:600 13px/1 -apple-system,sans-serif}
  .ui-acn-list__more:hover{color:#a100ff}
  .ui-acn-list__items{list-style:none;margin:0;padding:0}
  .ui-acn-list__item{display:grid;grid-template-columns:90px 1fr auto;gap:24px;align-items:flex-start;padding:24px 0;border-bottom:1px solid #ddd;cursor:pointer;transition:background .15s}
  .ui-acn-list__item:hover{background:#fafafa}
  .ui-acn-list__num{font:700 56px/0.9 "Graphik",-apple-system,sans-serif;letter-spacing:-.02em;color:#a100ff;font-variant-numeric:tabular-nums}
  .ui-acn-list__tag{display:inline-block;font:600 11px/1 -apple-system,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#666;padding-bottom:8px}
  .ui-acn-list__body h3{font:600 22px/1.25 "Graphik",-apple-system,sans-serif;letter-spacing:-.005em;margin:0 0 6px;color:#000}
  .ui-acn-list__body p{font:400 14px/1.55 -apple-system,sans-serif;color:#444;margin:0;max-width:520px}
  .ui-acn-list__link{align-self:center;font:700 28px/1 "Graphik",-apple-system,sans-serif;color:#000;text-decoration:none;transition:color .15s,transform .15s}
  .ui-acn-list__item:hover .ui-acn-list__link{color:#a100ff;transform:translateX(4px)}
  @media (max-width:640px){.ui-acn-list__item{grid-template-columns:64px 1fr auto;gap:14px}.ui-acn-list__num{font-size:40px}.ui-acn-list__body h3{font-size:18px}}
</style>`,
    },
    {
      name: 'Accenture Dark CTA Band',
      nameJa: 'Accenture 暗背景のCTAバンド',
      desc: '黒/紫の濃いバンドに、白文字の見出しと「>」リンクを並べた誘導セクション。',
      detail:
        'Accenture のページ下部で必ずと言っていいほど現れる、濃紫または黒の背景に白文字の問いかけ見出しを乗せたCTAバンドです。「お困りごとを、変化のきっかけに。」のような問いかけと、矢印付きの「›」リンクで構成。フッターの直前に置くことで、訪問者の最後のひと押しになります。背景はベタ色か斜めグラデーション、文字は太字、見出しの右下に「›」を大きく表示するのが定石です。',
      descEn:
        'A dark-band CTA placed just above the footer — purple or black, a white headline question, and an oversized ">" arrow CTA.',
      detailEn:
        'A near-universal feature on Accenture pages — a dark purple or black CTA band right above the footer. White-text headline ("Turn your challenge into change."), short helper, and an oversized ">" arrow CTA. Use a flat color or a diagonal gradient, set the headline bold, and place the chevron large in the lower right. It is the last push before the footer.',
      code: `<!-- Inspired by Accenture CTA -->
<section class="ui-acn-cta">
  <div class="ui-acn-cta__inner">
    <p class="ui-acn-cta__eye">Let there be change</p>
    <h2 class="ui-acn-cta__h">お困りごとを、<br>変化のきっかけに。</h2>
    <p class="ui-acn-cta__lead">経営課題から実装まで、私たちが伴走します。お気軽にご相談ください。</p>
  </div>
  <a class="ui-acn-cta__btn" href="#">
    <span class="ui-acn-cta__btn-l">お問い合わせ</span>
    <span class="ui-acn-cta__btn-arr" aria-hidden="true">›</span>
  </a>
</section>

<style>
  .ui-acn-cta{position:relative;background:linear-gradient(120deg,#460073 0%,#7500c0 50%,#a100ff 100%);color:#fff;padding:56px 40px;font-family:"Graphik",-apple-system,"Helvetica Neue",sans-serif;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;max-width:1180px;margin:0 auto;overflow:hidden}
  .ui-acn-cta::before{content:"";position:absolute;right:-40px;bottom:-40px;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(255,80,173,.3) 0%,transparent 60%);pointer-events:none}
  .ui-acn-cta__inner{max-width:580px;position:relative;z-index:1}
  .ui-acn-cta__eye{font:600 12px/1 -apple-system,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#ffd9f2;margin:0 0 14px;padding-left:12px;border-left:3px solid #ff50ad}
  .ui-acn-cta__h{font:700 40px/1.1 "Graphik",-apple-system,sans-serif;letter-spacing:-.012em;margin:0 0 12px;color:#fff}
  .ui-acn-cta__lead{font:400 16px/1.5 -apple-system,sans-serif;color:rgba(255,255,255,.84);margin:0}
  .ui-acn-cta__btn{display:inline-flex;align-items:center;gap:18px;color:#fff;text-decoration:none;background:rgba(255,255,255,.14);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.4);padding:18px 24px;font:600 15px/1 -apple-system,sans-serif;transition:.2s;position:relative;z-index:1}
  .ui-acn-cta__btn-arr{font:700 32px/1 "Graphik",-apple-system,sans-serif}
  .ui-acn-cta__btn:hover{background:rgba(255,255,255,.28);transform:translateX(4px)}
  @media (max-width:640px){.ui-acn-cta__h{font-size:28px}}
</style>`,
    },
    {
      name: 'Accenture Quote Spotlight',
      nameJa: 'Accenture 大判クォート(引用ハイライト)',
      desc: '巨大なセリフ書体の引用記号「"」と短いリーダーボイスを並べた、強力な引用ブロック。',
      detail:
        'Accenture のクライアント事例ページや経営陣メッセージで頻出する、左上に超巨大なクォート(")記号を置き、その下に重要な発言を太字で引用するレイアウトです。発言下には話者の写真(または名前)と役職を配置。読者の視線をクォートに釘付けにする効果があり、ブランド・コンサル系の事例紹介で説得力を出すのに最適。背景は淡いグレーか紫の薄塗りで、活字の力を最大化します。',
      descEn:
        'A bold quote-spotlight block — a giant typographic quote mark, a short statement, and the speaker\'s name and title.',
      detailEn:
        'You see this often on Accenture\'s case studies and leadership messages — a giant typographic " mark in the upper left, the critical quote set bold below it, then the speaker\'s name, photo, and title at the bottom. The mark hijacks the eye and signals "important voice". Use a soft gray or purple-tinted background so the typography stays the star. Perfect for consulting and B2B brands seeking gravitas in a case study.',
      code: `<!-- Inspired by Accenture Quote -->
<figure class="ui-acn-q">
  <div class="ui-acn-q__mark" aria-hidden="true">“</div>
  <blockquote class="ui-acn-q__quote">
    AIは私たちの仕事を奪うのではなく、私たちが価値を生む場所を再定義する。<br>その再定義に踏み出す勇気が、これからの競争優位だ。
  </blockquote>
  <figcaption class="ui-acn-q__cap">
    <div class="ui-acn-q__avatar" aria-hidden="true">JS</div>
    <div class="ui-acn-q__who">
      <strong>Julie Sweet</strong>
      <span>Chair & CEO, Accenture</span>
    </div>
  </figcaption>
</figure>

<style>
  .ui-acn-q{position:relative;background:#f4eafa;padding:56px 48px 40px;font-family:"Graphik",-apple-system,"Helvetica Neue",sans-serif;color:#1a002a;margin:0;max-width:880px;border-radius:0;overflow:hidden}
  .ui-acn-q__mark{position:absolute;top:-12px;left:24px;font:700 220px/1 Georgia,"Times New Roman",serif;color:#a100ff;opacity:.18;pointer-events:none}
  .ui-acn-q__quote{font:500 26px/1.35 "Graphik",-apple-system,sans-serif;letter-spacing:-.005em;color:#1a002a;margin:0 0 32px;max-width:680px;position:relative}
  .ui-acn-q__cap{display:flex;align-items:center;gap:14px}
  .ui-acn-q__avatar{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#a100ff 0%,#460073 100%);color:#fff;display:inline-flex;align-items:center;justify-content:center;font:700 16px/1 -apple-system,sans-serif;letter-spacing:.02em}
  .ui-acn-q__who{display:flex;flex-direction:column;line-height:1.3}
  .ui-acn-q__who strong{font:700 15px/1.2 -apple-system,sans-serif;color:#000}
  .ui-acn-q__who span{font:400 13px/1.2 -apple-system,sans-serif;color:#555}
  @media (max-width:640px){.ui-acn-q__quote{font-size:20px}.ui-acn-q__mark{font-size:160px}}
</style>`,
    },
  ],
}
