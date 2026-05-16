"use client";

import { motion } from "framer-motion";
import type { Lang } from "@/lib/types";

const CONTENT: Record<Lang, {
  eye: string; title: string; accent: string;
  p1: string; p2: string; p3: string; cta: string;
  timeline: { year: string; text: string }[];
  trust: { icon: string; label: string }[];
}> = {
  ru: {
    eye: "Обо мне", title: "Мой путь в", accent: "Россию",
    p1: "Я переехал в Россию несколько лет назад с одной сумкой и большими планами. Первые месяцы были полным хаосом — незнание языка, непонимание системы, культурный шок.",
    p2: "Сегодня я помогаю сотням иностранных студентов пройти этот же путь намного легче. Через свой блог и личные консультации я делюсь реальным опытом, а не красивыми картинками.",
    p3: "Новосибирск — мой город. Я знаю его вдоль и поперёк: от лучших кафе до тонкостей поступления в НГУ и НГТУ.",
    cta: "Записаться на консультацию",
    timeline: [
      { year: "Переезд", text: "Прилетел в Новосибирск с одной сумкой. Никаких знакомых, минимум русского." },
      { year: "Учёба", text: "Поступил в университет. Разобрался в системе изнутри." },
      { year: "Блог", text: "Начал снимать контент о жизни иностранца. Аудитория начала расти." },
      { year: "Сейчас", text: "Консультирую студентов, веду блог, сотрудничаю с брендами." },
    ],
    trust: [
      { icon: "🎓", label: "Реальный опыт" },
      { icon: "🌍", label: "Понимаю вашу ситуацию" },
      { icon: "📱", label: "На связи 24/7" },
      { icon: "⭐", label: "200+ довольных клиентов" },
    ],
  },
  en: {
    eye: "About me", title: "My journey to", accent: "Russia",
    p1: "I moved to Russia a few years ago with one bag and big plans. The first months were total chaos — no language skills, no understanding of the system, culture shock.",
    p2: "Today I help hundreds of international students navigate the same journey much more easily. Through my blog and personal consultations, I share real experience, not pretty pictures.",
    p3: "Novosibirsk is my city. I know it inside and out — from the best cafés to the details of enrolling in NSU and NSTU.",
    cta: "Book a consultation",
    timeline: [
      { year: "Arrival", text: "Flew to Novosibirsk with one bag. No contacts, minimal Russian." },
      { year: "Study", text: "Enrolled at university. Learned the system from the inside." },
      { year: "Blog", text: "Started creating content about life as a foreigner. Audience grew fast." },
      { year: "Now", text: "Consulting students, running a blog, partnering with brands." },
    ],
    trust: [
      { icon: "🎓", label: "Real experience" },
      { icon: "🌍", label: "I understand your situation" },
      { icon: "📱", label: "Available 24/7" },
      { icon: "⭐", label: "200+ happy clients" },
    ],
  },
  uz: {
    eye: "Men haqimda", title: "Rossiyaga", accent: "yo'lim",
    p1: "Bir necha yil oldin bitta sumka va katta rejalar bilan Rossiyaga ko'chib keldim. Dastlabki oylar to'liq tartibsizlik edi — til bilmaslik, tizimni tushunmaslik, madaniy zarba.",
    p2: "Bugun men yuzlab xorijiy talabalarga bu yo'lni ancha osonroq bosib o'tishga yordam beraman.",
    p3: "Novosibirsk — mening shahrim. Men uni ichidan tashqarisiga qadar bilaman.",
    cta: "Konsultatsiyaga yozilish",
    timeline: [
      { year: "Ko'chish", text: "Bitta sumka bilan Novosibirskka uchib keldim." },
      { year: "O'qish", text: "Universitetga kirdi. Tizimni ichidan o'rgandim." },
      { year: "Blog", text: "Xorijiy talaba hayoti haqida kontent yaratishni boshladim." },
      { year: "Hozir", text: "Talabalarni maslahat beraman, blog yuritaman." },
    ],
    trust: [
      { icon: "🎓", label: "Haqiqiy tajriba" },
      { icon: "🌍", label: "Vaziyatingizni tushunaman" },
      { icon: "📱", label: "24/7 aloqada" },
      { icon: "⭐", label: "200+ mamnun mijozlar" },
    ],
  },
  tj: {
    eye: "Дар бораи ман", title: "Роҳи ман ба", accent: "Русия",
    p1: "Чанд сол пеш бо як чамадон ва нақшаҳои бузург ба Русия кӯч бастам. Моҳҳои аввал пурихтилоф буданд.",
    p2: "Имрӯз ман ба садҳо донишҷӯёни хориҷӣ кӯмак мекунам, ки ин роҳро осонтар тай кунанд.",
    p3: "Новосибирск шаҳри ман аст. Ман онро аз дарун ва берун мешиносам.",
    cta: "Барои маслиҳат сабт шавед",
    timeline: [
      { year: "Кӯч", text: "Бо як чамадон ба Новосибирск парвоз кардам." },
      { year: "Таҳсил", text: "Ба донишгоҳ дохил шудам. Системаро аз дарун омӯхтам." },
      { year: "Блог", text: "Контент дар бораи ҳаёти хориҷӣ сохтанро оғоз кардам." },
      { year: "Ҳоло", text: "Донишҷӯёнро маслиҳат медиҳам, блог мебарам." },
    ],
    trust: [
      { icon: "🎓", label: "Таҷрибаи воқеӣ" },
      { icon: "🌍", label: "Вазъияти шуморо мефаҳмам" },
      { icon: "📱", label: "24/7 дар тамос" },
      { icon: "⭐", label: "200+ мизоҷони хушнуд" },
    ],
  },
  ky: {
    eye: "Мен жөнүндө", title: "Россияга", accent: "жолум",
    p1: "Бир нече жыл мурун бир баштык жана чоң пландар менен Россияга көчтүм. Алгачкы айлар толук хаос болду.",
    p2: "Бүгүн мен жүздөгөн чет элдик студенттерге бул жолду алда канча жеңил баштан кечиришине жардам берем.",
    p3: "Новосибирск — менин шаарым. Мен аны ичинен тышкарысына чейин билем.",
    cta: "Консультацияга жазылуу",
    timeline: [
      { year: "Көчүү", text: "Бир баштык менен Новосибирскке учуп кеттим." },
      { year: "Окуу", text: "Университетке кирдим. Системаны ичинен үйрөндүм." },
      { year: "Блог", text: "Чет элдик студент жашоосу жөнүндө контент жасай баштадым." },
      { year: "Азыр", text: "Студенттерди кеңешем, блог жүргүзөм." },
    ],
    trust: [
      { icon: "🎓", label: "Чыныгы тажрыйба" },
      { icon: "🌍", label: "Жагдайыңызды түшүнөм" },
      { icon: "📱", label: "24/7 байланышта" },
      { icon: "⭐", label: "200+ бактылуу кардарлар" },
    ],
  },
  kz: {
    eye: "Мен туралы", title: "Ресейге", accent: "жолым",
    p1: "Бірнеше жыл бұрын бір сөмкемен және үлкен жоспарлармен Ресейге көштім. Алғашқы айлар толық хаос болды.",
    p2: "Бүгін мен жүздеген шетелдік студенттерге бұл жолды анағұрлым оңай өтуге көмектесемін.",
    p3: "Новосибирск — менің қалам. Мен оны ішінен сыртына дейін білемін.",
    cta: "Кеңеске жазылу",
    timeline: [
      { year: "Көшу", text: "Бір сөмкемен Новосибирскке ұшып кеттім." },
      { year: "Оқу", text: "Университетке оқуға түстім. Жүйені ішінен үйрендім." },
      { year: "Блог", text: "Шетелдік студент өмірі туралы контент жасай бастадым." },
      { year: "Қазір", text: "Студенттерге кеңес беремін, блог жүргіземін." },
    ],
    trust: [
      { icon: "🎓", label: "Нақты тәжірибе" },
      { icon: "🌍", label: "Жағдайыңызды түсінемін" },
      { icon: "📱", label: "24/7 байланыста" },
      { icon: "⭐", label: "200+ бақытты клиенттер" },
    ],
  },
};

export default function About({ lang, setSection }: { lang: Lang; setSection: (s: string) => void }) {
  const c = CONTENT[lang];

  return (
    <section className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="eyebrow">{c.eye}</p>
          <h2 className="section-title text-[clamp(36px,4.5vw,58px)]">
            {c.title}{" "}<em className="not-italic gold-gradient">{c.accent}</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[16px] text-[var(--muted)] leading-[1.85] mb-5">{c.p1}</p>
            <p className="text-[16px] text-[var(--muted)] leading-[1.85] mb-5">{c.p2}</p>
            <p className="text-[16px] text-[var(--muted)] leading-[1.85] mb-10">{c.p3}</p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {c.trust.map(({ icon, label }) => (
                <div key={label} className="glass flex items-center gap-3 p-4">
                  <span className="text-xl">{icon}</span>
                  <span className="text-[13px] text-[var(--muted)]">{label}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSection("services")}
              className="btn-gold"
            >
              {c.cta}
            </motion.button>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {c.timeline.map(({ year, text }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 pb-8 relative"
              >
                {/* Line */}
                {i < c.timeline.length - 1 && (
                  <div className="absolute left-4 top-8 bottom-0 w-px"
                    style={{ background: "var(--glass-border)" }} />
                )}
                {/* Dot */}
                <div
                  className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 text-[11px]"
                  style={{ border: "0.5px solid var(--gold)", background: "rgba(201,168,76,0.08)", color: "var(--gold)" }}
                >
                  {i + 1}
                </div>
                <div className="pt-1">
                  <p className="text-[11px] tracking-[0.18em] text-[var(--gold)] uppercase mb-2">{year}</p>
                  <p className="text-[14px] text-[var(--muted)] leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
