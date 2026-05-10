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
  { id: "process", label: "Process" },
  // { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  // { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export type ProjectStatus = "completed" | "in-progress";
export type ProjectCategory =
  | "sites"
  | "software"
  | "bots"
  | "menu-design"
  | "web-design"
  | "logos";

export type LocalizedText = {
  ru: string;
  en: string;
};

export type CaseMetricItem = {
  value: string;
  label: LocalizedText;
};

export type ProjectCase = {
  role: LocalizedText;
  duration: LocalizedText;
  clientType: LocalizedText;
  problem: LocalizedText;
  research: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
  metrics: CaseMetricItem[];
  testimonial?: {
    quote: LocalizedText;
    author: string;
  };
};

export const PROJECT_CATEGORIES: Array<{
  id: ProjectCategory;
  label: { ru: string; en: string };
}> = [
  { id: "sites", label: { ru: "Сайты", en: "Websites" } },
  { id: "software", label: { ru: "ПО", en: "Software" } },
  { id: "bots", label: { ru: "Боты", en: "Bots" } },
  { id: "menu-design", label: { ru: "Дизайн меню", en: "Menu Design" } },
  { id: "web-design", label: { ru: "Дизайны сайтов", en: "Web Design" } },
  { id: "logos", label: { ru: "Логотипы", en: "Logos" } },
];

export type Project = {
  title: string;
  blurb: LocalizedText;
  tags: string[];
  link: string;
  image?: string[];
  alt?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured?: boolean;
  caseStudy: ProjectCase;
};

const baseProjects: Project[] = [
  {
    title: "Tours of Yakutia",
    blurb: {
      ru: "Сайт для туров по Якутии с понятной подачей маршрутов, галереей и быстрым путем к заявке.",
      en: "A Yakutia travel website with clear route presentation, gallery content and a fast path to inquiry.",
    },
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
    category: "sites",
    status: "completed",
    featured: true,
    caseStudy: {
      role: {
        ru: "Дизайн интерфейса, фронтенд, адаптив, SEO-основа",
        en: "Interface design, frontend, responsive UI, SEO basics",
      },
      duration: {
        ru: "Первый коммерческий запуск",
        en: "First commercial launch",
      },
      clientType: {
        ru: "Туристический сервис",
        en: "Travel service",
      },
      problem: {
        ru: "Посетителю нужно быстро понять направления, атмосферу туров и способ связаться без лишнего поиска.",
        en: "Visitors needed to quickly understand destinations, tour atmosphere and the contact path without searching around.",
      },
      research: {
        ru: "Разобрал сценарий выбора тура: первое впечатление, доверие через фотографии, затем переход к заявке.",
        en: "Mapped the tour-selection flow: first impression, trust through imagery, then a clear inquiry action.",
      },
      solution: {
        ru: "Собрал адаптивную структуру с визуальными блоками маршрутов, понятными CTA и локализованным контентом.",
        en: "Built a responsive structure with visual route blocks, clear CTAs and localized content.",
      },
      result: {
        ru: "Сайт получил аккуратную презентацию туров, SEO-основу и понятный путь для будущих заявок.",
        en: "The site gained a cleaner tour presentation, SEO-ready structure and a clearer inquiry path.",
      },
      metrics: [
        {
          value: "4",
          label: { ru: "экрана проекта", en: "project screens" },
        },
        {
          value: "i18n",
          label: { ru: "локализованная структура", en: "localized structure" },
        },
        {
          value: "SEO",
          label: { ru: "основа индексации", en: "indexing baseline" },
        },
      ],
    },
  },
  {
    title: "YKT Sokol",
    blurb: {
      ru: "Лёгкий посадочный сайт на Vercel с современным интерфейсом и адаптивной сеткой.",
      en: "A lightweight Vercel landing page with a modern interface and responsive grid.",
    },
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
    category: "sites",
    status: "completed",
    caseStudy: {
      role: {
        ru: "Фронтенд, адаптивная сетка, публикация",
        en: "Frontend, responsive grid, deployment",
      },
      duration: {
        ru: "Короткий лендинг-спринт",
        en: "Short landing sprint",
      },
      clientType: {
        ru: "Локальный проект",
        en: "Local project",
      },
      problem: {
        ru: "Нужно было быстро упаковать проект в понятный сайт без тяжелой инфраструктуры.",
        en: "The project needed a clear web presence without heavy infrastructure.",
      },
      research: {
        ru: "Выделил основные блоки доверия и сценарий быстрого просмотра на мобильных устройствах.",
        en: "Identified the trust blocks and the fast mobile browsing path.",
      },
      solution: {
        ru: "Собрал посадочную страницу на Vercel с чистой типографикой и сеткой, которая не ломается на мобильных.",
        en: "Built a Vercel landing page with clean typography and a grid that holds on mobile.",
      },
      result: {
        ru: "Проект получил легкую онлайн-презентацию, которую можно быстро развивать дальше.",
        en: "The project got a lightweight online presentation that can be extended quickly.",
      },
      metrics: [
        {
          value: "6",
          label: { ru: "адаптивных экранов", en: "responsive previews" },
        },
        {
          value: "Vercel",
          label: { ru: "быстрая публикация", en: "fast deployment" },
        },
        {
          value: "SPA",
          label: { ru: "простая поддержка", en: "simple maintenance" },
        },
      ],
    },
  },
  {
    title: "Lory",
    blurb: {
      ru: "Минималистичный продуктовый лендинг с акцентом на motion, читабельность и компонентную структуру.",
      en: "A minimal product landing page focused on motion, readability and component structure.",
    },
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
    image: [
      "/Projects/lory.lab/lory-lab-1.webp",
      "/Projects/lory.lab/lory-lab-2.webp",
      "/Projects/lory.lab/lory-lab-3.webp",
      "/Projects/lory.lab/lory-lab-4.webp",
      "/Projects/lory.lab/lory-lab-5.webp",
      "/Projects/lory.lab/lory-lab-6.webp",
      "/Projects/lory.lab/lory-lab-7.webp",
      "/Projects/lory.lab/lory-lab-8.webp",
      "/Projects/lory.lab/lory-lab-9.webp",
      "/Projects/lory.lab/lory-lab-10.webp",
      "/Projects/lory.lab/lory-lab-11.webp",
      "/Projects/lory.lab/lory-lab-12.webp",
      "/Projects/lory.lab/lory-lab-13.webp",
    ],
    category: "sites",
    status: "completed",
    featured: true,
    caseStudy: {
      role: {
        ru: "UI, motion, React-компоненты",
        en: "UI, motion, React components",
      },
      duration: {
        ru: "Продуктовый эксперимент",
        en: "Product experiment",
      },
      clientType: {
        ru: "Собственная лаборатория",
        en: "Internal lab",
      },
      problem: {
        ru: "Нужно было показать продуктовую подачу без перегруза: минимум текста, сильная типографика, плавный rhythm.",
        en: "The goal was a product presentation without overload: concise copy, strong typography and smooth rhythm.",
      },
      research: {
        ru: "Сравнил лендинги с motion-подачей и выделил, где анимация помогает чтению, а где отвлекает.",
        en: "Compared motion-led landing pages and separated helpful motion from distracting decoration.",
      },
      solution: {
        ru: "Собрал компонентный лендинг с мягкими переходами, короткими блоками и стабильной визуальной иерархией.",
        en: "Built a component-based landing page with soft transitions, short sections and stable hierarchy.",
      },
      result: {
        ru: "Получился аккуратный шаблон продуктовой презентации, который можно масштабировать под разные офферы.",
        en: "The result is a clean product presentation template that can scale to different offers.",
      },
      metrics: [
        {
          value: "13",
          label: { ru: "экранов галереи", en: "gallery screens" },
        },
        {
          value: "Motion",
          label: { ru: "единая система", en: "consistent system" },
        },
        {
          value: "React",
          label: { ru: "компонентная сборка", en: "component build" },
        },
      ],
    },
  },
  {
    title: "Laser Cutting",
    blurb: {
      ru: "Конверсионный лендинг услуги лазерной резки: быстрые CTA, формы и локальное SEO.",
      en: "A conversion-focused laser cutting landing page with fast CTAs, forms and local SEO basics.",
    },
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
    category: "sites",
    status: "completed",
    featured: true,
    caseStudy: {
      role: {
        ru: "UX-структура, UI, фронтенд, CTA",
        en: "UX structure, UI, frontend, CTAs",
      },
      duration: {
        ru: "Коммерческий лендинг",
        en: "Commercial landing page",
      },
      clientType: {
        ru: "Услуга производства",
        en: "Manufacturing service",
      },
      problem: {
        ru: "Пользователю нужно быстро понять услугу, увидеть примеры и оставить запрос на расчет.",
        en: "Users needed to quickly understand the service, inspect examples and request a quote.",
      },
      research: {
        ru: "Разложил путь заявки: тип услуги, доверие, примеры, быстрый контакт и локальная поисковая видимость.",
        en: "Mapped the quote path: service type, trust, examples, quick contact and local search visibility.",
      },
      solution: {
        ru: "Сделал лендинг с повторяющимися CTA, формой заявки, понятной сеткой преимуществ и SEO-структурой.",
        en: "Created a landing page with repeated CTAs, request form, clear benefit grid and SEO-ready structure.",
      },
      result: {
        ru: "Страница стала понятной точкой входа для заявок и будущей локальной рекламы.",
        en: "The page became a clear entry point for inquiries and future local ads.",
      },
      metrics: [
        {
          value: "3",
          label: { ru: "приоритетных CTA", en: "priority CTAs" },
        },
        {
          value: "Local",
          label: { ru: "SEO-основа", en: "SEO baseline" },
        },
        {
          value: "Form",
          label: { ru: "путь к расчету", en: "quote path" },
        },
      ],
    },
  },
  {
    title: "LORY LCT",
    blurb: {
      ru: "Экспериментальный интерфейс с hex-grid: drag/zoom, анимации и лёгкий state-менеджмент.",
      en: "An experimental hex-grid interface with drag/zoom, animation and lightweight state management.",
    },
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
    category: "software",
    status: "completed",
    caseStudy: {
      role: {
        ru: "Интерактивный прототип, архитектура состояния",
        en: "Interactive prototype, state architecture",
      },
      duration: {
        ru: "Технический прототип",
        en: "Technical prototype",
      },
      clientType: {
        ru: "Интерфейсный эксперимент",
        en: "Interface experiment",
      },
      problem: {
        ru: "Нужно было проверить удобство drag/zoom взаимодействия на нестандартной hex-сетке.",
        en: "The goal was to test drag/zoom interaction on a non-standard hex grid.",
      },
      research: {
        ru: "Изучил поведение карты, масштабирование, плотность элементов и границы управления мышью.",
        en: "Explored map behavior, zooming, element density and mouse-control boundaries.",
      },
      solution: {
        ru: "Собрал прототип с модульным state-менеджментом, SVG/Canvas-слоем и отзывчивыми интеракциями.",
        en: "Built a prototype with modular state management, SVG/Canvas layer and responsive interactions.",
      },
      result: {
        ru: "Прототип показывает, как можно развивать более сложный инструмент без хаоса в состоянии.",
        en: "The prototype shows how a more complex tool can grow without chaotic state handling.",
      },
      metrics: [
        {
          value: "Hex",
          label: { ru: "нестандартная сетка", en: "custom grid" },
        },
        {
          value: "Drag",
          label: { ru: "жестовое управление", en: "gesture control" },
        },
        {
          value: "Zustand",
          label: { ru: "state-слой", en: "state layer" },
        },
      ],
    },
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

export type CaseMetric = {
  title: string;
  metric: string;
  company?: string;
  summary: string;
  results: string[];
  link?: string;
  image?: string;
};

export const highlights = [
  {
    key: "design-system",
    icon: "Sparkles",
  },
  {
    key: "lighthouse",
    icon: "Sparkles",
  },
  {
    key: "performance",
    icon: "Sparkles",
  },
];

export const principles = [
  { key: "clarity" },
  { key: "accessibility" },
  { key: "polish" },
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
    text: "Отзыв",
    name: "ФИО заказчика",
    role: "Роль в компании",
  },
];
