/**
 * UI Parts — AI UI-generator style "Vibe Design" site skeleton.
 * Generic, copy-paste-ready snippets that capture the look-and-feel of
 * modern AI design tools: a large vibe-prompt input, an examples gallery
 * tile grid, a mobile phone-frame preview, glassmorphism dashboard
 * cards, a voice-canvas orb, an infinite-canvas FAB, and a DESIGN.md
 * export block. All code is original.
 */

export const category = {
  id: 'ui-parts-site-stitch',
  title: 'AI UI生成ツール風 Vibe Design 骨格',
  titleEn: 'AI UI Tool / Vibe Design Skeleton',
  description:
    'AI UI生成ツールが出力する典型的なダーク×グラスモーフィズム×モバイルアプリ枠の世界観をまるごと再現。大型Vibeプロンプト入力、Examples Galleryタイル、スマホ枠プレビュー、ダークSaaSダッシュボード、Voice Canvasオーブ、無限キャンバスFAB、DESIGN.md出力ブロックまで12種類。',
  descriptionEn:
    "A skeleton that captures the look of modern AI UI generators: oversized vibe-prompt input, examples gallery tiles, a mobile-frame preview, dark SaaS dashboard with glassmorphism stats, a voice-canvas orb, an infinite-canvas FAB, and a DESIGN.md export block — 12 original parts.",
  terms: [
    {
      name: 'Vibe Prompt Input',
      nameJa: 'Vibeプロンプト入力(大型テキストエリア+生成ボタン+Vibeチップ)',
      desc: '中央にどんと置く大型テキストエリア。下にVibeチップ(Dark / Glass / Minimal / Playful)と右下に紫グラデの「Generate」ピル。',
      detail:
        'AI UI生成ツールの顔となる中央プロンプト入力。背景はダークグレー(#0F0F12)に薄いボーダーで囲まれた角丸36pxの大型コンテナ。中央には自由記述用のtextarea(border:none / 透過背景 / 18px / placeholderは薄白)、その下に「Dark mode / Glassmorphism / Minimal / Playful」のVibeチップを並べ、右下にインディゴ→ピンクのグラデーション「Generate ↗」ピルを置きます。フォーカスでチップが薄くハイライトし、Generateピルがやや浮き上がる。',
      descEn:
        'A centerpiece vibe-prompt input — large dark rounded container, free textarea, a row of vibe chips (Dark / Glass / Minimal / Playful), and a gradient "Generate" pill in the corner.',
      detailEn:
        'The signature centerpiece prompt of AI design generators. A dark rounded 36px container holds a transparent textarea (no borders, 18px text, soft-white placeholder), a row of "Dark mode / Glassmorphism / Minimal / Playful" vibe chips, and an indigo→pink "Generate ↗" pill in the lower right. Chips highlight on focus and the Generate pill lifts subtly.',
      code: `<!-- Vibe prompt input -->
<section class="ui-stch-prompt">
  <div class="ui-stch-prompt__inner">
    <textarea class="ui-stch-prompt__ta" rows="3" placeholder="Describe your app idea — a calm productivity tracker with glassmorphism and a floating note dock…"></textarea>
    <div class="ui-stch-prompt__row">
      <div class="ui-stch-prompt__chips">
        <button class="ui-stch-prompt__chip ui-stch-prompt__chip--on" type="button">◐ Dark mode</button>
        <button class="ui-stch-prompt__chip" type="button">◇ Glassmorphism</button>
        <button class="ui-stch-prompt__chip" type="button">— Minimal</button>
        <button class="ui-stch-prompt__chip" type="button">✦ Playful</button>
      </div>
      <button class="ui-stch-prompt__go" type="button">Generate <span aria-hidden="true">↗</span></button>
    </div>
  </div>
  <p class="ui-stch-prompt__hint">⌘ Enter で生成 · 350 回 / 月の標準枠が残っています</p>
</section>

<style>
  .ui-stch-prompt{max-width:880px;margin:0 auto;padding:32px 24px;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff}
  .ui-stch-prompt__inner{background:#0F0F12;border:1px solid rgba(255,255,255,.08);border-radius:36px;padding:28px;box-shadow:0 20px 60px -20px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.04);transition:border-color .2s}
  .ui-stch-prompt__inner:focus-within{border-color:rgba(165,103,255,.5)}
  .ui-stch-prompt__ta{display:block;width:100%;background:transparent;border:0;outline:none;resize:none;color:#fff;font:400 18px/1.55 "Inter",sans-serif;letter-spacing:-.01em;margin-bottom:24px;min-height:88px}
  .ui-stch-prompt__ta::placeholder{color:rgba(255,255,255,.32)}
  .ui-stch-prompt__row{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
  .ui-stch-prompt__chips{display:flex;gap:8px;flex-wrap:wrap}
  .ui-stch-prompt__chip{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#d4d4d8;padding:7px 12px;border-radius:9999px;font:500 12px/1 "Inter",sans-serif;letter-spacing:.01em;cursor:pointer;transition:.15s}
  .ui-stch-prompt__chip:hover{background:rgba(255,255,255,.09);color:#fff}
  .ui-stch-prompt__chip--on{background:linear-gradient(135deg,rgba(165,103,255,.18),rgba(255,107,182,.18));border-color:rgba(165,103,255,.45);color:#fff}
  .ui-stch-prompt__go{display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#7c3aed 0%,#ec4899 100%);color:#fff;border:0;padding:10px 18px;border-radius:9999px;font:600 13px/1 "Inter",sans-serif;letter-spacing:.01em;cursor:pointer;box-shadow:0 8px 24px -8px rgba(124,58,237,.6);transition:transform .15s,box-shadow .15s}
  .ui-stch-prompt__go:hover{transform:translateY(-1px);box-shadow:0 12px 28px -8px rgba(236,72,153,.55)}
  .ui-stch-prompt__hint{margin:14px 4px 0;font:400 12px/1 "Inter",sans-serif;color:rgba(255,255,255,.4)}
  @media(max-width:560px){.ui-stch-prompt__inner{padding:20px;border-radius:24px}}
</style>`,
    },
    {
      name: 'AI Prompt Helper',
      nameJa: 'AIプロンプト・リファイナー(粗→詳細プロンプト)',
      desc: '入力した粗いプロンプトを、AIが詳細な指示文に書き換えて提案する2段ブロック。差分は薄いハイライトで強調。',
      detail:
        '生成前の補助UI。上段に「あなたの入力(粗)」、下段に「AIが詳細化した推奨プロンプト」をモノスペース寄りの読みやすい書式で並べ、追加された具体語句(色名・形状・配色・フォントなど)を薄紫の inline-mark でハイライトします。右下に「この提案で生成」ピル+「やり直し」テキストリンク。プロンプトエンジニアリングが見えるUIで、生成結果の予測性を高めるのが狙い。',
      descEn:
        'A two-tier prompt-refinement block — your rough input above, the AI-expanded detailed prompt below, with newly-added concrete terms highlighted with a soft purple inline mark.',
      detailEn:
        'A pre-generation helper. The top tier shows "Your input (rough)" in a small monospace block; the bottom shows the AI-expanded prompt with new concrete terms (colors, shapes, fonts) highlighted with a soft purple inline mark. Bottom-right has a "Use this prompt" pill and a "Try again" link. Makes the prompt-engineering visible.',
      code: `<!-- AI prompt helper / refiner -->
<section class="ui-stch-ref">
  <div class="ui-stch-ref__block">
    <span class="ui-stch-ref__lbl">あなたの入力</span>
    <p class="ui-stch-ref__rough">fitness app</p>
  </div>
  <div class="ui-stch-ref__arrow" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
  </div>
  <div class="ui-stch-ref__block ui-stch-ref__block--out">
    <span class="ui-stch-ref__lbl ui-stch-ref__lbl--out">AIが詳細化したプロンプト</span>
    <p class="ui-stch-ref__detail">
      <mark>Dark mode iOS</mark> 向けの <mark>fitness tracker</mark>。
      <mark>円形プログレスリング</mark> をホーム中央に置き、
      下部に <mark>4タブの bottom navigation</mark>、
      背景は <mark>深紫から黒のグラデーション</mark>、
      上部にユーザー名 + <mark>1日のモチベ引用文カルーセル</mark>。
    </p>
    <div class="ui-stch-ref__actions">
      <button type="button" class="ui-stch-ref__use">この提案で生成</button>
      <a class="ui-stch-ref__again" href="#">やり直し</a>
    </div>
  </div>
</section>

<style>
  .ui-stch-ref{max-width:680px;margin:0 auto;padding:28px 24px;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;display:flex;flex-direction:column;gap:8px;color:#fff}
  .ui-stch-ref__block{background:#101015;border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:18px 20px}
  .ui-stch-ref__block--out{background:rgba(124,58,237,.06);border-color:rgba(124,58,237,.3)}
  .ui-stch-ref__lbl{display:inline-block;font:700 10px/1 "Inter",sans-serif;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:10px}
  .ui-stch-ref__lbl--out{color:#c4b5fd}
  .ui-stch-ref__rough{margin:0;font:400 14px/1.5 ui-monospace,"SFMono-Regular","Menlo",monospace;color:rgba(255,255,255,.6)}
  .ui-stch-ref__detail{margin:0;font:400 14px/1.65 "Inter",sans-serif;letter-spacing:-.005em;color:rgba(255,255,255,.92)}
  .ui-stch-ref__detail mark{background:rgba(165,103,255,.22);color:#fff;padding:1px 4px;border-radius:4px}
  .ui-stch-ref__arrow{align-self:center;color:rgba(255,255,255,.35);width:22px;height:22px}
  .ui-stch-ref__arrow svg{width:100%;height:100%}
  .ui-stch-ref__actions{margin-top:14px;display:flex;align-items:center;gap:14px}
  .ui-stch-ref__use{background:#fff;color:#0F0F12;border:0;padding:8px 16px;border-radius:9999px;font:600 12px/1 "Inter",sans-serif;cursor:pointer}
  .ui-stch-ref__use:hover{background:#e5e5e5}
  .ui-stch-ref__again{color:rgba(255,255,255,.55);font:500 12px/1 "Inter",sans-serif;text-decoration:none}
  .ui-stch-ref__again:hover{color:#fff}
</style>`,
    },
    {
      name: 'Examples Gallery Tiles',
      nameJa: 'Examples Gallery タイル群(ジャンル別カード6枚)',
      desc: '2x3 の小型タイルで Mobile / Dashboards / E-commerce などのジャンルを並べる。アイコン+タイトル+件数。',
      detail:
        'ホーム画面で「やりたいこと」を選ばせるためのタイル一覧。2列×3行の小さなカード(角丸20px / 暗背景)に、左上に丸囲みのジャンルアイコン、下に「Mobile apps」「Dashboards」「E-commerce」「Onboarding」「Settings」「Landing pages」など、各タイル右下に「128 templates」のような件数表記。ホバーで枠線が薄紫に変わり、カードが1px浮かびます。',
      descEn:
        'A 2×3 grid of category tiles — Mobile apps, Dashboards, E-commerce, Onboarding, Settings, Landing pages — each with an icon, title, and template count.',
      detailEn:
        'A 2×3 grid of category tiles on the dashboard. Each rounded 20px dark card has a circular icon in the top-left, a category label, and a small "128 templates" count in the bottom-right. Hover lifts the card 1px and switches the border to soft purple.',
      code: `<!-- Examples gallery tiles -->
<section class="ui-stch-gal">
  <div class="ui-stch-gal__head">
    <h2>Examples Gallery</h2>
    <a href="#">すべて見る <span aria-hidden="true">›</span></a>
  </div>
  <div class="ui-stch-gal__grid">
    <a class="ui-stch-gal__t" href="#"><span class="ui-stch-gal__ico">▢</span><span class="ui-stch-gal__lbl">Mobile apps</span><span class="ui-stch-gal__cnt">128 templates</span></a>
    <a class="ui-stch-gal__t" href="#"><span class="ui-stch-gal__ico">▦</span><span class="ui-stch-gal__lbl">Dashboards</span><span class="ui-stch-gal__cnt">96 templates</span></a>
    <a class="ui-stch-gal__t" href="#"><span class="ui-stch-gal__ico">⌘</span><span class="ui-stch-gal__lbl">E-commerce</span><span class="ui-stch-gal__cnt">84 templates</span></a>
    <a class="ui-stch-gal__t" href="#"><span class="ui-stch-gal__ico">◷</span><span class="ui-stch-gal__lbl">Onboarding</span><span class="ui-stch-gal__cnt">42 templates</span></a>
    <a class="ui-stch-gal__t" href="#"><span class="ui-stch-gal__ico">⚙</span><span class="ui-stch-gal__lbl">Settings</span><span class="ui-stch-gal__cnt">36 templates</span></a>
    <a class="ui-stch-gal__t" href="#"><span class="ui-stch-gal__ico">▷</span><span class="ui-stch-gal__lbl">Landing pages</span><span class="ui-stch-gal__cnt">71 templates</span></a>
  </div>
</section>

<style>
  .ui-stch-gal{max-width:880px;margin:0 auto;padding:24px;background:#0A0A0D;border-radius:24px;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff}
  .ui-stch-gal__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:18px}
  .ui-stch-gal__head h2{font:600 18px/1 "Inter",sans-serif;letter-spacing:-.01em;margin:0}
  .ui-stch-gal__head a{font:500 12px/1 "Inter",sans-serif;color:rgba(255,255,255,.6);text-decoration:none}
  .ui-stch-gal__head a:hover{color:#fff}
  .ui-stch-gal__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  .ui-stch-gal__t{position:relative;display:flex;flex-direction:column;gap:10px;padding:18px;background:#121218;border:1px solid rgba(255,255,255,.06);border-radius:20px;text-decoration:none;color:#fff;transition:.18s}
  .ui-stch-gal__t:hover{border-color:rgba(165,103,255,.45);transform:translateY(-1px);background:#16161e}
  .ui-stch-gal__ico{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:50%;font-size:16px;color:#c4b5fd}
  .ui-stch-gal__lbl{font:600 14px/1 "Inter",sans-serif;letter-spacing:-.005em}
  .ui-stch-gal__cnt{position:absolute;right:14px;bottom:14px;font:500 11px/1 "Inter",sans-serif;color:rgba(255,255,255,.4)}
  @media(max-width:640px){.ui-stch-gal__grid{grid-template-columns:repeat(2,1fr)}}
</style>`,
    },
    {
      name: 'Mobile Phone Frame Preview',
      nameJa: 'スマホ枠プレビュー(ダーク + 円形進捗 + 下タブ)',
      desc: '黒いスマホ枠の中にダークUIをレンダリング。中央に円形プログレスリング、上に名前、下に4タブ。',
      detail:
        'AIが生成したモバイルアプリの初期画面を「実機の中で見る」プレビュー枠。角丸52pxの黒い枠、ノッチ、画面エリア(深紫グラデ背景)に、上部に挨拶テキスト、中央に大きな円形プログレスリング(SVG 240x240、ダッシュ風)+ 「7,432 歩 / 10,000 歩」のメトリクス、下端に4タブ(Home / Workouts / Stats / Me)を配置。',
      descEn:
        'A phone frame with a dark fitness UI inside — greeting at top, large SVG circular progress ring with step count in the middle, 4-tab dock at the bottom.',
      detailEn:
        'A phone-shaped frame showcasing an AI-generated mobile screen. 52px-radius black bezel with a notch, a deep-purple gradient screen, a top greeting, a centered SVG progress ring with step metric, and a 4-tab dock (Home / Workouts / Stats / Me) at the bottom.',
      code: `<!-- Mobile phone frame preview -->
<div class="ui-stch-ph">
  <div class="ui-stch-ph__notch" aria-hidden="true"></div>
  <div class="ui-stch-ph__scr">
    <div class="ui-stch-ph__top">
      <span class="ui-stch-ph__hello">おはよう、Yui</span>
      <span class="ui-stch-ph__sub">今日も少しずつ。</span>
    </div>
    <div class="ui-stch-ph__ring" aria-hidden="true">
      <svg viewBox="0 0 240 240" width="200" height="200">
        <defs>
          <linearGradient id="ui-stch-ph-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#a78bfa"/>
            <stop offset="1" stop-color="#f472b6"/>
          </linearGradient>
        </defs>
        <circle cx="120" cy="120" r="100" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="14"/>
        <circle cx="120" cy="120" r="100" fill="none" stroke="url(#ui-stch-ph-grad)" stroke-width="14" stroke-linecap="round" stroke-dasharray="628" stroke-dashoffset="161" transform="rotate(-90 120 120)"/>
      </svg>
      <div class="ui-stch-ph__metric">
        <strong>7,432</strong>
        <span>/ 10,000 歩</span>
      </div>
    </div>
    <div class="ui-stch-ph__quote">"続けることが、最大のショートカット。"</div>
    <nav class="ui-stch-ph__tabs" aria-label="Bottom">
      <button class="ui-stch-ph__tab ui-stch-ph__tab--on" type="button">●<span>Home</span></button>
      <button class="ui-stch-ph__tab" type="button">▤<span>Workouts</span></button>
      <button class="ui-stch-ph__tab" type="button">⌬<span>Stats</span></button>
      <button class="ui-stch-ph__tab" type="button">◐<span>Me</span></button>
    </nav>
  </div>
</div>

<style>
  .ui-stch-ph{position:relative;width:320px;height:660px;margin:0 auto;background:#000;border-radius:52px;padding:14px;box-shadow:0 30px 80px -20px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.06);font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff}
  .ui-stch-ph__notch{position:absolute;top:14px;left:50%;transform:translateX(-50%);width:120px;height:26px;background:#000;border-bottom-left-radius:16px;border-bottom-right-radius:16px;z-index:2}
  .ui-stch-ph__scr{height:100%;background:linear-gradient(180deg,#1d0a3d 0%,#0F0F12 100%);border-radius:42px;padding:48px 22px 22px;display:flex;flex-direction:column;position:relative;overflow:hidden}
  .ui-stch-ph__top{margin-bottom:6px}
  .ui-stch-ph__hello{display:block;font:700 22px/1.1 "Inter",sans-serif;letter-spacing:-.02em}
  .ui-stch-ph__sub{display:block;margin-top:4px;font:400 13px/1.4 "Inter",sans-serif;color:rgba(255,255,255,.5)}
  .ui-stch-ph__ring{position:relative;display:flex;align-items:center;justify-content:center;margin-top:auto}
  .ui-stch-ph__ring svg{display:block}
  .ui-stch-ph__metric{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
  .ui-stch-ph__metric strong{font:700 36px/1 "Inter",sans-serif;letter-spacing:-.03em;background:linear-gradient(135deg,#a78bfa,#f472b6);-webkit-background-clip:text;background-clip:text;color:transparent}
  .ui-stch-ph__metric span{margin-top:6px;font:500 12px/1 "Inter",sans-serif;color:rgba(255,255,255,.55)}
  .ui-stch-ph__quote{margin:20px 0 auto;text-align:center;font:400 12px/1.5 "Inter",sans-serif;color:rgba(255,255,255,.55);padding:0 10px}
  .ui-stch-ph__tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:0;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:9999px;padding:6px;backdrop-filter:blur(20px)}
  .ui-stch-ph__tab{background:transparent;border:0;color:rgba(255,255,255,.55);font:500 10px/1 "Inter",sans-serif;display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;cursor:pointer;border-radius:9999px}
  .ui-stch-ph__tab--on{background:linear-gradient(135deg,rgba(167,139,250,.25),rgba(244,114,182,.25));color:#fff}
  .ui-stch-ph__tab span{font-size:10px}
</style>`,
    },
    {
      name: 'Floating Bottom Tab Bar',
      nameJa: 'フローティング下部タブバー(グラデ・浮かせ・アイコン4個)',
      desc: '画面下に浮かぶ角丸タブバー。アクティブだけグラデのピル。アイコン+ラベルが縦並び。',
      detail:
        'モバイルUIで頻出する「フローティングタブバー」。画面下に18px floating させた角丸pill(背景は半透明黒 + blur)で、4タブ。アクティブタブだけがインディゴ→ピンクのグラデーション pill になり、白アイコン+白ラベル。他は薄白アイコン+薄白ラベル。タップ時にアクティブ pill が水平にスライドする想定。',
      descEn:
        'A floating bottom tab bar — translucent dark pill, 4 tabs, active tab gets a gradient pill; icons stack vertically with labels.',
      detailEn:
        'A floating tab dock for mobile. A translucent dark pill (with blur) sits 18px above the bottom edge with 4 tabs. Only the active tab gets an indigo→pink gradient pill background. Icons stack above their labels; the active pill is meant to slide horizontally on tap.',
      code: `<!-- Floating bottom tab bar -->
<div class="ui-stch-tab">
  <nav class="ui-stch-tab__bar" aria-label="Bottom navigation">
    <button class="ui-stch-tab__b ui-stch-tab__b--on" type="button">
      <span class="ui-stch-tab__i">●</span><span class="ui-stch-tab__l">Home</span>
    </button>
    <button class="ui-stch-tab__b" type="button">
      <span class="ui-stch-tab__i">▦</span><span class="ui-stch-tab__l">Explore</span>
    </button>
    <button class="ui-stch-tab__b" type="button">
      <span class="ui-stch-tab__i">＋</span><span class="ui-stch-tab__l">Create</span>
    </button>
    <button class="ui-stch-tab__b" type="button">
      <span class="ui-stch-tab__i">◐</span><span class="ui-stch-tab__l">Me</span>
    </button>
  </nav>
</div>

<style>
  .ui-stch-tab{display:flex;justify-content:center;padding:18px;background:#0A0A0D;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif}
  .ui-stch-tab__bar{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;background:rgba(20,20,26,.7);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.08);border-radius:9999px;padding:8px;width:min(340px,100%);box-shadow:0 16px 40px -10px rgba(0,0,0,.5)}
  .ui-stch-tab__b{background:transparent;border:0;color:rgba(255,255,255,.5);display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 0;border-radius:9999px;font:500 10px/1 "Inter",sans-serif;cursor:pointer;transition:.18s}
  .ui-stch-tab__b:hover{color:#fff}
  .ui-stch-tab__b--on{background:linear-gradient(135deg,#7c3aed 0%,#ec4899 100%);color:#fff;box-shadow:0 6px 18px -4px rgba(124,58,237,.5)}
  .ui-stch-tab__i{font-size:16px;line-height:1}
  .ui-stch-tab__l{font-size:10px}
</style>`,
    },
    {
      name: 'Glassmorphism Dashboard Stats',
      nameJa: 'グラスモーフィズム ダッシュボード統計(3カード)',
      desc: '深紫グラデ背景に、半透明白枠+blur の3枚ガラスカード。各カードに数値・推移ミニグラフ・ラベル。',
      detail:
        'ダークSaaS UIの目玉。深紫の放射状グラデーション背景にぼかしのオーブを散らし、その手前に3枚のガラスカード(rgba(255,255,255,.06) + blur(20px) + 内側ハイライト線)を配置。各カードは縦並びで「ラベル(小)→ 大きな数値 → 推移ミニ折れ線(SVG)+ 前期比のチップ」。AIが「ダッシュボード作って」と言われたときに最初に吐き出す典型構成。',
      descEn:
        'Three glassmorphic stat cards on a deep-purple radial gradient with blurred orbs — each card shows label, big number, tiny SVG sparkline, and a delta chip.',
      detailEn:
        'The hero glass dashboard pattern. A deep-purple radial gradient with blurred orbs sits behind three glass cards (rgba white .06 + 20px blur + inner highlight). Each card stacks: small label → big number → tiny SVG sparkline + delta chip. The classic "build me a dashboard" output.',
      code: `<!-- Glassmorphism dashboard stats -->
<section class="ui-stch-dash">
  <div class="ui-stch-dash__orbs" aria-hidden="true"><span></span><span></span></div>
  <div class="ui-stch-dash__grid">
    <article class="ui-stch-dash__c">
      <span class="ui-stch-dash__lbl">月間アクティブユーザー</span>
      <strong class="ui-stch-dash__num">128,402</strong>
      <div class="ui-stch-dash__row">
        <svg class="ui-stch-dash__spark" viewBox="0 0 120 40" aria-hidden="true"><polyline fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="2,30 14,26 26,28 38,18 50,22 62,12 74,14 86,8 98,12 110,6 118,10"/></svg>
        <span class="ui-stch-dash__d ui-stch-dash__d--up">+12.4%</span>
      </div>
    </article>
    <article class="ui-stch-dash__c">
      <span class="ui-stch-dash__lbl">平均応答時間</span>
      <strong class="ui-stch-dash__num">186 <em>ms</em></strong>
      <div class="ui-stch-dash__row">
        <svg class="ui-stch-dash__spark" viewBox="0 0 120 40" aria-hidden="true"><polyline fill="none" stroke="#f472b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="2,12 14,16 26,14 38,20 50,18 62,22 74,18 86,24 98,20 110,28 118,24"/></svg>
        <span class="ui-stch-dash__d ui-stch-dash__d--down">+3.1%</span>
      </div>
    </article>
    <article class="ui-stch-dash__c">
      <span class="ui-stch-dash__lbl">課金転換率</span>
      <strong class="ui-stch-dash__num">4.32<em>%</em></strong>
      <div class="ui-stch-dash__row">
        <svg class="ui-stch-dash__spark" viewBox="0 0 120 40" aria-hidden="true"><polyline fill="none" stroke="#67e8f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="2,28 14,24 26,20 38,22 50,16 62,18 74,12 86,14 98,10 110,8 118,6"/></svg>
        <span class="ui-stch-dash__d ui-stch-dash__d--up">+0.6pt</span>
      </div>
    </article>
  </div>
</section>

<style>
  .ui-stch-dash{position:relative;padding:48px 24px;background:radial-gradient(ellipse at top,#2a0a55 0%,#0F0F12 60%);font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff;overflow:hidden;border-radius:24px;max-width:880px;margin:0 auto}
  .ui-stch-dash__orbs span{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none}
  .ui-stch-dash__orbs span:first-child{top:-60px;left:-40px;width:240px;height:240px;background:#7c3aed;opacity:.35}
  .ui-stch-dash__orbs span:last-child{bottom:-80px;right:-40px;width:300px;height:300px;background:#ec4899;opacity:.25}
  .ui-stch-dash__grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .ui-stch-dash__c{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:20px;box-shadow:0 20px 60px -20px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.08)}
  .ui-stch-dash__lbl{display:block;font:600 11px/1 "Inter",sans-serif;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:14px}
  .ui-stch-dash__num{display:block;font:700 32px/1 "Inter",sans-serif;letter-spacing:-.025em;color:#fff;margin-bottom:14px}
  .ui-stch-dash__num em{font:500 14px/1 "Inter",sans-serif;color:rgba(255,255,255,.55);margin-left:2px;font-style:normal}
  .ui-stch-dash__row{display:flex;align-items:center;gap:12px}
  .ui-stch-dash__spark{flex:1;height:34px}
  .ui-stch-dash__d{font:600 11px/1 "Inter",sans-serif;padding:4px 8px;border-radius:9999px;letter-spacing:.01em}
  .ui-stch-dash__d--up{background:rgba(74,222,128,.15);color:#86efac}
  .ui-stch-dash__d--down{background:rgba(248,113,113,.15);color:#fca5a5}
  @media(max-width:720px){.ui-stch-dash__grid{grid-template-columns:1fr}}
</style>`,
    },
    {
      name: 'Voice Canvas Orb',
      nameJa: 'Voice Canvas オーブ(音声入力中ビジュアル)',
      desc: '画面中央に大型グラデオーブ。周囲に同心円の音波、下に「Listening…」表示と文字起こし、Mute/Done操作。',
      detail:
        'AI に話しかけてデザインを依頼する Voice Canvas のメインビジュアル。中央にインディゴ→ピンクの blur オーブ(240px)を置き、周囲に同心円が pulse アニメーションでゆっくり広がります。オーブ下に「Listening…」、その下に文字起こしテキスト(モノスペース寄り、グレー)、画面下部に円形 Mute / Done ボタン。',
      descEn:
        'A voice-input orb — a large gradient orb in the center, concentric sound rings pulsing outward, a "Listening…" label, a live transcript, and mute / done controls.',
      detailEn:
        'A voice-input centerpiece. A 240px indigo→pink blurred orb sits at center, with concentric circles pulsing outward. Below is a "Listening…" label, then a monospace-leaning gray transcript, then circular Mute / Done buttons at the bottom.',
      code: `<!-- Voice canvas orb -->
<section class="ui-stch-voice">
  <div class="ui-stch-voice__field" aria-hidden="true">
    <span class="ui-stch-voice__ring ui-stch-voice__ring--1"></span>
    <span class="ui-stch-voice__ring ui-stch-voice__ring--2"></span>
    <span class="ui-stch-voice__ring ui-stch-voice__ring--3"></span>
    <span class="ui-stch-voice__orb"></span>
  </div>
  <p class="ui-stch-voice__state">
    <span class="ui-stch-voice__dot"></span>
    Listening…
  </p>
  <p class="ui-stch-voice__tx">「明るい配色で、丸みを帯びた角と大きな見出し。落ち着いた生産性アプリの雰囲気で…」</p>
  <div class="ui-stch-voice__ctl">
    <button class="ui-stch-voice__btn" type="button" aria-label="Mute">◑</button>
    <button class="ui-stch-voice__btn ui-stch-voice__btn--done" type="button" aria-label="Done">✓ Done</button>
  </div>
</section>

<style>
  .ui-stch-voice{position:relative;padding:60px 24px;background:#0A0A0D;border-radius:24px;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff;text-align:center;max-width:560px;margin:0 auto;overflow:hidden}
  .ui-stch-voice__field{position:relative;width:280px;height:280px;margin:0 auto 32px;display:flex;align-items:center;justify-content:center}
  .ui-stch-voice__ring{position:absolute;border-radius:50%;border:1px solid rgba(167,139,250,.4);animation:ui-stch-voice-pulse 3s ease-out infinite}
  .ui-stch-voice__ring--1{width:160px;height:160px;animation-delay:0s}
  .ui-stch-voice__ring--2{width:220px;height:220px;animation-delay:.8s;border-color:rgba(244,114,182,.3)}
  .ui-stch-voice__ring--3{width:280px;height:280px;animation-delay:1.6s;border-color:rgba(244,114,182,.18)}
  @keyframes ui-stch-voice-pulse{0%{transform:scale(.7);opacity:1}100%{transform:scale(1.15);opacity:0}}
  .ui-stch-voice__orb{width:140px;height:140px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#c4b5fd 0%,#7c3aed 50%,#ec4899 100%);filter:blur(2px);box-shadow:0 0 80px 10px rgba(124,58,237,.45),inset 0 0 30px rgba(255,255,255,.2)}
  .ui-stch-voice__state{display:inline-flex;align-items:center;gap:8px;font:600 13px/1 "Inter",sans-serif;letter-spacing:.04em;color:#c4b5fd;margin:0 0 12px}
  .ui-stch-voice__dot{width:8px;height:8px;border-radius:50%;background:#c4b5fd;animation:ui-stch-voice-blink 1.4s ease-in-out infinite}
  @keyframes ui-stch-voice-blink{50%{opacity:.35}}
  .ui-stch-voice__tx{margin:0 auto 24px;max-width:420px;font:400 14px/1.55 "Inter",sans-serif;color:rgba(255,255,255,.7)}
  .ui-stch-voice__ctl{display:flex;justify-content:center;gap:14px}
  .ui-stch-voice__btn{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#fff;font-size:18px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
  .ui-stch-voice__btn:hover{background:rgba(255,255,255,.1)}
  .ui-stch-voice__btn--done{width:auto;padding:0 22px;background:linear-gradient(135deg,#7c3aed,#ec4899);border-color:transparent;font:600 13px/1 "Inter",sans-serif;letter-spacing:.01em;gap:6px;color:#fff;box-shadow:0 8px 24px -8px rgba(124,58,237,.6)}
</style>`,
    },
    {
      name: 'Infinite Canvas + Floating Action',
      nameJa: '無限キャンバス + フローティング追加ボタン',
      desc: 'ドットグリッド背景に複数の画面サムネが浮かぶ。右下に大きな円形FAB。',
      detail:
        'AI生成ツールの中核となる「無限キャンバス」ビュー。背景は深いブルーグレーにドットグリッド(SVGかradial-gradient)、その上に複数のスクリーンサムネが角丸で浮かんで配置されます。右下に大きな円形FAB(48px / 紫グラデ / +)が固定。サムネ間を結ぶ薄い線で関係性を示唆することも。',
      descEn:
        'A dot-grid canvas with several screen thumbnails floating on it and a large circular FAB anchored to the bottom-right.',
      detailEn:
        'The core "infinite canvas" view. A deep blue-gray ground with a dot grid, several rounded screen thumbnails scattered across it (some connected with faint lines suggesting relationships), and a large 48px circular gradient FAB fixed bottom-right.',
      code: `<!-- Infinite canvas + FAB -->
<section class="ui-stch-cv">
  <div class="ui-stch-cv__dots" aria-hidden="true"></div>
  <svg class="ui-stch-cv__lines" viewBox="0 0 600 360" aria-hidden="true">
    <path d="M120 100 C 200 100, 240 200, 320 200" fill="none" stroke="rgba(167,139,250,.35)" stroke-width="1.5" stroke-dasharray="4 4"/>
    <path d="M320 200 C 400 200, 440 110, 500 110" fill="none" stroke="rgba(244,114,182,.35)" stroke-width="1.5" stroke-dasharray="4 4"/>
  </svg>
  <article class="ui-stch-cv__th" style="left:40px;top:40px;width:160px"><span>Welcome</span><div class="ui-stch-cv__ph"></div></article>
  <article class="ui-stch-cv__th" style="left:260px;top:140px;width:160px"><span>Dashboard</span><div class="ui-stch-cv__ph ui-stch-cv__ph--alt"></div></article>
  <article class="ui-stch-cv__th" style="right:40px;top:50px;width:160px"><span>Settings</span><div class="ui-stch-cv__ph ui-stch-cv__ph--mini"></div></article>
  <article class="ui-stch-cv__th" style="right:140px;bottom:60px;width:140px"><span>Activity</span><div class="ui-stch-cv__ph"></div></article>
  <button class="ui-stch-cv__fab" type="button" aria-label="新しい画面を追加">＋</button>
</section>

<style>
  .ui-stch-cv{position:relative;height:380px;background:#0A0A0D;border-radius:24px;overflow:hidden;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff}
  .ui-stch-cv__dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.08) 1px,transparent 1px);background-size:18px 18px;background-position:center}
  .ui-stch-cv__lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
  .ui-stch-cv__th{position:absolute;background:rgba(20,20,26,.8);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:10px;display:flex;flex-direction:column;gap:8px;cursor:grab;transition:transform .15s,border-color .15s;color:rgba(255,255,255,.85);font:600 11px/1 "Inter",sans-serif;letter-spacing:-.005em}
  .ui-stch-cv__th:hover{transform:translateY(-1px);border-color:rgba(167,139,250,.5)}
  .ui-stch-cv__ph{height:80px;border-radius:8px;background:linear-gradient(135deg,#1d0a3d 0%,#3a1166 100%);position:relative;overflow:hidden}
  .ui-stch-cv__ph::after{content:"";position:absolute;left:14px;right:14px;top:14px;height:6px;background:rgba(255,255,255,.18);border-radius:4px;box-shadow:0 12px 0 rgba(255,255,255,.12),0 24px 0 rgba(255,255,255,.08)}
  .ui-stch-cv__ph--alt{background:linear-gradient(135deg,#0a3d2a 0%,#114a66 100%)}
  .ui-stch-cv__ph--mini{height:60px}
  .ui-stch-cv__fab{position:absolute;right:18px;bottom:18px;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;border:0;font:300 28px/1 "Inter",sans-serif;cursor:pointer;box-shadow:0 12px 36px -8px rgba(124,58,237,.65)}
  .ui-stch-cv__fab:hover{transform:translateY(-1px)}
</style>`,
    },
    {
      name: 'Design Tokens Panel',
      nameJa: 'デザイントークン パネル(色6 + フォントスケール)',
      desc: 'サイドパネルにカラーパレット6色とフォントスケール(H1〜Body)を並べた閲覧用の小窓。',
      detail:
        'AIが生成したデザインから抽出した「トークン一覧」を表示する小さなパネル。上半分に丸いカラーチップ6個(各HEX付き、横並び)、下半分に「Display / H1 / H2 / Body / Caption」のフォントスケール一覧(各実サンプル+サイズ・行高)。一番下に「Export DESIGN.md」テキストリンク。',
      descEn:
        'A side panel showing extracted tokens — 6 round color chips with HEX values up top, a font scale (Display / H1 / H2 / Body / Caption) below, and an Export DESIGN.md link at the bottom.',
      detailEn:
        'A small panel showing tokens extracted from a generated design. Top half: 6 round color chips with HEX labels. Bottom half: a font scale (Display / H1 / H2 / Body / Caption) shown with real samples and size+line-height meta. An "Export DESIGN.md" link sits at the bottom.',
      code: `<!-- Design tokens panel -->
<aside class="ui-stch-tok">
  <div class="ui-stch-tok__head">
    <h3>Design Tokens</h3>
    <span>Auto-extracted</span>
  </div>
  <section class="ui-stch-tok__sec">
    <span class="ui-stch-tok__lbl">Colors</span>
    <div class="ui-stch-tok__colors">
      <div class="ui-stch-tok__c" style="background:#0F0F12"><span>#0F0F12</span></div>
      <div class="ui-stch-tok__c" style="background:#7c3aed"><span>#7C3AED</span></div>
      <div class="ui-stch-tok__c" style="background:#ec4899"><span>#EC4899</span></div>
      <div class="ui-stch-tok__c" style="background:#67e8f9"><span>#67E8F9</span></div>
      <div class="ui-stch-tok__c" style="background:#a78bfa"><span>#A78BFA</span></div>
      <div class="ui-stch-tok__c ui-stch-tok__c--light" style="background:#f4f4f5"><span>#F4F4F5</span></div>
    </div>
  </section>
  <section class="ui-stch-tok__sec">
    <span class="ui-stch-tok__lbl">Typography</span>
    <ul class="ui-stch-tok__type">
      <li><strong style="font-size:24px;letter-spacing:-.03em">Display</strong><em>48 / 56</em></li>
      <li><strong style="font-size:20px;letter-spacing:-.02em">H1 見出し</strong><em>32 / 38</em></li>
      <li><strong style="font-size:16px;letter-spacing:-.01em">H2 セクション</strong><em>20 / 28</em></li>
      <li><strong style="font-size:14px">Body テキストはこんな雰囲気</strong><em>14 / 22</em></li>
      <li><strong style="font-size:11px;letter-spacing:.08em;text-transform:uppercase">Caption</strong><em>11 / 16</em></li>
    </ul>
  </section>
  <a class="ui-stch-tok__exp" href="#">Export DESIGN.md <span aria-hidden="true">↗</span></a>
</aside>

<style>
  .ui-stch-tok{width:280px;background:#0F0F12;border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:18px;color:#fff;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;display:flex;flex-direction:column;gap:18px;max-width:100%;margin:0 auto}
  .ui-stch-tok__head{display:flex;justify-content:space-between;align-items:baseline}
  .ui-stch-tok__head h3{margin:0;font:600 14px/1 "Inter",sans-serif;letter-spacing:-.01em}
  .ui-stch-tok__head span{font:500 10px/1 "Inter",sans-serif;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4)}
  .ui-stch-tok__lbl{display:block;font:700 10px/1 "Inter",sans-serif;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:10px}
  .ui-stch-tok__colors{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
  .ui-stch-tok__c{aspect-ratio:1/1;border-radius:10px;display:flex;align-items:flex-end;padding:6px;border:1px solid rgba(255,255,255,.06)}
  .ui-stch-tok__c span{font:600 9px/1 ui-monospace,Menlo,monospace;color:rgba(255,255,255,.85);background:rgba(0,0,0,.4);padding:2px 4px;border-radius:3px}
  .ui-stch-tok__c--light span{background:rgba(255,255,255,.7);color:#0F0F12}
  .ui-stch-tok__type{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
  .ui-stch-tok__type li{display:flex;justify-content:space-between;align-items:baseline;gap:10px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.05)}
  .ui-stch-tok__type li:last-child{border-bottom:0;padding-bottom:0}
  .ui-stch-tok__type strong{color:#fff;font-weight:600;line-height:1.2}
  .ui-stch-tok__type em{font:500 10px/1 ui-monospace,Menlo,monospace;color:rgba(255,255,255,.4);font-style:normal;white-space:nowrap}
  .ui-stch-tok__exp{display:inline-flex;align-items:center;gap:4px;color:#c4b5fd;text-decoration:none;font:500 12px/1 "Inter",sans-serif;align-self:flex-start}
  .ui-stch-tok__exp:hover{color:#fff}
</style>`,
    },
    {
      name: 'DESIGN.md Export Block',
      nameJa: 'DESIGN.md 出力ブロック(コード+コピー/DL)',
      desc: 'マークダウン形式でデザイン規約を書き出した擬似コードブロック。右上にコピー/ダウンロード操作。',
      detail:
        'AI同士のハンドオフのためにエクスポートされる DESIGN.md を表示するブロック。ダーク背景の角丸コンテナに、`# Brand`、`## Colors`、`- primary: #7C3AED` のようなマークダウンプレビュー(モノスペース・色付き)を表示し、右上に「Copy」「Download」のアイコンボタンを置きます。AIネイティブツール感を出すための重要な要素。',
      descEn:
        'A DESIGN.md export block showing a markdown-formatted design spec in a dark code block, with Copy and Download icon buttons in the top-right.',
      detailEn:
        'An AI-to-AI handoff block. A dark rounded container shows a markdown DESIGN.md preview (monospace with syntax color), with Copy and Download icon buttons in the top-right corner. A signature element of AI-native design tools.',
      code: `<!-- DESIGN.md export block -->
<section class="ui-stch-md">
  <div class="ui-stch-md__bar">
    <span class="ui-stch-md__name">
      <span class="ui-stch-md__dot ui-stch-md__dot--r"></span>
      <span class="ui-stch-md__dot ui-stch-md__dot--y"></span>
      <span class="ui-stch-md__dot ui-stch-md__dot--g"></span>
      DESIGN.md
    </span>
    <div class="ui-stch-md__act">
      <button type="button" class="ui-stch-md__b" aria-label="Copy">⧉ Copy</button>
      <button type="button" class="ui-stch-md__b" aria-label="Download">↓ Download</button>
    </div>
  </div>
  <pre class="ui-stch-md__pre"><code><span class="ui-stch-md__h"># Calm Productivity</span>
A dark-mode productivity app with soft glass surfaces.

<span class="ui-stch-md__h">## Tokens</span>

<span class="ui-stch-md__h">### Colors</span>
- <span class="ui-stch-md__k">primary</span>:   <span class="ui-stch-md__v">#7C3AED</span>
- <span class="ui-stch-md__k">accent</span>:    <span class="ui-stch-md__v">#EC4899</span>
- <span class="ui-stch-md__k">surface</span>:   <span class="ui-stch-md__v">#0F0F12</span>
- <span class="ui-stch-md__k">on-surface</span>:<span class="ui-stch-md__v">#F4F4F5</span>

<span class="ui-stch-md__h">### Typography</span>
- <span class="ui-stch-md__k">display</span>:  Inter / 48-56 / -0.03em
- <span class="ui-stch-md__k">body</span>:     Inter / 14-22 / 0

<span class="ui-stch-md__h">## Components</span>
- <span class="ui-stch-md__k">Card</span>: rgba(white,.06) + blur(20px) + 1px ring
- <span class="ui-stch-md__k">FAB</span>:  56px circle, gradient primary→accent</code></pre>
</section>

<style>
  .ui-stch-md{max-width:680px;margin:0 auto;background:#0A0A0D;border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff}
  .ui-stch-md__bar{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:#15151b;border-bottom:1px solid rgba(255,255,255,.06)}
  .ui-stch-md__name{display:inline-flex;align-items:center;gap:6px;font:600 12px/1 "Inter",sans-serif;color:rgba(255,255,255,.75)}
  .ui-stch-md__dot{width:10px;height:10px;border-radius:50%;display:inline-block}
  .ui-stch-md__dot--r{background:#ff5f57}
  .ui-stch-md__dot--y{background:#febc2e}
  .ui-stch-md__dot--g{background:#28c840;margin-right:8px}
  .ui-stch-md__act{display:flex;gap:6px}
  .ui-stch-md__b{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.8);padding:5px 10px;border-radius:6px;font:500 11px/1 "Inter",sans-serif;cursor:pointer}
  .ui-stch-md__b:hover{background:rgba(255,255,255,.1);color:#fff}
  .ui-stch-md__pre{margin:0;padding:18px 20px;font:400 12.5px/1.65 ui-monospace,"SFMono-Regular","Menlo",monospace;color:rgba(255,255,255,.78);overflow-x:auto;background:transparent}
  .ui-stch-md__pre code{display:block;white-space:pre}
  .ui-stch-md__h{color:#c4b5fd;font-weight:700}
  .ui-stch-md__k{color:#67e8f9}
  .ui-stch-md__v{color:#f472b6}
</style>`,
    },
    {
      name: 'Generation Status Tray',
      nameJa: '生成中ステータス・トレイ(画面下プログレスバー)',
      desc: '画面下に貼り付くダークなプログレスストリップ。「Generating screen 2/5」のラベル+進捗バー+キャンセル。',
      detail:
        'AIが画面を順次生成しているときに画面下端に出るステータス。ダークな半透明バー(blur)に左から「⚙ Generating screen 2 of 5 — Settings」のラベル、中央にグラデの細い進捗バー(40%)、右に「Cancel」テキストリンク。バー全体は固定高さ56pxで、生成中だけスライドアップして登場する想定。',
      descEn:
        'A bottom-pinned generation status tray — translucent dark strip with "Generating screen 2 of 5", a thin gradient progress bar, and a Cancel link on the right.',
      detailEn:
        'A status strip that slides up from the bottom while the AI is generating screens. A translucent dark blurred bar shows "⚙ Generating screen 2 of 5 — Settings", a thin gradient progress bar (40%) in the middle, and a Cancel link on the right. 56px tall.',
      code: `<!-- Generation status tray -->
<div class="ui-stch-stat">
  <span class="ui-stch-stat__lbl">
    <span class="ui-stch-stat__spin" aria-hidden="true"></span>
    Generating screen <strong>2</strong> of 5 — <em>Settings</em>
  </span>
  <div class="ui-stch-stat__bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
    <span style="width:40%"></span>
  </div>
  <a class="ui-stch-stat__cancel" href="#">Cancel</a>
</div>

<style>
  .ui-stch-stat{display:flex;align-items:center;gap:16px;background:rgba(20,20,26,.7);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px 16px;height:56px;max-width:680px;margin:0 auto;color:#fff;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;box-shadow:0 16px 40px -10px rgba(0,0,0,.5)}
  .ui-stch-stat__lbl{display:inline-flex;align-items:center;gap:8px;font:500 13px/1 "Inter",sans-serif;color:rgba(255,255,255,.85);white-space:nowrap;flex-shrink:0}
  .ui-stch-stat__lbl em{color:#c4b5fd;font-style:normal;font-weight:600}
  .ui-stch-stat__lbl strong{font-weight:700;color:#fff}
  .ui-stch-stat__spin{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.2);border-top-color:#c4b5fd;animation:ui-stch-stat-spin .8s linear infinite}
  @keyframes ui-stch-stat-spin{to{transform:rotate(360deg)}}
  .ui-stch-stat__bar{flex:1;height:4px;background:rgba(255,255,255,.08);border-radius:9999px;overflow:hidden;min-width:120px}
  .ui-stch-stat__bar span{display:block;height:100%;background:linear-gradient(90deg,#7c3aed,#ec4899);border-radius:9999px;transition:width .4s}
  .ui-stch-stat__cancel{color:rgba(255,255,255,.55);font:500 12px/1 "Inter",sans-serif;text-decoration:none;flex-shrink:0}
  .ui-stch-stat__cancel:hover{color:#fff}
  @media(max-width:540px){.ui-stch-stat{flex-wrap:wrap;height:auto;padding:12px 16px}.ui-stch-stat__bar{order:3;flex-basis:100%}}
</style>`,
    },
    {
      name: 'Dark Glass Sign-in Screen',
      nameJa: 'ダーク × グラス サインイン画面(中央カード)',
      desc: '真っ黒な背景にぼかしのオーブを2つ。中央に半透明ガラスのサインインカード(Google + メール)。',
      detail:
        'AIが「ログイン画面作って」と言われたときの典型出力。背景は真っ黒(#08080B)に紫とピンクの大型 blur オーブを散らし、中央に幅360pxの半透明ガラスカード(rgba(255,255,255,.04)+blur(30px))。カード内は: 小さなブランドマーク→ ようこそ見出し → 「Google で続行」ボタン(白)→ 区切り「or」→ メール入力 → 紫グラデの Continue ボタン → 一番下に利用規約文。',
      descEn:
        'A dark sign-in screen — pure black with two blurred orbs, a centered translucent glass card holding a Google button, an email field, a gradient Continue, and terms text.',
      detailEn:
        'The canonical "build me a sign-in" output. Pure-black background (#08080B) with purple and pink blurred orbs, a centered 360px glass card (rgba white .04 + 30px blur) containing: a small brand mark → a welcome headline → a white "Continue with Google" button → an "or" divider → an email input → a gradient Continue button → terms text at the bottom.',
      code: `<!-- Dark glass sign-in -->
<section class="ui-stch-si">
  <span class="ui-stch-si__orb ui-stch-si__orb--p" aria-hidden="true"></span>
  <span class="ui-stch-si__orb ui-stch-si__orb--k" aria-hidden="true"></span>
  <div class="ui-stch-si__card">
    <div class="ui-stch-si__mark" aria-hidden="true">✦</div>
    <h2 class="ui-stch-si__h">おかえりなさい</h2>
    <p class="ui-stch-si__sub">続けるにはサインインしてください。</p>
    <button class="ui-stch-si__g" type="button">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.5l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z"/><path fill="#FBBC05" d="M6.4 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.5H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.5l3.3-2.6z"/><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 3 14.7 2 12 2A10 10 0 0 0 3.1 7.5l3.3 2.5C7.2 7.6 9.4 5.9 12 5.9z"/></svg>
      Google で続行
    </button>
    <div class="ui-stch-si__div"><span>または</span></div>
    <label class="ui-stch-si__lbl">メールアドレス
      <input class="ui-stch-si__in" type="email" placeholder="you@studio.app">
    </label>
    <button class="ui-stch-si__go" type="button">Continue →</button>
    <p class="ui-stch-si__terms">続けることで <a href="#">利用規約</a> と <a href="#">プライバシー</a> に同意したものとみなされます。</p>
  </div>
</section>

<style>
  .ui-stch-si{position:relative;min-height:560px;background:#08080B;display:flex;align-items:center;justify-content:center;padding:32px;overflow:hidden;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff;border-radius:24px}
  .ui-stch-si__orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none}
  .ui-stch-si__orb--p{width:280px;height:280px;background:#7c3aed;opacity:.35;top:-40px;left:-40px}
  .ui-stch-si__orb--k{width:320px;height:320px;background:#ec4899;opacity:.25;bottom:-60px;right:-60px}
  .ui-stch-si__card{position:relative;z-index:1;width:360px;max-width:100%;background:rgba(255,255,255,.04);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:32px;box-shadow:0 40px 80px -20px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.06)}
  .ui-stch-si__mark{width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#ec4899);display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:18px;margin-bottom:18px}
  .ui-stch-si__h{margin:0 0 6px;font:700 22px/1.2 "Inter",sans-serif;letter-spacing:-.02em}
  .ui-stch-si__sub{margin:0 0 24px;font:400 13px/1.5 "Inter",sans-serif;color:rgba(255,255,255,.55)}
  .ui-stch-si__g{display:inline-flex;align-items:center;justify-content:center;gap:10px;width:100%;background:#fff;color:#1f1f1f;border:0;padding:11px 16px;border-radius:10px;font:600 13.5px/1 "Inter",sans-serif;cursor:pointer;transition:.15s}
  .ui-stch-si__g:hover{background:#f4f4f5}
  .ui-stch-si__div{display:flex;align-items:center;gap:10px;margin:18px 0;color:rgba(255,255,255,.35);font:500 11px/1 "Inter",sans-serif;letter-spacing:.06em;text-transform:uppercase}
  .ui-stch-si__div::before,.ui-stch-si__div::after{content:"";flex:1;height:1px;background:rgba(255,255,255,.08)}
  .ui-stch-si__lbl{display:block;font:600 11px/1 "Inter",sans-serif;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:14px}
  .ui-stch-si__in{display:block;width:100%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fff;font:400 14px/1 "Inter",sans-serif;padding:11px 14px;margin-top:8px;outline:none;transition:border-color .15s}
  .ui-stch-si__in::placeholder{color:rgba(255,255,255,.3)}
  .ui-stch-si__in:focus{border-color:rgba(165,103,255,.5)}
  .ui-stch-si__go{width:100%;background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;border:0;padding:11px 16px;border-radius:10px;font:600 13.5px/1 "Inter",sans-serif;cursor:pointer;transition:.15s;box-shadow:0 12px 28px -8px rgba(124,58,237,.55)}
  .ui-stch-si__go:hover{transform:translateY(-1px)}
  .ui-stch-si__terms{margin:18px 0 0;font:400 11px/1.5 "Inter",sans-serif;color:rgba(255,255,255,.4);text-align:center}
  .ui-stch-si__terms a{color:rgba(255,255,255,.7);text-decoration:underline}
</style>`,
    },
  ],
}
