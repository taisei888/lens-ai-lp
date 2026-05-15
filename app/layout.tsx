import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LENS AI | 組織コンディション分析サービス",
  description:
    "スマホアンケートとAI分析で、離職リスク・ストレス・コンプライアンス不安・モチベーション状態を可視化する組織コンディション分析サービス。従業員の声を経営改善につなげます。",
  keywords: ["組織分析", "離職リスク", "ストレスチェック", "従業員満足度", "AI分析", "LENS AI", "コンディション分析"],
  openGraph: {
    title: "LENS AI | 組織コンディション分析サービス",
    description:
      "スマホアンケートとAI分析で、離職リスク・ストレス・モチベーション状態を可視化。従業員の声を経営判断に変えます。",
    url: "https://www.lens-ai.jp",
    siteName: "LENS AI",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LENS AI | 組織コンディション分析サービス",
    description:
      "スマホアンケートとAI分析で、離職リスク・ストレス・モチベーション状態を可視化。従業員の声を経営判断に変えます。",
  },
  metadataBase: new URL("https://www.lens-ai.jp"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
