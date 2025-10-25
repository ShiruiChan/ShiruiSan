import { TiltCard } from "@/components/TiltCard";
import { CardDescription } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";
import { Code } from "lucide-react";
import { Sparkles } from "lucide-react";

export function About() {
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
              <CardTitle>50+ Projects</CardTitle>
              <CardDescription>
                Successfully delivered across web and mobile platforms
              </CardDescription>
            </CardHeader>
          </TiltCard>

          <TiltCard>
            <CardHeader>
              <Palette className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Design Systems</CardTitle>
              <CardDescription>
                Built scalable design systems for enterprise applications
              </CardDescription>
            </CardHeader>
          </TiltCard>

          <TiltCard>
            <CardHeader>
              <Sparkles className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>5+ Years</CardTitle>
              <CardDescription>
                Experience in modern frontend development and UI/UX design
              </CardDescription>
            </CardHeader>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
