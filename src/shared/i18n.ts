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
    hero: {
      title_html: `Websites that <span class="text-primary">sell</span> — fast, beautiful, measurable`,
      cta_book: "Book a free consult",
      cta_packages: "See packages",
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
      title_html: `Сайты, которые <span class="text-primary">продают</span> — быстрее, красивее, измеримо`,
      cta_book: "Забронировать консультацию",
      cta_packages: "Посмотреть планы",
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
  },
};
export type Lang = keyof typeof i18n;
