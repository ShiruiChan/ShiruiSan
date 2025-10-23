import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, DollarSign, Sparkles } from "lucide-react";
import { profile } from "@/shared/profile";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTranslate } from "@/hooks/useTranslate";
import { motion } from "framer-motion";

export function ServicesGrid() {
  const { track } = useAnalytics();
  const t = useTranslate();

  const services = [
    t.services.service1,
    t.services.service2,
    t.services.service3,
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {services.map((service, index) => {
        const isPopular = (service as any).highlight;

        return (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 30, scale: isPopular ? 1.1 : 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <Card
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.3)] ${
                isPopular
                  ? "border-primary shadow-[0_0_40px_hsl(var(--primary)/0.25)] scale-91 md:scale-98 z-10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Градиент и бейдж */}
              {isPopular && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent border-0 text-primary-foreground">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {t.common.popular}
                  </Badge>
                </>
              )}

              <CardHeader className="relative">
                <CardTitle className="flex items-start justify-between gap-4">
                  <span className="text-xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                    {service.name}
                  </span>
                </CardTitle>
                <Badge
                  variant="outline"
                  className="w-fit mt-2 text-base font-semibold border-primary/30 bg-primary/5"
                >
                  <DollarSign className="w-4 h-4 mr-1" />
                  {service.price}
                </Badge>
              </CardHeader>

              <CardContent className="relative space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 items-start group/item"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="relative">
                <Button
                  asChild
                  className={`w-full transition-all duration-300 ${
                    isPopular
                      ? "bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] text-primary-foreground"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  onClick={() =>
                    track("package_click", {
                      name: service.name,
                      price: service.price,
                    })
                  }
                >
                  <a
                    href={profile.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold"
                  >
                    {service.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
