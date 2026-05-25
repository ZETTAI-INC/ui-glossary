/**
 * UI Parts Showcase (Productivity Tools) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-productivity',
  title: '生産性ツールUI',
  titleEn: 'Productivity Tools UI',
  description: 'Notion・Asana・Trello・Figma・Miro などの生産性ツールでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Kanban Board Column',
      nameJa: 'カンバン列',
      desc: 'タスクをステータス別に縦に積むカンバンボードの1列。タイトル・件数・カードが並ぶ。',
      detail: 'カンバン列は、TrelloやJira、Asanaのボードビューで一番よく見るUIで、「To do」「進行中」「完了」といったステータスごとにタスクカードを縦に積み上げる枠です。列の上部にはステータス名と現在のカード件数が表示され、ひと目で「どこに仕事が溜まっているか」が分かります。カード追加ボタン(＋)も大体ここに置かれ、列の中でドラッグ&ドロップで並び替えたり、別の列にドロップしてステータスを変えたりするのが定番の操作です。WIP制限(同時に進められる数の上限)を出すこともあります。',
      descEn: 'A single column of a Kanban board: status title, card count, and a stack of cards.',
      detailEn: 'A Kanban column is the building block of board views in Trello, Jira, and Asana — a vertical container that stacks task cards under a status like "To do", "In progress", or "Done". The header shows the status name and the live card count so it is easy to spot where work is piling up. An add (＋) button typically sits next to the header, and the column itself is the drop target for drag-and-drop reordering and status changes. Some teams also display a WIP limit on the header to cap concurrent work.',
      code: `<!-- Inspired by Trello -->
<div class="ui-kb-col">
  <header class="ui-kb-col__hd">
    <span class="ui-kb-col__title">In progress</span>
    <span class="ui-kb-col__count">4</span>
    <span class="ui-kb-col__menu">⋯</span>
  </header>
  <ul class="ui-kb-col__list">
    <li class="ui-kb-col__card"><span class="ui-kb-col__lbl ui-kb-col__lbl--blue"></span>Onboarding redesign — week 2 review</li>
    <li class="ui-kb-col__card"><span class="ui-kb-col__lbl ui-kb-col__lbl--green"></span>Ship Slack webhook integration</li>
    <li class="ui-kb-col__card"><span class="ui-kb-col__lbl ui-kb-col__lbl--yellow"></span>QA: empty-state copy edits</li>
    <li class="ui-kb-col__card"><span class="ui-kb-col__lbl ui-kb-col__lbl--red"></span>Hotfix: timezone bug on calendar</li>
  </ul>
  <button type="button" class="ui-kb-col__add">＋ Add a card</button>
</div>

<style>
  .ui-kb-col{box-sizing:border-box;width:272px;background:#f1f2f4;border-radius:12px;padding:8px;font:14px -apple-system,'Segoe UI',Roboto,sans-serif;color:#172b4d}
  .ui-kb-col__hd{display:flex;align-items:center;gap:6px;padding:6px 8px 8px}
  .ui-kb-col__title{font-weight:600;font-size:14px}
  .ui-kb-col__count{font-size:12px;color:#5e6c84;background:#dfe1e6;border-radius:10px;padding:1px 8px}
  .ui-kb-col__menu{margin-left:auto;color:#5e6c84;cursor:pointer;padding:0 4px;border-radius:4px}
  .ui-kb-col__menu:hover{background:#dfe1e6}
  .ui-kb-col__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
  .ui-kb-col__card{background:#fff;border-radius:8px;padding:8px 10px;box-shadow:0 1px 0 rgba(9,30,66,.18);font-size:14px;line-height:1.35;cursor:grab}
  .ui-kb-col__card:hover{background:#f9fafb}
  .ui-kb-col__lbl{display:block;width:40px;height:6px;border-radius:3px;margin-bottom:6px}
  .ui-kb-col__lbl--blue{background:#579dff}
  .ui-kb-col__lbl--green{background:#4bce97}
  .ui-kb-col__lbl--yellow{background:#f5cd47}
  .ui-kb-col__lbl--red{background:#f87168}
  .ui-kb-col__add{display:block;width:100%;margin-top:8px;padding:6px 10px;border:0;background:transparent;color:#44546f;text-align:left;border-radius:6px;cursor:pointer;font:inherit}
  .ui-kb-col__add:hover{background:#dfe1e6;color:#172b4d}
</style>`,
    },
    {
      name: 'Kanban Card',
      nameJa: 'カンバンカード',
      desc: 'ラベル・タイトル・チェックリスト進捗・担当アバター・期限が並ぶTrello風カード。',
      detail: 'カンバンカードは、ボード上の1タスクを表すカード型のUIで、色付きラベル(優先度や種別)、タイトル、進捗バー付きチェックリスト件数、担当者のアバター、期限バッジなど多くの情報を小さな面積に詰め込みます。Trelloの「カード」、Asanaの「タスク」、Jiraの「Issue」がほぼ同じ形をしています。クリックで詳細モーダルが開き、ドラッグで他の列に移すとステータスが変わるのが共通の動きです。情報量が多いので、見出し(タイトル)が最も読みやすくなるようにヒエラルキーを作るのがコツです。',
      descEn: 'A Trello-style task card with color labels, title, checklist progress, assignee avatars, and a due date.',
      detailEn: 'A Kanban card is a compact UI that crams a lot of meta about one task into a small surface: color labels (priority or type), the task title, a checklist completion ratio, assignee avatars, and a due-date badge. Trello "cards", Asana "tasks", and Jira "issues" all share roughly the same anatomy. Clicking opens a detail modal; dragging across columns updates the status. Because so much fits on one card, hierarchy is the trick — the title should always read first, with the supporting chips quietly orbiting around it.',
      code: `<!-- Inspired by Trello -->
<article class="ui-kbc">
  <div class="ui-kbc__labels">
    <span class="ui-kbc__lbl ui-kbc__lbl--purple">Design</span>
    <span class="ui-kbc__lbl ui-kbc__lbl--orange">High</span>
    <span class="ui-kbc__lbl ui-kbc__lbl--teal">Q3</span>
  </div>
  <h3 class="ui-kbc__title">Redesign settings → notifications panel</h3>
  <div class="ui-kbc__meta">
    <span class="ui-kbc__chip ui-kbc__chip--due">⏰ May 24</span>
    <span class="ui-kbc__chip">💬 3</span>
    <span class="ui-kbc__chip">📎 2</span>
    <span class="ui-kbc__chip ui-kbc__chip--check">☑ 4/7</span>
  </div>
  <div class="ui-kbc__avatars">
    <span class="ui-kbc__av" style="background:#7c5cff">MR</span>
    <span class="ui-kbc__av" style="background:#1aaf5d">JS</span>
    <span class="ui-kbc__av" style="background:#f5a623">KT</span>
  </div>
</article>

<style>
  .ui-kbc{box-sizing:border-box;max-width:280px;background:#fff;border-radius:10px;padding:10px 12px 12px;box-shadow:0 1px 0 rgba(9,30,66,.18),0 0 0 1px rgba(9,30,66,.06);font:14px -apple-system,'Segoe UI',Roboto,sans-serif;color:#172b4d;cursor:grab}
  .ui-kbc__labels{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px}
  .ui-kbc__lbl{font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;color:#fff;letter-spacing:.02em}
  .ui-kbc__lbl--purple{background:#9c8cff;color:#28215c}
  .ui-kbc__lbl--orange{background:#ffae57;color:#7a3c00}
  .ui-kbc__lbl--teal{background:#6cd3c7;color:#114842}
  .ui-kbc__title{margin:2px 0 8px;font-size:14.5px;font-weight:500;line-height:1.35}
  .ui-kbc__meta{display:flex;flex-wrap:wrap;gap:4px 10px;color:#5e6c84;font-size:12px;margin-bottom:8px}
  .ui-kbc__chip{display:inline-flex;align-items:center;gap:3px}
  .ui-kbc__chip--due{background:#fdecc8;color:#7a4f01;padding:2px 6px;border-radius:4px;font-weight:500}
  .ui-kbc__chip--check{font-variant-numeric:tabular-nums}
  .ui-kbc__avatars{display:flex}
  .ui-kbc__av{width:24px;height:24px;border-radius:50%;border:2px solid #fff;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700;margin-left:-6px}
  .ui-kbc__av:first-child{margin-left:0}
</style>`,
    },
    {
      name: 'Slash Command Menu',
      nameJa: 'スラッシュコマンドメニュー',
      desc: '「/」を押すと出る、見出しやリストなどのブロック種類を選ぶNotion風メニュー。',
      detail: 'スラッシュコマンドメニューは、Notionが広めた「キーボードから手を離さずに新しいブロック(見出し・リスト・コード・画像など)を挿入する」ためのUIです。本文中で「/」を押すと候補がフローティング表示され、続けて文字を打つと絞り込みができます。各行にはアイコン、ブロック名、短い説明、よく使うものにはショートカット表示が並びます。エディタ系(Notion、Coda、Slite、Linearのコメント欄)で今やド定番。マウスを使わずに済むので、長文を書く人ほど手に馴染むパターンです。',
      descEn: 'A Notion-style popover that appears when you press "/" — a list of block types with icons and shortcuts.',
      detailEn: 'A slash command menu, popularized by Notion, lets you insert a new block (heading, list, code, image, etc.) without ever leaving the keyboard. Press "/" in the editor and a floating list appears; keep typing to filter. Each row shows an icon, the block name, a short description, and sometimes a keyboard shortcut. It has become a default pattern across editor-like apps: Notion, Coda, Slite, even Linear comments. Because it keeps your hands on the keys, it shines for anyone writing long-form content.',
      code: `<!-- Inspired by Notion -->
<div class="ui-slash">
  <div class="ui-slash__hint">BASIC BLOCKS</div>
  <button type="button" class="ui-slash__row is-active">
    <span class="ui-slash__ico">📝</span>
    <span class="ui-slash__text"><b>Text</b><i>Just start writing with plain text.</i></span>
    <span class="ui-slash__kbd">⌘ ⇧ 0</span>
  </button>
  <button type="button" class="ui-slash__row">
    <span class="ui-slash__ico" style="background:#f7eed3;color:#7a5b00">H1</span>
    <span class="ui-slash__text"><b>Heading 1</b><i>Big section heading.</i></span>
    <span class="ui-slash__kbd">⌘ ⇧ 1</span>
  </button>
  <button type="button" class="ui-slash__row">
    <span class="ui-slash__ico" style="background:#e3f1e3;color:#2e7c3a">H2</span>
    <span class="ui-slash__text"><b>Heading 2</b><i>Medium section heading.</i></span>
    <span class="ui-slash__kbd">⌘ ⇧ 2</span>
  </button>
  <button type="button" class="ui-slash__row">
    <span class="ui-slash__ico">☑</span>
    <span class="ui-slash__text"><b>To-do list</b><i>Track tasks with a checkbox.</i></span>
    <span class="ui-slash__kbd">⌘ ⇧ 4</span>
  </button>
  <button type="button" class="ui-slash__row">
    <span class="ui-slash__ico">＜＞</span>
    <span class="ui-slash__text"><b>Code</b><i>Capture a code snippet.</i></span>
    <span class="ui-slash__kbd">⌘ ⇧ 8</span>
  </button>
</div>

<style>
  .ui-slash{box-sizing:border-box;width:360px;background:#fff;border-radius:8px;padding:6px 4px;box-shadow:rgba(15,15,15,.05) 0 0 0 1px,rgba(15,15,15,.1) 0 3px 6px,rgba(15,15,15,.2) 0 9px 24px;font:14px ui-sans-serif,-apple-system,'Segoe UI',sans-serif;color:#37352f}
  .ui-slash__hint{font-size:11px;font-weight:600;letter-spacing:.06em;color:rgba(55,53,47,.5);padding:8px 12px 4px}
  .ui-slash__row{display:flex;align-items:center;gap:10px;width:100%;padding:6px 8px;border:0;background:transparent;border-radius:4px;cursor:pointer;color:inherit;text-align:left}
  .ui-slash__row.is-active,.ui-slash__row:hover{background:rgba(55,53,47,.08)}
  .ui-slash__ico{flex:none;width:34px;height:34px;background:#fff;border:1px solid rgba(55,53,47,.16);border-radius:4px;display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#37352f}
  .ui-slash__text{display:flex;flex-direction:column;flex:1;min-width:0}
  .ui-slash__text b{font-weight:500;font-size:14px;line-height:1.2;color:#37352f}
  .ui-slash__text i{font-style:normal;font-size:12px;color:rgba(55,53,47,.5);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-slash__kbd{font-size:11px;color:rgba(55,53,47,.45);font-family:ui-monospace,'SF Mono',monospace}
</style>`,
    },
    {
      name: 'Mention Popover',
      nameJa: 'メンションポップオーバー',
      desc: '「@」を打つと人やページが候補表示されるNotion/Slack風のメンション選択UI。',
      detail: 'メンションポップオーバーは、本文中やコメントで「@」を入力すると関連する人物・ページ・タスクの候補がフローティング表示されるUIです。続けて文字を打てば候補が絞り込まれ、Enterで挿入、矢印キーで選択できます。NotionやSlack、Linear、GitHubのIssueコメントなどコラボ系のあらゆる箇所で見られます。検索バーを開く手間なく、文章を書いている流れのまま他のリソースとリンクできるのが強み。候補にはアバター、名前、ロール(肩書きやチャンネル名)を併記するのが定番レイアウトです。',
      descEn: 'A Notion/Slack-style popover that appears while typing "@" — a filterable list of people and pages.',
      detailEn: 'A mention popover appears as you type "@" in a body or comment field and surfaces relevant people, pages, or tasks as a floating list. Keep typing to filter, hit Enter to insert, use arrow keys to navigate. You see this in nearly every collaboration product: Notion, Slack, Linear, GitHub issue comments. The big win is linking other resources without breaking your writing flow. The standard row shows an avatar, the name, and a secondary line — a role, page path, or channel handle.',
      code: `<!-- Inspired by Notion -->
<div class="ui-mention">
  <div class="ui-mention__hint">@ Mention a person, page, or date</div>
  <div class="ui-mention__group">PEOPLE</div>
  <button type="button" class="ui-mention__row is-active">
    <span class="ui-mention__av" style="background:#f06292">MN</span>
    <span class="ui-mention__name">Mika Nakamura<i> · Design Lead</i></span>
  </button>
  <button type="button" class="ui-mention__row">
    <span class="ui-mention__av" style="background:#5c6bc0">JS</span>
    <span class="ui-mention__name">Jonas Sato<i> · Engineering</i></span>
  </button>
  <button type="button" class="ui-mention__row">
    <span class="ui-mention__av" style="background:#43a047">EH</span>
    <span class="ui-mention__name">Emma Huang<i> · PM, Mobile</i></span>
  </button>
  <div class="ui-mention__group">PAGES</div>
  <button type="button" class="ui-mention__row">
    <span class="ui-mention__pg">📄</span>
    <span class="ui-mention__name">Mobile launch plan<i> · Engineering / Q3</i></span>
  </button>
  <button type="button" class="ui-mention__row">
    <span class="ui-mention__pg">📐</span>
    <span class="ui-mention__name">Mobile redesign spec<i> · Design</i></span>
  </button>
</div>

<style>
  .ui-mention{box-sizing:border-box;width:320px;background:#fff;border-radius:8px;padding:4px;box-shadow:rgba(15,15,15,.05) 0 0 0 1px,rgba(15,15,15,.1) 0 3px 6px,rgba(15,15,15,.2) 0 9px 24px;font:14px ui-sans-serif,-apple-system,'Segoe UI',sans-serif;color:#37352f}
  .ui-mention__hint{font-size:12px;color:rgba(55,53,47,.5);padding:8px 10px 4px}
  .ui-mention__group{font-size:11px;font-weight:600;letter-spacing:.05em;color:rgba(55,53,47,.5);padding:8px 10px 2px}
  .ui-mention__row{display:flex;align-items:center;gap:10px;width:100%;padding:6px 8px;border:0;background:transparent;border-radius:4px;cursor:pointer;color:inherit;text-align:left}
  .ui-mention__row.is-active,.ui-mention__row:hover{background:rgba(55,53,47,.08)}
  .ui-mention__av{flex:none;width:24px;height:24px;border-radius:50%;color:#fff;font-size:10px;font-weight:700;display:inline-flex;align-items:center;justify-content:center}
  .ui-mention__pg{flex:none;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:16px}
  .ui-mention__name{flex:1;font-size:14px;color:#37352f;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-mention__name i{font-style:normal;color:rgba(55,53,47,.5);font-size:13px}
</style>`,
    },
    {
      name: 'Calendar Month Grid',
      nameJa: 'カレンダー月表示',
      desc: '7列×5〜6行の月間カレンダー。各セルに予定チップが入る。',
      detail: 'カレンダーの月表示は、日曜〜土曜(または月〜日)を1行とし、その月の日付を7列のグリッドに並べる定番ビューです。Google Calendar、Apple Calendar、Notion Calendar、Asanaの「Calendar view」など、ほぼすべての予定管理UIに採用されています。各セルには日付番号と、その日の予定を色付きの帯(チップ)で表示し、今日のセルだけアクセント色で強調するのが普通です。月をまたぐ日(前月末・翌月頭)は色を薄くし、選択中のセルは枠やリングで示します。情報密度が高くなりやすいので、チップは2〜3個までで「+他N件」とまとめるのが見やすくする定石です。',
      descEn: 'A 7-column month view of a calendar with date cells and colored event chips inside.',
      detailEn: 'A month grid is the default calendar view: a 7-column grid with each row spanning Sunday through Saturday (or Mon–Sun). You see it in Google Calendar, Apple Calendar, Notion Calendar, and Asana\'s calendar view. Each cell holds the day number plus colored event bars; the current day cell gets an accent. Adjacent-month dates fade, and a selected cell is highlighted with a ring or border. Density is the main challenge — most apps cap visible events at 2–3 per cell and collapse the rest into a "+N more" label so the grid stays readable.',
      code: `<!-- Inspired by Google Calendar -->
<div class="ui-cal">
  <header class="ui-cal__hd">
    <button type="button" class="ui-cal__nav">‹</button>
    <h3>May 2026</h3>
    <button type="button" class="ui-cal__nav">›</button>
  </header>
  <div class="ui-cal__dow">
    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
  </div>
  <div class="ui-cal__grid">
    <div class="ui-cal__c ui-cal__c--mute"><b>26</b></div>
    <div class="ui-cal__c ui-cal__c--mute"><b>27</b></div>
    <div class="ui-cal__c ui-cal__c--mute"><b>28</b></div>
    <div class="ui-cal__c ui-cal__c--mute"><b>29</b></div>
    <div class="ui-cal__c ui-cal__c--mute"><b>30</b></div>
    <div class="ui-cal__c"><b>1</b></div>
    <div class="ui-cal__c"><b>2</b><span class="ui-cal__ev ui-cal__ev--b">Design sync</span></div>
    <div class="ui-cal__c"><b>3</b></div>
    <div class="ui-cal__c"><b>4</b><span class="ui-cal__ev ui-cal__ev--g">Standup</span></div>
    <div class="ui-cal__c"><b>5</b><span class="ui-cal__ev ui-cal__ev--p">1:1 / Mika</span></div>
    <div class="ui-cal__c"><b>6</b></div>
    <div class="ui-cal__c"><b>7</b><span class="ui-cal__ev ui-cal__ev--b">Review</span><span class="ui-cal__ev ui-cal__ev--o">Demo</span></div>
    <div class="ui-cal__c"><b>8</b></div>
    <div class="ui-cal__c"><b>9</b></div>
    <div class="ui-cal__c"><b>10</b></div>
    <div class="ui-cal__c"><b>11</b><span class="ui-cal__ev ui-cal__ev--g">Standup</span></div>
    <div class="ui-cal__c"><b>12</b></div>
    <div class="ui-cal__c"><b>13</b></div>
    <div class="ui-cal__c"><b>14</b><span class="ui-cal__ev ui-cal__ev--b">Roadmap</span></div>
    <div class="ui-cal__c"><b>15</b></div>
    <div class="ui-cal__c"><b>16</b></div>
    <div class="ui-cal__c"><b>17</b></div>
    <div class="ui-cal__c"><b>18</b></div>
    <div class="ui-cal__c"><b>19</b><span class="ui-cal__ev ui-cal__ev--p">Off-site</span></div>
    <div class="ui-cal__c ui-cal__c--today"><b>20</b><span class="ui-cal__ev ui-cal__ev--o">Launch</span></div>
    <div class="ui-cal__c"><b>21</b></div>
    <div class="ui-cal__c"><b>22</b></div>
    <div class="ui-cal__c"><b>23</b></div>
    <div class="ui-cal__c"><b>24</b></div>
    <div class="ui-cal__c"><b>25</b><span class="ui-cal__ev ui-cal__ev--g">Standup</span></div>
    <div class="ui-cal__c"><b>26</b></div>
    <div class="ui-cal__c"><b>27</b></div>
    <div class="ui-cal__c"><b>28</b></div>
    <div class="ui-cal__c"><b>29</b></div>
    <div class="ui-cal__c"><b>30</b></div>
  </div>
</div>

<style>
  .ui-cal{box-sizing:border-box;width:560px;background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:12px;font:13px -apple-system,'Segoe UI',Roboto,sans-serif;color:#3c4043}
  .ui-cal__hd{display:flex;align-items:center;gap:12px;margin-bottom:8px}
  .ui-cal__hd h3{margin:0;font-size:16px;font-weight:500;flex:1;text-align:center}
  .ui-cal__nav{width:30px;height:30px;border:0;background:transparent;border-radius:50%;cursor:pointer;font-size:18px;color:#5f6368}
  .ui-cal__nav:hover{background:#f1f3f4}
  .ui-cal__dow{display:grid;grid-template-columns:repeat(7,1fr);text-align:center;font-size:11px;color:#70757a;font-weight:500;padding:4px 0}
  .ui-cal__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:#e5e7eb;border:1px solid #e5e7eb;border-radius:4px;overflow:hidden}
  .ui-cal__c{background:#fff;min-height:54px;padding:4px 4px 2px;display:flex;flex-direction:column;gap:2px}
  .ui-cal__c b{font-weight:500;font-size:11px;color:#3c4043}
  .ui-cal__c--mute b{color:#cbd1d6}
  .ui-cal__c--today b{background:#1a73e8;color:#fff;width:18px;height:18px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:11px}
  .ui-cal__ev{font-size:11px;line-height:1.1;padding:2px 4px;border-radius:3px;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .ui-cal__ev--b{background:#1a73e8}
  .ui-cal__ev--g{background:#188038}
  .ui-cal__ev--p{background:#a142f4}
  .ui-cal__ev--o{background:#e8710a}
</style>`,
    },
    {
      name: 'Gantt Timeline Row',
      nameJa: 'ガントチャート行',
      desc: 'タスクが横長のバーで表示されるガントチャート1行分。開始・終了がドラッグできる風。',
      detail: 'ガントチャートは、横軸を時間(日・週・月)、縦軸をタスクとして、各タスクを横長のバーで描く工程表です。Asana TimelineやMonday.com、ClickUp、Jira、Microsoft Projectなどで使われ、「いつ何が進んでいて、何が並行している/依存しているか」をひと目で把握できるのが強みです。バーの両端は開始日・終了日のハンドルになっており、ドラッグして期間を変えたり、別のバーから矢印を引っ張って依存関係を作ったりします。各行にはタスク名、担当アバター、進捗%が並ぶのが定番。長期プロジェクトの俯瞰に向き、日々のタスク管理にはカンバンの方が向いています。',
      descEn: 'A single row of a Gantt chart: a horizontal task bar across a timeline with drag handles at each end.',
      detailEn: 'A Gantt chart maps time across the X axis (days/weeks/months) and tasks down the Y axis, drawing each task as a horizontal bar — the classic project plan view. You see it in Asana Timeline, Monday.com, ClickUp, Jira, and Microsoft Project. Its strength is showing at a glance which tasks overlap, which are sequential, and how long each runs. The bar ends double as drag handles for start and finish dates, and many tools let you draw dependency arrows between bars. Each row typically pairs the task name, an assignee avatar, and a progress percentage. It is best for long-range planning; day-to-day work is usually easier on a Kanban.',
      code: `<!-- Inspired by Asana Timeline -->
<div class="ui-gantt">
  <div class="ui-gantt__hd">
    <span>Task</span>
    <div class="ui-gantt__days">
      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span>
    </div>
  </div>
  <div class="ui-gantt__row">
    <div class="ui-gantt__name"><span class="ui-gantt__av" style="background:#7c5cff">MR</span>Design exploration</div>
    <div class="ui-gantt__track">
      <div class="ui-gantt__bar" style="left:0%;width:25%;background:#a78bfa">
        <span class="ui-gantt__handle"></span><span class="ui-gantt__progress" style="width:60%"></span><span class="ui-gantt__handle ui-gantt__handle--r"></span>
      </div>
    </div>
  </div>
  <div class="ui-gantt__row">
    <div class="ui-gantt__name"><span class="ui-gantt__av" style="background:#1aaf5d">JS</span>Prototype build</div>
    <div class="ui-gantt__track">
      <div class="ui-gantt__bar" style="left:17%;width:33%;background:#22c55e">
        <span class="ui-gantt__handle"></span><span class="ui-gantt__progress" style="width:40%"></span><span class="ui-gantt__handle ui-gantt__handle--r"></span>
      </div>
    </div>
  </div>
  <div class="ui-gantt__row">
    <div class="ui-gantt__name"><span class="ui-gantt__av" style="background:#f59e0b">KT</span>QA &amp; bug bash</div>
    <div class="ui-gantt__track">
      <div class="ui-gantt__bar" style="left:42%;width:25%;background:#fbbf24">
        <span class="ui-gantt__handle"></span><span class="ui-gantt__progress" style="width:10%"></span><span class="ui-gantt__handle ui-gantt__handle--r"></span>
      </div>
    </div>
  </div>
  <div class="ui-gantt__row">
    <div class="ui-gantt__name"><span class="ui-gantt__av" style="background:#0ea5e9">EH</span>Launch comms</div>
    <div class="ui-gantt__track">
      <div class="ui-gantt__bar" style="left:67%;width:17%;background:#38bdf8">
        <span class="ui-gantt__handle"></span><span class="ui-gantt__progress" style="width:0%"></span><span class="ui-gantt__handle ui-gantt__handle--r"></span>
      </div>
    </div>
  </div>
</div>

<style>
  .ui-gantt{box-sizing:border-box;width:600px;background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:8px;font:13px -apple-system,'Segoe UI',Roboto,sans-serif;color:#1f2937}
  .ui-gantt__hd{display:flex;align-items:center;border-bottom:1px solid #e5e7eb;padding:4px 6px 6px;font-size:11px;color:#6b7280;font-weight:500}
  .ui-gantt__hd>span:first-child{width:170px;flex:none}
  .ui-gantt__days{flex:1;display:grid;grid-template-columns:repeat(12,1fr);text-align:center}
  .ui-gantt__row{display:flex;align-items:center;padding:8px 6px;border-bottom:1px solid #f3f4f6}
  .ui-gantt__row:last-child{border-bottom:0}
  .ui-gantt__name{width:170px;flex:none;display:flex;align-items:center;gap:8px;font-size:13.5px;color:#1f2937}
  .ui-gantt__av{width:22px;height:22px;border-radius:50%;color:#fff;font-size:10px;font-weight:700;display:inline-flex;align-items:center;justify-content:center}
  .ui-gantt__track{position:relative;flex:1;height:24px;background:repeating-linear-gradient(to right,transparent 0,transparent calc(8.333% - 1px),#f3f4f6 calc(8.333% - 1px),#f3f4f6 8.333%);border-radius:4px}
  .ui-gantt__bar{position:absolute;top:3px;bottom:3px;border-radius:6px;cursor:grab;display:flex;align-items:center;overflow:hidden;box-shadow:0 1px 2px rgba(0,0,0,.08)}
  .ui-gantt__handle{flex:none;width:6px;height:100%;background:rgba(0,0,0,.15);cursor:ew-resize}
  .ui-gantt__handle--r{margin-left:auto}
  .ui-gantt__progress{position:absolute;left:0;top:0;bottom:0;background:rgba(255,255,255,.35);border-radius:6px 0 0 6px;pointer-events:none}
</style>`,
    },
    {
      name: 'Spreadsheet Header Row',
      nameJa: 'スプレッドシート見出し行',
      desc: '列名・型アイコン・並び替え矢印が並ぶAirtable風のテーブルヘッダ。',
      detail: 'スプレッドシートやデータベース風UIの見出し行は、各列の「型(テキスト・数値・日付・選択肢など)」を示すアイコン、列名、ソート/フィルタの矢印、そして列幅をリサイズするハンドルが横一列に並ぶ部分です。AirtableやNotionのデータベース、Coda、Smartsheet、Google Sheetsなどで見られる、データ系UIの「お皿」になる部分。型アイコンを置くことで「この列は数字しか入らない」「ここは選択式」と一目で分かり、入力エラーが減ります。ヘッダ自体もクリックすると並び替え・フィルタメニューが開くようになっているのが普通です。',
      descEn: 'An Airtable-style table header row with type icons, column names, and a sort/filter chevron.',
      detailEn: 'In Airtable-style data UIs, the header row is the spine of the table: each column shows a type icon (text, number, date, select), the column name, a sort/filter chevron, and a thin handle for resizing column width. You see this pattern in Airtable, Notion databases, Coda, Smartsheet, and Google Sheets. The type icon up front tells you instantly that "this column only takes numbers" or "this is a single-select", which cuts down on bad input. Clicking the header itself usually opens a sort/filter menu, making it the entry point to most data operations.',
      code: `<!-- Inspired by Airtable -->
<div class="ui-sh">
  <div class="ui-sh__row">
    <div class="ui-sh__c"><span class="ui-sh__ico ui-sh__ico--txt">A</span>Name<span class="ui-sh__cv">⌄</span></div>
    <div class="ui-sh__c"><span class="ui-sh__ico ui-sh__ico--sel">▦</span>Status<span class="ui-sh__cv">⌄</span></div>
    <div class="ui-sh__c"><span class="ui-sh__ico ui-sh__ico--user">◉</span>Owner<span class="ui-sh__cv">⌄</span></div>
    <div class="ui-sh__c"><span class="ui-sh__ico ui-sh__ico--date">▤</span>Due<span class="ui-sh__cv">⌄</span></div>
    <div class="ui-sh__c"><span class="ui-sh__ico ui-sh__ico--num">#</span>Effort<span class="ui-sh__cv">⌄</span></div>
    <div class="ui-sh__c ui-sh__c--add">＋</div>
  </div>
  <div class="ui-sh__body">
    <div class="ui-sh__r"><span>Onboarding redesign</span><span><i class="ui-sh__pill ui-sh__pill--g">In progress</i></span><span>Mika N.</span><span>May 24</span><span>5</span><span></span></div>
    <div class="ui-sh__r"><span>Slack webhook</span><span><i class="ui-sh__pill ui-sh__pill--b">Review</i></span><span>Jonas S.</span><span>May 28</span><span>3</span><span></span></div>
    <div class="ui-sh__r"><span>Calendar timezone fix</span><span><i class="ui-sh__pill ui-sh__pill--r">Blocked</i></span><span>Emma H.</span><span>May 21</span><span>2</span><span></span></div>
  </div>
</div>

<style>
  .ui-sh{box-sizing:border-box;width:600px;background:#fff;border:1px solid #e3e4e8;border-radius:6px;font:13px -apple-system,'Segoe UI',Roboto,sans-serif;color:#1d1f24;overflow:hidden}
  .ui-sh__row{display:grid;grid-template-columns:1.6fr 1fr 1fr .8fr .6fr 40px;background:#f7f7f7;border-bottom:1px solid #e3e4e8}
  .ui-sh__c{display:flex;align-items:center;gap:6px;padding:8px 10px;font-size:13px;color:#37383d;font-weight:500;border-right:1px solid #e3e4e8;cursor:pointer}
  .ui-sh__c:last-child{border-right:0}
  .ui-sh__c:hover{background:#eef0f3}
  .ui-sh__ico{width:16px;height:16px;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;flex:none}
  .ui-sh__ico--txt{background:#7c8694}
  .ui-sh__ico--sel{background:#22a779;font-size:9px}
  .ui-sh__ico--user{background:#3d7eff;font-size:9px}
  .ui-sh__ico--date{background:#e26a3a;font-size:9px}
  .ui-sh__ico--num{background:#8155de}
  .ui-sh__cv{margin-left:auto;font-size:11px;color:#9aa0a6}
  .ui-sh__c--add{justify-content:center;font-weight:400;font-size:16px;color:#6b7280}
  .ui-sh__body{font-size:13px;color:#1d1f24}
  .ui-sh__r{display:grid;grid-template-columns:1.6fr 1fr 1fr .8fr .6fr 40px;border-bottom:1px solid #eef0f3}
  .ui-sh__r:last-child{border-bottom:0}
  .ui-sh__r>span{padding:8px 10px;border-right:1px solid #eef0f3;display:flex;align-items:center;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-sh__r>span:last-child{border-right:0}
  .ui-sh__pill{font-style:normal;font-size:11px;padding:2px 8px;border-radius:10px;font-weight:500}
  .ui-sh__pill--g{background:#dbf3e3;color:#1b6a3a}
  .ui-sh__pill--b{background:#dbe7fb;color:#1b4a8f}
  .ui-sh__pill--r{background:#fbdcdc;color:#9a2b2b}
</style>`,
    },
    {
      name: 'Figma Layer Row',
      nameJa: 'レイヤー行',
      desc: '表示/ロックアイコン+インデント+レイヤー名が並ぶFigma風の階層リスト1行。',
      detail: 'デザインツールのレイヤーパネル1行は、左から「ホバー時に出る表示/非表示の目アイコン」「ロックの鍵アイコン」「ネストを表す段差(インデント)」「レイヤー種別アイコン」「レイヤー名」「右端のオプション」という構成です。Figma、Sketch、Adobe XD、Photoshopなど、ベクター/UIデザインツール全般で見るパターン。階層が深いものをドラッグで親子関係を変えたり、ダブルクリックでリネームしたりするのが共通の操作です。フレーム・コンポーネント・テキストなどの種別ごとにアイコン色を変えると、長いリストでも探しやすくなります。',
      descEn: 'A Figma-style layer panel row: visibility eye, lock icon, indentation, layer type icon, and name.',
      detailEn: 'A single row of a layer panel in a design tool reads, left to right, as: a hover-revealed eye icon, a lock icon, an indent that signals nesting depth, a type icon for the layer (frame, component, text, etc.), the layer name, and a row menu at the far right. You see this in Figma, Sketch, Adobe XD, and Photoshop. Standard interactions include drag-to-reparent and double-click to rename. Coloring the type icon by layer kind (frame, component, text) makes deeply nested files much easier to skim.',
      code: `<!-- Inspired by Figma -->
<div class="ui-fl">
  <div class="ui-fl__row" style="padding-left:8px"><span class="ui-fl__eye">👁</span><span class="ui-fl__lock">🔓</span><span class="ui-fl__caret">▾</span><span class="ui-fl__ico ui-fl__ico--frame">▢</span><span class="ui-fl__name">Onboarding / Welcome</span></div>
  <div class="ui-fl__row" style="padding-left:24px"><span class="ui-fl__eye">👁</span><span class="ui-fl__lock">🔓</span><span class="ui-fl__caret">▾</span><span class="ui-fl__ico ui-fl__ico--comp">◆</span><span class="ui-fl__name">Header / Logged-out</span></div>
  <div class="ui-fl__row" style="padding-left:40px"><span class="ui-fl__eye">👁</span><span class="ui-fl__lock">🔓</span><span></span><span class="ui-fl__ico ui-fl__ico--text">T</span><span class="ui-fl__name">Welcome back, Mika</span></div>
  <div class="ui-fl__row is-selected" style="padding-left:40px"><span class="ui-fl__eye">👁</span><span class="ui-fl__lock">🔓</span><span></span><span class="ui-fl__ico ui-fl__ico--vec">✎</span><span class="ui-fl__name">Hero illustration</span></div>
  <div class="ui-fl__row" style="padding-left:24px"><span class="ui-fl__eye">👁</span><span class="ui-fl__lock ui-fl__lock--on">🔒</span><span></span><span class="ui-fl__ico ui-fl__ico--frame">▢</span><span class="ui-fl__name">Background grid</span></div>
  <div class="ui-fl__row" style="padding-left:24px"><span class="ui-fl__eye ui-fl__eye--off">⊘</span><span class="ui-fl__lock">🔓</span><span></span><span class="ui-fl__ico ui-fl__ico--comp">◆</span><span class="ui-fl__name">CTA / Primary</span></div>
</div>

<style>
  .ui-fl{box-sizing:border-box;width:320px;background:#2c2c2c;border-radius:6px;padding:6px 0;font:12px -apple-system,'Inter','Segoe UI',sans-serif;color:#e4e4e4}
  .ui-fl__row{display:flex;align-items:center;gap:6px;height:26px;padding-right:8px;cursor:pointer}
  .ui-fl__row:hover{background:#383838}
  .ui-fl__row.is-selected{background:#0d99ff;color:#fff}
  .ui-fl__row.is-selected .ui-fl__ico{color:#fff}
  .ui-fl__eye,.ui-fl__lock{width:14px;font-size:10px;color:#9c9c9c;opacity:0;transition:opacity .1s}
  .ui-fl__row:hover .ui-fl__eye,.ui-fl__row:hover .ui-fl__lock,.ui-fl__eye--off,.ui-fl__lock--on{opacity:1}
  .ui-fl__eye--off{color:#666}
  .ui-fl__caret{width:10px;font-size:9px;color:#9c9c9c}
  .ui-fl__ico{width:14px;text-align:center;font-size:11px;font-weight:700;flex:none}
  .ui-fl__ico--frame{color:#9c9c9c}
  .ui-fl__ico--comp{color:#a259ff}
  .ui-fl__ico--text{color:#e4e4e4;font-family:'Times New Roman',serif}
  .ui-fl__ico--vec{color:#9c9c9c}
  .ui-fl__name{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
</style>`,
    },
    {
      name: 'Comment Thread Pin',
      nameJa: 'コメントスレッドピン',
      desc: 'キャンバス上に立つ番号付きピンと、開いた時のスレッド形式コメントUI。',
      detail: 'デザインキャンバスやドキュメントに「ここについてコメント」と紐付けて置く番号付きピンは、Figma・Miro・Google Docs・Notionなどコラボ系プロダクトの共通言語になっています。閉じている時はキャンバス上に小さなアバター付きの丸ピンとして表示され、クリックでスレッドモーダルが開き、最初のコメントとそれに対する返信(リプライ)が時系列で並びます。リプライにはアバター・名前・時刻・本文・絵文字リアクション、そして「解決(Resolve)」ボタンが添えられるのが定番。「コメントしてから返信し、解決して閉じる」までを1スレッドで完結させることで、議論がコメント欄に散らからずに済みます。',
      descEn: 'A numbered comment pin anchored to a canvas, expanded into a threaded conversation with replies.',
      detailEn: 'Numbered comment pins anchored to a canvas or document have become the shared language of collaborative tools — Figma, Miro, Google Docs, Notion. Collapsed, the pin shows as a small circle with the author\'s avatar; clicking it opens a thread modal with the first comment plus a stack of replies in time order. Each reply carries avatar, name, timestamp, body, and emoji reactions, with a "Resolve" action on the thread. Keeping the full back-and-forth scoped to one pin avoids the chaos of separate comment lists and makes it obvious which exact element a discussion is about.',
      code: `<!-- Inspired by Figma -->
<div class="ui-ct">
  <div class="ui-ct__pin"><span class="ui-ct__pin-av" style="background:#f06292">M</span><span class="ui-ct__pin-num">12</span></div>
  <div class="ui-ct__card">
    <header class="ui-ct__hd">
      <div class="ui-ct__stack"><span style="background:#f06292">MN</span><span style="background:#5c6bc0">JS</span><span style="background:#43a047">EH</span></div>
      <span class="ui-ct__count">3 replies</span>
      <button type="button" class="ui-ct__resolve">✓ Resolve</button>
    </header>
    <div class="ui-ct__msg">
      <div class="ui-ct__row"><span class="ui-ct__av" style="background:#f06292">MN</span><b>Mika Nakamura</b><i>2h</i></div>
      <p>Can the CTA sit 16px higher? Right now it touches the illustration on mobile.</p>
    </div>
    <div class="ui-ct__msg">
      <div class="ui-ct__row"><span class="ui-ct__av" style="background:#5c6bc0">JS</span><b>Jonas Sato</b><i>1h</i></div>
      <p>Good catch — pushed a fix to the prototype just now.</p>
      <div class="ui-ct__reactions"><span>👍 2</span><span>🎉 1</span></div>
    </div>
    <div class="ui-ct__msg">
      <div class="ui-ct__row"><span class="ui-ct__av" style="background:#43a047">EH</span><b>Emma Huang</b><i>12m</i></div>
      <p>Confirmed on iPhone 13 mini. Ready to ship from my side.</p>
    </div>
    <div class="ui-ct__reply">Reply…</div>
  </div>
</div>

<style>
  .ui-ct{position:relative;width:340px;font:13px -apple-system,'Inter','Segoe UI',sans-serif;color:#1f2937}
  .ui-ct__pin{position:absolute;top:-14px;left:-14px;display:inline-flex;align-items:center;gap:4px;background:#fff;border-radius:14px 14px 14px 0;padding:2px 8px 2px 2px;box-shadow:0 2px 6px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.06);z-index:2}
  .ui-ct__pin-av{width:22px;height:22px;border-radius:50%;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700}
  .ui-ct__pin-num{font-size:11px;color:#1f2937;font-weight:600}
  .ui-ct__card{background:#fff;border-radius:8px;box-shadow:0 12px 32px rgba(0,0,0,.12),0 0 0 1px rgba(0,0,0,.06);padding:10px 12px;margin-top:12px}
  .ui-ct__hd{display:flex;align-items:center;gap:8px;padding-bottom:8px;border-bottom:1px solid #f0f1f3;margin-bottom:8px}
  .ui-ct__stack{display:flex}
  .ui-ct__stack span{width:22px;height:22px;border-radius:50%;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;border:2px solid #fff;margin-left:-6px}
  .ui-ct__stack span:first-child{margin-left:0}
  .ui-ct__count{font-size:12px;color:#6b7280}
  .ui-ct__resolve{margin-left:auto;border:0;background:transparent;color:#0d99ff;font-size:12px;font-weight:500;cursor:pointer;padding:2px 6px;border-radius:4px}
  .ui-ct__resolve:hover{background:#eaf6ff}
  .ui-ct__msg{margin-bottom:8px}
  .ui-ct__row{display:flex;align-items:center;gap:6px;font-size:12px;margin-bottom:2px}
  .ui-ct__av{width:20px;height:20px;border-radius:50%;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:700}
  .ui-ct__row b{font-weight:600;font-size:12.5px}
  .ui-ct__row i{font-style:normal;color:#9ca3af;font-size:11.5px;margin-left:auto}
  .ui-ct__msg p{margin:0 0 4px 26px;line-height:1.4;font-size:13px;color:#1f2937}
  .ui-ct__reactions{margin-left:26px;display:flex;gap:4px}
  .ui-ct__reactions span{font-size:11.5px;background:#f0f1f3;border-radius:10px;padding:1px 7px;border:1px solid #e5e7eb}
  .ui-ct__reply{margin-top:6px;padding:6px 8px;border:1px solid #e5e7eb;border-radius:6px;color:#9ca3af;font-size:13px}
</style>`,
    },
    {
      name: 'Color Picker Popover',
      nameJa: 'カラーピッカーポップオーバー',
      desc: 'Notionのブロック背景色のように、丸い色サンプルが一覧で並ぶシンプルな色選択UI。',
      detail: 'カラーピッカーポップオーバーは、文字色やブロック背景色のように「決められたパレットから1色選ぶ」場面で使う小さなフローティングUIです。Notionのブロックカラー、Linearのラベル色、Asanaのタグ色などで見られる、色の丸サンプル(スウォッチ)を横〜グリッドで並べた形が典型。フル機能のカラーピッカー(HSL/HEXを自由入力できるもの)と違い、見た目に統一感を保つために選べる色をあえて制限しているのがポイントです。選択中の色には枠やチェックマークを重ね、各色には「赤」「青」など名前を併記すると色覚多様性にも配慮しやすくなります。',
      descEn: 'A Notion-style row of color swatches in a popover — pick one of a fixed palette for block colors.',
      detailEn: 'This kind of color popover appears when you need to pick one color from a fixed palette — text colors, block backgrounds, label colors. Notion block colors, Linear label colors, and Asana tag colors all use the same shape: a row or grid of round swatches floated above the trigger. Unlike a full picker (HSL or HEX input), the palette is intentionally restricted so the product stays visually consistent. The selected swatch gets a ring or checkmark, and adding a color name next to each ("Red", "Blue") helps users with color-vision differences pick the same value.',
      code: `<!-- Inspired by Notion -->
<div class="ui-cp">
  <div class="ui-cp__hd">Background</div>
  <div class="ui-cp__grid">
    <button type="button" class="ui-cp__sw" style="background:#ffffff" title="Default"><span></span></button>
    <button type="button" class="ui-cp__sw" style="background:#f1f1ef" title="Gray"><span></span></button>
    <button type="button" class="ui-cp__sw is-selected" style="background:#faebdd" title="Brown"><span>✓</span></button>
    <button type="button" class="ui-cp__sw" style="background:#fbecdd" title="Orange"><span></span></button>
    <button type="button" class="ui-cp__sw" style="background:#fbf3db" title="Yellow"><span></span></button>
    <button type="button" class="ui-cp__sw" style="background:#ddedea" title="Green"><span></span></button>
    <button type="button" class="ui-cp__sw" style="background:#ddebf1" title="Blue"><span></span></button>
    <button type="button" class="ui-cp__sw" style="background:#eae4f2" title="Purple"><span></span></button>
    <button type="button" class="ui-cp__sw" style="background:#f4dfeb" title="Pink"><span></span></button>
    <button type="button" class="ui-cp__sw" style="background:#fbe4e4" title="Red"><span></span></button>
  </div>
  <div class="ui-cp__hd">Color</div>
  <div class="ui-cp__grid">
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#37352f">A</button>
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#787774">A</button>
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#976d57">A</button>
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#cc782f">A</button>
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#c29243">A</button>
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#548164">A</button>
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#477da5">A</button>
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#a48bbe">A</button>
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#b35488">A</button>
    <button type="button" class="ui-cp__sw ui-cp__sw--text" style="color:#c4554d">A</button>
  </div>
</div>

<style>
  .ui-cp{box-sizing:border-box;width:280px;background:#fff;border-radius:8px;padding:8px;box-shadow:rgba(15,15,15,.05) 0 0 0 1px,rgba(15,15,15,.1) 0 3px 6px,rgba(15,15,15,.2) 0 9px 24px;font:13px ui-sans-serif,-apple-system,'Segoe UI',sans-serif;color:#37352f}
  .ui-cp__hd{font-size:11px;font-weight:600;letter-spacing:.05em;color:rgba(55,53,47,.5);padding:6px 4px 6px}
  .ui-cp__grid{display:grid;grid-template-columns:repeat(10,1fr);gap:4px;padding:0 2px 4px}
  .ui-cp__sw{width:22px;height:22px;border-radius:50%;border:1px solid rgba(55,53,47,.16);cursor:pointer;padding:0;display:inline-flex;align-items:center;justify-content:center;font-size:11px;color:rgba(55,53,47,.6);background-clip:padding-box}
  .ui-cp__sw:hover{transform:scale(1.08)}
  .ui-cp__sw.is-selected{border:2px solid #2383e2;color:#2383e2}
  .ui-cp__sw--text{background:#fff;font-weight:600;font-family:Georgia,'Times New Roman',serif}
</style>`,
    },
  ],
}
