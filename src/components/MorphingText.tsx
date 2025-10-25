import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MorphingTextProps {
  words: string[];
  className?: string;
}

export const MorphingText = ({ words, className }: MorphingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={cn(
        "inline-block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent transition-all duration-500 bg-size-[200%_auto]",
        isAnimating &&
          "animate-[gradient_0.5s_ease-in-out] opacity-0 blur-sm scale-95",
        !isAnimating && "opacity-100 blur-0 scale-100",
        className
      )}
      style={{
        animation: isAnimating ? undefined : "gradient 3s linear infinite",
      }}
    >
      {words[currentIndex]}
    </span>
  );
};
