/**
 * UI Parts — Dark × Purple Accent site skeleton.
 * Generic, copy-paste-ready snippets for editorial corporate sites with a
 * pure-black hero, a purple ">" accent split inside the headline, a 4-card
 * insight row, and a dark pre-footer CTA band.
 */

export const category = {
  id: 'ui-parts-site-dark',
  title: 'ダーク × 紫アクセント サイト骨格',
  titleEn: 'Dark × Purple Accent Site Skeleton',
  description:
    '純黒ヒーロー+巨大ボールド英字見出し+紫"›"アクセント、4枚カード行、紫グラデCTAバンドなど、力強い編集デザインのコーポレートサイト骨格をまるごと再現。',
  descriptionEn:
    'A dark editorial corporate site skeleton: pure-black hero with a giant bold headline split by a purple ">" accent, a 4-card insight row, and a purple-gradient pre-footer CTA band.',
  terms: [
    {
      name: 'Top Nav (white, with caret dropdowns)',
      nameJa: '上部ナビ(白背景・▾ドロップダウン・紫マーク)',
      desc: '白背景の上部ナビ。左端の紫">"マーク、中央のカテゴリ+▾、右端の検索と地域選択。',
      detail:
        '上部ナビゲーション。背景は白か無背景の上に乗る形で、左端には太字の "›" シンボルを紫(#a100ff)で大きく配置します。中央には「サービス / 知見 / 会社情報 / 採用情報」など主要メニューを大きめ太字で並べ、各リンクの右側に小さな「▾」キャレットでドロップダウン可能性を示します。右端は検索アイコン(虫眼鏡)と地域選択(🌐 Japan ▾)。文字色は黒、ホバーで下に紫の細い下線。',
      descEn:
        'White-background top nav with a purple ">" mark on the left, center categories with caret dropdowns, and search + region on the right.',
      detailEn:
        'White-background top nav. A bold ">" mark anchors the left in brand purple (#a100ff). Categories ("Services", "Insights", "About", "Careers") run across the middle in heavier weight with small "▾" carets indicating dropdowns. Right side has the search magnifier and a region picker (🌐 Japan ▾). Text is black; hover adds a thin purple underline.',
      code: `<!-- Dark-purple editorial top nav -->
<header class="ui-dpurple-nav" role="banner">
  <div class="ui-dpurple-nav__inner">
    <a class="ui-dpurple-nav__brand" href="#" aria-label="Home">
      <span class="ui-dpurple-nav__mark" aria-hidden="true">&gt;</span>
    </a>
    <nav class="ui-dpurple-nav__menu" aria-label="Main">
      <a href="#">サービス <span aria-hidden="true">▾</span></a>
      <a href="#">知見 <span aria-hidden="true">▾</span></a>
      <a href="#">会社情報 <span aria-hidden="true">▾</span></a>
      <a href="#">採用情報 <span aria-hidden="true">▾</span></a>
    </nav>
    <div class="ui-dpurple-nav__tail">
      <button type="button" class="ui-dpurple-nav__ico" aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      </button>
      <button type="button" class="ui-dpurple-nav__region">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
        Japan <span aria-hidden="true">▾</span>
      </button>
    </div>
  </div>
</header>

<style>
  .ui-dpurple-nav{background:#fff;font-family:"Graphik","Helvetica Neue",-apple-system,sans-serif;max-width:1180px;margin:0 auto}
  .ui-dpurple-nav__inner{display:flex;align-items:center;gap:32px;padding:14px 26px;min-height:62px}
  .ui-dpurple-nav__brand{flex-shrink:0;display:inline-flex;align-items:center;text-decoration:none;color:#a100ff}
  .ui-dpurple-nav__mark{font:900 38px/1 "Graphik","Helvetica Neue",sans-serif;letter-spacing:-.04em;color:#a100ff}
  .ui-dpurple-nav__menu{flex:1;display:flex;justify-content:center;gap:36px}
  .ui-dpurple-nav__menu a{display:inline-flex;align-items:center;gap:4px;color:#000;text-decoration:none;font:500 16px/1 "Graphik","Helvetica Neue",sans-serif;padding:8px 0;border-bottom:2px solid transparent;transition:border-color .15s,color .15s}
  .ui-dpurple-nav__menu a span{font-size:11px;color:#555}
  .ui-dpurple-nav__menu a:hover{color:#a100ff;border-bottom-color:#a100ff}
  .ui-dpurple-nav__tail{display:flex;align-items:center;gap:14px;flex-shrink:0}
  .ui-dpurple-nav__ico{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;color:#000;background:transparent;border:0;cursor:pointer;transition:color .15s}
  .ui-dpurple-nav__ico svg{width:18px;height:18px}
  .ui-dpurple-nav__ico:hover{color:#a100ff}
  .ui-dpurple-nav__region{display:inline-flex;align-items:center;gap:6px;color:#000;background:transparent;border:0;font:500 14px/1 "Graphik","Helvetica Neue",sans-serif;cursor:pointer;padding:8px 4px;transition:color .15s}
  .ui-dpurple-nav__region svg{width:16px;height:16px}
  .ui-dpurple-nav__region:hover{color:#a100ff}
  @media (max-width:780px){.ui-dpurple-nav__menu{display:none}}
</style>`,
    },
    {
      name: 'Black Hero with ">" Accent',
      nameJa: '黒背景ヒーロー(見出しに紫">"埋め込み)',
      desc: '純黒の背景に巨大ボールド英字見出し、文字の中に紫の">"を埋め込み、右側に粒子の波と紫バー説明。',
      detail:
        '象徴的なメインヒーロー。背景は純黒(#000)、左に超巨大なボールドサンセリフ見出しを2行配置し、見出しの英字の "V" や "I" を紫(#a100ff)の "›" シンボルに置き換える(例: "REIN›ENTED")のがブランドの個性。右側には粒子が波のように降る抽象的なビジュアル効果を CSS で表現します。右下に小さなリード文と紫CTA。',
      descEn:
        'A pure-black hero — huge bold sans-serif headline whose letters split around a purple ">" mark, with a particle-wave effect on the right.',
      detailEn:
        'The signature dark hero — pure-black (#000) background, an oversize bold sans-serif headline that splits an English word with a purple (#a100ff) "›" mark (e.g. "REIN›ENTED"). A particle-wave abstract drifts on the right. A short lead and a purple-pink "Case studies ›" CTA sit beneath.',
      code: `<!-- Black hero with ">" accent -->
<section class="ui-dpurple-hero">
  <div class="ui-dpurple-hero__wave" aria-hidden="true">
    <span class="ui-dpurple-hero__p1"></span>
    <span class="ui-dpurple-hero__p2"></span>
    <span class="ui-dpurple-hero__p3"></span>
  </div>
  <div class="ui-dpurple-hero__main">
    <h1 class="ui-dpurple-hero__h">
      <span class="ui-dpurple-hero__l1">TOGETHER WE</span>
      <span class="ui-dpurple-hero__l2">REIN<span class="ui-dpurple-hero__caret">&gt;</span>ENTED</span>
    </h1>
    <button class="ui-dpurple-hero__play" aria-label="一時停止">||</button>
  </div>
  <aside class="ui-dpurple-hero__side">
    <div class="ui-dpurple-hero__rule" aria-hidden="true"></div>
    <p class="ui-dpurple-hero__lead">新しいサプライチェーン、Wow を生む体験、満員のスタジアム、おいしい食、安らかな休日 — 私たちとなら、何でも再創造できる。</p>
    <a class="ui-dpurple-hero__cta" href="#">事例を見る <span aria-hidden="true">›</span></a>
  </aside>
</section>

<style>
  .ui-dpurple-hero{position:relative;background:#000;color:#fff;padding:48px 28px 60px;font-family:"Graphik","Helvetica Neue",-apple-system,sans-serif;display:grid;grid-template-columns:1.5fr 1fr;gap:32px;max-width:1180px;margin:0 auto;min-height:420px;overflow:hidden}
  .ui-dpurple-hero__wave{position:absolute;right:-40px;top:0;bottom:0;width:60%;z-index:0;pointer-events:none;opacity:.55}
  .ui-dpurple-hero__wave span{position:absolute;border-radius:50%;background:radial-gradient(circle,#a100ff 0%,transparent 70%);filter:blur(20px)}
  .ui-dpurple-hero__p1{top:30%;left:20%;width:260px;height:260px;opacity:.4;animation:dpurpleP 12s ease-in-out infinite}
  .ui-dpurple-hero__p2{top:60%;left:50%;width:180px;height:180px;opacity:.3;animation:dpurpleP 14s ease-in-out infinite reverse}
  .ui-dpurple-hero__p3{top:10%;left:70%;width:140px;height:140px;opacity:.5;animation:dpurpleP 10s ease-in-out infinite}
  @keyframes dpurpleP{50%{transform:translate(20px,-30px) scale(1.15)}}
  .ui-dpurple-hero__main{position:relative;z-index:1;display:flex;flex-direction:column;justify-content:space-between}
  .ui-dpurple-hero__h{font:900 64px/0.95 "Graphik","Helvetica Neue",sans-serif;letter-spacing:-.025em;margin:0;color:#fff;text-transform:uppercase}
  .ui-dpurple-hero__l1{display:block}
  .ui-dpurple-hero__l2{display:block;margin-top:8px}
  .ui-dpurple-hero__caret{color:#a100ff;font-weight:900;display:inline-block;transform:scaleX(1.4) scaleY(1.1);margin:0 2px;letter-spacing:0}
  .ui-dpurple-hero__play{margin-top:auto;align-self:flex-start;width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;color:#fff;background:transparent;border:1px solid rgba(255,255,255,.4);border-radius:50%;cursor:pointer;font:700 14px/1 sans-serif;letter-spacing:-.04em}
  .ui-dpurple-hero__side{position:relative;z-index:1;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;max-width:280px}
  .ui-dpurple-hero__rule{width:42px;height:3px;background:#a100ff;margin-bottom:14px}
  .ui-dpurple-hero__lead{font:400 15px/1.55 "Helvetica Neue",sans-serif;color:rgba(255,255,255,.88);margin:0 0 18px;letter-spacing:.01em}
  .ui-dpurple-hero__cta{display:inline-flex;align-items:center;gap:10px;color:#fff;text-decoration:none;background:#a100ff;font:600 13px/1 "Helvetica Neue",sans-serif;padding:10px 14px;transition:background .15s}
  .ui-dpurple-hero__cta:hover{background:#7500c0}
  .ui-dpurple-hero__cta span{font:700 18px/1 sans-serif}
  @media (max-width:760px){.ui-dpurple-hero{grid-template-columns:1fr;min-height:auto}.ui-dpurple-hero__h{font-size:40px}}
</style>`,
    },
    {
      name: '4-Card Insights Row',
      nameJa: '4枚カード インサイト行(明/暗交互)',
      desc: 'ヒーロー下に並ぶ4枚の縦長カード。タグ+大見出し、背景は明/暗/グラフィック交互。',
      detail:
        'ヒーロー直下に並ぶ「4枚カード行」。各カードは縦長の長方形(縦横比3:4ほど)で、上部に小さなカテゴリタグ(知見/調査レポート等)、その下に大きな見出し、そして下半分にグラフィック(明るい線画イラスト、3Dキューブ、波線粒子、暖色グラデなど)を配置。1枚目は明背景+線画、2〜4枚目は暗紫背景+各種抽象ビジュアル、と背景を交互に変えるのが特徴的です。',
      descEn:
        'A 4-card row directly under the hero — tall cards alternating light-illustration / dark-graphic backgrounds, each with a small tag + large headline.',
      detailEn:
        'Right under the hero, a 4-card row. Each is tall (≈3:4), with a small category tag, a large headline, and a graphic in the lower half. The first card is light with a line drawing; cards 2–4 use dark purple backgrounds with different abstract graphics (cubes, waves, mesh). The alternation gives the row rhythm.',
      code: `<!-- 4-card insight row (light/dark alternating) -->
<section class="ui-dpurple-row">
  <article class="ui-dpurple-row__c ui-dpurple-row__c--light">
    <span class="ui-dpurple-row__tag">知見</span>
    <h3 class="ui-dpurple-row__h">データセンタートレンド 2026:変革の加速</h3>
    <div class="ui-dpurple-row__art" aria-hidden="true">
      <span class="ui-dpurple-row__line"></span><span class="ui-dpurple-row__line"></span><span class="ui-dpurple-row__line"></span>
      <div class="ui-dpurple-row__box"></div>
    </div>
  </article>
  <article class="ui-dpurple-row__c ui-dpurple-row__c--cube">
    <span class="ui-dpurple-row__tag">調査レポート</span>
    <h3 class="ui-dpurple-row__h">エージェント型 AI に対応したプラットフォーム戦略の再構築</h3>
    <div class="ui-dpurple-row__art" aria-hidden="true">
      <span class="ui-dpurple-row__cube ui-dpurple-row__cube--1"></span>
      <span class="ui-dpurple-row__cube ui-dpurple-row__cube--2"></span>
      <span class="ui-dpurple-row__cube ui-dpurple-row__cube--3"></span>
    </div>
  </article>
  <article class="ui-dpurple-row__c ui-dpurple-row__c--wave">
    <span class="ui-dpurple-row__tag">調査レポート</span>
    <h3 class="ui-dpurple-row__h">2026年の銀行業界のトップトレンド</h3>
    <div class="ui-dpurple-row__art" aria-hidden="true">
      <span class="ui-dpurple-row__w"></span><span class="ui-dpurple-row__w"></span><span class="ui-dpurple-row__w"></span>
    </div>
  </article>
  <article class="ui-dpurple-row__c ui-dpurple-row__c--mesh">
    <span class="ui-dpurple-row__tag">調査レポート</span>
    <h3 class="ui-dpurple-row__h">Pulse of Change:現代のリーダーたちの最大の関心事とは?</h3>
    <div class="ui-dpurple-row__art" aria-hidden="true">
      <div class="ui-dpurple-row__mesh"></div>
    </div>
  </article>
</section>

<style>
  .ui-dpurple-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding:24px;background:#000;font-family:"Graphik","Helvetica Neue",-apple-system,sans-serif;max-width:1180px;margin:0 auto}
  .ui-dpurple-row__c{display:flex;flex-direction:column;justify-content:space-between;min-height:300px;padding:20px 18px;position:relative;overflow:hidden;cursor:pointer;transition:transform .2s}
  .ui-dpurple-row__c:hover{transform:translateY(-4px)}
  .ui-dpurple-row__c--light{background:#e8e8ed;color:#000}
  .ui-dpurple-row__c--cube{background:#3b0066;color:#fff}
  .ui-dpurple-row__c--wave{background:linear-gradient(135deg,#2a0048 0%,#1a002e 100%);color:#fff}
  .ui-dpurple-row__c--mesh{background:#3b0066;color:#fff}
  .ui-dpurple-row__tag{font:600 11px/1 "Helvetica Neue",sans-serif;letter-spacing:.06em;opacity:.7;margin-bottom:12px}
  .ui-dpurple-row__h{font:600 17px/1.3 "Graphik","Helvetica Neue",sans-serif;letter-spacing:-.005em;margin:0;flex:1}
  .ui-dpurple-row__art{height:110px;position:relative;margin-top:14px;display:flex;align-items:center;justify-content:center}
  .ui-dpurple-row__line{display:block;height:1px;background:#666;width:80%;position:absolute;left:10%}
  .ui-dpurple-row__line:nth-child(1){bottom:40%}
  .ui-dpurple-row__line:nth-child(2){bottom:30%}
  .ui-dpurple-row__line:nth-child(3){bottom:20%}
  .ui-dpurple-row__box{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);width:36px;height:36px;border:2px solid #666;border-radius:6px}
  .ui-dpurple-row__cube{position:absolute;width:36px;height:36px;background:linear-gradient(135deg,#ff50ad 0%,#a100ff 100%);transform:rotate(45deg);border-radius:4px}
  .ui-dpurple-row__cube--1{left:18%;bottom:30px}
  .ui-dpurple-row__cube--2{left:42%;bottom:50px;width:46px;height:46px;opacity:.85}
  .ui-dpurple-row__cube--3{right:18%;bottom:20px;width:26px;height:26px;opacity:.7}
  .ui-dpurple-row__w{position:absolute;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,#ff50ad,transparent);border-radius:50%}
  .ui-dpurple-row__w:nth-child(1){top:30%;transform:rotate(-10deg)}
  .ui-dpurple-row__w:nth-child(2){top:50%;transform:rotate(8deg);background:linear-gradient(90deg,transparent,#a100ff,transparent)}
  .ui-dpurple-row__w:nth-child(3){top:70%;transform:rotate(-4deg);background:linear-gradient(90deg,transparent,#ff50ad,transparent)}
  .ui-dpurple-row__mesh{position:absolute;inset:0;background-image:radial-gradient(circle,#ff50ad 1px,transparent 1px);background:radial-gradient(circle,#ff50ad 1px,transparent 1px) 0 0 / 8px 8px;opacity:.4}
  @media (max-width:900px){.ui-dpurple-row{grid-template-columns:repeat(2,1fr)}}
  @media (max-width:500px){.ui-dpurple-row{grid-template-columns:1fr}}
</style>`,
    },
    {
      name: 'Pre-Footer CTA Band',
      nameJa: '暗背景CTAバンド(紫+ピンクハイライト)',
      desc: '紫グラデの背景に紫"›"アクセント、白文字の問いかけ見出し+矢印CTAボタン。',
      detail:
        '各ページ最下部、フッターの直前で必ず登場するCTAバンドです。背景は深紫から明紫へのグラデーション(#460073 → #a100ff)、右下にピンクの放射状光、左に小さなエイブロー(紫バー付き)、太字白の問いかけ見出し、短いリード、右側に大きな「›」付きCTAボタンを配置。',
      descEn:
        'A purple-gradient CTA band right above the footer — eyebrow + headline question + short lead, with an oversized chevron CTA on the right.',
      detailEn:
        'A purple gradient (#460073 → #a100ff) with a pink radial glow lower-right, a small eyebrow on a purple rule, a bold white question headline, a short lead, and an oversized "›" CTA on the right. Sits right above the footer on every page.',
      code: `<!-- Pre-footer dark CTA band -->
<section class="ui-dpurple-cta">
  <div class="ui-dpurple-cta__inner">
    <p class="ui-dpurple-cta__eye">Let there be change</p>
    <h2 class="ui-dpurple-cta__h">変化を、<br>価値に変える。</h2>
    <p class="ui-dpurple-cta__lead">経営課題から実装まで、私たちが伴走します。お気軽にご相談ください。</p>
  </div>
  <a class="ui-dpurple-cta__btn" href="#">
    <span class="ui-dpurple-cta__btn-l">お問い合わせ</span>
    <span class="ui-dpurple-cta__btn-arr" aria-hidden="true">›</span>
  </a>
</section>

<style>
  .ui-dpurple-cta{position:relative;background:linear-gradient(120deg,#460073 0%,#7500c0 50%,#a100ff 100%);color:#fff;padding:48px 40px;font-family:"Graphik","Helvetica Neue",-apple-system,sans-serif;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;max-width:1180px;margin:0 auto;overflow:hidden}
  .ui-dpurple-cta::before{content:"";position:absolute;right:-40px;bottom:-40px;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(255,80,173,.34) 0%,transparent 60%);pointer-events:none}
  .ui-dpurple-cta__inner{max-width:580px;position:relative;z-index:1}
  .ui-dpurple-cta__eye{font:600 12px/1 "Helvetica Neue",sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#ffd9f2;margin:0 0 14px;padding-left:12px;border-left:3px solid #ff50ad}
  .ui-dpurple-cta__h{font:700 38px/1.1 "Graphik","Helvetica Neue",sans-serif;letter-spacing:-.012em;margin:0 0 12px;color:#fff}
  .ui-dpurple-cta__lead{font:400 15px/1.5 "Helvetica Neue",sans-serif;color:rgba(255,255,255,.86);margin:0}
  .ui-dpurple-cta__btn{display:inline-flex;align-items:center;gap:18px;color:#fff;text-decoration:none;background:rgba(255,255,255,.14);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.4);padding:18px 22px;font:600 14px/1 "Helvetica Neue",sans-serif;transition:.2s;position:relative;z-index:1}
  .ui-dpurple-cta__btn-arr{font:700 28px/1 "Graphik","Helvetica Neue",sans-serif}
  .ui-dpurple-cta__btn:hover{background:rgba(255,255,255,.28);transform:translateX(4px)}
  @media (max-width:640px){.ui-dpurple-cta__h{font-size:26px}}
</style>`,
    },
    {
      name: 'Quote Spotlight',
      nameJa: '大判クォート(引用ハイライト)',
      desc: '巨大な"記号+太字引用+話者アバター。経営陣メッセージや事例で使う引用ブロック。',
      detail:
        '事例ページ・経営陣メッセージで頻出する、左上に超巨大なクォート記号を置き、その下に発言を太字で引用するレイアウト。発言下に話者の頭文字アバターと役職を配置。読者の視線をクォートに集中させる効果があり、コンサル/B2B 系で説得力を出すのに最適。',
      descEn:
        'A bold quote-spotlight — a giant typographic quote mark, a short statement, and the speaker\'s name and title.',
      detailEn:
        'A giant " mark in the upper left, a bold quote, then speaker initials avatar + title. Hijacks the eye and signals "important voice". Soft gradient background keeps the typography the star — perfect for consulting and B2B brands.',
      code: `<!-- Quote spotlight -->
<figure class="ui-dpurple-q">
  <div class="ui-dpurple-q__mark" aria-hidden="true">"</div>
  <blockquote class="ui-dpurple-q__quote">
    AI は私たちの仕事を奪うのではなく、<br>私たちが価値を生む場所を再定義する。<br>その再定義に踏み出す勇気が、これからの競争優位だ。
  </blockquote>
  <figcaption class="ui-dpurple-q__cap">
    <div class="ui-dpurple-q__avatar" aria-hidden="true">JS</div>
    <div class="ui-dpurple-q__who"><strong>JS</strong><span>Chair &amp; CEO</span></div>
  </figcaption>
</figure>

<style>
  .ui-dpurple-q{position:relative;background:#f4eafa;padding:56px 48px 40px;font-family:"Graphik","Helvetica Neue",-apple-system,sans-serif;color:#1a002a;margin:0;max-width:880px;overflow:hidden}
  .ui-dpurple-q__mark{position:absolute;top:-12px;left:24px;font:700 200px/1 Georgia,"Times New Roman",serif;color:#a100ff;opacity:.18;pointer-events:none}
  .ui-dpurple-q__quote{font:500 24px/1.4 "Graphik","Helvetica Neue",sans-serif;letter-spacing:-.005em;color:#1a002a;margin:0 0 28px;max-width:680px;position:relative}
  .ui-dpurple-q__cap{display:flex;align-items:center;gap:14px}
  .ui-dpurple-q__avatar{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,#a100ff 0%,#460073 100%);color:#fff;display:inline-flex;align-items:center;justify-content:center;font:700 15px/1 "Helvetica Neue",sans-serif}
  .ui-dpurple-q__who{display:flex;flex-direction:column;line-height:1.3}
  .ui-dpurple-q__who strong{font:700 14px/1.2 "Helvetica Neue",sans-serif;color:#000}
  .ui-dpurple-q__who span{font:400 12px/1.2 "Helvetica Neue",sans-serif;color:#555}
  @media (max-width:640px){.ui-dpurple-q__quote{font-size:18px}.ui-dpurple-q__mark{font-size:150px}}
</style>`,
    },
  ],
}
