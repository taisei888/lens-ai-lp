import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { company, name, email, phone, employees, message } = body;

  const { error } = await resend.emails.send({
    from: "LENS AI 資料請求 <onboarding@resend.dev>",
    to: "ito.t@80grp.com",
    replyTo: email,
    subject: `【資料請求】${company} / ${name}`,
    html: `
      <h2>資料請求が届きました</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:bold;width:140px">会社名</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${company}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:bold">お名前</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${name}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:bold">メール</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:bold">電話番号</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${phone || "未入力"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:bold">従業員数</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${employees || "未選択"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:bold">お問い合わせ内容</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;white-space:pre-wrap">${message || "なし"}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: error.message, detail: error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
