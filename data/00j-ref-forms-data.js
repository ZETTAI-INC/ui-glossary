/**
 * UI Parts — Forms & Data Display (Extended).
 * Additional copy-and-paste UI components for forms and data presentation.
 */

export const category = {
  id: 'ui-parts-ref-forms-data',
  title: 'UIパーツ集(フォーム・データ表示拡張)',
  titleEn: 'Forms & Data Display (Extended)',
  description: '参考サイトから拾い上げた追加UIパーツ。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Textarea',
      nameJa: 'テキストエリア',
      desc: '複数行のテキスト入力。リサイズ可能。',
      detail: 'テキストエリアは、改行を含む長い文章を入力するためのフォーム要素です。コメント投稿、お問い合わせ本文、レビュー、商品の説明文など、1行では収まらない自由記述に使われます。右下のつまみで高さを変えられる「リサイズ可能」が標準動作で、必要に応じて固定サイズにもできます。文字数カウンタやプレースホルダーを添えると、入力者がどれくらい書けばよいか掴みやすくなります。',
      descEn: 'A multi-line, resizable text input.',
      detailEn: 'A textarea is the form control for free-form text that spans multiple lines, such as comments, inquiry messages, reviews, or product descriptions. By default users can drag the bottom-right corner to resize the box vertically, though you can also fix the height. Adding a character counter or a placeholder gives writers a sense of how much they are expected to type. It is the go-to element whenever a single-line input feels too cramped.',
      code: `<!-- Inspired by X (Twitter) compose -->
<div class="ui-textarea">
  <div class="ui-textarea__row">
    <div class="ui-textarea__avatar"></div>
    <textarea class="ui-textarea__input" placeholder="What is happening?!" rows="3" maxlength="280" id="ta"></textarea>
  </div>
  <div class="ui-textarea__bar">
    <div class="ui-textarea__icons">
      <span>image</span><span>GIF</span><span>poll</span><span>emoji</span>
    </div>
    <div class="ui-textarea__right">
      <svg class="ui-textarea__ring" viewBox="0 0 20 20" width="22" height="22"><circle cx="10" cy="10" r="9" fill="none" stroke="#2f3336" stroke-width="2"/><circle id="taRing" cx="10" cy="10" r="9" fill="none" stroke="#1d9bf0" stroke-width="2" stroke-dasharray="56.5" stroke-dashoffset="56.5" transform="rotate(-90 10 10)"/></svg>
      <button class="ui-textarea__post">Post</button>
    </div>
  </div>
</div>

<style>
  .ui-textarea{max-width:520px;padding:14px 16px;background:#000;border:1px solid #2f3336;border-radius:16px;font:15px -apple-system,system-ui,sans-serif;color:#e7e9ea}
  .ui-textarea__row{display:flex;gap:12px}
  .ui-textarea__avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#1d9bf0,#9146ff);flex:none}
  .ui-textarea__input{flex:1;background:transparent;border:0;outline:none;color:#e7e9ea;font:20px -apple-system,system-ui,sans-serif;resize:none;padding:8px 0;line-height:1.4}
  .ui-textarea__input::placeholder{color:#71767b}
  .ui-textarea__bar{display:flex;justify-content:space-between;align-items:center;padding:10px 0 0 52px;border-top:1px solid #2f3336;margin-top:8px}
  .ui-textarea__icons{display:flex;gap:14px;color:#1d9bf0;font-size:13px}
  .ui-textarea__icons span{cursor:pointer;padding:6px;border-radius:999px}
  .ui-textarea__icons span:hover{background:rgba(29,155,240,.1)}
  .ui-textarea__right{display:flex;align-items:center;gap:12px}
  .ui-textarea__post{background:#eff3f4;color:#0f1419;border:0;padding:8px 18px;border-radius:999px;font-weight:700;font-size:14px;cursor:pointer;opacity:.5}
  .ui-textarea__post.on{opacity:1}
</style>

<script>
  const ta=document.getElementById('ta'),ring=document.getElementById('taRing'),btn=document.querySelector('.ui-textarea__post');
  ta.addEventListener('input',()=>{
    const p=ta.value.length/280;ring.style.strokeDashoffset=56.5*(1-p);
    ring.style.stroke=p>0.9?'#f4212e':p>0.7?'#ffd400':'#1d9bf0';
    btn.classList.toggle('on',ta.value.length>0);
  });
</script>`,
    },
    {
      name: 'Select / Dropdown',
      nameJa: 'セレクト',
      desc: '選択肢のリストから1つを選ぶ。クリックでリストが展開する。',
      detail: 'セレクトは、決まった選択肢の中から1つを選ぶためのフォーム要素です。クリックするとリストが下に展開し、選んだ項目が表示欄に入ります。都道府県、国、職業、カテゴリなど「答えが固定されている」項目に向いており、ユーザーは打ち間違いを気にせず素早く入力できます。OS標準のセレクトはアクセシビリティが高く、キーボード操作にも対応しているのが利点です。',
      descEn: 'Pick one option from an expandable list.',
      detailEn: 'A select lets users pick one value from a fixed set of options. Clicking it expands a list, and the chosen item shows up in the visible field. It is ideal for inputs with a known set of answers — prefectures, countries, occupations, categories — letting users move fast without worrying about typos. The native select element comes with built-in accessibility and keyboard support, which is hard to beat.',
      code: `<!-- Inspired by Linear filter dropdown -->
<div class="ui-select" id="lnSel">
  <button class="ui-select__trigger">
    <span class="ui-select__dot"></span>Priority<span class="ui-select__val">Urgent</span>
    <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 5l3 3 3-3" stroke="#8a8f98" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
  </button>
  <div class="ui-select__menu">
    <input class="ui-select__search" placeholder="Change priority...">
    <div class="ui-select__opt selected"><span class="p p-urgent"></span>Urgent<kbd>1</kbd></div>
    <div class="ui-select__opt"><span class="p p-high"></span>High<kbd>2</kbd></div>
    <div class="ui-select__opt"><span class="p p-med"></span>Medium<kbd>3</kbd></div>
    <div class="ui-select__opt"><span class="p p-low"></span>Low<kbd>4</kbd></div>
    <div class="ui-select__opt"><span class="p p-none"></span>No priority<kbd>0</kbd></div>
  </div>
</div>

<style>
  .ui-select{position:relative;display:inline-block;font:13px ui-sans-serif,-apple-system,sans-serif;color:#e6e6e6}
  .ui-select__trigger{display:inline-flex;align-items:center;gap:8px;padding:5px 10px;background:#1c1d20;border:1px solid #26272b;border-radius:6px;color:#b4bcd0;cursor:pointer;font:inherit}
  .ui-select__trigger:hover{background:#222327}
  .ui-select__dot{width:6px;height:6px;border-radius:50%;background:#5e6ad2}
  .ui-select__val{color:#e6e6e6;font-weight:500}
  .ui-select__menu{position:absolute;top:calc(100% + 4px);left:0;width:240px;background:#1c1d20;border:1px solid #26272b;border-radius:8px;padding:6px;box-shadow:0 12px 32px rgba(0,0,0,.5);display:none}
  .ui-select.open .ui-select__menu{display:block}
  .ui-select__search{width:100%;background:transparent;border:0;border-bottom:1px solid #26272b;padding:6px 8px;color:#e6e6e6;font:inherit;outline:none;margin-bottom:4px}
  .ui-select__search::placeholder{color:#6b7280}
  .ui-select__opt{display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:5px;cursor:pointer;color:#b4bcd0}
  .ui-select__opt:hover{background:#26272b;color:#e6e6e6}
  .ui-select__opt.selected{background:#26272b;color:#e6e6e6}
  .ui-select__opt kbd{margin-left:auto;background:#26272b;color:#8a8f98;padding:1px 5px;border-radius:3px;font:11px ui-monospace,monospace}
  .p{width:14px;height:14px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;position:relative}
  .p-urgent{background:#eb5757}.p-urgent::after{content:"!";color:#fff;font-size:10px;font-weight:700}
  .p-high::before,.p-med::before,.p-low::before{content:"";width:10px;height:8px;background:linear-gradient(to top,#5e6ad2 33%,#3a3b40 33% 66%,#3a3b40 66%)}
  .p-med::before{background:linear-gradient(to top,#5e6ad2 33%,#5e6ad2 33% 66%,#3a3b40 66%)}
  .p-low::before{background:#3a3b40}
  .p-none{border:1px dashed #6b7280}
</style>

<script>
  const lnSel=document.getElementById('lnSel');
  lnSel.querySelector('.ui-select__trigger').addEventListener('click',e=>{e.stopPropagation();lnSel.classList.toggle('open')});
  document.addEventListener('click',e=>{if(!lnSel.contains(e.target))lnSel.classList.remove('open')});
</script>`,
    },
    {
      name: 'Radio Button',
      nameJa: 'ラジオボタン',
      desc: '複数の選択肢から1つだけを選択するUI。排他的選択。',
      detail: 'ラジオボタンは、いくつかの選択肢の中から「必ず1つだけ」選ぶときに使う丸い形のフォーム要素です。同じグループ内で別の項目を選ぶと、前の選択は自動的に解除される排他的な動作が特徴です。性別、サイズ、お支払い方法など、選択肢が2〜5個程度ですべて並べて見せたい場合に向いています。選択肢が多すぎる場合はセレクトのほうが画面を節約できます。',
      descEn: 'Selects exactly one option from a group. Mutually exclusive.',
      detailEn: 'A radio button forces users to pick exactly one option from a group, with the round indicator filling in to show the choice. Selecting another option in the same group automatically clears the previous one — that is the "mutually exclusive" behavior. Radios shine when there are roughly two to five options and you want them all visible at once, like gender, size, or payment method. For longer lists, a select usually saves more space.',
      code: `<!-- Inspired by Stripe billing -->
<fieldset class="ui-radio-group">
  <legend>Billing frequency</legend>
  <label class="ui-radio checked">
    <input type="radio" name="plan" checked>
    <span class="ui-radio__dot"></span>
    <div class="ui-radio__body">
      <div class="ui-radio__title">Annual <span class="ui-radio__save">Save 20%</span></div>
      <div class="ui-radio__sub">$192/year — billed once per year</div>
    </div>
    <div class="ui-radio__price">$16<small>/mo</small></div>
  </label>
  <label class="ui-radio">
    <input type="radio" name="plan">
    <span class="ui-radio__dot"></span>
    <div class="ui-radio__body">
      <div class="ui-radio__title">Monthly</div>
      <div class="ui-radio__sub">Billed every month, cancel anytime</div>
    </div>
    <div class="ui-radio__price">$20<small>/mo</small></div>
  </label>
  <label class="ui-radio">
    <input type="radio" name="plan">
    <span class="ui-radio__dot"></span>
    <div class="ui-radio__body">
      <div class="ui-radio__title">Pay as you go</div>
      <div class="ui-radio__sub">Usage-based — only pay for what you use</div>
    </div>
    <div class="ui-radio__price">$0<small>/mo</small></div>
  </label>
</fieldset>

<style>
  .ui-radio-group{border:0;padding:0;margin:0;max-width:440px;font:14px -apple-system,"Segoe UI",sans-serif;color:#0a2540;display:flex;flex-direction:column;gap:8px}
  .ui-radio-group legend{font-weight:600;margin-bottom:8px;color:#425466;font-size:13px}
  .ui-radio{display:flex;align-items:center;gap:12px;padding:14px 16px;border:1px solid #e3e8ee;border-radius:8px;cursor:pointer;background:#fff;transition:.15s;box-shadow:0 1px 1px rgba(0,0,0,.02)}
  .ui-radio:hover{border-color:#cfd7df}
  .ui-radio input{position:absolute;opacity:0}
  .ui-radio__dot{width:18px;height:18px;border:1.5px solid #cfd7df;border-radius:50%;flex:none;position:relative;transition:.15s}
  .ui-radio input:checked + .ui-radio__dot{border-color:#635bff;border-width:5px;background:#fff}
  .ui-radio:has(input:checked){border-color:#635bff;box-shadow:0 0 0 1px #635bff,0 1px 3px rgba(99,91,255,.1)}
  .ui-radio__body{flex:1}
  .ui-radio__title{font-weight:600;display:flex;align-items:center;gap:8px}
  .ui-radio__save{background:#d7f7e7;color:#006908;font-size:11px;font-weight:600;padding:2px 6px;border-radius:4px}
  .ui-radio__sub{font-size:13px;color:#697386;margin-top:2px}
  .ui-radio__price{font-weight:600;font-size:16px}
  .ui-radio__price small{font-weight:500;color:#697386;font-size:12px}
</style>`,
    },
    {
      name: 'Slider / Range',
      nameJa: 'スライダー',
      desc: 'ドラッグで数値を連続的に選択するUI。',
      detail: 'スライダー(レンジ)は、つまみを左右にドラッグして数値を選ぶUIです。音量、明るさ、価格帯、フォントサイズなど、連続的に変化する値を直感的に調整できるのが強みです。両端の最小値・最大値を明示し、現在値を数字でも添えると、ユーザーが正確に把握できます。タッチ操作に強く、設定画面やフィルター(価格範囲など)で頻出します。',
      descEn: 'Drag to select a value along a continuous range.',
      detailEn: 'A slider lets users drag a handle along a track to choose a number, perfect for continuous values like volume, brightness, price range, or font size. Showing the min and max at the ends, plus the current value as a number, helps users dial in a precise setting. It feels especially natural on touch devices, and you will often see it in app settings and filter panels (such as a price range filter on shopping sites).',
      code: `<!-- Inspired by Figma layer properties -->
<div class="ui-slider">
  <div class="ui-slider__panel">
    <div class="ui-slider__row">
      <label>Opacity</label>
      <div class="ui-slider__num"><input id="opNum" value="72" maxlength="3">%</div>
    </div>
    <div class="ui-slider__track-wrap">
      <div class="ui-slider__track"><div class="ui-slider__fill" id="opFill"></div></div>
      <input type="range" id="opVal" min="0" max="100" value="72" class="ui-slider__input">
    </div>
  </div>
  <div class="ui-slider__panel">
    <div class="ui-slider__row">
      <label>Corner radius</label>
      <div class="ui-slider__num"><input value="12" maxlength="3"></div>
    </div>
  </div>
</div>

<style>
  .ui-slider{width:240px;padding:8px;background:#2c2c2c;border-radius:6px;font:11px ui-sans-serif,-apple-system,sans-serif;color:#e4e4e4;display:flex;flex-direction:column;gap:8px}
  .ui-slider__panel{display:flex;flex-direction:column;gap:6px}
  .ui-slider__row{display:flex;justify-content:space-between;align-items:center}
  .ui-slider__row label{color:#b3b3b3}
  .ui-slider__num{display:flex;align-items:center;background:#383838;border-radius:3px;padding:0 6px;color:#e4e4e4}
  .ui-slider__num input{background:transparent;border:0;outline:none;color:inherit;font:inherit;width:32px;text-align:right;padding:3px 0}
  .ui-slider__num input:focus{outline:1px solid #0d99ff;outline-offset:-1px}
  .ui-slider__track-wrap{position:relative;height:14px;display:flex;align-items:center}
  .ui-slider__track{position:absolute;left:0;right:0;height:2px;background:#444;border-radius:2px;overflow:hidden}
  .ui-slider__fill{height:100%;width:72%;background:#0d99ff}
  .ui-slider__input{-webkit-appearance:none;appearance:none;width:100%;background:transparent;outline:none;position:relative;z-index:2;margin:0}
  .ui-slider__input::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:#fff;border:1px solid #0d99ff;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.4)}
  .ui-slider__input::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:#fff;border:1px solid #0d99ff;cursor:pointer}
</style>

<script>
  const v=document.getElementById('opVal'),n=document.getElementById('opNum'),f=document.getElementById('opFill');
  v.addEventListener('input',()=>{n.value=v.value;f.style.width=v.value+'%'});
  n.addEventListener('input',()=>{const x=Math.min(100,Math.max(0,+n.value||0));v.value=x;f.style.width=x+'%'});
</script>`,
    },
    {
      name: 'File Upload',
      nameJa: 'ファイルアップロード',
      desc: 'ファイルを選択またはドラッグ&ドロップでアップロードするUI。',
      detail: 'ファイルアップロードは、画像や書類などをサーバーに送るためのUIです。標準のボタンを押して選ぶ方法に加えて、点線で囲まれた領域にファイルをドラッグ&ドロップする方法が一般的になりました。受け付けるファイル形式や最大サイズ、選択中のファイル名を表示すると、ユーザーは安心して操作できます。プロフィール画像、添付書類、CSVインポートなど、用途は多岐にわたります。',
      descEn: 'Upload files by selection or drag & drop.',
      detailEn: 'A file upload control sends images or documents up to the server. Beyond the basic button to pick a file, a dashed drop zone that accepts drag-and-drop has become standard practice. Showing the accepted file types, max size, and the name of any file already selected makes the experience much more reassuring. You will encounter it everywhere — profile photos, attached documents, CSV imports, and more.',
      code: `<!-- Inspired by Notion attach file -->
<div class="ui-upload">
  <div class="ui-upload__tabs">
    <span class="active">Upload</span><span>Embed link</span><span>Unsplash</span>
  </div>
  <label class="ui-upload__drop" id="up">
    <input type="file" class="ui-upload__input" id="upInput">
    <div class="ui-upload__btn">Choose a file</div>
    <div class="ui-upload__hint">The maximum size per file is 5 MB</div>
  </label>
  <div class="ui-upload__files">
    <div class="ui-upload__file"><div class="ui-upload__ico pdf">PDF</div><div class="ui-upload__meta"><strong>Q3-report-final.pdf</strong><small>2.4 MB · Uploaded</small></div><span class="ui-upload__check">✓</span></div>
    <div class="ui-upload__file"><div class="ui-upload__ico img">IMG</div><div class="ui-upload__meta"><strong>hero-mockup.png</strong><small>Uploading 68%</small><div class="ui-upload__bar"><div></div></div></div></div>
  </div>
</div>

<style>
  .ui-upload{width:440px;padding:14px;background:#fff;border:1px solid rgba(15,15,15,.1);border-radius:6px;box-shadow:0 14px 28px rgba(15,15,15,.15),0 0 0 1px rgba(15,15,15,.05);font:14px -apple-system,"Segoe UI",sans-serif;color:#37352f}
  .ui-upload__tabs{display:flex;gap:2px;border-bottom:1px solid rgba(55,53,47,.09);margin-bottom:14px;padding-bottom:0}
  .ui-upload__tabs span{padding:6px 10px;color:rgba(55,53,47,.65);cursor:pointer;font-size:13px;border-bottom:1.5px solid transparent;margin-bottom:-1px}
  .ui-upload__tabs .active{color:#37352f;border-bottom-color:#37352f}
  .ui-upload__drop{display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px;background:rgba(247,246,243,.7);border-radius:4px;cursor:pointer}
  .ui-upload__drop.drag{background:rgba(35,131,226,.08)}
  .ui-upload__input{display:none}
  .ui-upload__btn{padding:6px 16px;background:#fff;border:1px solid rgba(55,53,47,.16);border-radius:3px;font-size:13px;color:#37352f;box-shadow:rgba(15,15,15,.1) 0 1px 2px}
  .ui-upload__hint{font-size:12px;color:rgba(55,53,47,.5)}
  .ui-upload__files{margin-top:12px;display:flex;flex-direction:column;gap:4px}
  .ui-upload__file{display:flex;align-items:center;gap:10px;padding:8px;border-radius:4px}
  .ui-upload__file:hover{background:rgba(55,53,47,.04)}
  .ui-upload__ico{width:32px;height:32px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;flex:none}
  .ui-upload__ico.pdf{background:#e03e3e}
  .ui-upload__ico.img{background:#0b6e99}
  .ui-upload__meta{flex:1;min-width:0}
  .ui-upload__meta strong{display:block;font-weight:500;font-size:14px}
  .ui-upload__meta small{font-size:12px;color:rgba(55,53,47,.5)}
  .ui-upload__bar{height:3px;background:rgba(55,53,47,.08);border-radius:2px;margin-top:4px;overflow:hidden}
  .ui-upload__bar div{height:100%;width:68%;background:#2383e2;border-radius:2px;animation:upPul 1.5s ease-in-out infinite alternate}
  @keyframes upPul{to{width:78%}}
  .ui-upload__check{color:#0f7b6c;font-weight:700}
</style>

<script>
  const up=document.getElementById('up');
  ['dragenter','dragover'].forEach(e=>up.addEventListener(e,ev=>{ev.preventDefault();up.classList.add('drag')}));
  ['dragleave','drop'].forEach(e=>up.addEventListener(e,ev=>{ev.preventDefault();up.classList.remove('drag')}));
</script>`,
    },
    {
      name: 'Password Strength Meter',
      nameJa: 'パスワード強度メーター',
      desc: 'パスワード入力時にリアルタイムで強度を表示するUI。',
      detail: 'パスワード強度メーターは、ユーザーが入力したパスワードの安全性をリアルタイムで評価し、色やバーで「弱い・普通・強い」と示すUIです。文字数や、大文字・数字・記号を含むかなどを基準に判定するのが一般的で、ユーザーは入力しながら自分でパスワードを改善できます。会員登録やパスワード変更画面で使うと、弱いパスワードの設定を未然に防げます。',
      descEn: 'Displays password strength in real-time during input.',
      detailEn: 'A password strength meter evaluates a password as the user types and shows the result with colored bars labeled "weak," "medium," or "strong." Common criteria include length and whether the password mixes letters, numbers, and symbols. By giving instant feedback, it nudges users toward stronger passwords on the spot. It is a standard feature for sign-up forms and password change screens, helping prevent weak credentials from being saved.',
      code: `<!-- Inspired by 1Password new item -->
<div class="ui-pwd">
  <div class="ui-pwd__head">
    <label>Master password</label>
    <button class="ui-pwd__gen" type="button">↻ Generate</button>
  </div>
  <div class="ui-pwd__field">
    <input type="password" id="pwd" class="ui-pwd__input" placeholder="Enter a strong password" value="">
    <button class="ui-pwd__eye" type="button" id="pwdEye" aria-label="Show">👁</button>
  </div>
  <div class="ui-pwd__meter">
    <span class="seg s1"></span><span class="seg s2"></span><span class="seg s3"></span><span class="seg s4"></span>
  </div>
  <div class="ui-pwd__msg" id="pwdMsg">
    <strong>Password strength:</strong> <em>—</em>
    <ul class="ui-pwd__reqs">
      <li data-r="len">At least 12 characters</li>
      <li data-r="case">Upper &amp; lowercase letters</li>
      <li data-r="num">Includes a number</li>
      <li data-r="sym">Includes a symbol</li>
    </ul>
  </div>
</div>

<style>
  .ui-pwd{width:360px;padding:18px;background:#fff;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,.06),0 0 0 1px rgba(0,0,0,.05);font:13px -apple-system,"SF Pro Text",sans-serif;color:#1d1d1f}
  .ui-pwd__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
  .ui-pwd__head label{font-weight:600;font-size:12px;color:#1d1d1f;text-transform:uppercase;letter-spacing:.04em}
  .ui-pwd__gen{background:transparent;border:0;color:#0572ec;font:600 12px inherit;cursor:pointer}
  .ui-pwd__field{position:relative}
  .ui-pwd__input{width:100%;padding:9px 36px 9px 12px;border:1px solid #d1d1d6;border-radius:6px;font:14px ui-monospace,SFMono-Regular,Menlo,monospace;outline:none;background:#fff;box-sizing:border-box}
  .ui-pwd__input:focus{border-color:#0572ec;box-shadow:0 0 0 3px rgba(5,114,236,.18)}
  .ui-pwd__eye{position:absolute;right:6px;top:50%;transform:translateY(-50%);background:transparent;border:0;cursor:pointer;color:#86868b;padding:6px}
  .ui-pwd__meter{display:flex;gap:3px;margin:10px 0 8px}
  .ui-pwd__meter .seg{flex:1;height:4px;background:#e5e5ea;border-radius:2px;transition:.3s}
  .ui-pwd.lv1 .s1{background:#ff3b30}
  .ui-pwd.lv2 .s1,.ui-pwd.lv2 .s2{background:#ff9500}
  .ui-pwd.lv3 .s1,.ui-pwd.lv3 .s2,.ui-pwd.lv3 .s3{background:#ffcc00}
  .ui-pwd.lv4 .seg{background:#34c759}
  .ui-pwd__msg{font-size:12px;color:#6e6e73}
  .ui-pwd__msg em{font-style:normal;color:#86868b}
  .ui-pwd.lv1 em{color:#ff3b30}.ui-pwd.lv2 em{color:#ff9500}.ui-pwd.lv3 em{color:#a07500}.ui-pwd.lv4 em{color:#1c7c2c}
  .ui-pwd__reqs{list-style:none;margin:8px 0 0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:4px}
  .ui-pwd__reqs li{font-size:12px;color:#86868b;padding-left:18px;position:relative}
  .ui-pwd__reqs li::before{content:"○";position:absolute;left:0;color:#c7c7cc}
  .ui-pwd__reqs li.ok{color:#1c7c2c}
  .ui-pwd__reqs li.ok::before{content:"✓";color:#34c759;font-weight:700}
</style>

<script>
  const p=document.getElementById('pwd'),w=p.closest('.ui-pwd'),eye=document.getElementById('pwdEye'),em=w.querySelector('em');
  const labels=['—','Weak','Fair','Good','Excellent'];
  eye.addEventListener('click',()=>{p.type=p.type==='password'?'text':'password'});
  p.addEventListener('input',()=>{
    const v=p.value,checks={len:v.length>=12,case:/[A-Z]/.test(v)&&/[a-z]/.test(v),num:/\\d/.test(v),sym:/[^A-Za-z0-9]/.test(v)};
    let s=0;for(const k in checks){if(checks[k])s++;w.querySelector('[data-r="'+k+'"]').classList.toggle('ok',checks[k])}
    w.className='ui-pwd'+(v&&s?' lv'+s:'');
    em.textContent=v?labels[s]:'—';
  });
</script>`,
    },
    {
      name: 'Inline Edit',
      nameJa: 'インラインエディット',
      desc: '表示テキストを直接クリックして編集モードに切り替えるUI。',
      detail: 'インラインエディットは、ページ上に表示されているテキストをクリックすると、その場で入力欄に変わって編集できるUIです。別画面に遷移したり、編集ボタンを押したりする必要がないため、見出しやプロフィール名、タスクのタイトルなど、ちょっとした書き換えを素早く済ませられます。NotionやFigmaのようなツールで頻繁に使われ、保存はEnterキーやフォーカスを外したタイミングで自動的に行うのが一般的です。',
      descEn: 'Click on display text to switch to edit mode directly.',
      detailEn: 'Inline editing turns displayed text into an input field the moment you click it, so changes happen right where the text lives. There is no need to navigate to another screen or hunt for an edit button, which makes it perfect for headlines, profile names, or task titles. Tools like Notion and Figma rely on this pattern heavily, and they typically save the new value automatically when you press Enter or click away.',
      code: `<!-- Inspired by Notion page header -->
<div class="ui-inline">
  <div class="ui-inline__crumbs">Workspace / Design Team / <span>Page</span></div>
  <div class="ui-inline__row">
    <span class="ui-inline__icon">📘</span>
    <span class="ui-inline__text" id="inText" tabindex="0" contenteditable="true" spellcheck="false">Q3 Product Roadmap</span>
  </div>
  <div class="ui-inline__props">
    <div><span>Status</span><em class="ui-inline__tag tag-progress">In progress</em></div>
    <div><span>Owner</span><em>Hana Sato</em></div>
    <div><span>Due</span><em>Sep 30, 2025</em></div>
  </div>
</div>

<style>
  .ui-inline{max-width:560px;padding:24px 28px;background:#fff;font:16px -apple-system,"Segoe UI","Inter",sans-serif;color:#37352f}
  .ui-inline__crumbs{font-size:12px;color:rgba(55,53,47,.5);margin-bottom:18px}
  .ui-inline__crumbs span{color:rgba(55,53,47,.8)}
  .ui-inline__row{display:flex;align-items:center;gap:10px;margin-bottom:18px}
  .ui-inline__icon{font-size:42px;cursor:pointer;padding:4px;border-radius:4px}
  .ui-inline__icon:hover{background:rgba(55,53,47,.06)}
  .ui-inline__text{font-size:40px;font-weight:700;line-height:1.2;letter-spacing:-.02em;color:#37352f;outline:none;padding:2px 4px;border-radius:3px;cursor:text;min-width:1em}
  .ui-inline__text:empty::before{content:"Untitled";color:rgba(55,53,47,.28)}
  .ui-inline__text:focus{background:rgba(35,131,226,.07);box-shadow:inset 0 0 0 1px rgba(35,131,226,.4)}
  .ui-inline__props{display:flex;flex-direction:column;gap:6px;border-top:1px solid rgba(55,53,47,.09);padding-top:14px}
  .ui-inline__props > div{display:flex;align-items:center;gap:12px;font-size:14px;padding:4px 6px;border-radius:4px}
  .ui-inline__props > div:hover{background:rgba(55,53,47,.04)}
  .ui-inline__props span{color:rgba(55,53,47,.5);width:80px;font-size:13px}
  .ui-inline__props em{font-style:normal;color:#37352f}
  .ui-inline__tag{padding:2px 8px;border-radius:3px;font-size:12px;font-weight:500}
  .tag-progress{background:#fbecdd;color:#974c00}
</style>

<script>
  const t=document.getElementById('inText');
  t.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();t.blur()}});
</script>`,
    },
    {
      name: 'Multi-step Form',
      nameJa: 'マルチステップフォーム',
      desc: '長いフォームをステップに分割し段階的に入力させるUI。',
      detail: 'マルチステップフォームは、入力項目が多いフォームを「基本情報→住所→確認」のように複数の画面に分け、ユーザーに少しずつ入力してもらう仕組みです。1画面あたりの情報量が減るので心理的な負担が軽くなり、途中離脱を防ぎやすくなります。会員登録、購入手続き、アンケート、申し込みフォームなどでよく使われ、現在地を示すステップインジケータと組み合わせるのが定番です。',
      descEn: 'Breaks a long form into staged steps.',
      detailEn: 'A multi-step form splits a lengthy form across several screens — for example, "basic info → address → confirm" — so users fill it in piece by piece. With less to do on each screen, the form feels less intimidating, which can dramatically cut drop-off rates. You will see this pattern in sign-up flows, checkout, surveys, and application forms. It is usually paired with a step indicator that shows current progress.',
      code: `<!-- Inspired by Stripe Checkout -->
<div class="ui-msf" id="msf">
  <div class="ui-msf__brand">acme, inc.</div>
  <div class="ui-msf__rail">
    <div class="ui-msf__step done"><span>1</span>Contact</div>
    <div class="ui-msf__line"></div>
    <div class="ui-msf__step current"><span>2</span>Shipping</div>
    <div class="ui-msf__line"></div>
    <div class="ui-msf__step"><span>3</span>Payment</div>
  </div>
  <h2 class="ui-msf__title">Shipping address</h2>
  <div class="ui-msf__grid">
    <label class="full"><span>Country or region</span><div class="sel">United States <em>▾</em></div></label>
    <label class="full"><span>Address line 1</span><input value="2261 Market Street #4567"></label>
    <label><span>City</span><input value="San Francisco"></label>
    <label><span>ZIP</span><input value="94114"></label>
  </div>
  <label class="ui-msf__check"><input type="checkbox" checked><span>Save this information for next time</span></label>
  <button class="ui-msf__pay">Continue to payment</button>
  <div class="ui-msf__foot">Powered by <strong>stripe</strong> · Terms · Privacy</div>
</div>

<style>
  .ui-msf{max-width:440px;padding:32px 36px;background:#fff;border-radius:8px;box-shadow:0 50px 100px -20px rgba(50,50,93,.1),0 30px 60px -30px rgba(0,0,0,.2);font:15px -apple-system,"Helvetica Neue","Segoe UI",sans-serif;color:#1a1f36}
  .ui-msf__brand{font-weight:700;font-size:20px;margin-bottom:24px}
  .ui-msf__rail{display:flex;align-items:center;margin-bottom:24px;font-size:13px;color:#697386}
  .ui-msf__step{display:flex;align-items:center;gap:8px}
  .ui-msf__step span{width:22px;height:22px;border-radius:50%;background:#e3e8ee;display:inline-flex;align-items:center;justify-content:center;font-weight:600;font-size:12px}
  .ui-msf__step.done span{background:#0a8a4d;color:#fff}
  .ui-msf__step.done span::before{content:"✓";font-size:13px}
  .ui-msf__step.done span > *{display:none}
  .ui-msf__step.current{color:#1a1f36;font-weight:600}
  .ui-msf__step.current span{background:#635bff;color:#fff}
  .ui-msf__line{flex:1;height:1px;background:#e3e8ee;margin:0 10px}
  .ui-msf__title{margin:0 0 14px;font-size:17px}
  .ui-msf__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}
  .ui-msf__grid label{display:flex;flex-direction:column;gap:4px;font-size:13px;color:#425466}
  .ui-msf__grid .full{grid-column:1/-1}
  .ui-msf__grid input,.ui-msf__grid .sel{padding:9px 11px;border:1px solid #e3e8ee;border-radius:6px;font:14px inherit;color:#1a1f36;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.04);outline:none}
  .ui-msf__grid .sel{display:flex;justify-content:space-between;align-items:center;color:#1a1f36;cursor:pointer}
  .ui-msf__grid input:focus{border-color:#635bff;box-shadow:0 0 0 4px rgba(99,91,255,.15)}
  .ui-msf__check{display:flex;gap:8px;align-items:center;font-size:13px;color:#425466;margin-bottom:18px;cursor:pointer}
  .ui-msf__pay{width:100%;padding:11px;background:#635bff;color:#fff;border:0;border-radius:6px;font:600 15px inherit;cursor:pointer;box-shadow:0 4px 6px -1px rgba(99,91,255,.3)}
  .ui-msf__pay:hover{background:#5851ec}
  .ui-msf__foot{margin-top:18px;text-align:center;font-size:12px;color:#8898aa}
  .ui-msf__foot strong{color:#635bff;font-weight:600}
</style>`,
    },
    {
      name: 'Table',
      nameJa: 'テーブル',
      desc: '行と列で構造化されたデータを表示する。ソート・フィルター機能を持つことが多い。',
      detail: 'テーブルは、行と列でデータを整理して見せるUIです。表計算ソフトのように一覧性が高く、複数の項目を横並びで比較するのに向いています。たとえば売上一覧、ユーザー管理、注文履歴など、同じ形式のデータがたくさん並ぶ場面で使われます。列ヘッダをクリックして並び替えたり、フィルターで絞り込んだりする機能を組み合わせると、目的のデータに素早くたどり着けます。',
      descEn: 'Displays structured data in rows and columns. Often sortable and filterable.',
      detailEn: 'A table arranges data in rows and columns so users can scan and compare records at a glance, much like a spreadsheet. It works well for lists of similarly shaped records — sales, user lists, order histories, and so on. Clickable column headers for sorting and filter controls on top make it easy to zero in on the rows you need. For dense data, a well-built table is hard to beat.',
      code: `<!-- Inspired by Linear issues table -->
<div class="ui-table">
  <div class="ui-table__head">
    <div class="cell pri">Priority</div><div class="cell id">ID</div><div class="cell title">Title</div><div class="cell stat">Status</div><div class="cell ass">Assignee</div><div class="cell upd">Updated</div>
  </div>
  <div class="ui-table__row">
    <div class="cell pri"><span class="pri-ico urgent">!</span></div>
    <div class="cell id">ENG-241</div>
    <div class="cell title">Auth redirect loops on Safari 17</div>
    <div class="cell stat"><span class="stat-dot s-progress"></span>In Progress</div>
    <div class="cell ass"><span class="av" style="background:#f2994a">AK</span></div>
    <div class="cell upd">2h ago</div>
  </div>
  <div class="ui-table__row">
    <div class="cell pri"><span class="pri-ico high"></span></div>
    <div class="cell id">DES-138</div>
    <div class="cell title">Redesign empty states across mobile app</div>
    <div class="cell stat"><span class="stat-dot s-todo"></span>Todo</div>
    <div class="cell ass"><span class="av" style="background:#5e6ad2">MR</span></div>
    <div class="cell upd">Yesterday</div>
  </div>
  <div class="ui-table__row">
    <div class="cell pri"><span class="pri-ico med"></span></div>
    <div class="cell id">ENG-240</div>
    <div class="cell title">Add keyboard shortcut for command bar</div>
    <div class="cell stat"><span class="stat-dot s-review"></span>In Review</div>
    <div class="cell ass"><span class="av" style="background:#26b5ce">JC</span></div>
    <div class="cell upd">3d ago</div>
  </div>
  <div class="ui-table__row">
    <div class="cell pri"><span class="pri-ico low"></span></div>
    <div class="cell id">DOC-22</div>
    <div class="cell title">Update API reference for v2 endpoints</div>
    <div class="cell stat"><span class="stat-dot s-done"></span>Done</div>
    <div class="cell ass"><span class="av" style="background:#bb87fc">SL</span></div>
    <div class="cell upd">Last week</div>
  </div>
</div>

<style>
  .ui-table{max-width:780px;background:#1c1d20;border:1px solid #26272b;border-radius:8px;font:13px ui-sans-serif,-apple-system,sans-serif;color:#e6e6e6;overflow:hidden}
  .ui-table__head,.ui-table__row{display:grid;grid-template-columns:60px 80px 1fr 120px 80px 100px;align-items:center;padding:0 14px;height:36px;border-bottom:1px solid #26272b}
  .ui-table__head{background:#1c1d20;color:#8a8f98;font-size:12px}
  .ui-table__row{cursor:pointer}
  .ui-table__row:hover{background:#222327}
  .ui-table__row:last-child{border-bottom:0}
  .cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
  .id{color:#8a8f98;font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px}
  .title{color:#e6e6e6}
  .pri-ico{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:3px;font-size:10px;font-weight:700;color:#fff}
  .pri-ico.urgent{background:#eb5757}
  .pri-ico.high::before,.pri-ico.med::before,.pri-ico.low::before{content:"";display:inline-block;width:10px;height:8px}
  .pri-ico.high::before{background:linear-gradient(to top,#e6e6e6 60%,#3a3b40 60%)}
  .pri-ico.med::before{background:linear-gradient(to top,#e6e6e6 40%,#3a3b40 40%)}
  .pri-ico.low::before{background:linear-gradient(to top,#e6e6e6 20%,#3a3b40 20%)}
  .stat-dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:6px;vertical-align:-1px;border:2px solid transparent}
  .s-todo{border-color:#8a8f98}
  .s-progress{background:conic-gradient(#f2c94c 0 70%,transparent 70%);border-color:#f2c94c}
  .s-review{background:conic-gradient(#5e6ad2 0 90%,transparent 90%);border-color:#5e6ad2}
  .s-done{background:#5e6ad2}
  .av{width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:600}
  .upd{color:#8a8f98;font-size:12px}
</style>`,
    },
    {
      name: 'List View',
      nameJa: 'リストビュー',
      desc: 'データを垂直リストで表示するシンプルなパターン。',
      detail: 'リストビューは、項目を縦に1列で並べて表示するシンプルなUIです。スマホ画面と相性が良く、メール一覧、チャット履歴、設定メニュー、検索結果など、さまざまな場面で使われます。各行にアイコン、タイトル、補足テキスト、矢印などを配置すると情報量が増やしつつも見やすさを保てます。テーブルほど多くの列は要らないけれど、項目を素早くスクロールして探したい、というケースに最適です。',
      descEn: 'Displays data as a simple vertical list.',
      detailEn: 'A list view stacks items vertically in a single column, making it especially friendly to mobile screens. You will find it in mail inboxes, chat histories, settings menus, search results, and many other places. Combining an icon, title, supporting text, and a chevron in each row keeps things scannable without sacrificing detail. When you do not need the multiple columns of a table but still want a quick, scrollable rundown, a list view is the right call.',
      code: `<!-- Inspired by Gmail inbox -->
<div class="ui-list">
  <div class="ui-list__bar">
    <input type="checkbox"><span>↻</span><span>⋯</span>
    <div class="ui-list__page">1–50 of 1,284</div>
  </div>
  <ul>
    <li class="ui-list__item unread">
      <input type="checkbox"><span class="star">☆</span>
      <span class="ui-list__sender">GitHub</span>
      <span class="ui-list__body"><strong>[acme/web] PR #482 ready for review</strong> — Hana approved your changes and merged main into your branch…</span>
      <span class="ui-list__chip">GitHub</span>
      <span class="ui-list__time">10:42 AM</span>
    </li>
    <li class="ui-list__item unread">
      <input type="checkbox"><span class="star starred">★</span>
      <span class="ui-list__sender">Figma</span>
      <span class="ui-list__body"><strong>Yuki Tanaka commented in "Onboarding v3"</strong> — "Can we soften the corner radius on the primary CTA?"…</span>
      <span class="ui-list__chip work">Work</span>
      <span class="ui-list__time">9:15 AM</span>
    </li>
    <li class="ui-list__item">
      <input type="checkbox"><span class="star">☆</span>
      <span class="ui-list__sender">Stripe</span>
      <span class="ui-list__body">Your monthly payout — A payout of $4,820.00 USD was sent to your bank account ending in 4321.</span>
      <span class="ui-list__time">Wed</span>
    </li>
    <li class="ui-list__item">
      <input type="checkbox"><span class="star">☆</span>
      <span class="ui-list__sender">Linear</span>
      <span class="ui-list__body">Weekly digest: 12 issues completed — Your team closed 12 issues and shipped 3 features this week. Top contributor…</span>
      <span class="ui-list__chip promo">Updates</span>
      <span class="ui-list__time">Tue</span>
    </li>
  </ul>
</div>

<style>
  .ui-list{max-width:760px;background:#fff;font:14px "Google Sans",Roboto,Arial,sans-serif;color:#202124;border-radius:8px;box-shadow:0 1px 2px rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);overflow:hidden}
  .ui-list__bar{display:flex;align-items:center;gap:14px;padding:8px 16px;color:#5f6368;border-bottom:1px solid #f1f3f4;font-size:13px}
  .ui-list__bar input{margin:0}
  .ui-list__page{margin-left:auto}
  .ui-list ul{list-style:none;margin:0;padding:0}
  .ui-list__item{display:flex;align-items:center;gap:12px;padding:0 16px;height:40px;border-bottom:1px solid #f1f3f4;cursor:pointer;font-size:14px;position:relative}
  .ui-list__item:hover{box-shadow:inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);z-index:1;background:#fff}
  .ui-list__item.unread{background:#f2f6fc;font-weight:600}
  .ui-list__item.unread .ui-list__body{font-weight:400;color:#202124}
  .ui-list__item.unread .ui-list__body strong{font-weight:700}
  .star{color:#9aa0a6;font-size:18px;cursor:pointer;width:18px}
  .star.starred{color:#f5b400}
  .ui-list__sender{width:170px;color:#202124;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-list__body{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#5f6368}
  .ui-list__body strong{color:#202124;font-weight:600;margin-right:6px}
  .ui-list__chip{font-size:11px;padding:1px 6px;border-radius:4px;background:#ddf4dd;color:#137333;font-weight:600;margin-right:8px}
  .ui-list__chip.work{background:#fce8e6;color:#c5221f}
  .ui-list__chip.promo{background:#feefc3;color:#bf8400}
  .ui-list__time{font-size:12px;color:#5f6368;width:80px;text-align:right;font-weight:600}
  .ui-list__item:not(.unread) .ui-list__time{font-weight:400}
</style>`,
    },
    {
      name: 'Tree View',
      nameJa: 'ツリービュー',
      desc: '階層的なデータを展開/折りたたみ可能なツリーで表示する。',
      detail: 'ツリービューは、親子関係のあるデータを枝分かれした構造で表示するUIです。各ノードの先頭の三角アイコンで展開・折りたたみができ、必要な階層だけ開いて閲覧できます。ファイルエクスプローラのフォルダ構造、組織図、コメントの返信ツリー、サイトマップなどで使われます。深い階層になりがちなので、初期表示では浅い階層だけを開いて見せる、または検索と組み合わせて目的のノードに辿り着きやすくする工夫が大切です。',
      descEn: 'Shows hierarchical data in an expandable/collapsible tree.',
      detailEn: 'A tree view shows hierarchical data as a branching structure where each node can be expanded or collapsed using a triangle indicator. It lets users open only the levels they need at the moment. Classic use cases include file explorers, organizational charts, comment threads, and sitemaps. Because trees can grow deep, it helps to collapse most branches by default and pair the tree with a search box so users can jump straight to the node they want.',
      code: `<!-- Inspired by VS Code explorer -->
<div class="ui-tree">
  <div class="ui-tree__head">EXPLORER</div>
  <div class="ui-tree__title">▾ ACME-WEB</div>
  <ul class="ui-tree__root">
    <li class="ui-tree__node open">
      <div class="ui-tree__row"><span class="caret">▾</span><span class="ic folder"></span>.github</div>
      <ul>
        <li class="ui-tree__node leaf"><div class="ui-tree__row"><span class="ic file yml"></span>workflows.yml</div></li>
      </ul>
    </li>
    <li class="ui-tree__node open">
      <div class="ui-tree__row"><span class="caret">▾</span><span class="ic folder"></span>src</div>
      <ul>
        <li class="ui-tree__node open">
          <div class="ui-tree__row"><span class="caret">▾</span><span class="ic folder"></span>components</div>
          <ul>
            <li class="ui-tree__node leaf"><div class="ui-tree__row"><span class="ic file tsx"></span>Button.tsx<span class="git M">M</span></div></li>
            <li class="ui-tree__node leaf selected"><div class="ui-tree__row"><span class="ic file tsx"></span>Modal.tsx<span class="git U">U</span></div></li>
            <li class="ui-tree__node leaf"><div class="ui-tree__row"><span class="ic file css"></span>styles.module.css</div></li>
          </ul>
        </li>
        <li class="ui-tree__node leaf"><div class="ui-tree__row"><span class="ic file ts"></span>index.ts</div></li>
        <li class="ui-tree__node leaf"><div class="ui-tree__row"><span class="ic file ts"></span>App.tsx<span class="git M">M</span></div></li>
      </ul>
    </li>
    <li class="ui-tree__node"><div class="ui-tree__row"><span class="caret">▸</span><span class="ic folder"></span>node_modules</div></li>
    <li class="ui-tree__node leaf"><div class="ui-tree__row"><span class="ic file md"></span>README.md</div></li>
    <li class="ui-tree__node leaf"><div class="ui-tree__row"><span class="ic file json"></span>package.json</div></li>
    <li class="ui-tree__node leaf"><div class="ui-tree__row"><span class="ic file"></span>.gitignore</div></li>
  </ul>
</div>

<style>
  .ui-tree{width:260px;background:#1e1e1e;color:#cccccc;font:13px ui-monospace,"SF Mono",Menlo,Consolas,monospace;padding:0;user-select:none}
  .ui-tree__head{padding:8px 18px;font-size:11px;letter-spacing:.08em;color:#bbb}
  .ui-tree__title{padding:4px 12px;font-size:11px;text-transform:uppercase;color:#cccccc;letter-spacing:.04em;font-weight:600}
  .ui-tree ul{list-style:none;margin:0;padding:0}
  .ui-tree__root > li > ul{padding-left:14px}
  .ui-tree__root ul ul{padding-left:14px}
  .ui-tree__row{display:flex;align-items:center;gap:4px;padding:2px 12px;cursor:pointer;line-height:22px;font-size:13px;position:relative}
  .ui-tree__row:hover{background:#2a2d2e}
  .ui-tree__node.selected > .ui-tree__row{background:#094771;color:#fff}
  .caret{display:inline-block;width:12px;font-size:9px;color:#cccccc}
  .ui-tree__node.leaf .caret,.ui-tree__node:not(.leaf):not(.open) .caret{}
  .ui-tree__node:not(.open):not(.leaf) .caret{transform:rotate(-90deg)}
  .ui-tree__node > ul{display:none}
  .ui-tree__node.open > ul{display:block}
  .ic{display:inline-block;width:16px;height:16px;flex:none}
  .ic.folder{background:#dcb67a;mask:radial-gradient(circle at 4px 4px,#000 2px,transparent 2px),linear-gradient(#000,#000);clip-path:polygon(0 20%,40% 20%,50% 35%,100% 35%,100% 100%,0 100%)}
  .ic.file{background:#cccccc;clip-path:polygon(0 0,70% 0,100% 30%,100% 100%,0 100%)}
  .ic.file.tsx,.ic.file.ts{background:#3178c6}
  .ic.file.css{background:#42a5f5}
  .ic.file.json{background:#cbcb41}
  .ic.file.md{background:#519aba}
  .ic.file.yml{background:#cb171e}
  .git{margin-left:auto;font-size:11px;font-weight:700}
  .git.M{color:#e2c08d}
  .git.U{color:#73c991}
</style>

<script>
  document.querySelectorAll('.ui-tree__node:not(.leaf) > .ui-tree__row').forEach(r=>{
    r.addEventListener('click',()=>r.parentElement.classList.toggle('open'));
  });
</script>`,
    },
    {
      name: 'Kanban Board',
      nameJa: 'カンバンボード',
      desc: 'カードをカラム間でドラッグ移動するタスク管理UI。',
      detail: 'カンバンボードは、タスクや案件を「カード」として「未着手・進行中・完了」などの列(カラム)に並べ、進捗をひと目で把握できるUIです。カードをドラッグして別の列に動かすことで状態を更新します。トヨタの生産方式に由来し、現在はTrelloやJira、GitHub Projectsなどで広く採用されています。チームで仕事の流れを共有したり、ボトルネックを見つけたりするのに有効です。',
      descEn: 'Drag cards between columns for task management.',
      detailEn: 'A Kanban board lays out tasks as cards across columns like "To Do," "In Progress," and "Done," so the whole team can see status at a glance. You change a task\'s state simply by dragging its card from one column to another. The concept comes from Toyota\'s production system and now powers tools such as Trello, Jira, and GitHub Projects. It is excellent for visualizing flow and spotting where work piles up.',
      code: `<!-- Inspired by Trello board -->
<div class="ui-kanban">
  <div class="ui-kanban__col">
    <div class="ui-kanban__head"><strong>Backlog</strong><span class="ui-kanban__count">4</span><span class="ui-kanban__more">⋯</span></div>
    <div class="ui-card" draggable="true">
      <div class="ui-card__labels"><span class="lbl lbl-green"></span><span class="lbl lbl-yellow"></span></div>
      <div class="ui-card__title">Investigate slow dashboard load on mobile</div>
      <div class="ui-card__meta"><span>📎 3</span><span>💬 5</span><div class="ui-card__avs"><span class="av" style="background:#5aac44">AK</span><span class="av" style="background:#0079bf">MR</span></div></div>
    </div>
    <div class="ui-card" draggable="true">
      <div class="ui-card__title">Draft Q4 launch announcement copy</div>
      <div class="ui-card__meta"><span class="due">📅 Oct 12</span></div>
    </div>
    <div class="ui-kanban__add">+ Add a card</div>
  </div>
  <div class="ui-kanban__col">
    <div class="ui-kanban__head"><strong>In progress</strong><span class="ui-kanban__count">2</span></div>
    <div class="ui-card" draggable="true">
      <div class="ui-card__labels"><span class="lbl lbl-blue"></span></div>
      <div class="ui-card__cover" style="background:linear-gradient(135deg,#0079bf,#5067c5)"></div>
      <div class="ui-card__title">Onboarding redesign — round 2 mockups</div>
      <div class="ui-card__meta"><span>📎 8</span><span>💬 12</span><div class="ui-card__avs"><span class="av" style="background:#eb5a46">SL</span></div></div>
    </div>
    <div class="ui-card" draggable="true">
      <div class="ui-card__labels"><span class="lbl lbl-red"></span></div>
      <div class="ui-card__title">Fix billing webhook retry edge case</div>
      <div class="ui-card__meta"><span class="due overdue">📅 Yesterday</span></div>
    </div>
  </div>
  <div class="ui-kanban__col">
    <div class="ui-kanban__head"><strong>Done</strong><span class="ui-kanban__count">1</span></div>
    <div class="ui-card" draggable="true">
      <div class="ui-card__title">Migrate analytics to ClickHouse</div>
      <div class="ui-card__meta"><span class="done-chk">✓ Completed</span></div>
    </div>
  </div>
</div>

<style>
  .ui-kanban{display:flex;gap:8px;padding:12px;background:#0079bf;border-radius:6px;font:14px -apple-system,"Segoe UI",sans-serif;color:#172b4d;overflow-x:auto;align-items:flex-start}
  .ui-kanban__col{flex:none;width:240px;background:#ebecf0;border-radius:3px;padding:8px;display:flex;flex-direction:column;gap:8px}
  .ui-kanban__col.over{background:#dfe1e6}
  .ui-kanban__head{display:flex;align-items:center;gap:6px;padding:4px 6px;font-size:14px}
  .ui-kanban__head strong{font-weight:600;flex:1}
  .ui-kanban__count{font-size:12px;background:#dfe1e6;color:#5e6c84;padding:1px 7px;border-radius:10px}
  .ui-kanban__more{margin-left:4px;color:#5e6c84;cursor:pointer}
  .ui-card{background:#fff;border-radius:3px;padding:8px 10px 6px;cursor:grab;box-shadow:0 1px 0 #091e4240;font-size:14px}
  .ui-card:hover{background:#f4f5f7}
  .ui-card.drag{opacity:.5;transform:rotate(3deg)}
  .ui-card__labels{display:flex;gap:4px;margin-bottom:6px}
  .lbl{height:8px;width:40px;border-radius:4px}
  .lbl-green{background:#61bd4f}.lbl-yellow{background:#f2d600}.lbl-blue{background:#0079bf}.lbl-red{background:#eb5a46}
  .ui-card__cover{height:32px;border-radius:3px;margin-bottom:8px}
  .ui-card__title{line-height:1.35;color:#172b4d;margin-bottom:6px}
  .ui-card__meta{display:flex;align-items:center;gap:8px;font-size:12px;color:#5e6c84}
  .ui-card__avs{margin-left:auto;display:flex;gap:-4px}
  .av{width:22px;height:22px;border-radius:50%;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;margin-left:-4px;border:1.5px solid #fff}
  .due{background:#f4f5f7;padding:1px 5px;border-radius:3px}
  .due.overdue{background:#ffe8e6;color:#c9372c}
  .done-chk{color:#5aac44;font-weight:600}
  .ui-kanban__add{color:#5e6c84;font-size:14px;padding:6px 8px;border-radius:3px;cursor:pointer}
  .ui-kanban__add:hover{background:#dfe1e6}
</style>

<script>
  let dragged=null;
  document.querySelectorAll('.ui-card').forEach(c=>{
    c.addEventListener('dragstart',()=>{dragged=c;c.classList.add('drag')});
    c.addEventListener('dragend',()=>{c.classList.remove('drag');dragged=null});
  });
  document.querySelectorAll('.ui-kanban__col').forEach(col=>{
    col.addEventListener('dragover',e=>{e.preventDefault();col.classList.add('over')});
    col.addEventListener('dragleave',()=>col.classList.remove('over'));
    col.addEventListener('drop',e=>{e.preventDefault();col.classList.remove('over');if(dragged)col.appendChild(dragged)});
  });
</script>`,
    },
    {
      name: 'Skeleton Screen',
      nameJa: 'スケルトンスクリーン',
      desc: 'コンテンツ読み込み中にレイアウトの骨格をプレースホルダーで表示する。',
      detail: 'スケルトンスクリーンは、コンテンツが読み込まれるまでの間、灰色の四角や角丸の長方形でページの骨組みを先に見せておくUIです。「これから何が表示されるか」を視覚的に予告できるため、空白のままよりも体感的な待ち時間が短く感じられます。FacebookやYouTube、Slackなどが採用しており、スピナー(クルクル回るアイコン)に代わるロード表現として広まりました。',
      descEn: 'Shows a layout placeholder while content is loading.',
      detailEn: 'A skeleton screen displays grey boxes and rounded rectangles that mirror the upcoming layout while data is still loading. By previewing where text and images will appear, it makes the wait feel shorter than staring at a blank screen. Facebook, YouTube, and Slack popularized this pattern, and it has largely replaced traditional spinners as a more reassuring loading state.',
      code: `<!-- Inspired by YouTube grid loading -->
<div class="ui-skeleton">
  <div class="sk-card">
    <div class="sk-thumb"><span class="sk-time"></span></div>
    <div class="sk-row">
      <div class="sk-avatar"></div>
      <div class="sk-lines">
        <div class="sk-line w-90"></div>
        <div class="sk-line w-60"></div>
        <div class="sk-line w-40"></div>
      </div>
    </div>
  </div>
  <div class="sk-card">
    <div class="sk-thumb"></div>
    <div class="sk-row">
      <div class="sk-avatar"></div>
      <div class="sk-lines">
        <div class="sk-line w-85"></div>
        <div class="sk-line w-50"></div>
        <div class="sk-line w-35"></div>
      </div>
    </div>
  </div>
  <div class="sk-card">
    <div class="sk-thumb"></div>
    <div class="sk-row">
      <div class="sk-avatar"></div>
      <div class="sk-lines">
        <div class="sk-line w-95"></div>
        <div class="sk-line w-55"></div>
        <div class="sk-line w-45"></div>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-skeleton{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:780px;padding:16px;background:#0f0f0f;font:14px Roboto,Arial,sans-serif}
  .sk-card{display:flex;flex-direction:column;gap:12px}
  .sk-thumb{aspect-ratio:16/9;border-radius:12px;background:#272727;position:relative;overflow:hidden}
  .sk-time{position:absolute;right:8px;bottom:8px;width:36px;height:14px;background:rgba(0,0,0,.5);border-radius:3px}
  .sk-row{display:flex;gap:12px}
  .sk-avatar{width:36px;height:36px;border-radius:50%;background:#272727;flex:none}
  .sk-lines{flex:1;display:flex;flex-direction:column;gap:6px;padding-top:2px}
  .sk-line{height:12px;border-radius:6px;background:#272727}
  .sk-line.w-90{width:90%}.sk-line.w-85{width:85%}.sk-line.w-95{width:95%}
  .sk-line.w-60{width:60%}.sk-line.w-50{width:50%}.sk-line.w-55{width:55%}
  .sk-line.w-40{width:40%;height:10px}.sk-line.w-35{width:35%;height:10px}.sk-line.w-45{width:45%;height:10px}
  .sk-thumb,.sk-avatar,.sk-line,.sk-time{position:relative;overflow:hidden}
  .sk-thumb::after,.sk-avatar::after,.sk-line::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.05) 50%,transparent 100%);animation:ytShimmer 1.4s linear infinite;transform:translateX(-100%)}
  @keyframes ytShimmer{to{transform:translateX(100%)}}
</style>`,
    },
    {
      name: 'Chart / Graph',
      nameJa: 'チャート',
      desc: 'データを折れ線・棒・円などのグラフで視覚化する。',
      detail: 'チャート(グラフ)は、数値データを折れ線、棒、円、エリアなどの図形で視覚的に表現するUIです。数字の表だけでは気づきにくい傾向や比較、構成比を、形と色で直感的に伝えられます。売上推移は折れ線、カテゴリ別の比較は棒、構成比は円、と用途に応じた種類を選ぶのが基本です。ダッシュボードや分析画面で欠かせない要素で、ホバー時に正確な数値をツールチップで補うと、見やすさと正確さを両立できます。',
      descEn: 'Visualizes data as line, bar, pie charts, etc.',
      detailEn: 'A chart turns numbers into shapes — lines, bars, pies, areas — so trends, comparisons, and proportions jump out instantly. The right shape depends on the question: lines for trends over time, bars for category comparisons, pies for parts of a whole. Charts are essential to dashboards and analytics screens. Adding tooltips that reveal exact figures on hover gives you the best of both worlds: visual clarity and precise numbers.',
      code: `<!-- Inspired by Vercel Analytics -->
<div class="ui-chart">
  <div class="ui-chart__head">
    <div>
      <div class="ui-chart__label">Visitors</div>
      <div class="ui-chart__value">128,492 <span class="ui-chart__delta up">↑ 12.4%</span></div>
    </div>
    <div class="ui-chart__range">
      <button>24h</button><button class="active">7d</button><button>30d</button><button>90d</button>
    </div>
  </div>
  <div class="ui-chart__plot">
    <svg viewBox="0 0 320 120" preserveAspectRatio="none" class="ui-chart__svg">
      <defs>
        <linearGradient id="vAreaGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity=".4"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <g class="grid"><line x1="0" y1="30" x2="320" y2="30"/><line x1="0" y1="60" x2="320" y2="60"/><line x1="0" y1="90" x2="320" y2="90"/></g>
      <path d="M0,90 L46,72 L92,80 L138,55 L184,62 L230,38 L276,42 L320,18 L320,120 L0,120 Z" fill="url(#vAreaGrad)"/>
      <path d="M0,90 L46,72 L92,80 L138,55 L184,62 L230,38 L276,42 L320,18" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="230" cy="38" r="4" fill="#fff"/>
      <circle cx="230" cy="38" r="8" fill="#fff" opacity=".25"/>
    </svg>
    <div class="ui-chart__tip" style="left:62%"><strong>22,184</strong><small>Fri, Sep 19</small></div>
    <div class="ui-chart__axis"><span>Sep 13</span><span>Sep 15</span><span>Sep 17</span><span>Sep 19</span><span>Today</span></div>
  </div>
</div>

<style>
  .ui-chart{max-width:480px;padding:20px;background:#000;border:1px solid #333;border-radius:12px;font:13px ui-sans-serif,-apple-system,"Inter",sans-serif;color:#ededed}
  .ui-chart__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
  .ui-chart__label{font-size:13px;color:#a1a1a1;margin-bottom:4px}
  .ui-chart__value{font-size:28px;font-weight:600;letter-spacing:-.02em}
  .ui-chart__delta{font-size:12px;font-weight:600;margin-left:6px;padding:2px 6px;border-radius:4px}
  .ui-chart__delta.up{background:rgba(80,193,114,.15);color:#50e3a4}
  .ui-chart__range{display:flex;gap:2px;background:#171717;padding:3px;border-radius:6px;border:1px solid #333}
  .ui-chart__range button{background:transparent;border:0;color:#a1a1a1;padding:3px 10px;border-radius:4px;font:600 12px inherit;cursor:pointer}
  .ui-chart__range button.active{background:#333;color:#fff}
  .ui-chart__plot{position:relative}
  .ui-chart__svg{width:100%;height:120px;display:block}
  .ui-chart__svg .grid line{stroke:#171717;stroke-width:1}
  .ui-chart__tip{position:absolute;top:-4px;background:#171717;border:1px solid #333;border-radius:6px;padding:6px 10px;transform:translateX(-50%);pointer-events:none;box-shadow:0 4px 12px rgba(0,0,0,.5)}
  .ui-chart__tip strong{display:block;font-size:13px;font-weight:600}
  .ui-chart__tip small{font-size:11px;color:#a1a1a1}
  .ui-chart__axis{display:flex;justify-content:space-between;margin-top:8px;font-size:11px;color:#666}
</style>`,
    },
  ],
}
