
const problems = [
  "スタッフの本音が見えない",
  "急な退職が続いている",
  "店舗や部署ごとの状態が分からない",
  "面談では「大丈夫です」と言われてしまう",
  "不満や違和感がトラブルになるまで気づけない",
  "コンプライアンスやハラスメント不安を早めに拾えない",
];

const features = [
  {
    title: "スマホアンケート",
    text: "URLやQRコードを配布するだけで、従業員がスマホから回答できます。アプリのインストールは不要で、平均回答時間は3〜5分。月次・週次など必要な頻度で継続実施できます。",
  },
  {
    title: "モチベーション診断",
    text: "仕事量・評価納得感・人間関係・成長実感・定着意欲を5段階で収集し、個人・グループ単位でスコア化します。感覚に頼らず、数値で状態を把握できます。",
  },
  {
    title: "ストレスチェック",
    text: "ストレス度・体調・休息の充足感を可視化し、要フォロー対象を自動でリストアップします。問題が大きくなる前に把握して、早めのフォローができます。",
  },
  {
    title: "グループスコア",
    text: "店舗・部署・エリア・チームごとに状態を比較できます。複数拠点を持つ企業でも、全体の状態を一画面で把握。どこに課題があるかが直感的にわかります。",
  },
  {
    title: "匿名コメント",
    text: "ハラスメントやコンプライアンス不安など言いにくい内容を、記名回答と完全に切り離した匿名形式で収集できます。安心感が正直な声を引き出します。",
  },
  {
    title: "AI改善提案",
    text: "AIが回答データを要約し、問題点・優先対応・放置リスク・次の改善アクションを整理します。「何が問題か」だけでなく「何をすべきか」まで提示します。",
  },
];

const steps = [
  "アンケートを作成",
  "URL / QRをスタッフへ配布",
  "スタッフがスマホで回答",
  "結果をダッシュボードで確認",
  "AIが改善アクションを提案",
];

const benefits = [
  "退職前の小さなサインを拾いやすくなる",
  "店舗・部署ごとの状態を比較できる",
  "面談だけでは見えない本音を把握できる",
  "管理者任せにせず、経営側が現場を把握できる",
  "コンプライアンス不安を早期発見できる",
  "活躍候補や次期リーダー候補を見つけやすくなる",
];

const dashboardBars = [
  ["名古屋店", "88%"],
  ["静岡店", "76%"],
  ["大阪店", "69%"],
  ["東京店", "84%"],
];

const conditionTypes = [
  {
    type: "推進リーダー",
    weather: "快晴",
    icon: "sunny",
    desc: "意欲・定着意欲・評価納得感がいずれも高く、チームを自発的に牽引している状態。",
    bg: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    type: "成長加速",
    weather: "晴れ",
    icon: "partly-cloudy",
    desc: "意欲と成長実感が高く、スキルアップを実感しながら前向きに働いている状態。",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    type: "安定実行",
    weather: "うす曇り",
    icon: "cloudy",
    desc: "大きな不満はないが変化を求めていない状態。安定しているが刺激が少ない可能性がある。",
    bg: "from-slate-50 to-gray-50",
    border: "border-slate-200",
    badge: "bg-slate-100 text-slate-600",
  },
  {
    type: "サポート調整",
    weather: "にわか雨",
    icon: "light-rain",
    desc: "周囲のサポートを優先しながら、自分自身のバランスを保とうとしている状態。",
    bg: "from-cyan-50 to-teal-50",
    border: "border-cyan-200",
    badge: "bg-cyan-100 text-cyan-700",
  },
  {
    type: "バランス模索",
    weather: "曇り時々雨",
    icon: "rainy",
    desc: "複数の役割や価値観の間でバランスを取ろうとしているが、やや不安定な状態。",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    type: "コンディション低下",
    weather: "荒天",
    icon: "stormy",
    desc: "ストレスや疲れ、不満が高まっている状態。早めのフォローが必要なサインです。",
    bg: "from-rose-50 to-red-50",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    type: "キャリア思考",
    weather: "にじ",
    icon: "rainbow",
    desc: "現在の仕事を続けながら、将来のキャリアについて積極的に考え始めている状態。",
    bg: "from-fuchsia-50 to-pink-50",
    border: "border-fuchsia-200",
    badge: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    type: "方向性迷い",
    weather: "霧",
    icon: "foggy",
    desc: "目標や役割が不明確で、何に向かって動けばよいか見えにくい状態。",
    bg: "from-stone-50 to-neutral-100",
    border: "border-stone-200",
    badge: "bg-stone-100 text-stone-600",
  },
];

function WeatherIcon({ icon }: { icon: string }) {
  if (icon === "sunny") return (
    <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
      <circle cx="32" cy="32" r="13" fill="#FCD34D" />
      <line x1="32" y1="4"  x2="32" y2="14" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="32" y1="50" x2="32" y2="60" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="4"  y1="32" x2="14" y2="32" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="50" y1="32" x2="60" y2="32" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="12" y1="12" x2="19" y2="19" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="45" y1="45" x2="52" y2="52" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="52" y1="12" x2="45" y2="19" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="12" y1="52" x2="19" y2="45" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
  if (icon === "partly-cloudy") return (
    <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
      <circle cx="22" cy="26" r="12" fill="#FCD34D" />
      <line x1="22" y1="6"  x2="22" y2="13" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      <line x1="6"  y1="26" x2="13" y2="26" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      <line x1="11" y1="15" x2="16" y2="20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="15" x2="28" y2="20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      <circle cx="34" cy="42" r="11" fill="#BAE6FD" />
      <circle cx="46" cy="44" r="9"  fill="#BAE6FD" />
      <circle cx="42" cy="36" r="12" fill="#BAE6FD" />
      <circle cx="28" cy="44" r="9"  fill="#BAE6FD" />
      <rect x="19" y="41" width="36" height="12" rx="0" fill="#BAE6FD" />
    </svg>
  );
  if (icon === "cloudy") return (
    <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
      <circle cx="20" cy="36" r="12" fill="#CBD5E1" />
      <circle cx="36" cy="28" r="15" fill="#CBD5E1" />
      <circle cx="50" cy="36" r="10" fill="#CBD5E1" />
      <rect x="8" y="35" width="44" height="13" fill="#CBD5E1" />
    </svg>
  );
  if (icon === "light-rain") return (
    <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
      <circle cx="20" cy="30" r="11" fill="#BAE6FD" />
      <circle cx="35" cy="22" r="13" fill="#BAE6FD" />
      <circle cx="48" cy="30" r="9"  fill="#BAE6FD" />
      <rect x="9" y="29" width="41" height="11" fill="#BAE6FD" />
      <line x1="22" y1="46" x2="19" y2="57" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
      <line x1="34" y1="44" x2="31" y2="55" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
      <line x1="46" y1="46" x2="43" y2="57" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
  if (icon === "rainy") return (
    <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
      <circle cx="20" cy="28" r="11" fill="#94A3B8" />
      <circle cx="35" cy="20" r="13" fill="#94A3B8" />
      <circle cx="48" cy="28" r="9"  fill="#94A3B8" />
      <rect x="9" y="27" width="41" height="11" fill="#94A3B8" />
      <line x1="18" y1="44" x2="14" y2="56" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
      <line x1="28" y1="42" x2="24" y2="54" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
      <line x1="38" y1="44" x2="34" y2="56" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="42" x2="44" y2="54" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
  if (icon === "stormy") return (
    <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
      <circle cx="20" cy="26" r="11" fill="#475569" />
      <circle cx="35" cy="18" r="13" fill="#475569" />
      <circle cx="48" cy="26" r="9"  fill="#475569" />
      <rect x="9" y="25" width="41" height="11" fill="#475569" />
      <polygon points="36,37 29,50 33,50 27,63 43,46 38,46 45,37" fill="#FDE047" />
      <line x1="16" y1="37" x2="12" y2="46" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="37" x2="46" y2="46" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
  if (icon === "rainbow") return (
    <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
      <path d="M 8 50 A 24 24 0 0 1 56 50"  stroke="#EF4444" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 12 50 A 20 20 0 0 1 52 50" stroke="#F97316" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 16 50 A 16 16 0 0 1 48 50" stroke="#EAB308" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 20 50 A 12 12 0 0 1 44 50" stroke="#22C55E" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 24 50 A 8  8  0 0 1 40 50" stroke="#3B82F6" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="10" cy="52" r="8" fill="white" />
      <circle cx="54" cy="52" r="8" fill="white" />
      <circle cx="6"  cy="54" r="6" fill="#F1F5F9" />
      <circle cx="58" cy="54" r="6" fill="#F1F5F9" />
    </svg>
  );
  if (icon === "foggy") return (
    <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
      <line x1="8"  y1="20" x2="56" y2="20" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
      <line x1="12" y1="30" x2="52" y2="30" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
      <line x1="8"  y1="40" x2="56" y2="40" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
      <line x1="16" y1="50" x2="48" y2="50" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
  return null;
}

const surveyCategories = [
  {
    title: "仕事量・負荷",
    desc: "業務量が適切か、特定のメンバーへの偏りがないかを数値で把握します。",
  },
  {
    title: "評価・承認",
    desc: "評価基準への納得感や、頑張りが正当に認められているかを確認します。",
  },
  {
    title: "人間関係",
    desc: "チームの雰囲気、上司・同僚との関係性と心理的安全性を測ります。",
  },
  {
    title: "成長実感",
    desc: "仕事を通じた学びやスキルアップを実感できているかを把握します。",
  },
  {
    title: "定着意欲",
    desc: "現在の会社で働き続けたいと感じているか、離職リスクの指標として活用します。",
  },
  {
    title: "ストレス・体調",
    desc: "最近のストレス状態と身体的なコンディションを可視化します。",
  },
  {
    title: "コンプライアンス",
    desc: "ハラスメントや違法行為への懸念・不安を匿名形式で収集します。",
  },
];

const industries = [
  {
    name: "飲食・サービス業",
    desc: "多店舗展開のチェーン・カフェ・レストランなど。店舗ごとの状態差を一覧で把握し、早期対応につなげます。",
    tags: ["多店舗比較", "高離職率対策"],
  },
  {
    name: "小売・アパレル",
    desc: "百貨店・専門店・ECと実店舗が混在する企業。現場スタッフの声を経営に届ける仕組みをつくります。",
    tags: ["現場の声収集", "マネジメント改善"],
  },
  {
    name: "介護・福祉・医療",
    desc: "高離職率が課題の介護施設・病院・クリニック。ストレスの早期発見で定着率の改善を支援します。",
    tags: ["ストレスチェック", "定着率改善"],
  },
  {
    name: "製造・物流",
    desc: "工場・倉庫勤務のスタッフが多い企業。非デスクワーカーもQRコードで手軽に回答できます。",
    tags: ["QR配布対応", "現場把握"],
  },
  {
    name: "人材・BPO",
    desc: "派遣スタッフや常駐先が複数ある企業。分散した現場の状態をまとめて一元管理できます。",
    tags: ["分散拠点対応", "スタッフ状態管理"],
  },
  {
    name: "ITベンチャー・スタートアップ",
    desc: "急成長中で組織管理が追いついていない企業。エンゲージメント低下やバーンアウトを早期発見します。",
    tags: ["エンゲージメント", "組織スケール対応"],
  },
];

const securityItems = [
  {
    title: "SSL/TLS暗号化通信",
    desc: "すべての回答データはSSL/TLS暗号化通信で送受信されます。通信の傍受・改ざんを防止します。",
  },
  {
    title: "匿名コメントの完全分離管理",
    desc: "匿名コメントは記名回答データと完全に切り離され、個人が特定できない状態で管理・表示されます。",
  },
  {
    title: "管理者アクセス権限の設定",
    desc: "ダッシュボードは登録された管理者のみアクセス可能。閲覧権限を会社・店舗・部署単位で細かく制御できます。",
  },
  {
    title: "個人情報保護法への準拠",
    desc: "収集するデータは個人情報保護法に基づき適切に管理します。第三者への無断提供は行いません。",
  },
];

const faqItems = [
  {
    q: "導入までどのくらいの時間がかかりますか？",
    a: "アカウント発行後、最短で翌日から配布を開始できます。設問のカスタマイズや運用フローの確認を含めても、通常1〜2週間程度で本格運用が可能です。初回は担当スタッフがオンボーディングをサポートします。",
  },
  {
    q: "スタッフのスマホにアプリのインストールは必要ですか？",
    a: "不要です。配布されたURLまたはQRコードをタップするだけで、ブラウザからそのまま回答できます。LINEやメール、店舗掲示板など任意の方法で配布していただけます。",
  },
  {
    q: "回答データは誰が確認できますか？",
    a: "管理者として登録されたアカウントのみがダッシュボードにアクセスできます。「各店舗責任者は自店舗のデータのみ閲覧可」のような権限設定も可能です。",
  },
  {
    q: "設問は会社に合わせてカスタマイズできますか？",
    a: "はい。提供するテンプレートをベースに、業種・役職・運用方針に合わせた設問の追加・変更が可能です。導入時のヒアリングで、適切な設問設計をサポートします。",
  },
  {
    q: "人事評価や査定に使用できますか？",
    a: "LENDS AIはコンディション把握と組織改善が目的のツールです。評価・査定目的での利用は推奨していません。スタッフへの説明も「人事評価ではなく、働き方をよくするためのコンディション確認」としていただくことで、回答の信頼性が高まります。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "従業員数・利用頻度・必要な機能によって異なります。現在はデモ案内とあわせて個別にご提案しています。まずは資料請求からご連絡ください。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9ff] text-slate-900">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center">
            <img
              src="/LENS AI logo.png"
              alt="LENDS AI logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
            <a href="#problem" className="transition hover:text-indigo-600">課題</a>
            <a href="#features" className="transition hover:text-indigo-600">機能</a>
            <a href="#industry" className="transition hover:text-indigo-600">対象業種</a>
            <a href="#faq" className="transition hover:text-indigo-600">よくある質問</a>
            <a href="/contact" className="transition hover:text-indigo-600">資料請求</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-indigo-600"
          >
            資料請求
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="animate-glow-move absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="animate-glow-move-slow absolute right-0 top-20 h-[360px] w-[360px] rounded-full bg-sky-200/50 blur-3xl" />
        <div className="animate-glow-move-reverse absolute left-0 top-52 h-[320px] w-[320px] rounded-full bg-purple-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm font-bold text-indigo-700 shadow-sm">
              離職・不満・トラブルの前に、現場のサインを見える化
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
              従業員の声を、
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                経営判断に変える。
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              LENDS AIは、スマホアンケートとAI分析で、離職リスク・ストレス・
              コンプライアンス不安・モチベーション状態を可視化する
              組織コンディション分析サービスです。
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-8 py-4 text-center text-sm font-black text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5"
              >
                資料請求する
              </a>
              <a
                href="#features"
                className="rounded-full border border-slate-200 bg-white px-8 py-4 text-center text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
              >
                機能を見る
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white bg-white/75 p-4 shadow-sm">
                <p className="text-2xl font-black text-slate-950">週1〜月1回</p>
                <p className="mt-1 text-xs font-medium text-slate-500">頻度を自由に設定</p>
              </div>
              <div className="rounded-2xl border border-white bg-white/75 p-4 shadow-sm">
                <p className="text-2xl font-black text-slate-950">3〜5分</p>
                <p className="mt-1 text-xs font-medium text-slate-500">スタッフの回答時間</p>
              </div>
              <div className="rounded-2xl border border-white bg-white/75 p-4 shadow-sm">
                <p className="text-2xl font-black text-slate-950">8タイプ</p>
                <p className="mt-1 text-xs font-medium text-slate-500">コンディション分類</p>
              </div>
            </div>
          </div>

          <div className="animate-float-soft relative">
            <div className="rounded-[2rem] border border-white bg-white/80 p-4 shadow-2xl shadow-indigo-100 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-400">Organization Score</p>
                    <p className="mt-1 text-2xl font-black">今月の組織コンディション</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-300">
                    安定傾向
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-400">平均スコア</p>
                    <p className="mt-2 text-4xl font-black">82</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-400">要フォロー</p>
                    <p className="mt-2 text-4xl font-black">4</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-white/10 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-black">店舗別コンディション</p>
                    <p className="text-xs text-slate-400">第4回</p>
                  </div>

                  <div className="space-y-4">
                    {dashboardBars.slice(0, 3).map(([name, width]) => (
                      <div key={name}>
                        <div className="mb-1 flex justify-between text-xs text-slate-300">
                          <span>{name}</span>
                          <span>{width}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-300"
                            style={{ width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-indigo-300/20 bg-indigo-400/10 p-4">
                  <p className="text-sm font-black text-indigo-200">AIコメント</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    全体的には安定していますが、一部店舗でストレスと定着意欲の低下が見られます。
                    早めの個別フォローと業務量の確認を推奨します。
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 hidden w-[290px] overflow-hidden rounded-3xl border border-white bg-white p-5 shadow-xl shadow-slate-200 md:block">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-black text-slate-400">STAFF VOICE</p>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-black text-indigo-600">
                  記名回答
                </span>
              </div>
              <div className="relative h-[96px]">
                <div className="voice-slide voice-slide-1 absolute inset-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-sky-100 text-xs font-black text-indigo-700">
                      佐
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">佐藤 大輔さん</p>
                      <p className="text-xs font-bold text-slate-400">名古屋店 / ホール</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-bold leading-6 text-slate-800">
                    最近、業務量に少し偏りを感じています。
                  </p>
                </div>

                <div className="voice-slide voice-slide-2 absolute inset-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 text-xs font-black text-indigo-700">
                      田
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">田中 美咲さん</p>
                      <p className="text-xs font-bold text-slate-400">静岡店 / 接客</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-bold leading-6 text-slate-800">
                    評価基準がもう少し分かりやすいと安心です。
                  </p>
                </div>

                <div className="voice-slide voice-slide-3 absolute inset-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-cyan-100 text-xs font-black text-sky-700">
                      山
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">山本 健太さん</p>
                      <p className="text-xs font-bold text-slate-400">大阪店 / 管理</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-bold leading-6 text-slate-800">
                    今月はチームの雰囲気が良くなっています。
                  </p>
                </div>
              </div>
              <p className="mt-3 border-t border-slate-100 pt-3 text-[11px] font-bold leading-5 text-slate-400">
                基本は記名で状態を把握。言いにくい設問だけ匿名化できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Overview ── */}
      <section className="border-y border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black text-indigo-600">HOW IT WORKS</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              LENDS AIの3つの柱
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              アンケートを取って終わりではなく、収集・分析・改善提案まで一気通貫で行います。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "集める",
                subtitle: "スマホアンケートで現場の声を収集",
                body: "URLまたはQRコードを配布するだけで、スタッフがスマホから回答できます。アプリ不要で平均3〜5分。月次・週次など必要なタイミングで継続実施できます。",
                items: ["QRコード / URLで配布", "アプリ不要・ブラウザで回答", "月次・週次など頻度を自由設定"],
              },
              {
                number: "02",
                title: "分析する",
                subtitle: "AIがコンディション・リスク・タイプを自動分析",
                body: "回答データをもとに、AIが全体スコア・要フォロー対象・コンディションタイプを自動で集計・分析します。店舗・部署ごとの比較も一画面で確認できます。",
                items: ["全体スコアの自動集計", "要フォロー対象の自動抽出", "店舗・部署別の比較表示"],
              },
              {
                number: "03",
                title: "改善する",
                subtitle: "次に動けるアクションまで提示",
                body: "AIが問題点・優先対応・放置リスク・改善アクションを整理して提示します。アンケートを取って終わりにならず、経営者・管理者が次に動ける状態をつくります。",
                items: ["問題点・優先対応の整理", "放置リスクの警告", "具体的な改善アクションの提案"],
              },
            ].map((col) => (
              <div
                key={col.number}
                className="hover-lift rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/50"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-200">
                    {col.number}
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-950">{col.title}</p>
                    <p className="mt-0.5 text-xs font-bold text-indigo-600">{col.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-600">{col.body}</p>
                <ul className="mt-5 space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-black text-indigo-600">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="problem" className="relative overflow-hidden bg-white py-24">
        <div className="absolute -left-24 top-16 h-[360px] w-[360px] rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-[380px] w-[380px] rounded-full bg-sky-100/80 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
              PROBLEM
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              問題になる前には、
              <br />
              必ず小さなサインがある。
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              急な退職やトラブルは、突然起きるように見えて、実はその前から違和感が出ています。
              LENDS AIは、その"表面化する前"のサインを見える化します。
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-slate-100 bg-white/85 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur-xl md:p-8">
              <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-black text-indigo-600">SIGNAL TIMELINE</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                    見逃されやすい変化の流れ
                  </h3>
                </div>
                <div className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white">
                  Early Detection
                </div>
              </div>

              <div className="relative space-y-5">
                <div className="absolute left-[21px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-indigo-300 via-sky-300 to-slate-200 sm:block" />

                {[
                  {
                    step: "01",
                    title: "小さな違和感",
                    text: "表情・発言・回答内容に、少しずつ変化が出始めます。面談では出てこない変化です。",
                    tag: "初期サイン",
                  },
                  {
                    step: "02",
                    title: "不満の蓄積",
                    text: "相談されないまま、業務量・評価・人間関係への不満が溜まります。この段階で拾えるかが鍵です。",
                    tag: "要観察",
                  },
                  {
                    step: "03",
                    title: "状態の悪化",
                    text: "ストレス・定着意欲・モチベーションに明確な影響が出てきます。フォローが急がれる段階です。",
                    tag: "要フォロー",
                  },
                  {
                    step: "04",
                    title: "退職・トラブル",
                    text: "表面化した時には、採用・教育・対応コストが大きくなります。1人の退職コストは平均数十万円以上とも言われます。",
                    tag: "発生後対応",
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="hover-lift relative rounded-[1.75rem] border border-slate-100 bg-slate-50/80 p-5 sm:ml-12"
                  >
                    <div className="absolute -left-12 top-6 hidden h-11 w-11 items-center justify-center rounded-2xl bg-white text-xs font-black text-indigo-600 shadow-lg shadow-indigo-100 ring-1 ring-indigo-100 sm:flex">
                      {item.step}
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-lg font-black text-slate-950">{item.title}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                      </div>
                      <span
                        className={`w-fit rounded-full px-3 py-1 text-xs font-black ${
                          index === 3
                            ? "bg-rose-50 text-rose-600"
                            : index === 2
                              ? "bg-orange-50 text-orange-600"
                              : "bg-indigo-50 text-indigo-600"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-[2rem] border border-white bg-slate-950 p-7 text-white shadow-2xl shadow-indigo-200/60">
                <p className="text-sm font-black text-sky-300">LENDS AI detects early signals</p>
                <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">
                  "問題化する前"の段階で、
                  現場の状態を把握。
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  面談だけでは見えにくい本音や違和感を、スマホ回答・スコア・AI要約で整理します。
                  管理者の感覚だけに頼らず、会社として早めに動ける状態をつくります。
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    ["72%", "不満蓄積"],
                    ["64%", "業務負荷"],
                    ["58%", "人間関係"],
                    ["4名", "要フォロー"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl bg-white/10 p-4">
                      <p className="text-2xl font-black text-white">{value}</p>
                      <p className="mt-1 text-xs font-bold text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-7 shadow-xl shadow-indigo-100/60">
                <p className="text-sm font-black text-indigo-700">よくある見逃しポイント</p>
                <div className="mt-5 space-y-3">
                  {[
                    "面談では「大丈夫です」と言われてしまう",
                    "店舗や部署ごとの温度差に気づきにくい",
                    "誰が疲れているのか、誰が前向きなのか分からない",
                    "アンケートを取っても改善アクションまで落とし込めない",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-black text-indigo-600">
                        ✓
                      </span>
                      <p className="text-sm font-bold leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Smartphone Survey ── */}
      <section className="relative overflow-hidden bg-[#f8f9ff] py-24">
        <div className="absolute right-0 top-10 h-[380px] w-[380px] rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black text-indigo-600">SMARTPHONE SURVEY</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              スタッフはスマホから、
              <br />
              かんたんに回答。
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              回答URLやQRコードを配布するだけで、スタッフは自分のスマホからアンケートに回答できます。
              紙の集計や手入力を減らし、会社・店舗・部署ごとの状態を効率よく集められます。
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "URL / QRで配布", "LINEやメール、掲示板貼り付けなど任意の方法で共有"],
                ["02", "スマホで回答", "アプリ不要。ブラウザをタップするだけで回答開始"],
                ["03", "自動で集計", "回答が即時ダッシュボードへ反映。集計の手間ゼロ"],
              ].map(([number, text, sub]) => (
                <div key={number} className="rounded-3xl border border-white bg-white/80 p-5 shadow-lg shadow-indigo-100/50">
                  <p className="text-xs font-black text-indigo-600">STEP {number}</p>
                  <p className="mt-3 text-sm font-black leading-6 text-slate-800">{text}</p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">{sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-indigo-100 bg-white/80 p-5 shadow-xl shadow-indigo-100/50">
              <p className="text-sm font-black text-slate-950">運用イメージ</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                月次・週次・必要なタイミングなど、会社の運用に合わせて実施できます。
                基本は記名で状態を把握し、言いにくい項目のみ匿名設問として扱うこともできます。
                テンプレートをベースに設問をカスタマイズして使えます。
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute left-10 top-10 hidden rounded-3xl border border-white bg-white/90 p-5 shadow-xl shadow-indigo-100 md:block">
              <p className="text-xs font-black text-slate-400">QR配布</p>
              <div className="mt-3 grid h-20 w-20 grid-cols-4 gap-1 rounded-xl bg-slate-950 p-2">
                {Array.from({ length: 16 }).map((_, index) => (
                  <div
                    key={index}
                    className={`rounded-sm ${index % 3 === 0 || index === 5 || index === 10 ? "bg-white" : "bg-slate-700"}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-[480px]">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-indigo-200/50 to-sky-200/40 blur-3xl" />
              <img
                src="/smartphone-mock.png"
                alt="LENDS AIのスマホアンケート画面"
                className="relative z-10 w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Survey Categories ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black text-indigo-600">SURVEY CATEGORIES</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              7つの観点で、
              <br />
              組織の状態を多角的に分析。
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              LENDS AIのアンケートは、離職リスクに関わる7つの観点をもとに設計されています。
              スコアの変化を継続的に追うことで、表面化する前のサインを捉えます。
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {surveyCategories.map((cat, index) => (
              <div
                key={cat.title}
                className={`hover-lift rounded-3xl border p-6 shadow-lg ${
                  index === 0
                    ? "border-indigo-200 bg-gradient-to-br from-indigo-50 to-sky-50 shadow-indigo-100"
                    : "border-slate-100 bg-white shadow-slate-100/60"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-black text-slate-950">{cat.title}</p>
                  <span className="text-xs font-black text-slate-400">0{index + 1}</span>
                </div>
                <p className="text-xs leading-5 text-slate-500">{cat.desc}</p>
              </div>
            ))}
            <div className="hover-lift rounded-3xl border border-dashed border-indigo-200 bg-indigo-50/50 p-6 shadow-lg shadow-indigo-50">
              <p className="text-sm font-black text-indigo-700">カスタム設問</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                会社・業種・役職に合わせて設問を追加・変更できます。導入時にサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Condition Survey ── */}
      <section className="bg-[#f8f9ff] py-24">
        <div className="mx-auto max-w-7xl px-5">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black text-indigo-600">CONDITION SURVEY</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              評価ではなく、
              <br />
              コンディション調査として実施。
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              LENDS AIは人事評価ツールではありません。回答結果をもとに、スタッフのコンディションを
              8つの"天気"で表現し、今どんな状態かを直感的に把握できます。
            </p>
          </div>

          {/* 8 Weather type cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conditionTypes.map((item) => (
              <div
                key={item.type}
                className={`hover-lift rounded-[2rem] border bg-gradient-to-br p-6 shadow-lg ${item.bg} ${item.border}`}
              >
                {/* Weather illustration */}
                <div className="flex justify-center">
                  <WeatherIcon icon={item.icon} />
                </div>

                {/* Weather name badge */}
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${item.badge}`}>
                    {item.weather}
                  </span>
                  <span className="text-xs font-black text-slate-400">
                    {String(conditionTypes.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Type name */}
                <p className="mt-3 text-base font-black text-slate-950">{item.type}タイプ</p>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 shadow-xl shadow-indigo-100/60">
              <p className="text-sm font-black text-indigo-700">このタイプ分類でできること</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                回答結果をもとに各スタッフのコンディションタイプを表示します。
                フォローの優先度・配置改善・現場改善のヒントとして活用でき、
                スタッフを評価するためではなく"今どんな状態か"を把握するための分類です。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100">
                <p className="text-sm font-black text-slate-950">要フォローの早期発見</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  「荒天」「曇り時々雨」タイプへの早期対応が可能。問題が大きくなる前に動けます。
                </p>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100">
                <p className="text-sm font-black text-slate-950">活躍候補の把握</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  「快晴」「晴れ」タイプの人材を把握し、次の役割を任せる判断のヒントになります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black text-indigo-600">SOLUTION</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              現場の違和感を、
              <br />
              AIが改善アクションに変える。
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              LENDS AIは、アンケートを取って終わりではありません。
              回答データをもとに、組織の状態・リスク・改善ポイントを整理し、
              経営者や管理者が次に動ける状態まで可視化します。
            </p>
            <div className="mt-7 rounded-[1.75rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-sky-50/60 p-5">
              <p className="text-sm font-black text-indigo-800">AIが提示する4つのアウトプット</p>
              <div className="mt-3 space-y-2">
                {[
                  ["問題点の特定", "スコア低下・不満傾向・パターンを整理"],
                  ["優先対応リスト", "今すぐフォローすべき対象者・拠点を抽出"],
                  ["放置リスクの警告", "このまま放置した場合のリスクを提示"],
                  ["改善アクション案", "現場ですぐに動ける具体的な打ち手を提案"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3 rounded-2xl bg-white/80 p-3 shadow-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-black text-indigo-600">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-black text-slate-900">{title}</p>
                      <p className="text-xs text-slate-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "離職リスク", desc: "定着意欲・不満傾向・コンディション低下から離職予兆を早期に把握します。" },
              { label: "ストレス状態", desc: "業務負荷・人間関係・休息状態をスコアで確認し、燃え尽き前に対応できます。" },
              { label: "コンプライアンス不安", desc: "ハラスメントや違法行為への懸念を匿名コメントで安全に収集します。" },
              { label: "モチベーション状態", desc: "成長実感・評価納得感・承認感が高い人材を把握し、配置・育成に活かします。" },
              { label: "店舗・部署ごとの状態", desc: "拠点ごとのスコアを一覧比較し、課題のある場所を直感的に特定できます。" },
              { label: "活躍候補の発見", desc: "推進リーダー・成長加速タイプのスタッフを見つけ、次の役割候補として把握できます。" },
            ].map((item) => (
              <div
                key={item.label}
                className="hover-lift rounded-3xl border border-white bg-white/80 p-6 shadow-lg shadow-indigo-100/50"
              >
                <p className="text-lg font-black text-slate-950">{item.label}</p>
                <p className="mt-3 text-sm leading-7 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="relative overflow-hidden bg-[#f8f9ff] py-24">
        <div className="absolute -left-28 top-24 h-[360px] w-[360px] rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="absolute -right-28 bottom-16 h-[380px] w-[380px] rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black text-indigo-600">FEATURES</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                LENDS AIで
                <br />
                できること
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                従業員の声を集めるだけでなく、状態の可視化・リスク発見・改善提案まで一気通貫で行います。
              </p>
            </div>

            <div className="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 shadow-xl shadow-indigo-100/60">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "集める", "スマホ回答で現場の声を収集。QR / URLで配布するだけ。"],
                  ["02", "見える化", "スコアとタイプで状態を整理。拠点別比較も一画面で。"],
                  ["03", "改善する", "AIが問題点・優先対応・次の打ち手を整理して提示。"],
                ].map(([number, title, text]) => (
                  <div key={number} className="rounded-3xl bg-white/85 p-5 shadow-sm">
                    <p className="text-xs font-black text-indigo-600">{number}</p>
                    <p className="mt-3 text-lg font-black text-slate-950">{title}</p>
                    <p className="mt-2 text-xs font-bold leading-5 text-slate-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="hover-lift group rounded-[2rem] border border-slate-100 bg-white/90 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black text-indigo-600">MODULE 0{index + 1}</p>
                    <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white shadow-lg shadow-slate-200 transition group-hover:-translate-y-1 group-hover:bg-indigo-600">
                    {index + 1}
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-600">{feature.text}</p>

                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 opacity-80"
                    style={{ width: `${92 - index * 7}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[2rem] border border-white bg-slate-950 p-6 text-white shadow-2xl shadow-indigo-200/50 md:p-8">
            <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="text-sm font-black text-sky-300">AI SUMMARY & ACTION</p>
                <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">
                  集計して終わりではなく、
                  <br />
                  次に何をすべきかまで整理。
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["問題点", "スコア低下や不満傾向を整理。どの設問で何が起きているかを一目で確認"],
                  ["優先対応", "今すぐ見るべき対象を抽出。放置リスクの高い拠点・メンバーをリストアップ"],
                  ["改善案", "現場で動ける具体的な打ち手を提示。次のアクションに迷わない"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-black text-white">{title}</p>
                    <p className="mt-2 text-xs font-bold leading-5 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section id="comparison" className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-black tracking-widest text-indigo-500 uppercase">Comparison</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              他社サービスとの違い
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-500">
              LENS AIは、中小企業・スタートアップのために設計されたシンプルで強力な組織診断ツールです。
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-5 px-6 text-slate-400 font-semibold text-xs uppercase tracking-wider w-1/4"></th>
                  <th className="py-5 px-6 text-center w-1/4 bg-indigo-50">
                    <div className="inline-flex flex-col items-center gap-2">
                      <span className="bg-indigo-600 text-white text-xs font-black px-3 py-0.5 rounded-full">おすすめ</span>
                      <span className="text-indigo-700 font-black text-base">LENS AI</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-center text-slate-400 font-semibold text-sm w-1/4">大手HRツール</th>
                  <th className="py-5 px-6 text-center text-slate-400 font-semibold text-sm w-1/4">従来のサーベイ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "導入の手軽さ", lensNote: "URL配布のみ・即日利用可", othersNote: ["複雑な設定が必要", "紙・Excel運用"] },
                  { feature: "AI分析・改善提案", lensNote: "自動で課題を特定", othersNote: ["オプション追加料金", "なし"] },
                  { feature: "リアルタイム集計", lensNote: "即時ダッシュボード", othersOk: [true, false], othersNote: ["対応", "手動集計"] },
                  { feature: "中小企業向け料金", lensNote: "月額定額・リーズナブル", othersOk: [false, true], othersNote: ["高額・人数課金", "低コスト（機能限定）"] },
                  { feature: "複数診断セット", lensNote: "コンディション＋リーダーシップ", othersOk: [true, false], othersNote: ["カスタム可（有料）", "単一テンプレート"] },
                  { feature: "1on1管理連携", lensNote: "面談記録と統合", othersNote: ["別途ツール必要", "なし"] },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-slate-50 last:border-0 ${i % 2 === 0 ? "" : "bg-slate-50/50"}`}>
                    <td className="py-4 px-6 text-slate-700 font-semibold text-sm">{row.feature}</td>
                    <td className="py-4 px-6 text-center bg-indigo-50/60">
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-indigo-600 font-black text-base">✓</span>
                        <span className="text-indigo-500 text-xs font-medium">{row.lensNote}</span>
                      </div>
                    </td>
                    {[0, 1].map((j) => {
                      const ok = row.othersOk ? row.othersOk[j] : false;
                      return (
                        <td key={j} className="py-4 px-6 text-center">
                          <div className="flex flex-col items-center gap-0.5">
                            <span className={`font-bold text-base ${ok ? "text-slate-400" : "text-slate-200"}`}>
                              {ok ? "✓" : "✕"}
                            </span>
                            <span className="text-slate-400 text-xs">{row.othersNote[j]}</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm mb-5">LENS AIなら、難しい設定なしに今日から組織診断を始められます。</p>
            <a
              href="#cta"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-black px-8 py-3 rounded-xl text-sm transition-colors shadow-md shadow-indigo-100"
            >
              無料で試してみる
            </a>
          </div>
        </div>
      </section>

      {/* ── Flow ── */}
      <section id="flow" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black text-indigo-600">FLOW</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              導入から確認まで、シンプルに。
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              URLやQRコードを配布するだけで、月1回の組織コンディション診断を始められます。
              難しい設定やシステム連携は不要です。
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {[
              { step: steps[0], desc: "テンプレートから選ぶか、設問をカスタマイズして作成。" },
              { step: steps[1], desc: "LINEやメール、掲示板に貼るだけ。配布方法は自由。" },
              { step: steps[2], desc: "アプリ不要。ブラウザで3〜5分で回答完了。" },
              { step: steps[3], desc: "全体スコア・店舗別・要フォロー対象を一覧で確認。" },
              { step: steps[4], desc: "問題点・優先対応・改善アクションをAIが整理。" },
            ].map(({ step, desc }, index) => (
              <div
                key={step}
                className="hover-lift rounded-3xl border border-white bg-white p-6 shadow-lg shadow-indigo-100/40"
              >
                <p className="text-sm font-black text-indigo-600">STEP {index + 1}</p>
                <p className="mt-4 text-base font-black leading-6 text-slate-950">{step}</p>
                <p className="mt-3 text-xs leading-5 text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefit ── */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-black text-sky-300">BENEFIT</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              人が辞める前に、
              <br />
              会社ができることを見つける。
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              LENDS AIは、問題のある人を探すためのツールではありません。
              働きやすい組織をつくるために、現場の声を改善のヒントへ変えるサービスです。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="font-black leading-7 text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dashboard ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black text-indigo-600">DASHBOARD</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              組織の状態を、ひと目で把握。
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              全体スコア、店舗・部署ごとの状態、要フォロー対象、匿名コメント、AI改善提案をまとめて確認できます。
              管理者ごとに閲覧権限を設定し、必要な情報だけを届けます。
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-slate-100 bg-slate-50 p-4 shadow-2xl shadow-slate-200">
            <div className="rounded-[1.5rem] bg-white p-6">
              <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <p className="text-sm font-black text-indigo-600">LENDS AI Dashboard</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">第4回 組織コンディション</h3>
                </div>
                <div className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">
                  AI分析済み
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                {[
                  ["回答者数", "42名"],
                  ["平均スコア", "82点"],
                  ["要フォロー", "4名"],
                  ["活躍候補", "8名"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                    <p className="text-sm font-medium text-slate-500">{label}</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-[1fr_0.9fr]">
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                  <p className="font-black text-slate-950">店舗別スコア</p>
                  <div className="mt-5 space-y-5">
                    {dashboardBars.map(([name, width]) => (
                      <div key={name}>
                        <div className="mb-2 flex justify-between text-sm font-black text-slate-600">
                          <span>{name}</span>
                          <span>{width}</span>
                        </div>
                        <div className="h-3 rounded-full bg-white">
                          <div
                            className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400"
                            style={{ width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
                  <p className="font-black text-indigo-950">AI改善提案</p>
                  <p className="mt-4 text-sm leading-7 text-indigo-950/75">
                    一部店舗でストレススコアの低下が見られます。
                    特に業務量・評価納得感に関する回答が低く、
                    早めのヒアリングと業務配分の見直しが推奨されます。
                  </p>
                  <div className="mt-5 rounded-2xl bg-white p-4">
                    <p className="text-sm font-black text-slate-950">優先アクション</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      今週中に対象店舗の責任者と15分の確認ミーティングを行い、
                      業務負荷と人員配置を確認してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Target Industries ── */}
      <section id="industry" className="relative overflow-hidden bg-[#f8f9ff] py-24">
        <div className="absolute -left-20 top-10 h-[340px] w-[340px] rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-[340px] w-[340px] rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black text-indigo-600">TARGET</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              こんな企業・業種で
              <br />
              ご活用いただけます。
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              スタッフが複数いて、現場の状態を経営側が把握しにくい業種・組織に特に向いています。
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="hover-lift rounded-[2rem] border border-white bg-white/90 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl"
              >
                <h3 className="text-lg font-black text-slate-950">{ind.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{ind.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {ind.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black text-indigo-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-7 text-center shadow-xl shadow-indigo-100/60">
            <p className="text-sm font-black text-indigo-700">
              上記以外の業種でも、スタッフが複数いる企業であればご活用いただけます。
              まずはお気軽にご相談ください。
            </p>
            <a
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-slate-950 px-7 py-3 text-sm font-black text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-indigo-600"
            >
              資料請求する
            </a>
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="border-y border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black text-indigo-600">SECURITY & PRIVACY</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                従業員データを、
                <br />
                安全に管理します。
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                従業員のコンディションデータは、非常にデリケートな情報です。
                LENDS AIは、データの安全性と従業員のプライバシーを最優先に設計されています。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {securityItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100">
                    <span className="text-lg font-black text-indigo-600">🔒</span>
                  </div>
                  <p className="text-sm font-black text-slate-950">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ADD-ON SERVICES ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-black text-indigo-600">ADD-ON SERVICES</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              付属サービス
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              LENDS AI に連携して使える追加AIサービスです。
              組織課題の解決をさらに一歩進めます。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* 求人AI */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-8 shadow-xl shadow-indigo-100/60 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-300">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <line x1="12" y1="12" x2="12" y2="16" />
                    <line x1="10" y1="14" x2="14" y2="14" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-indigo-500">求人AI</p>
                  <h3 className="mt-1 text-xl font-black text-slate-950">採用文章をAIが自動生成</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                募集職種・待遇・職場の雰囲気を入力するだけで、求人票・採用ページ用の文章をAIが自動作成。
                ターゲット層に刺さるコピーを短時間で量産できます。
              </p>
              <ul className="mt-5 space-y-2">
                {["求人票・募集要項の文章を自動生成", "職種・業種・ターゲット別に最適化", "Indeed / 求人媒体向けフォーマットに対応"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-black text-indigo-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 日報AI */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-8 shadow-xl shadow-sky-100/60 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500 shadow-lg shadow-sky-300">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-sky-500">日報AI</p>
                  <h3 className="mt-1 text-xl font-black text-slate-950">日報をAIがまとめて分析</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                スタッフが入力した日報テキストをAIが自動要約・分析し、チーム全体の傾向やリスクサインを管理者に通知。
                読み切れない日報も見逃しゼロに。
              </p>
              <ul className="mt-5 space-y-2">
                {["日報テキストをAIが自動要約", "ネガティブ発言・離職サインを自動検知", "管理者ダッシュボードで全スタッフ一覧"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[10px] font-black text-sky-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            ※ 付属サービスは LENDS AI との併用でご利用いただけます。詳細は資料請求またはお問い合わせください。
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#f8f9ff] py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center">
            <p className="text-sm font-black text-indigo-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              よくあるご質問
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              導入前によくいただく質問をまとめました。
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-[1.75rem] border border-slate-100 bg-white shadow-lg shadow-slate-100/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                  <p className="text-base font-black text-slate-950">{item.q}</p>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-open:bg-indigo-100 group-open:text-indigo-600">
                    <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm leading-7 text-slate-600">{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              その他ご不明な点は、お気軽にお問い合わせください。
            </p>
            <a href="#contact" className="mt-4 inline-flex rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200">
              お問い合わせする
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="relative overflow-hidden py-24">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <div className="rounded-[2rem] border border-white bg-white/80 p-10 shadow-2xl shadow-indigo-100 backdrop-blur-xl md:p-14">
            <p className="text-sm font-black text-indigo-600">CONTACT</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              現場の声を、
              <br />
              会社改善のヒントに。
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              離職・不満・トラブルが起きる前に、まずは自社の状態を見える化しませんか。
              LENDS AIのサービス資料・機能説明・料金プランを無料でお届けしています。
            </p>

            <div className="mx-auto mt-8 max-w-xl rounded-[1.5rem] border border-indigo-100 bg-indigo-50/60 p-5 text-left">
              <p className="text-sm font-black text-indigo-800">資料請求でわかること</p>
              <ul className="mt-3 space-y-2">
                {[
                  "実際のダッシュボード・アンケート画面のデモ確認",
                  "自社の業種・規模に合った活用イメージのご提案",
                  "導入フロー・運用方法のご説明",
                  "料金・プランのご案内",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-bold text-indigo-900">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-200 text-[10px] font-black text-indigo-700">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-8 py-4 text-center text-sm font-black text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5"
              >
                資料請求する
              </a>
              <a
                href="#features"
                className="rounded-full border border-slate-200 bg-white px-8 py-4 text-center text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
              >
                機能をもう一度見る
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-400">※ 現在、デモ案内・導入相談を受付中です。まずはお気軽にご連絡ください。</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 pt-16 pb-8 text-white">
        <div className="mx-auto max-w-7xl px-5">

          {/* Top row */}
          <div className="grid gap-12 md:grid-cols-[1fr_auto_auto]">

            {/* Brand */}
            <div>
              <img src="/LENS AI logo.png" alt="LENDS AI logo" className="h-8 w-auto object-contain brightness-0 invert" />
              <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
                スマホアンケートとAI分析で、従業員の声を経営改善につなげる組織コンディション分析サービス。
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-indigo-900/40 transition hover:-translate-y-0.5"
              >
                資料請求する
              </a>
            </div>

            {/* サービス */}
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">サービス</p>
              <nav className="flex flex-col gap-3 text-sm font-bold text-slate-400">
                <a href="#problem"  className="transition hover:text-white">課題</a>
                <a href="#features" className="transition hover:text-white">機能</a>
                <a href="#industry" className="transition hover:text-white">対象業種</a>
                <a href="#faq"      className="transition hover:text-white">よくある質問</a>
                <a href="#contact"  className="transition hover:text-white">お問い合わせ</a>
              </nav>
            </div>

            {/* 企業情報 */}
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">企業情報</p>
              <nav className="flex flex-col gap-3 text-sm font-bold text-slate-400">
                <a href="/company" className="transition hover:text-white">会社概要</a>
                <a href="/privacy" className="transition hover:text-white">プライバシーポリシー</a>
                <a href="/terms"   className="transition hover:text-white">利用規約</a>
              </nav>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
            <p>© LENDS AI / 合同会社80. All rights reserved.</p>
            <p>愛知県名古屋市北区楠味鋺2-914-2-2F</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatSoft {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes glowMove {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(24px, -18px, 0) scale(1.08); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes glowMoveReverse {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-22px, 18px, 0) scale(1.08); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        .animate-fade-up { animation: fadeUp 0.85s ease-out both; }
        .animate-float-soft { animation: floatSoft 5.5s ease-in-out infinite; will-change: transform; }
        .animate-glow-move { animation: glowMove 9s ease-in-out infinite; will-change: transform; }
        .animate-glow-move-slow { animation: glowMove 12s ease-in-out infinite; will-change: transform; }
        .animate-glow-move-reverse { animation: glowMoveReverse 10s ease-in-out infinite; will-change: transform; }

        .hover-lift {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          border-color: rgba(129, 140, 248, 0.35);
          box-shadow: 0 24px 60px rgba(99, 102, 241, 0.16);
        }

        @keyframes voiceSlide {
          0%, 26% { opacity: 1; transform: translateX(0); }
          33%, 100% { opacity: 0; transform: translateX(-16px); }
        }

        .voice-slide { opacity: 0; animation: voiceSlide 9s ease-in-out infinite; }
        .voice-slide-1 { animation-delay: 0s; }
        .voice-slide-2 { animation-delay: 3s; }
        .voice-slide-3 { animation-delay: 6s; }

        details summary::-webkit-details-marker { display: none; }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .animate-float-soft,
          .animate-glow-move,
          .animate-glow-move-slow,
          .animate-glow-move-reverse,
          .voice-slide { animation: none; }
          .voice-slide-1 { opacity: 1; }
          .hover-lift, .hover-lift:hover { transition: none; transform: none; }
        }
      `}</style>
    </main>
  );
}
