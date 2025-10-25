import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
}

export const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const particleCount = 50;
    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        hue: 260,
      });
    }
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || particles.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Mouse repulsion
        const dx = particle.x - mousePos.current.x;
        const dy = particle.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = 150;

        if (distance < minDistance) {
          const force = (minDistance - distance) / minDistance;
          particle.vx += (dx / distance) * force * 0.5;
          particle.vy += (dy / distance) * force * 0.5;
          // particle.hue = (particle.hue + 2) % 360;
        } else {
          // Return to original velocity
          particle.vx *= 0.98;
          particle.vy *= 0.98;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, 0.6)`;
        ctx.fill();

        // Draw connections
        particles.forEach((other) => {
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(${particle.hue}, 70%, 60%, ${
              0.2 * (1 - distance2 / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20 will-change-transform"
    />
  );
};
