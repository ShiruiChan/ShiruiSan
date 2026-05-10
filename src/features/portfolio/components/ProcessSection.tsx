import { useTranslate } from "@/hooks/useTranslate";
import { ClipboardList, LayoutTemplate, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const icons = [ClipboardList, LayoutTemplate, Sparkles, Rocket];

export function ProcessSection() {
  const t = useTranslate();

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {t.process.steps.map((step, index) => {
        const Icon = icons[index] ?? Sparkles;

        return (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-lg border bg-card p-5 shadow-sm"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <span className="text-sm font-semibold text-muted-foreground">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {step.text}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}
