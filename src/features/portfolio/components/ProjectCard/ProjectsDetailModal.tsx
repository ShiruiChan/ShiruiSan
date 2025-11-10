import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";
import type { Project } from "@/src/shared/data";
import { TechTag } from "@/src/components/TechTag";

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
              {lang === "ru" ? "Описание" : "Description"}
            </h3>
            <p className="text-muted-foreground">{project.blurb}</p>
          </div>

          {/* Main Image */}
          {project.image?.[0] && (
            <div
              className="relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => onImageClick(0)}
            >
              <img
                src={project.image[0]}
                alt={project.alt || `${project.title} preview`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  {lang === "ru"
                    ? "Открыть в полном размере"
                    : "View full size"}
                </span>
              </div>
            </div>
          )}

          {/* Additional Images Grid */}
          {project.image && project.image.length > 1 && (
            <div>
              <h3 className="font-semibold mb-3">
                {lang === "ru" ? "Галерея" : "Gallery"}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {project.image.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-video w-full overflow-hidden rounded-md cursor-pointer group"
                    onClick={() => onImageClick(i + 1)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} preview ${i + 2}`}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
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
