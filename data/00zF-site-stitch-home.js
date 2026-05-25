/**
 * UI Parts — AI design tool home-screen skeleton.
 * Generic, copy-paste-ready snippets that capture the look of an AI-driven
 * design generator's home: dark dot-grid canvas, slim left rail with
 * project list, asymmetric welcome + composer, app/web mode toggle,
 * model dropdown pill, suggestion chips, and an idea carousel.
 * Code is original.
 */

export const category = {
  id: 'ui-parts-site-stitch-home',
  title: 'AIデザインツール ホーム画面風 骨格',
  titleEn: 'AI Design Tool Home Skeleton',
  description:
    'AI UI生成ツールのホーム画面に頻出する構成を再現。ダークなドットグリッド背景、左レール(マイ/共有タブ・最近・例セクション)、非対称な「ようこそ」見出し+デザインから始めるピル、大型プロンプト入力(下部にApp/Web切替・モデル選択・マイク・送信)、サジェストチップ、アイデアカードカルーセル、フローティング小型アシスタントまで12種。',
  descriptionEn:
    "Captures the common layout of an AI UI-generator home: dark dot-grid canvas, a slim left rail (My / Shared tabs, Recent and Examples sections), an asymmetric welcome headline + start-from-design pill, a large prompt composer with mode toggle / model picker / mic / send, suggestion chips, an idea carousel, and a floating mini-assistant — 12 parts.",
  terms: [
    {
      name: 'App Header Strip',
      nameJa: '上部ヘッダー(ロゴ+BETA+右側アイコン群)',
      desc: '左にロゴと小さなBETAバッジ、右に Docs / コミュニティ / X / ギフト / メニュー / アバターのアイコン列。背景は真っ黒に近いダーク。',
      detail:
        'ホーム画面のトップに敷くスリムなヘッダー。背景はほぼ黒(#0d0d0f)、左端にプロダクトロゴ(白い太字)とその右に小さな枠線つき "BETA" バッジ、右端には「Docs」ラベル付きアイコン+コミュニティ(Discord風)アイコン+X(旧Twitter)アイコン+ギフト箱+三点メニュー+丸いユーザーアバター。アイコンは全て薄白でホバー時に明るくなります。',
      descEn:
        'A slim top header — logo + BETA badge on the left, a strip of muted icons on the right (Docs, community, X, gift, menu, avatar) on a near-black background.',
      detailEn:
        'A slim top header strip. Near-black (#0d0d0f) background with the product logo and a small outlined BETA pill on the left. On the right: a labeled "Docs" icon, a community icon, an X icon, a gift icon, a three-dot menu, and a circular avatar. Icons are muted-white and brighten on hover.',
      code: `<!-- App header strip -->
<header class="ui-stchh-hd">
  <div class="ui-stchh-hd__brand">
    <span class="ui-stchh-hd__logo">Stitch</span>
    <span class="ui-stchh-hd__beta">BETA</span>
  </div>
  <div class="ui-stchh-hd__right">
    <button type="button" class="ui-stchh-hd__ico ui-stchh-hd__ico--lbl">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
      <span>Docs</span>
    </button>
    <button type="button" class="ui-stchh-hd__ico" aria-label="Community">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.5 5a16 16 0 0 0-4-1.2l-.2.4a14 14 0 0 0-7 0l-.2-.4A16 16 0 0 0 4.5 5C2 9 1.3 13 1.6 16.8A16 16 0 0 0 6.5 19l.4-.6a11 11 0 0 1-1.8-.9l.4-.3a12 12 0 0 0 13 0l.4.3c-.6.4-1.2.7-1.8.9l.4.6a16 16 0 0 0 4.9-2.2C22.7 12.5 21.6 8.6 19.5 5zM8.7 14.4c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/></svg>
    </button>
    <button type="button" class="ui-stchh-hd__ico" aria-label="X">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-4.78-6.236L4.86 22H2.1l6.974-7.97L2 2h7.005l4.33 5.72L18.244 2zm-2.39 18h1.658L8.22 4H6.46l9.394 16z"/></svg>
    </button>
    <button type="button" class="ui-stchh-hd__ico ui-stchh-hd__ico--dot" aria-label="新着">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M7 8V5a3 3 0 0 1 6 0 3 3 0 0 1 6 0v3"/></svg>
    </button>
    <button type="button" class="ui-stchh-hd__ico" aria-label="More">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>
    </button>
    <span class="ui-stchh-hd__av">S</span>
  </div>
</header>

<style>
  .ui-stchh-hd{display:flex;justify-content:space-between;align-items:center;height:64px;padding:0 22px;background:#0d0d0f;color:#fff;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;border-bottom:1px solid rgba(255,255,255,.04)}
  .ui-stchh-hd__brand{display:flex;align-items:center;gap:10px}
  .ui-stchh-hd__logo{font:700 22px/1 "Inter",sans-serif;letter-spacing:-.02em;color:#fff}
  .ui-stchh-hd__beta{font:600 10px/1 "Inter",sans-serif;letter-spacing:.1em;color:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.18);padding:4px 7px;border-radius:9999px}
  .ui-stchh-hd__right{display:flex;align-items:center;gap:4px}
  .ui-stchh-hd__ico{width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;gap:6px;background:transparent;border:0;color:rgba(255,255,255,.7);cursor:pointer;border-radius:8px;transition:color .15s,background .15s;position:relative;padding:0 8px}
  .ui-stchh-hd__ico:hover{color:#fff;background:rgba(255,255,255,.05)}
  .ui-stchh-hd__ico svg{width:18px;height:18px}
  .ui-stchh-hd__ico--lbl{width:auto;padding:0 12px;font:500 13px/1 "Inter",sans-serif;color:rgba(255,255,255,.85);gap:8px}
  .ui-stchh-hd__ico--dot::after{content:"";position:absolute;top:9px;right:10px;width:6px;height:6px;border-radius:50%;background:#8b5cf6;border:1.5px solid #0d0d0f}
  .ui-stchh-hd__av{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#a78bfa,#ec4899);color:#fff;display:inline-flex;align-items:center;justify-content:center;font:700 12px/1 "Inter",sans-serif;margin-left:6px;cursor:pointer}
</style>`,
    },
    {
      name: 'Sidebar Segmented Tabs',
      nameJa: 'サイドバー上部 2タブ(マイ / 共有)',
      desc: '左レール最上段に2タブのピル切替。選択中は黒+白文字、非選択はグレー文字+アイコン。',
      detail:
        '左サイドバー一番上に置く2タブ切替。横長のセグメンテッドコントロール風で、選択中タブは黒背景+白文字、非選択タブは透明背景+薄グレー文字+先頭にアイコン。タブ全体は薄グレー枠線で囲まれた一体型ピル。アイコンサイズは14px。',
      descEn:
        'A two-tab segmented control at the top of the left sidebar — selected tab gets a black fill with white text; the other stays muted with a small icon.',
      detailEn:
        'A two-tab segmented control at the top of the left rail. The active tab has a black fill with white text; the other is transparent with muted gray text and a 14px leading icon. Both tabs sit inside a single muted-border pill.',
      code: `<!-- Sidebar segmented tabs -->
<div class="ui-stchh-segtabs">
  <button type="button" class="ui-stchh-segtabs__t ui-stchh-segtabs__t--on">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
    マイ プロジェクト
  </button>
  <button type="button" class="ui-stchh-segtabs__t">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    共有アイテム
  </button>
</div>

<style>
  .ui-stchh-segtabs{display:flex;background:#101013;border:1px solid rgba(255,255,255,.06);border-radius:9999px;padding:5px;gap:2px;width:280px;max-width:100%;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif}
  .ui-stchh-segtabs__t{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;background:transparent;border:0;color:rgba(255,255,255,.55);padding:9px 8px;border-radius:9999px;font:500 13px/1 "Inter",sans-serif;cursor:pointer;letter-spacing:-.005em;transition:.15s}
  .ui-stchh-segtabs__t svg{width:14px;height:14px}
  .ui-stchh-segtabs__t:hover{color:#fff}
  .ui-stchh-segtabs__t--on{background:#000;color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
</style>`,
    },
    {
      name: 'Sidebar Project List',
      nameJa: 'サイドバー プロジェクトリスト(検索+「最近」「例」)',
      desc: '上部に検索入力、下に「最近」「例」のセクション見出しと、サムネ+タイトル+日付+共有バッジのプロジェクト行。',
      detail:
        '左サイドバー本体。最上部に円ピル型の検索入力(虫眼鏡+プレースホルダー)、下に小さなラベル「最近」「例」を区切りに、プロジェクト行が並びます。各行は: 48pxの角丸サムネイル + タイトル(白)+ 下に日付(灰色、小さなカレンダーアイコン付き)+ さらに右にちらり「人」アイコン+共有ラベル(共有済みの場合)。行ホバーで微かに背景が浮き上がります。',
      descEn:
        'A left-rail project list — circular search pill on top, then "Recent" and "Examples" sections of rows showing a rounded thumbnail, title, date, and a small "shared" indicator.',
      detailEn:
        'The body of the left rail. A circular search pill (magnifier + placeholder) sits on top. Below are small "Recent" and "Examples" section labels, then project rows: a 48px rounded thumbnail + a white title + a gray date line (with a tiny calendar icon) + a faint "people / shared" badge when relevant. Rows lift slightly on hover.',
      code: `<!-- Sidebar project list -->
<aside class="ui-stchh-list">
  <div class="ui-stchh-list__search">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
    <input type="search" placeholder="プロジェクトを検索">
  </div>
  <p class="ui-stchh-list__sec">最近</p>
  <a class="ui-stchh-list__row" href="#">
    <span class="ui-stchh-list__thumb" aria-hidden="true"><span class="ui-stchh-list__thumb--bars"></span></span>
    <span class="ui-stchh-list__main">
      <span class="ui-stchh-list__title">Remix of Main Dashboard</span>
      <span class="ui-stchh-list__meta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        May 25, 2026
      </span>
    </span>
  </a>
  <a class="ui-stchh-list__row" href="#">
    <span class="ui-stchh-list__thumb" aria-hidden="true"><span class="ui-stchh-list__thumb--bars"></span></span>
    <span class="ui-stchh-list__main">
      <span class="ui-stchh-list__title">Remix of Main Dashboard</span>
      <span class="ui-stchh-list__meta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        May 25, 2026
      </span>
    </span>
  </a>
  <p class="ui-stchh-list__sec">例</p>
  <a class="ui-stchh-list__row" href="#">
    <span class="ui-stchh-list__thumb ui-stchh-list__thumb--app" aria-hidden="true"></span>
    <span class="ui-stchh-list__main">
      <span class="ui-stchh-list__title">Main Dashboard</span>
      <span class="ui-stchh-list__meta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>
        Mar 14, 2026
        <span class="ui-stchh-list__share">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>
          共有
        </span>
      </span>
    </span>
  </a>
  <a class="ui-stchh-list__row" href="#">
    <span class="ui-stchh-list__thumb ui-stchh-list__thumb--photo" aria-hidden="true"></span>
    <span class="ui-stchh-list__main">
      <span class="ui-stchh-list__title">Home Lookbook</span>
      <span class="ui-stchh-list__meta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>
        Mar 14, 2026
        <span class="ui-stchh-list__share">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>
          共有
        </span>
      </span>
    </span>
  </a>
  <a class="ui-stchh-list__row" href="#">
    <span class="ui-stchh-list__thumb ui-stchh-list__thumb--dark" aria-hidden="true"></span>
    <span class="ui-stchh-list__main">
      <span class="ui-stchh-list__title">Vertical Feed</span>
      <span class="ui-stchh-list__meta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>
        Mar 14, 2026
        <span class="ui-stchh-list__share">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/></svg>
          共有
        </span>
      </span>
    </span>
  </a>
</aside>

<style>
  .ui-stchh-list{width:280px;max-width:100%;background:#0d0d0f;border:1px solid rgba(255,255,255,.04);border-radius:18px;padding:14px;color:#fff;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;display:flex;flex-direction:column;gap:6px}
  .ui-stchh-list__search{display:flex;align-items:center;gap:8px;background:#15151a;border:1px solid rgba(255,255,255,.06);border-radius:9999px;padding:0 14px;color:rgba(255,255,255,.5);height:38px;margin-bottom:14px}
  .ui-stchh-list__search svg{width:16px;height:16px;flex-shrink:0}
  .ui-stchh-list__search input{flex:1;background:transparent;border:0;outline:none;color:#fff;font:400 13px/1 "Inter",sans-serif}
  .ui-stchh-list__search input::placeholder{color:rgba(255,255,255,.4)}
  .ui-stchh-list__sec{margin:14px 4px 6px;font:600 11px/1 "Inter",sans-serif;letter-spacing:.04em;color:rgba(255,255,255,.45)}
  .ui-stchh-list__row{display:flex;align-items:center;gap:12px;padding:8px;border-radius:12px;text-decoration:none;color:#fff;transition:background .15s}
  .ui-stchh-list__row:hover{background:rgba(255,255,255,.04)}
  .ui-stchh-list__thumb{flex-shrink:0;width:42px;height:42px;border-radius:8px;background:#1d1d22;display:block;position:relative;overflow:hidden;background:linear-gradient(135deg,#f7f6f1,#dad7c9)}
  .ui-stchh-list__thumb--bars{position:absolute;left:6px;right:6px;top:8px;bottom:8px;background:linear-gradient(180deg,rgba(0,0,0,.06) 4px,transparent 4px) 0 0 / 100% 8px,linear-gradient(90deg,rgba(0,0,0,.1) 60%,transparent 60%);border-radius:2px;opacity:.8}
  .ui-stchh-list__thumb--app{background:linear-gradient(135deg,#e6e7e1,#cfd0c4)}
  .ui-stchh-list__thumb--photo{background:linear-gradient(135deg,#7a8aa1,#3a4858)}
  .ui-stchh-list__thumb--dark{background:linear-gradient(135deg,#1a1a1d,#3a1a55)}
  .ui-stchh-list__main{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
  .ui-stchh-list__title{font:500 13px/1.3 "Inter",sans-serif;color:#fff;letter-spacing:-.005em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-stchh-list__meta{display:inline-flex;align-items:center;gap:6px;font:400 11px/1 "Inter",sans-serif;color:rgba(255,255,255,.5)}
  .ui-stchh-list__meta svg{width:12px;height:12px}
  .ui-stchh-list__share{display:inline-flex;align-items:center;gap:3px;margin-left:8px;color:rgba(255,255,255,.5)}
</style>`,
    },
    {
      name: 'Asymmetric Welcome + Start Pill',
      nameJa: '非対称ようこそ見出し+「デザインから始める」ピル',
      desc: '画面左上に巨大な細字"ようこそ"見出し、その右上に小さな枠線丸ピル「+ デザインから始める」。',
      detail:
        'ホーム画面のメインタイトル領域。左に大きく細めの "○○へようこそ…" 見出し(56〜64px、line-height tight、淡白)、その同じ行の右端に小さな丸ピル「+ デザインから始める」(border + 半透明背景 + 細字)。普通は中央寄せにしがちな構図を、あえて左端と右端に分けることでミニマル感を出すパターン。',
      descEn:
        'A giant thin "Welcome…" headline aligned left, paired with a small outlined "+ Start from a design" pill in the top-right corner of the same row.',
      detailEn:
        'The hero title region. A big thin "Welcome to …" headline anchors the left (56–64px, tight line-height, soft white). On the same row, a small outlined "+ Start from a design" pill sits on the right. Splitting these to opposite ends keeps the layout minimal while still offering a clear secondary action.',
      code: `<!-- Asymmetric welcome + start pill -->
<section class="ui-stchh-welcome">
  <h1 class="ui-stchh-welcome__h">Stitch へようこそ<span class="ui-stchh-welcome__dots">...</span></h1>
  <button type="button" class="ui-stchh-welcome__cta">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
    デザインから始める
  </button>
</section>

<style>
  .ui-stchh-welcome{display:flex;align-items:center;justify-content:space-between;gap:24px;max-width:880px;margin:0 auto;padding:32px 24px 24px;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff;background:#0d0d0f}
  .ui-stchh-welcome__h{margin:0;font:300 56px/1.05 "Inter",sans-serif;letter-spacing:-.03em;color:#fff;flex:1;min-width:0}
  .ui-stchh-welcome__dots{color:rgba(255,255,255,.4)}
  .ui-stchh-welcome__cta{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.14);color:#fff;padding:9px 16px 9px 12px;border-radius:9999px;font:500 13px/1 "Inter",sans-serif;cursor:pointer;flex-shrink:0;transition:.15s}
  .ui-stchh-welcome__cta:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.26)}
  .ui-stchh-welcome__cta svg{width:14px;height:14px}
  @media(max-width:560px){.ui-stchh-welcome__h{font-size:36px}}
</style>`,
    },
    {
      name: 'Announcement Pill',
      nameJa: '上部アナウンス・ピル(アクセント色+×閉じる)',
      desc: 'メインエリア最上部に貼る小さな黒丸ピル。アクセント色のタイトル+×で閉じる。',
      detail:
        '「Google I/O」「リリース告知」など期間限定のお知らせを表示する小さなピル型バナー。背景は暗いグレー丸ピル、左に通常文字でリード(白)、その後ろに紫アクセント色のキーフレーズ(太字)、右端に小さな×閉じるボタン。中央寄せでメインエリア上部にポンと置く。',
      descEn:
        'A small dark pill banner at the top of the main canvas — neutral lead text, an accent-colored highlight, and a dismiss × on the right.',
      detailEn:
        'A compact dark pill that surfaces an announcement at the top of the canvas. White lead text on the left, a purple-accented highlighted phrase next, and a small × dismiss on the right. Centered, dropped onto the canvas as a self-contained chip.',
      code: `<!-- Announcement pill -->
<div class="ui-stchh-ann">
  <span>Google I/O: <strong>5 Major Upgrades</strong></span>
  <button type="button" aria-label="閉じる">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
  </button>
</div>

<style>
  .ui-stchh-ann{display:inline-flex;align-items:center;gap:10px;background:rgba(20,20,26,.85);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);color:#fff;padding:7px 8px 7px 14px;border-radius:9999px;font:400 13px/1 "Inter","Helvetica Neue",-apple-system,sans-serif;letter-spacing:-.005em;box-shadow:0 8px 24px -8px rgba(0,0,0,.5)}
  .ui-stchh-ann strong{font-weight:600;color:#a78bfa}
  .ui-stchh-ann button{width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;background:transparent;border:0;color:rgba(255,255,255,.55);cursor:pointer;border-radius:50%;transition:.15s}
  .ui-stchh-ann button:hover{background:rgba(255,255,255,.08);color:#fff}
  .ui-stchh-ann button svg{width:14px;height:14px}
</style>`,
    },
    {
      name: 'Prompt Composer (multi-toolbar)',
      nameJa: 'プロンプト入力(下部ツールバー: 添付・モード・モデル・マイク・送信)',
      desc: 'ダーク角丸の大型テキストエリア。下端に左から+/モード切替、右端にパレット/モデル▾/マイク/送信。',
      detail:
        'AIへの指示を書く中央コンポーザー。角丸28pxのダーク半透明コンテナに、上部に占有スペースの大きい入力欄(border:none / 透明背景 / 16〜18px / 多行)。下部に2段構えのツールバー: 左に "+" 添付、続いて「アプリ / ウェブ」のセグメンテッド切替(アイコン付き)、右にパレット(配色)、「3 Flash ▾」モデルセレクタピル、マイク、送信(矢印)ボタンを並べる。',
      descEn:
        'A large dark prompt composer — multi-line textarea above, and a bottom toolbar with attach / app-vs-web toggle on the left and palette / model picker / mic / send on the right.',
      detailEn:
        'A center composer for AI prompts. A 28px-radius dark translucent container holds a generous textarea (no border, 16–18px, multi-line). A bottom toolbar splits into left actions (a "+" attach and an App / Web segmented toggle with icons) and right actions (a palette icon for color tone, a "3 Flash ▾" model pill, a mic, and a send-arrow button).',
      code: `<!-- Prompt composer -->
<section class="ui-stchh-cmp">
  <textarea rows="4" class="ui-stchh-cmp__ta" placeholder="どのような レスポンシブ ウェブ エクスペリエンスをデザインしますか?"></textarea>
  <div class="ui-stchh-cmp__bar">
    <div class="ui-stchh-cmp__left">
      <button type="button" class="ui-stchh-cmp__sq" aria-label="添付">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
      </button>
      <div class="ui-stchh-cmp__mode" role="tablist">
        <button type="button" class="ui-stchh-cmp__m" role="tab" aria-selected="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>
          アプリ
        </button>
        <button type="button" class="ui-stchh-cmp__m ui-stchh-cmp__m--on" role="tab" aria-selected="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg>
          ウェブ
        </button>
      </div>
    </div>
    <div class="ui-stchh-cmp__right">
      <button type="button" class="ui-stchh-cmp__sq" aria-label="配色">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22a10 10 0 0 1 0-20 8 8 0 0 1 8 8c0 2-2 4-4 4h-2a2 2 0 0 0-2 2c0 2-1 4-3 4z"/></svg>
      </button>
      <button type="button" class="ui-stchh-cmp__model">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8z"/></svg>
        3 Flash
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ui-stchh-cmp__model-caret" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <button type="button" class="ui-stchh-cmp__sq" aria-label="音声入力">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/></svg>
      </button>
      <button type="button" class="ui-stchh-cmp__send" aria-label="送信">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>
    </div>
  </div>
</section>

<style>
  .ui-stchh-cmp{max-width:880px;margin:0 auto;padding:18px;background:rgba(20,20,26,.6);border:1px solid rgba(255,255,255,.06);border-radius:28px;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff;backdrop-filter:blur(10px);transition:border-color .2s}
  .ui-stchh-cmp:focus-within{border-color:rgba(167,139,250,.4)}
  .ui-stchh-cmp__ta{display:block;width:100%;background:transparent;border:0;outline:none;resize:none;color:#fff;font:400 16px/1.55 "Inter",sans-serif;letter-spacing:-.005em;padding:6px 4px;min-height:96px;margin-bottom:6px}
  .ui-stchh-cmp__ta::placeholder{color:rgba(255,255,255,.45)}
  .ui-stchh-cmp__bar{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}
  .ui-stchh-cmp__left,.ui-stchh-cmp__right{display:flex;align-items:center;gap:6px}
  .ui-stchh-cmp__sq{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;background:transparent;border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.7);border-radius:9999px;cursor:pointer;transition:.15s}
  .ui-stchh-cmp__sq:hover{background:rgba(255,255,255,.06);color:#fff}
  .ui-stchh-cmp__sq svg{width:16px;height:16px}
  .ui-stchh-cmp__mode{display:flex;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:9999px;padding:3px;gap:2px}
  .ui-stchh-cmp__m{display:inline-flex;align-items:center;gap:6px;background:transparent;border:0;color:rgba(255,255,255,.55);padding:6px 12px;border-radius:9999px;font:500 13px/1 "Inter",sans-serif;cursor:pointer;transition:.15s}
  .ui-stchh-cmp__m svg{width:14px;height:14px}
  .ui-stchh-cmp__m:hover{color:#fff}
  .ui-stchh-cmp__m--on{background:#fff;color:#0d0d0f}
  .ui-stchh-cmp__model{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fff;padding:6px 10px 6px 8px;border-radius:9999px;font:500 13px/1 "Inter",sans-serif;cursor:pointer;transition:.15s}
  .ui-stchh-cmp__model:hover{background:rgba(255,255,255,.08)}
  .ui-stchh-cmp__model svg{width:14px;height:14px;color:#a78bfa}
  .ui-stchh-cmp__model-caret{color:rgba(255,255,255,.6)!important;width:12px!important;height:12px!important}
  .ui-stchh-cmp__send{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.7);border-radius:9999px;cursor:pointer;transition:.15s}
  .ui-stchh-cmp__send:hover{background:#fff;color:#0d0d0f;border-color:#fff}
  .ui-stchh-cmp__send svg{width:14px;height:14px}
</style>`,
    },
    {
      name: 'App / Web Mode Toggle',
      nameJa: 'アプリ / ウェブ モード切替(アイコン+ラベル)',
      desc: '横並び2ボタンの丸ピル切替。スマホアイコン+「アプリ」、PCアイコン+「ウェブ」。選択中だけ白塗り。',
      detail:
        'プロンプト下部に置く「生成対象」の切替UI。アイコン付きの2タブピル: 1つ目はスマホアイコン+「アプリ」、2つ目はPC(モニター)アイコン+「ウェブ」。選択中は白背景+黒文字、非選択は透明背景+薄白テキスト。タップで瞬時に切替できるシンプルなセグメンテッド・コントロール。',
      descEn:
        'A small two-button pill toggle — a phone icon for "App" and a monitor icon for "Web", with the active option in white-on-black.',
      detailEn:
        'A two-button pill toggle that sits below the prompt to pick generation target. Phone-icon "App" and monitor-icon "Web". Active option gets a white fill with black text; the other stays transparent with muted white text.',
      code: `<!-- App / Web mode toggle -->
<div class="ui-stchh-mode">
  <button type="button" class="ui-stchh-mode__b">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>
    アプリ
  </button>
  <button type="button" class="ui-stchh-mode__b ui-stchh-mode__b--on">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg>
    ウェブ
  </button>
</div>

<style>
  .ui-stchh-mode{display:inline-flex;background:#101013;border:1px solid rgba(255,255,255,.06);border-radius:9999px;padding:4px;gap:2px;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif}
  .ui-stchh-mode__b{display:inline-flex;align-items:center;gap:6px;background:transparent;border:0;color:rgba(255,255,255,.55);padding:8px 14px;border-radius:9999px;font:500 13px/1 "Inter",sans-serif;cursor:pointer;transition:.15s}
  .ui-stchh-mode__b svg{width:14px;height:14px}
  .ui-stchh-mode__b:hover{color:#fff}
  .ui-stchh-mode__b--on{background:#fff;color:#0d0d0f}
</style>`,
    },
    {
      name: 'Model Selector Pill',
      nameJa: 'モデルセレクタピル(✦アイコン + ラベル + ▾)',
      desc: '左に星(アクセント)、中央に「3 Flash」、右に下キャレット。クリックでモデル一覧ドロップダウン展開を示唆。',
      detail:
        'AIモデル選択用の丸ピル型ドロップダウンセレクタ。左に4角の星アイコン(紫アクセント)、中央にモデル名「3 Flash」、右に小さな下キャレット。ホバーで背景がわずかに明るくなり、クリック時にメニューが下に展開される前提のUI。プロンプト入力の右ツールバーに横並びで置きます。',
      descEn:
        'A model-picker pill — sparkle icon + label ("3 Flash") + caret. Click expands a dropdown menu of available models.',
      detailEn:
        'A pill-shaped model selector. Sparkle icon (purple accent) on the left, model name ("3 Flash") in the middle, a small caret on the right. Hover lifts the fill slightly; click opens a model-list dropdown. Sits in the right side of the prompt toolbar.',
      code: `<!-- Model selector pill -->
<button type="button" class="ui-stchh-model">
  <svg class="ui-stchh-model__star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8z"/></svg>
  3 Flash
  <svg class="ui-stchh-model__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
</button>

<style>
  .ui-stchh-model{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fff;padding:7px 10px 7px 10px;border-radius:9999px;font:500 13px/1 "Inter","Helvetica Neue",-apple-system,sans-serif;letter-spacing:-.005em;cursor:pointer;transition:.15s}
  .ui-stchh-model:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16)}
  .ui-stchh-model__star{width:14px;height:14px;color:#a78bfa}
  .ui-stchh-model__caret{width:12px;height:12px;color:rgba(255,255,255,.6)}
</style>`,
    },
    {
      name: 'Suggestion Prompt Chips',
      nameJa: 'サジェスト プロンプト チップ(横3列の長文ピル)',
      desc: '入力欄の下に並ぶ、3つの長い丸ピル。それぞれに例文プロンプトが入っており、末尾は…で省略。',
      detail:
        'プロンプト入力欄の下に並ぶ「アイデアの種」チップ列。3つの長い丸ピル(背景はわずかに半透明白、border は薄白)に、それぞれ "A page for a hotel in northern California..." のような英語のサンプルプロンプトを1行省略表示で配置。クリックで入力欄にその文が入る前提。横スクロール可能で、画面が狭ければ折り返します。',
      descEn:
        'A row of three long pill-shaped suggestion chips beneath the prompt — each holds an example prompt truncated with ellipsis.',
      detailEn:
        'A row of three pill suggestion chips under the prompt. Each long rounded pill (faint-white fill, faint border) holds an example prompt truncated with "…". Clicking inserts that text into the composer. Scrolls horizontally on small screens.',
      code: `<!-- Suggestion prompt chips -->
<div class="ui-stchh-sug">
  <button type="button" class="ui-stchh-sug__c">A page for a hotel in northern California…</button>
  <button type="button" class="ui-stchh-sug__c">A dashboard for a community-supported…</button>
  <button type="button" class="ui-stchh-sug__c">Booking page with 30min time slots for…</button>
</div>

<style>
  .ui-stchh-sug{display:flex;gap:10px;max-width:880px;margin:0 auto;padding:14px 24px;overflow-x:auto;scrollbar-width:none;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif}
  .ui-stchh-sug::-webkit-scrollbar{display:none}
  .ui-stchh-sug__c{flex-shrink:0;max-width:280px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.85);padding:9px 16px;border-radius:9999px;font:400 13px/1.2 "Inter",sans-serif;letter-spacing:-.005em;cursor:pointer;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:.15s}
  .ui-stchh-sug__c:hover{background:rgba(255,255,255,.08);color:#fff;border-color:rgba(255,255,255,.16)}
</style>`,
    },
    {
      name: 'Idea Carousel Header',
      nameJa: 'アイデア カルーセル(セクション見出し+左右矢印+横スクロール)',
      desc: '「アイデアをお探しですか?」見出し+右端に丸い前後ナビ。下に角丸の大型アイデアカードが横並び。',
      detail:
        'ホーム下半分でユーザーにインスピレーションを与える横スクロール式カルーセル。上部に左寄せ大見出し+右端に丸い前後ナビ(◀/▶)、下に巨大な角丸カード(イメージ + 簡易プレビュー + キャプション)を3〜4枚横並びで配置。指やトラックパッドで左右スクロール、ナビボタンで1枚ずつ送る前提。',
      descEn:
        'An idea carousel — left-aligned section title + circular prev/next nav on the right, with large rounded idea cards scrolling horizontally below.',
      detailEn:
        "A bottom carousel that seeds inspiration. A left-aligned section heading sits next to two circular prev/next buttons on the right, and a row of large rounded idea cards (image + tiny preview + caption) scrolls horizontally below. Drag/touch scroll, with the buttons stepping one card at a time.",
      code: `<!-- Idea carousel header + cards -->
<section class="ui-stchh-ideas">
  <header class="ui-stchh-ideas__hd">
    <h2>アイデアをお探しですか?</h2>
    <div class="ui-stchh-ideas__nav">
      <button type="button" aria-label="前へ">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button type="button" aria-label="次へ">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  </header>
  <div class="ui-stchh-ideas__row">
    <article class="ui-stchh-ideas__c ui-stchh-ideas__c--soft">
      <div class="ui-stchh-ideas__shot"></div>
      <p>北カリフォルニアのホテル予約サイト</p>
    </article>
    <article class="ui-stchh-ideas__c ui-stchh-ideas__c--cream">
      <div class="ui-stchh-ideas__shot"></div>
      <p>地域コミュニティ農場のダッシュボード</p>
    </article>
    <article class="ui-stchh-ideas__c ui-stchh-ideas__c--dark">
      <div class="ui-stchh-ideas__shot"></div>
      <p>30分単位の予約スロットページ</p>
    </article>
  </div>
</section>

<style>
  .ui-stchh-ideas{max-width:880px;margin:0 auto;padding:24px;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;color:#fff;background:#0d0d0f}
  .ui-stchh-ideas__hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
  .ui-stchh-ideas__hd h2{margin:0;font:500 17px/1.2 "Inter",sans-serif;letter-spacing:-.01em;color:#fff}
  .ui-stchh-ideas__nav{display:flex;gap:6px}
  .ui-stchh-ideas__nav button{width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fff;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:.15s}
  .ui-stchh-ideas__nav button:hover{background:rgba(255,255,255,.1)}
  .ui-stchh-ideas__nav svg{width:14px;height:14px}
  .ui-stchh-ideas__row{display:flex;gap:14px;overflow-x:auto;scrollbar-width:none;padding-bottom:4px}
  .ui-stchh-ideas__row::-webkit-scrollbar{display:none}
  .ui-stchh-ideas__c{flex:0 0 240px;background:#1d1d22;border:1px solid rgba(255,255,255,.06);border-radius:18px;padding:14px;display:flex;flex-direction:column;gap:14px;cursor:pointer;transition:.18s}
  .ui-stchh-ideas__c:hover{transform:translateY(-2px);border-color:rgba(167,139,250,.35)}
  .ui-stchh-ideas__shot{height:140px;border-radius:10px;background:linear-gradient(135deg,#d4d8d1,#9faa9b)}
  .ui-stchh-ideas__c--cream .ui-stchh-ideas__shot{background:linear-gradient(135deg,#efe7d6,#cabc94)}
  .ui-stchh-ideas__c--dark .ui-stchh-ideas__shot{background:linear-gradient(135deg,#2a1855,#522a8a)}
  .ui-stchh-ideas__c p{margin:0;font:500 12.5px/1.4 "Inter",sans-serif;color:rgba(255,255,255,.85);letter-spacing:-.005em}
</style>`,
    },
    {
      name: 'Dotted Canvas Backdrop',
      nameJa: 'ドットグリッド背景(微暗ビネット付き)',
      desc: '暗いベース色の上に18px間隔の極小ドット。中央に控えめなビネットで奥行きを出す。',
      detail:
        'AIキャンバスっぽい雰囲気を出す最小単位の背景パターン。ベースは #0d0d0f に近いダーク、その上に18px間隔の極小ドット(rgba(255,255,255,.06))を radial-gradient で並べ、中央に向かう微妙なビネット(放射状グラデーション)で奥行きを足します。コンテンツを上に重ねたときに「無限キャンバス」っぽさが出ます。',
      descEn:
        'A minimal canvas-like backdrop — near-black base with subtle 18px dot grid and a soft radial vignette to give the surface depth.',
      detailEn:
        'The bare-minimum backdrop that gives an AI-canvas feel. Near-black base (#0d0d0f) with a 18px-spaced dot grid (rgba white .06) via radial-gradient, plus a soft central vignette to add depth. Layered content on top reads as floating on an infinite surface.',
      code: `<!-- Dotted canvas backdrop -->
<section class="ui-stchh-canvas">
  <div class="ui-stchh-canvas__inner">
    <p class="ui-stchh-canvas__tag">— 無限キャンバス背景 —</p>
  </div>
</section>

<style>
  .ui-stchh-canvas{position:relative;height:320px;background:#0d0d0f;background-image:radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px);background-size:18px 18px;background-position:center;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif;border-radius:16px;overflow:hidden}
  .ui-stchh-canvas::after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.6) 100%);pointer-events:none}
  .ui-stchh-canvas__inner{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:1}
  .ui-stchh-canvas__tag{font:500 12px/1 "Inter",sans-serif;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.35);margin:0}
</style>`,
    },
    {
      name: 'Floating Mini Assistant',
      nameJa: '右下フローティング ミニアシスタント(円形小ボタン)',
      desc: '画面右下に固定された小さな円形ボタン。アバター風アイコン+わずかなグロウ。クリックでチャット展開を示唆。',
      detail:
        '画面右下に固定の小さな円形フローティングボタン。サイズは40px、背景は微妙にグラデの濃いグレー、白いミニチュア人型/モニターアイコンを中心配置。border は薄白で囲まれ、外側にうっすらグロウシャドウ。クリックでAIチャットがスライドアップする前提。ホーム画面ではUIに干渉せず、控えめに常駐します。',
      descEn:
        'A small fixed circular mini-assistant button anchored to the bottom-right corner — minimal icon, subtle outer glow; expands a chat overlay on click.',
      detailEn:
        "A 40px circular floating button pinned to the bottom-right corner. Subtle dark-gradient fill, a hairline white border, a small monitor/assistant icon centered. A soft outer glow gives it presence without competing with content. Clicking is meant to slide up an AI chat overlay.",
      code: `<!-- Floating mini assistant -->
<div class="ui-stchh-mini">
  <button type="button" class="ui-stchh-mini__b" aria-label="アシスタントを開く">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="13" rx="2"/><path d="M8 21h8M12 18v3"/><circle cx="9" cy="11" r="1.2" fill="currentColor"/><circle cx="15" cy="11" r="1.2" fill="currentColor"/></svg>
  </button>
</div>

<style>
  .ui-stchh-mini{position:relative;height:120px;background:#0d0d0f;border-radius:12px;font-family:"Inter","Helvetica Neue",-apple-system,sans-serif}
  .ui-stchh-mini__b{position:absolute;right:14px;bottom:14px;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#2a2a32 0%,#15151a 100%);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.85);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 12px 28px -8px rgba(0,0,0,.6),0 0 0 4px rgba(167,139,250,.06);transition:.18s}
  .ui-stchh-mini__b:hover{color:#fff;transform:translateY(-1px);box-shadow:0 16px 32px -8px rgba(0,0,0,.6),0 0 0 6px rgba(167,139,250,.1)}
  .ui-stchh-mini__b svg{width:18px;height:18px}
</style>`,
    },
  ],
}
