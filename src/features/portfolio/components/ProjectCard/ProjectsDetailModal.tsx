import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, BarChart3 } from "lucide-react";
import type { Project } from "@/shared/data";
import { TechTag } from "@/components/TechTag";
import Image from "next/image";

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
  lang: "ru" | "en";
  onImageClick: (index: number) => void;
}

export function ProjectDetailsModal({
  project,
  onClose,
  lang,
  onImageClick,
}: ProjectDetailsModalProps) {
  const text = (value: { ru: string; en: string }) => value[lang];
  const caseLabels =
    lang === "ru"
      ? {
          overview: "Кратко",
          problem: "Проблема",
          research: "Исследование",
          solution: "Решение",
          result: "Результат",
          metrics: "Метрики и артефакты",
          role: "Роль",
          duration: "Формат",
          client: "Клиент",
          quote: "Отзыв",
        }
      : {
          overview: "Overview",
          problem: "Problem",
          research: "Research",
          solution: "Solution",
          result: "Result",
          metrics: "Metrics and artifacts",
          role: "Role",
          duration: "Format",
          client: "Client",
          quote: "Testimonial",
        };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Code2 className="w-6 h-6 text-primary" />
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">
              {caseLabels.overview}
            </h3>
            <p className="text-muted-foreground">{text(project.blurb)}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border bg-muted/20 p-3">
              <div className="text-xs text-muted-foreground">
                {caseLabels.role}
              </div>
              <div className="mt-1 text-sm font-medium">
                {text(project.caseStudy.role)}
              </div>
            </div>
            <div className="rounded-lg border bg-muted/20 p-3">
              <div className="text-xs text-muted-foreground">
                {caseLabels.duration}
              </div>
              <div className="mt-1 text-sm font-medium">
                {text(project.caseStudy.duration)}
              </div>
            </div>
            <div className="rounded-lg border bg-muted/20 p-3">
              <div className="text-xs text-muted-foreground">
                {caseLabels.client}
              </div>
              <div className="mt-1 text-sm font-medium">
                {text(project.caseStudy.clientType)}
              </div>
            </div>
          </div>

          {/* Main Image */}
          {project.image?.[0] && (
            <button
              type="button"
              className="relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => onImageClick(0)}
              aria-label={
                lang === "ru"
                  ? `Открыть главное изображение проекта ${project.title}`
                  : `Open main image for ${project.title}`
              }
            >
              <Image
                src={project.image[0]}
                alt={project.alt || `${project.title} preview`}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  {lang === "ru"
                    ? "Открыть в полном размере"
                    : "View full size"}
                </span>
              </div>
            </button>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [caseLabels.problem, project.caseStudy.problem],
              [caseLabels.research, project.caseStudy.research],
              [caseLabels.solution, project.caseStudy.solution],
              [caseLabels.result, project.caseStudy.result],
            ].map(([label, value]) => (
              <section key={label as string} className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">{label as string}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text(value as { ru: string; en: string })}
                </p>
              </section>
            ))}
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 font-semibold">
              <BarChart3 className="h-4 w-4 text-primary" />
              {caseLabels.metrics}
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {project.caseStudy.metrics.map((metric) => (
                <div
                  key={`${metric.value}-${text(metric.label)}`}
                  className="rounded-lg border bg-card p-4"
                >
                  <div className="text-xl font-bold tracking-tight">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {text(metric.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {project.caseStudy.testimonial && (
            <figure className="rounded-lg border bg-muted/20 p-4">
              <figcaption className="mb-2 text-sm font-semibold">
                {caseLabels.quote}
              </figcaption>
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                “{text(project.caseStudy.testimonial.quote)}”
              </blockquote>
              <div className="mt-3 text-xs text-muted-foreground">
                {project.caseStudy.testimonial.author}
              </div>
            </figure>
          )}

          {/* Additional Images Grid */}
          {project.image && project.image.length > 1 && (
            <div>
              <h3 className="font-semibold mb-3">
                {lang === "ru" ? "Галерея" : "Gallery"}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {project.image.slice(1).map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    className="relative aspect-video w-full overflow-hidden rounded-md cursor-pointer group"
                    onClick={() => onImageClick(i + 1)}
                    aria-label={
                      lang === "ru"
                        ? `Открыть изображение ${i + 2} проекта ${project.title}`
                        : `Open ${project.title} image ${i + 2}`
                    }
                  >
                    <Image
                      src={img}
                      alt={`${project.title} preview ${i + 2}`}
                      fill
                      sizes="(min-width: 768px) 240px, 33vw"
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h3 className="font-semibold mb-3">
              {lang === "ru" ? "Технологии" : "Technologies"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground"
                >
                  <TechTag name={tag} delay={i * 100} />
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center pt-4">
            <Button size="lg" className="gap-2" asChild>
              <a href={project.link} target="_blank" rel="noreferrer">
                {lang === "ru" ? "Посетить сайт" : "Visit Website"}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
