"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Lang } from "@/lib/types";

interface NavProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
}

// ── Labels ─────────────────────────────────────────────
const NAV_LABELS: Record<Lang, Record<string, string>> = {
  ru: { home: "Главная", about: "Обо мне", services: "Услуги", blog: "Блог", reviews: "Отзывы", contact: "Контакты", donate: "Поддержать" },
  en: { home: "Home", about: "About", services: "Services", blog: "Blog", reviews: "Reviews", contact: "Contacts", donate: "Support" },
  uz: { home: "Bosh sahifa", about: "Men haqimda", services: "Xizmatlar", blog: "Blog", reviews: "Sharhlar", contact: "Aloqa", donate: "Qo'llab-quvvatlash" },
  tj: { home: "Асосӣ", about: "Дар бораи ман", services: "Хидматҳо", blog: "Блог", reviews: "Шарҳҳо", contact: "Тамос", donate: "Дастгирӣ" },
  ky: { home: "Башкы бет", about: "Мен жөнүндө", services: "Кызматтар", blog: "Блог", reviews: "Пикирлер", contact: "Байланыш", donate: "Колдоо" },
  kz: { home: "Басты бет", about: "Мен туралы", services: "Қызметтер", blog: "Блог", reviews: "Пікірлер", contact: "Байланыс", donate: "Қолдау" },
};

const LANGS: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
  { code: "tj", label: "TJ" },
  { code: "ky", label: "KY" },
  { code: "kz", label: "KZ" },
];

const NAV_SECTIONS = ["home", "about", "services", "blog", "reviews", "contact", "donate"];

// ── Component ──────────────────────────────────────────
export default function Navbar({ lang, setLang, activeSection, setActiveSection }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const labels = NAV_LABELS[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (section: string) => {
    setActiveSection(section);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,10,10,0.92)] backdrop-blur-xl border-b border-[var(--glass-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="font-serif text-[18px] font-bold tracking-wide text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
          >
            MenBilan<span className="text-[var(--text)] opacity-60">Birga</span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_SECTIONS.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNav(section)}
                  className={`text-[11px] tracking-[0.14em] uppercase transition-colors duration-200 ${
                    activeSection === section
                      ? "text-[var(--gold)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {labels[section]}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: lang switcher + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1">
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
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

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden text-[var(--muted)] hover:text-[var(--gold)] transition-colors p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[rgba(10,10,10,0.96)] backdrop-blur-xl border-b border-[var(--glass-border)] px-6 py-6 lg:hidden"
          >
            <ul className="flex flex-col gap-5 mb-6">
              {NAV_SECTIONS.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleNav(section)}
                    className={`text-[13px] tracking-[0.12em] uppercase transition-colors ${
                      activeSection === section ? "text-[var(--gold)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {labels[section]}
                  </button>
                </li>
              ))}
            </ul>
            {/* Language switcher in mobile */}
            <div className="flex flex-wrap gap-2">
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`text-[11px] px-3 py-1.5 rounded-full border transition-all ${
                    lang === code
                      ? "border-[var(--gold)] text-[var(--gold)] bg-[rgba(201,168,76,0.1)]"
                      : "border-[var(--glass-border)] text-[var(--muted)]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
