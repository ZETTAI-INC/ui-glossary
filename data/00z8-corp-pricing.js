/**
 * UI Parts Showcase (SaaS Pricing & Plans) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-pricing',
  title: '企業サイト 価格・プラン',
  titleEn: 'Pricing & Plans',
  description: 'Notion・Linear・Vercel・Google Cloud・AWS などのSaaS価格ページでよく見るUIをコピペで使えます。',
  terms: [
    {
      name: '3-Tier Pricing Card Row',
      nameJa: '3段階の価格カード(Free / Pro / Business)',
      desc: 'Free / Pro / Business の3枚を横並びにし、真ん中を「人気プラン」としてハイライトする定番レイアウト。',
      detail: 'SaaSの価格ページで最もよく見るパターンが、横並びの価格カード3枚です。左から無料・有料・上位プランの順に並べ、ユーザーに買ってほしい中央のプランだけ枠線や背景を変えて目立たせます。各カードには「プラン名・月額・1〜2行の説明・主な機能リスト・CTAボタン」を入れるのが鉄板構成です。価格は大きく、機能はチェックマーク付きで読みやすく並べると比較しやすくなります。',
      descEn: 'The classic three-card row — Free / Pro / Business — with the middle "most popular" plan visually elevated.',
      detailEn: 'A row of three pricing cards is the most common SaaS pricing layout you will see. Free sits on the left, the paid tier you want to push sits in the middle (highlighted with a border or contrasting background), and the upper tier sits on the right. Each card carries a plan name, price, one or two lines of description, a list of key features, and a CTA button. Keep the price large and the feature list scannable with check marks so visitors can compare at a glance.',
      code: `<!-- Inspired by Notion -->
<div class="ui-pr3">
  <div class="ui-pr3__card">
    <div class="ui-pr3__name">Free</div>
    <div class="ui-pr3__price"><span class="ui-pr3__amt">$0</span><span class="ui-pr3__per">/ month</span></div>
    <div class="ui-pr3__sub">For individuals organizing personal projects.</div>
    <a class="ui-pr3__cta ui-pr3__cta--ghost">Get Free →</a>
    <ul class="ui-pr3__feat">
      <li>Unlimited blocks for individuals</li>
      <li>7-day page history</li>
      <li>Invite up to 10 guests</li>
      <li>Basic page analytics</li>
    </ul>
  </div>
  <div class="ui-pr3__card ui-pr3__card--pop">
    <div class="ui-pr3__pop">Most popular</div>
    <div class="ui-pr3__name">Plus</div>
    <div class="ui-pr3__price"><span class="ui-pr3__amt">$10</span><span class="ui-pr3__per">/ seat / month</span></div>
    <div class="ui-pr3__sub">For small teams that ship together.</div>
    <a class="ui-pr3__cta ui-pr3__cta--solid">Start free trial →</a>
    <ul class="ui-pr3__feat">
      <li>Unlimited blocks for teams</li>
      <li>30-day page history</li>
      <li>Invite up to 100 guests</li>
      <li>Custom websites &amp; sites</li>
      <li>Sync databases with Jira, GitHub</li>
    </ul>
  </div>
  <div class="ui-pr3__card">
    <div class="ui-pr3__name">Business</div>
    <div class="ui-pr3__price"><span class="ui-pr3__amt">$18</span><span class="ui-pr3__per">/ seat / month</span></div>
    <div class="ui-pr3__sub">For companies running mission-critical work.</div>
    <a class="ui-pr3__cta ui-pr3__cta--ghost">Get Business →</a>
    <ul class="ui-pr3__feat">
      <li>Everything in Plus</li>
      <li>SAML SSO</li>
      <li>Private teamspaces</li>
      <li>Bulk PDF export</li>
      <li>Advanced page analytics</li>
    </ul>
  </div>
</div>

<style>
  .ui-pr3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;max-width:720px;padding:18px;font:14px ui-sans-serif,-apple-system,"Segoe UI",sans-serif;color:#37352f;background:#fff}
  .ui-pr3__card{position:relative;background:#fff;border:1px solid rgba(55,53,47,.12);border-radius:10px;padding:20px 18px;display:flex;flex-direction:column}
  .ui-pr3__card--pop{border:1.5px solid #37352f;box-shadow:0 4px 16px rgba(15,15,15,.08)}
  .ui-pr3__pop{position:absolute;top:-10px;left:18px;background:#37352f;color:#fff;font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;letter-spacing:.02em}
  .ui-pr3__name{font-size:15px;font-weight:600;color:#37352f;margin-bottom:10px}
  .ui-pr3__price{display:flex;align-items:baseline;gap:4px;margin-bottom:6px}
  .ui-pr3__amt{font-size:30px;font-weight:700;letter-spacing:-.02em;color:#191919}
  .ui-pr3__per{font-size:12px;color:rgba(55,53,47,.55)}
  .ui-pr3__sub{font-size:12.5px;color:rgba(55,53,47,.7);line-height:1.45;min-height:34px;margin-bottom:12px}
  .ui-pr3__cta{display:block;text-align:center;padding:8px 12px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;margin-bottom:14px;text-decoration:none}
  .ui-pr3__cta--ghost{background:#fff;color:#37352f;border:1px solid rgba(55,53,47,.18)}
  .ui-pr3__cta--ghost:hover{background:rgba(55,53,47,.04)}
  .ui-pr3__cta--solid{background:#37352f;color:#fff;border:1px solid #37352f}
  .ui-pr3__cta--solid:hover{background:#191919}
  .ui-pr3__feat{list-style:none;padding:0;margin:0;font-size:12.5px;color:#37352f;line-height:1.7}
  .ui-pr3__feat li{padding-left:18px;position:relative}
  .ui-pr3__feat li::before{content:"";position:absolute;left:2px;top:8px;width:8px;height:4px;border-left:1.8px solid #0f7b5a;border-bottom:1.8px solid #0f7b5a;transform:rotate(-45deg)}
</style>`,
    },
    {
      name: '4-Tier Pricing With Enterprise',
      nameJa: '4段階の価格カード(Enterprise付き)',
      desc: 'Free / Team / Business / Enterprise の4枚並び。最右だけ価格表示なしで「お問い合わせ」CTAにする型。',
      detail: '中堅〜大企業向けにEnterpriseプランを用意する場合は、4枚並びにして最右をお問い合わせCTAにするのがセオリーです。Enterpriseは利用規模や要件によって個別見積もりになるため、固定の月額を出さずに「Contact us」「Talk to sales」と書きます。ロゴ・SSO・SLAなど企業向けに刺さるキーワードを並べ、価格より「相談すれば対応できそう」という安心感を伝えるのが目的です。',
      descEn: 'Four cards in a row — Free / Team / Business / Enterprise — where only the last card swaps price for a "Contact us" CTA.',
      detailEn: 'When you serve mid-market and large customers, four cards with an Enterprise tier on the far right is the standard shape. Enterprise pricing is custom by definition, so instead of a monthly figure you show "Contact us" or "Talk to sales." Use the body of that card to list the trust signals enterprise buyers care about — SSO, audit logs, SLA, dedicated support — so the page communicates "we can scale to your needs" rather than a number.',
      code: `<!-- Inspired by Vercel -->
<div class="ui-pr4">
  <div class="ui-pr4__card">
    <div class="ui-pr4__name">Hobby</div>
    <div class="ui-pr4__price">$0</div>
    <div class="ui-pr4__per">For personal projects.</div>
    <a class="ui-pr4__cta">Start Deploying</a>
    <ul class="ui-pr4__feat">
      <li>100 GB bandwidth</li>
      <li>Preview deployments</li>
      <li>Community support</li>
    </ul>
  </div>
  <div class="ui-pr4__card ui-pr4__card--accent">
    <div class="ui-pr4__name">Pro</div>
    <div class="ui-pr4__price">$20<span class="ui-pr4__sm">/ user / mo</span></div>
    <div class="ui-pr4__per">For small teams shipping production.</div>
    <a class="ui-pr4__cta ui-pr4__cta--solid">Upgrade to Pro</a>
    <ul class="ui-pr4__feat">
      <li>1 TB bandwidth</li>
      <li>Password protection</li>
      <li>Email &amp; chat support</li>
      <li>Analytics included</li>
    </ul>
  </div>
  <div class="ui-pr4__card">
    <div class="ui-pr4__name">Business</div>
    <div class="ui-pr4__price">$50<span class="ui-pr4__sm">/ user / mo</span></div>
    <div class="ui-pr4__per">For growing companies.</div>
    <a class="ui-pr4__cta">Get Business</a>
    <ul class="ui-pr4__feat">
      <li>Everything in Pro</li>
      <li>SAML SSO</li>
      <li>Role-based access</li>
      <li>99.99% uptime SLA</li>
    </ul>
  </div>
  <div class="ui-pr4__card ui-pr4__card--ent">
    <div class="ui-pr4__name">Enterprise</div>
    <div class="ui-pr4__price ui-pr4__price--ent">Contact us</div>
    <div class="ui-pr4__per">For organizations with custom needs.</div>
    <a class="ui-pr4__cta ui-pr4__cta--ent">Talk to sales →</a>
    <ul class="ui-pr4__feat">
      <li>Dedicated infrastructure</li>
      <li>Custom SLA &amp; support</li>
      <li>SOC2 / HIPAA</li>
      <li>Solutions engineer</li>
    </ul>
  </div>
</div>

<style>
  .ui-pr4{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:720px;padding:14px;background:#000;font:13px -apple-system,"Inter",sans-serif;color:#ededed}
  .ui-pr4__card{background:#0a0a0a;border:1px solid #262626;border-radius:8px;padding:16px 14px;display:flex;flex-direction:column}
  .ui-pr4__card--accent{border-color:#3f3f3f;background:linear-gradient(180deg,#111 0%,#0a0a0a 60%)}
  .ui-pr4__card--ent{background:linear-gradient(135deg,#1a0d29 0%,#0a0a0a 60%);border-color:#3d2a5c}
  .ui-pr4__name{font-size:13px;font-weight:600;color:#ededed;margin-bottom:8px}
  .ui-pr4__price{font-size:24px;font-weight:700;letter-spacing:-.02em;color:#fff;margin-bottom:4px;line-height:1.1}
  .ui-pr4__price--ent{font-size:18px;background:linear-gradient(90deg,#ff9bf6,#7c84ff);-webkit-background-clip:text;background-clip:text;color:transparent}
  .ui-pr4__sm{font-size:11px;font-weight:400;color:#888;margin-left:3px}
  .ui-pr4__per{font-size:11.5px;color:#999;line-height:1.45;min-height:32px;margin-bottom:12px}
  .ui-pr4__cta{display:block;text-align:center;padding:7px 10px;border:1px solid #404040;background:#171717;color:#ededed;border-radius:6px;font-size:12px;font-weight:500;cursor:pointer;margin-bottom:12px;text-decoration:none}
  .ui-pr4__cta--solid{background:#fff;color:#000;border-color:#fff}
  .ui-pr4__cta--ent{background:linear-gradient(90deg,#ff9bf6,#7c84ff);color:#0a0a0a;border-color:transparent;font-weight:600}
  .ui-pr4__feat{list-style:none;padding:0;margin:0;font-size:11.5px;color:#bbb;line-height:1.7}
  .ui-pr4__feat li{padding-left:14px;position:relative}
  .ui-pr4__feat li::before{content:"";position:absolute;left:0;top:8px;width:6px;height:3px;border-left:1.5px solid #888;border-bottom:1.5px solid #888;transform:rotate(-45deg)}
</style>`,
    },
    {
      name: 'Monthly/Yearly Billing Toggle',
      nameJa: '月額/年額 切替トグル',
      desc: '価格表の上に置く、月払い⇄年払いをセグメントで切り替えるUI。年払いには「20% OFF」チップ付き。',
      detail: '価格ページの最上部によく置かれるのが、月払いと年払いを切り替えるセグメントスイッチです。年払いは「2ヶ月分無料」「20% OFF」などの割引チップを並べ、ユーザーの目を年払いに誘導するのが定番のデザインパターンです。切替時に下の価格表が瞬時に書き換わるため、ユーザーは数字の差を即座に比較できます。トグルはアクティブ側だけ背景色を変え、外側はピル(角丸)で囲うのが王道の見た目です。',
      descEn: 'A segmented switch above the pricing table that flips between monthly and yearly billing, with a "Save 20%" chip nudging the yearly option.',
      detailEn: 'A segmented monthly/yearly toggle sits at the top of nearly every SaaS pricing page. The yearly option carries a discount chip — "Save 20%" or "2 months free" — to steer visitors toward annual billing. When the toggle flips, the prices in the table below update instantly so the savings are obvious. The standard look is a pill-shaped container with only the active side filled, giving a tactile two-state feel.',
      code: `<!-- Inspired by Linear -->
<div class="ui-bt">
  <div class="ui-bt__head">Pricing</div>
  <div class="ui-bt__toggle" id="btToggle">
    <button class="ui-bt__opt is-active" data-v="m">Monthly</button>
    <button class="ui-bt__opt" data-v="y">Yearly<span class="ui-bt__chip">Save 20%</span></button>
  </div>
  <div class="ui-bt__cards">
    <div class="ui-bt__card">
      <div class="ui-bt__name">Basic</div>
      <div class="ui-bt__price"><span class="ui-bt__cur">$</span><span class="ui-bt__amt" data-m="8" data-y="6">8</span><span class="ui-bt__per">/ user / month</span></div>
      <div class="ui-bt__note" id="btN1">Billed monthly</div>
    </div>
    <div class="ui-bt__card ui-bt__card--hi">
      <div class="ui-bt__name">Business</div>
      <div class="ui-bt__price"><span class="ui-bt__cur">$</span><span class="ui-bt__amt" data-m="14" data-y="11">14</span><span class="ui-bt__per">/ user / month</span></div>
      <div class="ui-bt__note" id="btN2">Billed monthly</div>
    </div>
  </div>
</div>

<style>
  .ui-bt{max-width:560px;padding:24px;background:#08090a;color:#e6e6e6;border-radius:12px;font:14px -apple-system,"Inter",sans-serif;letter-spacing:-.01em}
  .ui-bt__head{font-size:18px;font-weight:600;margin-bottom:14px;color:#fff}
  .ui-bt__toggle{display:inline-flex;background:#1a1b1e;border:1px solid #26272b;border-radius:999px;padding:3px;margin-bottom:18px}
  .ui-bt__opt{display:inline-flex;align-items:center;gap:6px;border:0;background:transparent;color:#9b9ba3;padding:7px 16px;border-radius:999px;font:500 13px inherit;cursor:pointer}
  .ui-bt__opt.is-active{background:#2a2b30;color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}
  .ui-bt__chip{background:#5e6ad2;color:#fff;font-size:10px;font-weight:600;padding:2px 6px;border-radius:4px;letter-spacing:.02em}
  .ui-bt__cards{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .ui-bt__card{background:#111214;border:1px solid #26272b;border-radius:10px;padding:16px}
  .ui-bt__card--hi{border-color:#3a3c8a;background:linear-gradient(180deg,#1a1c2e 0%,#111214 70%)}
  .ui-bt__name{font-size:12.5px;color:#9b9ba3;margin-bottom:6px}
  .ui-bt__price{display:flex;align-items:baseline;gap:2px}
  .ui-bt__cur{font-size:16px;color:#fff;font-weight:500}
  .ui-bt__amt{font-size:28px;font-weight:600;color:#fff;letter-spacing:-.03em}
  .ui-bt__per{font-size:12px;color:#9b9ba3;margin-left:4px}
  .ui-bt__note{font-size:11.5px;color:#71717a;margin-top:6px}
</style>

<script>
  (()=>{const t=document.getElementById('btToggle');const opts=t.querySelectorAll('.ui-bt__opt');const amts=document.querySelectorAll('.ui-bt__amt');const notes=[document.getElementById('btN1'),document.getElementById('btN2')];opts.forEach(o=>o.addEventListener('click',()=>{opts.forEach(x=>x.classList.remove('is-active'));o.classList.add('is-active');const y=o.dataset.v==='y';amts.forEach(a=>a.textContent=y?a.dataset.y:a.dataset.m);notes.forEach(n=>n.textContent=y?'Billed annually':'Billed monthly')}))})();
</script>`,
    },
    {
      name: 'Feature Comparison Matrix',
      nameJa: '機能比較表(マトリクス)',
      desc: '行=機能、列=プランの縦長テーブル。各セルに ✓ または — を入れて違いを示す。',
      detail: '価格カードの下によく置かれるのが、機能をすべて並べた縦長の比較テーブルです。行に機能名、列にプラン名を並べ、各セルに ✓・—・上限値などを入れて違いを一覧化します。プラン間で迷っているユーザーが「自分が使いたい機能はどのプランから?」を確認する場所なので、機能は「コア機能」「コラボ」「セキュリティ」のようにグループ化して見出し行を入れると読みやすくなります。',
      descEn: 'A tall comparison table — features as rows, plans as columns — with ✓ or — marks (or numeric limits) inside each cell.',
      detailEn: 'A long feature-by-feature comparison table almost always sits below the pricing cards. Rows list features, columns list plans, and each cell shows a check mark, a dash, or a specific limit. This table answers the visitor question "Which plan gets me the feature I actually need?" Group features into sections like Core, Collaboration, and Security with bold section rows so the table stays scannable instead of becoming a wall of text.',
      code: `<!-- Inspired by Stripe -->
<div class="ui-cmp">
  <table class="ui-cmp__t">
    <thead>
      <tr><th></th><th>Starter</th><th class="ui-cmp__hi">Growth</th><th>Scale</th></tr>
    </thead>
    <tbody>
      <tr class="ui-cmp__sec"><td colspan="4">Core payments</td></tr>
      <tr><td>Accept 135+ currencies</td><td>✓</td><td class="ui-cmp__hi">✓</td><td>✓</td></tr>
      <tr><td>Apple Pay / Google Pay</td><td>✓</td><td class="ui-cmp__hi">✓</td><td>✓</td></tr>
      <tr><td>Custom checkout flow</td><td>—</td><td class="ui-cmp__hi">✓</td><td>✓</td></tr>
      <tr class="ui-cmp__sec"><td colspan="4">Reporting</td></tr>
      <tr><td>Daily payout reports</td><td>✓</td><td class="ui-cmp__hi">✓</td><td>✓</td></tr>
      <tr><td>Revenue recognition</td><td>—</td><td class="ui-cmp__hi">✓</td><td>✓</td></tr>
      <tr><td>Custom dashboards</td><td>—</td><td class="ui-cmp__hi">—</td><td>✓</td></tr>
      <tr class="ui-cmp__sec"><td colspan="4">Security &amp; compliance</td></tr>
      <tr><td>3D Secure 2</td><td>✓</td><td class="ui-cmp__hi">✓</td><td>✓</td></tr>
      <tr><td>SOC 2 reports</td><td>—</td><td class="ui-cmp__hi">✓</td><td>✓</td></tr>
      <tr><td>SAML SSO</td><td>—</td><td class="ui-cmp__hi">—</td><td>✓</td></tr>
    </tbody>
  </table>
</div>

<style>
  .ui-cmp{max-width:640px;padding:18px;background:#fff;font:13px -apple-system,"Inter",sans-serif;color:#1a1f36}
  .ui-cmp__t{width:100%;border-collapse:collapse;font-size:13px}
  .ui-cmp__t th,.ui-cmp__t td{padding:10px 12px;text-align:left;border-bottom:1px solid #ebeef3}
  .ui-cmp__t th{font-size:12px;font-weight:600;color:#3c4257;background:#f7fafc;letter-spacing:.02em}
  .ui-cmp__t th:not(:first-child),.ui-cmp__t td:not(:first-child){text-align:center;width:90px}
  .ui-cmp__hi{background:#f5f3ff;color:#5b46cc}
  .ui-cmp__hi:first-child{font-weight:600}
  thead .ui-cmp__hi{background:#635bff;color:#fff;border-radius:0}
  .ui-cmp__sec td{font-size:11px;font-weight:600;color:#697386;text-transform:uppercase;letter-spacing:.06em;background:#fafbfc;padding-top:14px;padding-bottom:8px;border-bottom:1px solid #ebeef3}
  .ui-cmp__t td{color:#3c4257}
</style>`,
    },
    {
      name: 'Add-Ons / Usage Pricing Row',
      nameJa: 'アドオン・従量課金リスト',
      desc: '「+$8/seat」「$0.002/request」のような単価を、プラン下に行アイテムで並べるUI。',
      detail: 'LinearやNotionの価格ページの下部で見るのが、アドオン・従量課金のリストです。「AI ($8/メンバー/月)」「Sandbox環境 (+$50/月)」「API呼び出し ($0.002/回)」のように、基本プランに加算される単価を行アイテムで並べます。アイコン+タイトル+短い説明+価格チップの4要素で構成するのが定番で、ユーザーが「自分はどれを足すといくらになるか」を素早く計算できる作りにします。',
      descEn: 'A list of line items below the plans showing add-ons and metered usage — "+$8/seat" or "$0.002/request" style rows, à la Linear or Notion.',
      detailEn: 'Below the main pricing cards you often see a list of add-ons and metered features. Each row groups an icon, a short title, a one-line description, and a per-unit price chip — for example "AI ($8/member/month)," "Sandbox environment (+$50/month)," or "API calls ($0.002/call)." This pattern lets visitors size up exactly what extras cost on top of their base plan and quickly do the math for their team.',
      code: `<!-- Inspired by Linear -->
<div class="ui-ao">
  <div class="ui-ao__head">
    <h3>Add-ons</h3>
    <p>Extend any plan with optional features. Billed alongside your base subscription.</p>
  </div>
  <ul class="ui-ao__list">
    <li class="ui-ao__row">
      <div class="ui-ao__ic" style="background:linear-gradient(135deg,#c4b9ff,#7a72e8)">AI</div>
      <div class="ui-ao__body">
        <div class="ui-ao__name">Linear AI</div>
        <div class="ui-ao__sub">Auto-triage, smart summaries, and similar issue detection.</div>
      </div>
      <div class="ui-ao__price">+$8<span>/ member / mo</span></div>
    </li>
    <li class="ui-ao__row">
      <div class="ui-ao__ic" style="background:linear-gradient(135deg,#ffd4b0,#ff8a4c)">⟁</div>
      <div class="ui-ao__body">
        <div class="ui-ao__name">Insights+</div>
        <div class="ui-ao__sub">Advanced velocity, cycle, and forecast dashboards.</div>
      </div>
      <div class="ui-ao__price">+$6<span>/ member / mo</span></div>
    </li>
    <li class="ui-ao__row">
      <div class="ui-ao__ic" style="background:linear-gradient(135deg,#b5f0d4,#3fbf86)">⌘</div>
      <div class="ui-ao__body">
        <div class="ui-ao__name">API requests</div>
        <div class="ui-ao__sub">Beyond the 1,000 included requests / day in Business.</div>
      </div>
      <div class="ui-ao__price">$0.002<span>/ request</span></div>
    </li>
    <li class="ui-ao__row">
      <div class="ui-ao__ic" style="background:linear-gradient(135deg,#ffc1d6,#e84c8a)">⌥</div>
      <div class="ui-ao__body">
        <div class="ui-ao__name">Sandbox workspace</div>
        <div class="ui-ao__sub">Isolated workspace for QA, integrations, or training.</div>
      </div>
      <div class="ui-ao__price">+$50<span>/ workspace / mo</span></div>
    </li>
  </ul>
</div>

<style>
  .ui-ao{max-width:600px;padding:20px;background:#08090a;color:#e6e6e6;border-radius:12px;font:14px -apple-system,"Inter",sans-serif;letter-spacing:-.01em}
  .ui-ao__head h3{font-size:16px;font-weight:600;color:#fff;margin:0 0 4px}
  .ui-ao__head p{font-size:12.5px;color:#9b9ba3;margin:0 0 14px;line-height:1.5}
  .ui-ao__list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:6px}
  .ui-ao__row{display:flex;align-items:center;gap:12px;padding:12px;background:#111214;border:1px solid #26272b;border-radius:8px}
  .ui-ao__row:hover{border-color:#37383d}
  .ui-ao__ic{width:32px;height:32px;border-radius:8px;display:grid;place-items:center;font-size:11px;font-weight:700;color:#1a1b1e;flex:none}
  .ui-ao__body{flex:1;min-width:0}
  .ui-ao__name{font-size:13px;font-weight:500;color:#fff;margin-bottom:1px}
  .ui-ao__sub{font-size:11.5px;color:#9b9ba3;line-height:1.4}
  .ui-ao__price{font-size:13.5px;font-weight:600;color:#fff;text-align:right;flex:none}
  .ui-ao__price span{display:block;font-size:10.5px;font-weight:400;color:#71717a;margin-top:2px}
</style>`,
    },
    {
      name: 'Enterprise Contact CTA Card',
      nameJa: 'エンタープライズお問い合わせCTA',
      desc: '価格表の下にどんと置く、横長ダーク背景の「営業に相談しませんか?」誘導カード。',
      detail: '価格ページの一番下に置く、横幅いっぱいのお問い合わせ誘導カードです。背景はダークか企業ブランドカラーで、左に大きめの見出し+ベネフィットの箇条書き、右に「Talk to sales」ボタンを配置するのが定型レイアウトです。「価格カードでカバーしきれない大型顧客を、営業との会話に誘導する出口」という役割を担います。SLA・専任担当・カスタム契約など、エンタープライズ向けの言葉を散りばめます。',
      descEn: 'A full-width dark "Talk to sales" card pinned to the bottom of the pricing page.',
      detailEn: 'At the very bottom of a pricing page you often see a single full-width contact card. The background is dark or in the company brand color, the left side carries a strong headline with a few bullet benefits, and the right side carries the primary "Talk to sales" button. Its job is to catch large prospects whose needs the cards cannot answer and route them into a sales conversation, using language like dedicated support, custom SLA, and procurement-ready contracts.',
      code: `<!-- Inspired by GitHub -->
<div class="ui-ent">
  <div class="ui-ent__bg"></div>
  <div class="ui-ent__inner">
    <div class="ui-ent__left">
      <div class="ui-ent__tag">For Enterprise</div>
      <h3 class="ui-ent__h">Need more than a credit card can buy?</h3>
      <p class="ui-ent__p">Custom contracts, security reviews, and dedicated support for organizations of 100+ developers.</p>
      <ul class="ui-ent__list">
        <li>Volume discounts &amp; annual invoicing</li>
        <li>SAML SSO, SCIM, and audit log streaming</li>
        <li>99.95% uptime SLA + named CSM</li>
        <li>Procurement &amp; security review support</li>
      </ul>
    </div>
    <div class="ui-ent__right">
      <a class="ui-ent__cta">Talk to sales →</a>
      <a class="ui-ent__alt">Download datasheet (PDF)</a>
      <div class="ui-ent__by">Avg. response &lt; 1 business day</div>
    </div>
  </div>
</div>

<style>
  .ui-ent{position:relative;max-width:720px;border-radius:14px;overflow:hidden;background:#0d1117;color:#e6edf3;font:14px -apple-system,"Inter",sans-serif;letter-spacing:-.01em}
  .ui-ent__bg{position:absolute;inset:0;background:radial-gradient(circle at 80% 0%,rgba(46,160,67,.18),transparent 50%),radial-gradient(circle at 0% 100%,rgba(56,139,253,.15),transparent 50%);pointer-events:none}
  .ui-ent__inner{position:relative;display:flex;gap:28px;padding:28px;align-items:center}
  .ui-ent__left{flex:1;min-width:0}
  .ui-ent__tag{display:inline-block;font-size:11px;font-weight:600;color:#7ee787;background:rgba(46,160,67,.15);border:1px solid rgba(46,160,67,.4);padding:3px 8px;border-radius:999px;margin-bottom:10px;letter-spacing:.04em;text-transform:uppercase}
  .ui-ent__h{font-size:21px;font-weight:600;margin:0 0 6px;color:#fff;letter-spacing:-.02em;line-height:1.2}
  .ui-ent__p{font-size:13px;color:#8b949e;margin:0 0 12px;line-height:1.5;max-width:380px}
  .ui-ent__list{list-style:none;padding:0;margin:0;font-size:12.5px;color:#e6edf3;line-height:1.8}
  .ui-ent__list li{padding-left:18px;position:relative}
  .ui-ent__list li::before{content:"";position:absolute;left:2px;top:9px;width:7px;height:3.5px;border-left:1.6px solid #7ee787;border-bottom:1.6px solid #7ee787;transform:rotate(-45deg)}
  .ui-ent__right{flex:none;width:200px;display:flex;flex-direction:column;gap:8px;align-items:stretch}
  .ui-ent__cta{display:block;background:#2ea043;color:#fff;text-align:center;padding:10px 16px;border-radius:6px;font-size:13.5px;font-weight:600;cursor:pointer;text-decoration:none;border:1px solid #3fb950}
  .ui-ent__cta:hover{background:#3fb950}
  .ui-ent__alt{display:block;background:transparent;color:#e6edf3;text-align:center;padding:9px 16px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;text-decoration:none;border:1px solid #30363d}
  .ui-ent__alt:hover{background:#21262d}
  .ui-ent__by{font-size:11px;color:#8b949e;text-align:center;margin-top:2px}
</style>`,
    },
    {
      name: 'Pricing FAQ Accordion',
      nameJa: '価格ページのFAQアコーディオン',
      desc: '「いつでも解約できる?」など、価格に関するよくある質問を折りたたみで並べるUI。',
      detail: '価格表の下に必ずと言っていいほど置かれるのが、価格・契約に関するFAQです。「解約はいつでもできる?」「年払いから月払いに変えられる?」「無料トライアル後に自動課金される?」など、購入前の不安をひとつずつ潰していくのが目的です。アコーディオン形式で4〜6個並べると圧迫感がなく、知りたい質問だけ開いて読めます。CTAの直前に置くことで「不安が解消 → そのまま申し込み」の動線を作れます。',
      descEn: 'A collapsible Q & A list below the pricing table — "Can I cancel anytime?" and friends.',
      detailEn: 'Almost every pricing page ends with a billing-focused FAQ section. The questions are predictable on purpose — "Can I cancel anytime?", "Can I switch from yearly to monthly?", "Will my trial auto-charge?" — because their job is to dissolve last-minute hesitations before purchase. Four to six accordion items is the sweet spot: enough to cover real concerns, light enough to scan. Placing this section right before the final CTA channels reassured visitors straight into signup.',
      code: `<!-- Inspired by Atlassian -->
<div class="ui-faq">
  <div class="ui-faq__head">
    <div class="ui-faq__sup">FAQ</div>
    <h3>Pricing &amp; billing questions</h3>
  </div>
  <details class="ui-faq__item" open>
    <summary>Can I cancel my subscription anytime?<span class="ui-faq__plus"></span></summary>
    <div class="ui-faq__body">Yes. You can cancel from the Billing tab in your workspace settings. Your plan stays active until the end of the current billing period, and you will not be charged again.</div>
  </details>
  <details class="ui-faq__item">
    <summary>What happens after my free trial ends?<span class="ui-faq__plus"></span></summary>
    <div class="ui-faq__body">If you have not added a payment method, your workspace is automatically downgraded to the Free plan — no charges, no data loss. We will send a reminder 3 days before the trial expires.</div>
  </details>
  <details class="ui-faq__item">
    <summary>Can I switch between monthly and annual billing?<span class="ui-faq__plus"></span></summary>
    <div class="ui-faq__body">Absolutely. Switch to annual at any time to lock in the 20% discount. The new rate is prorated against your remaining monthly balance.</div>
  </details>
  <details class="ui-faq__item">
    <summary>Do you offer discounts for nonprofits or education?<span class="ui-faq__plus"></span></summary>
    <div class="ui-faq__body">Verified nonprofits, classroom educators, and accredited students get 50% off the Standard plan. Apply through the form linked in your workspace settings.</div>
  </details>
  <details class="ui-faq__item">
    <summary>Which payment methods do you accept?<span class="ui-faq__plus"></span></summary>
    <div class="ui-faq__body">All major credit cards (Visa, Mastercard, AMEX, JCB), Apple Pay, Google Pay, and ACH for annual plans over $5,000. Invoices are available on annual plans.</div>
  </details>
</div>

<style>
  .ui-faq{max-width:600px;padding:24px;background:#fff;font:14px -apple-system,"Inter",sans-serif;color:#172b4d}
  .ui-faq__head{margin-bottom:14px}
  .ui-faq__sup{font-size:11px;font-weight:700;color:#0052cc;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px}
  .ui-faq__head h3{font-size:20px;font-weight:600;margin:0;color:#172b4d;letter-spacing:-.01em}
  .ui-faq__item{border-bottom:1px solid #dfe1e6}
  .ui-faq__item summary{display:flex;align-items:center;justify-content:space-between;padding:16px 0;cursor:pointer;font-size:14.5px;font-weight:500;color:#172b4d;list-style:none}
  .ui-faq__item summary::-webkit-details-marker{display:none}
  .ui-faq__plus{width:14px;height:14px;position:relative;flex:none;margin-left:12px}
  .ui-faq__plus::before,.ui-faq__plus::after{content:"";position:absolute;background:#5e6c84;border-radius:1px}
  .ui-faq__plus::before{top:6px;left:0;right:0;height:2px}
  .ui-faq__plus::after{left:6px;top:0;bottom:0;width:2px;transition:transform .15s}
  .ui-faq__item[open] .ui-faq__plus::after{transform:scaleY(0)}
  .ui-faq__body{padding:0 0 16px;font-size:13.5px;color:#5e6c84;line-height:1.6;max-width:540px}
</style>`,
    },
    {
      name: 'Price Calculator Widget',
      nameJa: '価格シミュレーター(スライダー)',
      desc: 'ユーザー数とストレージのスライダーを動かして、月額合計をリアルタイムに算出するウィジェット。',
      detail: 'クラウドサービスの価格ページで使われるのが、利用量に応じて料金を試算するシミュレーターです。「ユーザー数」「ストレージ容量」「リクエスト数」などのスライダーをユーザーが動かすと、横や下に大きく月額合計が表示される作りです。これは従量課金の見積もりを直感的に伝えるためのUIで、固定プランでは表現しにくい「自分の使い方に合わせた価格」を可視化できます。スライダーの両端には最小・最大値、つまみの上には現在値ラベルを付けるのが親切です。',
      descEn: 'A pricing calculator with sliders for users and storage that recomputes a monthly total in real time.',
      detailEn: 'Cloud and infrastructure providers often include a pricing calculator on their plans page. The visitor drags sliders for usage variables — seats, storage, requests — and a big monthly total updates alongside in real time. This pattern makes metered pricing feel concrete in a way a static table never can, letting visitors map their own workload onto a number. Best practice is to label the min and max at the ends of each slider and to float the current value above the slider thumb for clarity.',
      code: `<!-- Inspired by Google Cloud -->
<div class="ui-calc">
  <div class="ui-calc__head">
    <h3>Estimate your monthly bill</h3>
    <p>Drag the sliders to match your expected usage.</p>
  </div>
  <div class="ui-calc__row">
    <div class="ui-calc__lbl">Users</div>
    <input type="range" min="1" max="100" value="12" class="ui-calc__sl" id="calcU">
    <div class="ui-calc__val" id="calcUV">12</div>
  </div>
  <div class="ui-calc__row">
    <div class="ui-calc__lbl">Storage (GB)</div>
    <input type="range" min="10" max="1000" step="10" value="200" class="ui-calc__sl" id="calcS">
    <div class="ui-calc__val" id="calcSV">200</div>
  </div>
  <div class="ui-calc__break">
    <div><span>Base · $8 / user</span><b id="calcBU">$96</b></div>
    <div><span>Storage · $0.05 / GB</span><b id="calcBS">$10</b></div>
  </div>
  <div class="ui-calc__total">
    <span>Estimated total</span>
    <div class="ui-calc__amt" id="calcT">$106<small>/ month</small></div>
  </div>
</div>

<style>
  .ui-calc{max-width:480px;padding:24px;background:#fff;border:1px solid #dadce0;border-radius:12px;font:14px "Google Sans","Roboto",-apple-system,sans-serif;color:#202124}
  .ui-calc__head h3{font-size:18px;font-weight:500;margin:0 0 4px;color:#202124}
  .ui-calc__head p{font-size:13px;color:#5f6368;margin:0 0 18px}
  .ui-calc__row{display:grid;grid-template-columns:90px 1fr 60px;align-items:center;gap:12px;margin-bottom:12px}
  .ui-calc__lbl{font-size:13px;color:#5f6368}
  .ui-calc__sl{-webkit-appearance:none;appearance:none;width:100%;height:4px;background:#e8eaed;border-radius:2px;outline:none}
  .ui-calc__sl::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;border-radius:50%;background:#1a73e8;cursor:pointer;border:2px solid #fff;box-shadow:0 1px 3px rgba(60,64,67,.3)}
  .ui-calc__sl::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#1a73e8;cursor:pointer;border:2px solid #fff}
  .ui-calc__val{text-align:right;font-size:14px;font-weight:500;color:#1a73e8;font-variant-numeric:tabular-nums}
  .ui-calc__break{margin:14px 0 12px;padding:12px 0;border-top:1px solid #e8eaed;border-bottom:1px solid #e8eaed;display:flex;flex-direction:column;gap:4px;font-size:12.5px;color:#5f6368}
  .ui-calc__break div{display:flex;justify-content:space-between}
  .ui-calc__break b{color:#202124;font-weight:500;font-variant-numeric:tabular-nums}
  .ui-calc__total{display:flex;align-items:baseline;justify-content:space-between;margin-top:4px}
  .ui-calc__total>span{font-size:13px;color:#5f6368}
  .ui-calc__amt{font-size:26px;font-weight:500;color:#1a73e8;letter-spacing:-.01em}
  .ui-calc__amt small{font-size:13px;color:#5f6368;font-weight:400;margin-left:4px}
</style>

<script>
  (()=>{const u=document.getElementById('calcU'),s=document.getElementById('calcS');const uv=document.getElementById('calcUV'),sv=document.getElementById('calcSV');const bu=document.getElementById('calcBU'),bs=document.getElementById('calcBS'),t=document.getElementById('calcT');const upd=()=>{const U=+u.value,S=+s.value;uv.textContent=U;sv.textContent=S;const a=U*8,b=Math.round(S*0.05*100)/100;bu.textContent='$'+a;bs.textContent='$'+b;t.innerHTML='$'+(a+b).toFixed(0)+'<small>/ month</small>'};u.oninput=s.oninput=upd;upd();})();
</script>`,
    },
    {
      name: 'Per-Seat Pricing With Stepper',
      nameJa: 'シート単価+数量ステッパー',
      desc: '「$10/シート/月」と数量ステッパーを組み合わせ、人数に応じた合計を動的に表示するブロック。',
      detail: 'チーム向けSaaSで定番なのが、1シートあたりの単価とシート数のステッパーをセットにしたUIです。「$10/シート/月」と単価を大きく出し、その下に「− 5 +」のような数量ステッパーを置き、隣に合計金額をリアルタイムで表示します。価格カードに組み込んでもよいし、購入確認ページの直前に出して「実際の月額」を確定させる役目もあります。+/−ボタンは大きめにタップしやすく、数値は直接入力もできるようにすると親切です。',
      descEn: 'A per-seat price ($10/seat/month) paired with a quantity stepper that recomputes the team total in real time.',
      detailEn: 'A pattern you see on every team-oriented SaaS pricing page: a large per-seat price coupled with a quantity stepper for headcount. "$10/seat/month" sits up top, "− 5 +" sits below, and the live total fills the right side. You will see this both inside a pricing card and again on the checkout confirmation screen to lock in the actual monthly amount. Make the +/− buttons large enough to tap comfortably and let the number field accept direct keyboard input.',
      code: `<!-- Inspired by Slack -->
<div class="ui-seat">
  <div class="ui-seat__plan">
    <div class="ui-seat__name">Business+ plan</div>
    <div class="ui-seat__sub">For teams that need more security and access controls.</div>
  </div>
  <div class="ui-seat__price">
    <span class="ui-seat__cur">$</span>
    <span class="ui-seat__amt">12.50</span>
    <span class="ui-seat__per">USD / member / month, billed annually</span>
  </div>
  <div class="ui-seat__qrow">
    <div class="ui-seat__qlbl">Number of members</div>
    <div class="ui-seat__step">
      <button class="ui-seat__btn" id="seatMinus">−</button>
      <input class="ui-seat__inp" id="seatQty" type="text" value="12">
      <button class="ui-seat__btn" id="seatPlus">+</button>
    </div>
  </div>
  <div class="ui-seat__line"></div>
  <div class="ui-seat__total">
    <div>
      <div class="ui-seat__tlbl">Estimated monthly cost</div>
      <div class="ui-seat__tsub" id="seatBreak">12 × $12.50</div>
    </div>
    <div class="ui-seat__tamt" id="seatTotal">$150.00</div>
  </div>
  <a class="ui-seat__cta">Continue to checkout →</a>
</div>

<style>
  .ui-seat{max-width:440px;padding:24px;background:#fff;border:1px solid #ddd6cf;border-radius:12px;font:14px Lato,"Helvetica Neue",-apple-system,sans-serif;color:#1d1c1d}
  .ui-seat__plan{margin-bottom:14px}
  .ui-seat__name{font-size:15px;font-weight:900;color:#611f69;margin-bottom:3px}
  .ui-seat__sub{font-size:12.5px;color:#616061;line-height:1.45}
  .ui-seat__price{display:flex;align-items:baseline;gap:2px;margin-bottom:18px}
  .ui-seat__cur{font-size:18px;font-weight:700;color:#1d1c1d}
  .ui-seat__amt{font-size:32px;font-weight:800;color:#1d1c1d;letter-spacing:-.02em;line-height:1}
  .ui-seat__per{font-size:11.5px;color:#616061;margin-left:8px;max-width:140px;line-height:1.3}
  .ui-seat__qrow{display:flex;align-items:center;justify-content:space-between;padding:10px 0}
  .ui-seat__qlbl{font-size:13.5px;font-weight:600;color:#1d1c1d}
  .ui-seat__step{display:inline-flex;align-items:center;border:1px solid #ddd6cf;border-radius:6px;overflow:hidden}
  .ui-seat__btn{width:34px;height:34px;border:0;background:#f8f8f8;font-size:18px;cursor:pointer;color:#1d1c1d}
  .ui-seat__btn:hover{background:#eee}
  .ui-seat__inp{width:48px;height:34px;border:0;border-left:1px solid #ddd6cf;border-right:1px solid #ddd6cf;text-align:center;font:600 14px Lato,sans-serif;color:#1d1c1d;outline:none}
  .ui-seat__line{height:1px;background:#ddd6cf;margin:8px 0 12px}
  .ui-seat__total{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
  .ui-seat__tlbl{font-size:13px;color:#616061}
  .ui-seat__tsub{font-size:11.5px;color:#9b9a9a;margin-top:2px;font-variant-numeric:tabular-nums}
  .ui-seat__tamt{font-size:22px;font-weight:800;color:#1d1c1d;letter-spacing:-.01em;font-variant-numeric:tabular-nums}
  .ui-seat__cta{display:block;text-align:center;background:#611f69;color:#fff;padding:12px;border-radius:6px;font-size:14px;font-weight:700;text-decoration:none;cursor:pointer}
  .ui-seat__cta:hover{background:#4a154b}
</style>

<script>
  (()=>{const q=document.getElementById('seatQty'),m=document.getElementById('seatMinus'),p=document.getElementById('seatPlus');const t=document.getElementById('seatTotal'),b=document.getElementById('seatBreak');const rate=12.5;const upd=()=>{let n=parseInt(q.value)||1;if(n<1)n=1;if(n>999)n=999;q.value=n;const tot=(n*rate).toFixed(2);t.textContent='$'+tot;b.textContent=n+' × $'+rate.toFixed(2)};m.onclick=()=>{q.value=Math.max(1,(parseInt(q.value)||1)-1);upd()};p.onclick=()=>{q.value=(parseInt(q.value)||1)+1;upd()};q.oninput=upd;upd();})();
</script>`,
    },
    {
      name: 'Trial & Guarantee Trust Strip',
      nameJa: '無料トライアル・返金保証バッジ',
      desc: '「14日トライアル · クレカ不要 · 30日返金保証」を横並びで見せて購入の不安を消すバッジ列。',
      detail: 'CTAボタンの直下や、価格カードの下にスッと差し込むのが信頼バッジの横並びです。「14日間無料トライアル」「クレジットカード不要」「30日間返金保証」「いつでもキャンセル」といった購入直前の不安を消すフレーズを、アイコン付きで3〜4個並べます。派手すぎず、けれども確実に視界に入る位置に置くのがコツで、ボタンを押す直前の最後のひと押しになります。テキストは短く、アイコンはシンプルなチェックや盾を使うのが定石です。',
      descEn: 'A horizontal trust strip — "14-day trial · No credit card · 30-day money back" — that dissolves last-second purchase doubts.',
      detailEn: 'Right under a primary CTA or below a pricing card, you frequently see a small horizontal trust strip. Three or four reassurance badges sit side by side with an icon and a short line each: free trial length, no credit card required, money-back guarantee, cancel anytime. The styling is intentionally quiet — never louder than the CTA itself — but it lives right where the visitor is hesitating, making it the last gentle nudge before they click.',
      code: `<!-- Inspired by Figma -->
<div class="ui-trs">
  <a class="ui-trs__cta">Get started — it is free →</a>
  <div class="ui-trs__strip">
    <div class="ui-trs__item">
      <span class="ui-trs__ic" style="background:#0acf83">
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2 2 4-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span>14-day Pro trial</span>
    </div>
    <div class="ui-trs__sep"></div>
    <div class="ui-trs__item">
      <span class="ui-trs__ic" style="background:#a259ff">
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2 2 4-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span>No credit card required</span>
    </div>
    <div class="ui-trs__sep"></div>
    <div class="ui-trs__item">
      <span class="ui-trs__ic" style="background:#f24e1e">
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2 2 4-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span>30-day money back</span>
    </div>
    <div class="ui-trs__sep"></div>
    <div class="ui-trs__item">
      <span class="ui-trs__ic" style="background:#1abcfe">
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2 2 4-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span>Cancel anytime</span>
    </div>
  </div>
  <div class="ui-trs__foot">Trusted by 4 million designers at companies like Stripe, GitHub, and Loom.</div>
</div>

<style>
  .ui-trs{max-width:600px;padding:32px 20px;background:#fff;text-align:center;font:14px "Inter",-apple-system,sans-serif;color:#1e1e1e}
  .ui-trs__cta{display:inline-block;background:#1e1e1e;color:#fff;padding:12px 22px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;cursor:pointer;margin-bottom:16px;letter-spacing:-.01em}
  .ui-trs__cta:hover{background:#000}
  .ui-trs__strip{display:inline-flex;align-items:center;gap:14px;flex-wrap:wrap;justify-content:center;font-size:12.5px;color:#444;margin-bottom:14px}
  .ui-trs__item{display:inline-flex;align-items:center;gap:6px}
  .ui-trs__ic{width:16px;height:16px;border-radius:50%;display:inline-grid;place-items:center;flex:none}
  .ui-trs__sep{width:3px;height:3px;background:#c0c0c0;border-radius:50%}
  .ui-trs__foot{font-size:11.5px;color:#999;max-width:380px;margin:0 auto;line-height:1.5}
</style>`,
    },
  ],
}
