import { useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { Card } from "../components/ui/card";
import { cn } from "../lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = ((e.clientY - centerY) / rect.height) * -20;
    const rotateY = ((e.clientX - centerX) / rect.width) * 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="perspective-1000"
    >
      <Card
        className={cn(
          "transition-all duration-300 relative overflow-hidden",
          className
        )}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${
            rotation.y
          }deg) scale(${isHovering ? 1.02 : 1})`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${
              cardRef.current ? ((rotation.y / 20) * 50 + 50).toFixed(2) : 50
            }% ${
              cardRef.current ? ((rotation.x / -20) * 50 + 50).toFixed(2) : 50
            }%, hsl(var(--primary) / 0.2) 0%, transparent 50%)`,
            opacity: isHovering ? 1 : 0,
          }}
        />
        {children}
      </Card>
    </div>
  );
};
