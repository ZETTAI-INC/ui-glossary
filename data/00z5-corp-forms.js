/**
 * UI Parts Showcase (Corporate Forms & Lead Generation) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-forms',
  title: '企業サイト フォーム',
  titleEn: 'Corporate Forms & Lead-gen',
  description: 'Accenture・Salesforce・HubSpot・Stripe・AWS などの企業サイトでよく見る、お問い合わせ・資料請求・リード獲得フォームのUIです。',
  terms: [
    {
      name: 'Corporate Contact Form',
      nameJa: 'お問い合わせフォーム(企業)',
      desc: '名前・会社・メール・国・問い合わせ種別・本文を1画面で受け付ける、企業サイトの基本形。',
      detail: '企業サイトの「Contact us」ページで定番の構成です。氏名と会社名・メール・国・問い合わせ種別(セールス/サポート/採用など)・自由記述、そして最後に送信ボタンを縦に並べます。BtoBでは商談につなげるため「会社名」と「役職」を必須にすることが多く、フィールドが詰まりすぎないよう2カラムにするのが定石。送信後はサンクスページかインライン完了メッセージへ遷移させましょう。',
      descEn: 'A standard "Contact us" form that captures name, company, email, country, inquiry type, and message in one screen.',
      detailEn: 'This is the canonical layout on corporate "Contact us" pages. Stack name + company, email, country, inquiry type (sales / support / careers...), and free-form message vertically, then put the submit at the bottom. B2B sites usually require "company" and "role" so they can route to the right sales team, and pairing fields into two columns keeps the form from feeling cramped. After submission, route to a thank-you page or show an inline confirmation.',
      code: `<!-- Inspired by Accenture Contact us -->
<form class="ui-ccf">
  <h2 class="ui-ccf__h">Contact us</h2>
  <p class="ui-ccf__sub">Tell us about your project. A specialist will get back within 1 business day.</p>
  <div class="ui-ccf__grid">
    <label class="ui-ccf__f"><span>First name *</span><input type="text" value="Hiroshi"></label>
    <label class="ui-ccf__f"><span>Last name *</span><input type="text" value="Tanaka"></label>
    <label class="ui-ccf__f"><span>Company *</span><input type="text" value="Marubeni Digital"></label>
    <label class="ui-ccf__f"><span>Work email *</span><input type="email" value="h.tanaka@marubeni-d.co.jp"></label>
    <label class="ui-ccf__f"><span>Country / region *</span>
      <select><option>Japan</option><option>United States</option><option>United Kingdom</option><option>Germany</option><option>Singapore</option></select>
    </label>
    <label class="ui-ccf__f"><span>Inquiry type *</span>
      <select><option>Talk to sales</option><option>Partnership</option><option>Press &amp; analyst</option><option>Customer support</option></select>
    </label>
    <label class="ui-ccf__f ui-ccf__f--full"><span>How can we help?</span>
      <textarea rows="4">We're evaluating a managed cloud migration for ~300 internal apps and would like to discuss a discovery engagement.</textarea>
    </label>
  </div>
  <label class="ui-ccf__chk"><input type="checkbox" checked><span>I agree to the <a href="#">Privacy Statement</a>.</span></label>
  <button class="ui-ccf__btn" type="button">Submit <span>→</span></button>
</form>

<style>
  .ui-ccf{max-width:640px;background:#fff;color:#1a1a1a;font:15px/1.5 "Graphik","Helvetica Neue",-apple-system,sans-serif;border:1px solid #e6e6e6;padding:28px 32px;border-top:4px solid #a100ff}
  .ui-ccf__h{margin:0 0 6px;font:600 24px/1.2 inherit;letter-spacing:-.01em}
  .ui-ccf__sub{margin:0 0 22px;color:#5a5a5a;font-size:14px}
  .ui-ccf__grid{display:grid;grid-template-columns:1fr 1fr;gap:14px 16px}
  .ui-ccf__f{display:flex;flex-direction:column;gap:6px;font-size:12.5px;color:#3a3a3a;font-weight:500}
  .ui-ccf__f--full{grid-column:1/-1}
  .ui-ccf__f input,.ui-ccf__f select,.ui-ccf__f textarea{font:14px inherit;color:#1a1a1a;background:#fff;border:1px solid #c8c8c8;padding:9px 10px;border-radius:0;outline:none;transition:.15s}
  .ui-ccf__f input:focus,.ui-ccf__f select:focus,.ui-ccf__f textarea:focus{border-color:#a100ff;box-shadow:0 0 0 2px rgba(161,0,255,.15)}
  .ui-ccf__f textarea{resize:vertical;min-height:90px;font-family:inherit}
  .ui-ccf__chk{display:flex;align-items:flex-start;gap:8px;margin:18px 0 18px;font-size:12.5px;color:#3a3a3a}
  .ui-ccf__chk a{color:#a100ff;text-decoration:underline}
  .ui-ccf__btn{display:inline-flex;align-items:center;gap:10px;background:#a100ff;color:#fff;border:0;padding:12px 22px;font:500 14px inherit;cursor:pointer;border-radius:0;transition:.15s}
  .ui-ccf__btn:hover{background:#7500b8}
  .ui-ccf__btn span{transition:transform .15s}
  .ui-ccf__btn:hover span{transform:translateX(3px)}
  @media(max-width:520px){.ui-ccf__grid{grid-template-columns:1fr}}
</style>`,
    },
    {
      name: 'Lead-gen Sidebar',
      nameJa: 'リード獲得サイドバー',
      desc: '記事の右側に追従する小さなフォーム。メール+会社名+送信のみのシンプル構成。',
      detail: 'ブログ記事やホワイトペーパーの右側に貼り付ける、追従(sticky)型のリード獲得フォームです。記事を読んで興味を持ったユーザーをその場でメールリストに取り込むのが目的なので、入力項目は2〜3個に絞ります。HubSpotやMarketoのCRMに直結してリードスコアリングされるのが一般的で、見出しは「30秒で読めるニュースレター」など「軽さ」を強調するのが効きます。',
      descEn: 'A small sticky form on the right side of an article — just email, company, and a submit button.',
      detailEn: 'A sticky lead-gen card pinned to the right rail of a blog post or whitepaper. The goal is to convert engaged readers into your email list right where they are reading, so the form should be very short — two or three fields at most. These typically wire into a CRM like HubSpot or Marketo for lead scoring, and headlines that emphasize lightness ("30-second weekly digest") tend to outperform heavy "subscribe to our newsletter" copy.',
      code: `<!-- Inspired by HubSpot blog sidebar -->
<div class="ui-lgs">
  <article class="ui-lgs__art">
    <span class="ui-lgs__crumb">Marketing › Inbound</span>
    <h1>How a small ops team grew MQLs 4× without hiring</h1>
    <p>When the marketing team at Lattice rebuilt their lifecycle stages around real buying signals, conversion from MQL to SQL nearly doubled in a quarter. Here is the playbook they used, including the exact workflow templates and the scoring rules…</p>
    <p>The biggest insight was that intent data alone wasn't enough — they had to pair it with first-party form submissions to filter out tire-kickers.</p>
  </article>
  <aside class="ui-lgs__side">
    <div class="ui-lgs__mark">H</div>
    <h3>Get the weekly digest</h3>
    <p>The 5 most useful B2B marketing reads, every Tuesday. Free, 30 seconds to read.</p>
    <label><input type="email" placeholder="you@company.com" value="anna.becker@lattice.com"></label>
    <label><input type="text" placeholder="Company" value="Lattice"></label>
    <button type="button">Subscribe</button>
    <small>23,418 marketers already read it.</small>
  </aside>
</div>

<style>
  .ui-lgs{display:grid;grid-template-columns:1fr 240px;gap:32px;max-width:680px;font:15px/1.55 "Inter",-apple-system,"Segoe UI",sans-serif;color:#33475b;background:#fff;padding:20px}
  .ui-lgs__art h1{font:700 22px/1.25 "Lexend",inherit;color:#2d3e50;margin:6px 0 10px;letter-spacing:-.01em}
  .ui-lgs__art p{margin:0 0 12px;font-size:14px;line-height:1.6}
  .ui-lgs__crumb{font-size:11px;color:#ff7a59;letter-spacing:.08em;text-transform:uppercase;font-weight:600}
  .ui-lgs__side{position:sticky;top:8px;align-self:start;background:linear-gradient(180deg,#fff5f1 0%,#fff 100%);border:1px solid #ffd1c0;border-radius:8px;padding:18px 16px;text-align:center}
  .ui-lgs__mark{width:34px;height:34px;border-radius:50%;background:#ff7a59;color:#fff;font:700 18px "Lexend",inherit;display:flex;align-items:center;justify-content:center;margin:0 auto 10px}
  .ui-lgs__side h3{margin:0 0 6px;font:700 15px "Lexend",inherit;color:#2d3e50}
  .ui-lgs__side p{margin:0 0 12px;font-size:12.5px;color:#516f90;line-height:1.45}
  .ui-lgs__side input{width:100%;padding:9px 10px;border:1px solid #cbd6e2;border-radius:4px;font:13px inherit;color:#33475b;margin-bottom:8px;box-sizing:border-box;outline:none}
  .ui-lgs__side input:focus{border-color:#ff7a59;box-shadow:0 0 0 2px rgba(255,122,89,.18)}
  .ui-lgs__side button{width:100%;padding:10px;background:#ff7a59;color:#fff;border:0;border-radius:4px;font:600 13px inherit;cursor:pointer;transition:.15s}
  .ui-lgs__side button:hover{background:#ff5c33}
  .ui-lgs__side small{display:block;margin-top:10px;font-size:11px;color:#7c98b6}
  @media(max-width:560px){.ui-lgs{grid-template-columns:1fr}.ui-lgs__side{position:static}}
</style>`,
    },
    {
      name: 'Multi-step Lead Form',
      nameJa: 'マルチステップ リードフォーム',
      desc: '長いフォームを3ステップに分解し、進捗ドットで現在地を示すリード獲得用フォーム。',
      detail: '一度に多くの項目を聞きたいけれど、長いフォームは離脱率が高い…そんな時に使う段階分け型フォームです。Step1で連絡先、Step2で会社情報、Step3でニーズ、と認知負荷を分散させると、完了率が15〜30%上がるとされています。上部に進捗ドットやステッパーを置いて「いまどこ・あと何ステップ」を見せ、戻る/次へボタンで誘導します。Salesforceや Marketo のフォームでよく見るパターンです。',
      descEn: 'A long form split into three steps with progress dots that show the current stage.',
      detailEn: 'When you need a lot of fields but a long form would kill the conversion rate, split it into steps: contact in step 1, company in step 2, needs in step 3. Spreading cognitive load across stages typically lifts completion by 15–30%. A stepper or dot indicator at the top shows "where I am and how many to go," and Back/Next buttons keep navigation predictable. This pattern is common in Salesforce, Marketo, and demo-request flows generally.',
      code: `<!-- Inspired by Salesforce demo request -->
<form class="ui-msf">
  <header class="ui-msf__top">
    <div class="ui-msf__brand"><span class="ui-msf__cloud"></span>Request a guided tour</div>
    <ol class="ui-msf__dots">
      <li class="is-done"><i>1</i>Contact</li>
      <li class="is-active"><i>2</i>Company</li>
      <li><i>3</i>Needs</li>
    </ol>
  </header>
  <div class="ui-msf__body">
    <h3>Tell us about your company</h3>
    <p>So we can route you to the right specialist.</p>
    <label><span>Company name</span><input type="text" value="Northwind Trading Co."></label>
    <div class="ui-msf__row">
      <label><span>Employees</span>
        <select><option>1–10</option><option>11–50</option><option selected>51–250</option><option>251–1,000</option><option>1,001+</option></select>
      </label>
      <label><span>Industry</span>
        <select><option>Manufacturing</option><option selected>Retail &amp; Consumer</option><option>Financial Services</option><option>Healthcare</option></select>
      </label>
    </div>
    <label><span>Country</span>
      <select><option>Japan</option><option>United States</option><option>Germany</option><option>Australia</option></select>
    </label>
  </div>
  <footer class="ui-msf__bot">
    <button type="button" class="ui-msf__back">← Back</button>
    <button type="button" class="ui-msf__next">Next <span>→</span></button>
  </footer>
</form>

<style>
  .ui-msf{max-width:560px;background:#fff;border:1px solid #d8dde6;border-radius:8px;font:14px/1.5 "Salesforce Sans","Helvetica Neue",-apple-system,sans-serif;color:#181818;box-shadow:0 2px 8px rgba(0,0,0,.06);overflow:hidden}
  .ui-msf__top{padding:18px 24px 14px;border-bottom:1px solid #e5e5e5;background:#fafaf9}
  .ui-msf__brand{display:flex;align-items:center;gap:8px;font:600 13px inherit;color:#032e61;margin-bottom:14px}
  .ui-msf__cloud{width:22px;height:14px;background:#00a1e0;border-radius:8px;position:relative;display:inline-block}
  .ui-msf__cloud::before{content:"";position:absolute;left:-4px;top:-5px;width:11px;height:11px;border-radius:50%;background:#00a1e0}
  .ui-msf__cloud::after{content:"";position:absolute;right:-3px;top:-7px;width:9px;height:9px;border-radius:50%;background:#00a1e0}
  .ui-msf__dots{list-style:none;display:flex;gap:0;margin:0;padding:0;font-size:12px;color:#706e6b}
  .ui-msf__dots li{flex:1;display:flex;align-items:center;gap:8px;position:relative}
  .ui-msf__dots li:not(:last-child)::after{content:"";flex:1;height:2px;background:#d8dde6;margin:0 8px}
  .ui-msf__dots li.is-done:not(:last-child)::after{background:#00a1e0}
  .ui-msf__dots li i{width:22px;height:22px;border-radius:50%;background:#fff;border:2px solid #d8dde6;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:11px;font-weight:700;color:#706e6b}
  .ui-msf__dots li.is-done i{background:#00a1e0;border-color:#00a1e0;color:#fff}
  .ui-msf__dots li.is-done i::before{content:"✓";font-size:13px}
  .ui-msf__dots li.is-done i{font-size:0}
  .ui-msf__dots li.is-active i{background:#fff;border-color:#0070d2;color:#0070d2;box-shadow:0 0 0 3px rgba(0,112,210,.15)}
  .ui-msf__dots li.is-active{color:#181818;font-weight:600}
  .ui-msf__body{padding:22px 24px 6px}
  .ui-msf__body h3{margin:0 0 4px;font:600 17px inherit}
  .ui-msf__body>p{margin:0 0 16px;color:#706e6b;font-size:13px}
  .ui-msf__body label{display:flex;flex-direction:column;gap:5px;margin-bottom:14px;font-size:12px;font-weight:600;color:#3e3e3c}
  .ui-msf__body input,.ui-msf__body select{font:14px inherit;color:#181818;border:1px solid #c9c9c9;border-radius:4px;padding:8px 10px;background:#fff;outline:none;transition:.12s}
  .ui-msf__body input:focus,.ui-msf__body select:focus{border-color:#0070d2;box-shadow:0 0 3px #0070d2}
  .ui-msf__row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  .ui-msf__bot{display:flex;justify-content:space-between;padding:16px 24px;border-top:1px solid #e5e5e5;background:#fafaf9}
  .ui-msf__back{background:transparent;border:1px solid #c9c9c9;color:#0070d2;font:600 13px inherit;padding:8px 16px;border-radius:4px;cursor:pointer}
  .ui-msf__back:hover{background:#f3f3f3}
  .ui-msf__next{background:#0070d2;color:#fff;border:0;font:600 13px inherit;padding:9px 18px;border-radius:4px;cursor:pointer;display:inline-flex;gap:6px;align-items:center}
  .ui-msf__next:hover{background:#005fb2}
</style>`,
    },
    {
      name: 'Talk-to-Sales Split Panel',
      nameJa: '営業相談スプリットパネル',
      desc: '左にベネフィット一覧、右にフォームを配置した分割レイアウトの問い合わせCTA。',
      detail: '「Talk to sales」や「Contact sales」のページで定番の左右分割レイアウトです。左半分にメリットを箇条書きで提示し(専任担当・カスタム見積り・SLA対応など)、右半分にコンパクトな送信フォームを置きます。説得材料を視界に入れたまま入力できるため、コンバージョン率が高いのが特徴。Stripe・Vercel・Linear など、開発者向けSaaSが好んで使う構成です。',
      descEn: 'A split layout with benefit bullets on the left and a contact form on the right.',
      detailEn: 'A classic "Talk to sales" page layout: benefits listed on the left half (dedicated rep, custom pricing, SLA, security review...) and a compact submission form on the right. Keeping the persuasion copy in view while the user fills out fields tends to lift conversion. Developer-focused SaaS like Stripe, Vercel, and Linear lean on this layout because it does double duty as both marketing surface and lead capture.',
      code: `<!-- Inspired by Stripe sales contact -->
<section class="ui-sp">
  <div class="ui-sp__left">
    <span class="ui-sp__eyebrow">Enterprise</span>
    <h2>Talk to our sales team</h2>
    <p>Volume discounts, custom contracts, and onboarding support for teams processing $250K+ per month.</p>
    <ul>
      <li><i></i><div><b>Dedicated account manager</b><small>Named contact and quarterly business reviews.</small></div></li>
      <li><i></i><div><b>Custom contract terms</b><small>MSA, DPA, BAA, and procurement-friendly billing.</small></div></li>
      <li><i></i><div><b>99.999% uptime SLA</b><small>Financial credits for any qualifying downtime.</small></div></li>
      <li><i></i><div><b>Solutions engineering</b><small>Architecture review and integration assistance.</small></div></li>
    </ul>
  </div>
  <form class="ui-sp__form">
    <label><span>Full name</span><input type="text" value="Sarah Linden"></label>
    <label><span>Work email</span><input type="email" value="s.linden@northwind.io"></label>
    <label><span>Company</span><input type="text" value="Northwind Logistics"></label>
    <label><span>Monthly volume</span>
      <select><option>$0–25K</option><option>$25K–100K</option><option selected>$100K–500K</option><option>$500K–2M</option><option>$2M+</option></select>
    </label>
    <label><span>How can we help?</span><textarea rows="3">Evaluating Connect Custom for marketplace payouts to ~600 carriers across NA &amp; EU.</textarea></label>
    <button type="button">Contact sales →</button>
    <small>Or call <a href="#">+1 (888) 926-2289</a></small>
  </form>
</section>

<style>
  .ui-sp{display:grid;grid-template-columns:1fr 1fr;gap:0;max-width:720px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 12px 40px rgba(50,50,93,.08),0 2px 8px rgba(0,0,0,.04);font:14.5px/1.5 "SF Pro Text",-apple-system,"Segoe UI",sans-serif;color:#0a2540}
  .ui-sp__left{padding:28px 28px 28px;background:linear-gradient(180deg,#f6f9fc 0%,#fff 100%);border-right:1px solid #eef0f3}
  .ui-sp__eyebrow{display:inline-block;background:linear-gradient(90deg,#635bff,#a96cff);color:#fff;padding:3px 8px;border-radius:10px;font:600 10px "SF Pro Text",sans-serif;letter-spacing:.04em;text-transform:uppercase}
  .ui-sp__left h2{margin:12px 0 8px;font:700 22px/1.2 inherit;letter-spacing:-.01em}
  .ui-sp__left>p{margin:0 0 18px;color:#425466;font-size:13.5px}
  .ui-sp__left ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}
  .ui-sp__left li{display:flex;gap:10px;align-items:flex-start;font-size:13px}
  .ui-sp__left li i{width:18px;height:18px;border-radius:50%;background:#635bff;flex:none;margin-top:1px;position:relative}
  .ui-sp__left li i::before{content:"";position:absolute;left:5px;top:8px;width:7px;height:3px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(-45deg)}
  .ui-sp__left b{display:block;color:#0a2540;font-weight:600;font-size:13px;margin-bottom:1px}
  .ui-sp__left small{color:#425466;font-size:12px;line-height:1.4}
  .ui-sp__form{padding:24px 24px}
  .ui-sp__form label{display:flex;flex-direction:column;gap:5px;margin-bottom:12px;font-size:12px;color:#425466;font-weight:500}
  .ui-sp__form input,.ui-sp__form select,.ui-sp__form textarea{font:13.5px inherit;color:#0a2540;border:1px solid #e3e8ee;border-radius:6px;padding:8px 10px;background:#fff;outline:none;transition:.12s;font-family:inherit}
  .ui-sp__form input:focus,.ui-sp__form select:focus,.ui-sp__form textarea:focus{border-color:#635bff;box-shadow:0 0 0 3px rgba(99,91,255,.16)}
  .ui-sp__form textarea{resize:vertical}
  .ui-sp__form button{width:100%;margin-top:6px;background:linear-gradient(180deg,#7a73ff,#635bff);color:#fff;border:0;border-radius:6px;padding:11px;font:600 13.5px inherit;cursor:pointer;box-shadow:0 1px 0 rgba(255,255,255,.2) inset,0 2px 4px rgba(99,91,255,.3)}
  .ui-sp__form small{display:block;margin-top:10px;font-size:12px;color:#697386;text-align:center}
  .ui-sp__form small a{color:#635bff;text-decoration:none}
  @media(max-width:580px){.ui-sp{grid-template-columns:1fr}.ui-sp__left{border-right:0;border-bottom:1px solid #eef0f3}}
</style>`,
    },
    {
      name: 'Newsletter Signup',
      nameJa: 'ニュースレター登録',
      desc: 'メール入力と購読ボタンを1行に並べ、GDPR同意チェックを下に添えるコンパクト版。',
      detail: 'フッターや記事末尾でよく見る、1行型のメルマガ登録フォームです。「メール+購読ボタン」をインラインで並べ、その下に小さなGDPR同意チェックボックスとプライバシーポリシーへのリンクを添えるのが、EU圏のサイトでの標準パターン。テクニカルには HubSpot や Mailchimp に飛ばす実装が多く、ダブルオプトイン(確認メール)を組み合わせると到達率も品質も上がります。',
      descEn: 'A one-line email input plus a Subscribe button, with a GDPR consent checkbox underneath.',
      detailEn: 'The single-line newsletter signup commonly found in footers and end-of-article slots. Email field and Subscribe button sit inline; underneath, a small GDPR consent checkbox and a link to the privacy policy keep things compliant for EU traffic. Most teams wire this to HubSpot or Mailchimp, often with a double opt-in confirmation email — that pattern lifts both deliverability and list quality.',
      code: `<!-- Inspired by Stripe footer newsletter -->
<div class="ui-nl">
  <div class="ui-nl__icon">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6l9 7 9-7"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>
  </div>
  <div class="ui-nl__body">
    <h4>Sign up for developer updates</h4>
    <p>Product launches, API changelog highlights, and the occasional engineering deep-dive. Monthly, no fluff.</p>
    <div class="ui-nl__row">
      <input type="email" placeholder="you@company.com" value="ari.mendoza@northwind.io">
      <button type="button">Subscribe</button>
    </div>
    <label class="ui-nl__chk">
      <input type="checkbox" checked>
      <span>I agree to receive marketing emails from Northwind. I can unsubscribe at any time. See our <a href="#">Privacy Policy</a>.</span>
    </label>
  </div>
</div>

<style>
  .ui-nl{display:flex;gap:14px;max-width:560px;background:#0a2540;color:#fff;padding:22px 24px;border-radius:10px;font:14px/1.5 "SF Pro Text",-apple-system,"Segoe UI",sans-serif}
  .ui-nl__icon{flex:none;width:40px;height:40px;border-radius:8px;background:linear-gradient(135deg,#635bff,#00d4ff);display:flex;align-items:center;justify-content:center;color:#fff}
  .ui-nl__body{flex:1;min-width:0}
  .ui-nl__body h4{margin:0 0 4px;font:600 16px inherit;letter-spacing:-.005em}
  .ui-nl__body p{margin:0 0 12px;color:#a3acbb;font-size:13px;line-height:1.5}
  .ui-nl__row{display:flex;gap:8px;margin-bottom:10px}
  .ui-nl__row input{flex:1;padding:9px 12px;border:1px solid #2a3a55;background:#0f2d4f;color:#fff;border-radius:6px;font:13px inherit;outline:none;transition:.12s;min-width:0}
  .ui-nl__row input::placeholder{color:#697386}
  .ui-nl__row input:focus{border-color:#635bff;box-shadow:0 0 0 3px rgba(99,91,255,.25)}
  .ui-nl__row button{padding:9px 18px;background:#fff;color:#0a2540;border:0;border-radius:6px;font:600 13px inherit;cursor:pointer;transition:.12s;white-space:nowrap}
  .ui-nl__row button:hover{background:#e6eaf0}
  .ui-nl__chk{display:flex;gap:8px;font-size:11.5px;color:#a3acbb;line-height:1.45;align-items:flex-start;cursor:pointer}
  .ui-nl__chk input{margin-top:2px;accent-color:#635bff}
  .ui-nl__chk a{color:#9aa6ff;text-decoration:underline}
</style>`,
    },
    {
      name: 'Demo Booking Form',
      nameJa: 'デモ予約フォーム',
      desc: '日付ピッカー+時間スロット選択+連絡先入力で、その場で営業デモの時間を予約できるUI。',
      detail: 'カレンダー日付選択と空き時間スロットのグリッド、それに連絡先入力を組み合わせた「セルフサーブ型」のデモ予約フォームです。Calendly や Chili Piper、HubSpot Meetings の見た目を踏襲しており、ユーザーが営業担当の空きカレンダーから直接時間を抑えられるのが利点。BtoB SaaSでは問い合わせから商談化までのリードタイムが大幅に短縮されるため、近年ほぼ標準UIになっています。',
      descEn: 'A date picker, a time-slot grid, and contact fields so visitors can self-serve a demo slot.',
      detailEn: 'A self-serve demo booking widget that combines a date picker, a grid of available time slots, and contact fields. The look mirrors Calendly, Chili Piper, and HubSpot Meetings: visitors pick directly from the rep\'s calendar, eliminating back-and-forth email. For B2B SaaS, this pattern collapses the lead-to-meeting time dramatically and has become near-standard on "Request a demo" pages.',
      code: `<!-- Inspired by HubSpot Meetings / Calendly -->
<div class="ui-db">
  <header class="ui-db__h">
    <div class="ui-db__avatar">JN</div>
    <div>
      <h3>30-min product demo</h3>
      <small>with Julian Nakamura · Solutions Engineer</small>
    </div>
  </header>
  <div class="ui-db__grid">
    <div class="ui-db__cal">
      <div class="ui-db__month"><button>‹</button><b>May 2026</b><button>›</button></div>
      <div class="ui-db__dow"><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span></div>
      <div class="ui-db__days">
        <span class="dim">27</span><span class="dim">28</span><span class="dim">29</span><span class="dim">30</span><span>1</span><span class="off">2</span><span class="off">3</span>
        <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span class="off">9</span><span class="off">10</span>
        <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span class="off">16</span><span class="off">17</span>
        <span>18</span><span>19</span><span class="sel">20</span><span>21</span><span>22</span><span class="off">23</span><span class="off">24</span>
        <span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span class="off">30</span><span class="off">31</span>
      </div>
    </div>
    <div class="ui-db__slots">
      <div class="ui-db__day">Wed, May 20</div>
      <div class="ui-db__list">
        <button>9:00 AM</button>
        <button>9:30 AM</button>
        <button class="is-on">10:00 AM</button>
        <button>11:30 AM</button>
        <button>1:00 PM</button>
        <button>2:30 PM</button>
        <button>4:00 PM</button>
      </div>
    </div>
  </div>
  <div class="ui-db__form">
    <label><span>Name</span><input type="text" value="Mark Petrov"></label>
    <label><span>Work email</span><input type="email" value="m.petrov@northwind.io"></label>
    <button type="button" class="ui-db__cta">Confirm 10:00 AM · May 20</button>
  </div>
</div>

<style>
  .ui-db{max-width:640px;background:#fff;border:1px solid #e5e5e5;border-radius:8px;font:14px/1.5 "Lexend","Inter",-apple-system,sans-serif;color:#33475b;box-shadow:0 4px 16px rgba(0,0,0,.04)}
  .ui-db__h{display:flex;gap:12px;align-items:center;padding:16px 20px;border-bottom:1px solid #eef0f3}
  .ui-db__avatar{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#ff7a59,#ffa68a);color:#fff;display:flex;align-items:center;justify-content:center;font:600 13px inherit}
  .ui-db__h h3{margin:0;font:600 15px inherit;color:#2d3e50}
  .ui-db__h small{color:#7c98b6;font-size:12px}
  .ui-db__grid{display:grid;grid-template-columns:1fr 200px;gap:0;border-bottom:1px solid #eef0f3}
  .ui-db__cal{padding:14px 18px;border-right:1px solid #eef0f3}
  .ui-db__month{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;font-size:13px}
  .ui-db__month b{color:#2d3e50}
  .ui-db__month button{background:transparent;border:0;color:#7c98b6;font-size:18px;cursor:pointer;padding:0 6px;line-height:1}
  .ui-db__dow{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;font-size:10.5px;color:#7c98b6;font-weight:600;letter-spacing:.04em;margin-bottom:4px}
  .ui-db__days{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;font-size:12px}
  .ui-db__days span{padding:7px 0;border-radius:50%;cursor:pointer;transition:.1s}
  .ui-db__days span:not(.dim):not(.off):hover{background:#fff5f1;color:#ff7a59}
  .ui-db__days .dim{color:#cbd6e2;cursor:default}
  .ui-db__days .off{color:#cbd6e2;cursor:not-allowed}
  .ui-db__days .sel{background:#ff7a59;color:#fff;font-weight:600}
  .ui-db__slots{padding:14px 16px;background:#fafbfc}
  .ui-db__day{font:600 12px inherit;color:#2d3e50;margin-bottom:8px}
  .ui-db__list{display:flex;flex-direction:column;gap:6px;max-height:200px;overflow-y:auto}
  .ui-db__list button{padding:8px;background:#fff;border:1px solid #cbd6e2;border-radius:4px;color:#33475b;font:500 12.5px inherit;cursor:pointer;transition:.12s}
  .ui-db__list button:hover{border-color:#ff7a59;color:#ff7a59}
  .ui-db__list .is-on{background:#ff7a59;border-color:#ff7a59;color:#fff;font-weight:600}
  .ui-db__form{padding:14px 20px 18px;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:end}
  .ui-db__form label{display:flex;flex-direction:column;gap:4px;font-size:11.5px;color:#516f90;font-weight:500}
  .ui-db__form input{padding:8px 10px;border:1px solid #cbd6e2;border-radius:4px;font:13px inherit;color:#33475b;outline:none}
  .ui-db__form input:focus{border-color:#ff7a59;box-shadow:0 0 0 2px rgba(255,122,89,.15)}
  .ui-db__cta{grid-column:1/-1;padding:11px;background:#ff7a59;color:#fff;border:0;border-radius:4px;font:600 13px inherit;cursor:pointer;margin-top:4px}
  .ui-db__cta:hover{background:#ff5c33}
</style>`,
    },
    {
      name: 'Whitepaper Gate',
      nameJa: 'ホワイトペーパー ゲート',
      desc: 'ぼかしPDFプレビューの上に短いフォームを重ね、メアド送信でDLを許可するゲート型UI。',
      detail: 'コンサル系企業(PwC・Deloitte・McKinsey など)の調査レポートDLで頻出する「ゲート」型UIです。PDFの表紙をぼかしてプレビュー表示し、その上にメール・役職・会社の3項目フォームを乗せます。「Submit」を押すと初めて閲覧/DLリンクが届く仕組みで、見込み顧客のメールアドレスを取得するのが目的。心理的に「中身がチラ見えしている」状態で入力を促すため、CVRが高いのが特徴です。',
      descEn: 'A short form layered on top of a blurred PDF preview — submit email to unlock the download.',
      detailEn: 'The "gated content" UI that consultancies like PwC, Deloitte, and McKinsey use for downloadable research reports. The PDF cover is shown behind a heavy blur, with a tight three-field form (email / role / company) layered on top. Submitting the form unlocks the actual PDF, capturing a qualified lead in the process. Letting the user almost-see the content while asking for an email is psychologically effective — conversion rates run notably higher than for non-gated alternatives.',
      code: `<!-- Inspired by PwC report download gate -->
<div class="ui-wp">
  <div class="ui-wp__doc" aria-hidden="true">
    <div class="ui-wp__page">
      <div class="ui-wp__strip"></div>
      <div class="ui-wp__title">Global CEO Survey 2026</div>
      <div class="ui-wp__sub">Reinventing tomorrow — insights from 4,702 chief executives across 105 countries.</div>
      <div class="ui-wp__bar"></div>
      <div class="ui-wp__bar" style="width:78%"></div>
      <div class="ui-wp__bar" style="width:64%"></div>
      <div class="ui-wp__bar" style="width:82%"></div>
      <div class="ui-wp__chart">
        <span style="height:32%"></span><span style="height:54%"></span><span style="height:68%"></span><span style="height:48%"></span><span style="height:76%"></span><span style="height:88%"></span>
      </div>
    </div>
  </div>
  <div class="ui-wp__gate">
    <span class="ui-wp__tag">Free report · 64 pages</span>
    <h3>Unlock the full report</h3>
    <p>Enter your details to download the PDF instantly.</p>
    <label><input type="email" placeholder="Work email" value="d.osei@northwind.io"></label>
    <label>
      <select><option>Role — please select</option><option>C-suite / Board</option><option selected>Director / VP</option><option>Manager</option><option>Individual contributor</option></select>
    </label>
    <label><input type="text" placeholder="Company" value="Northwind Logistics"></label>
    <button type="button">Download PDF →</button>
    <small>By submitting you accept our <a href="#">privacy notice</a>.</small>
  </div>
</div>

<style>
  .ui-wp{position:relative;max-width:600px;height:380px;background:#1a1a1a;border-radius:6px;overflow:hidden;font:14px/1.5 "Georgia",serif;color:#fff}
  .ui-wp__doc{position:absolute;inset:0;filter:blur(6px) brightness(.65);pointer-events:none}
  .ui-wp__page{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:90%;height:90%;background:#fff;color:#222;padding:30px 32px;border-radius:2px}
  .ui-wp__strip{height:10px;width:120px;background:#d04a02;margin-bottom:22px}
  .ui-wp__title{font:700 26px/1.15 inherit;color:#000;margin-bottom:8px;letter-spacing:-.01em}
  .ui-wp__sub{font:400 13px/1.4 "Helvetica Neue",sans-serif;color:#555;margin-bottom:24px;max-width:80%}
  .ui-wp__bar{height:8px;background:#e8e8e8;border-radius:4px;margin-bottom:8px;width:90%}
  .ui-wp__chart{display:flex;align-items:flex-end;gap:6px;height:80px;margin-top:18px}
  .ui-wp__chart span{flex:1;background:#d04a02;border-radius:2px 2px 0 0;opacity:.85}
  .ui-wp__gate{position:absolute;right:20px;top:50%;transform:translateY(-50%);width:260px;background:#fff;color:#222;padding:22px 22px 20px;font:14px/1.5 "Helvetica Neue",-apple-system,sans-serif;border-left:4px solid #d04a02;box-shadow:0 16px 50px rgba(0,0,0,.45)}
  .ui-wp__tag{display:inline-block;font:600 10px "Helvetica Neue",sans-serif;color:#d04a02;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px}
  .ui-wp__gate h3{margin:0 0 4px;font:700 18px/1.2 "Georgia",serif;color:#000}
  .ui-wp__gate p{margin:0 0 14px;font-size:12.5px;color:#666}
  .ui-wp__gate label{display:block;margin-bottom:8px}
  .ui-wp__gate input,.ui-wp__gate select{width:100%;padding:9px 10px;border:1px solid #ccc;border-radius:2px;font:13px inherit;color:#222;outline:none;box-sizing:border-box;background:#fff}
  .ui-wp__gate input:focus,.ui-wp__gate select:focus{border-color:#d04a02}
  .ui-wp__gate button{width:100%;padding:11px;background:#d04a02;color:#fff;border:0;border-radius:2px;font:600 13px "Helvetica Neue",sans-serif;cursor:pointer;margin-top:4px;letter-spacing:.02em}
  .ui-wp__gate button:hover{background:#a83a02}
  .ui-wp__gate small{display:block;margin-top:10px;font-size:10.5px;color:#888;text-align:center}
  .ui-wp__gate small a{color:#d04a02;text-decoration:underline}
</style>`,
    },
    {
      name: 'Industry &amp; Role Selector',
      nameJa: '業種・役職セレクター',
      desc: '業種をチップで選択し、役職をドロップダウンで選ぶ、パーソナライズ用フォーム。',
      detail: 'BtoBサイトの「あなたについて教えてください」セクションで使う、視覚的なチップ選択フォームです。業種(金融・小売・製造・公共…など8〜12個)を四角いタイル状のチップで並べ、ユーザーが直感的に1つ選べるようにします。下に役職セレクトと「Continue」ボタンを置き、選択結果に応じてその後のコンテンツや営業ルーティングを変えるのが用途。AWS や IBM の業界ソリューション入口でよく見るパターンです。',
      descEn: 'A grid of industry chips plus a role dropdown so the experience can be personalized.',
      detailEn: 'A "tell us about you" form that uses tile-shaped chips for the industry list (8–12 options like Finance, Retail, Manufacturing, Public Sector) so the user can pick visually rather than scanning a dropdown. A role select and a Continue button sit beneath. The selection then personalizes downstream content and routes the lead to the right industry sales pod. AWS, IBM, and other enterprise vendors use this pattern as the entry point to their industry solutions pages.',
      code: `<!-- Inspired by AWS Industries / IBM solutions selector -->
<form class="ui-ir">
  <h3>Tell us about you</h3>
  <p>We'll tailor recommendations and pricing examples to your context.</p>
  <fieldset>
    <legend>Industry</legend>
    <div class="ui-ir__chips">
      <label><input type="radio" name="ind"><span><i>🏦</i>Financial Services</span></label>
      <label><input type="radio" name="ind" checked><span><i>🛒</i>Retail &amp; CPG</span></label>
      <label><input type="radio" name="ind"><span><i>🏭</i>Manufacturing</span></label>
      <label><input type="radio" name="ind"><span><i>🏥</i>Healthcare</span></label>
      <label><input type="radio" name="ind"><span><i>🎓</i>Education</span></label>
      <label><input type="radio" name="ind"><span><i>🏛️</i>Public Sector</span></label>
      <label><input type="radio" name="ind"><span><i>📺</i>Media</span></label>
      <label><input type="radio" name="ind"><span><i>🚚</i>Transport</span></label>
    </div>
  </fieldset>
  <label class="ui-ir__role">
    <span>Your role</span>
    <select>
      <option>Select your role…</option>
      <option>CTO / VP Engineering</option>
      <option selected>Director of Data &amp; Analytics</option>
      <option>Solutions Architect</option>
      <option>Product Manager</option>
      <option>Developer</option>
      <option>Procurement / Buyer</option>
    </select>
  </label>
  <button type="button" class="ui-ir__cta">Continue →</button>
</form>

<style>
  .ui-ir{max-width:540px;background:#fff;border:1px solid #eaeded;border-radius:4px;padding:24px 26px;font:14px/1.5 "Amazon Ember","Helvetica Neue",-apple-system,sans-serif;color:#0f1b2d}
  .ui-ir h3{margin:0 0 4px;font:600 18px inherit}
  .ui-ir>p{margin:0 0 18px;color:#545b64;font-size:13px}
  .ui-ir fieldset{border:0;padding:0;margin:0 0 18px}
  .ui-ir legend{font:600 12px inherit;color:#0f1b2d;margin-bottom:8px;padding:0;letter-spacing:.02em}
  .ui-ir__chips{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
  .ui-ir__chips label{position:relative;cursor:pointer}
  .ui-ir__chips input{position:absolute;opacity:0;pointer-events:none}
  .ui-ir__chips span{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 6px 10px;border:1px solid #d5dbdb;border-radius:4px;background:#fff;font-size:12px;color:#0f1b2d;text-align:center;transition:.12s;font-weight:500}
  .ui-ir__chips span i{font-size:22px;font-style:normal;line-height:1}
  .ui-ir__chips label:hover span{border-color:#ec7211;background:#fff8f3}
  .ui-ir__chips input:checked+span{border-color:#ec7211;background:#fff3e9;color:#ec7211;box-shadow:0 0 0 1px #ec7211 inset}
  .ui-ir__role{display:flex;flex-direction:column;gap:5px;font-size:12px;font-weight:600;color:#0f1b2d;margin-bottom:16px}
  .ui-ir__role select{padding:8px 10px;border:1px solid #aab7b8;border-radius:2px;font:14px inherit;color:#0f1b2d;background:#fff;outline:none}
  .ui-ir__role select:focus{border-color:#ec7211;box-shadow:0 0 0 1px #ec7211}
  .ui-ir__cta{padding:9px 22px;background:linear-gradient(180deg,#ec7211,#d05c0a);color:#fff;border:1px solid #c45e0a;border-radius:2px;font:600 13px inherit;cursor:pointer;box-shadow:inset 0 1px 0 rgba(255,255,255,.2)}
  .ui-ir__cta:hover{background:linear-gradient(180deg,#d05c0a,#b34d08)}
  @media(max-width:520px){.ui-ir__chips{grid-template-columns:repeat(2,1fr)}}
</style>`,
    },
    {
      name: 'Floating Chat Bubble',
      nameJa: 'フローティング チャットバブル',
      desc: '右下に常駐する丸ボタンを開くと、名前と用件を送れるミニフォームが出現する。',
      detail: 'すべてのページの右下に常駐するフローティングチャットボタンです。閉じている時は色付きの丸ボタンだけが見え、クリックで小さなチャット風フォーム(名前+用件+送信)に展開します。Intercom・Drift・Crisp などのカスタマーメッセージング系で確立されたパターンで、サイト訪問中にいつでも問い合わせできる導線として有効。「営業時間内なら〇分で返信」のような目安を冒頭に出すと、回答期待値を整えられます。',
      descEn: 'A bottom-right round button that expands into a mini form with name and message.',
      detailEn: 'A persistent bottom-right floating chat button. Closed state shows just a colored circle; click it and a small chat-style mini form (name + message + send) slides up. Patterns popularized by Intercom, Drift, and Crisp — it gives visitors a "I can ask any time" entry point throughout the site. Including an "average reply in N minutes" line at the top calibrates expectations and bumps response feel.',
      code: `<!-- Inspired by Intercom Messenger -->
<div class="ui-fc" id="fc">
  <button class="ui-fc__btn" id="fcBtn" aria-label="Open chat">
    <svg viewBox="0 0 28 28" width="26" height="26" fill="#fff"><path d="M14 2C7.4 2 2 6.7 2 12.5c0 2.7 1.2 5.2 3.2 7L4 23l4-1.3c1.8.9 3.8 1.3 6 1.3 6.6 0 12-4.7 12-10.5S20.6 2 14 2z"/></svg>
    <span class="ui-fc__badge">1</span>
  </button>
  <div class="ui-fc__panel" id="fcPanel">
    <header>
      <div class="ui-fc__avatars"><span style="background:#7d3cff">A</span><span style="background:#ff6b6b">R</span><span style="background:#36d399">N</span></div>
      <h4>Hi 👋 How can we help?</h4>
      <small>Avg reply in 4 min · Mon–Fri 9am–6pm JST</small>
      <button class="ui-fc__x" id="fcX">×</button>
    </header>
    <div class="ui-fc__body">
      <div class="ui-fc__msg">Hey there! Drop a question and we'll get back to you here or by email.</div>
      <label><input type="text" placeholder="Your name" value="Mei Yamada"></label>
      <label><textarea rows="3" placeholder="Type your message…">Is there a startup plan for teams under 10 people?</textarea></label>
      <button type="button" class="ui-fc__send">Send →</button>
    </div>
  </div>
</div>

<style>
  .ui-fc{position:relative;width:100%;height:380px;background:linear-gradient(135deg,#f5f7fb 0%,#e8edf5 100%);font:14px/1.5 "Inter",-apple-system,"Segoe UI",sans-serif;color:#1c2733;border-radius:8px;overflow:hidden}
  .ui-fc__btn{position:absolute;right:20px;bottom:20px;width:56px;height:56px;border-radius:50%;border:0;background:linear-gradient(135deg,#7d3cff,#5d2ed1);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(125,60,255,.4),0 2px 6px rgba(0,0,0,.15);transition:transform .2s;z-index:2}
  .ui-fc__btn:hover{transform:scale(1.06)}
  .ui-fc__badge{position:absolute;top:-2px;right:-2px;width:18px;height:18px;background:#ff3b3b;color:#fff;font:700 11px inherit;border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid #f5f7fb}
  .ui-fc__panel{position:absolute;right:20px;bottom:90px;width:300px;background:#fff;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.06);overflow:hidden;transform-origin:bottom right;animation:fcin .25s cubic-bezier(.2,.8,.2,1)}
  @keyframes fcin{from{opacity:0;transform:scale(.85) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}
  .ui-fc__panel header{padding:18px 18px 14px;background:linear-gradient(135deg,#7d3cff,#3a1aa0);color:#fff;position:relative}
  .ui-fc__avatars{display:flex;margin-bottom:10px}
  .ui-fc__avatars span{width:28px;height:28px;border-radius:50%;color:#fff;font:600 11px inherit;display:flex;align-items:center;justify-content:center;border:2px solid #fff;margin-left:-6px}
  .ui-fc__avatars span:first-child{margin-left:0}
  .ui-fc__panel h4{margin:0 0 2px;font:600 16px inherit}
  .ui-fc__panel small{font-size:11.5px;opacity:.8}
  .ui-fc__x{position:absolute;right:10px;top:10px;background:transparent;border:0;color:#fff;font:300 22px inherit;cursor:pointer;line-height:1;opacity:.7}
  .ui-fc__x:hover{opacity:1}
  .ui-fc__body{padding:14px 14px 16px}
  .ui-fc__msg{background:#f1f3f7;padding:10px 12px;border-radius:12px 12px 12px 2px;font-size:13px;color:#1c2733;margin-bottom:12px;line-height:1.4}
  .ui-fc__body label{display:block;margin-bottom:8px}
  .ui-fc__body input,.ui-fc__body textarea{width:100%;padding:9px 10px;border:1px solid #dfe3eb;border-radius:8px;font:13px inherit;color:#1c2733;outline:none;box-sizing:border-box;font-family:inherit;resize:none}
  .ui-fc__body input:focus,.ui-fc__body textarea:focus{border-color:#7d3cff;box-shadow:0 0 0 3px rgba(125,60,255,.15)}
  .ui-fc__send{width:100%;padding:10px;background:#7d3cff;color:#fff;border:0;border-radius:8px;font:600 13px inherit;cursor:pointer;margin-top:2px}
  .ui-fc__send:hover{background:#5d2ed1}
</style>

<script>
  (function(){
    const wrap=document.getElementById('fc');
    const btn=document.getElementById('fcBtn');
    const panel=document.getElementById('fcPanel');
    const x=document.getElementById('fcX');
    btn.addEventListener('click',()=>{panel.style.display=panel.style.display==='none'?'block':'none'});
    x.addEventListener('click',()=>{panel.style.display='none'});
  })();
</script>`,
    },
    {
      name: 'Office Locator Form',
      nameJa: 'オフィス検索フォーム',
      desc: '国セレクト+検索可能なオフィス一覧+選択中オフィスの連絡先表示が組になったコンタクト。',
      detail: 'グローバル企業のContactページで定番の「Office locator」UIです。左に国セレクトと検索可能なオフィス一覧、右に選択中のオフィスの住所・電話・代表メールを表示します。Accenture や Deloitte、IBM など各国に支社を持つ会社では、ユーザーが自分のリージョン担当に直接連絡できる導線として重要。リスト項目をクリックすると右ペインが切り替わるマスター/ディテール型のレイアウトが基本です。',
      descEn: 'A country selector plus a searchable office list, with the chosen office\'s contact details on the right.',
      detailEn: 'The "Office locator" UI that is a fixture on global companies\' Contact pages. A country selector and searchable office list on the left, the chosen office\'s address, phone, and reception email on the right. For firms with regional offices — Accenture, Deloitte, IBM, big-four consultancies — this is a critical path: it routes inbound to the right local team. The layout is essentially master/detail: clicking a list item swaps the right pane.',
      code: `<!-- Inspired by Deloitte / IBM office locator -->
<div class="ui-ol">
  <aside class="ui-ol__list">
    <label class="ui-ol__country">
      <span>Country / region</span>
      <select><option>Japan</option><option>United States</option><option>United Kingdom</option><option>Germany</option><option>Singapore</option></select>
    </label>
    <div class="ui-ol__search">
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="7" r="5"/><path d="M11 11l3 3"/></svg>
      <input type="search" placeholder="Search offices" value="">
    </div>
    <ul>
      <li><b>Tokyo · Marunouchi</b><small>1-chōme, Chiyoda-ku</small></li>
      <li class="is-on"><b>Tokyo · Roppongi</b><small>Roppongi Hills Mori Tower</small></li>
      <li><b>Osaka</b><small>Umeda Sky Building</small></li>
      <li><b>Nagoya</b><small>Midland Square</small></li>
      <li><b>Fukuoka</b><small>Tenjin Twin Building</small></li>
      <li><b>Sapporo</b><small>JR Tower Office Plaza</small></li>
    </ul>
  </aside>
  <section class="ui-ol__detail">
    <span class="ui-ol__tag">Selected office</span>
    <h3>Tokyo · Roppongi</h3>
    <p class="ui-ol__addr">Roppongi Hills Mori Tower, 31F<br>6-10-1 Roppongi, Minato-ku<br>Tokyo 106-6131, Japan</p>
    <dl class="ui-ol__meta">
      <div><dt>Phone</dt><dd>+81 (3) 6213-1000</dd></div>
      <div><dt>Reception</dt><dd>tokyo.roppongi@firm.com</dd></div>
      <div><dt>Hours</dt><dd>Mon–Fri, 9:00–18:00 JST</dd></div>
    </dl>
    <div class="ui-ol__map">
      <span class="ui-ol__pin"></span>
    </div>
    <button type="button" class="ui-ol__cta">Contact this office →</button>
  </section>
</div>

<style>
  .ui-ol{display:grid;grid-template-columns:240px 1fr;max-width:680px;background:#fff;border:1px solid #e0e0e0;border-radius:0;font:14px/1.5 "IBM Plex Sans","Helvetica Neue",-apple-system,sans-serif;color:#161616;overflow:hidden}
  .ui-ol__list{background:#f4f4f4;border-right:1px solid #e0e0e0;display:flex;flex-direction:column}
  .ui-ol__country{display:flex;flex-direction:column;gap:4px;padding:14px 14px 10px;font-size:11px;font-weight:600;color:#525252;letter-spacing:.02em;text-transform:uppercase}
  .ui-ol__country select{padding:8px 10px;border:1px solid #8d8d8d;background:#fff;font:14px inherit;color:#161616;border-radius:0;outline:none}
  .ui-ol__country select:focus{border-color:#0f62fe;box-shadow:0 0 0 1px #0f62fe inset}
  .ui-ol__search{position:relative;margin:0 14px 8px;background:#fff;border:1px solid #e0e0e0}
  .ui-ol__search svg{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:#525252}
  .ui-ol__search input{width:100%;border:0;padding:8px 8px 8px 30px;font:13px inherit;outline:none;background:transparent;color:#161616;box-sizing:border-box}
  .ui-ol__list ul{list-style:none;margin:0;padding:0;overflow-y:auto;flex:1}
  .ui-ol__list li{padding:10px 14px;cursor:pointer;border-left:3px solid transparent;border-bottom:1px solid #e8e8e8;transition:.12s}
  .ui-ol__list li:hover{background:#e8e8e8}
  .ui-ol__list li.is-on{background:#fff;border-left-color:#0f62fe}
  .ui-ol__list b{display:block;font:600 13px inherit;color:#161616}
  .ui-ol__list small{display:block;font-size:11.5px;color:#525252;margin-top:1px}
  .ui-ol__detail{padding:20px 24px 22px;background:#fff}
  .ui-ol__tag{font:600 10.5px inherit;color:#0f62fe;letter-spacing:.08em;text-transform:uppercase}
  .ui-ol__detail h3{margin:6px 0 8px;font:400 22px/1.2 inherit;letter-spacing:-.01em}
  .ui-ol__addr{margin:0 0 14px;color:#393939;font-size:13.5px;line-height:1.55}
  .ui-ol__meta{display:flex;flex-direction:column;gap:6px;margin:0 0 14px;font-size:13px}
  .ui-ol__meta div{display:flex;gap:10px;border-bottom:1px solid #f0f0f0;padding-bottom:5px}
  .ui-ol__meta dt{width:84px;color:#525252;margin:0;font-weight:500;font-size:12px}
  .ui-ol__meta dd{margin:0;color:#161616}
  .ui-ol__map{height:62px;background:linear-gradient(135deg,#e0eaff 0%,#cfe0ff 50%,#dde9ff 100%);position:relative;border:1px solid #e0e0e0;margin-bottom:14px;overflow:hidden}
  .ui-ol__map::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent 0 18px,rgba(255,255,255,.4) 18px 20px),repeating-linear-gradient(-45deg,transparent 0 26px,rgba(15,98,254,.08) 26px 27px)}
  .ui-ol__pin{position:absolute;left:54%;top:50%;transform:translate(-50%,-100%);width:14px;height:14px;border-radius:50% 50% 50% 0;background:#0f62fe;transform-origin:bottom;rotate:-45deg;box-shadow:0 2px 4px rgba(0,0,0,.25)}
  .ui-ol__pin::after{content:"";position:absolute;left:4px;top:4px;width:6px;height:6px;border-radius:50%;background:#fff}
  .ui-ol__cta{padding:10px 18px;background:#0f62fe;color:#fff;border:0;border-radius:0;font:500 13px inherit;cursor:pointer}
  .ui-ol__cta:hover{background:#0043ce}
  @media(max-width:560px){.ui-ol{grid-template-columns:1fr}.ui-ol__list{border-right:0;border-bottom:1px solid #e0e0e0}}
</style>`,
    },
  ],
}
