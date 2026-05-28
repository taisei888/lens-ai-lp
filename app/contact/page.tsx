import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "資料請求 | LENDS AI",
  description: "LENDS AIの資料請求フォームです。サービス資料・料金プランのご案内を無料でお届けします。",
};

export default function ContactPage() {
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

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-100 bg-white py-14 text-center">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-2xl px-5">
          <p className="text-sm font-black text-indigo-600">DOCUMENT REQUEST</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            資料請求
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            サービス概要・機能説明・料金プランをまとめた資料をお送りします。
            お気軽にご請求ください。
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">

          {/* Left: 資料に含まれる内容 */}
          <div className="space-y-5">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100/60">
              <p className="text-sm font-black text-indigo-600">INCLUDED IN DOCUMENT</p>
              <h2 className="mt-2 text-xl font-black text-slate-950">資料に含まれる内容</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "サービス概要・機能説明",
                  "導入フローと運用イメージ",
                  "対象業種・活用事例",
                  "料金プラン・オプション",
                  "セキュリティ・データ管理について",
                  "よくある質問（Q&A）",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-black text-indigo-600">
                      ✓
                    </span>
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-7 shadow-xl shadow-indigo-100/60">
              <p className="text-sm font-black text-indigo-700">お問い合わせ</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                フォーム以外でのお問い合わせはこちら。
              </p>
              <div className="mt-4 space-y-2 text-sm font-bold text-slate-700">
                <p>
                  <span className="text-slate-400">Mail：</span>
                  <a href="mailto:ito.t@80grp.com" className="text-indigo-600 hover:underline">
                    ito.t@80grp.com
                  </a>
                </p>
                <p>
                  <span className="text-slate-400">Tel：</span>
                  <a href="tel:050-8896-5889" className="text-indigo-600 hover:underline">
                    050-8896-5889
                  </a>
                </p>
                <p className="text-xs font-normal text-slate-400">
                  ※ 平日 10:00〜18:00 対応
                </p>
              </div>
            </div>
          </div>

          {/* Right: フォーム */}
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row md:items-center">
          <Link href="/">
            <img src="/LENS AI logo.png" alt="LENDS AI logo" className="h-7 w-auto object-contain" />
          </Link>
          <nav className="flex flex-wrap gap-5 text-xs font-bold text-slate-400">
            <Link href="/company" className="hover:text-indigo-600">会社概要</Link>
            <Link href="/privacy" className="hover:text-indigo-600">プライバシーポリシー</Link>
            <Link href="/terms"   className="hover:text-indigo-600">利用規約</Link>
          </nav>
          <p>© LENDS AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
