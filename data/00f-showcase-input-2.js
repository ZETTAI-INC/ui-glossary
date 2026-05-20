/**
 * UI Parts Showcase (Input 2) — advanced input-oriented UI components.
 * Each entry includes a standalone HTML + CSS (+ optional JS) snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-input-2',
  title: 'UIパーツ集(入力系2)',
  titleEn: 'Input Components 2',
  description: '高度な入力UIパーツの第二弾。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Autocomplete',
      nameJa: 'オートコンプリート',
      desc: '入力中に候補をリスト表示して選べる検索ボックス。',
      detail: 'オートコンプリートは、ユーザーが文字を入力するたびに関連する候補をリスト表示し、選ぶだけで入力を完了できるUIです。検索ボックス、住所・駅名・タグ名の入力、メールアドレス補完などで広く使われ、タイプミスを減らし入力速度を上げます。候補は前方一致や部分一致でフィルタし、最大10件程度に絞ると見やすくなります。例えばGoogle検索のサジェストや、Slackのメンション入力が代表例です。',
      descEn: 'A search box that shows matching suggestions as you type so you can pick instead of typing fully.',
      detailEn: 'Autocomplete shows a list of suggestions matching what the user has typed so far, letting them finish input with a single click. It is used in search boxes, address or station name fields, tag inputs, and email completion — anywhere typing is slow or error-prone. Filter suggestions by prefix or substring match, and cap the list at around 10 items to keep it scannable. Google\'s search suggestions and Slack\'s @ mention picker are classic examples.',
      code: `/* Inspired by GitHub */
<div class="ui-autocomplete" id="ac">
  <div class="ui-autocomplete__field">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#7d8590"><path d="M10.68 11.74a6 6 0 01-7.92-8.5 6 6 0 018.5 7.92l3.85 3.85a.75.75 0 01-1.06 1.06l-3.86-3.85zM11.5 7a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"/></svg>
    <input class="ui-autocomplete__input" type="text" placeholder="Type / to search" value="react">
    <kbd>/</kbd>
  </div>
  <ul class="ui-autocomplete__list" role="listbox"></ul>
</div>

<style>
  .ui-autocomplete{position:relative;width:320px;font:13px -apple-system,'Segoe UI',sans-serif;color:#e6edf3}
  .ui-autocomplete__field{display:flex;align-items:center;gap:8px;padding:5px 8px;background:#0d1117;border:1px solid #30363d;border-radius:6px}
  .ui-autocomplete__field:focus-within{border-color:#1f6feb;box-shadow:0 0 0 3px rgba(31,111,235,.3)}
  .ui-autocomplete__input{flex:1;border:0;outline:none;background:transparent;color:#e6edf3;font:13px inherit}
  .ui-autocomplete__input::placeholder{color:#7d8590}
  .ui-autocomplete kbd{padding:1px 6px;background:#161b22;border:1px solid #30363d;border-radius:3px;font:11px ui-monospace,monospace;color:#7d8590}
  .ui-autocomplete__list{position:absolute;top:calc(100% + 4px);left:0;right:0;list-style:none;margin:0;padding:6px;background:#161b22;border:1px solid #30363d;border-radius:6px;box-shadow:0 8px 24px rgba(1,4,9,.85);display:none;z-index:10}
  .ui-autocomplete.open .ui-autocomplete__list{display:block}
  .ui-autocomplete__list li{display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:4px;cursor:pointer;color:#e6edf3}
  .ui-autocomplete__list li::before{content:"";width:14px;height:14px;background:#1f6feb;border-radius:3px;flex:none}
  .ui-autocomplete__list li:hover,.ui-autocomplete__list li.active{background:#1f6feb}
  .ui-autocomplete__list li mark{background:transparent;color:#7ee787;font-weight:600}
  .ui-autocomplete__list li small{margin-left:auto;color:#7d8590;font-size:11px}
</style>

<script>
  (()=>{const ac=document.getElementById('ac'),inp=ac.querySelector('.ui-autocomplete__input'),list=ac.querySelector('.ui-autocomplete__list');
    const data=[['facebook/react','228k'],['reactjs/react.dev','11k'],['react-hook-form/react-hook-form','40k'],['remix-run/react-router','53k'],['pmndrs/react-three-fiber','27k'],['vercel/next.js','120k']];
    const render=q=>{const v=q.trim().toLowerCase();list.innerHTML='';if(!v){ac.classList.remove('open');return}
      const hits=data.filter(d=>d[0].toLowerCase().includes(v)).slice(0,6);
      if(!hits.length){ac.classList.remove('open');return}
      hits.forEach(([h,s])=>{const li=document.createElement('li');const i=h.toLowerCase().indexOf(v);li.innerHTML='<span>'+h.slice(0,i)+'<mark>'+h.slice(i,i+v.length)+'</mark>'+h.slice(i+v.length)+'</span><small>★ '+s+'</small>';li.onclick=()=>{inp.value=h;ac.classList.remove('open')};list.appendChild(li)});
      ac.classList.add('open')};
    inp.addEventListener('input',e=>render(e.target.value));render('react');
    document.addEventListener('click',e=>{if(!ac.contains(e.target))ac.classList.remove('open')});
  })();
</script>`,
    },
    {
      name: 'Tag Input',
      nameJa: 'タグ入力',
      desc: 'Enterで入力をタグ化、xで削除できる複数キーワード入力。',
      detail: 'タグ入力は、テキストを入力してEnterキーを押すと「タグ」として確定し、横並びに表示されるUIです。ブログ記事のタグ付け、メール宛先入力、検索条件の追加など、複数の短いキーワードを順に追加する場面で活躍します。各タグには×ボタンが付き、クリック1つで削除できるのが定番。Backspaceで末尾を消せるなど、キーボード操作にも対応しておくとパワーユーザーに喜ばれます。',
      descEn: 'An input where pressing Enter turns text into a removable tag, used for multi-keyword entry.',
      detailEn: 'Tag input lets users type a word and press Enter to lock it in as a "tag" that lines up next to others in the field. It shines whenever you need to add several short keywords in sequence — blog tags, email recipients, or search filters. Each tag gets an × button so it can be removed with a single click. Supporting keyboard shortcuts like Backspace to delete the last tag is a small touch that power users especially appreciate.',
      code: `/* Inspired by Gmail */
<div class="ui-tag-input" id="ti">
  <span class="ui-tag-input__label">To</span>
  <ul class="ui-tag-input__tags"></ul>
  <input class="ui-tag-input__field" type="text" placeholder="">
  <a class="ui-tag-input__cc" href="#">Cc</a>
  <a class="ui-tag-input__cc" href="#">Bcc</a>
</div>

<style>
  .ui-tag-input{display:flex;flex-wrap:wrap;align-items:center;gap:4px;width:420px;min-height:38px;padding:6px 12px;border-bottom:1px solid #dadce0;background:#fff;font:14px 'Google Sans',Roboto,Arial,sans-serif;color:#202124;cursor:text}
  .ui-tag-input:focus-within{border-bottom-color:#1a73e8;box-shadow:0 1px 0 0 #1a73e8}
  .ui-tag-input__label{color:#5f6368;font-size:14px;margin-right:8px}
  .ui-tag-input__tags{display:contents;list-style:none;margin:0;padding:0}
  .ui-tag-input__tags li{display:inline-flex;align-items:center;gap:4px;padding:2px 4px 2px 2px;background:#e8f0fe;color:#202124;border-radius:16px;font-size:13px}
  .ui-tag-input__tags .ui-tag-input__chip-avatar{width:22px;height:22px;border-radius:50%;background:#1a73e8;color:#fff;display:flex;align-items:center;justify-content:center;font:500 11px Roboto,sans-serif}
  .ui-tag-input__remove{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:0;background:transparent;color:#5f6368;border-radius:50%;cursor:pointer;font-size:16px;line-height:1;padding:0;margin-left:2px}
  .ui-tag-input__remove:hover{background:#dadce0;color:#202124}
  .ui-tag-input__field{flex:1;min-width:60px;border:0;outline:none;padding:4px 2px;font:14px inherit;color:#202124;background:transparent}
  .ui-tag-input__cc{margin-left:6px;color:#5f6368;font-size:13px;text-decoration:none;cursor:pointer}
  .ui-tag-input__cc:hover{color:#202124}
</style>

<script>
  (()=>{const ti=document.getElementById('ti'),tags=ti.querySelector('.ui-tag-input__tags'),inp=ti.querySelector('.ui-tag-input__field');
    const palette=['#1a73e8','#188038','#d93025','#e8710a','#9334e6'];
    const add=(t)=>{const li=document.createElement('li');const initial=t.charAt(0).toUpperCase();const color=palette[tags.children.length%palette.length];li.innerHTML='<span class="ui-tag-input__chip-avatar" style="background:'+color+'">'+initial+'</span><span></span><button class="ui-tag-input__remove" aria-label="Remove">×</button>';li.querySelectorAll('span')[1].textContent=t;li.querySelector('button').onclick=()=>li.remove();tags.appendChild(li)};
    ['hiroshi.tanaka@gmail.com','yuki.sato@gmail.com','design-team@company.co.jp'].forEach(add);
    inp.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===',')&&inp.value.trim()){e.preventDefault();add(inp.value.trim());inp.value=''}else if(e.key==='Backspace'&&!inp.value&&tags.lastElementChild){tags.lastElementChild.remove()}});
  })();
</script>`,
    },
    {
      name: 'OTP Input',
      nameJa: 'OTP入力',
      desc: '6桁の認証コードを1マスずつ入力するUI。SMS認証で頻出。',
      detail: 'OTP(ワンタイムパスワード)入力は、SMSやメールで届く6桁前後の認証コードを、1マス1文字ずつ入力するUIです。1文字打つと自動で次のマスにフォーカスが移動し、Backspaceで前のマスに戻れます。ペースト操作で全桁を一気に入力できる気配りも重要で、特にスマホでSMSを切り替えながら入力するユーザーに優しい設計になります。銀行アプリ、二段階認証、決済確認など、セキュリティが求められる場面で必須のUIです。',
      descEn: 'A row of single-character boxes for entering a 6-digit verification code from SMS or email.',
      detailEn: 'OTP (one-time password) input is a row of boxes where users type a verification code one character per box. Typing auto-advances to the next box, and Backspace moves back. Supporting paste so a full code can be filled in at once is essential — especially on phones where users switch between the SMS app and the form. This pattern shows up in banking apps, two-factor authentication, and payment confirmation flows wherever extra security is needed.',
      code: `/* Inspired by Stripe */
<div class="ui-otp-card">
  <div class="ui-otp-icon">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
  </div>
  <h2>Two-step verification</h2>
  <p>Enter the 6-digit code we sent to +81 ••• ••• 4421</p>
  <div class="ui-otp" id="otp">
    <input type="text" maxlength="1" inputmode="numeric" value="4">
    <input type="text" maxlength="1" inputmode="numeric" value="2">
    <input type="text" maxlength="1" inputmode="numeric" value="7">
    <input type="text" maxlength="1" inputmode="numeric">
    <input type="text" maxlength="1" inputmode="numeric">
    <input type="text" maxlength="1" inputmode="numeric">
  </div>
  <button class="ui-otp-resend">Didn't get a code? Resend in 0:42</button>
</div>

<style>
  .ui-otp-card{width:380px;padding:32px;background:#fff;border-radius:12px;box-shadow:0 0 0 1px rgba(50,50,93,.06),0 4px 20px rgba(50,50,93,.08);font:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0a2540;text-align:center}
  .ui-otp-icon{width:44px;height:44px;margin:0 auto 18px;background:linear-gradient(135deg,#635bff,#7a73ff);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(99,91,255,.35)}
  .ui-otp-card h2{margin:0 0 8px;font:600 18px inherit;color:#0a2540}
  .ui-otp-card p{margin:0 0 22px;font-size:14px;color:#425466;line-height:1.5}
  .ui-otp{display:flex;gap:8px;justify-content:center;margin-bottom:18px}
  .ui-otp input{width:48px;height:56px;border:1px solid #e3e8ee;border-radius:8px;background:#fff;text-align:center;font:600 22px inherit;color:#0a2540;transition:.15s;box-shadow:0 1px 2px rgba(50,50,93,.05)}
  .ui-otp input:focus{outline:none;border-color:#635bff;box-shadow:0 0 0 3px rgba(99,91,255,.25)}
  .ui-otp input:not(:placeholder-shown):not(:focus),.ui-otp input[value]:not([value=""]):not(:focus){border-color:#635bff;background:#f6f5ff}
  .ui-otp-resend{border:0;background:transparent;color:#635bff;font:500 13px inherit;cursor:pointer}
</style>

<script>
  (()=>{const boxes=[...document.querySelectorAll('#otp input')];
    boxes.forEach((b,i)=>{
      b.addEventListener('input',e=>{b.value=e.target.value.replace(/\\D/g,'').slice(0,1);if(b.value&&i<boxes.length-1)boxes[i+1].focus()});
      b.addEventListener('keydown',e=>{if(e.key==='Backspace'&&!b.value&&i>0)boxes[i-1].focus()});
    });
  })();
</script>`,
    },
    {
      name: 'Color Picker',
      nameJa: 'カラーピッカー',
      desc: 'カラーパレットから色を選ぶUI。プリセット+カスタム入力。',
      detail: 'カラーピッカーは、用意されたカラーパレットから色を選んだり、カスタムのHEXコードや色相環から自由に色を指定したりできるUIです。デザインツール、ブランドカラー設定、テーマ変更、ラベル色付けなどで使われます。プリセット色を並べておくと選びやすく、入力欄も併設すれば「ちょうどこの色」というピンポイント指定も叶います。現在選択中の色を大きくプレビューしておくと、選んだ結果が一目で分かり安心感があります。',
      descEn: 'A palette of swatches plus a custom input for picking a precise color.',
      detailEn: 'A color picker lets users choose from a preset palette or specify a custom color via a HEX code or color wheel. It is common in design tools, brand color settings, theme switchers, and label coloring. Preset swatches make picking fast, while an input field lets users dial in an exact shade. Showing a large preview of the currently selected color reassures users that their choice was registered, especially when subtle differences matter.',
      code: `/* Inspired by Figma */
<div class="ui-color-picker" id="cp">
  <div class="ui-color-picker__head">
    <span>Fill</span>
    <button aria-label="close">×</button>
  </div>
  <div class="ui-color-picker__canvas"><div class="ui-color-picker__cursor"></div></div>
  <div class="ui-color-picker__hue"><div class="ui-color-picker__hue-thumb"></div></div>
  <div class="ui-color-picker__row">
    <div class="ui-color-picker__swatch" id="cpSwatch"></div>
    <div class="ui-color-picker__inputs">
      <label>Hex</label>
      <input type="text" id="cpHex" value="7C3AED">
      <input type="text" value="100" class="ui-color-picker__alpha">
      <span>%</span>
    </div>
  </div>
  <div class="ui-color-picker__recent">
    <button style="background:#7c3aed" data-c="#7c3aed"></button>
    <button style="background:#0acf83" data-c="#0acf83"></button>
    <button style="background:#ff7262" data-c="#ff7262"></button>
    <button style="background:#1abcfe" data-c="#1abcfe"></button>
    <button style="background:#f24e1e" data-c="#f24e1e"></button>
    <button style="background:#a259ff" data-c="#a259ff"></button>
    <button style="background:#ffc700" data-c="#ffc700"></button>
  </div>
</div>

<style>
  .ui-color-picker{width:240px;background:#2c2c2c;border-radius:6px;padding:10px;box-shadow:0 8px 32px rgba(0,0,0,.5);font:11px Inter,-apple-system,sans-serif;color:#fff;user-select:none}
  .ui-color-picker__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;color:#fff}
  .ui-color-picker__head button{background:transparent;border:0;color:#b3b3b3;cursor:pointer;font-size:16px}
  .ui-color-picker__canvas{position:relative;width:100%;height:140px;border-radius:4px;background:linear-gradient(to bottom,transparent,#000),linear-gradient(to right,#fff,#7c3aed);margin-bottom:8px}
  .ui-color-picker__cursor{position:absolute;top:22%;left:78%;width:10px;height:10px;border:2px solid #fff;border-radius:50%;box-shadow:0 0 0 1px rgba(0,0,0,.4);transform:translate(-50%,-50%)}
  .ui-color-picker__hue{position:relative;height:10px;border-radius:3px;background:linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);margin-bottom:10px}
  .ui-color-picker__hue-thumb{position:absolute;top:50%;left:78%;width:10px;height:14px;background:#fff;border:1px solid rgba(0,0,0,.5);border-radius:2px;transform:translate(-50%,-50%)}
  .ui-color-picker__row{display:flex;gap:6px;align-items:center;margin-bottom:8px}
  .ui-color-picker__swatch{width:24px;height:24px;border-radius:3px;background:#7c3aed;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
  .ui-color-picker__inputs{flex:1;display:flex;align-items:center;gap:4px;background:#1e1e1e;border-radius:3px;padding:2px 6px}
  .ui-color-picker__inputs label{color:#b3b3b3;font-size:11px}
  .ui-color-picker__inputs input{flex:1;background:transparent;border:0;outline:none;color:#fff;font:11px ui-monospace,monospace;min-width:0;width:60px}
  .ui-color-picker__alpha{width:30px !important;flex:none !important;border-left:1px solid #383838 !important;padding-left:6px}
  .ui-color-picker__inputs span{color:#b3b3b3}
  .ui-color-picker__recent{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}
  .ui-color-picker__recent button{aspect-ratio:1;border:0;border-radius:3px;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1)}
</style>

<script>
  (()=>{const sw=document.getElementById('cpSwatch'),hex=document.getElementById('cpHex');
    document.querySelectorAll('.ui-color-picker__recent button').forEach(b=>b.onclick=()=>{sw.style.background=b.dataset.c;hex.value=b.dataset.c.slice(1).toUpperCase()});
  })();
</script>`,
    },
    {
      name: 'Password Field',
      nameJa: 'パスワード欄',
      desc: '表示/非表示切替アイコン付き+強度メーター付きパスワード入力。',
      detail: 'パスワード欄は、入力した文字を隠して伏字(●●●)で表示する入力欄です。打ち間違いを確認できるよう「目」アイコンで一時的に表示/非表示を切り替えられる機能、文字数や記号の有無から「弱・中・強」を判定して色付きバーで示す強度メーターを併設するのが現代の標準です。新規登録、パスワード変更、ログインなど、セキュリティが要となる画面に必須。ユーザーが安全で覚えやすいパスワードを設定する助けになります。',
      descEn: 'A password input with a show/hide eye icon and a strength meter.',
      detailEn: 'A password field hides typed characters behind dots (●●●). Today\'s standard adds two helpers: an eye icon that reveals the input temporarily so users can check for typos, and a strength meter that grades the password as weak/medium/strong based on length and character variety using a colored bar. It is essential on sign-up, password change, and login screens, and it helps users land on passwords that are both secure and easy to remember.',
      code: `/* Inspired by 1Password */
<div class="ui-password" id="pw">
  <div class="ui-password__head">
    <span class="ui-password__icon">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
    </span>
    <label>password</label>
  </div>
  <div class="ui-password__wrap">
    <input class="ui-password__input" id="pwInput" type="password" value="Tr0ub4dor&3-CorrectHorse">
    <button class="ui-password__copy" type="button" aria-label="copy">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 012-2h9"/></svg>
    </button>
    <button class="ui-password__toggle" type="button" aria-label="reveal">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
    </button>
  </div>
  <div class="ui-password__meter"><span class="s4" id="pwBar"></span></div>
  <p class="ui-password__hint"><span class="ui-password__strength">Strong</span> <span>·</span> <span>23 characters · letters, numbers, symbols</span></p>
</div>

<style>
  .ui-password{width:320px;padding:16px;background:#fff;border:1px solid #e1e4e8;border-radius:10px;box-shadow:0 4px 16px rgba(0,0,0,.06);font:13px -apple-system,'Segoe UI',sans-serif;color:#1c1c1e}
  .ui-password__head{display:flex;align-items:center;gap:8px;margin-bottom:6px}
  .ui-password__icon{width:20px;height:20px;background:#0572ec;border-radius:5px;display:flex;align-items:center;justify-content:center}
  .ui-password__head label{font:600 11px inherit;color:#6b6b70;text-transform:lowercase;letter-spacing:.02em}
  .ui-password__wrap{position:relative;display:flex;align-items:center;background:#f5f5f7;border-radius:8px;padding:8px 8px 8px 12px;gap:4px}
  .ui-password__input{flex:1;border:0;outline:none;background:transparent;font:600 13px ui-monospace,'SF Mono',monospace;color:#1c1c1e;letter-spacing:.02em;-webkit-text-security:disc}
  .ui-password__input[type=text]{-webkit-text-security:none}
  .ui-password__copy,.ui-password__toggle{width:28px;height:28px;border:0;background:transparent;color:#6b6b70;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
  .ui-password__copy:hover,.ui-password__toggle:hover{background:#e8e8ea;color:#0572ec}
  .ui-password__meter{height:3px;background:#e8e8ea;border-radius:999px;overflow:hidden;margin:12px 0 6px}
  .ui-password__meter span{display:block;height:100%;width:100%;background:#22c55e;border-radius:999px}
  .ui-password__meter span.s2{width:50%;background:#f59e0b}
  .ui-password__meter span.s3{width:75%;background:#eab308}
  .ui-password__hint{margin:0;font-size:11px;color:#6b6b70;display:flex;gap:6px;align-items:center}
  .ui-password__strength{color:#22c55e;font-weight:600}
</style>

<script>
  (()=>{const inp=document.getElementById('pwInput'),tgl=document.querySelector('.ui-password__toggle');
    tgl.onclick=()=>{inp.type=inp.type==='password'?'text':'password'};
  })();
</script>`,
    },
    {
      name: 'Toggle Button Group',
      nameJa: 'トグルボタングループ',
      desc: '複数選択可能なボタン群(複数選択スタイル)。',
      detail: 'トグルボタングループは、横並びのボタンを複数同時にオン/オフ切り替えできるUIです。セグメントコントロールが「1つだけ」なのに対し、こちらは「いくつでも」選べるのが違い。文字書式の太字・斜体・下線、フィルター条件の複数指定、機能のオプション切替など、状態の組み合わせを直感的に伝えたい場面で活躍します。選択中は背景色や太字でハッキリ区別し、押した手応えが伝わる視覚フィードバックが大切です。',
      descEn: 'A row of buttons where any number can be toggled on at once (multi-select style).',
      detailEn: 'A toggle button group is a row of buttons that can be individually turned on or off. The key difference from a segmented control is "pick any number" instead of "pick exactly one." It is great for text formatting (bold/italic/underline), multi-condition filters, and option toggles — anywhere a combination of states needs to be conveyed. Use a clear active background color or bold weight so users feel the press register on screen.',
      code: `/* Inspired by Notion */
<div class="ui-toggle-wrap">
  <div class="ui-toggle-group" role="group" aria-label="Text formatting">
    <button class="ui-toggle-group__btn" aria-pressed="true" title="Bold ⌘B"><b>B</b></button>
    <button class="ui-toggle-group__btn" aria-pressed="true" title="Italic ⌘I"><i>i</i></button>
    <button class="ui-toggle-group__btn" aria-pressed="false" title="Underline ⌘U"><u>U</u></button>
    <button class="ui-toggle-group__btn" aria-pressed="false" title="Strikethrough"><s>S</s></button>
    <span class="ui-toggle-group__sep"></span>
    <button class="ui-toggle-group__btn" aria-pressed="false" title="Code">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    </button>
    <button class="ui-toggle-group__btn" aria-pressed="true" title="Link">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1"/><path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>
    </button>
    <button class="ui-toggle-group__btn" aria-pressed="false" title="Comment">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    </button>
  </div>
</div>

<style>
  .ui-toggle-wrap{padding:24px;background:#191919;display:inline-block;border-radius:12px}
  .ui-toggle-group{display:inline-flex;align-items:center;background:#252525;border:1px solid #373737;border-radius:6px;padding:3px;box-shadow:0 8px 24px rgba(0,0,0,.4);font:14px -apple-system,'Segoe UI Emoji',sans-serif;color:#e8e8e6}
  .ui-toggle-group__btn{min-width:30px;height:28px;padding:0 8px;border:0;background:transparent;color:#9b9b97;font:500 14px inherit;cursor:pointer;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;transition:.1s}
  .ui-toggle-group__btn:hover{background:#373737;color:#e8e8e6}
  .ui-toggle-group__btn[aria-pressed="true"]{color:#ffffff}
  .ui-toggle-group__btn[aria-pressed="true"] b,.ui-toggle-group__btn[aria-pressed="true"] i,.ui-toggle-group__btn[aria-pressed="true"] u,.ui-toggle-group__btn[aria-pressed="true"] s{color:#2eaadc}
  .ui-toggle-group__sep{width:1px;height:18px;background:#373737;margin:0 4px}
</style>

<script>
  document.querySelectorAll('.ui-toggle-group__btn').forEach(b=>b.addEventListener('click',()=>{b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')}));
</script>`,
    },
    {
      name: 'Textarea Auto-grow',
      nameJa: '自動拡張テキストエリア',
      desc: '入力に合わせて高さが自動で伸びる複数行入力。',
      detail: '自動拡張テキストエリアは、改行や文字量に応じて高さが自動でぴたりと伸び縮みする複数行入力欄です。固定高さで「スクロールバーがいきなり出る」「無駄な余白で画面が窮屈になる」といった問題を避けられ、SNS投稿、コメント、チャット入力など書く量が予測できない場面で大活躍。文字数カウンタを添えると上限のあるテキスト(280字制限など)でも安心して書けます。XやSlackの入力欄が代表例です。',
      descEn: 'A multi-line text area whose height grows automatically as you type.',
      detailEn: 'An auto-grow textarea expands and contracts its height to fit the content as the user types. It avoids the awkward "scrollbar pops up suddenly" or "huge empty space" feel of fixed-height inputs, which makes it ideal for social posts, comments, and chat — anywhere the length is unpredictable. Pairing it with a character counter helps users stay within limits like 280 characters without anxiety. The compose fields on X and Slack are good examples.',
      code: `/* Inspired by X */
<div class="ui-textarea-grow">
  <div class="ui-textarea-grow__row">
    <div class="ui-textarea-grow__avatar">M</div>
    <div class="ui-textarea-grow__main">
      <button class="ui-textarea-grow__audience">Everyone <span>▾</span></button>
      <textarea id="taG" placeholder="What is happening?!" rows="2" maxlength="280">Just shipped a redesign of our settings page after weeks of work. The little details matter</textarea>
      <div class="ui-textarea-grow__tools">
        <div class="ui-textarea-grow__icons">
          <button>🖼</button><button>📊</button><button>😊</button><button>📅</button><button>📍</button>
        </div>
        <div class="ui-textarea-grow__right">
          <svg id="taRing" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="none" stroke="#2f3336" stroke-width="2"/><circle id="taProg" cx="10" cy="10" r="9" fill="none" stroke="#1d9bf0" stroke-width="2" stroke-dasharray="56.5" stroke-dashoffset="56.5" transform="rotate(-90 10 10)"/></svg>
          <span id="taCount" class="ui-textarea-grow__count"></span>
          <span class="ui-textarea-grow__plus">+</span>
          <button class="ui-textarea-grow__post">Post</button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-textarea-grow{width:560px;padding:12px 16px;background:#000;border:1px solid #2f3336;border-radius:16px;font:15px -apple-system,'Segoe UI',sans-serif;color:#e7e9ea}
  .ui-textarea-grow__row{display:flex;gap:12px}
  .ui-textarea-grow__avatar{flex:none;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#1d9bf0,#794bc4);color:#fff;display:flex;align-items:center;justify-content:center;font:700 16px inherit}
  .ui-textarea-grow__main{flex:1;display:flex;flex-direction:column}
  .ui-textarea-grow__audience{align-self:flex-start;background:transparent;border:1px solid #2f3336;color:#1d9bf0;font:700 13px inherit;padding:2px 10px;border-radius:999px;cursor:pointer;margin-bottom:8px}
  .ui-textarea-grow textarea{width:100%;min-height:60px;max-height:240px;padding:4px 0;border:0;background:transparent;font:20px inherit;color:#e7e9ea;resize:none;overflow:hidden;line-height:1.4;outline:none}
  .ui-textarea-grow textarea::placeholder{color:#71767b}
  .ui-textarea-grow__tools{display:flex;justify-content:space-between;align-items:center;padding-top:10px;margin-top:8px;border-top:1px solid #2f3336}
  .ui-textarea-grow__icons{display:flex;gap:2px}
  .ui-textarea-grow__icons button{width:32px;height:32px;border:0;background:transparent;color:#1d9bf0;cursor:pointer;border-radius:50%;font-size:16px}
  .ui-textarea-grow__icons button:hover{background:rgba(29,155,240,.1)}
  .ui-textarea-grow__right{display:flex;align-items:center;gap:8px}
  .ui-textarea-grow__count{font:13px inherit;color:#71767b;min-width:14px;text-align:right}
  .ui-textarea-grow__count.warn{color:#ffd400}
  .ui-textarea-grow__count.over{color:#f4212e;font-weight:600}
  .ui-textarea-grow__plus{color:#71767b;border-left:1px solid #2f3336;padding-left:10px;font-size:18px;cursor:pointer}
  .ui-textarea-grow__post{padding:8px 16px;background:#eff3f4;color:#0f1419;border:0;border-radius:999px;font:700 14px inherit;cursor:pointer}
</style>

<script>
  (()=>{const ta=document.getElementById('taG'),ct=document.getElementById('taCount'),prog=document.getElementById('taProg');
    const upd=()=>{ta.style.height='auto';ta.style.height=Math.min(ta.scrollHeight,240)+'px';const n=ta.value.length,r=Math.min(n/280,1);prog.setAttribute('stroke-dashoffset',56.5*(1-r));ct.textContent=n>=240?(280-n):'';ct.className='ui-textarea-grow__count'+(n>=280?' over':n>=260?' warn':'');if(n>=260)prog.setAttribute('stroke','#ffd400');if(n>=280)prog.setAttribute('stroke','#f4212e')};
    ta.addEventListener('input',upd);upd();
  })();
</script>`,
    },
    {
      name: 'Multi-select',
      nameJa: 'マルチセレクト',
      desc: 'チェックボックス付きドロップダウンで複数項目を選ぶUI。',
      detail: 'マルチセレクトは、ドロップダウンを開くとチェックボックス付きのリストが現れ、複数項目を同時に選べる入力UIです。トリガーボタンには「3件選択中」「東京、大阪、福岡」のように現在の選択状況をサマリ表示しておくと分かりやすいです。フィルター(カテゴリ・タグの絞り込み)、宛先指定、権限割当など、選択肢が10〜50個ある場合に向いており、画面を圧迫せずに複数選択を実現できます。',
      descEn: 'A dropdown with checkboxes for selecting several items at once.',
      detailEn: 'A multi-select is a dropdown that opens to reveal a checkbox list, letting users pick more than one item. The trigger button should summarize the current selection, like "3 selected" or "Tokyo, Osaka, Fukuoka." It is great when you have 10–50 options — too many for simple checkboxes but not so many you need a search-heavy interface — common scenarios include filters, recipient pickers, and permission assignments. It packs multi-selection into a small footprint.',
      code: `/* Inspired by Linear */
<div class="ui-multiselect open" id="ms">
  <button class="ui-multiselect__trigger" type="button">
    <span class="ui-multiselect__icon">●</span>
    <span id="msLabel">Status is</span>
    <span class="ui-multiselect__count">2</span>
  </button>
  <div class="ui-multiselect__panel">
    <div class="ui-multiselect__search">
      <input type="text" placeholder="Change status...">
    </div>
    <div class="ui-multiselect__list">
      <label><input type="checkbox" checked><i style="color:#95a2b3">○</i><span>Backlog</span><kbd>0</kbd></label>
      <label><input type="checkbox" checked><i style="color:#e2e2e2">◔</i><span>Todo</span><kbd>1</kbd></label>
      <label><input type="checkbox"><i style="color:#f2c94c">◐</i><span>In Progress</span><kbd>2</kbd></label>
      <label><input type="checkbox"><i style="color:#5e6ad2">◕</i><span>In Review</span><kbd>3</kbd></label>
      <label><input type="checkbox"><i style="color:#5e6ad2">●</i><span>Done</span><kbd>4</kbd></label>
      <label><input type="checkbox"><i style="color:#95a2b3">⊘</i><span>Canceled</span><kbd>5</kbd></label>
    </div>
  </div>
</div>

<style>
  .ui-multiselect{position:relative;display:inline-block;width:240px;font:13px Inter,-apple-system,'Segoe UI',sans-serif;color:#f7f8f8}
  .ui-multiselect__trigger{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;background:#1f2023;border:1px dashed #3e3f44;border-radius:6px;color:#d0d6e0;font:13px inherit;cursor:pointer}
  .ui-multiselect__icon{color:#95a2b3;font-size:11px}
  .ui-multiselect__count{background:#3e3f44;color:#f7f8f8;border-radius:4px;padding:0 5px;font:600 11px inherit}
  .ui-multiselect__panel{position:absolute;top:calc(100% + 4px);left:0;width:260px;display:none;background:#1f2023;border:1px solid #3e3f44;border-radius:8px;box-shadow:0 12px 32px rgba(0,0,0,.5);z-index:10;overflow:hidden}
  .ui-multiselect.open .ui-multiselect__panel{display:block}
  .ui-multiselect__search{padding:8px;border-bottom:1px solid #2a2b2f}
  .ui-multiselect__search input{width:100%;border:0;outline:none;background:transparent;color:#f7f8f8;font:13px inherit;padding:2px}
  .ui-multiselect__search input::placeholder{color:#6b6f76}
  .ui-multiselect__list{padding:4px;max-height:280px;overflow-y:auto}
  .ui-multiselect__list label{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:5px;cursor:pointer;color:#d0d6e0}
  .ui-multiselect__list label:hover{background:#2a2b2f}
  .ui-multiselect__list input{appearance:none;width:14px;height:14px;border:1px solid #4d5159;border-radius:3px;background:transparent;position:relative;cursor:pointer;margin:0;flex:none}
  .ui-multiselect__list input:checked{background:#5e6ad2;border-color:#5e6ad2}
  .ui-multiselect__list input:checked::after{content:"✓";position:absolute;inset:0;color:#fff;font:600 10px sans-serif;display:flex;align-items:center;justify-content:center}
  .ui-multiselect__list i{font-style:normal;font-size:14px;flex:none}
  .ui-multiselect__list span{flex:1}
  .ui-multiselect__list kbd{font:600 11px ui-monospace,monospace;color:#6b6f76;background:#2a2b2f;border-radius:3px;padding:1px 5px}
</style>

<script>
  (()=>{const ms=document.getElementById('ms'),cnt=ms.querySelector('.ui-multiselect__count');
    ms.querySelectorAll('input[type=checkbox]').forEach(i=>i.onchange=()=>{cnt.textContent=ms.querySelectorAll('input:checked').length});
  })();
</script>`,
    },
  ],
}
