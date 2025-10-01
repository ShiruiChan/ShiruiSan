import { Download, Languages, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/shared/profile";
import type { Lang } from "@/shared/i18n";
import { Rocket } from "lucide-react";

export function Header({
  lang,
  setLang,
  theme,
  setTheme,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: string;
  setTheme: (t: any) => void;
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-3">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 grid place-items-center">
            <Rocket className="w-4 h-4" />
          </div>
          <span>{profile.name}</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 ml-6 text-sm">
          <a className="hover:text-primary" href="#projects">
            {lang === "ru" ? "Проекты" : "Projects"}
          </a>
          <a className="hover:text-primary" href="#experience">
            {lang === "ru" ? "Опыт" : "Experience"}
          </a>
          <a className="hover:text-primary" href="#about">
            {lang === "ru" ? "Обо мне" : "About"}
          </a>
          <a className="hover:text-primary" href="#blog">
            Blog
          </a>
          <a className="hover:text-primary" href="#contact">
            {lang === "ru" ? "Контакты" : "Contact"}
          </a>
        </nav>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Language"
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
          >
            <Languages className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Theme toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
          <Button asChild className="gap-2">
            <a href={profile.resumeUrl}>
              <Download className="w-4 h-4" /> CV
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
