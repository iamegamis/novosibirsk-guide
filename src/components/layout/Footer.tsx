"use client";

import { SITE_CONFIG } from "@/lib/config";
import type { Lang } from "@/lib/types";

export default function Footer({ lang }: { lang: Lang }) {
  const footerText: Record<Lang, string> = {
    ru: "Жизнь в России для иностранцев",
    en: "Life in Russia for foreigners",
    uz: "Rossiyada xorijliklar uchun hayot",
    tj: "Ҳаёт дар Русия барои хориҷиён",
    ky: "Россияда чет элдиктер үчүн жашоо",
    kz: "Ресейде шетелдіктер үшін өмір",
  };

  return (
    <footer className="border-t border-[var(--glass-border)] py-10 px-6 text-center">
      <p className="font-serif text-[20px] text-[var(--gold)] mb-2">{SITE_CONFIG.name}</p>
      <p className="text-[12px] text-[var(--muted)]">
        © {new Date().getFullYear()} · {footerText[lang]} · {SITE_CONFIG.city}
      </p>
      <div className="flex justify-center gap-6 mt-5">
        {[
          { href: SITE_CONFIG.contacts.telegramUrl, label: "TG" },
          { href: SITE_CONFIG.contacts.instagramUrl, label: "IG" },
          { href: SITE_CONFIG.contacts.youtubeUrl, label: "YT" },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.15em] text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
