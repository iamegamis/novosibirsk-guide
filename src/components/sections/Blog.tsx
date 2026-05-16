"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import { POSTS } from "@/lib/posts";
import type { Lang } from "@/lib/types";

const ALL_CATS = (lang: Lang): { key: string; label: string }[] => {
  const seen = new Set<string>();
  const cats: { key: string; label: string }[] = [];
  for (const p of POSTS) {
    if (!seen.has(p.catKey)) {
      seen.add(p.catKey);
      cats.push({ key: p.catKey, label: p.category[lang] });
    }
  }
  return cats;
};

const LABELS: Record<Lang, { eye: string; title: string; accent: string; all: string; search: string; readMore: string }> = {
  ru: { eye: "Блог", title: "Реальная", accent: "жизнь", all: "Все", search: "Поиск по блогу...", readMore: "Читать →" },
  en: { eye: "Blog", title: "Real", accent: "life", all: "All", search: "Search blog...", readMore: "Read →" },
  uz: { eye: "Blog", title: "Haqiqiy", accent: "hayot", all: "Barchasi", search: "Blogdan qidirish...", readMore: "O'qish →" },
  tj: { eye: "Блог", title: "Ҳаёти", accent: "воқеӣ", all: "Ҳама", search: "Ҷустуҷӯ дар блог...", readMore: "Хондан →" },
  ky: { eye: "Блог", title: "Чыныгы", accent: "жашоо", all: "Баары", search: "Блогдон издөө...", readMore: "Окуу →" },
  kz: { eye: "Блог", title: "Нақты", accent: "өмір", all: "Барлығы", search: "Блогтан іздеу...", readMore: "Оқу →" },
};

export default function Blog({ lang }: { lang: Lang }) {
  const t = LABELS[lang];
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ALL_CATS(lang);

  const filtered = POSTS.filter((p) => {
    const matchCat = activeCategory === "all" || p.catKey === activeCategory;
    const matchSearch =
      p.title[lang].toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt[lang].toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="eyebrow">{t.eye}</p>
          <h2 className="section-title text-[clamp(36px,4.5vw,58px)]">
            {t.title}{" "}<em className="not-italic gold-gradient">{t.accent}</em>
          </h2>
        </motion.div>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={15} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.search}
              className="w-full bg-[var(--glass)] border border-[var(--glass-border)] rounded-md pl-11 pr-4 py-3 text-[14px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[rgba(201,168,76,0.4)] transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-full border transition-all ${
                activeCategory === "all"
                  ? "border-[var(--gold)] text-[var(--gold)] bg-[rgba(201,168,76,0.1)]"
                  : "border-[var(--glass-border)] text-[var(--muted)] hover:border-[rgba(201,168,76,0.3)]"
              }`}
            >
              {t.all}
            </button>
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-full border transition-all ${
                  activeCategory === key
                    ? "border-[var(--gold)] text-[var(--gold)] bg-[rgba(201,168,76,0.1)]"
                    : "border-[var(--glass-border)] text-[var(--muted)] hover:border-[rgba(201,168,76,0.3)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/blog/${post.id}`} className="block glass gold-line-top overflow-hidden group">
                {/* Image */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ background: post.bg }}
                >
                  <span className="text-5xl relative z-10">{post.emoji}</span>
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.7))" }}
                  />
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)]">
                      {post.category[lang]}
                    </span>
                    <span className="text-[11px] text-[var(--muted)]">{post.date}</span>
                  </div>
                  <h3 className="font-display text-[17px] font-semibold leading-snug mb-3 group-hover:text-[var(--gold)] transition-colors">
                    {post.title[lang]}
                  </h3>
                  <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-4">
                    {post.excerpt[lang]}
                  </p>
                  <span className="text-[12px] text-[var(--gold)] tracking-[0.1em] uppercase">
                    {t.readMore}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--muted)] mt-20 text-[15px]">
            {lang === "ru" ? "Посты не найдены" : "No posts found"}
          </p>
        )}
      </div>
    </section>
  );
}
