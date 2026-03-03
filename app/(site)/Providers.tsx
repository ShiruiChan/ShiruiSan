"use client";

import * as React from "react";
import { LangProvider } from "@/hooks/useLang";
import { ThemeProvider } from "@/hooks/useTheme";

export function Providers({
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