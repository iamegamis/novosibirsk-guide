"use client";

import { motion } from "framer-motion";
import type { Lang } from "@/lib/types";

const CONTENT: Record<Lang, {
  eye: string;
  title: string;
  accent: string;
  reviews: { name: string; country: string; flag: string; text: string; service: string }[];
}> = {
  ru: {
    eye: "Отзывы",
    title: "Что говорят",
    accent: "студенты",
    reviews: [
      {
        name: "Абдулла Рашидов",
        country: "Узбекистан",
        flag: "🇺🇿",
        text: "Исломжон помог мне поступить в НГТУ — я даже не знал, с чего начать. Объяснил каждый шаг, помог с документами. Поступил с первого раза!",
        service: "Поступление в университет",
      },
      {
        name: "Нилуфар Каримова",
        country: "Таджикистан",
        flag: "🇹🇯",
        text: "Благодаря консультации нашла жильё, оформила регистрацию и открыла счёт в банке за одну неделю. Очень грамотный и отзывчивый человек.",
        service: "Адаптация в России",
      },
      {
        name: "Айгерим Сатова",
        country: "Казахстан",
        flag: "🇰🇿",
        text: "Долго выбирала между Москвой и Новосибирском. Исломжон всё разложил по полочкам — плюсы, минусы, стоимость жизни. Очень помог с выбором!",
        service: "Выбор города и вуза",
      },
      {
        name: "Бахтияр Исаков",
        country: "Кыргызстан",
        flag: "🇰🇬",
        text: "Реально живой человек, а не бот. Ответил на все вопросы, даже в 23:00. Помог с квотой Минобрнауки — прошёл без проблем.",
        service: "Поступление в университет",
      },
      {
        name: "Санжар Юлдашев",
        country: "Узбекистан",
        flag: "🇺🇿",
        text: "Первое время было очень страшно. Исломжон объяснил всё про транспорт, карту, как вести себя в вузе. Чувствовал себя намного увереннее.",
        service: "Адаптация в России",
      },
      {
        name: "Малика Турсунова",
        country: "Таджикистан",
        flag: "🇹🇯",
        text: "Посмотрела блог — подписалась, написала — ответил сразу. Консультация была очень подробной. Рекомендую всем, кто едет в Россию учиться.",
        service: "Выбор города и вуза",
      },
    ],
  },
  en: {
    eye: "Reviews",
    title: "What",
    accent: "students say",
    reviews: [
      {
        name: "Abdullah Rashidov",
        country: "Uzbekistan",
        flag: "🇺🇿",
        text: "Islomjon helped me enroll at NSTU — I didn't even know where to start. He explained every step and helped with documents. Got in on the first try!",
        service: "University Admission",
      },
      {
        name: "Nilufar Karimova",
        country: "Tajikistan",
        flag: "🇹🇯",
        text: "Thanks to the consultation, I found housing, completed registration, and opened a bank account in one week. Very knowledgeable and responsive.",
        service: "Adapting to Russia",
      },
      {
        name: "Aigerim Satova",
        country: "Kazakhstan",
        flag: "🇰🇿",
        text: "I was torn between Moscow and Novosibirsk. Islomjon laid everything out clearly — pros, cons, cost of living. Really helped me decide!",
        service: "City & University Selection",
      },
      {
        name: "Bakhtiyar Isakov",
        country: "Kyrgyzstan",
        flag: "🇰🇬",
        text: "A real person, not a bot. Answered all questions even at 11 PM. Helped with the Ministry quota — got through without any issues.",
        service: "University Admission",
      },
      {
        name: "Sanzhar Yuldashev",
        country: "Uzbekistan",
        flag: "🇺🇿",
        text: "It was very scary at first. Islomjon explained everything about transport, the city card, and university life. I felt much more confident.",
        service: "Adapting to Russia",
      },
      {
        name: "Malika Tursunova",
        country: "Tajikistan",
        flag: "🇹🇯",
        text: "Watched the blog, subscribed, messaged — he replied immediately. The consultation was very detailed. Recommended for everyone going to study in Russia.",
        service: "City & University Selection",
      },
    ],
  },
  uz: {
    eye: "Sharhlar",
    title: "Talabalar nima",
    accent: "deyishadi",
    reviews: [
      {
        name: "Abdulla Rashidov",
        country: "O'zbekiston",
        flag: "🇺🇿",
        text: "Islomjon NGTU'ga kirishimga yordam berdi — qayerdan boshlashni bilmay qoldim. Har bir qadamni tushuntirdi, hujjatlarga yordam berdi. Birinchi urinishda kirdim!",
        service: "Universitetga kirish",
      },
      {
        name: "Nilufar Karimova",
        country: "Tojikiston",
        flag: "🇹🇯",
        text: "Maslahat tufayli bir haftada uy topdim, ro'yxatdan o'tdim va bank hisobi ochdim. Juda bilimli va mehribon inson.",
        service: "Rossiyaga moslashish",
      },
      {
        name: "Aygerim Satova",
        country: "Qozog'iston",
        flag: "🇰🇿",
        text: "Moskva va Novosibirsk o'rtasida qoldim. Islomjon hamma narsani tushuntirdi — artiqchaliklari, kamchiliklari, turmush xarajatlari.",
        service: "Shahar va universitet tanlash",
      },
      {
        name: "Baxtiyar Isakov",
        country: "Qirg'iziston",
        flag: "🇰🇬",
        text: "Haqiqiy odam, bot emas. Hamma savollarimga kech soat 23:00 da ham javob berdi. Kvotadan o'tishga yordam berdi.",
        service: "Universitetga kirish",
      },
      {
        name: "Sanjar Yuldashev",
        country: "O'zbekiston",
        flag: "🇺🇿",
        text: "Avvaliga juda qo'rquvli edi. Islomjon transport, karta, oliy o'quv yurtidagi xulq-atvor haqida hamma narsani tushuntirdi.",
        service: "Rossiyaga moslashish",
      },
      {
        name: "Malika Tursunova",
        country: "Tojikiston",
        flag: "🇹🇯",
        text: "Blogni ko'rdim — obuna bo'ldim, yozdim — darhol javob berdi. Maslahat juda batafsil bo'ldi. Rossiyaga o'qishga ketayotganlarga tavsiya qilaman.",
        service: "Shahar va universitet tanlash",
      },
    ],
  },
  tj: {
    eye: "Шарҳҳо",
    title: "Донишҷӯён",
    accent: "чӣ мегӯянд",
    reviews: [
      {
        name: "Абдулло Рашидов",
        country: "Ӯзбекистон",
        flag: "🇺🇿",
        text: "Исломҷон ба ман дар дохил шудан ба НГТУ кӯмак кард. Ҳар қадамро шарҳ дод ва бо ҳуҷҷатҳо кӯмак кард. Бори аввал дохил шудам!",
        service: "Дохил шудан ба донишгоҳ",
      },
      {
        name: "Нилуфар Каримова",
        country: "Тоҷикистон",
        flag: "🇹🇯",
        text: "Аз ҳисоби маслиҳат дар як ҳафта манзил ёфтам, бақайдгирӣ гузаштам ва дар бонк ҳисоб кушодам. Хеле зирак ва меҳрубон.",
        service: "Мутобиқшавӣ дар Русия",
      },
      {
        name: "Айгерим Сатова",
        country: "Қазоқистон",
        flag: "🇰🇿",
        text: "Байни Москва ва Новосибирск монда будам. Исломҷон ҳамаро равшан кард — бартариҳо, камбудиҳо, арзиши зиндагӣ.",
        service: "Интихоби шаҳр ва донишгоҳ",
      },
      {
        name: "Баҳтиёр Исаков",
        country: "Қирғизистон",
        flag: "🇰🇬",
        text: "Инсони воқеӣ, на бот. Ба ҳама саволҳо ҳатто соати 23:00 ҷавоб дод. Дар квота кӯмак кард.",
        service: "Дохил шудан ба донишгоҳ",
      },
      {
        name: "Санҷар Юлдашев",
        country: "Ӯзбекистон",
        flag: "🇺🇿",
        text: "Аввал хеле тарсида будам. Исломҷон дар бораи нақлиёт, корт ва рафтор дар донишгоҳ ҳамаро шарҳ дод.",
        service: "Мутобиқшавӣ дар Русия",
      },
      {
        name: "Малика Турсунова",
        country: "Тоҷикистон",
        flag: "🇹🇯",
        text: "Блогро дидам — обуна шудам, навиштам — дарҳол ҷавоб дод. Маслиҳат хеле муфассал буд. Ба ҳама тавсия медиҳам.",
        service: "Интихоби шаҳр ва донишгоҳ",
      },
    ],
  },
  ky: {
    eye: "Пикирлер",
    title: "Студенттер",
    accent: "эмне дейт",
    reviews: [
      {
        name: "Абдулла Рашидов",
        country: "Өзбекстан",
        flag: "🇺🇿",
        text: "Исломжон НГТУга кирүүмө жардам берди — кайдан баштаарымды билбедим. Ар бир кадамды түшүндүрдү, документтерге жардам берди. Биринчи жолу кирдим!",
        service: "Университетке кирүү",
      },
      {
        name: "Нилуфар Каримова",
        country: "Тажикстан",
        flag: "🇹🇯",
        text: "Кеңешке ыраазы болуп, бир жуманын ичинде турак таптым, катталдым жана банк эсеп ачтым. Абдан билимдүү жана жооптуу адам.",
        service: "Россияга ыңгайлашуу",
      },
      {
        name: "Айгерим Сатова",
        country: "Казакстан",
        flag: "🇰🇿",
        text: "Москва менен Новосибирскти тандап жатыптым. Исломжон баарын ачык түшүндүрдү — артыкчылыктары, кемчиликтери, жашоо баасы.",
        service: "Шаар жана университет тандоо",
      },
      {
        name: "Бахтияр Исаков",
        country: "Кыргызстан",
        flag: "🇰🇬",
        text: "Чыныгы адам, бот эмес. Бардык суроолорума кечки саат 23:00 да да жооп берди. Квотадан өтүүгө жардам берди.",
        service: "Университетке кирүү",
      },
      {
        name: "Санжар Юлдашев",
        country: "Өзбекстан",
        flag: "🇺🇿",
        text: "Башында абдан коркунучтуу болду. Исломжон транспорт, карта жана университеттеги жүрүм-турум жөнүндө баарын түшүндүрдү.",
        service: "Россияга ыңгайлашуу",
      },
      {
        name: "Малика Турсунова",
        country: "Тажикстан",
        flag: "🇹🇯",
        text: "Блогду көрдүм — жазылдым, жаздым — дароо жооп берди. Кеңеш өтө майда-чүйдөсүнө чейин болду. Россияга окуй барган баарына сунуштайм.",
        service: "Шаар жана университет тандоо",
      },
    ],
  },
  kz: {
    eye: "Пікірлер",
    title: "Студенттер",
    accent: "не дейді",
    reviews: [
      {
        name: "Абдулла Рашидов",
        country: "Өзбекстан",
        flag: "🇺🇿",
        text: "Исломжон НГТУ-ға түсуіме көмектесті — қайдан бастарымды білмедім. Әр қадамды түсіндірді, құжаттарға көмектесті. Бірінші рет түстім!",
        service: "Университетке түсу",
      },
      {
        name: "Нилуфар Каримова",
        country: "Тәжікстан",
        flag: "🇹🇯",
        text: "Кеңестің арқасында бір аптада тұрғын үй таптым, тіркелдім және банк шоты аштым. Өте білімді және жауапты адам.",
        service: "Ресейге бейімделу",
      },
      {
        name: "Айгерим Сатова",
        country: "Қазақстан",
        flag: "🇰🇿",
        text: "Мәскеу мен Новосибирскті таңдауда қалдым. Исломжон бәрін нақты түсіндірді — артықшылықтары, кемшіліктері, тұрмыс бағасы.",
        service: "Қала және университет таңдау",
      },
      {
        name: "Бахтияр Исаков",
        country: "Қырғызстан",
        flag: "🇰🇬",
        text: "Нақты адам, бот емес. Барлық сұрақтарыма кеш 23:00-де де жауап берді. Квотадан өтуге көмектесті.",
        service: "Университетке түсу",
      },
      {
        name: "Санжар Юлдашев",
        country: "Өзбекстан",
        flag: "🇺🇿",
        text: "Басында өте қорқынышты болды. Исломжон көлік, карта және университеттегі мінез-құлық туралы бәрін түсіндірді.",
        service: "Ресейге бейімделу",
      },
      {
        name: "Малика Турсунова",
        country: "Тәжікстан",
        flag: "🇹🇯",
        text: "Блогты көрдім — жазылдым, жаздым — бірден жауап берді. Кеңес өте егжей-тегжейлі болды. Ресейге оқуға баратындардың барлығына ұсынамын.",
        service: "Қала және университет таңдау",
      },
    ],
  },
};

export default function Reviews({ lang }: { lang: Lang }) {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="text-[var(--gold)] text-[14px]">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-[14px] text-[var(--muted)] leading-[1.8] flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Service tag */}
              <span
                className="text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full self-start"
                style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)", border: "0.5px solid rgba(201,168,76,0.25)" }}
              >
                {r.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-[var(--glass-border)]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[18px] shrink-0"
                  style={{ background: "rgba(201,168,76,0.08)", border: "0.5px solid rgba(201,168,76,0.2)" }}
                >
                  {r.flag}
                </div>
                <div>
                  <p className="text-[13px] text-[var(--text)] font-medium">{r.name}</p>
                  <p className="text-[11px] text-[var(--muted)]">{r.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
