import React, { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
  type Transition,
} from "framer-motion";
import { Sun, Moon, Sparkles, ArrowRight } from "lucide-react";
import { useTranslate } from "@/hooks/useTranslate";
import { useTheme } from "@/hooks/useTheme";
import { MorphingText } from "./MorphingText";
import { MagneticButton } from "./MagneticButton";
import { InteractiveParticles } from "./InteractiveParticles";
import { useLang } from "@/hooks/useLang";

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
const FloatingOrb: React.FC<{
  className?: string;
  style?: React.CSSProperties | any;
}> = ({ className, style }) => (
  <motion.div
    aria-hidden
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 0.75, y: 0 }}
    transition={{ duration: 1.2, delay: 0.2 }}
    style={style}
    className={`pointer-events-none absolute aspect-square w-xl rounded-full blur-3xl ${
      className ?? ""
    }`}
  />
);

/* -------------------------------------------
   HERO with Parallax
------------------------------------------- */
export default function Hero() {
  const { theme, setTheme } = useTheme();
  const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const t = useTranslate();
  const { lang } = useLang();

  const morphWords = useMemo(
    () =>
      lang === "ru"
        ? ["Красивые", "Интерактивные", "Впечатляющие", "Современные"]
        : ["Beautiful", "Interactive", "Stunning", "Modern"],
    [lang]
  );

  // параллакс
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // слои: чем больше значение, тем «быстрее» едет при скролле
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]); // заголовок / CTA
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]); // подзаголовок / правая карточка
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]); // фоновые орбы / бейджи / буллеты
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const stats = [
    {
      k: t.hero.stats.frame_time_unit,
      v: t.hero.stats.frame_time_value,
      label: t.hero.stats.frame_time_label,
    },
    {
      k: t.hero.stats.runtime_deps_unit,
      v: t.hero.stats.runtime_deps_value,
      label: t.hero.stats.runtime_deps_label,
    },
    {
      k: t.hero.stats.vibes_unit,
      v: t.hero.stats.vibes_value,
      label: t.hero.stats.vibes_label,
    },
  ];

  // prefer reduced motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // удобные style-хелперы, чтобы не применять трансформации при reduced motion
  const sLayer = (val: any) => (prefersReducedMotion ? undefined : { y: val });

  return (
    <div
      ref={ref}
      className="relative min-h-screen bg-[--bg] text-[--fg] antialiased overflow-hidden"
    >
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
        .ringed { box-shadow: 0 0 0 6px var(--ring); } /* fixed */
      `}</style>

      {/* Background layer: gradient orbs + particles */}
      <div className="absolute inset-0">
        {/* орбы двигаются медленнее всех */}
        <FloatingOrb
          className="left-[-10%] top-[-10%] bg-linear-to-br from-[rgba(124,92,255,0.25)] to-[rgba(255,182,193,0.2)]"
          style={sLayer(y3)}
        />
        <FloatingOrb
          className="right-[-15%] bottom-[-15%] bg-linear-to-tr from-[rgba(61,199,255,0.2)] to-[rgba(139,92,246,0.25)]"
          style={sLayer(y3)}
        />
        {/* particles можно тоже слегка подвязать */}
        <motion.div
          style={sLayer(y3)}
          className="absolute inset-0 overflow-hidden"
        >
          <InteractiveParticles />
        </motion.div>

        {/* мягкое выцветание фона при скролле */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.12),transparent_60%)]"
            style={{ opacity }}
          />
        )}
      </div>

      {/* Content container */}
      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-16 md:py-24"
        style={prefersReducedMotion ? undefined : { opacity, scale }}
      >
        {/* Top bar */}
        <motion.div
          className="mb-14 flex items-center justify-between"
          style={sLayer(y3)}
        >
          <div className="flex items-center gap-3">
            <div
              className="glass ringed grid size-9 place-items-center rounded-xl"
              aria-hidden
            >
              <Sparkles className="size-5 text-[--fg]" />
            </div>
            <span className="text-sm font-medium tracking-wide text-[--muted]">
              {t.brand} · Lory.Lab
            </span>
          </div>

          <button
            onClick={switchTheme}
            className="group flex items-center gap-2 rounded-2xl border border-transparent bg-[--bg-elev] px-3 py-2 text-sm shadow-sm transition hover:border-[--ring] hover:shadow-md"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
            <span className="text-[--muted]">
              {theme === "dark" ? "Cozy Light" : "Rich Dark"}
            </span>
          </button>
        </motion.div>

        {/* Hero core */}
        <div className="grid flex-1 content-center items-center gap-10 md:grid-cols-2">
          {/* Left: heading / copy / ctas / stats */}
          <div>
            <motion.h1
              className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl"
              initial={
                prefersReducedMotion ? undefined : (fadeUp.initial as any)
              }
              animate={
                prefersReducedMotion ? undefined : (fadeUp.animate as any)
              }
              style={sLayer(y1)}
            >
              {t.hero.title_html1}{" "}
              <MorphingText
                words={morphWords} // ⬅️ локализованные слова
                className="text-4xl md:text-7xl"
              />{" "}
              {t.hero.title_html2}
            </motion.h1>

            <motion.p
              className="mt-5 max-w-prose text-lg text-[--muted] md:text-xl"
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
              style={sLayer(y2)}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              style={sLayer(y2)}
            >
              <motion.a
                initial={
                  prefersReducedMotion ? undefined : (pop.initial as any)
                }
                animate={
                  prefersReducedMotion ? undefined : (pop.animate as any)
                }
                href="#services"
              >
                <MagneticButton size="lg" className="gap-2">
                  {t.hero.primary_cta} <ArrowRight className="w-4 h-4" />
                </MagneticButton>
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
                href="#projects"
              >
                <MagneticButton variant="outline" size="lg">
                  {t.hero.secondary_cta}
                </MagneticButton>
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-10 grid max-w-md grid-cols-3 gap-4"
              style={sLayer(y3)}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-2xl p-4 text-center shadow-md"
                  whileHover={
                    prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }
                  }
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <div className="text-2xl font-extrabold tracking-tight">
                    {s.v}
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs text-[--muted]">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
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
            style={sLayer(y2)}
          >
            <div className="glass ringed relative rounded-3xl p-6 shadow-2xl">
              <motion.div
                className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-linear-to-br from-[rgba(124,92,255,0.4)] to-[rgba(255,182,193,0.25)] blur-2xl"
                style={sLayer(y3)}
              />
              <motion.div
                className="pointer-events-none absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-linear-to-br from-[rgba(61,199,255,0.35)] to-[rgba(139,92,246,0.25)] blur-2xl"
                style={sLayer(y3)}
              />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[--muted]">
                    {t.hero.preview.header_kicker}
                  </div>
                  <div className="mt-2 text-2xl font-extrabold tracking-tight">
                    {t.hero.preview.header_title}
                  </div>
                </div>
                <motion.div
                  className="rounded-xl bg-[--bg] px-3 py-1 text-xs text-[--muted] shadow-inner"
                  style={sLayer(y3)}
                >
                  {t.hero.preview.badge}
                </motion.div>
              </div>

              <div className="mt-6 grid gap-3">
                {t.hero.preview.bullets.map((bullet, i) => (
                  <motion.div
                    key={bullet}
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
                    className="rounded-xl border border-[--ring]/40 bg-[--bg]/60 p-4 shadow-sm"
                    style={sLayer(y3)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-2.5 shrink-0 rounded-full bg-[--primary]" />
                      <p className="text-sm text-[--muted]">{bullet}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 flex items-center justify-between"
                style={sLayer(y3)}
              >
                <div className="text-xs text-[--muted]">
                  {t.hero.preview.note_particles}
                </div>
                <div className="text-xs text-[--muted]">
                  {t.hero.preview.note_hidpi}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
