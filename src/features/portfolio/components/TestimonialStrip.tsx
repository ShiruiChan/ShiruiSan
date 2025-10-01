import { Card, CardContent } from "@/components/ui/card";
export function TestimonialStrip({
  testimonials,
}: {
  testimonials: { text: string; name: string; role: string }[];
}) {
  return (
    <div className="relative mt-8 overflow-hidden">
      <div className="grid sm:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed">“{t.text}”</p>
              <div className="mt-4 text-sm text-muted-foreground">
                {t.name} · {t.role}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
