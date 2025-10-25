import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, ExternalLink, Filter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { allTags, projects, type Project } from "@/shared/data";
import { Tag } from "./Tag";
import { useMemo, useState } from "react";
import { ImageModal } from "./ImageModal";
import { ProjectDetailsModal } from "./ProjectsDetailModal";
import { TiltCard } from "@/components/TiltCard";

export function ProjectsGrid({ lang }: { lang: "ru" | "en" }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageModalData, setImageModalData] = useState<{
    project: Project;
    imageIndex: number;
  } | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = (p.title + p.blurb + p.tags.join(" "))
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesTag = activeTag ? p.tags.includes(activeTag) : true;
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  const handleImageClick = (project: Project, imageIndex: number) => {
    setImageModalData({ project, imageIndex });
  };

  const handleDetailsClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      {imageModalData && imageModalData.project.image && (
        <ImageModal
          images={imageModalData.project.image}
          currentIndex={imageModalData.imageIndex}
          onClose={() => setImageModalData(null)}
          onNavigate={(index) =>
            setImageModalData({ ...imageModalData, imageIndex: index })
          }
          title={imageModalData.project.title}
        />
      )}

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          lang={lang}
          onImageClick={(index) => {
            setSelectedProject(null);
            handleImageClick(selectedProject, index);
          }}
        />
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            <Tag
              label={lang === "ru" ? "Все" : "All"}
              active={!activeTag}
              onClick={() => setActiveTag(null)}
            />
            {allTags.map((tag) => (
              <Tag
                key={tag}
                label={tag}
                active={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1" />
        <Input
          placeholder={
            lang === "ru" ? "Поиск по проектам…" : "Search projects…"
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
        {filtered.map((p) => (
          <div key={p.title} className="mb-6 break-inside-avoid">
            <TiltCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code2 className="w-5 h-5 text-primary" /> {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{p.blurb}</p>

                {/* Main image */}
                {p.image?.[0] && (
                  <div
                    className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => handleImageClick(p, 0)}
                  >
                    <img
                      src={p.image[0]}
                      alt={p.alt || `${p.title} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                )}

                {/* Mini grid below main image */}
                {p.image && p.image.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {p.image.slice(1, 4).map((img, i) => (
                      <div
                        key={i}
                        className="relative h-20 w-full overflow-hidden rounded-md cursor-pointer group"
                        onClick={() => handleImageClick(p, i + 1)}
                      >
                        <img
                          src={img}
                          alt={`${p.title} preview ${i + 1}`}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-xs text-muted-foreground">
                      +{p.tags.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {lang === "ru" ? "Демо" : "Demo"}{" "}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="gap-2"
                  variant="secondary"
                  onClick={() => handleDetailsClick(p)}
                >
                  {lang === "ru" ? "Подробнее" : "Details"}{" "}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </TiltCard>
          </div>
        ))}
      </div>
    </>
  );
}
