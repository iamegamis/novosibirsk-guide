import type { Metadata } from "next";
import { Playfair_Display, Syne, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `MenBilanBirga — Гид для иностранных студентов`,
    template: `%s | MenBilanBirga`,
  },
  description: SITE_CONFIG.description.ru,
  keywords: [
    "Новосибирск", "жизнь в России", "иностранные студенты", "НГУ",
    "поступление в Россию", "адаптация в России", "жизнь студента",
    "Novosibirsk", "study in Russia", "international students",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US", "uz_UZ", "kk_KZ"],
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} — Жизнь в России`,
    description: SITE_CONFIG.description.ru,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Жизнь в России`,
    description: SITE_CONFIG.description.ru,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL(SITE_CONFIG.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* Hreflang for multilingual SEO */}
        <link rel="alternate" hrefLang="ru" href={`${SITE_CONFIG.url}/`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_CONFIG.url}/en`} />
        <link rel="alternate" hrefLang="uz" href={`${SITE_CONFIG.url}/uz`} />
        <link rel="alternate" hrefLang="tj" href={`${SITE_CONFIG.url}/tj`} />
        <link rel="alternate" hrefLang="ky" href={`${SITE_CONFIG.url}/ky`} />
        <link rel="alternate" hrefLang="kk" href={`${SITE_CONFIG.url}/kz`} />
        <link rel="alternate" hrefLang="x-default" href={SITE_CONFIG.url} />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              sameAs: [
                SITE_CONFIG.contacts.telegramUrl,
                SITE_CONFIG.contacts.instagramUrl,
                SITE_CONFIG.contacts.youtubeUrl,
              ],
              jobTitle: "Blogger & Consultant",
              description: SITE_CONFIG.description.ru,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Новосибирск",
                addressCountry: "RU",
              },
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${syne.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
