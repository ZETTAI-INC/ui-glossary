/**
 * UI Parts Showcase (Careers & Recruiting) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-career',
  title: '企業サイト 採用',
  titleEn: 'Careers & Recruiting',
  description: 'Google Careers・Meta Careers・PwC Careers・Accenture Careers・Apple Jobs などの採用ページでよく見るUIです。',
  terms: [
    {
      name: 'Job Listing Card',
      nameJa: '求人カード',
      desc: '職種名・チーム・勤務地・タグ・応募ボタンをまとめた、採用サイトで定番のカード。',
      detail: '求人カードは、採用サイトの一覧画面で1件1件の募集を表現する基本ユニットです。職種名と所属チーム、勤務地（リモート/ハイブリッド/オンサイト）を上部に大きく示し、必要スキルや雇用形態をチップで補足、右下に「Apply」ボタンを置くのが定番の構成です。Google CareersやMeta Careersのように、ホバーで枠線や影が少し動く程度の控えめな装飾にすると、長い一覧でも視線が疲れません。',
      descEn: 'A card that bundles role title, team, location, tags, and an Apply button — the staple of careers listings.',
      detailEn: 'A job listing card is the building block of any careers index page. The title, team, and work location (remote, hybrid, or onsite) sit at the top, with skill or contract chips filling the middle and an Apply button anchored to the bottom-right. Sites like Google Careers and Meta Careers keep the chrome minimal — a soft border that lifts on hover — so users can scan dozens of rows without fatigue. Always link the whole card, not only the button, so the entire surface feels actionable.',
      code: `<!-- Inspired by Google Careers -->
<article class="ui-jcard">
  <div class="ui-jcard__head">
    <h3 class="ui-jcard__title">Senior Software Engineer, Search Quality</h3>
    <span class="ui-jcard__bookmark" title="Save">☆</span>
  </div>
  <div class="ui-jcard__meta">
    <span>Search · Knowledge</span>
    <span class="ui-jcard__dot">·</span>
    <span>Mountain View, CA</span>
    <span class="ui-jcard__pill">Hybrid</span>
  </div>
  <p class="ui-jcard__lede">Improve ranking quality for billions of daily queries. Work across retrieval, ML scoring, and evaluation tooling.</p>
  <div class="ui-jcard__chips">
    <span class="ui-jcard__chip">Full-time</span>
    <span class="ui-jcard__chip">8+ yrs</span>
    <span class="ui-jcard__chip">C++ / Python</span>
    <span class="ui-jcard__chip">ML</span>
  </div>
  <div class="ui-jcard__foot">
    <span class="ui-jcard__posted">Posted 3 days ago</span>
    <button class="ui-jcard__apply">Apply</button>
  </div>
</article>

<style>
  .ui-jcard{max-width:560px;font:14px "Google Sans","Roboto",-apple-system,sans-serif;color:#202124;background:#fff;border:1px solid #dadce0;border-radius:12px;padding:20px 22px;box-shadow:0 1px 2px rgba(60,64,67,.05)}
  .ui-jcard:hover{box-shadow:0 1px 3px rgba(60,64,67,.12),0 4px 8px rgba(60,64,67,.08);border-color:#c7cad0}
  .ui-jcard__head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
  .ui-jcard__title{margin:0;font:500 18px "Google Sans",sans-serif;color:#1a73e8;line-height:1.3;letter-spacing:-.005em}
  .ui-jcard__bookmark{color:#5f6368;font-size:18px;cursor:pointer;user-select:none}
  .ui-jcard__bookmark:hover{color:#1a73e8}
  .ui-jcard__meta{display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-top:6px;color:#5f6368;font-size:13.5px}
  .ui-jcard__dot{opacity:.6}
  .ui-jcard__pill{margin-left:6px;background:#e8f0fe;color:#1967d2;font-size:11.5px;font-weight:500;padding:2px 8px;border-radius:999px;letter-spacing:.02em}
  .ui-jcard__lede{margin:12px 0 14px;color:#3c4043;line-height:1.5;font-size:13.5px}
  .ui-jcard__chips{display:flex;flex-wrap:wrap;gap:6px}
  .ui-jcard__chip{background:#f1f3f4;color:#3c4043;font-size:12px;padding:4px 10px;border-radius:999px}
  .ui-jcard__foot{display:flex;align-items:center;justify-content:space-between;margin-top:18px;padding-top:14px;border-top:1px solid #f1f3f4}
  .ui-jcard__posted{color:#80868b;font-size:12.5px}
  .ui-jcard__apply{background:#1a73e8;color:#fff;border:0;border-radius:6px;padding:8px 20px;font:500 14px "Google Sans",sans-serif;cursor:pointer;letter-spacing:.01em}
  .ui-jcard__apply:hover{background:#1765cc;box-shadow:0 1px 3px rgba(26,115,232,.4)}
</style>`,
    },
    {
      name: 'Job Search Filter Bar',
      nameJa: '求人検索フィルタバー',
      desc: 'キーワード・勤務地・チーム・経験レベルを一列に並べた、求人一覧の上部に置くフィルタ。',
      detail: '求人検索フィルタバーは、職種一覧ページの最上部に置かれ、ユーザーが自分に合う求人へ素早く絞り込むためのUIです。左から「キーワード検索」「勤務地」「チーム / 部門」「経験レベル」と並べ、右端に「Search」ボタンを置くのがApple JobsやMicrosoft Careersでお馴染みの構成です。各フィールドの幅を均等ではなくキーワード欄を広めに取ると、入力量に応じた自然な視覚バランスになります。',
      descEn: 'A horizontal bar combining keyword, location, team, and experience filters — the standard top of a careers index.',
      detailEn: 'The job search filter bar lives at the top of a careers listing page and helps candidates narrow down quickly. From left to right, sites like Apple Jobs and Microsoft Careers line up keyword search, location, team or department, and experience level, then anchor a Search button on the right. Giving the keyword field more width than the dropdowns matches the typical input volume and keeps the bar visually balanced. Sticky positioning while scrolling makes it stay reachable in long result lists.',
      code: `<!-- Inspired by Apple Jobs -->
<form class="ui-jfilter" onsubmit="return false">
  <div class="ui-jfilter__field ui-jfilter__field--search">
    <span class="ui-jfilter__icon">⌕</span>
    <input type="text" placeholder="Search 1,847 open roles" value="iOS engineer">
  </div>
  <label class="ui-jfilter__field">
    <span class="ui-jfilter__lbl">Location</span>
    <select>
      <option>All locations</option>
      <option selected>Cupertino, CA</option>
      <option>Austin, TX</option>
      <option>Remote</option>
    </select>
  </label>
  <label class="ui-jfilter__field">
    <span class="ui-jfilter__lbl">Team</span>
    <select>
      <option>All teams</option>
      <option selected>Software & Services</option>
      <option>Hardware Engineering</option>
      <option>Design</option>
    </select>
  </label>
  <label class="ui-jfilter__field">
    <span class="ui-jfilter__lbl">Experience</span>
    <select>
      <option>Any level</option>
      <option>New grad</option>
      <option selected>Mid-level</option>
      <option>Senior</option>
    </select>
  </label>
  <button class="ui-jfilter__go">Search</button>
</form>

<style>
  .ui-jfilter{display:flex;gap:0;align-items:stretch;max-width:680px;background:#fff;border:1px solid #d2d2d7;border-radius:10px;padding:6px;font:13px "SF Pro Text",-apple-system,"Helvetica Neue",sans-serif;color:#1d1d1f;box-shadow:0 1px 4px rgba(0,0,0,.04)}
  .ui-jfilter__field{display:flex;align-items:center;gap:6px;padding:6px 10px;border-right:1px solid #ececef;min-width:0;flex:1}
  .ui-jfilter__field:last-of-type{border-right:0}
  .ui-jfilter__field--search{flex:1.6}
  .ui-jfilter__icon{color:#86868b;font-size:15px}
  .ui-jfilter__field input,.ui-jfilter__field select{border:0;background:transparent;font:13px inherit;color:#1d1d1f;outline:none;width:100%;min-width:0;padding:2px 0;-webkit-appearance:none;appearance:none}
  .ui-jfilter__field input::placeholder{color:#86868b}
  .ui-jfilter__lbl{font-size:11px;color:#86868b;text-transform:uppercase;letter-spacing:.04em;flex:none}
  .ui-jfilter__field select{cursor:pointer;font-weight:500}
  .ui-jfilter__go{margin-left:6px;background:#0071e3;color:#fff;border:0;border-radius:7px;padding:0 18px;font:500 13.5px inherit;cursor:pointer;letter-spacing:.01em}
  .ui-jfilter__go:hover{background:#0077ed}
</style>`,
    },
    {
      name: 'Life At Mosaic',
      nameJa: '社員の暮らしモザイク',
      desc: '社内の様子を写真タイルで並べ、社員コメントを重ねた「Life at 〇〇」セクション。',
      detail: '「Life at 〇〇」モザイクは、採用候補者にオフィスや働く人の雰囲気を直感的に伝えるためのレイアウトです。Meta CareersやSpotify Careersでは、大小不揃いの写真タイルをグリッド状に並べ、その上に社員の短いコメントを白い吹き出しで重ねる構成がよく見られます。文字情報だけでは伝わりにくい「文化」や「人の温度感」を、視覚的なコラージュとして提示できる強い表現方法です。',
      descEn: 'A "Life at company" tile collage with photo placeholders and an overlaid employee quote.',
      detailEn: 'A "Life at" mosaic gives candidates an immediate, emotional sense of a company\'s culture. Meta Careers and Spotify Careers commonly arrange asymmetric photo tiles in a grid and float a short employee quote as a white card on top. Where lists of perks fall flat, this collage conveys the texture of a workplace — the off-stage moments, the diversity of teams. Use real-feeling captions like names and titles so the section reads as a window, not a stock library.',
      code: `<!-- Inspired by Meta Careers -->
<section class="ui-life">
  <header class="ui-life__head">
    <h2>Life at Northpoint</h2>
    <p>From offsites in Lisbon to lunch on the rooftop — moments from across our teams.</p>
  </header>
  <div class="ui-life__grid">
    <div class="ui-life__tile ui-life__tile--a"><span class="ui-life__tag">Menlo Park HQ</span></div>
    <div class="ui-life__tile ui-life__tile--b"><span class="ui-life__tag">Hack Week 2025</span></div>
    <div class="ui-life__tile ui-life__tile--c"><span class="ui-life__tag">Reality Labs lab</span></div>
    <div class="ui-life__tile ui-life__tile--d"><span class="ui-life__tag">Volunteer day</span></div>
    <div class="ui-life__tile ui-life__tile--e"><span class="ui-life__tag">Rooftop lunch</span></div>
    <blockquote class="ui-life__quote">
      <p>“The teams here move fast, but no one ships alone. There’s always a Slack thread, a whiteboard, or a coffee waiting.”</p>
      <cite>— Priya Raman, Staff Eng · 4 years</cite>
    </blockquote>
  </div>
</section>

<style>
  .ui-life{max-width:680px;font:14px "Optimistic Display",-apple-system,"Segoe UI",sans-serif;color:#1c2b33;background:#f5f6f7;padding:24px;border-radius:14px}
  .ui-life__head h2{margin:0;font:600 22px inherit;letter-spacing:-.01em}
  .ui-life__head p{margin:4px 0 18px;color:#65676b;font-size:13.5px}
  .ui-life__grid{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:90px 90px 90px;gap:8px;position:relative}
  .ui-life__tile{border-radius:10px;position:relative;overflow:hidden;display:flex;align-items:flex-end;padding:8px}
  .ui-life__tag{font-size:11px;color:#fff;background:rgba(0,0,0,.45);padding:2px 8px;border-radius:999px;backdrop-filter:blur(4px)}
  .ui-life__tile--a{grid-column:1/3;grid-row:1/3;background:linear-gradient(135deg,#1877f2,#42a5f5 60%,#90caf9)}
  .ui-life__tile--b{grid-column:3/4;grid-row:1/2;background:linear-gradient(160deg,#ff7a45,#f76707)}
  .ui-life__tile--c{grid-column:4/5;grid-row:1/2;background:linear-gradient(160deg,#7c4dff,#5c6bc0)}
  .ui-life__tile--d{grid-column:3/5;grid-row:2/3;background:linear-gradient(135deg,#26a69a,#66bb6a)}
  .ui-life__tile--e{grid-column:1/3;grid-row:3/4;background:linear-gradient(135deg,#ffca28,#ff8a65)}
  .ui-life__quote{grid-column:3/5;grid-row:3/4;background:#fff;border-radius:10px;padding:12px 14px;margin:0;box-shadow:0 4px 14px rgba(0,0,0,.08);display:flex;flex-direction:column;justify-content:center}
  .ui-life__quote p{margin:0 0 6px;font:500 13px inherit;color:#1c2b33;line-height:1.4}
  .ui-life__quote cite{font-style:normal;font-size:11.5px;color:#65676b}
</style>`,
    },
    {
      name: 'Perks Grid',
      nameJa: '福利厚生グリッド',
      desc: 'アイコン+タイトル+1行説明のタイルを6個並べた福利厚生セクション。',
      detail: '福利厚生グリッドは、企業の魅力を端的に伝えるための定番セクションです。健康保険、有給休暇、リモート手当などを「アイコン + 一行のキャッチ + 短い説明」のタイルにし、2列または3列で6項目並べるのがSalesforce CareersやAccenture Careersでよく見るパターンです。各タイルは情報を詰め込みすぎず、ぱっと読める短文に留め、詳しくは別ページで読ませる流れにすると一覧性が保てます。',
      descEn: 'A grid of six perks, each shown as icon + title + short description in a 2 or 3 column layout.',
      detailEn: 'The perks grid is a workhorse section on any careers site. Healthcare, paid time off, remote stipends and similar items become tiles of "icon + tagline + one-line detail," arranged in two or three columns of six. Salesforce Careers and Accenture Careers lean on this pattern because it scans fast and lets the page move on. Keep tile copy short — link out to a benefits hub for the full policy details so the section doesn\'t turn into a wall of text.',
      code: `<!-- Inspired by Salesforce Careers -->
<section class="ui-perks">
  <h2>Benefits that meet you where you are</h2>
  <div class="ui-perks__grid">
    <div class="ui-perks__tile">
      <div class="ui-perks__icon ui-perks__icon--a">♥</div>
      <h3>Health & wellness</h3>
      <p>Medical, dental and vision from day one, plus mental health credits.</p>
    </div>
    <div class="ui-perks__tile">
      <div class="ui-perks__icon ui-perks__icon--b">✈</div>
      <h3>Unlimited PTO</h3>
      <p>Take the time you need. We track wellbeing, not vacation days.</p>
    </div>
    <div class="ui-perks__tile">
      <div class="ui-perks__icon ui-perks__icon--c">⌂</div>
      <h3>Remote stipend</h3>
      <p>$1,200 to set up the desk, chair, and monitor that fit your home.</p>
    </div>
    <div class="ui-perks__tile">
      <div class="ui-perks__icon ui-perks__icon--d">★</div>
      <h3>Learning budget</h3>
      <p>$5,000/yr for courses, books, and industry conferences worldwide.</p>
    </div>
    <div class="ui-perks__tile">
      <div class="ui-perks__icon ui-perks__icon--e">◐</div>
      <h3>Parental leave</h3>
      <p>26 weeks fully paid for all new parents, regardless of role.</p>
    </div>
    <div class="ui-perks__tile">
      <div class="ui-perks__icon ui-perks__icon--f">◇</div>
      <h3>Equity for all</h3>
      <p>Every full-time employee receives RSUs vesting over four years.</p>
    </div>
  </div>
</section>

<style>
  .ui-perks{max-width:680px;font:14px "Salesforce Sans",-apple-system,"Segoe UI",sans-serif;color:#032d60;padding:20px;background:#fff}
  .ui-perks h2{margin:0 0 18px;font:600 22px inherit;color:#032d60;letter-spacing:-.005em}
  .ui-perks__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .ui-perks__tile{background:#f3f6fb;border-radius:10px;padding:16px 14px;border:1px solid #e5edf7}
  .ui-perks__tile:hover{border-color:#0176d3;box-shadow:0 2px 8px rgba(1,118,211,.08)}
  .ui-perks__icon{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;margin-bottom:10px;font-weight:600}
  .ui-perks__icon--a{background:#ea001e}
  .ui-perks__icon--b{background:#0176d3}
  .ui-perks__icon--c{background:#06a59a}
  .ui-perks__icon--d{background:#fe9339}
  .ui-perks__icon--e{background:#9050e9}
  .ui-perks__icon--f{background:#3ba755}
  .ui-perks__tile h3{margin:0 0 4px;font:600 14px inherit;color:#181818}
  .ui-perks__tile p{margin:0;font-size:12.5px;line-height:1.45;color:#444}
</style>`,
    },
    {
      name: 'Hiring Process Timeline',
      nameJa: '採用プロセスタイムライン',
      desc: '応募→面談→技術→現地→オファーを横に並べ、現在地を強調する5ステップ表示。',
      detail: '採用プロセスタイムラインは、候補者に「次に何が起きるのか」を見える化するUIです。Apply → Recruiter call → Technical → Onsite → Offer の5段階を横一列に並べ、現在のステップを濃い色や塗りつぶし、過去のステップをチェックマーク、未来のステップを薄いグレーで表すと、進捗状況が一目で把握できます。McKinsey CareersやDeloitte Careersでも採用されている、応募者の不安を和らげる重要なセクションです。',
      descEn: 'A 5-step horizontal timeline (Apply → Recruiter → Technical → Onsite → Offer) with a current-step indicator.',
      detailEn: 'A hiring process timeline reassures candidates by making the journey visible. Lay out Apply, Recruiter call, Technical, Onsite, and Offer in a horizontal stepper, mark completed steps with a check, fill the current one in brand color, and dim the future ones. McKinsey Careers and Deloitte Careers use this pattern to ease the anxiety that comes with not knowing "what happens next." Adding short under-labels like "≈30 min screen" sets realistic expectations and reduces inbound questions to recruiters.',
      code: `<!-- Inspired by McKinsey Careers -->
<section class="ui-hire">
  <h2>What to expect</h2>
  <ol class="ui-hire__steps">
    <li class="ui-hire__step is-done">
      <span class="ui-hire__node">✓</span>
      <span class="ui-hire__lbl">Apply</span>
      <span class="ui-hire__sub">Submit resume</span>
    </li>
    <li class="ui-hire__step is-done">
      <span class="ui-hire__node">✓</span>
      <span class="ui-hire__lbl">Recruiter call</span>
      <span class="ui-hire__sub">30 min intro</span>
    </li>
    <li class="ui-hire__step is-current">
      <span class="ui-hire__node">3</span>
      <span class="ui-hire__lbl">Technical</span>
      <span class="ui-hire__sub">Case + skills</span>
    </li>
    <li class="ui-hire__step">
      <span class="ui-hire__node">4</span>
      <span class="ui-hire__lbl">Onsite</span>
      <span class="ui-hire__sub">5 interviews</span>
    </li>
    <li class="ui-hire__step">
      <span class="ui-hire__node">5</span>
      <span class="ui-hire__lbl">Offer</span>
      <span class="ui-hire__sub">Decision & sign</span>
    </li>
  </ol>
  <p class="ui-hire__note">You are on step 3 of 5. Average time from application to offer: 4–6 weeks.</p>
</section>

<style>
  .ui-hire{max-width:680px;font:14px Georgia,"Times New Roman",serif;color:#051c2c;padding:24px;background:#fff;border:1px solid #e6e9ec}
  .ui-hire h2{margin:0 0 22px;font:400 24px Georgia,serif;letter-spacing:.005em}
  .ui-hire__steps{list-style:none;margin:0;padding:0;display:flex;justify-content:space-between;position:relative}
  .ui-hire__steps::before{content:"";position:absolute;top:14px;left:5%;right:5%;height:2px;background:#e6e9ec;z-index:0}
  .ui-hire__step{flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;z-index:1;font-family:-apple-system,"Helvetica Neue",sans-serif}
  .ui-hire__node{width:28px;height:28px;border-radius:50%;background:#fff;border:2px solid #c8ced3;color:#7d878f;display:flex;align-items:center;justify-content:center;font:600 12px -apple-system,sans-serif}
  .ui-hire__step.is-done .ui-hire__node{background:#051c2c;border-color:#051c2c;color:#fff}
  .ui-hire__step.is-current .ui-hire__node{background:#fff;border-color:#051c2c;color:#051c2c;box-shadow:0 0 0 4px rgba(5,28,44,.08)}
  .ui-hire__lbl{font:600 12.5px -apple-system,sans-serif;color:#051c2c;margin-top:8px}
  .ui-hire__step:not(.is-done):not(.is-current) .ui-hire__lbl{color:#7d878f;font-weight:500}
  .ui-hire__sub{font:400 11px -apple-system,sans-serif;color:#7d878f;margin-top:2px}
  .ui-hire__note{margin:22px 0 0;font:italic 12.5px Georgia,serif;color:#51626f;border-top:1px solid #e6e9ec;padding-top:12px}
</style>`,
    },
    {
      name: 'Office Location Card',
      nameJa: 'オフィス所在地カード',
      desc: '都市名・住所・写真・募集中の職種数をまとめた、オフィス紹介カード。',
      detail: 'オフィス所在地カードは、企業のグローバル拠点を視覚的に紹介するためのUIです。上半分に都市の雰囲気を伝える写真（または色のグラデーション）、下半分に都市名・住所・現在募集中の職種数を載せるレイアウトが、Accenture CareersやPwC Careersで定番です。「Open roles: 24」のように具体的な数字を出すと、ユーザーはその拠点に対する関心度を即座に判断でき、クリック率が上がります。',
      descEn: 'A card showing a city, office address, photo placeholder, and current open roles count.',
      detailEn: 'An office location card showcases a company\'s global presence in visual form. The top half carries an evocative photo or gradient of the city, while the bottom carries the city name, street address, and a live "Open roles: 24" counter — a pattern Accenture Careers and PwC Careers rely on. Surfacing the actual open-roles number turns the card into a decision-making tool: candidates see which offices are hiring at a glance and click in with intent.',
      code: `<!-- Inspired by Accenture Careers -->
<article class="ui-office">
  <div class="ui-office__photo">
    <div class="ui-office__sky"></div>
    <div class="ui-office__skyline"></div>
    <span class="ui-office__badge">HQ</span>
  </div>
  <div class="ui-office__body">
    <h3>Dublin, Ireland</h3>
    <p class="ui-office__addr">Grand Canal Square, Docklands<br>Dublin 2, D02 P820</p>
    <div class="ui-office__foot">
      <span class="ui-office__roles"><b>24</b> open roles</span>
      <a class="ui-office__link">Explore office →</a>
    </div>
  </div>
</article>

<style>
  .ui-office{max-width:320px;font:14px "Graphik",-apple-system,"Segoe UI",sans-serif;color:#1a1a1a;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e8e8ea;box-shadow:0 1px 3px rgba(0,0,0,.04)}
  .ui-office:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08);transition:.18s}
  .ui-office__photo{position:relative;height:140px;overflow:hidden}
  .ui-office__sky{position:absolute;inset:0;background:linear-gradient(180deg,#a100ff 0%,#7500c0 40%,#460073 100%)}
  .ui-office__skyline{position:absolute;left:0;right:0;bottom:0;height:60px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.35)),repeating-linear-gradient(90deg,#1a0034 0 16px,#2a0050 16px 24px,#1a0034 24px 38px,#3a0070 38px 52px,#1a0034 52px 70px);clip-path:polygon(0 60%,5% 40%,8% 55%,14% 30%,18% 50%,22% 20%,28% 45%,33% 35%,38% 15%,42% 40%,48% 25%,54% 50%,60% 30%,66% 45%,72% 20%,78% 40%,84% 30%,90% 50%,96% 25%,100% 45%,100% 100%,0 100%)}
  .ui-office__badge{position:absolute;top:12px;left:12px;background:rgba(255,255,255,.95);color:#a100ff;font:600 10px inherit;letter-spacing:.06em;padding:3px 8px;border-radius:4px}
  .ui-office__body{padding:16px 18px 18px}
  .ui-office__body h3{margin:0;font:600 17px inherit;letter-spacing:-.005em}
  .ui-office__addr{margin:4px 0 14px;color:#5d5d63;font-size:12.5px;line-height:1.5}
  .ui-office__foot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #f0f0f2;padding-top:12px}
  .ui-office__roles{color:#1a1a1a;font-size:13px}
  .ui-office__roles b{color:#a100ff;font-size:15px;margin-right:2px}
  .ui-office__link{color:#a100ff;font-size:12.5px;font-weight:500;cursor:pointer;text-decoration:none}
  .ui-office__link:hover{text-decoration:underline}
</style>`,
    },
    {
      name: 'Employee Testimonial Card',
      nameJa: '社員の声カード',
      desc: '社員の写真・引用・名前・役職・在籍年数を一枚にまとめた紹介カード。',
      detail: '社員の声カードは、社内文化や働き方を「実在の社員の言葉」で伝えるUIです。左に社員の写真（プレースホルダーや背景色つきイニシャル）、右に引用文と名前・役職・在籍年数を載せる構成が、Spotify CareersやMeta Careersで標準的に使われます。「In role for 5 years」のような在籍年数を見せることで、長期的に働ける環境であることを暗に示せます。役職に色付きバッジを付けると、組織のロール構成も伝えられて一石二鳥です。',
      descEn: 'A card with employee photo, quote, name, role badge, and tenure — the human side of a careers page.',
      detailEn: 'An employee testimonial card lets real voices carry the cultural message of a careers site. The layout — photo or initial avatar on the left, quote plus name, role, and tenure on the right — is the default on Spotify Careers and Meta Careers. Showing tenure ("5 years in role") signals that people stick around, while a colored role badge hints at the breadth of the org chart. Pair the quote with a specific moment ("the day we shipped X") to keep it sounding human, not corporate.',
      code: `<!-- Inspired by Spotify Careers -->
<article class="ui-testi">
  <div class="ui-testi__avatar">
    <div class="ui-testi__face"></div>
  </div>
  <div class="ui-testi__body">
    <span class="ui-testi__role">Engineering</span>
    <blockquote class="ui-testi__quote">“My first month, I shipped a feature touched by 200 million listeners. Five years in, that thrill hasn’t worn off.”</blockquote>
    <div class="ui-testi__sig">
      <strong>Linnea Bergström</strong>
      <span>Staff Engineer, Discovery · 5 years at Spotify</span>
    </div>
  </div>
</article>

<style>
  .ui-testi{max-width:560px;display:flex;gap:18px;align-items:flex-start;background:#191414;color:#fff;padding:22px;border-radius:14px;font:14px "Circular",-apple-system,"Helvetica Neue",sans-serif}
  .ui-testi__avatar{flex:none;width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#1db954,#0e7c3a);position:relative;overflow:hidden}
  .ui-testi__face{position:absolute;left:50%;top:38%;transform:translateX(-50%);width:36px;height:36px;border-radius:50%;background:#f8d8b5}
  .ui-testi__avatar::after{content:"";position:absolute;left:50%;bottom:-12px;transform:translateX(-50%);width:64px;height:40px;border-radius:32px 32px 0 0;background:#2b2030}
  .ui-testi__body{flex:1;min-width:0}
  .ui-testi__role{display:inline-block;background:#1db954;color:#000;font:700 10px inherit;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:999px;margin-bottom:10px}
  .ui-testi__quote{margin:0 0 12px;font:400 16px "Circular",Georgia,serif;line-height:1.45;color:#fff;letter-spacing:-.005em}
  .ui-testi__sig strong{display:block;font:600 13.5px inherit;color:#fff}
  .ui-testi__sig span{font-size:12px;color:#b3b3b3;line-height:1.4}
</style>`,
    },
    {
      name: 'Job Application Form',
      nameJa: '応募フォーム',
      desc: '履歴書アップロード・氏名・メール・電話・LinkedIn・志望動機を含む、Workday風応募フォーム。',
      detail: '応募フォームは、採用フローで最も重要な変換ポイントです。WorkdayやGreenhouseを参考に、上から「履歴書のアップロード」「氏名」「メール」「電話」「LinkedInのURL」「志望動機(テキストエリア)」「Submit」と並べるのが王道で、フィールドは1列にし、余白を広めに取ると入力疲れが減ります。履歴書アップロード欄はドラッグ&ドロップ対応にし、対応形式（PDF / DOCX）を明示することで離脱率が下がります。',
      descEn: 'A Workday-style application form: resume upload, name, email, phone, LinkedIn, cover letter, and submit.',
      detailEn: 'The application form is the highest-stakes conversion point in any careers funnel. Borrowing from Workday and Greenhouse, the canonical order is resume upload, full name, email, phone, LinkedIn URL, cover letter textarea, then submit — stacked in a single column with generous whitespace to avoid input fatigue. Making the resume field accept drag-and-drop and explicitly listing supported formats (PDF, DOCX) reduces drop-off and recruiter cleanup. Keep it short; deeper questions can come after the screening call.',
      code: `<!-- Inspired by Workday application flow -->
<form class="ui-apply" onsubmit="return false">
  <h2 class="ui-apply__title">Apply: Product Designer, Growth</h2>
  <p class="ui-apply__sub">All fields required unless noted. ETA ~6 minutes.</p>

  <label class="ui-apply__drop">
    <input type="file" hidden>
    <span class="ui-apply__drop-ico">⇪</span>
    <span><b>Upload resume</b><br><small>PDF or DOCX · up to 10 MB · drag & drop ok</small></span>
  </label>

  <div class="ui-apply__row">
    <label class="ui-apply__field"><span>First name</span><input value="Maya"></label>
    <label class="ui-apply__field"><span>Last name</span><input value="Hartwell"></label>
  </div>
  <label class="ui-apply__field"><span>Email</span><input type="email" value="maya.hartwell@gmail.com"></label>
  <label class="ui-apply__field"><span>Phone</span><input type="tel" value="+1 (415) 555-0188"></label>
  <label class="ui-apply__field"><span>LinkedIn URL <em>optional</em></span><input value="linkedin.com/in/mayahartwell"></label>
  <label class="ui-apply__field"><span>Cover letter</span><textarea rows="4">I’m drawn to the growth team because…</textarea></label>

  <div class="ui-apply__foot">
    <label class="ui-apply__chk"><input type="checkbox" checked> I agree to the candidate privacy notice.</label>
    <button class="ui-apply__submit">Submit application</button>
  </div>
</form>

<style>
  .ui-apply{max-width:520px;background:#fff;border:1px solid #d8d8d8;border-radius:6px;padding:24px;font:13.5px -apple-system,"Segoe UI",Roboto,sans-serif;color:#26282b}
  .ui-apply__title{margin:0;font:600 18px inherit;color:#0875e1}
  .ui-apply__sub{margin:4px 0 18px;color:#74777b;font-size:12.5px}
  .ui-apply__drop{display:flex;align-items:center;gap:14px;padding:14px 16px;border:1.5px dashed #b9c0ca;border-radius:6px;cursor:pointer;background:#f7f9fc;margin-bottom:16px}
  .ui-apply__drop:hover{border-color:#0875e1;background:#eff5fd}
  .ui-apply__drop-ico{width:36px;height:36px;border-radius:8px;background:#0875e1;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;flex:none}
  .ui-apply__drop small{color:#74777b;font-size:11.5px}
  .ui-apply__row{display:flex;gap:10px}
  .ui-apply__row .ui-apply__field{flex:1}
  .ui-apply__field{display:block;margin-bottom:12px}
  .ui-apply__field>span{display:block;font:500 12px inherit;color:#3b3f44;margin-bottom:4px}
  .ui-apply__field em{font-style:normal;color:#9aa0a6;font-weight:400;margin-left:2px}
  .ui-apply__field input,.ui-apply__field textarea{width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid #c4c6c9;border-radius:4px;font:13px inherit;color:#26282b;background:#fff;outline:none}
  .ui-apply__field input:focus,.ui-apply__field textarea:focus{border-color:#0875e1;box-shadow:0 0 0 2px rgba(8,117,225,.15)}
  .ui-apply__field textarea{resize:vertical;font-family:inherit;line-height:1.5}
  .ui-apply__foot{display:flex;justify-content:space-between;align-items:center;margin-top:14px;gap:12px;flex-wrap:wrap}
  .ui-apply__chk{font-size:12px;color:#3b3f44;display:flex;align-items:center;gap:6px}
  .ui-apply__submit{background:#0875e1;color:#fff;border:0;border-radius:4px;padding:9px 18px;font:600 13px inherit;cursor:pointer}
  .ui-apply__submit:hover{background:#0664c1}
</style>`,
    },
    {
      name: 'D&I Stat Tile',
      nameJa: 'D&I 数値タイル',
      desc: '「エンジニア女性比率48%」のような統計を大きく見せる、ダイバーシティ用タイル。',
      detail: 'D&I（ダイバーシティ&インクルージョン）統計タイルは、企業のダイバーシティへの取り組みを定量的な数値で示すUIです。「48% women in engineering」のような大きな数字を中央に置き、その下に短いキャプションと補足を添えるのが、Microsoft CareersやSalesforce Careersでの定番表現です。背景色を落ち着いた中間色にし、数字には強いコントラストを与えると、ページ全体の中で記憶に残るセクションになります。',
      descEn: 'A clean tile that surfaces a single D&I stat like "48% women in engineering" with caption and source.',
      detailEn: 'A diversity & inclusion stat tile turns a company\'s D&I efforts into something measurable and memorable. A large headline number ("48% women in engineering") sits at the center, with a short caption underneath and a source line below — the formula Microsoft Careers and Salesforce Careers both use. A muted background plus strong number contrast helps the tile stand out in the scroll. Always pair the stat with a source year so it reads as accountable, not as marketing.',
      code: `<!-- Inspired by Microsoft Careers -->
<div class="ui-dei">
  <div class="ui-dei__tile ui-dei__tile--a">
    <span class="ui-dei__num">48<small>%</small></span>
    <p class="ui-dei__cap">women in engineering<br>roles globally</p>
    <span class="ui-dei__src">2025 representation report</span>
  </div>
  <div class="ui-dei__tile ui-dei__tile--b">
    <span class="ui-dei__num">31<small>%</small></span>
    <p class="ui-dei__cap">leadership roles held by<br>underrepresented groups</p>
    <span class="ui-dei__src">2025 representation report</span>
  </div>
</div>

<style>
  .ui-dei{display:flex;gap:14px;max-width:600px;font:14px "Segoe UI",-apple-system,sans-serif;color:#252423}
  .ui-dei__tile{flex:1;padding:26px 24px;border-radius:8px;display:flex;flex-direction:column;align-items:flex-start;position:relative;overflow:hidden}
  .ui-dei__tile--a{background:#deecf9;color:#004578}
  .ui-dei__tile--b{background:#fff4ce;color:#594300}
  .ui-dei__tile::before{content:"";position:absolute;top:0;left:0;width:4px;height:100%;background:currentColor;opacity:.4}
  .ui-dei__num{font:300 48px "Segoe UI Light","Segoe UI",sans-serif;letter-spacing:-.02em;line-height:1;color:inherit}
  .ui-dei__num small{font-size:24px;font-weight:400;margin-left:1px;opacity:.85}
  .ui-dei__cap{margin:10px 0 14px;font:400 14px inherit;line-height:1.4;color:#252423}
  .ui-dei__src{font-size:11px;color:#605e5c;letter-spacing:.02em;text-transform:uppercase}
</style>`,
    },
    {
      name: 'Internship Program Card',
      nameJa: 'インターン・新卒プログラムカード',
      desc: 'プログラム名・期間・対象地域・応募CTAをまとめた、学生向けプログラム告知カード。',
      detail: 'インターン・新卒プログラムカードは、学生や新卒候補者に向けて、企業が提供する育成プログラムを紹介するUIです。プログラム名（例: Apple Developer Academy、Google STEP）、開催期間、対象オフィス、対象学年などを明示し、「Apply by Jan 31」のような具体的な締切と大きな応募ボタンを置くのが定番です。Google CareersやApple Jobsでは、左端に色付きアクセントバーやイラスト的なグラフィックを置き、本文と視覚的に切り分けることでカード自体を識別しやすくしています。',
      descEn: 'A card that announces an internship or new-grad program with duration, locations, deadline, and apply CTA.',
      detailEn: 'An internship / new-grad program card markets a structured early-career program to students. It typically lists the program name (e.g. Apple Developer Academy, Google STEP), duration, eligible offices, target class year, and — critically — a hard application deadline like "Apply by Jan 31" alongside a bold CTA. Google Careers and Apple Jobs commonly add a colored accent bar or playful graphic on the left side, both to brand the program and to visually separate it from regular full-time roles on the same listings page.',
      code: `<!-- Inspired by Google Careers -->
<article class="ui-intern">
  <div class="ui-intern__rail">
    <span class="ui-intern__dot ui-intern__dot--1"></span>
    <span class="ui-intern__dot ui-intern__dot--2"></span>
    <span class="ui-intern__dot ui-intern__dot--3"></span>
    <span class="ui-intern__dot ui-intern__dot--4"></span>
  </div>
  <div class="ui-intern__body">
    <span class="ui-intern__kicker">Students · Summer 2026</span>
    <h3>STEP Internship — Software Engineering</h3>
    <p class="ui-intern__lede">A 12-week paid internship for first- and second-year university students from underrepresented groups in tech.</p>
    <ul class="ui-intern__facts">
      <li><b>Duration</b><span>12 weeks · Jun – Aug 2026</span></li>
      <li><b>Locations</b><span>Mountain View · NYC · London · Zürich</span></li>
      <li><b>Eligible</b><span>1st & 2nd year students worldwide</span></li>
    </ul>
    <div class="ui-intern__foot">
      <span class="ui-intern__deadline">⏰ Apply by <b>Jan 31, 2026</b></span>
      <button class="ui-intern__cta">Apply now</button>
    </div>
  </div>
</article>

<style>
  .ui-intern{display:flex;max-width:600px;background:#fff;border:1px solid #dadce0;border-radius:14px;overflow:hidden;font:14px "Google Sans","Roboto",-apple-system,sans-serif;color:#202124;box-shadow:0 1px 2px rgba(60,64,67,.06)}
  .ui-intern__rail{flex:none;width:60px;background:linear-gradient(180deg,#4285f4,#34a853,#fbbc04,#ea4335);position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px}
  .ui-intern__dot{width:12px;height:12px;border-radius:50%;background:rgba(255,255,255,.7)}
  .ui-intern__dot--1{background:#fff}
  .ui-intern__dot--2{background:rgba(255,255,255,.85);width:8px;height:8px}
  .ui-intern__dot--3{background:rgba(255,255,255,.7);width:14px;height:14px}
  .ui-intern__dot--4{background:rgba(255,255,255,.6);width:6px;height:6px}
  .ui-intern__body{flex:1;padding:20px 22px}
  .ui-intern__kicker{display:inline-block;font:500 11px inherit;color:#1a73e8;text-transform:uppercase;letter-spacing:.08em;background:#e8f0fe;padding:3px 9px;border-radius:999px;margin-bottom:8px}
  .ui-intern__body h3{margin:0 0 4px;font:500 18px inherit;letter-spacing:-.005em}
  .ui-intern__lede{margin:0 0 14px;color:#5f6368;font-size:13px;line-height:1.5}
  .ui-intern__facts{list-style:none;margin:0 0 16px;padding:0;display:grid;grid-template-columns:1fr;gap:6px}
  .ui-intern__facts li{display:flex;font-size:12.5px;gap:10px;border-top:1px solid #f1f3f4;padding-top:6px}
  .ui-intern__facts li:first-child{border-top:0;padding-top:0}
  .ui-intern__facts b{flex:none;width:78px;color:#80868b;font-weight:500;letter-spacing:.01em}
  .ui-intern__facts span{color:#3c4043}
  .ui-intern__foot{display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid #f1f3f4;gap:10px;flex-wrap:wrap}
  .ui-intern__deadline{font-size:12.5px;color:#5f6368}
  .ui-intern__deadline b{color:#d93025;font-weight:600}
  .ui-intern__cta{background:#1a73e8;color:#fff;border:0;border-radius:6px;padding:9px 20px;font:500 13.5px inherit;cursor:pointer}
  .ui-intern__cta:hover{background:#1765cc;box-shadow:0 1px 3px rgba(26,115,232,.4)}
</style>`,
    },
  ],
}
