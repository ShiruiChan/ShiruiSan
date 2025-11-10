"use client";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

type Lang = "ru" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangCtx = createContext<Ctx | undefined>(undefined);

export function LangProvider({
  children,
  initialLang = "ru",
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);

  // синхронизация при смене сегмента /[lang]
  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
