export const i18n = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      experience: "Experience",
      about: "About",
      testimonials: "Testimonials",
      contact: "Contact",
      // blog: "Blog", // если используешь
    },
    services: {
      service1: {
        name: "Premium Landing Page",
        price: "₽190,000",
        desc: "A high-converting landing page with persuasive copy, modern design, and analytics. Fixed price, 2-week delivery.",
        bullets: [
          "Copywriting + prototype + premium UI",
          "Lighthouse 95+ / accessibility included",
          "Analytics and event tracking setup",
        ],
        cta: "Order Now",
      },
      service2: {
        name: "Portfolio That Sells",
        price: "₽140,000",
        desc: "A personal brand website with cases, testimonials, and booking — all optimized for conversion.",
        bullets: [
          "Case and project templates",
          "Testimonials section and client logos",
          "SEO, Open Graph, and structured data",
        ],
        cta: "Get Started",
        highlight: true,
      },
      service3: {
        name: "Product UI Redesign",
        price: "₽290,000",
        desc: "A design sprint to revamp a key user flow or dashboard. UX research + production-ready code.",
        bullets: [
          "Animations and microinteractions",
          "Design tokens and system setup",
          "Production implementation via PR",
        ],
        cta: "Book a Sprint",
      },
    },
    sections: {
      projects_title: "Projects",
      services_title: "Choose your outcome",
      services_subtitle: "Clear scope, fixed price, real results.",
      testimonials_title: "Clients say",
    },
    contact: {
      title: "Let’s build something great",
      name: "Your name",
      email: "Email",
      message: "Message",
      send: "Send message",
    },
    brand: "ShiruiSan",
    tagline:
      "Frontend • UI/UX • Performance. I craft clean, fast interfaces with delightful micro-interactions.",
    resources: {
      title: "Resources",
      resume: "CV / Resume",
      email: "Email",
      telegram: "Telegram",
      github: "GitHub",
    },
    cta: {
      text: "Have a project in mind? Let’s build something great.",
      start: "Start a project",
      back: "Back to top ↑",
    },
    footer: {
      rights: "All rights reserved.",
      themeLight: "Light mode",
      themeDark: "Dark mode",
      lang: "Language",
    },
    hero: {
      // заголовок H1 разбит на две части: первая — обычный текст, вторая — внутри цветного бейджа
      title_html1: "Interfaces that respect users —",
      title_html2: "fast, stable, precise",

      // подзаголовок (одно предложение, конкретика без воды)
      subtitle:
        "Subtle motion, dependable typography, and measured performance",

      // CTA-кнопки
      primary_cta: "Get started",
      secondary_cta: "Learn more",

      // метрики в статистическом блоке
      stats: {
        frame_time_value: "~60",
        frame_time_unit: "ms",
        frame_time_label: "Frame time",

        runtime_deps_value: "0",
        runtime_deps_unit: "",
        runtime_deps_label: "Runtime deps",

        vibes_value: "WOW",
        vibes_unit: "⭐",
        vibes_label: "Vibes",
      },

      // правый превью-блок
      preview: {
        header_kicker: "Preview",
        header_title: "Cozy Light / Rich Dark",
        badge: "Themed",
        bullets: [
          "Neutral parchment base",
          "Warm grays for copy",
          "Violet accents with softness",
        ],
        note_particles: "Particles pause on background tabs",
        note_hidpi: "HiDPI crisp lines",
      },

      // подсказки/лейблы, если пригодятся
      a11y: {
        toggle_theme: "Toggle theme",
      },
    },

    // общий словарь для подписей и семантики
    common: {
      made_for: "Made for quality work",
      byline: "Engineered details. No surprises.",
      popular: "Popular", // ← добавили
    },
  },
  ru: {
    nav: {
      home: "Главная",
      projects: "Проекты",
      services: "Услуги",
      experience: "Опыт",
      about: "Обо мне",
      testimonials: "Отзывы",
      contact: "Контакты",
      // blog: "Блог",
    },
    services: {
      service1: {
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
      service2: {
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
      service3: {
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
    },
    hero: {
      title_html1: "Интерфейсы с уважением к пользователю —",
      title_html2: "быстро, стабильно, точно",

      subtitle:
        "Тонкие анимации, надёжная типографика и измеримая производительность",

      primary_cta: "Начать",
      secondary_cta: "Подробнее",

      stats: {
        frame_time_value: "~60",
        frame_time_unit: "мс",
        frame_time_label: "Время кадра",

        runtime_deps_value: "0",
        runtime_deps_unit: "",
        runtime_deps_label: "Зависимости рантайма",

        vibes_value: "WOW",
        vibes_unit: "⭐",
        vibes_label: "Вайб",
      },

      preview: {
        header_kicker: "Превью",
        header_title: "Cozy Light / Rich Dark",
        badge: "Темизация",
        bullets: [
          "Нейтральная «пергаментная» база",
          "Тёплые серые для текста",
          "Акценты фиолетового с мягкостью",
        ],
        note_particles: "Частицы ставятся на паузу на фоновых вкладках",
        note_hidpi: "Чёткие линии на HiDPI",
      },

      a11y: {
        toggle_theme: "Переключить тему",
      },
    },
    common: {
      made_for: "Для работы на качество",
      byline: "Инженерные детали. Без сюрпризов.",
      popular: "Популярный", // ← добавили
    },
    sections: {
      projects_title: "Проекты",
      services_title: "Выберите свой результат",
      services_subtitle:
        "Чёткий охват, фиксированная цена, реальные результаты.",
      testimonials_title: "Клиенты говорят",
    },
    contact: {
      title: "Давайте сделаем крутой продукт",
      name: "Ваше имя",
      email: "Почта",
      message: "Сообщение",
      send: "Отправить",
    },
    brand: "ShiruiSan",
    tagline:
      "Frontend • UI/UX • Производительность. Создаю чистые, быстрые интерфейсы с приятными микровзаимодействиями.",
    resources: {
      title: "Ресурсы",
      resume: "Резюме / CV",
      email: "Почта",
      telegram: "Телеграм",
      github: "Гитхаб",
    },
    cta: {
      text: "Есть идея проекта? Давайте создадим что-то классное.",
      start: "Начать проект",
      back: "Наверх ↑",
    },
    footer: {
      rights: "Все права защищены.",
      themeLight: "Светлая тема",
      themeDark: "Тёмная тема",
      lang: "Язык",
    },
  },
};
export type Lang = keyof typeof i18n;
