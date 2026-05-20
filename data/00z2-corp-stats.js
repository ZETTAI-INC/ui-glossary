/**
 * UI Parts Showcase (Corporate Stats & Impact) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-stats',
  title: '企業サイト 数値・実績',
  titleEn: 'Corporate Stats & Impact',
  description: 'Accenture・PwC・Meta・Google・McKinsey などの企業サイトでよく見る、数値や実績を訴求するUIをコピペで使えます。',
  terms: [
    {
      name: 'Stat Row (4-up KPI Grid)',
      nameJa: '4カラムKPIグリッド',
      desc: '従業員数・売上・国数など、巨大な数字を4つ横並びで見せる定番KPI行。',
      detail: 'Accenture や PwC のトップページで誰もが目にする、企業の規模感を一発で伝える数値ブロックです。「738K+ people」「$64B revenue」のように、桁を強調した巨大数字と短いキャプションを4つ並べ、間に縦線の区切りを入れます。会社案内、IR、ESGレポートのヒーロー直下に置くと、ブランドの自信と規模が一瞬で伝わります。数字を3〜4個に絞り、文字より数字をはるかに大きくするのがコツです。',
      descEn: 'A four-column KPI row of giant headline numbers — employees, revenue, countries, leadership stats.',
      detailEn: 'This is the classic stat row you see across Accenture and PwC homepages: a row of huge, oversized numbers like "738K+ people" and "$64B revenue" laid out four-up with thin dividers between. Use it under a hero, in an "About" page, or in an annual review to communicate scale and confidence in a single glance. The trick is to keep it to three or four stats, make the numbers dramatically larger than the labels, and let the whitespace do the work.',
      code: `<!-- Inspired by Accenture -->
<section class="ui-kpi4">
  <div class="ui-kpi4__cell">
    <div class="ui-kpi4__num">738K<span>+</span></div>
    <div class="ui-kpi4__lbl">people across 120 countries</div>
  </div>
  <div class="ui-kpi4__cell">
    <div class="ui-kpi4__num">$64<span>B</span></div>
    <div class="ui-kpi4__lbl">in FY24 revenue</div>
  </div>
  <div class="ui-kpi4__cell">
    <div class="ui-kpi4__num">120</div>
    <div class="ui-kpi4__lbl">countries we operate in</div>
  </div>
  <div class="ui-kpi4__cell">
    <div class="ui-kpi4__num">49<span>%</span></div>
    <div class="ui-kpi4__lbl">women in our workforce</div>
  </div>
</section>

<style>
  .ui-kpi4{display:grid;grid-template-columns:repeat(4,1fr);gap:0;max-width:680px;background:#fff;padding:28px 4px;font:-apple-system,"Graphik",-apple-system,"Segoe UI",sans-serif;color:#1a1a1a}
  .ui-kpi4__cell{padding:8px 18px;border-left:1px solid #e6e6e6;display:flex;flex-direction:column;justify-content:flex-end}
  .ui-kpi4__cell:first-child{border-left:0}
  .ui-kpi4__num{font:600 44px/1 "Graphik",-apple-system,sans-serif;letter-spacing:-.03em;color:#a100ff;margin-bottom:10px}
  .ui-kpi4__num span{font-size:28px;font-weight:500;color:#a100ff;margin-left:2px}
  .ui-kpi4__lbl{font-size:12px;line-height:1.4;color:#404040;letter-spacing:.01em}
</style>`,
    },
    {
      name: 'Animated Counter',
      nameJa: 'アニメーション数値カウンター',
      desc: 'ページ読み込み時に0から目標値までヌルッとカウントアップする数字。',
      detail: 'McKinsey や Salesforce の実績紹介でよく見る、画面に入った瞬間に0からターゲット数値までイージングしながら増えていく数字です。視線を強制的に止め、「これだけの規模だ」というインパクトを脳裏に焼き付ける効果があります。実装は requestAnimationFrame で約1.5秒、easeOutQuart で減速させると気持ちよく止まります。カンマ区切りや単位サフィックス("M"、"%"など)も忘れずに。',
      descEn: 'A number that tweens from zero to its target on load, easing to a soft stop for emphasis.',
      detailEn: 'You see this on McKinsey and Salesforce results pages: the page loads, your eye locks onto a number, and it animates from zero up to its real value over about a second and a half. The motion forces a brief stop, branding the scale of the figure into memory. Implementation is a small requestAnimationFrame loop using easeOutQuart so the count decelerates naturally at the end. Don\'t forget thousands separators and unit suffixes ("M", "%", "B").',
      code: `<!-- Inspired by Salesforce -->
<section class="ui-cnt">
  <div class="ui-cnt__eyebrow">Customer impact</div>
  <div class="ui-cnt__row">
    <div class="ui-cnt__block">
      <div class="ui-cnt__num" data-to="1284" data-suffix="">0</div>
      <div class="ui-cnt__lbl">Enterprise customers</div>
    </div>
    <div class="ui-cnt__block">
      <div class="ui-cnt__num" data-to="98.7" data-suffix="%" data-dec="1">0</div>
      <div class="ui-cnt__lbl">Avg. retention</div>
    </div>
    <div class="ui-cnt__block">
      <div class="ui-cnt__num" data-to="42" data-suffix="M+">0</div>
      <div class="ui-cnt__lbl">Workflows automated</div>
    </div>
  </div>
</section>

<style>
  .ui-cnt{max-width:640px;background:#032e61;color:#fff;padding:36px 32px;border-radius:8px;font:-apple-system,"Salesforce Sans","Segoe UI",sans-serif}
  .ui-cnt__eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#7fd2ff;margin-bottom:18px;font-weight:600}
  .ui-cnt__row{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .ui-cnt__block{padding-right:14px;border-right:1px solid rgba(255,255,255,.18)}
  .ui-cnt__block:last-child{border-right:0}
  .ui-cnt__num{font:600 40px/1 "Salesforce Sans",-apple-system,sans-serif;letter-spacing:-.02em;color:#fff;margin-bottom:8px;font-variant-numeric:tabular-nums}
  .ui-cnt__lbl{font-size:13px;color:#cbe3ff;line-height:1.35}
</style>

<script>
  (function(){
    const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
    document.querySelectorAll('.ui-cnt__num').forEach(el=>{
      const to=parseFloat(el.dataset.to);
      const dec=parseInt(el.dataset.dec||'0',10);
      const suf=el.dataset.suffix||'';
      const dur=1500, start=performance.now();
      function step(now){
        const p=Math.min(1,(now-start)/dur);
        const v=to*easeOutQuart(p);
        el.textContent=(dec?v.toFixed(dec):Math.round(v).toLocaleString())+suf;
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  })();
</script>`,
    },
    {
      name: 'Hero Stat Callout',
      nameJa: '単独ヒーロー数値コール',
      desc: '巨大な1つの数字＋短いキャプションだけで構成された圧倒的訴求ブロック。',
      detail: 'Deloitte や McKinsey の事例ページの冒頭でよく見る、画面の大半を1つの数字で埋めるレイアウトです。「$2.3B saved annually for clients」のように、桁の大きさで読み手を一瞬で掴みます。装飾は最小限、フォントサイズは100px以上が目安。サブテキストは数字の半分以下のサイズに抑え、コントラストの差で目線の流れを作ります。CTA を1つだけ添えると、ヒーロー単体でも成立します。',
      descEn: 'One enormous number and a short caption — a single hero statistic that dominates the viewport.',
      detailEn: 'Open any Deloitte or McKinsey case study and you\'ll find this layout: one giant number, set at 100px+, swallowing most of the section, with a small caption like "$2.3B saved annually for clients" underneath. The sheer scale of the figure grabs attention in a single glance. Keep ornamentation to a minimum — the contrast between the huge number and tiny caption is what creates the visual rhythm. A single subtle CTA underneath lets the block stand on its own as a hero.',
      code: `<!-- Inspired by McKinsey -->
<section class="ui-hero1">
  <div class="ui-hero1__eyebrow">Client impact, FY24</div>
  <div class="ui-hero1__num">$2.3<span>B</span></div>
  <div class="ui-hero1__cap">saved annually for our clients through<br>operations transformation engagements</div>
  <a href="#" class="ui-hero1__cta">Read the full report →</a>
</section>

<style>
  .ui-hero1{max-width:660px;background:#fff;padding:48px 40px;font:-apple-system,"Bower","Times New Roman",serif;color:#051c2c;border-top:3px solid #051c2c}
  .ui-hero1__eyebrow{font:600 11px/1 -apple-system,"Helvetica Neue",sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#2251ff;margin-bottom:24px}
  .ui-hero1__num{font:300 124px/1 "Bower","Times New Roman",serif;letter-spacing:-.04em;color:#051c2c;margin-bottom:12px}
  .ui-hero1__num span{font-size:72px;color:#2251ff;font-weight:400}
  .ui-hero1__cap{font:400 18px/1.4 "Bower","Times New Roman",serif;color:#2b313b;max-width:480px;margin-bottom:24px}
  .ui-hero1__cta{display:inline-block;font:600 13px -apple-system,"Helvetica Neue",sans-serif;color:#051c2c;text-decoration:none;border-bottom:1px solid #051c2c;padding-bottom:2px;letter-spacing:.02em}
  .ui-hero1__cta:hover{color:#2251ff;border-color:#2251ff}
</style>`,
    },
    {
      name: 'Stat With Sparkline',
      nameJa: 'スパークライン付き数値',
      desc: '数字の下に小さな折れ線グラフを添えて、推移を視覚的に補強したKPIカード。',
      detail: 'AWS や Salesforce のダッシュボードでお馴染みの、数字の下に小さく折れ線(スパークライン)を仕込んだ KPI カードです。1つのカードに「現在値・推移・ラベル」が圧縮されており、ぱっと見でトレンドが分かります。スパークラインは軸も目盛りも省略し、ピーク点だけ小さなドットでマークするのが定石。カードの幅は 200〜260px くらいに収め、横並びで並べると比較ダッシュボードとして使えます。',
      descEn: 'A KPI tile with a tiny inline line chart below the number, hinting at the recent trend.',
      detailEn: 'This pattern is everywhere in AWS and Salesforce dashboards: a number with a tiny line chart (a "sparkline") right beneath it that hints at the trend over time. A single card compresses current value, trajectory, and label, so a glance is enough to read it. Drop the axes, ticks, and gridlines — only the line matters — and mark just the peak with a small dot. Cards work best around 200–260px wide so you can line several up side by side as a compact comparison dashboard.',
      code: `<!-- Inspired by AWS Console -->
<div class="ui-spk">
  <div class="ui-spk__head">
    <div class="ui-spk__lbl">Monthly active accounts</div>
    <div class="ui-spk__chip">+8.4%</div>
  </div>
  <div class="ui-spk__num">128,402</div>
  <svg class="ui-spk__chart" viewBox="0 0 240 60" preserveAspectRatio="none">
    <defs>
      <linearGradient id="ui-spk-g" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#0972d3" stop-opacity=".35"/>
        <stop offset="100%" stop-color="#0972d3" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path d="M0,46 L20,42 L40,44 L60,36 L80,30 L100,34 L120,26 L140,22 L160,28 L180,18 L200,14 L220,10 L240,6 L240,60 L0,60 Z" fill="url(#ui-spk-g)"/>
    <path d="M0,46 L20,42 L40,44 L60,36 L80,30 L100,34 L120,26 L140,22 L160,28 L180,18 L200,14 L220,10 L240,6" fill="none" stroke="#0972d3" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="240" cy="6" r="2.6" fill="#0972d3"/>
  </svg>
  <div class="ui-spk__foot">Last 30 days · vs. previous period</div>
</div>

<style>
  .ui-spk{max-width:260px;background:#fff;border:1px solid #d5dbdb;border-radius:8px;padding:16px 18px;font:-apple-system,"Amazon Ember","Segoe UI",sans-serif;color:#16191f}
  .ui-spk__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
  .ui-spk__lbl{font-size:12px;color:#545b64;font-weight:600;letter-spacing:.01em}
  .ui-spk__chip{font:600 11px -apple-system,sans-serif;color:#037f0c;background:#e6f4ea;padding:2px 6px;border-radius:10px}
  .ui-spk__num{font:600 26px/1.1 -apple-system,sans-serif;letter-spacing:-.01em;margin-bottom:10px;font-variant-numeric:tabular-nums}
  .ui-spk__chart{width:100%;height:54px;display:block;margin-bottom:8px}
  .ui-spk__foot{font-size:11px;color:#879596}
</style>`,
    },
    {
      name: 'Circular Progress Stat',
      nameJa: '円形プログレス付き数値',
      desc: 'パーセンテージとリング状のプログレスで、目標達成率を見せるサステナビリティKPI。',
      detail: 'Microsoft や Google のサステナビリティレポートで定番の、リング状の円形プログレスとパーセント表示を組み合わせたカードです。「2030年までに100%再エネ化、今67%」のような長期目標の進捗を示すのに向いています。リングは SVG の stroke-dasharray でアニメーションさせ、内側にパーセント・下に目標ラベル、というシンプルな構成。色は緑系で「順調」、黄〜赤で「要注意」を表現するのがお決まりです。',
      descEn: 'A ring chart with a percentage in the middle — perfect for showing progress toward a long-term goal.',
      detailEn: 'This is the format Microsoft and Google reach for in sustainability reports: a circular ring whose arc represents progress, a big percentage in the middle, and a target label underneath ("On track to 2030"). It\'s ideal for multi-year commitments where you want to show that you\'re moving steadily, not just hitting a current number. Animate the ring with SVG `stroke-dasharray`, color it green when on track and amber/red when slipping, and keep the inside text minimal.',
      code: `<!-- Inspired by Microsoft sustainability report -->
<div class="ui-ring">
  <div class="ui-ring__chart">
    <svg viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="52" fill="none" stroke="#e6edf3" stroke-width="10"/>
      <circle cx="60" cy="60" r="52" fill="none" stroke="#2da44e" stroke-width="10" stroke-linecap="round"
              stroke-dasharray="326.7" stroke-dashoffset="107.8" transform="rotate(-90 60 60)"/>
    </svg>
    <div class="ui-ring__pct"><span>67</span>%</div>
  </div>
  <div class="ui-ring__body">
    <div class="ui-ring__title">Renewable electricity</div>
    <div class="ui-ring__sub">Share of our global operations powered by renewables</div>
    <div class="ui-ring__badge"><span class="ui-ring__dot"></span>On track to 2030 goal</div>
  </div>
</div>

<style>
  .ui-ring{display:flex;gap:24px;align-items:center;max-width:520px;padding:24px;background:#fff;border:1px solid #e1e6eb;border-radius:12px;font:-apple-system,"Segoe UI",Roboto,sans-serif;color:#0e1116}
  .ui-ring__chart{position:relative;width:128px;height:128px;flex:none}
  .ui-ring__chart svg{width:100%;height:100%;display:block}
  .ui-ring__pct{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:600 28px/1 -apple-system,sans-serif;color:#0e1116;letter-spacing:-.01em}
  .ui-ring__pct span{font-size:36px}
  .ui-ring__title{font:600 18px/1.3 -apple-system,sans-serif;margin-bottom:6px}
  .ui-ring__sub{font-size:13px;color:#57606a;line-height:1.5;margin-bottom:12px}
  .ui-ring__badge{display:inline-flex;align-items:center;gap:6px;font:600 12px -apple-system,sans-serif;color:#1a7f37;background:#dafbe1;padding:4px 10px;border-radius:12px}
  .ui-ring__dot{width:6px;height:6px;border-radius:50%;background:#2da44e}
</style>`,
    },
    {
      name: 'YoY Delta Callout',
      nameJa: '前年比デルタ表示',
      desc: '大きな数字＋緑/赤の▲▼チップで「前年比何%」を即座に伝える業績ブロック。',
      detail: '決算ハイライトページや IR スライドでよく見る、当期の数字とその下に小さく「前年比 +12.4%」を緑の上向き三角と一緒に出すパターンです。Apple や PwC の Annual Review、Salesforce の Investor Day などで頻出。改善は緑＋▲、悪化は赤＋▼で色とアイコンを二重に使い、色覚多様性にも配慮します。チップは小さく、数字本体の存在感を邪魔しないように設計するのがコツです。',
      descEn: 'A big number with a green/red triangle chip showing year-over-year change at a glance.',
      detailEn: 'Walk through any earnings highlights page or IR slide and you\'ll find this: a big current-period number with a tiny "+12.4% YoY" pill beside or below it, paired with a green upward triangle. Apple, PwC, and Salesforce use it constantly. Always combine color (green/red) with shape (▲/▼) so color-blind readers can still parse direction. Keep the chip small — the headline number is what should breathe, the delta is just supporting context.',
      code: `<!-- Inspired by Apple investor relations -->
<section class="ui-yoy">
  <div class="ui-yoy__lbl">Net sales — Q4 FY25</div>
  <div class="ui-yoy__row">
    <div class="ui-yoy__num">$94.93<span>B</span></div>
    <div class="ui-yoy__delta ui-yoy__delta--up">
      <svg viewBox="0 0 10 10" width="9" height="9"><polygon points="5,1 9,8 1,8" fill="currentColor"/></svg>
      +12.4% YoY
    </div>
  </div>
  <div class="ui-yoy__sub">Versus $84.49B in Q4 FY24</div>
  <div class="ui-yoy__grid">
    <div class="ui-yoy__mini">
      <div class="ui-yoy__mlbl">Services</div>
      <div class="ui-yoy__mnum">$24.97B</div>
      <div class="ui-yoy__delta ui-yoy__delta--up">▲ 16.3%</div>
    </div>
    <div class="ui-yoy__mini">
      <div class="ui-yoy__mlbl">Wearables</div>
      <div class="ui-yoy__mnum">$9.04B</div>
      <div class="ui-yoy__delta ui-yoy__delta--down">▼ 3.2%</div>
    </div>
  </div>
</section>

<style>
  .ui-yoy{max-width:560px;background:#fff;padding:28px 32px;border-radius:18px;font:-apple-system,"SF Pro Text","Helvetica Neue",sans-serif;color:#1d1d1f;border:1px solid #d2d2d7}
  .ui-yoy__lbl{font-size:13px;color:#6e6e73;font-weight:500;margin-bottom:8px}
  .ui-yoy__row{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;margin-bottom:6px}
  .ui-yoy__num{font:600 44px/1 "SF Pro Display",-apple-system,sans-serif;letter-spacing:-.02em;color:#1d1d1f}
  .ui-yoy__num span{font-size:28px;font-weight:500;color:#86868b;margin-left:2px}
  .ui-yoy__delta{display:inline-flex;align-items:center;gap:4px;font:600 12px -apple-system,sans-serif;padding:4px 10px;border-radius:999px;line-height:1}
  .ui-yoy__delta--up{color:#0a7d3a;background:#e3f7eb}
  .ui-yoy__delta--down{color:#b3261e;background:#fde7e7}
  .ui-yoy__sub{font-size:13px;color:#86868b;margin-bottom:20px}
  .ui-yoy__grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;padding-top:18px;border-top:1px solid #f0f0f2}
  .ui-yoy__mini{display:flex;flex-direction:column;gap:4px}
  .ui-yoy__mlbl{font-size:12px;color:#6e6e73}
  .ui-yoy__mnum{font:600 20px -apple-system,sans-serif;color:#1d1d1f;letter-spacing:-.01em}
  .ui-yoy__mini .ui-yoy__delta{align-self:flex-start;font-size:11px;padding:2px 8px}
</style>`,
    },
    {
      name: 'Capability Card With Icon',
      nameJa: '能力アピール アイコン付きカード',
      desc: '左上にアイコン、その下に数字＋能力名。Big4 のサービス紹介定番カード。',
      detail: 'PwC、Deloitte、KPMG、EY といった Big4 のサービス紹介ページで頻出する、左上にカテゴリアイコン・大きな数字・短いケイパビリティ名で構成された縦長カードです。3〜4枚並べると「これだけのケーパビリティを持っている」という安心感が出ます。アイコンは抽象幾何形(円・三角・四角の組み合わせ)が品よくまとまり、ロゴカラーの差し色をアイコン背景にすると視覚的なリズムが生まれます。',
      descEn: 'A vertical card with an icon top-left, a number, and a capability label — classic Big Four layout.',
      detailEn: 'PwC, Deloitte, KPMG, and EY all rely on this card format on their service pages: an abstract icon in the top-left corner, a bold capability number, and a short label naming the capability. Line up three or four of them and visitors get an immediate sense of breadth and depth. Stick to abstract geometric icons (circle plus triangle, layered squares) for a tasteful look, and use the brand accent color only as the icon background so the rhythm stays calm but recognisable.',
      code: `<!-- Inspired by PwC -->
<section class="ui-cap">
  <article class="ui-cap__card">
    <div class="ui-cap__icon ui-cap__icon--a">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><path d="M12 4v8l5 3"/></svg>
    </div>
    <div class="ui-cap__num">295,000<span>+</span></div>
    <div class="ui-cap__name">Professionals worldwide</div>
    <div class="ui-cap__sub">Across audit, tax, deals and advisory in 152 countries.</div>
  </article>
  <article class="ui-cap__card">
    <div class="ui-cap__icon ui-cap__icon--b">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M8 5v14"/></svg>
    </div>
    <div class="ui-cap__num">$53.1<span>B</span></div>
    <div class="ui-cap__name">Global gross revenue</div>
    <div class="ui-cap__sub">Reported for FY24, growth across all lines of service.</div>
  </article>
  <article class="ui-cap__card">
    <div class="ui-cap__icon ui-cap__icon--c">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><path d="M4 20l6-12 4 6 6-10"/><circle cx="20" cy="4" r="1.6" fill="#fff"/></svg>
    </div>
    <div class="ui-cap__num">21</div>
    <div class="ui-cap__name">Industry sectors covered</div>
    <div class="ui-cap__sub">From financial services to energy transition and health.</div>
  </article>
</section>

<style>
  .ui-cap{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;max-width:700px;font:-apple-system,"ITC Charter","Segoe UI",sans-serif;color:#2d2d2d}
  .ui-cap__card{background:#fff;border:1px solid #e4e4e4;border-radius:4px;padding:22px 18px 20px;display:flex;flex-direction:column;border-top:3px solid #d04a02}
  .ui-cap__icon{width:40px;height:40px;border-radius:4px;display:flex;align-items:center;justify-content:center;margin-bottom:18px}
  .ui-cap__icon--a{background:#d04a02}
  .ui-cap__icon--b{background:#eb8c00}
  .ui-cap__icon--c{background:#a32020}
  .ui-cap__num{font:600 32px/1 "ITC Charter","Georgia",serif;color:#2d2d2d;letter-spacing:-.01em;margin-bottom:4px}
  .ui-cap__num span{font-size:22px;color:#d04a02;font-weight:500}
  .ui-cap__name{font:600 14px/1.3 -apple-system,sans-serif;margin-bottom:6px;color:#2d2d2d}
  .ui-cap__sub{font-size:12px;line-height:1.5;color:#646464}
</style>`,
    },
    {
      name: 'Award & Ranking Badge Stack',
      nameJa: '受賞・ランキング バッジリスト',
      desc: '「#1 in Magic Quadrant / Forrester Wave Leader」など、外部評価を縦に並べる帯。',
      detail: 'Salesforce や Microsoft、AWS の「Why us?」セクションで定番の、Gartner や Forrester といった第三者評価を縦のチップで並べるブロックです。ロゴ風の抽象マークと、評価名・ポジション・年を1行にまとめ、3〜5件並べます。各行に薄い区切り線、左にアブストラクトな「賞章」アイコンを置くと信頼感が増します。実在ロゴは使わず、円・四角・モノグラム文字で抽象化するのが安全です。',
      descEn: 'A vertical list of third-party awards and rankings — "Leader" badges from analyst firms.',
      detailEn: 'Salesforce, Microsoft, and AWS all dedicate a "Why us?" section to this layout: a stack of third-party validations like "Leader in the Gartner Magic Quadrant" or "Forrester Wave Leader," each line carrying a small abstract badge and a year. Three to five rows feels authoritative without becoming a wall of brags. Separate rows with a hairline divider and use an abstract laurel/medal mark on the left for credibility. Never copy real analyst logos — use abstract circles, squares, or monogram letters instead.',
      code: `<!-- Inspired by Salesforce -->
<section class="ui-award">
  <div class="ui-award__title">Recognized by the analysts who matter</div>
  <ul class="ui-award__list">
    <li class="ui-award__row">
      <span class="ui-award__mark ui-award__mark--g"><b>G</b></span>
      <div class="ui-award__txt">
        <div class="ui-award__name">Leader · Magic Quadrant for CRM</div>
        <div class="ui-award__meta">Furthest in Vision, 17 years running · 2025</div>
      </div>
      <span class="ui-award__year">'25</span>
    </li>
    <li class="ui-award__row">
      <span class="ui-award__mark ui-award__mark--f"><b>F</b></span>
      <div class="ui-award__txt">
        <div class="ui-award__name">Leader · The Forrester Wave™</div>
        <div class="ui-award__meta">Sales Force Automation Solutions, Q2 2025</div>
      </div>
      <span class="ui-award__year">Q2'25</span>
    </li>
    <li class="ui-award__row">
      <span class="ui-award__mark ui-award__mark--i"><b>I</b></span>
      <div class="ui-award__txt">
        <div class="ui-award__name">#1 Worldwide Market Share</div>
        <div class="ui-award__meta">IDC, CRM Software Tracker, 11 years running</div>
      </div>
      <span class="ui-award__year">2024</span>
    </li>
    <li class="ui-award__row">
      <span class="ui-award__mark ui-award__mark--c"><b>C</b></span>
      <div class="ui-award__txt">
        <div class="ui-award__name">Top employer · Comparably Awards</div>
        <div class="ui-award__meta">Best Company Culture, Large Companies</div>
      </div>
      <span class="ui-award__year">'25</span>
    </li>
  </ul>
</section>

<style>
  .ui-award{max-width:540px;background:#fff;padding:24px;border:1px solid #e5e5e5;border-radius:8px;font:-apple-system,"Salesforce Sans","Segoe UI",sans-serif;color:#181818}
  .ui-award__title{font:600 16px/1.3 -apple-system,sans-serif;margin-bottom:14px;color:#032e61}
  .ui-award__list{list-style:none;margin:0;padding:0}
  .ui-award__row{display:flex;align-items:center;gap:14px;padding:14px 4px;border-top:1px solid #ececec}
  .ui-award__row:first-child{border-top:0}
  .ui-award__mark{width:36px;height:36px;border-radius:6px;display:flex;align-items:center;justify-content:center;font:700 15px -apple-system,sans-serif;color:#fff;flex:none;letter-spacing:.02em}
  .ui-award__mark--g{background:linear-gradient(135deg,#5851ff,#7e3df0)}
  .ui-award__mark--f{background:linear-gradient(135deg,#0070d2,#06a4ff)}
  .ui-award__mark--i{background:linear-gradient(135deg,#005e9d,#0298d0)}
  .ui-award__mark--c{background:linear-gradient(135deg,#ff8a00,#ffb547)}
  .ui-award__txt{flex:1;min-width:0}
  .ui-award__name{font:600 13.5px/1.35 -apple-system,sans-serif;color:#181818}
  .ui-award__meta{font-size:12px;color:#6b6b6b;margin-top:2px;line-height:1.45}
  .ui-award__year{font:600 11px -apple-system,sans-serif;color:#5851ff;background:#ece8ff;padding:4px 8px;border-radius:4px;letter-spacing:.02em}
</style>`,
    },
    {
      name: 'Annual Report Download CTA',
      nameJa: 'アニュアルレポート ダウンロードCTA',
      desc: '表紙サムネ＋「Annual Review 2025」＋PDFダウンロードボタンの定番カード。',
      detail: 'PwC や Deloitte の IR ページで定番の、アニュアルレポート(統合報告書)へ誘導するカード型 CTA です。左側に表紙のサムネイル風グラデーション＋年号、右側にタイトル・小さなメタ情報(発行月、ページ数、ファイルサイズ)・「Download PDF」ボタン、という横並びレイアウトが王道。表紙画像は実物がなくてもグラデーション＋大きめのタイトル文字でそれっぽく仕立てられます。アクセシビリティ的にファイル形式とサイズを明記するのが親切です。',
      descEn: 'A card linking to the latest annual report — cover thumbnail, title, and a Download PDF button.',
      detailEn: 'Investor relations pages on PwC and Deloitte all use this pattern: a side-by-side card where the left half shows a "cover thumbnail" (often just a gradient with the report title set in serif) and the right half has the report name, publication metadata (month, pages, file size), and a prominent "Download PDF" button. You don\'t need an actual cover image — a gradient with bold title text reads as a cover. Always state the file format and size next to the button as a small accessibility courtesy.',
      code: `<!-- Inspired by Deloitte -->
<article class="ui-ar">
  <div class="ui-ar__cover">
    <div class="ui-ar__year">2025</div>
    <div class="ui-ar__bigtitle">Global<br>Impact<br>Report</div>
    <div class="ui-ar__brand">▲ Deloitte</div>
  </div>
  <div class="ui-ar__body">
    <div class="ui-ar__eyebrow">Annual Review · FY25</div>
    <h3 class="ui-ar__title">Driving lasting impact in a transforming world</h3>
    <p class="ui-ar__desc">Our financial results, ESG commitments and progress on the WorldClimate strategy across 150 countries.</p>
    <ul class="ui-ar__meta">
      <li><span>Published</span><b>Sep 2025</b></li>
      <li><span>Pages</span><b>148</b></li>
      <li><span>File</span><b>PDF · 8.4 MB</b></li>
    </ul>
    <div class="ui-ar__cta">
      <a class="ui-ar__btn" href="#">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v9M4 7l4 4 4-4M3 14h10"/></svg>
        Download report
      </a>
      <a class="ui-ar__alt" href="#">Read online →</a>
    </div>
  </div>
</article>

<style>
  .ui-ar{display:flex;max-width:640px;background:#fff;border:1px solid #d0d7de;border-radius:6px;overflow:hidden;font:-apple-system,"Open Sans","Segoe UI",sans-serif;color:#181818}
  .ui-ar__cover{width:200px;flex:none;background:linear-gradient(160deg,#001a2c 0%,#003a5d 55%,#86bc25 140%);color:#fff;padding:20px 18px;display:flex;flex-direction:column;justify-content:space-between;position:relative}
  .ui-ar__cover::before{content:"";position:absolute;left:18px;top:54px;width:36px;height:2px;background:#86bc25}
  .ui-ar__year{font:600 12px -apple-system,sans-serif;letter-spacing:.18em;opacity:.85}
  .ui-ar__bigtitle{font:600 26px/1.05 "Open Sans","Segoe UI",sans-serif;letter-spacing:-.01em}
  .ui-ar__brand{font:700 12px -apple-system,sans-serif;letter-spacing:.04em;color:#86bc25}
  .ui-ar__body{padding:22px 24px;flex:1}
  .ui-ar__eyebrow{font:600 11px -apple-system,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#86bc25;margin-bottom:10px}
  .ui-ar__title{font:600 19px/1.3 -apple-system,sans-serif;color:#0c0c0c;margin:0 0 10px}
  .ui-ar__desc{font-size:13px;line-height:1.55;color:#52595f;margin:0 0 14px}
  .ui-ar__meta{list-style:none;margin:0 0 16px;padding:12px 0;border-top:1px solid #e4e7eb;border-bottom:1px solid #e4e7eb;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
  .ui-ar__meta li{display:flex;flex-direction:column;gap:2px}
  .ui-ar__meta span{font-size:10.5px;color:#878d92;letter-spacing:.04em;text-transform:uppercase}
  .ui-ar__meta b{font:600 12.5px -apple-system,sans-serif;color:#181818}
  .ui-ar__cta{display:flex;align-items:center;gap:14px}
  .ui-ar__btn{display:inline-flex;align-items:center;gap:8px;background:#86bc25;color:#000;text-decoration:none;font:700 13px -apple-system,sans-serif;padding:9px 16px;border-radius:2px;letter-spacing:.01em}
  .ui-ar__btn:hover{background:#6fa018}
  .ui-ar__alt{font:600 12.5px -apple-system,sans-serif;color:#0076a8;text-decoration:none}
  .ui-ar__alt:hover{text-decoration:underline}
</style>`,
    },
    {
      name: 'Before / After Comparison Stat',
      nameJa: 'Before/After 比較数値',
      desc: 'コンサル介入前と後の数字を左右に並べ、矢印＋デルタで成果を見せる比較ブロック。',
      detail: 'McKinsey、Accenture、Deloitte の事例ページの最後によく登場する、「Before」「After」の数字を左右に置いて間に矢印を入れ、下に大きく「+38% revenue」のようなインパクト数値を出すブロックです。プロジェクトの成果を一発で伝えるのに最強。左の Before はグレー、右の After はブランドカラー、矢印はやや太めの単色シェブロンが定番です。下の総合デルタは数字 + 単位 + 文脈("over 12 months")の3点セットでまとめると信頼感が出ます。',
      descEn: 'Two numbers side by side with an arrow between — the classic "before vs. after the engagement" callout.',
      detailEn: 'McKinsey, Accenture, and Deloitte case studies all close with this block: a "Before" number on the left and an "After" number on the right, with a bold arrow between them and a headline delta beneath ("+38% revenue over 12 months"). It conveys engagement impact in a single glance. Style the Before in muted grey, the After in the brand accent, and use a single thick chevron arrow between them. Pair the headline delta with a time-frame caption so readers know the measurement window.',
      code: `<!-- Inspired by Accenture -->
<section class="ui-ba">
  <div class="ui-ba__eyebrow">Client case · Global retailer</div>
  <div class="ui-ba__title">Re-platforming on cloud-native commerce</div>
  <div class="ui-ba__row">
    <div class="ui-ba__side ui-ba__side--from">
      <div class="ui-ba__tag">Before</div>
      <div class="ui-ba__num">4.2<span>s</span></div>
      <div class="ui-ba__lbl">Avg. page load time</div>
    </div>
    <div class="ui-ba__arrow" aria-hidden="true">
      <svg viewBox="0 0 56 24" width="56" height="24" fill="none" stroke="#a100ff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h48M40 4l10 8-10 8"/></svg>
    </div>
    <div class="ui-ba__side ui-ba__side--to">
      <div class="ui-ba__tag ui-ba__tag--to">After</div>
      <div class="ui-ba__num ui-ba__num--to">0.9<span>s</span></div>
      <div class="ui-ba__lbl">Avg. page load time</div>
    </div>
  </div>
  <div class="ui-ba__delta">
    <div class="ui-ba__big">+38<span>%</span></div>
    <div class="ui-ba__cap">conversion uplift across mobile checkout, measured over the first 12 months post-launch</div>
  </div>
</section>

<style>
  .ui-ba{max-width:660px;background:#0a0a0a;color:#fff;padding:32px 36px;border-radius:6px;font:-apple-system,"Graphik","Segoe UI",sans-serif}
  .ui-ba__eyebrow{font:600 11px -apple-system,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#a100ff;margin-bottom:10px}
  .ui-ba__title{font:500 22px/1.25 -apple-system,sans-serif;letter-spacing:-.01em;margin-bottom:24px;color:#fff}
  .ui-ba__row{display:flex;align-items:center;gap:18px;margin-bottom:24px}
  .ui-ba__side{flex:1;background:rgba(255,255,255,.04);border-radius:6px;padding:18px 20px}
  .ui-ba__side--to{background:linear-gradient(135deg,rgba(161,0,255,.18),rgba(161,0,255,.04));border:1px solid rgba(161,0,255,.4)}
  .ui-ba__tag{display:inline-block;font:600 10px -apple-system,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#9a9a9a;background:rgba(255,255,255,.06);padding:3px 8px;border-radius:3px;margin-bottom:12px}
  .ui-ba__tag--to{color:#a100ff;background:rgba(161,0,255,.12)}
  .ui-ba__num{font:300 44px/1 "Graphik","Helvetica",sans-serif;letter-spacing:-.03em;color:#9a9a9a}
  .ui-ba__num--to{color:#fff}
  .ui-ba__num span{font-size:24px;font-weight:400;margin-left:2px;opacity:.7}
  .ui-ba__lbl{font-size:12px;color:#9a9a9a;margin-top:6px;letter-spacing:.01em}
  .ui-ba__arrow{flex:none;display:flex;align-items:center;justify-content:center}
  .ui-ba__delta{padding-top:22px;border-top:1px solid rgba(255,255,255,.1);display:flex;align-items:center;gap:20px}
  .ui-ba__big{font:600 56px/1 "Graphik","Helvetica",sans-serif;color:#a100ff;letter-spacing:-.03em;flex:none}
  .ui-ba__big span{font-size:36px;font-weight:500;color:#a100ff;margin-left:2px}
  .ui-ba__cap{font-size:13px;line-height:1.5;color:#cfcfcf}
</style>`,
    },
  ],
}
