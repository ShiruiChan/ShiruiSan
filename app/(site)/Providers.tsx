// app/(site)/Providers.tsx
"use client";

import { LangProvider } from "@/hooks/useLang";
// + другие провайдеры

export function Providers({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}