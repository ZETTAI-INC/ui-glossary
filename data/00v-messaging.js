/**
 * UI Parts Showcase (Messaging & Calls) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-messaging',
  title: 'メッセージ・通話UI',
  titleEn: 'Messaging & Calls UI',
  description: 'Slack・Discord・LINE・WhatsApp・Telegram・Gmail などのメッセージアプリでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Chat List Row',
      nameJa: 'チャット一覧行',
      desc: 'LINE・WhatsAppの一覧画面に並ぶ、アバター・名前・直近メッセージ・時刻・未読バッジ入りの行。',
      detail: 'チャットアプリのトップ画面でよく見る、1件分の会話を表す横長の行です。左に丸いアバター、中央に相手の名前と直近メッセージの冒頭、右に時刻と未読件数のバッジが並びます。未読がある行は太字や緑のバッジで強調され、画面を上から眺めるだけで「どれを先に開くべきか」が分かるように設計されています。WhatsAppやLINEの「トーク」タブの基本構造で、複数行並べても情報密度が高く読みやすいのが特徴です。',
      descEn: 'A row from the LINE/WhatsApp chat list — avatar, name, last message preview, time, and unread badge.',
      detailEn: 'This is the long horizontal row you see on the home screen of chat apps, representing one conversation. A round avatar sits on the left, the contact name and a snippet of the latest message in the middle, and the timestamp plus an unread count badge on the right. Rows with unread messages are emphasized with bold text or a green badge, so users can scan the list and instantly tell which thread to open first. It is the bread-and-butter row of WhatsApp and LINE\'s chat tab, dense yet easy to read even when many are stacked.',
      code: `<!-- Inspired by WhatsApp -->
<div class="ui-cl">
  <div class="ui-cl-row">
    <div class="ui-cl-av" style="background:linear-gradient(135deg,#f59e0b,#ef4444)">YT</div>
    <div class="ui-cl-mid">
      <div class="ui-cl-top"><span class="ui-cl-name">山田 太郎</span><span class="ui-cl-time">12:42</span></div>
      <div class="ui-cl-bot"><span class="ui-cl-msg ui-cl-msg--unread">明日のミーティング、30分後ろにずらせますか？</span><span class="ui-cl-bg">3</span></div>
    </div>
  </div>
  <div class="ui-cl-row">
    <div class="ui-cl-av" style="background:linear-gradient(135deg,#3b82f6,#06b6d4)">SK</div>
    <div class="ui-cl-mid">
      <div class="ui-cl-top"><span class="ui-cl-name">Sara K.</span><span class="ui-cl-time">11:08</span></div>
      <div class="ui-cl-bot"><span class="ui-cl-msg"><span class="ui-cl-tick">✓✓</span> Sounds good — see you at 7!</span></div>
    </div>
  </div>
  <div class="ui-cl-row">
    <div class="ui-cl-av" style="background:linear-gradient(135deg,#10b981,#059669)">DG</div>
    <div class="ui-cl-mid">
      <div class="ui-cl-top"><span class="ui-cl-name">Design Guild 🎨</span><span class="ui-cl-time">昨日</span></div>
      <div class="ui-cl-bot"><span class="ui-cl-msg ui-cl-msg--unread">Nikki: 新しいFigmaライブラリ公開しました</span><span class="ui-cl-bg">12</span></div>
    </div>
  </div>
  <div class="ui-cl-row">
    <div class="ui-cl-av" style="background:linear-gradient(135deg,#a78bfa,#7c3aed)">MR</div>
    <div class="ui-cl-mid">
      <div class="ui-cl-top"><span class="ui-cl-name">Mom ❤️</span><span class="ui-cl-time">月曜日</span></div>
      <div class="ui-cl-bot"><span class="ui-cl-msg"><span class="ui-cl-tick ui-cl-tick--read">✓✓</span> 写真ありがとう、可愛いね〜</span></div>
    </div>
  </div>
</div>

<style>
  .ui-cl{max-width:420px;background:#fff;border-radius:12px;overflow:hidden;font:14.5px -apple-system,"Segoe UI",Roboto,sans-serif;color:#111b21;border:1px solid #e9edef}
  .ui-cl-row{display:flex;gap:12px;padding:12px 14px;align-items:center;border-bottom:1px solid #e9edef;cursor:pointer;transition:background .12s}
  .ui-cl-row:last-child{border-bottom:0}
  .ui-cl-row:hover{background:#f5f6f6}
  .ui-cl-av{flex:none;width:48px;height:48px;border-radius:50%;display:grid;place-items:center;color:#fff;font-weight:600;font-size:15px;letter-spacing:.5px}
  .ui-cl-mid{flex:1;min-width:0}
  .ui-cl-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px}
  .ui-cl-name{font-weight:500;font-size:15.5px;color:#111b21;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-cl-time{font-size:12px;color:#667781;flex:none;margin-left:8px}
  .ui-cl-bot{display:flex;justify-content:space-between;align-items:center;gap:8px}
  .ui-cl-msg{font-size:13.5px;color:#667781;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
  .ui-cl-msg--unread{color:#111b21}
  .ui-cl-bg{flex:none;background:#25d366;color:#fff;font-size:11.5px;font-weight:600;padding:2px 7px;border-radius:999px;min-width:20px;text-align:center}
  .ui-cl-tick{color:#8696a0;font-size:12px;margin-right:3px;letter-spacing:-2px}
  .ui-cl-tick--read{color:#53bdeb}
</style>`,
    },
    {
      name: 'iMessage Bubble Pair',
      nameJa: 'iMessage風吹き出しペア',
      desc: '左がグレー(相手)、右が青(自分)の、しっぽ付き吹き出し2つセット。',
      detail: 'iPhoneの「メッセージ」アプリでおなじみの、左右に分かれた吹き出しスタイルです。相手のメッセージは左寄せでライトグレーの背景、自分のメッセージは右寄せで青いグラデーション背景になり、それぞれの吹き出しの下隅には小さな「しっぽ」が付きます。色と位置の2軸で「誰が話しているか」が瞬時に分かるため、スクロールしても流れを見失いません。日時の区切り表示と組み合わせると、本物のiMessageスレッドそっくりに見えます。',
      descEn: 'Gray inbound on the left, blue outbound on the right — a classic iMessage-style bubble pair with tails.',
      detailEn: 'This is the signature look of Apple\'s Messages app: bubbles split left and right depending on who is speaking. Incoming messages are left-aligned with a light gray fill, while your own messages are right-aligned with a vivid blue gradient, each ending in a tiny "tail" near the bottom corner. Color and side together make it effortless to track who said what, even after scrolling through dozens of replies. Pair it with a date divider and you get something nearly indistinguishable from a real iMessage thread.',
      code: `<!-- Inspired by iMessage -->
<div class="ui-im">
  <div class="ui-im-date">Today 14:32</div>
  <div class="ui-im-row ui-im-row--in">
    <div class="ui-im-bub ui-im-bub--in">来週の金曜、急ぎでランチ行ける？</div>
  </div>
  <div class="ui-im-row ui-im-row--in">
    <div class="ui-im-bub ui-im-bub--in">紹介したい人がいてさ 🙏</div>
  </div>
  <div class="ui-im-row ui-im-row--out">
    <div class="ui-im-bub ui-im-bub--out">もちろん！12時半でどう？</div>
  </div>
  <div class="ui-im-row ui-im-row--out">
    <div class="ui-im-bub ui-im-bub--out">場所は任せる 🍣</div>
  </div>
  <div class="ui-im-read">既読 14:35</div>
</div>

<style>
  .ui-im{max-width:380px;background:#000;padding:20px 14px;border-radius:24px;font:15px -apple-system,"SF Pro Text",sans-serif;color:#fff}
  .ui-im-date{text-align:center;color:#8e8e93;font-size:11px;font-weight:600;margin:4px 0 14px;letter-spacing:.3px}
  .ui-im-row{display:flex;margin-bottom:3px}
  .ui-im-row--in{justify-content:flex-start}
  .ui-im-row--out{justify-content:flex-end}
  .ui-im-bub{max-width:78%;padding:8px 13px;border-radius:18px;line-height:1.32;font-size:15.5px;position:relative;word-wrap:break-word}
  .ui-im-bub--in{background:#26252a;color:#fff;border-bottom-left-radius:4px}
  .ui-im-bub--in::before{content:"";position:absolute;left:-6px;bottom:0;width:14px;height:14px;background:#26252a;border-bottom-right-radius:14px;z-index:-1}
  .ui-im-bub--out{background:linear-gradient(180deg,#3a8eff,#0a7cff);color:#fff;border-bottom-right-radius:4px}
  .ui-im-bub--out::before{content:"";position:absolute;right:-6px;bottom:0;width:14px;height:14px;background:#0a7cff;border-bottom-left-radius:14px;z-index:-1}
  .ui-im-read{text-align:right;color:#8e8e93;font-size:11px;margin-top:6px;padding-right:4px}
</style>`,
    },
    {
      name: 'Slack Channel Row',
      nameJa: 'Slackチャンネル一覧行',
      desc: '#チャンネル名 + 未読の太字 + メンションのチップが付いたサイドバー行。',
      detail: 'Slackのサイドバーに並ぶ「#general」「#random」のようなチャンネル行を再現したUIです。通常はグレーの細字ですが、未読メッセージがあると文字が白い太字になり、自分宛てのメンション(@)があると右側に赤いカウントチップが表示されます。現在開いているチャンネルは紫色のハイライトで強調され、ハッシュ記号(#)の前のアイコンでパブリック/プライベート/DMが区別できます。Slack特有の「目線の流れ」をそのまま体験できる定番パーツです。',
      descEn: 'A Slack sidebar row showing #channel-name, bold-when-unread style, and a red mention chip.',
      detailEn: 'This recreates the channel rows you find in Slack\'s sidebar — entries like #general or #random. Channels appear gray and thin by default, but when there are unread messages the text turns bold white, and a red pill on the right surfaces the count of @-mentions aimed at you. The currently open channel gets a purple highlight, while a small glyph in front of the # distinguishes public, private, and DM types. It captures the exact eye-flow Slack relies on to triage attention.',
      code: `<!-- Inspired by Slack -->
<div class="ui-sl">
  <div class="ui-sl-section">Channels</div>
  <div class="ui-sl-row">
    <span class="ui-sl-hash">#</span><span class="ui-sl-name">general</span>
  </div>
  <div class="ui-sl-row ui-sl-row--unread">
    <span class="ui-sl-hash">#</span><span class="ui-sl-name">product-launch</span>
  </div>
  <div class="ui-sl-row ui-sl-row--unread">
    <span class="ui-sl-hash">#</span><span class="ui-sl-name">design-crit</span>
    <span class="ui-sl-chip">3</span>
  </div>
  <div class="ui-sl-row ui-sl-row--active">
    <span class="ui-sl-hash">#</span><span class="ui-sl-name">engineering</span>
    <span class="ui-sl-chip">12</span>
  </div>
  <div class="ui-sl-row">
    <span class="ui-sl-hash">#</span><span class="ui-sl-name">random</span>
  </div>
  <div class="ui-sl-row">
    <span class="ui-sl-lock">🔒</span><span class="ui-sl-name">leadership</span>
  </div>
  <div class="ui-sl-section" style="margin-top:14px">Direct messages</div>
  <div class="ui-sl-row ui-sl-row--unread">
    <span class="ui-sl-dot ui-sl-dot--active"></span><span class="ui-sl-name">Priya Shah</span>
    <span class="ui-sl-chip">1</span>
  </div>
  <div class="ui-sl-row">
    <span class="ui-sl-dot"></span><span class="ui-sl-name">Marco Diaz</span>
  </div>
</div>

<style>
  .ui-sl{max-width:260px;background:#19171d;padding:10px 6px;border-radius:8px;font:14.5px Lato,"Helvetica Neue",Arial,sans-serif;color:#bcabbc}
  .ui-sl-section{font-size:13px;color:#bcabbc;opacity:.7;padding:6px 12px;font-weight:600;letter-spacing:.1px}
  .ui-sl-row{display:flex;align-items:center;gap:8px;padding:5px 12px;border-radius:6px;cursor:pointer;font-size:14.5px;color:#bcabbc;line-height:1.4}
  .ui-sl-row:hover{background:#27242c}
  .ui-sl-hash{color:#8b8a8d;font-weight:400}
  .ui-sl-lock{font-size:11px;width:14px;text-align:center}
  .ui-sl-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-sl-row--unread{color:#fff;font-weight:700}
  .ui-sl-row--unread .ui-sl-hash{color:#fff}
  .ui-sl-row--active{background:#1164a3;color:#fff;font-weight:600}
  .ui-sl-row--active .ui-sl-hash{color:#fff}
  .ui-sl-chip{flex:none;background:#cd2553;color:#fff;font-size:11.5px;font-weight:700;padding:1px 7px;border-radius:9px;min-width:18px;text-align:center}
  .ui-sl-dot{width:8px;height:8px;border-radius:50%;background:transparent;border:1.5px solid #8b8a8d}
  .ui-sl-dot--active{background:#2bac76;border-color:#2bac76}
</style>`,
    },
    {
      name: 'Discord Server Rail',
      nameJa: 'Discordサーバーレール',
      desc: '左端にずらりと並ぶ角丸正方形のサーバーアイコン縦列。アクティブな列に白いバーが出る。',
      detail: 'Discordのアプリ左端に縦一列で並ぶ、各サーバーへのショートカット列です。アイコンは普段は角丸の正方形(スクワークル)ですが、ホバーすると円形に滑らかに変形し、選択中のサーバーは左端に白いインジケータバーが表示されます。一番上にはDM、下にはサーバー追加(+)ボタンが固定されるのが定番レイアウトです。複数のコミュニティを行き来する人向けに、視覚記憶だけで瞬時にサーバーを切り替えられるよう作られています。',
      descEn: 'Discord\'s left rail of squircle server icons stacked vertically, with a white indicator next to the active one.',
      detailEn: 'This is the column of server shortcuts pinned to the far-left edge of Discord. Icons normally appear as rounded squircles, but on hover they morph smoothly into circles, and the currently selected server gets a white pill-shaped indicator on the left edge. By convention, DMs live at the top of the rail and an "add server" plus button sits near the bottom. The whole pattern is tuned for people who jump between many communities — visual memory alone is enough to leap between servers instantly.',
      code: `<!-- Inspired by Discord -->
<div class="ui-dc">
  <div class="ui-dc-rail">
    <div class="ui-dc-item ui-dc-item--dm" title="Direct Messages">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true"><path d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.81-.58 1.23a17 17 0 0 0-5.1 0c-.18-.42-.37-.83-.58-1.23a18.2 18.2 0 0 0-4.6 1.44A19.6 19.6 0 0 0 .26 16.46a18.6 18.6 0 0 0 5.7 2.91 14 14 0 0 0 1.22-2 12 12 0 0 1-1.92-.93c.16-.12.32-.24.47-.36a13 13 0 0 0 11.51 0c.15.12.31.24.47.36-.62.36-1.26.67-1.92.93.36.69.77 1.36 1.22 2a18.6 18.6 0 0 0 5.7-2.91 19.5 19.5 0 0 0-3.97-11.6Z"/></svg>
    </div>
    <div class="ui-dc-sep"></div>
    <div class="ui-dc-slot">
      <div class="ui-dc-pip"></div>
      <div class="ui-dc-item" style="background:#5865f2">DV</div>
    </div>
    <div class="ui-dc-slot ui-dc-slot--active">
      <div class="ui-dc-pip ui-dc-pip--active"></div>
      <div class="ui-dc-item ui-dc-item--active" style="background:linear-gradient(135deg,#9333ea,#db2777)">⚔︎</div>
    </div>
    <div class="ui-dc-slot">
      <div class="ui-dc-item" style="background:#1f8b4c">UI</div>
    </div>
    <div class="ui-dc-slot">
      <div class="ui-dc-pip"></div>
      <div class="ui-dc-item" style="background:linear-gradient(135deg,#f59e0b,#ef4444)">🎮</div>
    </div>
    <div class="ui-dc-slot">
      <div class="ui-dc-item" style="background:#202225;color:#3ba55d;border:1px dashed #3ba55d">+</div>
    </div>
  </div>
</div>

<style>
  .ui-dc{display:inline-block;background:#1e1f22;padding:12px 0;border-radius:12px;font:14px "gg sans","Helvetica Neue",sans-serif;color:#fff}
  .ui-dc-rail{display:flex;flex-direction:column;align-items:center;gap:8px;width:72px}
  .ui-dc-item{width:48px;height:48px;border-radius:24px;display:grid;place-items:center;color:#fff;font-weight:700;font-size:18px;cursor:pointer;transition:border-radius .18s,background .18s}
  .ui-dc-item:hover{border-radius:16px}
  .ui-dc-item--dm{background:#5865f2;border-radius:16px}
  .ui-dc-item--active{border-radius:16px}
  .ui-dc-sep{width:32px;height:2px;background:#2d2f33;border-radius:1px}
  .ui-dc-slot{position:relative;display:flex;align-items:center;justify-content:center;width:100%}
  .ui-dc-pip{position:absolute;left:0;width:4px;height:8px;background:#fff;border-radius:0 4px 4px 0;opacity:0;transition:.18s}
  .ui-dc-slot:hover .ui-dc-pip{opacity:1;height:20px}
  .ui-dc-pip--active{opacity:1;height:40px}
</style>`,
    },
    {
      name: 'Typing Indicator',
      nameJa: 'タイピングインジケーター',
      desc: '吹き出しの中で3つのドットが順番に跳ねる「入力中…」表示。',
      detail: 'チャット相手が今まさにメッセージを打ち込んでいる、と伝えるためのアニメーション付きインジケーターです。グレーの小さな吹き出しの中で3つの丸ドットが波のように順番に上下し、待っている側に「もうすぐ返事が来る」という安心感を与えます。FacebookメッセンジャーやiMessage、Slackなど、ほぼ全ての主要チャットアプリで採用されている定番表現です。相手のメッセージとして左寄せで配置するのが基本で、実装はCSSキーフレーム3つだけで完結します。',
      descEn: 'Three dots bouncing inside a bubble to show that someone on the other end is typing.',
      detailEn: 'This is the small animated indicator that tells the user the other party is composing a message right now. Inside a tiny gray bubble, three dots ripple up and down in sequence, reassuring whoever is waiting that a reply is on the way. Facebook Messenger, iMessage, Slack — practically every major chat app uses some variant of this. It is conventionally left-aligned like an incoming message, and the whole animation can be expressed in just three CSS keyframes.',
      code: `<!-- Inspired by Facebook Messenger -->
<div class="ui-ty">
  <div class="ui-ty-row">
    <div class="ui-ty-avatar">A</div>
    <div class="ui-ty-bubble">
      <span class="ui-ty-dot"></span>
      <span class="ui-ty-dot"></span>
      <span class="ui-ty-dot"></span>
    </div>
  </div>
  <div class="ui-ty-label">Aoiが入力中…</div>
</div>

<style>
  .ui-ty{max-width:360px;padding:24px;background:#fff;border-radius:16px;font:14px -apple-system,"Segoe UI",sans-serif;color:#050505;border:1px solid #e4e6eb}
  .ui-ty-row{display:flex;align-items:flex-end;gap:8px}
  .ui-ty-avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#7e22ce,#ec4899);color:#fff;display:grid;place-items:center;font-weight:600;font-size:12px;flex:none}
  .ui-ty-bubble{display:inline-flex;align-items:center;gap:5px;background:#f0f2f5;padding:11px 14px;border-radius:18px;border-bottom-left-radius:4px}
  .ui-ty-dot{width:7px;height:7px;background:#65676b;border-radius:50%;display:inline-block;animation:ui-ty-bounce 1.2s infinite ease-in-out}
  .ui-ty-dot:nth-child(2){animation-delay:.18s}
  .ui-ty-dot:nth-child(3){animation-delay:.36s}
  .ui-ty-label{color:#65676b;font-size:12px;margin-top:8px;margin-left:36px}
  @keyframes ui-ty-bounce{
    0%,60%,100%{transform:translateY(0);opacity:.45}
    30%{transform:translateY(-5px);opacity:1}
  }
</style>`,
    },
    {
      name: 'Voice Message Bar',
      nameJa: 'ボイスメッセージバー',
      desc: '丸い再生ボタン + 波形(ウェーブフォーム) + 再生時間が並ぶ音声メッセージUI。',
      detail: 'WhatsAppやLINE、Telegramでよく見かける、録音された音声を再生するための横長のバーです。左端に丸い再生(▶)ボタン、中央に音の大小を示す細い縦棒の集合(波形)、右端に総再生時間または残り時間が並びます。波形は再生に合わせて左から色が変わっていくのが一般的で、見た目だけでも「あと何秒残っているか」が直感的に分かります。ボイスメッセージ全盛のアプリでは欠かせない、テキスト以外の会話を支えるパーツです。',
      descEn: 'A bar with a round play button, waveform bars, and a duration — the voice memo UI used by WhatsApp, LINE, Telegram.',
      detailEn: 'This is the horizontal bar you see on WhatsApp, LINE, and Telegram for playing back a recorded voice message. A round play (▶) button sits at the left, a row of thin vertical bars forming a "waveform" fills the middle, and the total duration (or time remaining) hugs the right edge. The waveform is usually colored from left to right as playback advances, so users can sense at a glance how much audio is left. In apps where voice messages dominate, this bar carries every non-text conversation.',
      code: `<!-- Inspired by WhatsApp -->
<div class="ui-vm">
  <div class="ui-vm-bar">
    <button type="button" class="ui-vm-play" aria-label="play">
      <svg viewBox="0 0 14 14" width="14" height="14"><path d="M3 1.5v11l9-5.5z" fill="#fff"/></svg>
    </button>
    <div class="ui-vm-wave">
      <span style="height:30%"></span><span style="height:55%"></span><span style="height:70%"></span><span style="height:90%"></span><span style="height:65%"></span><span style="height:80%"></span><span style="height:45%"></span><span style="height:60%"></span><span style="height:35%"></span><span style="height:50% " class="ui-vm-cur"></span><span style="height:75%"></span><span style="height:55%"></span><span style="height:90%"></span><span style="height:40%"></span><span style="height:65%"></span><span style="height:30%"></span><span style="height:55%"></span><span style="height:70%"></span><span style="height:45%"></span><span style="height:60%"></span><span style="height:35%"></span><span style="height:75%"></span><span style="height:50%"></span><span style="height:65%"></span><span style="height:40%"></span><span style="height:55%"></span><span style="height:30%"></span><span style="height:70%"></span>
    </div>
    <div class="ui-vm-time">0:18</div>
  </div>
  <div class="ui-vm-meta">
    <span class="ui-vm-spk">🎙 Voice message · 0:42</span>
    <span class="ui-vm-when">14:08 ✓✓</span>
  </div>
</div>

<style>
  .ui-vm{max-width:380px;background:#d9fdd3;padding:10px 12px 8px;border-radius:14px;border-top-right-radius:4px;font:13px -apple-system,"Segoe UI",Roboto,sans-serif;color:#111b21;box-shadow:0 1px 1px rgba(11,20,26,.08)}
  .ui-vm-bar{display:flex;align-items:center;gap:10px}
  .ui-vm-play{flex:none;width:34px;height:34px;border-radius:50%;background:#00a884;border:0;cursor:pointer;display:grid;place-items:center;padding:0}
  .ui-vm-wave{flex:1;display:flex;align-items:center;gap:2px;height:28px}
  .ui-vm-wave span{flex:1;background:#8696a0;border-radius:1.5px;min-width:2px}
  .ui-vm-wave span.ui-vm-cur{background:#00a884;box-shadow:0 0 0 1px #00a884}
  .ui-vm-wave span:nth-child(-n+9){background:#00a884}
  .ui-vm-time{flex:none;font-size:12px;color:#667781;font-variant-numeric:tabular-nums;min-width:30px;text-align:right}
  .ui-vm-meta{display:flex;justify-content:space-between;margin-top:6px;font-size:11.5px;color:#667781}
  .ui-vm-spk{display:inline-flex;align-items:center;gap:4px}
</style>`,
    },
    {
      name: 'Email Row',
      nameJa: 'メール一覧行(Gmail風)',
      desc: '差出人・件名・本文プレビュー・ラベルチップ・スター・時刻が1行に並ぶGmailのメール行。',
      detail: 'Gmailの受信トレイで上から下へ並ぶ、1通のメールを表す横長の行です。左から順に「スター」「差出人名」「件名と本文の冒頭スニペット」「ラベル(色付きチップ)」「受信時刻」が配置され、未読のメールは差出人と件名が太字で強調されます。スターをクリックすると黄色く塗りつぶされ、後で見返したいメールに簡単に印を付けられます。情報が多いのに視線が左から右へ自然に流れるよう、フォントサイズと余白が緻密に調整されています。',
      descEn: 'A Gmail-style inbox row: sender, subject, snippet, colored label chips, star, and timestamp on a single line.',
      detailEn: 'This is the long horizontal row that fills Gmail\'s inbox, each one representing a single email. From left to right you get a star, the sender name, the subject followed by a snippet of the body, colored label chips, and the time of arrival; unread mails get bold sender and subject text. Clicking the star fills it in yellow so users can flag messages to revisit later. Despite the density, the row uses careful font sizes and gaps so the eye flows naturally from left to right.',
      code: `<!-- Inspired by Gmail -->
<div class="ui-em">
  <div class="ui-em-row ui-em-row--unread">
    <span class="ui-em-star">☆</span>
    <span class="ui-em-from">Stripe</span>
    <span class="ui-em-body"><b>Your monthly payout is on the way</b> — A payout of ¥482,910 is scheduled to arrive in your bank account by May 22.</span>
    <span class="ui-em-chip ui-em-chip--green">Finance</span>
    <span class="ui-em-time">10:24 AM</span>
  </div>
  <div class="ui-em-row ui-em-row--unread">
    <span class="ui-em-star ui-em-star--on">★</span>
    <span class="ui-em-from">Maya, Devon (3)</span>
    <span class="ui-em-body"><b>Re: Q3 roadmap review</b> — Sounds great, I'll bring the latency dashboard. Should we invite the infra team too?</span>
    <span class="ui-em-chip ui-em-chip--blue">Work</span>
    <span class="ui-em-time">9:51 AM</span>
  </div>
  <div class="ui-em-row">
    <span class="ui-em-star">☆</span>
    <span class="ui-em-from">GitHub</span>
    <span class="ui-em-body">[acme/web] 14 vulnerabilities found in dependencies — Dependabot has detected updates for the following packages…</span>
    <span class="ui-em-chip ui-em-chip--gray">Alerts</span>
    <span class="ui-em-time">May 17</span>
  </div>
  <div class="ui-em-row">
    <span class="ui-em-star">☆</span>
    <span class="ui-em-from">Airbnb</span>
    <span class="ui-em-body">Your trip to Kyoto is in 3 days — Get directions, check in details, and chat with your host before you arrive.</span>
    <span class="ui-em-chip ui-em-chip--purple">Travel</span>
    <span class="ui-em-time">May 16</span>
  </div>
</div>

<style>
  .ui-em{max-width:680px;background:#fff;border:1px solid #e8eaed;border-radius:8px;overflow:hidden;font:14px "Google Sans",-apple-system,"Segoe UI",Roboto,sans-serif;color:#202124}
  .ui-em-row{display:flex;align-items:center;gap:14px;padding:8px 16px;border-bottom:1px solid #f1f3f4;cursor:pointer;font-size:14px;line-height:1.4;transition:box-shadow .12s,background .12s}
  .ui-em-row:last-child{border-bottom:0}
  .ui-em-row:hover{box-shadow:inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);z-index:1;background:#fff}
  .ui-em-star{flex:none;width:18px;color:#bdc1c6;font-size:16px;cursor:pointer;line-height:1}
  .ui-em-star--on{color:#f4b400}
  .ui-em-from{flex:none;width:140px;color:#5f6368;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13.5px}
  .ui-em-row--unread .ui-em-from{color:#202124;font-weight:700}
  .ui-em-body{flex:1;min-width:0;color:#5f6368;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13.5px}
  .ui-em-body b{color:#202124;font-weight:400}
  .ui-em-row--unread .ui-em-body b{font-weight:700}
  .ui-em-chip{flex:none;font-size:11px;padding:2px 7px;border-radius:4px;font-weight:500;letter-spacing:.2px}
  .ui-em-chip--green{background:#e6f4ea;color:#137333}
  .ui-em-chip--blue{background:#e8f0fe;color:#174ea6}
  .ui-em-chip--gray{background:#f1f3f4;color:#3c4043}
  .ui-em-chip--purple{background:#f3e8fd;color:#6b2bd9}
  .ui-em-time{flex:none;font-size:12px;color:#5f6368;width:70px;text-align:right;font-variant-numeric:tabular-nums}
  .ui-em-row--unread .ui-em-time{color:#202124;font-weight:700}
</style>`,
    },
    {
      name: 'Video Call Grid',
      nameJa: 'ビデオ会議グリッド',
      desc: 'Zoomのようにビデオタイルが2×2や3×2のグリッドに並び、各タイルに名前ラベル付き。',
      detail: 'Zoomやその他のビデオ会議アプリでおなじみの、参加者の映像が碁盤目状に並ぶレイアウトです。各タイルは黒背景の角丸長方形で、左下に名前タグ、右下にマイクのミュート状況を示すアイコンが小さく表示されます。話している人のタイルは緑の枠線でハイライトされ、誰が話しているかが視覚的に分かるようになっています。参加人数に応じて2×2、3×2、3×3とグリッドが自動的に組み変わるのが一般的で、ここではアバター付きの2×2グリッドを再現しています。',
      descEn: 'A Zoom-style grid of video tiles (2x2/3x2) with name labels and "speaking" highlight on the active tile.',
      detailEn: 'This is the familiar grid layout used by Zoom and other video-conferencing apps, where every participant gets a tile arranged like a chessboard. Each tile is a rounded black rectangle with a small name tag in the lower-left corner and a mic-status icon in the lower-right. Whoever is currently speaking gets a green outline so the audience can spot the active speaker. The grid reflows automatically as people join — 2x2, 3x2, 3x3 — and here we show the classic 2x2 with avatar placeholders for each participant.',
      code: `<!-- Inspired by Zoom -->
<div class="ui-vc">
  <div class="ui-vc-tile" style="background:linear-gradient(135deg,#1e3a8a,#0f172a)">
    <div class="ui-vc-av" style="background:linear-gradient(135deg,#3b82f6,#8b5cf6)">YT</div>
    <div class="ui-vc-name">山田 太郎 (You)</div>
    <div class="ui-vc-mic ui-vc-mic--mute">🎤</div>
  </div>
  <div class="ui-vc-tile ui-vc-tile--speaking" style="background:linear-gradient(135deg,#7c2d12,#0c0a09)">
    <div class="ui-vc-av" style="background:linear-gradient(135deg,#f97316,#ef4444)">PS</div>
    <div class="ui-vc-name">Priya Shah</div>
    <div class="ui-vc-mic">🎤</div>
  </div>
  <div class="ui-vc-tile" style="background:linear-gradient(135deg,#064e3b,#022c22)">
    <div class="ui-vc-av" style="background:linear-gradient(135deg,#10b981,#06b6d4)">MD</div>
    <div class="ui-vc-name">Marco Diaz</div>
    <div class="ui-vc-mic">🎤</div>
  </div>
  <div class="ui-vc-tile" style="background:linear-gradient(135deg,#581c87,#1e1b4b)">
    <div class="ui-vc-av" style="background:linear-gradient(135deg,#ec4899,#a855f7)">EW</div>
    <div class="ui-vc-name">Emi Watanabe</div>
    <div class="ui-vc-mic ui-vc-mic--mute">🎤</div>
  </div>
</div>

<style>
  .ui-vc{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;max-width:560px;padding:6px;background:#1c1c1e;border-radius:10px;font:13px -apple-system,"Segoe UI",sans-serif;color:#fff}
  .ui-vc-tile{position:relative;aspect-ratio:16/10;border-radius:8px;overflow:hidden;display:grid;place-items:center}
  .ui-vc-tile--speaking{outline:3px solid #22c55e;outline-offset:-3px}
  .ui-vc-av{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:22px;letter-spacing:1px;color:#fff;box-shadow:0 4px 14px rgba(0,0,0,.4)}
  .ui-vc-name{position:absolute;left:8px;bottom:8px;background:rgba(0,0,0,.55);color:#fff;padding:3px 8px;border-radius:4px;font-size:12px;font-weight:500;backdrop-filter:blur(4px)}
  .ui-vc-mic{position:absolute;right:8px;bottom:8px;width:24px;height:24px;background:rgba(0,0,0,.55);border-radius:50%;display:grid;place-items:center;font-size:11px}
  .ui-vc-mic--mute{background:#ef4444;position:relative}
  .ui-vc-mic--mute::after{content:"";position:absolute;inset:0;background:linear-gradient(45deg,transparent 45%,#fff 45%,#fff 55%,transparent 55%);border-radius:50%}
</style>`,
    },
    {
      name: 'Reaction Picker',
      nameJa: 'リアクションピッカー',
      desc: 'Slackの「:heart: 3」「:tada: 1」のように絵文字と人数が並び、末尾に「+」ボタンが付く絵文字バー。',
      detail: 'メッセージに付いた絵文字リアクションを集計表示し、自分も同じ反応を1タップで追加できるUIです。各チップは「絵文字 + 数字」で構成され、自分が既に押したリアクションは枠線が青く強調されます。一番右の「+」ボタンを押すと絵文字ピッカーがポップアップし、新しいリアクションを追加できます。SlackやDiscord、Notion、Linearなど、テキスト以外の軽い反応を可能にする現代チャットUIに欠かせない部品で、心理的なやり取りコストを大きく下げてくれます。',
      descEn: 'Slack-style emoji reaction chips with counts plus a trailing "+" button for adding new reactions.',
      detailEn: 'This is the row of emoji reaction chips you see attached to a message, each showing the emoji plus the number of people who reacted. Chips you have already clicked are highlighted with a blue border, and the trailing "+" button opens an emoji picker so you can add a new reaction with one tap. Slack, Discord, Notion, Linear — practically every modern chat or doc tool offers some version of this. It massively lowers the friction of acknowledging a message without typing a full reply.',
      code: `<!-- Inspired by Slack -->
<div class="ui-rx">
  <div class="ui-rx-msg">
    <div class="ui-rx-av">JK</div>
    <div class="ui-rx-body">
      <div class="ui-rx-head"><b>Jen K.</b> <span class="ui-rx-time">2:14 PM</span></div>
      <div class="ui-rx-text">Final designs are merged. Shipping tomorrow morning 🚀</div>
      <div class="ui-rx-bar">
        <button type="button" class="ui-rx-chip ui-rx-chip--mine"><span>🎉</span><span>4</span></button>
        <button type="button" class="ui-rx-chip"><span>❤️</span><span>3</span></button>
        <button type="button" class="ui-rx-chip"><span>🚀</span><span>7</span></button>
        <button type="button" class="ui-rx-chip"><span>👀</span><span>2</span></button>
        <button type="button" class="ui-rx-chip ui-rx-chip--add" aria-label="Add reaction">
          <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10" cy="10" r="7"/><path d="M7 8.5h.01M13 8.5h.01M7 12c1 1 1.8 1.5 3 1.5s2-.5 3-1.5"/></svg>
          <span class="ui-rx-plus">+</span>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-rx{max-width:520px;background:#fff;padding:12px 14px;border-radius:8px;font:14.5px Lato,"Helvetica Neue",Arial,sans-serif;color:#1d1c1d;border:1px solid #e8e8e8}
  .ui-rx-msg{display:flex;gap:10px}
  .ui-rx-av{flex:none;width:36px;height:36px;border-radius:6px;background:linear-gradient(135deg,#ec4899,#f59e0b);color:#fff;display:grid;place-items:center;font-weight:700;font-size:13px}
  .ui-rx-body{flex:1;min-width:0}
  .ui-rx-head{font-size:14.5px;margin-bottom:2px}
  .ui-rx-head b{color:#1d1c1d;font-weight:900}
  .ui-rx-time{color:#616061;font-size:12px;font-weight:400;margin-left:4px}
  .ui-rx-text{font-size:14.5px;line-height:1.46;color:#1d1c1d}
  .ui-rx-bar{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}
  .ui-rx-chip{display:inline-flex;align-items:center;gap:4px;background:#f8f8f8;border:1px solid #e1e1e1;border-radius:12px;padding:1px 8px;cursor:pointer;font:13px Lato,sans-serif;color:#1d1c1d;line-height:20px;height:24px}
  .ui-rx-chip:hover{background:#fff;border-color:#1264a3}
  .ui-rx-chip--mine{background:#e8f5fa;border-color:#1d9bd1;color:#1264a3;font-weight:600}
  .ui-rx-chip--add{background:transparent;border-style:dashed;border-color:#dcdcdc;color:#616061;padding:1px 6px;position:relative}
  .ui-rx-chip--add .ui-rx-plus{font-weight:700;font-size:13px}
  .ui-rx-chip--add:hover{background:#f8f8f8;color:#1d1c1d}
</style>`,
    },
    {
      name: 'Read Receipt',
      nameJa: '既読表示',
      desc: 'LINEのように、自分の吹き出しのすぐ下に小さく「既読」と時刻が並ぶ表示。',
      detail: 'LINE特有の、メッセージが相手に読まれたことを知らせる「既読」表示を再現したUIです。自分の送信した緑の吹き出しのすぐ下、または隣に、薄いグレーの小さな文字で「既読 14:35」のように表示されます。グループトークでは「既読 5」のように人数で表されることもあります。情報量はわずか数文字ですが、コミュニケーションの安心感(あるいは独特のプレッシャー)を生む、LINE文化を象徴する重要なパーツです。',
      descEn: 'The LINE-style "Read" mark with a timestamp that sits just below or beside your outbound bubble.',
      detailEn: 'This recreates the iconic "Read" marker that LINE places under each outbound message after the recipient opens it. Right below your green bubble — or to its side — sits a small gray label like "既読 14:35", and in group chats it switches to "既読 5" to count how many people have seen it. It is just a few characters of text, yet it has reshaped how Japanese users feel about chat: comforting when the reply is fast, gently anxiety-inducing when it is not.',
      code: `<!-- Inspired by LINE -->
<div class="ui-rr">
  <div class="ui-rr-day">2026年5月20日(水)</div>
  <div class="ui-rr-row ui-rr-row--in">
    <div class="ui-rr-av" style="background:linear-gradient(135deg,#fbbf24,#f59e0b)">M</div>
    <div>
      <div class="ui-rr-name">みき</div>
      <div class="ui-rr-meta-in">
        <div class="ui-rr-bub ui-rr-bub--in">日曜のカフェ、もう予約した？</div>
        <div class="ui-rr-time">14:33</div>
      </div>
    </div>
  </div>
  <div class="ui-rr-row ui-rr-row--out">
    <div class="ui-rr-meta-out">
      <div class="ui-rr-status"><div class="ui-rr-read">既読</div><div class="ui-rr-time">14:35</div></div>
      <div class="ui-rr-bub ui-rr-bub--out">うん、表参道の方ね！11:30で取ってあるよ 🙌</div>
    </div>
  </div>
  <div class="ui-rr-row ui-rr-row--out">
    <div class="ui-rr-meta-out">
      <div class="ui-rr-status"><div class="ui-rr-read">既読 3</div><div class="ui-rr-time">14:36</div></div>
      <div class="ui-rr-bub ui-rr-bub--out">@みんな 集合場所そこでいい？</div>
    </div>
  </div>
</div>

<style>
  .ui-rr{max-width:420px;background:#7da6c4;padding:14px 12px;border-radius:14px;font:14px "Hiragino Sans","Yu Gothic UI",-apple-system,sans-serif;color:#111}
  .ui-rr-day{text-align:center;color:#fff;font-size:11px;background:rgba(0,0,0,.18);width:fit-content;margin:0 auto 14px;padding:2px 10px;border-radius:10px}
  .ui-rr-row{display:flex;margin-bottom:10px}
  .ui-rr-row--in{justify-content:flex-start;gap:8px}
  .ui-rr-row--out{justify-content:flex-end}
  .ui-rr-av{flex:none;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;color:#fff;font-weight:700;font-size:14px}
  .ui-rr-name{font-size:11.5px;color:#fff;margin-bottom:3px;margin-left:2px}
  .ui-rr-meta-in{display:flex;align-items:flex-end;gap:4px}
  .ui-rr-meta-out{display:flex;align-items:flex-end;gap:4px;justify-content:flex-end}
  .ui-rr-bub{max-width:240px;padding:8px 12px;border-radius:18px;line-height:1.4;font-size:14.5px;word-wrap:break-word}
  .ui-rr-bub--in{background:#fff;color:#111;border-bottom-left-radius:4px}
  .ui-rr-bub--out{background:#83d35d;color:#111;border-bottom-right-radius:4px}
  .ui-rr-status{display:flex;flex-direction:column;align-items:flex-end;gap:1px}
  .ui-rr-read{font-size:10px;color:#fff;line-height:1}
  .ui-rr-time{font-size:10px;color:#fff;opacity:.85;line-height:1.2}
</style>`,
    },
  ],
}
