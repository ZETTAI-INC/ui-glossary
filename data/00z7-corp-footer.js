/**
 * UI Parts Showcase (Footer & Legal) — ready-to-use, copy-and-paste components.
 * Each entry includes a standalone HTML + CSS snippet you can drop into a project.
 */

export const category = {
  id: 'ui-parts-corp-footer',
  title: '企業サイト フッター・法務',
  titleEn: 'Footer & Legal',
  description: 'Apple・Google・Microsoft・Accenture・楽天 などの企業サイトでよく見るフッター/法務UI(Cookie同意・地域選択など)のコピペスニペットです。',
  terms: [
    {
      name: 'Multi-Column Corporate Footer',
      nameJa: 'マルチカラム企業フッター',
      desc: 'Products / Solutions / Resources / Company / Connect の5列リンク集を並べた、企業サイト定番のフッター。',
      detail: 'マルチカラムフッターは、企業サイトの最下部にサイト全体のナビゲーションを集約するUIです。製品・ソリューション・リソース・会社情報・SNSの5カラムに分け、各列に見出しとリンクリストを並べるのが定石です。Apple や Microsoft、Salesforce のようなBtoB大手サイトで広く採用されており、SEO的にも内部リンクが集まる重要エリアです。モバイルでは各列を縦に積むかアコーディオン化して、タップしやすい高さを確保します。',
      descEn: 'A five-column site footer (Products / Solutions / Resources / Company / Connect) — the standard for corporate sites.',
      detailEn: 'A multi-column footer collects sitewide navigation at the bottom of every page. The canonical recipe splits links into Products, Solutions, Resources, Company, and Connect, each with a heading and a list beneath. You see this on Apple, Microsoft, and Salesforce — large B2B sites where it also acts as a strong internal-linking surface for SEO. On mobile, the columns stack vertically or collapse into accordions so the tap targets stay comfortable.',
      code: `<!-- Inspired by Salesforce -->
<footer class="ui-mcf">
  <div class="ui-mcf__grid">
    <div class="ui-mcf__col">
      <h4 class="ui-mcf__h">Products</h4>
      <ul>
        <li><a href="#">Sales Cloud</a></li>
        <li><a href="#">Service Cloud</a></li>
        <li><a href="#">Marketing Cloud</a></li>
        <li><a href="#">Data Cloud</a></li>
        <li><a href="#">Commerce</a></li>
      </ul>
    </div>
    <div class="ui-mcf__col">
      <h4 class="ui-mcf__h">Solutions</h4>
      <ul>
        <li><a href="#">Small Business</a></li>
        <li><a href="#">Financial Services</a></li>
        <li><a href="#">Healthcare</a></li>
        <li><a href="#">Manufacturing</a></li>
        <li><a href="#">Public Sector</a></li>
      </ul>
    </div>
    <div class="ui-mcf__col">
      <h4 class="ui-mcf__h">Resources</h4>
      <ul>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Trailhead Learning</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Customer Stories</a></li>
        <li><a href="#">Events</a></li>
      </ul>
    </div>
    <div class="ui-mcf__col">
      <h4 class="ui-mcf__h">Company</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Investors</a></li>
        <li><a href="#">Newsroom</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="ui-mcf__col">
      <h4 class="ui-mcf__h">Connect</h4>
      <ul>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">YouTube</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Developers</a></li>
      </ul>
    </div>
  </div>
  <div class="ui-mcf__bottom">
    <span class="ui-mcf__logo"><span class="ui-mcf__mark"></span> Cloudwave</span>
    <span class="ui-mcf__copy">&copy; 2026 Cloudwave, Inc. All rights reserved.</span>
  </div>
</footer>

<style>
  .ui-mcf{max-width:700px;background:#032e61;color:#cfd9e6;padding:28px 24px 18px;font:13px -apple-system,"Segoe UI",Roboto,sans-serif;border-radius:6px}
  .ui-mcf__grid{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;border-bottom:1px solid rgba(255,255,255,.12);padding-bottom:20px}
  .ui-mcf__h{margin:0 0 10px;color:#fff;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}
  .ui-mcf__col ul{list-style:none;margin:0;padding:0}
  .ui-mcf__col li{margin:6px 0}
  .ui-mcf__col a{color:#9bb1c9;text-decoration:none;font-size:12.5px}
  .ui-mcf__col a:hover{color:#fff;text-decoration:underline}
  .ui-mcf__bottom{display:flex;align-items:center;justify-content:space-between;padding-top:14px;font-size:12px;color:#7e93ad}
  .ui-mcf__logo{display:inline-flex;align-items:center;gap:8px;color:#fff;font-weight:600}
  .ui-mcf__mark{width:14px;height:14px;border-radius:50%;background:linear-gradient(135deg,#00a1e0,#1798e5)}
</style>`,
    },
    {
      name: 'Minimal Footer',
      nameJa: 'ミニマルフッター',
      desc: '左にロゴ、中央にコピーライト、右にSNSアイコンを並べた1行の細いフッター。',
      detail: 'ミニマルフッターは、装飾を極力削ったスリムな1行のフッターです。Stripe や Linear のように、製品の世界観を邪魔したくないSaaSのトップページや、ランディングページでよく使われます。左にロゴ、中央にコピーライト、右にSNSアイコンを並べる三分割レイアウトが定番で、高さは40〜56px程度に抑えます。リンクは法務系3〜4本だけに絞ることで、視線を本文コンテンツから外しすぎないのがコツです。',
      descEn: 'A slim single-row footer with the logo on the left, copyright centered, and social icons on the right.',
      detailEn: 'A minimal footer strips ornamentation down to a single thin row. Stripe and Linear use this pattern on SaaS landing pages where they do not want the footer to compete with the product narrative. The classic recipe is three-up: logo on the left, copyright in the center, social icons on the right, all squeezed into 40–56px of height. Keeping links down to three or four legal items prevents the eye from drifting away from the body content above.',
      code: `<!-- Inspired by Stripe -->
<footer class="ui-minf">
  <div class="ui-minf__left">
    <span class="ui-minf__logo"><span class="ui-minf__mark"></span>stride</span>
  </div>
  <div class="ui-minf__center">&copy; 2026 Stride Payments, Inc.</div>
  <div class="ui-minf__right">
    <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-4.79-6.26L4.8 22H2l7-8.01L1.6 2h6.97l4.33 5.72L18.244 2zm-2.39 18h1.86L7.234 4H5.24l10.614 16z"/></svg></a>
    <a href="#" aria-label="GitHub"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.07 3.29 9.36 7.86 10.88.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18.91-.26 1.89-.39 2.86-.39.97 0 1.95.13 2.86.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.57.23 2.73.11 3.02.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56C20.21 21.36 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z"/></svg></a>
    <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.28 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.49 3.05 5.49 7.01V22h-4.56v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.26V22H7.5V8z"/></svg></a>
    <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg></a>
  </div>
</footer>

<style>
  .ui-minf{max-width:660px;display:flex;align-items:center;justify-content:space-between;padding:14px 22px;background:#0a2540;color:#adbdcc;font:13px -apple-system,"Inter","Segoe UI",sans-serif;border-radius:8px}
  .ui-minf__logo{display:inline-flex;align-items:center;gap:7px;color:#fff;font-weight:600;letter-spacing:-.01em}
  .ui-minf__mark{width:14px;height:14px;border-radius:50%;background:conic-gradient(from 200deg,#7a73ff,#00d4ff,#7a73ff)}
  .ui-minf__center{font-size:12.5px;color:#7c8da2}
  .ui-minf__right{display:inline-flex;gap:14px}
  .ui-minf__right a{color:#adbdcc;display:inline-flex;transition:.15s}
  .ui-minf__right a:hover{color:#fff}
</style>`,
    },
    {
      name: 'Cookie Consent Banner',
      nameJa: 'Cookie同意バナー(GDPR)',
      desc: '画面下部に表示される説明文+「すべて許可 / 拒否 / カスタマイズ」ボタンのバナー。',
      detail: 'Cookie同意バナーは、GDPR(EU一般データ保護規則)やCCPAに対応するために、Cookie利用への同意をユーザーから明示的に取得するUIです。画面下部に固定表示され、「すべて許可」「すべて拒否」「カスタマイズ」の3ボタンを並べるのが現在のベストプラクティスです。Microsoft や GitHub のような大手はこのパターンを採用しており、ダークパターン(拒否ボタンを目立たなくする等)を避けることが法的にも信頼面でも重要です。',
      descEn: 'A bottom-of-screen banner explaining cookie use with Accept all / Reject / Customize buttons.',
      detailEn: 'A cookie consent banner is the UI that gathers explicit consent for cookies under GDPR or CCPA. Today\'s best practice pins it to the bottom of the viewport and offers three equally weighted buttons: Accept all, Reject all, and Customize. Microsoft and GitHub both use this layout. Avoiding dark patterns — like making the Reject button visually weaker — matters legally and for trust, so all three should look like real choices rather than nudges.',
      code: `<!-- Inspired by Microsoft -->
<div class="ui-cookie">
  <div class="ui-cookie__icon">🍪</div>
  <div class="ui-cookie__body">
    <h4 class="ui-cookie__h">We value your privacy</h4>
    <p class="ui-cookie__txt">We use cookies and similar technologies to deliver our services, analyze traffic, and personalize content. By clicking "Accept all", you consent to our use of cookies. <a href="#">Privacy Statement</a></p>
  </div>
  <div class="ui-cookie__actions">
    <button type="button" class="ui-cookie__btn ui-cookie__btn--ghost">Reject all</button>
    <button type="button" class="ui-cookie__btn ui-cookie__btn--ghost">Customize</button>
    <button type="button" class="ui-cookie__btn ui-cookie__btn--primary">Accept all</button>
  </div>
</div>

<style>
  .ui-cookie{max-width:700px;display:flex;gap:16px;align-items:flex-start;padding:18px 20px;background:#fff;border:1px solid #d1d1d1;border-top:3px solid #0067b8;box-shadow:0 -2px 8px rgba(0,0,0,.08);font:13px "Segoe UI",-apple-system,Roboto,sans-serif;color:#1a1a1a}
  .ui-cookie__icon{font-size:24px;line-height:1;padding-top:2px}
  .ui-cookie__body{flex:1;min-width:0}
  .ui-cookie__h{margin:0 0 4px;font-size:15px;font-weight:600;color:#000}
  .ui-cookie__txt{margin:0;font-size:12.5px;line-height:1.5;color:#3b3b3b}
  .ui-cookie__txt a{color:#0067b8;text-decoration:underline}
  .ui-cookie__actions{display:flex;gap:8px;flex-shrink:0;align-items:center;flex-wrap:wrap}
  .ui-cookie__btn{padding:7px 16px;font:600 12.5px "Segoe UI",sans-serif;border-radius:2px;cursor:pointer;border:1px solid transparent;min-width:96px}
  .ui-cookie__btn--ghost{background:#fff;color:#000;border-color:#000}
  .ui-cookie__btn--ghost:hover{background:#f3f3f3}
  .ui-cookie__btn--primary{background:#0067b8;color:#fff}
  .ui-cookie__btn--primary:hover{background:#005ea6}
</style>`,
    },
    {
      name: 'Cookie Preferences Modal',
      nameJa: 'Cookie詳細設定モーダル',
      desc: 'Cookieのカテゴリごとにトグルでオン/オフできるモーダル(必須は固定)。',
      detail: 'Cookie詳細設定モーダルは、Cookieバナーの「カスタマイズ」を押したときに開く詳細パネルです。必須Cookie・分析Cookie・マーケティングCookie・機能Cookie のようにカテゴリ分けし、各行にトグルスイッチと説明文を並べます。必須Cookieはサイトの動作に不可欠なため常時オンで固定し、ユーザーが選べるのはそれ以外のみとします。Accenture や Salesforce など、法務要件の厳しいエンタープライズ系企業のサイトで広く採用されている形式です。',
      descEn: 'A modal where users toggle each cookie category on or off (Essential is locked on).',
      detailEn: 'A cookie preferences modal is the detail panel that opens when a user clicks "Customize" on the consent banner. It groups cookies into categories — Essential, Analytics, Marketing, Functional — each row holding a toggle switch and a short description. Essential is locked on because the site cannot function without it; only the others are user-controllable. This format is standard on Accenture, Salesforce, and other enterprise sites with strict compliance requirements.',
      code: `<!-- Inspired by Accenture -->
<div class="ui-cprefs">
  <header class="ui-cprefs__head">
    <h3>Cookie Preferences</h3>
    <button type="button" class="ui-cprefs__close" aria-label="Close">&times;</button>
  </header>
  <p class="ui-cprefs__intro">Manage your cookie choices below. You can change these settings at any time.</p>
  <div class="ui-cprefs__list">
    <label class="ui-cprefs__row">
      <div class="ui-cprefs__txt">
        <span class="ui-cprefs__name">Strictly Necessary <span class="ui-cprefs__pill">Always On</span></span>
        <span class="ui-cprefs__desc">Required for the site to function. Cannot be disabled.</span>
      </div>
      <span class="ui-cprefs__sw ui-cprefs__sw--locked"><span></span></span>
    </label>
    <label class="ui-cprefs__row">
      <div class="ui-cprefs__txt">
        <span class="ui-cprefs__name">Performance &amp; Analytics</span>
        <span class="ui-cprefs__desc">Helps us count visits and traffic sources to improve site performance.</span>
      </div>
      <input type="checkbox" class="ui-cprefs__cb" checked>
      <span class="ui-cprefs__sw"><span></span></span>
    </label>
    <label class="ui-cprefs__row">
      <div class="ui-cprefs__txt">
        <span class="ui-cprefs__name">Functional</span>
        <span class="ui-cprefs__desc">Enables personalization such as language and region preferences.</span>
      </div>
      <input type="checkbox" class="ui-cprefs__cb">
      <span class="ui-cprefs__sw"><span></span></span>
    </label>
    <label class="ui-cprefs__row">
      <div class="ui-cprefs__txt">
        <span class="ui-cprefs__name">Marketing &amp; Advertising</span>
        <span class="ui-cprefs__desc">Used to deliver relevant ads and measure campaign performance.</span>
      </div>
      <input type="checkbox" class="ui-cprefs__cb">
      <span class="ui-cprefs__sw"><span></span></span>
    </label>
  </div>
  <footer class="ui-cprefs__foot">
    <button type="button" class="ui-cprefs__btn ui-cprefs__btn--ghost">Reject all</button>
    <button type="button" class="ui-cprefs__btn ui-cprefs__btn--primary">Save preferences</button>
  </footer>
</div>

<style>
  .ui-cprefs{max-width:560px;background:#fff;border-radius:8px;padding:22px 24px;font:13px "Graphik","Segoe UI",-apple-system,sans-serif;color:#1d1d1f;box-shadow:0 16px 40px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.06)}
  .ui-cprefs__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
  .ui-cprefs__head h3{margin:0;font-size:18px;font-weight:600;letter-spacing:-.01em}
  .ui-cprefs__close{background:none;border:0;font-size:24px;color:#65676c;cursor:pointer;line-height:1}
  .ui-cprefs__intro{margin:0 0 14px;color:#5c5e62;font-size:12.5px;line-height:1.5}
  .ui-cprefs__list{display:flex;flex-direction:column;gap:0;border-top:1px solid #eee}
  .ui-cprefs__row{display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid #eee;cursor:pointer}
  .ui-cprefs__txt{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
  .ui-cprefs__name{font-weight:600;font-size:13.5px;display:inline-flex;align-items:center;gap:8px}
  .ui-cprefs__pill{font-size:10.5px;font-weight:600;background:#e8f1ff;color:#1968d0;padding:2px 8px;border-radius:10px;letter-spacing:.02em;text-transform:uppercase}
  .ui-cprefs__desc{color:#65676c;font-size:12px;line-height:1.45}
  .ui-cprefs__cb{display:none}
  .ui-cprefs__sw{width:36px;height:20px;background:#c6c6c8;border-radius:10px;position:relative;flex-shrink:0;transition:.18s}
  .ui-cprefs__sw span{position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.2);transition:.18s}
  .ui-cprefs__cb:checked + .ui-cprefs__sw{background:#a100ff}
  .ui-cprefs__cb:checked + .ui-cprefs__sw span{transform:translateX(16px)}
  .ui-cprefs__sw--locked{background:#a100ff;opacity:.55;cursor:not-allowed}
  .ui-cprefs__sw--locked span{transform:translateX(16px)}
  .ui-cprefs__foot{display:flex;justify-content:flex-end;gap:10px;margin-top:18px}
  .ui-cprefs__btn{padding:9px 18px;border-radius:24px;font:600 12.5px "Graphik",sans-serif;cursor:pointer;border:1px solid transparent}
  .ui-cprefs__btn--ghost{background:#fff;color:#1d1d1f;border-color:#1d1d1f}
  .ui-cprefs__btn--ghost:hover{background:#f5f5f7}
  .ui-cprefs__btn--primary{background:#a100ff;color:#fff}
  .ui-cprefs__btn--primary:hover{background:#8c00dd}
</style>`,
    },
    {
      name: 'Region & Language Selector',
      nameJa: '地域・言語セレクター',
      desc: '国旗付きの国一覧と言語サブリストが開く、フッター下端の地域切替メニュー。',
      detail: '地域・言語セレクターは、グローバルサイトでユーザーが自国・自言語の表示に切り替えるためのUIです。Apple や Microsoft のようなグローバル企業は、フッターの最下端に「🌐 United States (English)」のようなトリガーを置き、押すと国旗付きの国リスト+言語サブリストが展開する設計を採用しています。クリック箇所はフッターの下端に小さく置くのが定番ですが、本人にとって最重要のひとつなので、文字色を本文より少し濃くしてアクセスしやすくします。',
      descEn: 'A footer-bottom dropdown with a flag-decorated country list and a language sub-list.',
      detailEn: 'A region and language selector lets users on a global site switch into their own country and language. Apple and Microsoft both anchor a small trigger to the very bottom of the footer — something like "🌐 United States (English)" — that opens a flag-prefixed list of countries with a language sub-list. The control sits low and unobtrusive, but because picking the right locale is so important for the user, the text color is usually a notch darker than ordinary footer text so it stays findable.',
      code: `<!-- Inspired by Apple -->
<div class="ui-region">
  <button type="button" class="ui-region__trigger" id="rgtrig">
    <span class="ui-region__globe">🌐</span>
    <span>United States</span>
    <span class="ui-region__sep">|</span>
    <span class="ui-region__lang">English</span>
    <span class="ui-region__caret">⌄</span>
  </button>
  <div class="ui-region__pop" id="rgpop">
    <div class="ui-region__h">Choose your country or region</div>
    <ul class="ui-region__list">
      <li><span class="ui-region__flag">🇺🇸</span>United States<span class="ui-region__sub">English</span></li>
      <li><span class="ui-region__flag">🇬🇧</span>United Kingdom<span class="ui-region__sub">English</span></li>
      <li><span class="ui-region__flag">🇯🇵</span>Japan<span class="ui-region__sub">日本語</span></li>
      <li><span class="ui-region__flag">🇩🇪</span>Germany<span class="ui-region__sub">Deutsch</span></li>
      <li><span class="ui-region__flag">🇫🇷</span>France<span class="ui-region__sub">Français</span></li>
      <li><span class="ui-region__flag">🇰🇷</span>Korea<span class="ui-region__sub">한국어</span></li>
      <li><span class="ui-region__flag">🇨🇳</span>China Mainland<span class="ui-region__sub">简体中文</span></li>
      <li><span class="ui-region__flag">🇮🇳</span>India<span class="ui-region__sub">English</span></li>
    </ul>
  </div>
</div>

<style>
  .ui-region{position:relative;display:inline-block;max-width:680px;width:100%;padding:14px 18px;background:#1d1d1f;border-top:1px solid #424245;font:12px -apple-system,"SF Pro Text","Segoe UI",sans-serif;color:#86868b;border-radius:0 0 6px 6px;box-sizing:border-box}
  .ui-region__trigger{display:inline-flex;align-items:center;gap:8px;background:transparent;border:0;color:#a1a1a6;font:12px -apple-system,sans-serif;cursor:pointer;padding:0}
  .ui-region__trigger:hover{color:#f5f5f7}
  .ui-region__globe{font-size:13px}
  .ui-region__sep{opacity:.4}
  .ui-region__lang{color:#a1a1a6}
  .ui-region__caret{font-size:11px;margin-left:2px}
  .ui-region__pop{position:absolute;left:18px;bottom:calc(100% + 4px);width:300px;background:#2a2a2c;border:1px solid #424245;border-radius:8px;padding:10px 6px;display:none;z-index:20;box-shadow:0 12px 30px rgba(0,0,0,.5)}
  .ui-region.is-open .ui-region__pop{display:block}
  .ui-region__h{padding:4px 10px 8px;font-size:11px;color:#86868b;text-transform:uppercase;letter-spacing:.04em}
  .ui-region__list{list-style:none;margin:0;padding:0;max-height:230px;overflow-y:auto}
  .ui-region__list li{display:flex;align-items:center;gap:10px;padding:8px 10px;cursor:pointer;color:#f5f5f7;font-size:13px;border-radius:4px}
  .ui-region__list li:hover{background:#3a3a3c}
  .ui-region__flag{font-size:16px;width:20px;text-align:center}
  .ui-region__sub{margin-left:auto;color:#86868b;font-size:12px}
</style>

<script>
  (function(){
    const r=document.currentScript.parentElement.querySelector('.ui-region');
    const t=r.querySelector('#rgtrig');
    t.addEventListener('click',e=>{e.stopPropagation();r.classList.toggle('is-open')});
    document.addEventListener('click',e=>{if(!r.contains(e.target))r.classList.remove('is-open')});
  })();
</script>`,
    },
    {
      name: 'Newsletter Footer Signup',
      nameJa: 'ニュースレター登録フッター',
      desc: 'メール入力欄+Subscribeボタン+小さなプライバシー注記+SNSアイコン4つ。',
      detail: 'ニュースレター登録フッターは、企業フッターに埋め込むメールマガジン購読フォームです。1行のメール入力欄と Subscribe ボタン、その下に「いつでも配信解除できます」という小さなプライバシー注記、そして横に並べた SNS アイコンで構成するのが標準形です。Notion や Stripe、GitHub の公式サイトのフッターで広く採用されているパターンで、リード獲得とコミュニティ流入の両方を兼ねます。ボタンは色を強くつけてアクション意図を示し、注記はあえて小さく目立たせない方が押下率が上がります。',
      descEn: 'An email input + Subscribe button with a small privacy note and four social icons.',
      detailEn: 'A newsletter footer signup is the mailing-list subscription form embedded inside the corporate footer. The standard recipe is a single-line email input next to a Subscribe button, a tiny "unsubscribe anytime" note below, and a row of social icons on the side. Notion, Stripe, and GitHub all use a variation of this, and it serves double duty as lead capture and community funnel. Strong color on the button signals intent; keeping the privacy note quiet rather than loud measurably lifts conversion.',
      code: `<!-- Inspired by GitHub -->
<section class="ui-nlf">
  <div class="ui-nlf__left">
    <h4 class="ui-nlf__h">Subscribe to our newsletter</h4>
    <p class="ui-nlf__sub">Get product updates, engineering deep-dives, and community stories — once a month.</p>
    <form class="ui-nlf__form" onsubmit="event.preventDefault();this.querySelector('button').textContent='Subscribed ✓'">
      <input aria-label="you@example.com" type="email" class="ui-nlf__input" placeholder="you@example.com" required>
      <button type="submit" class="ui-nlf__btn">Subscribe</button>
    </form>
    <p class="ui-nlf__note">We respect your inbox. Unsubscribe at any time. <a href="#">Privacy Policy</a></p>
  </div>
  <div class="ui-nlf__right">
    <span class="ui-nlf__social-h">Follow us</span>
    <div class="ui-nlf__icons">
      <a href="#" aria-label="GitHub"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.5-2.6-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3 0 0 1-.3 3.1 1.2.9-.3 1.9-.4 2.9-.4 1 0 1.9.1 2.9.4 2.2-1.5 3.1-1.2 3.1-1.2.6 1.5.2 2.7.1 3 .8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg></a>
      <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.2 2H21l-6.5 7.4L22 22h-6.8l-4.8-6.3L4.8 22H2l7-8L1.6 2h7l4.3 5.7L18.2 2zm-2.4 18h1.9L7.2 4H5.2l10.6 16z"/></svg></a>
      <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 3.5C5 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 5 2.1 5 3.5zM.2 8h4.6v14H.2V8zm7.3 0h4.4v1.9c.6-1.2 2.1-2.4 4.3-2.4 4.6 0 5.5 3 5.5 7V22h-4.6v-6.2c0-1.5 0-3.4-2-3.4s-2.4 1.6-2.4 3.3V22H7.5V8z"/></svg></a>
      <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg></a>
    </div>
  </div>
</section>

<style>
  .ui-nlf{max-width:680px;display:flex;gap:32px;padding:26px 24px;background:#0d1117;color:#c9d1d9;border:1px solid #30363d;border-radius:8px;font:13px -apple-system,"Segoe UI",sans-serif;box-sizing:border-box}
  .ui-nlf__left{flex:1;min-width:0}
  .ui-nlf__h{margin:0 0 6px;color:#f0f6fc;font-size:16px;font-weight:600}
  .ui-nlf__sub{margin:0 0 14px;color:#8b949e;font-size:13px;line-height:1.5}
  .ui-nlf__form{display:flex;gap:8px}
  .ui-nlf__input{flex:1;min-width:0;padding:8px 12px;background:#0d1117;border:1px solid #30363d;border-radius:6px;color:#c9d1d9;font:13px -apple-system,sans-serif;outline:none}
  .ui-nlf__input:focus{border-color:#1f6feb;box-shadow:0 0 0 3px rgba(31,111,235,.3)}
  .ui-nlf__btn{padding:8px 16px;background:#238636;color:#fff;border:1px solid rgba(240,246,252,.1);border-radius:6px;font:600 13px -apple-system,sans-serif;cursor:pointer;white-space:nowrap}
  .ui-nlf__btn:hover{background:#2ea043}
  .ui-nlf__note{margin:10px 0 0;font-size:11.5px;color:#8b949e}
  .ui-nlf__note a{color:#58a6ff;text-decoration:none}
  .ui-nlf__right{display:flex;flex-direction:column;gap:10px;flex-shrink:0;border-left:1px solid #30363d;padding-left:24px}
  .ui-nlf__social-h{font-size:12px;color:#8b949e;text-transform:uppercase;letter-spacing:.04em}
  .ui-nlf__icons{display:flex;gap:10px}
  .ui-nlf__icons a{color:#8b949e;display:inline-flex;width:32px;height:32px;align-items:center;justify-content:center;border:1px solid #30363d;border-radius:6px;transition:.15s}
  .ui-nlf__icons a:hover{color:#f0f6fc;border-color:#8b949e;background:#161b22}
</style>`,
    },
    {
      name: 'App Store Badges Row',
      nameJa: 'アプリストアバッジ列',
      desc: 'App Store・Google Play・Microsoft Store の3つのバッジ風ボタンを横並びにした列。',
      detail: 'アプリストアバッジ列は、企業フッターやモバイルアプリ紹介セクションに置く、各アプリストアへの誘導ボタン群です。「App Store で入手」「Google Play で手に入れよう」「Microsoft Store で入手」のような決まり文句と各社ロゴを並べる、ほぼ業界標準化されたデザインです。Rakuten や Amazon、Microsoft の公式フッターで頻出します。バッジは公式素材を使うのが本来の正解ですが、デザイン段階ではダミーで形だけ作っておくとレイアウト検証がしやすくなります。',
      descEn: 'App Store, Google Play, and Microsoft Store badge-style buttons in a horizontal row.',
      detailEn: 'An app store badges row points visitors at the official app stores from the corporate footer or a mobile-app section. Each store has near-canonical copy — "Download on the App Store", "Get it on Google Play", "Get it from Microsoft" — paired with their wordmark. Rakuten, Amazon, and Microsoft all use this pattern. In production you should use the official assets, but during design it is fine to mock the shape with generic marks just to validate the layout.',
      code: `<!-- Inspired by Rakuten -->
<div class="ui-stores">
  <div class="ui-stores__h">Get the app</div>
  <div class="ui-stores__row">
    <a href="#" class="ui-stores__b">
      <span class="ui-stores__icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.05 12.04c-.03-2.85 2.33-4.22 2.44-4.29-1.33-1.95-3.4-2.21-4.13-2.24-1.76-.18-3.43 1.03-4.32 1.03-.91 0-2.27-1.01-3.74-.98-1.92.03-3.7 1.12-4.69 2.83-2 3.47-.51 8.59 1.43 11.41.95 1.38 2.08 2.92 3.55 2.87 1.43-.06 1.97-.93 3.7-.93 1.72 0 2.21.93 3.72.9 1.54-.03 2.51-1.4 3.45-2.79 1.09-1.6 1.54-3.15 1.56-3.23-.03-.02-3-1.15-3.03-4.58zM14.45 3.4c.79-.96 1.32-2.28 1.18-3.4-1.14.05-2.51.76-3.32 1.71-.73.84-1.37 2.19-1.2 3.28 1.27.1 2.56-.65 3.34-1.59z"/></svg>
      </span>
      <span class="ui-stores__txt">
        <span class="ui-stores__small">Download on the</span>
        <span class="ui-stores__big">App Store</span>
      </span>
    </a>
    <a href="#" class="ui-stores__b">
      <span class="ui-stores__icon">
        <svg viewBox="0 0 24 24" width="22" height="22"><defs><linearGradient id="gpa" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d2ff"/><stop offset="1" stop-color="#3a7bd5"/></linearGradient><linearGradient id="gpb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd83d"/><stop offset="1" stop-color="#ffa800"/></linearGradient><linearGradient id="gpc" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff4b3a"/><stop offset="1" stop-color="#ff8b3a"/></linearGradient><linearGradient id="gpd" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#00b66c"/><stop offset="1" stop-color="#28d17c"/></linearGradient></defs><path fill="url(#gpa)" d="M3.5 1.5 14 12 3.5 22.5c-.4-.3-.6-.7-.6-1.2V2.7c0-.5.2-.9.6-1.2z"/><path fill="url(#gpc)" d="M14 12 3.5 22.5c.4.3 1 .3 1.5 0L17.5 15z"/><path fill="url(#gpd)" d="M14 12 5 1.5c-.5-.3-1.1-.3-1.5 0L14 12z"/><path fill="url(#gpb)" d="m17.5 9-3.5 3 3.5 3 3.5-2c.8-.5.8-1.6 0-2z"/></svg>
      </span>
      <span class="ui-stores__txt">
        <span class="ui-stores__small">GET IT ON</span>
        <span class="ui-stores__big">Google Play</span>
      </span>
    </a>
    <a href="#" class="ui-stores__b">
      <span class="ui-stores__icon">
        <svg viewBox="0 0 24 24" width="22" height="22"><rect x="2" y="2" width="9.5" height="9.5" fill="#f25022"/><rect x="12.5" y="2" width="9.5" height="9.5" fill="#7fba00"/><rect x="2" y="12.5" width="9.5" height="9.5" fill="#00a4ef"/><rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#ffb900"/></svg>
      </span>
      <span class="ui-stores__txt">
        <span class="ui-stores__small">Get it from</span>
        <span class="ui-stores__big">Microsoft</span>
      </span>
    </a>
  </div>
</div>

<style>
  .ui-stores{max-width:660px;padding:18px;background:#bf0000;border-radius:8px;font:13px -apple-system,"Segoe UI",sans-serif;color:#fff}
  .ui-stores__h{font-size:13px;font-weight:600;margin-bottom:12px;letter-spacing:.02em;text-transform:uppercase;opacity:.85}
  .ui-stores__row{display:flex;gap:10px;flex-wrap:wrap}
  .ui-stores__b{display:inline-flex;align-items:center;gap:10px;padding:8px 14px;background:#000;color:#fff;border-radius:8px;text-decoration:none;border:1px solid rgba(255,255,255,.15);min-width:160px}
  .ui-stores__b:hover{background:#1a1a1a}
  .ui-stores__icon{display:inline-flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0}
  .ui-stores__txt{display:flex;flex-direction:column;line-height:1.1}
  .ui-stores__small{font-size:9.5px;letter-spacing:.04em;text-transform:uppercase;opacity:.85}
  .ui-stores__big{font-size:16px;font-weight:600;letter-spacing:-.01em;margin-top:2px}
</style>`,
    },
    {
      name: 'Mini Sitemap',
      nameJa: 'ミニサイトマップ',
      desc: '3列に圧縮した、見出し+リンクの密度高めなサイトマップグリッド。',
      detail: 'ミニサイトマップは、フッター内に「サイト全体の目次」をコンパクトに配置するUIです。マルチカラムフッターよりも密度が高く、見出し+小さなリンクを3列前後で並べ、企業全体の構造を一望できるようにします。Microsoft Learn や Amazon Web Services の公式サイトのように、コンテンツ量が膨大で内部リンクの設計が重要なサイトで採用されます。タイポは小さめ(11〜12px)、行間は詰め気味にして情報密度を上げるのがコツです。',
      descEn: 'A compact 3-column grid of section headings with dense link lists — a mini sitemap.',
      detailEn: 'A mini sitemap squeezes a "table of contents for the whole site" into the footer. It is denser than a normal multi-column footer — section headings plus small links across three columns — so visitors can see the entire structure at a glance. Microsoft Learn and AWS use this pattern because their content libraries are huge and internal linking matters. The trick is to keep typography small (11–12px) and tighten line-height to push information density up without losing scannability.',
      code: `<!-- Inspired by Amazon -->
<div class="ui-sm">
  <div class="ui-sm__grid">
    <div>
      <h5>Get to Know Us</h5>
      <ul>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Press Releases</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Devices</a></li>
        <li><a href="#">Sustainability</a></li>
      </ul>
    </div>
    <div>
      <h5>Make Money with Us</h5>
      <ul>
        <li><a href="#">Sell on Marketplace</a></li>
        <li><a href="#">Become an Affiliate</a></li>
        <li><a href="#">Advertise Your Products</a></li>
        <li><a href="#">Self-Publish with Us</a></li>
        <li><a href="#">Host a Hub</a></li>
      </ul>
    </div>
    <div>
      <h5>Payment Products</h5>
      <ul>
        <li><a href="#">Business Card</a></li>
        <li><a href="#">Shop with Points</a></li>
        <li><a href="#">Reload Your Balance</a></li>
        <li><a href="#">Currency Converter</a></li>
        <li><a href="#">Gift Cards</a></li>
      </ul>
    </div>
    <div>
      <h5>Let Us Help You</h5>
      <ul>
        <li><a href="#">Your Account</a></li>
        <li><a href="#">Your Orders</a></li>
        <li><a href="#">Shipping Rates</a></li>
        <li><a href="#">Returns &amp; Replacements</a></li>
        <li><a href="#">Help &amp; Customer Service</a></li>
      </ul>
    </div>
    <div>
      <h5>For Business</h5>
      <ul>
        <li><a href="#">Business Solutions</a></li>
        <li><a href="#">Cloud Services</a></li>
        <li><a href="#">API Reference</a></li>
        <li><a href="#">Marketplace Sellers</a></li>
        <li><a href="#">Wholesale Programs</a></li>
      </ul>
    </div>
    <div>
      <h5>Communities</h5>
      <ul>
        <li><a href="#">Forums</a></li>
        <li><a href="#">Developer Hub</a></li>
        <li><a href="#">User Groups</a></li>
        <li><a href="#">Events Calendar</a></li>
        <li><a href="#">Blog Network</a></li>
      </ul>
    </div>
  </div>
</div>

<style>
  .ui-sm{max-width:680px;background:#232f3e;color:#fff;padding:22px 26px;border-radius:6px;font:12px Arial,"Helvetica Neue",sans-serif}
  .ui-sm__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px 28px}
  .ui-sm h5{margin:0 0 8px;font-size:13px;font-weight:700;color:#fff;letter-spacing:.01em}
  .ui-sm ul{list-style:none;margin:0;padding:0}
  .ui-sm li{margin:3px 0}
  .ui-sm a{color:#dddddd;text-decoration:none;font-size:12px;line-height:1.45}
  .ui-sm a:hover{text-decoration:underline;color:#fff}
</style>`,
    },
    {
      name: 'Legal Links Row',
      nameJa: '法務リンク列',
      desc: 'Privacy・Terms・Cookies・Accessibility・Trademarks 等の法務リンクをドット区切りで1行に並べる。',
      detail: '法務リンク列は、企業サイトのフッター最下部に「・」で区切って並ぶ、法務関連リンクの1行です。プライバシーポリシー・利用規約・Cookie設定・アクセシビリティ・商標表記・現代奴隷法声明 などを横並びにし、コピーライト表記とともに配置します。グローバル企業の場合、英国の Modern Slavery Act や EU の GDPR、米国の CCPA など各国法に対応するため、リンク数が増えがちです。Apple や Microsoft、Accenture などのコーポレートサイトのフッターで定番です。',
      descEn: 'A single inline row of legal links — Privacy, Terms, Cookies, Accessibility, Trademarks, Modern Slavery Statement.',
      detailEn: 'A legal links row is the single dotted line of compliance links pinned to the very bottom of a corporate footer. It usually contains Privacy Policy, Terms of Use, Cookie Settings, Accessibility, Trademarks, and Modern Slavery Statement, sitting alongside the copyright. Global companies tend to accumulate more links here as they comply with the UK Modern Slavery Act, EU GDPR, California CCPA, and more. Apple, Microsoft, and Accenture all anchor a row like this at the foot of every page.',
      code: `<!-- Inspired by Apple -->
<div class="ui-legal">
  <div class="ui-legal__top">
    Copyright &copy; 2026 Apricot Inc. All rights reserved.
  </div>
  <nav class="ui-legal__links">
    <a href="#">Privacy Policy</a>
    <span class="ui-legal__dot">·</span>
    <a href="#">Terms of Use</a>
    <span class="ui-legal__dot">·</span>
    <a href="#">Sales and Refunds</a>
    <span class="ui-legal__dot">·</span>
    <a href="#">Cookies</a>
    <span class="ui-legal__dot">·</span>
    <a href="#">Accessibility</a>
    <span class="ui-legal__dot">·</span>
    <a href="#">Legal</a>
    <span class="ui-legal__dot">·</span>
    <a href="#">Trademarks</a>
    <span class="ui-legal__dot">·</span>
    <a href="#">Modern Slavery Statement</a>
    <span class="ui-legal__dot">·</span>
    <a href="#">Site Map</a>
  </nav>
</div>

<style>
  .ui-legal{max-width:680px;padding:14px 22px;background:#f5f5f7;color:#6e6e73;border-top:1px solid #d2d2d7;font:11.5px -apple-system,"SF Pro Text","Segoe UI",sans-serif;border-radius:0 0 6px 6px;box-sizing:border-box}
  .ui-legal__top{margin-bottom:6px;color:#6e6e73}
  .ui-legal__links{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;line-height:1.5}
  .ui-legal__links a{color:#424245;text-decoration:none}
  .ui-legal__links a:hover{text-decoration:underline}
  .ui-legal__dot{color:#86868b;user-select:none}
</style>`,
    },
    {
      name: 'Back-to-Top Button',
      nameJa: 'トップに戻るボタン',
      desc: '画面右下に固定された、↑アイコン+「BACK TO TOP」ラベルの丸ボタン。',
      detail: 'トップに戻るボタンは、長いページの右下に固定表示され、押すと最上部まで一気にスクロールする丸ボタンです。↑アイコンに「BACK TO TOP」のラベルを添える形が定番で、Notion のドキュメントサイトや楽天・Accenture のコーポレートサイトなど、縦長のコンテンツが多いページで頻繁に使われます。ある程度スクロールしたタイミングで初めて出現するように制御するのがUX的に望ましく、ホバー時にラベルがふわっと展開するインタラクションを加えるとさらに上品な印象になります。',
      descEn: 'A round corner-fixed button with an up-arrow icon and "BACK TO TOP" label.',
      detailEn: 'A back-to-top button is the round affordance pinned to the lower-right of long pages — tap it and the page scrolls to the very top. The familiar recipe pairs an up-arrow with a "BACK TO TOP" label. Notion docs, Rakuten, and Accenture all use it for any page where vertical content piles up. From a UX standpoint, it should only appear after the user has scrolled past a threshold, and a small hover interaction — the label gently sliding out — adds a touch of refinement without distracting.',
      code: `<!-- Inspired by Accenture -->
<div class="ui-btt-stage">
  <div class="ui-btt-stage__hint">↓ scroll, then click the corner button ↓</div>
  <button type="button" class="ui-btt" id="btt" aria-label="Back to top">
    <span class="ui-btt__arrow">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
    </span>
    <span class="ui-btt__label">BACK TO TOP</span>
  </button>
</div>

<style>
  .ui-btt-stage{position:relative;max-width:680px;height:260px;background:linear-gradient(180deg,#fff,#f3f3f3);border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;font:13px "Graphik","Segoe UI",-apple-system,sans-serif;color:#555;box-sizing:border-box}
  .ui-btt-stage__hint{padding:120px 20px 0;text-align:center;color:#a100ff;font-size:12px;letter-spacing:.08em;text-transform:uppercase}
  .ui-btt{position:absolute;right:18px;bottom:18px;height:48px;display:inline-flex;align-items:center;gap:0;padding:0;background:#a100ff;color:#fff;border:0;border-radius:24px;cursor:pointer;box-shadow:0 6px 18px rgba(161,0,255,.35);overflow:hidden;transition:padding-right .22s ease}
  .ui-btt__arrow{width:48px;height:48px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}
  .ui-btt__label{font:700 11.5px "Graphik",sans-serif;letter-spacing:.1em;max-width:0;opacity:0;overflow:hidden;white-space:nowrap;transition:max-width .22s ease,opacity .22s ease,margin-right .22s ease}
  .ui-btt:hover{padding-right:18px;background:#8c00dd}
  .ui-btt:hover .ui-btt__label{max-width:140px;opacity:1;margin-right:4px}
</style>

<script>
  (function(){
    const b=document.currentScript.parentElement.querySelector('#btt');
    b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  })();
</script>`,
    },
  ],
};
