import { i18n } from "@/shared/i18n";
import { Section } from "@/components/Section";
import { About } from "@/features/portfolio/components/About/About";
import { AboutContent } from "@/features/portfolio/components/About/AboutContent";
import { ProjectsGrid } from "@/features/portfolio/components/ProjectsGrid";
// import { ExperienceSection } from "./components/ExperienceSection";
// import { BlogSection } from "./components/BlogSection";
import { ContactForm } from "@/features/portfolio/components/ContactForm";
import { useLang } from "@/hooks/useLang";

import Header from "@/features/Header";
import Footer from "@/features/Footer";
// import { CredibilityBar } from "./components/CredibilityBar";
import { ServicesGrid } from "@/features/portfolio/components/ServicesGrid";
import { ProcessSection } from "@/features/portfolio/components/ProcessSection";
// import { TESTIMONIALS } from "../shared/data";
// import { TestimonialStrip } from "./components/TestimonialStrip";
import Hero from "@/features/portfolio/components/Hero";

export default function PortfolioApp() {
  const { lang } = useLang();
  const t = i18n[lang];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-lg focus:ring-2 focus:ring-ring"
      >
        {lang === "ru" ? "К основному содержанию" : "Skip to content"}
      </a>
      <Header />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden border-b">
        <Hero />
      </section>

      {/* Избранные работы (лого и название) */}
      {/* <CredibilityBar /> */}

      <main id="main-content">
        <About />

        <Section id="projects" title={t.sections.projects_title}>
          <ProjectsGrid lang={lang} />
        </Section>

        <Section id="services" title={t.sections.services_title}>
          {/* <HeaderRow title="" subtitle={t.sections.services_subtitle} /> */}
          <ServicesGrid />
        </Section>

        <Section id="process" title={t.sections.process_title}>
          <ProcessSection />
        </Section>

        {/* <Section id="experience" title={t.nav.experience}>
          <ExperienceSection />
        </Section> */}

        <Section id="about" title={t.nav.about}>
          <AboutContent />
        </Section>

        {/* <Section id="testimonials" title={t.sections.testimonials_title}>
          <TestimonialStrip testimonials={TESTIMONIALS} />
        </Section> */}

        {/* Если решишь вернуть блог: */}
        {/* <Section id="blog" title={t.nav.blog}>
          <BlogSection />
        </Section> */}

        <Section id="contact" title={t.nav.contact}>
          <ContactForm t={t.contact} />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
