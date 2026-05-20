/**
 * UI Parts Showcase (Display) — ready-to-use, copy-and-paste display components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-display',
  title: 'UIパーツ集(表示系)',
  titleEn: 'Display Components',
  description: 'コンテンツを見せるためのUIパーツ。コピーしてHTMLに貼り付けるだけで使えます。',
  terms: [
    {
      name: 'Accordion',
      nameJa: 'アコーディオン',
      desc: 'クリックで開閉する折りたたみパネル。FAQで定番。',
      detail: 'アコーディオンは、見出しをクリックすると下に隠れていた中身がにゅっと開く折りたたみUIです。楽器のアコーディオンが伸び縮みする様子に似ていることが名前の由来です。FAQ(よくある質問)、商品の詳細スペック、設定画面のセクション分けなど、情報量が多くて一度に全部見せると圧迫感がある場面で使われます。必要な項目だけ開いて読めるので、画面を整理しつつ多くの情報を載せられます。',
      descEn: 'A collapsible panel that opens on click — a classic pattern for FAQs.',
      detailEn: 'An accordion lets users click a heading to reveal hidden content underneath, much like the musical instrument that expands and contracts. It works well for FAQs, detailed product specs, or grouped settings screens — anywhere there is too much info to show all at once. Users open only what they need, so the page stays tidy while still holding a lot of content. This pattern keeps screens approachable without losing depth.',
      code: `<!-- Inspired by Notion -->
<div class="ui-accordion">
  <details open>
    <summary><span class="ui-accordion__caret"></span>What is Notion AI?</summary>
    <div class="ui-accordion__body">Notion AI is a connected assistant that lives inside your workspace. Ask it to summarize a meeting note, draft a project brief, or find that doc from last quarter — answers are grounded in your own pages.</div>
  </details>
  <details>
    <summary><span class="ui-accordion__caret"></span>How is my data used?</summary>
    <div class="ui-accordion__body">Your content is never used to train models. Enterprise plans add SAML SSO, SCIM, and audit log exports.</div>
  </details>
  <details>
    <summary><span class="ui-accordion__caret"></span>Can I cancel anytime?</summary>
    <div class="ui-accordion__body">Yes. Plans are billed monthly or annually and can be downgraded back to the Free plan at the end of the current billing cycle.</div>
  </details>
</div>

<style>
  .ui-accordion{max-width:520px;font:15px -apple-system,'Segoe UI',sans-serif;color:rgb(55,53,47);padding:8px 4px}
  .ui-accordion details{border-bottom:1px solid rgba(55,53,47,.09)}
  .ui-accordion summary{display:flex;align-items:center;gap:8px;padding:14px 2px;cursor:pointer;font-weight:600;list-style:none;color:rgb(55,53,47)}
  .ui-accordion summary::-webkit-details-marker{display:none}
  .ui-accordion summary:hover{background:rgba(55,53,47,.03)}
  .ui-accordion__caret{width:0;height:0;border-left:5px solid rgba(55,53,47,.55);border-top:4px solid transparent;border-bottom:4px solid transparent;transition:transform .15s ease;flex:none;margin-left:4px}
  .ui-accordion details[open] .ui-accordion__caret{transform:rotate(90deg)}
  .ui-accordion__body{padding:2px 4px 16px 18px;color:rgba(55,53,47,.78);line-height:1.55;font-size:14.5px}
</style>`,
    },
    {
      name: 'Tabs',
      nameJa: 'タブ',
      desc: '「概要 / レビュー / Q&A」のような複数面を切り替えるUI。',
      detail: 'タブは、同じ場所に複数のページを重ねておき、見出しをクリックして切り替えるUIです。本に挟む見出し付きインデックスのような役割で、限られたスペースに複数の情報をまとめられます。商品ページの「概要・レビュー・Q&A」、設定画面の「一般・通知・アカウント」などで頻繁に使われます。タブは3〜5個程度が見やすく、それ以上はサイドメニューやドロップダウンを検討するのが一般的です。',
      descEn: 'A control for switching between sibling views like "Overview / Reviews / Q&A".',
      detailEn: 'Tabs stack multiple panels in the same place, with clickable headers to flip between them — like the labeled dividers in a binder. They squeeze several pieces of related info into one compact space. You\'ll see them on product pages ("Overview / Reviews / Q&A") and in settings screens ("General / Notifications / Account"). Three to five tabs is the sweet spot; if you have more, a side menu or dropdown is usually a better fit.',
      code: `<!-- Inspired by X (Twitter) profile tabs -->
<div class="ui-tabs" id="tabs">
  <nav class="ui-tabs__list" role="tablist">
    <button class="ui-tabs__tab is-active" role="tab" data-target="t1">Posts</button>
    <button class="ui-tabs__tab" role="tab" data-target="t2">Replies</button>
    <button class="ui-tabs__tab" role="tab" data-target="t3">Highlights</button>
    <button class="ui-tabs__tab" role="tab" data-target="t4">Media</button>
    <button class="ui-tabs__tab" role="tab" data-target="t5">Likes</button>
  </nav>
  <section class="ui-tabs__panel is-active" id="t1">
    <p><b>Jay Park</b> @jaypark · 2h<br>Shipped the new compose box today. 3 weeks of dogfooding, 47 internal bug reports, finally feels right.</p>
  </section>
  <section class="ui-tabs__panel" id="t2">@maria_codes replying with thoughts on the Figma plugin architecture...</section>
  <section class="ui-tabs__panel" id="t3">Pinned highlights from this month's threads.</section>
  <section class="ui-tabs__panel" id="t4">128 photos and 14 videos</section>
  <section class="ui-tabs__panel" id="t5">Recent likes from people you follow</section>
</div>

<style>
  .ui-tabs{max-width:560px;font:15px -apple-system,'Segoe UI',Roboto,sans-serif;color:#e7e9ea;background:#000;border:1px solid #2f3336;border-radius:0}
  .ui-tabs__list{display:flex;border-bottom:1px solid #2f3336;overflow-x:auto;scrollbar-width:none}
  .ui-tabs__list::-webkit-scrollbar{display:none}
  .ui-tabs__tab{flex:1;min-width:80px;padding:16px 16px 14px;border:0;background:transparent;cursor:pointer;font:500 15px -apple-system,sans-serif;color:#71767b;position:relative;transition:background .15s}
  .ui-tabs__tab:hover{background:rgba(231,233,234,.03)}
  .ui-tabs__tab.is-active{color:#e7e9ea;font-weight:700}
  .ui-tabs__tab.is-active::after{content:"";position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:56px;height:4px;border-radius:2px;background:#1d9bf0}
  .ui-tabs__panel{display:none;padding:18px;line-height:1.45;color:#e7e9ea;font-size:15px}
  .ui-tabs__panel.is-active{display:block}
  .ui-tabs__panel p{margin:0}
  .ui-tabs__panel b{color:#e7e9ea}
</style>

<script>
  const tabs=document.getElementById('tabs');
  tabs.querySelectorAll('.ui-tabs__tab').forEach(t=>{
    t.addEventListener('click',()=>{
      tabs.querySelectorAll('.ui-tabs__tab,.ui-tabs__panel').forEach(el=>el.classList.remove('is-active'));
      t.classList.add('is-active');
      document.getElementById(t.dataset.target).classList.add('is-active');
    });
  });
</script>`,
    },
    {
      name: 'Card',
      nameJa: 'カード',
      desc: '写真+タイトル+説明文+ボタンが入る基本ブロック。商品一覧などで使う。',
      detail: 'カードは、関連する情報をひとつの長方形ブロックにまとめて見せるUIの基本形です。写真・タイトル・説明文・価格・ボタンといった要素を、紙のカードのように一枚にまとめます。ECサイトの商品一覧、ブログの記事一覧、SNSの投稿など、同じ形式のコンテンツを並べたいときに最適です。同じサイズのカードを格子状に並べると、スキャンしやすく、見比べやすい一覧画面が作れます。',
      descEn: 'A basic block holding an image, title, description, and button — ideal for product or article lists.',
      detailEn: 'A card bundles related pieces of info — image, title, description, price, button — into a single rectangular block, like a printed index card. It is the go-to format for repeating content such as product listings, blog post indexes, or social feeds. Lined up in a uniform grid, cards make it easy to scan many items at once and compare them side by side. They turn a wall of data into something visually digestible.',
      code: `<!-- Inspired by Airbnb listing -->
<article class="ui-card">
  <div class="ui-card__media">
    <div class="ui-card__photo" style="background:linear-gradient(135deg,#f8d3a5 0%,#e5805a 55%,#b34a3e 100%)"></div>
    <button class="ui-card__heart" aria-label="Save">
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true"><path d="M16 28C8 22 3 17.7 3 12.2 3 8.2 6.2 5 10.2 5c2.4 0 4.6 1.2 5.8 3 1.2-1.8 3.4-3 5.8-3C25.8 5 29 8.2 29 12.2 29 17.7 24 22 16 28z" fill="rgba(0,0,0,.5)" stroke="#fff" stroke-width="2"/></svg>
    </button>
    <span class="ui-card__badge">Guest favorite</span>
    <div class="ui-card__dots"><i class="is-on"></i><i></i><i></i><i></i><i></i></div>
  </div>
  <div class="ui-card__body">
    <div class="ui-card__row">
      <h3 class="ui-card__title">Cabin in Joshua Tree</h3>
      <span class="ui-card__rating"><svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true"><path fill="#222" d="M8 1l2.2 4.6 5 .7-3.6 3.5.9 5L8 12.4 3.5 14.8l.9-5L.7 6.3l5-.7z"/></svg> 4.94</span>
    </div>
    <p class="ui-card__sub">Hosted by Lena</p>
    <p class="ui-card__sub">Nov 14 – 19</p>
    <p class="ui-card__price"><b>$248</b> night</p>
  </div>
</article>

<style>
  .ui-card{width:280px;font:15px Circular,-apple-system,'Helvetica Neue',sans-serif;color:#222;background:#fff;cursor:pointer}
  .ui-card__media{position:relative;height:280px;border-radius:12px;overflow:hidden}
  .ui-card__photo{position:absolute;inset:0}
  .ui-card__heart{position:absolute;top:12px;right:12px;width:32px;height:32px;border:0;background:transparent;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center}
  .ui-card__badge{position:absolute;top:12px;left:12px;background:#fff;color:#222;font:600 12px Circular,sans-serif;padding:6px 10px;border-radius:999px;box-shadow:0 2px 8px rgba(0,0,0,.12)}
  .ui-card__dots{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:4px}
  .ui-card__dots i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.6)}
  .ui-card__dots i.is-on{background:#fff}
  .ui-card__body{padding:10px 2px 0}
  .ui-card__row{display:flex;justify-content:space-between;align-items:center;gap:8px}
  .ui-card__title{margin:0;font:600 15px Circular,sans-serif;color:#222}
  .ui-card__rating{display:inline-flex;align-items:center;gap:3px;font-size:14px;color:#222}
  .ui-card__sub{margin:2px 0 0;color:#6a6a6a;font-size:14px}
  .ui-card__price{margin:6px 0 0;color:#222;font-size:14px}
  .ui-card__price b{font-weight:600;color:#222}
</style>`,
    },
    {
      name: 'Avatar',
      nameJa: 'アバター',
      desc: 'ユーザーの顔写真/イニシャル円。プロフィール、コメント欄で使う。',
      detail: 'アバターは、ユーザーを表す小さな円形(または角丸)の画像です。顔写真を入れるのが一般的ですが、写真がない場合は名前のイニシャルを背景色つきで表示するのが定石です。SNSのプロフィール、コメント欄の投稿者表示、チャットの発言者、メンバー一覧などで使われます。複数人を並べるときはアバターを少し重ねて表示する「アバタースタック」がよく使われ、「何人参加しているか」を素早く伝えられます。',
      descEn: 'A round image (or initials) representing a user, used in profiles and comment threads.',
      detailEn: 'An avatar is a small circular (or rounded) image that stands for a user. A real photo is ideal, but when one is missing it is common to show the person\'s initials over a solid background color. You\'ll find avatars in social profiles, comment threads, chat messages, and member lists. When showing many people at once, designers often use an "avatar stack" — overlapping circles — to quickly hint at how many people are involved.',
      code: `<!-- Inspired by Discord -->
<div class="ui-avatars">
  <div class="ui-avatar">
    <div class="ui-avatar__img" style="background:linear-gradient(135deg,#5865f2,#3b45c4)">A</div>
    <span class="ui-avatar__status is-online" title="Online"></span>
  </div>
  <div class="ui-avatar">
    <div class="ui-avatar__img" style="background:linear-gradient(135deg,#eb459e,#9333ea)">M</div>
    <span class="ui-avatar__status is-idle" title="Idle"></span>
  </div>
  <div class="ui-avatar">
    <div class="ui-avatar__img" style="background:linear-gradient(135deg,#f0b232,#ed7c1f)">K</div>
    <span class="ui-avatar__status is-dnd" title="Do Not Disturb"></span>
  </div>
  <div class="ui-avatar">
    <div class="ui-avatar__img" style="background:linear-gradient(135deg,#23a55a,#1a7a42)">R</div>
    <span class="ui-avatar__status is-offline" title="Offline"></span>
  </div>
</div>

<style>
  .ui-avatars{display:inline-flex;gap:8px;padding:14px;background:#313338;border-radius:8px}
  .ui-avatar{position:relative;width:40px;height:40px}
  .ui-avatar__img{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font:700 16px 'gg sans',-apple-system,sans-serif;user-select:none}
  .ui-avatar__status{position:absolute;right:-2px;bottom:-2px;width:14px;height:14px;border-radius:50%;border:3px solid #313338;box-sizing:content-box}
  .ui-avatar__status.is-online{background:#23a55a}
  .ui-avatar__status.is-idle{background:#f0b232}
  .ui-avatar__status.is-dnd{background:#f23f43}
  .ui-avatar__status.is-offline{background:#80848e}
</style>`,
    },
    {
      name: 'Tag / Chip',
      nameJa: 'タグ・チップ',
      desc: 'カテゴリやキーワードを示す小さなラベル。削除ボタン付きが多い。',
      detail: 'タグ(チップ)は、カテゴリやキーワード、選択中の条件などを小さなラベル状に表示するUIです。ブログ記事の「#JavaScript」「#初心者」のような分類ラベル、検索結果の絞り込み条件、フォームでの選択肢など、用途は多彩です。「×」マークが付いていれば、ユーザーがその条件を外せるインタラクティブな部品にもなります。複数並べるので、サイズは小さめ、押せる場合はクリックの当たり判定を十分に取るのがコツです。',
      descEn: 'A small label for categories or keywords, often with a remove button.',
      detailEn: 'Tags (or chips) are small label-style elements that display categories, keywords, or selected filters. Use cases range widely — hashtags on blog posts like "#JavaScript" or "#beginner", active filter conditions on a search results page, and multi-select form options. Add an "×" icon and a tag becomes interactive, letting users remove that condition. Because tags appear in groups, keep them compact, but make their tap targets big enough to hit comfortably.',
      code: `<!-- Inspired by GitHub repo topics -->
<div class="ui-chips" id="chips">
  <a class="ui-chip">react</a>
  <a class="ui-chip">typescript</a>
  <a class="ui-chip">design-system</a>
  <a class="ui-chip">accessibility</a>
  <a class="ui-chip">storybook</a>
  <a class="ui-chip">tailwindcss</a>
  <a class="ui-chip">good-first-issue</a>
</div>

<style>
  .ui-chips{display:flex;flex-wrap:wrap;gap:4px;max-width:460px;padding:16px;background:#ffffff;font:14px -apple-system,'Segoe UI',Helvetica,Arial,sans-serif}
  .ui-chip{display:inline-flex;align-items:center;height:24px;padding:0 10px;background:#ddf4ff;color:#0969da;border-radius:999px;font-size:12px;font-weight:500;text-decoration:none;cursor:pointer;border:1px solid transparent;transition:.12s ease}
  .ui-chip:hover{background:#0969da;color:#fff}
</style>`,
    },
    {
      name: 'Rating Stars',
      nameJa: 'レーティング',
      desc: '星でレビュー評価を示すUI。クリックで選べる対話型も。',
      detail: 'レーティング(星評価)は、商品やサービスの満足度を1〜5個の星で示すUIです。レビューの平均点を見せる「表示専用」と、ユーザーが自分で星を選ぶ「入力型」の2つがあります。半端な評価(4.3など)は半分塗りや小数併記で表現します。映画、書籍、ECサイト、地図アプリのレビューなどで広く使われ、文字を読まなくても直感的に良し悪しが伝わるのが強みです。',
      descEn: 'A star-based review rating, sometimes interactive for picking your own score.',
      detailEn: 'A star rating UI shows satisfaction on a 1-to-5 scale using star icons. There are two main flavors: "read-only" stars displaying an average score, and "input" stars letting the user pick their own. Fractional scores like 4.3 are shown with half-filled stars or accompanying numbers. You see them everywhere — on movies, books, e-commerce reviews, and map apps — because the quality is communicated visually, no reading required.',
      code: `<!-- Inspired by Apple App Store review -->
<div class="ui-rating-card">
  <div class="ui-rating-card__head">
    <div>
      <div class="ui-rating-card__score">4.8</div>
      <div class="ui-rating-card__outof">out of 5</div>
    </div>
    <div class="ui-rating-card__bars">
      <div class="ui-rating-card__row"><span>5</span><i><b style="width:82%"></b></i></div>
      <div class="ui-rating-card__row"><span>4</span><i><b style="width:12%"></b></i></div>
      <div class="ui-rating-card__row"><span>3</span><i><b style="width:3%"></b></i></div>
      <div class="ui-rating-card__row"><span>2</span><i><b style="width:1%"></b></i></div>
      <div class="ui-rating-card__row"><span>1</span><i><b style="width:2%"></b></i></div>
    </div>
  </div>
  <div class="ui-rating-card__count">14.2K Ratings</div>
  <div class="ui-rating-card__tap" id="rating">
    <div class="ui-rating-card__stars">
      <button data-v="1" aria-label="1">★</button><button data-v="2" aria-label="2">★</button><button data-v="3" aria-label="3">★</button><button data-v="4" aria-label="4">★</button><button data-v="5" aria-label="5">★</button>
    </div>
    <div class="ui-rating-card__hint" id="rText">Tap to Rate</div>
  </div>
</div>

<style>
  .ui-rating-card{width:300px;padding:16px;background:#fff;border-radius:14px;font:14px -apple-system,'SF Pro Text',sans-serif;color:#1d1d1f}
  .ui-rating-card__head{display:flex;align-items:center;gap:16px}
  .ui-rating-card__score{font:700 44px -apple-system,'SF Pro Display',sans-serif;line-height:1}
  .ui-rating-card__outof{font-size:12px;color:#86868b;margin-top:2px}
  .ui-rating-card__bars{flex:1;display:flex;flex-direction:column;gap:3px}
  .ui-rating-card__row{display:flex;align-items:center;gap:6px;font-size:11px;color:#86868b}
  .ui-rating-card__row span{width:10px}
  .ui-rating-card__row i{flex:1;height:5px;background:#e5e5ea;border-radius:3px;overflow:hidden;font-style:normal}
  .ui-rating-card__row b{display:block;height:100%;background:#86868b;border-radius:3px}
  .ui-rating-card__count{margin-top:6px;color:#86868b;font-size:12px}
  .ui-rating-card__tap{margin-top:14px;padding-top:14px;border-top:.5px solid #d2d2d7;text-align:center}
  .ui-rating-card__stars{display:inline-flex;gap:6px}
  .ui-rating-card__stars button{border:0;background:transparent;font-size:28px;color:#d2d2d7;cursor:pointer;padding:0;line-height:1;transition:.1s}
  .ui-rating-card__stars button:hover{transform:scale(1.1)}
  .ui-rating-card__stars button.is-on{color:#ff9500}
  .ui-rating-card__hint{margin-top:6px;color:#007aff;font-weight:500;font-size:13px}
</style>

<script>
  const r=document.getElementById('rating'),rt=document.getElementById('rText');
  const stars=r.querySelectorAll('button');
  stars.forEach(s=>s.addEventListener('click',()=>{
    const v=+s.dataset.v;
    stars.forEach(x=>x.classList.toggle('is-on',+x.dataset.v<=v));
    rt.textContent='You rated '+v+' star'+(v>1?'s':'');
  }));
</script>`,
    },
    {
      name: 'Spinner',
      nameJa: 'スピナー',
      desc: '円形でくるくる回るロード中インジケータ。',
      detail: 'スピナーは、何かが読み込み中・処理中であることを示すために、くるくると回り続ける円形のアニメーションUIです。終了時刻が分からない非同期処理(API通信、画像の読み込みなど)のフィードバックとして使われます。表示することで「フリーズしていない、ちゃんと動いている」と伝え、ユーザーの不安を減らします。長時間かかりそうな処理にはプログレスバーや進捗テキストの併用が親切です。',
      descEn: 'A circular spinning indicator that signals something is loading.',
      detailEn: 'A spinner is a small circular animation that keeps rotating to indicate the app is working on something. It is used as feedback for async tasks of unknown duration, like API calls or image loading. The spin reassures users that the app is not frozen and progress is happening behind the scenes. For longer waits, it is friendlier to pair it with a progress bar or a short status message so users know what to expect.',
      code: `<!-- Inspired by Linear -->
<div class="ui-spinner-demo">
  <div class="ui-spinner" role="status" aria-label="Loading">
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="ui-spinner__label">Syncing workspace...</div>
</div>

<style>
  .ui-spinner-demo{display:inline-flex;flex-direction:column;align-items:center;gap:12px;padding:32px 48px;background:#08090a;border:1px solid #1f2023;border-radius:8px;font:13px 'Inter',-apple-system,sans-serif;color:#8a8f98}
  .ui-spinner{position:relative;width:20px;height:20px}
  .ui-spinner span{position:absolute;top:50%;left:50%;width:2px;height:5px;margin:-10px 0 0 -1px;background:#e8e8ea;border-radius:1px;animation:uiSpinFade 1.2s linear infinite;transform-origin:1px 10px}
  .ui-spinner span:nth-child(1){transform:rotate(0deg);animation-delay:-1.1s}
  .ui-spinner span:nth-child(2){transform:rotate(30deg);animation-delay:-1s}
  .ui-spinner span:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}
  .ui-spinner span:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}
  .ui-spinner span:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}
  .ui-spinner span:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}
  .ui-spinner span:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}
  .ui-spinner span:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}
  .ui-spinner span:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}
  .ui-spinner span:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}
  .ui-spinner span:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}
  .ui-spinner span:nth-child(12){transform:rotate(330deg);animation-delay:0s}
  @keyframes uiSpinFade{0%{opacity:1}100%{opacity:.15}}
  .ui-spinner__label{letter-spacing:-.01em}
</style>`,
    },
    {
      name: 'Skeleton Loader',
      nameJa: 'スケルトンローダー',
      desc: 'コンテンツ読み込み中に表示する灰色のシルエット。',
      detail: 'スケルトンローダーは、コンテンツが読み込まれる前に、おおまかな形だけを灰色の四角や帯で表示しておくUIです。「ここに画像が入る」「ここにタイトルが入る」と骨格(スケルトン)を見せておくことで、いきなりレイアウトがガタッと変わるのを防ぎ、待ち時間を短く感じさせる効果があります。FacebookやYouTube、各種ニュースアプリで広く採用されており、シンプルなスピナーよりも体感速度が良いとされています。',
      descEn: 'A gray placeholder shape shown while real content is loading.',
      detailEn: 'A skeleton loader shows the rough silhouette of upcoming content as gray boxes and bars while data is loading. By previewing the layout — "image goes here, title goes there" — it prevents jarring shifts when the real content arrives, and makes the wait feel shorter. Facebook, YouTube, and many news apps use this technique because it generally feels faster than a plain spinner, even when actual loading time is the same.',
      code: `<!-- Inspired by YouTube grid loading -->
<div class="ui-skeleton-grid">
  <div class="ui-skeleton-card">
    <div class="ui-skeleton ui-skeleton--thumb"></div>
    <div class="ui-skeleton-card__meta">
      <div class="ui-skeleton ui-skeleton--avatar"></div>
      <div class="ui-skeleton-card__lines">
        <div class="ui-skeleton ui-skeleton--title" style="width:95%"></div>
        <div class="ui-skeleton ui-skeleton--title" style="width:70%"></div>
        <div class="ui-skeleton ui-skeleton--sub" style="width:55%"></div>
        <div class="ui-skeleton ui-skeleton--sub" style="width:40%"></div>
      </div>
    </div>
  </div>
  <div class="ui-skeleton-card">
    <div class="ui-skeleton ui-skeleton--thumb"></div>
    <div class="ui-skeleton-card__meta">
      <div class="ui-skeleton ui-skeleton--avatar"></div>
      <div class="ui-skeleton-card__lines">
        <div class="ui-skeleton ui-skeleton--title" style="width:88%"></div>
        <div class="ui-skeleton ui-skeleton--title" style="width:62%"></div>
        <div class="ui-skeleton ui-skeleton--sub" style="width:48%"></div>
        <div class="ui-skeleton ui-skeleton--sub" style="width:35%"></div>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-skeleton-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px 20px;max-width:580px;padding:16px;background:#0f0f0f;border-radius:12px;font:14px Roboto,Arial,sans-serif}
  .ui-skeleton-card{display:flex;flex-direction:column;gap:12px}
  .ui-skeleton{background:#272727;background-image:linear-gradient(90deg,#272727 0%,#3a3a3a 50%,#272727 100%);background-size:200% 100%;border-radius:4px;animation:uiShimmer 1.6s ease-in-out infinite}
  .ui-skeleton--thumb{aspect-ratio:16/9;border-radius:12px}
  .ui-skeleton--avatar{width:36px;height:36px;border-radius:50%;flex:none}
  .ui-skeleton-card__meta{display:flex;gap:12px}
  .ui-skeleton-card__lines{flex:1;display:flex;flex-direction:column;gap:6px}
  .ui-skeleton--title{height:14px;border-radius:3px}
  .ui-skeleton--sub{height:11px;border-radius:3px;margin-top:2px}
  @keyframes uiShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
</style>`,
    },
  ],
}
