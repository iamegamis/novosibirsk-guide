import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "MenBilanBirga — Rossiyada o'qish bo'yicha qo'llanma",
  description: "Rossiya universitetlariga kirish, moslashish va talaba hayotida yordam beraman. Shaxsiy maslahatlar, haqiqiy tajriba. Novosibirsk.",
  keywords: [
    "Rossiyada o'qish", "xorijiy talabalar Rossiya", "Rossiya universitetiga kirish",
    "Novosibirsk talaba hayoti", "vazirlik kvotasi", "NGU qabul",
    "Rossiyada yashash", "talaba moslashish",
  ],
  alternates: {
    canonical: "/uz",
    languages: { "ru": "/", "en": "/en", "uz": "/uz", "tg": "/tj", "ky": "/ky", "kk": "/kz" },
  },
  openGraph: {
    title: "MenBilanBirga — Rossiyada o'qish bo'yicha qo'llanma",
    description: "Rossiya universitetiga kirish, moslashish va Novosibirskda talaba hayoti bo'yicha shaxsiy maslahatlar.",
    locale: "uz_UZ",
  },
};

export default function UzPage() {
  return <HomePage initialLang="uz" />;
}
