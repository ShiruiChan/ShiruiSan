export const skills = [
  "React",
  "TypeScript",
  "Vite",
  "TailwindCSS",
  "shadcn/ui",
  "Next.js",
  "Framer Motion",
  "Zustand",
  "GraphQL",
  "Vitest / Playwright",
  "Accessibility (a11y)",
  "Performance",
];

export type NavSection = {
  id: string;
  label: string;
};

export const NAV_SECTIONS: NavSection[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    title: "Tours of Yakutia",
    blurb:
      "Сайт туров по Якутии с чистой структурой, фокусом на заявки и быстрым рендерингом.",
    tags: [
      "React",
      "Vite",
      "Tailwind",
      "SEO / индексация",
      "Маршруты / туры",
      "Формы заявок",
      "Адаптив",
      "i18n",
    ],
    link: "https://toursofyakutia.com",
  },
  {
    title: "YKT Sokol",
    blurb:
      "Лёгкий посадочный сайт на Vercel с современным интерфейсом и адаптивной сеткой.",
    tags: [
      "React",
      "Vite",
      "Tailwind",
      "Vercel",
      "CSR / SPA",
      "Адаптивная сетка",
      "Чистая типографика",
    ],
    link: "https://ykt-sokol.vercel.app",
  },
  {
    title: "Lory",
    blurb:
      "Минималистичный продуктовый лендинг с акцентом на motion и читабельность.",
    tags: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind",
      "Лендинг",
      "Анимации",
      "Компонентный дизайн",
    ],
    link: "https://lory.vercel.app",
  },
  {
    title: "Laser Cutting",
    blurb:
      "Конверсионный лендинг услуги лазерной резки: быстрые CTA, формы и локальное SEO.",
    tags: [
      "React",
      "Tailwind",
      "Формы / CTA",
      "SEO / локальное",
      "Лендинг",
      "Vercel",
      "Микровзаимодействия",
    ],
    link: "https://laser-cutting.vercel.app",
  },
  {
    title: "LORY LCT",
    blurb:
      "Экспериментальный интерфейс с hex-grid: drag/zoom, анимации и лёгкий state-менеджмент.",
    tags: [
      "TypeScript",
      "Zustand",
      "SVG / Canvas",
      "Интерактивность",
      "60fps",
      "Модульная архитектура",
    ],
    link: "https://lory-lct.vercel.app",
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export const experience = [
  {
    company: "Acme Corp",
    role: "Senior Frontend Engineer",
    period: "2023 — 2025",
    points: [
      "Lead UI for high-traffic product surfaces (1M+/day)",
      "Built component library adopted across 4 teams",
      "Cut TTI by 38% via code-splitting & hydration tuning",
    ],
  },
  {
    company: "Pixel Studio",
    role: "UI/UX Engineer",
    period: "2021 — 2023",
    points: [
      "Prototyped interactions with Framer Motion",
      "Shipped a11y-first flows validated by audits",
      "Partnered with design on motion & microcopy",
    ],
  },
];

export const blog = [
  { title: "Modern React Architecture", date: "2025-07-12", link: "#" },
  { title: "Polish: The Last 10%", date: "2025-04-28", link: "#" },
];

export const LOGO_ITEMS: Array<{ label: string; href: string; icon?: string }> =
  [
    {
      label: "Tours of Yakutia",
      href: "https://toursofyakutia.com",
      icon: "/logos/tours-of-yakutia.svg",
    },
    {
      label: "YKT Sokol",
      href: "https://ykt-sokol.vercel.app",
      icon: "/logos/ykt-sokol.svg",
    },
    { label: "Lory", href: "https://lory.vercel.app", icon: "/logos/lory.svg" },
    {
      label: "Laser Cutting",
      href: "https://laser-cutting.vercel.app",
      icon: "/logos/laser-cutting.svg",
    },
    {
      label: "LORY LCT",
      href: "https://lory-lct.vercel.app",
      icon: "/logos/lory-lct.svg",
    },
  ];
export const SERVICES = [
  {
    name: "Landing Page 10/10",
    price: "€1 900",
    desc: "High-converting landing with copy, sections, and analytics. 2 weeks, fixed price.",
    bullets: [
      "Copy + wireframe + polished UI",
      "Lighthouse 95+ / a11y included",
      "Setup analytics & events",
    ],
    cta: "Get this",
  },
  {
    name: "Full Portfolio that Sells",
    price: "€1 400",
    desc: "Your personal brand site: proof, case studies, booking — optimized for conversion.",
    bullets: [
      "Case study templates",
      "Testimonials & logo wall",
      "SEO, OG, schema",
    ],
    cta: "Start now",
    highlight: true,
  },
  {
    name: "Product UI Sprint",
    price: "€2 900",
    desc: "One sprint to redesign a key flow or dashboard. UX + code in production.",
    bullets: [
      "Motion & micro-interactions",
      "Design tokens & DS",
      "Ship to prod with PRs",
    ],
    cta: "Book sprint",
  },
];
export const CASES: CaseMetric[] = [
  {
    title: "Yakutia Tours — clear booking flow",
    metric: "UX upgrade",
    company: "Travel",
    summary:
      "Rebuilt IA and hero + CTA, clarified offers and contact actions. Focus on fast content delivery.",
    results: ["Fewer steps", "Cleaner nav", "Mobile-first"],
    link: "https://toursofyakutia.com",
    image: "/cases/yakutia.webp",
  },
  {
    title: "LORY LCT — interactive UI",
    metric: "Engagement",
    company: "Product R&D",
    summary:
      "Hex‑grid interactions, smooth drag/zoom, and lightweight state with TS + Zustand.",
    results: ["Stable 60fps", "TS strict", "Modular UI"],
    link: "https://lory-lct.vercel.app",
    image: "/cases/lory-lct.webp",
  },
];
export const TESTIMONIALS = [
  {
    text: "We shipped twice as fast without losing quality. He owns outcomes, not tickets.",
    name: "Jane Doe",
    role: "PM, Acme",
  },
  {
    text: "Pixel-perfect and pragmatic. Our conversion jumped the first week after launch.",
    name: "John Smith",
    role: "Design Lead, Globex",
  },
  {
    text: "Performance wizard. 100/100 Lighthouse on key pages. Highly recommend.",
    name: "Marta K.",
    role: "Founder, Startup",
  },
];

export type CaseMetric = {
  title: string;
  metric: string; // e.g. "+38%", "<1s LCP", "x2 leads"
  company?: string;
  summary: string;
  results: string[]; // list of short badges
  link?: string; // optional case page
  image?: string; // optional screenshot path e.g. /cases/yakutia-hero.webp
};
