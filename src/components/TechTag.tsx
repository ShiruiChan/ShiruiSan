import { useState } from "react";
import { cn } from "@/lib/utils";
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
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      setTimeout(() => setIsVisible(true), delay);
                    }
                  },
                  { threshold: 0.5 }
                );
                observer.observe(el);
                return () => observer.disconnect();
              }
            }}
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
