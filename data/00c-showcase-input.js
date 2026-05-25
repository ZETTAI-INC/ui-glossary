/**
 * UI Parts Showcase (Input) — ready-to-use input-oriented UI components.
 * Each entry includes a standalone HTML + CSS (+ optional JS) snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-input',
  title: 'UIパーツ集(入力系)',
  titleEn: 'Input Components',
  description: 'フォームや操作を受け取るUIパーツ。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Checkbox',
      nameJa: 'チェックボックス',
      desc: '複数選択できる四角いマス。「規約に同意」など。カスタムデザインで。',
      detail: 'チェックボックスは、複数の項目から好きなだけ選べる(または何も選ばないこともできる)四角いマス型のUIです。「規約に同意する」のような単独確認や、「興味のあるカテゴリを選んでください」のような複数選択で使います。標準のチェックボックスは見た目がブラウザ依存で地味になりがちなので、カスタムCSSでブランドカラーに揃えると一気に洗練された印象になります。',
      descEn: 'A square box for picking multiple options or confirming things like "I agree to the terms".',
      detailEn: 'A checkbox is a square control where users can pick any number of items — or none at all. It works for single confirmations like "I agree to the terms" as well as multi-choice questions like "Select all categories that interest you." Default checkboxes look plain and inconsistent across browsers, so styling them with custom CSS in your brand color is an easy way to make a form feel polished and modern.',
      code: `<!-- Inspired by Linear -->
<div class="ui-checkbox-list">
  <div class="ui-checkbox-list__head">
    <span class="ui-checkbox-list__title">DES-241</span>
    <span class="ui-checkbox-list__count">3/5</span>
  </div>
  <label class="ui-checkbox is-done"><input type="checkbox" checked><span class="ui-checkbox__box"></span><span class="ui-checkbox__label">Audit empty states across web app</span></label>
  <label class="ui-checkbox is-done"><input type="checkbox" checked><span class="ui-checkbox__box"></span><span class="ui-checkbox__label">Draft new illustration set in Figma</span></label>
  <label class="ui-checkbox is-done"><input type="checkbox" checked><span class="ui-checkbox__box"></span><span class="ui-checkbox__label">Review with @karri</span></label>
  <label class="ui-checkbox"><input type="checkbox"><span class="ui-checkbox__box"></span><span class="ui-checkbox__label">Hand off final assets to engineering</span></label>
  <label class="ui-checkbox"><input type="checkbox"><span class="ui-checkbox__box"></span><span class="ui-checkbox__label">Ship in 2025.42 release</span></label>
</div>

<style>
  .ui-checkbox-list{padding:16px;background:#08090a;border:1px solid #1f2023;border-radius:8px;width:320px;font:13.5px 'Inter',-apple-system,sans-serif;color:#e8e8ea}
  .ui-checkbox-list__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;font-size:12px;color:#8a8f98;letter-spacing:-.01em}
  .ui-checkbox-list__title{color:#b4bcd0;font-weight:500}
  .ui-checkbox-list__count{font-variant-numeric:tabular-nums}
  .ui-checkbox{display:flex;align-items:center;gap:9px;cursor:pointer;padding:5px 4px;border-radius:4px;user-select:none}
  .ui-checkbox:hover{background:rgba(255,255,255,.03)}
  .ui-checkbox input{position:absolute;opacity:0;pointer-events:none}
  .ui-checkbox__box{width:14px;height:14px;border:1.5px solid #4c4f57;border-radius:3px;background:transparent;display:inline-flex;align-items:center;justify-content:center;transition:.12s;flex-shrink:0}
  .ui-checkbox__box::after{content:"";width:7px;height:4px;border-left:1.7px solid #fff;border-bottom:1.7px solid #fff;transform:rotate(-45deg) translate(.5px,-1px) scale(0);transition:.12s}
  .ui-checkbox input:checked + .ui-checkbox__box{background:#5e6ad2;border-color:#5e6ad2}
  .ui-checkbox input:checked + .ui-checkbox__box::after{transform:rotate(-45deg) translate(.5px,-1px) scale(1)}
  .ui-checkbox input:focus-visible + .ui-checkbox__box{box-shadow:0 0 0 2px rgba(94,106,210,.4)}
  .ui-checkbox__label{letter-spacing:-.005em}
  .ui-checkbox.is-done .ui-checkbox__label{color:#6a707d;text-decoration:line-through;text-decoration-color:#4c4f57}
</style>`,
    },
    {
      name: 'Radio Group',
      nameJa: 'ラジオグループ',
      desc: '複数選択肢から1つだけ選ぶ丸いボタンの集まり。',
      detail: 'ラジオグループは、複数の選択肢から必ず1つだけを選ぶための丸いボタンの集まりです。同じ name 属性でまとめると、別のものをクリックしたとき前の選択が自動的に解除されます。「お支払い方法」「サイズ選択」「配送オプション」など、2〜5個程度の選択肢で全部を一覧表示したいときに最適。選択肢が多すぎる場合はドロップダウン、複数選んでよい場合はチェックボックスを使い分けます。',
      descEn: 'A set of round buttons where the user must pick exactly one option.',
      detailEn: 'A radio group is a set of round buttons that lets users choose exactly one option from a list. Items sharing the same `name` attribute act as a group — clicking a new one automatically deselects the previous choice. It is ideal when you want all 2–5 options visible at once, like payment methods, size pickers, or shipping options. With many more options, use a dropdown; if multiple selections are allowed, use checkboxes.',
      code: `<!-- Inspired by Stripe billing -->
<fieldset class="ui-radio-group" role="radiogroup">
  <legend class="ui-radio-group__legend">Choose your plan</legend>
  <label class="ui-radio">
    <input type="radio" name="plan">
    <span class="ui-radio__dot"></span>
    <div class="ui-radio__body">
      <div class="ui-radio__row"><span class="ui-radio__name">Starter</span><span class="ui-radio__price">$0</span></div>
      <div class="ui-radio__desc">Up to 1,000 monthly active users</div>
    </div>
  </label>
  <label class="ui-radio is-selected">
    <input type="radio" name="plan" checked>
    <span class="ui-radio__dot"></span>
    <div class="ui-radio__body">
      <div class="ui-radio__row"><span class="ui-radio__name">Growth <em>Recommended</em></span><span class="ui-radio__price">$49/mo</span></div>
      <div class="ui-radio__desc">10,000 MAU, advanced fraud rules, priority email support</div>
    </div>
  </label>
  <label class="ui-radio">
    <input type="radio" name="plan">
    <span class="ui-radio__dot"></span>
    <div class="ui-radio__body">
      <div class="ui-radio__row"><span class="ui-radio__name">Scale</span><span class="ui-radio__price">$299/mo</span></div>
      <div class="ui-radio__desc">Unlimited MAU, custom integrations, dedicated CSM</div>
    </div>
  </label>
</fieldset>

<style>
  .ui-radio-group{display:flex;flex-direction:column;gap:8px;border:0;padding:0;margin:0;width:380px;font:14px -apple-system,'Inter','Segoe UI',sans-serif;color:#1a1f36}
  .ui-radio-group__legend{font:600 13px -apple-system,sans-serif;color:#697386;margin-bottom:4px;padding:0;letter-spacing:.01em}
  .ui-radio{display:flex;align-items:flex-start;gap:12px;cursor:pointer;padding:14px 14px;border:1px solid #e3e8ee;border-radius:8px;background:#fff;transition:.15s;box-shadow:0 1px 1px rgba(0,0,0,.03)}
  .ui-radio:hover{border-color:#c1c9d2}
  .ui-radio input{position:absolute;opacity:0;pointer-events:none}
  .ui-radio__dot{width:16px;height:16px;border:1.5px solid #c1c9d2;border-radius:50%;background:#fff;display:inline-flex;align-items:center;justify-content:center;transition:.15s;flex-shrink:0;margin-top:2px}
  .ui-radio__dot::after{content:"";width:6px;height:6px;border-radius:50%;background:#fff;transform:scale(0);transition:.15s}
  .ui-radio input:checked + .ui-radio__dot{border-color:#635bff;background:#635bff}
  .ui-radio input:checked + .ui-radio__dot::after{transform:scale(1)}
  .ui-radio.is-selected,.ui-radio:has(input:checked){border-color:#635bff;box-shadow:0 0 0 1px #635bff,0 1px 1px rgba(99,91,255,.08)}
  .ui-radio__body{flex:1;min-width:0}
  .ui-radio__row{display:flex;justify-content:space-between;align-items:center;gap:8px}
  .ui-radio__name{font-weight:600;color:#1a1f36}
  .ui-radio__name em{display:inline-block;margin-left:6px;padding:1px 7px;background:#f0eeff;color:#5851d9;border-radius:4px;font:600 10px -apple-system,sans-serif;text-transform:uppercase;letter-spacing:.04em;font-style:normal}
  .ui-radio__price{font-weight:600;color:#1a1f36;font-variant-numeric:tabular-nums}
  .ui-radio__desc{margin-top:3px;color:#697386;font-size:13px;line-height:1.4}
</style>`,
    },
    {
      name: 'Text Field',
      nameJa: 'テキストフィールド',
      desc: '一行のテキスト入力欄。ラベル+説明文+エラー表示込み。',
      detail: 'テキストフィールドは、ユーザーが一行の文字列を入力する最も基本的なフォーム要素です。良い設計の鍵は「ラベル(何を入れる欄か)」「プレースホルダ(入力例)」「ヘルプ文(補足ルール)」「エラー文(間違っているときの説明)」をきちんと配置すること。例えばメールアドレス欄なら「形式が間違っています」と具体的に伝えることで、ユーザーは迷わず修正できます。',
      descEn: 'A single-line text input including label, help text, and error message.',
      detailEn: 'A text field is the most basic form element where users type a single line of text. Good design comes down to four parts: a label (what is this field for), a placeholder (an example), a help message (extra rules), and an error message (what went wrong). For example, a clear error on the email field saying "the format is incorrect" helps users fix mistakes without guessing what they did wrong.',
      code: `<!-- Inspired by Notion -->
<form class="ui-field-form">
  <div class="ui-field">
    <label class="ui-field__label" for="ws">Workspace name</label>
    <input class="ui-field__input" id="ws" type="text" value="Lighthouse Labs">
    <p class="ui-field__help">The name of your company or organization.</p>
  </div>
  <div class="ui-field">
    <label class="ui-field__label" for="url">Workspace URL</label>
    <div class="ui-field__group">
      <span class="ui-field__prefix">notion.so/</span>
      <input class="ui-field__input ui-field__input--joined" id="url" type="text" value="lighthouse labs">
    </div>
    <p class="ui-field__error"><svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="#eb5757"/><path d="M8 4v5M8 11v.5" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg> URL can only contain lowercase letters, numbers and hyphens.</p>
  </div>
</form>

<style>
  .ui-field-form{width:360px;padding:20px;background:#fff;font:15px -apple-system,'Segoe UI',sans-serif;color:rgb(55,53,47)}
  .ui-field{display:flex;flex-direction:column;gap:6px;margin-bottom:18px}
  .ui-field__label{font:600 13px -apple-system,sans-serif;color:rgba(55,53,47,.65);letter-spacing:-.005em}
  .ui-field__input{padding:6px 10px;border:1px solid rgba(15,15,15,.1);border-radius:4px;background:rgba(242,241,238,.6);font:14.5px -apple-system,sans-serif;color:rgb(55,53,47);transition:.12s;width:100%;box-sizing:border-box}
  .ui-field__input:hover{background:rgba(55,53,47,.04)}
  .ui-field__input:focus{outline:none;border-color:rgba(35,131,226,.57);box-shadow:0 0 0 2px rgba(35,131,226,.3);background:#fff}
  .ui-field__group{display:flex;align-items:stretch;border:1px solid rgba(15,15,15,.1);border-radius:4px;background:rgba(242,241,238,.6);overflow:hidden}
  .ui-field__group:focus-within{border-color:#eb5757;box-shadow:0 0 0 2px rgba(235,87,87,.25);background:#fff}
  .ui-field__prefix{padding:6px 4px 6px 10px;color:rgba(55,53,47,.5);font:14.5px -apple-system,sans-serif;display:flex;align-items:center}
  .ui-field__input--joined{border:0;background:transparent;padding-left:0;border-radius:0}
  .ui-field__input--joined:focus{box-shadow:none;border:0;background:transparent}
  .ui-field__help{margin:0;font-size:12px;color:rgba(55,53,47,.5);line-height:1.4}
  .ui-field__error{margin:0;display:flex;align-items:center;gap:5px;font-size:12px;color:#eb5757;line-height:1.4}
</style>`,
    },
    {
      name: 'Range Slider',
      nameJa: 'レンジスライダー',
      desc: 'つまみをドラッグして数値を選ぶスライダー。価格帯選択など。',
      detail: 'レンジスライダーは、つまみを左右にドラッグして数値を直感的に選べるUIです。価格帯フィルター、音量・明るさ調整、評価の絞り込みなど、「だいたいこのあたり」を素早く決めたい場面に向いています。数字を直接タイプするより速く、視覚的に範囲をつかみやすいのが利点。現在値の表示を必ず添え、最小値・最大値も明示しておくとユーザーが安心して操作できます。',
      descEn: 'A draggable thumb that lets users pick a numeric value, useful for price filters and the like.',
      detailEn: 'A range slider lets users drag a thumb left or right to pick a numeric value intuitively. It is great whenever a rough "somewhere around here" choice is enough — price filters, volume or brightness, rating cutoffs. Sliders are faster than typing a number and make ranges easy to grasp at a glance. Always display the current value, plus the min and max labels, so users know exactly what they are selecting.',
      code: `<!-- Inspired by Figma -->
<div class="ui-slider-panel">
  <div class="ui-slider-panel__head">
    <span class="ui-slider-panel__title">Layer</span>
  </div>
  <div class="ui-slider-row">
    <label class="ui-slider-row__icon" for="opacity" title="Opacity">
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4" fill="none"/><path d="M8 2v12" stroke="currentColor" stroke-width="1.4"/></svg>
    </label>
    <input class="ui-slider__input" id="opacity" type="range" min="0" max="100" step="1" value="64">
    <input class="ui-slider__num" id="opacityVal" value="64%" aria-label="Opacity value">
  </div>
</div>

<style>
  .ui-slider-panel{width:240px;padding:8px 10px 12px;background:#2c2c2c;border-radius:6px;font:11px 'Inter',-apple-system,sans-serif;color:#e6e6e6;box-shadow:0 4px 16px rgba(0,0,0,.4)}
  .ui-slider-panel__head{padding:4px 2px 8px;border-bottom:1px solid #444;margin-bottom:10px}
  .ui-slider-panel__title{color:#9a9a9a;font-size:11px;text-transform:uppercase;letter-spacing:.04em}
  .ui-slider-row{display:flex;align-items:center;gap:6px}
  .ui-slider-row__icon{width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:#9a9a9a;border-radius:2px}
  .ui-slider__input{-webkit-appearance:none;appearance:none;flex:1;height:4px;background:linear-gradient(to right,#0d99ff 0%,#0d99ff 64%,#444 64%,#444 100%);border-radius:2px;outline:none;cursor:pointer}
  .ui-slider__input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:14px;height:14px;background:#fff;border:1px solid #0d99ff;border-radius:50%;cursor:grab;box-shadow:0 1px 2px rgba(0,0,0,.5)}
  .ui-slider__input::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.1)}
  .ui-slider__input::-moz-range-thumb{width:14px;height:14px;background:#fff;border:1px solid #0d99ff;border-radius:50%;cursor:grab}
  .ui-slider__num{width:56px;height:24px;padding:0 6px;background:#383838;border:1px solid transparent;border-radius:2px;color:#e6e6e6;font:11px 'Inter',-apple-system,sans-serif;text-align:right;font-variant-numeric:tabular-nums}
  .ui-slider__num:focus{outline:none;border-color:#0d99ff;background:#1e1e1e}
</style>

<script>
  const sl=document.getElementById('opacity'),vl=document.getElementById('opacityVal');
  const upd=()=>{const p=(sl.value-sl.min)/(sl.max-sl.min)*100;sl.style.background=\`linear-gradient(to right,#0d99ff 0%,#0d99ff \${p}%,#444 \${p}%,#444 100%)\`;vl.value=sl.value+'%'};
  sl.addEventListener('input',upd);upd();
</script>`,
    },
    {
      name: 'Date Picker',
      nameJa: '日付ピッカー',
      desc: 'カレンダーから日付を選ぶUI。HTML標準のinput[type=date]をベースに装飾。',
      detail: '日付ピッカーは、カレンダーUIから日付を選べる入力欄です。HTML標準の input[type="date"] を使うと、各ブラウザ・OSが用意した使いやすいカレンダーを呼び出せます。誕生日、予約日、締切など「正確な日付を1つ選ぶ」用途に最適。最小値・最大値を設定すれば、過去日を選べないようにする、未来1ヶ月以内に限定するといった制限も簡単にかけられます。',
      descEn: 'An input that pops a calendar for picking a date, built on HTML\'s input[type=date].',
      detailEn: 'A date picker is an input that opens a calendar UI for picking a date. Using the standard HTML `input[type="date"]` gives you the OS or browser\'s native picker for free. It is ideal for cases where you need to pick one specific date — birthdays, reservations, deadlines. With the `min` and `max` attributes you can easily prevent past dates or limit the range to the next month, without writing extra logic.',
      code: `<!-- Inspired by Cal.com -->
<div class="ui-cal" id="cal">
  <div class="ui-cal__head">
    <div class="ui-cal__month">May 2026</div>
    <div class="ui-cal__nav">
      <button type="button" aria-label="Previous">‹</button>
      <button type="button" aria-label="Next">›</button>
    </div>
  </div>
  <div class="ui-cal__weekdays"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>
  <div class="ui-cal__grid">
    <button type="button" class="ui-cal__day is-muted">26</button><button type="button" class="ui-cal__day is-muted">27</button><button type="button" class="ui-cal__day is-muted">28</button><button type="button" class="ui-cal__day is-muted">29</button><button type="button" class="ui-cal__day is-muted">30</button><button type="button" class="ui-cal__day">1</button><button type="button" class="ui-cal__day">2</button>
    <button type="button" class="ui-cal__day">3</button><button type="button" class="ui-cal__day">4</button><button type="button" class="ui-cal__day">5</button><button type="button" class="ui-cal__day">6</button><button type="button" class="ui-cal__day">7</button><button type="button" class="ui-cal__day">8</button><button type="button" class="ui-cal__day">9</button>
    <button type="button" class="ui-cal__day">10</button><button type="button" class="ui-cal__day">11</button><button type="button" class="ui-cal__day">12</button><button type="button" class="ui-cal__day">13</button><button type="button" class="ui-cal__day">14</button><button type="button" class="ui-cal__day">15</button><button type="button" class="ui-cal__day">16</button>
    <button type="button" class="ui-cal__day">17</button><button type="button" class="ui-cal__day">18</button><button type="button" class="ui-cal__day">19</button><button type="button" class="ui-cal__day is-today">20</button><button type="button" class="ui-cal__day">21</button><button type="button" class="ui-cal__day is-selected">22</button><button type="button" class="ui-cal__day">23</button>
    <button type="button" class="ui-cal__day">24</button><button type="button" class="ui-cal__day">25</button><button type="button" class="ui-cal__day">26</button><button type="button" class="ui-cal__day">27</button><button type="button" class="ui-cal__day">28</button><button type="button" class="ui-cal__day">29</button><button type="button" class="ui-cal__day">30</button>
    <button type="button" class="ui-cal__day">31</button>
  </div>
  <div class="ui-cal__times">
    <button type="button">9:00 am</button><button type="button" class="is-selected">9:30 am</button><button type="button">10:00 am</button><button type="button">10:30 am</button>
  </div>
</div>

<style>
  .ui-cal{width:300px;padding:16px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;font:13px Inter,-apple-system,sans-serif;color:#101828;box-shadow:0 4px 12px rgba(0,0,0,.04)}
  .ui-cal__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
  .ui-cal__month{font-weight:600;font-size:14px}
  .ui-cal__nav{display:flex;gap:2px}
  .ui-cal__nav button{width:28px;height:28px;border:0;background:transparent;color:#475467;font-size:18px;border-radius:6px;cursor:pointer}
  .ui-cal__nav button:hover{background:#f2f4f7}
  .ui-cal__weekdays{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:4px;color:#98a2b3;font-size:11px;text-align:center;font-weight:500}
  .ui-cal__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}
  .ui-cal__day{aspect-ratio:1;border:0;background:transparent;border-radius:50%;font:500 13px Inter,sans-serif;color:#344054;cursor:pointer;transition:.12s}
  .ui-cal__day:hover{background:#f2f4f7}
  .ui-cal__day.is-muted{color:#d0d5dd}
  .ui-cal__day.is-today{color:#101828;font-weight:700;background:#f2f4f7}
  .ui-cal__day.is-selected{background:#101828;color:#fff}
  .ui-cal__day.is-selected:hover{background:#101828}
  .ui-cal__times{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:14px;padding-top:14px;border-top:1px solid #f2f4f7}
  .ui-cal__times button{padding:8px;border:1px solid #d0d5dd;border-radius:6px;background:#fff;color:#101828;font:500 13px Inter,sans-serif;cursor:pointer}
  .ui-cal__times button:hover{border-color:#101828}
  .ui-cal__times button.is-selected{background:#101828;color:#fff;border-color:#101828}
</style>`,
    },
    {
      name: 'File Uploader',
      nameJa: 'ファイルアップローダー',
      desc: 'ドラッグ&ドロップでファイルを選べるUI。',
      detail: 'ファイルアップローダーは、ファイル選択ダイアログを開く方法に加え、ファイルをエリアにドラッグ&ドロップして送信できるUIです。プロフィール画像、添付資料、CSVインポートなどでよく見かけます。「ここにファイルをドロップ」というガイド文や、対応形式・最大サイズの表示、選択後のファイル名プレビューを添えると親切。アップロード中はプログレスバーやスピナーを表示して進行状況を見せましょう。',
      descEn: 'A drop zone for uploading files via drag-and-drop or the standard file picker.',
      detailEn: 'A file uploader supports both the classic file picker and dragging files directly onto a target area. You see it on profile pictures, attachment fields, and CSV importers. A clear "Drop files here" hint, an allowed-format and size note, and a preview of selected filenames make the experience much more comfortable. While files are being sent, show a progress bar or spinner so users know things are moving along.',
      code: `<!-- Inspired by Vercel deploy -->
<label class="ui-uploader" id="up">
  <input type="file" id="upInput" hidden multiple>
  <div class="ui-uploader__triangle">
    <svg width="32" height="28" viewBox="0 0 76 65" aria-hidden="true"><path d="M37.59.25l36.95 64H.64l36.95-64z" fill="#fff"/></svg>
  </div>
  <div class="ui-uploader__title">Drop your project folder here</div>
  <div class="ui-uploader__sub">or <u>browse from your computer</u>. We support .zip, .tar.gz, or a Git URL.</div>
  <ul class="ui-uploader__list" id="upList">
    <li><span class="ui-uploader__file">next.config.js</span><span class="ui-uploader__ok">Ready</span></li>
    <li><span class="ui-uploader__file">package.json</span><span class="ui-uploader__ok">Ready</span></li>
  </ul>
</label>

<style>
  .ui-uploader{display:flex;flex-direction:column;align-items:center;gap:10px;padding:36px 24px;max-width:420px;border:1px dashed #333;border-radius:8px;background:#000;cursor:pointer;text-align:center;font:14px 'Geist',-apple-system,'Helvetica Neue',sans-serif;color:#ededed;transition:.18s ease}
  .ui-uploader:hover,.ui-uploader.drag{border-color:#fff;background:#0a0a0a}
  .ui-uploader__triangle{width:48px;height:48px;border-radius:50%;background:#111;border:1px solid #333;display:flex;align-items:center;justify-content:center}
  .ui-uploader__title{font:600 16px 'Geist',sans-serif;letter-spacing:-.01em}
  .ui-uploader__sub{font-size:13px;color:#a1a1a1;line-height:1.5;max-width:300px}
  .ui-uploader__sub u{color:#ededed;text-decoration:underline;text-underline-offset:2px}
  .ui-uploader__list{list-style:none;padding:0;margin:8px 0 0;width:100%;display:flex;flex-direction:column;gap:6px;text-align:left}
  .ui-uploader__list li{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#0a0a0a;border:1px solid #1f1f1f;border-radius:6px;font:13px 'Geist Mono',ui-monospace,monospace;color:#ededed}
  .ui-uploader__ok{display:inline-flex;align-items:center;gap:4px;font:500 11px 'Geist',sans-serif;color:#0070f3}
  .ui-uploader__ok::before{content:"";width:6px;height:6px;border-radius:50%;background:#0070f3}
</style>

<script>
  (()=>{const up=document.getElementById('up'),inp=document.getElementById('upInput'),list=document.getElementById('upList');
    const render=files=>{list.innerHTML='';[...files].forEach(f=>{const li=document.createElement('li');li.innerHTML='<span>'+f.name+'</span><span class="ui-uploader__ok">'+Math.ceil(f.size/1024)+' KB</span>';list.appendChild(li)})};
    inp.addEventListener('change',e=>render(e.target.files));
    ['dragenter','dragover'].forEach(ev=>up.addEventListener(ev,e=>{e.preventDefault();up.classList.add('drag')}));
    ['dragleave','drop'].forEach(ev=>up.addEventListener(ev,e=>{e.preventDefault();up.classList.remove('drag')}));
    up.addEventListener('drop',e=>{inp.files=e.dataTransfer.files;render(e.dataTransfer.files)});
  })();
</script>`,
    },
    {
      name: 'Stepper Input',
      nameJa: 'ステッパー入力',
      desc: '+/−ボタンで数値を増減する数量入力(カート個数など)。',
      detail: 'ステッパー入力は、−と+のボタンで数値を1つずつ増減できる小さな入力UIです。ECサイトのカート個数、座席数、設定値の微調整など、「だいたい小さな整数を素早く決めたい」場面に最適。タップだけで完結するためスマホで特に使いやすく、上下限を設定すれば在庫切れや0以下を未然に防げます。数字を直接タイプもできるよう、真ん中に input を置くと自由度がさらに高まります。',
      descEn: 'A small input with − and + buttons for incrementing a number, like a cart quantity.',
      detailEn: 'A stepper input is a compact control with minus and plus buttons for nudging a value up or down one at a time. It is perfect when users need a small integer fast — cart quantities, ticket counts, fine-tuned settings. Tap-only operation makes it especially friendly on phones, and setting min/max bounds prevents going below zero or past stock limits. Putting an editable input in the middle lets advanced users type the number directly.',
      code: `<!-- Inspired by Shopify cart -->
<div class="ui-cart-row">
  <div class="ui-cart-row__thumb" style="background:linear-gradient(135deg,#f5e6d3,#c9a17a)"></div>
  <div class="ui-cart-row__info">
    <div class="ui-cart-row__title">Linen Crewneck Tee</div>
    <div class="ui-cart-row__variant">Sand · Medium</div>
    <div class="ui-cart-row__price">$42.00</div>
  </div>
  <div class="ui-stepper-input" id="sp">
    <button type="button" class="ui-stepper-input__btn" data-act="dec" aria-label="Decrease">
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 5h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
    <input class="ui-stepper-input__val" type="number" value="2" min="1" max="10" aria-label="Quantity">
    <button type="button" class="ui-stepper-input__btn" data-act="inc" aria-label="Increase">
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 5h8M5 1v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
  </div>
</div>

<style>
  .ui-cart-row{display:flex;align-items:center;gap:14px;padding:14px;background:#fff;border:1px solid #e1e3e5;border-radius:8px;width:420px;font:14px -apple-system,'Inter','Helvetica Neue',sans-serif;color:#202223}
  .ui-cart-row__thumb{width:64px;height:64px;border-radius:6px;border:1px solid #e1e3e5;flex:none}
  .ui-cart-row__info{flex:1;min-width:0}
  .ui-cart-row__title{font:500 14px -apple-system,sans-serif;color:#202223}
  .ui-cart-row__variant{margin-top:2px;font-size:12px;color:#6d7175}
  .ui-cart-row__price{margin-top:6px;font:600 14px -apple-system,sans-serif;color:#202223}
  .ui-stepper-input{display:inline-flex;align-items:center;border:1px solid #c9cccf;border-radius:6px;background:#fff;overflow:hidden;height:36px}
  .ui-stepper-input__btn{width:32px;height:34px;border:0;background:#fff;color:#202223;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.12s}
  .ui-stepper-input__btn:hover{background:#f6f6f7}
  .ui-stepper-input__btn:disabled{opacity:.35;cursor:not-allowed}
  .ui-stepper-input__val{width:36px;height:34px;border:0;text-align:center;font:500 14px -apple-system,sans-serif;color:#202223;background:transparent;-moz-appearance:textfield}
  .ui-stepper-input__val::-webkit-outer-spin-button,.ui-stepper-input__val::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
  .ui-stepper-input__val:focus{outline:none;background:#f1f2f3}
</style>

<script>
  (()=>{const sp=document.getElementById('sp'),val=sp.querySelector('.ui-stepper-input__val');
    const upd=()=>{sp.querySelector('[data-act=dec]').disabled=+val.value<=+val.min;sp.querySelector('[data-act=inc]').disabled=+val.value>=+val.max};
    sp.addEventListener('click',e=>{const a=e.target.closest('[data-act]')?.dataset.act;if(!a)return;val.value=Math.min(+val.max,Math.max(+val.min,+val.value+(a==='inc'?1:-1)));upd()});
    val.addEventListener('input',upd);upd();
  })();
</script>`,
    },
    {
      name: 'Segment Control',
      nameJa: 'セグメントコントロール',
      desc: '3〜4個から1つを選ぶ横並びの分節ボタン群。',
      detail: 'セグメントコントロールは、横並びにつながったボタンで3〜4個の選択肢から1つを選ぶUIです。iOSやmacOSの「リスト/グリッド表示切替」「期間(日・週・月)切替」などでおなじみで、ラジオボタンを「見た目を圧縮して、選択肢が同列に並ぶことを強調」した形と考えると分かりやすいです。選択肢が固定で短いラベルを並べられる場合、タブよりもコンパクトに使えるのが魅力です。',
      descEn: 'A row of joined buttons for picking one of three or four options.',
      detailEn: 'A segmented control is a row of connected buttons used to pick one option from three or four. It is the classic toggle you see on iOS or macOS for switching between list/grid view, or between day/week/month ranges. Think of it as a compressed radio button group that emphasizes the choices being peers. When labels are short and the number of options is fixed, it is more compact and visually cleaner than tabs.',
      code: `<!-- Inspired by Reddit sort -->
<div class="ui-segment-wrap">
  <span class="ui-segment-wrap__label">Sort by</span>
  <div class="ui-segment" role="radiogroup" aria-label="Sort">
    <label><input type="radio" name="seg" value="hot" checked><span><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 1s4 3 4 7a4 4 0 11-8 0c0-1.5 1-2.5 1-2.5S5 7 5 5s3-4 3-4z"/></svg> Hot</span></label>
    <label><input type="radio" name="seg" value="new"><span><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M8 5v3l2 1.5" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg> New</span></label>
    <label><input type="radio" name="seg" value="top"><span><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 2l5 5h-3v5H6V7H3z"/></svg> Top</span></label>
    <label><input type="radio" name="seg" value="rising"><span><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 11l4-4 3 3 5-6" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg> Rising</span></label>
  </div>
</div>

<style>
  .ui-segment-wrap{display:flex;align-items:center;gap:10px;padding:12px;background:#fff;border-bottom:1px solid #edeff1;width:fit-content;font:14px IBMPlexSans,-apple-system,'Helvetica Neue',sans-serif;color:#1c1c1c}
  .ui-segment-wrap__label{color:#7c7c7c;font:600 12px IBMPlexSans,sans-serif;text-transform:uppercase;letter-spacing:.04em}
  .ui-segment{display:inline-flex;gap:4px;padding:2px;background:transparent;border-radius:999px}
  .ui-segment label{position:relative;cursor:pointer}
  .ui-segment input{position:absolute;opacity:0;pointer-events:none}
  .ui-segment span{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 14px;border-radius:999px;font:600 13px IBMPlexSans,sans-serif;color:#1c1c1c;transition:.15s;background:transparent}
  .ui-segment label:hover span{background:#f6f7f8}
  .ui-segment input:checked + span{background:#ff4500;color:#fff}
  .ui-segment input:checked + span svg{color:#fff}
  .ui-segment input:focus-visible + span{box-shadow:0 0 0 2px rgba(255,69,0,.35)}
</style>`,
    },
  ],
}
