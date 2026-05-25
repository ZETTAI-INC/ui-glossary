/**
 * UI Parts — Auralis-style soft / glassmorphism site skeleton.
 * Generic, copy-paste-ready snippets that capture a warm off-white background,
 * Geist-typography hero, tabbed product panel with blurred color orbs, italic
 * logo marquee, glass-card real-time widget on an image background, and
 * agent/dashboard cards with gradient orb backdrops.
 */

export const category = {
  id: 'ui-parts-site-auralis',
  title: 'ソフト×グラスモーフィズム サイト骨格',
  titleEn: 'Soft / Glassmorphism Site Skeleton',
  description:
    '温かみのあるオフホワイト背景に、半透明ナビ、超巨大Geist見出し+説明文の非対称ヒーロー、タブ切替+ぼかしオーブの製品パネル、イタリック斜体ロゴのマーキー、画像背景+ガラスカードのリアルタイム合成ウィジェット、グラデオーブを敷いたエージェントカードまで。AI/音声系プロダクトの今っぽい質感をまるごと再現。',
  descriptionEn:
    'A soft off-white site skeleton: translucent nav, oversized Geist hero with asymmetric lead, tabbed product panel with blurred gradient orbs, italic-uppercase logo marquee, glassmorphic real-time widget on an image background, and agent cards layered over gradient orbs — captures the modern AI/voice product aesthetic.',
  terms: [
    {
      name: 'Translucent Light Nav',
      nameJa: '半透明ライトナビ(中央リンク+ピル型サインアップ)',
      desc: '72px高の半透明ナビ。左にブランド名、中央にプロダクト/リソース等のリンク、右端に黒丸pill型「Sign up」。',
      detail:
        '高さ72pxの上部ナビ。背景はオフホワイト(#F7F7F5)の80%透過に backdrop-filter: blur(12px) で薄く曇りガラス化、下端に1px極薄ボーダー。左端にtight letter-spacingのブランド名(20px bold)、その右に12〜32px gap で「Studio / Agents / API / Resources / Enterprise / Pricing」など主要ナビゲーション(14px medium、未選択は薄グレー、ホバーで濃グレーへ)。右端には黒地+白文字のpill型「Sign up」CTA(rounded-full、padding 8/16px)を1つだけ置くシンプル仕様。',
      descEn:
        'A 72px translucent off-white nav with a tight-letter-spacing brand on the left, center text links, and a single black pill "Sign up" CTA on the right.',
      detailEn:
        '72px tall, 80% off-white (#F7F7F5) with a 12px backdrop-blur and a 1px hairline border underneath. Tight-letter-spacing brand at 20px bold on the left, 14px medium links across the middle (muted gray, darken on hover), and a single black-on-white pill "Sign up" button on the right.',
      code: `<!-- Translucent light nav -->
<nav class="ui-aura-nav">
  <div class="ui-aura-nav__inner">
    <div class="ui-aura-nav__left">
      <a class="ui-aura-nav__brand" href="#">Auralis</a>
      <div class="ui-aura-nav__links">
        <a href="#">Auralis Studio</a>
        <a href="#">Auralis Agents</a>
        <a href="#">Auralis API</a>
        <a href="#">Resources</a>
        <a href="#">Enterprise</a>
        <a href="#">Pricing</a>
      </div>
    </div>
    <a class="ui-aura-nav__cta" href="#">Sign up</a>
  </div>
</nav>

<style>
  .ui-aura-nav{position:sticky;top:0;z-index:50;width:100%;height:72px;background:rgba(247,247,245,.8);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);border-bottom:1px solid rgba(0,0,0,.06);font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif}
  .ui-aura-nav__inner{max-width:1280px;margin:0 auto;padding:0 32px;display:flex;justify-content:space-between;align-items:center;height:100%}
  .ui-aura-nav__left{display:flex;align-items:center;gap:48px}
  .ui-aura-nav__brand{font:700 20px/1 "Geist",sans-serif;letter-spacing:-.04em;color:#111;text-decoration:none}
  .ui-aura-nav__links{display:flex;align-items:center;gap:24px}
  .ui-aura-nav__links a{font:500 14px/1 "Geist",sans-serif;color:#71717a;text-decoration:none;letter-spacing:-.01em;transition:color .2s}
  .ui-aura-nav__links a:hover{color:#18181b}
  .ui-aura-nav__cta{display:inline-flex;align-items:center;background:#000;color:#fff;padding:8px 16px;border-radius:9999px;font:500 14px/1 "Geist",sans-serif;text-decoration:none;transition:opacity .15s}
  .ui-aura-nav__cta:hover{opacity:.85}
  @media (max-width:760px){.ui-aura-nav__links{display:none}}
</style>`,
    },
    {
      name: 'Asymmetric Hero (oversize H1 + side lead)',
      nameJa: '非対称ヒーロー(超巨大H1 + 右肩リード文)',
      desc: '12カラムグリッドで左7列に超巨大H1、右4列に小さなリード文。下に黒塗りpillと枠線pillの対CTA。',
      detail:
        '12カラムのレスポンシブグリッド。左の7カラムに84px / line-height 1.05 / letter-spacing -0.04em の超巨大セリフ風サンセリフ見出し(Geist 600)。右の4カラム(col-start-9)には小さなリード文(18px / line-height 1.6)をtext-rightで配置し、視覚的に「重い見出し」と「軽い説明」の対比を作ります。見出し下に黒塗り(bg-primary)pill+透明枠線pillの2つのCTAを並べる、シンプルでフォトジェニックな構成。',
      descEn:
        'A 12-col asymmetric hero — oversized 84px Geist headline on the left 7 cols, small 18px lead paragraph on the right 4 cols, paired filled / outlined pill CTAs underneath.',
      detailEn:
        'On a 12-col grid: an 84px Geist headline (line-height 1.05, letter-spacing -0.04em) sits in the left 7 columns, and a small 18px lead paragraph sits right-aligned in the rightmost 4 columns. Below, paired CTAs: one solid black pill and one transparent outlined pill. Heavy headline + light explanation = photogenic balance.',
      code: `<!-- Asymmetric hero -->
<section class="ui-aura-hero">
  <div class="ui-aura-hero__grid">
    <div class="ui-aura-hero__main">
      <h1 class="ui-aura-hero__h">Making digital experiences sound human</h1>
      <div class="ui-aura-hero__cta">
        <a class="ui-aura-hero__btn ui-aura-hero__btn--solid" href="#">Sign up</a>
        <a class="ui-aura-hero__btn ui-aura-hero__btn--ghost" href="#">Contact sales</a>
      </div>
    </div>
    <p class="ui-aura-hero__lead">高品質な音声、自然な抑揚、ブランドの声。あなたのプロダクトに人の温度を持ち込むためのAI音声プラットフォーム。</p>
  </div>
</section>

<style>
  .ui-aura-hero{max-width:1280px;margin:0 auto;padding:140px 32px 0;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif;background:#F7F7F5}
  .ui-aura-hero__grid{display:grid;grid-template-columns:repeat(12,1fr);gap:32px;align-items:start}
  .ui-aura-hero__main{grid-column:1 / span 7;display:flex;flex-direction:column;gap:32px}
  .ui-aura-hero__h{font:600 84px/1.05 "Geist",sans-serif;letter-spacing:-.04em;color:#111;margin:0}
  .ui-aura-hero__cta{display:flex;flex-wrap:wrap;gap:16px;margin-top:8px}
  .ui-aura-hero__btn{display:inline-flex;align-items:center;padding:12px 24px;border-radius:9999px;font:500 15px/1 "Geist",sans-serif;text-decoration:none;transition:.15s}
  .ui-aura-hero__btn--solid{background:#000;color:#fff}
  .ui-aura-hero__btn--solid:hover{background:#222}
  .ui-aura-hero__btn--ghost{background:transparent;color:#111;border:1px solid #d4d4d4}
  .ui-aura-hero__btn--ghost:hover{background:#ececec}
  .ui-aura-hero__lead{grid-column:9 / span 4;font:400 18px/1.6 "Geist",sans-serif;letter-spacing:-.01em;color:#6B6B6B;text-align:right;margin:16px 0 0;max-width:24rem;justify-self:end}
  @media (max-width:900px){.ui-aura-hero__h{font-size:56px}.ui-aura-hero__main{grid-column:1 / -1}.ui-aura-hero__lead{grid-column:1 / -1;text-align:left}}
</style>`,
    },
    {
      name: 'Tabbed Panel with Gradient Orbs',
      nameJa: 'タブ切替パネル(ぼかしオーブ+中央再生ボタン)',
      desc: '600px高の角丸オフホワイトパネル。上部にpillタブ群とステータスバッジ、中央に4色のぼかしオーブ+白丸の再生ボタン、下部にカテゴリpill+CTA。',
      detail:
        '製品プロダクトのヒーローパネルとして頻出する構成。背景はオフホワイトの大きな丸角(rounded-3xl)コンテナで、左上にプロダクト群を切り替える3〜4個のpillタブ(選択中だけ白背景shadow)、右上に小さな緑ドット+「AI Voice Generator」のステータスバッジ。中央には rose / indigo / emerald / sky の4つの大きな blur(60px+) オーブを重ね合わせてカラフルな雰囲気を演出し、その上に白丸の再生ボタン(▶)を絶対配置。下部にはガラス調の操作バー(filterリンク+黒pill CTA)。',
      descEn:
        'A 600px tall rounded panel with pill tabs and a status badge at the top, four blurred gradient orbs forming a colored center, a white play button overlay, and a glass action bar with filter chips + CTA at the bottom.',
      detailEn:
        'A signature product-hero panel: large rounded-3xl off-white container. Top has 3–4 product tabs as a pill group (only the active one carries a white shadow) and a small green-dot status badge. Center stacks four big blurred orbs (rose, indigo, emerald, sky) over each other and an absolute-positioned white play button. Bottom has a glass action bar with filter chips and a black pill CTA.',
      code: `<!-- Tabbed product panel with orbs -->
<section class="ui-aura-orbs">
  <div class="ui-aura-orbs__top">
    <div class="ui-aura-orbs__tabs">
      <button class="ui-aura-orbs__tab ui-aura-orbs__tab--on">Auralis Studio</button>
      <button class="ui-aura-orbs__tab">Auralis Agents</button>
      <button class="ui-aura-orbs__tab">Auralis API</button>
    </div>
    <div class="ui-aura-orbs__status"><span class="ui-aura-orbs__dot"></span>AI Voice Generator</div>
  </div>
  <div class="ui-aura-orbs__center" aria-hidden="true">
    <span class="ui-aura-orbs__o ui-aura-orbs__o--1"></span>
    <span class="ui-aura-orbs__o ui-aura-orbs__o--2"></span>
    <span class="ui-aura-orbs__o ui-aura-orbs__o--3"></span>
    <span class="ui-aura-orbs__o ui-aura-orbs__o--4"></span>
  </div>
  <button class="ui-aura-orbs__play" aria-label="Play">▶</button>
  <div class="ui-aura-orbs__bar">
    <div class="ui-aura-orbs__filters">
      <span class="ui-aura-orbs__f ui-aura-orbs__f--on">AI Voice Generator</span>
      <span class="ui-aura-orbs__f">Text to Speech</span>
      <span class="ui-aura-orbs__f">Music</span>
      <span class="ui-aura-orbs__f">Sound Effects</span>
      <span class="ui-aura-orbs__f">Voice Cloning</span>
    </div>
    <a class="ui-aura-orbs__cta" href="#">Sign up</a>
  </div>
</section>

<style>
  .ui-aura-orbs{position:relative;max-width:1280px;margin:0 auto;background:#F3F2EF;border:1px solid #E7E7E4;border-radius:24px;padding:32px;min-height:600px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif}
  .ui-aura-orbs__top{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:2}
  .ui-aura-orbs__tabs{display:flex;background:#F7F7F5;padding:4px;border-radius:9999px;border:1px solid #E7E7E4;box-shadow:0 1px 2px rgba(0,0,0,.04)}
  .ui-aura-orbs__tab{background:transparent;border:0;color:#6B6B6B;padding:8px 16px;border-radius:9999px;font:500 14px/1 "Geist",sans-serif;cursor:pointer;transition:color .15s}
  .ui-aura-orbs__tab:hover{color:#111}
  .ui-aura-orbs__tab--on{background:#fff;color:#111;box-shadow:0 1px 2px rgba(0,0,0,.06)}
  .ui-aura-orbs__status{display:inline-flex;align-items:center;gap:8px;background:#F7F7F5;border:1px solid #E7E7E4;padding:8px 16px;border-radius:9999px;font:500 14px/1 "Geist",sans-serif;color:#111}
  .ui-aura-orbs__dot{width:8px;height:8px;background:#10b981;border-radius:50%}
  .ui-aura-orbs__center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
  .ui-aura-orbs__o{position:absolute;border-radius:50%;filter:blur(64px)}
  .ui-aura-orbs__o--1{width:300px;height:300px;background:linear-gradient(45deg,#f43f5e,#fb923c);margin:-160px 0 0 -160px}
  .ui-aura-orbs__o--2{width:400px;height:400px;background:linear-gradient(45deg,#6366f1,#a855f7)}
  .ui-aura-orbs__o--3{width:250px;height:250px;background:linear-gradient(45deg,#10b981,#2dd4bf);margin:80px 0 0 160px}
  .ui-aura-orbs__o--4{width:350px;height:350px;background:linear-gradient(45deg,#38bdf8,#3b82f6);margin:-80px 0 0 320px}
  .ui-aura-orbs__play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;background:#FDF8F8;border:1px solid #E7E7E4;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:24px;color:#111;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.08);z-index:2;transition:transform .2s}
  .ui-aura-orbs__play:hover{transform:translate(-50%,-50%) scale(1.05);color:#059669}
  .ui-aura-orbs__bar{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;background:rgba(253,248,248,.8);backdrop-filter:blur(12px);padding:16px;border-radius:16px;border:1px solid #E7E7E4;gap:24px}
  .ui-aura-orbs__filters{display:flex;gap:24px;overflow-x:auto;flex:1}
  .ui-aura-orbs__f{font:500 14px/1 "Geist",sans-serif;color:#6B6B6B;white-space:nowrap;cursor:pointer}
  .ui-aura-orbs__f--on{color:#111}
  .ui-aura-orbs__cta{display:inline-flex;align-items:center;background:#000;color:#fff;padding:8px 24px;border-radius:9999px;font:500 14px/1 "Geist",sans-serif;text-decoration:none;white-space:nowrap}
  @media (max-width:760px){.ui-aura-orbs__o--4{display:none}}
</style>`,
    },
    {
      name: 'Italic Uppercase Logo Marquee',
      nameJa: 'イタリック斜体ロゴのマーキー(自動横スクロール)',
      desc: '極小キャプション + 自動横スクロールするイタリック斜体・薄グレーの架空ブランドロゴ群(アイコン付き)。',
      detail:
        '上に「TRUSTED BY TEAMS …」など極小のタグライン(12px / letter-spacing 0.1em / uppercase)を中央寄せで配置し、その下に画面幅いっぱいに架空ブランドロゴが等速で右→左へ流れ続けるマーキー。各ロゴはMaterial Symbolsの単色アイコン + 大文字斜体italic(font-weight 700, opacity .2)の文字列で構成し、whitespace: nowrapを2セット並べて連続再生するのが定石。group-hover:pause-marquee でホバー一時停止対応。',
      descEn:
        'A small uppercase caption above a continuously scrolling marquee of italic-uppercase, low-opacity fake brand logos with monoline icons — pauses on hover.',
      detailEn:
        'A 12px uppercase tagline (letter-spacing 0.1em) sits centered above an edge-to-edge marquee. Each "logo" is a Material Symbols icon paired with a bold italic uppercase wordmark at opacity 0.2. Two identical sets sit side-by-side and slide together for seamless loop. Hovering pauses the animation.',
      code: `<!-- Logo marquee -->
<section class="ui-aura-mq">
  <h3 class="ui-aura-mq__cap">Trusted by teams building modern audio experiences</h3>
  <div class="ui-aura-mq__track">
    <div class="ui-aura-mq__row">
      <span class="ui-aura-mq__l">⚡ VELOCITY</span>
      <span class="ui-aura-mq__l">◆ NEXUS</span>
      <span class="ui-aura-mq__l">✦ LUMINA</span>
      <span class="ui-aura-mq__l">▤ STACK</span>
      <span class="ui-aura-mq__l">◎ QUANTA</span>
      <span class="ui-aura-mq__l">⬡ ORBITAL</span>
      <span class="ui-aura-mq__l">⌬ SCALAR</span>
    </div>
    <div class="ui-aura-mq__row" aria-hidden="true">
      <span class="ui-aura-mq__l">⚡ VELOCITY</span>
      <span class="ui-aura-mq__l">◆ NEXUS</span>
      <span class="ui-aura-mq__l">✦ LUMINA</span>
      <span class="ui-aura-mq__l">▤ STACK</span>
      <span class="ui-aura-mq__l">◎ QUANTA</span>
      <span class="ui-aura-mq__l">⬡ ORBITAL</span>
      <span class="ui-aura-mq__l">⌬ SCALAR</span>
    </div>
  </div>
</section>

<style>
  .ui-aura-mq{background:#F7F7F5;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif;padding:16px 0 32px;overflow:hidden;max-width:100%}
  .ui-aura-mq__cap{font:600 12px/1 "Geist",sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#6B6B6B;text-align:center;margin:0 0 40px}
  .ui-aura-mq__track{display:flex;white-space:nowrap;width:100%}
  .ui-aura-mq__row{display:flex;align-items:center;gap:96px;padding-right:96px;flex-shrink:0;animation:ui-aura-mq-scroll 40s linear infinite;min-width:max-content}
  .ui-aura-mq__track:hover .ui-aura-mq__row{animation-play-state:paused}
  .ui-aura-mq__l{display:inline-flex;align-items:center;gap:8px;color:rgba(107,107,107,.2);font:900 20px/1 "Geist","Helvetica Neue",sans-serif;font-style:italic;letter-spacing:-.04em;text-transform:uppercase}
  @keyframes ui-aura-mq-scroll{from{transform:translateX(0)}to{transform:translateX(-100%)}}
</style>`,
    },
    {
      name: 'Soft Gradient 2-up Cards',
      nameJa: '柔らかいグラデ被せ 2枚カード(左上アイコン+左下キャプション)',
      desc: '300px高の角丸2枚カード。控えめなグラデーション被せ+左上にアウトラインアイコン、左下に20px見出しと薄グレー説明文。',
      detail:
        'プラットフォーム概要などで使う2枚並びの大型カード。高さ300px・角丸16pxのカードに、絶対配置の控えめなグラデーション(indigo→purple / emerald→tealなど)を半透明で被せて雰囲気を出します。レイアウトは「上=アウトラインアイコン1個」「下=見出し20px Geist 600 + 説明文14px 薄グレー」の上下分離(justify-between)。ホバーで微妙にshadowが立ち上がります。',
      descEn:
        'Two 300px-tall rounded cards with a subtle gradient overlay, an outline icon top-left, and a 20px headline + small description bottom-left.',
      detailEn:
        'A 2-up large card pair used for platform overviews. Each is 300px tall with a 16px radius, an absolutely-positioned gradient (indigo→purple, emerald→teal, etc.) at low opacity for atmosphere, and contents split top/bottom: a small outline icon up top and a 20px Geist headline + 14px gray description at the bottom. A faint shadow lifts on hover.',
      code: `<!-- Soft gradient 2-up -->
<section class="ui-aura-soft">
  <article class="ui-aura-soft__c ui-aura-soft__c--purple">
    <span class="ui-aura-soft__ico" aria-hidden="true">✎</span>
    <div class="ui-aura-soft__foot">
      <h4>Soft Editor UI</h4>
      <p>柔らかいトーンで重ねるレイヤー型エディタ。書く、整える、共有する、を1画面で。</p>
    </div>
  </article>
  <article class="ui-aura-soft__c ui-aura-soft__c--teal">
    <span class="ui-aura-soft__ico" aria-hidden="true">⌖</span>
    <div class="ui-aura-soft__foot">
      <h4>Transcript Panel</h4>
      <p>音声から書き起こされた文字を編集すると、その編集がそのまま音声に反映されます。</p>
    </div>
  </article>
</section>

<style>
  .ui-aura-soft{display:grid;grid-template-columns:repeat(2,1fr);gap:32px;max-width:1280px;margin:0 auto;padding:0 32px;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif}
  .ui-aura-soft__c{position:relative;background:#FCFCFB;border:1px solid #E7E7E4;border-radius:16px;padding:24px;height:300px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;transition:box-shadow .2s}
  .ui-aura-soft__c:hover{box-shadow:0 4px 12px rgba(0,0,0,.04)}
  .ui-aura-soft__c::before{content:"";position:absolute;inset:0;opacity:.6;pointer-events:none;transition:opacity .2s}
  .ui-aura-soft__c:hover::before{opacity:.8}
  .ui-aura-soft__c--purple::before{background:linear-gradient(135deg,rgba(99,102,241,.2),rgba(168,85,247,.3))}
  .ui-aura-soft__c--teal::before{background:linear-gradient(135deg,rgba(16,185,129,.2),rgba(20,184,166,.3))}
  .ui-aura-soft__ico{position:relative;z-index:1;color:#6B6B6B;font-size:24px;line-height:1}
  .ui-aura-soft__foot{position:relative;z-index:1}
  .ui-aura-soft__foot h4{font:600 20px/1.2 "Geist",sans-serif;letter-spacing:-.01em;color:#111;margin:0 0 8px}
  .ui-aura-soft__foot p{font:400 14px/1.5 "Geist",sans-serif;color:#6B6B6B;margin:0}
  @media (max-width:760px){.ui-aura-soft{grid-template-columns:1fr}}
</style>`,
    },
    {
      name: 'Glassmorphic Real-time Widget on Image',
      nameJa: '画像背景+ガラスカード(リアルタイム合成ウィジェット)',
      desc: '16:9画像の上にガラス調カードを中央配置。ステータス、波形バー、3指標、再生コントロール、タイムコードを1枚に集約。',
      detail:
        '製品セクションの目玉になりがちな合成ビジュアル。背景に16:9のダッシュボード写真、その手前に青/紫の発光オーブをぼかし配置し、中央に幅440pxのガラスカード(rgba(255,255,255,.25) + blur(48px) + 内側ハイライト線)を置きます。カード内は4段構成: ① 製品ラベル+緑ドットステータス、② 14本の青/紫グラデ波形バー、③ 「Latency / Confidence / Stability」3指標、④ 再生プリ/プレイ/ネクスト + モノスペース・タイムコード。',
      descEn:
        'A 16:9 image background overlaid with a centered glassmorphic card showing a status row, 14-bar waveform, 3 metrics, and playback controls + timecode.',
      detailEn:
        'A signature product visual. A 16:9 dashboard photo sits underneath, with blue / purple blurred orbs in front of it, and a 440px-wide glass card on top (rgba white .25 + 48px blur + inner highlight ring). Inside: ① product label + green-dot status, ② a 14-bar blue/purple gradient waveform, ③ a 3-metric grid (Latency / Confidence / Stability), ④ playback controls with a monospace timecode pill.',
      code: `<!-- Glass widget on image -->
<section class="ui-aura-w">
  <img alt="" class="ui-aura-w__bg" src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=987&auto=format&fit=crop">
  <span class="ui-aura-w__glow ui-aura-w__glow--b" aria-hidden="true"></span>
  <span class="ui-aura-w__glow ui-aura-w__glow--p" aria-hidden="true"></span>
  <div class="ui-aura-w__card">
    <div class="ui-aura-w__head">
      <div>
        <span class="ui-aura-w__eyebrow">Neural Engine v4.2 PRO</span>
        <span class="ui-aura-w__title">Real-time Synthesis Active</span>
      </div>
      <div class="ui-aura-w__status"><span class="ui-aura-w__dot"></span>STUDIO MODE</div>
    </div>
    <div class="ui-aura-w__bars" aria-hidden="true">
      <span style="height:25%"></span><span style="height:40%"></span><span style="height:65%"></span>
      <span style="height:55%"></span><span class="ui-aura-w__bars--p" style="height:85%"></span>
      <span class="ui-aura-w__bars--p" style="height:95%"></span><span class="ui-aura-w__bars--p" style="height:70%"></span>
      <span style="height:45%"></span><span style="height:60%"></span><span style="height:30%"></span>
      <span style="height:50%"></span><span style="height:20%"></span><span style="height:35%"></span><span style="height:15%"></span>
    </div>
    <div class="ui-aura-w__metrics">
      <div><span>LATENCY</span><strong>24<em>ms</em></strong></div>
      <div><span>CONFIDENCE</span><strong>99.8<em>%</em></strong></div>
      <div><span>STABILITY</span><strong>0.02<em>jitter</em></strong></div>
    </div>
    <div class="ui-aura-w__controls">
      <div class="ui-aura-w__pl">
        <button aria-label="Prev">⏮</button>
        <button class="ui-aura-w__play" aria-label="Play">▶</button>
        <button aria-label="Next">⏭</button>
      </div>
      <div class="ui-aura-w__time">
        <span class="ui-aura-w__tc">00:42.12</span>
        <span class="ui-aura-w__total">TOTAL 04:20</span>
      </div>
    </div>
  </div>
</section>

<style>
  .ui-aura-w{position:relative;max-width:1280px;margin:0 auto;width:100%;aspect-ratio:16/9;background:#F3F2EF;border:1px solid #E7E7E4;border-radius:24px;overflow:hidden;display:flex;align-items:center;justify-content:center;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif}
  .ui-aura-w__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.8}
  .ui-aura-w__glow{position:absolute;width:256px;height:256px;border-radius:50%;filter:blur(80px);z-index:1}
  .ui-aura-w__glow--b{background:rgba(59,130,246,.2);left:35%;top:35%}
  .ui-aura-w__glow--p{background:rgba(168,85,247,.2);left:55%;top:55%}
  .ui-aura-w__card{position:relative;z-index:2;width:440px;max-width:90%;background:rgba(255,255,255,.25);backdrop-filter:blur(48px);-webkit-backdrop-filter:blur(48px);border:1px solid rgba(255,255,255,.4);border-radius:32px;padding:32px;box-shadow:0 48px 96px -24px rgba(0,0,0,.25),inset 0 0 0 1px rgba(255,255,255,.4);display:flex;flex-direction:column;gap:32px}
  .ui-aura-w__head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
  .ui-aura-w__eyebrow{display:block;font:700 11px/1 "Geist",sans-serif;letter-spacing:.25em;text-transform:uppercase;color:rgba(17,17,17,.5);margin-bottom:4px}
  .ui-aura-w__title{display:block;font:600 14px/1.2 "Geist",sans-serif;letter-spacing:-.01em;color:#111}
  .ui-aura-w__status{display:inline-flex;align-items:center;gap:8px;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.25);padding:6px 12px;border-radius:9999px;font:700 10px/1 "Geist",sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#047857;white-space:nowrap}
  .ui-aura-w__dot{width:8px;height:8px;background:#10b981;border-radius:50%;animation:ui-aura-w-pulse 1.4s ease-in-out infinite}
  @keyframes ui-aura-w-pulse{50%{opacity:.4}}
  .ui-aura-w__bars{display:flex;align-items:flex-end;justify-content:space-between;height:96px;gap:4px}
  .ui-aura-w__bars span{width:6px;background:linear-gradient(to top,rgba(59,130,246,.4),#3b82f6);border-radius:9999px;flex:1}
  .ui-aura-w__bars span.ui-aura-w__bars--p{background:linear-gradient(to top,rgba(168,85,247,.4),#a855f7)}
  .ui-aura-w__metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:8px 0}
  .ui-aura-w__metrics div{display:flex;flex-direction:column;gap:4px}
  .ui-aura-w__metrics span{font:600 10px/1 "Geist",sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#6B6B6B}
  .ui-aura-w__metrics strong{font:700 20px/1 "Geist",sans-serif;color:#111;display:inline-flex;align-items:baseline;gap:4px}
  .ui-aura-w__metrics em{font:500 12px/1 "Geist",sans-serif;color:#6B6B6B;font-style:normal}
  .ui-aura-w__controls{display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(0,0,0,.05);padding-top:24px}
  .ui-aura-w__pl{display:flex;align-items:center;gap:24px}
  .ui-aura-w__pl button{background:transparent;border:0;color:rgba(17,17,17,.5);font-size:20px;cursor:pointer;transition:color .15s}
  .ui-aura-w__pl button:hover{color:#111}
  .ui-aura-w__play{width:48px;height:48px;background:#000 !important;color:#fff !important;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 8px 16px rgba(0,0,0,.2);font-size:18px !important;transition:transform .2s !important}
  .ui-aura-w__play:hover{transform:scale(1.1);color:#fff !important}
  .ui-aura-w__time{display:flex;flex-direction:column;align-items:flex-end;gap:4px}
  .ui-aura-w__tc{font:700 12px/1 "Geist Mono",ui-monospace,monospace;background:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.6);padding:4px 12px;border-radius:8px;color:#111;box-shadow:0 1px 2px rgba(0,0,0,.04)}
  .ui-aura-w__total{font:700 9px/1 "Geist",sans-serif;letter-spacing:-.02em;text-transform:uppercase;color:rgba(107,107,107,.6)}
  @media (max-width:640px){.ui-aura-w__card{padding:20px;gap:20px}.ui-aura-w__metrics{gap:12px}}
</style>`,
    },
    {
      name: 'Module Label Chip with Rule',
      nameJa: 'モジュールラベルpill+右側の細線(セクション開始マーカー)',
      desc: '小さなpill型ラベル+その右側に長く伸びる極薄1px線。セクションの切れ目を表すミニマルマーカー。',
      detail:
        'セクション開始の合図として「Auralis Studio」「Auralis Agents」のような小さなpill型ラベルを左端に置き、その右側に長い1px線(opacity .5)を残り全幅にわたって引きます。pillはbg-surface-variant + 12px太字、letter-spacing 0.1em のラベルキャップス書式。ミニマルですが、見出しの上に置くだけでセクション間の階層がはっきりします。',
      descEn:
        'A small pill module label on the left + a thin 1px rule filling the rest — a minimal section-start marker placed above a section header.',
      detailEn:
        'A small pill label like "Auralis Studio" or "Auralis Agents" anchors the left, and a 1px horizontal rule at 50% opacity fills the remaining width. The pill uses surface-variant fill + 12px bold with 0.1em letter-spacing. Tiny but instantly clarifies section hierarchy.',
      code: `<!-- Section label + rule -->
<div class="ui-aura-lbl">
  <span class="ui-aura-lbl__chip">Auralis Studio</span>
  <div class="ui-aura-lbl__rule" aria-hidden="true"></div>
</div>

<style>
  .ui-aura-lbl{display:flex;align-items:center;gap:16px;max-width:1280px;margin:0 auto;padding:0 32px;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif}
  .ui-aura-lbl__chip{display:inline-flex;align-items:center;font:600 12px/1 "Geist",sans-serif;letter-spacing:.1em;text-transform:uppercase;background:#E5E2E1;color:#111;padding:6px 12px;border-radius:9999px;flex-shrink:0}
  .ui-aura-lbl__rule{flex-grow:1;height:1px;background:#E7E7E4;opacity:.5}
</style>`,
    },
    {
      name: 'Asymmetric Section Header (5/7)',
      nameJa: '非対称セクション見出し(左5列に大見出し+右6列下寄せにリード)',
      desc: '12カラムグリッドで左5列に48px大見出し、右6列(col-start-7)下寄せに18pxリード文。',
      detail:
        '「見出しは大きく、説明は小さく右下に」というモダンエディトリアル定番のレイアウト。12カラムグリッド上で、左5列に48px Geist 600 / line-height tight の大見出しを置き、右6列(col-start-7)を items-end で下寄せにして18pxの薄グレーリード文を載せます。視覚的にL字型のテキスト配置になり、左右で重さの対比が出ます。',
      descEn:
        'A 12-col asymmetric section header — a 48px headline on the left 5 cols and a bottom-aligned 18px lead in the right 6 cols (col-start-7).',
      detailEn:
        'Modern editorial pattern: large headline on the left, small lead bottom-aligned on the right. On a 12-col grid, a 48px Geist headline fills 5 left columns and an 18px gray paragraph sits in the right 6 columns aligned to items-end. The result is an L-shaped text block with clear weight contrast.',
      code: `<!-- Asymmetric header -->
<header class="ui-aura-head">
  <h2 class="ui-aura-head__h">Create, refine, &amp; scale audio in one place</h2>
  <p class="ui-aura-head__lead">一つのスタジオで作る、磨く、配信する。スクリプト、声、効果音、書き起こしが互いに影響し合い、変更は瞬時に反映されます。</p>
</header>

<style>
  .ui-aura-head{display:grid;grid-template-columns:repeat(12,1fr);gap:48px;max-width:1280px;margin:0 auto;padding:0 32px;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif}
  .ui-aura-head__h{grid-column:1 / span 5;font:600 48px/1.1 "Geist",sans-serif;letter-spacing:-.03em;color:#111;margin:0}
  .ui-aura-head__lead{grid-column:7 / span 6;align-self:end;font:400 18px/1.6 "Geist",sans-serif;letter-spacing:-.01em;color:#6B6B6B;margin:0}
  @media (max-width:760px){.ui-aura-head__h{grid-column:1 / -1;font-size:32px}.ui-aura-head__lead{grid-column:1 / -1}}
</style>`,
    },
    {
      name: 'Image Card with Bottom Glass Caption',
      nameJa: '画像カード(下部にガラス調キャプション帯)',
      desc: '300px高の角丸カードに画像が全面背景、下端にガラス調の透過パネルで見出し+説明を載せる。',
      detail:
        '画像をフルカバー背景にした300px高の角丸カード。下端だけにガラス調の白透過パネル(rgba(255,255,255,.2) + blur(16px) + 白枠線)を貼り、その上に20pxの白見出しと薄い白の説明文を載せます。画像とテキストが分離せず、なじみ良く重ねられるパターン。ホバーで画像のopacityが上がるなどの微細な仕掛けも追加できます。',
      descEn:
        'A 300px image-cover card with a frosted-glass caption strip at the bottom containing a 20px white headline + soft white description.',
      detailEn:
        'A 300px tall rounded card with an image filling the background. A bottom-only glass strip (rgba white .2 + 16px blur + white border) carries a 20px white headline and a faded-white paragraph. The text rides on the image without standing apart. Hover can subtly raise the image opacity.',
      code: `<!-- Image card with bottom glass caption -->
<article class="ui-aura-img">
  <img alt="" class="ui-aura-img__bg" src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=987&auto=format&fit=crop">
  <div class="ui-aura-img__cap">
    <h4>Soft Editor UI</h4>
    <p>柔らかいトーンで重ねるレイヤー型エディタ。書く、整える、共有する、を1画面で。</p>
  </div>
</article>

<style>
  .ui-aura-img{position:relative;background:#FCFCFB;border:1px solid #E7E7E4;border-radius:16px;height:300px;max-width:560px;margin:0 auto;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;transition:box-shadow .2s;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif}
  .ui-aura-img:hover{box-shadow:0 4px 12px rgba(0,0,0,.04)}
  .ui-aura-img__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.92;transition:opacity .5s}
  .ui-aura-img:hover .ui-aura-img__bg{opacity:1}
  .ui-aura-img__cap{position:relative;z-index:1;background:rgba(255,255,255,.2);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-top:1px solid rgba(255,255,255,.3);border-bottom-left-radius:16px;border-bottom-right-radius:16px;padding:24px;color:#fff}
  .ui-aura-img__cap h4{font:600 20px/1.2 "Geist",sans-serif;letter-spacing:-.01em;color:#fff;margin:0 0 8px}
  .ui-aura-img__cap p{font:400 14px/1.5 "Geist",sans-serif;color:rgba(255,255,255,.8);margin:0}
</style>`,
    },
    {
      name: '4-up Flat Icon Tiles',
      nameJa: '4枚並列 フラット小タイル(アウトラインアイコン+ラベル)',
      desc: '極小の角丸カード4枚、左上にアウトラインアイコン、下に14pxのラベルだけ。',
      detail:
        'カテゴリショートカット用の4タイル行。各タイルはpadding 20pxの薄ベージュ角丸(#F3F2EF)、左上に小さなアウトラインアイコン、下に14px medium のラベル。ホバーで背景が surface-variant に薄く変わるだけで、装飾は最小限。Music / SFX / Voices / Image & Video のようにジャンルを並列で示すのに最適。',
      descEn:
        'A 4-tile row of tiny rounded cards — each has an outline icon top-left and a 14px label at the bottom; hover gently tints the background.',
      detailEn:
        'A 4-up shortcut row. Each tile is 20px-padded, beige rounded (#F3F2EF), an outline icon top-left and a 14px medium label below. Hover lightly tints the background. Great for parallel category links like Music / SFX / Voices / Image & Video.',
      code: `<!-- 4 flat tiles -->
<section class="ui-aura-tiles">
  <a class="ui-aura-tiles__t" href="#"><span class="ui-aura-tiles__i">♪</span><span class="ui-aura-tiles__l">Music</span></a>
  <a class="ui-aura-tiles__t" href="#"><span class="ui-aura-tiles__i">≋</span><span class="ui-aura-tiles__l">SFX</span></a>
  <a class="ui-aura-tiles__t" href="#"><span class="ui-aura-tiles__i">◐</span><span class="ui-aura-tiles__l">Voices</span></a>
  <a class="ui-aura-tiles__t" href="#"><span class="ui-aura-tiles__i">▷</span><span class="ui-aura-tiles__l">Image &amp; Video</span></a>
</section>

<style>
  .ui-aura-tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;max-width:1280px;margin:0 auto;padding:0 32px;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif}
  .ui-aura-tiles__t{display:flex;flex-direction:column;align-items:flex-start;gap:12px;background:#F3F2EF;border:1px solid #E7E7E4;border-radius:12px;padding:20px;text-decoration:none;color:#111;cursor:pointer;transition:background .15s}
  .ui-aura-tiles__t:hover{background:rgba(229,226,225,.5)}
  .ui-aura-tiles__i{color:#111;font-size:20px;line-height:1}
  .ui-aura-tiles__l{font:500 14px/1 "Geist",sans-serif;color:#111}
  @media (max-width:640px){.ui-aura-tiles{grid-template-columns:repeat(2,1fr)}}
</style>`,
    },
    {
      name: 'Agent Card (Glass Chat Bubbles)',
      nameJa: 'エージェントカード(ぼかしオーブ背景+ガラス調チャット)',
      desc: '450px高の角丸大カード。背景に2色オーブをぼかし、上にカテゴリpill、下にガラス調チャット2発(AI ↔ ユーザー)。',
      detail:
        'AIエージェント機能の紹介に使う大判カード。背景にcyan系とpink系の2色オーブをblur(32px)で重ね、左上に「Omnichannel agents」のような pill カテゴリラベル、下半分にガラス調(rgba(255,255,255,.2) + blur(32px))のチャットモジュールを配置。チャット1発目はAI側(左寄せ、丸アイコン+白透過バブル)、2発目はユーザー側(右寄せ、黒バブル)で対話の方向性を視覚化します。',
      descEn:
        'A 450px tall card layered over two blurred color orbs, with a category pill top-left and a glass chat module at the bottom showing one AI bubble + one user bubble.',
      detailEn:
        'A wide showcase card for agent features. Two blurred orbs (cyan, pink) sit behind a glass chat block at the bottom. Top-left holds a small "Omnichannel agents" pill. The chat module is rgba white .2 + 32px blur and stacks two messages: AI on the left (round avatar + white-translucent bubble), user on the right (round avatar + solid-black bubble).',
      code: `<!-- Agent card with glass chat -->
<article class="ui-aura-agc">
  <div class="ui-aura-agc__orbs" aria-hidden="true">
    <span class="ui-aura-agc__o1"></span>
    <span class="ui-aura-agc__o2"></span>
  </div>
  <span class="ui-aura-agc__chip">Omnichannel agents</span>
  <div class="ui-aura-agc__chat">
    <div class="ui-aura-agc__msg">
      <div class="ui-aura-agc__av ui-aura-agc__av--ai">AI</div>
      <div class="ui-aura-agc__b ui-aura-agc__b--ai">Hello! How can I assist you today?</div>
    </div>
    <div class="ui-aura-agc__msg ui-aura-agc__msg--u">
      <div class="ui-aura-agc__av ui-aura-agc__av--u">U</div>
      <div class="ui-aura-agc__b ui-aura-agc__b--u">I need help checking my deployment status.</div>
    </div>
  </div>
</article>

<style>
  .ui-aura-agc{position:relative;background:#FCFCFB;border:1px solid #E7E7E4;border-radius:24px;padding:32px;height:450px;display:flex;flex-direction:column;overflow:hidden;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif;max-width:560px;margin:0 auto}
  .ui-aura-agc__orbs{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.4;transition:opacity .5s}
  .ui-aura-agc:hover .ui-aura-agc__orbs{opacity:.6}
  .ui-aura-agc__orbs span{position:absolute;width:200px;height:200px;border-radius:50%;filter:blur(32px)}
  .ui-aura-agc__o1{background:linear-gradient(to right,#60a5fa,#67e8f9);margin:-80px 0 0 -80px}
  .ui-aura-agc__o2{background:linear-gradient(to right,#c084fc,#f9a8d4);margin:80px 0 0 80px}
  .ui-aura-agc__chip{position:relative;z-index:1;align-self:flex-start;background:rgba(253,248,248,.8);backdrop-filter:blur(8px);border:1px solid #E7E7E4;padding:8px 16px;border-radius:9999px;font:500 14px/1 "Geist",sans-serif;color:#111;margin-bottom:auto}
  .ui-aura-agc__chat{position:relative;z-index:1;margin-top:auto;background:rgba(255,255,255,.2);backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px);padding:24px;border-radius:32px;border:1px solid rgba(255,255,255,.4);box-shadow:0 32px 64px -16px rgba(0,0,0,.1)}
  .ui-aura-agc__msg{display:flex;gap:16px;align-items:center;margin-bottom:16px}
  .ui-aura-agc__msg:last-child{margin-bottom:0}
  .ui-aura-agc__msg--u{flex-direction:row-reverse}
  .ui-aura-agc__av{width:40px;height:40px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font:700 12px/1 "Geist",sans-serif;flex-shrink:0}
  .ui-aura-agc__av--ai{background:#000;color:#fff;box-shadow:0 1px 2px rgba(0,0,0,.1)}
  .ui-aura-agc__av--u{background:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.5);color:#111}
  .ui-aura-agc__b{padding:8px 16px;border-radius:16px;font:400 14px/1.4 "Geist",sans-serif;max-width:80%}
  .ui-aura-agc__b--ai{background:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.5);border-top-left-radius:4px;color:#111;box-shadow:0 1px 2px rgba(0,0,0,.04)}
  .ui-aura-agc__b--u{background:rgba(0,0,0,.9);color:#fff;border-top-right-radius:4px;box-shadow:0 8px 16px rgba(0,0,0,.15)}
</style>`,
    },
    {
      name: 'Centered Sign-off CTA',
      nameJa: '中央寄せサインオフCTA(2行見出し+対pill)',
      desc: 'ページ末尾の大きな中央寄せセクション。48px太字見出し2行+黒塗りpillと枠線pillの対CTA。',
      detail:
        '長いランディングページの最下部、フッター直前に置く「最終誘導」セクション。48px Geist 600 / letter-spacing -0.03 / max-w 3xl の中央寄せ大見出し1本(2行が定番)に、対の pill CTA(黒塗り「Get started」+ 透明枠線「Talk to sales」)を中央配置。背景は本文と同じオフホワイトのまま、装飾なし。シンプルさが説得力を上げる。',
      descEn:
        'A page-end centered sign-off — a 48px headline (up to 2 lines, max-w-3xl) above paired filled + outlined pill CTAs, on the same off-white as the rest of the page.',
      detailEn:
        'A "final push" section right before the footer. A 48px Geist headline (often 2 lines, max-w-3xl) is centered above paired pill CTAs — solid black "Get started" + outlined "Talk to sales". No background tint, no graphics. The lack of decoration is the persuasion.',
      code: `<!-- Sign-off CTA -->
<section class="ui-aura-so">
  <h2 class="ui-aura-so__h">The future of voice<br>starts here</h2>
  <div class="ui-aura-so__cta">
    <a class="ui-aura-so__btn ui-aura-so__btn--solid" href="#">Get started</a>
    <a class="ui-aura-so__btn ui-aura-so__btn--ghost" href="#">Talk to sales</a>
  </div>
</section>

<style>
  .ui-aura-so{max-width:1280px;margin:0 auto;padding:0 32px;text-align:center;display:flex;flex-direction:column;align-items:center;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif;background:#F7F7F5}
  .ui-aura-so__h{font:600 48px/1.1 "Geist",sans-serif;letter-spacing:-.03em;color:#111;max-width:48rem;margin:0 0 32px}
  .ui-aura-so__cta{display:flex;flex-wrap:wrap;justify-content:center;gap:16px}
  .ui-aura-so__btn{display:inline-flex;align-items:center;padding:12px 24px;border-radius:9999px;font:500 15px/1 "Geist",sans-serif;text-decoration:none;transition:.15s}
  .ui-aura-so__btn--solid{background:#000;color:#fff}
  .ui-aura-so__btn--solid:hover{background:#222}
  .ui-aura-so__btn--ghost{background:transparent;color:#111;border:1px solid #d4d4d4}
  .ui-aura-so__btn--ghost:hover{background:#ececec}
  @media (max-width:640px){.ui-aura-so__h{font-size:32px}}
</style>`,
    },
    {
      name: 'Minimal Inline Footer',
      nameJa: 'ミニマル横並びフッター(ブランド+著作権+インラインリンク)',
      desc: '上端1pxボーダーだけの細いフッター。左にブランドと著作権、右にインラインのリンク群を横並び。',
      detail:
        '上端に1pxの薄ボーダーだけ引いた極ミニマルなフッター。左にブランド名(20px bold)と著作権表記(14px 薄グレー)、右にTwitter / GitHub / Terms / Privacy のような4〜6本のインラインリンクを横並びで配置。スマホでは縦並びに折り畳まれる。フッターを「最低限の情報だけ + 余白」で締めるのがモダンなプロダクトサイトの定番。',
      descEn:
        'A minimal inline footer — only a top 1px hairline, brand + copyright on the left, 4–6 inline links on the right; stacks vertically on mobile.',
      detailEn:
        'A 1px top hairline border is its only boundary. Brand name (20px bold) and copyright (14px gray) sit left; 4–6 inline links (Twitter, GitHub, Terms, Privacy) sit right. Stacks vertically on small screens. "Only the essentials + breathing room" is the modern product-site closing.',
      code: `<!-- Minimal inline footer -->
<footer class="ui-aura-ft">
  <div class="ui-aura-ft__inner">
    <div class="ui-aura-ft__left">
      <span class="ui-aura-ft__brand">Auralis</span>
      <span class="ui-aura-ft__copy">© 2026 Auralis AI. Engineered for precision.</span>
    </div>
    <div class="ui-aura-ft__links">
      <a href="#">Twitter</a>
      <a href="#">GitHub</a>
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
    </div>
  </div>
</footer>

<style>
  .ui-aura-ft{width:100%;border-top:1px solid #E7E7E4;padding:48px 0;background:transparent;font-family:"Geist",-apple-system,"Helvetica Neue",sans-serif}
  .ui-aura-ft__inner{max-width:1280px;margin:0 auto;padding:0 32px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:32px}
  .ui-aura-ft__left{display:flex;align-items:center;gap:32px}
  .ui-aura-ft__brand{font:700 20px/1 "Geist",sans-serif;letter-spacing:-.04em;color:#111}
  .ui-aura-ft__copy{font:400 14px/1.5 "Geist",sans-serif;color:#6B6B6B}
  .ui-aura-ft__links{display:flex;flex-wrap:wrap;align-items:center;gap:24px}
  .ui-aura-ft__links a{font:400 14px/1 "Geist",sans-serif;color:#6B6B6B;text-decoration:none;transition:color .15s}
  .ui-aura-ft__links a:hover{color:#111}
  @media (max-width:760px){.ui-aura-ft__inner{flex-direction:column;align-items:center;text-align:center}.ui-aura-ft__left{flex-direction:column;gap:8px}}
</style>`,
    },
  ],
}
