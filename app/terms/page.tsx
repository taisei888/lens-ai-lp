import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | LENDS AI",
  description: "LENDS AIの利用規約です。サービスのご利用条件をご確認ください。",
};

const sections = [
  {
    title: "第1条（適用）",
    body: `本利用規約（以下「本規約」）は、合同会社80（以下「当社」）が提供する組織コンディション分析サービス「LENDS AI」（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用の法人・個人（以下「利用者」）は、本規約に同意したものとみなします。`,
  },
  {
    title: "第2条（サービスの内容）",
    body: `本サービスは、以下の機能を提供します。

・スマートフォン対応アンケートの作成・配布・回答収集
・従業員のモチベーション・ストレス・定着意欲等のスコア集計・可視化
・店舗・部署・チームごとのグループスコア比較
・匿名コメントの収集・管理
・AI（人工知能）による回答データの要約・改善提案の生成
・管理者ダッシュボードによるレポート閲覧

当社は、事前の告知なくサービスの内容を変更・追加・廃止する場合があります。`,
  },
  {
    title: "第3条（利用登録）",
    body: `本サービスの利用には、当社所定の方法による利用申し込みおよび当社の承諾が必要です。以下に該当する場合、当社は登録を拒否または取り消すことができます。

・虚偽の情報を登録した場合
・過去に本規約違反があった場合
・反社会的勢力またはその関係者である場合
・その他当社が不適当と判断した場合`,
  },
  {
    title: "第4条（利用料金）",
    body: `本サービスの利用料金は、当社が別途提示する料金プランに基づきます。支払い方法・請求サイクルについては、個別の契約内容に従います。料金は事前の通知なく変更されることがあります。変更がある場合は、利用者に対し合理的な期間前に通知します。`,
  },
  {
    title: "第5条（アカウントの管理）",
    body: `利用者は、本サービスのアカウント情報（ID・パスワード等）を自己の責任において適切に管理してください。アカウント情報の漏洩・不正利用が発生した場合、当社はその責任を負いません。アカウントを第三者と共有することは禁止します。`,
  },
  {
    title: "第6条（禁止事項）",
    body: `利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。

・法令または公序良俗に違反する行為
・当社または第三者の著作権・商標権その他の知的財産権を侵害する行為
・本サービスを人事評価・査定・不利益処分の根拠として使用する行為
・従業員に対して回答を強制または回答内容を特定しようとする行為
・本サービスのシステムに不正アクセスする行為
・本サービスを競合サービスの開発・研究目的で利用する行為
・その他当社が不適切と判断する行為`,
  },
  {
    title: "第7条（データの取り扱い）",
    body: `利用者が本サービスを通じて収集したアンケートデータは、利用者が管理する情報です。当社は、サービス提供・改善の目的に限り、統計的・匿名的に処理したデータを利用する場合があります。

当社は、利用者のデータを適切に保護し、利用者の同意なく第三者に開示しません（法令上の要請がある場合を除く）。

個人情報の取り扱いについては、別途定める「プライバシーポリシー」に従います。`,
  },
  {
    title: "第8条（知的財産権）",
    body: `本サービスに関するシステム・デザイン・ロゴ・ドキュメント等の知的財産権は、当社または正当な権利者に帰属します。利用者は、本規約で明示的に許可された範囲を超えて、これらを複製・転用・再配布することはできません。`,
  },
  {
    title: "第9条（免責事項）",
    body: `当社は、本サービスに関して以下の点について責任を負いません。

・本サービスの利用により利用者または第三者に生じた損害（直接・間接を問わず）
・本サービスの一時停止・中断・終了による損失
・AIによる改善提案の正確性・完全性・実施結果
・通信障害・システム障害・不正アクセス等による損害

当社の損害賠償責任は、利用者が実際に支払った直近1ヶ月分の利用料金を上限とします。`,
  },
  {
    title: "第10条（サービスの変更・中断・終了）",
    body: `当社は、以下の場合にサービスの全部または一部を一時停止・変更・終了することができます。

・システムのメンテナンス・更新作業が必要な場合
・天災・停電・システム障害等の不可抗力が生じた場合
・事業上の理由によりサービスを継続することが困難になった場合

サービスを終了する場合は、利用者に対し合理的な期間前に通知します。`,
  },
  {
    title: "第11条（本規約の変更）",
    body: `当社は、必要に応じて本規約を変更することができます。変更後の規約は、本サービス上に掲載した時点より効力を生じます。重要な変更がある場合は、事前に利用者へ通知します。変更後も本サービスを継続してご利用いただいた場合、変更後の規約に同意したものとみなします。`,
  },
  {
    title: "第12条（準拠法・管轄裁判所）",
    body: `本規約は日本法に準拠します。本規約または本サービスに関する紛争については、名古屋地方裁判所を第一審の専属的合意管轄裁判所とします。`,
  },
  {
    title: "第13条（お問い合わせ）",
    body: `本規約に関するご質問は下記までご連絡ください。

合同会社80
メール：ito.t@80grp.com
電話：050-8896-5889
所在地：愛知県名古屋市北区楠味鋺2-914-2-2F`,
  },
];

export default function TermsPage() {
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
          <p className="text-sm font-black text-indigo-600">TERMS OF SERVICE</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            利用規約
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
