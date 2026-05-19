import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "MenBilanBirga — Россияда окуган чет элдик студенттер үчүн жол башчы",
  description: "Чет элдик студенттерге Россия университеттерине кирүүдө жана жашоого ыңгайлашууда жардам берем. Жеке кеңештер, чыныгы тажрыйба. Новосибирск.",
  keywords: [
    "Россияда окуу", "чет элдик студенттер Россия", "Россия университетине кирүү",
    "Новосибирск студент жашоосу", "Министрлик квотасы", "Россияда жашоо",
  ],
  alternates: {
    canonical: "/ky",
    languages: { "ru": "/", "en": "/en", "uz": "/uz", "tg": "/tj", "ky": "/ky", "kk": "/kz" },
  },
  openGraph: {
    title: "MenBilanBirga — Россияда окуган чет элдик студенттер үчүн жол башчы",
    description: "Россия университетине кирүү, ыңгайлашуу жана Новосибирскте студент жашоосу боюнча жеке кеңештер.",
    locale: "ky_KG",
  },
};

export default function KyPage() {
  return <HomePage initialLang="ky" />;
}
