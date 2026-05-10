import { i18n, type Lang } from "./i18n";

export function getNavLabel(id: string, lang: Lang): string {
  const t = i18n[lang]?.nav || {};
  if (id in t) return (t as any)[id] as string;

  const map: Record<string, keyof typeof t> = {
    home: "home",
    about: "about",
    projects: "projects",
    services: "services",
    process: "process",
    experience: "experience",
    // blog: "blog",
    contact: "contact",
  };

  const key = map[id];
  if (key && t[key]) return t[key] as string;

  return id.charAt(0).toUpperCase() + id.slice(1);
}
