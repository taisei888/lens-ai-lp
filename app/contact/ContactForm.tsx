"use client";

import { useState } from "react";

type FormState = {
  companyName: string;
  name: string;
  department: string;
  title: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

const initialState: FormState = {
  companyName: "",
  name: "",
  department: "",
  title: "",
  email: "",
  phone: "",
  message: "",
  privacy: false,
};

const fields: {
  id: keyof Omit<FormState, "privacy" | "message">;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
}[] = [
  { id: "companyName", label: "会社名",        type: "text",  required: true,  placeholder: "合同会社〇〇" },
  { id: "name",        label: "担当者名",       type: "text",  required: true,  placeholder: "山田 太郎" },
  { id: "department",  label: "担当部署",       type: "text",  required: false, placeholder: "人事部・経営企画室 など" },
  { id: "title",       label: "役職",           type: "text",  required: false, placeholder: "部長・マネージャー など" },
  { id: "email",       label: "メールアドレス", type: "email", required: true,  placeholder: "your@example.com" },
  { id: "phone",       label: "電話番号",       type: "tel",   required: false, placeholder: "050-0000-0000" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.companyName.trim()) newErrors.companyName = "会社名を入力してください";
    if (!form.name.trim())        newErrors.name        = "担当者名を入力してください";
    if (!form.email.trim())       newErrors.email       = "メールアドレスを入力してください";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "正しいメールアドレスを入力してください";
    if (!form.message.trim())     newErrors.message     = "お問い合わせ内容を入力してください";
    if (!form.privacy)            newErrors.privacy     = "プライバシーポリシーへの同意が必要です";
    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: form.companyName,
        name: form.name,
        email: form.email,
        phone: form.phone,
        employees: form.department,
        message: form.message,
      }),
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("送信に失敗しました。しばらくしてから再度お試しください。");
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-white bg-white p-10 text-center shadow-2xl shadow-indigo-100 md:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-sky-100">
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-black text-slate-950">送信が完了しました</h2>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          資料請求ありがとうございます。<br />
          入力いただいたメールアドレス宛に、担当者よりご連絡いたします。<br />
          通常2〜3営業日以内にご返信します。
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-600"
        >
          トップへ戻る
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-white bg-white p-8 shadow-2xl shadow-indigo-100 md:p-12">

      {/* テキストフィールド群 */}
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className={field.id === "email" ? "sm:col-span-2" : ""}>
            <label htmlFor={field.id} className="mb-1.5 block text-sm font-black text-slate-700">
              {field.label}
              {field.required && <span className="ml-1 text-indigo-600">*</span>}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              value={form[field.id]}
              onChange={handleChange}
              className={`w-full rounded-2xl border px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 ${
                errors[field.id] ? "border-rose-300 bg-rose-50" : "border-slate-200 bg-slate-50"
              }`}
            />
            {errors[field.id] && (
              <p className="mt-1.5 text-xs font-bold text-rose-500">{errors[field.id]}</p>
            )}
          </div>
        ))}
      </div>

      {/* お問い合わせ内容 */}
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-black text-slate-700">
          お問い合わせ内容<span className="ml-1 text-indigo-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="資料請求の背景や、ご質問・ご要望があればご記入ください"
          value={form.message}
          onChange={handleChange}
          className={`w-full resize-none rounded-2xl border px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 ${
            errors.message ? "border-rose-300 bg-rose-50" : "border-slate-200 bg-slate-50"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs font-bold text-rose-500">{errors.message}</p>
        )}
      </div>

      {/* プライバシーポリシー同意 */}
      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-indigo-600"
          />
          <span className="text-sm leading-6 text-slate-600">
            <a href="/privacy" target="_blank" className="font-bold text-indigo-600 underline hover:text-indigo-800">
              プライバシーポリシー
            </a>
            に同意する
            <span className="ml-1 text-indigo-600">*</span>
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-1.5 text-xs font-bold text-rose-500">{errors.privacy}</p>
        )}
      </div>

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 py-4 text-sm font-black text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {loading ? "送信中..." : "資料請求する"}
      </button>

      <p className="mt-4 text-center text-xs text-slate-400">
        通常2〜3営業日以内にご返信します。
      </p>
    </form>
  );
}
