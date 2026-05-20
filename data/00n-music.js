/**
 * UI Parts Showcase (Music Streaming) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-music',
  title: '音楽アプリUI',
  titleEn: 'Music Streaming UI',
  description: 'Spotify・Apple Music・SoundCloud などの音楽サービスでよく見るUIをそのままコピペで使えます。',
  terms: [
    {
      name: 'Now Playing Bar',
      nameJa: '再生中バー',
      desc: '画面下部に常駐する再生コントロール。アルバムアート、曲名、再生ボタン、進行バーを一列に並べたUI。',
      detail: '再生中バー(Now Playing Bar)はSpotifyやYouTube Musicの画面下部に常に表示されているプレイヤーUIです。左側にアルバムアートと曲名・アーティスト名、中央に再生・前後送りなどの操作ボタン、進行バーが配置されるのが定番レイアウトです。どのページに移動しても再生状態が見えるので、プレイリストを探しながら現在の曲を確認できます。サブスク型音楽アプリでは欠かせない要素で、画面遷移してもUIが消えない「永続的UI」の代表例です。',
      descEn: 'A persistent bottom bar with album art, track title, transport controls, and a progress bar.',
      detailEn: 'The Now Playing bar is the always-visible mini-player you see at the bottom of Spotify or YouTube Music. The left holds album art and track/artist info, the center has play and skip controls plus a progress bar, and the right typically has volume and queue. Because it stays put across page navigation, users can keep tabs on what is playing while browsing other content. It is a textbook example of a "persistent UI" element that subscription music apps rely on heavily.',
      code: `<!-- Inspired by Spotify -->
<div class="ui-npb">
  <div class="ui-npb__track">
    <div class="ui-npb__art">
      <svg viewBox="0 0 40 40" width="56" height="56"><defs><linearGradient id="npbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff5f6d"/><stop offset="1" stop-color="#ffc371"/></linearGradient></defs><rect width="40" height="40" rx="4" fill="url(#npbg)"/><circle cx="20" cy="20" r="6" fill="#1a1a1a"/><circle cx="20" cy="20" r="1.6" fill="#ff5f6d"/></svg>
    </div>
    <div class="ui-npb__meta">
      <div class="ui-npb__title">Sunset Drive</div>
      <div class="ui-npb__artist">The Midnight</div>
    </div>
    <button class="ui-npb__heart" aria-label="Save">♡</button>
  </div>
  <div class="ui-npb__center">
    <div class="ui-npb__ctrls">
      <button class="ui-npb__btn" aria-label="Shuffle">⤭</button>
      <button class="ui-npb__btn" aria-label="Prev">⏮</button>
      <button class="ui-npb__play" aria-label="Play">▶</button>
      <button class="ui-npb__btn" aria-label="Next">⏭</button>
      <button class="ui-npb__btn" aria-label="Repeat">↻</button>
    </div>
    <div class="ui-npb__bar">
      <span class="ui-npb__t">1:24</span>
      <div class="ui-npb__progress"><div class="ui-npb__fill"></div></div>
      <span class="ui-npb__t">3:48</span>
    </div>
  </div>
  <div class="ui-npb__right">
    <button class="ui-npb__btn" aria-label="Queue">≡</button>
    <button class="ui-npb__btn" aria-label="Device">🔊</button>
  </div>
</div>

<style>
  .ui-npb{display:grid;grid-template-columns:1fr 1.4fr 1fr;align-items:center;gap:16px;max-width:720px;padding:10px 14px;background:#181818;border-top:1px solid #282828;font:13px -apple-system,'Segoe UI',Roboto,sans-serif;color:#fff;border-radius:6px}
  .ui-npb__track{display:flex;align-items:center;gap:12px;min-width:0}
  .ui-npb__art{flex:none;border-radius:4px;overflow:hidden}
  .ui-npb__meta{min-width:0}
  .ui-npb__title{font-size:14px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-npb__artist{font-size:11px;color:#b3b3b3;margin-top:2px}
  .ui-npb__heart{background:none;border:0;color:#b3b3b3;cursor:pointer;font-size:18px;padding:4px}
  .ui-npb__heart:hover{color:#fff}
  .ui-npb__center{display:flex;flex-direction:column;align-items:center;gap:6px}
  .ui-npb__ctrls{display:flex;align-items:center;gap:14px}
  .ui-npb__btn{background:none;border:0;color:#b3b3b3;cursor:pointer;font-size:14px;padding:2px}
  .ui-npb__btn:hover{color:#fff}
  .ui-npb__play{width:32px;height:32px;border-radius:50%;background:#fff;color:#000;border:0;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center}
  .ui-npb__play:hover{transform:scale(1.06)}
  .ui-npb__bar{display:flex;align-items:center;gap:8px;width:100%}
  .ui-npb__t{font-size:11px;color:#a7a7a7;min-width:32px;text-align:center}
  .ui-npb__progress{flex:1;height:4px;background:#4d4d4d;border-radius:2px;overflow:hidden}
  .ui-npb__fill{width:38%;height:100%;background:#fff;border-radius:2px}
  .ui-npb__progress:hover .ui-npb__fill{background:#1ed760}
  .ui-npb__right{display:flex;justify-content:flex-end;gap:14px}
</style>`,
    },
    {
      name: 'Song Row With Hover Play',
      nameJa: 'ホバー再生付き曲リスト行',
      desc: 'プレイリスト画面の曲リスト1行。マウスを乗せると曲番号が再生ボタンに変わる。',
      detail: 'Spotifyやアップルミュージックのプレイリスト画面でよく見る、曲を1行ずつ並べた表示形式です。普段は左に曲番号が表示されていますが、マウスカーソルを乗せると番号が▶(再生ボタン)に置き換わり、その場で曲を再生できます。タイトル・アーティスト・アルバム・再生時間が整列して並ぶので、CDのトラックリストのような感覚で曲を選べます。情報量が多くなりがちな曲一覧で「見やすさ」と「すぐ再生できる手軽さ」を両立した賢いパターンです。',
      descEn: 'A playlist row that swaps the track number for a play button on hover.',
      detailEn: 'This is the row style you see in Spotify and Apple Music playlist screens. By default the left side shows the track number, but when you hover the row, the number is swapped for a play (▶) icon so you can fire the song instantly. Title, artist, album, and duration line up in tidy columns, giving the same feel as a classic CD tracklist. It is a clever pattern that keeps dense song lists scannable while making playback a single click away.',
      code: `<!-- Inspired by Spotify -->
<ul class="ui-sr">
  <li class="ui-sr__row">
    <div class="ui-sr__num"><span class="ui-sr__n">1</span><span class="ui-sr__play">▶</span></div>
    <div class="ui-sr__title">
      <div class="ui-sr__name">Blinding Lights</div>
      <div class="ui-sr__artist">The Weeknd</div>
    </div>
    <div class="ui-sr__album">After Hours</div>
    <div class="ui-sr__dur">3:20</div>
  </li>
  <li class="ui-sr__row">
    <div class="ui-sr__num"><span class="ui-sr__n">2</span><span class="ui-sr__play">▶</span></div>
    <div class="ui-sr__title">
      <div class="ui-sr__name">As It Was</div>
      <div class="ui-sr__artist">Harry Styles</div>
    </div>
    <div class="ui-sr__album">Harry's House</div>
    <div class="ui-sr__dur">2:47</div>
  </li>
  <li class="ui-sr__row">
    <div class="ui-sr__num"><span class="ui-sr__n">3</span><span class="ui-sr__play">▶</span></div>
    <div class="ui-sr__title">
      <div class="ui-sr__name">Flowers</div>
      <div class="ui-sr__artist">Miley Cyrus</div>
    </div>
    <div class="ui-sr__album">Endless Summer Vacation</div>
    <div class="ui-sr__dur">3:20</div>
  </li>
  <li class="ui-sr__row">
    <div class="ui-sr__num"><span class="ui-sr__n">4</span><span class="ui-sr__play">▶</span></div>
    <div class="ui-sr__title">
      <div class="ui-sr__name">Anti-Hero</div>
      <div class="ui-sr__artist">Taylor Swift</div>
    </div>
    <div class="ui-sr__album">Midnights</div>
    <div class="ui-sr__dur">3:20</div>
  </li>
</ul>

<style>
  .ui-sr{list-style:none;margin:0;padding:8px;max-width:640px;background:#121212;border-radius:8px;font:14px -apple-system,'Segoe UI',Roboto,sans-serif;color:#b3b3b3}
  .ui-sr__row{display:grid;grid-template-columns:32px 1fr 1fr 48px;gap:16px;align-items:center;padding:8px 12px;border-radius:4px;cursor:pointer}
  .ui-sr__row:hover{background:#1a1a1a}
  .ui-sr__num{position:relative;width:20px;text-align:center}
  .ui-sr__n,.ui-sr__play{display:block}
  .ui-sr__play{display:none;color:#fff;font-size:11px}
  .ui-sr__row:hover .ui-sr__n{display:none}
  .ui-sr__row:hover .ui-sr__play{display:block}
  .ui-sr__name{color:#fff;font-size:15px;font-weight:400}
  .ui-sr__artist{font-size:13px;margin-top:2px}
  .ui-sr__row:hover .ui-sr__artist{color:#fff}
  .ui-sr__album{font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-sr__dur{font-size:13px;text-align:right;font-variant-numeric:tabular-nums}
</style>`,
    },
    {
      name: 'Album Art Card',
      nameJa: 'アルバムアートカード',
      desc: '正方形のアートワーク+タイトル+アーティスト名のカード。ホバーで再生ボタンが浮かぶ。',
      detail: 'アルバムアートカードは、音楽ライブラリやおすすめページで定番のカード型UIです。正方形のジャケット画像が大きく表示され、下にアルバム名とアーティスト名が並びます。マウスを乗せると緑色の丸い再生ボタンがふわっと浮き上がるアニメーションが入り、すぐ再生できることを視覚的に伝えます。SpotifyやApple Musicのトップページに大量に並ぶこのカードは、レコード店で「ジャケ買い」する体験をデジタル上で再現した、視覚的な発見のためのデザインです。',
      descEn: 'A square artwork card with title and artist; a play button floats up on hover.',
      detailEn: 'Album art cards are the staple grid item on music library and discovery pages. A large square cover sits on top, with the album and artist name listed underneath. On hover, a green circular play button slides up with a subtle animation, signaling "click here to start listening". These cards crowd the home page of Spotify and Apple Music because they recreate the joy of browsing a record store cover-by-cover — a visual-first design that makes discovery feel tactile.',
      code: `<!-- Inspired by Spotify -->
<div class="ui-aac__grid">
  <div class="ui-aac">
    <div class="ui-aac__art" style="background:linear-gradient(135deg,#7e22ce,#ec4899)">
      <svg viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="50" r="20" fill="rgba(0,0,0,.4)"/><circle cx="50" cy="50" r="4" fill="#fff"/></svg>
      <button class="ui-aac__play" aria-label="Play">▶</button>
    </div>
    <div class="ui-aac__title">Midnights</div>
    <div class="ui-aac__artist">Taylor Swift</div>
  </div>
  <div class="ui-aac">
    <div class="ui-aac__art" style="background:linear-gradient(135deg,#0ea5e9,#22d3ee)">
      <svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="20" y="20" width="60" height="60" fill="rgba(255,255,255,.18)"/><circle cx="50" cy="50" r="12" fill="#fff"/></svg>
      <button class="ui-aac__play" aria-label="Play">▶</button>
    </div>
    <div class="ui-aac__title">Harry's House</div>
    <div class="ui-aac__artist">Harry Styles</div>
  </div>
  <div class="ui-aac">
    <div class="ui-aac__art" style="background:linear-gradient(135deg,#f59e0b,#ef4444)">
      <svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M30 70 L50 30 L70 70 Z" fill="rgba(0,0,0,.35)"/></svg>
      <button class="ui-aac__play" aria-label="Play">▶</button>
    </div>
    <div class="ui-aac__title">After Hours</div>
    <div class="ui-aac__artist">The Weeknd</div>
  </div>
</div>

<style>
  .ui-aac__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:580px;padding:18px;background:#121212;border-radius:8px;font:14px -apple-system,'Segoe UI',Roboto,sans-serif;color:#fff}
  .ui-aac{background:#181818;padding:14px;border-radius:6px;cursor:pointer;transition:background .2s}
  .ui-aac:hover{background:#282828}
  .ui-aac__art{position:relative;aspect-ratio:1;width:100%;border-radius:4px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.5);margin-bottom:14px}
  .ui-aac__play{position:absolute;right:8px;bottom:8px;width:44px;height:44px;border-radius:50%;background:#1ed760;border:0;color:#000;font-size:14px;cursor:pointer;opacity:0;transform:translateY(8px);transition:.2s;box-shadow:0 8px 16px rgba(0,0,0,.4)}
  .ui-aac:hover .ui-aac__play{opacity:1;transform:translateY(0)}
  .ui-aac__play:hover{transform:scale(1.06)}
  .ui-aac__title{font-size:15px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-aac__artist{font-size:13px;color:#a7a7a7;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
</style>`,
    },
    {
      name: 'Audio Scrubber',
      nameJa: 'オーディオスクラバー',
      desc: '曲の進行を表すバー。経過時間/残り時間を両端に表示し、つまみをドラッグして頭出しできる。',
      detail: 'オーディオスクラバーは、再生中の曲がいま全体のどの位置にあるかを示すスライダー型のバーです。バーの左には経過時間(例: 1:24)、右には残り時間または合計時間(例: -2:24)が表示されます。バー上のつまみをドラッグすると好きな位置に頭出しできるため、ポッドキャストや長尺の曲で特定の場面まで飛びたい時に便利です。Spotify・YouTube Music・SoundCloudなど、再生メディアを扱うアプリの中心的なUIで、見た目はシンプルでも操作感の調整がとても重要なコンポーネントです。',
      descEn: 'A progress bar with elapsed/remaining timestamps and a draggable thumb for seeking.',
      detailEn: 'An audio scrubber is the slider-style bar that shows where you are in a song. The elapsed time (e.g. 1:24) sits on the left and the remaining or total time (-2:24) on the right. Dragging the thumb lets you jump to any point — handy in podcasts or long tracks where you want to skim to a chapter. It is the heart of every playback UI from Spotify to YouTube Music to SoundCloud. Though visually simple, the touch feel and snap behavior take careful tuning, which is why teams spend real engineering time on it.',
      code: `<!-- Inspired by Apple Music -->
<div class="ui-scr">
  <div class="ui-scr__bar">
    <div class="ui-scr__fill"></div>
    <div class="ui-scr__thumb"></div>
  </div>
  <div class="ui-scr__times">
    <span class="ui-scr__t">1:24</span>
    <span class="ui-scr__t ui-scr__t--end">-2:24</span>
  </div>
</div>

<style>
  .ui-scr{max-width:420px;padding:24px;background:#1a1a1c;border-radius:12px;font:13px -apple-system,'SF Pro Text','Segoe UI',sans-serif;color:#fff}
  .ui-scr__bar{position:relative;height:6px;background:rgba(255,255,255,.18);border-radius:3px;cursor:pointer}
  .ui-scr__fill{position:absolute;left:0;top:0;height:100%;width:38%;background:#fff;border-radius:3px}
  .ui-scr__thumb{position:absolute;left:38%;top:50%;width:14px;height:14px;background:#fff;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 1px 3px rgba(0,0,0,.5);transition:transform .15s}
  .ui-scr__bar:hover .ui-scr__thumb{transform:translate(-50%,-50%) scale(1.2)}
  .ui-scr__times{display:flex;justify-content:space-between;margin-top:10px;font-size:11px;font-variant-numeric:tabular-nums;color:rgba(255,255,255,.55);letter-spacing:.02em}
  .ui-scr__t--end{color:rgba(255,255,255,.55)}
</style>`,
    },
    {
      name: 'Volume Slider',
      nameJa: '音量スライダー',
      desc: 'スピーカーアイコン+横長スライダー。アイコンをクリックするとミュート切替。',
      detail: '音量スライダーは、左にスピーカーアイコン、右に横長のスライダーを並べた音量調整UIです。スライダーをドラッグすれば0〜100%の範囲で音量を調節でき、スピーカーアイコンをクリックすると一発でミュート(音量0)になり、もう一度クリックすると元の音量に戻ります。Spotifyの右下、YouTube Musicの右上、デスクトップアプリのプレイヤーなど、再生UIに必須の要素です。物理的なつまみを連想させる操作感で、誰でも直感的に扱えるのが魅力です。',
      descEn: 'A horizontal slider with a speaker icon that toggles mute on click.',
      detailEn: 'A volume slider pairs a speaker icon with a horizontal track. Drag the slider to set any level from 0 to 100, or click the speaker icon to mute/unmute in one action — clicking again restores the previous volume. You will spot it at the bottom-right of Spotify, the top-right of YouTube Music, and in essentially every desktop player. The horizontal-knob metaphor is so universal that almost anyone can use it without instruction, which is why it has stayed unchanged for decades.',
      code: `<!-- Inspired by Spotify -->
<div class="ui-vol" id="vol">
  <button class="ui-vol__icon" id="volIcon" aria-label="Mute toggle">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H1a1 1 0 0 1-1-1V6.85a1 1 0 0 1 1-1h1.066L8.991.85a.75.75 0 0 1 .75 0Z"/><path d="M11.5 5.5a3 3 0 0 1 0 5"/><path d="M13.5 3.5a6 6 0 0 1 0 9" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
  </button>
  <div class="ui-vol__track" id="volTrack">
    <div class="ui-vol__fill" id="volFill"></div>
    <div class="ui-vol__thumb" id="volThumb"></div>
  </div>
</div>

<style>
  .ui-vol{display:inline-flex;align-items:center;gap:8px;padding:14px 18px;background:#181818;border-radius:8px;font:13px -apple-system,sans-serif;color:#b3b3b3}
  .ui-vol__icon{background:none;border:0;color:#b3b3b3;cursor:pointer;padding:4px;display:flex}
  .ui-vol__icon:hover{color:#fff}
  .ui-vol__icon.muted{color:#1ed760}
  .ui-vol__track{position:relative;width:140px;height:4px;background:#4d4d4d;border-radius:2px;cursor:pointer}
  .ui-vol__fill{position:absolute;left:0;top:0;height:100%;width:70%;background:#fff;border-radius:2px}
  .ui-vol__track:hover .ui-vol__fill{background:#1ed760}
  .ui-vol__thumb{position:absolute;left:70%;top:50%;width:12px;height:12px;background:#fff;border-radius:50%;transform:translate(-50%,-50%);opacity:0;transition:opacity .15s}
  .ui-vol__track:hover .ui-vol__thumb{opacity:1}
</style>

<script>
  (function(){
    var icon=document.getElementById('volIcon');
    var fill=document.getElementById('volFill');
    var thumb=document.getElementById('volThumb');
    var last=70;
    icon.addEventListener('click',function(){
      if(icon.classList.contains('muted')){
        icon.classList.remove('muted');
        fill.style.width=last+'%';
        thumb.style.left=last+'%';
      } else {
        icon.classList.add('muted');
        last=parseInt(fill.style.width)||70;
        fill.style.width='0%';
        thumb.style.left='0%';
      }
    });
  })();
</script>`,
    },
    {
      name: 'Playlist Sidebar Entry',
      nameJa: 'プレイリストサイドバー項目',
      desc: 'サムネ+プレイリスト名+曲数の小さな1行。サイドバーに縦に並ぶ。',
      detail: 'プレイリストサイドバー項目は、Spotifyの左サイドバーや、Apple Musicのライブラリ画面に並んでいる小さなリスト行です。左に小さなアルバムアートのサムネイル、右にプレイリスト名と作成者または曲数が縦に並びます。1項目あたり高さが60ピクセル前後とコンパクトで、数十個のプレイリストを縦スクロールで一望できるのが特徴です。ユーザーが自分で作ったプレイリストを素早く呼び出すための「マイライブラリ」の中核UIで、音楽アプリの個人化体験を支えています。',
      descEn: 'A compact row with a thumbnail, playlist name, and track count — stacked in the sidebar.',
      detailEn: 'The playlist sidebar entry is the slim row that fills the left rail of Spotify and the library screen of Apple Music. A small album art thumbnail sits on the left, with the playlist name and creator (or track count) lined up to the right. Each row is only about 60px tall, letting users see dozens of playlists at a glance and scroll through them quickly. It is the backbone of the "My Library" experience, the UI that makes personal music collections feel manageable.',
      code: `<!-- Inspired by Spotify -->
<aside class="ui-psb">
  <div class="ui-psb__head">Your Library</div>
  <ul class="ui-psb__list">
    <li class="ui-psb__item is-active">
      <div class="ui-psb__thumb" style="background:linear-gradient(135deg,#1ed760,#0d7c3a)">♥</div>
      <div class="ui-psb__meta">
        <div class="ui-psb__name">Liked Songs</div>
        <div class="ui-psb__sub">Playlist · 247 songs</div>
      </div>
    </li>
    <li class="ui-psb__item">
      <div class="ui-psb__thumb" style="background:linear-gradient(135deg,#7e22ce,#ec4899)">🌙</div>
      <div class="ui-psb__meta">
        <div class="ui-psb__name">Late Night Vibes</div>
        <div class="ui-psb__sub">Playlist · 58 songs</div>
      </div>
    </li>
    <li class="ui-psb__item">
      <div class="ui-psb__thumb" style="background:linear-gradient(135deg,#f59e0b,#ef4444)">🔥</div>
      <div class="ui-psb__meta">
        <div class="ui-psb__name">Workout Energy</div>
        <div class="ui-psb__sub">Playlist · 32 songs</div>
      </div>
    </li>
    <li class="ui-psb__item">
      <div class="ui-psb__thumb" style="background:linear-gradient(135deg,#0ea5e9,#1e3a8a)">☕</div>
      <div class="ui-psb__meta">
        <div class="ui-psb__name">Morning Coffee</div>
        <div class="ui-psb__sub">Playlist · 41 songs</div>
      </div>
    </li>
    <li class="ui-psb__item">
      <div class="ui-psb__thumb" style="background:linear-gradient(135deg,#10b981,#065f46)">🎸</div>
      <div class="ui-psb__meta">
        <div class="ui-psb__name">Indie Rock Picks</div>
        <div class="ui-psb__sub">Playlist · 87 songs</div>
      </div>
    </li>
  </ul>
</aside>

<style>
  .ui-psb{max-width:300px;background:#121212;border-radius:8px;padding:8px;font:14px -apple-system,'Segoe UI',Roboto,sans-serif;color:#b3b3b3}
  .ui-psb__head{padding:10px 12px;font-size:13px;font-weight:700;color:#fff;letter-spacing:.02em}
  .ui-psb__list{list-style:none;margin:0;padding:0}
  .ui-psb__item{display:flex;align-items:center;gap:12px;padding:8px;border-radius:4px;cursor:pointer}
  .ui-psb__item:hover{background:#1a1a1a}
  .ui-psb__item.is-active{background:#232323}
  .ui-psb__thumb{flex:none;width:48px;height:48px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.4)}
  .ui-psb__meta{min-width:0}
  .ui-psb__name{font-size:14px;color:#fff;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-psb__item.is-active .ui-psb__name{color:#1ed760}
  .ui-psb__sub{font-size:12px;color:#a7a7a7;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
</style>`,
    },
    {
      name: 'Lyrics Line Highlight',
      nameJa: '歌詞ハイライト',
      desc: 'カラオケのように現在歌っている行が大きく強調表示される、スクロールする歌詞UI。',
      detail: '歌詞ハイライトは、Spotify・Apple Music・YouTube Musicでおなじみの、曲の再生に合わせて現在の歌詞行を強調するUIです。再生位置に対応する1行が大きく明るく表示され、前後の行は小さく薄く表示されて自動でスクロールします。カラオケのテロップに近い感覚で、聴いているフレーズを目で追えるのが楽しいポイントです。歌詞を「読むコンテンツ」から「再生に同期した体験」へ変えた、近年の音楽アプリで特に人気の機能です。',
      descEn: 'Karaoke-style scrolling lyrics where the currently-sung line is emphasized.',
      detailEn: 'Lyric highlighting is the Spotify/Apple Music/YouTube Music feature that bolds and brightens the line being sung right now, while past and future lines stay smaller and dimmer above and below. The view scrolls automatically so the active line stays roughly centered, much like karaoke captions. It turns lyrics from static text into a synced experience, letting listeners follow the song word-by-word. It is one of the most loved recent additions to streaming services because it deepens emotional connection.',
      code: `<!-- Inspired by Apple Music -->
<div class="ui-lyr">
  <p class="ui-lyr__line ui-lyr__line--past">I've been on the run</p>
  <p class="ui-lyr__line ui-lyr__line--past">Driving in the sun</p>
  <p class="ui-lyr__line ui-lyr__line--active">Looking out for the eight-five-one</p>
  <p class="ui-lyr__line">I've been trying hard not to get into trouble</p>
  <p class="ui-lyr__line">But I, I've got a war in my mind</p>
  <p class="ui-lyr__line">So, I just ride, just ride</p>
</div>

<style>
  .ui-lyr{max-width:480px;padding:32px;background:linear-gradient(180deg,#3a1c5e,#1a0a2e);border-radius:14px;font:600 22px -apple-system,'SF Pro Display','Segoe UI',sans-serif;color:#fff;line-height:1.5;letter-spacing:-.01em}
  .ui-lyr__line{margin:0 0 14px;opacity:.35;transition:opacity .4s,font-size .4s,transform .4s}
  .ui-lyr__line--past{opacity:.22;font-size:18px}
  .ui-lyr__line--active{opacity:1;font-size:26px;color:#fff;text-shadow:0 0 24px rgba(255,255,255,.3);transform:scale(1.02);transform-origin:left center}
</style>`,
    },
    {
      name: 'Equalizer Animation Icon',
      nameJa: 'イコライザーアニメアイコン',
      desc: '3本の縦棒が上下に伸び縮みするアニメ。「いま再生中」を示す小さなインジケーター。',
      detail: 'イコライザーアニメーションアイコンは、3〜5本の縦棒が音楽に合わせるように上下に伸び縮みする小さなアニメーションです。プレイリストの中で「いまこの曲が再生中」を視覚的に示すバッジとして使われ、Spotifyではプレイリストの曲リストの左端、YouTube Musicでもアクティブな項目の横に表示されます。オーディオ機器のスペクトラムアナライザーをモチーフにしており、サイズは小さくとも「音が鳴っている」感覚を瞬時に伝えられるのが強みです。CSSアニメだけで作れる手軽さも人気の理由です。',
      descEn: 'Three vertical bars that bounce up and down to indicate "now playing".',
      detailEn: 'The equalizer animation icon is the tiny bouncing-bars badge that signals "this track is playing right now". You see it on the left edge of Spotify playlist rows or beside the active item in YouTube Music. The design borrows from spectrum analyzers on physical audio gear, so even at a 12px size it instantly reads as "sound". Because it is pure CSS (no images or JS), it is cheap to drop anywhere — which is why so many music apps include it on every track row.',
      code: `<!-- Inspired by Spotify -->
<ul class="ui-eq__list">
  <li class="ui-eq__row is-playing">
    <span class="ui-eq" aria-label="Now playing">
      <span></span><span></span><span></span>
    </span>
    <span class="ui-eq__title">Sunset Drive</span>
    <span class="ui-eq__art">The Midnight</span>
  </li>
  <li class="ui-eq__row">
    <span class="ui-eq__num">2</span>
    <span class="ui-eq__title">Vampires</span>
    <span class="ui-eq__art">The Midnight</span>
  </li>
  <li class="ui-eq__row">
    <span class="ui-eq__num">3</span>
    <span class="ui-eq__title">Days of Thunder</span>
    <span class="ui-eq__art">The Midnight</span>
  </li>
</ul>

<style>
  .ui-eq__list{list-style:none;margin:0;padding:8px;max-width:420px;background:#121212;border-radius:8px;font:14px -apple-system,sans-serif;color:#b3b3b3}
  .ui-eq__row{display:grid;grid-template-columns:24px 1fr 1fr;gap:14px;align-items:center;padding:8px 12px;border-radius:4px}
  .ui-eq__row:hover{background:#1a1a1a}
  .ui-eq__row.is-playing .ui-eq__title{color:#1ed760}
  .ui-eq__num{text-align:center;font-size:13px}
  .ui-eq{display:inline-flex;gap:2px;align-items:flex-end;height:14px;width:14px;justify-self:center}
  .ui-eq span{display:block;width:3px;background:#1ed760;border-radius:1px;animation:ui-eq-bar 1s ease-in-out infinite}
  .ui-eq span:nth-child(1){height:60%;animation-delay:-.4s}
  .ui-eq span:nth-child(2){height:100%;animation-delay:-.2s}
  .ui-eq span:nth-child(3){height:80%;animation-delay:0s}
  @keyframes ui-eq-bar{0%,100%{height:30%}50%{height:100%}}
  .ui-eq__title{color:#fff;font-size:14px}
  .ui-eq__art{color:#a7a7a7;font-size:13px}
</style>`,
    },
    {
      name: 'Like Heart Button',
      nameJa: 'いいねハートボタン',
      desc: '輪郭だけのハートをクリックすると赤く塗りつぶされ、お気に入りに登録できる。',
      detail: 'いいねハートボタンは、曲やアルバムを「お気に入り」に追加するためのトグル型ボタンです。普段は輪郭だけのハートマーク(♡)が表示されていて、クリックすると赤や緑のハートが塗りつぶされ(♥)、ふわっと膨らむアニメーションで「保存されました」を伝えます。SpotifyとApple Musicはこの「ハート」、SoundCloudは「いいね」、YouTube Musicは親指アイコンなど、サービスごとに形は違いますがUXは共通です。ユーザーの音楽嗜好データを集めるためのインターフェースとしても重要な要素です。',
      descEn: 'An outlined heart that fills with color on click to mark a track as a favorite.',
      detailEn: 'The like heart is a toggle button used to favorite a song or album. By default it shows as an outlined heart (♡); click it and the heart fills in red or green (♥) with a brief pop animation to confirm the save. Spotify and Apple Music use a heart, SoundCloud calls it "Like", YouTube Music swaps it for a thumbs-up — different icons, same UX. Beyond the user-facing function, it is also the primary signal these apps use to learn taste and build personalized recommendations.',
      code: `<!-- Inspired by Spotify -->
<div class="ui-like" id="likeWrap">
  <div class="ui-like__row">
    <div class="ui-like__art" style="background:linear-gradient(135deg,#ec4899,#f59e0b)"></div>
    <div class="ui-like__meta">
      <div class="ui-like__title">As It Was</div>
      <div class="ui-like__artist">Harry Styles</div>
    </div>
    <button class="ui-like__btn" id="likeBtn" aria-label="Save to Liked Songs">
      <svg class="ui-like__heart" viewBox="0 0 24 24" width="22" height="22"><path d="M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8C19 16.5 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
    </button>
  </div>
</div>

<style>
  .ui-like{max-width:380px;padding:16px;background:#181818;border-radius:8px;font:14px -apple-system,'Segoe UI',sans-serif;color:#fff}
  .ui-like__row{display:flex;align-items:center;gap:12px}
  .ui-like__art{flex:none;width:48px;height:48px;border-radius:4px;box-shadow:0 4px 10px rgba(0,0,0,.4)}
  .ui-like__meta{flex:1;min-width:0}
  .ui-like__title{font-size:15px;font-weight:500}
  .ui-like__artist{font-size:13px;color:#a7a7a7;margin-top:2px}
  .ui-like__btn{background:none;border:0;color:#a7a7a7;cursor:pointer;padding:4px;transition:color .15s,transform .15s}
  .ui-like__btn:hover{color:#fff;transform:scale(1.08)}
  .ui-like__btn.is-liked{color:#1ed760}
  .ui-like__btn.is-liked .ui-like__heart path{fill:#1ed760}
  .ui-like__btn.is-liked{animation:ui-like-pop .35s ease}
  @keyframes ui-like-pop{0%{transform:scale(1)}40%{transform:scale(1.3)}100%{transform:scale(1)}}
</style>

<script>
  (function(){
    var btn=document.getElementById('likeBtn');
    btn.addEventListener('click',function(){btn.classList.toggle('is-liked');});
  })();
</script>`,
    },
    {
      name: 'Mobile Mini Player',
      nameJa: 'モバイルミニプレイヤー',
      desc: '画面下に貼り付く細長いプレイヤー。アート+曲名+再生ボタン+進行ラインの最小構成。',
      detail: 'モバイルミニプレイヤーは、スマホ版のSpotifyやApple Music、YouTube Musicで画面の下に固定されている薄いプレイヤーカードです。左に正方形のアルバムアート、中央に曲名とアーティスト名、右に再生/一時停止ボタン、そして下端に細い進行ラインが配置されます。タップすればフルスクリーンのプレイヤーが立ち上がるので、普段は最小構成で他のコンテンツを邪魔せず、必要な時だけ広がる賢い設計です。タブバーの真上に貼り付くこの「ミニプレイヤー」は、モバイル音楽アプリの定番パターンです。',
      descEn: 'A slim sticky player card at the bottom of a phone screen with art, title, and a play button.',
      detailEn: 'The mobile mini player is the thin sticky card pinned to the bottom of a phone screen in Spotify, Apple Music, and YouTube Music. The minimal layout puts a square album thumbnail on the left, track and artist names in the middle, a play/pause button on the right, and a slim progress line under the whole thing. Tapping it expands the full-screen player, so the mini stays out of the way until the user wants it. Sitting directly above the tab bar, it is the canonical pattern of modern mobile music apps.',
      code: `<!-- Inspired by Spotify mobile -->
<div class="ui-mmp">
  <div class="ui-mmp__player">
    <div class="ui-mmp__art" style="background:linear-gradient(135deg,#0ea5e9,#7e22ce)">
      <svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="6" fill="rgba(0,0,0,.45)"/><circle cx="20" cy="20" r="1.6" fill="#fff"/></svg>
    </div>
    <div class="ui-mmp__meta">
      <div class="ui-mmp__title">Heat Waves</div>
      <div class="ui-mmp__artist">Glass Animals · Dreamland</div>
    </div>
    <button class="ui-mmp__btn ui-mmp__btn--small" aria-label="Devices">📱</button>
    <button class="ui-mmp__btn" aria-label="Play/Pause">▶</button>
  </div>
  <div class="ui-mmp__progress"><div class="ui-mmp__fill"></div></div>
  <nav class="ui-mmp__tabs">
    <button class="ui-mmp__tab is-active"><span>🏠</span>Home</button>
    <button class="ui-mmp__tab"><span>🔍</span>Search</button>
    <button class="ui-mmp__tab"><span>📚</span>Library</button>
  </nav>
</div>

<style>
  .ui-mmp{max-width:360px;background:#121212;border-radius:18px;overflow:hidden;font:14px -apple-system,'Segoe UI',sans-serif;color:#fff;padding-top:8px;border:1px solid #1f1f1f}
  .ui-mmp__player{display:flex;align-items:center;gap:10px;padding:8px 10px;margin:0 8px;background:#3b1f5c;border-radius:8px}
  .ui-mmp__art{flex:none;width:40px;height:40px;border-radius:4px;overflow:hidden}
  .ui-mmp__meta{flex:1;min-width:0}
  .ui-mmp__title{font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-mmp__artist{font-size:12px;color:#cbb8e3;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ui-mmp__btn{background:none;border:0;color:#fff;cursor:pointer;font-size:18px;padding:6px;display:flex;align-items:center;justify-content:center}
  .ui-mmp__btn--small{font-size:14px;color:#1ed760}
  .ui-mmp__progress{height:2px;background:rgba(255,255,255,.18);margin:6px 16px 0}
  .ui-mmp__fill{width:48%;height:100%;background:#fff;border-radius:1px}
  .ui-mmp__tabs{display:flex;justify-content:space-around;padding:10px 0 14px;margin-top:8px;border-top:1px solid #1f1f1f}
  .ui-mmp__tab{display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:0;color:#a7a7a7;cursor:pointer;font-size:11px;font-weight:500}
  .ui-mmp__tab span{font-size:18px}
  .ui-mmp__tab.is-active{color:#fff}
</style>`,
    },
  ],
}
