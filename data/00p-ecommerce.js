/**
 * UI Parts Showcase (E-commerce) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-ecommerce',
  title: 'ECサイトUI',
  titleEn: 'E-commerce UI',
  description: 'Amazon・楽天・Shopify・Apple Store・無印良品 などのECサイトでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Product Card With Price',
      nameJa: '商品カード(価格付き)',
      desc: '画像エリア・商品名・価格・星評価をひとまとめにした、商品一覧の定番カード。',
      detail: '商品カードは、ECサイトの一覧ページ・検索結果・おすすめ枠などで一番よく使われるUIです。上部に商品画像、下に商品名、価格、星評価、レビュー件数を並べる構成が定番で、ユーザーは一目で「これは何で、いくらで、評判はどうか」を判断できます。Amazonや楽天では小さく密度高く、Apple Storeや無印良品では余白を多めに上品に見せる傾向があり、ブランドのトーンに合わせて余白と書体を調整するのがポイントです。',
      descEn: 'A standard product list card combining image, title, price, and star rating in one tidy block.',
      detailEn: 'The product card is the most heavily used UI on an e-commerce site — listing pages, search results, and "you may also like" rails all rely on it. The classic layout stacks an image on top with the product name, price, star rating, and review count below, so shoppers can size up "what is this, how much, and is it any good?" at a glance. Amazon and Rakuten tend to pack them densely, while Apple Store and Muji breathe with generous whitespace; match the padding and typography to your brand voice.',
      code: `<!-- Inspired by Apple Store -->
<article class="ui-pc-card">
  <div class="ui-pc-img">
    <div class="ui-pc-hero">
      <div class="ui-pc-watch"></div>
    </div>
    <button class="ui-pc-fav" aria-label="お気に入り">♡</button>
  </div>
  <div class="ui-pc-body">
    <div class="ui-pc-eyebrow">New</div>
    <h3 class="ui-pc-title">Apple Watch Series 10</h3>
    <p class="ui-pc-sub">46mm · ジェットブラック アルミニウム</p>
    <div class="ui-pc-rating">
      <span class="ui-pc-stars">★★★★★</span>
      <span class="ui-pc-count">(1,238)</span>
    </div>
    <div class="ui-pc-price">¥59,800<span class="ui-pc-tax">(税込)</span></div>
  </div>
</article>

<style>
  .ui-pc-card{width:260px;background:#fff;border-radius:18px;padding:14px;font:14px -apple-system,"SF Pro Text","Helvetica Neue",sans-serif;color:#1d1d1f;box-shadow:0 1px 2px rgba(0,0,0,.04),0 8px 24px rgba(0,0,0,.06);box-sizing:border-box}
  .ui-pc-img{position:relative;border-radius:14px;background:linear-gradient(160deg,#f5f5f7,#ebebef);aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
  .ui-pc-hero{width:120px;height:140px;display:flex;align-items:center;justify-content:center}
  .ui-pc-watch{width:90px;height:108px;border-radius:24px;background:linear-gradient(145deg,#1c1c1e,#3a3a3c);box-shadow:inset 0 0 0 4px #2a2a2c,0 8px 16px rgba(0,0,0,.18);position:relative}
  .ui-pc-watch::before{content:"";position:absolute;inset:6px 8px;border-radius:18px;background:radial-gradient(circle at 35% 30%,#0ea5e9,#0b3a8c 70%,#000)}
  .ui-pc-watch::after{content:"";position:absolute;right:-4px;top:36px;width:6px;height:18px;background:#3a3a3c;border-radius:2px}
  .ui-pc-fav{position:absolute;top:10px;right:10px;width:32px;height:32px;border-radius:50%;border:0;background:rgba(255,255,255,.85);backdrop-filter:blur(8px);font-size:16px;color:#1d1d1f;cursor:pointer;line-height:1}
  .ui-pc-fav:hover{color:#e11d48}
  .ui-pc-eyebrow{font-size:12px;color:#ff6b00;font-weight:600;letter-spacing:.02em;margin-bottom:2px}
  .ui-pc-title{margin:0 0 2px;font-size:15px;font-weight:600;letter-spacing:-.01em}
  .ui-pc-sub{margin:0 0 8px;font-size:12.5px;color:#6e6e73}
  .ui-pc-rating{display:flex;align-items:center;gap:6px;margin-bottom:8px}
  .ui-pc-stars{color:#f5a623;font-size:12.5px;letter-spacing:1px}
  .ui-pc-count{font-size:12px;color:#6e6e73}
  .ui-pc-price{font-size:16px;font-weight:600;letter-spacing:-.01em}
  .ui-pc-tax{font-size:11px;font-weight:400;color:#6e6e73;margin-left:4px}
</style>`,
    },
    {
      name: 'Size Selector Grid',
      nameJa: 'サイズ選択グリッド',
      desc: 'S/M/L/XL の四角いチップを並べた、サイズ選択UI。在庫切れはグレーアウト。',
      detail: 'サイズ選択グリッドは、アパレル・シューズ系ECで必ず登場するUIです。四角いチップを横並びにし、タップで1つを選ぶ仕組みで、選択中は黒い枠線、在庫切れは斜線でグレーアウトという見せ方が業界標準になっています。ユニクロやNikeのように在庫切れまで一目で分かる設計にすると「クリックしたのに買えなかった」というガッカリ体験を防げます。サイズの隣に「サイズガイド」リンクを置くのも定番です。',
      descEn: 'Square chips for S/M/L/XL — the standard size picker, with grayed-out chips for out-of-stock.',
      detailEn: 'A size grid is a must-have UI for apparel and footwear stores. Square chips sit in a row, tapping selects one, the selection gets a bold outline, and out-of-stock sizes appear struck through and grayed — this pattern has become an industry standard. Following Uniqlo and Nike\'s lead and clearly marking sold-out sizes prevents the "I clicked but couldn\'t buy it" frustration. Placing a "Size guide" link next to the row is also a near-universal convention.',
      code: `<!-- Inspired by Nike -->
<div class="ui-sz">
  <div class="ui-sz-head">
    <span class="ui-sz-label">サイズを選択</span>
    <a class="ui-sz-guide" href="#">サイズガイド</a>
  </div>
  <div class="ui-sz-grid">
    <button class="ui-sz-chip">XS</button>
    <button class="ui-sz-chip">S</button>
    <button class="ui-sz-chip is-active">M</button>
    <button class="ui-sz-chip">L</button>
    <button class="ui-sz-chip is-disabled" disabled>XL</button>
    <button class="ui-sz-chip is-disabled" disabled>XXL</button>
  </div>
  <p class="ui-sz-note">Mサイズ・残り <b>3点</b></p>
</div>

<style>
  .ui-sz{max-width:360px;font:14px -apple-system,"Helvetica Neue",sans-serif;color:#111;padding:16px;background:#fff}
  .ui-sz-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
  .ui-sz-label{font-weight:600;font-size:14px}
  .ui-sz-guide{font-size:13px;color:#111;text-decoration:underline;text-underline-offset:3px}
  .ui-sz-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
  .ui-sz-chip{padding:14px 0;background:#fff;border:1px solid #d6d6d6;border-radius:4px;font:500 14px inherit;color:#111;cursor:pointer;transition:.12s}
  .ui-sz-chip:hover{border-color:#111}
  .ui-sz-chip.is-active{border:2px solid #111;padding:13px 0;font-weight:600}
  .ui-sz-chip.is-disabled{color:#bbb;background:#f5f5f5;border-color:#e5e5e5;cursor:not-allowed;position:relative;overflow:hidden}
  .ui-sz-chip.is-disabled::after{content:"";position:absolute;left:-10%;right:-10%;top:50%;height:1px;background:#d0d0d0;transform:rotate(-18deg)}
  .ui-sz-note{margin:12px 0 0;font-size:12.5px;color:#fa5400}
  .ui-sz-note b{font-weight:700}
</style>`,
    },
    {
      name: 'Color Swatch Picker',
      nameJa: 'カラースワッチピッカー',
      desc: '丸いカラーチップを並べて、選択中のものにリングを付けるカラー選択UI。',
      detail: 'カラースワッチは、商品の色違いバリエーションを選ぶためのUIです。実際の色味を丸いドットで小さく表示し、ホバー/タップで切り替えると上部の商品名や画像が連動して変わるのが定番の挙動です。選択中の色には外側にリング(2重丸)を付けて識別性を高めます。白に近い色の場合はそのままだと見えないので、薄いボーダーを足すのがコツ。色名(「ミッドナイトブルー」など)をホバー時に表示するとアクセシビリティも向上します。',
      descEn: 'Round color dots in a row, with a ring around the selected one — a classic color picker.',
      detailEn: 'Color swatches let shoppers switch between product color variations. Each available color appears as a small round dot; hovering or tapping flips the title and main image to match. A double-ring (outer ring) marks the active swatch so it stands out clearly. Pure-white swatches need a faint border to stay visible against the page background. Showing the color name ("Midnight Blue", etc.) on hover or below the row improves accessibility for users who can\'t distinguish subtle hues.',
      code: `<!-- Inspired by Apple Store -->
<div class="ui-cs">
  <div class="ui-cs-row">
    <span class="ui-cs-label">カラー —</span>
    <span class="ui-cs-name">ミッドナイト</span>
  </div>
  <div class="ui-cs-swatches" id="cs">
    <button class="ui-cs-dot is-active" style="--c:#1f2937" data-name="ミッドナイト" aria-label="ミッドナイト"></button>
    <button class="ui-cs-dot" style="--c:#e8e3d9" data-name="スターライト" aria-label="スターライト"></button>
    <button class="ui-cs-dot" style="--c:#5b6ea8" data-name="ブルー" aria-label="ブルー"></button>
    <button class="ui-cs-dot" style="--c:#a23b3b" data-name="(PRODUCT)RED" aria-label="レッド"></button>
    <button class="ui-cs-dot" style="--c:#b89f6a" data-name="ゴールド" aria-label="ゴールド"></button>
    <button class="ui-cs-dot" style="--c:#f5f5f7" data-name="ホワイト" aria-label="ホワイト"></button>
  </div>
</div>

<style>
  .ui-cs{max-width:360px;padding:18px;font:14px -apple-system,"SF Pro Text",sans-serif;color:#1d1d1f;background:#fff}
  .ui-cs-row{display:flex;align-items:baseline;gap:6px;margin-bottom:12px}
  .ui-cs-label{color:#6e6e73;font-size:13px}
  .ui-cs-name{font-weight:600;font-size:14px}
  .ui-cs-swatches{display:flex;gap:12px;flex-wrap:wrap}
  .ui-cs-dot{width:26px;height:26px;border-radius:50%;background:var(--c);border:1px solid rgba(0,0,0,.1);cursor:pointer;padding:0;position:relative;transition:transform .12s}
  .ui-cs-dot:hover{transform:scale(1.08)}
  .ui-cs-dot.is-active{box-shadow:0 0 0 2px #fff,0 0 0 4px #1d1d1f}
</style>

<script>
  const cs=document.getElementById('cs');
  const name=cs.parentElement.querySelector('.ui-cs-name');
  cs.querySelectorAll('.ui-cs-dot').forEach(d=>d.addEventListener('click',()=>{
    cs.querySelectorAll('.ui-cs-dot').forEach(x=>x.classList.remove('is-active'));
    d.classList.add('is-active');
    name.textContent=d.dataset.name;
  }));
</script>`,
    },
    {
      name: 'Add To Cart Button Group',
      nameJa: 'カート追加ボタングループ',
      desc: '数量ステッパー(− 1 +)と「カートに入れる」ボタンが並んだ購入UI。',
      detail: '商品詳細ページの最重要パーツが、この「数量ステッパー + カートに入れるボタン」のセットです。左に「−」「数量」「+」の3ボタン、右に大きく丸い「カートに入れる」ボタンを並べるのが王道で、Shopifyテーマや楽天市場でほぼ同じ構成を見かけます。数量側は控えめなアウトラインに、購入ボタンはブランドカラーで埋めて視線を誘導するのがコツ。スマホでは横並びにすると窮屈なので、縦積みにしてボタンを画面幅いっぱいに広げる構成も多いです。',
      descEn: 'A quantity stepper (− 1 +) paired with a prominent "Add to Cart" pill — the core purchase UI.',
      detailEn: 'The single most important block on a product detail page is this combo: a quantity stepper plus an "Add to Cart" button. The standard layout puts a "−" / number / "+" group on the left and a large rounded brand-colored button on the right — you\'ll see nearly identical setups on Shopify themes and Rakuten stores. Keep the stepper subtle (outline only) and make the cart button bold to drive the eye. On mobile, stacking them vertically and stretching the cart button to full width is a common adaptation.',
      code: `<!-- Inspired by Shopify -->
<div class="ui-atc">
  <div class="ui-atc-qty">
    <button class="ui-atc-qty__btn" data-act="-">−</button>
    <input class="ui-atc-qty__num" value="1" inputmode="numeric">
    <button class="ui-atc-qty__btn" data-act="+">+</button>
  </div>
  <button class="ui-atc-buy">
    <span class="ui-atc-buy__icon">🛒</span>
    <span>カートに入れる</span>
    <span class="ui-atc-buy__price">¥4,980</span>
  </button>
</div>

<style>
  .ui-atc{display:flex;gap:10px;align-items:stretch;max-width:480px;padding:16px;background:#fff;font:14px -apple-system,"Helvetica Neue",sans-serif;color:#202223;box-sizing:border-box}
  .ui-atc-qty{display:flex;align-items:center;border:1px solid #c9cccf;border-radius:8px;overflow:hidden;background:#fff}
  .ui-atc-qty__btn{width:40px;height:48px;border:0;background:#fff;font-size:18px;cursor:pointer;color:#202223}
  .ui-atc-qty__btn:hover{background:#f6f6f7}
  .ui-atc-qty__num{width:42px;height:48px;border:0;border-left:1px solid #e1e3e5;border-right:1px solid #e1e3e5;text-align:center;font:600 15px inherit;outline:0;color:#202223;background:#fff}
  .ui-atc-buy{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:0 22px;height:48px;border:0;border-radius:24px;background:#008060;color:#fff;font:600 15px inherit;cursor:pointer;transition:background .12s}
  .ui-atc-buy:hover{background:#006e52}
  .ui-atc-buy__icon{font-size:16px}
  .ui-atc-buy__price{margin-left:8px;padding-left:10px;border-left:1px solid rgba(255,255,255,.35);font-weight:700}
</style>

<script>
  document.querySelectorAll('.ui-atc-qty__btn').forEach(b=>b.addEventListener('click',()=>{
    const i=b.parentElement.querySelector('.ui-atc-qty__num');
    let v=Math.max(1,parseInt(i.value||'1',10)+(b.dataset.act==='+'?1:-1));
    i.value=v;
  }));
</script>`,
    },
    {
      name: 'Star Rating With Count',
      nameJa: '星評価 + レビュー件数',
      desc: '★を5つ並べて部分塗りで評価を表現し、横に「(1,238)」と件数を添えるUI。',
      detail: '星評価UIは、商品の信頼度を一目で伝える最強のパーツです。0〜5の連続値を、5つの星アイコンの「塗り具合」で表現し、平均評価(例:4.3)と総レビュー件数(例:1,238件)を必ずセットで表示するのが鉄則。件数がないと「★4.5」だけでは1人のレビューなのか1万人のレビューなのか分からないからです。AmazonやGoogleマップでは件数をクリックするとレビュー一覧に飛ぶようリンクにしておくのが定番です。',
      descEn: 'Five stars filled to reflect the score, with a "(1,238)" review count next to them.',
      detailEn: 'A star rating is the single most efficient trust signal on a product page. It expresses a 0–5 score by partially filling five star icons, and is almost always shown together with the numeric average (e.g. 4.3) and total review count (e.g. 1,238). Without the count, "4.5 stars" could mean one reviewer or ten thousand — context is everything. Amazon and Google Maps make the count itself a link that jumps to the full reviews, a convention worth following.',
      code: `<!-- Inspired by Amazon -->
<div class="ui-sr">
  <div class="ui-sr-row">
    <span class="ui-sr-num">4.6</span>
    <div class="ui-sr-stars" aria-label="5点満点中 4.6">
      <div class="ui-sr-fill" style="width:92%"></div>
    </div>
    <a class="ui-sr-count" href="#">1,238件の評価</a>
  </div>
  <ul class="ui-sr-bars">
    <li><span class="ui-sr-lbl">5★</span><span class="ui-sr-bar"><i style="width:74%"></i></span><span class="ui-sr-pct">74%</span></li>
    <li><span class="ui-sr-lbl">4★</span><span class="ui-sr-bar"><i style="width:18%"></i></span><span class="ui-sr-pct">18%</span></li>
    <li><span class="ui-sr-lbl">3★</span><span class="ui-sr-bar"><i style="width:5%"></i></span><span class="ui-sr-pct">5%</span></li>
    <li><span class="ui-sr-lbl">2★</span><span class="ui-sr-bar"><i style="width:2%"></i></span><span class="ui-sr-pct">2%</span></li>
    <li><span class="ui-sr-lbl">1★</span><span class="ui-sr-bar"><i style="width:1%"></i></span><span class="ui-sr-pct">1%</span></li>
  </ul>
</div>

<style>
  .ui-sr{max-width:360px;padding:16px;background:#fff;font:13px Arial,"Helvetica Neue",sans-serif;color:#0f1111;box-sizing:border-box}
  .ui-sr-row{display:flex;align-items:center;gap:10px;margin-bottom:12px}
  .ui-sr-num{font-size:18px;font-weight:700;color:#0f1111}
  .ui-sr-stars{position:relative;width:96px;height:16px;background:linear-gradient(90deg,#dfe2e7 0 100%);-webkit-mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 16'><g fill='black'><polygon points='8,1 10,6 15,6.2 11,9.4 12.4,14.4 8,11.6 3.6,14.4 5,9.4 1,6.2 6,6'/><polygon points='27.2,1 29.2,6 34.2,6.2 30.2,9.4 31.6,14.4 27.2,11.6 22.8,14.4 24.2,9.4 20.2,6.2 25.2,6'/><polygon points='46.4,1 48.4,6 53.4,6.2 49.4,9.4 50.8,14.4 46.4,11.6 42,14.4 43.4,9.4 39.4,6.2 44.4,6'/><polygon points='65.6,1 67.6,6 72.6,6.2 68.6,9.4 70,14.4 65.6,11.6 61.2,14.4 62.6,9.4 58.6,6.2 63.6,6'/><polygon points='84.8,1 86.8,6 91.8,6.2 87.8,9.4 89.2,14.4 84.8,11.6 80.4,14.4 81.8,9.4 77.8,6.2 82.8,6'/></g></svg>") no-repeat;mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 16'><g fill='black'><polygon points='8,1 10,6 15,6.2 11,9.4 12.4,14.4 8,11.6 3.6,14.4 5,9.4 1,6.2 6,6'/><polygon points='27.2,1 29.2,6 34.2,6.2 30.2,9.4 31.6,14.4 27.2,11.6 22.8,14.4 24.2,9.4 20.2,6.2 25.2,6'/><polygon points='46.4,1 48.4,6 53.4,6.2 49.4,9.4 50.8,14.4 46.4,11.6 42,14.4 43.4,9.4 39.4,6.2 44.4,6'/><polygon points='65.6,1 67.6,6 72.6,6.2 68.6,9.4 70,14.4 65.6,11.6 61.2,14.4 62.6,9.4 58.6,6.2 63.6,6'/><polygon points='84.8,1 86.8,6 91.8,6.2 87.8,9.4 89.2,14.4 84.8,11.6 80.4,14.4 81.8,9.4 77.8,6.2 82.8,6'/></g></svg>") no-repeat}
  .ui-sr-fill{position:absolute;inset:0;background:#ffa41c;width:92%}
  .ui-sr-count{font-size:13px;color:#007185;text-decoration:none}
  .ui-sr-count:hover{color:#c7511f;text-decoration:underline}
  .ui-sr-bars{list-style:none;margin:0;padding:0;display:grid;gap:4px}
  .ui-sr-bars li{display:grid;grid-template-columns:28px 1fr 36px;align-items:center;gap:8px;font-size:12.5px;color:#007185}
  .ui-sr-lbl{font-weight:600}
  .ui-sr-bar{position:relative;height:18px;background:#f0f2f2;border-radius:3px;overflow:hidden}
  .ui-sr-bar i{position:absolute;left:0;top:0;bottom:0;background:#ffa41c;border-radius:3px}
  .ui-sr-pct{text-align:right;color:#0f1111}
</style>`,
    },
    {
      name: 'Price Tag With Strike-through',
      nameJa: 'セール価格(打ち消し線付き)',
      desc: '元値「¥7,900」に打ち消し線、セール価格「¥4,900」を赤字で強調するUI。',
      detail: 'セール価格表示は、ECで「お得感」を直感的に伝える定番のテクニックです。元値を打ち消し線でグレー表示し、その横または下に値引き後の価格を大きく赤色で出すと、節約額がパッと脳に届きます。「−38%」「OFF」のバッジや、節約額(¥3,000お得!)を併記すると説得力がさらに増します。ただし二重価格表示は景品表示法上の規制対象なので、元値が実際に販売されていた期間・金額かを必ず確認しましょう。',
      descEn: 'A struck-through original price ($79) next to a bright red sale price ($49) — a classic discount tag.',
      detailEn: 'A strikethrough sale price is the e-commerce designer\'s favorite way to convey "deal!" instantly. Showing the original price in gray with a line through it, with the new lower price next to or below it in bold red, lets shoppers feel the savings at a glance. Adding a "−38%" or "OFF" badge and the saved amount ("Save ¥3,000") strengthens the pitch even more. Keep in mind that strikethrough pricing is regulated in Japan — make sure the original price was actually charged for a meaningful period.',
      code: `<!-- Inspired by Rakuten -->
<div class="ui-pt">
  <span class="ui-pt-badge">38%OFF</span>
  <div class="ui-pt-prices">
    <span class="ui-pt-old">通常価格 <s>¥7,900</s></span>
    <div class="ui-pt-now">
      <span class="ui-pt-symbol">¥</span><span class="ui-pt-int">4,900</span><span class="ui-pt-tax">税込</span>
    </div>
    <span class="ui-pt-save">¥3,000 お得！</span>
  </div>
  <div class="ui-pt-foot">
    <span class="ui-pt-points">⭐ 245ポイント還元</span>
    <span class="ui-pt-ship">送料無料</span>
  </div>
</div>

<style>
  .ui-pt{display:inline-block;padding:16px 20px;background:#fff;border:1px solid #ffd9d9;border-radius:8px;font:14px "Hiragino Sans","Meiryo",sans-serif;color:#222;position:relative;max-width:300px;box-sizing:border-box}
  .ui-pt-badge{display:inline-block;background:#bf0000;color:#fff;font-weight:700;font-size:12px;padding:3px 8px;border-radius:3px;letter-spacing:.04em;margin-bottom:8px}
  .ui-pt-old{display:block;font-size:12px;color:#777;margin-bottom:2px}
  .ui-pt-old s{color:#999}
  .ui-pt-now{display:flex;align-items:baseline;color:#bf0000;font-weight:700;line-height:1;margin-bottom:6px}
  .ui-pt-symbol{font-size:18px;margin-right:2px}
  .ui-pt-int{font-size:32px;letter-spacing:-.02em}
  .ui-pt-tax{font-size:11px;font-weight:400;color:#bf0000;margin-left:6px;align-self:center}
  .ui-pt-save{display:inline-block;background:#fff3cd;color:#9a6700;font-size:12px;font-weight:600;padding:2px 8px;border-radius:3px}
  .ui-pt-foot{display:flex;gap:10px;margin-top:10px;padding-top:10px;border-top:1px dashed #eee;font-size:12px}
  .ui-pt-points{color:#bf0000;font-weight:600}
  .ui-pt-ship{color:#0a7f00;font-weight:600}
</style>`,
    },
    {
      name: 'Cart Drawer Item Row',
      nameJa: 'カートドロワー商品行',
      desc: '小さなサムネ・商品名・数量ステッパー・削除×ボタンが横並びになった、カート内の1行UI。',
      detail: 'カートドロワー(右からスライドして開くミニカート)に並ぶ商品1行は、ECサイトで毎日大量に表示される重要パーツです。左に正方形のサムネイル、中央に商品名・バリエーション(色やサイズ)、右に数量ステッパーと削除ボタンという3カラム構成が王道。ShopifyやEtsyのカートドロワーはほぼこの形です。価格は数量ステッパーの近くに置いて、ユーザーが「数量を変えたら合計がいくらになるか」を予測しやすくするのがポイント。',
      descEn: 'A row inside a cart drawer: thumbnail + title + quantity stepper + remove × button.',
      detailEn: 'Each line inside a cart drawer (the panel that slides in from the right) is one of the most heavily-rendered components on any storefront. The canonical layout is three columns: a square thumbnail on the left, the title and variant (color, size) in the middle, and a quantity stepper plus remove button on the right. Shopify and Etsy carts use essentially this exact pattern. Place the price near the stepper so users can predict the new subtotal as they tweak quantities.',
      code: `<!-- Inspired by Shopify -->
<div class="ui-cdi">
  <div class="ui-cdi-thumb">
    <div class="ui-cdi-shoe"></div>
  </div>
  <div class="ui-cdi-info">
    <h4 class="ui-cdi-title">Nike Air Max 90</h4>
    <p class="ui-cdi-variant">ホワイト / 27.0cm</p>
    <div class="ui-cdi-controls">
      <div class="ui-cdi-qty">
        <button data-act="-">−</button>
        <span>1</span>
        <button data-act="+">+</button>
      </div>
      <button class="ui-cdi-remove" aria-label="削除">×</button>
    </div>
  </div>
  <div class="ui-cdi-price">¥14,300</div>
</div>

<style>
  .ui-cdi{display:grid;grid-template-columns:72px 1fr auto;gap:14px;align-items:flex-start;padding:14px;max-width:440px;background:#fff;border-bottom:1px solid #ececec;font:14px -apple-system,"Helvetica Neue",sans-serif;color:#202223;box-sizing:border-box}
  .ui-cdi-thumb{width:72px;height:72px;border-radius:8px;background:#f4f4f6;display:flex;align-items:center;justify-content:center;overflow:hidden}
  .ui-cdi-shoe{width:54px;height:24px;background:linear-gradient(180deg,#fff 0 55%,#222 55% 65%,#cf2030 65% 80%,#fff 80%);border-radius:18px 18px 6px 6px;box-shadow:inset 0 -2px 0 #ddd;position:relative}
  .ui-cdi-shoe::after{content:"";position:absolute;top:6px;right:8px;width:10px;height:6px;background:#cf2030;border-radius:50%/40%;transform:rotate(-12deg)}
  .ui-cdi-info{min-width:0}
  .ui-cdi-title{margin:0 0 2px;font-size:14px;font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-cdi-variant{margin:0 0 8px;font-size:12.5px;color:#6d7175}
  .ui-cdi-controls{display:flex;gap:10px;align-items:center}
  .ui-cdi-qty{display:inline-flex;align-items:center;border:1px solid #c9cccf;border-radius:6px;overflow:hidden}
  .ui-cdi-qty button{width:26px;height:26px;border:0;background:#fff;cursor:pointer;font-size:14px;color:#202223}
  .ui-cdi-qty button:hover{background:#f6f6f7}
  .ui-cdi-qty span{min-width:24px;text-align:center;font-size:13px;font-weight:600;border-left:1px solid #e1e3e5;border-right:1px solid #e1e3e5;padding:4px 0}
  .ui-cdi-remove{width:22px;height:22px;border-radius:50%;border:0;background:transparent;color:#8c9196;cursor:pointer;font-size:16px;line-height:1}
  .ui-cdi-remove:hover{background:#f1f2f3;color:#bf0711}
  .ui-cdi-price{font-size:14px;font-weight:600;text-align:right;white-space:nowrap}
</style>`,
    },
    {
      name: 'Checkout Step Indicator',
      nameJa: 'チェックアウトステップ表示',
      desc: '「カート → 配送先 → 支払い → 完了」の進行状況を視覚化するステップバー。',
      detail: 'チェックアウトのステップ表示は、ユーザーに「あと何回入力すれば買えるのか」を見せて離脱を防ぐ重要なUIです。番号付きの丸を横に並べ、線で結び、現在地と通過済みを色分けするのが定番。Apple StoreやIKEA、Etsyではこの形をほぼそのまま採用しています。スマホ画面では文字が縦に潰れがちなので、現在ステップだけ大きく表示し、その他は丸+番号だけにする「圧縮表示」もよく見られます。',
      descEn: 'A progress bar showing "Cart → Shipping → Payment → Confirm" — the standard checkout step indicator.',
      detailEn: 'A checkout step indicator tells shoppers how many screens are left before they can pay — a key tool for cutting abandonment. The convention is numbered circles in a row, joined by lines, with completed and current steps painted in the brand color. Apple Store, IKEA, and Etsy all use essentially the same layout. On mobile, where the labels can crowd vertically, a common adaptation is to enlarge only the current step\'s label and reduce the others to just a number in a circle.',
      code: `<!-- Inspired by IKEA -->
<ol class="ui-cs-steps">
  <li class="is-done">
    <span class="ui-cs-circle">✓</span>
    <span class="ui-cs-label">カート</span>
  </li>
  <li class="is-done">
    <span class="ui-cs-circle">✓</span>
    <span class="ui-cs-label">配送先</span>
  </li>
  <li class="is-current">
    <span class="ui-cs-circle">3</span>
    <span class="ui-cs-label">お支払い</span>
  </li>
  <li>
    <span class="ui-cs-circle">4</span>
    <span class="ui-cs-label">確認</span>
  </li>
</ol>

<style>
  .ui-cs-steps{display:flex;list-style:none;margin:0;padding:24px 16px;max-width:520px;font:14px -apple-system,"Helvetica Neue",sans-serif;color:#484848;background:#fff;counter-reset:s;box-sizing:border-box}
  .ui-cs-steps li{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;position:relative;color:#9a9a9a;font-size:13px}
  .ui-cs-steps li::after{content:"";position:absolute;top:14px;left:calc(50% + 18px);right:calc(-50% + 18px);height:2px;background:#e3e3e3;z-index:0}
  .ui-cs-steps li:last-child::after{display:none}
  .ui-cs-steps li.is-done::after,.ui-cs-steps li.is-current::after{background:#0058a3}
  .ui-cs-steps li.is-current::after{background:linear-gradient(90deg,#0058a3 0 50%,#e3e3e3 50%)}
  .ui-cs-circle{width:28px;height:28px;border-radius:50%;background:#fff;border:2px solid #e3e3e3;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#9a9a9a;position:relative;z-index:1}
  .is-done .ui-cs-circle{background:#0058a3;border-color:#0058a3;color:#fff}
  .is-current .ui-cs-circle{background:#fff;border-color:#0058a3;color:#0058a3;box-shadow:0 0 0 4px rgba(0,88,163,.12)}
  .ui-cs-label{font-size:12.5px;font-weight:500}
  .is-done .ui-cs-label,.is-current .ui-cs-label{color:#111}
  .is-current .ui-cs-label{font-weight:700;color:#0058a3}
</style>`,
    },
    {
      name: 'Promo Code Input',
      nameJa: 'クーポンコード入力欄',
      desc: '入力欄と「適用」ボタン、適用後の成功チップが横並びになったクーポン入力UI。',
      detail: 'クーポン入力欄は、カート画面や決済画面に必ず登場する小さなフォームです。入力欄と「適用」ボタンを横並びにし、適用に成功したら「SUMMER10 適用済み」という緑のチップを下に出すのが定番の挙動。AmazonやEtsyではコードを入れる導線を「クーポンをお持ちですか?」というリンクの先に折りたたんで隠す設計が多く、視線を散らさない工夫として参考になります。エラー時は赤文字で「無効なコードです」と即座に返すのも重要です。',
      descEn: 'An input + APPLY button with a success chip below — the canonical promo code field.',
      detailEn: 'The promo code field is a small but ubiquitous form that lives on most cart and checkout pages. The classic layout is an input next to an "Apply" button, with a green chip ("SUMMER10 applied") appearing underneath on success. Amazon and Etsy often tuck the input behind a "Have a coupon?" disclosure link to keep the page calm — a worthwhile pattern when you want to keep the main checkout flow uncluttered. Inline red error text ("Invalid code") on failure is just as important as the success state.',
      code: `<!-- Inspired by Etsy -->
<div class="ui-pc-promo">
  <details>
    <summary>クーポンコードをお持ちですか？</summary>
    <form class="ui-pc-form" onsubmit="event.preventDefault();this.classList.add('is-applied')">
      <input class="ui-pc-input" placeholder="例: SUMMER10" value="SUMMER10">
      <button class="ui-pc-apply" type="submit">適用</button>
    </form>
    <div class="ui-pc-chip">
      <span class="ui-pc-chip__check">✓</span>
      <span><b>SUMMER10</b> を適用済み</span>
      <span class="ui-pc-chip__save">−¥500</span>
      <button class="ui-pc-chip__x" aria-label="削除">×</button>
    </div>
  </details>
</div>

<style>
  .ui-pc-promo{max-width:380px;padding:16px;background:#fff;font:14px -apple-system,"Helvetica Neue",sans-serif;color:#222;box-sizing:border-box}
  .ui-pc-promo summary{cursor:pointer;color:#0070bc;font-size:14px;list-style:none;display:inline-flex;align-items:center;gap:6px;text-decoration:underline;text-underline-offset:3px}
  .ui-pc-promo summary::-webkit-details-marker{display:none}
  .ui-pc-promo summary::before{content:"🎟️";text-decoration:none}
  .ui-pc-form{display:flex;gap:8px;margin-top:12px}
  .ui-pc-input{flex:1;height:40px;padding:0 12px;border:1px solid #d6d6d6;border-radius:6px;font:14px inherit;color:#222;outline:0;text-transform:uppercase;letter-spacing:.04em}
  .ui-pc-input:focus{border-color:#222;box-shadow:0 0 0 3px rgba(0,0,0,.06)}
  .ui-pc-apply{height:40px;padding:0 18px;background:#222;color:#fff;border:0;border-radius:6px;font:600 14px inherit;cursor:pointer}
  .ui-pc-apply:hover{background:#000}
  .ui-pc-chip{display:none;align-items:center;gap:8px;margin-top:10px;padding:8px 10px;background:#e8f6ed;border:1px solid #b5e0c3;border-radius:6px;font-size:13px;color:#1f6d3b}
  .ui-pc-form.is-applied + .ui-pc-chip{display:inline-flex}
  .ui-pc-chip__check{width:18px;height:18px;border-radius:50%;background:#1f9d55;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700}
  .ui-pc-chip__save{margin-left:6px;font-weight:700}
  .ui-pc-chip__x{margin-left:4px;width:18px;height:18px;border:0;background:transparent;color:#1f6d3b;cursor:pointer;font-size:14px;line-height:1;border-radius:50%}
  .ui-pc-chip__x:hover{background:rgba(31,109,59,.15)}
</style>`,
    },
    {
      name: 'Free Shipping Progress Bar',
      nameJa: '送料無料までの進捗バー',
      desc: '「あと ¥1,200 で送料無料」と現在金額と目標を並べた、追加購入を促す進捗UI。',
      detail: '送料無料進捗バーは、カート画面の上部に常駐させる「あと少し買ってもらう」ためのUIです。現在の購入額を緑色のバーで表現し、目標額(例:¥5,000)に達するまでの差額を「あと ¥1,200 で送料無料！」と添えると、ユーザーは自然に「もう1品どう?」と考え始めます。AmazonやUNIQLOオンラインで頻繁に見るパターンで、達成後は「やったね、送料無料に到達!」と祝うトーンに切り替えると気持ち良い体験になります。',
      descEn: 'A "¥1,200 to go for free shipping" progress meter that nudges shoppers to add one more item.',
      detailEn: 'A free-shipping progress bar lives at the top of the cart and gently pushes shoppers to add one more item. The current cart total fills a green bar, and a short message ("¥1,200 to go for free shipping!") spells out exactly how much further they need to spend — at which point most users start thinking "well, what else…?". Amazon and Uniqlo Online both use this pattern heavily. Once the threshold is met, swap the copy to a celebratory "You\'ve unlocked free shipping!" for a satisfying payoff.',
      code: `<!-- Inspired by Uniqlo -->
<div class="ui-fs">
  <div class="ui-fs-head">
    <span class="ui-fs-truck">🚚</span>
    <span class="ui-fs-msg">あと <b>¥1,200</b> で<b>送料無料</b>！</span>
  </div>
  <div class="ui-fs-bar">
    <div class="ui-fs-fill" style="width:76%"></div>
    <div class="ui-fs-flag" style="left:100%"><span>¥5,000</span></div>
  </div>
  <div class="ui-fs-foot">
    <span>カート小計</span>
    <span class="ui-fs-amt">¥3,800</span>
  </div>
</div>

<style>
  .ui-fs{max-width:380px;padding:14px 16px;background:#fff;border:1px solid #ececec;border-radius:8px;font:14px "Hiragino Sans","Helvetica Neue",sans-serif;color:#222;box-sizing:border-box}
  .ui-fs-head{display:flex;align-items:center;gap:8px;margin-bottom:10px;font-size:13.5px;color:#333}
  .ui-fs-truck{font-size:18px}
  .ui-fs-msg b{color:#d80000;font-weight:700}
  .ui-fs-bar{position:relative;height:8px;background:#f1f1f1;border-radius:4px;margin:18px 12px 14px 0}
  .ui-fs-fill{height:100%;background:linear-gradient(90deg,#19a35a,#0fbf6c);border-radius:4px;transition:width .4s}
  .ui-fs-flag{position:absolute;top:-22px;transform:translateX(-50%);font-size:11px;color:#666;white-space:nowrap}
  .ui-fs-flag::after{content:"";position:absolute;left:50%;top:18px;width:2px;height:8px;background:#ccc;transform:translateX(-50%)}
  .ui-fs-foot{display:flex;justify-content:space-between;font-size:13px;color:#555}
  .ui-fs-amt{font-weight:700;color:#111}
</style>`,
    },
  ],
}
