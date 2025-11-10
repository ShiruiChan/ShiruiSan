import { AnimatedCounter } from "@/src/components/AnimatedCounter";
import { TiltCard } from "@/src/components/TiltCard";
import { CardDescription } from "@/src/components/ui/card";
import { CardHeader } from "@/src/components/ui/card";
import { CardTitle } from "@/src/components/ui/card";
import { Palette } from "lucide-react";
import { Code } from "lucide-react";
import { Sparkles } from "lucide-react";
import { useTranslate } from "@/src/hooks/useTranslate";

export function About() {
  const t = useTranslate();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What I Bring to the Table
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TiltCard>
            <CardHeader>
              <Code className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>
                <AnimatedCounter end={t.stats.projects.count} suffix="+" />{" "}
                {t.stats.projects.name}
              </CardTitle>
              <CardDescription>{t.stats.projects.detailed}</CardDescription>
            </CardHeader>
          </TiltCard>

          <TiltCard>
            <CardHeader>
              <Palette className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{t.stats.design.name}</CardTitle>
              <CardDescription>{t.stats.design.detailed}</CardDescription>
            </CardHeader>
          </TiltCard>

          <TiltCard>
            <CardHeader>
              <Sparkles className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>
                <AnimatedCounter end={t.stats.year.count} suffix="+" />{" "}
                {t.stats.year.name}
              </CardTitle>
              <CardDescription>{t.stats.year.detailed}</CardDescription>
            </CardHeader>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
