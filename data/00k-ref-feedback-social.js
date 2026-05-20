/**
 * UI Parts — Feedback & Social (Extended)
 * Additional UI parts collected from reference sites. Copy-paste ready.
 */

export const category = {
  id: 'ui-parts-ref-feedback-social',
  title: 'UIパーツ集(フィードバック・ソーシャル拡張)',
  titleEn: 'Feedback & Social (Extended)',
  description: '参考サイトから拾い上げた追加UIパーツ。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Toast / Snackbar',
      nameJa: 'トースト',
      desc: '一時的なメッセージを画面端に表示し自動で消えるUI。',
      detail: 'トースト(スナックバー)は、操作結果を画面の端に短時間表示し、放っておけば数秒で勝手に消える軽い通知UIです。「コピーしました」「メッセージを送信しました」のように、流れを止めずに完了を知らせたいときに使います。重要度の低いフィードバックに向いており、エラーや確認には別途モーダルを使うのが定石です。位置は右下や上部が多く、複数同時に出る場合は積み重ねて表示します。',
      descEn: 'A temporary auto-dismissing message at the screen edge.',
      detailEn: 'A toast (or snackbar) shows a brief message at the edge of the screen and disappears on its own after a few seconds. It is ideal for low-stakes confirmations like "Copied" or "Message sent" that should not interrupt the user. Reserve modals for critical errors or confirmations. Toasts are usually anchored to the bottom-right or top of the screen, and stack when several appear at once.',
      code: `<!-- Inspired by Gmail "Sent. Undo" snackbar -->
<div class="ui-toast-demo">
  <button class="ui-toast-trigger" onclick="gShowToast('Message sent')">Send email</button>
  <button class="ui-toast-trigger" onclick="gShowToast('Conversation archived')">Archive</button>
  <button class="ui-toast-trigger" onclick="gShowToast('Conversation moved to Trash')">Delete</button>
</div>
<div class="ui-toast-wrap" id="gToastWrap"></div>

<style>
  .ui-toast-demo{display:flex;gap:8px;font-family:"Google Sans",Roboto,Arial,sans-serif}
  .ui-toast-trigger{padding:9px 22px;background:#c2e7ff;color:#001d35;border:0;border-radius:18px;font:500 14px inherit;cursor:pointer;letter-spacing:.25px}
  .ui-toast-trigger:hover{background:#a8d8ff;box-shadow:0 1px 3px rgba(60,64,67,.3)}
  .ui-toast-wrap{position:fixed;bottom:24px;left:24px;display:flex;flex-direction:column;gap:8px;z-index:9999}
  .ui-toast{display:flex;align-items:center;gap:24px;padding:14px 24px;background:#323232;color:#fff;border-radius:4px;font:400 14px "Google Sans",Roboto,Arial,sans-serif;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14);min-width:288px;animation:gToastIn .2s ease-out}
  .ui-toast__msg{flex:1}
  .ui-toast__undo{background:transparent;border:0;color:#8ab4f8;font:500 14px inherit;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;padding:4px 8px;border-radius:4px}
  .ui-toast__undo:hover{background:rgba(138,180,248,.08)}
  .ui-toast__x{background:transparent;border:0;color:#bdc1c6;font-size:16px;cursor:pointer;padding:4px}
  @keyframes gToastIn{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
  .ui-toast.out{animation:gToastOut .2s ease-in forwards}
  @keyframes gToastOut{to{transform:translateY(20px);opacity:0}}
</style>

<script>
  function gShowToast(msg){
    const c=document.getElementById('gToastWrap');
    const t=document.createElement('div');t.className='ui-toast';
    t.innerHTML='<span class="ui-toast__msg">'+msg+'</span><button class="ui-toast__undo">Undo</button><button class="ui-toast__x">✕</button>';
    c.appendChild(t);
    const close=()=>{t.classList.add('out');setTimeout(()=>t.remove(),200)};
    t.querySelector('.ui-toast__undo').onclick=close;
    t.querySelector('.ui-toast__x').onclick=close;
    setTimeout(close,4000);
  }
</script>`,
    },
    {
      name: 'Modal / Dialog',
      nameJa: 'モーダル',
      desc: '背景を暗転させてコンテンツを前面に表示する。ユーザーの注目を強制する。',
      detail: 'モーダル(ダイアログ)は、画面中央に重ねて表示される小窓で、背景を暗転させて後ろの操作を一時的に止めます。削除確認、ログイン、規約同意など、ユーザーに確実に読んで・選んでほしい内容を提示するのに使います。タスクが完了するか、明示的に閉じない限り操作を進められないため、注意の集中度は非常に高いUIです。乱用すると体験を阻害するので、本当に必要な場面に限定して使いましょう。',
      descEn: 'Dims background and shows content in the foreground. Forces user attention.',
      detailEn: 'A modal dialog appears centered on the screen and dims the background, temporarily blocking interaction with everything behind it. Use it for confirmations, logins, or terms agreements where the user must read and decide. Because the user cannot continue until they finish or dismiss it, modals demand a high level of attention. Use them sparingly and only when the decision really cannot wait.',
      code: `<!-- Inspired by Linear command palette -->
<button class="ui-modal-open" onclick="document.getElementById('uiModal').showModal()">Open command menu</button>

<dialog id="uiModal" class="ui-modal">
  <div class="ui-modal__search">
    <span class="ui-modal__kicon">⌘</span>
    <input class="ui-modal__input" placeholder="Type a command or search..." autofocus>
    <kbd class="ui-modal__esc">esc</kbd>
  </div>
  <div class="ui-modal__section">Suggestions</div>
  <ul class="ui-modal__list">
    <li class="active"><span class="ui-modal__ico">＋</span>Create new issue<kbd>C</kbd></li>
    <li><span class="ui-modal__ico">✎</span>Edit current issue<kbd>E</kbd></li>
    <li><span class="ui-modal__ico">⊕</span>Add label to issue<kbd>L</kbd></li>
    <li><span class="ui-modal__ico">→</span>Move to project<kbd>⇧ M</kbd></li>
  </ul>
  <div class="ui-modal__section">Navigation</div>
  <ul class="ui-modal__list">
    <li><span class="ui-modal__ico">⌂</span>Go to inbox<kbd>G then I</kbd></li>
    <li><span class="ui-modal__ico">▦</span>Go to My Issues<kbd>G then M</kbd></li>
  </ul>
  <div class="ui-modal__foot">
    <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
    <span><kbd>↵</kbd> Select</span>
    <span><kbd>esc</kbd> Close</span>
  </div>
</dialog>

<style>
  .ui-modal-open{padding:6px 12px;background:#5e6ad2;color:#fff;border:0;border-radius:6px;font:500 13px ui-sans-serif,-apple-system,sans-serif;cursor:pointer}
  .ui-modal{border:0;border-radius:10px;padding:0;width:min(560px,92vw);background:#1c1d20;color:#e6e6e6;font:13px ui-sans-serif,-apple-system,"Inter",sans-serif;box-shadow:0 24px 64px rgba(0,0,0,.5),0 0 0 1px #26272b;overflow:hidden}
  .ui-modal::backdrop{background:rgba(0,0,0,.6);backdrop-filter:blur(2px)}
  .ui-modal__search{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #26272b}
  .ui-modal__kicon{color:#8a8f98;font-size:14px}
  .ui-modal__input{flex:1;background:transparent;border:0;color:#e6e6e6;font:15px inherit;outline:none}
  .ui-modal__input::placeholder{color:#6b7280}
  .ui-modal__esc{background:#26272b;color:#8a8f98;padding:2px 6px;border-radius:4px;font:11px ui-monospace,monospace}
  .ui-modal__section{padding:8px 16px 4px;font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#6b7280}
  .ui-modal__list{list-style:none;margin:0;padding:0 6px}
  .ui-modal__list li{display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:5px;cursor:pointer;color:#b4bcd0}
  .ui-modal__list li:hover{background:#222327;color:#e6e6e6}
  .ui-modal__list li.active{background:#26272b;color:#e6e6e6}
  .ui-modal__list .ui-modal__ico{width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;background:#26272b;border-radius:4px;color:#8a8f98;font-size:11px}
  .ui-modal__list kbd{margin-left:auto;background:#26272b;color:#8a8f98;padding:1px 6px;border-radius:3px;font:11px ui-monospace,monospace}
  .ui-modal__foot{display:flex;gap:14px;padding:8px 16px;border-top:1px solid #26272b;background:#17181b;color:#6b7280;font-size:11px}
  .ui-modal__foot kbd{background:#26272b;padding:1px 5px;border-radius:3px;margin-right:4px;font:11px ui-monospace,monospace;color:#b4bcd0}
</style>`,
    },
    {
      name: 'Popover',
      nameJa: 'ポップオーバー',
      desc: 'クリックでトリガーされるリッチなフローティングUI。',
      detail: 'ポップオーバーは、ボタンやアイコンをクリックすると、その近くに浮かび上がる小さなパネルです。ツールチップよりも内容が多く、見出し・本文・ボタンなど複雑な要素を入れられます。プロフィールカード、ヘルプ情報、ミニ設定パネルなどで使われ、モーダルほど大げさにせず補足情報を見せたいときに最適です。背景を暗転させないため、ユーザーは元の画面の文脈を保ったまま情報を確認できます。',
      descEn: 'A rich floating UI triggered by click.',
      detailEn: 'A popover is a small panel that floats next to a button or icon when clicked. Compared with tooltips, it can hold richer content like headings, body text, and buttons. Popovers are great for profile cards, contextual help, or mini settings panels where you need more than a tooltip but less commitment than a modal. Because the background stays visible, users can still see the context their action came from.',
      code: `<!-- Inspired by X (Twitter) profile hover card -->
<div class="ui-pop" id="uiPop">
  <span class="ui-pop__sentence">
    Loved this thread by
    <button class="ui-pop__trigger" type="button">@aoi_designs</button>
    — definitely worth a read.
  </span>
  <div class="ui-pop__panel">
    <div class="ui-pop__cover"></div>
    <div class="ui-pop__top">
      <div class="ui-pop__avatar">A</div>
      <button class="ui-pop__follow">Follow</button>
    </div>
    <div class="ui-pop__name">Aoi Sato <span class="ui-pop__verify">✓</span></div>
    <div class="ui-pop__handle">@aoi_designs</div>
    <p class="ui-pop__bio">Senior product designer at Acme. Writing about design systems, motion, and tiny details. she/her · Tokyo</p>
    <div class="ui-pop__stats">
      <span><strong>342</strong> Following</span>
      <span><strong>18.2K</strong> Followers</span>
    </div>
    <div class="ui-pop__mutual">Followed by mei.dev, takumi_p, and 8 others you follow</div>
  </div>
</div>

<style>
  .ui-pop{position:relative;display:inline-block;font:15px -apple-system,system-ui,sans-serif;color:#e7e9ea;background:#000;padding:16px;border-radius:12px}
  .ui-pop__sentence{line-height:1.6}
  .ui-pop__trigger{background:transparent;border:0;color:#1d9bf0;font:inherit;cursor:pointer;padding:0}
  .ui-pop__trigger:hover{text-decoration:underline}
  .ui-pop__panel{position:absolute;top:calc(100% + 6px);left:16px;width:300px;padding:0 16px 14px;background:#000;border:1px solid #2f3336;border-radius:16px;box-shadow:0 0 15px rgba(255,255,255,.05),0 0 3px rgba(255,255,255,.05);display:none;z-index:20}
  .ui-pop.open .ui-pop__panel{display:block}
  .ui-pop__cover{height:64px;background:linear-gradient(135deg,#1d9bf0,#9146ff);margin:0 -16px 0;border-radius:16px 16px 0 0}
  .ui-pop__top{display:flex;justify-content:space-between;align-items:flex-end;margin-top:-32px}
  .ui-pop__avatar{width:64px;height:64px;border-radius:50%;background:#f7b32b;color:#000;border:4px solid #000;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700}
  .ui-pop__follow{background:#eff3f4;color:#0f1419;border:0;padding:6px 16px;border-radius:999px;font-weight:700;font-size:14px;cursor:pointer;margin-bottom:4px}
  .ui-pop__follow:hover{background:#d7dbdc}
  .ui-pop__name{font-weight:700;font-size:17px;margin-top:6px;display:flex;align-items:center;gap:4px}
  .ui-pop__verify{color:#1d9bf0;font-size:14px}
  .ui-pop__handle{color:#71767b;font-size:14px}
  .ui-pop__bio{margin:10px 0;line-height:1.4;font-size:14px;color:#e7e9ea}
  .ui-pop__stats{display:flex;gap:18px;font-size:14px;color:#71767b}
  .ui-pop__stats strong{color:#e7e9ea;font-weight:700}
  .ui-pop__mutual{margin-top:10px;font-size:13px;color:#71767b;line-height:1.4}
</style>

<script>
  const uiPop=document.getElementById('uiPop'),trig=uiPop.querySelector('.ui-pop__trigger');
  let timer;
  trig.addEventListener('mouseenter',()=>{clearTimeout(timer);uiPop.classList.add('open')});
  trig.addEventListener('mouseleave',()=>{timer=setTimeout(()=>uiPop.classList.remove('open'),300)});
  uiPop.querySelector('.ui-pop__panel').addEventListener('mouseenter',()=>clearTimeout(timer));
  uiPop.querySelector('.ui-pop__panel').addEventListener('mouseleave',()=>{timer=setTimeout(()=>uiPop.classList.remove('open'),200)});
  trig.addEventListener('click',e=>{e.stopPropagation();uiPop.classList.toggle('open')});
</script>`,
    },
    {
      name: 'Loading Spinner',
      nameJa: 'ローディングスピナー',
      desc: '処理中であることを示す回転アニメーション。',
      detail: 'ローディングスピナーは、処理がまだ終わっていないことをユーザーに伝える小さな回転アニメーションです。ボタン送信中、ページ読み込み中、データ取得中など、所要時間がはっきり分からない処理に使います。進捗率を示せる場合はプログレスバーのほうが親切ですが、短時間で終わる処理にはスピナーで十分です。長時間スピナーが回り続けると不安を与えるので、5秒以上なら状況テキストや進捗表示を追加するのが理想です。',
      descEn: 'A spinning animation indicating processing.',
      detailEn: 'A loading spinner is a small rotating animation that tells users a task is still in progress. Use it for actions where the duration is unknown — submitting a form, loading a page, or fetching data. When you can measure progress, a progress bar is friendlier, but spinners work well for quick operations. If a spinner runs for more than a few seconds, pair it with a short status message so users do not feel stuck.',
      code: `<!-- Inspired by Vercel deploying state -->
<div class="ui-spin-card">
  <div class="ui-spin-card__head">
    <div class="ui-spin-card__title">
      <span class="ui-spin"></span>
      Building
    </div>
    <span class="ui-spin-card__chip">Preview</span>
  </div>
  <div class="ui-spin-card__repo">acme-web · main · 9f4a2b1</div>
  <ul class="ui-spin-card__steps">
    <li class="done"><span>✓</span>Cloning github.com/acme/web<small>2s</small></li>
    <li class="done"><span>✓</span>Installing dependencies<small>14s</small></li>
    <li class="active"><span class="ui-spin ui-spin--xs"></span>Building application<small>00:24</small></li>
    <li class="pending"><span>○</span>Deploying outputs<small>—</small></li>
  </ul>
  <button class="ui-spin-card__cancel">Cancel deployment</button>
</div>

<style>
  .ui-spin-card{width:380px;padding:18px;background:#000;border:1px solid #333;border-radius:10px;color:#ededed;font:13px ui-sans-serif,-apple-system,"Inter",sans-serif}
  .ui-spin-card__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
  .ui-spin-card__title{display:flex;align-items:center;gap:10px;font-weight:600;font-size:15px}
  .ui-spin-card__chip{font-size:11px;background:#171717;border:1px solid #333;color:#a1a1a1;padding:2px 8px;border-radius:4px}
  .ui-spin-card__repo{font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#a1a1a1;margin-bottom:14px}
  .ui-spin-card__steps{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
  .ui-spin-card__steps li{display:flex;align-items:center;gap:10px;font-size:13px}
  .ui-spin-card__steps li small{margin-left:auto;color:#666;font-family:ui-monospace,monospace;font-size:11px}
  .ui-spin-card__steps li > span:first-child{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px}
  .ui-spin-card__steps li.done > span:first-child{color:#50e3a4;font-weight:700}
  .ui-spin-card__steps li.pending{color:#666}
  .ui-spin-card__steps li.pending > span:first-child{color:#444}
  .ui-spin-card__cancel{margin-top:16px;width:100%;background:transparent;color:#ededed;border:1px solid #333;padding:8px;border-radius:6px;font:500 13px inherit;cursor:pointer}
  .ui-spin-card__cancel:hover{background:#171717}
  .ui-spin{width:16px;height:16px;border:1.5px solid #333;border-top-color:#ededed;border-radius:50%;animation:vSpin .9s linear infinite;flex:none}
  .ui-spin--xs{width:14px;height:14px;border-width:1.5px}
  @keyframes vSpin{to{transform:rotate(360deg)}}
</style>`,
    },
    {
      name: 'Confirmation Dialog',
      nameJa: '確認ダイアログ',
      desc: '破壊的操作の前にユーザーに確認を求めるダイアログ。',
      detail: '確認ダイアログは、削除・キャンセル・退会など、後戻りできない操作の直前に「本当に実行しますか?」とユーザーに念押しするモーダルです。誤操作による事故を防ぐのが最大の役割で、必ず「やめる」「実行する」の2択を明示します。実行ボタンは赤色など警戒色で示し、デフォルトのフォーカスを安全側(キャンセル)に置くと事故が減ります。逆に頻繁に使う安全な操作には付けないほうが、UXがスムーズになります。',
      descEn: 'A dialog asking the user to confirm before destructive actions.',
      detailEn: 'A confirmation dialog appears right before an irreversible action — deleting, cancelling, leaving a service — and asks "Are you sure?" Its main job is to prevent accidental damage, so it must clearly offer two choices: cancel and proceed. Mark the destructive action with a warning color like red, and default the keyboard focus to the safer "cancel" side to reduce mishaps. Avoid using it for routine safe actions, where it would only slow people down.',
      code: `<!-- Inspired by GitHub repository deletion dialog -->
<button class="ui-confirm-trigger" onclick="document.getElementById('uiConfirm').showModal()">Delete this repository</button>

<dialog id="uiConfirm" class="ui-confirm">
  <div class="ui-confirm__head">
    <h2>Are you absolutely sure?</h2>
    <button class="ui-confirm__close" onclick="document.getElementById('uiConfirm').close()">✕</button>
  </div>
  <div class="ui-confirm__body">
    <div class="ui-confirm__warn">
      ⚠️ Unexpected bad things will happen if you don't read this!
    </div>
    <p>This action <strong>cannot</strong> be undone. This will permanently delete the <strong>acme/web</strong> repository, wiki, issues, and comments, and remove all collaborator associations.</p>
    <label>Please type <strong>acme/web</strong> to confirm.</label>
    <input class="ui-confirm__input" id="ghConfirm" autocomplete="off">
    <button class="ui-confirm__danger" id="ghDanger" disabled>I understand the consequences, delete this repository</button>
  </div>
</dialog>

<style>
  .ui-confirm-trigger{padding:5px 16px;background:#da3633;color:#fff;border:1px solid rgba(240,246,252,.1);border-radius:6px;font:600 14px -apple-system,"Segoe UI",sans-serif;cursor:pointer}
  .ui-confirm-trigger:hover{background:#b62324}
  .ui-confirm{border:1px solid #30363d;border-radius:12px;padding:0;width:min(440px,92vw);background:#0d1117;color:#e6edf3;font:14px -apple-system,"Segoe UI",sans-serif;box-shadow:0 16px 32px rgba(1,4,9,.85);overflow:hidden}
  .ui-confirm::backdrop{background:rgba(1,4,9,.8)}
  .ui-confirm__head{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;border-bottom:1px solid #30363d}
  .ui-confirm__head h2{margin:0;font-size:14px;font-weight:600}
  .ui-confirm__close{background:transparent;border:0;color:#7d8590;cursor:pointer;font-size:16px;padding:2px}
  .ui-confirm__body{padding:16px;font-size:14px;line-height:1.5}
  .ui-confirm__warn{background:#3d1d04;border:1px solid #9e6a03;color:#d29922;padding:10px 12px;border-radius:6px;font-size:13px;margin-bottom:14px}
  .ui-confirm__body p{margin:0 0 14px;color:#e6edf3}
  .ui-confirm__body strong{color:#fff}
  .ui-confirm__body label{display:block;margin-bottom:6px;font-size:13px}
  .ui-confirm__input{width:100%;padding:5px 12px;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font:14px ui-monospace,SFMono-Regular,Menlo,monospace;outline:none;box-sizing:border-box;margin-bottom:12px}
  .ui-confirm__input:focus{border-color:#1f6feb;box-shadow:0 0 0 3px rgba(31,111,235,.3)}
  .ui-confirm__danger{width:100%;padding:5px 16px;background:#21262d;color:#f85149;border:1px solid rgba(240,246,252,.1);border-radius:6px;font:600 14px -apple-system,"Segoe UI",sans-serif;cursor:pointer}
  .ui-confirm__danger:disabled{opacity:.5;cursor:not-allowed}
  .ui-confirm__danger:not(:disabled){background:#da3633;color:#fff;border-color:rgba(240,246,252,.1)}
  .ui-confirm__danger:not(:disabled):hover{background:#b62324}
</style>

<script>
  const ghIn=document.getElementById('ghConfirm'),ghBtn=document.getElementById('ghDanger');
  ghIn.addEventListener('input',()=>{ghBtn.disabled=ghIn.value!=='acme/web'});
  ghBtn.addEventListener('click',()=>document.getElementById('uiConfirm').close());
</script>`,
    },
    {
      name: 'Notification Panel',
      nameJa: '通知パネル',
      desc: '通知一覧をドロップダウンパネルで表示する。',
      detail: '通知パネルは、ベルアイコンなどをクリックすると展開する一覧形式のドロップダウンで、最近受け取った通知をまとめて確認できるUIです。各項目に未読バッジ、アイコン、本文、相対時刻を表示するのが一般的で、クリックすれば詳細ページに遷移できます。SNS、メール、業務ツールなどで頻出のパーツで、通知数が多い場合は「すべて既読にする」ボタンを設けると親切です。重要度の高い通知は色やアイコンで強調すると見落としが減ります。',
      descEn: 'A dropdown panel displaying a list of notifications.',
      detailEn: 'A notification panel is a dropdown that opens from a bell icon and lists the user\'s recent notifications. Each row typically shows an unread indicator, icon, message, and relative time, and tapping it jumps to the full detail. It is a familiar pattern in social apps, mail clients, and SaaS tools. A "mark all as read" button helps when notifications pile up, and using color or icons for high-priority items reduces the chance of users missing something important.',
      code: `<!-- Inspired by Discord notifications -->
<div class="ui-notif open" id="uiNotif">
  <div class="ui-notif__panel">
    <div class="ui-notif__head">
      <strong>Inbox</strong>
      <div class="ui-notif__tabs">
        <span class="active">For you</span><span>Unreads <em>5</em></span><span>Mentions</span>
      </div>
      <button class="ui-notif__mark">Mark all as read</button>
    </div>
    <ul class="ui-notif__list">
      <li class="unread">
        <div class="ui-notif__avatar" style="background:#f23f43">M</div>
        <div class="ui-notif__body">
          <div><strong>mei</strong> mentioned you in <span class="ch">#design-system</span></div>
          <div class="ui-notif__msg">@you can you take a look at the new token names before we merge?</div>
          <time>Today at 10:42</time>
        </div>
      </li>
      <li class="unread">
        <div class="ui-notif__avatar" style="background:#5865f2">T</div>
        <div class="ui-notif__body">
          <div><strong>takumi.p</strong> in <span class="ch">#general</span></div>
          <div class="ui-notif__msg">deploy is live 🚀 let me know if anything looks off</div>
          <time>Today at 09:15</time>
        </div>
      </li>
      <li class="unread">
        <div class="ui-notif__avatar" style="background:#3ba55d">H</div>
        <div class="ui-notif__body">
          <div><strong>hana_s</strong> started a thread: "Onboarding copy review"</div>
          <time>Yesterday at 18:32</time>
        </div>
      </li>
      <li>
        <div class="ui-notif__avatar" style="background:#faa61a">⚙</div>
        <div class="ui-notif__body">
          <div>Acme Servers — Stage 2 verification required</div>
          <time>Yesterday</time>
        </div>
      </li>
    </ul>
  </div>
</div>

<style>
  .ui-notif{font:14px gg sans,"Whitney","Helvetica Neue",sans-serif;color:#dbdee1}
  .ui-notif__panel{width:480px;background:#313338;border-radius:8px;box-shadow:0 8px 16px rgba(0,0,0,.24);overflow:hidden}
  .ui-notif__head{display:flex;align-items:center;gap:16px;padding:12px 16px;border-bottom:1px solid #232428;background:#2b2d31}
  .ui-notif__head strong{color:#f2f3f5;font-size:16px;font-weight:600}
  .ui-notif__tabs{display:flex;gap:6px;flex:1;margin-left:8px}
  .ui-notif__tabs span{padding:4px 10px;border-radius:4px;color:#b5bac1;font-size:13px;cursor:pointer;display:inline-flex;align-items:center;gap:4px}
  .ui-notif__tabs span:hover{background:#35373c;color:#fff}
  .ui-notif__tabs .active{background:#404249;color:#fff}
  .ui-notif__tabs em{background:#f23f43;color:#fff;font:600 10px inherit;padding:1px 5px;border-radius:8px;font-style:normal}
  .ui-notif__mark{background:transparent;border:0;color:#b5bac1;font:500 13px inherit;cursor:pointer}
  .ui-notif__mark:hover{color:#fff;text-decoration:underline}
  .ui-notif__list{list-style:none;margin:0;padding:8px;max-height:380px;overflow:auto}
  .ui-notif__list li{display:flex;gap:12px;padding:10px 12px;border-radius:6px;cursor:pointer;position:relative}
  .ui-notif__list li:hover{background:#393c41}
  .ui-notif__list li.unread::before{content:"";position:absolute;left:0;top:14px;bottom:14px;width:3px;background:#5865f2;border-radius:0 2px 2px 0}
  .ui-notif__avatar{flex:none;width:40px;height:40px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px}
  .ui-notif__body{flex:1;line-height:1.4;min-width:0}
  .ui-notif__body strong{color:#f2f3f5;font-weight:600}
  .ui-notif__body .ch{color:#949ba4}
  .ui-notif__msg{margin-top:4px;color:#dbdee1;font-size:13px;line-height:1.4}
  .ui-notif__body time{display:block;color:#949ba4;font-size:12px;margin-top:4px}
</style>`,
    },
    {
      name: 'Chat UI',
      nameJa: 'チャットUI',
      desc: 'メッセージを左右に振り分けるチャット形式のUI。',
      detail: 'チャットUIは、複数人のやり取りを時系列に並べる吹き出し型のインターフェイスです。自分の発言を右側、相手の発言を左側に配置し、アバターや名前、送信時刻を添えるのが定番のレイアウトです。LINEやSlackなどのメッセージングアプリ、カスタマーサポートのチャットウィンドウ、生成AIのチャット画面など、用途は広がっています。連続発言をまとめる、未読位置を示すなど、長いログでも読みやすくする工夫が重要です。',
      descEn: 'A message-based UI with messages aligned left and right.',
      detailEn: 'A chat UI arranges messages from multiple participants in chronological order using speech-bubble shapes. The convention is to place your own messages on the right and the other person\'s on the left, with avatars, names, and timestamps as needed. This pattern powers messaging apps like LINE and Slack, customer support widgets, and AI chat screens. To keep long conversations readable, group consecutive messages from the same sender and mark where unread messages begin.',
      code: `<!-- Inspired by WhatsApp -->
<div class="ui-chat">
  <header class="ui-chat__hdr">
    <span class="ui-chat__back">‹</span>
    <div class="ui-chat__avatar lg">H</div>
    <div class="ui-chat__who"><strong>Hana</strong><small>online</small></div>
    <span class="ui-chat__act">📹</span><span class="ui-chat__act">📞</span>
  </header>
  <div class="ui-chat__scroll">
    <div class="ui-chat__day">TODAY</div>
    <div class="ui-chat__msg in"><div class="ui-chat__bubble">Hey! Are we still on for coffee at 3? ☕</div><time>10:24 AM</time></div>
    <div class="ui-chat__msg out"><div class="ui-chat__bubble">Yes! See you at Blue Bottle on Hayes <span class="rr">✓✓</span></div><time>10:25 AM</time></div>
    <div class="ui-chat__msg out"><div class="ui-chat__bubble">Bringing the laptop, want to show you the new mockups <span class="rr">✓✓</span></div><time>10:25 AM</time></div>
    <div class="ui-chat__msg in"><div class="ui-chat__bubble">Perfect 🙌 I've been thinking about the onboarding flow too</div><time>10:26 AM</time></div>
    <div class="ui-chat__msg in"><div class="ui-chat__typing"><span></span><span></span><span></span></div></div>
  </div>
  <form class="ui-chat__form" onsubmit="event.preventDefault()">
    <span>😊</span>
    <input type="text" placeholder="Message">
    <span>📎</span>
    <button type="submit">🎤</button>
  </form>
</div>

<style>
  .ui-chat{width:380px;background:#efeae2;border-radius:8px;font:15px -apple-system,"Segoe UI",sans-serif;color:#111b21;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 8px 24px rgba(0,0,0,.15)}
  .ui-chat__hdr{display:flex;align-items:center;gap:10px;padding:10px 12px;background:#075e54;color:#fff}
  .ui-chat__back{font-size:22px;cursor:pointer}
  .ui-chat__avatar{width:30px;height:30px;border-radius:50%;background:#25d366;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex:none}
  .ui-chat__avatar.lg{width:36px;height:36px}
  .ui-chat__who{flex:1;line-height:1.2}
  .ui-chat__who strong{font-weight:500;font-size:15px;display:block}
  .ui-chat__who small{font-size:12px;opacity:.85}
  .ui-chat__act{cursor:pointer}
  .ui-chat__scroll{padding:14px 8%;background:#efeae2;background-image:radial-gradient(circle at 20% 20%,rgba(0,0,0,.03) 1px,transparent 1px),radial-gradient(circle at 80% 60%,rgba(0,0,0,.03) 1px,transparent 1px);background-size:60px 60px;min-height:280px;display:flex;flex-direction:column}
  .ui-chat__day{align-self:center;background:#fff;color:#54656f;font-size:12px;padding:5px 12px;border-radius:8px;margin-bottom:8px;box-shadow:0 1px 1px rgba(0,0,0,.06)}
  .ui-chat__msg{margin-bottom:6px;max-width:80%}
  .ui-chat__msg.out{align-self:flex-end}
  .ui-chat__msg.in{align-self:flex-start}
  .ui-chat__bubble{position:relative;padding:6px 9px 8px;border-radius:8px;line-height:1.35;font-size:14.2px;box-shadow:0 1px .5px rgba(0,0,0,.13);word-wrap:break-word}
  .ui-chat__msg.in .ui-chat__bubble{background:#fff;border-top-left-radius:0}
  .ui-chat__msg.out .ui-chat__bubble{background:#d9fdd3;border-top-right-radius:0}
  .ui-chat__msg time{display:block;font-size:11px;color:#667781;margin-top:2px;text-align:right}
  .rr{color:#53bdeb;font-size:13px;margin-left:4px}
  .ui-chat__typing{display:inline-flex;gap:3px;background:#fff;padding:10px 14px;border-radius:8px;border-top-left-radius:0;box-shadow:0 1px .5px rgba(0,0,0,.13)}
  .ui-chat__typing span{width:6px;height:6px;border-radius:50%;background:#8696a0;animation:wt 1.2s ease-in-out infinite}
  .ui-chat__typing span:nth-child(2){animation-delay:.2s}
  .ui-chat__typing span:nth-child(3){animation-delay:.4s}
  @keyframes wt{0%,80%,100%{opacity:.3;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}
  .ui-chat__form{display:flex;gap:8px;align-items:center;padding:8px;background:#f0f2f5}
  .ui-chat__form span{color:#54656f;cursor:pointer;font-size:18px;padding:0 6px}
  .ui-chat__form input{flex:1;padding:9px 14px;border:0;border-radius:20px;font:15px inherit;background:#fff;outline:none}
  .ui-chat__form button{width:40px;height:40px;background:#075e54;color:#fff;border:0;border-radius:50%;cursor:pointer;font-size:18px}
</style>`,
    },
    {
      name: 'Comment Thread',
      nameJa: 'コメントスレッド',
      desc: 'ネストされたコメントと返信のスレッド表示。',
      detail: 'コメントスレッドは、投稿に対するコメントと、そのコメントへの返信をツリー状にネストして表示するUIです。インデント(字下げ)や縦線で会話の階層を示し、誰が誰に返信しているかを一目で分かるようにします。ニュースサイトのコメント欄、Reddit、GitHubのIssue、ブログのディスカッションなどで広く使われます。深くなりすぎないよう2〜3階層で打ち切り、それ以降は「もっと読む」リンクで折りたたむのが読みやすさのコツです。',
      descEn: 'Nested comments and replies in a threaded view.',
      detailEn: 'A comment thread shows comments and their replies in a nested tree structure. Indentation and connecting lines make the hierarchy of the conversation clear, so it is easy to see who is replying to whom. You see this pattern in news site comment sections, Reddit, GitHub issues, and blog discussions. To keep things readable, cap visible nesting at two or three levels and collapse deeper replies behind a "view more" link.',
      code: `<!-- Inspired by GitHub PR review comments -->
<div class="ui-thread">
  <div class="ui-thread__file">
    <span class="ui-thread__chev">▾</span>
    <span class="ui-thread__path">src/components/Button.tsx</span>
    <span class="ui-thread__diff">+12 −4</span>
  </div>
  <div class="ui-thread__code">
    <div class="ln"><span class="num">42</span><span class="add">+ const variants = ['primary', 'secondary', 'ghost'] as const;</span></div>
  </div>
  <div class="ui-thread__convo">
    <div class="ui-thread__item">
      <div class="ui-thread__avatar" style="background:#1f6feb">H</div>
      <div class="ui-thread__body">
        <div class="ui-thread__meta"><strong>hana-sato</strong> <span class="role">Author</span> commented <time>3 hours ago</time></div>
        <p>Should we add a <code>destructive</code> variant here too? We're using it in the delete dialogs already.</p>
        <div class="ui-thread__actions"><button>👍 4</button><button>👀 1</button><button>Reply</button></div>
      </div>
    </div>
    <div class="ui-thread__item">
      <div class="ui-thread__avatar" style="background:#a371f7">M</div>
      <div class="ui-thread__body">
        <div class="ui-thread__meta"><strong>mei-r</strong> <span class="role rev">Reviewer</span> commented <time>2 hours ago</time></div>
        <p>Good catch. Let's keep that for a follow-up PR though — there's also some token work needed in the theme file before we add it.</p>
        <div class="ui-thread__actions"><button>♥ 2</button><button>Reply</button></div>
      </div>
    </div>
    <div class="ui-thread__item resolved">
      <div class="ui-thread__avatar" style="background:#3fb950">H</div>
      <div class="ui-thread__body">
        <div class="ui-thread__meta"><strong>hana-sato</strong> resolved this conversation <time>1 hour ago</time></div>
      </div>
    </div>
    <div class="ui-thread__reply-form">
      <textarea placeholder="Leave a comment" rows="2"></textarea>
      <div class="ui-thread__reply-bar"><button class="ghost">Resolve conversation</button><button class="primary">Comment</button></div>
    </div>
  </div>
</div>

<style>
  .ui-thread{max-width:640px;background:#0d1117;border:1px solid #30363d;border-radius:6px;font:14px -apple-system,"Segoe UI",sans-serif;color:#e6edf3;overflow:hidden}
  .ui-thread__file{display:flex;align-items:center;gap:8px;padding:10px 16px;background:#161b22;border-bottom:1px solid #30363d;font-size:14px}
  .ui-thread__chev{color:#7d8590}
  .ui-thread__path{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;color:#e6edf3;flex:1}
  .ui-thread__diff{font-family:ui-monospace,monospace;color:#3fb950;font-size:12px}
  .ui-thread__code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;background:#0d1117}
  .ln{display:flex}
  .ln .num{width:50px;text-align:right;padding:2px 10px 2px 0;color:#6e7681;background:#0d1117;border-right:1px solid #30363d}
  .ln .add{flex:1;padding:2px 14px;background:#033a1610;color:#e6edf3}
  .ln .add::before{content:"+";margin-right:8px;color:#3fb950}
  .ui-thread__convo{padding:0;background:#0d1117;border-top:1px solid #30363d}
  .ui-thread__item{display:flex;gap:12px;padding:14px 16px;border-bottom:1px solid #21262d}
  .ui-thread__item:last-of-type{border-bottom:0}
  .ui-thread__item.resolved{background:#161b22;color:#7d8590;font-size:13px}
  .ui-thread__avatar{flex:none;width:32px;height:32px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px}
  .ui-thread__body{flex:1;min-width:0}
  .ui-thread__meta{font-size:13px;color:#7d8590}
  .ui-thread__meta strong{color:#e6edf3;font-weight:600}
  .role{background:#1f6feb;color:#fff;font-size:11px;padding:1px 7px;border-radius:10px;margin-left:4px;font-weight:500}
  .role.rev{background:#21262d;color:#7d8590;border:1px solid #30363d}
  .ui-thread__meta time{margin-left:4px}
  .ui-thread__body p{margin:6px 0;line-height:1.5;color:#e6edf3;font-size:14px}
  .ui-thread__body code{background:#6e768166;padding:0 6px;border-radius:6px;font:12px ui-monospace,monospace}
  .ui-thread__actions{display:flex;gap:6px;margin-top:6px}
  .ui-thread__actions button{background:transparent;border:1px solid #30363d;color:#7d8590;font:500 12px inherit;cursor:pointer;padding:2px 8px;border-radius:100px}
  .ui-thread__actions button:hover{background:#21262d;color:#e6edf3}
  .ui-thread__reply-form{padding:12px 16px;background:#161b22;border-top:1px solid #30363d}
  .ui-thread__reply-form textarea{width:100%;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font:13px inherit;padding:8px 10px;resize:vertical;outline:none;box-sizing:border-box}
  .ui-thread__reply-bar{display:flex;justify-content:flex-end;gap:8px;margin-top:8px}
  .ui-thread__reply-bar button{padding:5px 14px;border-radius:6px;font:600 13px inherit;cursor:pointer;border:1px solid #30363d}
  .ui-thread__reply-bar .ghost{background:#21262d;color:#e6edf3}
  .ui-thread__reply-bar .primary{background:#238636;color:#fff;border-color:rgba(240,246,252,.1)}
</style>`,
    },
    {
      name: 'Emoji Reactions',
      nameJa: 'リアクション',
      desc: 'メッセージやコンテンツに絵文字で反応するUI。',
      detail: 'リアクションUIは、メッセージや投稿に対して絵文字ワンタップで気持ちを伝えられる軽量のフィードバックUIです。「いいね👍」「笑った😂」「悲しい😢」など複数の感情を表現でき、コメントを書くほどでもない反応をすばやく残せます。SlackやDiscord、Facebook、LINEなどで定番のパーツで、同じ絵文字を押した人数をカウントして表示するのが一般的です。新規追加ボタン(+)からピッカーを開いて自由に追加できる設計にすると、コミュニケーションがより豊かになります。',
      descEn: 'React to messages or content with emoji.',
      detailEn: 'Emoji reactions let users respond to a message or post with a single emoji tap. They cover a range of feelings — like, laugh, sad — making it easy to give feedback without writing a full comment. The pattern is standard in Slack, Discord, Facebook, and LINE, and counts of each emoji typically appear next to it. Adding a "plus" button that opens a full picker lets users add any emoji they like, which makes conversations feel richer.',
      code: `<!-- Inspired by Slack message reactions -->
<div class="ui-react">
  <div class="ui-react__row">
    <div class="ui-react__avatar" style="background:#ecb22e">M</div>
    <div class="ui-react__content">
      <div class="ui-react__meta"><strong>Mei R.</strong> <time>11:42 AM</time></div>
      <div class="ui-react__msg">Just pushed the new auth flow to staging — link in <a href="#">#engineering</a>. Would love a quick review before EOD 🙏</div>
      <div class="ui-react__bar">
        <button class="chip me">👀 <span>3</span></button>
        <button class="chip">🚀 <span>5</span></button>
        <button class="chip me">🙌 <span>2</span></button>
        <button class="chip">🔥 <span>1</span></button>
        <button class="chip add" id="uiReactAdd" aria-label="Add reaction">
          <svg width="14" height="14" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="6" cy="7" r="1" fill="currentColor"/><circle cx="10" cy="7" r="1" fill="currentColor"/><path d="M5.5 9.5 Q8 11.5 10.5 9.5" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>
          <span class="plus">+</span>
        </button>
      </div>
    </div>
  </div>
  <div class="ui-react__picker" id="uiReactPicker">
    <div class="ui-react__picker-head"><input placeholder="Search all emoji"></div>
    <div class="ui-react__picker-section">Frequently used</div>
    <div class="ui-react__picker-grid">
      <button>👍</button><button>👀</button><button>🙏</button><button>🚀</button>
      <button>🔥</button><button>🎉</button><button>💯</button><button>😂</button>
      <button>❤️</button><button>✨</button><button>👏</button><button>💡</button>
    </div>
    <div class="ui-react__picker-foot"><span>👋</span><small>:wave:</small></div>
  </div>
</div>

<style>
  .ui-react{max-width:560px;padding:8px 16px;font:15px Lato,"Helvetica Neue",sans-serif;color:#1d1c1d;position:relative;background:#fff}
  .ui-react__row{display:flex;gap:8px}
  .ui-react__avatar{width:36px;height:36px;border-radius:6px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex:none}
  .ui-react__content{flex:1;min-width:0}
  .ui-react__meta strong{font-weight:900;font-size:15px;color:#1d1c1d}
  .ui-react__meta time{color:#616061;font-size:12px;margin-left:6px}
  .ui-react__msg{margin:2px 0 6px;line-height:1.46;font-size:15px}
  .ui-react__msg a{color:#1264a3;text-decoration:none}
  .ui-react__msg a:hover{text-decoration:underline}
  .ui-react__bar{display:flex;flex-wrap:wrap;gap:4px}
  .chip{display:inline-flex;align-items:center;gap:5px;padding:1px 8px;background:#fff;border:1px solid #ddd;border-radius:12px;font:600 13px inherit;cursor:pointer;line-height:22px;color:#454245}
  .chip:hover{background:#f8f8f8;border-color:#1264a3}
  .chip.me{background:#e8f5fa;border-color:#1264a3;color:#1264a3}
  .chip.add{padding:0 7px;color:#616061}
  .chip.add svg{vertical-align:-3px}
  .chip.add .plus{font-size:14px;font-weight:700;margin-left:-2px}
  .ui-react__picker{display:none;position:absolute;top:80%;left:60px;width:340px;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 18px 48px rgba(0,0,0,.12);z-index:10;overflow:hidden}
  .ui-react__picker.open{display:block}
  .ui-react__picker-head{padding:10px}
  .ui-react__picker-head input{width:100%;padding:7px 10px;border:1px solid #ddd;border-radius:6px;font:14px inherit;outline:none;box-sizing:border-box}
  .ui-react__picker-section{padding:4px 12px;font-size:12px;font-weight:700;color:#616061;text-transform:uppercase}
  .ui-react__picker-grid{display:grid;grid-template-columns:repeat(8,1fr);gap:2px;padding:4px 8px}
  .ui-react__picker-grid button{width:36px;height:36px;border:0;background:transparent;border-radius:6px;cursor:pointer;font-size:22px}
  .ui-react__picker-grid button:hover{background:#f8f8f8}
  .ui-react__picker-foot{display:flex;align-items:center;gap:8px;padding:8px 12px;border-top:1px solid #f3f3f3;font-size:13px;color:#616061;background:#fafafa}
  .ui-react__picker-foot span{font-size:20px}
</style>

<script>
  const sa=document.getElementById('uiReactAdd'),sp=document.getElementById('uiReactPicker');
  sa.addEventListener('click',e=>{e.stopPropagation();sp.classList.toggle('open')});
  document.addEventListener('click',e=>{if(!sp.contains(e.target)&&!sa.contains(e.target))sp.classList.remove('open')});
</script>`,
    },
    {
      name: 'Feed Card',
      nameJa: 'フィードカード',
      desc: 'SNSフィードの投稿カード。アバター・テキスト・画像・アクション行。',
      detail: 'フィードカードは、SNSのタイムラインで一件の投稿をまとめて表示するためのカード型UIです。投稿者のアバター・名前・投稿日時、本文、画像、いいねやコメントといったアクション行を1つの箱に収めるのが基本構造です。TwitterやFacebook、Instagramなどおなじみのパターンで、視線の流れが上から下に自然に進むよう設計されています。アクション行を本文の下に揃えて配置することで、どの投稿への操作なのかが直感的に分かります。',
      descEn: 'A social feed post card with avatar, text, image, and action bar.',
      detailEn: 'A feed card packages a single post on a social timeline into one self-contained box. The standard structure stacks the author\'s avatar, name, and timestamp at the top, followed by body text, optional media, and an action bar with likes and comments. Twitter, Facebook, and Instagram all use this layout because it guides the eye smoothly from top to bottom. Aligning the action bar directly under the content makes it instantly clear which post the actions apply to.',
      code: `<!-- Inspired by Threads post -->
<article class="ui-feed">
  <div class="ui-feed__col">
    <div class="ui-feed__avatar">
      <div class="ui-feed__avatar-ring"></div>
      <span class="ui-feed__avatar-plus">+</span>
    </div>
    <div class="ui-feed__line"></div>
    <div class="ui-feed__replies-av">
      <span style="background:#5e6ad2">M</span>
      <span style="background:#f2994a">T</span>
    </div>
  </div>
  <div class="ui-feed__main">
    <header class="ui-feed__head">
      <div class="ui-feed__name">aoi.designs <span class="ui-feed__verify">✓</span></div>
      <time>2h</time>
      <button class="ui-feed__more" aria-label="More">⋯</button>
    </header>
    <p class="ui-feed__body">finally finished the redesign of our settings page after 3 weeks of iteration. small win but it feels good 🌱</p>
    <p class="ui-feed__body">things I learned: less is almost always more, and the radio buttons can wait until v2.</p>
    <div class="ui-feed__media">
      <div class="ui-feed__media-img"></div>
      <div class="ui-feed__media-img alt"></div>
    </div>
    <footer class="ui-feed__actions">
      <button><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.5-9.5-9C1 8.5 3 5 6.5 5 8.5 5 10.5 6 12 8c1.5-2 3.5-3 5.5-3 3.5 0 5.5 3.5 4 8-2.5 4.5-9.5 8-9.5 8z"/></svg></button>
      <button><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12a9 9 0 0 1-13 8l-5 1 1-4A9 9 0 1 1 21 12z"/></svg></button>
      <button><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 2 7 7v15l5-3 5 3V2z"/></svg></button>
      <button><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12l8 8 8-8M12 20V4"/></svg></button>
    </footer>
    <div class="ui-feed__meta">12 replies · 482 likes</div>
  </div>
</article>

<style>
  .ui-feed{display:flex;gap:12px;max-width:540px;padding:16px;background:#fff;border-bottom:.5px solid rgba(0,0,0,.15);font:15px -apple-system,system-ui,sans-serif;color:#000}
  .ui-feed__col{display:flex;flex-direction:column;align-items:center;flex:none}
  .ui-feed__avatar{position:relative;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#fcb045,#fd1d1d,#833ab4);overflow:visible}
  .ui-feed__avatar-ring{position:absolute;inset:2px;background:#a3b8d8;border-radius:50%}
  .ui-feed__avatar-plus{position:absolute;right:-2px;bottom:-2px;width:16px;height:16px;background:#fff;border:1.5px solid #fff;border-radius:50%;color:#0096f6;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;line-height:1}
  .ui-feed__line{flex:1;width:2px;background:rgba(0,0,0,.15);margin:6px 0;min-height:50px;border-radius:1px}
  .ui-feed__replies-av{display:flex}
  .ui-feed__replies-av span{width:18px;height:18px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;border:1.5px solid #fff}
  .ui-feed__replies-av span:last-child{margin-left:-8px}
  .ui-feed__main{flex:1;min-width:0}
  .ui-feed__head{display:flex;align-items:center;gap:6px;margin-bottom:4px}
  .ui-feed__name{font-weight:600;font-size:15px;display:flex;align-items:center;gap:3px}
  .ui-feed__verify{color:#0096f6;font-size:12px;background:transparent}
  .ui-feed__head time{color:rgba(0,0,0,.5);font-size:14px;margin-left:auto}
  .ui-feed__more{background:transparent;border:0;cursor:pointer;color:rgba(0,0,0,.6);font-size:18px;padding:0 4px}
  .ui-feed__body{margin:0 0 6px;line-height:1.4;font-size:15px;color:#000}
  .ui-feed__media{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:8px 0;border-radius:12px;overflow:hidden}
  .ui-feed__media-img{aspect-ratio:1;background:linear-gradient(135deg,#a8edea,#fed6e3);border-radius:12px;border:1px solid rgba(0,0,0,.08)}
  .ui-feed__media-img.alt{background:linear-gradient(135deg,#d4fc79,#96e6a1)}
  .ui-feed__actions{display:flex;gap:4px;margin:8px 0 4px}
  .ui-feed__actions button{background:transparent;border:0;color:#000;padding:8px;border-radius:999px;cursor:pointer;line-height:0}
  .ui-feed__actions button:hover{background:rgba(0,0,0,.05)}
  .ui-feed__meta{color:rgba(0,0,0,.5);font-size:14px}
</style>`,
    },
    {
      name: '@Mention',
      nameJa: 'メンション',
      desc: 'テキスト入力中に@で始まるユーザー候補をサジェストするUI。',
      detail: 'メンションは、テキスト入力中に「@」を打つとユーザー候補の一覧が浮かび上がり、選択すれば名前がリンクとして挿入されるUIです。SlackやNotion、X(Twitter)などで定番のパターンで、特定の人に通知を飛ばしたいときや、コメントで話題の相手を明示するときに使います。入力途中の文字でフィルタリングしてリアルタイムに候補を絞り込み、アバターと表示名を並べて見せると選びやすくなります。矢印キーとEnterで素早く確定できる設計が望ましいです。',
      descEn: 'Suggests user candidates when typing @ in a text input.',
      detailEn: 'A mention UI pops up a list of user suggestions as soon as you type "@" in a text field, and inserts the selected name as a link. Slack, Notion, and X (Twitter) all use this pattern, and it is great for pinging a specific person or pointing to someone in a comment. Filtering the list in real time as the user keeps typing, and showing both an avatar and display name, makes selection easier. Arrow keys plus Enter should always confirm the choice for fast keyboard use.',
      code: `<!-- Inspired by Slack mention picker -->
<div class="ui-mention">
  <div class="ui-mention__channel"># design-system</div>
  <div class="ui-mention__editor">
    <div contenteditable="true" class="ui-mention__input" id="uiMentionInput" data-placeholder="Message #design-system"></div>
    <div class="ui-mention__toolbar">
      <span>B</span><span><em>I</em></span><span>S</span><span>🔗</span><span>•</span><span>1.</span><span>@</span><span>:smile:</span>
      <button class="ui-mention__send">Send</button>
    </div>
  </div>
  <div class="ui-mention__popup" id="uiMentionList">
    <div class="ui-mention__popup-head">People matching <strong id="uiMentionQ">@</strong></div>
    <ul></ul>
  </div>
</div>

<style>
  .ui-mention{position:relative;max-width:520px;font:15px Lato,"Helvetica Neue",sans-serif;color:#1d1c1d;padding:16px;background:#fff}
  .ui-mention__channel{font-weight:700;font-size:18px;margin-bottom:10px}
  .ui-mention__editor{border:1px solid #ddd;border-radius:8px;background:#fff;box-shadow:0 0 0 1px rgba(29,28,29,.04);overflow:hidden}
  .ui-mention__input{min-height:44px;padding:10px 12px;line-height:1.46;outline:none;font-size:15px}
  .ui-mention__input:empty::before{content:attr(data-placeholder);color:rgba(29,28,29,.5)}
  .ui-mention__input .mention{color:#1264a3;background:rgba(29,155,209,.1);padding:0 4px;border-radius:3px;font-weight:600}
  .ui-mention__toolbar{display:flex;align-items:center;gap:10px;padding:6px 8px;border-top:1px solid #efefef;color:#616061;font-size:13px}
  .ui-mention__toolbar span{cursor:pointer;padding:4px 6px;border-radius:4px}
  .ui-mention__toolbar span:hover{background:#f8f8f8;color:#1d1c1d}
  .ui-mention__send{margin-left:auto;background:#007a5a;color:#fff;border:0;padding:6px 12px;border-radius:4px;font:700 13px inherit;cursor:pointer}
  .ui-mention__popup{position:absolute;bottom:90px;left:16px;width:340px;background:#fff;border:1px solid rgba(29,28,29,.13);border-radius:8px;box-shadow:0 4px 24px rgba(0,0,0,.12);display:none;overflow:hidden}
  .ui-mention__popup.open{display:block}
  .ui-mention__popup-head{padding:8px 12px;font-size:12px;color:#616061;text-transform:uppercase;font-weight:700;letter-spacing:.05em;border-bottom:1px solid #efefef}
  .ui-mention__popup-head strong{color:#1d1c1d;font-family:ui-monospace,monospace;text-transform:none;letter-spacing:0}
  .ui-mention__popup ul{list-style:none;margin:0;padding:6px;max-height:260px;overflow:auto}
  .ui-mention__popup li{display:flex;align-items:center;gap:10px;padding:6px 10px;border-radius:4px;cursor:pointer}
  .ui-mention__popup li:hover,.ui-mention__popup li.active{background:#1264a3;color:#fff}
  .ui-mention__popup li.active small,.ui-mention__popup li:hover small,.ui-mention__popup li.active span,.ui-mention__popup li:hover span{color:rgba(255,255,255,.85)}
  .ui-mention__popup .a{width:24px;height:24px;border-radius:4px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex:none}
  .ui-mention__popup strong{font-weight:700;font-size:14px}
  .ui-mention__popup small{color:#616061;font-size:13px;margin-left:auto}
  .ui-mention__popup .dot{width:8px;height:8px;border-radius:50%;background:#2bac76;flex:none}
  .ui-mention__popup .dot.away{background:transparent;border:1.5px solid #888}
</style>

<script>
  (function(){
    const users=[
      {n:'Hana Sato',h:'hana',c:'#ecb22e',on:1},
      {n:'Mei Rivera',h:'mei.r',c:'#5e6ad2',on:1},
      {n:'Takumi Park',h:'takumi.p',c:'#f2994a',on:0},
      {n:'Aoi Kim',h:'aoi',c:'#2eb67d',on:1},
      {n:'channel',h:'channel',c:'#e01e5a',on:1,sub:'Notify everyone in this channel'}
    ];
    const input=document.getElementById('uiMentionInput');
    const list=document.getElementById('uiMentionList');
    const ul=list.querySelector('ul');
    const q=document.getElementById('uiMentionQ');
    let active=0;
    function render(query){
      const f=users.filter(u=>u.n.toLowerCase().includes(query.toLowerCase())||u.h.includes(query.toLowerCase()));
      ul.innerHTML=f.map((u,i)=>'<li class="'+(i===active?'active':'')+'" data-h="'+u.h+'"><span class="a" style="background:'+u.c+'">'+u.n[0]+'</span><span class="dot '+(u.on?'':'away')+'"></span><strong>'+u.n+'</strong><small>'+(u.sub||'@'+u.h)+'</small></li>').join('');
      q.textContent='@'+query;
      list.classList.toggle('open',f.length>0);
    }
    input.addEventListener('input',()=>{
      const m=input.textContent.match(/@(\\S*)$/);
      if(m){active=0;render(m[1])}else{list.classList.remove('open')}
    });
    list.addEventListener('click',e=>{
      const li=e.target.closest('li');if(!li)return;
      const txt=input.textContent.replace(/@\\S*$/,'');
      input.innerHTML=txt+'<span class="mention" contenteditable="false">@'+li.dataset.h+'</span>&nbsp;';
      list.classList.remove('open');
      const r=document.createRange();r.selectNodeContents(input);r.collapse(false);
      const s=window.getSelection();s.removeAllRanges();s.addRange(r);
      input.focus();
    });
  })();
</script>`,
    },
    {
      name: 'Walkthrough',
      nameJa: 'ウォークスルー',
      desc: 'UIの要素をハイライトし、ステップバイステップで使い方を案内するオーバーレイ。',
      detail: 'ウォークスルー(プロダクトツアー)は、画面全体を半透明のオーバーレイで覆い、特定の要素だけを切り抜いてハイライトしながら、機能の使い方を順を追って説明するUIです。「ここをクリックすると検索できます」「ここから設定が変更できます」のように、初回利用者を新機能や複雑な画面に慣れさせるのに使います。各ステップに進む/戻る/スキップのボタンを付け、ユーザーがいつでも中断できるようにするのがマナーです。',
      descEn: 'An overlay highlighting UI elements with step-by-step guidance.',
      detailEn: 'A walkthrough (or product tour) covers the screen with a semi-transparent overlay while cutting out and highlighting a single element at a time, guiding users through features step by step. Tooltips like "click here to search" or "change settings from here" help new users get comfortable with a complex screen or a new feature. Always include next, previous, and skip buttons so people can leave the tour whenever they want.',
      code: `<!-- Inspired by Notion onboarding spotlight -->
<div class="ui-wt-stage">
  <div class="ui-wt-mock">
    <div class="ui-wt-mock__sidebar">
      <div class="sb-item">📥 Inbox</div>
      <div class="sb-item active" id="uiWtTarget">＋ New page</div>
      <div class="sb-item">⚙ Settings</div>
      <div class="sb-section">PRIVATE</div>
      <div class="sb-item">📄 Personal home</div>
      <div class="sb-item">📋 Tasks</div>
    </div>
    <div class="ui-wt-mock__main">
      <h1>Welcome to your workspace</h1>
      <p>Click the buttons highlighted in the tour to learn the basics.</p>
    </div>
  </div>
  <button class="ui-wt-start" id="uiWtStart">Start the tour</button>
</div>

<div class="ui-wt" id="uiWt" hidden>
  <div class="ui-wt__overlay"></div>
  <div class="ui-wt__spot" id="uiWtSpot"></div>
  <div class="ui-wt__tip" id="uiWtTip">
    <div class="ui-wt__step">Step 2 of 5</div>
    <h3>Create your first page</h3>
    <p>Click <strong>+ New page</strong> in the sidebar to start writing. Pages can hold text, tables, databases, and more — they are the building blocks of Notion.</p>
    <div class="ui-wt__progress"><span></span><span class="on"></span><span></span><span></span><span></span></div>
    <div class="ui-wt__actions">
      <button class="ui-wt__skip" onclick="closeWt()">Skip tour</button>
      <div class="ui-wt__nav">
        <button class="ui-wt__back">Back</button>
        <button class="ui-wt__next" onclick="closeWt()">Next →</button>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-wt-stage{position:relative;max-width:480px;font:14px -apple-system,"Segoe UI",sans-serif;color:#37352f}
  .ui-wt-mock{display:flex;border:1px solid rgba(55,53,47,.16);border-radius:6px;overflow:hidden;background:#fff;height:240px}
  .ui-wt-mock__sidebar{width:160px;background:#f7f6f3;padding:8px;font-size:13px;border-right:1px solid rgba(55,53,47,.09)}
  .sb-item{padding:4px 8px;border-radius:3px;color:rgba(55,53,47,.85);margin-bottom:1px;cursor:pointer}
  .sb-item:hover{background:rgba(55,53,47,.06)}
  .sb-item.active{background:rgba(35,131,226,.14)}
  .sb-section{padding:8px 8px 4px;font-size:11px;text-transform:uppercase;color:rgba(55,53,47,.5);font-weight:600;letter-spacing:.04em}
  .ui-wt-mock__main{flex:1;padding:24px}
  .ui-wt-mock__main h1{margin:0 0 8px;font-size:22px;font-weight:700}
  .ui-wt-mock__main p{margin:0;color:rgba(55,53,47,.65);font-size:13px}
  .ui-wt-start{margin-top:12px;padding:6px 14px;background:#0f7b6c;color:#fff;border:0;border-radius:4px;font:500 13px inherit;cursor:pointer}
  .ui-wt{position:fixed;inset:0;z-index:9999;font:14px -apple-system,"Segoe UI",sans-serif;color:#37352f}
  .ui-wt__overlay{position:absolute;inset:0;background:rgba(15,15,15,.6)}
  .ui-wt__spot{position:absolute;border-radius:6px;box-shadow:0 0 0 9999px rgba(15,15,15,.6),0 0 0 4px rgba(35,131,226,.4);pointer-events:none;transition:.25s ease;animation:wtPulse 2s infinite}
  @keyframes wtPulse{0%,100%{box-shadow:0 0 0 9999px rgba(15,15,15,.6),0 0 0 4px rgba(35,131,226,.4)}50%{box-shadow:0 0 0 9999px rgba(15,15,15,.6),0 0 0 8px rgba(35,131,226,.25)}}
  .ui-wt__tip{position:absolute;width:300px;padding:18px 20px;background:#fff;border-radius:8px;box-shadow:0 14px 48px rgba(15,15,15,.4)}
  .ui-wt__tip::before{content:"";position:absolute;left:-6px;top:24px;width:12px;height:12px;background:#fff;transform:rotate(45deg)}
  .ui-wt__step{font-size:12px;color:rgba(55,53,47,.5);margin-bottom:6px;font-weight:500}
  .ui-wt__tip h3{margin:0 0 8px;font-size:16px;font-weight:700}
  .ui-wt__tip p{margin:0 0 14px;color:rgba(55,53,47,.75);line-height:1.5;font-size:14px}
  .ui-wt__tip strong{color:#37352f;background:rgba(35,131,226,.1);padding:1px 4px;border-radius:3px}
  .ui-wt__progress{display:flex;gap:4px;margin-bottom:14px}
  .ui-wt__progress span{flex:1;height:3px;background:rgba(55,53,47,.16);border-radius:2px}
  .ui-wt__progress span.on{background:#2383e2}
  .ui-wt__actions{display:flex;justify-content:space-between;align-items:center;gap:8px}
  .ui-wt__skip{background:transparent;border:0;color:rgba(55,53,47,.5);cursor:pointer;font:500 13px inherit;padding:0}
  .ui-wt__skip:hover{color:#37352f}
  .ui-wt__nav{display:flex;gap:6px}
  .ui-wt__back{padding:6px 12px;background:#fff;color:#37352f;border:1px solid rgba(55,53,47,.16);border-radius:4px;font:500 13px inherit;cursor:pointer}
  .ui-wt__next{padding:6px 14px;background:#2383e2;color:#fff;border:0;border-radius:4px;font:600 13px inherit;cursor:pointer}
</style>

<script>
  const uiWt=document.getElementById('uiWt'),uiWtSpot=document.getElementById('uiWtSpot'),uiWtTip=document.getElementById('uiWtTip');
  document.getElementById('uiWtStart').addEventListener('click',()=>{
    const t=document.getElementById('uiWtTarget'),r=t.getBoundingClientRect();
    uiWtSpot.style.left=(r.left-4)+'px';uiWtSpot.style.top=(r.top-2)+'px';
    uiWtSpot.style.width=(r.width+8)+'px';uiWtSpot.style.height=(r.height+4)+'px';
    uiWtTip.style.left=(r.right+18)+'px';uiWtTip.style.top=(r.top-10)+'px';
    uiWt.hidden=false;
  });
  function closeWt(){uiWt.hidden=true}
</script>`,
    },
    {
      name: 'Welcome Screen',
      nameJa: 'ウェルカム画面',
      desc: 'アプリ初回起動時に表示されるスワイプ式のイントロダクション画面。',
      detail: 'ウェルカム画面は、アプリの初回起動時に表示される導入画面で、主要機能や特徴を3〜5枚のスライドでスワイプしながら紹介します。イラストとキャッチコピーで「このアプリで何ができるか」を直感的に伝え、最後のスライドで「始める」「ログイン」へとつなぐのが定番です。離脱を防ぐためページネーションドットを置き、いつでも「スキップ」できるようにします。文字を詰め込みすぎず、1スライド1メッセージに絞るのが効果的です。',
      descEn: 'A swipeable intro screen shown on first app launch.',
      detailEn: 'A welcome screen appears the first time someone opens an app and walks them through its key features with three to five swipeable slides. Illustrations and short headlines give an instant sense of "what you can do with this app," and the final slide usually leads to a "get started" or login button. Pagination dots show progress and a "skip" link should always be available. Keep each slide focused on a single message rather than cramming in text.',
      code: `<!-- Inspired by Linear first run -->
<div class="ui-welcome">
  <div class="ui-welcome__bg"></div>
  <div class="ui-welcome__brand">
    <div class="ui-welcome__logo"></div>
    <span>Linear</span>
  </div>
  <h1 class="ui-welcome__title">Welcome to Linear</h1>
  <p class="ui-welcome__sub">A purpose-built tool for planning and building products. Set up your workspace in a few quick steps.</p>
  <div class="ui-welcome__cards">
    <div class="ui-welcome__card selected">
      <div class="ui-welcome__icon" style="background:linear-gradient(135deg,#5e6ad2,#bb87fc)">◆</div>
      <strong>Create a new workspace</strong>
      <small>Start fresh with a blank workspace for your team</small>
      <div class="ui-welcome__check">✓</div>
    </div>
    <div class="ui-welcome__card">
      <div class="ui-welcome__icon" style="background:linear-gradient(135deg,#26b5ce,#5e6ad2)">↗</div>
      <strong>Join an existing workspace</strong>
      <small>Sign in with your work email to discover your team</small>
    </div>
    <div class="ui-welcome__card">
      <div class="ui-welcome__icon" style="background:linear-gradient(135deg,#f2994a,#eb5757)">⇪</div>
      <strong>Import from another tool</strong>
      <small>Migrate from Jira, Asana, Trello, or GitHub Issues</small>
    </div>
  </div>
  <div class="ui-welcome__foot">
    <button class="ui-welcome__skip">Sign in instead</button>
    <button class="ui-welcome__next">Continue →</button>
  </div>
</div>

<style>
  .ui-welcome{position:relative;max-width:520px;padding:48px 40px 32px;background:#08090a;border-radius:12px;font:14px ui-sans-serif,-apple-system,"Inter",sans-serif;color:#e6e6e6;overflow:hidden;border:1px solid #26272b}
  .ui-welcome__bg{position:absolute;inset:-50% -10% auto -10%;height:300px;background:radial-gradient(circle at 50% 0,rgba(94,106,210,.25) 0%,transparent 60%);pointer-events:none}
  .ui-welcome__brand{display:flex;align-items:center;gap:8px;margin-bottom:24px;font-weight:600;font-size:14px;position:relative}
  .ui-welcome__logo{width:18px;height:18px;background:#fff;border-radius:4px;transform:rotate(45deg)}
  .ui-welcome__title{margin:0 0 8px;font-size:28px;font-weight:600;letter-spacing:-.02em;position:relative}
  .ui-welcome__sub{margin:0 0 28px;color:#8a8f98;line-height:1.5;font-size:14px;position:relative}
  .ui-welcome__cards{display:flex;flex-direction:column;gap:8px;margin-bottom:24px;position:relative}
  .ui-welcome__card{display:grid;grid-template-columns:36px 1fr auto;column-gap:14px;row-gap:2px;padding:14px;background:#1c1d20;border:1px solid #26272b;border-radius:8px;cursor:pointer;transition:.15s;align-items:center}
  .ui-welcome__card:hover{background:#222327;border-color:#3a3b40}
  .ui-welcome__card.selected{border-color:#5e6ad2;background:#1d1f29;box-shadow:0 0 0 1px #5e6ad2}
  .ui-welcome__icon{grid-row:1/3;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;color:#fff;font-weight:700}
  .ui-welcome__card strong{font-weight:500;color:#e6e6e6;font-size:14px}
  .ui-welcome__card small{font-size:12px;color:#8a8f98;line-height:1.4}
  .ui-welcome__check{grid-row:1/3;width:20px;height:20px;background:#5e6ad2;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}
  .ui-welcome__card:not(.selected) .ui-welcome__check{display:none}
  .ui-welcome__foot{display:flex;justify-content:space-between;align-items:center;position:relative}
  .ui-welcome__skip{background:transparent;border:0;color:#8a8f98;cursor:pointer;font:500 13px inherit}
  .ui-welcome__skip:hover{color:#e6e6e6}
  .ui-welcome__next{padding:7px 16px;background:#5e6ad2;color:#fff;border:0;border-radius:6px;font:500 13px inherit;cursor:pointer}
  .ui-welcome__next:hover{background:#6b76e0}
</style>`,
    },
    {
      name: 'Progress Checklist',
      nameJa: 'プログレスチェックリスト',
      desc: 'セットアップの完了度をチェックリストで表示し、次のアクションを促す。',
      detail: 'プログレスチェックリストは、アカウント開設や初期設定の進み具合をタスクリスト形式で表示するUIです。「プロフィール写真の登録」「2段階認証の有効化」など、ユーザーにやってほしい行動を並べて、完了したものにチェックを入れ、進捗バーで「あと何%」を示します。Notion、Asana、Slackなどのオンボーディングで広く使われ、未完了タスクをワンクリックで実行できる導線を併設すると、利用定着率が大きく上がります。',
      descEn: 'Shows setup completion as a checklist and prompts next actions.',
      detailEn: 'A progress checklist displays setup or onboarding tasks as a list with checkboxes, alongside a progress bar that shows how much is done. Items like "upload a profile photo" or "enable two-factor auth" guide the user toward the actions you want them to take. Notion, Asana, and Slack all use this pattern in their onboarding, and pairing each unfinished task with a one-click button to complete it dramatically improves activation rates.',
      code: `<!-- Inspired by Stripe onboarding checklist -->
<div class="ui-checklist">
  <div class="ui-checklist__head">
    <div>
      <strong>Activate your account</strong>
      <p>Complete these steps to start accepting live payments.</p>
    </div>
    <div class="ui-checklist__pct">
      <svg viewBox="0 0 36 36" width="44" height="44"><circle cx="18" cy="18" r="15" fill="none" stroke="#e3e8ee" stroke-width="3"/><circle cx="18" cy="18" r="15" fill="none" stroke="#635bff" stroke-width="3" stroke-dasharray="94.25" stroke-dashoffset="47" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg>
      <span>50%</span>
    </div>
  </div>
  <ul class="ui-checklist__list">
    <li class="done"><span class="ui-checklist__check">✓</span><div><strong>Verify your email address</strong><small>Completed Sep 15</small></div></li>
    <li class="done"><span class="ui-checklist__check">✓</span><div><strong>Add your business details</strong><small>Acme Inc · United States</small></div></li>
    <li class="active"><span class="ui-checklist__check"></span><div><strong>Add bank account for payouts</strong><small>Required · Takes about 2 minutes</small></div><button class="primary">Add bank</button></li>
    <li><span class="ui-checklist__check"></span><div><strong>Verify your identity</strong><small>Upload a government-issued ID</small></div><button>Start →</button></li>
    <li><span class="ui-checklist__check"></span><div><strong>Customize your branding</strong><small>Optional · Add logo and colors</small></div><button>Add →</button></li>
  </ul>
  <a class="ui-checklist__skip" href="#">I'll do this later →</a>
</div>

<style>
  .ui-checklist{max-width:520px;padding:24px;background:#fff;border-radius:8px;box-shadow:0 0 0 1px rgba(0,0,0,.06),0 2px 5px rgba(50,50,93,.05);font:14px -apple-system,"Helvetica Neue","Segoe UI",sans-serif;color:#1a1f36}
  .ui-checklist__head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:20px}
  .ui-checklist__head strong{font-size:16px;font-weight:600;display:block;margin-bottom:4px}
  .ui-checklist__head p{margin:0;color:#697386;font-size:13px;line-height:1.5}
  .ui-checklist__pct{position:relative;flex:none}
  .ui-checklist__pct span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#635bff}
  .ui-checklist__list{list-style:none;margin:0 0 12px;padding:0;display:flex;flex-direction:column}
  .ui-checklist__list li{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #f0f3f7}
  .ui-checklist__list li:last-child{border-bottom:0}
  .ui-checklist__list li.active{background:linear-gradient(90deg,rgba(99,91,255,.04),transparent);margin:0 -12px;padding-left:12px;padding-right:12px;border-radius:6px}
  .ui-checklist__check{flex:none;width:20px;height:20px;border:1.5px solid #cfd7df;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;background:#fff}
  .ui-checklist__list li.done .ui-checklist__check{background:#0a8a4d;border-color:#0a8a4d}
  .ui-checklist__list li.active .ui-checklist__check{border-color:#635bff;border-style:dashed}
  .ui-checklist__list li > div{flex:1;line-height:1.4}
  .ui-checklist__list strong{display:block;font-size:14px;font-weight:500;color:#1a1f36}
  .ui-checklist__list li.done strong{color:#425466}
  .ui-checklist__list small{color:#697386;font-size:12px}
  .ui-checklist__list button{padding:5px 12px;background:#fff;color:#425466;border:1px solid #e3e8ee;border-radius:4px;font:500 12px inherit;cursor:pointer;box-shadow:0 1px 1px rgba(0,0,0,.04)}
  .ui-checklist__list button:hover{border-color:#cfd7df}
  .ui-checklist__list button.primary{background:#635bff;color:#fff;border-color:#635bff;font-weight:600;box-shadow:0 1px 3px rgba(99,91,255,.3)}
  .ui-checklist__list button.primary:hover{background:#5851ec}
  .ui-checklist__skip{display:inline-block;font-size:13px;color:#635bff;text-decoration:none;font-weight:500}
  .ui-checklist__skip:hover{text-decoration:underline}
</style>`,
    },
  ],
}
