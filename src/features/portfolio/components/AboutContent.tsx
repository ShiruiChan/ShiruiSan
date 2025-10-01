import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { skills } from "@/shared/data";

export function AboutContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h3>Principles</h3>
        <ul>
          <li>Design for clarity first; delight second.</li>
          <li>Accessibility is a baseline, not a feature.</li>
          <li>
            Polish the edges: empty states, skeletons, micro-interactions.
          </li>
        </ul>
        <h3>Stack</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Designed/implemented
              design system adopted by 3 teams
            </li>
            <li className="flex gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> 95–100 Lighthouse
              scores for key pages
            </li>
            <li className="flex gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Drove SSR/ISR
              migration and reduced TTFB by 30%
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
