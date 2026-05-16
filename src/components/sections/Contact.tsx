"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import type { Lang } from "@/lib/types";

const LABELS: Record<Lang, {
  eye: string; title: string; accent: string;
  name: string; contact: string; message: string; send: string; sending: string; sent: string;
  formTitle: string;
}> = {
  ru: { eye: "Контакты", title: "Свяжитесь", accent: "со мной", name: "Ваше имя", contact: "Telegram или WhatsApp", message: "Ваш вопрос или цель консультации...", send: "Отправить заявку", sending: "Отправляем...", sent: "Заявка отправлена!", formTitle: "Быстрая заявка" },
  en: { eye: "Contacts", title: "Get in", accent: "touch", name: "Your name", contact: "Telegram or WhatsApp", message: "Your question or consultation goal...", send: "Send request", sending: "Sending...", sent: "Request sent!", formTitle: "Quick request" },
  uz: { eye: "Aloqa", title: "Men bilan", accent: "bog'lanish", name: "Ismingiz", contact: "Telegram yoki WhatsApp", message: "Savolingiz yoki konsultatsiya maqsadi...", send: "So'rovni yuborish", sending: "Yuborilmoqda...", sent: "So'rov yuborildi!", formTitle: "Tezkor so'rov" },
  tj: { eye: "Тамос", title: "Бо ман", accent: "тамос гиред", name: "Номи шумо", contact: "Telegram ё WhatsApp", message: "Саволи шумо ё ҳадафи машварат...", send: "Дархост фиристед", sending: "Фиристода мешавад...", sent: "Дархост фиристода шуд!", formTitle: "Дархости зуд" },
  ky: { eye: "Байланыш", title: "Мен менен", accent: "байланышуу", name: "Атыңыз", contact: "Telegram же WhatsApp", message: "Суроонуз же консультациянын максаты...", send: "Суроо жөнөтүү", sending: "Жөнөтүлүүдө...", sent: "Суроо жөнөтүлдү!", formTitle: "Тезкор суроо" },
  kz: { eye: "Байланыс", title: "Мен", accent: "байланысу", name: "Атыңыз", contact: "Telegram немесе WhatsApp", message: "Сұрағыңыз немесе кеңес мақсаты...", send: "Сұраным жіберу", sending: "Жіберілуде...", sent: "Сұраным жіберілді!", formTitle: "Жылдам сұраным" },
};

const SOCIAL = [
  { name: "Telegram", emoji: "✈️", color: "rgba(41,182,246,0.1)", textColor: "#29B6F6", key: "telegramUrl" as const },
  { name: "WhatsApp", emoji: "💬", color: "rgba(37,211,102,0.1)", textColor: "#25D366", key: "whatsappUrl" as const },
  { name: "Instagram", emoji: "📸", color: "rgba(225,48,108,0.1)", textColor: "#E1306C", key: "instagramUrl" as const },
  { name: "YouTube", emoji: "▶️", color: "rgba(255,0,0,0.1)", textColor: "#FF4444", key: "youtubeUrl" as const },
  { name: "TikTok", emoji: "🎵", color: "rgba(0,242,234,0.1)", textColor: "#00F2EA", key: "tiktokUrl" as const },
  { name: "Email", emoji: "📧", color: "rgba(201,168,76,0.1)", textColor: "var(--gold)", key: "email" as const },
];

export default function Contact({ lang }: { lang: Lang }) {
  const t = LABELS[lang];
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("sent");
      setForm({ name: "", contact: "", message: "" });
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="eyebrow">{t.eye}</p>
          <h2 className="section-title text-[clamp(36px,4.5vw,58px)]">
            {t.title}{" "}<em className="not-italic gold-gradient">{t.accent}</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 content-start"
          >
            {SOCIAL.map(({ name, emoji, color, textColor, key }, i) => {
              const href = key === "email"
                ? `mailto:${SITE_CONFIG.contacts.email}`
                : SITE_CONFIG.contacts[key];
              return (
                <motion.a
                  key={name}
                  href={href}
                  target={key !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="glass flex items-center gap-4 p-5 group"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center text-xl shrink-0"
                    style={{ background: color }}
                  >
                    {emoji}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[var(--text)]">{name}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: textColor }}>
                      {key === "email"
                        ? SITE_CONFIG.contacts.email
                        : key === "whatsappUrl"
                        ? SITE_CONFIG.contacts.whatsapp
                        : key === "telegramUrl"
                        ? SITE_CONFIG.contacts.telegram
                        : key === "instagramUrl"
                        ? SITE_CONFIG.contacts.instagram
                        : key === "tiktokUrl"
                        ? SITE_CONFIG.contacts.tiktok
                        : SITE_CONFIG.contacts.youtube}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8"
          >
            <p className="eyebrow mb-6">{t.formTitle}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.name}
                className="bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded px-4 py-3 text-[14px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[rgba(201,168,76,0.5)] transition-colors"
              />
              <input
                required
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder={t.contact}
                className="bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded px-4 py-3 text-[14px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[rgba(201,168,76,0.5)] transition-colors"
              />
            </div>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.message}
              className="w-full mb-6 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded px-4 py-3 text-[14px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[rgba(201,168,76,0.5)] transition-colors resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending" || status === "sent"}
              className="btn-gold w-full justify-center"
            >
              {status === "sent" ? (
                <><CheckCircle size={15} /> {t.sent}</>
              ) : status === "sending" ? (
                <><div className="spinner w-4 h-4 border" /> {t.sending}</>
              ) : (
                <><Send size={15} /> {t.send}</>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
