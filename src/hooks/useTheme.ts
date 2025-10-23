import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // 1️⃣ при первой загрузке пробуем системную тему
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) return saved;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    // 2️⃣ плавный переход при смене темы
    root.classList.add("[&_*]:!transition-none");
    requestAnimationFrame(() => {
      root.classList.remove("[&_*]:!transition-none");
    });

    // 3️⃣ установка класса dark/light
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
