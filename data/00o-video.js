/**
 * UI Parts Showcase (Video Streaming) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-video',
  title: '動画配信UI',
  titleEn: 'Video Streaming UI',
  description: 'YouTube・Netflix・Vimeo・Twitch などの動画サービスでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Video Card With Hover Preview',
      nameJa: 'ホバー再生サムネカード',
      desc: 'マウスを乗せるとサムネが拡大し、右下に再生時間バッジが浮かぶ動画カード。',
      detail: '動画一覧でよく使われる、ホバーすると動画の雰囲気がふわっと立ち上がるカードUIです。サムネは少しだけ拡大し、右下に「12:34」のような再生時間バッジが表示されることで、ユーザーはクリック前に動画の長さを判断できます。タイトル・チャンネル名・再生回数・投稿日も併記されており、視聴判断に必要な情報を1枚にまとめるのがコツです。グリッドで並べたときに密度感のあるラインナップを演出できます。',
      descEn: 'A video tile whose thumbnail scales on hover while a duration badge floats in the bottom-right.',
      detailEn: 'This is the kind of card you see lining up by the dozen on video sites. On hover, the thumbnail subtly scales up and a "12:34" duration badge stays pinned to the bottom-right so viewers know what they are committing to. Title, channel name, view count, and upload date sit underneath, packing every viewing-decision signal into a single tile. It works beautifully in a responsive grid and gives a feed real density without feeling cluttered.',
      code: `<!-- Inspired by YouTube -->
<a class="ui-vc-card" href="#">
  <div class="ui-vc-thumb">
    <div class="ui-vc-thumb__img">
      <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs><linearGradient id="vcg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ff6b6b"/><stop offset=".5" stop-color="#feca57"/><stop offset="1" stop-color="#5f27cd"/></linearGradient></defs>
        <rect width="320" height="180" fill="url(#vcg)"/>
        <circle cx="160" cy="90" r="34" fill="rgba(0,0,0,.55)"/>
        <polygon points="150,72 150,108 184,90" fill="#fff"/>
      </svg>
    </div>
    <span class="ui-vc-dur">12:34</span>
  </div>
  <div class="ui-vc-meta">
    <div class="ui-vc-avatar">SK</div>
    <div class="ui-vc-text">
      <h3 class="ui-vc-title">I built a custom mechanical keyboard from scratch</h3>
      <p class="ui-vc-channel">Sara Keebs <span class="ui-vc-verified">✓</span></p>
      <p class="ui-vc-sub">847K views · 3 days ago</p>
    </div>
  </div>
</a>

<style>
  .ui-vc-card{display:block;max-width:360px;text-decoration:none;color:#0f0f0f;font:14px Roboto,"Segoe UI",-apple-system,sans-serif;cursor:pointer}
  .ui-vc-thumb{position:relative;border-radius:12px;overflow:hidden;aspect-ratio:16/9;background:#000}
  .ui-vc-thumb__img{width:100%;height:100%;transition:transform .25s ease}
  .ui-vc-thumb__img svg{display:block;width:100%;height:100%}
  .ui-vc-card:hover .ui-vc-thumb__img{transform:scale(1.04)}
  .ui-vc-card:hover .ui-vc-thumb{border-radius:0}
  .ui-vc-dur{position:absolute;right:8px;bottom:8px;padding:1px 5px;background:rgba(0,0,0,.8);color:#fff;font:600 12px Roboto,sans-serif;border-radius:4px;letter-spacing:.02em}
  .ui-vc-meta{display:flex;gap:12px;margin-top:12px;padding:0 2px}
  .ui-vc-avatar{flex:none;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#ff6b6b,#feca57);color:#fff;display:grid;place-items:center;font-weight:700;font-size:13px}
  .ui-vc-text{min-width:0}
  .ui-vc-title{margin:0 0 4px;font-size:14px;font-weight:600;line-height:1.35;color:#0f0f0f;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .ui-vc-channel{margin:0;font-size:12px;color:#606060;line-height:1.4}
  .ui-vc-verified{display:inline-block;width:13px;height:13px;background:#606060;color:#fff;border-radius:50%;font-size:9px;text-align:center;line-height:13px;margin-left:2px}
  .ui-vc-sub{margin:1px 0 0;font-size:12px;color:#606060}
</style>`,
    },
    {
      name: 'Video Player Controls Bar',
      nameJa: '動画プレイヤー操作バー',
      desc: '再生 / 一時停止 / 音量 / フルスクリーン / 設定 / スクラバーを集約した黒い帯。',
      detail: '動画プレイヤーの下端に張り付く、おなじみのコントロールバーです。左から再生・次へ・音量・経過時間/全長、右側に字幕・設定・PIP・フルスクリーンと、機能を「左=再生関連」「右=表示関連」で配置するのが業界標準です。バー上端にはスクラブ用の細い赤いラインがあり、つまみをドラッグするとプレビューがポップアップする実装が一般的です。色は半透明の黒、アクセントはYouTube風の赤で、ホバー時にアイコンが少し明るくなるのが定番の振る舞いです。',
      descEn: 'The familiar black strip with play / pause / volume / fullscreen / settings and a scrubber.',
      detailEn: 'This is the bar glued to the bottom of every video player. The left side groups playback-related controls (play, next, volume, time), while the right side groups display-related ones (captions, settings, PiP, fullscreen). A thin red scrub line sits along the top of the bar, and dragging the knob usually pops up a preview frame. Semi-transparent black with a YouTube-style red accent and a soft hover brighten round things out — it is the visual grammar viewers already know.',
      code: `<!-- Inspired by YouTube -->
<div class="ui-vp">
  <div class="ui-vp-screen">
    <svg viewBox="0 0 640 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="vpg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#1a1a2e"/><stop offset="1" stop-color="#16213e"/></linearGradient></defs>
      <rect width="640" height="280" fill="url(#vpg)"/>
      <circle cx="320" cy="130" r="42" fill="rgba(0,0,0,.5)" stroke="#fff" stroke-width="2"/>
      <polygon points="308,108 308,152 344,130" fill="#fff"/>
    </svg>
  </div>
  <div class="ui-vp-bar">
    <div class="ui-vp-scrub"><div class="ui-vp-scrub__buf"></div><div class="ui-vp-scrub__fill"></div><div class="ui-vp-scrub__knob"></div></div>
    <div class="ui-vp-row">
      <button type="button" class="ui-vp-btn" aria-label="Play">▶</button>
      <button type="button" class="ui-vp-btn" aria-label="Next">⏭</button>
      <button type="button" class="ui-vp-btn" aria-label="Mute">🔊</button>
      <div class="ui-vp-vol"><div class="ui-vp-vol__fill"></div></div>
      <span class="ui-vp-time">3:42 / 12:34</span>
      <span class="ui-vp-spacer"></span>
      <button type="button" class="ui-vp-btn" aria-label="Captions">CC</button>
      <button type="button" class="ui-vp-btn" aria-label="Settings">⚙</button>
      <button type="button" class="ui-vp-btn" aria-label="Picture in picture">⧉</button>
      <button type="button" class="ui-vp-btn" aria-label="Fullscreen">⛶</button>
    </div>
  </div>
</div>

<style>
  .ui-vp{position:relative;max-width:640px;background:#000;border-radius:8px;overflow:hidden;font:13px Roboto,"Segoe UI",sans-serif;color:#fff}
  .ui-vp-screen svg{display:block;width:100%;height:auto}
  .ui-vp-bar{position:absolute;left:0;right:0;bottom:0;padding:0 0 6px;background:linear-gradient(to top,rgba(0,0,0,.85),rgba(0,0,0,0))}
  .ui-vp-scrub{position:relative;height:4px;margin:0 12px 8px;background:rgba(255,255,255,.25);cursor:pointer}
  .ui-vp-scrub__buf{position:absolute;left:0;top:0;height:100%;width:62%;background:rgba(255,255,255,.45)}
  .ui-vp-scrub__fill{position:absolute;left:0;top:0;height:100%;width:30%;background:#ff0000}
  .ui-vp-scrub__knob{position:absolute;left:30%;top:50%;width:13px;height:13px;background:#ff0000;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 0 0 0 rgba(255,0,0,.4);transition:box-shadow .15s}
  .ui-vp-scrub:hover .ui-vp-scrub__knob{box-shadow:0 0 0 5px rgba(255,0,0,.25)}
  .ui-vp-row{display:flex;align-items:center;gap:6px;padding:0 8px}
  .ui-vp-btn{background:transparent;border:0;color:#fff;font-size:16px;cursor:pointer;padding:6px 8px;border-radius:4px;line-height:1}
  .ui-vp-btn:hover{background:rgba(255,255,255,.12)}
  .ui-vp-vol{width:0;height:4px;background:rgba(255,255,255,.3);border-radius:2px;overflow:hidden;transition:width .2s}
  .ui-vp-row:hover .ui-vp-vol{width:60px;margin-right:4px}
  .ui-vp-vol__fill{height:100%;width:70%;background:#fff}
  .ui-vp-time{font-size:12.5px;color:#fff;margin-left:4px;letter-spacing:.02em}
  .ui-vp-spacer{flex:1}
</style>`,
    },
    {
      name: 'Chapter Markers Strip',
      nameJa: 'チャプターマーカー',
      desc: '区切り線で分割されたスクラブバー。各セクションにホバーするとタイトルが出る。',
      detail: '長尺動画でよく見かける、シークバーをチャプターごとに区切ったUIです。各チャプターは細い隙間で区切られ、独立したセグメントになっています。マウスを乗せると「Introduction」「Setup the project」のようなタイトルが上方向にポップアップし、視聴者は飛びたい場所だけにジャンプできます。チャプターをホバー中のセグメントはわずかに太くなる、というマイクロインタラクションが「ここをクリックできる」というシグナルになります。チュートリアル動画や講演アーカイブと相性のいい仕組みです。',
      descEn: 'A scrub bar split into named segments — hover one and the chapter title pops above.',
      detailEn: 'Long-form videos rely on this UI: the scrubber is split into chapter-sized segments separated by thin gaps. Hover a segment and a label like "Introduction" or "Setup the project" floats above it, letting viewers jump straight to the part they want. The hovered segment also subtly thickens — a tiny affordance that tells the eye "this is clickable." It is a perfect match for tutorials, lectures, and any video where viewers may skim rather than watch end to end.',
      code: `<!-- Inspired by YouTube -->
<div class="ui-ch-wrap">
  <div class="ui-ch-strip">
    <div class="ui-ch-seg" data-title="0:00 Introduction" style="flex:1.2"><div class="ui-ch-fill" style="width:100%"></div></div>
    <div class="ui-ch-seg" data-title="1:08 Setup the project" style="flex:2"><div class="ui-ch-fill" style="width:60%"></div></div>
    <div class="ui-ch-seg" data-title="3:00 Wire up the API" style="flex:2.4"><div class="ui-ch-fill" style="width:0%"></div></div>
    <div class="ui-ch-seg" data-title="5:30 Styling with CSS" style="flex:1.8"><div class="ui-ch-fill" style="width:0%"></div></div>
    <div class="ui-ch-seg" data-title="8:12 Deploying to Vercel" style="flex:1.6"><div class="ui-ch-fill" style="width:0%"></div></div>
  </div>
  <p class="ui-ch-now">Chapter 2 · Setup the project</p>
</div>

<style>
  .ui-ch-wrap{max-width:560px;padding:32px 12px 16px;background:#0f0f0f;border-radius:10px;font:13px Roboto,"Segoe UI",sans-serif;color:#fff}
  .ui-ch-strip{display:flex;gap:2px;height:5px}
  .ui-ch-seg{position:relative;height:100%;background:rgba(255,255,255,.25);border-radius:1px;cursor:pointer;transition:transform .15s}
  .ui-ch-seg:hover{transform:scaleY(1.8)}
  .ui-ch-fill{height:100%;background:#ff0000;border-radius:1px}
  .ui-ch-seg::before{content:attr(data-title);position:absolute;left:50%;bottom:14px;transform:translateX(-50%) scale(.94);padding:6px 9px;background:rgba(0,0,0,.92);color:#fff;font-size:12px;white-space:nowrap;border-radius:4px;opacity:0;pointer-events:none;transition:opacity .12s}
  .ui-ch-seg:hover::before{opacity:1;transform:translateX(-50%) scale(1)}
  .ui-ch-now{margin:14px 0 0;font-size:12.5px;color:#aaa;letter-spacing:.02em}
</style>`,
    },
    {
      name: 'Quality Picker Menu',
      nameJa: '画質選択メニュー',
      desc: '4K / 1080p / 720p などをラジオで選ぶ、設定アイコンから開くポップアップ。',
      detail: '歯車アイコンを押すと開く、解像度切り替えメニューのUIです。「2160p 4K」「1440p」「1080p HD」「720p」「自動」のように選択肢が並び、現在の画質にはチェックマークがつきます。「4K」「HD」のような小さなラベルバッジを行末に添えることで、回線とのトレードオフが直感的にわかるのがポイントです。Netflix・YouTube・Vimeoのいずれも似たレイアウトを採用しており、視聴者が「自分の環境に合った画質を選ぶ」という能動的なコントロール体験を提供します。',
      descEn: 'A popover from the settings gear with a radio list of 4K / 1080p / 720p choices.',
      detailEn: 'Tap the gear and this resolution menu slides up. It lists choices like "2160p 4K", "1440p", "1080p HD", "720p", and "Auto", with a check mark on the current selection. Tiny "4K" or "HD" badges at the end of each row signal the bandwidth trade-off at a glance. YouTube, Netflix, and Vimeo all use a near-identical layout because it works: it puts the viewer in control of how much data they are spending on this stream.',
      code: `<!-- Inspired by YouTube -->
<div class="ui-qp">
  <header class="ui-qp__hd"><button type="button" class="ui-qp__back">‹</button><span>Quality</span></header>
  <ul class="ui-qp__list" role="radiogroup">
    <li role="radio" aria-checked="false"><span class="ui-qp__mark"></span>2160p<span class="ui-qp__badge ui-qp__badge--4k">4K</span></li>
    <li role="radio" aria-checked="false"><span class="ui-qp__mark"></span>1440p<span class="ui-qp__badge">HD</span></li>
    <li role="radio" aria-checked="true" class="is-on"><span class="ui-qp__mark">✓</span>1080p<span class="ui-qp__badge">HD</span></li>
    <li role="radio" aria-checked="false"><span class="ui-qp__mark"></span>720p</li>
    <li role="radio" aria-checked="false"><span class="ui-qp__mark"></span>480p</li>
    <li role="radio" aria-checked="false"><span class="ui-qp__mark"></span>240p</li>
    <li role="radio" aria-checked="false" class="ui-qp__auto"><span class="ui-qp__mark"></span>Auto <em>(1080p)</em></li>
  </ul>
</div>

<style>
  .ui-qp{display:inline-block;min-width:260px;background:rgba(28,28,28,.96);color:#fff;border-radius:12px;padding:8px 0;font:14px Roboto,"Segoe UI",sans-serif;box-shadow:0 8px 32px rgba(0,0,0,.6)}
  .ui-qp__hd{display:flex;align-items:center;gap:6px;padding:6px 14px 10px;border-bottom:1px solid rgba(255,255,255,.08);font-weight:500}
  .ui-qp__back{background:transparent;border:0;color:#fff;font-size:18px;cursor:pointer;padding:0 4px}
  .ui-qp__list{list-style:none;margin:0;padding:6px 0}
  .ui-qp__list li{display:flex;align-items:center;gap:12px;padding:9px 16px;cursor:pointer;font-size:14px}
  .ui-qp__list li:hover{background:rgba(255,255,255,.08)}
  .ui-qp__mark{display:inline-block;width:16px;text-align:center;color:#fff;font-size:13px}
  .ui-qp__badge{margin-left:auto;padding:1px 6px;background:#3ea6ff;color:#000;font:700 10px Roboto,sans-serif;border-radius:3px;letter-spacing:.02em}
  .ui-qp__badge--4k{background:#ff4d4f;color:#fff}
  .ui-qp__auto em{color:#aaa;font-style:normal;font-size:13px;margin-left:4px}
  .ui-qp__list li.is-on{color:#fff}
</style>

<script>
  document.querySelectorAll('.ui-qp__list li').forEach(li=>li.addEventListener('click',()=>{
    document.querySelectorAll('.ui-qp__list li').forEach(x=>{x.classList.remove('is-on');x.querySelector('.ui-qp__mark').textContent='';x.setAttribute('aria-checked','false')});
    li.classList.add('is-on');li.querySelector('.ui-qp__mark').textContent='✓';li.setAttribute('aria-checked','true');
  }));
</script>`,
    },
    {
      name: 'Captions Toggle Button',
      nameJa: '字幕(CC)切り替えボタン',
      desc: '字幕オン/オフを切り替える、押下状態が分かるCCアイコンボタン。',
      detail: '動画プレイヤーで使われる、押すと字幕がオン/オフになるトグルボタンです。オフのときはアイコンが白く半透明、オンのときはアイコンの下に赤い下線が引かれ、aria-pressed属性で状態が表現されます。「CC」(Closed Caption)アイコンは四角い枠に囲まれた文字、というのが世界共通のサインで、聴覚に障害のある視聴者だけでなく、騒がしい環境やオフィスで音を出せない人にも欠かせない機能です。ホバー時のツールチップで現在の状態を文字で補足するとさらに親切になります。',
      descEn: 'A CC button that flips captions on and off, with a clear pressed state.',
      detailEn: 'A simple toggle that turns captions on or off. When off, the icon is muted; when on, a red underline appears beneath it and aria-pressed flips to true. The boxed "CC" mark is a universal signal — captions help not only viewers with hearing differences, but anyone watching in a noisy cafe or muted office. Pair it with a tooltip that spells out the state ("Captions on / off") and it becomes an even friendlier little control.',
      code: `<!-- Inspired by YouTube -->
<div class="ui-cc">
  <button class="ui-cc__btn" id="ccBtn" type="button" aria-pressed="false" aria-label="Toggle captions">
    <span class="ui-cc__icon"><span class="ui-cc__lt">CC</span></span>
    <span class="ui-cc__line"></span>
  </button>
  <button class="ui-cc__btn is-on" type="button" aria-pressed="true" aria-label="Toggle captions">
    <span class="ui-cc__icon"><span class="ui-cc__lt">CC</span></span>
    <span class="ui-cc__line"></span>
  </button>
  <p class="ui-cc__hint">左: OFF / 右: ON</p>
</div>

<style>
  .ui-cc{display:inline-flex;gap:32px;align-items:center;padding:28px 32px;background:#0f0f0f;border-radius:10px;font:13px Roboto,"Segoe UI",sans-serif;color:#aaa}
  .ui-cc__btn{position:relative;background:transparent;border:0;cursor:pointer;padding:8px 6px 12px;color:#fff;line-height:1}
  .ui-cc__btn:hover{background:rgba(255,255,255,.1);border-radius:4px}
  .ui-cc__icon{display:inline-flex;align-items:center;justify-content:center;width:34px;height:22px;border:1.6px solid currentColor;border-radius:5px;opacity:.7;transition:opacity .15s}
  .ui-cc__lt{font:700 10px Roboto,sans-serif;letter-spacing:.5px}
  .ui-cc__line{position:absolute;left:6px;right:6px;bottom:5px;height:2.5px;background:#ff0000;border-radius:2px;transform:scaleX(0);transform-origin:center;transition:transform .15s}
  .ui-cc__btn.is-on .ui-cc__icon{opacity:1}
  .ui-cc__btn.is-on .ui-cc__line{transform:scaleX(1)}
  .ui-cc__hint{margin:0 0 0 8px;font-size:12px}
</style>

<script>
  document.getElementById('ccBtn').addEventListener('click',e=>{
    const b=e.currentTarget,on=b.getAttribute('aria-pressed')==='true';
    b.setAttribute('aria-pressed',String(!on));b.classList.toggle('is-on',!on);
  });
</script>`,
    },
    {
      name: 'Live Chat Row',
      nameJa: 'ライブチャット行(Twitch風)',
      desc: 'カラフルなユーザー名 + 絵文字混じりのメッセージ。Twitchの右ペインそのまま。',
      detail: 'ライブ配信の横に流れていく、Twitchスタイルのチャットメッセージ1行のUIです。ユーザーごとに名前の色が違うのが特徴で、これは「同じ名前が群衆の中で見分けがつくように」というTwitchが広めた工夫です。バッジ(モデレーター・サブスクライバー・VIP)を名前の前に並べ、絵文字や絵文字スタンプ(Twitchではエモート)が文中に混ざります。背景は完全な黒で、ハイライト時だけ紫の薄い帯がかかるのが定番。フォント、行間、配色のすべてが「速いスクロール速度でも読める」ように最適化されています。',
      descEn: 'Twitch-style chat row — colored username plus a message full of emotes and emoji.',
      detailEn: 'A single row from a Twitch-flavored live chat feed. Each viewer gets their own username color — a trick Twitch popularized so people can recognize the same chatter in a fast-moving crowd. Mod, subscriber, and VIP badges sit in front of the name; emotes and emoji are sprinkled through the message. The background is near-black, with a faint purple wash on highlighted messages. Everything — font, line-height, density — is tuned to stay readable when the chat is flying past.',
      code: `<!-- Inspired by Twitch -->
<div class="ui-lc">
  <div class="ui-lc__row">
    <span class="ui-lc__badge ui-lc__badge--mod">⚔</span>
    <span class="ui-lc__user" style="color:#00b894">night_moth</span><span class="ui-lc__colon">:</span>
    <span class="ui-lc__msg">GG that last play was insane 🔥🔥</span>
  </div>
  <div class="ui-lc__row">
    <span class="ui-lc__badge ui-lc__badge--sub">★3</span>
    <span class="ui-lc__user" style="color:#ff7675">pixel_kira</span><span class="ui-lc__colon">:</span>
    <span class="ui-lc__msg">how does she aim like that lol PogChamp</span>
  </div>
  <div class="ui-lc__row ui-lc__row--hl">
    <span class="ui-lc__badge ui-lc__badge--bits">💎100</span>
    <span class="ui-lc__user" style="color:#9c88ff">danny_arcades</span><span class="ui-lc__colon">:</span>
    <span class="ui-lc__msg">cheer100 take my bits champ 👑</span>
  </div>
  <div class="ui-lc__row">
    <span class="ui-lc__badge ui-lc__badge--vip">VIP</span>
    <span class="ui-lc__user" style="color:#fdcb6e">Yui_san</span><span class="ui-lc__colon">:</span>
    <span class="ui-lc__msg">来た!配信お疲れさま〜 ✨</span>
  </div>
  <div class="ui-lc__row">
    <span class="ui-lc__user" style="color:#74b9ff">low_poly_pete</span><span class="ui-lc__colon">:</span>
    <span class="ui-lc__msg">first time catching live, this is sick</span>
  </div>
</div>

<style>
  .ui-lc{max-width:360px;padding:10px 8px;background:#0e0e10;border:1px solid #26262c;border-radius:6px;font:14px "Inter",-apple-system,"Segoe UI",sans-serif;color:#efeff1}
  .ui-lc__row{padding:4px 6px;line-height:1.35;font-size:14px;border-radius:3px}
  .ui-lc__row--hl{background:rgba(145,71,255,.18);border-left:3px solid #9147ff;padding-left:9px}
  .ui-lc__badge{display:inline-block;padding:1px 4px;margin-right:4px;font:700 10px "Inter",sans-serif;border-radius:3px;vertical-align:1px}
  .ui-lc__badge--mod{background:#00ad03;color:#fff}
  .ui-lc__badge--sub{background:#6441a5;color:#fff}
  .ui-lc__badge--vip{background:#e005b9;color:#fff}
  .ui-lc__badge--bits{background:#1f69ff;color:#fff}
  .ui-lc__user{font-weight:700}
  .ui-lc__colon{color:#adadb8;margin-right:4px}
  .ui-lc__msg{color:#efeff1;word-break:break-word}
</style>`,
    },
    {
      name: 'Like Dislike Pair',
      nameJa: '高評価/低評価ペア',
      desc: '親指↑↑の2つのボタンが分かれて並び、それぞれカウント表示を持つ。',
      detail: 'YouTube動画の下によく置かれている、高評価と低評価を1セットにしたボタンペアです。1つの丸ピル(カプセル)型のボタン群として描かれ、左半分が「👍 数字」、右半分が「👎」で、中央に細い縦の区切り線が入るのが特徴です。押下するとアイコンが塗りに変わり、わずかに弾むようなアニメーションがつくのが今風の振る舞いです。「賛成・反対」の二者を等価に並べることで、評価行動の心理的ハードルを下げる効果があります。',
      descEn: 'A pill-shaped pair of thumbs-up / thumbs-down buttons, each with its own count.',
      detailEn: 'You meet this pair under every YouTube video: a single pill divided in half, with "👍 count" on the left and "👎" on the right, separated by a hairline. Tap one and the icon fills in with a small bouncy animation. Treating like and dislike as equal halves of one control lowers the psychological cost of rating — viewers feel free to react either way. It is a tiny piece of UI that quietly shapes how people respond to content.',
      code: `<!-- Inspired by YouTube -->
<div class="ui-ld">
  <button class="ui-ld__btn ui-ld__btn--like is-on" type="button" aria-pressed="true">
    <span class="ui-ld__icon">👍</span><span class="ui-ld__count">12K</span>
  </button>
  <span class="ui-ld__div"></span>
  <button class="ui-ld__btn ui-ld__btn--dis" type="button" aria-pressed="false">
    <span class="ui-ld__icon">👎</span>
  </button>
</div>

<style>
  .ui-ld{display:inline-flex;align-items:stretch;background:#f2f2f2;border-radius:999px;font:500 14px Roboto,"Segoe UI",sans-serif;color:#0f0f0f;overflow:hidden}
  .ui-ld__btn{display:inline-flex;align-items:center;gap:8px;padding:9px 16px;background:transparent;border:0;cursor:pointer;font:500 14px Roboto,sans-serif;color:#0f0f0f}
  .ui-ld__btn:hover{background:rgba(0,0,0,.07)}
  .ui-ld__btn--like{padding-left:18px}
  .ui-ld__btn--dis{padding-right:18px}
  .ui-ld__icon{font-size:18px;line-height:1;transition:transform .15s}
  .ui-ld__btn:active .ui-ld__icon{transform:scale(1.25)}
  .ui-ld__btn.is-on .ui-ld__icon{filter:drop-shadow(0 0 0 #065fd4)}
  .ui-ld__count{font-weight:500;letter-spacing:.01em}
  .ui-ld__div{width:1px;background:rgba(0,0,0,.15);margin:8px 0}
</style>

<script>
  document.querySelectorAll('.ui-ld__btn').forEach(b=>b.addEventListener('click',()=>{
    const on=b.getAttribute('aria-pressed')==='true';b.setAttribute('aria-pressed',String(!on));b.classList.toggle('is-on',!on);
  }));
</script>`,
    },
    {
      name: 'Subscribe With Bell',
      nameJa: 'チャンネル登録 + ベル',
      desc: '「Subscribe」→「Subscribed」と切り替わり、横にベル(通知設定)ドロップダウンが付く。',
      detail: 'YouTubeでおなじみの「チャンネル登録」ボタンと、その横に並ぶベル型の通知設定UIをセットにしたパーツです。未登録のときは赤い目立つボタンで「Subscribe」と表示され、押すとグレーの「Subscribed ▾」に変わります。登録後にだけ表示されるベルアイコンを押すと、「すべて / カスタマイズ / なし」を選ぶドロップダウンが開き、通知頻度をきめ細かく制御できます。クリエイター側にとっては最重要のCTA、視聴者側にとっては「お気に入り登録 + 通知設定」の入り口、という2つの役目を担います。',
      descEn: 'A "Subscribe" CTA that flips to "Subscribed" and reveals a notification-bell dropdown.',
      detailEn: 'The classic YouTube "Subscribe" button with its notification-bell sidekick. Before subscribing, it is a loud red CTA reading "Subscribe"; after, it dims into a grey "Subscribed ▾". The bell only appears after subscribing and opens a menu with "All / Personalized / None" so viewers can fine-tune how often the channel pings them. For creators it is the single most important CTA on a channel; for viewers it is one tiny widget combining "favorite" and "notifications".',
      code: `<!-- Inspired by YouTube -->
<div class="ui-sb" id="sb">
  <button class="ui-sb__main" id="sbMain" type="button">Subscribe</button>
  <div class="ui-sb__bell" id="sbBell" hidden>
    <button class="ui-sb__bellBtn" id="sbBellBtn" type="button" aria-haspopup="menu" aria-expanded="false">🔔 <span class="ui-sb__caret">▾</span></button>
    <ul class="ui-sb__menu" id="sbMenu" role="menu">
      <li role="menuitem" class="is-on"><span class="ui-sb__mk">✓</span>All</li>
      <li role="menuitem"><span class="ui-sb__mk"></span>Personalized</li>
      <li role="menuitem"><span class="ui-sb__mk"></span>None</li>
    </ul>
  </div>
</div>

<style>
  .ui-sb{display:inline-flex;align-items:center;gap:4px;font:500 14px Roboto,"Segoe UI",sans-serif;position:relative}
  .ui-sb__main{padding:9px 16px;background:#0f0f0f;color:#fff;border:0;border-radius:999px;font:500 14px Roboto,sans-serif;cursor:pointer;letter-spacing:.01em}
  .ui-sb__main:hover{background:#272727}
  .ui-sb.is-subbed .ui-sb__main{background:#f2f2f2;color:#0f0f0f;padding-right:20px}
  .ui-sb.is-subbed .ui-sb__main::after{content:" ✓";font-weight:600}
  .ui-sb__bell{position:relative}
  .ui-sb__bellBtn{padding:9px 12px;background:#f2f2f2;color:#0f0f0f;border:0;border-radius:999px;cursor:pointer;font:500 14px Roboto,sans-serif}
  .ui-sb__bellBtn:hover{background:#e5e5e5}
  .ui-sb__caret{font-size:11px;margin-left:2px;color:#606060}
  .ui-sb__menu{display:none;position:absolute;top:calc(100% + 6px);right:0;min-width:170px;list-style:none;margin:0;padding:6px 0;background:#fff;border-radius:8px;box-shadow:0 4px 14px rgba(0,0,0,.15),0 0 0 1px rgba(0,0,0,.05);z-index:10}
  .ui-sb.is-open .ui-sb__menu{display:block}
  .ui-sb__menu li{display:flex;align-items:center;gap:10px;padding:9px 14px;cursor:pointer;color:#0f0f0f}
  .ui-sb__menu li:hover{background:#f2f2f2}
  .ui-sb__mk{width:12px;text-align:center;font-size:12px;color:#0f0f0f}
</style>

<script>
  (function(){const root=document.getElementById('sb'),main=document.getElementById('sbMain'),bell=document.getElementById('sbBell'),bbtn=document.getElementById('sbBellBtn');
    main.addEventListener('click',()=>{const subbed=root.classList.toggle('is-subbed');main.textContent=subbed?'Subscribed':'Subscribe';bell.hidden=!subbed;if(!subbed)root.classList.remove('is-open')});
    bbtn.addEventListener('click',e=>{e.stopPropagation();root.classList.toggle('is-open');bbtn.setAttribute('aria-expanded',String(root.classList.contains('is-open')))});
    document.addEventListener('click',e=>{if(!root.contains(e.target))root.classList.remove('is-open')});
    document.querySelectorAll('#sbMenu li').forEach(li=>li.addEventListener('click',()=>{document.querySelectorAll('#sbMenu li').forEach(x=>{x.classList.remove('is-on');x.querySelector('.ui-sb__mk').textContent=''});li.classList.add('is-on');li.querySelector('.ui-sb__mk').textContent='✓';root.classList.remove('is-open')}));
  })();
</script>`,
    },
    {
      name: 'Netflix Row Scroller',
      nameJa: 'Netflix風 横スクロール行',
      desc: '横一列に並ぶポスター。ホバーすると拡大し、隣のポスターを押しのける。',
      detail: 'Netflixのホーム画面でおなじみの、横方向にスクロールしていくポスター行UIです。1行ごとに「今日のトップ10」「最近視聴」のようなテーマがあり、ポスターをホバーすると約1.2倍に拡大、両隣のポスターをやや内側にズラす独特なホバー体験が特徴です。ポスター左上に「No.1」のような大きな数字バッジを重ねて表示するNetflix特有の演出も再現できます。リモコン操作を想定して矢印キーでもフォーカス移動できるよう、tabindexの管理が裏では地味に重要な部分です。',
      descEn: 'A horizontal poster strip where hovering a tile scales it up and nudges its neighbors aside.',
      detailEn: 'The signature Netflix home-row UI: a horizontal strip of posters under a section title like "Top 10 today" or "Continue watching". Hovering a tile scales it to about 1.2x while its neighbors slide gently aside — a small piece of motion design that made Netflix instantly recognizable. You can also overlay a giant "No. 1" badge in the top-left for the Top-10 row. Behind the scenes, keeping tabindex tidy matters so the row plays well with remote controls and keyboard navigation.',
      code: `<!-- Inspired by Netflix -->
<section class="ui-nr">
  <h3 class="ui-nr__title">Top 10 in Japan Today</h3>
  <div class="ui-nr__scroll">
    <article class="ui-nr__card" style="--c1:#e94560;--c2:#0f3460"><span class="ui-nr__rank">1</span><div class="ui-nr__poster"><span>STRANGER<br>ECHOES</span></div></article>
    <article class="ui-nr__card" style="--c1:#16213e;--c2:#e94560"><span class="ui-nr__rank">2</span><div class="ui-nr__poster"><span>NIGHT<br>RIDER</span></div></article>
    <article class="ui-nr__card" style="--c1:#9c27b0;--c2:#1a1a2e"><span class="ui-nr__rank">3</span><div class="ui-nr__poster"><span>VIOLET<br>HOUR</span></div></article>
    <article class="ui-nr__card" style="--c1:#0f3460;--c2:#16213e"><span class="ui-nr__rank">4</span><div class="ui-nr__poster"><span>DEEP<br>BLUE</span></div></article>
    <article class="ui-nr__card" style="--c1:#f39c12;--c2:#c0392b"><span class="ui-nr__rank">5</span><div class="ui-nr__poster"><span>SUNSET<br>HEIST</span></div></article>
    <article class="ui-nr__card" style="--c1:#27ae60;--c2:#1a1a2e"><span class="ui-nr__rank">6</span><div class="ui-nr__poster"><span>GREEN<br>ROOM</span></div></article>
  </div>
</section>

<style>
  .ui-nr{max-width:640px;padding:18px 0 24px;background:#141414;border-radius:6px;font:14px "Netflix Sans",Helvetica,Arial,sans-serif;color:#fff;overflow:hidden}
  .ui-nr__title{margin:0 16px 12px;font-size:18px;font-weight:700;color:#e5e5e5}
  .ui-nr__scroll{display:flex;gap:6px;padding:24px 16px;overflow-x:auto;scrollbar-width:none}
  .ui-nr__scroll::-webkit-scrollbar{display:none}
  .ui-nr__card{position:relative;flex:none;display:flex;align-items:flex-end;transition:transform .25s ease;cursor:pointer}
  .ui-nr__card:hover{transform:scale(1.18);z-index:2}
  .ui-nr__card:hover ~ .ui-nr__card{transform:translateX(14px)}
  .ui-nr__rank{font:900 96px "Arial Black",sans-serif;line-height:.85;color:transparent;-webkit-text-stroke:3px #e5e5e5;letter-spacing:-.05em;margin-right:-22px;position:relative;z-index:1}
  .ui-nr__poster{position:relative;width:96px;height:140px;border-radius:4px;background:linear-gradient(135deg,var(--c1),var(--c2));display:grid;place-items:center;box-shadow:0 4px 12px rgba(0,0,0,.5)}
  .ui-nr__poster span{font:900 13px Helvetica,Arial,sans-serif;color:#fff;text-align:center;letter-spacing:.04em;line-height:1.15;padding:0 8px;text-shadow:0 2px 4px rgba(0,0,0,.4)}
</style>`,
    },
    {
      name: 'TikTok Action Rail',
      nameJa: 'TikTok風 縦アクションレール',
      desc: '画面右端に縦並びで Like / Comment / Share / Save が積まれる、フルスクリーン動画用UI。',
      detail: 'TikTokやInstagram ReelsなどでおなじみのUIで、フルスクリーン動画の右側に「いいね・コメント・シェア・保存」が縦に積まれる操作レールです。各アイコンはサイズが大きく、その下にカウント(1.2M, 8.4Kなど)が小さく添えられ、片手スマホ操作で親指ひとつで全部押せる位置に最適化されています。一番上にはクリエイターのアバターと小さな「+」追加ボタンが置かれ、ここから即フォローできます。「いいね」を押すと白いハートが赤いハートにポンッと弾けるマイクロインタラクションは、TikTok体験の中核と言える要素です。',
      descEn: 'A vertical stack of Like / Comment / Share / Save on the right edge — the TikTok action rail.',
      detailEn: 'On TikTok and Reels, this rail of Like / Comment / Share / Save stacks down the right edge of a full-screen video. Each icon is generously sized, with a small count beneath (1.2M, 8.4K, …), all placed where a thumb can reach them one-handed. At the top sits the creator avatar plus a tiny "+" follow button. The signature heart-pop animation when you tap Like is a small detail, but it is at the heart of what makes the app feel so addictive to use.',
      code: `<!-- Inspired by TikTok -->
<div class="ui-tt">
  <div class="ui-tt__stage">
    <div class="ui-tt__caption"><b>@neon.kana</b><br>day 47 of learning hand-balancing 🤸 #journey #fyp</div>
    <div class="ui-tt__sound">♬ Lofi Sunday — kana.beats</div>
    <ul class="ui-tt__rail">
      <li class="ui-tt__user">
        <div class="ui-tt__avatar">K</div>
        <button type="button" class="ui-tt__plus" aria-label="Follow">+</button>
      </li>
      <li><button type="button" class="ui-tt__act ui-tt__act--like is-on" aria-pressed="true"><span class="ui-tt__icon">❤</span></button><span class="ui-tt__cnt">1.2M</span></li>
      <li><button type="button" class="ui-tt__act"><span class="ui-tt__icon">💬</span></button><span class="ui-tt__cnt">8,431</span></li>
      <li><button type="button" class="ui-tt__act"><span class="ui-tt__icon">🔖</span></button><span class="ui-tt__cnt">42K</span></li>
      <li><button type="button" class="ui-tt__act"><span class="ui-tt__icon">↪</span></button><span class="ui-tt__cnt">Share</span></li>
      <li><button type="button" class="ui-tt__disc" aria-label="Spinning disc"><span>♬</span></button></li>
    </ul>
  </div>
</div>

<style>
  .ui-tt{max-width:280px;margin:0 auto;font:14px -apple-system,"Helvetica Neue","Segoe UI",sans-serif;color:#fff}
  .ui-tt__stage{position:relative;aspect-ratio:9/16;border-radius:14px;overflow:hidden;background:linear-gradient(160deg,#25f4ee 0%,#1a1a1a 35%,#fe2c55 100%)}
  .ui-tt__caption{position:absolute;left:14px;right:88px;bottom:54px;font-size:14px;line-height:1.4;text-shadow:0 1px 3px rgba(0,0,0,.7)}
  .ui-tt__caption b{font-weight:700}
  .ui-tt__sound{position:absolute;left:14px;right:88px;bottom:22px;font-size:12.5px;text-shadow:0 1px 3px rgba(0,0,0,.7);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-tt__rail{position:absolute;right:8px;bottom:60px;list-style:none;margin:0;padding:0;display:flex;flex-direction:column;align-items:center;gap:16px}
  .ui-tt__user{position:relative;width:48px;height:48px;margin-bottom:6px}
  .ui-tt__avatar{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#fe2c55,#25f4ee);display:grid;place-items:center;font-weight:800;border:2px solid #fff;color:#fff}
  .ui-tt__plus{position:absolute;left:50%;bottom:-8px;transform:translateX(-50%);width:20px;height:20px;border-radius:50%;background:#fe2c55;color:#fff;border:0;font-size:14px;font-weight:700;cursor:pointer;line-height:1;display:grid;place-items:center}
  .ui-tt__rail li{display:flex;flex-direction:column;align-items:center;gap:3px}
  .ui-tt__act{width:44px;height:44px;border-radius:50%;background:transparent;border:0;color:#fff;font-size:30px;cursor:pointer;line-height:1;display:grid;place-items:center;transition:transform .15s}
  .ui-tt__act:active{transform:scale(1.25)}
  .ui-tt__act--like.is-on .ui-tt__icon{color:#fe2c55;text-shadow:0 0 8px rgba(254,44,85,.5)}
  .ui-tt__icon{filter:drop-shadow(0 1px 2px rgba(0,0,0,.5))}
  .ui-tt__cnt{font:600 12.5px -apple-system,sans-serif;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.6)}
  .ui-tt__disc{width:44px;height:44px;border-radius:50%;background:radial-gradient(#333 0 28%,#000 28% 30%,#222 30% 60%,#000 60% 64%,#222 64%);border:2px solid rgba(255,255,255,.4);color:#aaa;font-size:18px;display:grid;place-items:center;cursor:pointer;animation:ui-tt-spin 4s linear infinite}
  @keyframes ui-tt-spin{to{transform:rotate(360deg)}}
</style>`,
    },
  ],
}
