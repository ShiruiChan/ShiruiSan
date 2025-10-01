import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-gradient-to-b from-white/60 to-white/90 backdrop-blur">
      {/* декоративная линия */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />

      <div className="mx-auto w-[min(1100px,92%)] px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">
              YourName
            </h3>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Frontend • UI/UX • Performance. I craft clean, fast interfaces
              with delightful micro-interactions.
            </p>
          </div>

          {/* Quick links */}
          <nav className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Navigate
              </p>
              <a
                className="block text-slate-700 hover:text-slate-900"
                href="#home"
              >
                Home
              </a>
              <a
                className="block text-slate-700 hover:text-slate-900"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="block text-slate-700 hover:text-slate-900"
                href="#about"
              >
                About
              </a>
              <a
                className="block text-slate-700 hover:text-slate-900"
                href="#contact"
              >
                Contact
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Resources
              </p>
              <a
                className="block text-slate-700 hover:text-slate-900"
                href="/cv.pdf"
              >
                CV / Resume
              </a>
              <a
                className="block text-slate-700 hover:text-slate-900"
                href="mailto:hello@example.com"
              >
                Email
              </a>
              <a
                className="block text-slate-700 hover:text-slate-900"
                href="https://t.me/username"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
              <a
                className="block text-slate-700 hover:text-slate-900"
                href="https://github.com/yourname"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </nav>

          {/* CTA card */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-700">
              Have a project in mind? Let’s build something great.
            </p>
            <a
              href="#contact"
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Start a project
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-3 inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Back to top ↑
            </button>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {year} YourName. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              className="transition hover:scale-105"
              href="https://github.com/yourname"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-slate-700"
              >
                <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.29-1.54 3.3-1.22 3.3-1.22.66 1.65.24 2.87.12 3.17.77.83 1.24 1.89 1.24 3.19 0 4.58-2.8 5.6-5.47 5.9.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 0z" />
              </svg>
            </a>
            <a
              className="transition hover:scale-105"
              href="https://t.me/username"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              title="Telegram"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 240 240"
                fill="currentColor"
                className="text-slate-700"
              >
                <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0zm58.62 82.68l-19.95 94.19c-1.5 6.76-5.49 8.43-11.11 5.25l-30.67-22.6-14.79 14.25c-1.63 1.63-3 3-6.14 3l2.19-31.24 56.86-51.3c2.47-2.19-.54-3.41-3.8-1.22l-70.3 44.26-30.28-9.46c-6.57-2.06-6.76-6.57 1.36-9.75l118.3-45.63c5.49-2.06 10.28 1.22 8.4 9.25z" />
              </svg>
            </a>
            <a
              className="transition hover:scale-105"
              href="mailto:hello@example.com"
              aria-label="Email"
              title="Email"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-slate-700"
              >
                <path d="M12 13.065L0 6.375V18a3 3 0 003 3h18a3 3 0 003-3V6.375l-12 6.69zm12-9.06V6L12 12 0 6V4.005A2.006 2.006 0 012.005 2h19.99A2.006 2.006 0 0124 4.005z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
