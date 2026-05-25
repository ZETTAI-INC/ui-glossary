/**
 * UI Parts Reference — Commerce, Auth, Errors & Advanced patterns.
 * Copy-and-paste UI snippets gathered from common reference sites.
 */

export const category = {
  id: 'ui-parts-ref-misc',
  title: 'UIパーツ集(EC・認証・エラー・アドバンス)',
  titleEn: 'Commerce, Auth, Errors & Advanced',
  description: '参考サイトから拾い上げた追加UIパーツ。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Product Card',
      nameJa: '商品カード',
      desc: '商品画像・名前・価格・レーティングを1枚にまとめたECカード。',
      detail: '商品カードは、ECサイトの一覧ページで1商品ぶんの情報をひと固まりにまとめたカード型UIです。画像、商品名、価格、レーティング(星評価)、カートに入れるボタンなどを縦または横に並べ、ユーザーがざっと見比べて選べるようにします。グリッド状に並べることで多数の商品を効率よく見せられ、Amazonや楽天、Shopifyテーマでおなじみの形です。ホバーで影が浮く・お気に入りボタンを出すなどの演出も定番です。',
      descEn: 'An EC card combining product image, name, price, and rating.',
      detailEn: 'A product card bundles all the key info for a single product into one block on a listing page. It typically stacks an image, name, price, star rating, and an add-to-cart button so shoppers can scan and compare at a glance. Arranged in a grid, these cards let large catalogs feel browsable, which is why Amazon, Rakuten, and Shopify themes all rely on them. Subtle hover effects like a lifted shadow or a revealed favorite button are common polish.',
      code: `/* Inspired by Amazon */
<article class="ui-pcard">
  <div class="ui-pcard__media">
    <span class="ui-pcard__deal">Limited time deal</span>
    <div class="ui-pcard__img">🎧</div>
  </div>
  <div class="ui-pcard__body">
    <h3 class="ui-pcard__name">Sony WH-1000XM5 Wireless Noise Canceling Headphones, Midnight Black</h3>
    <div class="ui-pcard__rating">
      <span class="ui-pcard__stars">★★★★<span>★</span></span>
      <a href="#">38,412</a>
    </div>
    <div class="ui-pcard__bought">2K+ bought in past month</div>
    <div class="ui-pcard__price">
      <span class="ui-pcard__sym">$</span><strong>328</strong><sup>00</sup>
      <span class="ui-pcard__list">List: <s>$399.99</s></span>
    </div>
    <div class="ui-pcard__prime"><b>prime</b> FREE delivery <strong>Thu, May 23</strong></div>
    <button type="button" class="ui-pcard__cta">Add to cart</button>
  </div>
</article>

<style>
  .ui-pcard{width:248px;background:#fff;padding:14px;font:13px/1.4 "Amazon Ember",Arial,sans-serif;color:#0F1111}
  .ui-pcard__media{position:relative;height:170px;display:flex;align-items:center;justify-content:center;font-size:80px;margin-bottom:10px}
  .ui-pcard__deal{position:absolute;top:0;left:0;background:#CC0C39;color:#fff;font-size:11px;font-weight:700;padding:3px 6px;border-radius:2px}
  .ui-pcard__name{margin:0 0 4px;font-size:14px;font-weight:400;color:#0F1111;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .ui-pcard__name:hover{color:#C7511F;cursor:pointer}
  .ui-pcard__rating{display:flex;align-items:center;gap:6px;margin-bottom:4px}
  .ui-pcard__stars{color:#FFA41C;font-size:14px;letter-spacing:1px}
  .ui-pcard__stars span{color:#E7E7E7}
  .ui-pcard__rating a{color:#007185;font-size:13px;text-decoration:none}
  .ui-pcard__rating a:hover{color:#C7511F;text-decoration:underline}
  .ui-pcard__bought{font-size:12px;color:#565959;margin-bottom:6px}
  .ui-pcard__price{display:flex;align-items:baseline;gap:6px;margin-bottom:4px;color:#0F1111}
  .ui-pcard__price .ui-pcard__sym{font-size:13px;align-self:flex-start;padding-top:4px}
  .ui-pcard__price strong{font-size:24px;font-weight:400}
  .ui-pcard__price sup{font-size:13px}
  .ui-pcard__list{font-size:12px;color:#565959;margin-left:4px}
  .ui-pcard__prime{font-size:13px;color:#0F1111;margin-bottom:10px}
  .ui-pcard__prime b{color:#00A8E1;font-weight:700;font-style:italic}
  .ui-pcard__cta{width:100%;padding:7px;background:linear-gradient(#F7DFA5,#F0C14B);color:#0F1111;border:1px solid #A88734;border-radius:18px;font:13px Arial,sans-serif;cursor:pointer}
  .ui-pcard__cta:hover{background:linear-gradient(#F5D78E,#EEB933)}
</style>`,
    },
    {
      name: 'Shopping Cart',
      nameJa: 'カート',
      desc: '選択した商品と数量・小計を表示し、決済へ進むUI。',
      detail: 'ショッピングカートは、ユーザーが買おうとしている商品をまとめて確認・編集するためのUIです。商品ごとに画像・名前・数量・小計を並べ、削除や数量変更が行えるようにします。下部に小計、送料、合計、そして「レジに進む」ボタンを置くのが定番のレイアウトです。途中で気が変わって戻ったときに状態が消えないよう、ローカル保存しておくのがUX的に親切です。',
      descEn: 'Shows selected items with quantities and subtotals, leading to checkout.',
      detailEn: 'A shopping cart gathers everything a user plans to buy in one place so they can review and adjust before paying. Each line shows the product image, name, quantity, and line total, with controls to update quantity or remove items. A summary at the bottom shows subtotal, shipping, total, and a prominent "Proceed to checkout" button. Persisting cart state locally is a kindness — users often leave and come back, and finding an empty cart kills the sale.',
      code: `/* Inspired by Shopify checkout */
<section class="ui-cart">
  <header class="ui-cart__head">
    <h2>Order summary</h2>
    <span>2 items</span>
  </header>
  <ul class="ui-cart__list">
    <li class="ui-cart__item">
      <div class="ui-cart__thumb"><span class="ui-cart__badge">1</span>👕</div>
      <div class="ui-cart__info">
        <div class="ui-cart__name">Heavyweight Boxy Tee</div>
        <div class="ui-cart__meta">Off-White / M</div>
      </div>
      <div class="ui-cart__price">$48.00</div>
    </li>
    <li class="ui-cart__item">
      <div class="ui-cart__thumb"><span class="ui-cart__badge">2</span>🧢</div>
      <div class="ui-cart__info">
        <div class="ui-cart__name">Cotton Twill 6-Panel Cap</div>
        <div class="ui-cart__meta">Washed Navy</div>
      </div>
      <div class="ui-cart__price">$64.00</div>
    </li>
  </ul>
  <div class="ui-cart__promo">
    <input aria-label="Discount code or gift card" placeholder="Discount code or gift card">
    <button type="button">Apply</button>
  </div>
  <dl class="ui-cart__sum">
    <div><dt>Subtotal</dt><dd>$112.00</dd></div>
    <div><dt>Shipping</dt><dd class="muted">Calculated at next step</dd></div>
    <div class="total"><dt>Total <span>USD</span></dt><dd>$112.00</dd></div>
  </dl>
  <button type="button" class="ui-cart__checkout">Continue to shipping</button>
</section>

<style>
  .ui-cart{max-width:400px;padding:24px;background:#fafafa;border-left:1px solid #e1e3e5;font:14px/1.5 -apple-system,"Inter",sans-serif;color:#202223}
  .ui-cart__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:18px}
  .ui-cart__head h2{margin:0;font-size:16px;font-weight:600}
  .ui-cart__head span{color:#6d7175;font-size:13px}
  .ui-cart__list{list-style:none;margin:0 0 18px;padding:0;display:flex;flex-direction:column;gap:14px}
  .ui-cart__item{display:flex;align-items:center;gap:14px}
  .ui-cart__thumb{position:relative;width:52px;height:52px;background:#fff;border:1px solid #e1e3e5;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0}
  .ui-cart__badge{position:absolute;top:-6px;right:-6px;width:20px;height:20px;background:#6d7175;color:#fff;border-radius:50%;font:600 11px sans-serif;display:flex;align-items:center;justify-content:center}
  .ui-cart__info{flex:1;min-width:0}
  .ui-cart__name{font-size:13px;font-weight:500;color:#202223;margin-bottom:2px}
  .ui-cart__meta{font-size:12px;color:#6d7175}
  .ui-cart__price{font-size:13px;font-weight:500}
  .ui-cart__promo{display:flex;gap:8px;margin-bottom:16px}
  .ui-cart__promo input{flex:1;padding:9px 12px;border:1px solid #c9cccf;border-radius:6px;font-size:13px;background:#fff}
  .ui-cart__promo input:focus{outline:0;border-color:#008060;box-shadow:0 0 0 2px rgba(0,128,96,.2)}
  .ui-cart__promo button{padding:9px 16px;background:#f6f6f7;border:1px solid #c9cccf;border-radius:6px;font:500 13px sans-serif;color:#6d7175;cursor:pointer}
  .ui-cart__sum{margin:0 0 18px;padding:16px 0;border-top:1px solid #e1e3e5;display:flex;flex-direction:column;gap:8px;font-size:14px}
  .ui-cart__sum div{display:flex;justify-content:space-between;margin:0}
  .ui-cart__sum dt,.ui-cart__sum dd{margin:0}
  .ui-cart__sum .muted{color:#6d7175}
  .ui-cart__sum .total{padding-top:10px;border-top:1px solid #e1e3e5;font-size:17px;font-weight:600}
  .ui-cart__sum .total span{font-size:12px;color:#6d7175;font-weight:400;margin-left:4px}
  .ui-cart__checkout{width:100%;padding:13px;background:#008060;color:#fff;border:0;border-radius:6px;font:500 14px sans-serif;cursor:pointer}
  .ui-cart__checkout:hover{background:#006e52}
</style>`,
    },
    {
      name: 'Rating / Review',
      nameJa: 'レーティング',
      desc: '星やスコアで評価を表示・入力するUI。',
      detail: 'レーティングは、商品やサービスの満足度を星マーク(★)や数値で表すUIです。表示用には平均点と件数を一緒に出し(例:★4.5 / 128件)、入力用にはホバーで埋まる星を並べるのが一般的です。Amazon、食べログ、Google Mapsなど評価が重要なサービスで広く使われ、ユーザーが「他人の感想」を素早く参考にできるようにします。半星表示や、星ごとの分布グラフを併用するとさらに親切です。',
      descEn: 'Displays and inputs ratings with stars or scores.',
      detailEn: 'A rating shows how users feel about a product or service through stars or numeric scores. For display you usually show an average plus the review count (e.g., 4.5 stars from 128 reviews), while input mode lets users hover over a row of stars to pick their score. Amazon, Yelp, and Google Maps all rely on this pattern, helping shoppers quickly tap into other people\'s opinions. Half-stars and per-star distribution bars add even more nuance.',
      code: `/* Inspired by Airbnb */
<div class="ui-rating">
  <div class="ui-rating__head">
    <span class="ui-rating__big">★ 4.92</span>
    <span class="ui-rating__dot">·</span>
    <a href="#" class="ui-rating__count">217 reviews</a>
  </div>
  <div class="ui-rating__bars">
    <div class="ui-rating__row"><span>Cleanliness</span><div><i style="width:96%"></i></div><b>4.9</b></div>
    <div class="ui-rating__row"><span>Communication</span><div><i style="width:98%"></i></div><b>4.9</b></div>
    <div class="ui-rating__row"><span>Check-in</span><div><i style="width:100%"></i></div><b>5.0</b></div>
    <div class="ui-rating__row"><span>Accuracy</span><div><i style="width:92%"></i></div><b>4.8</b></div>
    <div class="ui-rating__row"><span>Location</span><div><i style="width:94%"></i></div><b>4.7</b></div>
    <div class="ui-rating__row"><span>Value</span><div><i style="width:88%"></i></div><b>4.6</b></div>
  </div>
  <article class="ui-rating__review">
    <div class="ui-rating__user">
      <div class="ui-rating__avatar">M</div>
      <div>
        <strong>Maya</strong>
        <small>April 2026 · 3 nights</small>
      </div>
    </div>
    <div class="ui-rating__stars" id="rt">
      <button type="button">★</button><button type="button">★</button><button type="button">★</button><button type="button">★</button><button type="button">★</button>
    </div>
    <p>The loft was even better than the photos. Sofia's tips for the neighborhood made our stay feel local — would book again in a heartbeat.</p>
  </article>
</div>

<style>
  .ui-rating{max-width:380px;font:15px/1.5 "Circular",-apple-system,sans-serif;color:#222}
  .ui-rating__head{display:flex;align-items:center;gap:6px;margin-bottom:18px}
  .ui-rating__big{font-size:22px;font-weight:600}
  .ui-rating__dot{color:#717171}
  .ui-rating__count{color:#222;font-weight:600;text-decoration:underline}
  .ui-rating__bars{display:flex;flex-direction:column;gap:10px;padding-bottom:20px;border-bottom:1px solid #ebebeb;margin-bottom:20px}
  .ui-rating__row{display:grid;grid-template-columns:110px 1fr 28px;align-items:center;gap:12px;font-size:13px;color:#222}
  .ui-rating__row div{height:4px;background:#ebebeb;border-radius:2px;overflow:hidden}
  .ui-rating__row i{display:block;height:100%;background:#222;border-radius:2px}
  .ui-rating__row b{font-weight:500;text-align:right;font-size:12px}
  .ui-rating__user{display:flex;align-items:center;gap:12px;margin-bottom:10px}
  .ui-rating__avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#FF385C,#E61E4D);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600}
  .ui-rating__user strong{display:block;font-size:14px}
  .ui-rating__user small{color:#717171;font-size:13px}
  .ui-rating__stars{display:flex;gap:2px;margin-bottom:8px}
  .ui-rating__stars button{background:none;border:0;font-size:14px;color:#ddd;cursor:pointer;padding:0}
  .ui-rating__stars button.on{color:#FF385C}
  .ui-rating__review p{margin:0;font-size:14px;line-height:1.5;color:#222}
</style>

<script>
  const rt=document.getElementById('rt');
  const btns=[...rt.querySelectorAll('button')];
  let val=5;
  const paint=n=>btns.forEach((x,j)=>x.classList.toggle('on',j<n));
  btns.forEach((b,i)=>{
    b.addEventListener('mouseenter',()=>paint(i+1));
    b.addEventListener('click',()=>{val=i+1;paint(val)});
  });
  rt.addEventListener('mouseleave',()=>paint(val));paint(val);
</script>`,
    },
    {
      name: 'Dark Mode Toggle',
      nameJa: 'ダークモード切替',
      desc: 'ライト/ダークテーマをワンクリックで切り替えるUI。',
      detail: 'ダークモード切替は、画面全体の配色をライトテーマとダークテーマで切り替えるためのスイッチです。アイコンは太陽と月、または滑らかなアニメーションで表現することが多く、ユーザーの好み・周囲の明るさ・目の疲れに合わせて選べるようにします。OSの設定に追従する自動モードと、明示的にユーザーが選ぶ手動モードを両方用意するのが現代的な実装です。選択をlocalStorageに保存して、次回訪問時にも反映するのがUXの定石です。',
      descEn: 'Switches between light and dark themes with one click.',
      detailEn: 'A dark mode toggle flips the entire interface between light and dark color schemes. The icon is usually a sun/moon pair or an animated transition, letting users match the look to their mood, environment, or eye fatigue. Modern implementations offer both "follow system" and manual override. Saving the choice to localStorage so it persists across visits is the standard UX touch.',
      code: `/* Inspired by Notion settings */
<div class="ui-theme" id="root">
  <h3 class="ui-theme__h">Appearance</h3>
  <p class="ui-theme__sub">Customize how Notion looks on your device.</p>
  <div class="ui-theme__opts">
    <button type="button" class="ui-theme__opt active" data-mode="light">
      <div class="ui-theme__preview light"><span></span><span></span></div>
      <span>Light</span>
    </button>
    <button type="button" class="ui-theme__opt" data-mode="dark">
      <div class="ui-theme__preview dark"><span></span><span></span></div>
      <span>Dark</span>
    </button>
    <button type="button" class="ui-theme__opt" data-mode="system">
      <div class="ui-theme__preview system"><span></span><span></span></div>
      <span>Use system setting</span>
    </button>
  </div>
  <div class="ui-theme__row">
    <div>
      <div class="ui-theme__label">Open links in the desktop app</div>
      <div class="ui-theme__hint">Notion links open in the app instead of browser.</div>
    </div>
    <button type="button" class="ui-theme__sw on" aria-pressed="true"><i></i></button>
  </div>
</div>

<style>
  .ui-theme{max-width:560px;padding:24px;background:#fff;font:14px/1.5 -apple-system,"Inter","Segoe UI",sans-serif;color:rgb(55,53,47)}
  .ui-theme__h{margin:0 0 4px;font-size:14px;font-weight:600;color:rgb(55,53,47)}
  .ui-theme__sub{margin:0 0 16px;font-size:13px;color:rgba(55,53,47,.65)}
  .ui-theme__opts{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px}
  .ui-theme__opt{background:transparent;border:0;cursor:pointer;padding:0;text-align:left;font:inherit;color:inherit}
  .ui-theme__preview{height:64px;border-radius:6px;border:2px solid rgba(55,53,47,.16);padding:8px;display:flex;flex-direction:column;gap:4px;margin-bottom:6px;transition:.15s}
  .ui-theme__preview span{height:6px;border-radius:2px}
  .ui-theme__preview.light{background:#fff}
  .ui-theme__preview.light span{background:rgba(55,53,47,.16)}
  .ui-theme__preview.light span:first-child{background:rgba(55,53,47,.3);width:60%}
  .ui-theme__preview.dark{background:rgb(25,25,25)}
  .ui-theme__preview.dark span{background:rgba(255,255,255,.18)}
  .ui-theme__preview.dark span:first-child{background:rgba(255,255,255,.4);width:60%}
  .ui-theme__preview.system{background:linear-gradient(135deg,#fff 50%,rgb(25,25,25) 50%)}
  .ui-theme__preview.system span{background:rgba(128,128,128,.3)}
  .ui-theme__opt.active .ui-theme__preview{border-color:rgb(35,131,226)}
  .ui-theme__opt span:last-child{font-size:13px;font-weight:500;color:rgb(55,53,47)}
  .ui-theme__row{display:flex;justify-content:space-between;align-items:center;padding-top:16px;border-top:1px solid rgba(55,53,47,.09)}
  .ui-theme__label{font-size:14px;font-weight:500;margin-bottom:2px}
  .ui-theme__hint{font-size:12px;color:rgba(55,53,47,.65)}
  .ui-theme__sw{width:30px;height:18px;background:rgba(55,53,47,.16);border:0;border-radius:99px;position:relative;cursor:pointer;padding:0;transition:.2s}
  .ui-theme__sw i{position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.2);transition:.2s}
  .ui-theme__sw.on{background:rgb(35,131,226)}
  .ui-theme__sw.on i{transform:translateX(12px)}
</style>

<script>
  document.querySelectorAll('#root .ui-theme__opt').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('#root .ui-theme__opt').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
    });
  });
  document.querySelector('#root .ui-theme__sw').addEventListener('click',function(){
    const on=!this.classList.contains('on');
    this.classList.toggle('on',on);this.setAttribute('aria-pressed',on);
  });
</script>`,
    },
    {
      name: 'Drag & Drop',
      nameJa: 'ドラッグ&ドロップ',
      desc: '要素をドラッグして並べ替えや移動を行うインタラクション。',
      detail: 'ドラッグ&ドロップは、要素を掴んで別の場所に移動させることで並び順を変えたり、別のリストに移したりする操作です。Trelloのカード移動、メールの振り分け、ファイルのアップロードなどでおなじみで、紙の付箋を動かす感覚を画面上で再現できるのが魅力です。掴んだ要素が半透明になる・落とせる場所がハイライトされるなど、状態の視覚的なフィードバックを丁寧に設計するのが成功のコツです。',
      descEn: 'An interaction for reordering or moving elements by dragging.',
      detailEn: 'Drag and drop lets users grab an element and move it elsewhere to reorder it or transfer it to another list. Familiar from Trello cards, email triage, and file uploads, it captures the satisfying feel of moving sticky notes on a real desk. The key to a good implementation is generous visual feedback — fading the dragged item, highlighting valid drop zones, and animating the snap into place.',
      code: `/* Inspired by Linear */
<div class="ui-dnd">
  <div class="ui-dnd__header">
    <span class="ui-dnd__dot in-progress"></span>
    <h3>In Progress</h3>
    <span class="ui-dnd__count">4</span>
    <button type="button" class="ui-dnd__add">+</button>
  </div>
  <ul class="ui-dnd__list" id="dnd">
    <li draggable="true"><span class="ui-dnd__id">ENG-241</span><span class="ui-dnd__title">Fix flickering when switching workspaces</span><span class="ui-dnd__pri high"></span></li>
    <li draggable="true"><span class="ui-dnd__id">ENG-238</span><span class="ui-dnd__title">Add keyboard nav to command palette</span><span class="ui-dnd__pri med"></span></li>
    <li draggable="true"><span class="ui-dnd__id">DSN-112</span><span class="ui-dnd__title">Redesign empty state illustrations</span><span class="ui-dnd__pri low"></span></li>
    <li draggable="true"><span class="ui-dnd__id">ENG-260</span><span class="ui-dnd__title">Migrate auth tokens to httpOnly cookies</span><span class="ui-dnd__pri urgent"></span></li>
  </ul>
</div>

<style>
  .ui-dnd{max-width:340px;background:#1a1a1a;border:1px solid #232325;border-radius:8px;padding:8px;font:13px/1.4 "Inter Variable","Inter",-apple-system,sans-serif;color:#e6e6e6}
  .ui-dnd__header{display:flex;align-items:center;gap:8px;padding:6px 8px 10px}
  .ui-dnd__dot{width:8px;height:8px;border-radius:50%;background:#f2c94c;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2)}
  .ui-dnd__header h3{margin:0;font-size:13px;font-weight:500;color:#e6e6e6}
  .ui-dnd__count{font-size:12px;color:#7a7a7a;margin-right:auto}
  .ui-dnd__add{background:transparent;border:0;color:#7a7a7a;font-size:18px;cursor:pointer;width:20px;height:20px;border-radius:4px;display:flex;align-items:center;justify-content:center}
  .ui-dnd__add:hover{background:#27272a;color:#e6e6e6}
  .ui-dnd__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}
  .ui-dnd__list li{display:flex;align-items:center;gap:10px;padding:9px 10px;background:#202022;border:1px solid #2a2a2c;border-radius:6px;cursor:grab;user-select:none;transition:.12s}
  .ui-dnd__list li:hover{background:#26262a;border-color:#3a3a3c}
  .ui-dnd__list li.dragging{opacity:.4;cursor:grabbing}
  .ui-dnd__list li.over{border-color:#5e6ad2;background:#1f1f2e;box-shadow:0 0 0 1px #5e6ad2}
  .ui-dnd__id{font:500 11px "JetBrains Mono",ui-monospace,monospace;color:#7a7a7a;flex-shrink:0}
  .ui-dnd__title{flex:1;font-size:13px;color:#e6e6e6;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-dnd__pri{width:14px;height:14px;border-radius:3px;flex-shrink:0}
  .ui-dnd__pri.urgent{background:#eb5757}
  .ui-dnd__pri.high{background:#f2994a}
  .ui-dnd__pri.med{background:#7a7a7a}
  .ui-dnd__pri.low{background:#3a3a3c}
</style>

<script>
  const dnd=document.getElementById('dnd');
  let drag=null;
  dnd.querySelectorAll('li').forEach(li=>{
    li.addEventListener('dragstart',()=>{drag=li;li.classList.add('dragging')});
    li.addEventListener('dragend',()=>{li.classList.remove('dragging');dnd.querySelectorAll('li').forEach(x=>x.classList.remove('over'))});
    li.addEventListener('dragover',e=>{e.preventDefault();if(li!==drag)li.classList.add('over')});
    li.addEventListener('dragleave',()=>li.classList.remove('over'));
    li.addEventListener('drop',e=>{
      e.preventDefault();
      if(drag&&drag!==li){
        const a=[...dnd.children];
        if(a.indexOf(drag)<a.indexOf(li)) li.after(drag); else li.before(drag);
      }
    });
  });
</script>`,
    },
    {
      name: 'Virtual Scroll',
      nameJa: '仮想スクロール',
      desc: '大量データのうち画面に表示される分だけをDOMに描画する最適化パターン。',
      detail: '仮想スクロールは、何万件もある長いリストを高速にスクロールさせるための最適化テクニックです。一度に全データをDOMに描画せず、画面に映る数十件分だけを描画し、スクロールに合わせて中身を入れ替えます。スクロール位置を維持するために上下にダミーの高さ(スペーサー)を確保するのがコツです。Slackのチャット履歴、Excelのような表、長い検索結果などで採用され、ブラウザを軽快に保ちます。',
      descEn: 'Renders only visible items from large datasets in the DOM.',
      detailEn: 'Virtual scrolling is the optimization that lets a list of tens of thousands of items scroll smoothly. Instead of rendering every row into the DOM, it draws only the dozen or so currently visible and swaps content in and out as you scroll. Phantom spacer divs above and below preserve the correct scroll height. You will find this technique behind Slack message histories, Excel-like tables, and very long search results — it keeps the browser nimble.',
      code: `/* Inspired by Slack */
<div class="ui-vs" id="vs">
  <div class="ui-vs__inner" id="vi">
    <div class="ui-vs__list" id="vl"></div>
  </div>
</div>
<div class="ui-vs__note"><span>#general</span> · 12,847 messages</div>

<style>
  .ui-vs{height:300px;overflow:auto;background:#fff;font:15px/1.46 "Lato","Helvetica Neue",sans-serif;color:#1d1c1d;max-width:420px;border-radius:6px}
  .ui-vs::-webkit-scrollbar{width:8px}
  .ui-vs::-webkit-scrollbar-thumb{background:#bcbcbc;border-radius:4px}
  .ui-vs__inner{position:relative}
  .ui-vs__list{position:absolute;top:0;left:0;right:0}
  .ui-vs__msg{height:54px;padding:6px 16px;display:flex;gap:8px;box-sizing:border-box}
  .ui-vs__msg:hover{background:#f8f8f8}
  .ui-vs__avatar{width:36px;height:36px;border-radius:4px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#fff;font:600 13px sans-serif}
  .ui-vs__body{flex:1;min-width:0}
  .ui-vs__head{display:flex;gap:6px;align-items:baseline;margin-bottom:1px}
  .ui-vs__name{font-weight:900;font-size:15px;color:#1d1c1d}
  .ui-vs__time{font-size:12px;color:#616061}
  .ui-vs__text{font-size:15px;color:#1d1c1d;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-vs__note{margin-top:10px;padding:8px 12px;background:#f8f8f8;border-radius:4px;font:12px/1.4 Lato,sans-serif;color:#616061}
  .ui-vs__note span{color:#1264a3;font-weight:700}
</style>

<script>
  const TOTAL=12847,H=54;
  const names=['Alex Chen','Priya Sharma','Marcus Webb','Yuki Tanaka','Sofia Reyes','Jordan Lee','Dana Klein','Tomás Ortiz'];
  const msgs=['just pushed the fix to staging — could someone QA when free?','meeting moved to 3pm, sending invite now','lol agreed, that flow is way smoother now','+1 to shipping behind a flag','reviewed, left a few minor comments','heads up: the API will be down 10–10:15 for migration','done! merging in a sec','thanks team, this looks great'];
  const colors=['#36C5F0','#2EB67D','#ECB22E','#E01E5A','#1264A3','#7C3AED','#DC2626','#0EA5E9'];
  const vs=document.getElementById('vs'),vi=document.getElementById('vi'),vl=document.getElementById('vl');
  vi.style.height=(TOTAL*H)+'px';
  function render(){
    const s=Math.floor(vs.scrollTop/H);
    const n=Math.ceil(vs.clientHeight/H)+2;
    vl.style.transform='translateY('+(s*H)+'px)';
    let h='';
    for(let i=s;i<Math.min(s+n,TOTAL);i++){
      const nm=names[i%names.length],c=colors[i%colors.length],m=msgs[i%msgs.length];
      const hh=String(9+(i%9)).padStart(2,'0'),mm=String((i*7)%60).padStart(2,'0');
      h+='<div class="ui-vs__msg"><div class="ui-vs__avatar" style="background:'+c+'">'+nm[0]+'</div><div class="ui-vs__body"><div class="ui-vs__head"><span class="ui-vs__name">'+nm+'</span><span class="ui-vs__time">'+hh+':'+mm+' AM</span></div><div class="ui-vs__text">'+m+'</div></div></div>';
    }
    vl.innerHTML=h;
  }
  vs.addEventListener('scroll',render);render();
</script>`,
    },
    {
      name: 'Responsive Breakpoints',
      nameJa: 'レスポンシブブレークポイント',
      desc: '画面幅に応じてレイアウトを変化させるパターン。',
      detail: 'レスポンシブブレークポイントは、画面幅の特定の値(例:600px、900px、1200pxなど)を境にCSSを切り替え、スマホ・タブレット・PCそれぞれに最適なレイアウトを表示する仕組みです。CSSの@mediaクエリで実装し、1カラム→2カラム→3カラムのようにグリッドの列数を変えたり、ハンバーガーメニューを横並びナビに展開したりします。「モバイルファースト」(小さい画面を基準に書く)が現代的な書き方の主流です。',
      descEn: 'Adapts layout based on screen width.',
      detailEn: 'Responsive breakpoints use CSS media queries to swap layout rules at specific screen widths — say 600px, 900px, and 1200px — so phones, tablets, and desktops each get a tuned look. Common moves include shifting a grid from one column to two to three, or expanding a hamburger menu into a horizontal nav as the viewport widens. Writing "mobile first" (starting with the smallest screen and adding rules as the width grows) is today\'s prevailing approach.',
      code: `/* Inspired by Vercel preview */
<div class="ui-resp">
  <div class="ui-resp__bar">
    <div class="ui-resp__dots"><i></i><i></i><i></i></div>
    <div class="ui-resp__url">commerce-template-git-main.vercel.app</div>
    <div class="ui-resp__sizes">
      <button type="button" class="active" data-w="375"><span>📱</span> 375</button>
      <button type="button" data-w="768"><span>📋</span> 768</button>
      <button type="button" data-w="1280"><span>🖥</span> 1280</button>
    </div>
  </div>
  <div class="ui-resp__stage">
    <div class="ui-resp__frame" id="fr" style="width:375px">
      <div class="ui-resp__nav"><b>acme</b><span>Shop</span><span>About</span><span>Cart</span></div>
      <div class="ui-resp__hero">
        <h1>Build with the tools you love.</h1>
        <p>Ship faster on the platform for frontend developers.</p>
        <button type="button">Start Deploying</button>
      </div>
      <div class="ui-resp__grid"><div></div><div></div><div></div></div>
    </div>
    <div class="ui-resp__meta" id="meta">375 × 812 · iPhone 13</div>
  </div>
</div>

<style>
  .ui-resp{max-width:720px;background:#0a0a0a;border:1px solid #1f1f1f;border-radius:10px;font:13px/1.4 "Geist",-apple-system,sans-serif;color:#ededed;overflow:hidden}
  .ui-resp__bar{display:flex;align-items:center;gap:12px;padding:10px 12px;background:#0a0a0a;border-bottom:1px solid #1f1f1f}
  .ui-resp__dots{display:flex;gap:6px}
  .ui-resp__dots i{width:10px;height:10px;border-radius:50%;background:#262626}
  .ui-resp__url{flex:1;padding:5px 10px;background:#171717;border:1px solid #262626;border-radius:6px;font:12px ui-monospace,monospace;color:#a1a1a1}
  .ui-resp__sizes{display:flex;gap:2px;background:#171717;border:1px solid #262626;border-radius:6px;padding:2px}
  .ui-resp__sizes button{background:transparent;border:0;color:#a1a1a1;padding:4px 8px;border-radius:4px;font:500 12px sans-serif;cursor:pointer;display:flex;align-items:center;gap:4px}
  .ui-resp__sizes button.active{background:#262626;color:#fff}
  .ui-resp__stage{background:repeating-conic-gradient(#0f0f0f 0% 25%,#141414 0% 50%) 50%/16px 16px;padding:24px;display:flex;flex-direction:column;align-items:center;gap:10px;min-height:340px}
  .ui-resp__frame{background:#fff;color:#000;border-radius:6px;overflow:hidden;transition:width .3s ease;box-shadow:0 8px 30px rgba(0,0,0,.6)}
  .ui-resp__nav{display:flex;gap:14px;padding:14px 16px;border-bottom:1px solid #eaeaea;font-size:13px;color:#666}
  .ui-resp__nav b{color:#000;margin-right:auto;font-weight:700}
  .ui-resp__hero{padding:28px 20px;border-bottom:1px solid #eaeaea}
  .ui-resp__hero h1{margin:0 0 8px;font:700 22px "Geist",sans-serif;color:#000;letter-spacing:-.02em}
  .ui-resp__hero p{margin:0 0 14px;font-size:13px;color:#666}
  .ui-resp__hero button{padding:8px 14px;background:#000;color:#fff;border:0;border-radius:6px;font:500 13px sans-serif;cursor:pointer}
  .ui-resp__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:14px}
  .ui-resp__grid div{height:60px;background:linear-gradient(135deg,#f5f5f5,#eaeaea);border-radius:4px}
  .ui-resp__meta{font:11px ui-monospace,monospace;color:#a1a1a1}
</style>

<script>
  const fr=document.getElementById('fr'),meta=document.getElementById('meta');
  const labels={375:'375 × 812 · iPhone 13',768:'768 × 1024 · iPad',1280:'1280 × 800 · MacBook'};
  document.querySelectorAll('.ui-resp__sizes button').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.ui-resp__sizes button').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const w=Math.min(+b.dataset.w,640);fr.style.width=w+'px';meta.textContent=labels[b.dataset.w];
    });
  });
</script>`,
    },
    {
      name: 'Micro-interactions',
      nameJa: 'マイクロインタラクション',
      desc: 'ホバー・クリック・遷移時の小さなアニメーションやフィードバック。',
      detail: 'マイクロインタラクションは、ボタンを押した時のへこみ、フォロー時のハートの弾み、いいねボタンが満たされるアニメーションなど、ごく小さな反応のことです。「ちゃんと反応したよ」「成功したよ」をユーザーに伝え、操作の安心感や楽しさを生みます。一つひとつは数百ミリ秒程度ですが、積み重ねるとアプリ全体の質感に大きく影響します。やりすぎると邪魔になるので、控えめさと素早さが鍵です。',
      descEn: 'Small animations and feedback on hover, click, or transitions.',
      detailEn: 'Microinteractions are the tiny touches — a button pressing down, a heart bouncing on like, a checkbox snapping shut — that confirm an action landed and add a little delight. Each animation lasts only a few hundred milliseconds, but together they shape how polished an app feels. They communicate "yes, your tap registered" and reward the user for engaging. The trick is restraint: keep them brief and snappy so they assist rather than distract.',
      code: `/* Inspired by Instagram */
<article class="ui-ig">
  <header>
    <div class="ui-ig__avatar"></div>
    <div class="ui-ig__user"><strong>sora.kitchen</strong><small>Tokyo, Japan</small></div>
    <button type="button" class="ui-ig__more">⋯</button>
  </header>
  <div class="ui-ig__photo" id="ph">
    <div class="ui-ig__heart" id="bigHeart">♥</div>
  </div>
  <div class="ui-ig__actions">
    <button type="button" class="ui-ig__like" id="lk" aria-pressed="false">
      <svg viewBox="0 0 24 24" width="26" height="26"><path d="M12 21s-7-4.5-9.3-9.1C1 8 3 4 6.5 4c2 0 3.5 1 5.5 3.3C14 5 15.5 4 17.5 4 21 4 23 8 21.3 11.9 19 16.5 12 21 12 21z"/></svg>
    </button>
    <button type="button" class="ui-ig__btn"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg></button>
    <button type="button" class="ui-ig__btn"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg></button>
    <button type="button" class="ui-ig__btn save"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button>
  </div>
  <div class="ui-ig__likes" id="ct">Liked by <strong>mei_o</strong> and <strong>2,481 others</strong></div>
  <div class="ui-ig__caption"><strong>sora.kitchen</strong> finally nailed the miso-cured egg yolks 🌕 recipe up tomorrow</div>
  <div class="ui-ig__time">2 hours ago</div>
</article>

<style>
  .ui-ig{max-width:380px;background:#fff;border:1px solid #dbdbdb;border-radius:8px;font:14px/1.4 -apple-system,"Segoe UI",sans-serif;color:#262626;overflow:hidden}
  .ui-ig header{display:flex;align-items:center;gap:10px;padding:10px 14px}
  .ui-ig__avatar{width:32px;height:32px;border-radius:50%;background:conic-gradient(from 0deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888,#f09433);padding:2px;background-clip:padding-box;position:relative}
  .ui-ig__avatar::after{content:"";position:absolute;inset:2px;background:#c4b5a0;border-radius:50%}
  .ui-ig__user{flex:1;line-height:1.2}
  .ui-ig__user strong{font-size:13px;font-weight:600;display:block}
  .ui-ig__user small{font-size:11px;color:#262626}
  .ui-ig__more{background:none;border:0;font-size:18px;cursor:pointer;color:#262626}
  .ui-ig__photo{position:relative;height:380px;background:linear-gradient(135deg,#fde68a,#fca5a5,#f9a8d4);display:flex;align-items:center;justify-content:center;cursor:pointer;user-select:none}
  .ui-ig__heart{position:absolute;font-size:90px;color:#fff;opacity:0;transform:scale(.2);text-shadow:0 4px 20px rgba(0,0,0,.3);pointer-events:none}
  .ui-ig__heart.pop{animation:bighearts .9s ease forwards}
  @keyframes bighearts{0%{opacity:0;transform:scale(.2)}30%{opacity:1;transform:scale(1.1)}80%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}
  .ui-ig__actions{display:flex;gap:14px;padding:8px 14px 4px}
  .ui-ig__actions button{background:none;border:0;padding:4px;cursor:pointer;color:#262626;display:flex}
  .ui-ig__actions button svg{fill:none;stroke:currentColor;stroke-width:1.8}
  .ui-ig__like svg{fill:none;stroke:#262626;stroke-width:1.8;transition:.2s}
  .ui-ig__like:active svg{transform:scale(.85)}
  .ui-ig__like[aria-pressed=true] svg{fill:#ed4956;stroke:#ed4956;animation:heartpop .45s cubic-bezier(.18,.89,.32,1.28)}
  @keyframes heartpop{0%{transform:scale(1)}25%{transform:scale(.7)}55%{transform:scale(1.25)}100%{transform:scale(1)}}
  .ui-ig__btn.save{margin-left:auto}
  .ui-ig__likes{padding:0 14px;font-size:14px;margin-bottom:4px}
  .ui-ig__caption{padding:0 14px;font-size:14px;margin-bottom:6px}
  .ui-ig__time{padding:0 14px 12px;font-size:10px;color:#8e8e8e;text-transform:uppercase;letter-spacing:.02em}
</style>

<script>
  const lk=document.getElementById('lk'),ct=document.getElementById('ct'),ph=document.getElementById('ph'),bh=document.getElementById('bigHeart');
  let count=2481;
  function setLiked(on){
    lk.setAttribute('aria-pressed',on);
    count+=(on?1:-1);
    ct.innerHTML='Liked by <strong>mei_o</strong> and <strong>'+count.toLocaleString()+' others</strong>';
  }
  lk.addEventListener('click',()=>setLiked(lk.getAttribute('aria-pressed')!=='true'));
  let last=0;
  ph.addEventListener('click',()=>{
    const n=Date.now();
    if(n-last<400){if(lk.getAttribute('aria-pressed')!=='true')setLiked(true);bh.classList.remove('pop');void bh.offsetWidth;bh.classList.add('pop');}
    last=n;
  });
</script>`,
    },
    {
      name: 'Keyboard Shortcuts',
      nameJa: 'キーボードショートカット一覧',
      desc: '利用可能なキーボードショートカットをオーバーレイで一覧表示する。',
      detail: 'キーボードショートカット一覧は、アプリで使える全ショートカット(例:Ctrl+K で検索、? でヘルプ表示)を一覧化したオーバーレイです。多くのSaaS(Slack、Linear、Notionなど)では「?」キーで呼び出すのが慣例で、生産性を重視する上級ユーザーへの配慮として欠かせません。カテゴリごとに整理し、キーをキーキャップ風に表示すると視認性が高まります。ショートカットの存在自体を発見してもらえるのも利点です。',
      descEn: 'An overlay listing available keyboard shortcuts.',
      detailEn: 'A keyboard shortcuts dialog is an overlay that lists every shortcut the app supports — say Ctrl+K to search or ? to open help. Many productivity SaaS apps (Slack, Linear, Notion) follow the convention of opening it with the "?" key, a quiet nod to power users. Grouping shortcuts by category and rendering each key as a "kbd" chip improves scannability. A nice side effect is discoverability: users learn shortcuts exist by stumbling on the list.',
      code: `/* Inspired by Linear */
<button type="button" class="ui-trigger" onclick="document.getElementById('ks').showModal()">Show keyboard shortcuts <kbd>?</kbd></button>

<dialog id="ks" class="ui-kbd">
  <header>
    <h2>Keyboard shortcuts</h2>
    <input aria-label="Search shortcuts…" placeholder="Search shortcuts…" class="ui-kbd__search">
    <button type="button" class="ui-kbd__close" onclick="document.getElementById('ks').close()">esc</button>
  </header>
  <div class="ui-kbd__body">
    <aside>
      <button type="button" class="active">Navigation</button>
      <button type="button">Issue</button>
      <button type="button">Views</button>
      <button type="button">Application</button>
    </aside>
    <section>
      <h3>Navigation</h3>
      <ul>
        <li><span>Go to inbox</span><div><kbd>G</kbd><kbd>I</kbd></div></li>
        <li><span>Go to my issues</span><div><kbd>G</kbd><kbd>M</kbd></div></li>
        <li><span>Go to active</span><div><kbd>G</kbd><kbd>A</kbd></div></li>
        <li><span>Open command menu</span><div><kbd>⌘</kbd><kbd>K</kbd></div></li>
        <li><span>Toggle sidebar</span><div><kbd>⌘</kbd><kbd>.</kbd></div></li>
      </ul>
      <h3>Issue</h3>
      <ul>
        <li><span>Create new issue</span><div><kbd>C</kbd></div></li>
        <li><span>Assign to me</span><div><kbd>I</kbd></div></li>
        <li><span>Change status</span><div><kbd>S</kbd></div></li>
        <li><span>Change priority</span><div><kbd>⇧</kbd><kbd>P</kbd></div></li>
        <li><span>Copy issue ID</span><div><kbd>⌘</kbd><kbd>⇧</kbd><kbd>.</kbd></div></li>
      </ul>
    </section>
  </div>
</dialog>

<style>
  .ui-trigger{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:#5e6ad2;color:#fff;border:0;border-radius:6px;font:500 13px "Inter",-apple-system,sans-serif;cursor:pointer}
  .ui-trigger kbd{background:rgba(255,255,255,.18);padding:1px 6px;border-radius:3px;font:500 11px "Inter",sans-serif}
  .ui-kbd{border:0;border-radius:8px;padding:0;width:min(640px,92vw);background:#1a1a1a;color:#e6e6e6;font:13px/1.5 "Inter Variable","Inter",-apple-system,sans-serif;box-shadow:0 24px 70px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.06)}
  .ui-kbd::backdrop{background:rgba(0,0,0,.6)}
  .ui-kbd header{display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid #232325}
  .ui-kbd header h2{margin:0;font-size:13px;font-weight:500;color:#e6e6e6}
  .ui-kbd__search{flex:1;padding:6px 10px;background:#202022;border:1px solid #2a2a2c;border-radius:5px;color:#e6e6e6;font:13px Inter,sans-serif}
  .ui-kbd__search:focus{outline:0;border-color:#5e6ad2}
  .ui-kbd__close{background:transparent;border:1px solid #2a2a2c;border-radius:4px;color:#7a7a7a;font:500 11px Inter,sans-serif;padding:3px 8px;cursor:pointer}
  .ui-kbd__body{display:grid;grid-template-columns:160px 1fr;max-height:420px}
  .ui-kbd aside{padding:8px;border-right:1px solid #232325;display:flex;flex-direction:column;gap:2px}
  .ui-kbd aside button{background:transparent;border:0;color:#a1a1a1;padding:6px 10px;border-radius:5px;font:500 13px Inter,sans-serif;text-align:left;cursor:pointer}
  .ui-kbd aside button.active{background:#27272a;color:#e6e6e6}
  .ui-kbd section{padding:14px 18px;overflow-y:auto}
  .ui-kbd h3{margin:0 0 8px;font:500 11px Inter,sans-serif;color:#7a7a7a;text-transform:uppercase;letter-spacing:.04em}
  .ui-kbd h3:not(:first-child){margin-top:18px}
  .ui-kbd ul{list-style:none;margin:0;padding:0}
  .ui-kbd li{display:flex;justify-content:space-between;align-items:center;padding:7px 0;font-size:13px;color:#e6e6e6}
  .ui-kbd li > div{display:flex;gap:3px}
  .ui-kbd kbd{display:inline-block;min-width:20px;padding:2px 6px;background:#27272a;border:1px solid #2a2a2c;border-radius:4px;font:500 11px Inter,sans-serif;color:#e6e6e6;text-align:center}
</style>`,
    },
    {
      name: 'Login Form',
      nameJa: 'ログインフォーム',
      desc: 'メール/パスワードでサインインするフォーム。ソーシャルログインボタンを含むことが多い。',
      detail: 'ログインフォームは、登録済みユーザーがサービスにサインインするためのフォームです。メールアドレスとパスワードの入力欄、「ログイン状態を保持」のチェックボックス、「パスワードを忘れた方」リンクが定番で構成です。最近はGoogleやAppleなどのソーシャルログインボタンを併設し、入力なしで素早く入れる選択肢を提供する形が一般的になっています。パスワードの表示切替や、エラー時の親切なメッセージも重要なディテールです。',
      descEn: 'A sign-in form with email/password. Often includes social login.',
      detailEn: 'A login form is where returning users sign back in. The canonical layout pairs an email field with a password field, a "Stay signed in" checkbox, and a "Forgot password?" link. Today it almost always sits next to social login buttons for Google, Apple, and the like so users can skip typing entirely. A show/hide password toggle and clear, friendly error messages are small details that make a big difference.',
      code: `/* Inspired by GitHub sign in */
<form class="ui-login" onsubmit="event.preventDefault()">
  <div class="ui-login__logo">
    <svg viewBox="0 0 16 16" width="48" height="48" fill="#fff"><path d="M8 0a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8 0 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7 0-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.5.8-2.1 0-.2-.4-1 .1-2.2 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.2.5.6.8 1.2.8 2.1 0 3-1.8 3.6-3.6 3.8.3.2.6.7.6 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 8 0z"/></svg>
  </div>
  <h1>Sign in to GitHub</h1>
  <div class="ui-login__card">
    <label>Username or email address
      <input type="text" autofocus>
    </label>
    <label class="ui-login__pwlabel">
      <span>Password</span>
      <a href="#">Forgot password?</a>
      <input type="password">
    </label>
    <button type="submit" class="ui-login__cta">Sign in</button>
    <button type="button" class="ui-login__pass">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1a4 4 0 0 0-4 4v3H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1V5a4 4 0 0 0-4-4zm-2 7V5a2 2 0 1 1 4 0v3h-4z"/></svg>
      Sign in with a passkey
    </button>
  </div>
  <div class="ui-login__alt">New to GitHub? <a href="#">Create an account</a></div>
  <footer>
    <a href="#">Terms</a><a href="#">Privacy</a><a href="#">Docs</a><a href="#">Contact GitHub Support</a>
  </footer>
</form>

<style>
  .ui-login{max-width:340px;margin:0 auto;padding:40px 0;text-align:center;font:14px/1.5 -apple-system,"Segoe UI",sans-serif;color:#1f2328;background:#f6f8fa}
  .ui-login__logo{margin-bottom:16px;display:flex;justify-content:center}
  .ui-login__logo svg path{fill:#1f2328}
  .ui-login h1{margin:0 0 24px;font:300 24px/1.25 -apple-system,sans-serif;color:#1f2328}
  .ui-login__card{padding:16px;background:#fff;border:1px solid #d0d7de;border-radius:6px;text-align:left;margin-bottom:16px}
  .ui-login label{display:block;font-size:14px;font-weight:600;color:#1f2328;margin-bottom:16px}
  .ui-login__pwlabel{position:relative}
  .ui-login__pwlabel a{position:absolute;top:0;right:0;font-size:12px;font-weight:400;color:#0969da;text-decoration:none}
  .ui-login__pwlabel a:hover{text-decoration:underline}
  .ui-login input{width:100%;padding:5px 12px;margin-top:5px;border:1px solid #d0d7de;border-radius:6px;font:14px -apple-system,sans-serif;box-sizing:border-box;height:32px;background:#f6f8fa}
  .ui-login input:focus{outline:0;border-color:#0969da;box-shadow:0 0 0 3px rgba(9,105,218,.3);background:#fff}
  .ui-login__cta{width:100%;padding:5px 16px;background:#1f883d;color:#fff;border:1px solid rgba(31,35,40,.15);border-radius:6px;font:600 14px -apple-system,sans-serif;cursor:pointer;height:32px;box-shadow:0 1px 0 rgba(31,35,40,.1),inset 0 1px 0 rgba(255,255,255,.03)}
  .ui-login__cta:hover{background:#1a7f37}
  .ui-login__pass{width:100%;margin-top:8px;padding:5px 16px;background:#f6f8fa;color:#1f2328;border:1px solid #d0d7de;border-radius:6px;font:600 14px -apple-system,sans-serif;cursor:pointer;height:32px;display:inline-flex;align-items:center;justify-content:center;gap:6px}
  .ui-login__pass:hover{background:#f3f4f6;border-color:#afb8c1}
  .ui-login__alt{padding:16px;background:#fff;border:1px solid #d0d7de;border-radius:6px;font-size:14px}
  .ui-login__alt a{color:#0969da;text-decoration:none}
  .ui-login__alt a:hover{text-decoration:underline}
  .ui-login footer{margin-top:48px;display:flex;justify-content:center;gap:16px;font-size:12px}
  .ui-login footer a{color:#0969da;text-decoration:none}
</style>`,
    },
    {
      name: 'Sign Up Form',
      nameJa: '新規登録フォーム',
      desc: 'アカウント作成のためのフォーム。',
      detail: '新規登録フォームは、初めてサービスを使うユーザーがアカウントを作るためのフォームです。氏名、メール、パスワードの入力に加え、利用規約への同意チェックや、リアルタイムのパスワード強度メーターが付くことが多くなっています。離脱を防ぐため入力項目は必要最小限に絞り、ソーシャル登録で短縮できる導線も用意するのが鉄則です。入力直後にバリデーションエラーを優しく示すと、ユーザーは挫折せずに登録を完了できます。',
      descEn: 'A form for creating a new account.',
      detailEn: 'A sign-up form is where new users create an account. The basics are name, email, and password, often joined by a terms-of-service checkbox and a live password-strength meter. To prevent drop-off, keep required fields to the bare minimum and always offer social sign-up as a shortcut. Showing inline validation gently as the user types — rather than scolding them on submit — is the difference between a smooth onboarding and an abandoned page.',
      code: `/* Inspired by Vercel signup */
<div class="ui-su">
  <div class="ui-su__logo">
    <svg viewBox="0 0 76 65" width="32" height="28" fill="#fff"><path d="M37.527 0L75.054 65H0z"/></svg>
  </div>
  <h1>Create your Vercel account</h1>
  <p class="ui-su__sub">Continue with your work email — we recommend GitHub for faster setup.</p>
  <div class="ui-su__providers">
    <button type="button"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8 0 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7 0-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.5.8-2.1 0-.2-.4-1 .1-2.2 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.2.5.6.8 1.2.8 2.1 0 3-1.8 3.6-3.6 3.8.3.2.6.7.6 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 8 0z"/></svg> Continue with GitHub</button>
    <button type="button">Continue with GitLab</button>
    <button type="button">Continue with Bitbucket</button>
  </div>
  <div class="ui-su__sep"><span>OR</span></div>
  <form class="ui-su__form" onsubmit="event.preventDefault()">
    <label>Email
      <input type="email" placeholder="you@company.com" required>
    </label>
    <label>Password
      <input type="password" id="suPw" placeholder="At least 8 characters" required minlength="8">
      <div class="ui-su__meter"><div id="suPwBar"></div></div>
      <small id="suPwHint">Use a mix of letters, numbers, and symbols.</small>
    </label>
    <label class="ui-su__tos">
      <input type="checkbox" required>
      <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
    </label>
    <button type="submit" class="ui-su__cta">Sign Up with Email →</button>
  </form>
  <div class="ui-su__foot">Already have an account? <a href="#">Log In</a></div>
</div>

<style>
  .ui-su{max-width:380px;padding:40px 32px;background:#000;border:1px solid #1f1f1f;border-radius:12px;font:14px/1.5 "Geist",-apple-system,sans-serif;color:#ededed;text-align:center}
  .ui-su__logo{display:flex;justify-content:center;margin-bottom:24px}
  .ui-su h1{margin:0 0 8px;font:600 22px "Geist",sans-serif;color:#fff;letter-spacing:-.02em}
  .ui-su__sub{margin:0 0 24px;font-size:13px;color:#a1a1a1}
  .ui-su__providers{display:flex;flex-direction:column;gap:8px;margin-bottom:20px}
  .ui-su__providers button{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:0 12px;height:40px;background:#fff;color:#000;border:0;border-radius:8px;font:500 14px Geist,sans-serif;cursor:pointer}
  .ui-su__providers button:hover{background:#e5e5e5}
  .ui-su__providers button:not(:first-child){background:transparent;color:#fff;border:1px solid #2a2a2a}
  .ui-su__providers button:not(:first-child):hover{background:#0a0a0a;border-color:#404040}
  .ui-su__sep{position:relative;margin:20px 0;font:500 11px Geist,sans-serif;color:#666;letter-spacing:.1em}
  .ui-su__sep::before{content:"";position:absolute;top:50%;left:0;right:0;height:1px;background:#1f1f1f}
  .ui-su__sep span{position:relative;background:#000;padding:0 12px}
  .ui-su__form{text-align:left}
  .ui-su label{display:block;font:500 13px Geist,sans-serif;color:#ededed;margin-bottom:14px}
  .ui-su input[type=email],.ui-su input[type=password]{width:100%;height:40px;padding:0 12px;margin-top:6px;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;color:#ededed;font:14px Geist,sans-serif;box-sizing:border-box}
  .ui-su input:focus{outline:0;border-color:#fff}
  .ui-su__meter{height:3px;background:#1f1f1f;border-radius:99px;margin-top:6px;overflow:hidden}
  .ui-su__meter > div{height:100%;width:0;background:#666;transition:.2s}
  .ui-su small{display:block;margin-top:4px;color:#666;font-size:12px;font-weight:400}
  .ui-su__tos{display:flex;gap:8px;align-items:flex-start;font-size:12px;color:#a1a1a1;font-weight:400}
  .ui-su__tos a{color:#fff;text-decoration:underline}
  .ui-su__cta{width:100%;height:40px;background:#fff;color:#000;border:0;border-radius:8px;font:500 14px Geist,sans-serif;cursor:pointer;margin-top:6px}
  .ui-su__cta:hover{background:#e5e5e5}
  .ui-su__foot{margin-top:24px;font-size:13px;color:#a1a1a1}
  .ui-su__foot a{color:#fff;text-decoration:underline}
</style>

<script>
  const pw=document.getElementById('suPw'),bar=document.getElementById('suPwBar'),hint=document.getElementById('suPwHint');
  pw.addEventListener('input',()=>{
    let s=0;
    if(pw.value.length>=8)s++;
    if(/[A-Z]/.test(pw.value))s++;
    if(/[0-9]/.test(pw.value))s++;
    if(/[^A-Za-z0-9]/.test(pw.value))s++;
    const cols=['#666','#dc2626','#d97706','#eab308','#10b981'];
    const lbl=['Use 8+ characters','Weak','Fair','Good','Strong'];
    bar.style.width=(s*25)+'%';bar.style.background=cols[s];hint.textContent=lbl[s];
  });
</script>`,
    },
    {
      name: '404 Page',
      nameJa: '404ページ',
      desc: 'ページが見つからない時のエラーページ。',
      detail: '404ページは、指定されたURLが存在しないときに表示されるエラーページです。大きく「404」の数字、何が起きたのかの説明、ホームに戻る・検索するなどの次のアクションを並べるのが定番構成です。ブランドのキャラクターやユーモアを盛り込んでユーザーの不快感を和らげるサイトも多く、GitHubのオクト猫やDropboxのイラストが有名です。検索リンクや人気ページへの導線を入れて「行き止まり感」を減らすのがポイントです。',
      descEn: 'An error page shown when the requested page is not found.',
      detailEn: 'A 404 page appears when the URL requested does not exist. The classic layout pairs a giant "404," a short human explanation, and clear next actions like "Go home" or "Search the site." Many brands inject character or humor here — GitHub\'s Octocat and Dropbox\'s illustrations are famous examples — softening the frustration of a dead end. Adding a search box or links to popular pages turns the page from a brick wall into a helpful detour.',
      code: `/* Inspired by GitHub 404 */
<div class="ui-404">
  <header class="ui-404__nav">
    <svg viewBox="0 0 16 16" width="32" height="32" fill="#fff"><path d="M8 0a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8 0 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7 0-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.5.8-2.1 0-.2-.4-1 .1-2.2 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.2.5.6.8 1.2.8 2.1 0 3-1.8 3.6-3.6 3.8.3.2.6.7.6 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 8 0z"/></svg>
    <input aria-label="Search or jump to…" type="search" placeholder="Search or jump to…">
    <button type="button" class="ui-404__signin">Sign in</button>
  </header>
  <main class="ui-404__main">
    <pre class="ui-404__ascii">    ____ __  __
   / __// // // /
  / _ \\/ // // _  /
 /___/\\___/  \\____/
    </pre>
    <h1>This is not the web page you are looking for.</h1>
    <div class="ui-404__links">
      <a href="#">← Back</a>
      <span>·</span>
      <a href="#">GitHub Status</a>
      <span>·</span>
      <a href="#">@githubstatus</a>
    </div>
  </main>
</div>

<style>
  .ui-404{background:#0d1117;color:#e6edf3;font:14px/1.5 -apple-system,"Segoe UI",sans-serif;min-height:480px;display:flex;flex-direction:column}
  .ui-404__nav{display:flex;align-items:center;gap:16px;padding:12px 16px;background:#161b22;border-bottom:1px solid #30363d}
  .ui-404__nav input{flex:1;max-width:280px;padding:5px 12px;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font:13px -apple-system,sans-serif;height:28px;box-sizing:border-box}
  .ui-404__nav input::placeholder{color:#7d8590}
  .ui-404__signin{padding:5px 16px;background:transparent;color:#e6edf3;border:1px solid #30363d;border-radius:6px;font:600 12px -apple-system,sans-serif;cursor:pointer;height:28px}
  .ui-404__main{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 24px;text-align:center}
  .ui-404__ascii{margin:0 0 32px;font:14px/1.2 ui-monospace,"SF Mono",monospace;color:#7d8590;white-space:pre}
  .ui-404 h1{margin:0 0 24px;font:400 24px/1.25 -apple-system,sans-serif;color:#e6edf3;max-width:520px}
  .ui-404__links{display:flex;gap:10px;align-items:center;font-size:14px}
  .ui-404__links a{color:#2f81f7;text-decoration:none}
  .ui-404__links a:hover{text-decoration:underline}
  .ui-404__links span{color:#7d8590}
</style>`,
    },
    {
      name: 'Error State',
      nameJa: 'エラー状態',
      desc: '操作失敗時の状態表示。エラー内容と復旧アクションを提示。',
      detail: 'エラー状態(エラーステート)は、データ取得失敗・通信エラー・処理失敗などが起きたときに表示する画面の状態です。「何が起きたか」「ユーザーは何をすればよいか」を分かりやすく伝えることが重要で、技術的なメッセージをそのまま出すのではなく、再試行ボタンやサポートへの問い合わせ導線を添えるのが定石です。空状態(Empty State)、ローディング状態と並んで「3つの状態」と呼ばれ、現代UI設計の必須項目です。',
      descEn: 'Shows error details and recovery actions when an operation fails.',
      detailEn: 'An error state is what the UI looks like when something goes wrong — a failed fetch, a network outage, a rejected save. The job is to explain what happened and what the user can do next, without dumping raw technical messages. A clear retry button and a link to support are essential. Alongside loading and empty states, the error state is one of the "three states" every modern screen should be designed for.',
      code: `/* Inspired by Vercel deployment failed */
<div class="ui-err">
  <header class="ui-err__head">
    <div class="ui-err__crumb">
      <span>acme</span><i>/</i><span>commerce-app</span><i>/</i><strong>deployments</strong>
    </div>
    <div class="ui-err__status">
      <span class="ui-err__dot"></span>
      <span>Error</span>
    </div>
  </header>
  <div class="ui-err__card">
    <div class="ui-err__top">
      <div class="ui-err__icon">!</div>
      <div>
        <h2>Deployment failed</h2>
        <p>The build exited with status 1. Check the build logs for details.</p>
      </div>
    </div>
    <div class="ui-err__meta">
      <div><span>Commit</span><code>9a3f1c2</code></div>
      <div><span>Branch</span><code>main</code></div>
      <div><span>Duration</span><code>47s</code></div>
      <div><span>Env</span><code>Production</code></div>
    </div>
    <pre class="ui-err__log">  <span class="t">15:23:08</span> <span class="g">Cloning github.com/acme/commerce-app</span>
  <span class="t">15:23:12</span> Installing dependencies...
  <span class="t">15:23:41</span> Running "build" command: <code>next build</code>
  <span class="t">15:23:52</span> <span class="r">Type error: Property 'price' does not exist on type 'Product'.</span>
  <span class="t">15:23:52</span> <span class="r">  at lib/cart.ts:24:18</span>
  <span class="t">15:23:53</span> <span class="r">Error: Command "next build" exited with 1</span></pre>
    <div class="ui-err__actions">
      <button type="button" class="ui-err__btn">Redeploy</button>
      <a href="#" class="ui-err__btn ghost">View Build Logs</a>
      <a href="#" class="ui-err__btn ghost">Visit Docs</a>
    </div>
  </div>
</div>

<style>
  .ui-err{max-width:560px;background:#000;color:#ededed;font:13px/1.5 "Geist",-apple-system,sans-serif;border:1px solid #1f1f1f;border-radius:10px;overflow:hidden}
  .ui-err__head{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid #1f1f1f}
  .ui-err__crumb{display:flex;align-items:center;gap:8px;color:#a1a1a1;font-size:13px}
  .ui-err__crumb strong{color:#ededed;font-weight:500}
  .ui-err__crumb i{color:#404040;font-style:normal}
  .ui-err__status{display:flex;align-items:center;gap:6px;color:#f87171;font-size:12px;font-weight:500}
  .ui-err__dot{width:8px;height:8px;border-radius:50%;background:#f87171;box-shadow:0 0 8px #f87171}
  .ui-err__card{padding:20px}
  .ui-err__top{display:flex;gap:14px;margin-bottom:18px}
  .ui-err__icon{width:36px;height:36px;border-radius:50%;background:rgba(248,113,113,.12);color:#f87171;font:700 18px "Geist",sans-serif;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .ui-err__top h2{margin:0 0 4px;font-size:16px;font-weight:500;color:#fff}
  .ui-err__top p{margin:0;font-size:13px;color:#a1a1a1}
  .ui-err__meta{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:14px;background:#0a0a0a;border:1px solid #1f1f1f;border-radius:6px;margin-bottom:14px}
  .ui-err__meta div{display:flex;flex-direction:column;gap:3px}
  .ui-err__meta span{font-size:11px;color:#666;text-transform:uppercase;letter-spacing:.06em}
  .ui-err__meta code{font:13px ui-monospace,"SF Mono",monospace;color:#ededed}
  .ui-err__log{margin:0 0 16px;padding:14px;background:#0a0a0a;border:1px solid #1f1f1f;border-radius:6px;font:12px/1.7 ui-monospace,"SF Mono",monospace;color:#a1a1a1;overflow-x:auto}
  .ui-err__log .t{color:#525252}
  .ui-err__log .g{color:#10b981}
  .ui-err__log .r{color:#f87171}
  .ui-err__log code{background:#171717;padding:1px 5px;border-radius:3px;color:#ededed}
  .ui-err__actions{display:flex;gap:8px;flex-wrap:wrap}
  .ui-err__btn{padding:7px 14px;background:#fff;color:#000;border:0;border-radius:6px;font:500 13px Geist,sans-serif;cursor:pointer;text-decoration:none}
  .ui-err__btn.ghost{background:transparent;color:#ededed;border:1px solid #2a2a2a}
  .ui-err__btn.ghost:hover{background:#0a0a0a;border-color:#404040}
</style>`,
    },
    {
      name: 'Maintenance Page',
      nameJa: 'メンテナンス画面',
      desc: 'システムメンテナンス中に表示されるページ。',
      detail: 'メンテナンス画面は、システムの定期点検や緊急対応でサービスを一時停止する際に、すべての訪問者に表示するページです。「現在メンテナンス中です」「復旧予定時刻」「進捗状況」「SNSなどのフォロー先」を載せるのが定番で、ユーザーを安心させる役割があります。HTTPステータスは503(Service Unavailable)を返し、`Retry-After`ヘッダで再アクセス時刻を伝えるのが正しい実装です。ユーモアあるイラストで雰囲気を和らげるサイトも多いです。',
      descEn: 'A page displayed during system maintenance.',
      detailEn: 'A maintenance page replaces the regular site whenever it is taken offline for planned upkeep or urgent fixes. The standard formula tells the visitor that maintenance is underway, when service should return, what is being worked on, and where to follow updates (Twitter, status pages). Technically the server should respond with HTTP 503 and a `Retry-After` header so caches and bots behave well. A touch of friendly illustration helps soften the disruption.',
      code: `/* Inspired by Stripe status */
<div class="ui-maint">
  <header class="ui-maint__head">
    <div class="ui-maint__brand">
      <svg viewBox="0 0 60 25" width="48" height="20"><path fill="#635BFF" d="M59.5 14.4c0-4-2-7.2-5.7-7.2-3.7 0-6 3.2-6 7.1 0 4.7 2.7 7 6.5 7 1.8 0 3.2-.4 4.3-1V17c-1.1.5-2.3.9-3.8.9-1.5 0-2.8-.5-3-2.3h7.5l.2-1.2zm-7.6-1.7c0-1.7 1-2.4 2-2.4s2 .8 2 2.4h-4zm-9.9-5.5c-1.5 0-2.5.7-3 1.2l-.2-1H35v18l4-.8v-4.4c.6.4 1.4 1 2.9 1 2.9 0 5.6-2.3 5.6-7.2 0-4.5-2.7-6.8-5.5-6.8zm-1 10.4c-1 0-1.6-.4-2-.8V11.4c.4-.5 1-.8 2-.8 1.5 0 2.5 1.7 2.5 3.5 0 1.8-1 3.5-2.5 3.5zM34 6.3l4-.8V2l-4 .8v3.5zM34 7.4h4v13.3h-4V7.4zm-4.4 1.2L29.3 7.4h-3.5v13.3h4v-9c1-1.2 2.6-1 3-.9V7.4c-.5-.2-2.4-.5-3.2 1.2zm-8.1-4.5L17.6 5l-1.6 11.7c0 2.4 1.8 4.1 4.2 4.1 1.3 0 2.3-.2 2.8-.5v-3.3c-.5.2-3.1 1-3.1-1.5v-5.4h3.1V7.4h-3.1l.6-3.3zM10.2 11.2c0-.6.5-.9 1.4-.9 1.2 0 2.8.4 4 1.1V7.6c-1.3-.5-2.7-.8-4-.8C8.3 6.8 6 8.5 6 11.4c0 4.5 6.2 3.8 6.2 5.7 0 .7-.6 1-1.6 1-1.4 0-3.1-.5-4.4-1.3v3.9c1.5.6 3 .9 4.4.9 3.4 0 5.8-1.7 5.8-4.7-.1-4.9-6.2-4-6.2-5.7z"/></svg>
      <span>Status</span>
    </div>
    <div class="ui-maint__pill"><i></i> Scheduled maintenance</div>
  </header>
  <main class="ui-maint__main">
    <h1>Scheduled maintenance in progress</h1>
    <p>We are performing routine database maintenance on the API. Dashboard logins and webhook deliveries may be delayed. Payments processing is unaffected.</p>
    <div class="ui-maint__window">
      <div><span>STARTED</span><b>May 20, 14:00 UTC</b></div>
      <div><span>EXPECTED END</span><b>May 20, 16:00 UTC</b></div>
      <div><span>AFFECTED</span><b>Dashboard, Webhooks</b></div>
    </div>
    <div class="ui-maint__timeline">
      <div class="ui-maint__entry">
        <div class="ui-maint__time">14:42 UTC</div>
        <div><strong>Update</strong> — Read traffic restored. Continuing to monitor write throughput.</div>
      </div>
      <div class="ui-maint__entry">
        <div class="ui-maint__time">14:00 UTC</div>
        <div><strong>In progress</strong> — Maintenance window has begun. Subscribed users will receive an email when complete.</div>
      </div>
    </div>
    <div class="ui-maint__sub">
      <input aria-label="email@example.com" placeholder="email@example.com">
      <button type="button">Subscribe to updates</button>
    </div>
  </main>
</div>

<style>
  .ui-maint{max-width:560px;background:#fff;border:1px solid #e3e8ee;border-radius:10px;font:14px/1.5 -apple-system,"Helvetica Neue",sans-serif;color:#1a1f36;overflow:hidden}
  .ui-maint__head{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;border-bottom:1px solid #e3e8ee;background:#fafbfc}
  .ui-maint__brand{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:600;color:#425466}
  .ui-maint__brand span{color:#a3acb9;font-weight:500}
  .ui-maint__pill{display:flex;align-items:center;gap:6px;padding:4px 10px;background:#fef3c7;color:#92400e;border-radius:99px;font:600 12px -apple-system,sans-serif}
  .ui-maint__pill i{width:6px;height:6px;border-radius:50%;background:#f59e0b;animation:pulse 1.6s ease-in-out infinite}
  @keyframes pulse{50%{opacity:.4}}
  .ui-maint__main{padding:24px 28px 28px}
  .ui-maint h1{margin:0 0 8px;font:600 22px -apple-system,sans-serif;color:#1a1f36;letter-spacing:-.01em}
  .ui-maint__main > p{margin:0 0 20px;color:#425466;font-size:14px}
  .ui-maint__window{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:14px;background:#f7fafc;border-radius:6px;margin-bottom:24px}
  .ui-maint__window div{display:flex;flex-direction:column;gap:3px}
  .ui-maint__window span{font:600 10px -apple-system,sans-serif;color:#8792a2;letter-spacing:.08em}
  .ui-maint__window b{font:500 13px -apple-system,sans-serif;color:#1a1f36}
  .ui-maint__timeline{margin-bottom:24px;border-left:2px solid #e3e8ee;padding-left:16px}
  .ui-maint__entry{margin-bottom:14px;font-size:13px}
  .ui-maint__entry strong{color:#1a1f36;font-weight:600}
  .ui-maint__time{font:600 12px -apple-system,sans-serif;color:#635bff;margin-bottom:2px}
  .ui-maint__sub{display:flex;gap:8px}
  .ui-maint__sub input{flex:1;padding:8px 12px;border:1px solid #e3e8ee;border-radius:4px;font:13px -apple-system,sans-serif;background:#fff}
  .ui-maint__sub input:focus{outline:0;border-color:#635bff;box-shadow:0 0 0 3px rgba(99,91,255,.2)}
  .ui-maint__sub button{padding:8px 14px;background:#635bff;color:#fff;border:0;border-radius:4px;font:600 13px -apple-system,sans-serif;cursor:pointer;box-shadow:0 1px 1px rgba(0,0,0,.05)}
  .ui-maint__sub button:hover{background:#5147e5}
</style>`,
    },
    {
      name: 'Cookie Banner',
      nameJa: 'クッキーバナー',
      desc: 'Cookie利用の同意を求めるGDPR対応バナー。',
      detail: 'クッキーバナーは、ウェブサイトがCookieを使ってユーザーを追跡することへの同意を求めるバナーです。EUのGDPRやCCPAなどのプライバシー法令により、訪問者が「すべて受け入れる」「拒否する」「設定をカスタマイズする」を選べる必要があります。画面下や右下に固定表示するのが定番で、必要最低限のCookieとマーケティング用Cookieを分けて選択できるのが望ましい実装です。同意を得るまで追跡を始めないのが法令遵守の鉄則です。',
      descEn: 'A GDPR-compliant banner requesting cookie consent.',
      detailEn: 'A cookie banner asks visitors to consent to the cookies a site uses to track them. Privacy laws like the EU\'s GDPR and California\'s CCPA require offering clear choices — "Accept all," "Reject," and "Customize" — rather than a single "OK" button. The banner usually docks to the bottom or bottom-right of the screen, and a well-built one separates strictly necessary cookies from optional marketing ones. The cardinal rule: do not start tracking until consent is granted.',
      code: `/* Inspired by GitHub cookie banner */
<div class="ui-cookie" id="ck">
  <div class="ui-cookie__body">
    <p>We use optional cookies to improve your experience on our website, including to analyze usage and measure marketing effectiveness. <a href="#">Read our Privacy Statement</a> and <a href="#">Cookie Policy</a> to learn more.</p>
  </div>
  <div class="ui-cookie__actions">
    <button type="button" class="ui-cookie__btn primary" onclick="document.getElementById('ck').remove()">Accept</button>
    <button type="button" class="ui-cookie__btn" onclick="document.getElementById('ck').remove()">Reject</button>
    <button type="button" class="ui-cookie__btn" onclick="document.getElementById('ck').classList.toggle('open')">Manage cookies ▾</button>
    <button type="button" class="ui-cookie__close" onclick="document.getElementById('ck').remove()" aria-label="Close">✕</button>
  </div>
  <div class="ui-cookie__panel">
    <div class="ui-cookie__row">
      <div>
        <strong>Required cookies</strong>
        <p>Essential to make this site work — you cannot disable these.</p>
      </div>
      <span class="ui-cookie__sw on disabled"><i></i></span>
    </div>
    <div class="ui-cookie__row">
      <div>
        <strong>Analytics</strong>
        <p>Help us understand how visitors interact with the site.</p>
      </div>
      <button type="button" class="ui-cookie__sw on" onclick="this.classList.toggle('on')"><i></i></button>
    </div>
    <div class="ui-cookie__row">
      <div>
        <strong>Marketing</strong>
        <p>Used to deliver advertisements more relevant to you.</p>
      </div>
      <button type="button" class="ui-cookie__sw" onclick="this.classList.toggle('on')"><i></i></button>
    </div>
    <div class="ui-cookie__save">
      <button type="button" onclick="document.getElementById('ck').remove()">Save preferences</button>
    </div>
  </div>
</div>

<style>
  .ui-cookie{position:fixed;bottom:24px;left:24px;width:min(440px,calc(100vw - 32px));padding:16px 18px;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#e6edf3;font:13px/1.5 -apple-system,"Segoe UI",sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.4);z-index:9999}
  .ui-cookie__body p{margin:0 0 12px;font-size:13px;color:#e6edf3}
  .ui-cookie__body a{color:#2f81f7;text-decoration:none}
  .ui-cookie__body a:hover{text-decoration:underline}
  .ui-cookie__actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
  .ui-cookie__btn{padding:5px 16px;background:#21262d;color:#e6edf3;border:1px solid #30363d;border-radius:6px;font:600 12px -apple-system,sans-serif;cursor:pointer;height:28px;line-height:1}
  .ui-cookie__btn:hover{background:#30363d;border-color:#8b949e}
  .ui-cookie__btn.primary{background:#238636;border-color:rgba(240,246,252,.1);color:#fff}
  .ui-cookie__btn.primary:hover{background:#2ea043}
  .ui-cookie__close{margin-left:auto;background:transparent;border:0;color:#8b949e;cursor:pointer;font-size:14px;padding:4px}
  .ui-cookie__panel{display:none;margin-top:14px;padding-top:14px;border-top:1px solid #30363d}
  .ui-cookie.open .ui-cookie__panel{display:block}
  .ui-cookie__row{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;padding:10px 0;border-bottom:1px solid #21262d}
  .ui-cookie__row strong{display:block;font-size:13px;font-weight:600;color:#e6edf3;margin-bottom:2px}
  .ui-cookie__row p{margin:0;font-size:12px;color:#8b949e}
  .ui-cookie__sw{flex-shrink:0;width:32px;height:18px;background:#21262d;border:1px solid #30363d;border-radius:99px;position:relative;cursor:pointer;padding:0;transition:.2s}
  .ui-cookie__sw i{position:absolute;top:1px;left:1px;width:14px;height:14px;background:#8b949e;border-radius:50%;transition:.2s}
  .ui-cookie__sw.on{background:#238636;border-color:#238636}
  .ui-cookie__sw.on i{background:#fff;transform:translateX(14px)}
  .ui-cookie__sw.disabled{opacity:.6;cursor:not-allowed}
  .ui-cookie__save{margin-top:12px;text-align:right}
  .ui-cookie__save button{padding:5px 16px;background:#238636;color:#fff;border:0;border-radius:6px;font:600 12px -apple-system,sans-serif;cursor:pointer;height:28px}
  .ui-cookie__save button:hover{background:#2ea043}
</style>`,
    },
  ],
}
