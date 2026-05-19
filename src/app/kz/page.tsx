import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "MenBilanBirga — Ресейдегі шетелдік студенттерге арналған нұсқаулық",
  description: "Шетелдік студенттерге Ресей университеттеріне түсуде және бейімделуде көмектесемін. Жеке кеңестер, нақты тәжірибе. Новосибирск.",
  keywords: [
    "Ресейде оқу", "шетелдік студенттер Ресей", "Ресей университетіне түсу",
    "Новосибирск студент өмірі", "Министрлік квотасы", "Ресейде өмір сүру",
  ],
  alternates: {
    canonical: "/kz",
    languages: { "ru": "/", "en": "/en", "uz": "/uz", "tg": "/tj", "ky": "/ky", "kk": "/kz" },
  },
  openGraph: {
    title: "MenBilanBirga — Ресейдегі шетелдік студенттерге арналған нұсқаулық",
    description: "Ресей университетіне түсу, бейімделу және Новосибирскте студент өмірі бойынша жеке кеңестер.",
    locale: "kk_KZ",
  },
};

export default function KzPage() {
  return <HomePage initialLang="kz" />;
}
