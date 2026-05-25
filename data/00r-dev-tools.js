/**
 * UI Parts Showcase (Developer Tools) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-dev-tools',
  title: '開発ツールUI',
  titleEn: 'Dev Tools UI',
  description: 'GitHub・GitLab・Linear・VS Code・Vercel などの開発者ツールでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Pull Request Status Header',
      nameJa: 'プルリクエストステータスヘッダー',
      desc: 'PRのタイトル・番号・状態バッジ・ブランチ参照を一行で示すヘッダー。',
      detail: 'プルリクエストの一覧や詳細ページ上部に表示される、PR全体の状態をひと目で示すヘッダーUIです。タイトルと「#1234」の番号、Open/Merged/Closedといった状態バッジ、`base ← compare`形式のブランチ表示が並びます。レビュアーはこの一行を見れば「いまマージ可能か」「どのブランチに入ろうとしているか」が分かるため、リスト画面でもPR詳細でも常に同じ並びにするのがコツです。状態バッジは色で意味を伝えるので、緑=Open、紫=Merged、赤=Closedを踏襲すると認知負荷が下がります。',
      descEn: 'A header that shows a PR title, #number, status badge (Open/Merged/Closed), and branch refs at a glance.',
      detailEn: 'This is the header you see at the top of a pull request page or row in a list — it sums up the PR in a single line. It packs the title, the "#1234" id, a status pill (Open/Merged/Closed), and a `base ← compare` branch label. Reviewers can tell whether the PR is mergeable and where it lands by scanning this row alone, so keeping the same layout across lists and detail screens is worth the effort. Color carries meaning in the badge: green for Open, purple for Merged, red for Closed is the convention most devs already read instinctively.',
      code: `<!-- Inspired by GitHub -->
<div class="ui-prh">
  <div class="ui-prh__top">
    <h1 class="ui-prh__title">Fix flaky auth test in CI runner <span class="ui-prh__num">#4821</span></h1>
  </div>
  <div class="ui-prh__meta">
    <span class="ui-prh__badge ui-prh__badge--open">
      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/><path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/></svg>
      Open
    </span>
    <span class="ui-prh__by"><b>maria-c</b> wants to merge <b>3 commits</b> into</span>
    <span class="ui-prh__branch">main</span>
    <span class="ui-prh__arrow">←</span>
    <span class="ui-prh__branch">fix/ci-auth-flake</span>
  </div>
</div>

<style>
  .ui-prh{max-width:560px;padding:18px 20px;background:#ffffff;border:1px solid #d0d7de;border-radius:6px;font:14px -apple-system,"Segoe UI",sans-serif;color:#1f2328}
  .ui-prh__top{margin-bottom:10px}
  .ui-prh__title{margin:0;font-size:24px;font-weight:400;line-height:1.25}
  .ui-prh__num{color:#59636e;font-weight:300}
  .ui-prh__meta{display:flex;align-items:center;flex-wrap:wrap;gap:8px;font-size:13px;color:#1f2328}
  .ui-prh__badge{display:inline-flex;align-items:center;gap:4px;padding:5px 12px;border-radius:2em;font-weight:500;font-size:12px;line-height:1}
  .ui-prh__badge--open{background:#1f883d;color:#fff}
  .ui-prh__by{color:#59636e}
  .ui-prh__by b{color:#1f2328;font-weight:600}
  .ui-prh__branch{background:#ddf4ff;color:#0969da;padding:2px 7px;border-radius:6px;font:500 12px ui-monospace,SFMono-Regular,Menlo,monospace}
  .ui-prh__arrow{color:#59636e}
</style>`,
    },
    {
      name: 'File Tree',
      nameJa: 'ファイルツリー',
      desc: 'フォルダとファイルが入れ子で並ぶ、VS Code風のサイドバーUI。',
      detail: 'エディタやリポジトリ画面で必ず出てくる、フォルダの中にフォルダ、その中にファイル……と入れ子で並ぶツリービューです。フォルダ行には開閉用の三角(シェブロン)が付き、クリックで子要素の表示・非表示が切り替わります。インデントの深さでネストの階層を視覚的に示し、ファイルの拡張子ごとに色違いのアイコンを付けるのが定番です。「いまどこを見ているか」を示すアクティブ行のハイライトと、選択行のキーボード操作を併せると、本物のVS Codeのようなフィーリングになります。',
      descEn: 'A VS Code–style sidebar tree with nested folders, files, chevron toggles, and indentation.',
      detailEn: 'You see this view in every editor and repo browser: folders that hold folders that hold files, nested to any depth. Each folder row has a small chevron triangle that flips open or closed to show or hide its children. Indentation makes the hierarchy obvious at a glance, and colored icons per file extension help users scan quickly. Pair an "active row" highlight with arrow-key navigation and the result feels just like the real VS Code explorer.',
      code: `<!-- Inspired by VS Code -->
<div class="ui-ft">
  <div class="ui-ft__head">EXPLORER</div>
  <div class="ui-ft__proj">my-app</div>
  <ul class="ui-ft__list">
    <li class="ui-ft__row ui-ft__row--folder is-open" style="--lv:0"><span class="ui-ft__chev">▾</span><span class="ui-ft__ic" style="color:#dcb67a">▸</span>src</li>
    <li class="ui-ft__row ui-ft__row--folder is-open" style="--lv:1"><span class="ui-ft__chev">▾</span><span class="ui-ft__ic" style="color:#dcb67a">▸</span>components</li>
    <li class="ui-ft__row" style="--lv:2"><span class="ui-ft__chev"></span><span class="ui-ft__ic" style="color:#519aba">⬢</span>Button.tsx</li>
    <li class="ui-ft__row is-active" style="--lv:2"><span class="ui-ft__chev"></span><span class="ui-ft__ic" style="color:#519aba">⬢</span>Header.tsx</li>
    <li class="ui-ft__row" style="--lv:2"><span class="ui-ft__chev"></span><span class="ui-ft__ic" style="color:#cbcb41">{}</span>Header.module.css</li>
    <li class="ui-ft__row ui-ft__row--folder" style="--lv:1"><span class="ui-ft__chev">▸</span><span class="ui-ft__ic" style="color:#dcb67a">▸</span>hooks</li>
    <li class="ui-ft__row" style="--lv:1"><span class="ui-ft__chev"></span><span class="ui-ft__ic" style="color:#519aba">⬢</span>App.tsx</li>
    <li class="ui-ft__row" style="--lv:1"><span class="ui-ft__chev"></span><span class="ui-ft__ic" style="color:#519aba">⬢</span>main.tsx</li>
    <li class="ui-ft__row" style="--lv:0"><span class="ui-ft__chev"></span><span class="ui-ft__ic" style="color:#cbcb41">{}</span>package.json</li>
    <li class="ui-ft__row" style="--lv:0"><span class="ui-ft__chev"></span><span class="ui-ft__ic" style="color:#9c9c9c">ⓘ</span>README.md</li>
  </ul>
</div>

<style>
  .ui-ft{max-width:280px;background:#252526;color:#cccccc;font:13px -apple-system,"Segoe UI",sans-serif;border-radius:6px;padding:8px 0;user-select:none}
  .ui-ft__head{font-size:11px;font-weight:700;letter-spacing:.08em;padding:0 12px 6px;color:#cccccc}
  .ui-ft__proj{font-size:11px;font-weight:700;padding:6px 12px;color:#cccccc}
  .ui-ft__list{list-style:none;margin:0;padding:0}
  .ui-ft__row{display:flex;align-items:center;height:22px;padding-left:calc(8px + var(--lv) * 12px);cursor:pointer;font-size:13px}
  .ui-ft__row:hover{background:#2a2d2e}
  .ui-ft__row.is-active{background:#37373d;color:#fff}
  .ui-ft__chev{width:14px;color:#cccccc;font-size:10px;text-align:center;opacity:.85}
  .ui-ft__ic{width:18px;text-align:center;font-size:12px}
</style>`,
    },
    {
      name: 'Commit Timeline Entry',
      nameJa: 'コミットタイムライン行',
      desc: 'アバター・コミットハッシュ・メッセージ・相対時刻が並ぶ履歴行。',
      detail: 'GitリポジトリのCommits画面でずらりと並ぶ、1コミット分のタイムライン行UIです。左に作者のアバター、続いて短縮メッセージ、右側にハッシュチップ(`a1b2c3d`)と「2 hours ago」のような相対時刻を配置します。ハッシュは等幅フォントで囲み、クリックすると詳細ページに行ける小さなチップ風にすると、開発者の慣れた見た目になります。複数コミットを縦に並べるときは行間を詰めすぎず、左に縦線を引いてタイムラインらしさを出すと、Vercel や GitHub のような雰囲気にまとまります。',
      descEn: 'A history row with an avatar, commit hash chip, message, and a relative timestamp.',
      detailEn: 'This is the row that fills the Commits view of any Git repo — one entry per commit. From left to right it shows the author avatar, the short message, a monospaced hash chip like `a1b2c3d`, and a relative time such as "2 hours ago". Wrapping the hash in a small clickable chip with a monospace font gives the row the look devs already expect. When stacking many rows, keep the line-height generous and draw a faint vertical line on the left to suggest a timeline — that subtle detail is what makes it feel like GitHub or Vercel.',
      code: `<!-- Inspired by GitHub -->
<ul class="ui-ct">
  <li class="ui-ct__row">
    <span class="ui-ct__av" style="background:linear-gradient(135deg,#6e40c9,#ec4899)">M</span>
    <div class="ui-ct__body">
      <div class="ui-ct__msg">Refactor token refresh flow to use exponential backoff</div>
      <div class="ui-ct__sub"><b>maria-c</b> committed 2 hours ago</div>
    </div>
    <a class="ui-ct__hash">a1b2c3d</a>
  </li>
  <li class="ui-ct__row">
    <span class="ui-ct__av" style="background:linear-gradient(135deg,#0969da,#54aeff)">J</span>
    <div class="ui-ct__body">
      <div class="ui-ct__msg">Add e2e test for password reset edge case</div>
      <div class="ui-ct__sub"><b>jpark</b> committed 5 hours ago</div>
    </div>
    <a class="ui-ct__hash">f0e9d8c</a>
  </li>
  <li class="ui-ct__row">
    <span class="ui-ct__av" style="background:linear-gradient(135deg,#1f883d,#56d364)">T</span>
    <div class="ui-ct__body">
      <div class="ui-ct__msg">Bump @types/node from 20.11.0 to 20.12.7</div>
      <div class="ui-ct__sub"><b>dependabot</b> committed yesterday</div>
    </div>
    <a class="ui-ct__hash">7c4e2a1</a>
  </li>
</ul>

<style>
  .ui-ct{max-width:560px;list-style:none;margin:0;padding:0;background:#fff;border:1px solid #d0d7de;border-radius:6px;font:14px -apple-system,"Segoe UI",sans-serif;color:#1f2328}
  .ui-ct__row{display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #d0d7de}
  .ui-ct__row:last-child{border-bottom:0}
  .ui-ct__av{flex:none;width:32px;height:32px;border-radius:50%;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:14px}
  .ui-ct__body{flex:1;min-width:0}
  .ui-ct__msg{font-weight:600;font-size:14px;color:#1f2328;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-ct__sub{font-size:12px;color:#59636e;margin-top:2px}
  .ui-ct__sub b{color:#1f2328;font-weight:600}
  .ui-ct__hash{flex:none;background:#f6f8fa;border:1px solid #d0d7de;color:#1f2328;font:12px ui-monospace,SFMono-Regular,Menlo,monospace;padding:3px 8px;border-radius:6px;cursor:pointer;text-decoration:none}
  .ui-ct__hash:hover{background:#eaeef2;color:#0969da}
</style>`,
    },
    {
      name: 'Code Diff Hunk',
      nameJa: 'コード差分ハンク',
      desc: '行番号付きで `+`緑・`-`赤の差分が並ぶunified diff表示。',
      detail: 'PRのレビュー画面でおなじみの、コード差分(diff)を1ハンク分表示するUIです。左に2列の行番号、右に実コードを配置し、追加された行は薄緑+左に`+`、削除された行は薄赤+左に`-`を付けます。コードは等幅フォントで、構文ハイライトはしない場合でも色付きの背景があるだけで「何が変わったか」が直感的に分かります。先頭の `@@ -10,6 +10,7 @@` のようなハンクヘッダーは紫系の文字でうっすら表示すると、本物のGitHub/GitLabの diff にぐっと近づきます。',
      descEn: 'A unified diff view with line numbers and green +/red − lines.',
      detailEn: 'This is the diff view every code reviewer lives in: one "hunk" of changed code from a pull request. Two columns of line numbers sit on the left and the code sits on the right. Added lines get a faint green background and a leading `+`; removed lines get a faint red background and a leading `−`. Even without syntax highlighting, the colored backgrounds make the change obvious. A hunk header like `@@ -10,6 +10,7 @@` rendered in a soft purple completes the GitHub/GitLab look.',
      code: `<!-- Inspired by GitHub -->
<div class="ui-diff">
  <div class="ui-diff__file">src/auth/refresh.ts</div>
  <table class="ui-diff__tbl">
    <tr class="ui-diff__hunk"><td colspan="3">@@ -10,6 +10,8 @@ async function refreshToken() {</td></tr>
    <tr><td class="ui-diff__ln">10</td><td class="ui-diff__ln">10</td><td class="ui-diff__code">  const res = await fetch('/api/refresh', {</td></tr>
    <tr><td class="ui-diff__ln">11</td><td class="ui-diff__ln">11</td><td class="ui-diff__code">    method: 'POST',</td></tr>
    <tr class="ui-diff__del"><td class="ui-diff__ln">12</td><td class="ui-diff__ln"></td><td class="ui-diff__code">-    credentials: 'omit',</td></tr>
    <tr class="ui-diff__add"><td class="ui-diff__ln"></td><td class="ui-diff__ln">12</td><td class="ui-diff__code">+    credentials: 'include',</td></tr>
    <tr class="ui-diff__add"><td class="ui-diff__ln"></td><td class="ui-diff__ln">13</td><td class="ui-diff__code">+    signal: AbortSignal.timeout(5000),</td></tr>
    <tr><td class="ui-diff__ln">13</td><td class="ui-diff__ln">14</td><td class="ui-diff__code">  });</td></tr>
    <tr><td class="ui-diff__ln">14</td><td class="ui-diff__ln">15</td><td class="ui-diff__code">  if (!res.ok) throw new Error('refresh failed');</td></tr>
    <tr><td class="ui-diff__ln">15</td><td class="ui-diff__ln">16</td><td class="ui-diff__code">  return res.json();</td></tr>
  </table>
</div>

<style>
  .ui-diff{max-width:600px;background:#fff;border:1px solid #d0d7de;border-radius:6px;font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#1f2328;overflow:hidden}
  .ui-diff__file{padding:8px 14px;background:#f6f8fa;border-bottom:1px solid #d0d7de;font:600 12px -apple-system,sans-serif;color:#1f2328}
  .ui-diff__tbl{width:100%;border-collapse:collapse}
  .ui-diff__tbl td{padding:0 10px;line-height:1.55;vertical-align:top}
  .ui-diff__ln{width:38px;text-align:right;color:#59636e;background:#f6f8fa;user-select:none;font-size:11px;padding:0 6px !important}
  .ui-diff__code{white-space:pre;font-size:12px}
  .ui-diff__hunk td{background:#ddf4ff;color:#0550ae;padding:4px 10px;font-size:11px;line-height:1.4}
  .ui-diff__add td{background:#e6ffec}
  .ui-diff__add .ui-diff__ln{background:#ccffd8}
  .ui-diff__del td{background:#ffebe9}
  .ui-diff__del .ui-diff__ln{background:#ffd7d5}
</style>`,
    },
    {
      name: 'Build Status Row',
      nameJa: 'ビルドステータス行',
      desc: 'サービス名・コミットSHA・所要時間・ステータスバッジを1行で並べたデプロイ履歴UI。',
      detail: 'VercelやNetlifyのDeployments画面、CircleCIのPipelinesでよく見る、ビルド/デプロイの履歴を1行ずつ並べるUIです。左にステータスアイコン(緑✓・赤×・スピナー)、続いてサービス名やプロジェクト名、コミットSHA、所要時間、最後に「Ready」「Building」「Failed」のような状態バッジを配置します。各行が等高で揃うようグリッドや`flex`で組み、SHAは等幅フォント、時間は薄いグレーで控えめに見せると、ずらっと並べても情報密度が高すぎず読みやすくなります。失敗行だけ赤い縦バーを左に出すと、視認性がさらに上がります。',
      descEn: 'A deploy/build history row showing status icon, service, commit SHA, duration, and a status badge.',
      detailEn: 'You see this on Vercel\'s Deployments page, Netlify\'s site dashboard, or CircleCI\'s pipelines list — one row per build or deploy. From left to right: a status icon (green check, red x, or a spinner), the service or project name, the short commit SHA, the duration, and a "Ready / Building / Failed" badge on the right. Lay out the row with flex or a grid so heights line up, render the SHA in a monospaced font, and keep the duration in soft gray to dial down its weight. A red bar on the left edge of failed rows pops them out of a long list nicely.',
      code: `<!-- Inspired by Vercel -->
<ul class="ui-bs">
  <li class="ui-bs__row ui-bs__row--ok">
    <span class="ui-bs__ic ui-bs__ic--ok">✓</span>
    <div class="ui-bs__main">
      <div class="ui-bs__name">marketing-site <span class="ui-bs__env">Production</span></div>
      <div class="ui-bs__sub"><code>a1b2c3d</code> · main · maria-c</div>
    </div>
    <span class="ui-bs__dur">42s</span>
    <span class="ui-bs__badge ui-bs__badge--ok">Ready</span>
  </li>
  <li class="ui-bs__row ui-bs__row--run">
    <span class="ui-bs__ic ui-bs__ic--run"></span>
    <div class="ui-bs__main">
      <div class="ui-bs__name">marketing-site <span class="ui-bs__env">Preview</span></div>
      <div class="ui-bs__sub"><code>f0e9d8c</code> · feat/pricing · jpark</div>
    </div>
    <span class="ui-bs__dur">1m 04s</span>
    <span class="ui-bs__badge ui-bs__badge--run">Building</span>
  </li>
  <li class="ui-bs__row ui-bs__row--err">
    <span class="ui-bs__ic ui-bs__ic--err">×</span>
    <div class="ui-bs__main">
      <div class="ui-bs__name">api-server <span class="ui-bs__env">Production</span></div>
      <div class="ui-bs__sub"><code>7c4e2a1</code> · main · dependabot</div>
    </div>
    <span class="ui-bs__dur">12s</span>
    <span class="ui-bs__badge ui-bs__badge--err">Error</span>
  </li>
</ul>

<style>
  .ui-bs{max-width:560px;list-style:none;margin:0;padding:0;background:#000;border:1px solid #1f1f1f;border-radius:8px;color:#ededed;font:14px -apple-system,"Inter","Segoe UI",sans-serif}
  .ui-bs__row{display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #1f1f1f;border-left:3px solid transparent}
  .ui-bs__row:last-child{border-bottom:0}
  .ui-bs__row--err{border-left-color:#e5484d}
  .ui-bs__ic{flex:none;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700}
  .ui-bs__ic--ok{background:#0e6b3a;color:#fff}
  .ui-bs__ic--err{background:#a4262c;color:#fff}
  .ui-bs__ic--run{border:2px solid #444;border-top-color:#ededed;animation:uibs-spin .8s linear infinite}
  @keyframes uibs-spin{to{transform:rotate(360deg)}}
  .ui-bs__main{flex:1;min-width:0}
  .ui-bs__name{font-weight:600;font-size:14px;color:#ededed}
  .ui-bs__env{font-weight:500;font-size:11px;color:#a1a1a1;background:#1a1a1a;padding:1px 6px;border-radius:4px;margin-left:6px}
  .ui-bs__sub{font-size:12px;color:#a1a1a1;margin-top:3px}
  .ui-bs__sub code{font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#ededed;background:#171717;padding:1px 5px;border-radius:4px}
  .ui-bs__dur{font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#a1a1a1}
  .ui-bs__badge{padding:3px 10px;border-radius:2em;font-size:11px;font-weight:600;letter-spacing:.02em}
  .ui-bs__badge--ok{background:#0a3320;color:#3fd373}
  .ui-bs__badge--run{background:#332300;color:#ffb224}
  .ui-bs__badge--err{background:#330a0c;color:#ff6369}
</style>`,
    },
    {
      name: 'Branch Picker Dropdown',
      nameJa: 'ブランチ選択ドロップダウン',
      desc: '検索付きで`main`や`feature/*`を選べる、現在のブランチにチェックが付くドロップダウン。',
      detail: 'リポジトリ画面の左上などに置かれる、ブランチを切り替えるためのドロップダウンUIです。トリガーボタンに現在のブランチ名(例: `main`)を表示し、開くと検索ボックスと候補リストが出ます。リストには `main`・`develop`・`feature/*` などのブランチが並び、現在選択中のものにはチェックマークが付くのが定番です。`feature/`プレフィックスや`fix/`プレフィックスにアイコンを変えると、目的別に瞬時に見分けられます。検索は大文字小文字を無視して「部分一致」にし、ブランチが100本あっても素早く絞り込めるようにします。',
      descEn: 'A searchable dropdown of branches (main, feature/*) with a check mark next to the current one.',
      detailEn: 'This is the branch switcher you see in the top-left of any repo view. The trigger shows the current branch — say `main` — and clicking it opens a search field and a list of candidates. The list contains branches like `main`, `develop`, and feature/fix branches, with a check mark beside the currently checked-out one. Swapping the leading icon for `feature/` vs `fix/` prefixes helps the eye spot the right group fast. Make the search case-insensitive substring matching so even a repo with hundreds of branches narrows down instantly as the user types.',
      code: `<!-- Inspired by GitHub -->
<div class="ui-bp" id="bp">
  <button class="ui-bp__trg" type="button">
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M9.5 3.25a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25z"/></svg>
    <b>main</b>
    <span class="ui-bp__caret">⌄</span>
  </button>
  <div class="ui-bp__pop">
    <div class="ui-bp__head">Switch branches/tags</div>
    <input aria-label="Find a branch..." class="ui-bp__search" placeholder="Find a branch...">
    <ul class="ui-bp__list">
      <li class="is-current"><span class="ui-bp__check">✓</span>main<span class="ui-bp__tag">default</span></li>
      <li><span class="ui-bp__check"></span>develop</li>
      <li><span class="ui-bp__check"></span>feature/pricing-redesign</li>
      <li><span class="ui-bp__check"></span>feature/oauth-google</li>
      <li><span class="ui-bp__check"></span>fix/ci-auth-flake</li>
      <li><span class="ui-bp__check"></span>release/2024-q2</li>
    </ul>
  </div>
</div>

<style>
  .ui-bp{position:relative;display:inline-block;font:13px -apple-system,"Segoe UI",sans-serif;color:#1f2328}
  .ui-bp__trg{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;background:#f6f8fa;border:1px solid #d0d7de;border-radius:6px;cursor:pointer;color:#1f2328;font:500 13px -apple-system,sans-serif}
  .ui-bp__trg:hover{background:#eaeef2}
  .ui-bp__trg b{font-weight:600}
  .ui-bp__caret{color:#59636e;margin-left:2px;font-size:14px}
  .ui-bp__pop{position:absolute;top:calc(100% + 6px);left:0;width:280px;background:#fff;border:1px solid #d0d7de;border-radius:12px;box-shadow:0 8px 24px rgba(140,149,159,.2);padding:8px 0;z-index:10}
  .ui-bp__head{padding:6px 16px;font-weight:600;font-size:14px;border-bottom:1px solid #d0d7de;margin-bottom:6px}
  .ui-bp__search{display:block;width:calc(100% - 32px);margin:0 16px 6px;padding:5px 10px;font:13px -apple-system,sans-serif;border:1px solid #d0d7de;border-radius:6px;outline:none}
  .ui-bp__search:focus{border-color:#0969da;box-shadow:0 0 0 3px rgba(9,105,218,.3)}
  .ui-bp__list{list-style:none;margin:0;padding:4px 0;max-height:200px;overflow:auto}
  .ui-bp__list li{display:flex;align-items:center;gap:8px;padding:6px 16px;cursor:pointer;font-size:13px}
  .ui-bp__list li:hover{background:#f6f8fa}
  .ui-bp__list li.is-current{font-weight:600}
  .ui-bp__check{width:14px;color:#1f883d;font-weight:700;text-align:center}
  .ui-bp__tag{margin-left:auto;background:#ddf4ff;color:#0969da;padding:0 7px;border-radius:2em;font-size:11px;font-weight:500}
</style>

<script>
  const bp=document.getElementById('bp');
  const trg=bp.querySelector('.ui-bp__trg');
  const pop=bp.querySelector('.ui-bp__pop');
  const sr=bp.querySelector('.ui-bp__search');
  pop.style.display='none';
  trg.addEventListener('click',()=>{pop.style.display=pop.style.display==='none'?'block':'none'});
  sr.addEventListener('input',()=>{const v=sr.value.toLowerCase();bp.querySelectorAll('.ui-bp__list li').forEach(li=>{li.style.display=li.textContent.toLowerCase().includes(v)?'':'none'})});
  document.addEventListener('click',e=>{if(!bp.contains(e.target))pop.style.display='none'});
</script>`,
    },
    {
      name: 'Linear Issue Card',
      nameJa: 'Linear風イシューカード',
      desc: 'イシューID・タイトル・優先度バッジ・担当者アバター・ステータスが並ぶカード行。',
      detail: 'Linearのバックログ画面でずらりと並ぶ、1イシュー = 1行のカードUIです。左から「ENG-1234」のような短いID、ステータスドット、タイトル、右側に優先度バッジ・担当者アバター・期日が配置されます。背景はほぼ黒、文字は淡い白で、行頭の小さな丸アイコンで「Todo / In Progress / Done」を視覚的に伝えるのが特徴です。優先度は「Urgent(赤)」「High(オレンジ)」「Med(黄)」「Low(グレー)」のような4段階バッジで、ステータスドットは輪の塗りつぶし量で進捗を示すと、本物のLinearの“静かなのに情報量が多い”感じが出ます。',
      descEn: 'A Linear-style row showing issue ID, title, priority badge, assignee avatar, and status.',
      detailEn: 'This is the row that fills Linear\'s backlog: one issue per line. Left to right you have a short id like `ENG-1234`, a status dot, the issue title, then on the right a priority pill, an assignee avatar, and a due date. The background is almost black with soft white text, and a small circle at the start of each row signals "Todo / In Progress / Done" at a glance. Priority shows as a four-step pill (Urgent red, High orange, Med yellow, Low gray), while the status dot uses the amount of fill in its ring to show progress — that quiet detail is what gives Linear its information-dense but calm feel.',
      code: `<!-- Inspired by Linear -->
<ul class="ui-li">
  <li class="ui-li__row">
    <span class="ui-li__id">ENG-1284</span>
    <span class="ui-li__st ui-li__st--prog" title="In Progress"></span>
    <span class="ui-li__title">Refresh tokens get stuck in a loop on Safari 17</span>
    <span class="ui-li__pri ui-li__pri--urg">Urgent</span>
    <span class="ui-li__av" style="background:#5e6ad2">MC</span>
    <span class="ui-li__due">May 22</span>
  </li>
  <li class="ui-li__row">
    <span class="ui-li__id">ENG-1283</span>
    <span class="ui-li__st ui-li__st--todo" title="Todo"></span>
    <span class="ui-li__title">Add empty state for projects with zero issues</span>
    <span class="ui-li__pri ui-li__pri--med">Medium</span>
    <span class="ui-li__av" style="background:#ec4899">JP</span>
    <span class="ui-li__due">May 28</span>
  </li>
  <li class="ui-li__row">
    <span class="ui-li__id">ENG-1281</span>
    <span class="ui-li__st ui-li__st--done" title="Done"></span>
    <span class="ui-li__title">Wire up Slack notifications for closed PRs</span>
    <span class="ui-li__pri ui-li__pri--low">Low</span>
    <span class="ui-li__av" style="background:#10b981">TK</span>
    <span class="ui-li__due">—</span>
  </li>
</ul>

<style>
  .ui-li{max-width:580px;list-style:none;margin:0;padding:0;background:#08090a;border:1px solid #1f2023;border-radius:8px;font:13px -apple-system,"Inter","Segoe UI",sans-serif;color:#e6e6e6}
  .ui-li__row{display:flex;align-items:center;gap:10px;padding:9px 12px;border-bottom:1px solid #1a1b1e}
  .ui-li__row:last-child{border-bottom:0}
  .ui-li__row:hover{background:#0e1012}
  .ui-li__id{font:11px ui-monospace,SFMono-Regular,Menlo,monospace;color:#6f6f7a;width:62px;flex:none}
  .ui-li__st{width:14px;height:14px;border-radius:50%;flex:none;border:2px solid #6f6f7a;box-sizing:border-box}
  .ui-li__st--todo{border-color:#6f6f7a;background:transparent}
  .ui-li__st--prog{border-color:#f2bd44;background:conic-gradient(#f2bd44 0 50%,transparent 50% 100%)}
  .ui-li__st--done{border-color:#5e6ad2;background:#5e6ad2;position:relative}
  .ui-li__st--done::after{content:"✓";position:absolute;inset:0;color:#fff;font-size:9px;line-height:10px;text-align:center;font-weight:900}
  .ui-li__title{flex:1;min-width:0;color:#e6e6e6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13px}
  .ui-li__pri{font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;flex:none}
  .ui-li__pri--urg{background:rgba(229,72,77,.12);color:#ff6369}
  .ui-li__pri--med{background:rgba(242,189,68,.12);color:#f2bd44}
  .ui-li__pri--low{background:rgba(155,155,163,.12);color:#9b9ba3}
  .ui-li__av{flex:none;width:22px;height:22px;border-radius:50%;color:#fff;font-weight:700;font-size:10px;display:flex;align-items:center;justify-content:center}
  .ui-li__due{flex:none;font-size:11px;color:#6f6f7a;width:48px;text-align:right}
</style>`,
    },
    {
      name: 'CI Checks Summary',
      nameJa: 'CIチェック一覧',
      desc: '緑/赤アイコン・チェック名・Detailsリンクが縦に並ぶPR下部のCIサマリ。',
      detail: 'PR画面の下のほうにある「All checks have passed」のような、CIの個々のチェック結果を縦に並べたUIです。1行ごとに、左に成功(緑✓)/失敗(赤×)/実行中のスピナーアイコン、続いてジョブ名(例: `lint`, `unit-tests`, `build`, `deploy-preview`)、右側にチェック実行時間と「Details」リンクを配置します。全体の上に「Some checks failed / All checks passed」のサマリバッジを置くと、PRがマージ可能か即判断できます。失敗行だけクリックして詳細ログに飛べるようにすると、開発者のフローを邪魔しません。',
      descEn: 'A list of CI check rows with a green/red icon, name, duration, and Details link.',
      detailEn: 'This is the panel that sits near the bottom of a pull request — the one that says "All checks have passed" — broken down into a row per CI job. Each row has a status icon on the left (green check, red x, or a running spinner), the job name in the middle (`lint`, `unit-tests`, `build`, `deploy-preview`), and a duration plus a "Details" link on the right. Topping the list with a summary badge ("Some checks failed" or "All checks passed") makes mergeability obvious at a glance. Letting each failed row link straight to its log keeps the developer flow tight.',
      code: `<!-- Inspired by GitHub -->
<div class="ui-cic">
  <div class="ui-cic__sum">
    <span class="ui-cic__sum-ic">×</span>
    <b>1 failing check</b>
    <span class="ui-cic__sum-sub">4 checks have passed</span>
  </div>
  <ul class="ui-cic__list">
    <li>
      <span class="ui-cic__ic ui-cic__ic--ok">✓</span>
      <span class="ui-cic__svc">GitHub Actions</span>
      <span class="ui-cic__name">lint / eslint-ci</span>
      <span class="ui-cic__dur">28s</span>
      <a class="ui-cic__link">Details</a>
    </li>
    <li>
      <span class="ui-cic__ic ui-cic__ic--ok">✓</span>
      <span class="ui-cic__svc">GitHub Actions</span>
      <span class="ui-cic__name">test / unit (node 20)</span>
      <span class="ui-cic__dur">2m 14s</span>
      <a class="ui-cic__link">Details</a>
    </li>
    <li>
      <span class="ui-cic__ic ui-cic__ic--err">×</span>
      <span class="ui-cic__svc">GitHub Actions</span>
      <span class="ui-cic__name">test / e2e (playwright)</span>
      <span class="ui-cic__dur">4m 02s</span>
      <a class="ui-cic__link">Details</a>
    </li>
    <li>
      <span class="ui-cic__ic ui-cic__ic--run"></span>
      <span class="ui-cic__svc">Vercel</span>
      <span class="ui-cic__name">deploy-preview</span>
      <span class="ui-cic__dur">42s</span>
      <a class="ui-cic__link">Details</a>
    </li>
  </ul>
</div>

<style>
  .ui-cic{max-width:560px;background:#fff;border:1px solid #d0d7de;border-radius:6px;font:13px -apple-system,"Segoe UI",sans-serif;color:#1f2328;overflow:hidden}
  .ui-cic__sum{display:flex;align-items:center;gap:10px;padding:12px 16px;background:#fff8c5;border-bottom:1px solid #d0d7de;font-size:14px}
  .ui-cic__sum-ic{width:20px;height:20px;border-radius:50%;background:#d1242f;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px}
  .ui-cic__sum-sub{color:#59636e;margin-left:4px;font-weight:400;font-size:13px}
  .ui-cic__list{list-style:none;margin:0;padding:0}
  .ui-cic__list li{display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:1px solid #d0d7de;font-size:13px}
  .ui-cic__list li:last-child{border-bottom:0}
  .ui-cic__ic{flex:none;width:16px;height:16px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff}
  .ui-cic__ic--ok{background:#1f883d}
  .ui-cic__ic--err{background:#d1242f}
  .ui-cic__ic--run{background:transparent;border:2px solid #d0d7de;border-top-color:#0969da;box-sizing:border-box;animation:uicic-spin .8s linear infinite}
  @keyframes uicic-spin{to{transform:rotate(360deg)}}
  .ui-cic__svc{color:#59636e;font-size:12px;width:96px;flex:none}
  .ui-cic__name{flex:1;font-weight:500}
  .ui-cic__dur{color:#59636e;font:12px ui-monospace,SFMono-Regular,Menlo,monospace}
  .ui-cic__link{color:#0969da;text-decoration:none;font-weight:500;cursor:pointer;font-size:13px}
  .ui-cic__link:hover{text-decoration:underline}
</style>`,
    },
    {
      name: 'Repo Star Button',
      nameJa: 'リポジトリスターボタン',
      desc: '「Star ⭐」と件数「23.4k」が縦線で区切られたスプリットボタン。',
      detail: 'GitHubのリポジトリ右上で見かける、左に「Star ⭐」、右にスター数(例: `23.4k`)を表示するスプリット式ボタンUIです。中央の縦線で2つのエリアを分けることで、「クリックしてスターを付ける」アクションと「現在のスター数を見る」情報表示を同じボタンにまとめています。スター数の部分も独立してクリックでき、ステ-ジャー一覧ページなどへ遷移させるのが定番です。`★` のアイコンは中黒の星形が安定して見え、件数は `1,234` ではなく `1.2k`・`23.4k` のように省略表記にすると、桁数で幅が変動しないのでレイアウトが安定します。',
      descEn: 'A split-style button: "Star ⭐" on the left and a separated count "23.4k" on the right.',
      detailEn: 'This is the button at the top right of a GitHub repo: "Star ⭐" on the left, a divider, and a count like `23.4k` on the right. The vertical line splits the button into two zones — one is the "click to star" action, the other is an informational view of the current count. The count side can be clickable too, often linking to the stargazers list. Use a filled `★` glyph for the icon and abbreviate the number (`1.2k`, `23.4k`) instead of `1,234` so the width stays predictable as the count grows.',
      code: `<!-- Inspired by GitHub -->
<div class="ui-sb-wrap">
  <div class="ui-sb">
    <button class="ui-sb__act" type="button">
      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
      Star
    </button>
    <button class="ui-sb__cnt" type="button">23.4k</button>
  </div>
  <div class="ui-sb is-on">
    <button class="ui-sb__act" type="button">
      <svg viewBox="0 0 16 16" width="14" height="14" fill="#ddb125"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
      Starred
    </button>
    <button class="ui-sb__cnt" type="button">23.4k</button>
  </div>
</div>

<style>
  .ui-sb-wrap{display:flex;gap:14px;align-items:center;padding:20px;background:#f6f8fa;border-radius:8px}
  .ui-sb{display:inline-flex;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa;overflow:hidden;font:600 12px -apple-system,"Segoe UI",sans-serif;color:#1f2328;box-shadow:0 1px 0 rgba(31,35,40,.04)}
  .ui-sb__act,.ui-sb__cnt{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;background:#f6f8fa;border:0;cursor:pointer;font:inherit;color:#1f2328;height:28px;box-sizing:border-box}
  .ui-sb__act{border-right:1px solid #d0d7de}
  .ui-sb__act:hover,.ui-sb__cnt:hover{background:#eaeef2}
  .ui-sb.is-on .ui-sb__act{color:#9a6700}
  .ui-sb__cnt{color:#0969da}
</style>`,
    },
    {
      name: 'Terminal Log Line',
      nameJa: 'ターミナルログ行',
      desc: '色付きprefix・タイムスタンプ・等幅メッセージで構成される、ターミナル風ログUI。',
      detail: 'CIのログ画面やSentry、ローカルのターミナル出力で見る、1行=1ログのモノスペース表示UIです。先頭にレベル別の色付きprefix(`info`=シアン、`warn`=黄、`error`=赤、`debug`=グレー)を置き、続いて `12:04:17.832` のような高精度タイムスタンプ、最後に本文メッセージを並べます。背景は深いグレーや黒、文字は薄いグレー、レベルプレフィックスだけ彩度を上げる、というルールで揃えると本物のログビューに見えます。長いログを上から下に流すときに行の高さを `1.5` 前後にし、選択しやすいよう `user-select:text` を許可しておくとコピペがはかどります。',
      descEn: 'A terminal-style log row: colored level prefix, timestamp, and a monospaced message.',
      detailEn: 'This is the row you see in CI logs, Sentry breadcrumbs, or any local terminal: one line, one event, all monospaced. It starts with a color-coded level prefix (`info` cyan, `warn` yellow, `error` red, `debug` gray), then a precise timestamp like `12:04:17.832`, then the message itself. Use a dark gray or black background and soft gray text, saving the bright colors for the level prefix — that contrast is what makes it read as a "real" log. Keep line-height around `1.5` and leave `user-select:text` on so devs can copy lines easily as they scroll through hundreds of events.',
      code: `<!-- Inspired by Sentry -->
<div class="ui-tl">
  <div class="ui-tl__head">api-server · live tail</div>
  <pre class="ui-tl__body"><div class="ui-tl__row"><span class="ui-tl__lvl ui-tl__lvl--info">info</span><span class="ui-tl__ts">12:04:17.832</span><span class="ui-tl__msg">Server listening on http://0.0.0.0:3000</span></div><div class="ui-tl__row"><span class="ui-tl__lvl ui-tl__lvl--debug">debug</span><span class="ui-tl__ts">12:04:17.901</span><span class="ui-tl__msg">db.pool acquired connection #4 (idle=11)</span></div><div class="ui-tl__row"><span class="ui-tl__lvl ui-tl__lvl--info">info</span><span class="ui-tl__ts">12:04:18.044</span><span class="ui-tl__msg">POST /api/refresh 200 (42ms) user=u_8c1d</span></div><div class="ui-tl__row"><span class="ui-tl__lvl ui-tl__lvl--warn">warn</span><span class="ui-tl__ts">12:04:18.219</span><span class="ui-tl__msg">slow query: SELECT * FROM events WHERE … (1.4s)</span></div><div class="ui-tl__row"><span class="ui-tl__lvl ui-tl__lvl--error">error</span><span class="ui-tl__ts">12:04:18.512</span><span class="ui-tl__msg">UnhandledRejection: fetch failed for upstream auth.idp.local</span></div><div class="ui-tl__row"><span class="ui-tl__lvl ui-tl__lvl--info">info</span><span class="ui-tl__ts">12:04:18.768</span><span class="ui-tl__msg">retry scheduled in 250ms (attempt 1/3)</span></div></pre>
</div>

<style>
  .ui-tl{max-width:600px;background:#0d1117;border:1px solid #1f2933;border-radius:8px;overflow:hidden;font:12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#c9d1d9}
  .ui-tl__head{padding:8px 14px;background:#161b22;border-bottom:1px solid #1f2933;font:600 11px -apple-system,sans-serif;color:#8b949e;letter-spacing:.06em;text-transform:uppercase}
  .ui-tl__body{margin:0;padding:8px 14px;font-size:12px;line-height:1.6;white-space:pre-wrap;word-break:break-word;user-select:text}
  .ui-tl__row{display:flex;gap:10px;align-items:baseline}
  .ui-tl__lvl{flex:none;width:46px;text-transform:uppercase;font-weight:700;font-size:10px;letter-spacing:.04em;text-align:right}
  .ui-tl__lvl--info{color:#58a6ff}
  .ui-tl__lvl--warn{color:#f2cc60}
  .ui-tl__lvl--error{color:#ff7b72}
  .ui-tl__lvl--debug{color:#8b949e}
  .ui-tl__ts{flex:none;color:#6e7681;font-size:11.5px}
  .ui-tl__msg{color:#c9d1d9;white-space:pre-wrap;word-break:break-word}
</style>`,
    },
  ],
}
