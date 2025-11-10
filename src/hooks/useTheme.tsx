// src/hooks/useTheme.tsx
"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";
type ThemeCtx = { theme: Theme; setTheme: (t: Theme) => void };

const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  // 0) безопасное начальное значение для SSR
  const [theme, setTheme] = useState<Theme>("light");

  // 1) гидратация только в браузере
  useEffect(() => {
    try {
      const saved =
        typeof window !== "undefined"
          ? (window.localStorage.getItem("theme") as Theme | null)
          : null;

      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      setTheme(saved ?? (prefersDark ? "dark" : "light"));
    } catch {
      // оставляем "light"
    }
  }, []);

  // 2) применение класса и сохранение
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.classList.add("[&_*]:!transition-none");
    requestAnimationFrame(() =>
      root.classList.remove("[&_*]:!transition-none")
    );

    root.classList.toggle("dark", theme === "dark");

    try {
      if (typeof window !== "undefined")
        window.localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
