import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface TechTagProps {
  name: string;
  description?: string;
  delay?: number;
}

export const TechTag = ({ name, description, delay = 0 }: TechTagProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const tagRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = tagRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={cn(
              "inline-block text-xs rounded-full cursor-default",
              "transition-all duration-500",
              isVisible
                ? "opacity-100 blur-0 scale-100"
                : "opacity-0 blur-sm scale-95"
            )}
            style={{
              transitionDelay: `${delay}ms`,
            }}
            onMouseEnter={() => setIsVisible(true)}
            ref={tagRef}
          >
            {name}
          </span>
        </TooltipTrigger>
        {description && (
          <TooltipContent>
            <p>{description}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
