"use client";
import { motion } from "framer-motion";
// import { Moon, Sun, Globe } from "lucide-react";
import { useTranslate } from "@/hooks/useTranslate";

export default function Footer() {
  const year = new Date().getFullYear();
  // const { theme, setTheme } = useTheme();
  // const { lang, setLang } = useLang();
  const t = useTranslate();

  return (
    <footer className="relative mt-20 bg-gradient-to-b from-white/70 to-white/90 backdrop-blur dark:from-[rgba(21,21,21)] dark:to-[rgba(124,92,255,0.25)] transition-color duration-500">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-400/50 to-transparent dark:via-slate-600/50" />

      <div className="mx-auto w-[min(1100px,92%)] px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {t.brand}
            </h3>
            <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-400">
              {t.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Navigate
              </p>
              {Object.entries(t.nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="block text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="space-y-2 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t.resources.title}
              </p>
              {/* <a
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
                href="/cv.pdf"
              >
                {t.resources.resume}
              </a> */}
              <a
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
                href="mailto:harlampevrenat@gmail.com"
              >
                {t.resources.email}
              </a>
              <a
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
                href="https://t.me/ShiruiSan"
                target="_blank"
              >
                {t.resources.telegram}
              </a>
              <a
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
                href="https://github.com/ShiruiChan"
                target="_blank"
              >
                {t.resources.github}
              </a>
            </div>
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-[rgba(124,92,255,0.25)]/40 p-5 shadow-sm backdrop-blur transition-colors"
          >
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {t.cta.text}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-slate-100 dark:text-slate-900 transition"
              >
                {t.cta.start}
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700/40"
              >
                {t.cta.back}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-700 pt-6 text-sm text-slate-500 dark:text-slate-400 md:flex-row">
          <p>
            © {year} {t.brand}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2">
            {/* theme toggle */}
            {/* <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-xl border border-slate-300 dark:border-slate-600 p-2 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition"
              title={
                theme === "light" ? t.footer.themeDark : t.footer.themeLight
              }
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4 text-slate-700" />
              ) : (
                <Sun className="h-4 w-4 text-slate-200" />
              )}
            </button> */}

            {/* language toggle */}
            {/* <button
              onClick={() => setLang(lang === "en" ? "ru" : "en")}
              className="flex items-center gap-1 rounded-xl border border-slate-300 dark:border-slate-600 px-2 py-1 text-xs uppercase hover:bg-slate-100 dark:hover:bg-slate-700/50 transition"
              title={t.footer.lang}
            >
              <Globe className="h-4 w-4" />
              {lang === "en" ? "RU" : "EN"}
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
