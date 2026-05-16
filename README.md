# 🌟 Novosibirsk Guide — Personal Brand Website

Premium personal brand site built with Next.js 14, Framer Motion, TailwindCSS.

---

## 🚀 БЫСТРЫЙ СТАРТ (за 5 минут)

### 1. Установка
```bash
# Склонируй или скачай проект
cd novosibirsk-guide

# Установи зависимости
npm install

# Запусти на localhost
npm run dev
```

Открой: http://localhost:3000

---

## ⚙️ НАСТРОЙКА КОНТЕНТА

### Главный файл конфига:
```
src/lib/config.ts
```

Открой его и замени:
```ts
contacts: {
  telegram: "@твой_юзернейм",
  telegramUrl: "https://t.me/твой_юзернейм",
  whatsapp: "+79991234567",
  whatsappUrl: "https://wa.me/79991234567",
  instagram: "@твой_instagram",
  instagramUrl: "https://instagram.com/твой_instagram",
  email: "твой@email.com",
  // ...
},
donations: {
  yoomoney: "https://yoomoney.ru/to/ТВОЙ_КОШЕЛЁК",
  boosty: "https://boosty.to/твой_юзернейм",
  donationAlerts: "https://www.donationalerts.com/r/твой_юзернейм",
  // ...
},
name: "Твоё Имя",
url: "https://твой-домен.ru",
```

---

## 📸 КАК ДОБАВИТЬ СВОЁ ФОТО

В файле `src/components/sections/Hero.tsx` найди блок с `photo-placeholder` и замени:

```tsx
// БЫЛО:
<div className="photo-placeholder">📸...</div>

// СТАЛО:
import Image from "next/image";
<Image
  src="/images/my-photo.jpg"  // положи фото в папку /public/images/
  alt="Твоё имя"
  fill
  className="object-cover object-center"
/>
```

---

## ✍️ КАК ДОБАВИТЬ НОВЫЙ ПОСТ В БЛОГ

В файле `src/components/sections/Blog.tsx` найди массив `POSTS` и добавь:

```ts
{
  id: "my-new-post",
  emoji: "🎯",
  bg: "linear-gradient(145deg,#0A1520,#152030)",
  date: "2025-02-01",
  category: { ru: "Советы", en: "Tips", uz: "Maslahatlar", tj: "Маслиҳатҳо", ky: "Кеңештер", kz: "Кеңестер" },
  title:    { ru: "Заголовок поста", en: "Post title", uz: "...", tj: "...", ky: "...", kz: "..." },
  excerpt:  { ru: "Краткое описание...", en: "Short description...", uz: "...", tj: "...", ky: "...", kz: "..." },
},
```

---

## 💳 КАК ПОДКЛЮЧИТЬ ФОРМУ К TELEGRAM

1. Создай бота через @BotFather → получи `BOT_TOKEN`
2. Напиши боту что-нибудь, затем открой:
   `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
   — найди свой `chat_id`
3. В `src/components/sections/Contact.tsx` раскомментируй и заполни:
```ts
await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
  method: 'POST',
  body: JSON.stringify({ chat_id: YOUR_CHAT_ID, text }),
  headers: { 'Content-Type': 'application/json' },
});
```

---

## 🌐 ДЕПЛОЙ НА VERCEL (бесплатно)

### Вариант 1 — через GitHub (рекомендуется):
```bash
# 1. Создай репозиторий на github.com
# 2. Загрузи проект:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ТВОй_ЮЗЕРНЕЙМ/novosibirsk-guide.git
git push -u origin main

# 3. Зайди на vercel.com → New Project → выбери репозиторий → Deploy
```

### Вариант 2 — через Vercel CLI:
```bash
npm install -g vercel
vercel
# Следуй инструкциям
```

---

## 🔗 КАК ПОДКЛЮЧИТЬ ДОМЕН

1. Купи домен (reg.ru, nic.ru, 2domains.ru)
2. В Vercel: Settings → Domains → Add Domain
3. На сайте регистратора добавь DNS-записи, которые покажет Vercel
4. Готово! HTTPS автоматически

---

## 📊 КАК ПОДКЛЮЧИТЬ АНАЛИТИКУ

### Yandex.Metrica (рекомендуется для СНГ):
1. Зарегистрируйся на metrika.yandex.ru
2. Создай счётчик, получи код
3. Добавь в `src/app/layout.tsx` в `<head>`:
```html
<script>/* код Яндекс.Метрики */</script>
```

### Google Analytics:
```bash
npm install @next/third-parties
```
Затем в `layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// В <body>: <GoogleAnalytics gaId="G-XXXXXXXX" />
```

---

## 🏗️ СТРУКТУРА ПРОЕКТА

```
src/
├── app/
│   ├── layout.tsx        ← SEO metadata, шрифты, schema.org
│   ├── page.tsx          ← Главная страница, управление секциями
│   ├── globals.css       ← Глобальные стили
│   ├── sitemap.ts        ← Автоматический sitemap.xml
│   └── robots.ts         ← robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    ← Навигация + переключатель языков
│   │   └── Footer.tsx    ← Подвал
│   └── sections/
│       ├── Hero.tsx      ← Главный экран
│       ├── About.tsx     ← О себе + таймлайн
│       ├── Services.tsx  ← Услуги + цены
│       ├── Blog.tsx      ← Блог с поиском и фильтрами
│       ├── Contact.tsx   ← Форма заявки + соцсети
│       └── Donate.tsx    ← Платежи и донаты
└── lib/
    └── config.ts         ← ВСЕ НАСТРОЙКИ ЗДЕСЬ
```

---

## 🎨 ИЗМЕНЕНИЕ ЦВЕТОВ

В `src/app/globals.css` найди `:root`:
```css
:root {
  --gold: #C9A84C;      ← основной акцент
  --gold-light: #E8C97A; ← светлый акцент
  --dark: #0A0A0A;       ← основной фон
  --dark2: #111111;      ← вторичный фон
}
```

---

## 💡 СОВЕТЫ

- Lighthouse 95+ достигается автоматически через Next.js image optimization + code splitting
- Для видео-фона в Hero замени `hero-bg` div на `<video>` тег
- Для карты Новосибирска добавь компонент с Yandex Maps JS API v3

---

## 🆘 ПОДДЕРЖКА

Если что-то не работает — напиши в Telegram: [твой контакт]
