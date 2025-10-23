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

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  link: string;
  image?: string[];
  alt?: string;
};

const baseProjects: Project[] = [
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
    image: [
      "/Projects/tours-of-yakutia/tours-of-yakutia-1.webp",
      "/Projects/tours-of-yakutia/tours-of-yakutia-2.webp",
      "/Projects/tours-of-yakutia/tours-of-yakutia-3.webp",
      "/Projects/tours-of-yakutia/tours-of-yakutia-4.webp",
    ],
    alt: "Tours of Yakutia website preview",
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
    image: [
      "/Projects/ykt-sokol/ykt-sokol-1.webp",
      "/Projects/ykt-sokol/ykt-sokol-2.webp",
      "/Projects/ykt-sokol/ykt-sokol-3.webp",
      "/Projects/ykt-sokol/ykt-sokol-4.webp",
      "/Projects/ykt-sokol/ykt-sokol-5.webp",
      "/Projects/ykt-sokol/ykt-sokol-6.webp",
    ],
    alt: "YKT Sokol website preview",
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
    alt: "Lory landing page preview",
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
    image: [
      "/Projects/laser-cutting/laser-cutting-1.webp",
      "/Projects/laser-cutting/laser-cutting-2.webp",
      "/Projects/laser-cutting/laser-cutting-3.webp",
    ],
    alt: "Laser Cutting website preview",
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
    image: [
      "/Projects/lory-lct/lory-lct-1.webp",
      "/Projects/lory-lct/lory-lct-2.webp",
      "/Projects/lory-lct/lory-lct-3.webp",
    ],
    alt: "LORY LCT interface preview",
  },
];

// Export projects for use in components
export const projects = baseProjects;

// Extract all unique tags from projects
export const allTags = Array.from(
  new Set(baseProjects.flatMap((p) => p.tags))
).sort();

export const experience = [
  {
    company: "Название компании",
    role: "Роль",
    period: "Период",
    points: ["1 топик", "2 топик", "3 топик"],
  },
];

export const blog = [
  { title: "Modern React Architecture", date: "2025-07-12", link: "#" },
  { title: "Polish: The Last 10%", date: "2025-04-28", link: "#" },
];

export const LOGO_ITEMS: Array<{ label: string; href: string; icon?: string }> =
  [
    // {
    //   label: "YKT Sokol",
    //   href: "https://ykt-sokol.vercel.app",
    //   icon: "/logos/ykt-sokol.svg",
    // },
  ];

export const SERVICES = [
  {
    name: "Посадочная страница Premium",
    price: "190 000 ₽",
    desc: "Высококонверсионная посадочная страница с продающим текстом, современным дизайном и аналитикой. Фиксированная цена, срок 2 недели.",
    bullets: [
      "Копирайтинг + прототип + премиум UI",
      "Lighthouse 95+ / доступность включена",
      "Настройка аналитики и событий",
    ],
    cta: "Заказать",
  },
  {
    name: "Портфолио, которое продаёт",
    price: "140 000 ₽",
    desc: "Персональный сайт-бренд: кейсы, отзывы, онлайн-запись — всё оптимизировано под конверсию.",
    bullets: [
      "Шаблоны кейсов и проектов",
      "Блок отзывов и логотипы клиентов",
      "SEO, Open Graph, микроразметка",
    ],
    cta: "Начать сейчас",
    highlight: true,
  },
  {
    name: "Редизайн продуктового UI",
    price: "290 000 ₽",
    desc: "Спринт на редизайн ключевого сценария или дашборда. UX-исследование + код в продакшене.",
    bullets: [
      "Анимации и микро-взаимодействия",
      "Дизайн-токены и система",
      "Внедрение в продакшн через PR",
    ],
    cta: "Забронировать спринт",
  },
];

export type CaseMetric = {
  title: string;
  metric: string;
  company?: string;
  summary: string;
  results: string[];
  link?: string;
  image?: string;
};

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
    text: "Отзыв",
    name: "ФИО заказчика",
    role: "Роль в компании",
  },
];
