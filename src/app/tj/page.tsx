import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "MenBilanBirga — Роҳнамо барои донишҷӯёни хориҷӣ дар Русия",
  description: "Ба донишҷӯёни хориҷӣ дар дохил шудан ба донишгоҳҳои Русия ва мутобиқшавӣ кӯмак мекунам. Машваратҳои шахсӣ, таҷрибаи воқеӣ. Новосибирск.",
  keywords: [
    "таҳсил дар Русия", "донишҷӯёни хориҷӣ Русия", "дохил шудан ба донишгоҳи Русия",
    "зиндагии донишҷӯ Новосибирск", "квотаи Вазорат", "мутобиқшавӣ дар Русия",
  ],
  alternates: {
    canonical: "/tj",
    languages: { "ru": "/", "en": "/en", "uz": "/uz", "tg": "/tj", "ky": "/ky", "kk": "/kz" },
  },
  openGraph: {
    title: "MenBilanBirga — Роҳнамо барои донишҷӯёни хориҷӣ дар Русия",
    description: "Машваратҳои шахсӣ оид ба дохилшавӣ, мутобиқшавӣ ва зиндагии донишҷӯ дар Новосибирск.",
    locale: "tg_TJ",
  },
};

export default function TjPage() {
  return <HomePage initialLang="tj" />;
}
