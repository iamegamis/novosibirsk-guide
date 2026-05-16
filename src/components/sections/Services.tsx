"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SERVICES, SITE_CONFIG, PACKAGE } from "@/lib/config";
import type { Lang } from "@/lib/types";

const LABELS: Record<Lang, {
  eye: string; title: string; accent: string;
  popular: string; per: string; book: string;
  packEye: string; packTitle: string; packDesc: string; packBtn: string;
}> = {
  ru: { eye: "Услуги", title: "Консультации", accent: "для вас", popular: "ХИТ", per: "/ сессия", book: "Записаться →", packEye: "ПАКЕТ ВСЁ ВКЛЮЧЕНО", packTitle: "Полное сопровождение", packDesc: "Все 3 консультации + поддержка в Telegram на 3 месяца", packBtn: "Купить пакет" },
  en: { eye: "Services", title: "Consultations", accent: "for you", popular: "TOP", per: "/ session", book: "Book now →", packEye: "ALL-INCLUSIVE", packTitle: "Full Support Package", packDesc: "All 3 consultations + 3 months Telegram support", packBtn: "Buy package" },
  uz: { eye: "Xizmatlar", title: "Konsultatsiyalar", accent: "siz uchun", popular: "HIT", per: "/ sessiya", book: "Yozilish →", packEye: "TO'LIQ PAKET", packTitle: "To'liq qo'llab-quvvatlash", packDesc: "3 ta konsultatsiya + 3 oy Telegram qo'llab-quvvatlash", packBtn: "Paketni sotib olish" },
  tj: { eye: "Хидматҳо", title: "Машваратҳо", accent: "барои шумо", popular: "ХИТ", per: "/ сессия", book: "Сабт шавед →", packEye: "БАСТАИ ПУРРА", packTitle: "Дастгирии пурра", packDesc: "Ҳамаи 3 машварат + дастгирӣ дар Telegram 3 моҳ", packBtn: "Баста харед" },
  ky: { eye: "Кызматтар", title: "Консультациялар", accent: "сиз үчүн", popular: "ХИТ", per: "/ сессия", book: "Жазылуу →", packEye: "ТОЛУК ПАКЕТ", packTitle: "Толук колдоо", packDesc: "Бардык 3 консультация + 3 ай Telegram колдоосу", packBtn: "Пакет сатып алуу" },
  kz: { eye: "Қызметтер", title: "Кеңестер", accent: "сіз үшін", popular: "ХИТ", per: "/ сессия", book: "Жазылу →", packEye: "ТОЛЫҚ ПАКЕТ", packTitle: "Толық қолдау", packDesc: "Барлық 3 кеңес + 3 айлық Telegram қолдауы", packBtn: "Пакет сатып алу" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Services({ lang }: { lang: Lang }) {
  const t = LABELS[lang];

  return (
    <section className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="eyebrow">{t.eye}</p>
          <h2 className="section-title text-[clamp(36px,4.5vw,58px)]">
            {t.title}{" "}
            <em className="not-italic gold-gradient">{t.accent}</em>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`relative glass gold-line-top p-8 flex flex-col ${
                service.popular ? "border-[rgba(201,168,76,0.3)]" : ""
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <span className="absolute top-4 right-4 text-[10px] tracking-[0.18em] text-[var(--gold)] bg-[rgba(201,168,76,0.1)] px-3 py-1 rounded-full border border-[rgba(201,168,76,0.2)] uppercase">
                  {t.popular}
                </span>
              )}

              <p className="font-display text-[11px] tracking-[0.2em] text-[var(--gold)] mb-5">
                {service.num}
              </p>
              <h3 className="font-serif text-[22px] font-bold leading-tight mb-3">
                {service.title[lang]}
              </h3>
              <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-8 flex-1">
                {service.desc[lang]}
              </p>

              <div className="mt-auto">
                <p className="font-display text-[30px] font-extrabold text-[var(--gold)]">
                  {service.price.toLocaleString()}{service.currency}{" "}
                  <span className="text-[13px] font-normal text-[var(--muted)]">{t.per}</span>
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={SITE_CONFIG.contacts.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase py-2.5 px-5 rounded border transition-all ${
                    service.popular
                      ? "btn-gold"
                      : "btn-ghost"
                  }`}
                >
                  <Send size={13} />
                  {t.book}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Package deal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="eyebrow mb-2">{t.packEye}</p>
            <h3 className="font-serif text-[24px] font-bold">{t.packTitle}</h3>
            <p className="text-[14px] text-[var(--muted)] mt-1">{t.packDesc}</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
            <p className="font-display text-[40px] font-extrabold text-[var(--gold)]">
              {PACKAGE.price.toLocaleString()}{PACKAGE.currency}
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={SITE_CONFIG.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <Send size={15} />
              {t.packBtn}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
