import { Providers } from "../(site)/Providers";
import type { Metadata } from "next";
import { profile } from "@/shared/profile";

const SITE_URL = profile.contacts.website;
const languages = ["ru", "en"] as const;
type Lang = (typeof languages)[number];

const copy = {
  ru: {
    title: "ShiruiSan — сайты, лендинги и UI/UX под заявки",
    description:
      "Портфолио Рената Харлампьева: быстрые сайты, лендинги, редизайн и UI/UX с понятной структурой, адаптивом, SEO-основой и рабочей контактной воронкой.",
  },
  en: {
    title: "ShiruiSan — websites, landing pages and UI/UX that convert",
    description:
      "Portfolio of Renat Kharlampiev: fast websites, landing pages, redesigns and UI/UX with clear structure, responsive delivery, SEO basics and contact-ready flows.",
  },
} satisfies Record<Lang, { title: string; description: string }>;

function normalizeLang(lang: string): Lang {
  return languages.includes(lang as Lang) ? (lang as Lang) : "ru";
}

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  const lang = normalizeLang(params.lang);
  const title = copy[lang].title;
  const description = copy[lang].description;
  const url = `${SITE_URL}/${lang}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ru: "/ru",
        en: "/en",
        "x-default": "/ru",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "ru" ? "ru_RU" : "en_US",
      url,
      siteName: "ShiruiSan",
      title,
      description,
      images: [
        {
          url: "/Projects/laser-cutting/laser-cutting-1.webp",
          width: 1863,
          height: 916,
          alt: "ShiruiSan portfolio project preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/Projects/laser-cutting/laser-cutting-1.webp"],
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = normalizeLang(params.lang);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: "ShiruiSan",
    jobTitle: profile.role,
    url: `${SITE_URL}/${lang}`,
    email: profile.contacts.email,
    telephone: profile.contacts.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Yakutia",
      addressCountry: "RU",
    },
    sameAs: [
      profile.contacts.github,
      profile.contacts.telegram,
      profile.contacts.linkedin,
    ].filter(Boolean),
    knowsAbout: [
      "Frontend development",
      "UI/UX design",
      "Landing pages",
      "Web performance",
      "Accessibility",
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ShiruiSan",
    url: `${SITE_URL}/${lang}`,
    areaServed: "Worldwide",
    founder: {
      "@type": "Person",
      name: profile.name,
    },
    serviceType: [
      "Landing page design and development",
      "Portfolio website development",
      "Website redesign",
      "Frontend development",
      "UI/UX design",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Providers lang={lang}>{children}</Providers>
    </>
  );
}
