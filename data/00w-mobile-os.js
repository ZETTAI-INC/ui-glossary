/**
 * UI Parts Showcase (Mobile OS) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-mobile-os',
  title: 'モバイルOS UI',
  titleEn: 'Mobile OS UI',
  description: 'iOS・Android・watchOS などのOSレベルでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'iOS Lock Screen Notification',
      nameJa: 'iOSロック画面の通知',
      desc: 'すりガラス風の四角いカードに、アプリアイコン・タイトル・本文がまとまった通知UI。',
      detail: 'iPhoneのロック画面でおなじみの、フロストガラス(すりガラス)風の通知カードです。左上に角丸のアプリアイコン、その横にアプリ名と時刻、下にタイトルと本文が並ぶシンプルな構成で、背景が透けて見えることで「画面の上に重なっている感」を演出しています。メッセージや配達通知、SNSの新着など、ユーザーが今すぐ確認すべき情報を最小限の領域で伝えるのに最適です。',
      descEn: 'A frosted-glass card showing an app icon, title, and body — the classic iOS lock-screen notification.',
      detailEn: 'The familiar iOS lock-screen notification: a rounded card with a faint frosted-glass (blur) background, an app icon in the top-left, the app name and time next to it, then a title and a body line below. The translucent background gives it that floating-on-top feel. It is perfect for showing the smallest possible piece of urgent info — a new message, a delivery update, a social mention — without dragging the user into the app.',
      code: `<!-- Inspired by iOS (Apple) -->
<div class="ui-iosnoti-wrap">
  <div class="ui-iosnoti-card">
    <div class="ui-iosnoti-icon" style="background:linear-gradient(180deg,#34c759,#2bb24c)">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
    </div>
    <div class="ui-iosnoti-body">
      <div class="ui-iosnoti-head">
        <span class="ui-iosnoti-app">メッセージ</span>
        <span class="ui-iosnoti-time">今</span>
      </div>
      <div class="ui-iosnoti-title">山田 さくら</div>
      <div class="ui-iosnoti-text">今夜の集合、19時で大丈夫?場所は前と同じカフェで！</div>
    </div>
  </div>
</div>

<style>
  .ui-iosnoti-wrap{padding:28px;background:linear-gradient(135deg,#3a4f6e 0%,#1f2a3c 60%,#0e1422 100%);border-radius:18px;font-family:-apple-system,"SF Pro Text","Helvetica Neue",sans-serif}
  .ui-iosnoti-card{display:flex;gap:10px;align-items:flex-start;max-width:360px;padding:12px 14px 13px;border-radius:18px;background:rgba(255,255,255,.18);backdrop-filter:blur(22px) saturate(180%);-webkit-backdrop-filter:blur(22px) saturate(180%);box-shadow:0 1px 0 rgba(255,255,255,.18) inset,0 12px 30px rgba(0,0,0,.35);color:#fff}
  .ui-iosnoti-icon{flex:none;width:38px;height:38px;border-radius:9px;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(0,0,0,.2)}
  .ui-iosnoti-body{flex:1;min-width:0}
  .ui-iosnoti-head{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:rgba(255,255,255,.78);margin-bottom:1px}
  .ui-iosnoti-app{font-weight:500;letter-spacing:.01em}
  .ui-iosnoti-time{font-size:12.5px}
  .ui-iosnoti-title{font-size:15px;font-weight:600;letter-spacing:-.01em;margin-bottom:1px}
  .ui-iosnoti-text{font-size:14.5px;line-height:1.32;color:rgba(255,255,255,.94);overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
</style>`,
    },
    {
      name: 'iOS Control Center Tile Cluster',
      nameJa: 'iOSコントロールセンターのタイル群',
      desc: 'すりガラスの四角いタイルが2×2で並び、Bluetooth・Wi-Fi・AirDrop・ライトをまとめて切り替える。',
      detail: 'iPhoneを右上から下にスワイプすると出てくる、コントロールセンターの接続系タイル群です。1つのまとまった半透明パネルの中に、丸いアイコン+ラベル付きの正方形タイルが配置され、有効なタイルは青や緑にハイライトされます。Bluetooth、Wi-Fi、AirDrop、フラッシュライトのように「片手で素早く切り替えたい設定」をまとめるのにぴったりのレイアウトです。',
      descEn: 'A 2×2 cluster of frosted-glass tiles that toggles Bluetooth, Wi-Fi, AirDrop, and Flashlight at once.',
      detailEn: 'The connectivity cluster from iOS Control Center — that panel you get by swiping down from the top-right. A single translucent rounded container holds square tiles, each with a round colored icon and a small label below. Active tiles light up (blue, green) while inactive ones stay neutral. It is the canonical layout for "settings I want to flip with one thumb": Bluetooth, Wi-Fi, AirDrop, Flashlight.',
      code: `<!-- Inspired by iOS Control Center -->
<div class="ui-cct-wrap">
  <div class="ui-cct-panel">
    <button class="ui-cct-tile is-on">
      <span class="ui-cct-dot" style="background:#0a84ff">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff"><path d="M13 3v8.59L9.7 8.3 8.3 9.7l4.6 4.6-4.6 4.6 1.4 1.4 4.7-4.7V21h.5l5-5-3.6-4 3.6-4-5-5H13Zm2 4 2 2-2 2V7Zm0 8 2 2-2 2v-4Z"/></svg>
      </span>
      <span class="ui-cct-lbl">Bluetooth</span>
    </button>
    <button class="ui-cct-tile is-on">
      <span class="ui-cct-dot" style="background:#0a84ff">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff"><path d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-4.5c2 0 3.8.7 5.2 2l-1.4 1.4a5.4 5.4 0 0 0-7.6 0L6.8 15.5A7.4 7.4 0 0 1 12 13.5Zm0-4a11 11 0 0 1 7.8 3.2l-1.4 1.4a9 9 0 0 0-12.8 0L4.2 12.7A11 11 0 0 1 12 9.5Zm0-4c4.3 0 8.2 1.7 11 4.5l-1.4 1.4a13.6 13.6 0 0 0-19.2 0L1 10A15.6 15.6 0 0 1 12 5.5Z"/></svg>
      </span>
      <span class="ui-cct-lbl">Wi-Fi</span>
    </button>
    <button class="ui-cct-tile">
      <span class="ui-cct-dot" style="background:rgba(120,120,128,.32)">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff"><path d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3Zm4 5-4 4-4-4h3V3h2v5h3Z"/></svg>
      </span>
      <span class="ui-cct-lbl">AirDrop</span>
    </button>
    <button class="ui-cct-tile">
      <span class="ui-cct-dot" style="background:rgba(255,255,255,.95)">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#222"><path d="M9 2h6l1 6-4 14-4-14 1-6Zm1.5 1.5-.7 4.5h4.4l-.7-4.5h-3Z"/></svg>
      </span>
      <span class="ui-cct-lbl">ライト</span>
    </button>
  </div>
</div>

<style>
  .ui-cct-wrap{padding:30px;background:linear-gradient(160deg,#0b1020 0%,#1f253a 100%);border-radius:24px;font-family:-apple-system,"SF Pro Text",sans-serif}
  .ui-cct-panel{display:grid;grid-template-columns:1fr 1fr;gap:2px;width:200px;padding:8px;border-radius:24px;background:rgba(255,255,255,.16);backdrop-filter:blur(28px) saturate(180%);-webkit-backdrop-filter:blur(28px) saturate(180%);box-shadow:0 1px 0 rgba(255,255,255,.18) inset}
  .ui-cct-tile{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;height:88px;border:0;border-radius:16px;background:transparent;cursor:pointer;color:#fff;transition:background .15s}
  .ui-cct-tile:hover{background:rgba(255,255,255,.06)}
  .ui-cct-tile.is-on .ui-cct-dot{box-shadow:0 0 0 2px rgba(255,255,255,.08)}
  .ui-cct-dot{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center}
  .ui-cct-lbl{font-size:11px;letter-spacing:-.01em;color:rgba(255,255,255,.92)}
</style>`,
    },
    {
      name: 'Material 3 Segmented Button',
      nameJa: 'Material 3 セグメントボタン',
      desc: '3つのトグルボタンが角丸の枠で連結した、Android Material You風のピル型UI。',
      detail: 'Googleのデザインシステム「Material 3」で定義されている、セグメントボタン(Segmented button)です。複数のボタンが1つのピル型(両端だけ丸い長方形)の中に並び、選択中のボタンだけがアクセント色で塗りつぶされ、左にチェックマークが現れます。「日 / 週 / 月」のような少数の排他的な選択肢を、タブよりもコンパクトに見せたいときに便利です。',
      descEn: 'A pill of three connected toggle buttons in Android Material You / Material 3 style.',
      detailEn: 'The segmented button from Google\'s Material 3 design system. Several buttons sit inside one pill-shaped (rounded-rectangle) container; the selected one is filled with the accent color and gets a small check icon to its left. It is great for showing 2–5 mutually exclusive choices — "Day / Week / Month", "List / Grid / Map" — in a tighter footprint than tabs.',
      code: `<!-- Inspired by Android Material You -->
<div class="ui-m3seg-wrap">
  <div class="ui-m3seg" role="group" id="m3seg">
    <button class="ui-m3seg__btn is-selected" data-v="day">
      <svg class="ui-m3seg__check" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="m9 16.2-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5Z"/></svg>
      <span>日</span>
    </button>
    <button class="ui-m3seg__btn" data-v="week">
      <svg class="ui-m3seg__check" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="m9 16.2-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5Z"/></svg>
      <span>週</span>
    </button>
    <button class="ui-m3seg__btn" data-v="month">
      <svg class="ui-m3seg__check" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="m9 16.2-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5Z"/></svg>
      <span>月</span>
    </button>
  </div>
</div>

<style>
  .ui-m3seg-wrap{padding:32px;background:#fef7ff;border-radius:18px;font-family:Roboto,"Google Sans",-apple-system,sans-serif}
  .ui-m3seg{display:inline-flex;border:1px solid #79747e;border-radius:100px;overflow:hidden;background:transparent}
  .ui-m3seg__btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-width:88px;height:40px;padding:0 16px;border:0;border-right:1px solid #79747e;background:transparent;color:#1d1b20;font:500 14px Roboto,sans-serif;letter-spacing:.01em;cursor:pointer;transition:background .15s}
  .ui-m3seg__btn:last-child{border-right:0}
  .ui-m3seg__btn:hover{background:rgba(103,80,164,.08)}
  .ui-m3seg__check{opacity:0;width:0;transition:opacity .15s,width .15s;color:#1d192b}
  .ui-m3seg__btn.is-selected{background:#e8def8;color:#1d192b}
  .ui-m3seg__btn.is-selected .ui-m3seg__check{opacity:1;width:16px;margin-right:2px}
</style>

<script>
  (function(){
    const root=document.getElementById('m3seg');
    root.querySelectorAll('.ui-m3seg__btn').forEach(b=>b.addEventListener('click',()=>{
      root.querySelectorAll('.ui-m3seg__btn').forEach(x=>x.classList.remove('is-selected'));
      b.classList.add('is-selected');
    }));
  })();
</script>`,
    },
    {
      name: 'iOS Picker Wheel',
      nameJa: 'iOSピッカーホイール',
      desc: '上下にスクロールして値を選ぶ、選択中の行だけハイライトされる回転ドラム風の選択UI。',
      detail: 'iOSの日付・時刻ピッカーでおなじみの、縦に回転するドラム式のセレクタです。中央に水平な薄い帯があり、その帯の上にある行が選択値、上下の行は端に向かってフェードしていきます。本物のスロットマシンのリールのようなパースペクティブと、慣性スクロールの感触がiOSらしい体験を生みます。日付・時間・タイマー・国コードなど、連続的な値を片手で選びたい場面で活躍します。',
      descEn: 'A vertically scrolling drum-style selector where only the centered row is highlighted — like an iOS date picker.',
      detailEn: 'The familiar iOS picker wheel from date / time / timer pickers: a vertical drum where the row inside the center band is the selected value, and the rows above and below fade toward the edges in a 3D-feeling perspective. The illusion of a real slot-machine reel plus iOS\'s inertial scroll is what makes it feel native. Use it whenever a user needs to pick a value out of a continuous range — dates, times, durations, country codes — with one thumb.',
      code: `<!-- Inspired by iOS (Apple) -->
<div class="ui-iospk-wrap">
  <div class="ui-iospk">
    <div class="ui-iospk__col">
      <div class="ui-iospk__list">
        <div class="ui-iospk__item">9</div>
        <div class="ui-iospk__item">10</div>
        <div class="ui-iospk__item is-sel">11</div>
        <div class="ui-iospk__item">12</div>
        <div class="ui-iospk__item">13</div>
      </div>
    </div>
    <div class="ui-iospk__col">
      <div class="ui-iospk__list">
        <div class="ui-iospk__item">28</div>
        <div class="ui-iospk__item">29</div>
        <div class="ui-iospk__item is-sel">30</div>
        <div class="ui-iospk__item">31</div>
        <div class="ui-iospk__item">32</div>
      </div>
    </div>
    <div class="ui-iospk__col ui-iospk__col--ampm">
      <div class="ui-iospk__list">
        <div class="ui-iospk__item">&nbsp;</div>
        <div class="ui-iospk__item">AM</div>
        <div class="ui-iospk__item is-sel">PM</div>
        <div class="ui-iospk__item">&nbsp;</div>
        <div class="ui-iospk__item">&nbsp;</div>
      </div>
    </div>
    <div class="ui-iospk__band"></div>
  </div>
</div>

<style>
  .ui-iospk-wrap{padding:36px;background:#1c1c1e;border-radius:20px;font-family:-apple-system,"SF Pro Text",sans-serif;display:flex;justify-content:center}
  .ui-iospk{position:relative;display:flex;gap:0;width:280px;height:180px;background:#2c2c2e;border-radius:14px;overflow:hidden}
  .ui-iospk__col{flex:1;position:relative;display:flex;align-items:center;justify-content:center;color:#fff}
  .ui-iospk__col--ampm{flex:.7}
  .ui-iospk__list{display:flex;flex-direction:column;gap:0;width:100%;text-align:center;font:400 22px -apple-system,sans-serif;font-variant-numeric:tabular-nums}
  .ui-iospk__item{padding:4px 0;color:rgba(235,235,245,.32);transform-origin:center}
  .ui-iospk__item:nth-child(1){opacity:.35;transform:translateY(2px) scale(.78)}
  .ui-iospk__item:nth-child(2){opacity:.6;transform:scale(.9)}
  .ui-iospk__item.is-sel{color:#fff;font-weight:500;font-size:24px}
  .ui-iospk__item:nth-child(4){opacity:.6;transform:scale(.9)}
  .ui-iospk__item:nth-child(5){opacity:.35;transform:translateY(-2px) scale(.78)}
  .ui-iospk__band{position:absolute;left:8px;right:8px;top:50%;transform:translateY(-50%);height:36px;background:rgba(118,118,128,.24);border-radius:8px;pointer-events:none}
</style>`,
    },
    {
      name: 'iOS Action Sheet',
      nameJa: 'iOSアクションシート',
      desc: '画面下から出るボタンのリスト。下端にだけ独立した「キャンセル」が並ぶ。',
      detail: 'iOSで「写真ライブラリから選択」「写真を撮る」「ファイルを選択」のような選択肢を出すときの、画面下からせり上がるシートです。上のグループは項目をまとめた角丸のカード、その下に少し離れて「キャンセル」ボタンが単独で並ぶのが特徴。破壊的操作(削除など)は赤文字で示し、ユーザーが意図せず実行しないようにします。スマホの親指の届く範囲にすべてのボタンが収まる、片手前提の設計です。',
      descEn: 'A bottom sheet of choices with the Cancel button visually separated below the main group.',
      detailEn: 'The iOS action sheet that slides up from the bottom when you tap "Share" or a "•••" menu — used for choices like "Take Photo / Choose from Library / Choose File". The choices live in one rounded card, then Cancel sits in its own slightly separated card below it. Destructive options (Delete) are red so users can\'t fire them by accident. Everything is reachable by a thumb because the whole sheet sticks to the bottom of the screen.',
      code: `<!-- Inspired by iOS (Apple) -->
<div class="ui-iosas-wrap">
  <div class="ui-iosas-bg"></div>
  <div class="ui-iosas">
    <div class="ui-iosas__group">
      <div class="ui-iosas__title">写真を追加</div>
      <button class="ui-iosas__btn">写真を撮る</button>
      <button class="ui-iosas__btn">フォトライブラリから選択</button>
      <button class="ui-iosas__btn">ファイルを選択</button>
      <button class="ui-iosas__btn ui-iosas__btn--danger">投稿を削除</button>
    </div>
    <button class="ui-iosas__cancel">キャンセル</button>
  </div>
</div>

<style>
  .ui-iosas-wrap{position:relative;width:320px;height:400px;background:#fff;border-radius:24px;overflow:hidden;font-family:-apple-system,"SF Pro Text",sans-serif;margin:0 auto}
  .ui-iosas-bg{position:absolute;inset:0;background:linear-gradient(180deg,#f2f2f7 0%,#e3e3ea 100%);filter:brightness(.6)}
  .ui-iosas{position:absolute;left:8px;right:8px;bottom:10px;display:flex;flex-direction:column;gap:8px}
  .ui-iosas__group{background:rgba(245,245,247,.86);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border-radius:14px;overflow:hidden}
  .ui-iosas__title{padding:14px 16px 10px;font-size:13px;color:#8e8e93;text-align:center;border-bottom:.5px solid rgba(60,60,67,.18)}
  .ui-iosas__btn{display:block;width:100%;padding:16px;border:0;background:transparent;font:400 18px -apple-system,sans-serif;color:#007aff;cursor:pointer;border-bottom:.5px solid rgba(60,60,67,.18)}
  .ui-iosas__btn:last-child{border-bottom:0}
  .ui-iosas__btn:hover{background:rgba(0,0,0,.04)}
  .ui-iosas__btn--danger{color:#ff3b30}
  .ui-iosas__cancel{display:block;width:100%;padding:16px;border:0;background:rgba(255,255,255,.92);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border-radius:14px;font:600 18px -apple-system,sans-serif;color:#007aff;cursor:pointer}
  .ui-iosas__cancel:hover{background:#fff}
</style>`,
    },
    {
      name: 'Material Floating Action Button',
      nameJa: 'マテリアルFAB(フローティングアクションボタン)',
      desc: '画面右下にぽっかり浮かぶ丸い影付きボタン。アプリの主要アクション(+作成など)を担う。',
      detail: 'Androidのマテリアルデザインを象徴する、画面右下に浮かぶ丸いボタン(Floating Action Button、略してFAB)です。背景より一段高い位置に「浮かんでいる」ように見える影が付き、内側のアイコンでそのアプリの最も重要な操作を表します。Gmailなら「メール作成」、Googleカレンダーなら「予定の追加」、Google Mapsなら「現在地」など、画面を横断して常に存在し続ける唯一の主要アクションに使うのが原則です。',
      descEn: 'A round shadowed button hovering at the bottom-right corner that triggers an app\'s primary action (+create, etc).',
      detailEn: 'The icon of Material Design itself: a circular button hovering at the bottom-right of the screen, called a Floating Action Button (FAB). A soft drop-shadow makes it look genuinely lifted off the surface, and the icon inside represents the screen\'s single most important action — Compose in Gmail, "Add event" in Google Calendar, "Recenter" in Google Maps. The convention is one FAB per screen, holding the one action you most want users to take.',
      code: `<!-- Inspired by Android Material You -->
<div class="ui-fab-stage">
  <div class="ui-fab-list">
    <div class="ui-fab-row">
      <div class="ui-fab-row__dot"></div>
      <div class="ui-fab-row__bar"></div>
    </div>
    <div class="ui-fab-row">
      <div class="ui-fab-row__dot"></div>
      <div class="ui-fab-row__bar" style="width:60%"></div>
    </div>
    <div class="ui-fab-row">
      <div class="ui-fab-row__dot"></div>
      <div class="ui-fab-row__bar" style="width:75%"></div>
    </div>
    <div class="ui-fab-row">
      <div class="ui-fab-row__dot"></div>
      <div class="ui-fab-row__bar" style="width:50%"></div>
    </div>
  </div>
  <button class="ui-fab" aria-label="新規作成">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6Z"/></svg>
  </button>
</div>

<style>
  .ui-fab-stage{position:relative;width:320px;height:280px;background:#fef7ff;border-radius:20px;overflow:hidden;font-family:Roboto,"Google Sans",sans-serif;padding:18px;box-sizing:border-box}
  .ui-fab-list{display:flex;flex-direction:column;gap:14px;padding-top:4px}
  .ui-fab-row{display:flex;align-items:center;gap:12px}
  .ui-fab-row__dot{width:36px;height:36px;border-radius:50%;background:#e8def8;flex:none}
  .ui-fab-row__bar{height:10px;border-radius:5px;background:#eaddff;width:80%}
  .ui-fab{position:absolute;right:16px;bottom:16px;width:56px;height:56px;border-radius:18px;border:0;background:#6750a4;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 10px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12);transition:transform .15s,box-shadow .15s}
  .ui-fab:hover{box-shadow:0 8px 14px rgba(0,0,0,.18),0 4px 8px rgba(0,0,0,.14);background:#735bb6}
  .ui-fab:active{transform:translateY(1px)}
</style>`,
    },
    {
      name: 'iOS Status Bar',
      nameJa: 'iOSステータスバー',
      desc: '画面最上部にある、時刻・通信バー・Wi-Fi・バッテリーが一列に並ぶシステム表示。',
      detail: 'iPhoneの一番上に常駐している、左端に時刻、右端に通信状態・Wi-Fi・バッテリー残量がコンパクトに並ぶシステムUIです。Dynamic Island やノッチを挟んで左右に分かれているのが現代iOSの特徴で、文字は太めのSF Pro、アイコンは縁を細く整えて視認性と上品さを両立しています。アプリやWebの「iPhoneっぽい画面」を表現するためのモックアップ用パーツとしてもよく使われます。',
      descEn: 'The very top system row of an iPhone: time on the left, signal bars + Wi-Fi + battery on the right.',
      detailEn: 'The always-on row at the top of every iPhone screen: bold time on the left, then signal bars, Wi-Fi, and battery on the right. Modern iOS splits the bar around the Dynamic Island / notch, with the SF Pro typeface and thin-line glyphs keeping it readable while still feeling refined. It is also a staple for mockups — drop this bar at the top of any phone-shaped frame and the screen instantly reads as "iOS".',
      code: `<!-- Inspired by iOS (Apple) -->
<div class="ui-iossb-wrap">
  <div class="ui-iossb">
    <div class="ui-iossb__left">9:41</div>
    <div class="ui-iossb__notch"></div>
    <div class="ui-iossb__right">
      <div class="ui-iossb__bars" aria-label="通信4本">
        <span style="height:4px"></span>
        <span style="height:6px"></span>
        <span style="height:8px"></span>
        <span style="height:10px"></span>
      </div>
      <svg class="ui-iossb__wifi" viewBox="0 0 16 12" width="16" height="12" fill="#fff"><path d="M8 11.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm-3.2-3.2 1 1a3 3 0 0 1 4.4 0l1-1a4.4 4.4 0 0 0-6.4 0Zm-2-2 1 1a5.9 5.9 0 0 1 8.4 0l1-1a7.3 7.3 0 0 0-10.4 0Zm-2-2 1 1a8.8 8.8 0 0 1 12.4 0l1-1a10.2 10.2 0 0 0-14.4 0Z"/></svg>
      <div class="ui-iossb__bat">
        <div class="ui-iossb__bat-shell">
          <div class="ui-iossb__bat-fill" style="width:72%"></div>
        </div>
        <div class="ui-iossb__bat-tip"></div>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-iossb-wrap{padding:28px;background:#0b0d12;border-radius:18px;display:flex;justify-content:center;font-family:-apple-system,"SF Pro Text",sans-serif}
  .ui-iossb{position:relative;display:flex;align-items:center;justify-content:space-between;width:340px;height:44px;padding:0 22px;background:#000;border-radius:36px 36px 14px 14px;color:#fff}
  .ui-iossb__left{font:600 16px -apple-system,sans-serif;letter-spacing:-.01em;font-variant-numeric:tabular-nums}
  .ui-iossb__notch{position:absolute;left:50%;top:6px;transform:translateX(-50%);width:108px;height:32px;background:#000;border-radius:20px;border:1px solid #111}
  .ui-iossb__right{display:flex;align-items:center;gap:6px}
  .ui-iossb__bars{display:flex;align-items:flex-end;gap:2px;height:10px}
  .ui-iossb__bars span{width:3px;background:#fff;border-radius:1px;display:block}
  .ui-iossb__wifi{display:block}
  .ui-iossb__bat{display:flex;align-items:center;gap:1px}
  .ui-iossb__bat-shell{width:25px;height:11px;border:1px solid rgba(255,255,255,.45);border-radius:3px;padding:1px;box-sizing:border-box}
  .ui-iossb__bat-fill{height:100%;background:#fff;border-radius:1.5px}
  .ui-iossb__bat-tip{width:1.5px;height:4px;background:rgba(255,255,255,.45);border-radius:0 1px 1px 0}
</style>`,
    },
    {
      name: 'Android System Bottom Nav',
      nameJa: 'Androidシステムボトムナビ',
      desc: '画面下端にある「戻る」「ホーム」「最近」3つの円形ボタンが横並びになったシステムバー。',
      detail: 'Androidスマホの画面最下部にある、3ボタン式のシステムナビゲーションバーです。左から順に「戻る(◁)」「ホーム(○)」「最近使ったアプリ(□)」の3つのアイコンが等間隔に並びます。近年はジェスチャー操作も普及していますが、3ボタン式は依然として「Androidらしさ」を強く表現するUIで、エミュレーター画面やプレゼン資料、アプリのチュートリアル画面のモックでもよく使われます。',
      descEn: 'The bottom system bar of Android phones: three round pill icons for Back, Home, and Recents.',
      detailEn: 'The three-button system navigation bar that sits at the very bottom of an Android device: Back (◁), Home (○), and Recents (□), evenly spaced. Modern Android also supports gesture navigation, but the three-button layout still reads instantly as "Android" — which is why you see it in emulator screens, slide decks, and app tutorial mockups whenever someone wants the bar to scream the brand of the OS.',
      code: `<!-- Inspired by Android (Google) -->
<div class="ui-asnav-stage">
  <div class="ui-asnav-screen">
    <div class="ui-asnav-screen__body">
      <div class="ui-asnav-screen__bar" style="width:60%"></div>
      <div class="ui-asnav-screen__bar" style="width:80%"></div>
      <div class="ui-asnav-screen__bar" style="width:45%"></div>
    </div>
    <nav class="ui-asnav" aria-label="システムナビ">
      <button class="ui-asnav__btn" aria-label="戻る">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M14 6 8 12l6 6V6Z"/></svg>
      </button>
      <button class="ui-asnav__btn" aria-label="ホーム">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="7"/></svg>
      </button>
      <button class="ui-asnav__btn" aria-label="最近のアプリ">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" stroke-width="2"><rect x="6" y="6" width="12" height="12" rx="1"/></svg>
      </button>
    </nav>
  </div>
</div>

<style>
  .ui-asnav-stage{padding:20px;background:#202124;border-radius:22px;display:flex;justify-content:center;font-family:Roboto,sans-serif}
  .ui-asnav-screen{width:280px;border-radius:18px;overflow:hidden;background:#fef7ff;display:flex;flex-direction:column}
  .ui-asnav-screen__body{flex:1;padding:24px 18px;display:flex;flex-direction:column;gap:14px;min-height:170px}
  .ui-asnav-screen__bar{height:12px;border-radius:6px;background:#eaddff}
  .ui-asnav{display:flex;justify-content:space-around;align-items:center;height:54px;background:#000;color:#fff}
  .ui-asnav__btn{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border:0;background:transparent;border-radius:50%;cursor:pointer;transition:background .15s}
  .ui-asnav__btn:hover{background:rgba(255,255,255,.08)}
</style>`,
    },
    {
      name: 'iOS Swipe-to-Delete Row',
      nameJa: 'iOSスワイプ削除リスト',
      desc: 'リスト項目を左にスライドすると、右端に赤い「削除」ボタンが現れる定番UI。',
      detail: 'iOSのメール・メモ・リマインダー・メッセージなど、リスト系画面で必ず登場する操作パターンです。指で行を左にスワイプすると、行の右側から赤い「削除」ボタン(その手前にアーカイブやフラグなど補助アクションが現れることも)が顔を出します。タップで実行、行を右に戻すとキャンセル、というだけのシンプルな動きですが、画面に余計なボタンを出さなくていいので、すっきりした一覧表示と強力な編集機能を両立できます。',
      descEn: 'The classic iOS pattern: slide a list row to the left and a red Delete button reveals from the right edge.',
      detailEn: 'The swipe-to-delete pattern you see in iOS Mail, Notes, Reminders, and Messages. Drag a row to the left with your finger and a red "Delete" button (sometimes with a secondary Archive or Flag in front of it) slides in from the right edge. Tap it to confirm, swipe back to cancel — that\'s the whole interaction. It is loved by designers because it keeps the list visually clean while still exposing powerful destructive actions.',
      code: `<!-- Inspired by iOS (Apple) Mail -->
<div class="ui-iswd-wrap">
  <div class="ui-iswd-list">
    <div class="ui-iswd-row">
      <div class="ui-iswd-row__content">
        <div class="ui-iswd-row__title">Apple</div>
        <div class="ui-iswd-row__sub">Your order has shipped</div>
      </div>
      <div class="ui-iswd-row__time">9:41</div>
    </div>
    <div class="ui-iswd-row ui-iswd-row--open">
      <div class="ui-iswd-row__content">
        <div class="ui-iswd-row__title">山田 さくら</div>
        <div class="ui-iswd-row__sub">明日の打ち合わせ、14時で大丈夫ですか？</div>
      </div>
      <div class="ui-iswd-row__time">昨日</div>
      <button class="ui-iswd-row__del">削除</button>
    </div>
    <div class="ui-iswd-row">
      <div class="ui-iswd-row__content">
        <div class="ui-iswd-row__title">GitHub</div>
        <div class="ui-iswd-row__sub">[PR] feat: add dark mode toggle</div>
      </div>
      <div class="ui-iswd-row__time">月</div>
    </div>
  </div>
</div>

<style>
  .ui-iswd-wrap{max-width:420px;padding:18px;background:#f2f2f7;border-radius:16px;font-family:-apple-system,"SF Pro Text",sans-serif}
  .ui-iswd-list{background:#fff;border-radius:12px;overflow:hidden}
  .ui-iswd-row{position:relative;display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:.5px solid rgba(60,60,67,.18);background:#fff;transform:translateX(0);transition:transform .25s}
  .ui-iswd-row:last-child{border-bottom:0}
  .ui-iswd-row__content{flex:1;min-width:0}
  .ui-iswd-row__title{font-size:15px;font-weight:600;color:#000;letter-spacing:-.01em;margin-bottom:2px}
  .ui-iswd-row__sub{font-size:13px;color:rgba(60,60,67,.6);line-height:1.3;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
  .ui-iswd-row__time{font-size:13px;color:rgba(60,60,67,.6);flex:none}
  .ui-iswd-row__del{position:absolute;top:0;right:-78px;width:78px;height:100%;border:0;background:#ff3b30;color:#fff;font:500 15px -apple-system,sans-serif;cursor:pointer}
  .ui-iswd-row--open{transform:translateX(-78px)}
</style>`,
    },
    {
      name: 'Material Chip Set',
      nameJa: 'マテリアル チップセット',
      desc: '小さな角丸の「タグ」ボタンが横並びになり、選択中はチェック付きで色が変わる。',
      detail: 'Material 3で使われる、フィルタや属性選択のための小さなボタンの集合体「チップ(Chip)」です。1つ1つは角の丸い小さな矩形で、選択するとアクセント色で塗りつぶされて先頭にチェックアイコンが現れます。Gmailの「未読」「重要」、Google Mapsの「カフェ」「レストラン」、Google Photosの「人」「場所」「物」のように、一覧をフィルタしたり、ユーザーに複数選ばせたい場面で気軽に使えるのが利点です。',
      descEn: 'A row of small rounded "tag" buttons; selected chips fill with the accent color and gain a check icon.',
      detailEn: 'Material 3 chips: small rounded-rectangle controls used to filter a list or let users pick several attributes at once. Tapping a chip fills it with the accent color and adds a leading check icon. You see chips in Gmail ("Unread", "Important"), Google Maps ("Cafés", "Restaurants"), and Google Photos ("People", "Places", "Things") — anywhere a single tap on a tag-shaped button is the fastest way to slice a list.',
      code: `<!-- Inspired by Android Material You -->
<div class="ui-mchip-wrap">
  <div class="ui-mchip-row" id="mchipRow">
    <button class="ui-mchip is-on">
      <svg class="ui-mchip__check" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="m9 16.2-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5Z"/></svg>
      <span>カフェ</span>
    </button>
    <button class="ui-mchip">
      <svg class="ui-mchip__check" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="m9 16.2-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5Z"/></svg>
      <span>レストラン</span>
    </button>
    <button class="ui-mchip is-on">
      <svg class="ui-mchip__check" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="m9 16.2-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5Z"/></svg>
      <span>テイクアウト可</span>
    </button>
    <button class="ui-mchip">
      <svg class="ui-mchip__check" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="m9 16.2-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5Z"/></svg>
      <span>24時間</span>
    </button>
    <button class="ui-mchip">
      <svg class="ui-mchip__check" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="m9 16.2-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5Z"/></svg>
      <span>★4.0以上</span>
    </button>
  </div>
</div>

<style>
  .ui-mchip-wrap{padding:24px;background:#fef7ff;border-radius:18px;font-family:Roboto,"Google Sans",-apple-system,sans-serif;max-width:520px}
  .ui-mchip-row{display:flex;flex-wrap:wrap;gap:8px}
  .ui-mchip{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 14px;border:1px solid #79747e;border-radius:8px;background:transparent;color:#1d1b20;font:500 14px Roboto,sans-serif;letter-spacing:.01em;cursor:pointer;transition:background .15s,border-color .15s}
  .ui-mchip:hover{background:rgba(29,27,32,.08)}
  .ui-mchip__check{opacity:0;width:0;transition:opacity .15s,width .15s;color:#1d192b}
  .ui-mchip.is-on{background:#e8def8;border-color:#e8def8;color:#1d192b}
  .ui-mchip.is-on .ui-mchip__check{opacity:1;width:14px;margin-right:2px}
</style>

<script>
  (function(){
    const row=document.getElementById('mchipRow');
    row.querySelectorAll('.ui-mchip').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('is-on')));
  })();
</script>`,
    },
  ],
}
