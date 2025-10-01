import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, ExternalLink, Filter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { allTags, projects } from "@/shared/data";
import { Tag } from "./Tag";
import { useMemo, useState } from "react";

export function ProjectsGrid({ lang }: { lang: "ru" | "en" }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = (p.title + p.blurb + p.tags.join(" "))
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesTag = activeTag ? p.tags.includes(activeTag) : true;
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
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

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {filtered.map((p) => (
          <div key={p.title} className="mb-6 break-inside-avoid">
            <Card className="overflow-hidden hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code2 className="w-5 h-5 text-primary" /> {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="ghost" className="gap-2" asChild>
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {lang === "ru" ? "Демо" : "Demo"}{" "}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="sm" className="gap-2" variant="secondary">
                  {lang === "ru" ? "Подробнее" : "Details"}{" "}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
