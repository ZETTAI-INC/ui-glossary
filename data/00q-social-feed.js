/**
 * UI Parts Showcase (Social Feed) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-social-feed',
  title: 'SNSフィードUI',
  titleEn: 'Social Feed UI',
  description: 'X(Twitter)・Instagram・Threads・TikTok・Bluesky などのSNSフィードでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Post Card',
      nameJa: '投稿カード',
      desc: 'アイコン・名前・ハンドル・本文・いいね数などが並ぶSNSの基本投稿カード。',
      detail: '投稿カードはSNSのタイムラインで最も基本となるブロックで、ユーザーアイコン・表示名・@ハンドル・投稿時刻・本文・エンゲージメント行(返信/リポスト/いいね/ブックマーク/共有)が縦にまとまっています。情報の優先順位を視線の流れに沿って並べることで、フィードを高速にスクロールしながら誰の・何の投稿かを瞬時に判断できます。X(Twitter)系では本文の下にメトリクス行、Threadsではボタンを左寄せ、Blueskyでは数値を控えめに、と細部でブランドが出る部分です。コピペでそのまま実用ラインに乗せられる構造を意識しました。',
      descEn: 'The basic feed card: avatar, name, handle, body text, and an engagement row.',
      detailEn: 'A post card is the atomic unit of a social feed — it stacks an avatar, display name, @handle, timestamp, body copy, and an engagement row (reply, repost, like, bookmark, share) into a single readable block. The order follows the eye, so users scrolling at speed can identify who posted what in a glance. X-style apps keep metrics under the body, Threads aligns buttons left, and Bluesky tones down the counts — small touches that reveal a brand. The markup here is structured so you can drop it straight into a production list.',
      code: `<!-- Inspired by X (Twitter) -->
<article class="ui-pc">
  <div class="ui-pc__avatar">SK</div>
  <div class="ui-pc__main">
    <header class="ui-pc__head">
      <span class="ui-pc__name">Saki Kobayashi</span>
      <svg class="ui-pc__verified" viewBox="0 0 22 22" width="16" height="16" aria-hidden="true"><path fill="#1d9bf0" d="M20.4 11l-1.7-2 0.3-2.6-2.5-0.6-1.4-2.3L12.7 4.5 11 3.4 9.3 4.5 6.9 3.5 5.5 5.8 3 6.4 3.3 9l-1.7 2L3.3 13l-0.3 2.6 2.5 0.6 1.4 2.3 2.4-1L11 18.6l1.7-1.1 2.4 1 1.4-2.3 2.5-0.6L18.7 13zM9.8 14.4 6.6 11.2l1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4z"/></svg>
      <span class="ui-pc__handle">@sakikb · 2h</span>
      <button class="ui-pc__more" aria-label="More">···</button>
    </header>
    <p class="ui-pc__body">夜中に書いたコード、朝見ると別人が書いたみたいに見える現象に名前つけてほしい。<br>typoだけ直して今日も出社します ☕️</p>
    <footer class="ui-pc__metrics">
      <button class="ui-pc__m"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M1.75 3a.75.75 0 00-.75.75v15.5c0 .41.34.75.75.75h20.5a.75.75 0 00.75-.75V3.75A.75.75 0 0022.25 3H1.75zM3 18V5h18v13H6.31L3 19.5V18z"/></svg><span>24</span></button>
      <button class="ui-pc__m"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4.5 3.88l4.43 4.43-1.41 1.41L5.5 7.69V14c0 1.1.9 2 2 2h6v2H7.5a4 4 0 01-4-4V7.7L1.49 9.7.08 8.3 4.5 3.88zm15 16.24l-4.43-4.43 1.41-1.41 2.02 2.02V10a2 2 0 00-2-2h-6V6h6a4 4 0 014 4v6.31l2.02-2.02 1.41 1.41-4.43 4.43z"/></svg><span>312</span></button>
      <button class="ui-pc__m ui-pc__m--like"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M16.7 4c-1.7 0-3.5 1.2-4.7 3-1.2-1.8-3-3-4.7-3C4.4 4 2 6.4 2 9.3c0 4.5 4.4 7.6 10 13.2 5.6-5.6 10-8.7 10-13.2C22 6.4 19.6 4 16.7 4z"/></svg><span>2.4K</span></button>
      <button class="ui-pc__m"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4 4.5C4 3.67 4.67 3 5.5 3h13c.83 0 1.5.67 1.5 1.5V21l-8-4-8 4V4.5z"/></svg></button>
      <button class="ui-pc__m"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41L7.71 9.71 6.3 8.29 12 2.59zM4 14v6a1 1 0 001 1h14a1 1 0 001-1v-6h-2v5H6v-5H4z"/></svg></button>
    </footer>
  </div>
</article>

<style>
  .ui-pc{display:flex;gap:12px;max-width:520px;padding:14px 16px;background:#000;border:1px solid #2f3336;border-radius:0;font:15px -apple-system,'Segoe UI',Roboto,sans-serif;color:#e7e9ea}
  .ui-pc__avatar{flex:none;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#f06292,#7e57c2);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;letter-spacing:.02em}
  .ui-pc__main{flex:1;min-width:0}
  .ui-pc__head{display:flex;align-items:center;gap:4px;line-height:1.2}
  .ui-pc__name{font-weight:700;color:#e7e9ea}
  .ui-pc__verified{flex:none}
  .ui-pc__handle{color:#71767b;font-size:14.5px;margin-left:2px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-pc__more{border:0;background:transparent;color:#71767b;cursor:pointer;font-size:16px;padding:0 4px;border-radius:50%}
  .ui-pc__more:hover{background:rgba(29,155,240,.1);color:#1d9bf0}
  .ui-pc__body{margin:4px 0 10px;line-height:1.45;font-size:15px;color:#e7e9ea;white-space:pre-line}
  .ui-pc__metrics{display:flex;justify-content:space-between;max-width:425px;color:#71767b}
  .ui-pc__m{display:inline-flex;align-items:center;gap:6px;border:0;background:transparent;color:inherit;cursor:pointer;font:13px -apple-system,sans-serif;padding:4px 6px;border-radius:999px;transition:.15s}
  .ui-pc__m:hover{color:#1d9bf0;background:rgba(29,155,240,.1)}
  .ui-pc__m--like:hover{color:#f91880;background:rgba(249,24,128,.1)}
</style>`,
    },
    {
      name: 'Story Bar',
      nameJa: 'ストーリーバー',
      desc: '丸いアイコンが横並びで、未読はグラデーションのリングで囲まれるストーリー一覧。',
      detail: 'ストーリーバーはInstagramが定着させた横スクロールのフィード上部UIで、円形のユーザーアイコンが並びます。まだ見ていないストーリーがある人はピンク〜オレンジ〜紫のグラデーションのリングで囲まれ、見終わるとグレーの細リングに変わるのが約束事です。先頭に「自分のストーリーを追加」のプラスマーク付き枠を置くのが定番で、フィードの一番目立つ場所に「軽い更新」を集約します。短時間で消えるという性質と組み合わせることで投稿のハードルを下げ、毎日開く理由を生み出すパーツです。',
      descEn: 'A horizontal row of circular avatars; unseen stories get a gradient ring.',
      detailEn: 'Instagram cemented the story bar — a horizontally scrolling row of circular avatars sitting at the top of the feed. Unseen stories wear a pink-to-orange-to-purple gradient ring; once viewed, the ring fades to a thin gray. The first slot is almost always "Your story" with a small plus badge, anchoring the most prominent strip of the feed to lightweight updates. Combined with stories\' 24-hour lifespan, it lowers posting friction and gives users a reason to come back daily.',
      code: `<!-- Inspired by Instagram -->
<div class="ui-story">
  <div class="ui-story__item">
    <div class="ui-story__ring ui-story__ring--self">
      <div class="ui-story__avatar" style="background:linear-gradient(135deg,#ffd54f,#ff7043)">me</div>
      <span class="ui-story__plus">+</span>
    </div>
    <span class="ui-story__name">Your story</span>
  </div>
  <div class="ui-story__item">
    <div class="ui-story__ring ui-story__ring--new">
      <div class="ui-story__avatar" style="background:linear-gradient(135deg,#42a5f5,#1e88e5)">YA</div>
    </div>
    <span class="ui-story__name">yamada_a</span>
  </div>
  <div class="ui-story__item">
    <div class="ui-story__ring ui-story__ring--new">
      <div class="ui-story__avatar" style="background:linear-gradient(135deg,#ec407a,#ab47bc)">MI</div>
    </div>
    <span class="ui-story__name">miyuki.cafe</span>
  </div>
  <div class="ui-story__item">
    <div class="ui-story__ring ui-story__ring--new">
      <div class="ui-story__avatar" style="background:linear-gradient(135deg,#66bb6a,#26a69a)">TO</div>
    </div>
    <span class="ui-story__name">tokyo_eats</span>
  </div>
  <div class="ui-story__item">
    <div class="ui-story__ring ui-story__ring--seen">
      <div class="ui-story__avatar" style="background:linear-gradient(135deg,#8d6e63,#5d4037)">KE</div>
    </div>
    <span class="ui-story__name">kenji.dev</span>
  </div>
  <div class="ui-story__item">
    <div class="ui-story__ring ui-story__ring--new">
      <div class="ui-story__avatar" style="background:linear-gradient(135deg,#ff7043,#f44336)">RU</div>
    </div>
    <span class="ui-story__name">runa_design</span>
  </div>
  <div class="ui-story__item">
    <div class="ui-story__ring ui-story__ring--seen">
      <div class="ui-story__avatar" style="background:linear-gradient(135deg,#7e57c2,#5e35b1)">SH</div>
    </div>
    <span class="ui-story__name">shota_94</span>
  </div>
</div>

<style>
  .ui-story{display:flex;gap:14px;max-width:520px;padding:14px 12px;background:#000;overflow-x:auto;scrollbar-width:none;font:13px -apple-system,'Segoe UI',sans-serif;color:#fff;border:1px solid #262626;border-radius:12px}
  .ui-story::-webkit-scrollbar{display:none}
  .ui-story__item{display:flex;flex-direction:column;align-items:center;gap:6px;flex:none;width:68px}
  .ui-story__ring{position:relative;width:64px;height:64px;border-radius:50%;padding:2.5px;box-sizing:border-box}
  .ui-story__ring--new{background:conic-gradient(from 45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75)}
  .ui-story__ring--seen{background:#3a3a3a}
  .ui-story__ring--self{background:#262626}
  .ui-story__avatar{width:100%;height:100%;border-radius:50%;border:2.5px solid #000;color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;letter-spacing:.02em;text-transform:uppercase}
  .ui-story__plus{position:absolute;right:0;bottom:0;width:20px;height:20px;border-radius:50%;background:#0095f6;color:#fff;border:2px solid #000;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;line-height:1}
  .ui-story__name{font-size:12px;color:#fafafa;max-width:64px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
</style>`,
    },
    {
      name: 'Reaction Picker',
      nameJa: 'リアクションピッカー',
      desc: 'いいねボタンを長押し/ホバーで出る6種類の絵文字リアクションパネル。',
      detail: 'リアクションピッカーはFacebookやInstagramのDMで導入され、いまでは多くのSNSに広がった「ひとつの投稿に対して感情の幅を表現させるUI」です。👍❤️😆😮😢🎉のような少数のリアクションを並べ、選ぶとそのアイコンが投稿の下に集計されます。「いいね」だけだと表現しきれない悲しい・驚いた・嬉しい、を1タップで分けられるのが価値で、コメントを書くほどではないリアクションを救い上げます。長押し/ホバーでふわっとせり上がるポップオーバーで、選択直前に絵文字が拡大するアニメが定番演出です。',
      descEn: 'A hover/long-press popover with six emoji reactions.',
      detailEn: 'The reaction picker, popularized by Facebook Messenger and now everywhere, lets users express a range of emotions about a single post. A row of six emoji — usually 👍❤️😆😮😢🎉 — appears on hover or long press, and your choice gets tallied beneath the post. It rescues feelings that a plain "like" can\'t capture (sadness, surprise, celebration) without forcing a written comment. The signature animation is a soft pop-up where the hovered emoji scales and lifts just before the user releases.',
      code: `<!-- Inspired by Facebook -->
<div class="ui-rxn">
  <div class="ui-rxn__pop" role="menu" aria-label="Reactions">
    <button class="ui-rxn__emoji" title="Like">👍</button>
    <button class="ui-rxn__emoji" title="Love">❤️</button>
    <button class="ui-rxn__emoji" title="Haha">😆</button>
    <button class="ui-rxn__emoji" title="Wow">😮</button>
    <button class="ui-rxn__emoji" title="Sad">😢</button>
    <button class="ui-rxn__emoji" title="Celebrate">🎉</button>
  </div>
  <button class="ui-rxn__trigger">
    <span>👍</span>
    <span>Like</span>
  </button>
</div>

<style>
  .ui-rxn{position:relative;display:inline-block;padding:60px 24px 12px;background:#f0f2f5;border-radius:12px;font:14px -apple-system,'Segoe UI',Roboto,sans-serif}
  .ui-rxn__pop{position:absolute;left:8px;top:12px;display:flex;gap:2px;padding:6px;background:#fff;border-radius:999px;box-shadow:0 6px 24px rgba(0,0,0,.18),0 1px 2px rgba(0,0,0,.08)}
  .ui-rxn__emoji{border:0;background:transparent;width:38px;height:38px;border-radius:50%;cursor:pointer;font-size:26px;line-height:1;transition:transform .18s cubic-bezier(.34,1.56,.64,1),background .12s;display:flex;align-items:center;justify-content:center;padding:0}
  .ui-rxn__emoji:hover{transform:translateY(-10px) scale(1.45);background:rgba(0,0,0,.04)}
  .ui-rxn__trigger{display:inline-flex;align-items:center;gap:6px;border:0;background:transparent;color:#65676b;cursor:pointer;font:600 14px -apple-system,sans-serif;padding:6px 12px;border-radius:6px}
  .ui-rxn__trigger:hover{background:rgba(0,0,0,.05)}
</style>`,
    },
    {
      name: 'Follow Button',
      nameJa: 'フォローボタン',
      desc: 'Follow → Following → Unfollow とホバーで赤くなるトグルフォローボタン。',
      detail: 'フォローボタンはSNSにおける最重要CTAの1つで、3つの状態を持つのが定番です。未フォロー時は塗りつぶしの「Follow」(クリックを誘うブランドカラー)、フォロー中は控えめな枠線の「Following」、その状態でホバーすると赤系の「Unfollow」に変わって誤操作を一段抑制する、という流れです。X(Twitter)・Threads・Instagram いずれもこのパターンを採用しており、CSS の :hover とテキスト差し替えだけで自然に表現できます。フォロー解除を完全な確認ダイアログにせず、見た目の色変化だけで警告する「軽い摩擦」がポイントです。',
      descEn: 'A three-state toggle: Follow, Following, and a red Unfollow on hover.',
      detailEn: 'The follow button is the most critical CTA on any social product, and it almost always has three states. Before you follow, it\'s a solid brand-color "Follow" that begs for a click. Once you do, it dims to an outlined "Following". Hover over that and it turns red "Unfollow" — a soft visual warning instead of a heavy confirmation modal. X, Threads, and Instagram all share this pattern, and it falls naturally out of a CSS `:hover` swap. The slight friction without a full dialog is the whole point.',
      code: `<!-- Inspired by X (Twitter) -->
<div class="ui-fb">
  <button class="ui-fb__btn" data-state="idle">Follow</button>
  <button class="ui-fb__btn" data-state="following">
    <span class="ui-fb__on">Following</span>
    <span class="ui-fb__off">Unfollow</span>
  </button>
</div>

<style>
  .ui-fb{display:inline-flex;gap:12px;padding:32px;background:#000;border-radius:12px;font:700 14px -apple-system,'Segoe UI',sans-serif}
  .ui-fb__btn{min-width:104px;padding:8px 16px;border-radius:999px;border:1px solid transparent;cursor:pointer;font:inherit;line-height:1;transition:background .12s,color .12s,border-color .12s}
  .ui-fb__btn[data-state="idle"]{background:#eff3f4;color:#0f1419}
  .ui-fb__btn[data-state="idle"]:hover{background:#d7dbdc}
  .ui-fb__btn[data-state="following"]{background:transparent;color:#e7e9ea;border-color:#536471;position:relative}
  .ui-fb__btn[data-state="following"] .ui-fb__off{display:none}
  .ui-fb__btn[data-state="following"]:hover{background:rgba(244,33,46,.1);border-color:rgba(244,33,46,.4);color:#f4212e}
  .ui-fb__btn[data-state="following"]:hover .ui-fb__on{display:none}
  .ui-fb__btn[data-state="following"]:hover .ui-fb__off{display:inline}
</style>`,
    },
    {
      name: 'Comment Thread',
      nameJa: 'コメントスレッド',
      desc: 'インデントと縦の接続線でつながった、ぶら下がり返信のスレッド表示。',
      detail: 'コメントスレッドは、投稿への返信がさらに返信を呼ぶ「会話の連鎖」を視覚化するUIです。返信は親コメントよりも数段右にインデントされ、左側に薄い縦線が引かれることで「これは何の返信か」が一目で分かります。Reddit やX(Twitter)、Bluesky で広く使われ、深い議論を追いやすくする一方で、深すぎるネストは折りたたみボタンで吸収するのが現代の作法です。アイコン・名前・本文・タイムスタンプ・小さなアクション(Reply / Like)を縦に積み、線の起点と終点を avatar 中心に合わせると整って見えます。',
      descEn: 'A nested reply chain with indents and a vertical connector line.',
      detailEn: 'A comment thread visualizes the chain of replies that pile onto a single post. Each reply is indented further right than its parent, and a faint vertical line on the left makes it clear what is replying to what. Reddit, X, and Bluesky all use this pattern; it makes long discussions followable, with deeply nested branches collapsed behind a "show more" toggle in modern designs. Stack avatar, name, body, timestamp, and a small Reply/Like row vertically — and align the connector line\'s endpoints to the avatar\'s center for a tidy read.',
      code: `<!-- Inspired by Bluesky -->
<div class="ui-ct">
  <article class="ui-ct__item">
    <div class="ui-ct__avatar" style="background:#5b8def">NK</div>
    <div class="ui-ct__body">
      <div class="ui-ct__head"><b>Nao Kondo</b> <span>@naokondo · 6h</span></div>
      <p>新しいエディタ、フォントを Inter から Geist にしたら、なんか集中できる気がする。気のせいかな</p>
      <div class="ui-ct__actions"><button>Reply</button><button>Like · 12</button></div>
    </div>
  </article>
  <article class="ui-ct__item ui-ct__item--reply">
    <div class="ui-ct__avatar" style="background:#ef4444">YH</div>
    <div class="ui-ct__body">
      <div class="ui-ct__head"><b>Yui Hayama</b> <span>@yuih · 5h</span></div>
      <p>気のせいではないはず。等幅っぽい数字が読みやすくなる効果ある気がしてる</p>
      <div class="ui-ct__actions"><button>Reply</button><button>Like · 4</button></div>
    </div>
  </article>
  <article class="ui-ct__item ui-ct__item--reply ui-ct__item--reply2">
    <div class="ui-ct__avatar" style="background:#10b981">NK</div>
    <div class="ui-ct__body">
      <div class="ui-ct__head"><b>Nao Kondo</b> <span>@naokondo · 5h</span></div>
      <p>それだ。コードの数字が綺麗に揃って見えるのが地味に効いてるかも</p>
      <div class="ui-ct__actions"><button>Reply</button><button>Like · 2</button></div>
    </div>
  </article>
  <article class="ui-ct__item ui-ct__item--reply">
    <div class="ui-ct__avatar" style="background:#a855f7">MO</div>
    <div class="ui-ct__body">
      <div class="ui-ct__head"><b>Miki Oda</b> <span>@miki_o · 4h</span></div>
      <p>Geist いいですよね。Mono版もおすすめ</p>
      <div class="ui-ct__actions"><button>Reply</button><button>Like · 1</button></div>
    </div>
  </article>
</div>

<style>
  .ui-ct{max-width:520px;background:#fff;padding:14px 16px;border:1px solid #e5e7eb;border-radius:12px;font:14.5px -apple-system,'Segoe UI',Roboto,sans-serif;color:#0f172a}
  .ui-ct__item{position:relative;display:flex;gap:10px;padding:8px 0}
  .ui-ct__item--reply{margin-left:30px;padding-left:14px}
  .ui-ct__item--reply::before{content:"";position:absolute;left:0;top:-6px;bottom:0;width:2px;background:#e2e8f0;border-radius:2px}
  .ui-ct__item--reply2{margin-left:60px}
  .ui-ct__avatar{flex:none;width:34px;height:34px;border-radius:50%;color:#fff;font-weight:700;font-size:12px;display:flex;align-items:center;justify-content:center;letter-spacing:.02em}
  .ui-ct__body{flex:1;min-width:0}
  .ui-ct__head{font-size:14px;line-height:1.2;margin-bottom:2px}
  .ui-ct__head span{color:#64748b;font-weight:400;margin-left:4px}
  .ui-ct__body p{margin:2px 0 6px;line-height:1.5;color:#0f172a}
  .ui-ct__actions{display:flex;gap:14px}
  .ui-ct__actions button{border:0;background:transparent;color:#64748b;cursor:pointer;font:13px -apple-system,sans-serif;padding:0}
  .ui-ct__actions button:hover{color:#0ea5e9}
</style>`,
    },
    {
      name: 'Quote Post',
      nameJa: '引用ポスト',
      desc: '元の投稿が小さいカードとして埋め込まれた引用リポスト。',
      detail: '引用ポストは、誰かの投稿を自分のコメント付きで再共有するためのUIです。外側に自分のコメント、内側に枠線つきの小さなカードとして元投稿を埋め込み、フォントサイズや余白を一段控えめにすることで「これは引用元です」と視覚的に区別します。Xでは「Quote」、Threadsでは「Repost with comment」、Mastodonでは独自実装で導入が議論されてきたほど影響の大きい機能です。元投稿のアバター・名前・ハンドル・本文の冒頭(必要なら画像も)を圧縮して見せ、タップで元投稿に遷移できるようにするのが基本仕様になっています。',
      descEn: 'A repost card with the original post nested inside as a smaller bordered card.',
      detailEn: 'A quote post lets you reshare someone\'s content alongside your own commentary. Your text sits at the top, and the original post is embedded below as a smaller bordered card with tighter type and padding so it visibly reads as "this is the source." X calls it Quote, Threads calls it Repost with comment, and Mastodon famously debated it for years — that\'s how impactful the pattern is. The embedded card compresses avatar, name, handle, and a body preview (sometimes a thumbnail), and clicking it should jump to the original.',
      code: `<!-- Inspired by X (Twitter) -->
<article class="ui-qp">
  <header class="ui-qp__head">
    <div class="ui-qp__avatar" style="background:#1d9bf0">JS</div>
    <div>
      <div class="ui-qp__name"><b>Jun Sato</b> <span>@junsato · 1h</span></div>
    </div>
  </header>
  <p class="ui-qp__body">これ完全に同意。1日1コミットの心理的安全性、めちゃくちゃ大事</p>
  <a class="ui-qp__quote" href="#">
    <header class="ui-qp__qhead">
      <span class="ui-qp__qavatar" style="background:linear-gradient(135deg,#ec407a,#7e57c2)">KM</span>
      <b>Kana Mori</b>
      <span class="ui-qp__qhandle">@kana_dev · 3h</span>
    </header>
    <p class="ui-qp__qbody">毎日小さくでもmainを進めると、月曜の朝の心理的負荷が全然違うんだよな…</p>
  </a>
  <footer class="ui-qp__metrics">
    <span>💬 8</span><span>🔁 24</span><span>♡ 142</span>
  </footer>
</article>

<style>
  .ui-qp{max-width:520px;background:#000;color:#e7e9ea;border:1px solid #2f3336;border-radius:0;padding:14px 16px;font:15px -apple-system,'Segoe UI',Roboto,sans-serif}
  .ui-qp__head{display:flex;align-items:center;gap:10px;margin-bottom:8px}
  .ui-qp__avatar{flex:none;width:40px;height:40px;border-radius:50%;color:#fff;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center}
  .ui-qp__name span{color:#71767b;font-weight:400;margin-left:4px;font-size:14px}
  .ui-qp__body{margin:0 0 10px;line-height:1.45}
  .ui-qp__quote{display:block;border:1px solid #2f3336;border-radius:16px;padding:10px 12px;color:inherit;text-decoration:none;transition:background .12s}
  .ui-qp__quote:hover{background:rgba(255,255,255,.03)}
  .ui-qp__qhead{display:flex;align-items:center;gap:6px;font-size:13.5px}
  .ui-qp__qavatar{flex:none;width:20px;height:20px;border-radius:50%;color:#fff;font-weight:700;font-size:10px;display:flex;align-items:center;justify-content:center;letter-spacing:.02em}
  .ui-qp__qhandle{color:#71767b}
  .ui-qp__qbody{margin:6px 0 2px;font-size:14px;color:#e7e9ea;line-height:1.4}
  .ui-qp__metrics{display:flex;gap:24px;margin-top:12px;color:#71767b;font-size:13px}
</style>`,
    },
    {
      name: 'Profile Hover Card',
      nameJa: 'プロフィールホバーカード',
      desc: 'ユーザー名にマウスを乗せると出る、アバター・bio・フォローボタン付きの小型プロフィール。',
      detail: 'プロフィールホバーカードは、フィード上のユーザー名にカーソルを当てると小さなプロフィール名刺がふわっと開くUIです。アバター・表示名・ハンドル・短いbio・フォロー/フォロワー数・フォローボタンが詰め込まれ、プロフィールページに遷移しなくても「この人は何者か」を即座に確認できます。X(Twitter)で長年使われてきた定番で、フォローのハードルを下げると同時に、フィードの読み手が文脈を保ったまま会話の相手を把握できるようにする役割があります。表示の遅延(数百ms)、出現アニメ、画面端での反転表示は地味ながら品質を分ける要素です。',
      descEn: 'A small profile card that pops up when you hover a username — avatar, bio, and follow.',
      detailEn: 'A profile hover card pops a mini "business card" over the page whenever you mouse over a username in the feed. It shows avatar, display name, handle, a short bio, follow/follower counts, and a follow button — letting users size up a person without leaving their current scroll position. X has used this pattern for years, lowering the cost of a follow and helping readers keep context while figuring out who they\'re reading. Subtle delay before show, soft fade-in, and flipping the card when it would clip the viewport are tiny things that separate good from great.',
      code: `<!-- Inspired by X (Twitter) -->
<div class="ui-phc">
  <p class="ui-phc__line">Latest commit from <a class="ui-phc__trigger">@rio.codes</a> looks fire</p>
  <div class="ui-phc__card" role="dialog">
    <header class="ui-phc__head">
      <div class="ui-phc__avatar" style="background:linear-gradient(135deg,#22c55e,#0ea5e9)">RC</div>
      <button class="ui-phc__follow">Follow</button>
    </header>
    <div class="ui-phc__name"><b>Rio Chen</b></div>
    <div class="ui-phc__handle">@rio.codes</div>
    <p class="ui-phc__bio">Building dev tools at Linear. Ex-Figma. Tokyo / SF. Yes I still write TypeScript by hand.</p>
    <div class="ui-phc__stats"><span><b>284</b> Following</span><span><b>12.4K</b> Followers</span></div>
  </div>
</div>

<style>
  .ui-phc{position:relative;max-width:520px;padding:64px 24px 24px;background:#15202b;border-radius:12px;font:15px -apple-system,'Segoe UI',Roboto,sans-serif;color:#e7e9ea}
  .ui-phc__line{margin:0;color:#8b98a5}
  .ui-phc__trigger{color:#1d9bf0;cursor:pointer;text-decoration:none}
  .ui-phc__card{position:absolute;left:140px;top:12px;width:300px;background:#15202b;border:1px solid #38444d;border-radius:16px;padding:16px;box-shadow:0 8px 28px rgba(0,0,0,.5);color:#e7e9ea}
  .ui-phc__head{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px}
  .ui-phc__avatar{width:56px;height:56px;border-radius:50%;color:#fff;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center}
  .ui-phc__follow{background:#eff3f4;color:#0f1419;border:0;padding:6px 14px;border-radius:999px;font:700 13px -apple-system,sans-serif;cursor:pointer}
  .ui-phc__follow:hover{background:#d7dbdc}
  .ui-phc__name{font-size:15px;line-height:1.2}
  .ui-phc__handle{color:#8b98a5;font-size:13.5px;margin-bottom:8px}
  .ui-phc__bio{margin:0 0 10px;line-height:1.45;font-size:14px}
  .ui-phc__stats{display:flex;gap:14px;color:#8b98a5;font-size:13px}
  .ui-phc__stats b{color:#e7e9ea;margin-right:2px}
</style>`,
    },
    {
      name: 'Image Carousel',
      nameJa: '画像カルーセル',
      desc: '横スワイプで複数枚の画像を切り替え、下のドットで現在位置を示すUI。',
      detail: '画像カルーセルは、1枚の投稿に複数の画像を載せるためのUIで、Instagram の「複数枚投稿」が代表例です。横スワイプ/矢印で画像が切り替わり、下部の小さなドット(ページインジケータ)で現在の位置と総枚数を伝えます。ドットは現在地だけ濃く、他は薄くというのが共通言語で、5枚を超えるとドットが小さく/省略されるのが一般的です。ここでは画像URLを使わずCSSグラデーション+絵文字で「写真」を表現していますが、本番ではアスペクト比を固定したラッパーに img を流し込み、scroll-snap で実装するのがモダンな書き方です。',
      descEn: 'A multi-image post with swipe paging and active-state dot indicators.',
      detailEn: 'An image carousel lets a single post carry multiple photos, popularized by Instagram\'s carousel posts. Users swipe horizontally (or tap arrows) to advance, and a row of small dots underneath shows position and total. The active dot darkens, the rest fade — a near-universal convention — and beyond five or so, dots compress. This snippet uses CSS gradients + emoji to fake the photos, but in production you\'d slot `<img>` tags into a fixed aspect-ratio wrapper and use `scroll-snap` for paging.',
      code: `<!-- Inspired by Instagram -->
<div class="ui-car" id="car">
  <div class="ui-car__viewport">
    <div class="ui-car__track">
      <div class="ui-car__slide" style="background:linear-gradient(135deg,#ff9a9e,#fad0c4)">🌅</div>
      <div class="ui-car__slide" style="background:linear-gradient(135deg,#a1c4fd,#c2e9fb)">🏔️</div>
      <div class="ui-car__slide" style="background:linear-gradient(135deg,#fbc2eb,#a6c1ee)">🌸</div>
      <div class="ui-car__slide" style="background:linear-gradient(135deg,#ffecd2,#fcb69f)">🍜</div>
      <div class="ui-car__slide" style="background:linear-gradient(135deg,#84fab0,#8fd3f4)">🧋</div>
    </div>
    <span class="ui-car__count">1/5</span>
  </div>
  <div class="ui-car__dots">
    <span class="is-active"></span><span></span><span></span><span></span><span></span>
  </div>
</div>

<style>
  .ui-car{max-width:420px;background:#000;padding:0 0 12px;border-radius:8px;font:13px -apple-system,'Segoe UI',sans-serif}
  .ui-car__viewport{position:relative;width:100%;aspect-ratio:1;overflow:hidden}
  .ui-car__track{display:flex;width:100%;height:100%;scroll-snap-type:x mandatory;overflow-x:auto;scrollbar-width:none}
  .ui-car__track::-webkit-scrollbar{display:none}
  .ui-car__slide{flex:none;width:100%;height:100%;scroll-snap-align:start;display:flex;align-items:center;justify-content:center;font-size:96px}
  .ui-car__count{position:absolute;top:10px;right:10px;background:rgba(0,0,0,.55);color:#fff;font-weight:600;font-size:12px;padding:3px 10px;border-radius:999px}
  .ui-car__dots{display:flex;justify-content:center;gap:5px;padding:10px 0 4px}
  .ui-car__dots span{width:6px;height:6px;border-radius:50%;background:#3a3a3a;transition:background .15s}
  .ui-car__dots span.is-active{background:#0095f6;transform:scale(1.1)}
</style>

<script>
  const car=document.getElementById('car');
  const track=car.querySelector('.ui-car__track');
  const dots=car.querySelectorAll('.ui-car__dots span');
  const count=car.querySelector('.ui-car__count');
  track.addEventListener('scroll',()=>{
    const i=Math.round(track.scrollLeft/track.clientWidth);
    dots.forEach((d,k)=>d.classList.toggle('is-active',k===i));
    count.textContent=(i+1)+'/'+dots.length;
  });
</script>`,
    },
    {
      name: 'Bookmark Button',
      nameJa: 'ブックマークボタン',
      desc: 'タップで線→塗りに切り替わるブックマーク/保存アイコン。',
      detail: 'ブックマークボタンは「あとで読む」「お気に入りに保存」を1タップで切り替えるアイコンUIで、未保存時は線画(アウトライン)、保存時はベタ塗り(フィル)に切り替えるのが世界標準です。Instagramのコレクション保存、Twitterのブックマーク、Pinterestの「保存」など、SNSにおける「いいね」とは別軸の「自分用の倉庫に入れる」機能として急速に普及しました。タップ時の小さなバウンスアニメやトースト通知でフィードバックを返すと、操作が成立したことが伝わりやすくなります。ここではSVGのfillとstrokeを切り替えてミニマルに表現しています。',
      descEn: 'A pin/bookmark icon that flips from outline to filled when saved.',
      detailEn: 'A bookmark button toggles "save for later" with a single tap. Across virtually every social app, the convention is the same: outline icon when empty, filled icon when saved. Instagram\'s collections, Twitter\'s bookmarks, and Pinterest\'s "Save" all exploded by giving users a personal stash that\'s distinct from the public "like." Pair the toggle with a tiny bounce animation and a confirmation toast so users know it worked. This snippet flips the SVG between stroke-only and a solid fill — minimal but instantly readable.',
      code: `<!-- Inspired by Pinterest -->
<div class="ui-bm">
  <button class="ui-bm__btn" aria-pressed="false">
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path class="ui-bm__path" d="M6 3.5h12c.55 0 1 .45 1 1V21l-7-3.2L5 21V4.5c0-.55.45-1 1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    </svg>
    <span class="ui-bm__label">Save</span>
  </button>
  <button class="ui-bm__btn ui-bm__btn--saved" aria-pressed="true">
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M6 3.5h12c.55 0 1 .45 1 1V21l-7-3.2L5 21V4.5c0-.55.45-1 1-1z" fill="currentColor"/>
    </svg>
    <span class="ui-bm__label">Saved</span>
  </button>
</div>

<style>
  .ui-bm{display:flex;gap:14px;padding:28px;background:#fafafa;border-radius:12px;font:14px -apple-system,'Segoe UI',sans-serif}
  .ui-bm__btn{display:inline-flex;align-items:center;gap:6px;border:0;background:transparent;color:#525252;cursor:pointer;padding:6px 10px;border-radius:8px;font:inherit;font-weight:500;transition:.15s}
  .ui-bm__btn:hover{background:#f0f0f0;color:#171717}
  .ui-bm__btn:active svg{transform:scale(.85)}
  .ui-bm__btn svg{transition:transform .25s cubic-bezier(.34,1.56,.64,1)}
  .ui-bm__btn--saved{color:#e60023}
  .ui-bm__btn--saved:hover{background:rgba(230,0,35,.08);color:#e60023}
</style>`,
    },
    {
      name: 'Hashtag Pill',
      nameJa: 'ハッシュタグ・メンションチップ',
      desc: '本文中の #tag や @user を色付きでチップ風に強調するインライン要素。',
      detail: 'ハッシュタグとメンションは、SNSの本文中に紛れ込む「タップ可能なリンク」です。#タグはトピック検索、@ユーザーはプロフィールへの導線として機能し、本文と区別するためにブランドカラー(青や紫)で着色されます。X や Threads ではテキストカラーのみの控えめな表現ですが、Instagramの一部UIや、最近のPinterest等ではピル(丸い枠で囲んだチップ)状の強い装飾も見られます。本文内に混ぜるときはline-height・縦位置のズレを起こしさないようpaddingを抑え、複数並んだ場合にも改行で破綻しないようdisplay:inlineを基本にすると安全です。',
      descEn: 'Inline colored chips that highlight `#tag` and `@user` within post text.',
      detailEn: 'Hashtags and mentions are the "tappable links" hiding inside post text. `#hashtags` open topic searches; `@mentions` jump to profiles. Both are tinted in a brand color (blue or purple) to set them apart from regular copy. X and Threads keep it understated with text color alone, while Instagram\'s newer UIs and Pinterest sometimes go full pill-shape with a rounded background. Inline usage demands restraint: keep vertical rhythm intact by minimizing padding, and lean on `display:inline` so wraps don\'t fracture the paragraph.',
      code: `<!-- Inspired by Threads -->
<article class="ui-tag">
  <header class="ui-tag__head">
    <div class="ui-tag__avatar" style="background:linear-gradient(135deg,#fb7185,#f43f5e)">AY</div>
    <div><b>Ayaka Yoshida</b> <span class="ui-tag__handle">@ayaka.makes · 3h</span></div>
  </header>
  <p class="ui-tag__body">
    今日のもくもく会、おつかれさまでした<br>
    リファクタの話で <a class="ui-tag__chip">@kenji.dev</a> と盛り上がりすぎて時間溶けた…<br>
    <a class="ui-tag__chip ui-tag__chip--hash">#もくもく会</a>
    <a class="ui-tag__chip ui-tag__chip--hash">#リファクタリング</a>
    <a class="ui-tag__chip ui-tag__chip--hash">#TypeScript</a>
  </p>
</article>

<style>
  .ui-tag{max-width:520px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:14px 16px;font:15px -apple-system,'Segoe UI',Roboto,sans-serif;color:#111827}
  .ui-tag__head{display:flex;align-items:center;gap:10px;margin-bottom:8px}
  .ui-tag__avatar{flex:none;width:36px;height:36px;border-radius:50%;color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center}
  .ui-tag__handle{color:#9ca3af;font-weight:400;margin-left:4px;font-size:13.5px}
  .ui-tag__body{margin:0;line-height:1.55}
  .ui-tag__chip{display:inline;color:#2563eb;text-decoration:none;font-weight:500;cursor:pointer;padding:1px 2px;border-radius:4px;transition:background .12s}
  .ui-tag__chip:hover{background:rgba(37,99,235,.08)}
  .ui-tag__chip--hash{color:#7c3aed;background:rgba(124,58,237,.08);padding:2px 8px;border-radius:999px;margin-right:4px;font-size:13.5px}
  .ui-tag__chip--hash:hover{background:rgba(124,58,237,.16)}
</style>`,
    },
  ],
}
