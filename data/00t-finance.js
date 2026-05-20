/**
 * UI Parts Showcase (Finance & Payment) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-finance',
  title: '金融・決済UI',
  titleEn: 'Finance & Payment UI',
  description: 'Stripe・Wise・Robinhood・PayPay・楽天銀行 などの金融・決済アプリでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Account Balance Card',
      nameJa: '残高カード',
      desc: '大きな金額と通貨、増減%を見せる残高表示カード。アプリのトップで定番。',
      detail: '銀行アプリや家計簿アプリを開いた瞬間に一番大きく表示される、いわゆる「残高カード」です。総資産や口座残高を太い数字で見せ、その横に「先月比 +2.3%」のようなデルタを緑(プラス)・赤(マイナス)で添えるのが定石です。通貨記号を金額の左に小さく置き、桁区切りカンマを必ず入れることで、何ドル・何円かが瞬時に読み取れます。Wise や Mercury のようなアプリでは、上に「Total balance」など控えめなラベルを置き、視覚的なノイズを徹底的に減らしているのが特徴です。',
      descEn: 'A balance card with a big amount, currency, and a tiny green/red change delta — a staple on app home screens.',
      detailEn: 'This is the giant "balance card" you see the instant you open a banking or budget app. The total assets or account balance gets a bold, oversized number, with a "+2.3% vs last month" delta in green (up) or red (down) right next to it. The currency symbol sits small to the left of the amount, and comma separators are non-negotiable so you can read the figure at a glance. Apps like Wise and Mercury keep the supporting label ("Total balance") muted, stripping away visual noise so the number itself does the talking.',
      code: `<!-- Inspired by Mercury -->
<div class="ui-bal-card">
  <div class="ui-bal-card__label">Total balance</div>
  <div class="ui-bal-card__amount">
    <span class="ui-bal-card__cur">$</span>
    <span class="ui-bal-card__num">128,453</span>
    <span class="ui-bal-card__dec">.92</span>
  </div>
  <div class="ui-bal-card__meta">
    <span class="ui-bal-card__delta ui-bal-card__delta--up">▲ +2.34%</span>
    <span class="ui-bal-card__period">過去30日</span>
  </div>
</div>

<style>
  .ui-bal-card{max-width:340px;padding:24px;background:#fff;border:1px solid #e6e7eb;border-radius:14px;font:-apple-system,"Inter","Segoe UI",sans-serif;color:#0f1115}
  .ui-bal-card__label{font-size:13px;color:#6b7180;letter-spacing:.01em}
  .ui-bal-card__amount{display:flex;align-items:baseline;gap:2px;margin-top:6px;font-variant-numeric:tabular-nums}
  .ui-bal-card__cur{font-size:22px;color:#6b7180;margin-right:2px}
  .ui-bal-card__num{font-size:40px;font-weight:600;letter-spacing:-.02em;line-height:1.05}
  .ui-bal-card__dec{font-size:24px;color:#9aa0ab;font-weight:500}
  .ui-bal-card__meta{margin-top:10px;display:flex;align-items:center;gap:10px;font-size:13px}
  .ui-bal-card__delta{font-weight:600}
  .ui-bal-card__delta--up{color:#0a8a4f}
  .ui-bal-card__period{color:#9aa0ab}
</style>`,
    },
    {
      name: 'Transaction Row',
      nameJa: '取引明細行',
      desc: '店舗アイコン・名前・カテゴリ・色分けされた金額を一行で見せる取引履歴。',
      detail: 'いわゆる「明細リスト」の1行です。左端に店舗の頭文字や絵文字をのせた丸いアイコン、その右に店舗名と「食費」「交通」などのカテゴリラベル、右端に金額を置く構成が世界共通になっています。入金は緑+「+」付き、出金は黒や赤で「-」付きと符号で色分けすることで、ぱっと見でお金が出たか入ったかが分かります。日付はカテゴリの隣に小さく置くか、行をグルーピングする見出しに移すのが PayPal や PayPay でよく見る型です。',
      descEn: 'A transaction history row showing merchant icon, name, category, and a color-coded amount in one line.',
      detailEn: 'This is the classic line in any account statement. A round icon on the left holds the merchant\'s initial or a category emoji; next to it sits the merchant name with a small category tag like "Food" or "Transit"; the amount lives flush right. Incoming money goes green with a leading "+", outgoing stays neutral or red with a "-", so direction is readable at a glance. The date either tucks next to the category or graduates to a group header above several rows — that\'s the pattern PayPal and PayPay both use.',
      code: `<!-- Inspired by PayPay -->
<ul class="ui-tx-list">
  <li class="ui-tx-row">
    <div class="ui-tx-row__icon" style="background:#fde4cf;color:#c2410c">セ</div>
    <div class="ui-tx-row__main">
      <div class="ui-tx-row__name">セブン-イレブン 渋谷店</div>
      <div class="ui-tx-row__cat">食費 · 12/14 18:22</div>
    </div>
    <div class="ui-tx-row__amt ui-tx-row__amt--out">-¥842</div>
  </li>
  <li class="ui-tx-row">
    <div class="ui-tx-row__icon" style="background:#dbeafe;color:#1e40af">JR</div>
    <div class="ui-tx-row__main">
      <div class="ui-tx-row__name">JR東日本 IC チャージ</div>
      <div class="ui-tx-row__cat">交通 · 12/14 08:11</div>
    </div>
    <div class="ui-tx-row__amt ui-tx-row__amt--out">-¥3,000</div>
  </li>
  <li class="ui-tx-row">
    <div class="ui-tx-row__icon" style="background:#dcfce7;color:#15803d">給</div>
    <div class="ui-tx-row__main">
      <div class="ui-tx-row__name">給与振込 株式会社サンプル</div>
      <div class="ui-tx-row__cat">収入 · 12/10</div>
    </div>
    <div class="ui-tx-row__amt ui-tx-row__amt--in">+¥285,400</div>
  </li>
</ul>

<style>
  .ui-tx-list{list-style:none;margin:0;padding:0;max-width:420px;background:#fff;border:1px solid #ececf0;border-radius:12px;overflow:hidden;font:14px -apple-system,"Hiragino Sans","Segoe UI",sans-serif;color:#1a1a1f}
  .ui-tx-row{display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #f1f1f5}
  .ui-tx-row:last-child{border-bottom:0}
  .ui-tx-row__icon{flex:none;width:38px;height:38px;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:14px}
  .ui-tx-row__main{flex:1;min-width:0}
  .ui-tx-row__name{font-weight:600;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-tx-row__cat{font-size:12px;color:#8a8d96;margin-top:2px}
  .ui-tx-row__amt{font-weight:600;font-variant-numeric:tabular-nums;font-size:14px}
  .ui-tx-row__amt--out{color:#1a1a1f}
  .ui-tx-row__amt--in{color:#0a8a4f}
</style>`,
    },
    {
      name: 'Stock Chart With Timeframe Tabs',
      nameJa: '株価チャート (期間タブ付き)',
      desc: 'スパークライン風のラインチャートと 1D / 1W / 1M / 1Y タブの組み合わせ。',
      detail: 'Robinhood の象徴的なグラフがまさにこれです。極端に細く・カラーは1色だけのラインで価格推移を描き、現在値の絶対値と「+$3.42 (+1.8%) 今日」のような変化量を上に大きく見せます。下に並ぶ 1D・1W・1M・1Y のセグメントタブをタップすると、その期間に応じて折れ線が描き直されるのがミソです。チャートそのものはあえて軸ラベルを描かず、シンプルな曲線+任意位置のドット(現在値)のみで、視線が金額に集中するようにデザインされています。',
      descEn: 'A sparkline-style price line with 1D / 1W / 1M / 1Y segment tabs — Robinhood\'s signature pattern.',
      detailEn: 'This is essentially Robinhood\'s signature chart. A thin, single-color line traces price movement, while the current price and a change figure like "+$3.42 (+1.8%) Today" sit above in big type. A row of segmented tabs underneath — 1D, 1W, 1M, 1Y — swaps the line\'s time window when tapped. The chart deliberately drops axis labels, showing just the curve plus a dot for the current price, so the eye stays glued to the headline number.',
      code: `<!-- Inspired by Robinhood -->
<div class="ui-stk">
  <div class="ui-stk__sym">AAPL · Apple Inc.</div>
  <div class="ui-stk__price">$189.42</div>
  <div class="ui-stk__delta">+$3.42 (+1.84%) <span>今日</span></div>
  <svg class="ui-stk__chart" viewBox="0 0 300 100" preserveAspectRatio="none">
    <defs>
      <linearGradient id="ui-stk-g" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#00c805" stop-opacity=".25"/>
        <stop offset="100%" stop-color="#00c805" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path d="M0,72 L25,68 L50,75 L75,60 L100,64 L130,52 L160,55 L185,42 L210,46 L240,30 L270,38 L300,22 L300,100 L0,100 Z" fill="url(#ui-stk-g)"/>
    <path d="M0,72 L25,68 L50,75 L75,60 L100,64 L130,52 L160,55 L185,42 L210,46 L240,30 L270,38 L300,22" fill="none" stroke="#00c805" stroke-width="2"/>
    <circle cx="300" cy="22" r="3" fill="#00c805"/>
  </svg>
  <div class="ui-stk__tabs" id="ui-stk-tabs">
    <button class="ui-stk__tab">1D</button>
    <button class="ui-stk__tab is-active">1W</button>
    <button class="ui-stk__tab">1M</button>
    <button class="ui-stk__tab">3M</button>
    <button class="ui-stk__tab">1Y</button>
    <button class="ui-stk__tab">ALL</button>
  </div>
</div>

<style>
  .ui-stk{max-width:360px;padding:20px;background:#fff;border-radius:12px;font:-apple-system,"Inter","Segoe UI",sans-serif;color:#1d2026;border:1px solid #ececf0}
  .ui-stk__sym{font-size:12px;color:#7d818a;letter-spacing:.04em;text-transform:uppercase}
  .ui-stk__price{font-size:32px;font-weight:600;letter-spacing:-.02em;margin-top:4px;font-variant-numeric:tabular-nums}
  .ui-stk__delta{font-size:13px;color:#00a004;font-weight:600;margin-top:2px}
  .ui-stk__delta span{color:#9aa0ab;font-weight:400;margin-left:4px}
  .ui-stk__chart{display:block;width:100%;height:100px;margin:16px 0 12px;overflow:visible}
  .ui-stk__tabs{display:flex;justify-content:space-between;gap:4px}
  .ui-stk__tab{flex:1;border:0;background:transparent;padding:8px 0;border-radius:6px;font:600 12px -apple-system,sans-serif;color:#7d818a;cursor:pointer;letter-spacing:.05em}
  .ui-stk__tab:hover{background:#f4f5f7;color:#1d2026}
  .ui-stk__tab.is-active{background:#e6f8e6;color:#00a004}
</style>

<script>
  const _stkTabs=document.querySelectorAll('#ui-stk-tabs .ui-stk__tab');
  _stkTabs.forEach(t=>t.addEventListener('click',()=>{_stkTabs.forEach(x=>x.classList.remove('is-active'));t.classList.add('is-active')}));
</script>`,
    },
    {
      name: 'Send Money Form',
      nameJa: '送金フォーム',
      desc: '金額入力 + 通貨セレクタ + 送り先アバター列をまとめた送金画面の中心UI。',
      detail: 'Wise や PayPal の「送る」画面でおなじみの、極端に大きい金額入力フィールドが主役のフォームです。金額の右に通貨セレクタ(国旗+通貨コード)を置き、その下に「最近の宛先」として丸いアバターが横スクロールするリストを並べます。アバターはクリックで宛先が選択できるショートカットとして機能し、新規振込はその先に「+」のアイコンで配置するのが定型です。金額が大きく、入力中の数値が画面の主役になることが「これからお金が動く」緊張感を演出するポイントです。',
      descEn: 'A send-money form built around a huge amount input, a currency picker, and a recents avatar strip.',
      detailEn: 'This is the screen Wise and PayPal both lean on: an absurdly large amount input takes center stage, with a currency selector (flag + ISO code) docked on the right. Beneath it sits a horizontal "Recents" row of round contact avatars; tapping one fills in the recipient instantly, while a trailing "+" tile opens flow for a new payee. The oversized number isn\'t just style — it makes the figure dominate the screen, reinforcing the gravity of "money is about to move."',
      code: `<!-- Inspired by Wise -->
<div class="ui-send">
  <label class="ui-send__lbl">送金額</label>
  <div class="ui-send__row">
    <input class="ui-send__amt" value="1,250.00" inputmode="decimal">
    <button class="ui-send__cur">
      <span class="ui-send__flag" aria-hidden="true">🇺🇸</span>
      <span>USD</span>
      <span class="ui-send__caret">⌄</span>
    </button>
  </div>
  <div class="ui-send__fee">手数料 $4.81 · 受取人は $1,245.19 を受け取ります</div>
  <div class="ui-send__rcp-lbl">最近の送金先</div>
  <div class="ui-send__rcp">
    <button class="ui-send__rcp-item">
      <span class="ui-send__av" style="background:#fde2c7;color:#9a4d10">YT</span>
      <span class="ui-send__rcp-name">Yuki T.</span>
    </button>
    <button class="ui-send__rcp-item">
      <span class="ui-send__av" style="background:#d5e7ff;color:#1e3a8a">MK</span>
      <span class="ui-send__rcp-name">Maria K.</span>
    </button>
    <button class="ui-send__rcp-item">
      <span class="ui-send__av" style="background:#d4f4e2;color:#0a6e3a">JP</span>
      <span class="ui-send__rcp-name">Jay P.</span>
    </button>
    <button class="ui-send__rcp-item">
      <span class="ui-send__av ui-send__av--add">+</span>
      <span class="ui-send__rcp-name">新規</span>
    </button>
  </div>
</div>

<style>
  .ui-send{max-width:380px;padding:20px;background:#fff;border:1px solid #e4e4e8;border-radius:14px;font:-apple-system,"Inter","Hiragino Sans",sans-serif;color:#0e1117}
  .ui-send__lbl{font-size:12px;color:#6b7180;letter-spacing:.02em}
  .ui-send__row{display:flex;align-items:center;gap:8px;margin-top:6px;padding:14px 14px;background:#f5f6f8;border-radius:10px}
  .ui-send__amt{flex:1;min-width:0;border:0;background:transparent;font:600 32px -apple-system,"Inter",sans-serif;letter-spacing:-.02em;color:#0e1117;outline:0;font-variant-numeric:tabular-nums}
  .ui-send__cur{display:inline-flex;align-items:center;gap:6px;padding:8px 10px;background:#fff;border:1px solid #e4e4e8;border-radius:999px;font:600 14px -apple-system,sans-serif;cursor:pointer;color:#0e1117}
  .ui-send__flag{font-size:16px;line-height:1}
  .ui-send__caret{font-size:12px;color:#6b7180}
  .ui-send__fee{font-size:12px;color:#6b7180;margin-top:10px;line-height:1.5}
  .ui-send__rcp-lbl{font-size:12px;color:#6b7180;margin-top:18px;margin-bottom:8px;letter-spacing:.02em}
  .ui-send__rcp{display:flex;gap:12px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
  .ui-send__rcp::-webkit-scrollbar{display:none}
  .ui-send__rcp-item{flex:none;display:flex;flex-direction:column;align-items:center;gap:6px;background:transparent;border:0;cursor:pointer;padding:0}
  .ui-send__av{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font:700 13px -apple-system,sans-serif}
  .ui-send__av--add{background:#f5f6f8;color:#6b7180;font-size:20px;font-weight:400;border:1px dashed #c8cbd2}
  .ui-send__rcp-name{font-size:12px;color:#0e1117}
</style>`,
    },
    {
      name: 'Credit Card Preview',
      nameJa: 'クレジットカード プレビュー',
      desc: '下4桁・名義・ロゴ入りの、グラデーションが効いた仮想カード表示。',
      detail: '決済・カード管理アプリで「マイカード」を見せるための、いわゆるバーチャルカードのプレビューです。実物のカード比率(約 1.586:1)に合わせた角丸の長方形に、ブランドのグラデーション・カード番号(下4桁以外をマスク)・カード名義・有効期限・ブランドロゴを配置するのが鉄則です。Apple Card や Revolut では金属やマット質感を再現するための微妙な光沢グラデーションを背景に効かせ、文字は等幅フォントにすることで「本物っぽさ」を演出しています。',
      descEn: 'A gradient-clad virtual card showing the last-4 digits, cardholder name, and brand logo.',
      detailEn: 'This is the "my card" preview that any payment or card-management app needs. Use a rounded rectangle in real card proportions (around 1.586:1), drop a brand-colored gradient on it, then layer the masked card number (only the last four digits visible), cardholder name, expiry, and brand logo. Apple Card and Revolut sell the realism with subtle metallic or matte gradients and a monospaced numeric font, which together make the rendered SVG feel surprisingly close to a physical card.',
      code: `<!-- Inspired by Revolut -->
<div class="ui-cc">
  <div class="ui-cc__chip">
    <span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span>
  </div>
  <div class="ui-cc__brand">VISA</div>
  <div class="ui-cc__num">•••• &nbsp; •••• &nbsp; •••• &nbsp; 4829</div>
  <div class="ui-cc__row">
    <div>
      <div class="ui-cc__lbl">CARDHOLDER</div>
      <div class="ui-cc__val">SHUNTA FUJIEDA</div>
    </div>
    <div>
      <div class="ui-cc__lbl">EXPIRES</div>
      <div class="ui-cc__val">08/29</div>
    </div>
    <div>
      <div class="ui-cc__lbl">CVC</div>
      <div class="ui-cc__val">•••</div>
    </div>
  </div>
</div>

<style>
  .ui-cc{position:relative;width:320px;aspect-ratio:1.586/1;padding:22px;border-radius:16px;color:#fff;font:-apple-system,"Inter","Segoe UI",sans-serif;background:linear-gradient(135deg,#1a1a2e 0%,#3a1c71 45%,#d76d77 100%);box-shadow:0 14px 30px -10px rgba(58,28,113,.55);overflow:hidden}
  .ui-cc::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 80% at 80% -10%,rgba(255,255,255,.18),transparent 60%);pointer-events:none}
  .ui-cc__chip{display:grid;grid-template-columns:repeat(4,8px);grid-template-rows:repeat(2,6px);gap:2px;background:linear-gradient(135deg,#f5d76e,#c89c2c);padding:4px;border-radius:4px;width:fit-content}
  .ui-cc__chip span{background:rgba(0,0,0,.18);border-radius:1px}
  .ui-cc__brand{position:absolute;top:22px;right:22px;font:italic 700 22px -apple-system,sans-serif;letter-spacing:.02em}
  .ui-cc__num{margin-top:32px;font:500 19px "SFMono-Regular",Menlo,ui-monospace,monospace;letter-spacing:.04em}
  .ui-cc__row{display:flex;justify-content:space-between;margin-top:18px;gap:12px}
  .ui-cc__lbl{font-size:9px;color:rgba(255,255,255,.65);letter-spacing:.1em}
  .ui-cc__val{font:500 12px "SFMono-Regular",Menlo,monospace;letter-spacing:.04em;margin-top:2px}
</style>`,
    },
    {
      name: 'Pay Button',
      nameJa: '決済ボタン',
      desc: '鍵アイコン + 「$49.00 で購入」のような Stripe Checkout 風プライマリボタン。',
      detail: 'Stripe Checkout や Apple Pay で見る、購入を確定させる最終ボタンです。横幅いっぱい・濃いブランドカラー・大きめパディングという3点セットで、「これを押せば決済が完了する」ことを断定的に示します。左に鍵アイコンを入れて「安全に決済される」ことを暗示し、ボタンラベルには金額をそのまま書き入れる(例「Pay $49.00」「¥4,800 で購入」)のが今や標準です。ホバーで微かに浮き上がるシャドウ、押下で1pxだけ沈むようなインタラクションを足すと、より本物っぽい挙動になります。',
      descEn: 'A Stripe Checkout-style primary button with a lock icon and a price in the label, e.g. "Pay $49.00".',
      detailEn: 'This is the final commit-to-purchase button you find in Stripe Checkout or Apple Pay. Three rules make it work: full-width, a saturated brand color, and generous padding — together they declare "press this and it\'s done." A lock icon on the left whispers "this is secure," while the price goes right into the label ("Pay $49.00" or "¥4,800 で購入") instead of hiding in supporting text. Adding a soft lift on hover and a 1px depress on click finishes the illusion of a real, tappable button.',
      code: `<!-- Inspired by Stripe Checkout -->
<form class="ui-pay">
  <div class="ui-pay__items">
    <div class="ui-pay__line"><span>Pro プラン (月額)</span><span>¥4,800</span></div>
    <div class="ui-pay__line ui-pay__line--muted"><span>消費税</span><span>¥480</span></div>
    <div class="ui-pay__total"><span>合計</span><span>¥5,280</span></div>
  </div>
  <button class="ui-pay__btn" type="button">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 10V8a6 6 0 0 1 12 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <rect x="4" y="10" width="16" height="10" rx="2" fill="currentColor" opacity=".25"/>
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    <span>¥5,280 で購入する</span>
  </button>
  <div class="ui-pay__note">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4z"/></svg>
    Stripe による暗号化決済 · クレジットカード情報は保存されません
  </div>
</form>

<style>
  .ui-pay{max-width:360px;padding:22px;background:#fff;border:1px solid #e6e8eb;border-radius:12px;font:-apple-system,"Inter","Hiragino Sans",sans-serif;color:#1a1f36;box-shadow:0 1px 3px rgba(50,50,93,.06)}
  .ui-pay__items{padding-bottom:14px;border-bottom:1px solid #f0f1f4;margin-bottom:14px}
  .ui-pay__line{display:flex;justify-content:space-between;padding:4px 0;font-size:14px;font-variant-numeric:tabular-nums}
  .ui-pay__line--muted{color:#6b7280}
  .ui-pay__total{display:flex;justify-content:space-between;font-weight:600;font-size:16px;margin-top:6px;font-variant-numeric:tabular-nums}
  .ui-pay__btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:13px 16px;border:0;border-radius:8px;background:#635bff;color:#fff;font:600 15px -apple-system,sans-serif;cursor:pointer;box-shadow:0 1px 3px rgba(99,91,255,.5),inset 0 1px 0 rgba(255,255,255,.18);transition:.15s}
  .ui-pay__btn:hover{background:#544ee8;transform:translateY(-1px);box-shadow:0 4px 10px -2px rgba(99,91,255,.55)}
  .ui-pay__btn:active{transform:translateY(0)}
  .ui-pay__note{display:flex;align-items:center;gap:6px;font-size:11.5px;color:#6b7280;margin-top:10px;justify-content:center}
  .ui-pay__note svg{color:#9aa0ab}
</style>`,
    },
    {
      name: 'QR Pay Code',
      nameJa: 'QR決済コード',
      desc: '金額を上に表示した PayPay 風 QR スクリーン。店舗で見せて支払うあれ。',
      detail: 'PayPay や LINE Pay でレジで提示する、いわゆる「支払う」画面です。中央に正方形の QR(またはバーコード)、その上に「お支払い金額」、下に「PayPay 残高: ¥12,300」のような残高表示を置く構造が完全に統一されています。背景は鮮やかな赤やブランド色のグラデーションで、QR の白い余白と強いコントラストを作ることでカメラで読み取りやすくしているのが特徴です。実装では CSS グリッドで黒・白のセルを敷き詰めるか、SVG で四隅の検出パターンを描くと、ロゴ無しでもそれっぽくなります。',
      descEn: 'A PayPay-style "pay at the register" screen with a square QR and the payment amount above.',
      detailEn: 'This is the screen you show the cashier in PayPay or LINE Pay. A square QR (or barcode) sits dead center, with "Amount due" on top and a balance line below it like "PayPay balance: ¥12,300" — the layout is suspiciously identical across apps. A saturated red or brand gradient background contrasts hard with the QR\'s white quiet zone, which actually helps cameras lock on faster. In code, you can fake the QR convincingly with a CSS grid of black/white cells, plus three SVG finder patterns in the corners.',
      code: `<!-- Inspired by PayPay -->
<div class="ui-qr">
  <div class="ui-qr__amt-lbl">お支払い金額</div>
  <div class="ui-qr__amt">¥1,280</div>
  <div class="ui-qr__code" aria-label="QRコード">
    <div class="ui-qr__finder ui-qr__finder--tl"></div>
    <div class="ui-qr__finder ui-qr__finder--tr"></div>
    <div class="ui-qr__finder ui-qr__finder--bl"></div>
    <div class="ui-qr__grid"></div>
    <div class="ui-qr__logo">P</div>
  </div>
  <div class="ui-qr__bal">残高: <b>¥12,300</b></div>
  <button class="ui-qr__refresh">↻ 更新する</button>
</div>

<style>
  .ui-qr{max-width:300px;padding:24px 20px;border-radius:16px;background:linear-gradient(180deg,#ff2e51 0%,#ff0033 100%);color:#fff;font:-apple-system,"Hiragino Sans","Segoe UI",sans-serif;text-align:center;box-shadow:0 8px 20px -8px rgba(255,0,51,.5)}
  .ui-qr__amt-lbl{font-size:12px;opacity:.85;letter-spacing:.04em}
  .ui-qr__amt{font:700 32px -apple-system,sans-serif;letter-spacing:-.01em;margin-top:2px;font-variant-numeric:tabular-nums}
  .ui-qr__code{position:relative;width:200px;height:200px;margin:14px auto 14px;background:#fff;border-radius:10px;padding:14px;box-sizing:border-box}
  .ui-qr__finder{position:absolute;width:34px;height:34px;border:6px solid #111;background:#fff}
  .ui-qr__finder::after{content:"";position:absolute;inset:6px;background:#111}
  .ui-qr__finder--tl{top:14px;left:14px}
  .ui-qr__finder--tr{top:14px;right:14px}
  .ui-qr__finder--bl{bottom:14px;left:14px}
  .ui-qr__grid{position:absolute;inset:14px;background:
    repeating-conic-gradient(#111 0% 25%,#fff 0% 50%) 0 0/13px 13px,
    repeating-linear-gradient(45deg,#111 0 4px,#fff 4px 8px);
    mix-blend-mode:multiply;border-radius:2px;mask:radial-gradient(circle at 50% 50%,transparent 18px,#000 19px),linear-gradient(#000,#000);mask-composite:intersect;-webkit-mask-composite:source-in}
  .ui-qr__logo{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:8px;background:#ff0033;color:#fff;display:grid;place-items:center;font:800 18px -apple-system,sans-serif;box-shadow:0 0 0 4px #fff}
  .ui-qr__bal{font-size:13px;opacity:.95;margin-top:4px}
  .ui-qr__bal b{font-weight:700;font-variant-numeric:tabular-nums}
  .ui-qr__refresh{margin-top:14px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.4);color:#fff;padding:8px 16px;border-radius:999px;font:600 12px -apple-system,sans-serif;cursor:pointer}
  .ui-qr__refresh:hover{background:rgba(255,255,255,.25)}
</style>`,
    },
    {
      name: 'Spending Category Donut',
      nameJa: '支出カテゴリ ドーナツチャート',
      desc: '支出をカテゴリ別に色分けしたドーナツ円グラフと右側の凡例リスト。',
      detail: '家計簿アプリ(MoneyForward, Mint, Monarch)で月次レポートに必ず出てくる「ドーナツ + 凡例」の組み合わせです。円の中央には「合計支出 ¥124,300」のように合計値を配置し、外周をカテゴリごとの円弧で色分けします。右側には色・カテゴリ名・金額・全体に占める割合(%)を並べた凡例リストを置き、ドーナツの色と一対一で対応させるのが鉄則です。conic-gradient を使えば JavaScript なしで CSS だけでもキレイに描けるのがこのコンポーネントの嬉しいところです。',
      descEn: 'A donut chart of spending by category, paired with a color-coded legend list on the right.',
      detailEn: 'This is the donut-plus-legend block every budgeting app — MoneyForward, Mint, Monarch — pulls out for the monthly summary. The donut hole holds the total ("Total spend ¥124,300") while the outer ring is sliced and colored by category. To the right sits a legend that pairs each color with a category name, amount, and percentage, mirroring the donut one-for-one. Best of all, you can render the whole donut with a single CSS conic-gradient — no chart library required.',
      code: `<!-- Inspired by MoneyForward -->
<div class="ui-don">
  <div class="ui-don__chart" role="img" aria-label="支出ドーナツ">
    <div class="ui-don__inner">
      <div class="ui-don__total-lbl">12月の支出</div>
      <div class="ui-don__total">¥124,300</div>
    </div>
  </div>
  <ul class="ui-don__legend">
    <li><span class="ui-don__dot" style="background:#5b8def"></span><span class="ui-don__cat">食費</span><span class="ui-don__pct">38%</span><span class="ui-don__amt">¥47,234</span></li>
    <li><span class="ui-don__dot" style="background:#ffb05a"></span><span class="ui-don__cat">家賃</span><span class="ui-don__pct">28%</span><span class="ui-don__amt">¥34,800</span></li>
    <li><span class="ui-don__dot" style="background:#22c55e"></span><span class="ui-don__cat">交通</span><span class="ui-don__pct">14%</span><span class="ui-don__amt">¥17,402</span></li>
    <li><span class="ui-don__dot" style="background:#ec4899"></span><span class="ui-don__cat">娯楽</span><span class="ui-don__pct">12%</span><span class="ui-don__amt">¥14,900</span></li>
    <li><span class="ui-don__dot" style="background:#a78bfa"></span><span class="ui-don__cat">その他</span><span class="ui-don__pct">8%</span><span class="ui-don__amt">¥9,964</span></li>
  </ul>
</div>

<style>
  .ui-don{display:flex;align-items:center;gap:24px;max-width:480px;padding:22px;background:#fff;border:1px solid #ececf0;border-radius:14px;font:-apple-system,"Hiragino Sans","Segoe UI",sans-serif;color:#1a1a1f}
  .ui-don__chart{position:relative;width:150px;height:150px;border-radius:50%;background:conic-gradient(#5b8def 0 38%,#ffb05a 38% 66%,#22c55e 66% 80%,#ec4899 80% 92%,#a78bfa 92% 100%);flex:none}
  .ui-don__inner{position:absolute;inset:24px;background:#fff;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
  .ui-don__total-lbl{font-size:11px;color:#7d818a}
  .ui-don__total{font:700 18px -apple-system,sans-serif;margin-top:2px;font-variant-numeric:tabular-nums;letter-spacing:-.01em}
  .ui-don__legend{list-style:none;margin:0;padding:0;flex:1;display:flex;flex-direction:column;gap:9px;font-size:13px}
  .ui-don__legend li{display:grid;grid-template-columns:10px 1fr auto auto;align-items:center;gap:10px}
  .ui-don__dot{width:10px;height:10px;border-radius:50%}
  .ui-don__cat{color:#1a1a1f}
  .ui-don__pct{color:#7d818a;font-size:12px;font-variant-numeric:tabular-nums}
  .ui-don__amt{font-weight:600;font-variant-numeric:tabular-nums}
</style>`,
    },
    {
      name: 'Currency Conversion Row',
      nameJa: '為替レート変換ウィジェット',
      desc: '「1 USD = 156.23 JPY」と2つの金額入力 + 入れ替えボタンを並べた為替UI。',
      detail: 'Wise・Google 検索・XE などで定番の、2行レイアウトの為替コンバーターです。上下に「金額入力 + 通貨セレクタ」のペアを置き、中央(または右側)に↑↓の入れ替え(スワップ)ボタンを配します。間に「1 USD = 156.23 JPY · リアルタイムレート」のような小さなレート表示を入れると、どちら方向に変換しているかが直感的に分かります。スワップボタンを押すと2つの通貨が入れ替わるアニメーションが入るのがモダンな実装で、両側の数値入力欄が片方の変更でもう片方に追従するのが基本動作です。',
      descEn: 'A currency converter with two amount-plus-currency rows and a swap button between them, showing the rate.',
      detailEn: 'This two-row currency converter is the one Wise, Google Search, and XE all converged on. Stack two "amount input + currency selector" rows; drop an up/down swap button in the middle or to the side. A small rate line in between — "1 USD = 156.23 JPY · live rate" — makes the direction obvious. Modern implementations animate a flip when the swap button is pressed, and typing in one field instantly updates the other based on the current rate.',
      code: `<!-- Inspired by Wise -->
<div class="ui-fx">
  <div class="ui-fx__row">
    <div class="ui-fx__side">
      <div class="ui-fx__lbl">送る金額</div>
      <input class="ui-fx__input" id="ui-fx-a" value="100.00">
    </div>
    <button class="ui-fx__cur">
      <span class="ui-fx__flag">🇺🇸</span>USD
    </button>
  </div>
  <div class="ui-fx__rate">
    <span>1 USD = 156.23 JPY</span>
    <button class="ui-fx__swap" title="入れ替え">⇅</button>
  </div>
  <div class="ui-fx__row">
    <div class="ui-fx__side">
      <div class="ui-fx__lbl">受け取り金額</div>
      <input class="ui-fx__input" id="ui-fx-b" value="15,623.00">
    </div>
    <button class="ui-fx__cur">
      <span class="ui-fx__flag">🇯🇵</span>JPY
    </button>
  </div>
</div>

<style>
  .ui-fx{position:relative;max-width:380px;padding:14px;background:#fff;border:1px solid #e4e4e8;border-radius:14px;font:-apple-system,"Inter","Hiragino Sans",sans-serif;color:#0e1117}
  .ui-fx__row{display:flex;align-items:center;gap:10px;padding:14px;background:#f7f8fa;border-radius:10px}
  .ui-fx__row + .ui-fx__row{margin-top:6px}
  .ui-fx__side{flex:1;min-width:0}
  .ui-fx__lbl{font-size:11px;color:#6b7180;letter-spacing:.02em}
  .ui-fx__input{width:100%;border:0;background:transparent;font:600 22px -apple-system,"Inter",sans-serif;color:#0e1117;outline:0;font-variant-numeric:tabular-nums;letter-spacing:-.01em;margin-top:2px;padding:0}
  .ui-fx__cur{display:inline-flex;align-items:center;gap:6px;padding:8px 12px;background:#fff;border:1px solid #e4e4e8;border-radius:999px;font:600 13px -apple-system,sans-serif;cursor:pointer;color:#0e1117}
  .ui-fx__flag{font-size:14px}
  .ui-fx__rate{display:flex;align-items:center;justify-content:space-between;padding:6px 14px;font-size:12px;color:#6b7180}
  .ui-fx__rate span{font-variant-numeric:tabular-nums}
  .ui-fx__swap{width:32px;height:32px;border-radius:50%;border:1px solid #e4e4e8;background:#fff;color:#0e1117;cursor:pointer;font-size:14px;font-weight:600;display:grid;place-items:center;box-shadow:0 1px 2px rgba(0,0,0,.04)}
  .ui-fx__swap:hover{background:#f0f1f4}
</style>

<script>
  (function(){
    const a=document.getElementById('ui-fx-a');
    const b=document.getElementById('ui-fx-b');
    const rate=156.23;
    a.addEventListener('input',()=>{const v=parseFloat(a.value.replace(/,/g,''))||0;b.value=(v*rate).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})});
    b.addEventListener('input',()=>{const v=parseFloat(b.value.replace(/,/g,''))||0;a.value=(v/rate).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})});
  })();
</script>`,
    },
    {
      name: 'Invoice Line Items',
      nameJa: '請求書 明細行',
      desc: '商品名・数量・小計と最後に合計を出す請求書/領収書のテーブル。',
      detail: 'Stripe Invoicing や freee などの請求書テンプレートに必ず含まれる、明細表とその下にある合計セクションのセットです。テーブルは「品目 / 数量 / 単価 / 金額」の4カラムが標準で、数値カラムはすべて右寄せ・等幅数字にすると桁が縦に揃ってとても読みやすくなります。明細の下には「小計」「消費税(10%)」「合計」を順に置き、合計行だけ強調するのが鉄板です。境界線は淡いグレーでミニマルに描き、お金の数字そのものに視線が行くように余計な装飾を入れないのが上品な見せ方です。',
      descEn: 'A clean invoice/receipt table with line items, plus a subtotal-tax-total summary at the bottom.',
      detailEn: 'This is the line-item table and total block found in every invoice template — Stripe Invoicing, freee, FreshBooks, you name it. Four columns is standard: description, quantity, unit price, amount, with all numeric columns right-aligned and set in a tabular-figure font so digits line up vertically. Underneath the rows, stack subtotal → tax → grand total, giving the total row extra weight. Keep dividers thin and gray so the eye locks onto the numbers themselves rather than the lines around them.',
      code: `<!-- Inspired by Stripe Invoicing -->
<div class="ui-inv">
  <div class="ui-inv__head">
    <div>
      <div class="ui-inv__title">請求書 #INV-2026-0042</div>
      <div class="ui-inv__sub">発行日 2026/05/12 · 支払期限 2026/05/31</div>
    </div>
    <div class="ui-inv__to">
      <div class="ui-inv__lbl">請求先</div>
      <div>株式会社サンプル</div>
    </div>
  </div>
  <table class="ui-inv__table">
    <thead>
      <tr><th class="ui-inv__th-l">品目</th><th>数量</th><th>単価</th><th class="ui-inv__th-r">金額</th></tr>
    </thead>
    <tbody>
      <tr><td>UIデザイン制作 (12月分)</td><td>1</td><td>¥220,000</td><td class="ui-inv__td-r">¥220,000</td></tr>
      <tr><td>フロントエンド実装</td><td>40h</td><td>¥8,000</td><td class="ui-inv__td-r">¥320,000</td></tr>
      <tr><td>ユーザーリサーチ調査</td><td>1</td><td>¥85,000</td><td class="ui-inv__td-r">¥85,000</td></tr>
    </tbody>
  </table>
  <div class="ui-inv__totals">
    <div class="ui-inv__t-row"><span>小計</span><span>¥625,000</span></div>
    <div class="ui-inv__t-row"><span>消費税 (10%)</span><span>¥62,500</span></div>
    <div class="ui-inv__t-row ui-inv__t-row--grand"><span>合計</span><span>¥687,500</span></div>
  </div>
</div>

<style>
  .ui-inv{max-width:520px;padding:24px;background:#fff;border:1px solid #e6e8eb;border-radius:12px;font:14px -apple-system,"Inter","Hiragino Sans",sans-serif;color:#1a1f36}
  .ui-inv__head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;padding-bottom:16px;border-bottom:1px solid #f0f1f4}
  .ui-inv__title{font-weight:700;font-size:16px}
  .ui-inv__sub{font-size:12px;color:#697386;margin-top:4px}
  .ui-inv__to{text-align:right;font-size:13px}
  .ui-inv__lbl{font-size:11px;color:#697386;letter-spacing:.04em;text-transform:uppercase;margin-bottom:2px}
  .ui-inv__table{width:100%;border-collapse:collapse;margin-top:14px;font-variant-numeric:tabular-nums}
  .ui-inv__table th{font-size:11px;font-weight:600;color:#697386;letter-spacing:.04em;text-transform:uppercase;text-align:right;padding:8px 6px;border-bottom:1px solid #f0f1f4}
  .ui-inv__th-l{text-align:left!important}
  .ui-inv__th-r{text-align:right}
  .ui-inv__table td{padding:10px 6px;border-bottom:1px solid #f7f8fa;font-size:13.5px;text-align:right}
  .ui-inv__table td:first-child{text-align:left}
  .ui-inv__td-r{font-weight:500}
  .ui-inv__totals{margin-top:14px;margin-left:auto;width:240px;font-variant-numeric:tabular-nums}
  .ui-inv__t-row{display:flex;justify-content:space-between;padding:6px 0;font-size:13.5px;color:#1a1f36}
  .ui-inv__t-row--grand{border-top:1px solid #1a1f36;margin-top:4px;padding-top:10px;font-weight:700;font-size:16px}
</style>`,
    },
  ],
}
