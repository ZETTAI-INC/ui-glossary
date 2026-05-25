/**
 * UI Parts Showcase (Creator & Content) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-creator-content',
  title: 'クリエイター・コンテンツUI',
  titleEn: 'Creator & Content UI',
  description: 'Medium・Substack・Note・Zenn・YouTube Studio などのクリエイター/読みもの系サービスでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Article Card',
      nameJa: '記事カード(Medium風)',
      desc: 'タイトル+リード+著者行+読了時間を左に、サムネを右に配置した記事一覧用カード。',
      detail: 'Medium や Substack のフィードでお馴染みの横長記事カードです。左側に「著者名+発信元」「タイトル」「リード(冒頭)」「日付・読了時間・反応数」を、右側に正方形のサムネイル画像を置く構成が定番です。情報の優先度を縦に並べることで、ぱっと見でタイトルが目に入り、興味があれば下のリードや読了時間で判断できます。一覧画面でもクリック先がイメージしやすい、読みもの系サービスの王道レイアウトです。',
      descEn: 'A horizontal article card with title, dek, author row, and read time on the left and a thumbnail on the right.',
      detailEn: 'This is the workhorse article card you see all over Medium and Substack feeds. The left column stacks author + publication, the headline, a one-line dek, and a meta row with date, read time, and reactions; the right column shows a square thumbnail. Vertical priority means the title hits first, with supporting info close enough to scan. Itʼs a clean, scannable layout that has become the default look of long-form reading apps.',
      code: `<!-- Inspired by Medium -->
<article class="ui-ac-card">
  <div class="ui-ac-body">
    <div class="ui-ac-author">
      <span class="ui-ac-avatar" aria-hidden="true">SK</span>
      <span class="ui-ac-author__name">Sarah Kim</span>
      <span class="ui-ac-author__pub">in <b>UX Collective</b></span>
    </div>
    <h3 class="ui-ac-title">The quiet death of the hamburger menu</h3>
    <p class="ui-ac-dek">After a decade of hiding navigation behind three lines, designers are finally bringing the most-used links back to the surface — and users are noticing.</p>
    <div class="ui-ac-meta">
      <span class="ui-ac-meta__date">May 14</span>
      <span class="ui-ac-meta__dot">·</span>
      <span class="ui-ac-meta__read">8 min read</span>
      <span class="ui-ac-meta__dot">·</span>
      <span class="ui-ac-meta__clap">👏 1.2K</span>
      <span class="ui-ac-meta__dot">·</span>
      <span class="ui-ac-meta__cmt">💬 47</span>
    </div>
  </div>
  <div class="ui-ac-thumb" aria-hidden="true">
    <svg viewBox="0 0 100 100" width="100%" height="100%"><defs><linearGradient id="acg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd479"/><stop offset="1" stop-color="#ff6f61"/></linearGradient></defs><rect width="100" height="100" fill="url(#acg)"/><circle cx="72" cy="30" r="14" fill="#fff" opacity=".85"/><path d="M0 78 L34 52 L58 70 L100 40 L100 100 L0 100 Z" fill="#5b2a86" opacity=".7"/></svg>
  </div>
</article>

<style>
  .ui-ac-card{display:flex;gap:24px;align-items:flex-start;max-width:560px;padding:20px 0;border-bottom:1px solid #e6e6e6;font:16px Charter,Georgia,serif;color:#242424;background:#fff}
  .ui-ac-body{flex:1;min-width:0}
  .ui-ac-author{display:flex;align-items:center;gap:6px;font:13px -apple-system,"Segoe UI",sans-serif;color:#242424;margin-bottom:6px}
  .ui-ac-avatar{width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#1a8917,#0f5d10);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:600}
  .ui-ac-author__name{font-weight:500}
  .ui-ac-author__pub{color:#6b6b6b}
  .ui-ac-author__pub b{color:#242424;font-weight:500}
  .ui-ac-title{margin:0 0 4px;font:700 20px/1.24 sohne,Helvetica,sans-serif;letter-spacing:-.012em;color:#191919}
  .ui-ac-dek{margin:0 0 12px;font:16px/1.4 sohne,Helvetica,sans-serif;color:#6b6b6b;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .ui-ac-meta{display:flex;align-items:center;gap:6px;font:13px -apple-system,"Segoe UI",sans-serif;color:#6b6b6b;flex-wrap:wrap}
  .ui-ac-meta__dot{opacity:.6}
  .ui-ac-thumb{flex:none;width:112px;height:112px;border-radius:4px;overflow:hidden;background:#f2f2f2}
</style>`,
    },
    {
      name: 'Reading Progress Bar',
      nameJa: '記事の読了プログレスバー',
      desc: 'ページ上端に張り付き、スクロール量に応じて伸びる読了率インジケータ。',
      detail: '記事の長文ページで「あとどれくらい残っているか」を視覚的に伝える、ページ上端の細いバーです。スクロールに合わせて左から右へ伸びていき、100%まで読み切るとバーが満ちます。Medium、Note、Zenn、Substack などのリーダー系サービスで標準装備になりつつあり、長文への心理的ハードルを下げ、読了率を上げる効果があります。色を記事のテーマカラーに合わせるとブランド感も出せます。',
      descEn: 'A thin progress strip pinned to the top of the page that fills as the reader scrolls down.',
      detailEn: 'This is the slim bar at the very top of a long-form page that fills from left to right as you scroll, hitting 100% when you reach the end. Medium, Substack, and Zenn all use it to give readers a quick sense of "how much is left" — which lowers the activation energy of a long piece and tends to lift read-through rates. Itʼs cheap to implement and reads as a polished editorial touch; tinting the fill in your brand color makes the article feel intentional.',
      code: `<!-- Inspired by Medium -->
<div class="ui-rp-wrap">
  <div class="ui-rp-bar"><div class="ui-rp-fill" id="rpFill"></div></div>
  <div class="ui-rp-fakebrowser">
    <div class="ui-rp-chrome"><span></span><span></span><span></span></div>
    <div class="ui-rp-page" id="rpPage">
      <h1>Why I stopped reading product blogs</h1>
      <p>For three years, I subscribed to 47 newsletters. Every morning I would brew coffee, open my reader, and watch the count climb past 100 unread items by Wednesday.</p>
      <p>The problem wasnʼt the writing — the problem was the volume. I was optimizing for novelty instead of depth, and my own work suffered because of it.</p>
      <p>So in January I unsubscribed from everything except three. Hereʼs what changed in six months, and why I think most knowledge workers should do the same.</p>
      <p>First, my mornings got their teeth back. Without a queue to clear, I started writing again before I started reading.</p>
      <p>Second, I noticed I remembered more from the three I kept. Repetition matters; signal compounds.</p>
      <p>Third — and this surprised me — I stopped feeling behind. The fear of missing out turned out to be mostly fake.</p>
    </div>
  </div>
</div>

<style>
  .ui-rp-wrap{max-width:520px;font:15px Charter,Georgia,serif;color:#242424;border:1px solid #e6e6e6;border-radius:8px;overflow:hidden;background:#fff}
  .ui-rp-bar{position:relative;height:3px;background:#f0f0f0}
  .ui-rp-fill{height:100%;width:18%;background:linear-gradient(90deg,#1a8917,#0f5d10);transition:width .12s linear}
  .ui-rp-fakebrowser{background:#fff}
  .ui-rp-chrome{display:flex;gap:6px;padding:8px 12px;background:#fafafa;border-bottom:1px solid #eee}
  .ui-rp-chrome span{width:10px;height:10px;border-radius:50%;background:#e6e6e6}
  .ui-rp-chrome span:nth-child(1){background:#ff5f57}
  .ui-rp-chrome span:nth-child(2){background:#febc2e}
  .ui-rp-chrome span:nth-child(3){background:#28c840}
  .ui-rp-page{height:220px;overflow-y:auto;padding:18px 22px;line-height:1.55}
  .ui-rp-page h1{font:700 20px/1.25 sohne,Helvetica,sans-serif;margin:0 0 12px;color:#191919}
  .ui-rp-page p{margin:0 0 12px;color:#3a3a3a}
</style>

<script>
  (function(){
    const page=document.getElementById('rpPage');
    const fill=document.getElementById('rpFill');
    page.addEventListener('scroll',()=>{
      const max=page.scrollHeight-page.clientHeight;
      const pct=max>0?(page.scrollTop/max)*100:0;
      fill.style.width=Math.max(2,pct).toFixed(1)+'%';
    });
  })();
</script>`,
    },
    {
      name: 'Highlight Tooltip',
      nameJa: 'テキスト選択ツールチップ',
      desc: '本文を選択するとふわっと現れる、ハイライト/共有/メモのポップオーバー。',
      detail: 'Medium や Kindle、Substack の Web 版で本文をドラッグ選択すると、選択範囲の上に小さく現れるポップオーバーです。「ハイライト」「シェア」「コメント/メモ」の3〜4個のアクションボタンを横一列に並べる構成が定番で、読者が気になった一節をそのまま保存・共有できます。読了体験を切らないインライン操作で、SNS への引用 RT・読書ログ機能の入り口として機能します。',
      descEn: 'A floating popover that appears above selected text with Highlight, Share, and Note actions.',
      detailEn: 'When you drag-select text in Medium, Substack, or the Kindle web reader, a small popover floats above your selection with a few inline actions — usually Highlight, Share, and Note/Comment. Itʼs an in-context way to save or quote a passage without breaking your reading flow, and it doubles as the entry point to social features like "quote tweet this paragraph" and reading-log highlights. Done well, it feels like the page is reacting to you in real time.',
      code: `<!-- Inspired by Medium -->
<div class="ui-ht-wrap">
  <p class="ui-ht-text">In the end, the best products are not the ones with the most features but <mark class="ui-ht-sel">the ones that respect your time the most</mark>. Everything else is just decoration.</p>
  <div class="ui-ht-pop" role="toolbar">
    <button type="button" class="ui-ht-btn" title="Highlight"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 17l9-9 4 4-9 9H5v-4z"/></svg><span>Highlight</span></button>
    <span class="ui-ht-sep"></span>
    <button type="button" class="ui-ht-btn" title="Share"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg><span>Share</span></button>
    <span class="ui-ht-sep"></span>
    <button type="button" class="ui-ht-btn" title="Note"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5z"/></svg><span>Note</span></button>
    <span class="ui-ht-arrow"></span>
  </div>
</div>

<style>
  .ui-ht-wrap{position:relative;max-width:480px;padding:36px 24px 24px;font:18px/1.55 Charter,Georgia,serif;color:#242424;background:#fff;border:1px solid #e6e6e6;border-radius:8px}
  .ui-ht-text{margin:0}
  .ui-ht-sel{background:#fff3a3;color:#191919;padding:0;border-radius:1px}
  .ui-ht-pop{position:absolute;left:36px;top:60px;display:inline-flex;align-items:center;gap:0;padding:6px 4px;background:#191919;color:#fff;border-radius:6px;box-shadow:0 8px 24px rgba(0,0,0,.18);font:13px -apple-system,"Segoe UI",sans-serif}
  .ui-ht-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border:0;background:transparent;color:#fff;cursor:pointer;border-radius:4px;font:500 13px -apple-system,sans-serif}
  .ui-ht-btn:hover{background:rgba(255,255,255,.12)}
  .ui-ht-sep{width:1px;height:18px;background:rgba(255,255,255,.18)}
  .ui-ht-arrow{position:absolute;left:36px;bottom:-6px;width:12px;height:12px;background:#191919;transform:rotate(45deg);border-radius:1px}
</style>`,
    },
    {
      name: 'Author Byline',
      nameJa: '著者バイライン',
      desc: '丸いアバター+名前+小さなFollowボタン+日付・読了時間が並んだ記事冒頭の著者行。',
      detail: '記事タイトル直下に置かれる、執筆者を紹介する横一列の行です。丸いアバター画像、太字の著者名、小さな「Follow」ボタン、その下の段に「投稿日 · 読了時間」を並べる構成が Medium・Substack・Note でほぼ共通の作法になっています。読者が「この人をこれからも読みたい」と思った瞬間に1クリックでフォローできる導線として重要で、ニュースレター系サービスでは購読者獲得の最重要パーツでもあります。',
      descEn: 'A round avatar, name, small Follow button, and date/read-time row that sits under the article title.',
      detailEn: 'This is the row that lives just under an article title — round avatar, bold name, a small "Follow" button, and a second line with the publish date and read time. Medium, Substack, and Note all converge on roughly this layout, because itʼs the moment a reader decides whether they want more from this writer. A tiny, one-click follow at exactly the right point in the page is one of the highest-leverage UI patterns on the modern creator web.',
      code: `<!-- Inspired by Substack -->
<div class="ui-by-wrap">
  <h1 class="ui-by-title">How I outlined my first novel in 3 weekends</h1>
  <div class="ui-by-row">
    <div class="ui-by-avatar" aria-hidden="true">EM</div>
    <div class="ui-by-info">
      <div class="ui-by-line1">
        <span class="ui-by-name">Elena Martín</span>
        <button class="ui-by-follow" type="button">Follow</button>
      </div>
      <div class="ui-by-line2">
        <span>Published May 12</span>
        <span class="ui-by-dot">·</span>
        <span>11 min read</span>
        <span class="ui-by-dot">·</span>
        <span class="ui-by-paid">For paid subscribers</span>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-by-wrap{max-width:520px;padding:24px;font:16px Charter,Georgia,serif;color:#242424;background:#fff;border:1px solid #ececec;border-radius:8px}
  .ui-by-title{margin:0 0 18px;font:700 26px/1.2 "Spectral",Georgia,serif;letter-spacing:-.01em;color:#0d0d0d}
  .ui-by-row{display:flex;align-items:center;gap:12px}
  .ui-by-avatar{flex:none;width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#ff7a59,#c9416e);color:#fff;display:flex;align-items:center;justify-content:center;font:600 15px -apple-system,sans-serif;letter-spacing:.02em}
  .ui-by-info{flex:1;min-width:0}
  .ui-by-line1{display:flex;align-items:center;gap:10px;margin-bottom:2px}
  .ui-by-name{font:600 15px -apple-system,"Segoe UI",sans-serif;color:#1a1a1a}
  .ui-by-follow{padding:3px 10px;border:1px solid #1a1a1a;background:#1a1a1a;color:#fff;border-radius:999px;font:600 12px -apple-system,sans-serif;cursor:pointer;letter-spacing:.02em}
  .ui-by-follow:hover{background:#3a3a3a;border-color:#3a3a3a}
  .ui-by-line2{display:flex;align-items:center;gap:6px;font:13px -apple-system,sans-serif;color:#6b6b6b}
  .ui-by-dot{opacity:.5}
  .ui-by-paid{color:#c9416e;font-weight:500}
</style>`,
    },
    {
      name: 'Newsletter Subscribe Card',
      nameJa: 'ニュースレター購読カード(Substack風)',
      desc: 'タイトル+リード+メール入力+Subscribeボタンの、購読フォームの定番カード。',
      detail: 'Substack や Beehiiv、Note ですっかり標準になった、メール購読のための囲みカードです。「ニュースレターのタイトル」「短いリード文(発行頻度や内容)」「メールアドレス入力欄」「Subscribeボタン」の4要素を縦に積むだけで、購読率の高いフォームになります。記事末尾・記事中・サイドバーなど色々な場所に挿し込まれ、読者が「気に入ったまま離脱しない」ための重要なリテンション部品です。',
      descEn: 'A boxed signup card with title, lead, email field, and a Subscribe button — the Substack-style classic.',
      detailEn: 'This is the boxed email signup card that Substack made ubiquitous and Beehiiv copied. Itʼs just four stacked elements — newsletter name, a short lead that sets expectations (cadence, topic), an email input, and a Subscribe button — but those four are enough to convert. You can drop it at the end of an article, mid-stream, or in a sidebar; itʼs the workhorse retention surface of the modern creator web, because it captures intent at the exact moment a reader is still warm.',
      code: `<!-- Inspired by Substack -->
<form class="ui-ns-card" onsubmit="event.preventDefault()">
  <div class="ui-ns-mark" aria-hidden="true">📬</div>
  <h3 class="ui-ns-title">The Weekend Read</h3>
  <p class="ui-ns-lead">One long-form essay on tech, taste, and craft. Every Saturday morning. No ads, no AI summaries. Currently read by 24,318 thoughtful people.</p>
  <div class="ui-ns-row">
    <input aria-label="your@email.com" type="email" class="ui-ns-input" placeholder="your@email.com" required>
    <button class="ui-ns-btn" type="submit">Subscribe</button>
  </div>
  <p class="ui-ns-foot">Free · No spam · Unsubscribe anytime</p>
</form>

<style>
  .ui-ns-card{max-width:440px;padding:28px 26px;background:#fff;border:1px solid #e6e6e6;border-radius:10px;font:15px -apple-system,"Segoe UI",sans-serif;color:#1a1a1a;text-align:center;box-shadow:0 1px 0 rgba(0,0,0,.02)}
  .ui-ns-mark{font-size:30px;line-height:1;margin-bottom:10px}
  .ui-ns-title{margin:0 0 8px;font:700 22px/1.2 "Spectral",Georgia,serif;color:#0d0d0d;letter-spacing:-.01em}
  .ui-ns-lead{margin:0 0 18px;color:#535353;line-height:1.5;font-size:14.5px}
  .ui-ns-row{display:flex;gap:8px;margin-bottom:10px}
  .ui-ns-input{flex:1;min-width:0;padding:10px 12px;border:1px solid #d4d4d4;border-radius:6px;font:14px -apple-system,sans-serif;color:#1a1a1a;background:#fff;outline:none}
  .ui-ns-input:focus{border-color:#ff6719;box-shadow:0 0 0 3px rgba(255,103,25,.15)}
  .ui-ns-btn{padding:10px 18px;border:0;background:#ff6719;color:#fff;font:600 14px -apple-system,sans-serif;border-radius:6px;cursor:pointer;white-space:nowrap}
  .ui-ns-btn:hover{background:#e85a10}
  .ui-ns-foot{margin:0;font-size:12px;color:#8a8a8a}
</style>`,
    },
    {
      name: 'Table of Contents',
      nameJa: '目次(スティッキーサイドバー)',
      desc: '記事本文の右に固定表示される、H2/H3アンカーの縦リスト。現在地がハイライト。',
      detail: '長文記事のサイドに「貼り付いて動かない」目次リストです。本文の見出し(H2/H3)を縦に並べ、スクロール位置に合わせて現在読んでいる見出しを左のバーや太字でハイライトします。Zenn、Qiita、Notion、Mintlify、各種ドキュメントサイトで広く採用されており、長いチュートリアルや解説記事で読者が「今どこを読んでいるか」を見失わないための地図役を果たします。クリックで該当セクションへスムーススクロールするのがお作法です。',
      descEn: 'A sticky sidebar list of H2/H3 anchors that highlights your current section as you scroll.',
      detailEn: 'This is the "sticks to the side of the screen" outline you see next to long articles on Zenn, Qiita, Notion, and most documentation sites. It lists the H2/H3 headings of the current page and highlights whichever one youʼre currently reading — usually with a colored left bar and a bolder weight. For long tutorials, it functions as a tiny map: readers always know where they are and can jump sections with a click. Smooth-scrolling to the target is part of the expected feel.',
      code: `<!-- Inspired by Zenn -->
<aside class="ui-toc">
  <div class="ui-toc__label">On this page</div>
  <ul class="ui-toc__list">
    <li class="ui-toc__item"><a href="#s1">Why we rebuilt the editor</a></li>
    <li class="ui-toc__item ui-toc__item--active"><a href="#s2">The three core principles</a>
      <ul class="ui-toc__sub">
        <li class="ui-toc__item"><a href="#s2-1">Latency over features</a></li>
        <li class="ui-toc__item ui-toc__item--active ui-toc__item--sub-active"><a href="#s2-2">Plain text first</a></li>
        <li class="ui-toc__item"><a href="#s2-3">Offline as default</a></li>
      </ul>
    </li>
    <li class="ui-toc__item"><a href="#s3">Architecture overview</a></li>
    <li class="ui-toc__item"><a href="#s4">Migration path</a></li>
    <li class="ui-toc__item"><a href="#s5">Whatʼs next</a></li>
  </ul>
</aside>

<style>
  .ui-toc{max-width:260px;padding:16px 18px;font:13px -apple-system,"Segoe UI",sans-serif;color:#5b6068;background:#fff;border-left:1px solid #e3e6eb}
  .ui-toc__label{font-size:11px;font-weight:700;color:#8a8f96;letter-spacing:.08em;text-transform:uppercase;margin-bottom:10px}
  .ui-toc__list,.ui-toc__sub{list-style:none;margin:0;padding:0}
  .ui-toc__item{position:relative}
  .ui-toc__item a{display:block;padding:5px 12px;color:#5b6068;text-decoration:none;border-left:2px solid transparent;line-height:1.4;transition:color .12s}
  .ui-toc__item a:hover{color:#1a1a1a}
  .ui-toc__item--active>a{color:#3ea8ff;font-weight:600;border-left-color:#3ea8ff;background:rgba(62,168,255,.06)}
  .ui-toc__sub{margin:2px 0 4px}
  .ui-toc__sub .ui-toc__item a{padding-left:24px;font-size:12.5px;color:#7a7f87}
  .ui-toc__item--sub-active>a{color:#3ea8ff;font-weight:600;border-left-color:#3ea8ff;background:rgba(62,168,255,.06)}
</style>`,
    },
    {
      name: 'Clap Button',
      nameJa: '拍手ボタン(Medium claps)',
      desc: '押すたびにカウンタがふわっと増える、拍手アイコンのリアクションボタン。',
      detail: 'Medium が普及させた「いいね」の進化版で、押した回数(0〜50回)だけカウントが増えていく拍手ボタンです。1人1拍手の単純な「いいね」と違い、「とても良い記事には連打できる」ことで読者の熱量を表現できます。押下時にアイコンがバウンドし、カウンタが小さくポップアップして「+1」が浮かぶアニメーションが定番。クリエイターへのフィードバック粒度を上げる工夫として、Note の「スキ」連打や YouTube の超いいねへも影響を与えました。',
      descEn: 'A clap-icon reaction button whose counter animates upward each time you tap it.',
      detailEn: 'Mediumʼs invention: a "like" you can press up to 50 times, so a great essay gets a clap-storm and a so-so one gets a polite single tap. The button bounces, the counter pops, and a tiny "+1" floats up on each press — giving readers a more granular way to express enthusiasm than a binary heart. The pattern influenced Noteʼs "スキ" multi-tap and YouTubeʼs super-thanks. Itʼs a small interaction with an outsized effect on how creators feel about their feedback.',
      code: `<!-- Inspired by Medium -->
<div class="ui-clap-wrap">
  <button class="ui-clap-btn" id="clapBtn" type="button" aria-label="Clap">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11V3"/><path d="M8 11V5"/><path d="M16 11V5"/><path d="M20 11V8"/><path d="M4 11V8"/><path d="M4 11c0 5 3.6 9 8 9s8-4 8-9"/></svg>
    <span class="ui-clap-count" id="clapCount">128</span>
    <span class="ui-clap-float" id="clapFloat">+1</span>
  </button>
  <span class="ui-clap-hint">Tap as many times as you like</span>
</div>

<style>
  .ui-clap-wrap{display:inline-flex;flex-direction:column;align-items:center;gap:8px;padding:20px 28px;background:#fff;border:1px solid #e6e6e6;border-radius:8px;font:13px -apple-system,"Segoe UI",sans-serif;color:#6b6b6b}
  .ui-clap-btn{position:relative;display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border:1px solid #1a8917;background:#fff;color:#1a8917;border-radius:999px;cursor:pointer;font:600 14px -apple-system,sans-serif;transition:transform .08s,background .15s}
  .ui-clap-btn:hover{background:#f0f9f0}
  .ui-clap-btn.is-pop{animation:ui-clap-bounce .32s ease}
  @keyframes ui-clap-bounce{0%{transform:scale(1)}30%{transform:scale(1.18)}60%{transform:scale(.96)}100%{transform:scale(1)}}
  .ui-clap-count{min-width:24px;text-align:left;font-variant-numeric:tabular-nums}
  .ui-clap-float{position:absolute;top:6px;right:14px;color:#1a8917;font:700 13px -apple-system,sans-serif;opacity:0;pointer-events:none}
  .ui-clap-float.is-go{animation:ui-clap-float .7s ease-out}
  @keyframes ui-clap-float{0%{opacity:0;transform:translateY(0)}20%{opacity:1}100%{opacity:0;transform:translateY(-24px)}}
  .ui-clap-hint{font-size:12px;color:#a3a3a3}
</style>

<script>
  (function(){
    const btn=document.getElementById('clapBtn');
    const cnt=document.getElementById('clapCount');
    const flt=document.getElementById('clapFloat');
    let n=128;
    btn.addEventListener('click',()=>{
      n+=1;cnt.textContent=n;
      btn.classList.remove('is-pop');void btn.offsetWidth;btn.classList.add('is-pop');
      flt.classList.remove('is-go');void flt.offsetWidth;flt.classList.add('is-go');
    });
  })();
</script>`,
    },
    {
      name: 'Comment Composer',
      nameJa: 'コメント入力欄',
      desc: 'アバター+自動拡張テキストエリア+Cancel/Commentボタンのコメント投稿カード。',
      detail: '記事下部やスレッドに置かれる、読者がコメントを書き始めるための入力カードです。左に自分のアバター、右に複数行入力可能なテキストエリア、その下に「Cancel」と主アクションの「Comment」ボタンを並べる構成が、Note・Medium・YouTube・Substack でほぼ共通になっています。フォーカスするまでは1行に縮んでいて、書き始めると自然に高さが伸びる「拡張型テキストエリア」と組み合わせるのが今風の定番です。',
      descEn: 'A composer card with avatar, auto-growing textarea, and Cancel / Comment buttons.',
      detailEn: 'This is the box that lets a reader leave a comment at the bottom of an article or thread. Left side: your avatar. Right side: a textarea that grows as you type, paired with a Cancel button and the primary Comment submit. Medium, Note, YouTube, and Substack have all settled on roughly this layout. The textarea usually starts as a single line and expands once the user focuses it — quiet when idle, generous when needed.',
      code: `<!-- Inspired by Medium -->
<form class="ui-cc-card" onsubmit="event.preventDefault()">
  <div class="ui-cc-row">
    <div class="ui-cc-avatar" aria-hidden="true">YK</div>
    <div class="ui-cc-box">
      <textarea class="ui-cc-input" id="ccInput" placeholder="What are your thoughts?" rows="1"></textarea>
      <div class="ui-cc-actions">
        <span class="ui-cc-hint">Markdown supported · Be kind</span>
        <div class="ui-cc-btns">
          <button class="ui-cc-btn ui-cc-btn--ghost" type="button">Cancel</button>
          <button class="ui-cc-btn ui-cc-btn--primary" type="submit">Comment</button>
        </div>
      </div>
    </div>
  </div>
</form>

<style>
  .ui-cc-card{max-width:520px;padding:18px;background:#fff;border:1px solid #e6e6e6;border-radius:10px;font:14px -apple-system,"Segoe UI",sans-serif;color:#1a1a1a}
  .ui-cc-row{display:flex;gap:12px;align-items:flex-start}
  .ui-cc-avatar{flex:none;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#5e6ad2,#3942a3);color:#fff;display:flex;align-items:center;justify-content:center;font:600 13px -apple-system,sans-serif}
  .ui-cc-box{flex:1;min-width:0;border:1px solid #d4d4d4;border-radius:8px;background:#fff;transition:border-color .15s,box-shadow .15s}
  .ui-cc-box:focus-within{border-color:#1a8917;box-shadow:0 0 0 3px rgba(26,137,23,.12)}
  .ui-cc-input{display:block;width:100%;padding:10px 12px;border:0;background:transparent;font:14px -apple-system,sans-serif;color:#1a1a1a;resize:none;outline:none;line-height:1.5;min-height:38px;box-sizing:border-box}
  .ui-cc-actions{display:flex;align-items:center;justify-content:space-between;padding:6px 10px 10px;gap:8px;flex-wrap:wrap}
  .ui-cc-hint{font-size:12px;color:#8a8a8a}
  .ui-cc-btns{display:inline-flex;gap:8px}
  .ui-cc-btn{padding:6px 14px;border-radius:999px;font:600 13px -apple-system,sans-serif;cursor:pointer;border:1px solid transparent}
  .ui-cc-btn--ghost{background:transparent;color:#6b6b6b}
  .ui-cc-btn--ghost:hover{color:#1a1a1a;background:#f4f4f4}
  .ui-cc-btn--primary{background:#1a8917;color:#fff}
  .ui-cc-btn--primary:hover{background:#15721a}
</style>

<script>
  (function(){
    const t=document.getElementById('ccInput');
    t.addEventListener('input',()=>{t.style.height='auto';t.style.height=Math.min(t.scrollHeight,180)+'px'});
  })();
</script>`,
    },
    {
      name: 'Share Rail',
      nameJa: '記事末尾の共有アイコン列',
      desc: 'Twitter/Threads/Bluesky/LinkedIn/コピーリンクが横並びになった共有列。',
      detail: '記事の最後やフッターに横一列で並ぶ、SNS 共有アイコンの集合です。「X(Twitter)」「Threads」「Bluesky」「LinkedIn」「リンクをコピー」など5〜6個程度のアイコンが、円形/角丸正方形のボタンで並びます。Medium・Note・Substack・各種ブログで標準装備となっており、読み終わったタイミングで読者を「拡散の側」に回す重要な導線です。Bluesky や Threads など新興 SNS のアイコンを早めに採用することで、技術系読者層との親和性も示せます。',
      descEn: 'A horizontal rail of share buttons — X, Threads, Bluesky, LinkedIn, and Copy link.',
      detailEn: 'This is the row of round share buttons that sits at the bottom of almost every long-form article — typically X (Twitter), Threads, Bluesky, LinkedIn, and "copy link." Medium, Note, and Substack all ship something close to this layout. Itʼs the conversion point where a reader becomes a distributor, so the icons need to be tappable, on-brand, and complete (missing your audienceʼs network is a quiet leak). Adding Bluesky and Threads early also signals "we know where readers actually are right now."',
      code: `<!-- Inspired by Substack -->
<div class="ui-sr-wrap">
  <div class="ui-sr-label">If you enjoyed this, share it</div>
  <div class="ui-sr-row">
    <button class="ui-sr-btn ui-sr-btn--x" title="Share on X" type="button">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.81l-4.78-6.27L4.8 22H2l7.02-8.02L2 2h6.91l4.3 5.7L18.244 2zm-1.18 18h1.84L7.04 4H5.05l12.014 16z"/></svg>
    </button>
    <button class="ui-sr-btn ui-sr-btn--th" title="Share on Threads" type="button">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.7 2 3 5.5 3 11.9c0 6.5 3.7 10.1 9 10.1 4.6 0 7.7-2.6 8.4-6.3.3-1.6.2-3.2-.6-4.3-1.1-1.6-3.3-2.5-5.5-2.4-2 0-3.5.8-4 2.1-.4 1 0 2.1.8 2.7.8.6 2 .6 2.7-.1.4-.4.4-.8.3-1.1.7-.1 1.4.2 1.7.7.2.4.2 1-.1 1.5-.6 1-2.2 1.5-3.5 1.4-2.4-.2-4.1-2-4.1-4.5 0-3 2.5-5.2 6-5.2 3.7 0 6.2 2.4 6.2 5.8 0 4-3 6.6-7.3 6.6V22z"/></svg>
    </button>
    <button class="ui-sr-btn ui-sr-btn--bs" title="Share on Bluesky" type="button">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 4c2 0 5 2.5 6 5 1-2.5 4-5 6-5 3 0 4 2 4 4.5 0 1.4-.5 2.5-1.6 3.4.7.5 1.1 1.3 1.1 2.3 0 2-1.5 4.8-5.5 4.8-2 0-3.3-.7-4-2-.7 1.3-2 2-4 2-4 0-5.5-2.8-5.5-4.8 0-1 .4-1.8 1.1-2.3C2.5 11 2 9.9 2 8.5 2 6 3 4 6 4z"/></svg>
    </button>
    <button class="ui-sr-btn ui-sr-btn--li" title="Share on LinkedIn" type="button">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.7 8.65 22 11 22 14.2V21h-4v-6c0-1.4-.03-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9z"/></svg>
    </button>
    <button class="ui-sr-btn ui-sr-btn--cp" id="srCp" title="Copy link" type="button">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>
      <span class="ui-sr-toast" id="srToast">Copied!</span>
    </button>
  </div>
</div>

<style>
  .ui-sr-wrap{max-width:480px;padding:18px 20px;background:#fff;border-top:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;font:13px -apple-system,"Segoe UI",sans-serif;color:#6b6b6b;text-align:center}
  .ui-sr-label{margin-bottom:12px;font-size:13px;color:#6b6b6b}
  .ui-sr-row{display:inline-flex;gap:10px;align-items:center;justify-content:center}
  .ui-sr-btn{position:relative;width:38px;height:38px;border-radius:50%;border:1px solid #e0e0e0;background:#fff;color:#1a1a1a;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .12s,background .15s,color .15s}
  .ui-sr-btn:hover{transform:translateY(-2px)}
  .ui-sr-btn--x:hover{background:#000;color:#fff;border-color:#000}
  .ui-sr-btn--th:hover{background:#1a1a1a;color:#fff;border-color:#1a1a1a}
  .ui-sr-btn--bs:hover{background:#0085ff;color:#fff;border-color:#0085ff}
  .ui-sr-btn--li:hover{background:#0a66c2;color:#fff;border-color:#0a66c2}
  .ui-sr-btn--cp:hover{background:#f4f4f4;color:#1a1a1a}
  .ui-sr-toast{position:absolute;top:-28px;left:50%;transform:translateX(-50%);padding:3px 8px;background:#1a1a1a;color:#fff;border-radius:4px;font-size:11px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s}
  .ui-sr-toast.is-show{opacity:1}
</style>

<script>
  (function(){
    const b=document.getElementById('srCp');
    const t=document.getElementById('srToast');
    b.addEventListener('click',()=>{
      t.classList.add('is-show');
      setTimeout(()=>t.classList.remove('is-show'),1100);
    });
  })();
</script>`,
    },
    {
      name: 'Membership Tier Card',
      nameJa: 'メンバーシップ料金カード(Patreon風)',
      desc: 'タイトル+月額+特典リスト+加入ボタンの、有料サポート用ティアカード。',
      detail: 'Patreon・Twitch・Note メンバーシップ・YouTube メンバーシップで使われる、有料サポートプランの紹介カードです。「ティア名」「月額(と通貨)」「同梱される特典の箇条書きリスト」「Become a member ボタン」を縦に積む構成が共通フォーマットになっています。チェックマーク付きで特典を並べると視認性が高く、複数ティアを横並びにすると上位プランへのアップセルもしやすくなります。クリエイターエコノミーで最も「お金が動く」UIのひとつです。',
      descEn: 'A tier card with title, monthly price, benefits list, and a Become-a-member CTA — Patreon-style.',
      detailEn: 'Patreon, Twitch, YouTube Memberships, and Note Memberships all share this layout: a tier name, a clear monthly price, a check-listed set of perks, and a single "Become a member" CTA. Stack them side-by-side and the upsell to higher tiers writes itself, because the eye scans down the bullet list and counts what each tier adds. Itʼs probably the most directly revenue-shaped UI in the entire creator economy, so itʼs worth getting the typography and rhythm right.',
      code: `<!-- Inspired by Patreon -->
<article class="ui-mt-card">
  <header class="ui-mt-head">
    <span class="ui-mt-badge">Most popular</span>
    <h3 class="ui-mt-name">Studio Supporter</h3>
    <div class="ui-mt-price"><span class="ui-mt-cur">$</span><span class="ui-mt-num">8</span><span class="ui-mt-per">/ month</span></div>
    <p class="ui-mt-lead">Behind-the-scenes access plus everything from the Friend tier.</p>
  </header>
  <ul class="ui-mt-list">
    <li><span class="ui-mt-ck">✓</span>Early access to every video, 48h before public</li>
    <li><span class="ui-mt-ck">✓</span>Monthly process recording (raw, unedited)</li>
    <li><span class="ui-mt-ck">✓</span>Private Discord channel with the team</li>
    <li><span class="ui-mt-ck">✓</span>Quarterly Q&A live stream</li>
    <li><span class="ui-mt-ck">✓</span>Name in the credits of every release</li>
  </ul>
  <button class="ui-mt-btn" type="button">Become a member</button>
  <p class="ui-mt-foot">Cancel anytime · 312 members at this tier</p>
</article>

<style>
  .ui-mt-card{position:relative;max-width:320px;padding:24px 22px;background:#fff;border:2px solid #f1465a;border-radius:14px;font:14px -apple-system,"Segoe UI",sans-serif;color:#1f1f1f;box-shadow:0 12px 30px -16px rgba(241,70,90,.45)}
  .ui-mt-head{margin-bottom:18px}
  .ui-mt-badge{position:absolute;top:-10px;left:20px;padding:3px 10px;background:#f1465a;color:#fff;font:600 11px -apple-system,sans-serif;letter-spacing:.04em;text-transform:uppercase;border-radius:999px}
  .ui-mt-name{margin:0 0 10px;font:700 18px -apple-system,sans-serif;color:#0d0d0d}
  .ui-mt-price{display:flex;align-items:baseline;gap:2px;margin-bottom:8px;color:#0d0d0d}
  .ui-mt-cur{font:600 18px -apple-system,sans-serif}
  .ui-mt-num{font:700 38px/1 -apple-system,sans-serif;letter-spacing:-.02em}
  .ui-mt-per{font:500 13px -apple-system,sans-serif;color:#6b6b6b;margin-left:4px}
  .ui-mt-lead{margin:0;color:#535353;line-height:1.45;font-size:13.5px}
  .ui-mt-list{list-style:none;margin:0 0 20px;padding:16px 0;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;display:flex;flex-direction:column;gap:10px}
  .ui-mt-list li{display:flex;align-items:flex-start;gap:10px;line-height:1.4;font-size:13.5px;color:#1f1f1f}
  .ui-mt-ck{flex:none;width:18px;height:18px;border-radius:50%;background:#ffe7ea;color:#f1465a;display:inline-flex;align-items:center;justify-content:center;font:700 11px -apple-system,sans-serif;margin-top:1px}
  .ui-mt-btn{display:block;width:100%;padding:11px;border:0;background:#f1465a;color:#fff;font:600 14px -apple-system,sans-serif;border-radius:999px;cursor:pointer;transition:background .15s}
  .ui-mt-btn:hover{background:#dd2a40}
  .ui-mt-foot{margin:10px 0 0;text-align:center;font-size:12px;color:#8a8a8a}
</style>`,
    },
  ],
}
