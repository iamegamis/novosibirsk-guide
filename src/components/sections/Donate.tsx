"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import type { Lang } from "@/lib/types";

const LABELS: Record<Lang, {
  eye: string; title: string; accent: string; sub: string;
  qrTitle: string; qrSub: string; sbpLabel: string;
}> = {
  ru: { eye: "Поддержать", title: "Оплата и", accent: "донаты", sub: "Поддержите мой контент или оплатите консультацию. Все российские банки и международные платформы.", qrTitle: "SBP / QR", qrSub: "Наведите камеру телефона", sbpLabel: "Телефон для СБП" },
  en: { eye: "Support", title: "Payments &", accent: "donations", sub: "Support my content or pay for a consultation. All Russian banks and international platforms.", qrTitle: "SBP / QR", qrSub: "Point your phone camera", sbpLabel: "Phone for SBP" },
  uz: { eye: "Qo'llab-quvvatlash", title: "To'lov va", accent: "donat", sub: "Kontentimni qo'llab-quvvatlang yoki konsultatsiyani to'lang.", qrTitle: "SBP / QR", qrSub: "Telefon kamerasini yo'naltiring", sbpLabel: "SBP uchun telefon" },
  tj: { eye: "Дастгирӣ", title: "Пардохт ва", accent: "донатҳо", sub: "Контентамро дастгирӣ кунед ё машваратро пардохт кунед.", qrTitle: "SBP / QR", qrSub: "Камераи телефонро равона кунед", sbpLabel: "Телефон барои СБП" },
  ky: { eye: "Колдоо", title: "Төлөм жана", accent: "донаттар", sub: "Контентимди колдоңуз же консультацияны төлөңүз.", qrTitle: "SBP / QR", qrSub: "Телефон камерасын багыттаңыз", sbpLabel: "СБП үчүн телефон" },
  kz: { eye: "Қолдау", title: "Төлем және", accent: "донаттар", sub: "Контентімді қолдаңыз немесе кеңесті төлеңіз.", qrTitle: "SBP / QR", qrSub: "Телефон камерасын бағыттаңыз", sbpLabel: "СБП үшін телефон" },
};


export default function Donate({ lang }: { lang: Lang }) {
  const t = LABELS[lang];
  const d = SITE_CONFIG.donations;

  return (
    <section className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="eyebrow">{t.eye}</p>
          <h2 className="section-title text-[clamp(36px,4.5vw,58px)]">
            {t.title}{" "}<em className="not-italic gold-gradient">{t.accent}</em>
          </h2>
          <p className="text-[15px] text-[var(--muted)] mt-4 max-w-xl leading-relaxed">{t.sub}</p>
        </motion.div>

        {/* QR + SBP */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* QR placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 flex flex-col items-center text-center"
          >
            <p className="eyebrow mb-5">{t.qrTitle}</p>
            <div
              className="w-32 h-32 mb-5 flex items-center justify-center rounded-lg text-5xl"
              style={{ border: "0.5px solid var(--glass-border)", background: "rgba(255,255,255,0.03)" }}
            >
              📱
            </div>
            <p className="text-[13px] text-[var(--muted)]">{t.qrSub}</p>
            <p className="text-[12px] text-[var(--gold)] mt-2 tracking-wide">
              {d.sbpPhone}
            </p>
          </motion.div>

          {/* Telegram stars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">✈️⭐</span>
              <p className="font-display text-[18px] font-semibold">Telegram Stars</p>
            </div>
            <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-6 flex-1">
              {lang === "ru"
                ? "Поддержите меня прямо в Telegram — самый простой и быстрый способ."
                : "Support me directly in Telegram — the easiest and fastest way."}
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={SITE_CONFIG.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold justify-center"
            >
              <Heart size={15} />
              {lang === "ru" ? "Поддержать в Telegram" : "Support in Telegram"}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
