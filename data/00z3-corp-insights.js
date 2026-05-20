/**
 * UI Parts Showcase (Corporate Insights & Thought Leadership) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-insights',
  title: '企業サイト インサイト',
  titleEn: 'Corporate Insights & Reports',
  description: 'McKinsey Insights・PwC Insights・HBR・MIT Sloan・Google Think など、インサイト/レポート系のUIをコピペで使えます。',
  terms: [
    {
      name: 'Editorial Article Card',
      nameJa: 'エディトリアル記事カード',
      desc: 'カテゴリ・大きなセリフ書体の見出し・著者・読了時間を組んだ、コンサル系記事カード。',
      detail: 'McKinsey Insightsのような戦略コンサル系の記事カードは、上部にカテゴリ(eyebrow)を小さく置き、その下に大きなセリフ書体で見出しを据えるレイアウトが定番です。下段に著者名と読了時間(○ min read)を並べることで、ジャーナル風の格調を出します。記事一覧ページや特集ページのトップで使うと、論考としての「重み」が伝わります。配色はホワイト＋濃紺＋アクセントカラーが王道です。',
      descEn: 'A consulting-style article card with an eyebrow category, a large serif headline, author, and read time.',
      detailEn: 'McKinsey Insights and similar consulting publications often use a card with a tiny eyebrow category up top, a big serif headline in the middle, and an author plus read time at the bottom. That structure gives the card a journal-like weight that feels authoritative. It works well at the top of an article index or feature page where you want the article to read as a serious essay rather than a blog post. White paper with deep navy and a single accent color is the classic palette.',
      code: `<!-- Inspired by McKinsey Insights -->
<article class="ui-mck-card">
  <div class="ui-mck-card__eyebrow">
    <span class="ui-mck-card__dot"></span>
    <span>Strategy &amp; Corporate Finance</span>
    <span class="ui-mck-card__sep">·</span>
    <span>Article</span>
  </div>
  <h2 class="ui-mck-card__title">The state of AI in 2026: How leaders are turning experiments into enterprise value</h2>
  <p class="ui-mck-card__dek">A new global survey of 1,491 executives reveals which moves separate AI front-runners from the rest — and what it costs to catch up.</p>
  <div class="ui-mck-card__meta">
    <div class="ui-mck-card__authors">
      <span class="ui-mck-card__avatar" style="background:#1a3a6c">AS</span>
      <span class="ui-mck-card__avatar" style="background:#5b7fa8;margin-left:-8px">MK</span>
      <span class="ui-mck-card__avatar" style="background:#2c5282;margin-left:-8px">RB</span>
    </div>
    <span class="ui-mck-card__byline">Alex Singla, Mei Kobayashi, and Rafael Bento</span>
    <span class="ui-mck-card__time">· 12 min read</span>
  </div>
</article>

<style>
  .ui-mck-card{max-width:560px;padding:32px 28px 26px;background:#fff;border-top:3px solid #051c2c;font-family:Georgia,"Times New Roman",serif;color:#051c2c;box-shadow:0 1px 0 rgba(5,28,44,.08)}
  .ui-mck-card__eyebrow{display:flex;align-items:center;gap:8px;font:600 11px/1 -apple-system,"Helvetica Neue",Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#051c2c;margin-bottom:18px}
  .ui-mck-card__dot{width:8px;height:8px;background:#2251ff;border-radius:50%}
  .ui-mck-card__sep{color:rgba(5,28,44,.4)}
  .ui-mck-card__title{margin:0 0 14px;font:400 26px/1.2 Georgia,serif;letter-spacing:-.005em;color:#051c2c}
  .ui-mck-card__dek{margin:0 0 22px;font:400 15px/1.55 Georgia,serif;color:rgba(5,28,44,.72)}
  .ui-mck-card__meta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font:500 12px/1.4 -apple-system,Arial,sans-serif;color:rgba(5,28,44,.7);padding-top:14px;border-top:1px solid rgba(5,28,44,.1)}
  .ui-mck-card__authors{display:flex}
  .ui-mck-card__avatar{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;color:#fff;font:600 10px -apple-system,Arial,sans-serif;border:2px solid #fff}
  .ui-mck-card__byline{margin-left:4px;color:#051c2c}
  .ui-mck-card__time{color:rgba(5,28,44,.55)}
</style>`,
    },
    {
      name: 'Featured Insight Banner',
      nameJa: '注目インサイトバナー',
      desc: '左にサムネ、右に見出し・dek・「続きを読む」を置いた横長の特集バナー。',
      detail: '注目インサイトバナーは、トップページの目玉として置く横長のカードです。左側に大きめのビジュアル(写真やイラスト)、右側にカテゴリ・大見出し・dek(短い導入文)・「Read the article」リンクを縦に並べる構造が一般的で、PwC InsightsやBCGなどコンサル系サイトで頻出します。1記事を強く推したいときに使い、視線を左から右へ自然に流せます。フッターには日付や著者を控えめに添えます。',
      descEn: 'A wide horizontal card with a thumbnail on the left and headline, dek, and read-more link on the right.',
      detailEn: 'A featured insight banner is the marquee card at the top of an insights homepage. The left side holds a large visual (photo or illustration), while the right side stacks an eyebrow category, a big headline, a short dek, and a "Read the article" link. PwC, BCG, and similar consulting sites use this pattern when they want to push one report above all the others. The layout pulls the eye left to right naturally, with date and author tucked in as quiet metadata.',
      code: `<!-- Inspired by PwC Insights -->
<a class="ui-pwc-feat" href="#">
  <div class="ui-pwc-feat__media" aria-hidden="true">
    <div class="ui-pwc-feat__grad"></div>
    <span class="ui-pwc-feat__badge">FEATURED</span>
    <svg class="ui-pwc-feat__art" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="70" stroke="#fff" stroke-width="1.2" opacity=".45"/>
      <circle cx="100" cy="100" r="45" stroke="#fff" stroke-width="1.2" opacity=".55"/>
      <circle cx="100" cy="100" r="20" fill="#fd9827"/>
      <path d="M30 100 H170 M100 30 V170" stroke="#fff" stroke-width="1" opacity=".35"/>
    </svg>
  </div>
  <div class="ui-pwc-feat__body">
    <div class="ui-pwc-feat__eyebrow">CEO Survey 2026 · Global</div>
    <h3 class="ui-pwc-feat__title">Reinventing the future: 4,702 CEOs on growth, AI, and climate transition</h3>
    <p class="ui-pwc-feat__dek">Our 29th Annual CEO Survey finds executives rebalancing risk — 38% say their company won't be viable in 10 years on its current path.</p>
    <div class="ui-pwc-feat__cta">
      Read the report
      <span class="ui-pwc-feat__arrow">→</span>
    </div>
    <div class="ui-pwc-feat__meta">January 14, 2026 · 24 min read</div>
  </div>
</a>

<style>
  .ui-pwc-feat{display:grid;grid-template-columns:240px 1fr;max-width:680px;background:#fff;text-decoration:none;color:#2d2d2d;font-family:"Helvetica Neue",Arial,sans-serif;border:1px solid #e6e6e6;overflow:hidden;transition:.2s}
  .ui-pwc-feat:hover{box-shadow:0 8px 24px rgba(0,0,0,.08)}
  .ui-pwc-feat__media{position:relative;background:#a32020;overflow:hidden;min-height:220px}
  .ui-pwc-feat__grad{position:absolute;inset:0;background:linear-gradient(135deg,#dc2f1c 0%,#a32020 60%,#6a1414 100%)}
  .ui-pwc-feat__badge{position:absolute;top:14px;left:14px;font:700 10px/1 Arial,sans-serif;letter-spacing:.15em;color:#fff;background:rgba(0,0,0,.25);padding:6px 8px;border-radius:2px;z-index:2}
  .ui-pwc-feat__art{position:absolute;inset:0;width:100%;height:100%;z-index:1}
  .ui-pwc-feat__body{padding:24px 28px 22px}
  .ui-pwc-feat__eyebrow{font:700 11px/1 Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#dc2f1c;margin-bottom:12px}
  .ui-pwc-feat__title{margin:0 0 10px;font:600 21px/1.25 Georgia,serif;color:#2d2d2d;letter-spacing:-.005em}
  .ui-pwc-feat__dek{margin:0 0 16px;font:400 14px/1.5 Arial,sans-serif;color:#555}
  .ui-pwc-feat__cta{display:inline-flex;align-items:center;gap:8px;font:600 13px Arial,sans-serif;color:#dc2f1c;border-bottom:1px solid #dc2f1c;padding-bottom:2px}
  .ui-pwc-feat__arrow{transition:transform .2s}
  .ui-pwc-feat:hover .ui-pwc-feat__arrow{transform:translateX(4px)}
  .ui-pwc-feat__meta{margin-top:14px;font:400 11px Arial,sans-serif;color:#999;letter-spacing:.04em}
</style>`,
    },
    {
      name: 'Magazine Grid 3-Up',
      nameJa: 'マガジングリッド3列',
      desc: 'カラーストリップ・タイトル・著者列を持つ、3カラム並びの記事マガジングリッド。',
      detail: 'マガジングリッドは、雑誌の目次のように記事カードを横3列に並べるレイアウトです。各カードの上端にカテゴリ別のカラーストリップ(青=戦略、緑=サステナビリティ など)を入れて、視覚的に分類を伝えるのがBCGやBainの定石です。タイトル下に著者アバターと名前を入れることで、署名記事としての信頼感が増します。ホームのセカンドビューや「最新の記事」セクションに最適です。',
      descEn: 'Three article cards in a row, each with a category color strip, title, and author row.',
      detailEn: 'A magazine grid lays out article cards in three side-by-side columns, mimicking the table of contents in a print magazine. BCG and Bain often add a colored strip across the top of each card to encode the category (blue for strategy, green for sustainability, and so on), giving the grid an instant visual taxonomy. An author avatar and name under the title turn each card into a signed piece, which lifts perceived authority. It fits perfectly in a "Latest insights" section below the hero.',
      code: `<!-- Inspired by BCG Publications -->
<div class="ui-bcg-grid">
  <a class="ui-bcg-card" href="#">
    <div class="ui-bcg-card__strip" style="background:#117548"></div>
    <div class="ui-bcg-card__body">
      <div class="ui-bcg-card__cat" style="color:#117548">Climate &amp; Sustainability</div>
      <h4 class="ui-bcg-card__title">The race to net zero: a $9.2T capex gap by 2030</h4>
      <div class="ui-bcg-card__author">
        <span class="ui-bcg-card__av" style="background:#117548">HR</span>
        <span>Hana Rasmussen</span>
      </div>
    </div>
  </a>
  <a class="ui-bcg-card" href="#">
    <div class="ui-bcg-card__strip" style="background:#0a4d8c"></div>
    <div class="ui-bcg-card__body">
      <div class="ui-bcg-card__cat" style="color:#0a4d8c">Corporate Strategy</div>
      <h4 class="ui-bcg-card__title">Why portfolio resilience beats portfolio focus in volatile markets</h4>
      <div class="ui-bcg-card__author">
        <span class="ui-bcg-card__av" style="background:#0a4d8c">JT</span>
        <span>Julien Tremblay</span>
      </div>
    </div>
  </a>
  <a class="ui-bcg-card" href="#">
    <div class="ui-bcg-card__strip" style="background:#b8327a"></div>
    <div class="ui-bcg-card__body">
      <div class="ui-bcg-card__cat" style="color:#b8327a">People &amp; Organization</div>
      <h4 class="ui-bcg-card__title">Designing a flatter org: lessons from 320 reorgs in 2025</h4>
      <div class="ui-bcg-card__author">
        <span class="ui-bcg-card__av" style="background:#b8327a">DO</span>
        <span>Diane Okafor</span>
      </div>
    </div>
  </a>
</div>

<style>
  .ui-bcg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:720px;font-family:"Helvetica Neue",Arial,sans-serif}
  .ui-bcg-card{display:flex;flex-direction:column;background:#fff;text-decoration:none;color:#1a1a1a;border:1px solid #ebebeb;transition:.2s}
  .ui-bcg-card:hover{box-shadow:0 8px 18px rgba(0,0,0,.06);transform:translateY(-2px)}
  .ui-bcg-card__strip{height:4px}
  .ui-bcg-card__body{padding:18px 16px 18px;display:flex;flex-direction:column;gap:10px;flex:1}
  .ui-bcg-card__cat{font:700 10px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase}
  .ui-bcg-card__title{margin:0;font:500 15px/1.35 Georgia,serif;color:#1a1a1a;flex:1}
  .ui-bcg-card__author{display:flex;align-items:center;gap:8px;font:500 12px Arial,sans-serif;color:#666;padding-top:10px;border-top:1px solid #f0f0f0}
  .ui-bcg-card__av{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;color:#fff;font:600 9px Arial,sans-serif}
</style>`,
    },
    {
      name: 'Annual Outlook Report Card',
      nameJa: '年次アウトルックレポート',
      desc: '表紙ビジュアル＋「2026 Outlook」＋18トレンド掲載を訴求する年次レポート用カード。',
      detail: '年次アウトルックレポートカードは、Deloitte InsightsやMcKinsey Globalが毎年出す「○○ Outlook 20XX」のような特集を表現するUIです。上部に表紙風のグラデーション/イラストエリアを大きく置き、その下にレポート名・年・掲載トレンド数(○ trends inside)・「Download the report」ボタンを縦に並べます。表紙ビジュアルがあることで「読み物の本」のような重みが出て、ホームの目玉枠に最適です。',
      descEn: 'A cover-style card with a large hero visual, "2026 Outlook" branding, and a count of trends inside.',
      detailEn: 'An annual outlook report card is the UI version of those "Outlook 20XX" reports that Deloitte Insights and McKinsey publish every year. The top of the card uses a large gradient or illustration area as a stand-in for the printed cover, and below it you stack the report name, the year, a "18 trends inside" line, and a download button. Treating the visual like a book cover gives the card real heft and makes it a natural hero element on the insights homepage.',
      code: `<!-- Inspired by Deloitte Insights -->
<article class="ui-del-outlook">
  <div class="ui-del-outlook__cover">
    <div class="ui-del-outlook__year">2026</div>
    <svg class="ui-del-outlook__shape" viewBox="0 0 200 200" fill="none">
      <path d="M20 180 Q 60 40 100 100 T 180 20" stroke="#86bc25" stroke-width="3" fill="none"/>
      <path d="M20 180 Q 60 60 100 120 T 180 40" stroke="#fff" stroke-width="2" fill="none" opacity=".5"/>
      <circle cx="180" cy="20" r="6" fill="#86bc25"/>
      <circle cx="100" cy="100" r="4" fill="#fff"/>
    </svg>
    <div class="ui-del-outlook__cover-title">Tech<br>Trends</div>
  </div>
  <div class="ui-del-outlook__body">
    <div class="ui-del-outlook__kicker">Annual Report · 17th edition</div>
    <h3 class="ui-del-outlook__title">Tech Trends 2026 Outlook</h3>
    <p class="ui-del-outlook__sub">Spatial computing, AI agents, and the engineering renaissance — six chapters covering <b>18 emerging trends</b> shaping the next 18–24 months.</p>
    <div class="ui-del-outlook__row">
      <button class="ui-del-outlook__btn">Download the report (PDF)</button>
      <span class="ui-del-outlook__size">PDF · 84 pages · 8.2 MB</span>
    </div>
  </div>
</article>

<style>
  .ui-del-outlook{display:grid;grid-template-columns:200px 1fr;max-width:640px;background:#fff;border:1px solid #e0e0e0;font-family:"Open Sans","Helvetica Neue",Arial,sans-serif;overflow:hidden}
  .ui-del-outlook__cover{position:relative;background:linear-gradient(160deg,#003a5d 0%,#012a40 70%,#000d1a 100%);color:#fff;padding:18px 16px;min-height:240px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}
  .ui-del-outlook__year{font:700 14px/1 Arial,sans-serif;letter-spacing:.18em;color:#86bc25;position:relative;z-index:2}
  .ui-del-outlook__shape{position:absolute;top:30px;right:-20px;width:160px;height:160px;opacity:.7}
  .ui-del-outlook__cover-title{position:relative;z-index:2;font:700 26px/1.05 Georgia,serif;letter-spacing:-.01em;color:#fff}
  .ui-del-outlook__body{padding:22px 22px 20px}
  .ui-del-outlook__kicker{font:700 10px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#86bc25;margin-bottom:10px}
  .ui-del-outlook__title{margin:0 0 10px;font:400 22px/1.2 Georgia,serif;color:#012a40}
  .ui-del-outlook__sub{margin:0 0 18px;font:400 13.5px/1.55 "Open Sans",Arial,sans-serif;color:#555}
  .ui-del-outlook__sub b{color:#012a40;font-weight:700}
  .ui-del-outlook__row{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
  .ui-del-outlook__btn{padding:10px 16px;background:#86bc25;border:0;color:#fff;font:600 12.5px Arial,sans-serif;letter-spacing:.02em;cursor:pointer;border-radius:2px}
  .ui-del-outlook__btn:hover{background:#6fa01f}
  .ui-del-outlook__size{font:400 11px Arial,sans-serif;color:#888}
</style>`,
    },
    {
      name: 'Podcast Episode Card',
      nameJa: 'ポッドキャストエピソードカード',
      desc: '正方形カバー＋再生ボタン＋タイトル＋再生時間＋エピソード番号のシリーズ用カード。',
      detail: 'ポッドキャストエピソードカードは、McKinsey Podcastや HBR IdeaCast、Bain Founders Voice などコンサル/ビジネス系メディアが配信するエピソードを並べるためのUIです。左に正方形のカバーアート(シリーズロゴ風のグラフィック)、その上に再生(▶)ボタン、右にエピソード番号・タイトル・ゲスト・再生時間を縦に並べます。クリックひとつで再生できる印象を作るのがポイントで、シリーズ一覧やトップの「最新エピソード」枠で使えます。',
      descEn: 'A podcast row card with square cover art, a play button, title, duration, and episode number.',
      detailEn: 'A podcast episode card is the UI block used by shows like McKinsey Podcast, HBR IdeaCast, and Bain Founders Voice to list episodes. The left holds a square cover art with a series-logo style graphic and a play (▶) button overlaid, while the right stacks episode number, title, guest, and runtime. The trick is making it feel like one tap will start playback, which suits an "Episodes" index or a "Latest episode" slot on the homepage.',
      code: `<!-- Inspired by HBR IdeaCast -->
<a class="ui-hbr-ep" href="#">
  <div class="ui-hbr-ep__cover">
    <div class="ui-hbr-ep__art">
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
        <circle cx="32" cy="32" r="28" stroke="#fff" stroke-width="1.5" opacity=".4"/>
        <circle cx="32" cy="32" r="18" stroke="#fff" stroke-width="1.5" opacity=".7"/>
        <circle cx="32" cy="32" r="6" fill="#fff"/>
      </svg>
      <div class="ui-hbr-ep__brand">IDEA<br>CAST</div>
    </div>
    <button class="ui-hbr-ep__play" aria-label="Play episode">▶</button>
  </div>
  <div class="ui-hbr-ep__body">
    <div class="ui-hbr-ep__num">Episode 947 · May 19, 2026</div>
    <h4 class="ui-hbr-ep__title">Why your best engineers are quitting in their 3rd year</h4>
    <div class="ui-hbr-ep__guest">with <b>Lin Chen</b>, Professor of Organizational Behavior, Wharton</div>
    <div class="ui-hbr-ep__meta">
      <span class="ui-hbr-ep__time">⏱ 32:14</span>
      <span class="ui-hbr-ep__dot"></span>
      <span>Management</span>
      <span class="ui-hbr-ep__dot"></span>
      <span>Talent</span>
    </div>
  </div>
</a>

<style>
  .ui-hbr-ep{display:grid;grid-template-columns:120px 1fr;gap:18px;max-width:600px;background:#fff;padding:14px;text-decoration:none;color:#1a1a1a;border:1px solid #e6e6e6;font-family:Georgia,serif;align-items:center;transition:.18s}
  .ui-hbr-ep:hover{box-shadow:0 6px 18px rgba(0,0,0,.07)}
  .ui-hbr-ep__cover{position:relative;width:120px;height:120px;background:linear-gradient(135deg,#a31621 0%,#7a0e18 100%);display:flex;align-items:center;justify-content:center;overflow:hidden}
  .ui-hbr-ep__art{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}
  .ui-hbr-ep__brand{position:absolute;font:800 11px/1.05 Arial,sans-serif;letter-spacing:.12em;color:#fff;text-align:center}
  .ui-hbr-ep__play{position:absolute;right:8px;bottom:8px;width:30px;height:30px;border-radius:50%;border:0;background:#fff;color:#a31621;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding-left:2px;box-shadow:0 2px 6px rgba(0,0,0,.3)}
  .ui-hbr-ep__play:hover{background:#fff4e6}
  .ui-hbr-ep__body{min-width:0}
  .ui-hbr-ep__num{font:700 10px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#a31621;margin-bottom:8px}
  .ui-hbr-ep__title{margin:0 0 8px;font:400 17px/1.25 Georgia,serif;color:#1a1a1a;letter-spacing:-.005em}
  .ui-hbr-ep__guest{font:400 13px/1.4 Georgia,serif;color:#555;margin-bottom:10px}
  .ui-hbr-ep__guest b{color:#1a1a1a;font-weight:700}
  .ui-hbr-ep__meta{display:flex;align-items:center;gap:8px;font:500 11.5px Arial,sans-serif;color:#777}
  .ui-hbr-ep__time{color:#1a1a1a;font-weight:600}
  .ui-hbr-ep__dot{width:3px;height:3px;border-radius:50%;background:#bbb}
</style>`,
    },
    {
      name: 'Long-Read With Side TOC',
      nameJa: 'ロングリード＋目次サイドレール',
      desc: '本文プレビューの右にチャプター一覧が浮かぶ、長文記事用2カラムレイアウト。',
      detail: 'ロングリード＋目次サイドレールは、MIT Sloan ReviewやHarvard Business Reviewの特集記事ページで使われる、長文向けの2カラムレイアウトです。本文の左カラムに記事のリード文、右カラムに「Chapter 1〜6」のような目次が縦に並びます。現在読んでいるチャプターが太字＋色付きでハイライトされるのが典型で、長文を地図のように俯瞰しながら読めるのが利点です。10分以上の読了時間の論考に向きます。',
      descEn: 'A long-read article preview with a floating chapter list as a side rail to the right.',
      detailEn: 'The long-read-plus-side-TOC layout is what MIT Sloan Review and HBR use for deep features. The left column holds the article lede in serif body type, while the right column floats a vertical chapter list ("Chapter 1 – 6"). The current chapter is highlighted in bold and an accent color so readers can map their progress through a long essay. It works best for pieces that run ten minutes or longer where readers need a way to stay oriented.',
      code: `<!-- Inspired by MIT Sloan Management Review -->
<div class="ui-mit-long">
  <article class="ui-mit-long__main">
    <div class="ui-mit-long__kicker">FEATURE · STRATEGY</div>
    <h1 class="ui-mit-long__h">The quiet rewiring of corporate R&amp;D</h1>
    <p class="ui-mit-long__dek">Once-stable innovation org charts are bending around three forces — generative AI, talent compression, and venture-style funding inside the enterprise.</p>
    <div class="ui-mit-long__byline">By <b>Eleanor Voss</b> &amp; <b>Toshi Yamamoto</b> · May 18, 2026 · <span>22 min read</span></div>
    <p class="ui-mit-long__p">In late 2025, a senior R&amp;D leader at a Fortune 100 industrial group did something that would have been unthinkable five years earlier: she dissolved her seven-year-old product council and replaced it with twelve internal "studios," each with its own thesis, runway, and kill date…</p>
  </article>
  <aside class="ui-mit-long__toc" aria-label="Article chapters">
    <div class="ui-mit-long__toc-h">In this article</div>
    <ol>
      <li class="is-active"><span class="ui-mit-long__n">01</span>The new innovation org chart</li>
      <li><span class="ui-mit-long__n">02</span>Studios, not councils</li>
      <li><span class="ui-mit-long__n">03</span>Funding like a venture firm</li>
      <li><span class="ui-mit-long__n">04</span>The talent compression problem</li>
      <li><span class="ui-mit-long__n">05</span>How the CFO reacts</li>
      <li><span class="ui-mit-long__n">06</span>What to try next quarter</li>
    </ol>
    <div class="ui-mit-long__progress"><div class="ui-mit-long__bar"></div></div>
  </aside>
</div>

<style>
  .ui-mit-long{display:grid;grid-template-columns:1fr 220px;gap:32px;max-width:720px;font-family:Georgia,serif;color:#1a1a1a;background:#fafafa;padding:24px 22px}
  .ui-mit-long__main{min-width:0}
  .ui-mit-long__kicker{font:700 10px/1 "Helvetica Neue",Arial,sans-serif;letter-spacing:.16em;color:#c8102e;margin-bottom:14px}
  .ui-mit-long__h{margin:0 0 12px;font:700 26px/1.18 Georgia,serif;color:#000;letter-spacing:-.01em}
  .ui-mit-long__dek{margin:0 0 14px;font:400 15px/1.5 Georgia,serif;color:#555}
  .ui-mit-long__byline{margin-bottom:16px;font:400 12px/1.4 "Helvetica Neue",Arial,sans-serif;color:#888;padding-bottom:14px;border-bottom:1px solid #e2e2e2}
  .ui-mit-long__byline b{color:#1a1a1a;font-weight:600}
  .ui-mit-long__p{margin:0;font:400 14.5px/1.65 Georgia,serif;color:#2a2a2a}
  .ui-mit-long__toc{position:sticky;top:20px;align-self:start;border-left:2px solid #e2e2e2;padding-left:16px;font-family:"Helvetica Neue",Arial,sans-serif}
  .ui-mit-long__toc-h{font:700 10px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#888;margin-bottom:14px}
  .ui-mit-long__toc ol{list-style:none;margin:0 0 14px;padding:0;counter-reset:c}
  .ui-mit-long__toc li{display:flex;gap:8px;align-items:baseline;padding:8px 0;font:400 12.5px/1.4 Arial,sans-serif;color:#888;cursor:pointer;border-top:1px solid #ececec}
  .ui-mit-long__toc li:first-child{border-top:0}
  .ui-mit-long__toc li.is-active{color:#c8102e;font-weight:700}
  .ui-mit-long__toc li:hover{color:#1a1a1a}
  .ui-mit-long__n{font:700 10px Arial,sans-serif;color:inherit;opacity:.7;min-width:18px}
  .ui-mit-long__progress{height:3px;background:#ececec;border-radius:2px;overflow:hidden}
  .ui-mit-long__bar{width:18%;height:100%;background:#c8102e}
</style>`,
    },
    {
      name: 'Newsletter Subscribe Banner',
      nameJa: 'ニュースレター購読バナー',
      desc: '「The Daily」風の見出し＋メール入力＋Subscribeボタンの記事末バナー。',
      detail: 'ニュースレター購読バナーは、HBRやMcKinsey、Stratecheryなどが記事の末尾や記事一覧の中段に挟む、メール購読を促す横長バナーです。「Get the daily newsletter」「Stay sharp.」のような短いキャッチコピー＋短い説明＋メールアドレス入力欄＋Subscribeボタンが基本形で、配色は背景にライトトーンの一色を敷くと記事本文と区別しやすくなります。離脱率の高い読了直後に置くと購読率が伸びやすいUIです。',
      descEn: 'A "Get the daily newsletter" subscribe banner with an email input and a Subscribe button.',
      detailEn: 'The newsletter subscribe banner is the email capture block that HBR, McKinsey, and Stratechery drop at the end of articles or mid-list. It typically pairs a punchy headline like "Get the daily newsletter" or "Stay sharp." with a one-line description, an email input, and a Subscribe button. Giving the banner a soft tinted background sets it off from body copy, and placing it right after a long article — when readers are most engaged — tends to lift signup rates significantly.',
      code: `<!-- Inspired by HBR Daily Newsletter -->
<form class="ui-hbr-news" onsubmit="event.preventDefault();this.querySelector('.ui-hbr-news__ok').style.display='flex'">
  <div class="ui-hbr-news__left">
    <div class="ui-hbr-news__brand">
      <span class="ui-hbr-news__logo">HBR</span>
      <span class="ui-hbr-news__brand-name">Daily Alert</span>
    </div>
    <h3 class="ui-hbr-news__h">The Daily Newsletter from <i>Harvard Business Review</i></h3>
    <p class="ui-hbr-news__p">Five new ideas every weekday morning — from leadership to AI strategy. Curated for working managers. Free, takes 30 seconds.</p>
    <div class="ui-hbr-news__field">
      <input class="ui-hbr-news__in" type="email" placeholder="you@company.com" required>
      <button class="ui-hbr-news__btn" type="submit">Subscribe</button>
    </div>
    <div class="ui-hbr-news__fine">By signing up you agree to our <u>Terms of Use</u>. Unsubscribe anytime.</div>
    <div class="ui-hbr-news__ok">✓ Check your inbox to confirm.</div>
  </div>
  <div class="ui-hbr-news__right" aria-hidden="true">
    <div class="ui-hbr-news__env">
      <div class="ui-hbr-news__env-flap"></div>
      <div class="ui-hbr-news__env-body">
        <div class="ui-hbr-news__line"></div>
        <div class="ui-hbr-news__line" style="width:70%"></div>
        <div class="ui-hbr-news__line" style="width:55%"></div>
      </div>
    </div>
  </div>
</form>

<style>
  .ui-hbr-news{display:grid;grid-template-columns:1fr 140px;gap:20px;max-width:600px;background:#fff8f0;border:1px solid #f0d8b8;padding:24px 26px;font-family:"Helvetica Neue",Arial,sans-serif;align-items:center}
  .ui-hbr-news__brand{display:flex;align-items:center;gap:10px;margin-bottom:12px}
  .ui-hbr-news__logo{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;background:#a31621;color:#fff;font:800 11px/1 Arial,sans-serif;letter-spacing:.04em}
  .ui-hbr-news__brand-name{font:700 11px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#a31621}
  .ui-hbr-news__h{margin:0 0 8px;font:400 19px/1.25 Georgia,serif;color:#1a1a1a;letter-spacing:-.005em}
  .ui-hbr-news__h i{font-style:italic;color:#a31621}
  .ui-hbr-news__p{margin:0 0 14px;font:400 13px/1.5 Arial,sans-serif;color:#555}
  .ui-hbr-news__field{display:flex;gap:0;margin-bottom:8px}
  .ui-hbr-news__in{flex:1;padding:11px 12px;border:1px solid #ccc;border-right:0;background:#fff;font:400 13px Arial,sans-serif;color:#1a1a1a;outline:none}
  .ui-hbr-news__in:focus{border-color:#a31621}
  .ui-hbr-news__btn{padding:11px 18px;background:#a31621;color:#fff;border:0;font:700 12px Arial,sans-serif;letter-spacing:.05em;text-transform:uppercase;cursor:pointer}
  .ui-hbr-news__btn:hover{background:#7a0e18}
  .ui-hbr-news__fine{font:400 10.5px/1.4 Arial,sans-serif;color:#888}
  .ui-hbr-news__fine u{text-decoration:underline;cursor:pointer}
  .ui-hbr-news__ok{display:none;margin-top:10px;padding:8px 10px;background:#fff;border-left:3px solid #2e7d32;font:600 12px Arial,sans-serif;color:#2e7d32;align-items:center}
  .ui-hbr-news__right{display:flex;justify-content:center}
  .ui-hbr-news__env{position:relative;width:110px;height:80px;background:#fff;border:1px solid #d4a574;box-shadow:0 4px 10px rgba(163,22,33,.12)}
  .ui-hbr-news__env-flap{position:absolute;top:0;left:0;right:0;height:50%;background:linear-gradient(to bottom right,#fff 49%,#a31621 50%,#a31621 51%,#fff 52%) no-repeat,linear-gradient(to bottom left,#fff 49%,#a31621 50%,#a31621 51%,#fff 52%) no-repeat;background-size:50% 100%,50% 100%;background-position:left,right}
  .ui-hbr-news__env-body{padding:34px 12px 0;display:flex;flex-direction:column;gap:5px}
  .ui-hbr-news__line{height:3px;background:#e8d4b8;border-radius:1px}
</style>`,
    },
    {
      name: 'Webinar Event Card',
      nameJa: 'ウェビナー/イベントカード',
      desc: '左の日付ブロック＋タイトル＋登壇者＋Registerボタンのイベント告知カード。',
      detail: 'ウェビナー/イベントカードは、Bain、Deloitte、Google for Workなどの企業サイトで「今後のウェビナー」「ライブイベント」を一覧化するときに使うUIです。左に大きな日付ブロック(月＋日＋時刻)を置き、その右にイベント名・登壇者名と肩書き・Registerボタンを並べる構成が定番で、日付を視覚的なアイコンとして扱うのが特徴です。複数イベントを縦に並べても日付列が揃って一覧性が高くなります。',
      descEn: 'A live event card with a big date block on the left, plus title, speakers, and a Register button.',
      detailEn: 'A webinar or event card is the row that companies like Bain, Deloitte, and Google for Work use to list upcoming live sessions. The left side holds a chunky date block — month name, day number, and time — that doubles as a visual anchor, while the right stacks event title, speakers with their titles, and a Register button. Aligning multiple cards vertically gives the date column a clean rhythm that makes scanning a calendar of events very fast.',
      code: `<!-- Inspired by Bain & Company Events -->
<article class="ui-bain-evt">
  <div class="ui-bain-evt__date">
    <div class="ui-bain-evt__mon">JUN</div>
    <div class="ui-bain-evt__day">12</div>
    <div class="ui-bain-evt__time">11:00<br><span>EDT</span></div>
  </div>
  <div class="ui-bain-evt__body">
    <div class="ui-bain-evt__tag"><span class="ui-bain-evt__live"></span>LIVE WEBINAR · 60 min</div>
    <h3 class="ui-bain-evt__title">The CFO Agenda 2026: Capital allocation in a higher-for-longer world</h3>
    <div class="ui-bain-evt__speakers">
      <div class="ui-bain-evt__sp">
        <span class="ui-bain-evt__av" style="background:#cc0000">EM</span>
        <div>
          <b>Elena Marchetti</b>
          <span>Partner, Bain &amp; Company</span>
        </div>
      </div>
      <div class="ui-bain-evt__sp">
        <span class="ui-bain-evt__av" style="background:#1a3a6c">DK</span>
        <div>
          <b>David Kim</b>
          <span>CFO, Lumen Industrial</span>
        </div>
      </div>
    </div>
    <div class="ui-bain-evt__cta">
      <button class="ui-bain-evt__btn">Register free</button>
      <span class="ui-bain-evt__seats">2,140 registered · 1,860 seats left</span>
    </div>
  </div>
</article>

<style>
  .ui-bain-evt{display:grid;grid-template-columns:96px 1fr;gap:20px;max-width:620px;background:#fff;border:1px solid #e6e6e6;padding:20px;font-family:"Helvetica Neue",Arial,sans-serif;color:#1a1a1a}
  .ui-bain-evt__date{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:12px 6px;background:#fafafa;border-top:3px solid #cc0000;text-align:center}
  .ui-bain-evt__mon{font:700 11px/1 Arial,sans-serif;letter-spacing:.18em;color:#cc0000;margin-bottom:6px}
  .ui-bain-evt__day{font:700 34px/1 Georgia,serif;color:#1a1a1a;letter-spacing:-.01em;margin-bottom:8px}
  .ui-bain-evt__time{font:600 12px/1.3 Arial,sans-serif;color:#1a1a1a;padding-top:8px;border-top:1px solid #e6e6e6;width:100%}
  .ui-bain-evt__time span{display:block;font-weight:400;color:#888;font-size:10px;letter-spacing:.08em;margin-top:2px}
  .ui-bain-evt__body{min-width:0}
  .ui-bain-evt__tag{display:inline-flex;align-items:center;gap:6px;font:700 10px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#cc0000;margin-bottom:10px}
  .ui-bain-evt__live{width:7px;height:7px;background:#cc0000;border-radius:50%;animation:ui-bain-evt-p 1.6s infinite}
  @keyframes ui-bain-evt-p{0%,100%{opacity:1}50%{opacity:.3}}
  .ui-bain-evt__title{margin:0 0 14px;font:400 17px/1.25 Georgia,serif;color:#1a1a1a;letter-spacing:-.005em}
  .ui-bain-evt__speakers{display:flex;gap:18px;margin-bottom:14px;flex-wrap:wrap}
  .ui-bain-evt__sp{display:flex;align-items:center;gap:8px;font:400 12px/1.3 Arial,sans-serif;color:#666}
  .ui-bain-evt__av{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;color:#fff;font:600 10px Arial,sans-serif}
  .ui-bain-evt__sp b{display:block;color:#1a1a1a;font-weight:700;font-size:12.5px}
  .ui-bain-evt__sp span{color:#888;font-size:11px}
  .ui-bain-evt__cta{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
  .ui-bain-evt__btn{padding:10px 18px;background:#cc0000;color:#fff;border:0;font:700 12px Arial,sans-serif;letter-spacing:.05em;text-transform:uppercase;cursor:pointer}
  .ui-bain-evt__btn:hover{background:#a30000}
  .ui-bain-evt__seats{font:400 11px Arial,sans-serif;color:#888}
</style>`,
    },
    {
      name: 'Topic Cluster Mosaic',
      nameJa: 'トピッククラスター・モザイク',
      desc: 'タグ＋大1枚＋小4枚のモザイクで、同一トピックの関連記事を束ねるレイアウト。',
      detail: 'トピッククラスター・モザイクは、Deloitte InsightsやMcKinseyの「トレンド別ハブ」や「テーマ別コレクション」で使われる、1テーマに紐づく複数記事をまとめるレイアウトです。上部に「TOPIC: Generative AI」のようなタグと特集タイトルを置き、その下に大きな1枚＋小さな4枚のモザイクグリッドで記事を並べます。大きなカードが特集のリード記事、小さなカードが関連記事になり、テーマの深さと広がりを同時に見せられます。',
      descEn: 'A topic hub layout: one tag, one big card, and four small cards arranged in a mosaic.',
      detailEn: 'A topic cluster mosaic is the layout Deloitte Insights and McKinsey use on their trend-hub or theme-collection pages, where multiple articles are bundled under one subject. The top shows a "TOPIC: Generative AI" tag and the topic title, with the body using a mosaic of one big card and four small cards. The big card carries the lead article while the small cards carry related pieces, so readers see both depth and breadth of the topic at once.',
      code: `<!-- Inspired by Deloitte Insights topic pages -->
<section class="ui-del-topic">
  <header class="ui-del-topic__head">
    <span class="ui-del-topic__tag">TOPIC</span>
    <h2 class="ui-del-topic__h">Generative AI for the enterprise</h2>
    <p class="ui-del-topic__sub">14 articles · updated weekly · 4 contributing partners</p>
  </header>
  <div class="ui-del-topic__grid">
    <a class="ui-del-topic__big" href="#">
      <div class="ui-del-topic__big-art"><div class="ui-del-topic__blob"></div></div>
      <div class="ui-del-topic__big-body">
        <div class="ui-del-topic__kind">LEAD ARTICLE · 16 min</div>
        <h3>Where AI investment is finally paying back — and where it isn't</h3>
      </div>
    </a>
    <a class="ui-del-topic__sm" href="#">
      <div class="ui-del-topic__kind">ANALYSIS · 6 min</div>
      <h4>The new shape of AI-native teams</h4>
    </a>
    <a class="ui-del-topic__sm" href="#">
      <div class="ui-del-topic__kind">CASE STUDY · 9 min</div>
      <h4>How a mid-cap bank cut claims time 64% with agents</h4>
    </a>
    <a class="ui-del-topic__sm" href="#">
      <div class="ui-del-topic__kind">PODCAST · 28 min</div>
      <h4>Inside an AI center of excellence at Maersk</h4>
    </a>
    <a class="ui-del-topic__sm" href="#">
      <div class="ui-del-topic__kind">SURVEY · 4 min</div>
      <h4>76% of CIOs say AI ROI is unclear in 2026</h4>
    </a>
  </div>
</section>

<style>
  .ui-del-topic{max-width:680px;font-family:"Open Sans",Arial,sans-serif;color:#1a1a1a;padding:20px;background:#fff}
  .ui-del-topic__head{margin-bottom:18px;padding-bottom:14px;border-bottom:2px solid #012a40}
  .ui-del-topic__tag{display:inline-block;padding:4px 8px;background:#012a40;color:#fff;font:700 10px/1 Arial,sans-serif;letter-spacing:.14em;margin-bottom:10px}
  .ui-del-topic__h{margin:0 0 6px;font:400 24px/1.15 Georgia,serif;color:#012a40;letter-spacing:-.01em}
  .ui-del-topic__sub{margin:0;font:400 12px Arial,sans-serif;color:#888;letter-spacing:.02em}
  .ui-del-topic__grid{display:grid;grid-template-columns:1.6fr 1fr 1fr;grid-template-rows:auto auto;gap:12px}
  .ui-del-topic__big{grid-row:1/3;grid-column:1;display:flex;flex-direction:column;background:#fafafa;text-decoration:none;color:#1a1a1a;border:1px solid #e6e6e6;overflow:hidden;transition:.2s}
  .ui-del-topic__big:hover{box-shadow:0 6px 16px rgba(0,0,0,.07)}
  .ui-del-topic__big-art{position:relative;height:130px;background:linear-gradient(135deg,#86bc25 0%,#012a40 100%);overflow:hidden}
  .ui-del-topic__blob{position:absolute;top:-30px;right:-30px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}
  .ui-del-topic__big-body{padding:14px 16px 16px}
  .ui-del-topic__big-body h3{margin:0;font:400 17px/1.25 Georgia,serif;color:#012a40;letter-spacing:-.005em}
  .ui-del-topic__kind{font:700 9.5px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#86bc25;margin-bottom:8px}
  .ui-del-topic__sm{display:flex;flex-direction:column;padding:14px;background:#fff;text-decoration:none;color:#1a1a1a;border:1px solid #e6e6e6;transition:.2s}
  .ui-del-topic__sm:hover{background:#fafafa;border-color:#86bc25}
  .ui-del-topic__sm h4{margin:0;font:400 14px/1.3 Georgia,serif;color:#012a40}
</style>`,
    },
    {
      name: 'Whitepaper Download Card',
      nameJa: 'ホワイトペーパーDLカード',
      desc: 'PDFアイコン＋タイトル＋ページ数＋ゲート付きDLボタンの資料DL用カード。',
      detail: 'ホワイトペーパーDLカードは、McKinseyやAccentureが顧客リード獲得用に出している「○○ Whitepaper (PDF)」をダウンロードさせるカードUIです。左に赤いPDFアイコン、右にタイトル・ページ数(12 pages)・ファイルサイズ・「Download (gated)」ボタンを並べ、ボタンを押すと氏名/会社/メアド入力フォームに遷移する設計が一般的です。「無料だが情報提供は必要」というB2Bマーケのリードジェネレーションでよく使う形です。',
      descEn: 'A whitepaper card with a PDF icon, title, page count, and a gated download button that opens a form.',
      detailEn: 'A whitepaper download card is the lead-capture block McKinsey and Accenture use to offer "free" PDFs in exchange for contact info. The left side has a red PDF icon, the right side carries the title, page count, file size, and a "Download (gated)" button that opens a name/company/email form. This pattern is standard B2B lead generation — the report is free but information must be exchanged for access — and works well at the end of an article or at the bottom of a research hub page.',
      code: `<!-- Inspired by Accenture Research Reports -->
<div class="ui-acn-wp" id="ui-acn-wp">
  <article class="ui-acn-wp__card">
    <div class="ui-acn-wp__icon">
      <svg viewBox="0 0 36 44" width="36" height="44" aria-hidden="true">
        <path d="M4 0 H24 L32 8 V40 Q32 44 28 44 H4 Q0 44 0 40 V4 Q0 0 4 0 Z" fill="#fff" stroke="#d22"/>
        <path d="M24 0 V8 H32" fill="none" stroke="#d22"/>
        <rect x="0" y="20" width="32" height="12" fill="#d22"/>
        <text x="16" y="29" font-family="Arial,sans-serif" font-size="8" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
      </svg>
    </div>
    <div class="ui-acn-wp__body">
      <div class="ui-acn-wp__kind">Research report · Free with form</div>
      <h3 class="ui-acn-wp__title">Technology Vision 2026: The agentic enterprise reaches scale</h3>
      <ul class="ui-acn-wp__facts">
        <li><b>12 pages</b></li>
        <li>·</li>
        <li>2.4 MB PDF</li>
        <li>·</li>
        <li>Updated May 2026</li>
      </ul>
      <div class="ui-acn-wp__cta">
        <button class="ui-acn-wp__btn" onclick="document.getElementById('ui-acn-wp').classList.add('open')">⬇ Download (gated)</button>
        <span class="ui-acn-wp__note">Requires email · No spam</span>
      </div>
    </div>
  </article>
  <div class="ui-acn-wp__form" role="dialog" aria-label="Download form">
    <div class="ui-acn-wp__form-h">Tell us about yourself</div>
    <input class="ui-acn-wp__in" placeholder="Full name" value="">
    <input class="ui-acn-wp__in" placeholder="Work email" value="">
    <input class="ui-acn-wp__in" placeholder="Company" value="">
    <div class="ui-acn-wp__row">
      <button class="ui-acn-wp__btn ui-acn-wp__btn--p" type="button">Get the PDF</button>
      <button class="ui-acn-wp__cancel" onclick="document.getElementById('ui-acn-wp').classList.remove('open')">Cancel</button>
    </div>
  </div>
</div>

<style>
  .ui-acn-wp{max-width:560px;font-family:"Graphik","Helvetica Neue",Arial,sans-serif;color:#1a1a1a;position:relative}
  .ui-acn-wp__card{display:grid;grid-template-columns:64px 1fr;gap:18px;background:#fff;border:1px solid #e2e2e2;padding:22px;border-left:4px solid #a100ff}
  .ui-acn-wp__icon{display:flex;align-items:flex-start;justify-content:center;padding-top:4px}
  .ui-acn-wp__kind{font:700 10px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#a100ff;margin-bottom:8px}
  .ui-acn-wp__title{margin:0 0 12px;font:600 17px/1.25 "Graphik",Arial,sans-serif;color:#1a1a1a;letter-spacing:-.005em}
  .ui-acn-wp__facts{list-style:none;margin:0 0 14px;padding:0;display:flex;gap:6px;flex-wrap:wrap;font:400 12px Arial,sans-serif;color:#888}
  .ui-acn-wp__facts b{color:#1a1a1a;font-weight:700}
  .ui-acn-wp__cta{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
  .ui-acn-wp__btn{padding:11px 18px;background:#1a1a1a;color:#fff;border:0;font:600 12.5px Arial,sans-serif;letter-spacing:.02em;cursor:pointer}
  .ui-acn-wp__btn:hover{background:#a100ff}
  .ui-acn-wp__btn--p{background:#a100ff}
  .ui-acn-wp__btn--p:hover{background:#7d00c4}
  .ui-acn-wp__note{font:400 11px Arial,sans-serif;color:#888}
  .ui-acn-wp__form{display:none;margin-top:0;background:#fff;border:1px solid #e2e2e2;border-top:0;padding:22px;border-left:4px solid #a100ff}
  .ui-acn-wp.open .ui-acn-wp__form{display:block}
  .ui-acn-wp__form-h{font:700 11px/1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#a100ff;margin-bottom:14px}
  .ui-acn-wp__in{display:block;width:100%;padding:10px 12px;margin-bottom:10px;border:1px solid #ccc;background:#fff;font:400 13px Arial,sans-serif;color:#1a1a1a;outline:none;box-sizing:border-box}
  .ui-acn-wp__in:focus{border-color:#a100ff}
  .ui-acn-wp__row{display:flex;gap:10px;align-items:center;margin-top:6px}
  .ui-acn-wp__cancel{padding:11px 14px;background:transparent;color:#666;border:0;font:500 12.5px Arial,sans-serif;cursor:pointer}
  .ui-acn-wp__cancel:hover{color:#1a1a1a;text-decoration:underline}
</style>`,
    },
  ],
}
