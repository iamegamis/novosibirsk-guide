"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, BookOpen, ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import type { Lang } from "@/lib/types";

interface HeroProps {
  lang: Lang;
  setSection: (s: string) => void;
}

const LABELS: Record<Lang, {
  tag: string;
  title: string[];
  titleAccent: string;
  sub: string;
  btnConsult: string;
  btnBlog: string;
  statStudents: string;
  statYears: string;
  statFollowers: string;
}> = {
  ru: { tag: "Живу в Новосибирске", title: ["Твой гид", "по жизни в"], titleAccent: "России", sub: SITE_CONFIG.description.ru, btnConsult: "Получить консультацию", btnBlog: "Читать блог", statStudents: "Студентов", statYears: "Лет в России", statFollowers: "Подписчиков" },
  en: { tag: "Living in Novosibirsk", title: ["Your guide", "to life in"], titleAccent: "Russia", sub: SITE_CONFIG.description.en, btnConsult: "Get a consultation", btnBlog: "Read blog", statStudents: "Students", statYears: "Years in Russia", statFollowers: "Followers" },
  uz: { tag: "Novosibirskda yashayman", title: ["Rossiyada", "hayot bo'yicha"], titleAccent: "qo'llanma", sub: SITE_CONFIG.description.uz, btnConsult: "Konsultatsiya olish", btnBlog: "Blogni o'qish", statStudents: "Talabalar", statYears: "Yil Rossiyada", statFollowers: "Obunachilari" },
  tj: { tag: "Дар Новосибирск зиндагӣ мекунам", title: ["Роҳнамои шумо", "дар"], titleAccent: "Русия", sub: SITE_CONFIG.description.tj, btnConsult: "Маслиҳат гиред", btnBlog: "Блог хонед", statStudents: "Донишҷӯён", statYears: "Солҳо дар Русия", statFollowers: "Обуначиён" },
  ky: { tag: "Новосибирскте жашайм", title: ["Сиздин жол", "башчыңыз"], titleAccent: "Россияда", sub: SITE_CONFIG.description.ky, btnConsult: "Консультация алуу", btnBlog: "Блог окуу", statStudents: "Студенттер", statYears: "Жыл Россияда", statFollowers: "Жазылуучулар" },
  kz: { tag: "Новосибирскте тұрамын", title: ["Сіздің", "жол нұсқаушыңыз"], titleAccent: "Ресейде", sub: SITE_CONFIG.description.kz, btnConsult: "Кеңес алу", btnBlog: "Блог оқу", statStudents: "Студенттер", statYears: "Жыл Ресейде", statFollowers: "Жазылушылар" },
};

// Animation variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero({ lang, setSection }: HeroProps) {
  const t = LABELS[lang];
  const { stats } = SITE_CONFIG;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[var(--dark)]" />
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="cinematic-overlay" />

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-1/5 w-72 h-72 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Tag */}
            <motion.div variants={item} className="mb-8">
              <span className="tag-pill">
                <span className="dot" />
                🇷🇺 {t.tag}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={item}
              className="font-serif text-[clamp(44px,6vw,76px)] font-black leading-[1.04] tracking-tight mb-6"
            >
              {t.title[0]}<br />
              {t.title[1]}{" "}
              <em className="not-italic gold-gradient">{t.titleAccent}</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-[16px] text-[var(--muted)] leading-relaxed mb-10 max-w-[480px]"
            >
              {t.sub}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={SITE_CONFIG.contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <Send size={15} />
                {t.btnConsult}
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSection("blog")}
                className="btn-ghost"
              >
                <BookOpen size={15} />
                {t.btnBlog}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex gap-10 pt-8 border-t border-[var(--glass-border)]"
            >
              {[
                { num: stats.students, label: t.statStudents },
                { num: stats.years, label: t.statYears },
                { num: stats.subscribers, label: t.statFollowers },
              ].map(({ num, label }) => (
                <div key={label}>
                  <span className="font-display text-[30px] font-extrabold text-[var(--gold)] block">
                    {num}
                  </span>
                  <span className="text-[12px] text-[var(--muted)] tracking-wide">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-xl border border-[rgba(201,168,76,0.1)]"
                style={{ borderRadius: "16px" }}
              />

              {/* Photo frame */}
              <div className="relative w-[320px] h-[420px] sm:w-[360px] sm:h-[460px] rounded-xl overflow-hidden"
                style={{ background: "linear-gradient(145deg, #1A1A1A, #111)", border: "0.5px solid var(--glass-border)" }}
              >
                <Image
                  src="/images/photo.jpg"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Gradient overlay on photo */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)" }}
                />

                {/* Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="glass p-4">
                    <p className="font-display text-[16px] font-semibold text-[var(--text)]">
                      {SITE_CONFIG.name}
                    </p>
                    <p className="text-[11px] text-[var(--gold)] tracking-[0.12em] mt-1 uppercase">
                      Blogger · Consultant · Novosibirsk
                    </p>
                    {/* Social icons row */}
                    <div className="flex gap-3 mt-3">
                      {[
                        { href: SITE_CONFIG.contacts.telegramUrl, icon: "✈️" },
                        { href: SITE_CONFIG.contacts.instagramUrl, icon: "📸" },
                        { href: SITE_CONFIG.contacts.youtubeUrl, icon: "▶️" },
                      ].map(({ href, icon }) => (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[18px] hover:scale-110 transition-transform"
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)]"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
