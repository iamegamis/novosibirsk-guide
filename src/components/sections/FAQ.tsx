"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { Lang } from "@/lib/types";

interface FAQItem {
  q: string;
  a: string;
}

const CONTENT: Record<Lang, { eye: string; title: string; accent: string; items: FAQItem[] }> = {
  ru: {
    eye: "FAQ",
    title: "Частые",
    accent: "вопросы",
    items: [
      {
        q: "С чего начать, если хочу учиться в России?",
        a: "Первый шаг — определиться с направлением и городом. Затем изучить варианты поступления: государственная квота Минобрнауки (бесплатно), платное обучение или академический обмен. Квота открывается в январе на сайте russia.study. На консультации разберём именно вашу ситуацию.",
      },
      {
        q: "Нужно ли знать русский язык для поступления?",
        a: "Для бюджетного обучения базовый русский очень желателен. Большинство университетов проводят вступительные испытания на русском. Есть программы с подготовительным годом — год учишь язык, потом поступаешь на основную программу.",
      },
      {
        q: "Сколько стоит жизнь студента в Новосибирске?",
        a: "С общежитием (1500–3000 ₽/мес) реально жить на 20 000–25 000 ₽ в месяц. Это включает еду, транспорт, связь и бытовые расходы. Новосибирск заметно дешевле Москвы и Питера.",
      },
      {
        q: "Как получить государственную квоту?",
        a: "Заявки подаются на сайте russia.study с января по март. Нужно выбрать до 6 университетов, загрузить аттестат с переводом и медсправки. После отбора — онлайн-испытания через посольство или специальный центр. Помогаю пройти этот процесс от начала до конца.",
      },
      {
        q: "Чем ты отличаешься от других, кто даёт советы?",
        a: "Я сам прошёл этот путь — приехал с одной сумкой, поступил, адаптировался. Не рассказываю то, что прочитал в интернете. Даю реальный опыт, актуальные контакты и честные ответы без прикрас.",
      },
      {
        q: "Как проходит консультация?",
        a: "Всё онлайн — в Telegram или WhatsApp. Продолжительность 30–60 минут. Перед консультацией ты присылаешь вопросы, я готовлюсь. После — краткое резюме с конкретными шагами.",
      },
      {
        q: "Можно ли получить помощь уже после приезда?",
        a: "Да, это одна из самых популярных консультаций. Регистрация, банк, SIM-карта, поиск жилья, медицина — помогаю разобраться со всем, что нужно первое время.",
      },
      {
        q: "Как оплатить консультацию?",
        a: "Оплата через СБП на номер +7 966 101 37 47 или Telegram Stars прямо в боте. После оплаты пишешь мне — назначаем время.",
      },
    ],
  },
  en: {
    eye: "FAQ",
    title: "Common",
    accent: "questions",
    items: [
      {
        q: "Where do I start if I want to study in Russia?",
        a: "First, decide on your field of study and city. Then explore enrollment options: the Ministry of Education quota (free), paid tuition, or academic exchange. The quota opens in January at russia.study. In a consultation we'll go through your specific situation.",
      },
      {
        q: "Do I need to know Russian to enroll?",
        a: "Basic Russian is strongly recommended for state-funded programs. Most universities hold entrance tests in Russian. There are preparatory year programs — you study the language for a year, then enroll in the main program.",
      },
      {
        q: "How much does student life cost in Novosibirsk?",
        a: "With a dorm (1,500–3,000 ₽/month) you can live on 20,000–25,000 ₽/month. This covers food, transport, phone, and everyday expenses. Novosibirsk is noticeably cheaper than Moscow or St. Petersburg.",
      },
      {
        q: "How do I get the government quota?",
        a: "Applications are submitted at russia.study from January to March. You select up to 6 universities, upload your diploma with translation and medical certificates. Then online tests through the embassy or a special center. I help you through the whole process.",
      },
      {
        q: "What makes you different from others giving advice?",
        a: "I went through this myself — arrived with one bag, enrolled, adapted. I don't share things I read online. I give real experience, up-to-date contacts, and honest answers.",
      },
      {
        q: "How does a consultation work?",
        a: "Everything is online — via Telegram or WhatsApp. Duration: 30–60 minutes. You send your questions beforehand, I prepare. Afterwards I send a brief summary with concrete next steps.",
      },
      {
        q: "Can I get help after I've already arrived?",
        a: "Yes, this is one of the most popular consultations. Registration, bank account, SIM card, housing search, healthcare — I help you sort out everything you need in the first weeks.",
      },
      {
        q: "How do I pay for a consultation?",
        a: "Payment via SBP to +7 966 101 37 47 or Telegram Stars directly in the bot. After payment, message me and we'll set a time.",
      },
    ],
  },
  uz: {
    eye: "FAQ",
    title: "Ko'p so'raladigan",
    accent: "savollar",
    items: [
      {
        q: "Rossiyada o'qishni xohlasam, qayerdan boshlashim kerak?",
        a: "Birinchi qadam — yo'nalish va shaharni aniqlash. Keyin kirish imkoniyatlarini o'rganish: Ta'lim vazirligi kvotasi (bepul), pullik ta'lim yoki akademik almashinuv. Kvota yanvarda russia.study saytida ochiladi.",
      },
      {
        q: "Kirish uchun rus tilini bilish kerakmi?",
        a: "Davlat tomonidan moliyalashtiriladigan dasturlar uchun asosiy rus tili juda tavsiya etiladi. Ko'pgina universitetlar rus tilida kirish imtihonlarini o'tkazadi. Tayyorlov yili dasturlari ham mavjud.",
      },
      {
        q: "Novosibirskda talaba hayoti qancha turadi?",
        a: "Yotoqxona bilan (1500–3000 ₽/oy) oyiga 20 000–25 000 ₽ ga yashash mumkin. Bu oziq-ovqat, transport, aloqa va kundalik xarajatlarni o'z ichiga oladi.",
      },
      {
        q: "Davlat kvotasini qanday olish mumkin?",
        a: "Arizalar yanvardan martgacha russia.study saytida qabul qilinadi. 6 tagacha universitetni tanlaysiz, attestat tarjimasi va tibbiy ma'lumotnomalarni yuklaysiz. Men bu jarayonni boshidan oxirigacha o'tishga yordam beraman.",
      },
      {
        q: "Konsultatsiya qanday o'tadi?",
        a: "Hammasi onlayn — Telegram yoki WhatsApp orqali. Davomiyligi 30–60 daqiqa. Siz savollarni oldindan yuborsangiz, men tayyorlanaman.",
      },
      {
        q: "Kelgandan keyin ham yordam olsa bo'ladimi?",
        a: "Ha, bu eng mashhur konsultatsiyalardan biri. Ro'yxatdan o'tish, bank, SIM-karta, uy-joy izlash — birinchi haftalarda kerakli hamma narsani hal qilishga yordam beraman.",
      },
      {
        q: "Konsultatsiya uchun qanday to'lash mumkin?",
        a: "To'lov SBP orqali +7 966 101 37 47 raqamiga yoki botda Telegram Stars orqali. To'lovdan so'ng menga yozing — vaqt belgilaymiz.",
      },
      {
        q: "Sen boshqa maslahat beruvchilardan nima bilan farq qilasan?",
        a: "Men bu yo'ldan o'zim o'tganman — bitta sumka bilan keldim, o'qishga kirdim, moslashdim. Internetdan o'qiganlarimni emas, haqiqiy tajribamni ulashaman.",
      },
    ],
  },
  tj: {
    eye: "FAQ",
    title: "Саволҳои",
    accent: "маъмул",
    items: [
      {
        q: "Агар хоҳам дар Русия таҳсил кунам, аз куҷо оғоз кунам?",
        a: "Қадами аввал — самт ва шаҳрро муайян кардан. Сипас имконоти дохилшавиро омӯхтан: квотаи Вазорат (ройгон), таҳсили пулӣ ё мубодилаи академӣ. Квота дар январ дар russia.study кушода мешавад.",
      },
      {
        q: "Оё барои дохил шудан донистани забони русӣ лозим аст?",
        a: "Барои барномаҳои давлатӣ забони русии асосӣ хеле тавсия дода мешавад. Аксари донишгоҳҳо санҷишҳои дохилшавиро ба забони русӣ мегузаронанд.",
      },
      {
        q: "Зиндагии донишҷӯ дар Новосибирск чӣ қадар арзиш дорад?",
        a: "Бо хобгоҳ (1500–3000 ₽/моҳ) метавон дар як моҳ 20 000–25 000 ₽ зиндагӣ кард.",
      },
      {
        q: "Чӣ тавр квотаи давлатӣ гирифтан мумкин аст?",
        a: "Аризаҳо аз январ то март дар russia.study пешниҳод мешаванд. То 6 донишгоҳро интихоб мекунед, аттестат бо тарҷума ва тасдиқҳои тиббӣ бор карда мешавад.",
      },
      {
        q: "Машварат чӣ гуна мегузарад?",
        a: "Ҳама чиз онлайн аст — тавассути Telegram ё WhatsApp. Давомнокӣ 30–60 дақиқа. Саволҳоро пешакӣ мефиристед, ман омодагӣ мебинам.",
      },
      {
        q: "Оё пас аз омадан ҳам метавон кӯмак гирифт?",
        a: "Ҳа, ин яке аз машваратҳои маъмул аст. Бақайдгирӣ, бонк, SIM-карта, ёфтани манзил — дар ҳафтаҳои аввал ба ҳама чиз кӯмак мекунам.",
      },
      {
        q: "Барои машварат чӣ гуна пардохт кардан мумкин аст?",
        a: "Пардохт тавассути СБП ба рақами +7 966 101 37 47 ё Telegram Stars. Пас аз пардохт ба ман нависед.",
      },
      {
        q: "Шумо аз дигарон чӣ фарқ доред?",
        a: "Ман худам ин роҳро тай кардам — бо як чамадон омадам, дохил шудам, мутобиқ шудам. Таҷрибаи воқеӣ медиҳам.",
      },
    ],
  },
  ky: {
    eye: "FAQ",
    title: "Жыш берилүүчү",
    accent: "суроолор",
    items: [
      {
        q: "Россияда окугум келсе, кайдан баштайм?",
        a: "Биринчи кадам — багыт жана шаарды аныктоо. Андан кийин кирүү мүмкүнчүлүктөрүн изилдөө: Министрлик квотасы (акысыз), акылуу окутуу же академиялык алмашуу. Квота январда russia.study сайтында ачылат.",
      },
      {
        q: "Кирүү үчүн орус тилин билүү керекпи?",
        a: "Мамлекеттик программалар үчүн негизги орус тили абдан сунушталат. Көпчүлүк университеттер орус тилинде кирүү сынактарын өткөрөт.",
      },
      {
        q: "Новосибирскте студент жашоосу канча турат?",
        a: "Жатакана менен (1500–3000 ₽/ай) айына 20 000–25 000 ₽ га жашоого болот.",
      },
      {
        q: "Мамлекеттик квотаны кантип алса болот?",
        a: "Арыздар январдан мартка чейин russia.study сайтына берилет. 6га чейин университетти тандайсыз, аттестат которму жана медициналык маалымкаттар жүктөлөт.",
      },
      {
        q: "Консультация кандай өтөт?",
        a: "Баары онлайн — Telegram же WhatsApp аркылуу. Убактысы 30–60 мүнөт. Суроолорду алдын ала жибересиз, мен даярданам.",
      },
      {
        q: "Келгенден кийин да жардам алса болобу?",
        a: "Ооба, бул эң популярдуу консультациялардын бири. Каттоо, банк, SIM-карта, турак жай издөө — биринчи жумаларда жардам берем.",
      },
      {
        q: "Консультация үчүн кантип төлөсө болот?",
        a: "Төлөм СБП аркылуу +7 966 101 37 47 номерине же ботто Telegram Stars аркылуу. Төлөмдөн кийин жазыңыз.",
      },
      {
        q: "Сен башкалардан эмнеси менен айырмаланасың?",
        a: "Мен бул жолдон өзүм өттүм — бир баштык менен келдим, киrdim, ыңгайлаштым. Реалдуу тажрыйба берем.",
      },
    ],
  },
  kz: {
    eye: "FAQ",
    title: "Жиі қойылатын",
    accent: "сұрақтар",
    items: [
      {
        q: "Ресейде оқығым келсе, қайдан бастаймын?",
        a: "Бірінші қадам — бағыт пен қаланы анықтау. Одан кейін түсу мүмкіндіктерін зерттеу: Министрлік квотасы (тегін), ақылы оқу немесе академиялық алмасу. Квота қаңтарда russia.study сайтында ашылады.",
      },
      {
        q: "Түсу үшін орыс тілін білу керек пе?",
        a: "Мемлекеттік бағдарламалар үшін негізгі орыс тілі өте ұсынылады. Көптеген университеттер орыс тілінде кіру сынақтарын өткізеді.",
      },
      {
        q: "Новосибирскте студент өмірі қанша тұрады?",
        a: "Жатақханамен (1500–3000 ₽/ай) айына 20 000–25 000 ₽-ге өмір сүруге болады.",
      },
      {
        q: "Мемлекеттік квотаны қалай алуға болады?",
        a: "Өтінімдер қаңтардан наурызға дейін russia.study сайтында беріледі. 6-ға дейін университет таңдайсыз, аттестат аудармасы мен медициналық анықтамалар жүктеледі.",
      },
      {
        q: "Кеңес қалай өтеді?",
        a: "Бәрі онлайн — Telegram немесе WhatsApp арқылы. Ұзақтығы 30–60 минут. Сұрақтарды алдын ала жібересіз, мен дайындаламын.",
      },
      {
        q: "Келгеннен кейін де көмек алуға болады ма?",
        a: "Иә, бұл ең танымал кеңестердің бірі. Тіркелу, банк, SIM-карта, тұрғын үй іздеу — алғашқы апталарда кömektесемін.",
      },
      {
        q: "Кеңес үшін қалай төлеуге болады?",
        a: "Төлем СБП арқылы +7 966 101 37 47 нөміріне немесе ботта Telegram Stars арқылы. Төлемнен кейін жазыңыз.",
      },
      {
        q: "Сіз басқалардан немен ерекшеленесіз?",
        a: "Мен бұл жолдан өзім өттім — бір сөмкемен келдім, түстім, бейімделдім. Нақты тәжірибе беремін.",
      },
    ],
  },
};

export default function FAQ({ lang }: { lang: Lang }) {
  const c = CONTENT[lang];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">

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

        <div className="flex flex-col gap-3">
          {c.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-[15px] font-medium leading-snug">{item.q}</span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background: open === i ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)",
                    border: "0.5px solid",
                    borderColor: open === i ? "rgba(201,168,76,0.4)" : "var(--glass-border)",
                    color: open === i ? "var(--gold)" : "var(--muted)",
                  }}
                >
                  {open === i ? <Minus size={13} /> : <Plus size={13} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div
                      className="px-6 pb-5 text-[14px] text-[var(--muted)] leading-[1.8]"
                      style={{ borderTop: "0.5px solid var(--glass-border)" }}
                    >
                      <p className="pt-4">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
