/**
 * UI Parts Showcase (Corporate Hero Sections) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-hero',
  title: '企業サイト ヒーロー',
  titleEn: 'Corporate Hero Sections',
  description: 'Accenture・PwC・McKinsey・Apple・Google などの企業サイトトップでよく見るヒーローセクションをそのままコピペで使えます。',
  terms: [
    {
      name: 'Magazine Editorial Hero',
      nameJa: 'マガジン風 大判セリフ ヒーロー',
      desc: 'Accenture・McKinseyに見られる、巨大セリフ書体の編集デザイン風ヒーロー。',
      detail: '雑誌の表紙のように、極端に大きなセリフ書体の見出しを主役に据えるヒーローです。AccentureやMcKinseyのトップで使われ、上に小さな「アイブロウ(目印テキスト)」、下に細身のリード文を添えるのが定型です。コンサル・金融・ラグジュアリーなど、知性や格式を伝えたい業種で映えます。写真やCTAを極力減らし、文字組みだけで主張する贅沢なレイアウトが特徴です。',
      descEn: 'An oversized serif editorial hero in the style of Accenture and McKinsey.',
      detailEn: 'Like a magazine cover, this hero leans on one giant serif headline. An eyebrow line sits above and a thin lead paragraph below — the formula you see on Accenture and McKinsey homepages. It suits consulting, finance, and luxury brands that want to project intellect and gravitas. With photos and CTAs stripped back, the whole effect relies on bold typography alone.',
      code: `<!-- Inspired by McKinsey & Company -->
<section class="ui-cmag">
  <div class="ui-cmag__inner">
    <div class="ui-cmag__eyebrow">McKinsey Insights · May 2026</div>
    <h1 class="ui-cmag__title">The next<br><em>productive</em> frontier<br>of work.</h1>
    <p class="ui-cmag__lead">How leading enterprises are rewiring decision-making with generative AI — a global survey of 1,491 executives across 19 industries.</p>
    <div class="ui-cmag__meta">— Reading time 8 min</div>
  </div>
</section>

<style>
  .ui-cmag{background:#fff;color:#051c2c;padding:48px 40px;max-width:720px;font-family:Georgia,"Times New Roman",serif}
  .ui-cmag__inner{max-width:640px}
  .ui-cmag__eyebrow{font:600 11px/1 -apple-system,"Helvetica Neue",sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#051c2c;border-top:1px solid #051c2c;padding-top:10px;margin-bottom:28px}
  .ui-cmag__title{font:400 64px/0.95 Georgia,serif;letter-spacing:-.025em;margin:0 0 22px;color:#051c2c}
  .ui-cmag__title em{font-style:italic;color:#2251ff}
  .ui-cmag__lead{font:300 17px/1.5 Georgia,serif;color:#3a4956;max-width:520px;margin:0 0 18px}
  .ui-cmag__meta{font:400 12px/1 -apple-system,sans-serif;letter-spacing:.04em;color:#8895a1}
</style>`,
    },
    {
      name: 'Apple Keynote Hero',
      nameJa: 'Apple基調講演風 中央ヒーロー',
      desc: '巨大なサンセリフ見出しを画面中央に置き、購入とLearn moreの2リンクを並べる構成。',
      detail: 'Appleの製品発表ページでおなじみの、中央寄せの巨大見出しヒーローです。製品タグライン、太いSF風サンセリフの見出し、その下に「Buy」と「Learn more」のリンク状CTAを2つ並べるのが定型です。背景は無垢の白か黒で、製品名以外の装飾を徹底的に削ぎ落とすことで「製品そのものが主役」と感じさせます。家電・SaaS・ガジェットの新発売ページに最適なフォーマットです。',
      descEn: 'A centered, massive sans-serif headline with a Buy / Learn-more pair, à la Apple keynote pages.',
      detailEn: 'This is the centered hero Apple uses for product launches. A small product tag sits above a huge SF-like sans-serif headline, followed by a "Buy" link and a "Learn more" link side by side. The background is pure white or black, with every other decoration stripped away — so the product feels like the star. It is perfect for new-product pages for hardware, SaaS, or gadgets.',
      code: `<!-- Inspired by Apple -->
<section class="ui-cap">
  <div class="ui-cap__tag">New</div>
  <h1 class="ui-cap__h1">Vision Studio</h1>
  <h2 class="ui-cap__h2">Imagine the impossible. Then make it.</h2>
  <div class="ui-cap__price">From $1,299 or $108.25/mo. for 12 mo.*</div>
  <div class="ui-cap__cta">
    <a class="ui-cap__btn ui-cap__btn--p" href="#">Buy</a>
    <a class="ui-cap__btn ui-cap__btn--s" href="#">Learn more <span>›</span></a>
  </div>
</section>

<style>
  .ui-cap{background:#fff;color:#1d1d1f;padding:56px 24px 48px;text-align:center;font-family:-apple-system,"SF Pro Display","Helvetica Neue",sans-serif;max-width:720px}
  .ui-cap__tag{font:600 17px/1 -apple-system,sans-serif;color:#bf4800;margin-bottom:6px}
  .ui-cap__h1{font:600 56px/1.05 -apple-system,sans-serif;letter-spacing:-.015em;margin:0 0 6px;color:#1d1d1f}
  .ui-cap__h2{font:600 28px/1.15 -apple-system,sans-serif;letter-spacing:-.005em;color:#1d1d1f;margin:0 0 12px;max-width:520px;margin-left:auto;margin-right:auto}
  .ui-cap__price{font:400 17px/1.3 -apple-system,sans-serif;color:#1d1d1f;margin-bottom:22px}
  .ui-cap__cta{display:flex;gap:24px;justify-content:center;align-items:center;flex-wrap:wrap}
  .ui-cap__btn{display:inline-flex;align-items:center;gap:2px;text-decoration:none;font:400 17px/1 -apple-system,sans-serif;border-radius:980px;padding:12px 22px;transition:.15s}
  .ui-cap__btn--p{background:#0071e3;color:#fff}
  .ui-cap__btn--p:hover{background:#0077ed}
  .ui-cap__btn--s{color:#0071e3;background:transparent;padding:12px 4px}
  .ui-cap__btn--s span{margin-left:2px;font-size:18px}
  .ui-cap__btn--s:hover{text-decoration:underline}
</style>`,
    },
    {
      name: 'Split Hero With Gradient Panel',
      nameJa: '画像/グラデーション右配置の分割ヒーロー',
      desc: 'Stripe風。左にコピーとCTA、右にグラデの装飾パネルを置く2カラム構成。',
      detail: 'Stripeの代表的なヒーローレイアウトで、左カラムに見出し・サブテキスト・CTAボタン、右カラムにブランド色のグラデーション(または製品スクリーンショット)を配置します。テキストとビジュアルが拮抗するので、機能の説明と「ワクワク感」を同時に伝えられます。SaaS・決済・APIなど、抽象的なプロダクトを売る企業のトップに最も多いパターンです。グラデは紫系・青系・斜め交差が定番です。',
      descEn: 'A two-column Stripe-style hero: copy and CTA on the left, a gradient panel on the right.',
      detailEn: 'This is the signature Stripe hero — headline, sub-copy, and CTA stacked in the left column, and a brand-colored gradient (or product screenshot) in the right column. Text and visual carry equal weight, so you can explain the feature and convey excitement at the same time. It is the most common pattern for SaaS, payments, and API companies selling abstract products. Purple, blue, and crossing-diagonal gradients are the usual choices.',
      code: `<!-- Inspired by Stripe -->
<section class="ui-csp">
  <div class="ui-csp__col ui-csp__left">
    <div class="ui-csp__brand">◐ payments</div>
    <h1 class="ui-csp__title">Financial<br>infrastructure<br>for the internet.</h1>
    <p class="ui-csp__sub">Millions of companies of all sizes — from startups to Fortune 500s — use our software and APIs to accept payments, send payouts, and manage their businesses online.</p>
    <div class="ui-csp__cta">
      <a class="ui-csp__btn ui-csp__btn--p" href="#">Start now ›</a>
      <a class="ui-csp__btn ui-csp__btn--s" href="#">Contact sales ›</a>
    </div>
  </div>
  <div class="ui-csp__col ui-csp__right">
    <div class="ui-csp__panel"></div>
  </div>
</section>

<style>
  .ui-csp{display:flex;background:#fff;color:#0a2540;max-width:720px;font-family:"Sohne","Inter",-apple-system,sans-serif;overflow:hidden}
  .ui-csp__col{flex:1;min-width:0}
  .ui-csp__left{padding:42px 28px 42px 32px}
  .ui-csp__brand{font:600 14px/1 -apple-system,sans-serif;letter-spacing:-.01em;color:#635bff;margin-bottom:18px}
  .ui-csp__title{font:600 38px/1.05 -apple-system,sans-serif;letter-spacing:-.02em;margin:0 0 18px;color:#0a2540}
  .ui-csp__sub{font:400 15px/1.55 -apple-system,sans-serif;color:#425466;margin:0 0 22px}
  .ui-csp__cta{display:flex;gap:14px;flex-wrap:wrap}
  .ui-csp__btn{display:inline-flex;align-items:center;text-decoration:none;font:600 14px/1 -apple-system,sans-serif;padding:10px 16px;border-radius:18px;transition:.15s}
  .ui-csp__btn--p{background:#0a2540;color:#fff}
  .ui-csp__btn--p:hover{background:#1a3a5c}
  .ui-csp__btn--s{background:#f6f9fc;color:#0a2540}
  .ui-csp__btn--s:hover{background:#e3ecf5}
  .ui-csp__right{position:relative;min-height:340px}
  .ui-csp__panel{position:absolute;inset:0;background:linear-gradient(150deg,#a3f7bf 0%,#65d6ce 22%,#7a73ff 55%,#ff80b5 85%,#ffd166 100%);clip-path:polygon(8% 0,100% 0,100% 100%,0 100%)}
</style>`,
    },
    {
      name: 'Rotating Word Hero',
      nameJa: '単語入れ替えヒーロー',
      desc: '「Make X faster」のXが定期的に切り替わる、動きのあるヒーロー。',
      detail: '見出しの一部の単語だけがフェード&スライドで切り替わる、SaaSやプラットフォーム企業のトップで近年人気のヒーローです。「Make {payments / growth / decisions} faster」のように、自社プロダクトが解決する複数の問題を一文で表現できます。CSSアニメーションだけで実装でき、JS不要なのも嬉しい点です。3〜5語をリズム良く回すと、止まらずに動いているように見え、ブランドの勢いを感じさせます。',
      descEn: 'A hero where one word in the headline cycles through several alternatives.',
      detailEn: 'A trendy SaaS hero where a single word in the headline fades and slides to another. "Make {payments / growth / decisions} faster" lets you express several problems your product solves in a single sentence. It can be built with pure CSS keyframes — no JavaScript needed. Three to five words rotated in rhythm feel constantly in motion and convey brand momentum.',
      code: `<!-- Inspired by Linear -->
<section class="ui-crot">
  <div class="ui-crot__brand">— ATLAS</div>
  <h1 class="ui-crot__h1">
    Make
    <span class="ui-crot__rot">
      <span>payments</span>
      <span>growth</span>
      <span>decisions</span>
      <span>shipping</span>
    </span>
    faster.
  </h1>
  <p class="ui-crot__sub">The operating system for high-velocity teams. One workspace for issues, docs, and sprints.</p>
  <a class="ui-crot__btn" href="#">Start free trial →</a>
</section>

<style>
  .ui-crot{background:#08090a;color:#f7f8f8;padding:60px 32px;max-width:720px;font-family:"Inter",-apple-system,sans-serif;text-align:center;overflow:hidden}
  .ui-crot__brand{font:600 11px/1 "Inter",sans-serif;letter-spacing:.24em;color:#8a8f98;margin-bottom:28px}
  .ui-crot__h1{font:600 56px/1.1 "Inter",sans-serif;letter-spacing:-.025em;margin:0 0 18px;color:#f7f8f8;display:inline-block}
  .ui-crot__rot{display:inline-block;height:1.05em;overflow:hidden;vertical-align:bottom;width:240px;position:relative;text-align:left}
  .ui-crot__rot span{display:block;color:#a8b2ff;background:linear-gradient(90deg,#7a73ff,#a8b2ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-style:italic;animation:uiCRot 8s steps(1) infinite}
  .ui-crot__rot span:nth-child(1){animation-delay:0s}
  .ui-crot__rot span:nth-child(2){animation-delay:-6s}
  .ui-crot__rot span:nth-child(3){animation-delay:-4s}
  .ui-crot__rot span:nth-child(4){animation-delay:-2s}
  @keyframes uiCRot{0%{transform:translateY(100%);opacity:0}5%{transform:translateY(0);opacity:1}25%{transform:translateY(0);opacity:1}30%{transform:translateY(-100%);opacity:0}100%{transform:translateY(-100%);opacity:0}}
  .ui-crot__sub{font:400 17px/1.5 "Inter",sans-serif;color:#8a8f98;max-width:440px;margin:0 auto 26px}
  .ui-crot__btn{display:inline-block;text-decoration:none;font:500 14px/1 "Inter",sans-serif;background:#5e6ad2;color:#fff;padding:11px 18px;border-radius:8px;transition:.15s}
  .ui-crot__btn:hover{background:#6872e0}
</style>`,
    },
    {
      name: 'Color Block Editorial Hero',
      nameJa: 'カラーブロック編集風ヒーロー',
      desc: 'BloombergやFTのような、強いオレンジ/イエロー背景に黒のセリフ見出しを置く構成。',
      detail: 'BloombergやFinancial Timesに代表される、彩度の高い単色を全面に敷き、黒のセリフ書体で見出しを置く編集デザイン風ヒーローです。新聞・雑誌の表紙のような「読み物感」が出るため、ニュース・調査レポート・特集ページに最適です。色は強烈ですが、本文・見出しを黒で揃えるとコントラストが高く、可読性も担保されます。CTAは黒丸+白文字のシンプルなボタンが似合います。',
      descEn: 'A saturated orange/yellow background with a black serif headline, FT/Bloomberg style.',
      detailEn: 'In the style of Bloomberg and the Financial Times, this hero floods the area with a single saturated color and places a black serif headline on top. It carries the "read me" feel of a newspaper cover, perfect for news, research reports, and feature stories. The color is bold, but matching headline and body in black keeps contrast high and readability strong. A simple black pill CTA with white text completes the look.',
      code: `<!-- Inspired by Bloomberg -->
<section class="ui-ccb">
  <div class="ui-ccb__inner">
    <div class="ui-ccb__kicker">The Big Take · Markets</div>
    <h1 class="ui-ccb__title">Wall Street's $2T bet that AI won't kill the trade desk.</h1>
    <div class="ui-ccb__byline">By Sarah Lin, Hideo Tanaka and Priya Raman · 11 min read</div>
    <a class="ui-ccb__btn" href="#">Read the story</a>
  </div>
</section>

<style>
  .ui-ccb{background:#ff6a00;color:#000;padding:40px 32px;max-width:720px;font-family:"Times","Times New Roman",Georgia,serif;position:relative}
  .ui-ccb::after{content:"";position:absolute;top:18px;right:24px;width:48px;height:48px;background:#000;border-radius:50%}
  .ui-ccb__inner{max-width:560px;position:relative;z-index:1}
  .ui-ccb__kicker{font:700 11px/1 -apple-system,"Helvetica Neue",sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#000;margin-bottom:16px;border-bottom:1px solid #000;padding-bottom:8px;display:inline-block}
  .ui-ccb__title{font:700 42px/1.05 "Times","Times New Roman",serif;letter-spacing:-.015em;margin:0 0 18px;color:#000}
  .ui-ccb__byline{font:400 13px/1.4 -apple-system,sans-serif;color:#000;opacity:.8;margin-bottom:22px}
  .ui-ccb__btn{display:inline-block;text-decoration:none;font:600 13px/1 -apple-system,sans-serif;background:#000;color:#fff;padding:11px 20px;border-radius:0;letter-spacing:.04em}
  .ui-ccb__btn:hover{background:#222}
</style>`,
    },
    {
      name: 'Video Background Hero',
      nameJa: '動画背景ヒーロー',
      desc: 'PwC/Deloitte風。暗い動画背景に白文字、下端に下矢印スクロール表示。',
      detail: 'PwCやDeloitteのような大手プロフェッショナルファームでよく見る、フルブリードの動画背景ヒーローです。暗いオーバーレイ越しに白文字の見出しを置き、画面下に「↓」の小さなスクロール促進サインを添えるのがお決まりです。動画は街・人・データなど「動きと未来感」を抽象的に伝えるものを使います。コンサル・金融・グローバル企業のブランドサイトに重厚感を出したいときに有効です。実装はCSSグラデーションでも代用できます。',
      descEn: 'A PwC/Deloitte dark video-background hero with overlay text and a scroll-down chevron.',
      detailEn: 'A full-bleed video-background hero you see at PwC, Deloitte, and other major professional firms. White text sits over a dark overlay, with a small "↓" scroll hint anchored to the bottom. The video usually shows cities, people, or data — anything that abstractly suggests motion and the future. It is a strong choice when a consulting, finance, or global brand needs a weighty corporate feel. A CSS gradient stands in nicely when a real video is not available.',
      code: `<!-- Inspired by PwC -->
<section class="ui-cvid">
  <div class="ui-cvid__bg"></div>
  <div class="ui-cvid__overlay"></div>
  <div class="ui-cvid__content">
    <div class="ui-cvid__brand">pwc</div>
    <h1 class="ui-cvid__title">Building trust.<br>Delivering sustained outcomes.</h1>
    <p class="ui-cvid__sub">Our global network of 364,000 people in 151 countries helps clients build trust in society and solve important problems.</p>
    <a class="ui-cvid__btn" href="#">Explore our services</a>
  </div>
  <div class="ui-cvid__scroll">
    <span>Scroll</span>
    <span class="ui-cvid__chev">⌄</span>
  </div>
</section>

<style>
  .ui-cvid{position:relative;max-width:720px;height:420px;overflow:hidden;font-family:"Helvetica Neue",Arial,sans-serif;color:#fff}
  .ui-cvid__bg{position:absolute;inset:0;background:
    radial-gradient(ellipse at 70% 30%,rgba(220,80,30,.35) 0%,transparent 50%),
    radial-gradient(ellipse at 20% 80%,rgba(180,40,80,.4) 0%,transparent 55%),
    linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#0f1830 100%);
    animation:uiCvidShift 12s ease-in-out infinite alternate}
  @keyframes uiCvidShift{0%{transform:scale(1)}100%{transform:scale(1.08)}}
  .ui-cvid__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.55) 100%)}
  .ui-cvid__content{position:relative;z-index:1;padding:42px 32px;max-width:560px}
  .ui-cvid__brand{font:700 28px/1 "Helvetica Neue",Arial,sans-serif;color:#fff;margin-bottom:28px;letter-spacing:-.01em}
  .ui-cvid__brand::after{content:"";display:inline-block;width:6px;height:6px;border-radius:50%;background:#d04a02;margin-left:2px;transform:translateY(-2px)}
  .ui-cvid__title{font:300 38px/1.15 "Helvetica Neue",sans-serif;margin:0 0 16px;letter-spacing:-.015em}
  .ui-cvid__sub{font:400 15px/1.55 "Helvetica Neue",sans-serif;color:rgba(255,255,255,.82);max-width:460px;margin:0 0 26px}
  .ui-cvid__btn{display:inline-block;text-decoration:none;font:500 13px/1 "Helvetica Neue",sans-serif;background:#d04a02;color:#fff;padding:13px 22px;border-radius:0;letter-spacing:.02em}
  .ui-cvid__btn:hover{background:#e35613}
  .ui-cvid__scroll{position:absolute;bottom:18px;left:32px;display:flex;flex-direction:column;align-items:flex-start;gap:4px;font:500 11px/1 "Helvetica Neue",sans-serif;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.7);z-index:1}
  .ui-cvid__chev{font-size:18px;animation:uiCvidBob 1.6s ease-in-out infinite}
  @keyframes uiCvidBob{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}
</style>`,
    },
    {
      name: 'Diagonal Split Hero',
      nameJa: '斜め2分割ヒーロー',
      desc: 'Microsoft/Salesforce風、斜めにツートン分割した背景にコピーとCTAを重ねる構成。',
      detail: 'MicrosoftやSalesforceのトップで見かける、背景を斜めに2色で塗り分けたヒーローです。下半分または右下が濃色、左上が淡色という構成が多く、CSSのclip-pathや擬似要素ひとつで実装できます。フラットすぎる単色背景よりも動きが出て、企業の「変革」「前進」を象徴する印象を与えられます。本文・CTAは斜め線をまたいでも読めるよう、淡色側に置くのが基本です。',
      descEn: 'A two-tone diagonal-split background hero, Microsoft / Salesforce style.',
      detailEn: 'A hero with the background sliced into two tones along a diagonal — the look you see at Microsoft and Salesforce. Often the bottom or bottom-right takes the darker color while the top-left stays lighter; a single clip-path or pseudo element does the trick. It feels more dynamic than a flat solid background and visually echoes "transformation" or "progress". Keep the body and CTA on the lighter side so they stay readable across the line.',
      code: `<!-- Inspired by Salesforce -->
<section class="ui-cdia">
  <div class="ui-cdia__bg1"></div>
  <div class="ui-cdia__bg2"></div>
  <div class="ui-cdia__cloud">☁</div>
  <div class="ui-cdia__inner">
    <div class="ui-cdia__brand">Astro Cloud</div>
    <h1 class="ui-cdia__title">The #1 AI CRM<br>for every business.</h1>
    <p class="ui-cdia__sub">Unite your sales, service, marketing and IT teams on one trusted AI platform. Built on customer data you can rely on.</p>
    <div class="ui-cdia__cta">
      <a class="ui-cdia__btn ui-cdia__btn--p" href="#">Try for free</a>
      <a class="ui-cdia__btn ui-cdia__btn--s" href="#">Watch demo</a>
    </div>
  </div>
</section>

<style>
  .ui-cdia{position:relative;max-width:720px;min-height:380px;overflow:hidden;font-family:"Salesforce Sans","Inter",-apple-system,sans-serif;color:#032d60}
  .ui-cdia__bg1{position:absolute;inset:0;background:#f3f6f9}
  .ui-cdia__bg2{position:absolute;inset:0;background:linear-gradient(135deg,#00a1e0 0%,#0070d2 60%,#032d60 100%);clip-path:polygon(60% 0,100% 0,100% 100%,30% 100%)}
  .ui-cdia__cloud{position:absolute;right:22px;top:28px;font-size:64px;color:#fff;opacity:.95;z-index:1;line-height:1}
  .ui-cdia__inner{position:relative;z-index:2;padding:46px 36px;max-width:520px}
  .ui-cdia__brand{font:700 12px/1 "Inter",sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#0070d2;margin-bottom:18px}
  .ui-cdia__title{font:700 40px/1.1 "Inter",sans-serif;letter-spacing:-.02em;margin:0 0 16px;color:#032d60}
  .ui-cdia__sub{font:400 15px/1.55 "Inter",sans-serif;color:#3e3e3c;max-width:440px;margin:0 0 22px}
  .ui-cdia__cta{display:flex;gap:10px;flex-wrap:wrap}
  .ui-cdia__btn{display:inline-block;text-decoration:none;font:600 13px/1 "Inter",sans-serif;padding:11px 20px;border-radius:4px;transition:.15s;border:1px solid transparent}
  .ui-cdia__btn--p{background:#0070d2;color:#fff}
  .ui-cdia__btn--p:hover{background:#005fb2}
  .ui-cdia__btn--s{background:transparent;color:#0070d2;border-color:#0070d2}
  .ui-cdia__btn--s:hover{background:#0070d2;color:#fff}
</style>`,
    },
    {
      name: 'Centered Minimal Hero',
      nameJa: '中央極小ヒーロー',
      desc: 'Linear/Vercel風、小さめ見出し+サブテキスト+1つのCTAを中央に置く余白多めの構成。',
      detail: 'LinearやVercelの開発者向けプロダクトで定番の、徹底的に余白を取った中央配置のミニマルヒーローです。見出しはあえて控えめなサイズに抑え、サブコピー1行、CTAボタン1つだけを縦に積みます。装飾を排した分、上品さと信頼感が増し、テクニカルな読者にとっては「無駄が無く分かっている」という印象を与えます。SaaSのランディング、開発者向けツール、新興スタートアップの公式サイトに最適です。',
      descEn: 'A Linear / Vercel-style minimal hero: small headline, sub-text, one CTA — all centered.',
      detailEn: 'The classic, generously-spaced minimal hero used by Linear and Vercel for developer products. The headline is intentionally restrained, with a single sub-line and exactly one CTA button stacked below. Stripping away decoration adds polish and trust, and signals to a technical audience that you "get it" — nothing wasted. It is ideal for SaaS landing pages, developer tools, and early-stage startup homepages.',
      code: `<!-- Inspired by Vercel -->
<section class="ui-cmin">
  <div class="ui-cmin__logo">
    <svg width="36" height="32" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000"></path>
    </svg>
  </div>
  <h1 class="ui-cmin__h1">Develop. Preview. Ship.</h1>
  <p class="ui-cmin__sub">Your complete platform for the web. Build, scale, and secure your fastest sites and apps.</p>
  <a class="ui-cmin__btn" href="#">Start Deploying →</a>
  <div class="ui-cmin__meta">Free tier · No credit card required</div>
</section>

<style>
  .ui-cmin{background:#fff;color:#000;padding:64px 24px 56px;text-align:center;max-width:720px;font-family:"Inter","Geist",-apple-system,sans-serif}
  .ui-cmin__logo{margin-bottom:32px;display:flex;justify-content:center}
  .ui-cmin__h1{font:600 44px/1.1 "Inter",sans-serif;letter-spacing:-.035em;margin:0 0 14px;color:#000}
  .ui-cmin__sub{font:400 17px/1.5 "Inter",sans-serif;color:#666;max-width:420px;margin:0 auto 26px}
  .ui-cmin__btn{display:inline-block;text-decoration:none;font:500 14px/1 "Inter",sans-serif;background:#000;color:#fff;padding:11px 18px;border-radius:8px;transition:.15s}
  .ui-cmin__btn:hover{background:#222}
  .ui-cmin__meta{margin-top:18px;font:400 12px/1 "Inter",sans-serif;color:#999}
</style>`,
    },
    {
      name: 'Floating Mockup Hero',
      nameJa: '浮遊ダッシュボード型ヒーロー',
      desc: 'SaaS定番。左にコピー、右に浮いた製品ダッシュボード(影付き)を配置する構成。',
      detail: 'SaaSのトップで最も汎用的に使われるヒーローで、左カラムに見出しとCTA、右カラムに大きな影を付けて少し傾けた製品ダッシュボードのモックアップを置きます。「文章で読まなくても、製品の見た目で何ができるか伝わる」のが最大の利点です。ダッシュボードは数字・グラフ・アイコンをそれっぽく見せれば十分で、リアルなUIスクリーンショットを使わなくても効果があります。Notion・Figma・Asanaなどでよく見るパターンです。',
      descEn: 'A SaaS classic: copy on the left and a floating, shadowed dashboard mockup on the right.',
      detailEn: 'The all-purpose SaaS hero — headline and CTA in the left column, a large product dashboard mockup with a heavy drop shadow and slight tilt in the right. Its biggest win is that the product itself communicates "what it can do" without users reading a word. A handful of numbers, charts, and icons is enough to suggest the dashboard; real screenshots are nice but optional. You see this pattern everywhere from Notion to Figma to Asana.',
      code: `<!-- Inspired by Linear -->
<section class="ui-cmk">
  <div class="ui-cmk__left">
    <div class="ui-cmk__pill">Used by 12,000+ teams ✦</div>
    <h1 class="ui-cmk__h1">Plan your week<br>in 10 seconds.</h1>
    <p class="ui-cmk__sub">Atlas brings issues, sprints, and roadmaps into one calm command-K workspace.</p>
    <div class="ui-cmk__cta">
      <a class="ui-cmk__btn ui-cmk__btn--p" href="#">Get started — it's free</a>
      <a class="ui-cmk__btn ui-cmk__btn--s" href="#">Book a demo</a>
    </div>
  </div>
  <div class="ui-cmk__right">
    <div class="ui-cmk__dash">
      <div class="ui-cmk__dash-bar">
        <span class="ui-cmk__dot" style="background:#ff5f57"></span>
        <span class="ui-cmk__dot" style="background:#febc2e"></span>
        <span class="ui-cmk__dot" style="background:#28c840"></span>
        <span class="ui-cmk__dash-title">Sprint 24 · Active</span>
      </div>
      <div class="ui-cmk__dash-body">
        <div class="ui-cmk__row"><span class="ui-cmk__st ui-cmk__st--p">In Progress</span> Onboarding flow v2 <em>Amy K.</em></div>
        <div class="ui-cmk__row"><span class="ui-cmk__st ui-cmk__st--r">In Review</span> Stripe webhook retries <em>Hiro T.</em></div>
        <div class="ui-cmk__row"><span class="ui-cmk__st ui-cmk__st--t">Todo</span> SAML SSO for Workspace <em>Mei L.</em></div>
        <div class="ui-cmk__row"><span class="ui-cmk__st ui-cmk__st--d">Done</span> Dashboard skeleton loader <em>Jay P.</em></div>
        <div class="ui-cmk__chart">
          <span style="height:30%"></span><span style="height:55%"></span><span style="height:42%"></span><span style="height:70%"></span><span style="height:88%"></span><span style="height:65%"></span><span style="height:95%"></span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .ui-cmk{display:flex;align-items:center;background:linear-gradient(180deg,#fafafa 0%,#f0f1f5 100%);color:#101828;padding:42px 28px;max-width:720px;font-family:"Inter",-apple-system,sans-serif;gap:24px;overflow:hidden}
  .ui-cmk__left{flex:1;min-width:0}
  .ui-cmk__pill{display:inline-block;font:500 12px/1 "Inter",sans-serif;background:#fff;border:1px solid #e4e7ec;color:#475467;padding:6px 11px;border-radius:99px;margin-bottom:18px}
  .ui-cmk__h1{font:700 36px/1.1 "Inter",sans-serif;letter-spacing:-.025em;margin:0 0 14px}
  .ui-cmk__sub{font:400 15px/1.5 "Inter",sans-serif;color:#475467;margin:0 0 22px;max-width:320px}
  .ui-cmk__cta{display:flex;gap:10px;flex-wrap:wrap}
  .ui-cmk__btn{display:inline-block;text-decoration:none;font:600 13px/1 "Inter",sans-serif;padding:11px 16px;border-radius:8px;transition:.15s}
  .ui-cmk__btn--p{background:#5e6ad2;color:#fff}
  .ui-cmk__btn--p:hover{background:#6872e0}
  .ui-cmk__btn--s{background:#fff;color:#101828;border:1px solid #e4e7ec}
  .ui-cmk__btn--s:hover{background:#f6f7f9}
  .ui-cmk__right{flex:0 0 320px;position:relative}
  .ui-cmk__dash{background:#fff;border-radius:10px;box-shadow:0 24px 48px -16px rgba(16,24,40,.22),0 4px 12px rgba(16,24,40,.08);transform:rotate(-1.5deg) translateY(0);overflow:hidden}
  .ui-cmk__dash-bar{display:flex;align-items:center;gap:6px;padding:10px 12px;background:#f6f7f9;border-bottom:1px solid #eaecf0}
  .ui-cmk__dot{width:9px;height:9px;border-radius:50%}
  .ui-cmk__dash-title{font:500 11px/1 "Inter",sans-serif;color:#667085;margin-left:10px}
  .ui-cmk__dash-body{padding:10px 12px}
  .ui-cmk__row{display:flex;align-items:center;gap:8px;font:500 11.5px/1.4 "Inter",sans-serif;color:#1d2939;padding:6px 0;border-bottom:1px dashed #eaecf0}
  .ui-cmk__row em{margin-left:auto;font-style:normal;color:#98a2b3;font-weight:400}
  .ui-cmk__st{font:600 9.5px/1 "Inter",sans-serif;padding:3px 6px;border-radius:4px;letter-spacing:.02em}
  .ui-cmk__st--p{background:#eef4ff;color:#3538cd}
  .ui-cmk__st--r{background:#fff6e0;color:#b54708}
  .ui-cmk__st--t{background:#f2f4f7;color:#475467}
  .ui-cmk__st--d{background:#ecfdf3;color:#067647}
  .ui-cmk__chart{display:flex;align-items:flex-end;gap:5px;height:54px;margin-top:10px;padding-top:8px;border-top:1px solid #eaecf0}
  .ui-cmk__chart span{flex:1;background:linear-gradient(180deg,#7a73ff 0%,#5e6ad2 100%);border-radius:3px 3px 0 0;min-width:0}
</style>`,
    },
    {
      name: 'Stat Callout Hero',
      nameJa: '実績スタット散りばめ型ヒーロー',
      desc: 'Accenture風。中央の見出しの周囲に「+34%」のような実績バッジを3つ配置する構成。',
      detail: 'Accentureの「Impact」系ページに代表される、中央のメッセージの周りに「+34% revenue」「2.4x faster」「$120M saved」のような実績数値バッジを3つ浮かせるヒーローです。数字が視覚に飛び込んでくるため、コピー本文を読まなくても「この会社は結果を出している」という印象を一瞬で与えられます。バッジは色違い・形違いにすると賑やかですが、白背景+薄い枠線・小さなドロップシャドウで統一するとプロフェッショナルにまとまります。',
      descEn: 'An Accenture-style hero with three floating stat callouts arranged around the headline.',
      detailEn: 'Inspired by Accenture\'s Impact pages, this hero floats three result badges — like "+34% revenue", "2.4x faster", "$120M saved" — around a central message. Numbers jump out so users instantly feel that "this company delivers" without reading body copy. Mixing badge colors and shapes feels playful, but a unified white background with thin border and subtle drop shadow keeps it professional and crisp.',
      code: `<!-- Inspired by Accenture -->
<section class="ui-cstat">
  <div class="ui-cstat__bg"></div>
  <div class="ui-cstat__brand">Accenture <span>›</span></div>
  <div class="ui-cstat__center">
    <h1 class="ui-cstat__h1">Let there be<br>change.</h1>
    <p class="ui-cstat__sub">We help our clients become the next and best versions of themselves. 743,000 people. 49 countries. One purpose.</p>
    <a class="ui-cstat__btn" href="#">See our work</a>
  </div>
  <div class="ui-cstat__badge ui-cstat__badge--a">
    <div class="ui-cstat__num">+34%</div>
    <div class="ui-cstat__lbl">revenue lift<br>for a global bank</div>
  </div>
  <div class="ui-cstat__badge ui-cstat__badge--b">
    <div class="ui-cstat__num">2.4×</div>
    <div class="ui-cstat__lbl">faster product<br>cycles, retail</div>
  </div>
  <div class="ui-cstat__badge ui-cstat__badge--c">
    <div class="ui-cstat__num">$120M</div>
    <div class="ui-cstat__lbl">saved through<br>AI ops, energy</div>
  </div>
</section>

<style>
  .ui-cstat{position:relative;max-width:720px;min-height:420px;background:#fff;color:#000;padding:36px 28px;font-family:"Graphik","Inter",-apple-system,sans-serif;overflow:hidden}
  .ui-cstat__bg{position:absolute;inset:0;background:radial-gradient(circle at 80% 20%,#ffe7df 0%,transparent 45%),radial-gradient(circle at 20% 80%,#e6e1ff 0%,transparent 45%);pointer-events:none}
  .ui-cstat__brand{position:relative;font:700 18px/1 "Inter",sans-serif;letter-spacing:-.01em;color:#000;margin-bottom:24px}
  .ui-cstat__brand span{color:#a100ff;margin-left:2px}
  .ui-cstat__center{position:relative;text-align:center;max-width:380px;margin:36px auto 0}
  .ui-cstat__h1{font:600 44px/1.05 "Inter",sans-serif;letter-spacing:-.025em;margin:0 0 14px;color:#000}
  .ui-cstat__sub{font:400 14px/1.5 "Inter",sans-serif;color:#3a3a3a;margin:0 0 20px}
  .ui-cstat__btn{display:inline-block;text-decoration:none;font:600 13px/1 "Inter",sans-serif;background:#000;color:#fff;padding:12px 22px;border-radius:99px;transition:.15s}
  .ui-cstat__btn:hover{background:#a100ff}
  .ui-cstat__badge{position:absolute;background:#fff;border:1px solid #ececec;border-radius:14px;padding:11px 14px;box-shadow:0 12px 28px -10px rgba(0,0,0,.18);min-width:120px}
  .ui-cstat__badge--a{top:60px;left:18px;transform:rotate(-4deg)}
  .ui-cstat__badge--b{top:80px;right:20px;transform:rotate(3deg);background:linear-gradient(135deg,#a100ff 0%,#7500c0 100%);color:#fff;border-color:transparent}
  .ui-cstat__badge--c{bottom:24px;right:60px;transform:rotate(-2deg)}
  .ui-cstat__num{font:700 22px/1.1 "Inter",sans-serif;letter-spacing:-.02em;margin-bottom:4px}
  .ui-cstat__lbl{font:500 11px/1.35 "Inter",sans-serif;color:inherit;opacity:.78}
  .ui-cstat__badge--b .ui-cstat__lbl{color:#fff;opacity:.9}
</style>`,
    },
  ],
}
