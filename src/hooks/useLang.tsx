import * as React from "react";

type LangContextType = {
  lang: "ru" | "en";
  setLang: (l: "ru" | "en") => void;
};

const LangContext = React.createContext<LangContextType | null>(null);

export function LangProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: "ru" | "en";
}) {
  const [lang, setLang] = React.useState(initialLang);

  React.useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  React.useEffect(() => {
    document.documentElement.lang = lang;

    try {
      window.localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = React.useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }
  return ctx;
}
