/**
 * UI Parts Showcase — Navigation & Mobile Components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-nav-mobile',
  title: 'UIパーツ集(ナビ・モバイル系)',
  titleEn: 'Navigation & Mobile Components',
  description: 'ナビゲーションとモバイル向けUIパーツ。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Bottom Tab Bar',
      nameJa: 'ボトムタブバー',
      desc: 'モバイルアプリで画面下に固定された主要ナビ。ホーム・検索・設定などに素早く移動できる。',
      detail: 'ボトムタブバーは、スマホアプリの画面最下部に固定して表示されるナビゲーションUIで、最も重要なトップレベルの画面(ホーム、検索、通知、マイページなど)を3〜5個並べておくのが定番です。親指の届く範囲にあるため操作しやすく、現在地がアイコンと色で常に分かるのが利点。InstagramやTwitter、各種銀行アプリなど、片手操作が前提のモバイルUIではほぼ必須の構成で、メニュー間を素早く行き来できることが体験を支えます。',
      descEn: 'The main mobile nav anchored at the bottom of the screen for quick switching between key sections.',
      detailEn: 'A bottom tab bar is the navigation bar pinned to the bottom of a mobile app, typically holding 3–5 top-level destinations like Home, Search, Notifications, and Profile. Since it sits within thumb reach, it is easy to operate one-handed, and the active tab is always visible thanks to color and iconography. It is essentially a requirement in apps designed for one-handed use — Instagram, Twitter, and most banking apps — because instant section-switching is at the heart of mobile UX.',
      code: `/* Inspired by Instagram */
<div class="ui-tab-bar-phone">
  <nav class="ui-tab-bar">
    <button class="ui-tab-bar__item is-active">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#000"><path d="M22 9.2v12.3a1 1 0 01-1 1h-5.6a.5.5 0 01-.5-.5v-7.5a.5.5 0 00-.5-.5h-4.8a.5.5 0 00-.5.5v7.5a.5.5 0 01-.5.5H3a1 1 0 01-1-1V9.2a1 1 0 01.4-.8l9-7a1 1 0 011.2 0l9 7a1 1 0 01.4.8z"/></svg>
    </button>
    <button class="ui-tab-bar__item">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#000" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4-4" stroke-linecap="round"/></svg>
    </button>
    <button class="ui-tab-bar__item">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#000" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/></svg>
    </button>
    <button class="ui-tab-bar__item">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#000" stroke-width="1.8" stroke-linejoin="round"><polygon points="3 3 21 12 3 21 3 14 13 12 3 10 3 3"/></svg>
    </button>
    <button class="ui-tab-bar__item ui-tab-bar__item--avatar">
      <span class="ui-tab-bar__avatar">M</span>
    </button>
  </nav>
  <div class="ui-tab-bar__home-indicator"></div>
</div>

<style>
  .ui-tab-bar-phone{width:390px;background:#fff;border-radius:0 0 38px 38px;border:1px solid #e8e8e8;padding-bottom:8px;font:-apple-system,'Segoe UI',sans-serif}
  .ui-tab-bar{display:flex;justify-content:space-around;align-items:center;padding:10px 16px 6px;border-top:.5px solid #dbdbdb;background:#fff}
  .ui-tab-bar__item{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border:0;background:transparent;cursor:pointer;color:#000;padding:0}
  .ui-tab-bar__item:not(.is-active){opacity:.95}
  .ui-tab-bar__item.is-active svg{transform:scale(1.05)}
  .ui-tab-bar__item--avatar .ui-tab-bar__avatar{width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#f9ce34,#ee2a7b 50%,#6228d7);color:#fff;display:flex;align-items:center;justify-content:center;font:700 12px sans-serif;box-shadow:0 0 0 2px #fff,0 0 0 3px #000}
  .ui-tab-bar__home-indicator{width:134px;height:5px;background:#000;border-radius:3px;margin:8px auto 6px}
</style>

<script>
  document.querySelectorAll('.ui-tab-bar__item').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.ui-tab-bar__item').forEach(x=>x.classList.remove('is-active'));
    b.classList.add('is-active');
  }));
</script>`,
    },
    {
      name: 'Top App Bar',
      nameJa: 'トップアプリバー',
      desc: 'モバイル画面上部のヘッダー。戻るボタン・タイトル・右側アクションを並べる。',
      detail: 'トップアプリバーは、モバイルアプリの画面上部に固定して表示されるヘッダーUIで、左に「戻る(<)」、中央に画面タイトル、右に共有や検索などのアクションを置くのが定番レイアウトです。ユーザーが「今どの画面にいるか」をひと目で把握でき、画面遷移してきた場合の戻り道も用意できます。iOSのナビゲーションバー、AndroidのApp Barが代表例で、スクロールに応じて影が付いたり背景が透けたりする演出を加えると、より洗練された印象になります。',
      descEn: 'The header at the top of a mobile screen with a back button, title, and right-side actions.',
      detailEn: 'A top app bar is the header pinned at the top of a mobile screen. The classic layout puts a back ("<") button on the left, the page title in the middle, and actions like share or search on the right. It tells users where they are at a glance, and gives them a clear way back if they navigated in from another screen. iOS\'s navigation bar and Android\'s App Bar are the canonical examples — adding subtle effects like a drop shadow appearing on scroll makes it feel more polished.',
      code: `/* Inspired by Gmail */
<div class="ui-app-bar-phone">
  <div class="ui-app-bar__status"><span>9:41</span><span>●●● 5G ▮</span></div>
  <header class="ui-app-bar">
    <button class="ui-app-bar__menu" aria-label="menu">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#5f6368" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <input class="ui-app-bar__search" placeholder="Search in mail">
    <button class="ui-app-bar__avatar">y</button>
  </header>
  <div class="ui-app-bar__sub">
    <span class="ui-app-bar__inbox">Inbox</span>
    <span class="ui-app-bar__count">128</span>
  </div>
</div>

<style>
  .ui-app-bar-phone{width:390px;background:#f6f8fc;font:-apple-system,'Roboto','Segoe UI',sans-serif;border-radius:38px 38px 0 0;padding-top:6px;overflow:hidden;border:1px solid #e8e8e8;border-bottom:0}
  .ui-app-bar__status{display:flex;justify-content:space-between;padding:8px 24px;font:600 14px inherit;color:#202124}
  .ui-app-bar{display:flex;align-items:center;gap:8px;height:56px;padding:0 8px 0 12px;background:#eaf1fb;border-radius:28px;margin:6px 16px}
  .ui-app-bar__menu{width:40px;height:40px;border:0;background:transparent;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer}
  .ui-app-bar__menu:hover{background:rgba(0,0,0,.04)}
  .ui-app-bar__search{flex:1;border:0;background:transparent;outline:none;font:16px inherit;color:#202124}
  .ui-app-bar__search::placeholder{color:#5f6368}
  .ui-app-bar__avatar{width:32px;height:32px;border-radius:50%;background:#f29900;color:#fff;border:0;font:600 14px inherit;cursor:pointer}
  .ui-app-bar__sub{display:flex;align-items:baseline;justify-content:space-between;padding:18px 24px 12px;background:#f6f8fc}
  .ui-app-bar__inbox{font:400 22px inherit;color:#202124}
  .ui-app-bar__count{font:500 12px inherit;color:#5f6368}
</style>`,
    },
    {
      name: 'Action Sheet',
      nameJa: 'アクションシート',
      desc: '画面下からスライドアップする操作選択肢パネル。iOSで「共有」「削除」などの選択に使う。',
      detail: 'アクションシートは、画面の下からスーッとせり上がってくるパネル状のUIで、現在の項目に対して取れるアクション(共有・編集・削除など)を縦に並べて選ばせます。iOSで広く使われるパターンで、最後に「キャンセル」ボタンを少し離して配置するのがお作法。背景は半透明のオーバーレイで覆い、外側タップや「キャンセル」で閉じます。スマホのように画面が狭い環境で、ドロップダウンより親指で押しやすい大きなターゲットを提供したいときに最適です。',
      descEn: 'A panel that slides up from the bottom of the screen with action choices like Share or Delete.',
      detailEn: 'An action sheet is a panel that slides up from the bottom of the screen, listing the actions you can take on the current item — Share, Edit, Delete, and so on. It is a common iOS pattern, with a "Cancel" button placed slightly apart at the bottom by convention. The rest of the screen dims behind a semi-transparent overlay, and tapping outside or hitting Cancel dismisses it. On phones, it offers much larger thumb targets than a dropdown would.',
      code: `/* Inspired by WhatsApp */
<div class="ui-action-sheet-frame">
  <div class="ui-action-sheet" aria-hidden="false">
    <div class="ui-action-sheet__backdrop"></div>
    <div class="ui-action-sheet__panel">
      <div class="ui-action-sheet__quote">
        <span class="ui-action-sheet__quote-name">Kenji</span>
        <span class="ui-action-sheet__quote-text">Are we still on for dinner at 7?</span>
      </div>
      <div class="ui-action-sheet__reactions">
        <button>❤️</button><button>😂</button><button>😮</button><button>😢</button><button>🙏</button><button>+</button>
      </div>
      <div class="ui-action-sheet__group">
        <button class="ui-action-sheet__item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M9 17l-5-5 5-5"/><path d="M20 18v-2a4 4 0 00-4-4H4"/></svg><span>Reply</span></button>
        <button class="ui-action-sheet__item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V4a2 2 0 012-2h11"/></svg><span>Copy</span></button>
        <button class="ui-action-sheet__item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2"/></svg><span>Star</span></button>
        <button class="ui-action-sheet__item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M15 17l5-5-5-5"/><path d="M4 18v-2a4 4 0 014-4h12"/></svg><span>Forward</span></button>
        <button class="ui-action-sheet__item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/></svg><span>Share</span></button>
        <button class="ui-action-sheet__item ui-action-sheet__item--danger"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff453a" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg><span>Delete</span></button>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-action-sheet-frame{position:relative;width:360px;height:560px;background:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23128c7e%22 width=%22100%22 height=%22100%22/></svg>') #0b141a;border-radius:28px;overflow:hidden;font:14px -apple-system,'Segoe UI',sans-serif;color:#e9edef}
  .ui-action-sheet{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end}
  .ui-action-sheet__backdrop{position:absolute;inset:0;background:rgba(0,0,0,.5)}
  .ui-action-sheet__panel{position:relative;padding:12px;display:flex;flex-direction:column;gap:10px}
  .ui-action-sheet__quote{background:#005c4b;align-self:flex-end;border-radius:8px 0 8px 8px;padding:8px 10px;max-width:75%;display:flex;flex-direction:column;font-size:13px}
  .ui-action-sheet__quote-name{font:600 13px inherit;color:#53bdeb}
  .ui-action-sheet__quote-text{color:#e9edef;margin-top:2px}
  .ui-action-sheet__reactions{display:flex;justify-content:space-around;background:#1f2c33;border-radius:24px;padding:6px}
  .ui-action-sheet__reactions button{border:0;background:transparent;font-size:22px;cursor:pointer;padding:4px 8px;color:#aebac1}
  .ui-action-sheet__group{background:#1f2c33;border-radius:14px;overflow:hidden}
  .ui-action-sheet__item{width:100%;display:flex;align-items:center;gap:16px;padding:14px 18px;border:0;background:transparent;font:15px inherit;color:#e9edef;cursor:pointer;border-bottom:.5px solid #2a3942;text-align:left}
  .ui-action-sheet__item:last-child{border-bottom:0}
  .ui-action-sheet__item:hover{background:#2a3942}
  .ui-action-sheet__item--danger{color:#ff453a}
</style>`,
    },
    {
      name: 'Bottom Sheet',
      nameJa: 'ボトムシート',
      desc: '画面下からドラッグで上下する詳細パネル。Google Mapsの店舗情報などで使う。',
      detail: 'ボトムシートは、画面の下半分に常駐したり、下からせり上がって表示される情報パネルで、上部のハンドル(横棒)を掴んでドラッグすると高さを変えられるのが特徴です。Google Mapsで地点情報を表示する画面や、配車アプリの目的地設定、音楽アプリの再生キューなどで活用されます。アクションシートと違って「半開き」状態を保てるため、地図やリストといった背景の主コンテンツを見ながら、補助情報を扱う両立型UIとして優秀です。',
      descEn: 'A draggable bottom panel that resizes by pulling its handle, like the place info card in Google Maps.',
      detailEn: 'A bottom sheet is a content panel anchored at the bottom of the screen — it can sit half-open or slide up from below, and users can resize it by dragging the handle (horizontal bar) at the top. You see this in Google Maps when showing a place\'s details, in ride-hailing apps for destination setup, and in music apps for the playback queue. Unlike an action sheet, it can hold a "half-open" state, letting users view the background (a map, a list) while interacting with side info — a great dual-purpose pattern.',
      code: `/* Inspired by Uber */
<div class="ui-bottom-sheet-host">
  <div class="ui-bottom-sheet-bg">
    <div class="ui-bottom-sheet-pin"></div>
  </div>
  <section class="ui-bottom-sheet" id="bs" data-state="half">
    <button class="ui-bottom-sheet__handle" id="bsHandle"></button>
    <div class="ui-bottom-sheet__body">
      <div class="ui-bottom-sheet__row">
        <span class="ui-bottom-sheet__dot ui-bottom-sheet__dot--green"></span>
        <div class="ui-bottom-sheet__field"><span>Pickup</span><strong>Current location</strong></div>
      </div>
      <div class="ui-bottom-sheet__line"></div>
      <div class="ui-bottom-sheet__row">
        <span class="ui-bottom-sheet__dot ui-bottom-sheet__dot--dark"></span>
        <div class="ui-bottom-sheet__field"><span>Dropoff</span><strong>Tokyo Station, Marunouchi Exit</strong></div>
      </div>
      <h3 class="ui-bottom-sheet__h">Choose a ride</h3>
      <div class="ui-bottom-sheet__ride is-selected">
        <span class="ui-bottom-sheet__car">🚗</span>
        <div class="ui-bottom-sheet__ride-info"><strong>UberX <span>· 4 mins away</span></strong><small>Affordable rides all to yourself</small></div>
        <span class="ui-bottom-sheet__price">¥1,840</span>
      </div>
      <div class="ui-bottom-sheet__ride">
        <span class="ui-bottom-sheet__car">🚙</span>
        <div class="ui-bottom-sheet__ride-info"><strong>Comfort <span>· 6 mins away</span></strong><small>Newer cars with extra legroom</small></div>
        <span class="ui-bottom-sheet__price">¥2,310</span>
      </div>
      <button class="ui-bottom-sheet__cta">Choose UberX</button>
    </div>
  </section>
</div>

<style>
  .ui-bottom-sheet-host{position:relative;width:390px;height:580px;border-radius:24px;overflow:hidden;background:#e6e9ec;box-shadow:0 10px 30px rgba(0,0,0,.15);font:-apple-system,'Segoe UI',sans-serif;color:#000}
  .ui-bottom-sheet-bg{position:absolute;inset:0;background:repeating-linear-gradient(0deg,#dde1e6 0 1px,transparent 1px 40px),repeating-linear-gradient(90deg,#dde1e6 0 1px,transparent 1px 40px),linear-gradient(180deg,#f0f2f5,#e6e9ec)}
  .ui-bottom-sheet-pin{position:absolute;top:30%;left:50%;width:18px;height:18px;border-radius:50%;background:#000;transform:translate(-50%,-50%);box-shadow:0 0 0 6px rgba(0,0,0,.12)}
  .ui-bottom-sheet{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:14px 14px 0 0;box-shadow:0 -4px 20px rgba(0,0,0,.12);transition:height .3s cubic-bezier(.2,.8,.2,1);display:flex;flex-direction:column;overflow:hidden}
  .ui-bottom-sheet[data-state=peek]{height:120px}
  .ui-bottom-sheet[data-state=half]{height:70%}
  .ui-bottom-sheet[data-state=full]{height:96%}
  .ui-bottom-sheet__handle{width:100%;padding:8px 0;border:0;background:transparent;cursor:pointer;display:flex;justify-content:center}
  .ui-bottom-sheet__handle::before{content:"";display:block;width:32px;height:4px;background:#d6d6d6;border-radius:999px}
  .ui-bottom-sheet__body{padding:0 20px 20px;overflow-y:auto}
  .ui-bottom-sheet__row{display:flex;align-items:center;gap:12px;padding:8px 0}
  .ui-bottom-sheet__dot{width:10px;height:10px;border-radius:50%}
  .ui-bottom-sheet__dot--green{background:#1fbf75}
  .ui-bottom-sheet__dot--dark{background:#000;border-radius:2px}
  .ui-bottom-sheet__line{width:2px;height:14px;background:#d6d6d6;margin-left:4px}
  .ui-bottom-sheet__field{display:flex;flex-direction:column}
  .ui-bottom-sheet__field span{font:11px inherit;color:#717171;text-transform:uppercase;letter-spacing:.04em}
  .ui-bottom-sheet__field strong{font:600 15px inherit;color:#000}
  .ui-bottom-sheet__h{margin:16px 0 8px;font:700 18px inherit}
  .ui-bottom-sheet__ride{display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;cursor:pointer}
  .ui-bottom-sheet__ride.is-selected{background:#f5f5f5;outline:2px solid #000}
  .ui-bottom-sheet__car{font-size:28px}
  .ui-bottom-sheet__ride-info{flex:1}
  .ui-bottom-sheet__ride-info strong{font:600 15px inherit;display:block}
  .ui-bottom-sheet__ride-info strong span{color:#717171;font-weight:400;font-size:13px}
  .ui-bottom-sheet__ride-info small{font:13px inherit;color:#717171}
  .ui-bottom-sheet__price{font:600 16px inherit}
  .ui-bottom-sheet__cta{width:100%;padding:16px;background:#000;color:#fff;border:0;border-radius:12px;font:700 16px inherit;margin-top:12px;cursor:pointer}
</style>

<script>
  (function(){const bs=document.getElementById('bs'),states=['peek','half','full'];
    document.getElementById('bsHandle').onclick=()=>{const i=states.indexOf(bs.dataset.state);bs.dataset.state=states[(i+1)%states.length]};
  })();
</script>`,
    },
    {
      name: 'Filter Pills',
      nameJa: 'フィルターピル',
      desc: '選択可能な楕円ボタン群でフィルタを切替。チャットや検索結果の絞り込みで使う。',
      detail: 'フィルターピル(チップ)は、楕円形(ピル状)の小さなボタンを横に並べて、タップで複数選択・解除ができるフィルタ操作UIです。「すべて / 未読 / メンション / フラグ付き」のようにカテゴリを切り替えたり、検索結果を「カフェ / レストラン / 公園」と絞り込んだりするのに使います。ドロップダウンよりも選択肢が一覧で見え、現在の絞り込み状態が一目で分かるのが利点で、Gmailのカテゴリタブやマップアプリのフィルタが代表例です。',
      descEn: 'A row of pill-shaped toggle buttons for switching filters in chats or search results.',
      detailEn: 'Filter pills are small pill-shaped buttons lined up horizontally that toggle on or off when tapped, letting users mix and match filters. They\'re great for category switching ("All / Unread / Mentions / Flagged") or for narrowing search results ("Cafes / Restaurants / Parks"). Unlike a dropdown, every option is visible at once, and the active state of each filter is obvious. Gmail\'s category tabs and the filters in most map apps are familiar examples.',
      code: `/* Inspired by Spotify */
<div class="ui-pills-wrap">
  <div class="ui-pills" role="group">
    <button class="ui-pill is-active">All</button>
    <button class="ui-pill">Music</button>
    <button class="ui-pill">Podcasts &amp; Shows</button>
    <button class="ui-pill">Audiobooks</button>
    <button class="ui-pill">Episodes</button>
    <button class="ui-pill">Playlists</button>
    <button class="ui-pill">Artists</button>
  </div>
  <div class="ui-pills__chip-row">
    <span class="ui-pills__chip">
      <span class="ui-pills__chip-thumb" style="background:linear-gradient(135deg,#ff6437,#c2185b)"></span>
      Liked Songs
      <span class="ui-pills__chip-dot">●</span>
    </span>
    <span class="ui-pills__chip">
      <span class="ui-pills__chip-thumb" style="background:linear-gradient(135deg,#1db954,#0d4d2a)"></span>
      Discover Weekly
    </span>
    <span class="ui-pills__chip">
      <span class="ui-pills__chip-thumb" style="background:linear-gradient(135deg,#536dfe,#1e2a8a)"></span>
      Daily Mix 1
    </span>
  </div>
</div>

<style>
  .ui-pills-wrap{padding:18px;background:#121212;width:560px;border-radius:12px;font:14px Circular,-apple-system,'Segoe UI',sans-serif}
  .ui-pills{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}
  .ui-pill{padding:8px 16px;border:0;background:#232323;color:#fff;border-radius:999px;font:500 14px inherit;cursor:pointer;white-space:nowrap;transition:.1s}
  .ui-pill:hover{background:#2a2a2a}
  .ui-pill.is-active{background:#1db954;color:#000}
  .ui-pill.is-active:hover{background:#1ed760}
  .ui-pills__chip-row{display:flex;gap:8px;flex-wrap:wrap}
  .ui-pills__chip{display:inline-flex;align-items:center;gap:8px;padding:4px 12px 4px 4px;background:#232323;border-radius:999px;color:#fff;font:500 13px inherit}
  .ui-pills__chip-thumb{width:28px;height:28px;border-radius:50%;flex:none}
  .ui-pills__chip-dot{color:#1db954;font-size:10px}
</style>

<script>
  document.querySelectorAll('.ui-pill').forEach(p=>p.addEventListener('click',()=>{
    document.querySelectorAll('.ui-pill').forEach(x=>x.classList.remove('is-active'));p.classList.add('is-active');
  }));
</script>`,
    },
    {
      name: 'Command Palette',
      nameJa: 'コマンドパレット',
      desc: 'Cmd+Kで開くキーボード操作中心のクイック検索UI。コマンド実行や画面ジャンプに使う。',
      detail: 'コマンドパレットは、Cmd+K(Mac)やCtrl+K(Windows)などのショートカットで呼び出すモーダル型の検索UIで、入力するとアクション・ページ・設定が候補に並び、矢印キーとEnterで選択できます。VS Code、Notion、Linear、Slackなど開発者向け/生産性ツールで広く採用されており、マウスに手を伸ばさずあらゆる操作にアクセスできるのが魅力です。「思いついたらすぐ実行」というキーボード中心ユーザーの体験を圧倒的に向上させます。',
      descEn: 'A keyboard-driven quick search opened by Cmd+K that runs commands or jumps to pages.',
      detailEn: 'A command palette is a modal search UI summoned by a shortcut like Cmd+K on Mac or Ctrl+K on Windows. Typing instantly surfaces actions, pages, and settings as suggestions, and arrow keys plus Enter let you pick one. VS Code, Notion, Linear, and Slack have all adopted this pattern because it gives keyboard-centric users access to every feature without reaching for the mouse. It massively shortens the path from "I thought of something" to "I just did it."',
      code: `/* Inspired by Linear */
<div class="ui-cmdp-frame">
  <div class="ui-cmdp">
    <div class="ui-cmdp__panel">
      <div class="ui-cmdp__search">
        <span class="ui-cmdp__breadcrumb">ENG-2341</span>
        <input id="cpInput" type="text" placeholder="Type a command or search...">
      </div>
      <ul class="ui-cmdp__list">
        <li class="ui-cmdp__group">Suggestions</li>
        <li class="ui-cmdp__item is-active">
          <span class="ui-cmdp__ico" style="color:#f2c94c">◐</span><span>Change status...</span><kbd>S</kbd>
        </li>
        <li class="ui-cmdp__item">
          <span class="ui-cmdp__ico" style="color:#5e6ad2">◉</span><span>Change priority...</span><kbd>P</kbd>
        </li>
        <li class="ui-cmdp__item">
          <span class="ui-cmdp__ico">@</span><span>Assign to...</span><kbd>A</kbd>
        </li>
        <li class="ui-cmdp__item">
          <span class="ui-cmdp__ico">🏷</span><span>Add label...</span><kbd>L</kbd>
        </li>
        <li class="ui-cmdp__group">Navigation</li>
        <li class="ui-cmdp__item">
          <span class="ui-cmdp__ico">↗</span><span>Go to My Issues</span><kbd>G</kbd><kbd>M</kbd>
        </li>
        <li class="ui-cmdp__item">
          <span class="ui-cmdp__ico">📋</span><span>Open Triage</span><kbd>G</kbd><kbd>T</kbd>
        </li>
      </ul>
      <div class="ui-cmdp__foot">
        <kbd>↑</kbd><kbd>↓</kbd><span>to navigate</span>
        <kbd>↵</kbd><span>to select</span>
        <kbd>esc</kbd><span>to close</span>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-cmdp-frame{width:640px;height:420px;background:radial-gradient(circle at 20% 0%,#1a1b21,#08090a);padding:40px;border-radius:12px;font:13px Inter,-apple-system,'Segoe UI',sans-serif;color:#f7f8f8}
  .ui-cmdp{display:flex;justify-content:center}
  .ui-cmdp__panel{width:100%;max-width:560px;background:#1f2023;border:1px solid #2e2f33;border-radius:10px;box-shadow:0 30px 60px rgba(0,0,0,.5);overflow:hidden}
  .ui-cmdp__search{display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid #2a2b2f}
  .ui-cmdp__breadcrumb{background:#2a2b2f;color:#d0d6e0;padding:2px 8px;border-radius:4px;font:500 12px inherit}
  .ui-cmdp__search input{flex:1;border:0;outline:none;background:transparent;color:#f7f8f8;font:14px inherit}
  .ui-cmdp__search input::placeholder{color:#6b6f76}
  .ui-cmdp__list{list-style:none;margin:0;padding:4px;max-height:280px;overflow-y:auto}
  .ui-cmdp__group{padding:8px 10px 4px;font:600 11px inherit;color:#6b6f76;text-transform:uppercase;letter-spacing:.06em}
  .ui-cmdp__item{display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:5px;cursor:pointer;color:#d0d6e0}
  .ui-cmdp__item.is-active{background:#2a2b2f;color:#f7f8f8}
  .ui-cmdp__item:hover{background:#2a2b2f}
  .ui-cmdp__ico{width:16px;text-align:center;font-size:13px}
  .ui-cmdp__item span:nth-child(2){flex:1}
  .ui-cmdp__item kbd{padding:1px 6px;background:#2a2b2f;border:1px solid #3e3f44;border-radius:4px;font:600 11px ui-monospace,monospace;color:#a0a4ad;min-width:14px;text-align:center}
  .ui-cmdp__item.is-active kbd{background:#3e3f44}
  .ui-cmdp__foot{display:flex;align-items:center;gap:6px;padding:8px 14px;border-top:1px solid #2a2b2f;font:11px inherit;color:#6b6f76}
  .ui-cmdp__foot kbd{padding:1px 5px;background:#2a2b2f;border:1px solid #3e3f44;border-radius:3px;font:600 10px ui-monospace,monospace;color:#a0a4ad}
  .ui-cmdp__foot span{margin-right:8px}
</style>

<script>
  (function(){
    const items=document.querySelectorAll('.ui-cmdp__item');
    items.forEach(it=>it.addEventListener('mouseenter',()=>{items.forEach(x=>x.classList.remove('is-active'));it.classList.add('is-active')}));
  })();
</script>`,
    },
    {
      name: 'Status Dot',
      nameJa: 'ステータスドット',
      desc: 'オンライン・オフライン・離席を色付き丸で示す小さなインジケータ。アバター横に置く。',
      detail: 'ステータスドットは、ユーザーやサービスの状態を色付きの小さな丸で示す軽量なインジケータUIで、緑=オンライン、黄=離席、赤=取り込み中、灰=オフラインといった具合に色で意味を伝えるのが定番です。アバター画像の右下に重ねて配置するパターンが多く、SlackやTeams、Discordなどチャット系サービスでお馴染みです。テキストラベルなしでも一目で状態が分かる省スペースの強みがあり、テーブルやリストでも活躍します。',
      descEn: 'A tiny colored dot near an avatar indicating online, away, busy, or offline.',
      detailEn: 'A status dot is a small colored circle that signals a user\'s or service\'s state at a glance. The typical color code is green = online, yellow = away, red = busy/do not disturb, gray = offline. It is usually placed in the bottom-right corner of an avatar, a pattern familiar from Slack, Teams, and Discord. Its strength is delivering meaning without text labels, which keeps lists and tables compact while still conveying important status info.',
      code: `/* Inspired by Discord */
<div class="ui-status-list">
  <div class="ui-status-header">MEMBERS — 4</div>
  <div class="ui-status-section">ONLINE — 2</div>
  <div class="ui-status-row">
    <div class="ui-avatar" style="background:#5865f2"><span>R</span><i class="ui-status-dot ui-status-dot--online"></i></div>
    <div class="ui-status-info"><strong>ryosuke<span class="ui-status-tag">DEV</span></strong><small>Playing Cyberpunk 2077</small></div>
  </div>
  <div class="ui-status-row">
    <div class="ui-avatar" style="background:#eb459e"><span>n</span><i class="ui-status-dot ui-status-dot--streaming"></i></div>
    <div class="ui-status-info"><strong>nanase.</strong><small><span class="ui-status-live">🟣 Live on Twitch</span></small></div>
  </div>
  <div class="ui-status-section">IDLE — 1</div>
  <div class="ui-status-row">
    <div class="ui-avatar" style="background:#f0b232"><span>k</span><i class="ui-status-dot ui-status-dot--away"></i></div>
    <div class="ui-status-info"><strong>kenta_03</strong><small>Idle for 2h</small></div>
  </div>
  <div class="ui-status-section">DO NOT DISTURB — 1</div>
  <div class="ui-status-row">
    <div class="ui-avatar" style="background:#3ba55d"><span>m</span><i class="ui-status-dot ui-status-dot--busy"></i></div>
    <div class="ui-status-info"><strong>misaki</strong><small>In a meeting</small></div>
  </div>
</div>

<style>
  .ui-status-list{display:flex;flex-direction:column;width:260px;padding:8px;background:#2b2d31;font:14px 'gg sans','Whitney',-apple-system,sans-serif;color:#dbdee1}
  .ui-status-header{padding:8px 8px 4px;font:600 11px inherit;color:#949ba4;letter-spacing:.02em}
  .ui-status-section{padding:14px 8px 4px;font:600 11px inherit;color:#949ba4;letter-spacing:.04em}
  .ui-status-row{display:flex;align-items:center;gap:12px;padding:6px 8px;border-radius:4px;cursor:pointer}
  .ui-status-row:hover{background:#35373c;color:#fff}
  .ui-avatar{position:relative;width:32px;height:32px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font:600 14px inherit;flex:none}
  .ui-status-dot{position:absolute;right:-2px;bottom:-2px;width:12px;height:12px;border-radius:50%;border:3px solid #2b2d31;box-sizing:content-box}
  .ui-status-dot--online{background:#23a55a}
  .ui-status-dot--away{background:#f0b232}
  .ui-status-dot--busy{background:#f23f43;border-radius:2px;width:10px;height:4px;bottom:0;right:0}
  .ui-status-dot--streaming{background:#593695}
  .ui-status-info{display:flex;flex-direction:column;min-width:0}
  .ui-status-info strong{display:flex;align-items:center;gap:6px;font:600 14px inherit;color:#f2f3f5}
  .ui-status-tag{font:600 9px inherit;background:#5865f2;color:#fff;padding:1px 4px;border-radius:3px;letter-spacing:.05em}
  .ui-status-info small{font:12px inherit;color:#b5bac1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-status-live{color:#c084fc}
</style>`,
    },
    {
      name: 'Notification List',
      nameJa: '通知リスト',
      desc: 'タイトル・本文・時刻・未読マーク付きの通知一覧パネル。ベルアイコンから開く。',
      detail: '通知リストは、ベルアイコンや通知センターから開く一覧パネルで、各項目にタイトル、本文プレビュー、相対時刻(「3分前」など)、未読を示す青いドットを並べるのが定番構成です。未読は背景色や太字でも強調し、タップすると詳細画面に遷移します。Twitter、GitHub、各種SaaSで広く採用され、「全て既読にする」ボタンとフィルタータブを上部に置くと使いやすさが向上。ユーザーが見逃したくない更新を集約する重要なハブUIです。',
      descEn: 'A panel of notifications with title, preview, time, and unread markers, opened from a bell icon.',
      detailEn: 'A notification list is the panel that opens from a bell icon or notification center, showing each update with a title, preview text, a relative timestamp like "3 minutes ago," and a blue dot for unread items. Unread items are often highlighted with a tinted background or bold text, and tapping one navigates to a detail screen. Used by Twitter, GitHub, and many SaaS apps, adding a "Mark all read" button and filter tabs at the top makes it the hub for updates users don\'t want to miss.',
      code: `/* Inspired by GitHub */
<div class="ui-notif">
  <header class="ui-notif__head">
    <h3>Inbox</h3>
    <div class="ui-notif__tabs">
      <button class="is-active">Inbox <span>14</span></button>
      <button>Saved</button>
      <button>Done</button>
    </div>
    <button class="ui-notif__readall">✓ Mark all as done</button>
  </header>
  <ul class="ui-notif__list">
    <li class="ui-notif__item is-unread">
      <span class="ui-notif__type" style="color:#1a7f37">●</span>
      <div class="ui-notif__body">
        <p class="ui-notif__repo">facebook/react · #28934</p>
        <p class="ui-notif__title">[Compiler] Fix bailout when ref is in dependency array</p>
        <p class="ui-notif__meta"><span class="ui-notif__reason">Review requested</span> · <time>3m</time></p>
      </div>
      <span class="ui-notif__pr">PR</span>
    </li>
    <li class="ui-notif__item is-unread">
      <span class="ui-notif__type" style="color:#cf222e">●</span>
      <div class="ui-notif__body">
        <p class="ui-notif__repo">vercel/next.js · #65021</p>
        <p class="ui-notif__title">App Router: hydration mismatch with dynamic params</p>
        <p class="ui-notif__meta"><span>Mentioned by <strong>@leerob</strong></span> · <time>1h</time></p>
      </div>
      <span class="ui-notif__issue">!</span>
    </li>
    <li class="ui-notif__item">
      <span class="ui-notif__type" style="color:#8250df">●</span>
      <div class="ui-notif__body">
        <p class="ui-notif__repo">microsoft/vscode · #210456</p>
        <p class="ui-notif__title">Terminal: support OSC 133 prompt markers in zsh</p>
        <p class="ui-notif__meta"><span>Merged by <strong>@meganrogge</strong></span> · <time>yesterday</time></p>
      </div>
      <span class="ui-notif__merged">✓</span>
    </li>
    <li class="ui-notif__item">
      <span class="ui-notif__type" style="color:#1a7f37">●</span>
      <div class="ui-notif__body">
        <p class="ui-notif__repo">tailwindlabs/tailwindcss · v4.0.0</p>
        <p class="ui-notif__title">New release: Oxide engine GA</p>
        <p class="ui-notif__meta"><span>Subscribed</span> · <time>2d</time></p>
      </div>
      <span class="ui-notif__release">↗</span>
    </li>
  </ul>
</div>

<style>
  .ui-notif{width:560px;background:#0d1117;border:1px solid #30363d;border-radius:6px;overflow:hidden;font:13px -apple-system,'Segoe UI',sans-serif;color:#e6edf3}
  .ui-notif__head{padding:12px 16px;border-bottom:1px solid #21262d;display:flex;flex-wrap:wrap;align-items:center;gap:12px}
  .ui-notif__head h3{margin:0;font:600 16px inherit;color:#e6edf3;flex:1}
  .ui-notif__tabs{display:flex;gap:4px;width:100%;order:2}
  .ui-notif__tabs button{padding:4px 10px;background:transparent;border:0;color:#7d8590;font:500 13px inherit;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px}
  .ui-notif__tabs button.is-active{background:#21262d;color:#e6edf3}
  .ui-notif__tabs button span{background:#30363d;padding:0 6px;border-radius:10px;font-size:11px}
  .ui-notif__readall{background:transparent;border:1px solid #30363d;color:#7d8590;font:500 12px inherit;padding:3px 8px;border-radius:6px;cursor:pointer}
  .ui-notif__list{list-style:none;margin:0;padding:0;max-height:420px;overflow-y:auto}
  .ui-notif__item{display:flex;align-items:flex-start;gap:10px;padding:12px 16px;border-bottom:1px solid #21262d;cursor:pointer}
  .ui-notif__item:hover{background:#161b22}
  .ui-notif__item.is-unread{background:rgba(56,139,253,.06)}
  .ui-notif__item.is-unread .ui-notif__title{color:#e6edf3;font-weight:600}
  .ui-notif__type{font-size:10px;margin-top:6px}
  .ui-notif__item:not(.is-unread) .ui-notif__type{color:transparent !important;border:2px solid #30363d;border-radius:50%;width:6px;height:6px;display:inline-block;font-size:0;margin-top:8px}
  .ui-notif__body{flex:1;min-width:0}
  .ui-notif__repo{margin:0;font:600 12px ui-monospace,'SF Mono',monospace;color:#7d8590}
  .ui-notif__title{margin:2px 0;font:400 14px inherit;color:#a0a4ad;line-height:1.4}
  .ui-notif__meta{margin:4px 0 0;font:12px inherit;color:#7d8590}
  .ui-notif__reason{color:#d29922}
  .ui-notif__meta strong{color:#58a6ff;font-weight:500}
  .ui-notif__pr,.ui-notif__issue,.ui-notif__merged,.ui-notif__release{flex:none;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:600 11px inherit;color:#fff}
  .ui-notif__pr{background:#1f6feb}
  .ui-notif__issue{background:#cf222e}
  .ui-notif__merged{background:#8250df}
  .ui-notif__release{background:#1a7f37}
</style>

<script>
  document.querySelectorAll('.ui-notif__item').forEach(it=>it.addEventListener('click',()=>it.classList.remove('is-unread')));
  document.querySelector('.ui-notif__readall').addEventListener('click',()=>{
    document.querySelectorAll('.ui-notif__item.is-unread').forEach(it=>it.classList.remove('is-unread'));
  });
</script>`,
    },
  ],
}
