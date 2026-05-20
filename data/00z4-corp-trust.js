/**
 * UI Parts Showcase (Trust & Social Proof) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-trust',
  title: '企業サイト 信頼・社会的証明',
  titleEn: 'Trust & Social Proof',
  description: 'Stripe・Salesforce・HubSpot・Microsoft・Apple などの企業サイトでよく見る信頼性訴求(ロゴクラウド・推薦コメント・認証バッジ)のUIです。',
  terms: [
    {
      name: 'Logo Cloud "Trusted by"',
      nameJa: 'ロゴクラウド(導入企業)',
      desc: '「20万社以上が利用」の見出しと、薄いグレーで並んだ企業ロゴ列。',
      detail: 'ロゴクラウドは、トップページのファーストビュー下に置かれることが多い「導入企業の信頼バー」です。「Trusted by 200K+ companies」のような短い数値見出しと、グレースケールで色を抜いた企業ロゴを横一列に並べることで、特定のブランドを目立たせず全体として「みんな使っている」感を演出します。フルカラーにしないのは、自社サイトの主役(製品スクショやCTA)を喰わないようにするためです。Stripe・Vercel・Linearなどのトップで定番のパターンです。',
      descEn: 'A "Trusted by N companies" headline above a row of grayscale customer logos.',
      detailEn: 'A logo cloud usually sits just below the hero on a B2B homepage as a "trust bar." A short numerical headline like "Trusted by 200K+ companies" sits over a row of customer wordmarks rendered in grayscale, so no one brand pops — the row reads as a single signal of broad adoption. The desaturated treatment intentionally keeps focus on the page\'s real hero (product shot, CTA). This pattern is iconic on Stripe, Vercel, and Linear homepages.',
      code: `<!-- Inspired by Stripe -->
<section class="ui-lc">
  <p class="ui-lc__head">Trusted by <b>200,000+</b> growing companies worldwide</p>
  <div class="ui-lc__row">
    <span class="ui-lc__mark"><svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="10" fill="currentColor"/><circle cx="12" cy="12" r="4" fill="#fff"/></svg>Orbita</span>
    <span class="ui-lc__mark"><svg viewBox="0 0 24 24" width="22" height="22"><rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor"/></svg>Quadral</span>
    <span class="ui-lc__mark"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M4 20 L12 4 L20 20 Z" fill="currentColor"/></svg>Apexly</span>
    <span class="ui-lc__mark"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 12 L12 3 L21 12 L12 21 Z" fill="currentColor"/></svg>Northwind</span>
    <span class="ui-lc__mark"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M6 6 H18 V18 H6 Z M9 9 H15 V15 H9 Z" fill="currentColor"/></svg>Frameset</span>
    <span class="ui-lc__mark"><svg viewBox="0 0 24 24" width="22" height="22"><circle cx="8" cy="12" r="5" fill="currentColor"/><circle cx="16" cy="12" r="5" fill="currentColor" opacity=".55"/></svg>Lumen</span>
  </div>
</section>

<style>
  .ui-lc{max-width:680px;padding:36px 20px;background:#fff;font:15px -apple-system,"Inter","Segoe UI",sans-serif;text-align:center}
  .ui-lc__head{margin:0 0 22px;color:#425466;letter-spacing:.01em}
  .ui-lc__head b{color:#0a2540;font-weight:600}
  .ui-lc__row{display:flex;flex-wrap:wrap;justify-content:center;gap:28px 36px;color:#8898aa}
  .ui-lc__mark{display:inline-flex;align-items:center;gap:8px;font:600 15px -apple-system,"Inter",sans-serif;letter-spacing:-.01em;filter:grayscale(1);opacity:.75;transition:.2s}
  .ui-lc__mark:hover{opacity:1}
</style>`,
    },
    {
      name: 'Testimonial Card',
      nameJa: '推薦コメントカード',
      desc: '引用符と2行の感想、顔写真・名前・役職・会社名がセットになった証言カード。',
      detail: '個別のお客様の声を1枚にまとめた「Testimonialカード」は、信頼性訴求の主役パーツです。冒頭に大きな引用符(❝)、続いて2〜3行の感想本文、最後に顔写真・氏名・役職・会社名の組を置く構成が定番です。本文は実名・実会社・具体的な数字や担当業務をセットで載せると説得力が一段上がります。Salesforce・HubSpot・Notionの導入事例ページで見られる王道レイアウトです。',
      descEn: 'A card with a quotation mark, a short quote, and an author row (avatar, name, title, company).',
      detailEn: 'A testimonial card packs one customer\'s endorsement into a single tile, and it carries a lot of weight on B2B sites. The canonical layout opens with an oversized quotation glyph (❝), follows with a two- or three-line quote, and ends with a portrait, full name, job title, and company. Specificity sells — real names, real companies, and concrete numbers convert far better than anonymous praise. Salesforce, HubSpot, and Notion all lean on this pattern in their customer pages.',
      code: `<!-- Inspired by HubSpot -->
<article class="ui-tm">
  <div class="ui-tm__q">&ldquo;</div>
  <p class="ui-tm__body">HubSpot replaced four separate tools and our pipeline visibility went from spreadsheets-on-Monday to real-time. Closed-won is up 38% since rollout.</p>
  <div class="ui-tm__who">
    <span class="ui-tm__avatar" aria-hidden="true">MK</span>
    <div>
      <div class="ui-tm__name">Maya Karlsson</div>
      <div class="ui-tm__role">VP Revenue Operations · Linnea Studio</div>
    </div>
  </div>
</article>

<style>
  .ui-tm{position:relative;max-width:420px;padding:32px 28px 26px;background:#fff;border-radius:14px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 8px 24px rgba(45,42,72,.08);font:15px -apple-system,"Inter","Segoe UI",sans-serif;color:#33475b}
  .ui-tm__q{position:absolute;top:8px;left:18px;font:700 56px Georgia,serif;color:#ff7a59;line-height:1}
  .ui-tm__body{margin:14px 0 22px;line-height:1.55;font-size:16px;color:#2e3a4b}
  .ui-tm__who{display:flex;align-items:center;gap:12px}
  .ui-tm__avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#ff7a59,#ffb199);display:inline-flex;align-items:center;justify-content:center;color:#fff;font:600 14px -apple-system,sans-serif;letter-spacing:.04em}
  .ui-tm__name{font-weight:600;color:#0d1b34;font-size:14.5px}
  .ui-tm__role{color:#6b7a8f;font-size:13px;margin-top:1px}
</style>`,
    },
    {
      name: 'Testimonial Carousel',
      nameJa: '推薦カルーセル',
      desc: '長文の声を1枚ずつスライドで切り替え、下にドットの位置インジケータが並ぶ。',
      detail: '推薦コメントが複数あるときは、縦に全部並べると圧迫感が出るのでカルーセル化して横スライドで切り替えるのが定石です。各スライドには本文(やや長め)・人物の顔写真・氏名・所属を載せ、下部にドット型のページネーションを置いて何枚目を見ているか分かるようにします。Apple・Salesforce・Atlassianの製品ページで頻繁に見るパターンで、左右の矢印やスワイプ、ドット直接クリックの3経路で遷移できると親切です。',
      descEn: 'One quote per slide with a person row, navigable via dot pagination underneath.',
      detailEn: 'When you have several testimonials, stacking them vertically gets heavy fast — a carousel keeps things tidy by showing one quote at a time with horizontal slides. Each slide carries a longer quote, an avatar, name, and affiliation, with a row of dot indicators below to show position. Apple, Salesforce, and Atlassian use this exact pattern on product pages. For maximum usability, support three navigation paths: arrow buttons, swipe gestures, and direct clicks on the dots.',
      code: `<!-- Inspired by Salesforce -->
<section class="ui-tc" id="tc">
  <div class="ui-tc__slide is-active">
    <p class="ui-tc__quote">"We re-platformed onto Salesforce in 11 weeks. Pipeline forecasting, support cases, and renewals now live in one place — our ops team got their Fridays back."</p>
    <div class="ui-tc__who"><span class="ui-tc__av" style="background:#1589ee">JN</span><div><b>Joon Nakamura</b><div>CRO · Helio Robotics</div></div></div>
  </div>
  <div class="ui-tc__slide">
    <p class="ui-tc__quote">"Einstein scoring surfaced 240 dormant accounts with high re-buy intent. We closed 14 of them in the first quarter — that one workflow paid for the platform."</p>
    <div class="ui-tc__who"><span class="ui-tc__av" style="background:#032d60">EC</span><div><b>Elena Cruz</b><div>Head of Sales · Northgate Foods</div></div></div>
  </div>
  <div class="ui-tc__slide">
    <p class="ui-tc__quote">"Service Cloud cut first-response time from 6h to 38min. Our CSAT climbed 12 points without adding headcount."</p>
    <div class="ui-tc__who"><span class="ui-tc__av" style="background:#00a1e0">RT</span><div><b>Ravi Tandon</b><div>VP Customer Success · Borealis Logistics</div></div></div>
  </div>
  <div class="ui-tc__dots">
    <button class="ui-tc__dot is-on" data-i="0" aria-label="Slide 1"></button>
    <button class="ui-tc__dot" data-i="1" aria-label="Slide 2"></button>
    <button class="ui-tc__dot" data-i="2" aria-label="Slide 3"></button>
  </div>
</section>

<style>
  .ui-tc{max-width:560px;padding:36px 32px 24px;background:linear-gradient(180deg,#f6f9fc,#fff);border-radius:16px;font:15px "Salesforce Sans",-apple-system,"Inter",sans-serif;color:#16325c;position:relative;min-height:240px}
  .ui-tc__slide{display:none;animation:ui-tc-in .3s ease}
  .ui-tc__slide.is-active{display:block}
  @keyframes ui-tc-in{from{opacity:0;transform:translateX(8px)}to{opacity:1;transform:none}}
  .ui-tc__quote{font:500 17px/1.55 Georgia,serif;color:#032d60;margin:0 0 24px}
  .ui-tc__who{display:flex;align-items:center;gap:12px;font-size:13px;color:#54698d}
  .ui-tc__who b{color:#16325c;font-size:14px;display:block}
  .ui-tc__av{width:40px;height:40px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#fff;font:600 13px -apple-system,sans-serif}
  .ui-tc__dots{display:flex;justify-content:center;gap:8px;margin-top:18px}
  .ui-tc__dot{width:8px;height:8px;border-radius:50%;border:0;background:#c9d4e3;padding:0;cursor:pointer;transition:.2s}
  .ui-tc__dot.is-on{background:#1589ee;width:22px;border-radius:4px}
</style>

<script>
  (function(){
    const r=document.getElementById('tc');
    const s=r.querySelectorAll('.ui-tc__slide');
    const d=r.querySelectorAll('.ui-tc__dot');
    let i=0;
    function go(n){s[i].classList.remove('is-active');d[i].classList.remove('is-on');i=n;s[i].classList.add('is-active');d[i].classList.add('is-on')}
    d.forEach(b=>b.addEventListener('click',()=>go(+b.dataset.i)));
    setInterval(()=>go((i+1)%s.length),4200);
  })();
</script>`,
    },
    {
      name: 'Press Mention Bar',
      nameJa: 'メディア掲載バー',
      desc: '「As featured in」見出しの下に Forbes / TechCrunch / WSJ などの紙名を並べる帯。',
      detail: '報道機関の掲載歴を見せる「As featured in」バーは、ロゴクラウドの報道版です。Forbes・TechCrunch・Wall Street Journal・Wired のように、誰もが知る媒体のロゴワードマークを横一列に並べ、上に小さな見出しを添えます。媒体ロゴは色を抜くか単色にし、メディアの権威を借りて「ちゃんと社会的に注目されている会社」だと一瞬で伝えます。スタートアップのトップページや、創業者の個人サイトでも定番です。',
      descEn: 'An "As featured in" strip listing major press outlets like Forbes, TechCrunch, and WSJ.',
      detailEn: 'A press mention bar is the editorial cousin of the logo cloud. A short "As featured in" headline sits above a row of recognizable publication wordmarks — Forbes, TechCrunch, The Wall Street Journal, Wired — usually rendered monochrome so the row reads as one unified credibility signal. The implicit message: "real journalists noticed us." You\'ll find this pattern on most startup homepages and on the personal sites of founders or thought leaders.',
      code: `<!-- Inspired by Vercel -->
<section class="ui-press">
  <p class="ui-press__head">As featured in</p>
  <div class="ui-press__row">
    <span class="ui-press__logo" style="font-family:'Times New Roman',serif;font-weight:900;letter-spacing:-.03em">Forbes</span>
    <span class="ui-press__sep"></span>
    <span class="ui-press__logo" style="font-family:'Helvetica Neue',sans-serif;font-weight:800;letter-spacing:-.04em">TechCrunch</span>
    <span class="ui-press__sep"></span>
    <span class="ui-press__logo" style="font-family:'Times New Roman',serif;font-weight:900;letter-spacing:.01em">The Wall Street Journal</span>
    <span class="ui-press__sep"></span>
    <span class="ui-press__logo" style="font-family:'Georgia',serif;font-style:italic;font-weight:700;letter-spacing:-.02em">WIRED</span>
    <span class="ui-press__sep"></span>
    <span class="ui-press__logo" style="font-family:'Helvetica Neue',sans-serif;font-weight:700;letter-spacing:.18em;text-transform:uppercase;font-size:16px">Bloomberg</span>
  </div>
</section>

<style>
  .ui-press{max-width:700px;padding:28px 20px;background:#000;color:#fff;text-align:center}
  .ui-press__head{margin:0 0 18px;font:500 11px -apple-system,"Inter",sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#8a8a8a}
  .ui-press__row{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;color:#e6e6e6}
  .ui-press__logo{font-size:18px;opacity:.85;transition:.2s;white-space:nowrap}
  .ui-press__logo:hover{opacity:1}
  .ui-press__sep{width:1px;height:18px;background:#2a2a2a}
  @media (max-width:520px){.ui-press__sep{display:none}}
</style>`,
    },
    {
      name: 'Compliance Badge Row',
      nameJa: '認証・コンプライアンスバッジ',
      desc: 'SOC 2 / ISO 27001 / HIPAA / GDPR の認証マークを横一列に並べる帯。',
      detail: 'BtoB SaaSで購買担当者(特にセキュリティ・法務)を安心させるための「コンプライアンスバッジ列」です。SOC 2 Type II、ISO 27001、HIPAA、GDPR、CCPAなどの認証マークを丸または盾型のバッジで並べ、各バッジには認証名と取得済みを表すチェックを添えます。フッター手前、料金プランの近く、Enterpriseプランの説明箇所に置かれることが多く、Stripe・Notion・Linearなどの「セキュリティページ」では筆頭のセクションです。',
      descEn: 'A horizontal strip of compliance badges — SOC 2, ISO 27001, HIPAA, GDPR.',
      detailEn: 'B2B SaaS sites lean on a compliance badge row to reassure procurement, security, and legal stakeholders. Round or shield-shaped badges line up across the page, each labeled with a standard like SOC 2 Type II, ISO 27001, HIPAA, GDPR, or CCPA — often with a check mark to signal "achieved." The row tends to live just above the footer, near pricing, or inside the Enterprise tier description. On Stripe, Notion, and Linear security pages, this strip is the headline section.',
      code: `<!-- Inspired by Notion -->
<section class="ui-cb">
  <h3 class="ui-cb__title">Enterprise-grade security &amp; compliance</h3>
  <p class="ui-cb__sub">Audited annually by independent third parties.</p>
  <div class="ui-cb__row">
    <div class="ui-cb__badge">
      <div class="ui-cb__shield" style="background:linear-gradient(135deg,#1a73e8,#0b5cba)">SOC<br><b>2</b></div>
      <div class="ui-cb__name">SOC 2<br><span>Type II</span></div>
    </div>
    <div class="ui-cb__badge">
      <div class="ui-cb__shield" style="background:linear-gradient(135deg,#0f9d58,#0b7a44)">ISO</div>
      <div class="ui-cb__name">ISO 27001<br><span>Certified</span></div>
    </div>
    <div class="ui-cb__badge">
      <div class="ui-cb__shield" style="background:linear-gradient(135deg,#db4437,#a93226)">HIPAA</div>
      <div class="ui-cb__name">HIPAA<br><span>Compliant</span></div>
    </div>
    <div class="ui-cb__badge">
      <div class="ui-cb__shield" style="background:linear-gradient(135deg,#f4b400,#c98a00)">GDPR</div>
      <div class="ui-cb__name">GDPR<br><span>Ready</span></div>
    </div>
    <div class="ui-cb__badge">
      <div class="ui-cb__shield" style="background:linear-gradient(135deg,#673ab7,#4a288c)">CCPA</div>
      <div class="ui-cb__name">CCPA<br><span>Aligned</span></div>
    </div>
  </div>
</section>

<style>
  .ui-cb{max-width:680px;padding:32px 24px;background:#fafafa;border-radius:12px;text-align:center;font:14px -apple-system,"Inter","Segoe UI",sans-serif;color:#37352f}
  .ui-cb__title{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}
  .ui-cb__sub{margin:0 0 24px;color:#6b6b6b;font-size:14px}
  .ui-cb__row{display:flex;justify-content:center;flex-wrap:wrap;gap:22px}
  .ui-cb__badge{display:flex;flex-direction:column;align-items:center;gap:8px;width:96px}
  .ui-cb__shield{width:64px;height:72px;clip-path:polygon(50% 0,100% 18%,100% 70%,50% 100%,0 70%,0 18%);display:flex;align-items:center;justify-content:center;color:#fff;font:700 14px -apple-system,sans-serif;letter-spacing:.02em;text-align:center;line-height:1.05;box-shadow:0 4px 10px rgba(0,0,0,.08)}
  .ui-cb__shield b{font-size:18px;display:block}
  .ui-cb__name{font-size:12.5px;font-weight:600;color:#37352f;line-height:1.3}
  .ui-cb__name span{font-weight:400;color:#8a8a8a;font-size:11.5px}
</style>`,
    },
    {
      name: 'Case Study Metric Card',
      nameJa: '事例ミニカード(数字訴求)',
      desc: '顧客ロゴと「+300% revenue / -40% support tickets」のような大きな数字。',
      detail: '導入事例(Case Study)のサムネとして使われる「数字訴求カード」です。左上に顧客ロゴ、中央に巨大なパーセンテージ(色つき)、その下に何の指標が動いたかの一行説明、最下部に「Read the case study →」のリンク、という構成が王道です。Stripe・Linear・Atlassianの導入事例トップに並ぶことが多く、訪問者は数字だけ流し読みでも「これだけ効くのか」と直感的に分かります。',
      descEn: 'A mini case-study tile showing a customer logo plus a bold percentage uplift.',
      detailEn: 'A case study metric card is the "thumbnail" version of a longer customer story. The canonical layout puts a customer logo top-left, an oversized colored percentage in the middle (e.g., "+300% revenue"), a one-line description of which KPI moved, and a "Read the case study →" link at the bottom. Stripe, Linear, and Atlassian use grids of these cards on their customer-stories index. Even a skim reader walks away with the headline: "this product moves numbers."',
      code: `<!-- Inspired by Stripe -->
<article class="ui-cs">
  <div class="ui-cs__head">
    <span class="ui-cs__logo">
      <svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 12 L12 3 L21 12 L12 21 Z" fill="#635bff"/></svg>
    </span>
    <span class="ui-cs__co">Northwind Coffee</span>
  </div>
  <div class="ui-cs__metric">
    <span class="ui-cs__stat" style="color:#00d924">+312%</span>
    <span class="ui-cs__label">subscription revenue<br>in 9 months</span>
  </div>
  <div class="ui-cs__metric ui-cs__metric--sub">
    <span class="ui-cs__stat-sm" style="color:#ff5996">-41%</span>
    <span class="ui-cs__label-sm">support tickets after Stripe Billing rollout</span>
  </div>
  <a class="ui-cs__link" href="#">Read the case study <span>→</span></a>
</article>

<style>
  .ui-cs{max-width:340px;padding:26px 24px 22px;background:#fff;border-radius:14px;box-shadow:0 0 0 1px rgba(50,50,93,.06),0 4px 18px rgba(50,50,93,.07);font:14px -apple-system,"Inter","Segoe UI",sans-serif;color:#425466}
  .ui-cs__head{display:flex;align-items:center;gap:8px;padding-bottom:18px;border-bottom:1px solid #eef0f4;margin-bottom:18px}
  .ui-cs__logo{display:inline-flex;align-items:center;justify-content:center}
  .ui-cs__co{font:600 14px -apple-system,sans-serif;color:#0a2540;letter-spacing:-.01em}
  .ui-cs__metric{margin-bottom:16px}
  .ui-cs__stat{font:700 44px -apple-system,"Inter",sans-serif;letter-spacing:-.03em;line-height:1;display:block;margin-bottom:6px}
  .ui-cs__stat-sm{font:700 22px -apple-system,"Inter",sans-serif;letter-spacing:-.02em;display:block;margin-bottom:2px}
  .ui-cs__label{color:#425466;font-size:13.5px;line-height:1.4;display:block}
  .ui-cs__label-sm{color:#697386;font-size:13px;line-height:1.4;display:block}
  .ui-cs__metric--sub{padding-top:14px;border-top:1px dashed #eef0f4}
  .ui-cs__link{display:inline-flex;align-items:center;gap:4px;margin-top:8px;color:#635bff;font:600 13.5px -apple-system,sans-serif;text-decoration:none;transition:.15s}
  .ui-cs__link:hover{color:#4a40d4}
  .ui-cs__link span{transition:transform .15s}
  .ui-cs__link:hover span{transform:translateX(3px)}
</style>`,
    },
    {
      name: 'Star Rating Summary',
      nameJa: 'スター評価サマリー',
      desc: '「4.8/5 from 12,400 reviews」と星バー、G2やCapterraへのソースリンク。',
      detail: 'ソフトウェアレビューサイト(G2、Capterra、TrustRadius)での平均評価をトップページに引用するのが「スター評価サマリーブロック」です。大きな平均点(4.8/5)、5つ星のバー、レビュー総件数、出典サイトへのリンクをひとつのブロックにまとめます。第三者のレビューサイトは自社の主張よりも客観性が高いとみなされるため、ハイブランドのSaaSでも好んで使われます。複数ソースを並べて「G2: 4.8 / Capterra: 4.7」のように並列表示することもあります。',
      descEn: 'A summary block with average rating, star bar, review count, and a source link (G2, Capterra).',
      detailEn: 'Software review sites like G2, Capterra, and TrustRadius are seen as more objective than vendor copy, so SaaS homepages often quote their aggregate scores. The summary block bundles four things: a large average score ("4.8 / 5"), a row of stars rendered as a bar, the total review count ("from 12,400 reviews"), and a link out to the source. Many companies stack two or three of these blocks side by side ("G2: 4.8 · Capterra: 4.7 · TrustRadius: 4.9") to show consistency across review platforms.',
      code: `<!-- Inspired by HubSpot -->
<section class="ui-sr">
  <div class="ui-sr__card">
    <div class="ui-sr__top">
      <span class="ui-sr__score">4.8</span>
      <span class="ui-sr__out">/5</span>
    </div>
    <div class="ui-sr__stars" aria-label="4.8 out of 5">
      <span class="ui-sr__bar"><span class="ui-sr__fill" style="width:96%"></span></span>
      <span class="ui-sr__ico">★★★★★</span>
    </div>
    <p class="ui-sr__count">from <b>12,438</b> verified reviews</p>
    <a class="ui-sr__src" href="#">
      <span class="ui-sr__srclogo">G2</span>
      <span>See on G2 Crowd →</span>
    </a>
  </div>
  <div class="ui-sr__card">
    <div class="ui-sr__top">
      <span class="ui-sr__score">4.7</span>
      <span class="ui-sr__out">/5</span>
    </div>
    <div class="ui-sr__stars" aria-label="4.7 out of 5">
      <span class="ui-sr__bar"><span class="ui-sr__fill" style="width:94%"></span></span>
      <span class="ui-sr__ico">★★★★★</span>
    </div>
    <p class="ui-sr__count">from <b>8,902</b> verified reviews</p>
    <a class="ui-sr__src" href="#">
      <span class="ui-sr__srclogo" style="background:#FF7A2F">Cp</span>
      <span>See on Capterra →</span>
    </a>
  </div>
</section>

<style>
  .ui-sr{display:flex;gap:16px;max-width:620px;font:14px -apple-system,"Inter","Segoe UI",sans-serif;color:#33475b;flex-wrap:wrap}
  .ui-sr__card{flex:1;min-width:260px;padding:22px 22px 18px;background:#fff;border:1px solid #e6ecf0;border-radius:10px}
  .ui-sr__top{display:flex;align-items:baseline;gap:2px;margin-bottom:6px}
  .ui-sr__score{font:700 38px -apple-system,"Inter",sans-serif;letter-spacing:-.02em;color:#0d1b34;line-height:1}
  .ui-sr__out{color:#7b8ba3;font-size:18px;font-weight:500}
  .ui-sr__stars{position:relative;font:18px sans-serif;line-height:1;letter-spacing:2px;color:#e1e7ee;margin:8px 0}
  .ui-sr__bar{display:inline-block;position:absolute;left:0;top:0;height:1em;overflow:hidden;color:#ffb400}
  .ui-sr__fill{display:inline-block;height:100%;overflow:hidden;white-space:nowrap;color:#ffb400}
  .ui-sr__fill::before{content:"★★★★★";letter-spacing:2px}
  .ui-sr__count{margin:10px 0 14px;color:#516f90;font-size:13.5px}
  .ui-sr__count b{color:#0d1b34;font-weight:600}
  .ui-sr__src{display:inline-flex;align-items:center;gap:8px;color:#0091ae;text-decoration:none;font:600 13.5px -apple-system,sans-serif}
  .ui-sr__src:hover{color:#006a82}
  .ui-sr__srclogo{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:4px;background:#ff492c;color:#fff;font:700 11px -apple-system,sans-serif}
</style>`,
    },
    {
      name: 'Award Ribbon Callout',
      nameJa: '受賞リボン付きカード',
      desc: 'カードの右上に斜めのリボン「Best of 2025」、本体には受賞内容と出典。',
      detail: 'カードの角に斜めリボンを掛けた「受賞リボンカード」は、Award・Best of・Editor\'s Choiceなどの権威ある栄誉を視覚的に強調するパーツです。リボンは45度に傾けて右上(または左上)の角を覆い、白抜き文字で「Best of 2025」「Editor\'s Pick」などを記載します。本体はシンプルにカテゴリ名・受賞名・出典(主催団体や媒体名)・受賞月を載せます。Apple App Storeのフィーチャー枠やCapterraのBest Of、TechCrunch Disruptの受賞バッジで定番です。',
      descEn: 'A card with a diagonal "Best of 2025" ribbon across one corner.',
      detailEn: 'An award ribbon callout drapes a 45°-rotated banner across one corner of a card — usually the top right — with a white "Best of 2025" or "Editor\'s Pick" label cut in. The card body underneath stays simple: category, award name, source (publication or association), and the month it was awarded. You see this on the App Store\'s Editor\'s Choice features, Capterra\'s Best Of badges, and TechCrunch Disrupt finalist cards. The ribbon does the visual heavy lifting; the text underneath just confirms what the badge means.',
      code: `<!-- Inspired by Apple App Store -->
<article class="ui-aw">
  <span class="ui-aw__ribbon"><span>Best of 2025</span></span>
  <div class="ui-aw__head">
    <span class="ui-aw__icon">★</span>
    <span class="ui-aw__cat">Editor's Choice</span>
  </div>
  <h3 class="ui-aw__title">Product of the Year</h3>
  <p class="ui-aw__sub">Awarded in the Productivity &amp; Collaboration category for redefining how distributed teams plan their work.</p>
  <div class="ui-aw__meta">
    <span class="ui-aw__src">— Capterra Shortlist, January 2025</span>
  </div>
</article>

<style>
  .ui-aw{position:relative;max-width:380px;padding:34px 28px 26px;background:linear-gradient(160deg,#fff8e7 0%,#fff 55%);border-radius:14px;box-shadow:0 1px 2px rgba(0,0,0,.05),0 12px 30px rgba(60,40,0,.08);overflow:hidden;font:15px -apple-system,"Inter","SF Pro",sans-serif;color:#1d1d1f}
  .ui-aw__ribbon{position:absolute;top:18px;right:-46px;width:170px;transform:rotate(45deg);background:linear-gradient(90deg,#f5b73d,#e8941a);color:#fff;text-align:center;padding:6px 0;font:700 11.5px -apple-system,sans-serif;letter-spacing:.08em;text-transform:uppercase;box-shadow:0 2px 6px rgba(180,110,0,.25)}
  .ui-aw__ribbon::before,.ui-aw__ribbon::after{content:"";position:absolute;border:6px solid transparent;border-top-color:#a36705;bottom:-12px}
  .ui-aw__ribbon::before{left:0;border-left-color:#a36705}
  .ui-aw__ribbon::after{right:0;border-right-color:#a36705}
  .ui-aw__head{display:flex;align-items:center;gap:8px;margin-bottom:10px;color:#a36705}
  .ui-aw__icon{font-size:18px}
  .ui-aw__cat{font:600 12.5px -apple-system,sans-serif;letter-spacing:.04em;text-transform:uppercase}
  .ui-aw__title{margin:0 0 8px;font:700 24px -apple-system,"SF Pro Display",sans-serif;letter-spacing:-.015em}
  .ui-aw__sub{margin:0 0 16px;color:#3a3a3c;line-height:1.5;font-size:14.5px}
  .ui-aw__meta{padding-top:14px;border-top:1px solid rgba(180,110,0,.18)}
  .ui-aw__src{color:#86868b;font-size:12.5px;font-style:italic}
</style>`,
    },
    {
      name: 'Customer Map Widget',
      nameJa: '導入国マップウィジェット',
      desc: '「32カ国で利用」の見出しと、ドット集合で表現した世界地図風の背景。',
      detail: '導入地域の広さを訴求するときに使うのが「ドット世界地図ウィジェット」です。中央に「32 countries · 4 continents」のような大きな数字を配置し、背景に等間隔のドットで描いた抽象的な世界地図を敷きます。実際の地理データは持たず装飾としての地図ですが、グローバル展開のイメージを瞬時に伝えられます。Stripe・Vercel・Notionのトップや、API企業のステータスページ、Microsoftのリージョン紹介で見られるパターンで、ドットの一部だけを強調色にして主要拠点を表すこともあります。',
      descEn: 'A widget showing a customer-count headline over a stylized dotted world map background.',
      detailEn: 'A customer map widget signals global reach by centering a big number — "32 countries · 4 continents" — over an abstract dotted world map. The map itself isn\'t pulled from real geographic data; it\'s a decorative grid of dots roughly arranged to suggest continents. Stripe, Vercel, Notion, API-company status pages, and Microsoft\'s region documentation all use variants of this widget. Often a handful of dots are tinted in a brand color to highlight major hubs (HQ, data centers) without needing a full interactive map.',
      code: `<!-- Inspired by Microsoft Azure -->
<section class="ui-map">
  <svg class="ui-map__bg" viewBox="0 0 600 240" aria-hidden="true">
    <defs>
      <radialGradient id="ui-map-g" cx="50%" cy="40%">
        <stop offset="0" stop-color="#3b82f6" stop-opacity=".4"/>
        <stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="240" fill="url(#ui-map-g)"/>
    <g fill="#5b8def" fill-opacity=".55">
      <!-- N America -->
      <circle cx="80" cy="80" r="2"/><circle cx="92" cy="70" r="2"/><circle cx="104" cy="76" r="2"/><circle cx="116" cy="82" r="2"/><circle cx="128" cy="78" r="2"/><circle cx="140" cy="86" r="2"/><circle cx="100" cy="92" r="2"/><circle cx="112" cy="98" r="2"/><circle cx="124" cy="94" r="2"/><circle cx="88" cy="104" r="2"/><circle cx="100" cy="112" r="2"/><circle cx="116" cy="120" r="2"/>
      <!-- S America -->
      <circle cx="160" cy="150" r="2"/><circle cx="170" cy="162" r="2"/><circle cx="166" cy="176" r="2"/><circle cx="158" cy="188" r="2"/><circle cx="172" cy="196" r="2"/>
      <!-- Europe -->
      <circle cx="290" cy="76" r="2"/><circle cx="302" cy="70" r="2"/><circle cx="314" cy="80" r="2"/><circle cx="298" cy="88" r="2"/><circle cx="310" cy="94" r="2"/><circle cx="322" cy="86" r="2"/>
      <!-- Africa -->
      <circle cx="318" cy="120" r="2"/><circle cx="330" cy="132" r="2"/><circle cx="322" cy="148" r="2"/><circle cx="316" cy="162" r="2"/><circle cx="332" cy="170" r="2"/><circle cx="328" cy="184" r="2"/>
      <!-- Asia -->
      <circle cx="380" cy="80" r="2"/><circle cx="396" cy="74" r="2"/><circle cx="412" cy="82" r="2"/><circle cx="428" cy="76" r="2"/><circle cx="444" cy="84" r="2"/><circle cx="460" cy="78" r="2"/><circle cx="402" cy="96" r="2"/><circle cx="418" cy="104" r="2"/><circle cx="434" cy="98" r="2"/><circle cx="450" cy="106" r="2"/><circle cx="466" cy="100" r="2"/><circle cx="416" cy="120" r="2"/><circle cx="432" cy="128" r="2"/><circle cx="448" cy="122" r="2"/>
      <!-- Oceania -->
      <circle cx="490" cy="172" r="2"/><circle cx="504" cy="180" r="2"/><circle cx="498" cy="192" r="2"/>
    </g>
    <g fill="#3b82f6">
      <circle cx="104" cy="76" r="4"><animate attributeName="r" values="4;7;4" dur="2.4s" repeatCount="indefinite"/></circle>
      <circle cx="302" cy="70" r="4"><animate attributeName="r" values="4;7;4" dur="2.4s" begin=".6s" repeatCount="indefinite"/></circle>
      <circle cx="428" cy="76" r="4"><animate attributeName="r" values="4;7;4" dur="2.4s" begin="1.2s" repeatCount="indefinite"/></circle>
      <circle cx="498" cy="192" r="4"><animate attributeName="r" values="4;7;4" dur="2.4s" begin="1.8s" repeatCount="indefinite"/></circle>
    </g>
  </svg>
  <div class="ui-map__copy">
    <div class="ui-map__stat">32 <span>countries</span></div>
    <p class="ui-map__sub">Customers in <b>4 continents</b>, with regional data residency in US, EU, and APAC.</p>
  </div>
</section>

<style>
  .ui-map{position:relative;max-width:640px;height:240px;border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#0a1733,#172a52);font:15px -apple-system,"Segoe UI",sans-serif;color:#fff}
  .ui-map__bg{position:absolute;inset:0;width:100%;height:100%}
  .ui-map__copy{position:relative;padding:36px 32px;max-width:280px}
  .ui-map__stat{font:700 56px -apple-system,"Segoe UI",sans-serif;letter-spacing:-.03em;line-height:1;color:#fff}
  .ui-map__stat span{font-size:18px;font-weight:500;color:#a8c4ff;display:inline-block;margin-left:4px;letter-spacing:0}
  .ui-map__sub{margin:14px 0 0;color:#c8d8f5;font-size:14px;line-height:1.5}
  .ui-map__sub b{color:#fff;font-weight:600}
</style>`,
    },
    {
      name: 'CTA Trust Strip',
      nameJa: 'CTA下の信頼ストリップ',
      desc: '「✓ クレカ不要 ✓ 14日無料 ✓ いつでも解約」のチェック付き横並びテキスト。',
      detail: 'プライマリCTAボタン(例: 「Start free trial」)の真下に置く「信頼ストリップ」です。チェックマーク付きで「No credit card needed」「14-day free trial」「Cancel anytime」など、ユーザーが申し込みをためらう理由を先回りで打ち消す短いフレーズを横一列に並べます。ボタンの色や形より目立たないようテキストサイズを抑え、薄い色のチェックを使うのが定番です。Stripe・HubSpot・Salesforce・Notionの料金ページや無料トライアルのコンバージョン箇所でほぼ必須のパーツです。',
      descEn: 'A row of inline checkpoints below a CTA — "No credit card · 14-day trial · Cancel anytime".',
      detailEn: 'A CTA trust strip sits immediately under a primary call-to-action (e.g., "Start free trial") and pre-empts the hesitations users typically have at the moment of signup. Three or four short phrases with checkmarks line up horizontally: "No credit card needed," "14-day free trial," "Cancel anytime," "Free forever plan." The text is intentionally small and the checks are soft-colored so the row supports the button without competing with it. This strip is nearly universal on Stripe, HubSpot, Salesforce, and Notion pricing pages and trial signup blocks.',
      code: `<!-- Inspired by Stripe -->
<section class="ui-ts">
  <h2 class="ui-ts__h">Start accepting payments today</h2>
  <p class="ui-ts__sub">Set up in minutes. Scale to millions in volume.</p>
  <button class="ui-ts__cta">Start now <span>→</span></button>
  <ul class="ui-ts__strip">
    <li><span class="ui-ts__check">✓</span> No credit card needed</li>
    <li><span class="ui-ts__check">✓</span> 14-day free trial</li>
    <li><span class="ui-ts__check">✓</span> Cancel anytime</li>
    <li><span class="ui-ts__check">✓</span> Free forever plan</li>
  </ul>
</section>

<style>
  .ui-ts{max-width:560px;padding:40px 32px;background:#fff;text-align:center;font:15px -apple-system,"Inter","Segoe UI",sans-serif;color:#0a2540}
  .ui-ts__h{margin:0 0 8px;font:700 28px -apple-system,"Inter",sans-serif;letter-spacing:-.02em}
  .ui-ts__sub{margin:0 0 22px;color:#425466;font-size:15.5px}
  .ui-ts__cta{display:inline-flex;align-items:center;gap:6px;padding:12px 22px;background:linear-gradient(180deg,#7a73ff,#635bff);color:#fff;border:0;border-radius:6px;font:600 15px -apple-system,sans-serif;cursor:pointer;box-shadow:0 1px 0 rgba(255,255,255,.2) inset,0 1px 4px rgba(50,50,93,.15),0 4px 12px rgba(99,91,255,.3);transition:.15s}
  .ui-ts__cta:hover{transform:translateY(-1px);box-shadow:0 1px 0 rgba(255,255,255,.2) inset,0 2px 6px rgba(50,50,93,.18),0 8px 18px rgba(99,91,255,.36)}
  .ui-ts__cta span{transition:transform .15s}
  .ui-ts__cta:hover span{transform:translateX(3px)}
  .ui-ts__strip{list-style:none;margin:22px 0 0;padding:0;display:flex;justify-content:center;flex-wrap:wrap;gap:8px 22px;color:#697386;font-size:13.5px}
  .ui-ts__strip li{display:inline-flex;align-items:center;gap:6px}
  .ui-ts__check{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:#e3fcef;color:#00a35c;font-size:10px;font-weight:700}
</style>`,
    },
  ],
}
