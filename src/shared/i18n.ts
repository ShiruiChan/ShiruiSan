export const i18n = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Crafting fast, elegant interfaces",
      ctaPrimary: "View Projects",
      ctaSecondary: "Download CV",
    },
    contact: {
      title: "Let’s build something great",
      name: "Your name",
      email: "Email",
      message: "Message",
      send: "Send message",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      experience: "Опыт",
      blog: "Блог",
      contact: "Контакты",
    },
    hero: {
      title: "Создаю быстрые и изящные интерфейсы",
      ctaPrimary: "Смотреть проекты",
      ctaSecondary: "Скачать резюме",
    },
    contact: {
      title: "Давайте сделаем крутой продукт",
      name: "Ваше имя",
      email: "Почта",
      message: "Сообщение",
      send: "Отправить",
    },
  },
};
export type Lang = keyof typeof i18n;
