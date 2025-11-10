"use client";
import { LangProvider } from "@/src/hooks/useLang";
import { ThemeProvider } from "@/src/hooks/useTheme";

export default function Providers({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "ru" | "en";
}) {
  return (
    <ThemeProvider>
      <LangProvider initialLang={lang}>{children}</LangProvider>
    </ThemeProvider>
  );
}
