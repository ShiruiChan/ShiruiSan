import type { ReactNode } from "react";
import { cn } from "../lib/utils";

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
}

export const GradientBorder = ({
  children,
  className,
}: GradientBorderProps) => {
  return (
    <div className={cn("group relative", className)}>
      <div className="absolute -inset-0.5 bg-linear-to-r from-primary via-accent to-primary rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]" />
      <div className="relative">{children}</div>
    </div>
  );
};
