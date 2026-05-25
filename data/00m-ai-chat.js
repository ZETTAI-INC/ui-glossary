/**
 * UI Parts Showcase (AI Chat) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-ai-chat',
  title: 'AIチャットUI',
  titleEn: 'AI Chat UI',
  description: 'ChatGPT・Claude・Gemini・Perplexity などのAIチャットでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'User Message Bubble',
      nameJa: 'ユーザーメッセージ吹き出し',
      desc: '右寄せ・ブランドカラーの背景で、自分が送ったメッセージを表す吹き出し。',
      detail: 'AIチャットでは「自分の発言」と「AIの返答」を視覚的に区別するため、ユーザーの吹き出しは右側に寄せ、薄いグレーや淡いブランドカラーの背景を敷くのが定番です。文字色は黒のまま、角丸は12〜18px程度で、長文でも読みやすいよう左右の余白を広めに取ります。送信時刻は出さず、本文だけを見せるスタイルがChatGPT系で主流です。会話の主役はAIの回答なので、ユーザー側はあえて装飾を抑えて「視線を奪わない」のがコツです。',
      descEn: 'A right-aligned bubble with a brand-tinted background that represents what you just sent.',
      detailEn: 'AI chat UIs visually separate "what you said" from "what the AI said" by pushing the user bubble to the right and giving it a soft gray or pale brand-color background. Text stays black, corners are rounded around 12–18px, and generous horizontal padding keeps long prompts readable. Most ChatGPT-style products skip the timestamp on individual bubbles and just show the message body. Since the AI reply is the main event, the user bubble stays intentionally quiet so it does not steal the eye.',
      code: `<!-- Inspired by ChatGPT -->
<div class="ui-um-wrap">
  <div class="ui-um-row">
    <div class="ui-um-bubble">Explain transformer attention in plain English, like I'm a junior dev.</div>
  </div>
  <div class="ui-um-row">
    <div class="ui-um-bubble">Also, give me a tiny PyTorch example at the end please.</div>
  </div>
</div>

<style>
  .ui-um-wrap{max-width:520px;padding:24px;background:#fff;font:15px/1.55 -apple-system,"Segoe UI",Söhne,Helvetica,sans-serif;color:#0d0d0d}
  .ui-um-row{display:flex;justify-content:flex-end;margin-bottom:10px}
  .ui-um-bubble{max-width:78%;padding:10px 16px;background:#f4f4f4;border-radius:22px;color:#0d0d0d;white-space:pre-wrap}
</style>`,
    },
    {
      name: 'Assistant Message Bubble',
      nameJa: 'アシスタントメッセージ吹き出し',
      desc: '左側にアバター、本文は背景なしで地の文として読ませるAI返答スタイル。',
      detail: 'AIアシスタントの返答は、ユーザー側と違って吹き出しの背景を持たず、ページの地の文のようにすっと配置されるのがChatGPT・Claude系の特徴です。左側に小さな丸いアバター(ロゴマーク)を置き、本文は行間広めで読み物として成立する組版にします。長い回答を吹き出しで囲むと読みづらくなるため、あえて枠を外して「ドキュメントを読んでいる感覚」に寄せているのがポイントです。返答の下に再生成やコピーなどのアクションを並べる構造になります。',
      descEn: 'A left-aligned reply with a small avatar, where the body has no bubble background and reads like flowing prose.',
      detailEn: 'Unlike user messages, AI replies in ChatGPT and Claude do not sit in a bubble — the text flows on the page like body copy. A small circular logo avatar sits on the left, and the message uses a generous line-height so long answers stay readable. Wrapping a multi-paragraph response in a bubble would feel cramped, so designers drop the background entirely and lean into a "document-style" reading experience. Action buttons (regenerate, copy) typically sit just below the reply.',
      code: `<!-- Inspired by Claude -->
<div class="ui-am-wrap">
  <div class="ui-am-row">
    <div class="ui-am-avatar" aria-hidden="true">
      <svg viewBox="0 0 32 32" width="22" height="22"><path fill="#fff" d="M9 22l4.6-12h2.1L20.3 22h-2.2l-1.1-3h-4.7l-1.1 3H9zm4-4.7h3.5l-1.75-4.8L13 17.3z"/></svg>
    </div>
    <div class="ui-am-body">
      <p>Sure — at a high level, attention lets each word in a sentence "look at" every other word and decide which ones matter for its meaning.</p>
      <p>Imagine you're reading the sentence <i>"The cat that the dog chased ran away."</i> To figure out who <i>ran away</i>, your brain quickly glances back at <i>cat</i>, not <i>dog</i>. That glance is attention.</p>
    </div>
  </div>
</div>

<style>
  .ui-am-wrap{max-width:560px;padding:24px;background:#faf9f5;font:15.5px/1.65 ui-serif,Georgia,"Charter",serif;color:#2c2b28}
  .ui-am-row{display:flex;gap:14px;align-items:flex-start}
  .ui-am-avatar{flex:none;width:28px;height:28px;border-radius:50%;background:#d97757;display:grid;place-items:center;margin-top:2px}
  .ui-am-body p{margin:0 0 12px}
  .ui-am-body p:last-child{margin-bottom:0}
  .ui-am-body i{font-style:italic;color:#2c2b28}
</style>`,
    },
    {
      name: 'Streaming Cursor',
      nameJa: 'ストリーミングカーソル',
      desc: '生成中のテキストの末尾で点滅する小さな縦棒。AIが今まさに書いている感を出す。',
      detail: 'AIチャットの返答は1文字ずつ流れてくる「ストリーミング表示」が主流で、その末尾で四角や縦棒が点滅していると「今リアルタイムで考えながら書いている」という臨場感が生まれます。点滅は0.8〜1.2秒周期、色は本文と同じか少し濃い目にして、生成が終わったタイミングでスッと消すのが基本です。完全な静止画面より遥かに「待っていて楽しい」体験になり、レスポンス遅延を体感的に短く感じさせる効果もあります。',
      descEn: 'A small blinking caret pinned to the tail of streaming text — it makes the AI feel like it is typing live.',
      detailEn: 'Most AI chats stream replies one token at a time, and a blinking square or bar at the very end sells the illusion that the model is thinking and typing in real time. A 0.8–1.2s blink cycle in a color matching (or slightly stronger than) the body text works well, and you should hide it the instant generation stops. The effect makes the wait far more enjoyable than a static "loading…" and even makes perceived latency shorter — the user sees progress, not silence.',
      code: `<!-- Inspired by ChatGPT -->
<div class="ui-sc-wrap">
  <p class="ui-sc-text">
    The key idea behind transformer attention is that every token in a sequence can directly query every other token, weight them by relevance, and combine their values into a new<span class="ui-sc-caret"></span>
  </p>
</div>

<style>
  .ui-sc-wrap{max-width:520px;padding:24px;background:#fff;font:15.5px/1.65 -apple-system,"Segoe UI",Söhne,sans-serif;color:#0d0d0d}
  .ui-sc-text{margin:0}
  .ui-sc-caret{display:inline-block;width:9px;height:18px;background:#0d0d0d;margin-left:2px;vertical-align:-3px;border-radius:1px;animation:ui-sc-blink 1.05s steps(2,end) infinite}
  @keyframes ui-sc-blink{0%,49%{opacity:1}50%,100%{opacity:0}}
</style>`,
    },
    {
      name: 'Prompt Suggestion Chips',
      nameJa: 'プロンプト候補チップ',
      desc: '会話のはじめに並ぶ「こんなこと聞いてみよう」のクリッカブルなお題集。',
      detail: 'チャットを開いた直後の真っ白な入力欄は初心者ほど何を聞けばいいか戸惑うため、ChatGPT・Claude・Gemini などは「文章を要約して」「アイデアを出して」のような例文をカード状に並べておすすめします。アイコン+短いタイトル+補足文の3点セットがテンプレで、クリックすると入力欄にそのプロンプトが流し込まれます。グリッド配置で2×2や2×3にして、最初の発話のハードルを下げるのが目的です。会話が始まったら隠す動きとセットで使われます。',
      descEn: 'A grid of clickable starter prompts that show on an empty chat to help users get going.',
      detailEn: 'A blank input box is intimidating, especially for first-time users, so ChatGPT, Claude, and Gemini all greet you with a grid of card-style example prompts. The standard recipe is an icon, a short title, and a one-line subtitle — clicking one drops that prompt straight into the input. Laying them out as a 2×2 or 2×3 grid lowers the barrier to that all-important first message. These chips typically fade out the moment the conversation begins.',
      code: `<!-- Inspired by Gemini -->
<div class="ui-ps-wrap">
  <h2 class="ui-ps-hello">こんにちは、Shun さん<br><span>今日はどんなお手伝いをしましょうか?</span></h2>
  <div class="ui-ps-grid">
    <button type="button" class="ui-ps-chip">
      <span class="ui-ps-icon" style="background:linear-gradient(135deg,#4285f4,#9b72ff)">✦</span>
      <span class="ui-ps-title">プレゼン用の構成案を作って</span>
      <span class="ui-ps-sub">新規事業の社内ピッチ向け</span>
    </button>
    <button type="button" class="ui-ps-chip">
      <span class="ui-ps-icon" style="background:linear-gradient(135deg,#34a853,#7bd389)">📝</span>
      <span class="ui-ps-title">議事録を3行に要約</span>
      <span class="ui-ps-sub">長いMTG議事録を貼り付け</span>
    </button>
    <button type="button" class="ui-ps-chip">
      <span class="ui-ps-icon" style="background:linear-gradient(135deg,#ea4335,#fbbc04)">💡</span>
      <span class="ui-ps-title">アイデアを10個ください</span>
      <span class="ui-ps-sub">休日のカフェの集客案</span>
    </button>
    <button type="button" class="ui-ps-chip">
      <span class="ui-ps-icon" style="background:linear-gradient(135deg,#9b72ff,#ff7ab6)">🐍</span>
      <span class="ui-ps-title">Pythonコードをレビュー</span>
      <span class="ui-ps-sub">バグや改善点を指摘して</span>
    </button>
  </div>
</div>

<style>
  .ui-ps-wrap{max-width:600px;padding:28px;background:#fff;font:14.5px -apple-system,"Google Sans","Segoe UI",sans-serif;color:#1f1f1f}
  .ui-ps-hello{margin:0 0 24px;font-size:28px;line-height:1.25;font-weight:500;background:linear-gradient(90deg,#4285f4,#9b72ff,#ea4335);-webkit-background-clip:text;background-clip:text;color:transparent}
  .ui-ps-hello span{font-size:18px;color:#5f6368;-webkit-text-fill-color:#5f6368}
  .ui-ps-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  .ui-ps-chip{display:grid;grid-template-columns:32px 1fr;grid-template-rows:auto auto;gap:2px 12px;padding:14px;border:1px solid #e3e3e3;border-radius:14px;background:#fff;cursor:pointer;text-align:left;transition:.15s}
  .ui-ps-chip:hover{background:#f0f4f9;border-color:#dbe1e8}
  .ui-ps-icon{grid-row:1/3;width:32px;height:32px;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:15px}
  .ui-ps-title{font-weight:500;color:#1f1f1f;line-height:1.35}
  .ui-ps-sub{font-size:12.5px;color:#5f6368}
</style>`,
    },
    {
      name: 'Model Picker Dropdown',
      nameJa: 'モデル選択ドロップダウン',
      desc: '「GPT-4o / Claude 3.5 Sonnet」のように使うモデルを切り替えるセレクター。',
      detail: 'AIサービスでは性能・速度・価格の違う複数モデルを切り替えられるのが当たり前になり、画面上部にコンパクトなプルダウンを置くのが定番になりました。現在のモデル名を太字で表示し、下矢印をクリックすると一覧が開く構造です。各項目は「モデル名 / 用途の一言説明 / バッジ(NEW・Pro・Fast)」で構成され、選択中は左にチェック、Proモデルには鍵アイコンを添えるなどして無料/有料の境界を見せます。最上部に置くか、メッセージ送信ボタンの隣に置くかは製品次第です。',
      descEn: 'A compact selector that swaps between options like "GPT-4o" and "Claude 3.5 Sonnet".',
      detailEn: 'Modern AI products ship multiple models that trade off quality, speed, and price, so a compact picker at the top of the chat has become standard. The current model name shows in bold next to a small chevron, and clicking opens a list of alternatives. Each row pairs the model name with a one-line "what it is good at" caption and a small badge ("NEW", "Pro", or "Fast"); the active row gets a checkmark, while paid tiers often carry a lock icon. The picker lives in the header or right next to the send button depending on the product.',
      code: `<!-- Inspired by ChatGPT -->
<div class="ui-mp" id="mp">
  <button class="ui-mp__trigger" type="button">
    <span class="ui-mp__name">ChatGPT</span>
    <span class="ui-mp__sub">4o</span>
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="#0d0d0d" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </button>
  <div class="ui-mp__menu">
    <div class="ui-mp__item is-active">
      <div class="ui-mp__row"><b>GPT-4o</b><span class="ui-mp__check">✓</span></div>
      <div class="ui-mp__desc">Great for most questions</div>
    </div>
    <div class="ui-mp__item">
      <div class="ui-mp__row"><b>o1-preview</b><span class="ui-mp__badge">REASONING</span></div>
      <div class="ui-mp__desc">Uses advanced reasoning</div>
    </div>
    <div class="ui-mp__item">
      <div class="ui-mp__row"><b>GPT-4o mini</b><span class="ui-mp__badge ui-mp__badge--fast">FAST</span></div>
      <div class="ui-mp__desc">Faster for everyday tasks</div>
    </div>
    <div class="ui-mp__item ui-mp__item--locked">
      <div class="ui-mp__row"><b>GPT-4.5</b><span class="ui-mp__lock">🔒</span></div>
      <div class="ui-mp__desc">Research preview · Pro plan</div>
    </div>
  </div>
</div>

<style>
  .ui-mp{position:relative;display:inline-block;font:15px -apple-system,"Söhne","Segoe UI",sans-serif;color:#0d0d0d;padding:24px}
  .ui-mp__trigger{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border:0;background:transparent;border-radius:10px;cursor:pointer;font-weight:600;font-size:18px}
  .ui-mp__trigger:hover{background:#f4f4f4}
  .ui-mp__sub{font-weight:400;color:#8e8e93;margin-left:-2px}
  .ui-mp__menu{position:absolute;top:60px;left:24px;width:300px;background:#fff;border:1px solid #ececec;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.12);padding:6px}
  .ui-mp__item{padding:10px 12px;border-radius:10px;cursor:pointer}
  .ui-mp__item:hover{background:#f4f4f4}
  .ui-mp__row{display:flex;align-items:center;justify-content:space-between;font-size:14.5px}
  .ui-mp__desc{font-size:12.5px;color:#8e8e93;margin-top:2px}
  .ui-mp__check{color:#0d0d0d}
  .ui-mp__badge{font-size:10px;font-weight:700;letter-spacing:.04em;padding:2px 6px;border-radius:6px;background:#ece9ff;color:#5e4bd3}
  .ui-mp__badge--fast{background:#e6f4ea;color:#1e7a3a}
  .ui-mp__item--locked{opacity:.55}
  .ui-mp__lock{font-size:12px}
</style>

<script>
  const mp=document.getElementById('mp');
  mp.querySelector('.ui-mp__trigger').addEventListener('click',()=>mp.classList.toggle('open'));
  mp.querySelector('.ui-mp__menu').style.display='block';
</script>`,
    },
    {
      name: 'Inline Citation Chip',
      nameJa: 'インライン引用チップ',
      desc: '文末に小さく [1] [2] と並ぶ、根拠ソースへのリンクピル。Perplexity定番。',
      detail: 'PerplexityやYou.comのような検索連動型AIでは、回答の各文の終わりに小さな番号付きピルが並び、クリックすると元記事に飛べる「インライン引用」が中核体験です。番号は丸や角丸の小さいバッジで、ホバーするとソース名やドメイン、サムネを含んだミニカードがポップアップします。本文の流れを切らずに「これはどこから来た情報か」を瞬時にわかるのが肝で、AIの幻覚(ハルシネーション)対策としても効きます。番号は出現順に振り直すのが一般的です。',
      descEn: 'A tiny numbered pill (like "[1] [2]") at the end of sentences that links to the source — a Perplexity staple.',
      detailEn: 'Search-grounded AIs like Perplexity and You.com put a small numbered pill at the end of each sentence so users can jump to the original source. The badges are tiny circular or pill-shaped chips, and hovering reveals a mini card with the site name, domain, and sometimes a favicon. The point is to never break the reading flow while still answering "where did this come from?" — a strong defense against hallucinations. Numbers are usually renumbered in order of appearance on the page.',
      code: `<!-- Inspired by Perplexity -->
<div class="ui-ic-wrap">
  <p class="ui-ic-body">
    Japan's birth rate fell to a record low of 1.20 in 2023, the lowest since records began in 1947<a class="ui-ic-chip" data-src="reuters.com">1</a><a class="ui-ic-chip" data-src="nikkei.com">2</a>. The decline is driven largely by fewer marriages and delayed childbirth, with marriages dropping below 500,000 for the first time in 90 years<a class="ui-ic-chip" data-src="japantimes.co.jp">3</a>. The government has pledged ¥3.6 trillion annually toward childcare support through 2028<a class="ui-ic-chip" data-src="mhlw.go.jp">4</a>.
  </p>
</div>

<style>
  .ui-ic-wrap{max-width:540px;padding:24px;background:#fbfbfa;font:15px/1.65 "Inter",-apple-system,"Segoe UI",sans-serif;color:#1f1f1f}
  .ui-ic-body{margin:0}
  .ui-ic-chip{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;margin:0 1px 0 3px;background:#ece9e3;color:#5b5b58;border-radius:4px;font:600 10.5px/1 "Inter",sans-serif;text-decoration:none;vertical-align:1px;cursor:pointer;transition:.12s;position:relative}
  .ui-ic-chip:hover{background:#20808d;color:#fff}
  .ui-ic-chip:hover::after{content:attr(data-src);position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);background:#1f1f1f;color:#fff;font-size:11px;padding:4px 8px;border-radius:6px;white-space:nowrap;font-weight:500}
</style>`,
    },
    {
      name: 'Reply Action Toolbar',
      nameJa: '返答アクションツールバー',
      desc: '回答の下に並ぶ「再生成・続ける・コピー・👍👎」のミニアイコン列。',
      detail: 'AIの回答1件1件に対して「気に入った/気に入らなかった」「コピーしたい」「もう一度違う案で生成したい」というニーズが必ず発生するため、返答の直下に小さなアイコンボタンを横並びにする構成が業界標準になりました。アイコン+ホバーで日本語/英語ラベルを出すだけのシンプル設計で、Like/Dislike はトグル、コピーは押した瞬間にチェックマークへ切り替えて視覚フィードバックを返すのが定石です。フィードバックがそのままモデル改善データになるため、低摩擦で押しやすい大きさにするのが重要です。',
      descEn: 'A row of small icon buttons under a reply — Regenerate, Continue, Copy, Like, Dislike.',
      detailEn: 'Every AI reply triggers the same handful of follow-up needs — copy it, try again, give it a thumbs up or down — so a small icon toolbar directly under each answer has become industry standard. The pattern is simple: icon-only buttons with hover tooltips, like/dislike behave as toggles, and the copy button briefly swaps to a checkmark to confirm. The feedback feeds back into model training, so the buttons need to be big enough to press without thinking but quiet enough to stay out of the way.',
      code: `<!-- Inspired by ChatGPT -->
<div class="ui-rt-wrap">
  <p class="ui-rt-msg">Sure — here is the summary in three bullet points, plus the key tradeoffs.</p>
  <div class="ui-rt-bar" role="toolbar">
    <button type="button" class="ui-rt-btn" data-tip="Copy">
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="6" width="10" height="11" rx="2"/><path d="M4 14V5a2 2 0 0 1 2-2h7"/></svg>
    </button>
    <button type="button" class="ui-rt-btn" data-tip="Good response">
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 9V5a2 2 0 0 1 2-2l3 7v7H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1zm5 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3"/></svg>
    </button>
    <button type="button" class="ui-rt-btn" data-tip="Bad response">
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 11v4a2 2 0 0 1-2 2l-3-7V3h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1zM8 11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"/></svg>
    </button>
    <button type="button" class="ui-rt-btn" data-tip="Read aloud">
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7v6h3l4 3V4L7 7H4z"/><path d="M14 7a4 4 0 0 1 0 6"/></svg>
    </button>
    <button type="button" class="ui-rt-btn" data-tip="Regenerate">
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16 10a6 6 0 1 1-1.76-4.24"/><path d="M16 4v3.5h-3.5"/></svg>
    </button>
    <span class="ui-rt-sep"></span>
    <button type="button" class="ui-rt-btn ui-rt-btn--continue">Continue ↓</button>
  </div>
</div>

<style>
  .ui-rt-wrap{max-width:540px;padding:20px;background:#fff;font:15px/1.6 -apple-system,"Söhne","Segoe UI",sans-serif;color:#0d0d0d}
  .ui-rt-msg{margin:0 0 6px}
  .ui-rt-bar{display:inline-flex;align-items:center;gap:2px;color:#8e8e93}
  .ui-rt-btn{display:inline-flex;align-items:center;gap:4px;padding:6px;border:0;background:transparent;border-radius:8px;cursor:pointer;color:#8e8e93;position:relative;font:500 13px -apple-system,sans-serif}
  .ui-rt-btn:hover{background:#f4f4f4;color:#0d0d0d}
  .ui-rt-btn[data-tip]:hover::after{content:attr(data-tip);position:absolute;bottom:calc(100% + 4px);left:50%;transform:translateX(-50%);background:#0d0d0d;color:#fff;font-size:11px;padding:3px 7px;border-radius:5px;white-space:nowrap;pointer-events:none}
  .ui-rt-sep{width:1px;height:16px;background:#ececec;margin:0 4px}
  .ui-rt-btn--continue{padding:6px 10px}
</style>`,
    },
    {
      name: 'Code Block with Copy',
      nameJa: 'コピー付きコードブロック',
      desc: '右上に「Copy code」ボタン付きの、シンタックス着色されたコード表示エリア。',
      detail: 'AIにコード生成を頼むと長いスニペットが返ってくるため、本文と区別された暗色のコードブロックで囲み、右上にコピーボタンを置くのが定番です。先頭バーには言語名(python, ts など)を薄文字で表示し、ボタンは「Copy code」テキスト+小さなアイコン、押された瞬間に「Copied!」とチェックに変化します。コード本文は等幅フォント、軽いシンタックスハイライト、行間1.5前後で読みやすさを確保。背景はChatGPTなら#0d0d0d、Claudeなら少し茶色寄りなど製品色が出る部分です。',
      descEn: 'A dark, syntax-tinted preformatted block with a "Copy code" button in the top-right corner.',
      detailEn: 'AI replies often include long code snippets, so chat UIs wrap them in a dark, monospace block to separate them from the prose. A small header bar shows the language label in a muted color, and the top-right corner holds a "Copy code" button with an icon that swaps to a checkmark and "Copied!" the moment it is pressed. Inside, the code uses a monospace font, light syntax highlighting, and roughly 1.5 line-height for scanning. The background color is one of the spots where product personalities shine — ChatGPT uses near-black, while Claude leans slightly warm.',
      code: `<!-- Inspired by ChatGPT -->
<div class="ui-cb-wrap">
  <div class="ui-cb">
    <div class="ui-cb__bar">
      <span class="ui-cb__lang">python</span>
      <button type="button" class="ui-cb__copy" id="cbCopy">
        <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="6" width="10" height="11" rx="2"/><path d="M4 14V5a2 2 0 0 1 2-2h7"/></svg>
        <span>Copy code</span>
      </button>
    </div>
<pre class="ui-cb__pre"><code><span class="t-k">import</span> <span class="t-n">torch</span>
<span class="t-k">import</span> <span class="t-n">torch.nn</span> <span class="t-k">as</span> <span class="t-n">nn</span>

<span class="t-k">class</span> <span class="t-c">Attention</span>(nn.Module):
    <span class="t-k">def</span> <span class="t-f">__init__</span>(self, dim):
        <span class="t-k">super</span>().__init__()
        self.q = nn.Linear(dim, dim)
        self.k = nn.Linear(dim, dim)
        self.v = nn.Linear(dim, dim)

    <span class="t-k">def</span> <span class="t-f">forward</span>(self, x):
        q, k, v = self.q(x), self.k(x), self.v(x)
        scores = (q @ k.transpose(-2,-1)) / dim**<span class="t-num">0.5</span>
        <span class="t-k">return</span> scores.softmax(-1) @ v</code></pre>
  </div>
</div>

<style>
  .ui-cb-wrap{max-width:560px;padding:20px;background:#fff;font:14px -apple-system,sans-serif}
  .ui-cb{background:#0d0d0d;border-radius:10px;overflow:hidden}
  .ui-cb__bar{display:flex;justify-content:space-between;align-items:center;padding:6px 10px 6px 14px;color:#9b9b9b;font:12px -apple-system,sans-serif}
  .ui-cb__lang{font-size:11.5px}
  .ui-cb__copy{display:inline-flex;align-items:center;gap:5px;padding:4px 8px;border:0;background:transparent;color:#9b9b9b;font:12px -apple-system,sans-serif;cursor:pointer;border-radius:6px}
  .ui-cb__copy:hover{background:rgba(255,255,255,.07);color:#fff}
  .ui-cb__copy.is-copied{color:#34c759}
  .ui-cb__pre{margin:0;padding:14px 16px 18px;color:#e6e6e6;font:13px/1.55 "JetBrains Mono","SF Mono",ui-monospace,monospace;overflow-x:auto}
  .ui-cb__pre .t-k{color:#c084fc}
  .ui-cb__pre .t-n{color:#7dd3fc}
  .ui-cb__pre .t-c{color:#fbbf24}
  .ui-cb__pre .t-f{color:#86efac}
  .ui-cb__pre .t-num{color:#f9a8d4}
</style>

<script>
  document.getElementById('cbCopy').addEventListener('click',function(){
    const lbl=this.querySelector('span');const orig=lbl.textContent;
    lbl.textContent='Copied!';this.classList.add('is-copied');
    setTimeout(()=>{lbl.textContent=orig;this.classList.remove('is-copied');},1400);
  });
</script>`,
    },
    {
      name: 'Tool-Use Status Row',
      nameJa: 'ツール実行ステータス行',
      desc: '「Searching the web…」「Reading file…」のように裏で動いている処理を見せる行。',
      detail: 'エージェント型AIは検索・ファイル読み込み・コード実行など複数ステップを裏で動かすため、それを隠さず1行ずつ見せる「思考の見える化」が信頼につながります。実行中はくるくる回るスピナー、終わったらチェックマークと所要時間に切り替わり、クリックで詳細(検索クエリ、ヒット件数など)が展開する作りが主流です。「何もしていないように見える数秒」が一番ユーザーを不安にさせるので、たとえ遅くてもプロセスを可視化する方が体験が良くなる、というのがClaude・Perplexity・ChatGPTで共通の設計判断です。',
      descEn: 'A row like "Searching the web…" or "Reading file…" that surfaces background work with a spinner.',
      detailEn: 'Agentic AIs run multiple background steps — web search, file reads, code execution — and showing each one in its own status row builds trust instead of hiding the work. While a step runs, a spinner spins; when it finishes, it flips to a checkmark plus elapsed time, and the row can usually be expanded to inspect the query, hit count, or other details. The dreaded "few seconds of silence" makes users anxious far faster than visible-but-slow work does, which is why Claude, Perplexity, and ChatGPT all converged on this pattern.',
      code: `<!-- Inspired by Claude -->
<div class="ui-tu-wrap">
  <div class="ui-tu-step ui-tu-step--done">
    <span class="ui-tu-icon">✓</span>
    <span class="ui-tu-label">Searched the web for <b>"日本の出生率 2023"</b></span>
    <span class="ui-tu-meta">4件 · 2.1s</span>
  </div>
  <div class="ui-tu-step ui-tu-step--done">
    <span class="ui-tu-icon">✓</span>
    <span class="ui-tu-label">Read <b>reuters.com/world/asia</b></span>
    <span class="ui-tu-meta">1.4s</span>
  </div>
  <div class="ui-tu-step ui-tu-step--running">
    <span class="ui-tu-spin" aria-hidden="true"></span>
    <span class="ui-tu-label">Synthesizing answer…</span>
  </div>
</div>

<style>
  .ui-tu-wrap{max-width:480px;padding:20px;background:#faf9f5;font:14px/1.5 -apple-system,"Söhne","Segoe UI",sans-serif;color:#3d3d3a}
  .ui-tu-step{display:flex;align-items:center;gap:10px;padding:8px 12px;background:#fff;border:1px solid #ece9e3;border-radius:10px;margin-bottom:6px}
  .ui-tu-icon{flex:none;width:18px;height:18px;display:grid;place-items:center;background:#20808d;color:#fff;border-radius:50%;font-size:11px;font-weight:700}
  .ui-tu-label{flex:1;color:#3d3d3a}
  .ui-tu-label b{font-weight:600;color:#1f1f1f}
  .ui-tu-meta{color:#8a8a85;font-size:12.5px}
  .ui-tu-spin{flex:none;width:14px;height:14px;border:2px solid #ece9e3;border-top-color:#20808d;border-radius:50%;animation:ui-tu-rot .8s linear infinite}
  @keyframes ui-tu-rot{to{transform:rotate(360deg)}}
  .ui-tu-step--running{background:#fff;border-color:#dfe9e8}
</style>`,
    },
    {
      name: 'File Upload Chip',
      nameJa: 'ファイル添付チップ',
      desc: '添付したファイル名+×ボタンを横長ピルで表示する、入力欄の上の小さなカード。',
      detail: 'PDF・画像・スプレッドシートを添付できるチャットでは、送信前にどのファイルが付いたか確認できる小さな横長ピルを入力欄の上に出すのが標準です。左にファイル種別アイコン(色とラベルで.PDF/.CSVなど)、中央にファイル名+サイズや状態、右に削除用の×ボタンを配置します。アップロード中はプログレスバー、解析中はスピナー、完了でチェックマークと、状態遷移を視覚的に追えるようにします。ChatGPT・Claude・Geminiで微妙にスタイルは違いますが、配置と要素はほぼ共通です。',
      descEn: 'A horizontal pill above the input that shows an attached filename with a remove (×) button.',
      detailEn: 'Chats that accept PDFs, images, or spreadsheets put a small horizontal pill above the input so users can confirm what is attached before sending. The recipe is consistent: a color-coded file-type icon on the left (.PDF, .CSV, etc.), the filename and size or status in the middle, and an × button on the right to detach. While the file uploads a progress bar fills, a spinner shows during parsing, and a checkmark confirms completion — the state transitions are made fully visible. ChatGPT, Claude, and Gemini all style this pill slightly differently, but the layout and ingredients are essentially identical.',
      code: `<!-- Inspired by ChatGPT -->
<div class="ui-fu-wrap">
  <div class="ui-fu-strip">
    <div class="ui-fu-chip">
      <span class="ui-fu-icon ui-fu-icon--pdf">PDF</span>
      <div class="ui-fu-meta">
        <div class="ui-fu-name">Q3-financial-report.pdf</div>
        <div class="ui-fu-sub">Document · 1.2 MB</div>
      </div>
      <button type="button" class="ui-fu-x" aria-label="Remove">×</button>
    </div>
    <div class="ui-fu-chip">
      <span class="ui-fu-icon ui-fu-icon--csv">CSV</span>
      <div class="ui-fu-meta">
        <div class="ui-fu-name">sales-2024-q3.csv</div>
        <div class="ui-fu-sub">Spreadsheet · 84 KB</div>
      </div>
      <button type="button" class="ui-fu-x" aria-label="Remove">×</button>
    </div>
    <div class="ui-fu-chip ui-fu-chip--loading">
      <span class="ui-fu-icon ui-fu-icon--img">IMG</span>
      <div class="ui-fu-meta">
        <div class="ui-fu-name">whiteboard-photo.jpg</div>
        <div class="ui-fu-sub">Uploading… 62%</div>
        <div class="ui-fu-bar"><div class="ui-fu-bar__fill" style="width:62%"></div></div>
      </div>
      <button type="button" class="ui-fu-x" aria-label="Remove">×</button>
    </div>
  </div>
  <div class="ui-fu-input">Summarize the attached files…</div>
</div>

<style>
  .ui-fu-wrap{max-width:560px;padding:18px;background:#fff;font:14px -apple-system,"Söhne","Segoe UI",sans-serif;color:#0d0d0d}
  .ui-fu-strip{display:flex;flex-wrap:wrap;gap:8px;padding:10px;background:#fff;border:1px solid #ececec;border-bottom:0;border-radius:18px 18px 0 0}
  .ui-fu-chip{display:flex;align-items:center;gap:10px;padding:8px 10px 8px 8px;background:#f9f9f9;border:1px solid #ececec;border-radius:12px;min-width:200px;position:relative}
  .ui-fu-icon{flex:none;width:36px;height:36px;border-radius:8px;display:grid;place-items:center;color:#fff;font:700 10px -apple-system,sans-serif;letter-spacing:.02em}
  .ui-fu-icon--pdf{background:#ff5d5d}
  .ui-fu-icon--csv{background:#19a974}
  .ui-fu-icon--img{background:#a26bfa}
  .ui-fu-meta{flex:1;min-width:0}
  .ui-fu-name{font-size:13.5px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-fu-sub{font-size:11.5px;color:#8e8e93;margin-top:1px}
  .ui-fu-x{width:18px;height:18px;border:0;border-radius:50%;background:#0d0d0d;color:#fff;font-size:13px;line-height:1;cursor:pointer;display:grid;place-items:center;position:absolute;top:-6px;right:-6px;box-shadow:0 1px 3px rgba(0,0,0,.18)}
  .ui-fu-bar{height:3px;background:#ececec;border-radius:2px;margin-top:4px;overflow:hidden}
  .ui-fu-bar__fill{height:100%;background:#0d0d0d;transition:width .3s}
  .ui-fu-input{padding:14px 16px;border:1px solid #ececec;border-top:0;border-radius:0 0 18px 18px;color:#8e8e93;font-size:14.5px}
</style>`,
    },
  ],
}
