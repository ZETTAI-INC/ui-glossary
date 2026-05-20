/**
 * UI Parts Showcase (Maps & Travel) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-maps-travel',
  title: '地図・旅行UI',
  titleEn: 'Maps & Travel UI',
  description: 'Google Maps・Apple Maps・Airbnb・Booking.com・Uber などの地図・旅行アプリでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Map Place Pin',
      nameJa: '地図のピン(マーカー)',
      desc: '地図上のスポットを示す、影付きの丸いピン。中にカテゴリアイコンが入る。',
      detail: '地図のピンは、店舗・カフェ・観光地などの場所を視覚的に示すマーカーUIです。下が尖った水滴型の本体に丸いアイコン部分を組み合わせ、地面の影で「立っている」ように見せるのが定番です。色でカテゴリ(飲食=オレンジ、観光=青、ショッピング=紫など)を区別し、選択時には少し拡大したりバウンドさせて存在感を強調します。Google Maps や Apple Maps の検索結果でよく見られる、最も基本的な地図UIです。',
      descEn: 'A teardrop pin with a shadow that marks a spot on the map, with a category icon inside.',
      detailEn: 'Map pins visually mark places — restaurants, cafes, sights — on a map. The classic shape is a teardrop body with a circular icon area on top, plus a ground shadow that makes it look like it is standing up. Color is used to distinguish categories (orange for food, blue for sights, purple for shopping), and selected pins often scale up or bounce for emphasis. You see this pattern everywhere on Google Maps and Apple Maps search results.',
      code: `<!-- Inspired by Google Maps -->
<div class="ui-mp-stage">
  <div class="ui-mp-pin ui-mp-pin--food">
    <div class="ui-mp-pin__head">🍜</div>
    <div class="ui-mp-pin__tail"></div>
    <div class="ui-mp-pin__shadow"></div>
  </div>
  <div class="ui-mp-pin ui-mp-pin--sight">
    <div class="ui-mp-pin__head">⛩️</div>
    <div class="ui-mp-pin__tail"></div>
    <div class="ui-mp-pin__shadow"></div>
  </div>
  <div class="ui-mp-pin ui-mp-pin--shop">
    <div class="ui-mp-pin__head">🛍️</div>
    <div class="ui-mp-pin__tail"></div>
    <div class="ui-mp-pin__shadow"></div>
  </div>
  <div class="ui-mp-pin ui-mp-pin--hotel">
    <div class="ui-mp-pin__head">🏨</div>
    <div class="ui-mp-pin__tail"></div>
    <div class="ui-mp-pin__shadow"></div>
  </div>
</div>

<style>
  .ui-mp-stage{display:flex;gap:36px;align-items:flex-end;justify-content:center;padding:48px 32px 32px;background:linear-gradient(160deg,#e8eef3 0%,#dde7ed 100%);border-radius:12px;max-width:520px;font:14px -apple-system,"Segoe UI",sans-serif}
  .ui-mp-pin{position:relative;width:48px;height:64px;display:flex;flex-direction:column;align-items:center}
  .ui-mp-pin__head{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;color:#fff;box-shadow:0 2px 6px rgba(0,0,0,.25),inset 0 -2px 0 rgba(0,0,0,.08);border:3px solid #fff;position:relative;z-index:2}
  .ui-mp-pin__tail{width:14px;height:14px;background:inherit;transform:rotate(45deg);margin-top:-10px;border-radius:0 0 3px 0;position:relative;z-index:1}
  .ui-mp-pin__shadow{position:absolute;bottom:-6px;width:22px;height:5px;border-radius:50%;background:rgba(0,0,0,.22);filter:blur(2px)}
  .ui-mp-pin--food .ui-mp-pin__head,.ui-mp-pin--food .ui-mp-pin__tail{background:#ea4335}
  .ui-mp-pin--sight .ui-mp-pin__head,.ui-mp-pin--sight .ui-mp-pin__tail{background:#1a73e8}
  .ui-mp-pin--shop .ui-mp-pin__head,.ui-mp-pin--shop .ui-mp-pin__tail{background:#9334e6}
  .ui-mp-pin--hotel .ui-mp-pin__head,.ui-mp-pin--hotel .ui-mp-pin__tail{background:#1e8e3e}
  .ui-mp-pin:hover{transform:translateY(-4px);transition:.18s}
</style>`,
    },
    {
      name: 'Place Info Card',
      nameJa: 'スポット情報カード',
      desc: 'ピンをタップしたとき下から出てくる、写真・店名・評価・営業状況・アクション付きのカード。',
      detail: 'スポット情報カードは、地図のピンをタップしたときに画面下部から立ち上がる詳細パネルです。写真ストリップ・店名・カテゴリ・星評価・営業中/閉店中の表示・「経路」「保存」「シェア」などのアクション行を縦に積むのが基本構成です。Google Maps のボトムシートが代表例で、ユーザーは地図を見ながらでも情報を確認でき、上にドラッグすると全画面詳細に展開できます。観光・飲食検索の核となるUIです。',
      descEn: 'A bottom sheet that pops up when you tap a pin — photo strip, name, rating, open status, and action row.',
      detailEn: 'A place info card rises from the bottom of the screen when a user taps a map pin. The standard layout stacks a photo strip, name, category, star rating, open/closed status, and an action row with buttons like "Directions", "Save", and "Share". The Google Maps bottom sheet is the canonical example — users can stay oriented on the map while reading details, and drag the sheet up for the full page. It is the workhorse UI of map-based search.',
      code: `<!-- Inspired by Google Maps -->
<div class="ui-pc-card">
  <div class="ui-pc-photos">
    <div class="ui-pc-photo" style="background:linear-gradient(135deg,#f4a261,#e76f51)">🍜</div>
    <div class="ui-pc-photo" style="background:linear-gradient(135deg,#264653,#2a9d8f)">🥢</div>
    <div class="ui-pc-photo" style="background:linear-gradient(135deg,#e9c46a,#f4a261)">🍵</div>
  </div>
  <div class="ui-pc-body">
    <h3 class="ui-pc-name">麺屋 一燈</h3>
    <div class="ui-pc-meta">
      <span class="ui-pc-rating">4.5</span>
      <span class="ui-pc-stars">★★★★★</span>
      <span class="ui-pc-reviews">(2,341)</span>
      <span class="ui-pc-dot">·</span>
      <span>¥¥</span>
      <span class="ui-pc-dot">·</span>
      <span>ラーメン</span>
    </div>
    <div class="ui-pc-status">
      <span class="ui-pc-open">営業中</span>
      <span class="ui-pc-hours">· 23:00に閉店</span>
    </div>
    <div class="ui-pc-actions">
      <button class="ui-pc-btn ui-pc-btn--primary"><span>🧭</span>経路</button>
      <button class="ui-pc-btn"><span>🔖</span>保存</button>
      <button class="ui-pc-btn"><span>↗</span>共有</button>
      <button class="ui-pc-btn"><span>📞</span>電話</button>
    </div>
  </div>
</div>

<style>
  .ui-pc-card{max-width:380px;background:#fff;border-radius:16px 16px 8px 8px;box-shadow:0 -2px 12px rgba(0,0,0,.08),0 8px 24px rgba(0,0,0,.12);overflow:hidden;font:14px -apple-system,Roboto,"Segoe UI",sans-serif;color:#202124}
  .ui-pc-photos{display:flex;gap:2px;height:128px}
  .ui-pc-photo{flex:1;display:flex;align-items:center;justify-content:center;font-size:38px}
  .ui-pc-body{padding:14px 16px 16px}
  .ui-pc-name{margin:0 0 6px;font-size:20px;font-weight:500;letter-spacing:-.01em}
  .ui-pc-meta{display:flex;align-items:center;gap:4px;font-size:13px;color:#5f6368;margin-bottom:6px;flex-wrap:wrap}
  .ui-pc-rating{color:#202124;font-weight:500}
  .ui-pc-stars{color:#fbbc04;letter-spacing:-1px}
  .ui-pc-dot{color:#bdc1c6;margin:0 2px}
  .ui-pc-status{font-size:13px;margin-bottom:14px}
  .ui-pc-open{color:#137333;font-weight:500}
  .ui-pc-hours{color:#5f6368}
  .ui-pc-actions{display:flex;gap:6px;flex-wrap:wrap}
  .ui-pc-btn{display:inline-flex;align-items:center;gap:4px;padding:7px 14px;border:1px solid #dadce0;background:#fff;border-radius:18px;font:500 13px -apple-system,sans-serif;color:#1a73e8;cursor:pointer;transition:.12s}
  .ui-pc-btn:hover{background:#f1f3f4}
  .ui-pc-btn span{font-size:14px}
  .ui-pc-btn--primary{background:#1a73e8;color:#fff;border-color:#1a73e8}
  .ui-pc-btn--primary:hover{background:#1765cc}
</style>`,
    },
    {
      name: 'Directions Step List',
      nameJa: '経路ステップリスト',
      desc: '「左折」「右折」など曲がり方を順番に並べた、矢印アイコン付きの縦リスト。',
      detail: '経路ステップリストは、出発地から目的地までの曲がり角ごとの指示を縦に並べたUIです。各行は「方向の矢印アイコン+道路名・指示テキスト+その区間の距離」の3要素で構成され、視線を上から下に走らせるだけで道順全体が把握できます。Google Maps や Apple Maps の徒歩・車ルート案内で必須のパターンで、現在地点をハイライトしたり、距離をミリ秒〜分単位で添えると実用性が増します。',
      descEn: 'A vertical list of turn-by-turn instructions, each row with a direction icon, street name, and distance.',
      detailEn: 'A directions step list stacks turn-by-turn instructions from origin to destination in a single column. Each row holds three things: a directional arrow icon, the street name or instruction text, and the distance for that leg. Users can scan top to bottom to grasp the whole route. It is essential in Google Maps and Apple Maps for walking and driving routes — highlighting the current step and adding time estimates makes it even more useful.',
      code: `<!-- Inspired by Apple Maps -->
<div class="ui-ds-list">
  <div class="ui-ds-header">
    <div class="ui-ds-from">📍 現在地</div>
    <div class="ui-ds-to">渋谷スクランブルスクエア まで <b>12分</b> (1.1 km)</div>
  </div>
  <div class="ui-ds-row">
    <div class="ui-ds-icon ui-ds-icon--start">●</div>
    <div class="ui-ds-text"><b>明治通り</b>を南方向に進む</div>
    <div class="ui-ds-dist">240 m</div>
  </div>
  <div class="ui-ds-row">
    <div class="ui-ds-icon">↰</div>
    <div class="ui-ds-text"><b>キャットストリート</b>を左折</div>
    <div class="ui-ds-dist">180 m</div>
  </div>
  <div class="ui-ds-row">
    <div class="ui-ds-icon">↱</div>
    <div class="ui-ds-text"><b>表参道</b>を右折</div>
    <div class="ui-ds-dist">450 m</div>
  </div>
  <div class="ui-ds-row">
    <div class="ui-ds-icon">↑</div>
    <div class="ui-ds-text"><b>宮益坂下</b>交差点を直進</div>
    <div class="ui-ds-dist">160 m</div>
  </div>
  <div class="ui-ds-row">
    <div class="ui-ds-icon">↰</div>
    <div class="ui-ds-text"><b>渋谷駅東口</b>を左折</div>
    <div class="ui-ds-dist">90 m</div>
  </div>
  <div class="ui-ds-row ui-ds-row--end">
    <div class="ui-ds-icon ui-ds-icon--end">🏁</div>
    <div class="ui-ds-text"><b>渋谷スクランブルスクエア</b>に到着</div>
    <div class="ui-ds-dist"></div>
  </div>
</div>

<style>
  .ui-ds-list{max-width:420px;background:#fff;border-radius:14px;box-shadow:0 2px 16px rgba(0,0,0,.08);font:14px -apple-system,"SF Pro Text","Hiragino Sans",sans-serif;color:#1c1c1e;overflow:hidden}
  .ui-ds-header{padding:14px 18px 12px;border-bottom:1px solid #e5e5ea;background:#f9f9fb}
  .ui-ds-from{font-size:13px;color:#8e8e93;margin-bottom:2px}
  .ui-ds-to{font-size:14px;color:#1c1c1e}
  .ui-ds-to b{color:#0a84ff}
  .ui-ds-row{display:grid;grid-template-columns:36px 1fr auto;gap:12px;align-items:center;padding:14px 18px;border-bottom:1px solid #f2f2f7;position:relative}
  .ui-ds-row:last-child{border-bottom:0}
  .ui-ds-row::before{content:"";position:absolute;left:33px;top:0;bottom:0;width:2px;background:#d1d1d6;z-index:0}
  .ui-ds-row:first-of-type::before{top:50%}
  .ui-ds-row--end::before{bottom:50%}
  .ui-ds-icon{width:28px;height:28px;border-radius:50%;background:#0a84ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;position:relative;z-index:1}
  .ui-ds-icon--start{background:#34c759;font-size:18px}
  .ui-ds-icon--end{background:#ff3b30;font-size:14px}
  .ui-ds-text{font-size:14.5px;line-height:1.4}
  .ui-ds-dist{font-size:13px;color:#8e8e93;font-variant-numeric:tabular-nums}
</style>`,
    },
    {
      name: 'Listing Card',
      nameJa: '宿カード(リスティングカード)',
      desc: '画像カルーセル・お気に入りハート・タイトル・日程・1泊料金が並ぶ、宿予約サイトの定番カード。',
      detail: 'リスティングカードは、宿泊予約サイトで物件一覧を見せるための主役UIです。上部に正方形に近い写真カルーセル(ドットインジケーター付き)、右上にお気に入り用のハートボタン、下に「物件名・距離・日程・1泊料金」を縦に並べるのが Airbnb 形式の典型です。情報密度をあえて抑え、写真の魅力で選ばせる構成が特徴で、ホテル・民泊・体験予約のあらゆるサービスで応用されています。',
      descEn: 'A booking-site card with an image carousel, a heart for favorites, a title, dates, and per-night price.',
      detailEn: 'Listing cards are the workhorse UI of any booking site. The Airbnb-style layout puts a near-square image carousel on top (with tiny dot indicators), a heart button in the top-right, and a stack of "title, distance, dates, price per night" below. Information density is intentionally low so the photo can do the selling. The pattern works for hotels, vacation rentals, and any experience marketplace.',
      code: `<!-- Inspired by Airbnb -->
<div class="ui-lc-card">
  <div class="ui-lc-media">
    <div class="ui-lc-photo" style="background:linear-gradient(135deg,#a8d5e2 0%,#5d9cb3 60%,#3d6e80 100%)">
      <div class="ui-lc-photo__house">🏡</div>
    </div>
    <button class="ui-lc-heart" aria-label="Save">♡</button>
    <div class="ui-lc-badge">ゲストのお気に入り</div>
    <div class="ui-lc-dots">
      <span class="is-active"></span><span></span><span></span><span></span><span></span>
    </div>
  </div>
  <div class="ui-lc-body">
    <div class="ui-lc-row">
      <h3 class="ui-lc-title">湖畔のコテージ・軽井沢</h3>
      <span class="ui-lc-rating">★ 4.92</span>
    </div>
    <div class="ui-lc-sub">長野県 · 187 km</div>
    <div class="ui-lc-sub">3月15日 〜 3月18日</div>
    <div class="ui-lc-price"><b>¥18,400</b> <span>/泊</span></div>
  </div>
</div>

<style>
  .ui-lc-card{max-width:320px;font:14px -apple-system,"Cereal","Segoe UI",sans-serif;color:#222}
  .ui-lc-media{position:relative;border-radius:12px;overflow:hidden;aspect-ratio:1/1;background:#eee}
  .ui-lc-photo{width:100%;height:100%;display:flex;align-items:flex-end;justify-content:center;padding-bottom:24px}
  .ui-lc-photo__house{font-size:64px;filter:drop-shadow(0 4px 8px rgba(0,0,0,.2))}
  .ui-lc-heart{position:absolute;top:12px;right:12px;width:32px;height:32px;border:0;background:transparent;color:#fff;font-size:26px;line-height:1;cursor:pointer;text-shadow:0 1px 3px rgba(0,0,0,.4);padding:0}
  .ui-lc-heart:hover{transform:scale(1.08)}
  .ui-lc-badge{position:absolute;top:12px;left:12px;background:#fff;padding:5px 10px;border-radius:6px;font-size:12px;font-weight:600;color:#222;box-shadow:0 1px 3px rgba(0,0,0,.15)}
  .ui-lc-dots{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:5px}
  .ui-lc-dots span{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.6)}
  .ui-lc-dots span.is-active{background:#fff;width:7px;height:7px}
  .ui-lc-body{padding:10px 2px 0}
  .ui-lc-row{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
  .ui-lc-title{margin:0;font-size:15px;font-weight:600;line-height:1.3;letter-spacing:-.01em}
  .ui-lc-rating{font-size:13.5px;font-weight:500;white-space:nowrap}
  .ui-lc-sub{font-size:14px;color:#717171;margin-top:2px}
  .ui-lc-price{font-size:14px;margin-top:6px}
  .ui-lc-price b{font-weight:600;text-decoration:underline}
  .ui-lc-price span{color:#222}
</style>`,
    },
    {
      name: 'Date Range Picker',
      nameJa: '日付範囲ピッカー(カレンダー)',
      desc: '2か月分のカレンダーを横に並べ、チェックイン〜チェックアウトを範囲選択するUI。',
      detail: '日付範囲ピッカーは、宿泊や旅行の予約で「いつからいつまで」を一度に選ぶためのカレンダーUIです。月を2か月分横に並べ、最初にクリックした日を開始日(チェックイン)、次にクリックした日を終了日(チェックアウト)として、間の日付に薄い帯を引いて範囲を可視化します。両端は丸い濃色のチップで強調し、過去日付はグレーアウト、料金や空室がある日には小さなドット表示を添える応用もあります。',
      descEn: 'Two side-by-side month grids for picking a check-in / check-out range with a highlighted band between them.',
      detailEn: 'A date range picker lets users pick "from when to when" in one go — essential for booking flows. Two months are laid out side by side; the first click sets check-in and the second sets check-out, with a soft band drawn across all dates in between. The endpoints get bold filled chips, past dates dim out, and tiny dots can be added under available days. It is the standard pattern for any hotel, flight, or rental booking.',
      code: `<!-- Inspired by Booking.com -->
<div class="ui-dr-picker">
  <div class="ui-dr-head">
    <button class="ui-dr-nav">‹</button>
    <div class="ui-dr-months">
      <div class="ui-dr-month">2026年3月</div>
      <div class="ui-dr-month">2026年4月</div>
    </div>
    <button class="ui-dr-nav">›</button>
  </div>
  <div class="ui-dr-grids">
    <div class="ui-dr-grid">
      <div class="ui-dr-dow">月</div><div class="ui-dr-dow">火</div><div class="ui-dr-dow">水</div><div class="ui-dr-dow">木</div><div class="ui-dr-dow">金</div><div class="ui-dr-dow">土</div><div class="ui-dr-dow">日</div>
      <div></div><div></div><div></div><div></div><div></div><div></div><div class="ui-dr-d">1</div>
      <div class="ui-dr-d">2</div><div class="ui-dr-d">3</div><div class="ui-dr-d">4</div><div class="ui-dr-d">5</div><div class="ui-dr-d">6</div><div class="ui-dr-d">7</div><div class="ui-dr-d">8</div>
      <div class="ui-dr-d">9</div><div class="ui-dr-d">10</div><div class="ui-dr-d">11</div><div class="ui-dr-d">12</div><div class="ui-dr-d">13</div><div class="ui-dr-d">14</div><div class="ui-dr-d ui-dr-d--start">15</div>
      <div class="ui-dr-d ui-dr-d--in">16</div><div class="ui-dr-d ui-dr-d--in">17</div><div class="ui-dr-d ui-dr-d--end">18</div><div class="ui-dr-d">19</div><div class="ui-dr-d">20</div><div class="ui-dr-d">21</div><div class="ui-dr-d">22</div>
      <div class="ui-dr-d">23</div><div class="ui-dr-d">24</div><div class="ui-dr-d">25</div><div class="ui-dr-d">26</div><div class="ui-dr-d">27</div><div class="ui-dr-d">28</div><div class="ui-dr-d">29</div>
      <div class="ui-dr-d">30</div><div class="ui-dr-d">31</div>
    </div>
    <div class="ui-dr-grid">
      <div class="ui-dr-dow">月</div><div class="ui-dr-dow">火</div><div class="ui-dr-dow">水</div><div class="ui-dr-dow">木</div><div class="ui-dr-dow">金</div><div class="ui-dr-dow">土</div><div class="ui-dr-dow">日</div>
      <div></div><div></div><div class="ui-dr-d">1</div><div class="ui-dr-d">2</div><div class="ui-dr-d">3</div><div class="ui-dr-d">4</div><div class="ui-dr-d">5</div>
      <div class="ui-dr-d">6</div><div class="ui-dr-d">7</div><div class="ui-dr-d">8</div><div class="ui-dr-d">9</div><div class="ui-dr-d">10</div><div class="ui-dr-d">11</div><div class="ui-dr-d">12</div>
      <div class="ui-dr-d">13</div><div class="ui-dr-d">14</div><div class="ui-dr-d">15</div><div class="ui-dr-d">16</div><div class="ui-dr-d">17</div><div class="ui-dr-d">18</div><div class="ui-dr-d">19</div>
      <div class="ui-dr-d">20</div><div class="ui-dr-d">21</div><div class="ui-dr-d">22</div><div class="ui-dr-d">23</div><div class="ui-dr-d">24</div><div class="ui-dr-d">25</div><div class="ui-dr-d">26</div>
      <div class="ui-dr-d">27</div><div class="ui-dr-d">28</div><div class="ui-dr-d">29</div><div class="ui-dr-d">30</div>
    </div>
  </div>
  <div class="ui-dr-foot">3月15日 → 3月18日 · <b>3泊</b></div>
</div>

<style>
  .ui-dr-picker{max-width:560px;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.12);padding:18px 20px;font:13px -apple-system,"Segoe UI",Roboto,sans-serif;color:#262626}
  .ui-dr-head{display:flex;align-items:center;gap:8px;margin-bottom:14px}
  .ui-dr-nav{width:30px;height:30px;border:1px solid #e0e0e0;background:#fff;border-radius:50%;cursor:pointer;font-size:18px;color:#262626;line-height:1}
  .ui-dr-nav:hover{background:#f5f5f5}
  .ui-dr-months{flex:1;display:grid;grid-template-columns:1fr 1fr;gap:24px;text-align:center}
  .ui-dr-month{font-weight:700;font-size:14px}
  .ui-dr-grids{display:grid;grid-template-columns:1fr 1fr;gap:24px}
  .ui-dr-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}
  .ui-dr-dow{text-align:center;font-size:11px;color:#737373;font-weight:600;padding:6px 0}
  .ui-dr-d{aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer;border-radius:50%;color:#262626}
  .ui-dr-d:hover{background:#f0f0f0}
  .ui-dr-d--in{background:#e7f0fe;border-radius:0}
  .ui-dr-d--start,.ui-dr-d--end{background:#0071c2;color:#fff;font-weight:600}
  .ui-dr-d--start{position:relative}
  .ui-dr-d--end{position:relative}
  .ui-dr-foot{margin-top:14px;padding-top:12px;border-top:1px solid #f0f0f0;font-size:13.5px;color:#262626}
  .ui-dr-foot b{color:#0071c2}
</style>`,
    },
    {
      name: 'Filter Chip Bar',
      nameJa: 'フィルターチップバー',
      desc: '価格・タイプ・設備などを切り替える、横スクロール可能な丸いトグルピル群。',
      detail: 'フィルターチップバーは、検索結果の絞り込み条件を横一列に並べたUIです。それぞれのチップが「¥(価格)」「ホテル」「Wi-Fi」のような単一条件を表し、タップでオン/オフが切り替わります。選択中は色が反転して状態が一目で分かります。横スクロールするため画面幅を気にせず多くの条件を出せ、Airbnb・Booking.com・食べログなど、リスト型検索結果のページで定番となっているコンパクトな絞り込みパターンです。',
      descEn: 'A horizontally scrollable row of round toggle pills for filters like price, type, and amenities.',
      detailEn: 'A filter chip bar lays out narrowing options in a single horizontal row. Each chip carries one condition — "¥" for price, "Hotel" for type, "Wi-Fi" for amenities — and tapping toggles it on or off, with a color swap making the state obvious. Because the bar scrolls horizontally, you can fit many filters without crowding the screen. It is everywhere in list search results on Airbnb, Booking.com, and Tabelog as a compact refinement pattern.',
      code: `<!-- Inspired by Airbnb -->
<div class="ui-fc-wrap">
  <div class="ui-fc-bar">
    <button class="ui-fc-chip is-active"><span>✓</span> すべて</button>
    <button class="ui-fc-chip">¥ 〜10,000</button>
    <button class="ui-fc-chip is-active">🏠 一軒家</button>
    <button class="ui-fc-chip">🏨 ホテル</button>
    <button class="ui-fc-chip">🏖️ ビーチ近く</button>
    <button class="ui-fc-chip is-active">📶 Wi-Fi</button>
    <button class="ui-fc-chip">🚗 駐車場あり</button>
    <button class="ui-fc-chip">🐾 ペットOK</button>
    <button class="ui-fc-chip">🍳 キッチン</button>
    <button class="ui-fc-chip">♨️ 温泉</button>
    <button class="ui-fc-chip">🌊 オーシャンビュー</button>
  </div>
</div>

<style>
  .ui-fc-wrap{max-width:560px;padding:18px;background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.06)}
  .ui-fc-bar{display:flex;gap:10px;overflow-x:auto;scrollbar-width:none;padding-bottom:4px;mask-image:linear-gradient(to right,#000 calc(100% - 36px),transparent)}
  .ui-fc-bar::-webkit-scrollbar{display:none}
  .ui-fc-chip{display:inline-flex;align-items:center;gap:5px;padding:9px 16px;border-radius:999px;border:1px solid #dddddd;background:#fff;font:500 13px -apple-system,"Cereal","Segoe UI",sans-serif;color:#222;cursor:pointer;white-space:nowrap;transition:.15s}
  .ui-fc-chip:hover{border-color:#222;background:#f7f7f7}
  .ui-fc-chip.is-active{background:#222;color:#fff;border-color:#222}
  .ui-fc-chip.is-active:hover{background:#000}
  .ui-fc-chip span{font-size:12px}
</style>

<script>
  document.querySelectorAll('.ui-fc-chip').forEach(c=>{
    c.addEventListener('click',()=>c.classList.toggle('is-active'));
  });
</script>`,
    },
    {
      name: 'Star Rating Row',
      nameJa: '評価サマリー(星評価+件数)',
      desc: '大きな評価数値・星アイコン・レビュー件数を1行で見せる、店舗ページのまとめ表示。',
      detail: '評価サマリーは、店舗や宿のレビューを一目で伝えるための要約UIです。左に「4.32」のような大きな数字、右に星アイコンとレビュー件数を並べる構成が定番で、食べログ・Google Maps・Booking.comなど検索結果と詳細ページの両方で使われます。数値を圧倒的に大きくすることで「評価が良い場所だ」と直感的に分かり、星の半分塗りで小数点以下の精度も表現します。長い説明文より一瞬で品質を伝えられるのが強みです。',
      descEn: 'A large score, star icons, and review count packed into a single row — the at-a-glance rating summary.',
      detailEn: 'A rating summary boils down all reviews into a single glanceable row. The classic layout has a big number ("4.32") on the left, star icons and review count on the right. You see it on Tabelog, Google Maps, and Booking.com in both search results and detail pages. Making the number dominant tells users instantly that a place is well-rated, and partially filled stars convey decimal precision. Nothing communicates quality faster than this row.',
      code: `<!-- Inspired by Tabelog -->
<div class="ui-sr-card">
  <div class="ui-sr-head">
    <div class="ui-sr-score">3.78</div>
    <div class="ui-sr-stars-wrap">
      <div class="ui-sr-stars">
        <span class="ui-sr-fill">★★★★</span><span class="ui-sr-half">★</span><span class="ui-sr-empty">★</span>
      </div>
      <div class="ui-sr-meta">口コミ <b>1,284</b>件 · 保存 <b>5,612</b>件</div>
    </div>
  </div>
  <ul class="ui-sr-bars">
    <li><span class="ui-sr-lbl">料理</span><div class="ui-sr-bar"><div style="width:88%"></div></div><span class="ui-sr-v">4.4</span></li>
    <li><span class="ui-sr-lbl">サービス</span><div class="ui-sr-bar"><div style="width:74%"></div></div><span class="ui-sr-v">3.7</span></li>
    <li><span class="ui-sr-lbl">雰囲気</span><div class="ui-sr-bar"><div style="width:80%"></div></div><span class="ui-sr-v">4.0</span></li>
    <li><span class="ui-sr-lbl">CP</span><div class="ui-sr-bar"><div style="width:68%"></div></div><span class="ui-sr-v">3.4</span></li>
  </ul>
</div>

<style>
  .ui-sr-card{max-width:420px;background:#fff;border:1px solid #ddd;border-radius:6px;padding:18px 22px;font:13px "Hiragino Sans","Yu Gothic UI","Segoe UI",sans-serif;color:#333}
  .ui-sr-head{display:flex;align-items:center;gap:18px;padding-bottom:14px;border-bottom:1px dashed #ddd}
  .ui-sr-score{font:700 44px Georgia,"Times New Roman",serif;color:#c8102e;line-height:1;letter-spacing:-1px}
  .ui-sr-stars{font-size:22px;letter-spacing:1px;line-height:1;display:inline-flex}
  .ui-sr-fill{color:#f5a623}
  .ui-sr-half{color:#f5a623;opacity:.55}
  .ui-sr-empty{color:#e0e0e0}
  .ui-sr-meta{margin-top:6px;font-size:12px;color:#666}
  .ui-sr-meta b{color:#333;font-weight:600}
  .ui-sr-bars{list-style:none;margin:14px 0 0;padding:0;display:grid;gap:8px}
  .ui-sr-bars li{display:grid;grid-template-columns:60px 1fr 32px;gap:10px;align-items:center;font-size:12.5px}
  .ui-sr-lbl{color:#555}
  .ui-sr-bar{height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden}
  .ui-sr-bar div{height:100%;background:linear-gradient(90deg,#f5a623,#e08e16);border-radius:3px}
  .ui-sr-v{font-weight:600;color:#333;text-align:right;font-variant-numeric:tabular-nums}
</style>`,
    },
    {
      name: 'Fare Estimate Card',
      nameJa: '配車料金カード(車種一覧)',
      desc: '車種ごとに到着時間・料金を縦に並べて選ばせる、配車アプリの定番カード。',
      detail: '配車料金カードは、Uber・Lyft・GO などの配車アプリで車種を選ぶ画面の中心UIです。1行に「車のアイコン+車種名+乗車人数+到着までの分数+料金」を並べ、複数行を縦に積みます。ユーザーは予算と急ぎ度を見比べて1つをタップ、最下部のCTAボタンで配車確定する流れです。各行を独立したカード状にして選択時にハイライトすると、選択操作が明快になり誤タップも減らせます。',
      descEn: 'Vehicle options stacked vertically with ETA and price — the core card of every rideshare app.',
      detailEn: 'A fare estimate card is the centerpiece of a rideshare picker — Uber, Lyft, or DiDi. Each row stacks "vehicle icon, vehicle name, capacity, ETA, and price" in a single line, and several rows are stacked vertically. Users compare budget and urgency, tap one, then confirm with a CTA at the bottom. Making each row feel like its own card and highlighting the selected one keeps the choice unmistakable and reduces mistaps.',
      code: `<!-- Inspired by Uber -->
<div class="ui-fe-card">
  <div class="ui-fe-head">
    <div class="ui-fe-when">今すぐ ▾</div>
    <div class="ui-fe-sub">配車場所: 渋谷駅東口</div>
  </div>
  <div class="ui-fe-list">
    <div class="ui-fe-row is-selected">
      <div class="ui-fe-icon">🚗</div>
      <div class="ui-fe-info">
        <div class="ui-fe-name">UberX <span class="ui-fe-eta">· 4分後</span></div>
        <div class="ui-fe-desc">手頃な普通車 · 最大4名</div>
      </div>
      <div class="ui-fe-price">¥1,840</div>
    </div>
    <div class="ui-fe-row">
      <div class="ui-fe-icon">🚙</div>
      <div class="ui-fe-info">
        <div class="ui-fe-name">Comfort <span class="ui-fe-eta">· 6分後</span></div>
        <div class="ui-fe-desc">広めの新しい車 · 評価4.85以上</div>
      </div>
      <div class="ui-fe-price">¥2,260</div>
    </div>
    <div class="ui-fe-row">
      <div class="ui-fe-icon">🚐</div>
      <div class="ui-fe-info">
        <div class="ui-fe-name">UberXL <span class="ui-fe-eta">· 9分後</span></div>
        <div class="ui-fe-desc">大型車 · 最大6名</div>
      </div>
      <div class="ui-fe-price">¥3,120</div>
    </div>
    <div class="ui-fe-row">
      <div class="ui-fe-icon">🚖</div>
      <div class="ui-fe-info">
        <div class="ui-fe-name">Premium <span class="ui-fe-eta">· 11分後</span></div>
        <div class="ui-fe-desc">高級セダン · プロドライバー</div>
      </div>
      <div class="ui-fe-price">¥4,580</div>
    </div>
  </div>
  <button class="ui-fe-cta">UberX を選択 · ¥1,840</button>
</div>

<style>
  .ui-fe-card{max-width:380px;background:#fff;border-radius:14px 14px 0 0;box-shadow:0 -4px 16px rgba(0,0,0,.1);padding:14px 18px 18px;font:14px -apple-system,"Uber Move","Segoe UI",sans-serif;color:#000}
  .ui-fe-head{padding-bottom:10px;border-bottom:1px solid #eee;margin-bottom:6px}
  .ui-fe-when{font-weight:600;font-size:15px;display:inline-block;padding:5px 10px;background:#f6f6f6;border-radius:14px}
  .ui-fe-sub{font-size:12.5px;color:#6b6b6b;margin-top:6px}
  .ui-fe-list{display:flex;flex-direction:column;gap:2px;margin-bottom:12px}
  .ui-fe-row{display:grid;grid-template-columns:44px 1fr auto;gap:10px;align-items:center;padding:10px 8px;border-radius:8px;cursor:pointer;transition:.15s;border:2px solid transparent}
  .ui-fe-row:hover{background:#f7f7f7}
  .ui-fe-row.is-selected{background:#f0f0f0;border-color:#000}
  .ui-fe-icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:26px;background:#fff;border-radius:8px}
  .ui-fe-name{font-weight:600;font-size:15px}
  .ui-fe-eta{font-weight:400;color:#6b6b6b;font-size:13px}
  .ui-fe-desc{font-size:12.5px;color:#6b6b6b;margin-top:2px;line-height:1.3}
  .ui-fe-price{font-weight:600;font-size:15px;font-variant-numeric:tabular-nums}
  .ui-fe-cta{width:100%;padding:14px;border:0;background:#000;color:#fff;border-radius:8px;font:600 15px -apple-system,sans-serif;cursor:pointer}
  .ui-fe-cta:hover{background:#222}
</style>`,
    },
    {
      name: 'Photo Gallery Grid',
      nameJa: '写真ギャラリーグリッド',
      desc: '1枚の大きな写真+4枚のサムネ、右下に「すべての写真を表示」が乗る宿サイトの定番。',
      detail: '写真ギャラリーグリッドは、物件の魅力を一気に伝えるためのヒーロー画像レイアウトです。Airbnb の典型構成は左半分を1枚の大きな写真、右半分を2×2の小さい写真4枚にし、右下に「すべての写真を表示」ボタンを重ねる5枚構成です。両端の角を丸く揃え、ホバーで暗くしてクリック可能だと伝えるのが定番の演出です。「写真をたくさん見せるが、ファーストビューはあくまで1枚で印象的に」という考え方が背景にあります。',
      descEn: 'One hero photo plus a 2×2 thumbnail grid, with a "Show all photos" overlay in the bottom-right.',
      detailEn: 'A photo gallery grid is the hero layout that sells a listing at a glance. The Airbnb-style version uses five images: one large photo on the left, and a 2×2 grid of four thumbnails on the right, with a "Show all photos" button overlaid in the bottom-right corner. Rounded corners on the outer edges and a subtle hover dim signal clickability. The idea: show many photos, but let one big shot define the first impression.',
      code: `<!-- Inspired by Airbnb -->
<div class="ui-pg-grid">
  <div class="ui-pg-hero" style="background:linear-gradient(135deg,#ffd5b0 0%,#ff9a76 60%,#e8704c 100%)">
    <div class="ui-pg-hero__icon">🏡</div>
  </div>
  <div class="ui-pg-thumb" style="background:linear-gradient(135deg,#c7e4d4,#7bbf99)">🛋️</div>
  <div class="ui-pg-thumb" style="background:linear-gradient(135deg,#d4c4e8,#9b7fc6)">🛏️</div>
  <div class="ui-pg-thumb" style="background:linear-gradient(135deg,#fde2a8,#e0b04a)">🍳</div>
  <div class="ui-pg-thumb ui-pg-thumb--last" style="background:linear-gradient(135deg,#b4d8e7,#5d9cb3)">
    🛁
    <button class="ui-pg-all">▦ すべての写真を表示</button>
  </div>
</div>

<style>
  .ui-pg-grid{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:1fr 1fr;gap:6px;max-width:560px;aspect-ratio:2/1;border-radius:14px;overflow:hidden;font:14px -apple-system,"Cereal","Segoe UI",sans-serif}
  .ui-pg-hero{grid-row:1/3;grid-column:1/2;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.15s}
  .ui-pg-hero__icon{font-size:72px;filter:drop-shadow(0 4px 10px rgba(0,0,0,.2))}
  .ui-pg-hero:hover{filter:brightness(.92)}
  .ui-pg-thumb{display:flex;align-items:center;justify-content:center;font-size:38px;cursor:pointer;transition:.15s;position:relative}
  .ui-pg-thumb:hover{filter:brightness(.92)}
  .ui-pg-thumb--last{position:relative}
  .ui-pg-all{position:absolute;bottom:12px;right:12px;padding:8px 14px;background:#fff;color:#222;border:1px solid #222;border-radius:8px;font:600 13px -apple-system,sans-serif;cursor:pointer;display:inline-flex;align-items:center;gap:6px;box-shadow:0 1px 3px rgba(0,0,0,.15)}
  .ui-pg-all:hover{background:#f7f7f7}
</style>`,
    },
    {
      name: 'Transit Route Option',
      nameJa: '乗換ルート候補行',
      desc: '電車・バスの所要時間・出発→到着・運賃を1行に並べた、乗換案内の候補リスト。',
      detail: '乗換ルート候補行は、出発地から目的地までの複数のルート案を1行ずつ表示するUIです。左に交通手段アイコン(電車・バス・徒歩)、中央に「出発時刻 → 到着時刻」と所要時間、右に運賃と乗換回数を並べるのが王道です。複数の候補を縦に並べてユーザーが「速い」「安い」「乗換少ない」のどれを優先するか選びやすくし、Google Maps の経路検索や Yahoo!乗換案内・Skyscanner などで広く使われる、移動検索の基本UIです。',
      descEn: 'A row with mode icon, departure→arrival, duration, and price — the classic transit search result row.',
      detailEn: 'A transit route option lists alternative ways to get from A to B, one per row. The standard layout has a mode icon on the left (train, bus, walk), the departure→arrival times and duration in the middle, and the fare plus transfer count on the right. Stacking several options helps users pick by their priority — fastest, cheapest, or fewest transfers. It is the workhorse pattern of Google Maps transit search, Yahoo Transit, and Skyscanner.',
      code: `<!-- Inspired by Google Maps -->
<div class="ui-tr-list">
  <div class="ui-tr-row is-best">
    <div class="ui-tr-modes">
      <span class="ui-tr-mode ui-tr-mode--walk">🚶</span>
      <span class="ui-tr-mode ui-tr-mode--jr">JR</span>
      <span class="ui-tr-mode ui-tr-mode--metro">M</span>
    </div>
    <div class="ui-tr-mid">
      <div class="ui-tr-time">10:24 → 11:02</div>
      <div class="ui-tr-meta">38分 · 乗換1回 · 9.4 km</div>
    </div>
    <div class="ui-tr-right">
      <div class="ui-tr-price">¥318</div>
      <div class="ui-tr-tag">最速</div>
    </div>
  </div>
  <div class="ui-tr-row">
    <div class="ui-tr-modes">
      <span class="ui-tr-mode ui-tr-mode--walk">🚶</span>
      <span class="ui-tr-mode ui-tr-mode--metro">M</span>
    </div>
    <div class="ui-tr-mid">
      <div class="ui-tr-time">10:31 → 11:14</div>
      <div class="ui-tr-meta">43分 · 乗換なし · 9.1 km</div>
    </div>
    <div class="ui-tr-right">
      <div class="ui-tr-price">¥210</div>
      <div class="ui-tr-tag ui-tr-tag--cheap">最安</div>
    </div>
  </div>
  <div class="ui-tr-row">
    <div class="ui-tr-modes">
      <span class="ui-tr-mode ui-tr-mode--bus">🚌</span>
      <span class="ui-tr-mode ui-tr-mode--metro">M</span>
    </div>
    <div class="ui-tr-mid">
      <div class="ui-tr-time">10:28 → 11:19</div>
      <div class="ui-tr-meta">51分 · 乗換1回 · 10.2 km</div>
    </div>
    <div class="ui-tr-right">
      <div class="ui-tr-price">¥280</div>
      <div class="ui-tr-tag ui-tr-tag--slow">遅い</div>
    </div>
  </div>
  <div class="ui-tr-row">
    <div class="ui-tr-modes">
      <span class="ui-tr-mode ui-tr-mode--taxi">🚕</span>
    </div>
    <div class="ui-tr-mid">
      <div class="ui-tr-time">今すぐ → 10:46</div>
      <div class="ui-tr-meta">22分 · タクシー · 8.7 km</div>
    </div>
    <div class="ui-tr-right">
      <div class="ui-tr-price">¥2,640</div>
      <div class="ui-tr-tag ui-tr-tag--taxi">即時</div>
    </div>
  </div>
</div>

<style>
  .ui-tr-list{max-width:480px;background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.08);overflow:hidden;font:14px Roboto,-apple-system,"Segoe UI",sans-serif;color:#202124}
  .ui-tr-row{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:14px 18px;border-bottom:1px solid #f1f3f4;cursor:pointer;transition:.15s}
  .ui-tr-row:last-child{border-bottom:0}
  .ui-tr-row:hover{background:#f8f9fa}
  .ui-tr-row.is-best{background:#f0f7ff}
  .ui-tr-row.is-best:hover{background:#e6f0fc}
  .ui-tr-modes{display:flex;gap:4px;align-items:center}
  .ui-tr-mode{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:26px;padding:0 6px;border-radius:4px;font:700 12px Roboto,sans-serif;color:#fff;line-height:1}
  .ui-tr-mode--walk{background:transparent;color:#5f6368;font-size:16px}
  .ui-tr-mode--jr{background:#00b25f}
  .ui-tr-mode--metro{background:#1a73e8}
  .ui-tr-mode--bus{background:transparent;color:#5f6368;font-size:16px}
  .ui-tr-mode--taxi{background:transparent;color:#5f6368;font-size:18px}
  .ui-tr-time{font-weight:500;font-size:15px;color:#202124;font-variant-numeric:tabular-nums}
  .ui-tr-meta{font-size:12.5px;color:#5f6368;margin-top:2px}
  .ui-tr-right{text-align:right}
  .ui-tr-price{font-weight:600;font-size:15px;font-variant-numeric:tabular-nums}
  .ui-tr-tag{display:inline-block;margin-top:3px;padding:1px 7px;border-radius:10px;font-size:11px;font-weight:600;background:#e6f4ea;color:#137333}
  .ui-tr-tag--cheap{background:#fef7e0;color:#b06000}
  .ui-tr-tag--slow{background:#f1f3f4;color:#5f6368}
  .ui-tr-tag--taxi{background:#fce8e6;color:#c5221f}
</style>`,
    },
  ],
}
