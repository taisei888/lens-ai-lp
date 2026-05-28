import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会社概要 | LENDS AI",
  description: "LENDS AIを運営する合同会社80の会社概要ページです。",
};

const companyInfo = [
  { label: "社名",           value: "合同会社80" },
  { label: "設立",           value: "2023年3月" },
  { label: "所在地",         value: "愛知県名古屋市北区楠味鋺2-914-2-2F" },
  { label: "資本金",         value: "501万円" },
  { label: "プロジェクト責任者", value: "伊藤 大世" },
  { label: "電話番号",       value: "050-8896-5889" },
  { label: "メールアドレス", value: "ito.t@80grp.com" },
  { label: "事業内容",       value: "組織コンディション分析サービス「LENDS AI」の開発・運営" },
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900">
      {/* Header */}
      <header className="border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/">
            <img src="/LENS AI logo.png" alt="LENDS AI logo" className="h-8 w-auto object-contain" />
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-slate-500 transition hover:text-indigo-600"
          >
            ← トップへ戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-black text-indigo-600">COMPANY</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            会社概要
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            LENDS AIを運営する合同会社80についてご紹介します。
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/50">
          {companyInfo.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col gap-2 px-8 py-5 sm:flex-row sm:gap-8 ${
                index !== companyInfo.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <p className="w-40 shrink-0 text-sm font-black text-slate-500">{item.label}</p>
              <p className="text-sm leading-7 text-slate-900">
                {item.label === "メールアドレス" ? (
                  <a href={`mailto:${item.value}`} className="text-indigo-600 hover:underline">
                    {item.value}
                  </a>
                ) : item.label === "電話番号" ? (
                  <a href={`tel:${item.value}`} className="text-indigo-600 hover:underline">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-8 shadow-xl shadow-indigo-100/60">
          <p className="text-sm font-black text-indigo-700">運営サービスについて</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            LENDS AIは、スマホアンケートとAI分析で組織のコンディションを可視化するサービスです。
            従業員の離職リスク・ストレス・モチベーション状態を早期に把握し、
            経営者・管理者が現場の状態を改善するための判断材料を提供します。
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5"
            >
              資料請求する
            </Link>
          </div>
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
