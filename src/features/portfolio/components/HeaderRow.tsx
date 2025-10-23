export function HeaderRow({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  //ы
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
