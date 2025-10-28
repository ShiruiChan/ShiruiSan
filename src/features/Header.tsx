// src/components/Header.tsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_SECTIONS } from "@/shared/data";
import { useTheme } from "@/hooks/useTheme";
import { useLang } from "@/hooks/useLang";
import { getNavLabel } from "@/shared/navLabels";
import { Moon, Sun } from "lucide-react";

function useScrollSpy(ids: string[], offset = 120) {
  const [active, setActive] = useState<string>(ids[0] || "");
  useEffect(() => {
    const elms = ids
      .map((hash) => document.querySelector(hash))
      .filter(Boolean) as HTMLElement[];

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY + offset;
          for (let i = elms.length - 1; i >= 0; i--) {
            const s = elms[i];
            if (s.offsetTop <= y) {
              setActive("#" + s.id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return active;
}

export default function Header({
  logo = "Ренат Харлампьев",
}: {
  logo?: string | React.ReactNode;
}) {
  const ids = useMemo(() => NAV_SECTIONS.map((s) => `#${s.id}`), []);
  const active = useScrollSpy(ids, 120);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme(); // ✅ тема (localStorage + класс .dark)
  const { lang, setLang } = useLang(); // ✅ язык (localStorage + <html lang>)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-px
 					bg-gradient-to-r from-transparent via-slate-300/40 to-transparent
 					dark:via-white/10"
      />
      <nav
        className={`fixed left-0 right-0 top-2 z-50 mx-auto w-[min(1100px,92%)] rounded-2xl
				border border-white/10 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50
				shadow-md
				dark:border-white/10 dark:bg-slate-900/70 dark:supports-[backdrop-filter]:bg-slate-900/55
				dark:backdrop-blur-xl dark:backdrop-saturate-150
				${
          scrolled
            ? "shadow-lg dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
            : "shadow-md dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <a
            href="#home"
            className="select-none text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-100"
          >
            {logo}
          </a>

          {/* desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_SECTIONS.map((item) => {
              const href = `#${item.id}`;
              const isActive = active === href;
              return (
                <a
                  key={href}
                  href={href}
                  className="relative rounded-xl px-3 py-2 text-sm font-medium
									 text-slate-700 hover:text-slate-900
									 dark:text-slate-300 dark:hover:text-white"
                >
                  {getNavLabel(item.id, lang)}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-slate-900/5 dark:bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* controls */}
            <div className="ml-2 flex items-center gap-2 pl-2">
              {/* language switch */}
              <div className="inline-flex overflow-hidden rounded-xl border border-slate-300/70">
                <button
                  className={`px-2 py-1 text-xs font-semibold ${
                    lang === "ru"
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => setLang("ru")}
                >
                  RU
                </button>
                <button
                  className={`px-2 py-1 text-xs font-semibold ${
                    lang === "en"
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </div>

              {/* theme toggle */}
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-300/70 text-slate-700 hover:bg-slate-100"
                title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>

              <a
                href="#contact"
                className="ml-2 rounded-xl px-4 py-2 text-sm font-semibold
								  bg-slate-900 text-white hover:opacity-90
								  dark:bg-white dark:text-slate-900 dark:hover:opacity-95"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* mobile buger */}
          <button
            className="inline-flex items-center justify-center rounded-xl p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-6 origin-center bg-slate-900 dark:bg-slate-200 transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-6 bg-slate-900 dark:bg-slate-200 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-6 origin-center bg-slate-900 dark:bg-slate-200 transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="md:hidden dark:bg-slate-950/40"
            >
              <div className="grid gap-1 px-3 pb-3">
                {NAV_SECTIONS.map((item) => {
                  const href = `#${item.id}`;
                  const isActive = active === href;
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-3 py-2 text-base transition
											  ${
                          isActive
                            ? "bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white"
                            : "text-slate-700 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                        }`}
                    >
                      {getNavLabel(item.id, lang)}
                    </a>
                  );
                })}

                {/* controls row */}
                <div className="mt-1 flex items-center gap-2 px-3">
                  <div
                    className="inline-flex h-8 w-8 items-center justify-center rounded-xl
										  border border-slate-300/70 text-slate-700 hover:bg-slate-100
										  dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    <button
                      className={`px-2 py-1 text-xs font-semibold ${
                        lang === "ru"
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                      onClick={() => setLang("ru")}
                    >
                      RU
                    </button>
                    <button
                      className={`px-2 py-1 text-xs font-semibold ${
                        lang === "en"
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                      onClick={() => setLang("en")}
                    >
                      EN
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    } // ← тут переключаем
                    className="rounded-xl border border-slate-300 dark:border-slate-600 p-2 transition hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    aria-label="Toggle theme"
                    title="Toggle theme"
                  >
                    {theme === "light" ? (
                      <Moon className="h-4 w-4 text-slate-700" />
                    ) : (
                      <Sun className="h-4 w-4 text-slate-200" />
                    )}
                  </button>
                </div>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-slate-900 px-4 py-2 text-base font-semibold text-white hover:opacity-90"
                >
                  Get in touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
