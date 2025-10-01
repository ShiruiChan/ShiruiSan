import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { i18n, type Lang } from "@/shared/i18n";
import { Section } from "./components/Section";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { AboutContent } from "./components/AboutContent";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { ExperienceSection } from "./components/ExperienceSection";
import { BlogSection } from "./components/BlogSection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

// new imports
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
  const [lang, setLang] = React.useState<Lang>("ru");
  const t = i18n[lang];
  const { theme, setTheme } = useTheme();
  const { track } = useAnalytics();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />

      {/* Conversion HERO override (keeps your header) */}
      <section className="relative overflow-hidden border-b">
        <MorphingGradient />
        <div className="absolute inset-0 pointer-events-none">
          <GridTexture />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
                Websites that <span className="text-primary">sell</span> — fast,
                beautiful, measurable
              </h1>
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
                    Book a free consult
                  </a>
                </Button>

                <Button asChild variant="secondary">
                  <a href="#services">See packages</a>
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

        <Section id="projects" title={lang === "ru" ? "Проекты" : "Projects"}>
          <ProjectsGrid lang={lang} />
        </Section>

        <Section id="services" title="Choose your outcome">
          <HeaderRow
            title=""
            subtitle="Clear scope, fixed price, real results."
          />
          <ServicesGrid />
        </Section>

        <Section id="experience" title={t.nav.experience}>
          <ExperienceSection />
        </Section>

        <Section id="about" title={t.nav.about}>
          <AboutContent />
        </Section>

        <Section id="testimonials" title="Clients say">
          <TestimonialStrip testimonials={TESTIMONIALS} />
        </Section>

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
