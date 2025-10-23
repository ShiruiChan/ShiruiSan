import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { skills, highlights, principles } from "@/shared/data";
import { i18n } from "@/shared/i18n";
import type { Lang } from "@/shared/i18n";
import { motion } from "framer-motion";

interface AboutContentProps {
  lang?: Lang;
}

export function AboutContent({ lang = "en" }: AboutContentProps) {
  const t = i18n[lang].about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start"
    >
      {/* Left Column - Principles & Stack */}
      <motion.div variants={itemVariants} className="space-y-8">
        {/* Principles Section */}
        <div className="group">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            {t.principles_title}
          </h3>
          <ul className="space-y-4">
            {principles.map((principle) => (
              <motion.li
                key={principle.key}
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 text-muted-foreground group/item cursor-default"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover/item:scale-150 transition-transform" />
                <span className="flex-1 leading-relaxed group-hover/item:text-foreground transition-colors">
                  {t.principles[principle.key as keyof typeof t.principles]}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Stack Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            {t.stack_title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default shadow-sm"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Column - Highlights Card */}
      <motion.div variants={itemVariants}>
        <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-hover)] shadow-[var(--shadow-soft)] bg-gradient-to-br from-card to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <span className="inline-block w-1 h-8 bg-gradient-to-b from-primary to-accent-foreground rounded-full" />
              {t.highlights_title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-5">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={highlight.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group/highlight flex gap-3 items-start"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-sm leading-relaxed text-muted-foreground group-hover/highlight:text-foreground transition-colors">
                    {t.highlights[highlight.key as keyof typeof t.highlights]}
                  </span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Optional: Add a subtle CTA or info box */}
        <motion.div
          variants={itemVariants}
          className="mt-6 p-4 rounded-lg bg-accent/30 border border-accent-foreground/20 backdrop-blur-sm"
        >
          <p className="text-xs text-center text-muted-foreground">
            ⚡ All projects include responsive design, performance optimization,
            and clean code
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
