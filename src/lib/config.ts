// ============================================================
//  ГЛАВНЫЙ КОНФИГ САЙТА
//  Меняй здесь — изменения применятся по всему сайту
// ============================================================

export const SITE_CONFIG = {
  // --- Личные данные ---
  name: "Исломжон",
  tagline: {
    ru: "Твой гид по жизни в России",
    en: "Your guide to life in Russia",
    uz: "Rossiyada hayot bo'yicha qo'llanma",
    tj: "Роҳнамои шумо дар Русия",
    ky: "Россияда жашоо боюнча жол башчыңыз",
    kz: "Ресейде өмір сүру бойынша нұсқаулық",
  },
  description: {
    ru: "Помогаю иностранным студентам адаптироваться, поступить в российские университеты и найти свой путь в новой стране.",
    en: "I help international students adapt, enter Russian universities, and find their way in a new country.",
    uz: "Xorijiy talabalarni Rossiya universitetlariga kirishga va yangi mamlakatda hayotga moslashishga yordam beraman.",
    tj: "Ба донишҷӯёни хориҷӣ кӯмак мекунам, ки ба донишгоҳҳои Русия дохил шаванд.",
    ky: "Чет элдик студенттерге Россиянын университеттерине кирүүгө жардам берем.",
    kz: "Шетелдік студенттерге ресейлік университеттерге түсуге көмектесемін.",
  },
  location: "Новосибирск, Россия",
  city: "Новосибирск",

  // --- Контакты (МЕНЯЙ ЗДЕСЬ) ---
  contacts: {
    telegram: "@iamegamis",       // ← вставь свой username
    telegramUrl: "https://t.me/iamegamis",
    whatsapp: "+79661013747",         // ← вставь свой номер
    whatsappUrl: "https://wa.me/79661013747",
    instagram: "@men.bilan_birga",     // ← вставь свой username
    instagramUrl: "https://instagram.com/men.bilan_birga",
    youtube: "Menbilanbirga",
    youtubeUrl: "https://youtube.com/@Menbilanbirga",
    tiktok: "@menbilanbirga",
    tiktokUrl: "https://tiktok.com/@menbilanbirga",
    email: "islom.egamberdiev999@mail.ru",          // ← вставь свой email
  },

  // --- Донаты (МЕНЯЙ ЗДЕСЬ) ---
  donations: {
    sbpPhone: "+79661013747",
  },

  // --- Соцсети для Open Graph ---
  url: "https://your-domain.ru",
  ogImage: "/opengraph-image",

  // --- Статистика (hero секция) ---
  stats: {
    students: "200+",
    years: "5+",
    subscribers: "15K+",
  },
};

// --- Пакет "Всё включено" ---
export const PACKAGE = {
  price: 8900,
  currency: "₽",
};

// --- Услуги и цены ---
export const SERVICES = [
  {
    id: "admission",
    num: "01",
    icon: "🎓",
    price: 1500,
    currency: "₽",
    popular: false,
    title: { ru: "Консультация для поступающих", en: "Admission Consultation", uz: "Kiruvchilar uchun maslahat", tj: "Машварат барои дохилшавандагон", ky: "Кирүүчүлөр үчүн кеңеш", kz: "Түсушілерге кеңес" },
    desc: { ru: "Помогу разобраться с поступлением в российский вуз: квота, документы, сроки, подводные камни. Всё по делу.", en: "I'll help you navigate enrolling in a Russian university: quota, documents, deadlines, pitfalls. All the essentials.", uz: "Rossiya universitetiga kirish bo'yicha yordam beraman: kvota, hujjatlar, muddatlar.", tj: "Кӯмак дар дохил шудан ба донишгоҳи Русия: квота, ҳуҷҷатҳо, мӯҳлатҳо.", ky: "Россия университетине кирүүдө жардам: квота, документтер, мөөнөттөр.", kz: "Ресей университетіне түсуде көмек: квота, құжаттар, мерзімдер." },
  },
  {
    id: "adaptation",
    num: "02",
    icon: "🏠",
    price: 1500,
    currency: "₽",
    popular: true,
    title: { ru: "Адаптация во время учёбы", en: "Adapting to Student Life", uz: "O'qish davrida moslashish", tj: "Мутобиқшавӣ дар давраи таҳсил", ky: "Окуу учурунда ыңгайлашуу", kz: "Оқу кезіндегі бейімделу" },
    desc: { ru: "Жильё, транспорт, медицина, банки, SIM-карта, регистрация, культура — всё о жизни студента в Новосибирске.", en: "Housing, transport, healthcare, banks, SIM card, registration, culture — everything about student life in Novosibirsk.", uz: "Uy-joy, transport, tibbiyot, banklar, SIM-karta, ro'yxatdan o'tish, madaniyat — Novosibirskda talaba hayoti haqida hamma narsa.", tj: "Манзил, нақлиёт, тиб, бонкҳо, SIM-карта, бақайдгирӣ — ҳама чиз дар бораи зиндагии донишҷӯ.", ky: "Турак-жай, транспорт, медицина, банктар, SIM-карта — студенттин жашоосу жөнүндө баары.", kz: "Тұрғын үй, көлік, медицина, банктер, SIM-карта — студент өмірі туралы бәрі." },
  },
  {
    id: "choice",
    num: "03",
    icon: "🗺️",
    price: 1500,
    currency: "₽",
    popular: false,
    title: { ru: "Выбор города и вуза", en: "City & University Selection", uz: "Shahar va universitet tanlash", tj: "Интихоби шаҳр ва донишгоҳ", ky: "Шаар жана университет тандоо", kz: "Қала және университет таңдау" },
    desc: { ru: "Сравниваем города, университеты, направления. Помогаю принять осознанное решение на основе ваших целей.", en: "We compare cities, universities, and programmes based on your goals.", uz: "Shaharlar, universitetlar va yo'nalishlarni birga taqqoslaymiz.", tj: "Муқоисаи шаҳрҳо, донишгоҳҳо ва самтҳо.", ky: "Шаарларды, университеттерди жана багыттарды салыштырабыз.", kz: "Қалалар, университеттер мен бағыттарды бірге салыстырамыз." },
  },
];

// --- Цвета бренда ---
export const BRAND = {
  gold: "#C9A84C",
  goldLight: "#E8C97A",
  dark: "#0A0A0A",
  dark2: "#111111",
};
