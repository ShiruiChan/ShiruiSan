"use client";

import * as React from "react";
import { LangProvider } from "@/hooks/useLang";

export function Providers({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "ru" | "en";
}) {
  return <LangProvider initialLang={lang}>{children}</LangProvider>;
}