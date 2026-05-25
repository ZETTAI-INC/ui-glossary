/**
 * UI Parts Showcase (Display 2) — ready-to-use, copy-and-paste display components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-display-2',
  title: 'UIパーツ集(表示系2)',
  titleEn: 'Display Components 2',
  description: '情報を見せる・伝えるUIパーツの第二弾。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Stat Card',
      nameJa: '統計カード',
      desc: '数値+ラベル+前期比などのKPI表示カード。ダッシュボードで定番。',
      detail: 'スタットカードは、売上、ユーザー数、コンバージョン率といった重要指標(KPI)を一目で見せるカード型のUIです。大きな数値を主役にして、その下や横にラベル・前期比・トレンドの矢印などを添えるのが定石です。管理画面のダッシュボード冒頭に並べることで、運用担当者が今日の状況をひと目でつかめます。色や上下矢印で「増えた・減った」が直感的に伝わるよう設計するのがポイントです。',
      descEn: 'A KPI card showing a value, label, and a comparison like "+12% vs. yesterday".',
      detailEn: 'A stat card spotlights one key metric — revenue, sign-ups, conversion rate — in a single card. The big number takes center stage, with a small label, period-over-period change, and trend arrow positioned nearby. Lining up a row of these at the top of a dashboard lets operators take in today\'s status at a glance. Use color and up/down arrows so "going up" or "going down" reads instantly without parsing numbers.',
      code: `/* Inspired by Stripe */
<div class="ui-stats">
  <div class="ui-stat">
    <span class="ui-stat__label">Gross volume</span>
    <strong class="ui-stat__value">$8,294.21</strong>
    <span class="ui-stat__sub">$6,184.92 previous period</span>
    <svg class="ui-stat__spark" viewBox="0 0 100 28" preserveAspectRatio="none">
      <path d="M0 22 L10 18 L20 20 L30 12 L40 14 L50 8 L60 10 L70 4 L80 7 L90 3 L100 6" fill="none" stroke="#635bff" stroke-width="1.5"/>
      <path d="M0 22 L10 18 L20 20 L30 12 L40 14 L50 8 L60 10 L70 4 L80 7 L90 3 L100 6 L100 28 L0 28 Z" fill="url(#g1)"/>
      <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#635bff" stop-opacity=".25"/><stop offset="1" stop-color="#635bff" stop-opacity="0"/></linearGradient></defs>
    </svg>
    <span class="ui-stat__delta ui-stat__delta--up">↑ 34.1%</span>
  </div>
  <div class="ui-stat">
    <span class="ui-stat__label">Successful payments</span>
    <strong class="ui-stat__value">1,247</strong>
    <span class="ui-stat__sub">982 previous period</span>
    <svg class="ui-stat__spark" viewBox="0 0 100 28" preserveAspectRatio="none">
      <path d="M0 20 L15 22 L30 16 L45 18 L60 10 L75 12 L90 6 L100 8" fill="none" stroke="#00d924" stroke-width="1.5"/>
    </svg>
    <span class="ui-stat__delta ui-stat__delta--up">↑ 27.0%</span>
  </div>
  <div class="ui-stat">
    <span class="ui-stat__label">Net volume from sales</span>
    <strong class="ui-stat__value">$7,892.06</strong>
    <span class="ui-stat__sub">$8,041.23 previous period</span>
    <svg class="ui-stat__spark" viewBox="0 0 100 28" preserveAspectRatio="none">
      <path d="M0 8 L15 10 L30 14 L45 12 L60 18 L75 16 L90 22 L100 20" fill="none" stroke="#df1b41" stroke-width="1.5"/>
    </svg>
    <span class="ui-stat__delta ui-stat__delta--down">↓ 1.9%</span>
  </div>
</div>

<style>
  .ui-stats{display:flex;flex-wrap:wrap;gap:1px;background:#e3e8ee;border-radius:8px;overflow:hidden;font:13px -apple-system,"Helvetica Neue",sans-serif;border:1px solid #e3e8ee;max-width:780px}
  .ui-stat{flex:1;min-width:200px;padding:18px 20px 16px;background:#fff;display:flex;flex-direction:column;gap:4px;position:relative}
  .ui-stat__label{font-size:13px;color:#697386;font-weight:500}
  .ui-stat__value{font-size:24px;font-weight:600;color:#1a1f36;letter-spacing:-.02em;margin-top:2px}
  .ui-stat__sub{font-size:12px;color:#8792a2}
  .ui-stat__spark{display:block;width:100%;height:28px;margin-top:6px}
  .ui-stat__delta{display:inline-flex;align-items:center;gap:2px;font-size:12px;font-weight:600;position:absolute;top:18px;right:20px}
  .ui-stat__delta--up{color:#00813d}
  .ui-stat__delta--down{color:#df1b41}
</style>`,
    },
    {
      name: 'Timeline',
      nameJa: 'タイムライン',
      desc: '縦並びの時系列イベント表示。履歴・更新ログなど。',
      detail: 'タイムラインは、出来事を発生順に縦に並べて見せるUIです。各イベントには日付・タイトル・短い説明が付き、左側の縦線と丸印でつながった見た目になります。注文ステータスの進捗、製品の更新履歴、社員の経歴、ブログのバージョン履歴など、時間の流れに沿って物事を理解させたい場面で使われます。完了済みのものを色付きで、未来のものをグレーで表すと、現在地が分かりやすくなります。',
      descEn: 'A vertical list of events arranged chronologically — great for histories and changelogs.',
      detailEn: 'A timeline stacks events in chronological order down the page. Each item shows a date, title, and short description, connected by a vertical line and dot on the left. It is the natural choice when users need to grasp something over time: order tracking, product changelogs, career history, blog version logs. Tinting finished items with a brand color while keeping upcoming ones gray makes the current step pop out without extra words.',
      code: `/* Inspired by GitHub */
<ol class="ui-timeline">
  <li class="ui-timeline__item">
    <span class="ui-timeline__icon ui-timeline__icon--commit">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#fff"><path d="M11.93 8.5a4 4 0 01-7.86 0H0v-1h4.07a4 4 0 017.86 0H16v1h-4.07zM8 11a3 3 0 100-6 3 3 0 000 6z"/></svg>
    </span>
    <div class="ui-timeline__card">
      <div class="ui-timeline__row"><strong>shun-fujieda</strong> pushed 3 commits to <a href="#">main</a></div>
      <ul class="ui-timeline__commits">
        <li><code>a7f2c1d</code> Fix carousel scroll snap on iOS Safari</li>
        <li><code>3e8b9f0</code> Add Linear-inspired empty state component</li>
        <li><code>92d4ae5</code> Bump tailwindcss from 3.4.1 to 3.4.3</li>
      </ul>
      <span class="ui-timeline__meta">2 hours ago</span>
    </div>
  </li>
  <li class="ui-timeline__item">
    <span class="ui-timeline__icon ui-timeline__icon--pr">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#fff"><path d="M1.5 3.25a2.25 2.25 0 113 2.122v5.256a2.25 2.25 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.25 2.25 0 101.5 0V5A2.5 2.5 0 0011 2.5z"/></svg>
    </span>
    <div class="ui-timeline__card">
      <div class="ui-timeline__row"><strong>aiko-t</strong> opened pull request <a href="#">#284</a></div>
      <div class="ui-timeline__title">Refactor showcase data loader for code-splitting</div>
      <span class="ui-timeline__meta">Yesterday at 4:32 PM</span>
    </div>
  </li>
  <li class="ui-timeline__item">
    <span class="ui-timeline__icon ui-timeline__icon--issue">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#fff"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/><path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/></svg>
    </span>
    <div class="ui-timeline__card">
      <div class="ui-timeline__row"><strong>marcus.r</strong> closed issue <a href="#">#271</a></div>
      <div class="ui-timeline__title">Drawer animation jank on Chromium 124</div>
      <span class="ui-timeline__meta">2 days ago</span>
    </div>
  </li>
</ol>

<style>
  .ui-timeline{list-style:none;padding:0;margin:0;max-width:520px;font:14px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#1f2328}
  .ui-timeline__item{position:relative;padding:0 0 16px 40px}
  .ui-timeline__item::before{content:"";position:absolute;left:13px;top:28px;bottom:0;width:2px;background:#d1d9e0}
  .ui-timeline__item:last-child::before{display:none}
  .ui-timeline__icon{position:absolute;left:0;top:6px;width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center}
  .ui-timeline__icon--commit{background:#1f883d}
  .ui-timeline__icon--pr{background:#8250df}
  .ui-timeline__icon--issue{background:#cf222e}
  .ui-timeline__card{padding:10px 14px;background:#fff;border:1px solid #d1d9e0;border-radius:6px}
  .ui-timeline__row{font-size:13px;color:#59636e}
  .ui-timeline__row strong{color:#1f2328;font-weight:600}
  .ui-timeline__row a{color:#0969da;text-decoration:none;font-weight:600}
  .ui-timeline__row a:hover{text-decoration:underline}
  .ui-timeline__commits{list-style:none;padding:8px 0 4px;margin:6px 0 0;border-top:1px solid #d1d9e0;font-size:13px;color:#1f2328}
  .ui-timeline__commits li{padding:3px 0;display:flex;gap:8px;align-items:baseline}
  .ui-timeline__commits code{font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#0969da;background:transparent;flex:none}
  .ui-timeline__title{margin-top:4px;font-size:14px;color:#1f2328;font-weight:600}
  .ui-timeline__meta{display:block;margin-top:6px;font-size:12px;color:#59636e}
</style>`,
    },
    {
      name: 'Pricing Card',
      nameJa: '料金プランカード',
      desc: '価格・特徴リスト・CTAボタン入りのプラン比較カード。',
      detail: '料金プランカードは、サブスクやSaaSの「フリー / スタンダード / プロ」のような複数プランを並べて比較してもらうためのUIです。価格を大きく見せ、含まれる機能を箇条書きで並べ、選んでもらいたい推しプランは枠線や「おすすめ」バッジで強調するのが定石です。下部にCTAボタンを置き、迷いなく申し込みに進めるようにします。3プラン横並びが最も比較しやすく、ランディングページで頻繁に登場します。',
      descEn: 'A side-by-side comparison card showing a plan\'s price, features, and a sign-up button.',
      detailEn: 'A pricing card helps users compare subscription tiers like "Free / Standard / Pro" at a glance. Make the price the biggest element, list included features as bullets, and highlight your recommended plan with a colored border or a "Most popular" badge. A clear CTA button at the bottom removes friction from signing up. Three plans across a row is the easiest layout to compare, which is why you see it so often on landing pages.',
      code: `/* Inspired by Vercel */
<div class="ui-pricing">
  <article class="ui-plan">
    <h3 class="ui-plan__name">Hobby</h3>
    <p class="ui-plan__tag">For personal projects.</p>
    <div class="ui-plan__price">$0<small>/month</small></div>
    <button type="button" class="ui-plan__btn">Start Deploying</button>
    <ul class="ui-plan__features">
      <li>100 GB Fast Data Transfer</li>
      <li>100 hr Build Execution / mo</li>
      <li>Serverless Functions</li>
      <li>Community Support</li>
    </ul>
  </article>
  <article class="ui-plan ui-plan--featured">
    <span class="ui-plan__badge">Most popular</span>
    <h3 class="ui-plan__name">Pro</h3>
    <p class="ui-plan__tag">For small teams shipping production apps.</p>
    <div class="ui-plan__price">$20<small>/user/month</small></div>
    <button type="button" class="ui-plan__btn ui-plan__btn--solid">Upgrade to Pro</button>
    <ul class="ui-plan__features">
      <li>1 TB Fast Data Transfer</li>
      <li>Unlimited Preview Deployments</li>
      <li>Edge Functions and Edge Middleware</li>
      <li>Email Support</li>
      <li>Advanced Analytics</li>
    </ul>
  </article>
  <article class="ui-plan">
    <h3 class="ui-plan__name">Enterprise</h3>
    <p class="ui-plan__tag">For large teams and businesses.</p>
    <div class="ui-plan__price ui-plan__price--custom">Custom</div>
    <button type="button" class="ui-plan__btn">Contact Sales</button>
    <ul class="ui-plan__features">
      <li>Everything in Pro</li>
      <li>SAML SSO and HIPAA BAA</li>
      <li>SLA-backed uptime</li>
      <li>24/7 Priority Support</li>
      <li>Dedicated Solutions Engineer</li>
    </ul>
  </article>
</div>

<style>
  .ui-pricing{display:flex;flex-wrap:wrap;gap:16px;font:14px -apple-system,BlinkMacSystemFont,"Inter",sans-serif;color:#fff;background:#000;padding:24px;border-radius:12px}
  .ui-plan{position:relative;flex:1;min-width:230px;padding:24px;background:#0a0a0a;border:1px solid #1f1f1f;border-radius:10px;display:flex;flex-direction:column}
  .ui-plan--featured{border-color:#fff}
  .ui-plan__badge{position:absolute;top:-1px;right:16px;transform:translateY(-50%);background:#fff;color:#000;font:600 11px "Inter",sans-serif;padding:3px 8px;border-radius:4px;letter-spacing:.01em}
  .ui-plan__name{margin:0 0 6px;font-size:18px;font-weight:600;letter-spacing:-.01em}
  .ui-plan__tag{margin:0 0 20px;font-size:13px;color:#a1a1a1;line-height:1.5;min-height:38px}
  .ui-plan__price{font-size:36px;font-weight:600;letter-spacing:-.03em;margin-bottom:20px;line-height:1}
  .ui-plan__price small{font-size:13px;font-weight:400;color:#a1a1a1;margin-left:4px;letter-spacing:0}
  .ui-plan__price--custom{font-size:30px}
  .ui-plan__btn{width:100%;padding:9px 14px;background:transparent;color:#fff;border:1px solid #2e2e2e;border-radius:6px;font:500 14px "Inter",sans-serif;cursor:pointer;transition:.15s;margin-bottom:24px}
  .ui-plan__btn:hover{background:#1a1a1a;border-color:#3a3a3a}
  .ui-plan__btn--solid{background:#fff;color:#000;border-color:#fff}
  .ui-plan__btn--solid:hover{background:#ededed;border-color:#ededed}
  .ui-plan__features{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;font-size:13px;color:#ededed;flex:1}
  .ui-plan__features li{padding-left:22px;position:relative;line-height:1.5}
  .ui-plan__features li::before{content:"";position:absolute;left:0;top:5px;width:14px;height:14px;background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2300d924'><path d='M6.5 11.5L3 8l1-1 2.5 2.5L12 4l1 1z'/></svg>") no-repeat center/contain}
</style>`,
    },
    {
      name: 'Testimonial',
      nameJa: 'お客様の声',
      desc: '顧客の写真+引用文+名前・所属を載せるカード。',
      detail: 'テスティモニアル(お客様の声)は、サービスを実際に使った顧客の声を写真・名前・所属とともに載せるUIです。「この人が言っているなら信頼できる」と感じてもらう、いわゆる社会的証明(ソーシャルプルーフ)の役割を持ちます。ランディングページの中盤に並べるのが定番で、3〜4件をカード状に並べたり、カルーセルで切り替えたりします。引用符マークや星評価を添えると、本物っぽさと説得力が増します。',
      descEn: 'A card with a customer\'s photo, quote, and name/role — used as social proof.',
      detailEn: 'A testimonial features a real customer\'s quote along with their photo, name, and role. It works as "social proof" — readers think, "if this person endorses it, I can trust it too." A common placement is the middle of a landing page, either as a row of three or four cards or in a carousel. Adding quotation marks and a star rating can heighten the sense of authenticity and make the testimonial more persuasive.',
      code: `/* Inspired by Stripe customer stories */
<div class="ui-testimonials">
  <figure class="ui-testimonial">
    <div class="ui-testimonial__logo">FIGMA</div>
    <blockquote class="ui-testimonial__text">We replaced four billing tools with one platform. Our finance team now closes the books in two days instead of two weeks, and engineers spend zero time on payments code.</blockquote>
    <figcaption class="ui-testimonial__person">
      <img class="ui-testimonial__avatar" alt="" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'><rect width='44' height='44' fill='%23625afa'/><text x='22' y='28' font-size='18' font-family='Inter,sans-serif' font-weight='600' fill='white' text-anchor='middle'>PS</text></svg>"/>
      <div>
        <strong class="ui-testimonial__name">Praveer Sinha</strong>
        <span class="ui-testimonial__role">VP of Finance, Figma</span>
      </div>
    </figcaption>
    <a class="ui-testimonial__link" href="#">Read customer story →</a>
  </figure>
  <figure class="ui-testimonial">
    <div class="ui-testimonial__logo">SHOPIFY</div>
    <blockquote class="ui-testimonial__text">Going live in 14 countries took a single afternoon. The fraud detection alone has saved us roughly $1.2M in chargebacks since rollout.</blockquote>
    <figcaption class="ui-testimonial__person">
      <img class="ui-testimonial__avatar" alt="" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'><rect width='44' height='44' fill='%2300d924'/><text x='22' y='28' font-size='18' font-family='Inter,sans-serif' font-weight='600' fill='white' text-anchor='middle'>HM</text></svg>"/>
      <div>
        <strong class="ui-testimonial__name">Hana Morgenstern</strong>
        <span class="ui-testimonial__role">Head of Payments, Shopify</span>
      </div>
    </figcaption>
    <a class="ui-testimonial__link" href="#">Read customer story →</a>
  </figure>
</div>

<style>
  .ui-testimonials{display:flex;flex-wrap:wrap;gap:20px;font:-apple-system,BlinkMacSystemFont,"Inter",sans-serif;color:#1a1f36;background:linear-gradient(180deg,#f6f9fc 0%,#fff 100%);padding:28px;border-radius:12px}
  .ui-testimonial{flex:1;min-width:280px;margin:0;padding:28px;background:#fff;border-radius:8px;box-shadow:0 7px 14px 0 rgba(60,66,87,.06),0 3px 6px 0 rgba(60,66,87,.06);display:flex;flex-direction:column;gap:16px}
  .ui-testimonial__logo{font:800 13px -apple-system,sans-serif;letter-spacing:.18em;color:#635bff}
  .ui-testimonial__text{margin:0;font:500 17px/1.55 Camphor,Open Sans,"Segoe UI",sans-serif;color:#1a1f36;letter-spacing:-.01em}
  .ui-testimonial__person{display:flex;align-items:center;gap:12px;margin-top:auto;padding-top:8px;border-top:1px solid #e3e8ee}
  .ui-testimonial__avatar{width:40px;height:40px;border-radius:50%;flex:none}
  .ui-testimonial__name{display:block;font-size:14px;font-weight:600;color:#1a1f36}
  .ui-testimonial__role{display:block;font-size:13px;color:#697386;margin-top:2px}
  .ui-testimonial__link{font:500 14px -apple-system,sans-serif;color:#635bff;text-decoration:none}
  .ui-testimonial__link:hover{color:#0a2540}
</style>`,
    },
    {
      name: 'Hero Section',
      nameJa: 'ヒーローセクション',
      desc: 'トップページの大きな見出し+説明+CTAボタンのブロック。',
      detail: 'ヒーローセクションは、Webサイトのトップ画面で最初に目に飛び込む大きなブロックで、サービスの第一印象を決める重要な部品です。大きなキャッチコピー、補足の説明文、行動を促すCTAボタン、背景の画像やグラデーションで構成されます。3秒以内に「何のサービスか」「自分に関係あるか」を伝えるのが目標で、コピーは短く、ボタン文言は具体的に(「無料で始める」など)するのが鉄則です。',
      descEn: 'The big top-of-page block with a headline, description, and call-to-action buttons.',
      detailEn: 'The hero section is the large block at the top of a homepage — the first thing visitors see, and the part that sets the tone for the whole site. It usually pairs a bold headline, supporting description, prominent CTA buttons, and a background image or gradient. The goal is to communicate "what this service is" and "why it matters to me" within three seconds. Keep the copy short and make button labels specific, like "Get started for free" instead of just "Submit".',
      code: `/* Inspired by Linear */
<section class="ui-hero">
  <div class="ui-hero__grid" aria-hidden="true"></div>
  <div class="ui-hero__inner">
    <a class="ui-hero__eyebrow" href="#">
      <span class="ui-hero__pill">New</span>
      Introducing Linear 2025 — Built for the next decade of work
      <span class="ui-hero__arrow">→</span>
    </a>
    <h1 class="ui-hero__title">Linear is a purpose-built tool for planning and building products.</h1>
    <p class="ui-hero__lead">Meet the system for modern software development. Streamline issues, projects, and product roadmaps.</p>
    <div class="ui-hero__actions">
      <button type="button" class="ui-hero__btn ui-hero__btn--primary">Get started</button>
      <button type="button" class="ui-hero__btn ui-hero__btn--ghost">Open Linear<span>→</span></button>
    </div>
    <p class="ui-hero__note">Free for teams up to 10 — no credit card required</p>
  </div>
</section>

<style>
  .ui-hero{position:relative;padding:80px 24px 96px;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(94,106,210,.25) 0%,transparent 70%),#08090a;border-radius:16px;overflow:hidden;font:"Inter",-apple-system,BlinkMacSystemFont,sans-serif;color:#f7f8f8;text-align:center}
  .ui-hero__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse 70% 50% at 50% 0%,#000 30%,transparent 80%)}
  .ui-hero__inner{position:relative;max-width:680px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:24px}
  .ui-hero__eyebrow{display:inline-flex;align-items:center;gap:8px;padding:4px 12px 4px 4px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:999px;font:500 13px "Inter",sans-serif;color:#d0d6e0;text-decoration:none;transition:.15s}
  .ui-hero__eyebrow:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.14)}
  .ui-hero__pill{background:#5e6ad2;color:#fff;font:600 11px "Inter",sans-serif;padding:2px 8px;border-radius:999px;letter-spacing:.01em}
  .ui-hero__arrow{color:#8a8f98}
  .ui-hero__title{margin:0;font-size:56px;font-weight:600;line-height:1.05;letter-spacing:-.03em;color:#f7f8f8;max-width:780px}
  .ui-hero__lead{margin:0;font-size:18px;line-height:1.55;color:#8a8f98;max-width:560px;font-weight:400}
  .ui-hero__actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:8px;justify-content:center}
  .ui-hero__btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:8px;font:500 14px "Inter",sans-serif;cursor:pointer;border:1px solid transparent;transition:.15s;letter-spacing:-.01em}
  .ui-hero__btn--primary{background:#5e6ad2;color:#fff;box-shadow:inset 0 1px 0 0 rgba(255,255,255,.16)}
  .ui-hero__btn--primary:hover{background:#7170ff}
  .ui-hero__btn--ghost{background:transparent;color:#f7f8f8;border-color:rgba(255,255,255,.12)}
  .ui-hero__btn--ghost:hover{background:rgba(255,255,255,.04)}
  .ui-hero__btn--ghost span{color:#8a8f98}
  .ui-hero__note{margin:8px 0 0;font-size:13px;color:#62666d}
  @media(max-width:600px){.ui-hero__title{font-size:36px}.ui-hero__lead{font-size:16px}}
</style>`,
    },
    {
      name: 'Code Block',
      nameJa: 'コードブロック',
      desc: 'コピーボタン付きのコード表示ブロック。等幅フォント・行番号付き。',
      detail: 'コードブロックは、技術ドキュメントやチュートリアルでサンプルコードを見せるためのUIです。等幅フォントで表示し、行番号を添えると参照しやすくなります。右上に「コピー」ボタンを置き、クリックするだけでクリップボードへコピーできるようにするのが定番です。背景を黒っぽいダークテーマにするとシンタックスハイライトが映え、コーディング画面の雰囲気で読み手の集中も高まります。',
      descEn: 'A copy-friendly code display block with monospaced font and line numbers.',
      detailEn: 'A code block displays sample code in technical docs and tutorials. A monospaced font lines characters up neatly, and adding line numbers makes referencing easier. Putting a "Copy" button in the top-right corner so users can grab the snippet with one click is the modern standard. A dark background makes syntax highlighting pop and gives readers that "editor" vibe, which helps them concentrate on the code itself.',
      code: `/* Inspired by GitHub */
<div class="ui-code">
  <div class="ui-code__head">
    <div class="ui-code__path">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25V4.75A1.75 1.75 0 0014.25 3H7.5L6.06 1.56A1.75 1.75 0 004.81 1H1.75z"/></svg>
      <span>src/utils/<strong>format-date.ts</strong></span>
    </div>
    <button type="button" class="ui-code__copy" onclick="copyCode(this)" aria-label="Copy">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25z"/></svg>
    </button>
  </div>
  <pre class="ui-code__body"><code><span class="ln">1</span><span class="cm">// Formats an ISO date into "Mar 14, 2025"</span>
<span class="ln">2</span><span class="kw">export function</span> <span class="fn">formatDate</span>(<span class="pa">iso</span>: <span class="ty">string</span>): <span class="ty">string</span> {
<span class="ln">3</span>  <span class="kw">const</span> d = <span class="kw">new</span> <span class="ty">Date</span>(iso);
<span class="ln">4</span>  <span class="kw">return</span> d.<span class="fn">toLocaleDateString</span>(<span class="st">"en-US"</span>, {
<span class="ln">5</span>    month: <span class="st">"short"</span>,
<span class="ln">6</span>    day: <span class="st">"numeric"</span>,
<span class="ln">7</span>    year: <span class="st">"numeric"</span>,
<span class="ln">8</span>  });
<span class="ln">9</span>}</code></pre>
</div>

<style>
  .ui-code{background:#0d1117;border:1px solid #30363d;border-radius:6px;overflow:hidden;font:13px ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,monospace;max-width:580px;color:#e6edf3}
  .ui-code__head{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:#161b22;border-bottom:1px solid #30363d}
  .ui-code__path{display:inline-flex;align-items:center;gap:8px;color:#7d8590;font:13px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
  .ui-code__path strong{font-weight:600;color:#e6edf3}
  .ui-code__copy{padding:5px 7px;background:transparent;border:0;color:#7d8590;border-radius:4px;cursor:pointer;transition:.12s;display:inline-flex;align-items:center;justify-content:center}
  .ui-code__copy:hover{background:#30363d;color:#e6edf3}
  .ui-code__copy.is-copied{color:#3fb950}
  .ui-code__body{margin:0;padding:14px 0;overflow-x:auto;line-height:1.6;background:#0d1117}
  .ui-code__body code{font:inherit;color:inherit;white-space:pre}
  .ui-code .ln{display:inline-block;width:24px;color:#6e7681;user-select:none;text-align:right;margin-right:18px;padding-left:8px}
  .ui-code .kw{color:#ff7b72}
  .ui-code .st{color:#a5d6ff}
  .ui-code .fn{color:#d2a8ff}
  .ui-code .pa{color:#ffa657}
  .ui-code .ty{color:#79c0ff}
  .ui-code .cm{color:#8b949e;font-style:italic}
</style>

<script>
  function copyCode(btn){
    const code=btn.closest('.ui-code').querySelector('code').innerText.replace(/^\\s*\\d+\\s/gm,'');
    navigator.clipboard.writeText(code).then(()=>{
      btn.classList.add('is-copied');
      btn.innerHTML='<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>';
      setTimeout(()=>{btn.classList.remove('is-copied');btn.innerHTML='<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25z"/><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25z"/></svg>'},1600);
    });
  }
</script>`,
    },
    {
      name: 'List Group',
      nameJa: 'リストグループ',
      desc: 'アイコン+タイトル+説明+矢印の縦並びリスト。設定画面で頻出。',
      detail: 'リストグループは、アイコン・タイトル・補足説明・右端の矢印を1行に並べた、縦に積み重なるリスト型UIです。スマホアプリやWebの設定画面、メニュー一覧、ヘルプ記事一覧などで定番の形式で、各行をタップすると詳細画面に遷移します。iOSの設定アプリが代表例で、左にアイコン、中央に項目名、右に「>」マークが並ぶ統一感のあるデザインが特徴です。情報を整理して見せたいときに最適です。',
      descEn: 'A vertical list of rows with icon, title, description, and a right-pointing chevron — a staple of settings screens.',
      detailEn: 'A list group stacks rows with an icon, title, supporting text, and a "›" chevron at the right edge. It is a familiar pattern for mobile and web settings, menus, and help center indexes — tapping a row leads to a detail screen. The iOS Settings app is the classic example, with its consistent icon-left, label-middle, chevron-right layout. It is a great choice whenever you need to lay out clearly organized navigation items.',
      code: `/* Inspired by iOS Settings */
<div class="ui-list-wrap">
  <h2 class="ui-list-wrap__title">Settings</h2>
  <ul class="ui-list">
    <li class="ui-list__item">
      <span class="ui-list__icon" style="background:linear-gradient(180deg,#ff5e3a,#ff2a68)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 22a2 2 0 002-2h-4a2 2 0 002 2zm6.5-6V11c0-3.07-1.63-5.64-4.5-6.32V4a2 2 0 10-4 0v.68C7.13 5.36 5.5 7.92 5.5 11v5L4 17.5V19h16v-1.5L18.5 16z"/></svg>
      </span>
      <div class="ui-list__body"><span class="ui-list__title">Notifications</span></div>
      <span class="ui-list__chev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="#c7c7cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </li>
    <li class="ui-list__item">
      <span class="ui-list__icon" style="background:linear-gradient(180deg,#ff9500,#ff5e00)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 2v10l4.24 4.24 1.06-1.06L13 11.17V2h-1z"/><circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="2"/></svg>
      </span>
      <div class="ui-list__body"><span class="ui-list__title">Focus</span></div>
      <span class="ui-list__value">Do Not Disturb</span>
      <span class="ui-list__chev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="#c7c7cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </li>
    <li class="ui-list__item">
      <span class="ui-list__icon" style="background:linear-gradient(180deg,#4cd964,#2ac030)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M20.5 3.5L9 15 4.5 10.5 3 12l6 6 13-13z"/></svg>
      </span>
      <div class="ui-list__body"><span class="ui-list__title">Screen Time</span></div>
      <span class="ui-list__chev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="#c7c7cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </li>
    <li class="ui-list__item">
      <span class="ui-list__icon" style="background:linear-gradient(180deg,#8e8e93,#636366)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M19.4 13a7.5 7.5 0 000-2l2.1-1.6-2-3.5-2.5 1a7.5 7.5 0 00-1.7-1L15 3h-4l-.3 2.9a7.5 7.5 0 00-1.7 1L6.5 6 4.5 9.4 6.6 11a7.5 7.5 0 000 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1L11 21h4l.3-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5z"/><circle cx="13" cy="12" r="2.5" fill="#636366"/></svg>
      </span>
      <div class="ui-list__body"><span class="ui-list__title">General</span></div>
      <span class="ui-list__chev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="#c7c7cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </li>
    <li class="ui-list__item">
      <span class="ui-list__icon" style="background:linear-gradient(180deg,#5ac8fa,#007aff)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"/></svg>
      </span>
      <div class="ui-list__body"><span class="ui-list__title">Privacy &amp; Security</span></div>
      <span class="ui-list__chev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="#c7c7cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </li>
  </ul>
</div>

<style>
  .ui-list-wrap{max-width:380px;font:17px -apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica Neue",sans-serif;color:#000;background:#f2f2f7;padding:20px 16px;border-radius:14px}
  .ui-list-wrap__title{margin:0 4px 16px;font:700 34px/1.1 -apple-system,"SF Pro Display",sans-serif;letter-spacing:.01em}
  .ui-list{list-style:none;padding:0;margin:0;background:#fff;border-radius:10px;overflow:hidden}
  .ui-list__item{display:flex;align-items:center;gap:12px;padding:9px 16px 9px 12px;cursor:pointer;position:relative;min-height:44px}
  .ui-list__item:not(:last-child)::after{content:"";position:absolute;left:60px;right:0;bottom:0;height:.5px;background:#c6c6c8}
  .ui-list__item:active{background:#d1d1d6}
  .ui-list__icon{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:7px;flex:none;box-shadow:0 1px 1px rgba(0,0,0,.08)}
  .ui-list__body{flex:1;min-width:0}
  .ui-list__title{font-size:17px;color:#000;letter-spacing:-.01em}
  .ui-list__value{font-size:17px;color:#8e8e93;letter-spacing:-.01em}
  .ui-list__chev{color:#c7c7cc;line-height:0;flex:none;margin-left:2px}
</style>`,
    },
    {
      name: 'Quote / Blockquote',
      nameJa: '引用ブロック',
      desc: '装飾的な引用符付きの引用テキスト表示。',
      detail: 'ブロッククォートは、他人の発言・書籍からの引用・印象的なフレーズなどを目立たせて表示するための装飾的なテキストブロックです。大きな引用符マーク、左側の縦線、少し大きめのフォントサイズ、斜体などで「これは本文ではなく引用」と一目で分かるようデザインします。記事やドキュメントで筆者の主張を補強したいとき、読者の手を一瞬止めたい印象的な一文を強調したいときに効果的です。',
      descEn: 'A decorated quotation block with quote marks for emphasizing cited text.',
      detailEn: 'A blockquote calls out borrowed text — somebody else\'s words, a book passage, or a memorable phrase. Designers signal "this is a quote, not the main text" through a big quotation mark, a vertical line on the left, a slightly larger font, or italics. It works well in articles or docs when you want to reinforce your argument with a citation, or simply pause the reader on a striking sentence so it really lands.',
      code: `/* Inspired by Medium */
<article class="ui-article">
  <p class="ui-article__p">When we started rebuilding the editor, we kept coming back to one question: what does it feel like to write without thinking about software? Every menu, every toolbar, every floating button is a tax on attention.</p>

  <blockquote class="ui-quote">
    <p class="ui-quote__text">The best interface is the one that disappears the moment you start using it.</p>
  </blockquote>

  <p class="ui-article__p">That principle shaped every decision that followed. We removed the formatting toolbar. We hid the word count. We trusted the writer to know what comes next — and to our surprise, they almost always did.</p>

  <blockquote class="ui-quote ui-quote--cite">
    <p class="ui-quote__text">Good writing is rewriting. Great writing is rewriting in public, with the courage to be wrong and the patience to be edited.</p>
    <footer class="ui-quote__cite">
      <span class="ui-quote__author">Annie Dillard</span>
      <span class="ui-quote__source">The Writing Life, 1989</span>
    </footer>
  </blockquote>

  <p class="ui-article__p">Six months in, the response from writers has been quieter than we expected — which, we've come to learn, is the highest compliment a tool can earn.</p>
</article>

<style>
  .ui-article{max-width:640px;font:20px/1.58 charter,Georgia,"Source Serif Pro","Lucida Bright",serif;color:rgb(41,41,41);padding:24px;background:#fff}
  .ui-article__p{margin:0 0 28px;letter-spacing:-.003em}
  .ui-quote{margin:32px 0 32px -22px;padding:0 0 0 22px;border-left:3px solid rgb(41,41,41);font-family:charter,Georgia,serif}
  .ui-quote__text{margin:0;font-size:24px;line-height:1.4;font-style:italic;color:rgb(41,41,41);font-weight:500;letter-spacing:-.012em}
  .ui-quote--cite .ui-quote__text{margin-bottom:14px}
  .ui-quote__cite{display:flex;flex-direction:column;gap:2px;font-style:normal;font-size:14px;font-family:sohne,"Helvetica Neue",sans-serif;color:rgb(117,117,117);line-height:1.4}
  .ui-quote__author{color:rgb(41,41,41);font-weight:500}
  .ui-quote__source{font-style:italic}
</style>`,
    },
  ],
}
