import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "MenBilanBirga — Guide for International Students in Russia",
  description: "I help international students adapt, enroll in Russian universities, and build their life in a new country. Personal consultations, real experience. Based in Novosibirsk.",
  keywords: [
    "study in Russia", "international students Russia", "enroll Russian university",
    "Novosibirsk student life", "Ministry quota Russia", "NSU admission",
    "living in Russia foreigner", "student adaptation Russia",
  ],
  alternates: {
    canonical: "/en",
    languages: { "ru": "/", "en": "/en", "uz": "/uz", "tg": "/tj", "ky": "/ky", "kk": "/kz" },
  },
  openGraph: {
    title: "MenBilanBirga — Guide for International Students in Russia",
    description: "Personal consultations on university admission, adaptation, and student life in Novosibirsk.",
    locale: "en_US",
  },
};

export default function EnPage() {
  return <HomePage initialLang="en" />;
}
