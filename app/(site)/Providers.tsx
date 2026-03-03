"use client";

import * as React from "react";
import { LangProvider } from "@/hooks/useLang";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}