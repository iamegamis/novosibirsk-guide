"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Post } from "@/lib/posts";
import type { Lang } from "@/lib/types";

const LANGS: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
  { code: "tj", label: "TJ" },
  { code: "ky", label: "KY" },
  { code: "kz", label: "KZ" },
];

const BACK: Record<Lang, string> = {
  ru: "Назад к блогу",
  en: "Back to blog",
  uz: "Blogga qaytish",
  tj: "Бозгашт ба блог",
  ky: "Блогго кайтуу",
  kz: "Блогқа оралу",
};

export default function BlogPostClient({ post }: { post: Post }) {
  const [lang, setLang] = useState<Lang>("ru");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) {
      setLang(saved);
    } else {
      const map: Record<string, Lang> = { ru: "ru", en: "en", uz: "uz", tg: "tj", ky: "ky", kk: "kz" };
      const bl = navigator.language.slice(0, 2);
      if (map[bl]) setLang(map[bl]);
    }
  }, []);

  const handleLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.92)] backdrop-blur-xl border-b border-[var(--glass-border)]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
          >
            <ArrowLeft size={14} />
            {BACK[lang]}
          </Link>

          <div className="flex items-center gap-1">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => handleLang(code)}
                className={`text-[10px] px-2.5 py-1 rounded-full border transition-all duration-200 ${
                  lang === code
                    ? "border-[var(--gold)] text-[var(--gold)] bg-[rgba(201,168,76,0.1)]"
                    : "border-[var(--glass-border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div
        className="pt-16 h-64 md:h-80 flex items-center justify-center relative overflow-hidden"
        style={{ background: post.bg }}
      >
        <span className="text-7xl md:text-8xl relative z-10">{post.emoji}</span>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.85))" }}
        />
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)]">
              {post.category[lang]}
            </span>
            <span className="text-[var(--glass-border)]">·</span>
            <span className="text-[11px] text-[var(--muted)]">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-tight mb-8">
            {post.title[lang]}
          </h1>

          {/* Gold divider */}
          <div className="gold-divider mb-10" />

          {/* Body */}
          <div className="flex flex-col gap-6">
            {post.content[lang].map((paragraph, i) => (
              <p
                key={i}
                className="text-[15px] md:text-[16px] text-[var(--muted)] leading-[1.9]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 glass p-8 text-center">
            <p className="font-serif text-[20px] font-bold mb-2">
              {lang === "ru" ? "Остались вопросы?" :
               lang === "en" ? "Still have questions?" :
               lang === "uz" ? "Savollaringiz bormi?" :
               lang === "tj" ? "Саволҳо доред?" :
               lang === "ky" ? "Суроолор барбы?" :
               "Сұрақтарыңыз бар ма?"}
            </p>
            <p className="text-[14px] text-[var(--muted)] mb-6">
              {lang === "ru" ? "Напишите мне — разберём вашу ситуацию лично." :
               lang === "en" ? "Message me — we'll work through your situation personally." :
               lang === "uz" ? "Menga yozing — vaziyatingizni shaxsan ko'rib chiqamiz." :
               lang === "tj" ? "Ба ман нависед — вазъияти шуморо шахсан баррасӣ мекунем." :
               lang === "ky" ? "Маа жазыңыз — жагдайыңызды жеке карап чыгабыз." :
               "Маған жазыңыз — жағдайыңызды жеке қарастырамыз."}
            </p>
            <a
              href="https://t.me/iamegamis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex"
            >
              Telegram →
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
