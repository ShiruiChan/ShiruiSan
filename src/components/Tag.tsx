import { cn } from "../lib/utils";

interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function Tag({ label, active, onClick }: TagProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 text-sm rounded-full transition-all duration-200",
        "border border-border hover:border-primary",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-background text-foreground hover:bg-accent"
      )}
    >
      {label}
    </button>
  );
}
