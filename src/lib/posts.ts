import type { Lang } from "./types";

export interface Post {
  id: string;
  catKey: string;
  emoji: string;
  bg: string;
  date: string;
  category: Record<Lang, string>;
  title:    Record<Lang, string>;
  excerpt:  Record<Lang, string>;
  content:  Record<Lang, string[]>;
}

export const POSTS: Post[] = [
  {
    id: "ngu-guide",
    catKey: "university",
    emoji: "🏛️",
    bg: "linear-gradient(145deg,#0A1520,#152030)",
    date: "2025-01-10",
    category: { ru: "Университет", en: "University", uz: "Universitet", tj: "Донишгоҳ", ky: "Университет", kz: "Университет" },
    title: {
      ru: "Как поступить в НГУ иностранцу: полный гайд 2025",
      en: "How to enroll in NSU as a foreigner: full guide 2025",
      uz: "NSUga xorijiy talaba sifatida qanday kirish: to'liq qo'llanma 2025",
      tj: "Чӣ тавр ба НГУ дохил шудан: роҳнамои пурра 2025",
      ky: "НГУга чет элдик катары кантип кирүү: толук жол башчы 2025",
      kz: "НГУ-ға шетелдік ретінде қалай түсу: толық нұсқаулық 2025",
    },
    excerpt: {
      ru: "Разбираем квоту Минобрнауки, документы, сроки и подводные камни поступления в один из лучших вузов России.",
      en: "Breaking down the Ministry quota, documents, deadlines, and pitfalls of enrolling in one of Russia's best universities.",
      uz: "Vazirlik kvotasi, hujjatlar, muddatlar va Rossiyaning eng yaxshi universitetlaridan biriga kirishning qiyinchiliklarini tahlil qilamiz.",
      tj: "Квотаи Вазорат, ҳуҷҷатҳо, мӯҳлатҳо ва мушкилоти дохил шудан ба яке аз беҳтарин донишгоҳҳои Русия.",
      ky: "Министрлик квотасы, документтер, мөөнөттөр жана Россиянын эң мыкты университеттеринин бирине кирүүнүн кыйынчылыктары.",
      kz: "Министрлік квотасы, құжаттар, мерзімдер және Ресейдің үздік университеттерінің біріне түсудің қиындықтары.",
    },
    content: {
      ru: [
        "НГУ входит в топ-100 мировых университетов в предметных рейтингах и является одним из главных научных центров России. Иностранцы могут поступить тремя способами: государственная квота Минобрнауки (бесплатно), платное обучение и программы академического обмена. Квота — самый выгодный вариант: государство полностью оплачивает учёбу и даёт место в общежитии.",
        "Заявки на квоту подаются через сайт russia.study с января по март. Нужно выбрать до 6 университетов и направлений. Конкурс среди абитуриентов из Узбекистана, Таджикистана и Кыргызстана высокий, но реально пройти при хорошей учёбе в школе. Отборочные испытания обычно проходят онлайн через посольство или специальные центры.",
        "Документы для подачи: аттестат с нотариально заверенным переводом на русский язык, медицинские справки (форма 086/у и справка об отсутствии ВИЧ), 6 фотографий 3×4, загранпаспорт. Все документы сначала загружаются в систему онлайн, оригиналы привозятся при зачислении.",
        "Мой главный совет: начинай готовить документы в ноябре-декабре, не жди февраля. Многие теряют место именно из-за того, что тянут с переводами и справками. Если хочешь пройти квоту — напиши мне, разберём твою конкретную ситуацию и составим план действий.",
      ],
      en: [
        "NSU ranks in the top 100 worldwide universities in subject rankings and is one of Russia's leading scientific centers. Foreigners can enroll in three ways: the Ministry of Education quota (free), paid tuition, and academic exchange programs. The quota is the best option — the state fully covers tuition and provides dormitory accommodation.",
        "Quota applications are submitted through russia.study from January to March. You can select up to 6 universities and programs. Competition among applicants from Uzbekistan, Tajikistan, and Kyrgyzstan is high, but it's achievable with a strong academic background. Selection tests are usually held online through embassies or special centers.",
        "Required documents: school diploma with a notarized Russian translation, medical certificates (form 086/у and HIV-negative certificate), 6 photos (3×4 cm), international passport. All documents are first uploaded online; originals are brought when you enroll.",
        "My top advice: start preparing documents in November–December, don't wait until February. Many people lose their spot simply because they delay translations and medical certificates. If you want to apply for the quota — message me, and we'll work out your specific situation together.",
      ],
      uz: [
        "NGU predmetli reytinglarda dunyo universitetlari top-100 ro'yxatiga kiradi va Rossiyaning asosiy ilmiy markazlaridan biri hisoblanadi. Xorijliklar uchta yo'l bilan kirishi mumkin: Ta'lim vazirligi kvotasi (bepul), pullik ta'lim va akademik almashinuv dasturlari.",
        "Kvotaga arizalar yanvardan martgacha russia.study saytida qabul qilinadi. 6 tagacha universitet va yo'nalishlarni tanlashingiz mumkin. O'zbekiston va Tojikiston abituriyentlari o'rtasida raqobat kuchli, lekin maktabda yaxshi o'qigan bo'lsangiz, o'tish mumkin.",
        "Kerakli hujjatlar: attestat (rus tiliga notarial tarjimasidan), tibbiy ma'lumotnomalar (086/у shakli va OIV yo'qligi), 6 ta 3×4 rasm, xalqaro pasport. Hujjatlar avval onlayn yuklanadi, asliylari qabul qilinganida olib boriladi.",
        "Asosiy maslahatim: hujjatlarni noyabr-dekabrda tayyorlashni boshlang, fevralga qadar kutmang. Agar kvotadan o'tishni xohlasangiz — menga yozing, individual rejani birgalikda tuzamiz.",
      ],
      tj: [
        "НГУ дар рейтингҳои мавзӯӣ дар байни 100 донишгоҳи беҳтарини ҷаҳон ҷой дорад. Хориҷиён метавонанд бо се роҳ дохил шаванд: квотаи Вазорат (ройгон), таҳсили пулӣ ва барномаҳои мубодилаи академӣ.",
        "Аризаҳо аз январ то март тавассути russia.study пешниҳод мешаванд. Метавонед то 6 донишгоҳ ва самтро интихоб кунед. Рақобат байни аризадиҳандагон аз Тоҷикистон баланд аст, аммо агар дар мактаб хуб хонда бошед, гузаштан мумкин аст.",
        "Ҳуҷҷатҳои лозимӣ: аттестат бо тарҷумаи нотариалӣ ба русӣ, тасдиқҳои тиббӣ, 6 акс 3×4, шиноснома. Ҳамаи ҳуҷҷатҳо аввал онлайн бор карда мешаванд, аслиҳо ҳангоми қабул оварда мешаванд.",
        "Маслиҳати асосӣ: ҳуҷҷатҳоро дар ноябр-декабр омода кардан оғоз кунед. Агар мехоҳед квотаро бигиред — ба ман нависед, вазъияти шуморо якҷо баррасӣ мекунем.",
      ],
      ky: [
        "НГУ предметтик рейтингдерде дүйнөнүн үздүк 100 университетинин арасына кирет. Чет элдиктер үч жол менен кире алат: Министрлик квотасы (акысыз), акылуу окутуу жана академиялык алмашуу программалары.",
        "Квотага арыздар январдан мартка чейин russia.study сайты аркылуу кабыл алынат. 6га чейин университет жана багытты тандай аласыз. Кыргызстандан келген талапкерлер арасындагы атаандаштык жогору, бирок мектепте жакшы окуган болсоңуз өтсө болот.",
        "Зарыл документтер: аттестат (орус тилине нотариалдык которуу менен), медициналык маалымкаттар, 6 сүрөт 3×4, эл аралык паспорт. Бардык документтер алгач онлайн жүктөлөт, оригиналдары кабыл алынганда алынат.",
        "Башкы кеңешим: документтерди ноябрь-декабрда даярдай баштаңыз. Квотадан өткүңүз келсе — мага жазыңыз, индивидуалдуу план түзөбүз.",
      ],
      kz: [
        "НГУ пәндік рейтингтерде әлемнің үздік 100 университетіне кіреді. Шетелдіктер үш жолмен түсе алады: Министрлік квотасы (тегін), ақылы оқу және академиялық алмасу бағдарламалары.",
        "Квотаға өтінімдер қаңтардан наурызға дейін russia.study сайтында қабылданады. 6-ға дейін университет пен бағыт таңдауға болады. Қазақстаннан келген абитуриенттер арасындағы бәсеке жоғары, бірақ мектепте жақсы оқыған болсаңыз өтуге болады.",
        "Қажетті құжаттар: аттестат (орысша нотариалды аудармасымен), медициналық анықтамалар, 6 фото 3×4, шетел паспорты. Барлық құжаттар алдымен онлайн жүктеледі, түпнұсқалары қабылданғанда алынады.",
        "Басты кеңесім: құжаттарды қараша-желтоқсанда дайындауды бастаңыз. Квотадан өткіңіз келсе — маған жазыңыз, жеке жоспар жасаймыз.",
      ],
    },
  },
  {
    id: "housing",
    catKey: "housing",
    emoji: "🏠",
    bg: "linear-gradient(145deg,#15100A,#251A0A)",
    date: "2025-01-05",
    category: { ru: "Жильё", en: "Housing", uz: "Uy-joy", tj: "Манзил", ky: "Турак-жай", kz: "Тұрғын үй" },
    title: {
      ru: "Общежитие vs съём квартиры в Новосибирске",
      en: "Dorm vs renting an apartment in Novosibirsk",
      uz: "Yotoqxona vs Novosibirskda kvartira ijarasi",
      tj: "Хобгоҳ ё иҷораи квартира дар Новосибирск",
      ky: "Жатакана vs Новосибирскте батир ижарасы",
      kz: "Жатақхана vs Новосибирскте пәтер жалдау",
    },
    excerpt: {
      ru: "Сравниваю все варианты жилья для студента: цены, районы, плюсы и минусы каждого варианта в 2025 году.",
      en: "Comparing all housing options for students: prices, districts, pros and cons of each in 2025.",
      uz: "2025 yilda talabalar uchun barcha uy-joy variantlarini taqqoslayman: narxlar, tumanlar, ijobiy va salbiy tomonlar.",
      tj: "Муқоисаи ҳамаи вариантҳои манзил барои донишҷӯ дар соли 2025.",
      ky: "2025-жылы студент үчүн бардык турак-жай варианттарын салыштырам.",
      kz: "2025 жылы студент үшін барлық тұрғын үй нұсқаларын салыстырамын.",
    },
    content: {
      ru: [
        "Первый вопрос каждого студента перед переездом — где жить? В Новосибирске два основных варианта: университетское общежитие и съём квартиры или комнаты. Оба варианта реальны, но подходят для разных ситуаций.",
        "Общежитие стоит 1500–3000 ₽ в месяц — очень дёшево. Главные минусы: комнаты на 2–4 человека, общие кухни и душевые, правила внутреннего распорядка (вход по пропускам, комендантский час в некоторых). Плюсы: рядом с учебными корпусами, безопасно, не нужно думать о коммунальных платежах.",
        "Съём комнаты в квартире обходится в 8000–14000 ₽ в месяц, студия — от 18000 ₽, однушка — от 22000 ₽. Лучшие районы для студентов: Академгородок (рядом с НГУ), Октябрьский район (рядом с НГТУ). Транспортная доступность важна — метро есть только в центральной части города.",
        "Мой совет: первый год однозначно общежитие. Ты не знаешь город, не знаешь соседей, не знаешь как работает система. Общежитие даёт время освоиться. Со второго курса, если хочется больше свободы — можно снимать. Помогу найти проверенные варианты — пишите в Telegram.",
      ],
      en: [
        "The first question every student asks before moving: where to live? In Novosibirsk there are two main options: a university dorm and renting an apartment or room. Both are viable, but suit different situations.",
        "A dorm costs 1,500–3,000 ₽ per month — very affordable. Downsides: shared rooms for 2–4 people, communal kitchens and showers, internal rules (ID check-ins, curfews in some). Upsides: close to campus, safe, no worries about utility bills.",
        "Renting a room in an apartment costs 8,000–14,000 ₽/month, a studio from 18,000 ₽, a one-bedroom from 22,000 ₽. Best areas for students: Akademgorodok (near NSU), Oktyabrsky district (near NSTU). Transport matters — the metro only covers the central part of the city.",
        "My advice: definitely the dorm for your first year. You don't know the city, you don't know anyone, you don't understand how things work. The dorm gives you time to settle in. From second year, if you want more freedom — renting is a great option. I can help you find trusted listings — message me on Telegram.",
      ],
      uz: [
        "Har bir talabaning ko'chishdan oldingi birinchi savoli — qayerda yashash kerak? Novosibirskda ikkita asosiy variant mavjud: universitetning yotoqxonasi va kvartira yoki xona ijarasi.",
        "Yotoqxona oyiga 1500–3000 so'm turadi — juda arzon. Kamchiliklari: 2–4 kishilik xonalar, umumiy oshxona va dush. Afzalliklari: o'quv binolariga yaqin, xavfsiz, kommunal to'lovlar haqida o'ylamaslik mumkin.",
        "Kvartirada xona ijarasi oyiga 8000–14000 so'mni tashkil etadi, studiya esa 18000 so'mdan. Talabalar uchun eng yaxshi tumanlar: Akademgorodok (NGUga yaqin), Oktyabrskiy tuman (NGTUga yaqin).",
        "Maslahatim: birinchi yilda, albatta, yotoqxona. Shaharni bilmasangiz, hammadan xabarsiz bo'lsangiz — yotoqxona o'rganishga vaqt beradi. Ikkinchi kursdan boshlab, erkinlik xohlasangiz — ijaraga o'tishingiz mumkin.",
      ],
      tj: [
        "Аввалин савол ҳар як донишҷӯ пеш аз кӯч кардан: дар куҷо зиндагӣ кардан? Дар Новосибирск ду вариант асосӣ вуҷуд дорад: хобгоҳи донишгоҳ ва иҷораи квартира ё ҳуҷра.",
        "Хобгоҳ дар як моҳ 1500–3000 ₽ арзиш дорад — хеле арзон. Камбудиҳо: ҳуҷраҳои 2–4 нафара, ошхона ва ҳаммомҳои умумӣ. Бартариҳо: наздик ба биноҳои таълимӣ, бехатар.",
        "Иҷораи ҳуҷра дар як квартира дар як моҳ 8000–14000 ₽, студия аз 18000 ₽. Беҳтарин маҳаллаҳо барои донишҷӯён: Академгородок (дар назди НГУ), ноҳияи Октябрский.",
        "Маслиҳатам: соли аввал хобгоҳ. Шаҳрро намедонед — хобгоҳ вақт медиҳад мутобиқ шавед. Аз соли дуввум, агар хоҳед, метавонед квартира иҷора гиред.",
      ],
      ky: [
        "Ар бир студенттин көчүп кетүүдөн мурунку биринчи суроосу — кайда жашаш керек? Новосибирскте эки негизги вариант бар: университеттин жатаканасы жана батир же бөлмө ижарасы.",
        "Жатакана айына 1500–3000 ₽ турат — абдан арзан. Кемчиликтери: 2–4 кишилик бөлмөлөр, жалпы ашкана жана душ. Артыкчылыктары: окуу корпусторуна жакын, коопсуз.",
        "Батирде бөлмө ижарасы айына 8000–14000 ₽, студия — 18000 ₽ дан. Студенттер үчүн эң жакшы кварталдар: Академгородок (НГУга жакын), Октябрский район.",
        "Кеңешим: биринчи жылы жатакана. Шаарды билбейсиз — жатакана ыңгайлашуу үчүн убакыт берет. Экинчи курстан баштап батир ижаралай аласыз.",
      ],
      kz: [
        "Әрбір студенттің көшер алдындағы бірінші сұрағы — қайда тұру керек? Новосибирскте екі негізгі нұсқа бар: университет жатақханасы және пәтер немесе бөлме жалдау.",
        "Жатақхана айына 1500–3000 ₽ тұрады — өте арзан. Кемшіліктері: 2–4 адамдық бөлмелер, ортақ ас үй және душ. Артықшылықтары: оқу ғимараттарына жақын, қауіпсіз.",
        "Пәтерде бөлме жалдау айына 8000–14000 ₽, студия — 18000 ₽ бастап. Студенттерге арналған үздік аудандар: Академгородок (НГУ-ға жақын), Октябрьский ауданы.",
        "Кеңесім: бірінші жылы жатақхана. Қаланы білмейсіз — жатақхана бейімделуге уақыт береді. Екінші курстан бастап пәтер жалдай аласыз.",
      ],
    },
  },
  {
    id: "budget",
    catKey: "budget",
    emoji: "💰",
    bg: "linear-gradient(145deg,#0A1510,#0A2010)",
    date: "2024-12-20",
    category: { ru: "Финансы", en: "Finances", uz: "Moliya", tj: "Молия", ky: "Финансы", kz: "Қаржы" },
    title: {
      ru: "Сколько нужно денег студенту в Новосибирске",
      en: "How much money does a student need in Novosibirsk",
      uz: "Novosibirskda talabaga qancha pul kerak",
      tj: "Донишҷӯ дар Новосибирск чӣ қадар пул лозим дорад",
      ky: "Новосибирскте студентке канча акча керек",
      kz: "Новосибирскте студентке қанша ақша керек",
    },
    excerpt: {
      ru: "Реальный бюджет: еда, транспорт, досуг, одежда, связь. Цифры без приукрас от человека, который живёт здесь.",
      en: "Real budget: food, transport, entertainment, clothing, phone. Honest numbers from someone who actually lives here.",
      uz: "Haqiqiy byudjet: oziq-ovqat, transport, dam olish, kiyim, aloqa. Bu yerda yashovchi odamdan haqiqiy raqamlar.",
      tj: "Буҷаи воқеӣ: хӯрок, нақлиёт, тафриҳ, либос, алоқа.",
      ky: "Чыныгы бюджет: тамак, транспорт, эс алуу, кийим, байланыш.",
      kz: "Нақты бюджет: тамақ, көлік, демалыс, киім, байланыс.",
    },
    content: {
      ru: [
        "Самый частый вопрос перед переездом: «Сколько мне нужно денег?» Я живу в Новосибирске несколько лет и в первые месяцы считал каждую копейку. Делюсь реальными цифрами 2025 года.",
        "Еда: обед в студенческой столовой — 150–250 ₽. Готовить самому дешевле: продукты на месяц обходятся в 6000–9000 ₽. Транспорт: проездной на автобус/метро на месяц — 1400 ₽, разовая поездка — 35 ₽. Связь: безлимитный интернет и звонки — 350–500 ₽ в месяц.",
        "Одежда, бытовая химия, непредвиденные расходы — ещё 2000–5000 ₽ в месяц. Итого без учёта жилья: минимум 12000–18000 ₽, комфортно — 20000–25000 ₽. Это значительно меньше, чем в Москве или Санкт-Петербурге — в этом огромный плюс Новосибирска.",
        "С общежитием (1500–3000 ₽) реально укладываться в 20000–25000 ₽ в месяц. Со съёмным жильём — от 30000 ₽. Если родители переводят деньги — оптимально получать 25000–30000 ₽ в месяц, тогда будет и на учёбу, и на нормальную жизнь.",
      ],
      en: [
        "The most common question before moving: 'How much money do I need?' I've lived in Novosibirsk for several years and tracked every expense in the beginning. Here are real 2025 numbers.",
        "Food: a lunch in the student canteen costs 150–250 ₽. Cooking at home is cheaper: groceries for a month run 6,000–9,000 ₽. Transport: monthly bus/metro pass — 1,400 ₽, single ride — 35 ₽. Phone plan: unlimited data and calls — 350–500 ₽/month.",
        "Clothing, toiletries, unexpected expenses — another 2,000–5,000 ₽/month. Total without housing: minimum 12,000–18,000 ₽, comfortable — 20,000–25,000 ₽. This is significantly less than in Moscow or St. Petersburg — a big advantage of Novosibirsk.",
        "With a dorm (1,500–3,000 ₽) you can manage on 20,000–25,000 ₽/month. With rented housing — from 30,000 ₽. The optimal monthly transfer from parents is 25,000–30,000 ₽ — enough for both studies and a decent life.",
      ],
      uz: [
        "Ko'chishdan oldin eng ko'p beriladigan savol: 'Qancha pul kerak?' Men Novosibirskda bir necha yil yashayman va dastlab har bir tiyinni hisobladim. 2025 yilning haqiqiy raqamlarini baham ko'raman.",
        "Ovqat: talabalar oshxonasida tushlik — 150–250 so'm. O'zingiz pishirish arzonroq: bir oylik oziq-ovqat — 6000–9000 so'm. Transport: oylik abonement — 1400 so'm. Aloqa: cheklanmagan internet — 350–500 so'm/oy.",
        "Kiyim, ro'zg'or buyumlari, kutilmagan xarajatlar — yana 2000–5000 so'm/oy. Turar joy hisobiga kiritilmagan holda jami minimum: 12000–18000 so'm, qulay: 20000–25000 so'm.",
        "Yotoqxona bilan (1500–3000 so'm) oyiga 20000–25000 so'mga yashash mumkin. Ijarali turar joy bilan — 30000 so'mdan. Optimal miqdor: oyiga 25000–30000 so'm.",
      ],
      tj: [
        "Маъмултарин савол пеш аз кӯч кардан: 'Чӣ қадар пул лозим аст?' Ман дар Новосибирск чанд сол зиндагӣ мекунам ва дар моҳҳои аввал ҳар тиинро ҳисоб мекардам.",
        "Хӯрок: нисфирӯзӣ дар ошхонаи донишҷӯён — 150–250 ₽. Худатон пухтан арзонтар аст: маҳсулоти ойона — 6000–9000 ₽. Нақлиёт: корти ойона — 1400 ₽. Алоқа: интернети бепул — 350–500 ₽ дар як моҳ.",
        "Либос, рӯзғор, хароҷоти пешбининашуда — боз 2000–5000 ₽ дар як моҳ. Ҷамъи бе манзил: ҳадди ақал 12000–18000 ₽, бароҳат — 20000–25000 ₽.",
        "Бо хобгоҳ (1500–3000 ₽) метавон дар як моҳ 20000–25000 ₽ зиндагӣ кард. Бо манзили иҷоравӣ — аз 30000 ₽. Миқдори оптималӣ аз волидайн: 25000–30000 ₽ дар як моҳ.",
      ],
      ky: [
        "Көчүүдөн мурун эң көп берилген суроо: 'Канча акча керек?' Мен Новосибирскте бир нече жыл жашайм жана башында ар бир тыйынды эсептедим.",
        "Тамак: студенттик ашканада түшкү аш — 150–250 ₽. Өзүңүз бышырган арзанраак: айлык азыктар — 6000–9000 ₽. Транспорт: айлык абонемент — 1400 ₽. Байланыш — 350–500 ₽/ай.",
        "Кийим, тиричилик буюмдары, күтүлбөгөн чыгымдар — дагы 2000–5000 ₽/ай. Жашаган жер эске алынбастан: минимум 12000–18000 ₽, ыңгайлуу — 20000–25000 ₽.",
        "Жатакана менен (1500–3000 ₽) айына 20000–25000 ₽ ка жашоого болот. Ижара батири менен — 30000 ₽ дан. Оптималдуу сумма: айына 25000–30000 ₽.",
      ],
      kz: [
        "Көшер алдындағы ең жиі қойылатын сұрақ: 'Қанша ақша керек?' Мен Новосибирскте бірнеше жыл тұрамын және алғашқы айларда әр тиынды есептедім.",
        "Тамақ: студент асханасында түскі ас — 150–250 ₽. Өзіңіз пісіру арзанырақ: айлық азық-түлік — 6000–9000 ₽. Көлік: айлық абонемент — 1400 ₽. Байланыс — 350–500 ₽/ай.",
        "Киім, тұрмыстық заттар, күтпеген шығындар — тағы 2000–5000 ₽/ай. Тұрғын үйсіз жалпы: минимум 12000–18000 ₽, ыңғайлы — 20000–25000 ₽.",
        "Жатақханамен (1500–3000 ₽) айына 20000–25000 ₽-ге өмір сүруге болады. Жалданған тұрғын үймен — 30000 ₽ бастап. Оптималды сома: айына 25000–30000 ₽.",
      ],
    },
  },
  {
    id: "culture",
    catKey: "culture",
    emoji: "🌍",
    bg: "linear-gradient(145deg,#15050A,#250510)",
    date: "2024-12-15",
    category: { ru: "Адаптация", en: "Adaptation", uz: "Moslashish", tj: "Мутобиқшавӣ", ky: "Ыңгайлашуу", kz: "Бейімделу" },
    title: {
      ru: "10 вещей, которые шокируют иностранца в России",
      en: "10 things that shock foreigners in Russia",
      uz: "Rossiyada xorijlikni hayratga soladigan 10 narsa",
      tj: "10 чизе, ки хориҷиро дар Русия ҳайрон мекунад",
      ky: "Россияда чет элдикти таң калдырган 10 нерсе",
      kz: "Ресейде шетелдікті таң қалдыратын 10 нәрсе",
    },
    excerpt: {
      ru: "Культурные особенности, непривычные правила, менталитет и то, как к этому быстро привыкнуть.",
      en: "Cultural features, unusual norms, mentality, and how to adapt quickly.",
      uz: "Madaniy xususiyatlar, g'ayrioddiy me'yorlar, mentalitet va tez moslashish yo'llari.",
      tj: "Хусусиятҳои фарҳангӣ, одоби ғайриодӣ, менталитет ва чӣ тавр зуд мутобиқ шудан.",
      ky: "Маданий өзгөчөлүктөр, адаттан тыш нормалар, менталитет жана тез ыңгайлашуу жолдору.",
      kz: "Мәдени ерекшеліктер, ерекше нормалар, менталитет және тез бейімделу жолдары.",
    },
    content: {
      ru: [
        "Когда я приехал в Россию, многое меня удивило. Не потому что плохо — просто иначе. За годы жизни здесь я составил список того, что чаще всего удивляет иностранцев из Центральной Азии.",
        "Первое — суровость на лице, доброта в душе. Русские редко улыбаются незнакомым, но если подружишься — это невероятно открытые и щедрые люди. Второе — бюрократия: регистрация, справки, очереди. К этому нужно просто привыкнуть. Третье — зима. -20°C реально холодно. Купи нормальный пуховик, термобельё и шапку — и всё будет хорошо. Четвёртое — еда очень другая, но вкусная: борщ, пельмени, гречка.",
        "Пятое — метро закрывается около полуночи, планируй заранее. Шестое — всегда носи паспорт или его нотариальную копию. Седьмое — в магазинах не принято торговаться. Восьмое — очереди в госорганах существуют, но есть МФЦ, где всё быстро. Девятое — отопление включают централизованно в октябре, до этого в квартире может быть холодно. Десятое — русские очень ценят прямоту и честность в общении.",
        "Всё это — не проблемы, а просто другая культура. За 2–3 месяца к большинству из этого привыкаешь полностью. Главное — не закрываться, общаться с людьми и не бояться задавать вопросы. Я сам через это прошёл и с радостью помогаю другим сделать этот путь легче.",
      ],
      en: [
        "When I arrived in Russia, many things surprised me. Not because they were bad — just different. After years of living here, I've compiled a list of what most often surprises foreigners from Central Asia.",
        "First — stern faces, warm hearts. Russians rarely smile at strangers, but once you make friends they're incredibly open and generous. Second — bureaucracy: registration, certificates, queues. You just have to get used to it. Third — winter. -20°C is genuinely cold. Buy a proper down jacket, thermal underwear, and a hat — and you'll be fine. Fourth — the food is very different but delicious: borscht, dumplings, buckwheat.",
        "Fifth — the metro closes around midnight, plan ahead. Sixth — always carry your passport or a notarized copy. Seventh — bargaining in shops is not customary. Eighth — queues at government offices exist, but the МФЦ centers are fast. Ninth — central heating turns on in October; before that, apartments can be cold. Tenth — Russians value directness and honesty in communication.",
        "All of this is just a different culture, not problems. Within 2–3 months you get fully used to most of it. The key is to stay open, talk to people, and not be afraid to ask questions. I went through this myself and am happy to help others make this journey easier.",
      ],
      uz: [
        "Rossiyaga kelganimda ko'p narsa meni hayratga soldi. Yomon emas — shunchaki boshqacha. Bu yerdagi yillar davomida men Markaziy Osiyodan kelgan xorijliklarni ko'pincha ajablantirgan narsalar ro'yxatini tuzish.",
        "Birinchi — yuzida jiddiylik, qalbida mehribonlik. Ruslar begonalarga kamdan-kam kulishadi, lekin do'st bo'lsangiz — ular ajoyib ochiq va saxiy odamlar. Ikkinchi — byurokratiya: ro'yxatdan o'tish, ma'lumotnomalar, navbatlar. Uchinchi — qish. -20°C haqiqatan ham sovuq. To'g'ri paxtaliq kiyim, termoichki kiyinish va do'ppi sotib oling.",
        "To'rtinchi — metro yarim tunda yopiladi, oldindan rejalashtiring. Beshinchi — har doim pasportingizni yoki uning nusxasini olib yuring. Oltinchi — do'konlarda narx savdosi qabul qilinmaydi.",
        "Bularning barchasi muammo emas, faqat boshqa madaniyat. 2–3 oy ichida ko'pchiligiga ko'nikasiz. Asosiysi — ochiq bo'ling, odamlar bilan muloqot qiling.",
      ],
      tj: [
        "Вақте ки ба Русия омадам, бисёр чизҳо маро ҳайрон кард. На барои он ки бад буданд — фақат дигар буданд. Дар тӯли солҳои зиндагӣ дар ин ҷо рӯйхати он чиҳоеро тартиб додам, ки аксар вақт хориҷиёнро ҳайрон мекунанд.",
        "Аввал — ҷиддияти рӯй, меҳрубонии дил. Русҳо ба бегонагон кам табассум мекунанд, аммо агар дӯст шавед — одамони бисёр кушоде ҳастанд. Дуввум — бюрократия. Сеюм — зимистон. -20°C воқеан сард аст. Куртаи пурра, термоир ва ид харед.",
        "Чорум — метро наздики нисфи шаб баста мешавад. Панҷум — ҳамеша шиноснома ё нусхаи нотариалии онро бо худ баред. Шашум — дар мағозаҳо чона задан одат нест.",
        "Ҳамаи инҳо фарҳанги дигар аст, на мушкилот. Дар тӯли 2–3 моҳ ба аксари инҳо одат мекунед.",
      ],
      ky: [
        "Россияга келгенде, көп нерсе мени таң калдырды. Жаман эмес — жөн гана башкача. Мен бул жерде жылдар бою жашап, Борбордук Азиядан келген чет элдиктерди эң көп таң калдырган нерселердин тизмесин түзгөм.",
        "Биринчи — бетинде катаалдык, жүрөгүндө жылуулук. Орустар бейтааныштарга сейрек жылмаят, бирок дос болсоңуз — таң калыштуу ачык жана щедрий адамдар. Экинчи — бюрократия. Үчүнчү — кыш. -20°C чынында суук. Жакшы тон, термоичик кийим жана бөрк сатып алыңыз.",
        "Төртүнчү — метро жарым түнгө жабылат, алдын ала пландаңыз. Бешинчи — ар дайым паспортуңузду алып жүрүңүз. Алтынчы — дүкөндөрдө баасын туткалашуу кабыл алынбайт.",
        "Мунун баары маселе эмес, жөн гана башка маданият. 2–3 айдын ичинде көпчүлүккө көнүп каласыз.",
      ],
      kz: [
        "Ресейге келгенде, көп нәрсе мені таң қалдырды. Жаман емес — жай ғана басқаша. Осы жерде жылдар бойы өмір сүріп, Орталық Азиядан келген шетелдіктерді жиі таң қалдыратын нәрселер тізімін жасадым.",
        "Бірінші — бетінде қатаңдық, жүрегінде жылулық. Орыстар бейтаныстарға сирек күледі, бірақ дос болсаңыз — керемет ашық адамдар. Екінші — бюрократия. Үшінші — қыс. -20°C шынымен суық. Жақсы тон, термокиім және бөрік сатып алыңыз.",
        "Төртінші — метро жарты түнде жабылады, алдын ала жоспарлаңыз. Бесінші — әрқашан паспортыңызды алып жүріңіз. Алтыншы — дүкендерде бағасын келіспеу қабылданбайды.",
        "Мұның бәрі мәселе емес, жай ғана басқа мәдениет. 2–3 айдың ішінде көпшілігіне үйренесіз.",
      ],
    },
  },
];
