import React from "react";
import { Sparkles } from "lucide-react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
