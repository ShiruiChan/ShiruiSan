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
