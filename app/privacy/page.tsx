import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | LENDS AI",
  description: "LENDS AIのプライバシーポリシーです。個人情報の取り扱いについてご説明します。",
};

const sections = [
  {
    title: "1. 事業者情報",
    body: `合同会社80（以下「当社」）は、組織コンディション分析サービス「LENDS AI」（以下「本サービス」）の運営にあたり、利用者および従業員回答者（以下「ユーザー」）の個人情報を適切に取り扱います。本ポリシーは、当社が収集する個人情報の種類・利用目的・管理方法について定めるものです。

所在地：愛知県名古屋市北区楠味鋺2-914-2-2F
責任者：伊藤 大世
お問い合わせ：ito.t@80grp.com`,
  },
  {
    title: "2. 収集する個人情報",
    body: `本サービスでは、以下の情報を収集する場合があります。

【アンケート回答に関する情報（記名回答の場合）】
・氏名
・所属部署・店舗・チーム
・役職

【アンケート回答内容】
・モチベーション・ストレス・定着意欲等に関するスコア回答
・自由記述（匿名コメント含む）
・回答日時

【サービス管理者（法人契約者）の情報】
・会社名・担当者名・連絡先メールアドレス・電話番号
・請求・契約に関する情報

【技術的情報】
・IPアドレス・ブラウザの種類・アクセスログ（アンケート回答時）`,
  },
  {
    title: "3. 個人情報の利用目的",
    body: `収集した個人情報は、以下の目的のためにのみ利用します。

・本サービスの提供（アンケートの実施・集計・ダッシュボードへの反映）
・組織コンディション分析およびAI改善提案の生成
・サービスの運営・改善・障害対応
・契約者（企業）へのレポート提供
・サポート対応・お問い合わせへの返答
・法令上必要な場合の対応

上記目的の範囲を超えて個人情報を利用することはありません。`,
  },
  {
    title: "4. 匿名コメントの取り扱い",
    body: `本サービスの「匿名コメント」機能で収集された回答は、記名回答データと技術的に切り離された独立した仕組みで管理します。匿名コメントの閲覧においては、個人を特定できる情報と結びつけることなく提供します。

ただし、重大な法令違反やハラスメントに該当する可能性がある内容については、法的な要請がある場合に限り、関係機関へ開示する場合があります。`,
  },
  {
    title: "5. 第三者への提供",
    body: `当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。

・ユーザー本人の同意がある場合
・法令に基づく開示要請がある場合（裁判所・警察等）
・人の生命・身体・財産の保護のために必要な場合
・業務委託先（システム運用・分析ツール等）への委託（機密保持契約を締結した上で必要最小限の範囲で提供）`,
  },
  {
    title: "6. 安全管理措置",
    body: `当社は、収集した個人情報を安全に管理するため、以下の措置を講じます。

・SSL/TLS暗号化通信によるデータの送受信
・アクセス権限の設定および管理者のみのダッシュボードアクセス
・不正アクセス・改ざん・漏洩の防止策の実施
・個人情報取扱いに関する従業員への教育`,
  },
  {
    title: "7. データの保存期間",
    body: `アンケート回答データは、契約期間中およびサービス終了後〔90日間〕保存します。保存期間終了後は安全な方法で削除します。なお、法令上の保存義務がある情報については、該当期間中保存します。`,
  },
  {
    title: "8. Cookieおよびアクセス解析",
    body: `本サービスでは、サービス改善・利用状況の把握を目的として、Cookieおよびアクセス解析ツールを使用する場合があります。収集されるデータは個人を特定しない統計情報として処理されます。ブラウザの設定からCookieを無効にすることも可能ですが、一部機能が正常に動作しない場合があります。`,
  },
  {
    title: "9. 個人情報の開示・訂正・削除",
    body: `ユーザーは、当社が保有する自身の個人情報について、開示・訂正・削除・利用停止を請求できます。ご請求の場合は、下記のお問い合わせ先までご連絡ください。本人確認のうえ、合理的な期間内に対応します。`,
  },
  {
    title: "10. プライバシーポリシーの変更",
    body: `法令の改正やサービス内容の変更に応じて、本ポリシーを改定することがあります。重要な変更がある場合は、本サービス上でお知らせします。改定後の内容は、掲載日より効力を生じるものとします。`,
  },
  {
    title: "11. お問い合わせ",
    body: `個人情報の取り扱いに関するご質問・ご要望は下記までご連絡ください。

合同会社80　個人情報担当
メール：ito.t@80grp.com
電話：050-8896-5889
所在地：愛知県名古屋市北区楠味鋺2-914-2-2F`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900">
      {/* Header */}
      <header className="border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/">
            <img src="/LENS AI logo.png" alt="LENDS AI logo" className="h-8 w-auto object-contain" />
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-500 transition hover:text-indigo-600">
            ← トップへ戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-black text-indigo-600">PRIVACY POLICY</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-sm text-slate-400">最終更新日：2024年4月1日</p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-lg shadow-slate-100/60"
            >
              <h2 className="text-base font-black text-slate-950">{section.title}</h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-8 text-slate-600">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row md:items-center">
          <Link href="/">
            <img src="/LENS AI logo.png" alt="LENDS AI logo" className="h-7 w-auto object-contain" />
          </Link>
          <nav className="flex flex-wrap gap-5 text-xs font-bold text-slate-400">
            <Link href="/company"  className="hover:text-indigo-600">会社概要</Link>
            <Link href="/privacy"  className="hover:text-indigo-600">プライバシーポリシー</Link>
            <Link href="/terms"    className="hover:text-indigo-600">利用規約</Link>
            <Link href="/#contact" className="hover:text-indigo-600">お問い合わせ</Link>
          </nav>
          <p>© LENDS AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
