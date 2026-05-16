"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Donate from "@/components/sections/Donate";
import Reviews from "@/components/sections/Reviews";
import type { Lang } from "@/lib/types";
type Section = "home" | "about" | "services" | "blog" | "reviews" | "contact" | "donate";

const DIVIDER = () => (
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <div className="gold-divider" />
  </div>
);

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [loading, setLoading] = useState(true);

  // Restore saved language or auto-detect from browser
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) {
      setLang(saved);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      const map: Record<string, Lang> = { ru: "ru", en: "en", uz: "uz", tg: "tj", ky: "ky", kk: "kz" };
      if (map[browserLang]) setLang(map[browserLang]);
    }
    setTimeout(() => setLoading(false), 800);
  }, []);

  // Cursor glow effect
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow") as HTMLElement;
    if (!glow) return;
    const move = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const setSection = (s: string) => setActiveSection(s as Section);

  const handleLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  // ── Loading screen ──────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--dark)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="spinner" />
          <p className="font-serif text-[18px] text-[var(--gold)] tracking-widest">
            NOVOSIBIRSK GUIDE
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Cursor glow (desktop only) */}
      <div className="cursor-glow hidden lg:block" />

      {/* Navbar */}
      <Navbar
        lang={lang}
        setLang={handleLang}
        activeSection={activeSection}
        setActiveSection={setSection}
      />

      {/* Page content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {activeSection === "home" && (
            <Hero lang={lang} setSection={setSection} />
          )}

          {activeSection === "about" && (
            <>
              <About lang={lang} setSection={setSection} />
            </>
          )}

          {activeSection === "services" && (
            <Services lang={lang} />
          )}

          {activeSection === "blog" && (
            <Blog lang={lang} />
          )}

          {activeSection === "reviews" && (
            <Reviews lang={lang} />
          )}

          {activeSection === "contact" && (
            <Contact lang={lang} />
          )}

          {activeSection === "donate" && (
            <Donate lang={lang} />
          )}

          <DIVIDER />
          <Footer lang={lang} />
        </motion.main>
      </AnimatePresence>
    </>
  );
}
