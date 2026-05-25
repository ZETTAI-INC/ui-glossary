/**
 * UI Parts Showcase (Leadership & Team) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-leadership',
  title: '企業サイト リーダーシップ',
  titleEn: 'Leadership & Team',
  description: 'PwC・McKinsey・Apple・Meta・Goldman Sachs などのリーダーシップ/チーム紹介ページでよく見るUIです。',
  terms: [
    {
      name: 'Executive Profile Card',
      nameJa: 'エグゼクティブ・プロフィールカード',
      desc: '大きな人物写真と氏名・役職・所属を載せる、役員紹介の定番カード。',
      detail: 'コンサルティング会社や監査法人のリーダー紹介ページでよく使われる、縦長の役員プロフィールカードです。大きめの人物写真を上半分に配置し、その下に氏名・肩書き・担当領域・拠点を並べ、最後にLinkedInなどのコンタクト導線を置きます。1人ずつの存在感を出しつつ、グリッドに並べても破綻しないよう情報量を絞るのがポイントです。社外への信頼感を演出するため、写真の色味や余白を統一すると、シリーズとしてのまとまりが生まれます。',
      descEn: 'A tall profile card with a large portrait, name, title, role and a LinkedIn link.',
      detailEn: 'This is the classic profile card you see on the leadership pages of consultancies and audit firms. A large portrait fills the upper half, followed by the name, title, area of focus and office location, and finally a LinkedIn or contact link. The goal is to give each executive presence while still working as a tile in a larger grid. Keeping portrait tones and spacing consistent across cards is what gives the whole roster a unified, trustworthy feel.',
      code: `<!-- Inspired by PwC Leadership -->
<article class="ui-execcard">
  <div class="ui-execcard__photo">
    <svg viewBox="0 0 200 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ex-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f4f1ec"/>
          <stop offset="1" stop-color="#e6dfd4"/>
        </linearGradient>
      </defs>
      <rect width="200" height="220" fill="url(#ex-bg)"/>
      <circle cx="100" cy="92" r="34" fill="#3d3a35"/>
      <path d="M40 220 C 50 160, 150 160, 160 220 Z" fill="#22201d"/>
      <path d="M82 130 L82 156 L118 156 L118 130 Z" fill="#e8d9c4"/>
    </svg>
    <span class="ui-execcard__bar"></span>
  </div>
  <div class="ui-execcard__body">
    <h3 class="ui-execcard__name">Margaret O'Sullivan</h3>
    <p class="ui-execcard__title">Global Chair &amp; Senior Partner</p>
    <ul class="ui-execcard__meta">
      <li>Financial Services Advisory</li>
      <li>London, United Kingdom</li>
    </ul>
    <a class="ui-execcard__link" href="#">
      <span class="ui-execcard__in">in</span>
      Connect on LinkedIn
      <span aria-hidden="true">→</span>
    </a>
  </div>
</article>

<style>
  .ui-execcard{width:260px;background:#fff;border:1px solid #e7e2d8;font:15px Georgia,"Times New Roman",serif;color:#2b2825;box-shadow:0 1px 0 rgba(0,0,0,.02)}
  .ui-execcard__photo{position:relative;aspect-ratio:200/220;background:#f4f1ec;overflow:hidden}
  .ui-execcard__bar{position:absolute;left:0;bottom:0;width:48px;height:4px;background:#d04a02}
  .ui-execcard__body{padding:18px 18px 20px}
  .ui-execcard__name{margin:0 0 4px;font:600 19px Georgia,serif;letter-spacing:-.005em;color:#2b2825}
  .ui-execcard__title{margin:0 0 12px;font:400 13.5px -apple-system,"Segoe UI",sans-serif;color:#d04a02}
  .ui-execcard__meta{list-style:none;margin:0 0 14px;padding:0;border-top:1px solid #ece7dd;padding-top:10px;font:400 12.5px -apple-system,sans-serif;color:#605c55;line-height:1.7}
  .ui-execcard__meta li{display:block}
  .ui-execcard__link{display:inline-flex;align-items:center;gap:8px;font:600 12.5px -apple-system,sans-serif;color:#2b2825;text-decoration:none}
  .ui-execcard__link:hover{color:#d04a02}
  .ui-execcard__in{display:inline-grid;place-items:center;width:18px;height:18px;background:#0a66c2;color:#fff;border-radius:2px;font:700 10px -apple-system,sans-serif;font-style:italic}
</style>`,
    },
    {
      name: 'Leadership Grid',
      nameJa: 'リーダーシップ・グリッド',
      desc: '4人並びの幹部一覧グリッド。写真の下に氏名と役職だけ。',
      detail: 'コーポレートサイトのトップ階層に置かれる、整然とした4列のグリッドです。各セルは正方形に近い人物写真とその下の氏名・役職だけで構成し、情報を極限まで削ぎ落とすことで「全員の顔ぶれを一目で把握できる」一覧性を優先します。マッキンゼーやアップルのリーダーシップページに見られる、白背景の上品な質感が定番です。一覧から各人の詳細ページにリンクし、深く知りたい人だけが次の階層に進める階段構造になっています。',
      descEn: 'A clean 4-up grid of executives with name and title under each photo.',
      detailEn: 'This is the orderly four-column grid you find at the top of a corporate leadership section. Each cell is just a near-square portrait with name and title beneath, stripped of decoration so visitors can size up the whole team at a glance. The look is the same calm, white-background style used by firms like McKinsey and Apple. The grid usually links into individual profile pages, so users can drill in only on the people they actually want to know more about.',
      code: `<!-- Inspired by Apple Leadership -->
<section class="ui-lgrid">
  <h2 class="ui-lgrid__h">Executive Leadership</h2>
  <div class="ui-lgrid__grid">
    <figure class="ui-lgrid__cell">
      <div class="ui-lgrid__photo" style="background:linear-gradient(160deg,#d3c8b8,#8a7a64)">
        <svg viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="42" r="16" fill="#2a2520"/><path d="M22 100 C 26 70, 74 70, 78 100 Z" fill="#1a1612"/></svg>
      </div>
      <figcaption>
        <p class="ui-lgrid__name">Tim Hartwell</p>
        <p class="ui-lgrid__role">Chief Executive Officer</p>
      </figcaption>
    </figure>
    <figure class="ui-lgrid__cell">
      <div class="ui-lgrid__photo" style="background:linear-gradient(160deg,#c9d4d8,#6a7c84)">
        <svg viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="42" r="16" fill="#2c2a28"/><path d="M22 100 C 26 70, 74 70, 78 100 Z" fill="#1a1816"/></svg>
      </div>
      <figcaption>
        <p class="ui-lgrid__name">Lisa Markovich</p>
        <p class="ui-lgrid__role">Chief Financial Officer</p>
      </figcaption>
    </figure>
    <figure class="ui-lgrid__cell">
      <div class="ui-lgrid__photo" style="background:linear-gradient(160deg,#e0d2c2,#9a826a)">
        <svg viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="42" r="16" fill="#26211c"/><path d="M22 100 C 26 70, 74 70, 78 100 Z" fill="#16120e"/></svg>
      </div>
      <figcaption>
        <p class="ui-lgrid__name">Arjun Mehta</p>
        <p class="ui-lgrid__role">SVP, Worldwide Operations</p>
      </figcaption>
    </figure>
    <figure class="ui-lgrid__cell">
      <div class="ui-lgrid__photo" style="background:linear-gradient(160deg,#d8d0c4,#7e7466)">
        <svg viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="42" r="16" fill="#2b2723"/><path d="M22 100 C 26 70, 74 70, 78 100 Z" fill="#1b1814"/></svg>
      </div>
      <figcaption>
        <p class="ui-lgrid__name">Sofia Ribeiro</p>
        <p class="ui-lgrid__role">SVP, Software Engineering</p>
      </figcaption>
    </figure>
  </div>
</section>

<style>
  .ui-lgrid{max-width:680px;padding:24px;background:#fff;font:14px -apple-system,"SF Pro Text","Helvetica Neue",sans-serif;color:#1d1d1f}
  .ui-lgrid__h{margin:0 0 20px;font:600 22px "SF Pro Display",-apple-system,sans-serif;letter-spacing:-.012em;color:#1d1d1f}
  .ui-lgrid__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .ui-lgrid__cell{margin:0}
  .ui-lgrid__photo{aspect-ratio:1/1;overflow:hidden;border-radius:2px}
  .ui-lgrid__name{margin:10px 0 2px;font:600 13.5px -apple-system,sans-serif;letter-spacing:-.005em}
  .ui-lgrid__role{margin:0;font:400 12px -apple-system,sans-serif;color:#6e6e73;line-height:1.4}
</style>`,
    },
    {
      name: 'Author Byline',
      nameJa: '記事の著者バイライン',
      desc: 'インサイト記事の上部に置く、丸アバター+氏名+役職+日付の小さな塊。',
      detail: 'コンサルティング会社の「Insights」や「Perspectives」の記事冒頭に必ず付いている、コンパクトな著者表示です。小さな円形アバターと氏名・役職・所属拠点、そして公開日と読了時間を1行〜2行にまとめ、本文の前に「誰がこの見解を書いたのか」を最小限の面積で伝えます。著者が複数いる場合はアバターを並べ、3人目以降は「+2」のように省略するのがよくあるパターンです。氏名にホバーすると下線が出てリンク化されているのも定番のディテールです。',
      descEn: 'A compact byline used at the top of insight articles — small round avatar, name, role and date.',
      detailEn: 'Every consulting firm "Insights" or "Perspectives" article opens with this little block. A small circular avatar sits next to the author\'s name, title and home office, with the publish date and reading time tucked alongside — all in one or two lines, just enough to answer "who wrote this point of view?" before the article begins. When there are multiple authors, the avatars stack and overflow with "+2" or similar. A subtle underline on hover making the name a link is another familiar touch.',
      code: `<!-- Inspired by McKinsey Insights -->
<article class="ui-byline-wrap">
  <p class="ui-byline-kicker">McKinsey Quarterly · Strategy &amp; Corporate Finance</p>
  <h1 class="ui-byline-title">The CFO's new mandate in an era of AI-driven productivity</h1>
  <div class="ui-byline">
    <div class="ui-byline__avs">
      <span class="ui-byline__av" style="background:#5b4a3a">EH</span>
      <span class="ui-byline__av" style="background:#3a5a4c">KT</span>
      <span class="ui-byline__av" style="background:#3f3a5e">RA</span>
    </div>
    <div class="ui-byline__meta">
      <p class="ui-byline__names"><a href="#">Eleanor Hayes</a>, <a href="#">Kenji Tanaka</a>, and <a href="#">Rohit Aggarwal</a></p>
      <p class="ui-byline__sub">Senior Partners, New York · Tokyo · Mumbai</p>
    </div>
    <div class="ui-byline__date">
      <p>May 14, 2026</p>
      <p class="ui-byline__read">12 min read</p>
    </div>
  </div>
</article>

<style>
  .ui-byline-wrap{max-width:660px;padding:24px;background:#fff;font:15px Georgia,"Times New Roman",serif;color:#1f2937;border-top:3px solid #051c2c}
  .ui-byline-kicker{margin:0 0 10px;font:600 11px -apple-system,"Helvetica Neue",sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#0a7cb6}
  .ui-byline-title{margin:0 0 22px;font:400 30px Georgia,serif;line-height:1.18;letter-spacing:-.005em;color:#051c2c}
  .ui-byline{display:flex;align-items:center;gap:14px;padding-top:16px;border-top:1px solid #e3e6ea}
  .ui-byline__avs{display:flex}
  .ui-byline__av{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;color:#fff;font:700 11px -apple-system,sans-serif;letter-spacing:.04em;border:2px solid #fff;margin-left:-8px}
  .ui-byline__av:first-child{margin-left:0}
  .ui-byline__meta{flex:1;min-width:0}
  .ui-byline__names{margin:0;font:600 13.5px -apple-system,sans-serif;color:#051c2c;line-height:1.3}
  .ui-byline__names a{color:inherit;text-decoration:none}
  .ui-byline__names a:hover{text-decoration:underline}
  .ui-byline__sub{margin:2px 0 0;font:400 12.5px -apple-system,sans-serif;color:#6b7280}
  .ui-byline__date{text-align:right;font:400 12.5px -apple-system,sans-serif;color:#6b7280}
  .ui-byline__date p{margin:0;line-height:1.3}
  .ui-byline__read{color:#9aa3ad;font-size:11.5px;margin-top:2px}
</style>`,
    },
    {
      name: 'Contributor Row',
      nameJa: 'コントリビューター行',
      desc: '6人の小さなアバターを重ねて並べ、最後に「+12」と表示するチーム表現。',
      detail: 'プロジェクトページや論文の共著者表示でよく見る、アバターを少しずつ重ねながら横一列に並べるパターンです。最大表示数を決めておき、それ以上は「+12」のように残りの人数を丸い泡で表します。スペース効率がよく「大勢が関わっている」感を素早く伝えられるため、GitHubのコントリビューター表示やNotionのページコラボレーター表示など、現代的なツール全般に広がりました。ホバーやタップで全員の氏名一覧を開けるようにしておくのが親切です。',
      descEn: 'A horizontal row of six small avatars stacked with overflow shown as "+12".',
      detailEn: 'You see this everywhere on project pages and paper bylines — small avatars slightly overlapping in a single row, with a count bubble like "+12" at the end for anyone who didn\'t fit. It packs a lot of "many people worked on this" into a tiny space, which is why GitHub contributor lists, Notion page collaborators and most modern tools all use this shape. The polite move is to expose the full list of names on hover or tap, so curious users can still drill in.',
      code: `<!-- Inspired by GitHub Contributors -->
<section class="ui-contrib">
  <div class="ui-contrib__head">
    <h3 class="ui-contrib__h">Contributors</h3>
    <span class="ui-contrib__count">18 people</span>
  </div>
  <div class="ui-contrib__row">
    <span class="ui-contrib__av" style="background:#7e57c2" title="Aiko Suzuki">AS</span>
    <span class="ui-contrib__av" style="background:#26a69a" title="Marcus Lee">ML</span>
    <span class="ui-contrib__av" style="background:#ef5350" title="Priya Iyer">PI</span>
    <span class="ui-contrib__av" style="background:#42a5f5" title="Jonas Weber">JW</span>
    <span class="ui-contrib__av" style="background:#ffa726" title="Camille Rousseau">CR</span>
    <span class="ui-contrib__av" style="background:#66bb6a" title="Dmitri Volkov">DV</span>
    <span class="ui-contrib__av ui-contrib__av--more">+12</span>
  </div>
  <p class="ui-contrib__sub">Internal authors and reviewers across Engineering, Design, and Research.</p>
</section>

<style>
  .ui-contrib{max-width:520px;padding:18px 20px;background:#fff;border:1px solid #d0d7de;border-radius:8px;font:14px -apple-system,"Segoe UI",sans-serif;color:#1f2328}
  .ui-contrib__head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px}
  .ui-contrib__h{margin:0;font:600 14px -apple-system,sans-serif;color:#1f2328}
  .ui-contrib__count{font:400 12px -apple-system,sans-serif;color:#656d76}
  .ui-contrib__row{display:flex;align-items:center}
  .ui-contrib__av{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;color:#fff;font:600 11px -apple-system,sans-serif;letter-spacing:.04em;border:2px solid #fff;margin-left:-8px;box-shadow:0 0 0 1px rgba(31,35,40,.06);cursor:default}
  .ui-contrib__av:first-child{margin-left:0}
  .ui-contrib__av--more{background:#f6f8fa;color:#1f2328;font:600 11.5px -apple-system,sans-serif;box-shadow:0 0 0 1px #d0d7de}
  .ui-contrib__sub{margin:14px 0 0;font:400 12.5px -apple-system,sans-serif;color:#656d76;line-height:1.5}
</style>`,
    },
    {
      name: 'Practice Filter Chips',
      nameJa: '専門領域フィルターチップ',
      desc: 'チームグリッドの上に置く、専門領域を絞り込むためのチップ群。',
      detail: '「Meet the team」ページで、肩書きが多すぎるときに絞り込み用として置かれるチップバーです。「すべて」「コンサルティング」「監査・税務」「テクノロジー」など、社内の主要プラクティスを横一列に並べ、選択すると下のグリッドがフィルタリングされる仕組みです。アクティブなチップは塗りつぶし、その他は枠線のみで切り替えるデザインが定番で、横スクロール対応にすれば小さな画面でも崩れません。検索フィールドや拠点フィルターと組み合わせて、絞り込みコントロールとしての完成度を上げることもあります。',
      descEn: 'A chip bar of practice areas that filters the team grid below.',
      detailEn: 'On "Meet the team" pages where the roster is long, a filter chip bar lets visitors narrow things down by practice. The chips run across the top — "All", "Consulting", "Audit & Tax", "Technology" and so on — and clicking one filters the grid beneath. The active chip is filled while the rest stay outlined, and the row scrolls horizontally so it never breaks on small screens. Pair it with a search field or a location filter and you have a real, full-featured team-finder.',
      code: `<!-- Inspired by Deloitte Our People -->
<section class="ui-pchips">
  <h2 class="ui-pchips__h">Meet our team</h2>
  <p class="ui-pchips__sub">Filter by practice area to find the right specialists for your business.</p>
  <div class="ui-pchips__bar" role="tablist">
    <button type="button" class="ui-pchip is-active" role="tab">All <span class="ui-pchip__n">412</span></button>
    <button type="button" class="ui-pchip" role="tab">Consulting <span class="ui-pchip__n">118</span></button>
    <button type="button" class="ui-pchip" role="tab">Audit &amp; Assurance <span class="ui-pchip__n">96</span></button>
    <button type="button" class="ui-pchip" role="tab">Tax &amp; Legal <span class="ui-pchip__n">72</span></button>
    <button type="button" class="ui-pchip" role="tab">Risk Advisory <span class="ui-pchip__n">58</span></button>
    <button type="button" class="ui-pchip" role="tab">Financial Advisory <span class="ui-pchip__n">38</span></button>
    <button type="button" class="ui-pchip" role="tab">Technology &amp; AI <span class="ui-pchip__n">30</span></button>
  </div>
  <p class="ui-pchips__result">Showing <b>412</b> partners and directors across all practices</p>
</section>

<style>
  .ui-pchips{max-width:660px;padding:24px;background:#fff;font:15px "Open Sans",-apple-system,"Helvetica Neue",sans-serif;color:#1d1d1d}
  .ui-pchips__h{margin:0 0 6px;font:300 28px "Open Sans",sans-serif;letter-spacing:-.01em;color:#000}
  .ui-pchips__sub{margin:0 0 18px;font:400 14px "Open Sans",sans-serif;color:#555}
  .ui-pchips__bar{display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;scrollbar-width:none}
  .ui-pchips__bar::-webkit-scrollbar{display:none}
  .ui-pchip{flex:none;display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:#fff;border:1px solid #c7c7c7;color:#1d1d1d;font:600 13px "Open Sans",sans-serif;cursor:pointer;white-space:nowrap;transition:.15s}
  .ui-pchip:hover{background:#f1f1f1;border-color:#1d1d1d}
  .ui-pchip.is-active{background:#86bc25;border-color:#86bc25;color:#000}
  .ui-pchip__n{font:400 12px "Open Sans",sans-serif;color:inherit;opacity:.7}
  .ui-pchip.is-active .ui-pchip__n{opacity:.85}
  .ui-pchips__result{margin:16px 0 0;padding-top:14px;border-top:1px solid #ececec;font:400 13px "Open Sans",sans-serif;color:#555}
  .ui-pchips__result b{color:#000}
</style>`,
    },
    {
      name: 'Speaker Card',
      nameJa: 'スピーカーカード',
      desc: 'カンファレンス用の登壇者カード。写真+氏名+所属+講演タイトル。',
      detail: '企業主催のサミットや業界カンファレンスの公式サイトに並ぶ、登壇者紹介カードです。人物写真を左または上に大きく配置し、右に氏名・肩書き・所属企業を上から段階的に並べ、最後に「○○について語る」という講演タイトルを目立たせるのがセオリーです。複数のセッションがある場合はセッション時刻やトラック色でカテゴリ分けされ、クリックでセッション詳細ページに飛ぶ構造になっています。ブランドカラーのアクセントを写真の角や枠に効かせると、イベント全体のトーンに馴染みます。',
      descEn: 'A speaker card for conference pages — portrait, name, title, company and talk topic.',
      detailEn: 'These are the cards you scroll through on a corporate summit or industry conference site. A large portrait goes on the left (or top), and to the right sits the speaker\'s name, title and company in clear hierarchy, finished off with a prominent line for "what they will be talking about". When there are multiple sessions, time stamps and track colors classify the cards, with each clicking through to a session detail page. A small accent in the brand color — on the photo edge or border — ties everything back to the event\'s overall identity.',
      code: `<!-- Inspired by Goldman Sachs Talks -->
<article class="ui-spkr">
  <div class="ui-spkr__photo">
    <svg viewBox="0 0 160 160" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="160" height="160" fill="#0b1d3a"/>
      <circle cx="80" cy="66" r="26" fill="#d4ae7c"/>
      <path d="M30 160 C 36 110, 124 110, 130 160 Z" fill="#1c2e4d"/>
      <path d="M62 100 L62 122 L98 122 L98 100 Z" fill="#c89a68"/>
    </svg>
    <span class="ui-spkr__tag">Keynote</span>
  </div>
  <div class="ui-spkr__body">
    <p class="ui-spkr__time">Day 2 · 09:30 — 10:15 EST</p>
    <h3 class="ui-spkr__name">Catherine W. Almeida</h3>
    <p class="ui-spkr__role">Global Head of Macro Research</p>
    <p class="ui-spkr__co">Sterling Crescent Capital</p>
    <div class="ui-spkr__topic">
      <span class="ui-spkr__topiclabel">Speaking on</span>
      <p class="ui-spkr__topictitle">"After the soft landing: capital flows and rates in a multipolar economy"</p>
    </div>
  </div>
</article>

<style>
  .ui-spkr{display:grid;grid-template-columns:160px 1fr;gap:0;max-width:560px;background:#fff;border:1px solid #d8d8d8;font:14px "Helvetica Neue",-apple-system,Arial,sans-serif;color:#1a1a1a}
  .ui-spkr__photo{position:relative;background:#0b1d3a}
  .ui-spkr__tag{position:absolute;left:0;top:14px;padding:4px 10px;background:#7d3a16;color:#fff;font:600 10px Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase}
  .ui-spkr__body{padding:18px 20px}
  .ui-spkr__time{margin:0 0 10px;font:600 11px Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#7d3a16}
  .ui-spkr__name{margin:0 0 2px;font:600 18px "Helvetica Neue",sans-serif;letter-spacing:-.005em;color:#0b1d3a}
  .ui-spkr__role{margin:0;font:400 13px Arial,sans-serif;color:#3a3a3a}
  .ui-spkr__co{margin:0 0 14px;font:600 13px Arial,sans-serif;color:#0b1d3a}
  .ui-spkr__topic{padding-top:12px;border-top:1px solid #ececec}
  .ui-spkr__topiclabel{font:600 10px Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#9a9a9a}
  .ui-spkr__topictitle{margin:4px 0 0;font:400 14px Georgia,"Times New Roman",serif;line-height:1.4;color:#1a1a1a;font-style:italic}
</style>`,
    },
    {
      name: 'Office Leadership Card',
      nameJa: 'オフィス・リーダーシップカード',
      desc: '国旗+オフィス名+マネージングパートナー写真+住所をまとめた拠点紹介。',
      detail: 'グローバルファームの「世界の拠点」ページで、各オフィスを1枚のカードで表すレイアウトです。左上に国旗、隣にオフィス名と国名、その下にマネージングパートナーの写真と氏名・肩書きを置き、さらにオフィスの住所・電話番号・受付時間を続けます。地域ごとにグリッドで並べると、世界規模の存在感を視覚化できる強力な見せ方になります。国旗は誤解を避けるため、シンプルな配色のラインアイコンや、社内基準に沿った国コードバッジに置き換えることもあります。',
      descEn: 'An office card with country flag, office name, managing partner photo, and address.',
      detailEn: 'On a global firm\'s "Our offices" page, each location often gets its own little card. A flag sits top-left next to the office name and country, followed by a portrait of the managing partner with their name and title, and then the street address, phone number and reception hours below. Arranged in a regional grid, these cards become a quick visual map of the firm\'s footprint. For accuracy, the flag is sometimes swapped out for a simple line icon or an internal country-code badge.',
      code: `<!-- Inspired by EY Global Offices -->
<article class="ui-offc">
  <header class="ui-offc__head">
    <span class="ui-offc__flag" aria-label="Singapore">
      <svg viewBox="0 0 24 16" width="24" height="16"><rect width="24" height="8" fill="#ED2939"/><rect y="8" width="24" height="8" fill="#fff"/><circle cx="7" cy="8" r="3.2" fill="#fff"/><circle cx="8.4" cy="8" r="3.2" fill="#ED2939"/></svg>
    </span>
    <div>
      <h3 class="ui-offc__name">Singapore</h3>
      <p class="ui-offc__country">Republic of Singapore · APAC HQ</p>
    </div>
  </header>
  <div class="ui-offc__partner">
    <div class="ui-offc__photo">
      <svg viewBox="0 0 64 64" width="100%" height="100%"><rect width="64" height="64" fill="#f0ece4"/><circle cx="32" cy="26" r="10" fill="#2c2520"/><path d="M14 64 C 16 46, 48 46, 50 64 Z" fill="#1a1612"/></svg>
    </div>
    <div>
      <p class="ui-offc__partnername">Wei-Lin Tan</p>
      <p class="ui-offc__partnerrole">Managing Partner, Southeast Asia</p>
    </div>
  </div>
  <ul class="ui-offc__addr">
    <li><span>Address</span>One Raffles Quay, North Tower, Level 18</li>
    <li><span>Postal</span>048583 Singapore</li>
    <li><span>Phone</span>+65 6535 7777</li>
    <li><span>Hours</span>Mon — Fri, 09:00 — 18:00 SGT</li>
  </ul>
  <a class="ui-offc__cta" href="#">View office details →</a>
</article>

<style>
  .ui-offc{max-width:340px;padding:22px;background:#fff;border:1px solid #e5e5e5;font:14px "Helvetica Neue",-apple-system,Arial,sans-serif;color:#2e2e38}
  .ui-offc__head{display:flex;align-items:center;gap:12px;padding-bottom:16px;border-bottom:1px solid #ececec}
  .ui-offc__flag{display:inline-grid;place-items:center;width:32px;height:22px;background:#fff;box-shadow:0 0 0 1px #e5e5e5;border-radius:2px;overflow:hidden}
  .ui-offc__name{margin:0;font:600 18px "Helvetica Neue",sans-serif;color:#2e2e38;letter-spacing:-.005em}
  .ui-offc__country{margin:2px 0 0;font:400 12px Arial,sans-serif;color:#6e6e7a}
  .ui-offc__partner{display:flex;align-items:center;gap:12px;padding:16px 0;border-bottom:1px solid #ececec}
  .ui-offc__photo{width:48px;height:48px;border-radius:50%;overflow:hidden;background:#f0ece4;flex:none}
  .ui-offc__partnername{margin:0;font:600 14px Arial,sans-serif;color:#2e2e38}
  .ui-offc__partnerrole{margin:2px 0 0;font:400 12px Arial,sans-serif;color:#ffe600;background:#2e2e38;display:inline-block;padding:2px 8px;border-radius:2px}
  .ui-offc__addr{list-style:none;margin:14px 0 0;padding:0;font:400 13px Arial,sans-serif;color:#2e2e38;line-height:1.6}
  .ui-offc__addr li{display:grid;grid-template-columns:64px 1fr;gap:8px;padding:2px 0}
  .ui-offc__addr li span{color:#9a9aa6;font-size:11px;letter-spacing:.04em;text-transform:uppercase;padding-top:2px}
  .ui-offc__cta{display:inline-block;margin-top:16px;padding-top:14px;border-top:1px solid #ececec;color:#2e2e38;font:600 13px Arial,sans-serif;text-decoration:none;width:100%}
  .ui-offc__cta:hover{color:#ffe600;background:#2e2e38;padding:8px 10px;border-top:1px solid #2e2e38;margin-top:8px}
</style>`,
    },
    {
      name: 'Awards Timeline',
      nameJa: '受賞歴タイムライン',
      desc: 'エグゼクティブ詳細ページで使う、受賞・表彰の縦タイムライン。',
      detail: '個人の詳細プロフィールページで、その人物の業界での実績を時系列で見せる縦型タイムラインです。左側に年、右側に受賞名・授与団体・短い説明を並べ、左の縦線とドットでつなぐことで「キャリアの蓄積」を視覚化します。最新の受賞を上に置く逆時系列が基本で、注目度の高いものはアイコンや色でハイライトします。コンサルや法律事務所の役員プロフィールでは、こうした受賞歴・著書・学会参加が信頼の根拠になるため、丁寧に構造化して見せるのが効果的です。',
      descEn: 'A vertical award timeline shown under an executive profile.',
      detailEn: 'This is the vertical timeline you find on an individual executive\'s profile page, laying out their industry recognition over time. Years run down the left, with award name, awarding body and a short description on the right, all tied together by a connecting line and dots. Reverse chronological (newest at the top) is the standard, and standout awards get an icon or color to draw the eye. For consulting and law firm bios — where awards, publications and speaking credits are the proof of trust — structuring this information cleanly really pays off.',
      code: `<!-- Inspired by KPMG Partner Profile -->
<section class="ui-awards">
  <header class="ui-awards__head">
    <p class="ui-awards__person">Dr. Helena Brandt · National Lead Partner</p>
    <h3 class="ui-awards__h">Awards &amp; Recognitions</h3>
  </header>
  <ol class="ui-awards__list">
    <li class="ui-awards__item ui-awards__item--star">
      <span class="ui-awards__year">2026</span>
      <div class="ui-awards__card">
        <p class="ui-awards__name">Top 25 European Tax Advisors</p>
        <p class="ui-awards__org">International Tax Review</p>
        <p class="ui-awards__desc">Recognized for leadership in cross-border M&amp;A structuring across DACH region clients.</p>
      </div>
    </li>
    <li class="ui-awards__item">
      <span class="ui-awards__year">2024</span>
      <div class="ui-awards__card">
        <p class="ui-awards__name">Best Tax Practice — Germany</p>
        <p class="ui-awards__org">Chambers Europe</p>
      </div>
    </li>
    <li class="ui-awards__item">
      <span class="ui-awards__year">2022</span>
      <div class="ui-awards__card">
        <p class="ui-awards__name">Women Leaders in Tax</p>
        <p class="ui-awards__org">Euromoney Legal Media Group</p>
      </div>
    </li>
    <li class="ui-awards__item">
      <span class="ui-awards__year">2019</span>
      <div class="ui-awards__card">
        <p class="ui-awards__name">Rising Star, Transfer Pricing</p>
        <p class="ui-awards__org">World Tax Guide</p>
      </div>
    </li>
  </ol>
</section>

<style>
  .ui-awards{max-width:520px;padding:24px;background:#fff;font:14px Arial,"Helvetica Neue",-apple-system,sans-serif;color:#1a1a1a}
  .ui-awards__head{margin-bottom:20px;padding-bottom:14px;border-bottom:2px solid #00338d}
  .ui-awards__person{margin:0 0 4px;font:600 12px Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#00338d}
  .ui-awards__h{margin:0;font:300 22px Arial,sans-serif;color:#1a1a1a;letter-spacing:-.005em}
  .ui-awards__list{list-style:none;margin:0;padding:0;position:relative}
  .ui-awards__list::before{content:"";position:absolute;left:62px;top:6px;bottom:6px;width:1px;background:#d8dfee}
  .ui-awards__item{position:relative;display:grid;grid-template-columns:54px 1fr;gap:18px;padding:0 0 22px}
  .ui-awards__item:last-child{padding-bottom:0}
  .ui-awards__item::before{content:"";position:absolute;left:58px;top:6px;width:9px;height:9px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px #00338d}
  .ui-awards__item--star::before{background:#00338d;box-shadow:0 0 0 4px rgba(0,51,141,.15)}
  .ui-awards__year{font:700 14px Arial,sans-serif;color:#00338d;text-align:right;padding-top:2px}
  .ui-awards__card{padding-left:18px}
  .ui-awards__name{margin:0;font:600 14.5px Arial,sans-serif;color:#1a1a1a;line-height:1.35}
  .ui-awards__org{margin:2px 0 0;font:400 12.5px Arial,sans-serif;color:#5a5a64}
  .ui-awards__desc{margin:6px 0 0;font:400 13px Arial,sans-serif;color:#3a3a44;line-height:1.5}
</style>`,
    },
    {
      name: 'Board of Directors Row',
      nameJa: '取締役会メンバー一覧',
      desc: '取締役会メンバーをフォーマルに並べるグリッド。役職チップ付き。',
      detail: '上場企業のIR(投資家向け情報)ページで使われる、取締役会メンバーを正式に紹介するグリッドです。各セルは縦長で、人物写真の下に氏名と「Chairman」「Independent Director」「CFO」などの役職チップを表示し、所属企業や社外取締役区分の補足情報を続けます。投資家向けの公式情報なので装飾を控え、罫線とタイポグラフィだけで整える落ち着いた表現が好まれます。クリックで詳細プロフィール、PDFの略歴ダウンロードに繋ぐのが定番の遷移パターンです。',
      descEn: 'A formal grid of board members with a position chip on each card.',
      detailEn: 'This is the orderly board-of-directors grid used on a listed company\'s IR page. Each cell is a vertical tile with a portrait, then the director\'s name, then a position chip — "Chairman", "Independent Director", "CFO" and so on — followed by their other affiliations or independence status. Because this is formal investor-facing material, the visual style is calm and pared back: rules and typography do most of the work, with little decoration. Each card usually clicks through to a longer biography or a PDF download of the director\'s background.',
      code: `<!-- Inspired by Goldman Sachs Board of Directors -->
<section class="ui-board">
  <header class="ui-board__head">
    <h2 class="ui-board__h">Board of Directors</h2>
    <p class="ui-board__sub">As of fiscal year ending March 2026 · 5 of 7 directors are independent</p>
  </header>
  <div class="ui-board__grid">
    <article class="ui-board__cell">
      <div class="ui-board__photo" style="background:#3a3530"><svg viewBox="0 0 80 80" width="100%" height="100%"><circle cx="40" cy="32" r="13" fill="#e0c79a"/><path d="M18 80 C 22 56, 58 56, 62 80 Z" fill="#5c4a35"/></svg></div>
      <p class="ui-board__name">Robert H. Sterling</p>
      <p class="ui-board__chip ui-board__chip--chair">Chairman</p>
      <p class="ui-board__meta">Independent · Director since 2014</p>
    </article>
    <article class="ui-board__cell">
      <div class="ui-board__photo" style="background:#403a36"><svg viewBox="0 0 80 80" width="100%" height="100%"><circle cx="40" cy="32" r="13" fill="#c9a877"/><path d="M18 80 C 22 56, 58 56, 62 80 Z" fill="#2f2a26"/></svg></div>
      <p class="ui-board__name">Akira Nakamura</p>
      <p class="ui-board__chip">CEO &amp; Director</p>
      <p class="ui-board__meta">Executive · Director since 2019</p>
    </article>
    <article class="ui-board__cell">
      <div class="ui-board__photo" style="background:#36363a"><svg viewBox="0 0 80 80" width="100%" height="100%"><circle cx="40" cy="32" r="13" fill="#dcc89f"/><path d="M18 80 C 22 56, 58 56, 62 80 Z" fill="#22222a"/></svg></div>
      <p class="ui-board__name">Sarah J. Whitmore</p>
      <p class="ui-board__chip">CFO &amp; Director</p>
      <p class="ui-board__meta">Executive · Director since 2021</p>
    </article>
    <article class="ui-board__cell">
      <div class="ui-board__photo" style="background:#3d3a36"><svg viewBox="0 0 80 80" width="100%" height="100%"><circle cx="40" cy="32" r="13" fill="#c8b07a"/><path d="M18 80 C 22 56, 58 56, 62 80 Z" fill="#28241f"/></svg></div>
      <p class="ui-board__name">Dr. Pranav Krishnan</p>
      <p class="ui-board__chip ui-board__chip--ind">Independent Director</p>
      <p class="ui-board__meta">Audit Committee Chair · Since 2020</p>
    </article>
  </div>
</section>

<style>
  .ui-board{max-width:680px;padding:24px;background:#fafaf7;font:14px Georgia,"Times New Roman",serif;color:#1f1d1a}
  .ui-board__head{margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid #2b2620}
  .ui-board__h{margin:0;font:600 22px Georgia,serif;color:#1f1d1a;letter-spacing:-.005em}
  .ui-board__sub{margin:4px 0 0;font:400 12.5px -apple-system,"Helvetica Neue",sans-serif;color:#6e6a62}
  .ui-board__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
  .ui-board__cell{background:#fff;border:1px solid #e7e3da;padding:14px}
  .ui-board__photo{aspect-ratio:1/1;border-radius:0;overflow:hidden;margin-bottom:10px}
  .ui-board__name{margin:0 0 6px;font:600 13.5px Georgia,serif;color:#1f1d1a;line-height:1.3}
  .ui-board__chip{display:inline-block;margin:0 0 8px;padding:2px 8px;background:#1f1d1a;color:#fff;font:600 10px -apple-system,sans-serif;letter-spacing:.06em;text-transform:uppercase;border-radius:0}
  .ui-board__chip--chair{background:#8a6d2a;color:#fff}
  .ui-board__chip--ind{background:transparent;color:#1f1d1a;border:1px solid #1f1d1a}
  .ui-board__meta{margin:0;font:400 11.5px -apple-system,sans-serif;color:#6e6a62;line-height:1.4}
</style>`,
    },
    {
      name: 'Appointment Announcement',
      nameJa: '昇格・新任のアナウンスカード',
      desc: '「新たに就任しました」バッジ+人物写真+新役職+発効日のお知らせカード。',
      detail: 'プレスリリースや社内ポータルに掲載される、人事の発表用カードです。左上に「Newly appointed(新任)」「Promoted(昇格)」などの目立つバッジ、その下に大きな人物写真、隣に氏名・新しい役職・発効日・前任の役職を順に並べます。さらに「全社メッセージを読む」「LinkedInで祝う」といったCTAボタンを置くことで、お知らせから次のアクションに自然に繋げられます。社内向けに使う場合は、所属チーム・上司・新しい連絡先など、より具体的なメタ情報を加えても親切です。',
      descEn: 'An appointment announcement card — "Newly appointed" badge, portrait, new title, effective date.',
      detailEn: 'This is the announcement card used for press releases and internal portals when a personnel change goes live. A bold badge — "Newly appointed", "Promoted" — sits top-left, followed by a large portrait and, alongside it, the person\'s name, new title, effective date and previous role in a tidy stack. CTA buttons like "Read the all-hands message" or "Congratulate on LinkedIn" turn the announcement into a launching pad for the next action. For internal use, you can layer on extra detail like new team, new manager and new contact info to make the card genuinely useful for colleagues.',
      code: `<!-- Inspired by Meta Newsroom -->
<article class="ui-annc">
  <span class="ui-annc__badge">Newly appointed</span>
  <div class="ui-annc__body">
    <div class="ui-annc__photo">
      <svg viewBox="0 0 120 140" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e4ecf7"/><stop offset="1" stop-color="#b6c6df"/></linearGradient></defs>
        <rect width="120" height="140" fill="url(#ag)"/>
        <circle cx="60" cy="58" r="22" fill="#3a2e22"/>
        <path d="M16 140 C 20 100, 100 100, 104 140 Z" fill="#1c1a18"/>
        <path d="M48 80 L48 98 L72 98 L72 80 Z" fill="#d4b48a"/>
      </svg>
    </div>
    <div class="ui-annc__info">
      <p class="ui-annc__intro">Please join us in welcoming</p>
      <h3 class="ui-annc__name">Diego Fernández-Cruz</h3>
      <p class="ui-annc__role">VP, Reality Labs Hardware</p>
      <dl class="ui-annc__rows">
        <div><dt>Effective</dt><dd>June 3, 2026</dd></div>
        <div><dt>Reports to</dt><dd>Andrew Patel, EVP, Devices</dd></div>
        <div><dt>Previously</dt><dd>Director, Wearables · 2021–2026</dd></div>
      </dl>
      <div class="ui-annc__cta">
        <button type="button" class="ui-annc__btn ui-annc__btn--p">Read the announcement</button>
        <button type="button" class="ui-annc__btn ui-annc__btn--s">Congratulate on LinkedIn</button>
      </div>
    </div>
  </div>
</article>

<style>
  .ui-annc{position:relative;max-width:620px;padding:24px;background:#fff;border:1px solid #dadde1;border-radius:8px;font:14px -apple-system,"Segoe UI","Helvetica Neue",sans-serif;color:#1c1e21;box-shadow:0 1px 2px rgba(0,0,0,.04)}
  .ui-annc__badge{display:inline-block;margin-bottom:16px;padding:5px 10px;background:#1877f2;color:#fff;font:700 11px -apple-system,sans-serif;letter-spacing:.06em;text-transform:uppercase;border-radius:4px}
  .ui-annc__body{display:grid;grid-template-columns:120px 1fr;gap:20px;align-items:start}
  .ui-annc__photo{aspect-ratio:120/140;overflow:hidden;border-radius:8px;background:#e4ecf7}
  .ui-annc__intro{margin:0 0 2px;font:400 13px -apple-system,sans-serif;color:#65676b}
  .ui-annc__name{margin:0 0 2px;font:700 20px -apple-system,sans-serif;color:#1c1e21;letter-spacing:-.01em}
  .ui-annc__role{margin:0 0 14px;font:600 14px -apple-system,sans-serif;color:#1877f2}
  .ui-annc__rows{margin:0 0 16px;padding:12px 0;border-top:1px solid #e4e6eb;border-bottom:1px solid #e4e6eb}
  .ui-annc__rows>div{display:grid;grid-template-columns:90px 1fr;gap:8px;padding:3px 0;font:400 13px -apple-system,sans-serif}
  .ui-annc__rows dt{color:#65676b;margin:0}
  .ui-annc__rows dd{color:#1c1e21;margin:0;font-weight:500}
  .ui-annc__cta{display:flex;gap:8px;flex-wrap:wrap}
  .ui-annc__btn{padding:8px 14px;border:0;border-radius:6px;font:600 13px -apple-system,sans-serif;cursor:pointer}
  .ui-annc__btn--p{background:#1877f2;color:#fff}
  .ui-annc__btn--p:hover{background:#166fe5}
  .ui-annc__btn--s{background:#e4e6eb;color:#1c1e21}
  .ui-annc__btn--s:hover{background:#d8dadf}
</style>`,
    },
  ],
}
