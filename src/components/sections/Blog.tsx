"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import type { Lang } from "@/lib/types";

interface Post {
  id: string;
  catKey: string;
  emoji: string;
  category: { ru: string; en: string; uz: string; tj: string; ky: string; kz: string };
  title:    { ru: string; en: string; uz: string; tj: string; ky: string; kz: string };
  excerpt:  { ru: string; en: string; uz: string; tj: string; ky: string; kz: string };
  bg: string;
  date: string;
}

// ── Blog posts ── Добавляй новые посты здесь ─────────────
const POSTS: Post[] = [
  {
    id: "ngu-guide",
    catKey: "university",
    emoji: "🏛️",
    bg: "linear-gradient(145deg,#0A1520,#152030)",
    date: "2025-01-10",
    category: { ru: "Университет", en: "University", uz: "Universitet", tj: "Донишгоҳ", ky: "Университет", kz: "Университет" },
    title:    { ru: "Как поступить в НГУ иностранцу: полный гайд 2025", en: "How to enroll in NSU as a foreigner: full guide 2025", uz: "NSUga xorijiy talaba sifatida qanday kirish: to'liq qo'llanma 2025", tj: "Чӣ тавр ба НГУ дохил шудан: роҳнамои пурра 2025", ky: "НГУга чет элдик катары кантип кирүү: толук жол башчы 2025", kz: "НГУ-ға шетелдік ретінде қалай түсу: толық нұсқаулық 2025" },
    excerpt:  { ru: "Разбираем квоту Минобрнауки, документы, сроки и подводные камни поступления в один из лучших вузов России.", en: "Breaking down the Ministry quota, documents, deadlines, and pitfalls of enrolling in one of Russia's best universities.", uz: "Vazirlik kvotasi, hujjatlar, muddatlar va Rossiyaning eng yaxshi universitetlaridan biriga kirishning qiyinchiliklarini tahlil qilamiz.", tj: "Квотаи Вазорат, ҳуҷҷатҳо, мӯҳлатҳо ва мушкилоти дохил шудан ба яке аз беҳтарин донишгоҳҳои Русия.", ky: "Министрлик квотасы, документтер, мөөнөттөр жана Россиянын эң мыкты университеттеринин бирине кирүүнүн кыйынчылыктары.", kz: "Министрлік квотасы, құжаттар, мерзімдер және Ресейдің үздік университеттерінің біріне түсудің қиындықтары." },
  },
  {
    id: "housing",
    catKey: "housing",
    emoji: "🏠",
    bg: "linear-gradient(145deg,#15100A,#251A0A)",
    date: "2025-01-05",
    category: { ru: "Жильё", en: "Housing", uz: "Uy-joy", tj: "Манзил", ky: "Турак-жай", kz: "Тұрғын үй" },
    title:    { ru: "Общежитие vs съём квартиры в Новосибирске", en: "Dorm vs renting an apartment in Novosibirsk", uz: "Yotoqxona vs Novosibirskda kvartira ijarasi", tj: "Хобгоҳ ё иҷораи квартира дар Новосибирск", ky: "Жатакана vs Новосибирскте батир ижарасы", kz: "Жатақхана vs Новосибирскте пәтер жалдау" },
    excerpt:  { ru: "Сравниваю все варианты жилья для студента: цены, районы, плюсы и минусы каждого варианта в 2025 году.", en: "Comparing all housing options for students: prices, districts, pros and cons of each in 2025.", uz: "2025 yilda talabalar uchun barcha uy-joy variantlarini taqqoslayman: narxlar, tumanlar, ijobiy va salbiy tomonlar.", tj: "Муқоисаи ҳамаи варiantҳои манзил барои донишҷӯ: нархҳо, маҳаллаҳо, ҷанбаҳои мусбат ва манфӣ.", ky: "2025-жылы студент үчүн бардык турак-жай варианттарын салыштырам: баалар, кварталдар, плюстар жана минустар.", kz: "2025 жылы студент үшін барлық тұрғын үй нұсқаларын салыстырамын: бағалар, аудандар, артықшылықтар мен кемшіліктер." },
  },
  {
    id: "budget",
    catKey: "budget",
    emoji: "💰",
    bg: "linear-gradient(145deg,#0A1510,#0A2010)",
    date: "2024-12-20",
    category: { ru: "Финансы", en: "Finances", uz: "Moliya", tj: "Молия", ky: "Финансы", kz: "Қаржы" },
    title:    { ru: "Сколько нужно денег студенту в Новосибирске", en: "How much money does a student need in Novosibirsk", uz: "Novosibirskda talabaga qancha pul kerak", tj: "Донишҷӯ дар Новосибирск чӣ қадар пул лозим дорад", ky: "Новосибирскте студентке канча акча керек", kz: "Новосибирскте студентке қанша ақша керек" },
    excerpt:  { ru: "Реальный бюджет: еда, транспорт, досуг, одежда, связь. Цифры без приукрас от человека, который живёт здесь.", en: "Real budget: food, transport, entertainment, clothing, phone. Honest numbers from someone who actually lives here.", uz: "Haqiqiy byudjet: oziq-ovqat, transport, dam olish, kiyim, aloqa. Bu yerda yashovchi odamdan haqiqiy raqamlar.", tj: "Буҷаи воқеӣ: хӯрок, нақлиёт, тафриҳ, либос, алоқа. Аз шахси воқеан зиндагикунанда.", ky: "Чыныгы бюджет: тамак, транспорт, эс алуу, кийим, байланыш. Бул жерде жашаган адамдан чыныгы цифралар.", kz: "Нақты бюджет: тамақ, көлік, демалыс, киім, байланыс. Осы жерде тұратын адамнан шынайы сандар." },
  },
  {
    id: "culture",
    catKey: "culture",
    emoji: "🌍",
    bg: "linear-gradient(145deg,#15050A,#250510)",
    date: "2024-12-15",
    category: { ru: "Адаптация", en: "Adaptation", uz: "Moslashish", tj: "Мутобиқшавӣ", ky: "Ыңгайлашуу", kz: "Бейімделу" },
    title:    { ru: "10 вещей, которые шокируют иностранца в России", en: "10 things that shock foreigners in Russia", uz: "Rossiyada xorijlikni hayratga soladigan 10 narsa", tj: "10 чизе, ки хориҷиро дар Русия ҳайрон мекунад", ky: "Россияда чет элдикти таң калдырган 10 нерсе", kz: "Ресейде шетелдікті таң қалдыратын 10 нәрсе" },
    excerpt:  { ru: "Культурные особенности, непривычные правила, менталитет и то, как к этому быстро привыкнуть.", en: "Cultural features, unusual norms, mentality, and how to adapt quickly.", uz: "Madaniy xususiyatlar, g'ayrioddiy me'yorlar, mentalitet va tez moslashish yo'llari.", tj: "Хусусиятҳои фарҳангӣ, одоби ғайриодӣ, менталитет ва чӣ тавр зуд мутобиқ шудан.", ky: "Маданий өзгөчөлүктөр, адаттан тыш нормалар, менталитет жана тез ыңгайлашуу жолдору.", kz: "Мәдени ерекшеліктер, ерекше нормалар, менталитет және тез бейімделу жолдары." },
  },
];

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
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={15} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.search}
              className="w-full bg-[var(--glass)] border border-[var(--glass-border)] rounded-md pl-11 pr-4 py-3 text-[14px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[rgba(201,168,76,0.4)] transition-colors"
            />
          </div>
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button
              key="all"
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
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass gold-line-top overflow-hidden cursor-pointer group"
            >
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
            </motion.article>
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
