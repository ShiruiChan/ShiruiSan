export function Tag({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full border text-sm transition ${
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "hover:bg-muted"
      }`}
    >
      {label}
    </button>
  );
}
