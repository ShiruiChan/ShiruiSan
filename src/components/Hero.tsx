import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Sun, Moon, ChevronRight, Rocket, Sparkles } from "lucide-react";

/* -------------------------------------------
   Theme (cozy light + rich dark) with <html data-theme="">
------------------------------------------- */
function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return { theme, setTheme };
}

/* -------------------------------------------
   Particles Background (HiDPI-aware + pause on hidden tab)
------------------------------------------- */
const ParticlesBackground: React.FC<{ color?: string }> = ({
  color = "139, 92, 246",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    let particleCount = Math.round(90 * (window.innerWidth / 1440));

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      canvas.width = innerWidth * DPR;
      canvas.height = innerHeight * DPR;
      // Работать в логических координатах (CSS px):
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const makeParticle = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    });

    const fillParticles = () => {
      particles.length = 0;
      particleCount = Math.round(90 * (window.innerWidth / 1440));
      for (let i = 0; i < particleCount; i++) particles.push(makeParticle());
    };

    const draw = () => {
      // Очищаем в логических координатах (учтён setTransform)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > window.innerWidth) p.speedX *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();

        // connections
        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j];
          const dx = p.x - o.x;
          const dy = p.y - o.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color}, ${0.12 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      draw();
      rafRef.current = requestAnimationFrame(animate);
    };

    const onResize = () => {
      resizeCanvas();
      fillParticles();
    };

    const onVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        animate();
      }
    };

    resizeCanvas();
    fillParticles();
    animate();

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60 will-change-transform"
      aria-hidden
    />
  );
};

/* -------------------------------------------
   Motion variants
------------------------------------------- */
const spring1: Transition = { type: "spring", stiffness: 140, damping: 16 };
const spring2: Transition = { type: "spring", stiffness: 140, damping: 14 };

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: spring1 },
};
const pop: Variants = {
  initial: { opacity: 0, scale: 0.96, rotateX: -6 },
  animate: { opacity: 1, scale: 1, rotateX: 0, transition: spring2 },
};

/* -------------------------------------------
   Decorative orb
------------------------------------------- */
const FloatingOrb: React.FC<{ className?: string }> = ({ className }) => (
  <motion.div
    aria-hidden
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 0.75, y: 0 }}
    transition={{ duration: 1.2, delay: 0.2 }}
    className={`pointer-events-none absolute aspect-square w-[36rem] rounded-full blur-3xl ${
      className ?? ""
    }`}
  />
);

/* -------------------------------------------
   HERO
------------------------------------------- */
export default function Hero() {
  const { theme, setTheme } = useTheme();
  const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // prefer reduced motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased">
      {/* Global theme CSS variables */}
      <style>{`
        :root[data-theme='light'] {
          --bg: #f6f3ea;
          --bg-elev: #ffffff;
          --fg: #2a2520;
          --muted: #6b625b;
          --primary: #7c5cff;
          --primary-ink: #ffffff;
          --ring: rgba(124, 92, 255, 0.35);
          --shadow: 0 10px 30px rgba(20,16,12,0.08);
          --card-glass: rgba(255,255,255,0.6);
        }
        :root[data-theme='dark'] {
          --bg: #0c0b10;
          --bg-elev: #13121a;
          --fg: #e9e6ff;
          --muted: #a39db7;
          --primary: #8b5cf6;
          --primary-ink: #0c0b10;
          --ring: rgba(139, 92, 246, 0.35);
          --shadow: 0 12px 40px rgba(0,0,0,0.35);
          --card-glass: rgba(19,18,26,0.55);
        }
        .btn-primary { box-shadow: var(--shadow); }
        .glass {
          background: var(--card-glass);
          backdrop-filter: saturate(140%) blur(12px);
          -webkit-backdrop-filter: saturate(140%) blur(12px);
        }
        .ringed { box-shadow: 0 0 0 6px var(--ring); }
      `}</style>

      {/* Background layer: gradient orbs + particles */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingOrb className="left-[-10%] top-[-10%] bg-gradient-to-br from-[rgba(124,92,255,0.25)] to-[rgba(255,182,193,0.2)]" />
        <FloatingOrb className="right-[-15%] bottom-[-15%] bg-gradient-to-tr from-[rgba(61,199,255,0.2)] to-[rgba(139,92,246,0.25)]" />
        <ParticlesBackground
          color={theme === "dark" ? "139, 92, 246" : "124, 92, 255"}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-16 md:py-24">
        {/* Top bar */}
        <div className="mb-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="glass ringed grid size-9 place-items-center rounded-xl"
              aria-hidden
            >
              <Sparkles className="size-5 text-[var(--fg)]" />
            </div>
            <span className="text-sm font-medium tracking-wide text-[var(--muted)]">
              ShiruiSan · Lory.Lab
            </span>
          </div>

          <button
            onClick={switchTheme}
            className="group flex items-center gap-2 rounded-2xl border border-transparent bg-[var(--bg-elev)] px-3 py-2 text-sm shadow-sm transition hover:border-[var(--ring)] hover:shadow-md"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
            <span className="text-[var(--muted)]">
              {theme === "dark" ? "Cozy Light" : "Rich Dark"}
            </span>
          </button>
        </div>

        {/* Hero core */}
        <div className="grid flex-1 content-center items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
              initial={
                prefersReducedMotion ? undefined : (fadeUp.initial as any)
              }
              animate={
                prefersReducedMotion ? undefined : (fadeUp.animate as any)
              }
            >
              Build delightful UIs with
              <span className="ml-3 inline-block rounded-2xl bg-gradient-to-r from-[var(--primary)] to-pink-400 px-3 py-1 mt-4 text-[var(--primary-ink)]">
                WOW
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-prose text-lg text-[var(--muted)] md:text-xl"
              initial={
                prefersReducedMotion ? undefined : (fadeUp.initial as any)
              }
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      ...(fadeUp.animate as any),
                      transition: {
                        delay: 0.06,
                        type: "spring",
                        stiffness: 130,
                        damping: 18,
                      },
                    }
              }
            >
              Subtle motion, cozy colors, and a calm particle field. Drop this
              hero into your page and tune the slots below.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                initial={
                  prefersReducedMotion ? undefined : (pop.initial as any)
                }
                animate={
                  prefersReducedMotion ? undefined : (pop.animate as any)
                }
                href="#get-started"
                className="btn-primary inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-5 py-3 font-semibold text-[var(--primary-ink)] shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] hover:brightness-110"
              >
                <Rocket className="size-5" />
                Get started
              </motion.a>

              <motion.a
                initial={
                  prefersReducedMotion
                    ? undefined
                    : ({ ...(pop.initial as any), rotateX: -10 } as any)
                }
                animate={
                  prefersReducedMotion
                    ? undefined
                    : ({
                        ...(pop.animate as any),
                        transition: {
                          delay: 0.06,
                          type: "spring",
                          stiffness: 140,
                          damping: 16,
                        },
                      } as any)
                }
                href="#learn-more"
                className="inline-flex items-center gap-2 rounded-2xl border border-transparent bg-[var(--bg-elev)] px-5 py-3 font-medium text-[var(--fg)] shadow-sm transition hover:border-[var(--ring)] hover:shadow-md"
              >
                Learn more
                <ChevronRight className="size-4" />
              </motion.a>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { k: "ms", v: "~60", label: "Frame time" },
                { k: "kb", v: "0", label: "Runtime deps" },
                { k: "⭐", v: "WOW", label: "Vibes" },
              ].map((s, i) => (
                <motion.div
                  key={s.k}
                  className="glass rounded-2xl p-4 text-center shadow-md"
                  initial={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 0, y: 16, scale: 0.98 }
                  }
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            delay: 0.08 + i * 0.06,
                            type: "spring",
                            stiffness: 140,
                            damping: 18,
                          },
                        }
                  }
                >
                  <div className="text-2xl font-extrabold tracking-tight">
                    {s.v}
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs text-[var(--muted)]">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right card / preview */}
          <motion.div
            className="relative"
            initial={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, x: 30, rotate: -1 }
            }
            animate={
              prefersReducedMotion
                ? undefined
                : { opacity: 1, x: 0, rotate: 0, transition: { ...spring1 } }
            }
          >
            <div className="glass ringed relative rounded-3xl p-6 shadow-2xl">
              <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[rgba(124,92,255,0.4)] to-[rgba(255,182,193,0.25)] blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-gradient-to-br from-[rgba(61,199,255,0.35)] to-[rgba(139,92,246,0.25)] blur-2xl" />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[var(--muted)]">
                    Preview
                  </div>
                  <div className="mt-2 text-2xl font-extrabold tracking-tight">
                    Cozy Light / Rich Dark
                  </div>
                </div>
                <div className="rounded-xl bg-[var(--bg)] px-3 py-1 text-xs text-[var(--muted)] shadow-inner">
                  Themed
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  "Neutral parchment base",
                  "Warm grays for copy",
                  "Violet accents with softness",
                ].map((t, i) => (
                  <motion.div
                    key={t}
                    initial={
                      prefersReducedMotion ? undefined : { opacity: 0, x: -10 }
                    }
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : {
                            opacity: 1,
                            x: 0,
                            transition: {
                              delay: 0.12 + i * 0.05,
                              duration: 0.3,
                            },
                          }
                    }
                    className="rounded-xl border border-[var(--ring)]/40 bg-[var(--bg)]/60 p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-2.5 shrink-0 rounded-full bg-[var(--primary)]" />
                      <p className="text-sm text-[var(--muted)]">{t}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-[var(--muted)]">
                  Particles pause on background tabs
                </div>
                <div className="text-xs text-[var(--muted)]">
                  HiDPI crisp lines
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        {/* <div className="mt-16 text-center text-xs text-[var(--muted)]">
          Drop-in hero · Tailwind + Framer Motion · Particles integrated
        </div> */}
      </div>
    </div>
  );
}
