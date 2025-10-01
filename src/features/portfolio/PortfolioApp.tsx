import { i18n } from "@/shared/i18n";
import { Section } from "./components/Section";
import { About } from "./components/About";
import { AboutContent } from "./components/AboutContent";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { ExperienceSection } from "./components/ExperienceSection";
// import { BlogSection } from "./components/BlogSection";
import { ContactForm } from "./components/ContactForm";
import { useLang } from "@/hooks/useLang";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { MorphingGradient } from "./components/MorphingGradient";
import { CredibilityBar } from "./components/CredibilityBar";
import { HeaderRow } from "./components/HeaderRow";
import { CaseCard } from "./components/CaseCard";
import { ServicesGrid } from "./components/ServicesGrid";
import { TESTIMONIALS, CASES } from "@/shared/data";
import { TestimonialStrip } from "./components/TestimonialStrip";
import { Button } from "@/components/ui/button";
import { profile } from "@/shared/profile";
import { useAnalytics } from "@/hooks/useAnalytics";
import { GridTexture } from "./components/GridTexture";

export default function PortfolioApp() {
  const { lang } = useLang();
  const t = i18n[lang];
  const { track } = useAnalytics();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden border-b">
        <MorphingGradient />
        <div className="absolute inset-0 pointer-events-none">
          <GridTexture />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1
                className="text-4xl sm:text-6xl font-semibold tracking-tight"
                dangerouslySetInnerHTML={{ __html: t.hero.title_html }}
              />
              <p className="mt-5 text-muted-foreground text-lg max-w-xl">
                {profile.bio}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="gap-2"
                  onClick={() =>
                    track("cta_consult_click", { placement: "hero" })
                  }
                >
                  <a href={profile.calendly} target="_blank" rel="noreferrer">
                    {t.hero.cta_book}
                  </a>
                </Button>

                <Button asChild variant="secondary">
                  <a href="#services">{t.hero.cta_packages}</a>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <CaseCard caseItem={CASES[0]} />
            </div>
          </div>
        </div>
      </section>

      <CredibilityBar />

      <main>
        <About />

        <Section id="projects" title={t.sections.projects_title}>
          <ProjectsGrid lang={lang} />
        </Section>

        <Section id="services" title={t.sections.services_title}>
          <HeaderRow title="" subtitle={t.sections.services_subtitle} />
          <ServicesGrid />
        </Section>

        <Section id="experience" title={t.nav.experience}>
          <ExperienceSection />
        </Section>

        <Section id="about" title={t.nav.about}>
          <AboutContent />
        </Section>

        <Section id="testimonials" title={t.sections.testimonials_title}>
          <TestimonialStrip testimonials={TESTIMONIALS} />
        </Section>

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
