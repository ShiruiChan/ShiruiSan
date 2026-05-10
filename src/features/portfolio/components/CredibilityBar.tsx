import { LOGO_ITEMS } from "@/shared/data";
import Image from "next/image";
import { useLang } from "@/hooks/useLang";

export function CredibilityBar() {
  const { lang } = useLang();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
        {lang === "ru" ? "Избранные работы" : "Selected work"}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 items-center opacity-80">
        {LOGO_ITEMS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="h-10 rounded bg-muted/60 grid place-items-center px-3 transition group-hover:bg-muted">
              {l.icon ? (
                <Image
                  src={l.icon}
                  alt={l.label}
                  width={96}
                  height={24}
                  className="h-6 object-contain"
                />
              ) : (
                <span className="text-xs sm:text-sm">{l.label}</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
