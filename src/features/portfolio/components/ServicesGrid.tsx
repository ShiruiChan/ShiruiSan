import { SERVICES } from "@/shared/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, DollarSign } from "lucide-react";
import { profile } from "@/shared/profile";
import { useAnalytics } from "@/hooks/useAnalytics";
// ы
export function ServicesGrid() {
  const { track } = useAnalytics();

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {SERVICES.map((s) => (
        <Card
          key={s.name}
          className={`${
            (s as any).highlight ? "border-primary/50 shadow-lg" : ""
          }`}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{s.name}</span>
              <Badge variant="outline">
                <DollarSign className="w-4 h-4" /> {s.price}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
            <ul className="space-y-2 text-sm">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {b}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              asChild
              className="w-full"
              onClick={() =>
                track("package_click", { name: s.name, price: s.price })
              }
            >
              <a href={profile.calendly} target="_blank" rel="noreferrer">
                {s.cta}
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
