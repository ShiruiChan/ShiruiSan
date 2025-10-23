export const images = import.meta.glob(
  "/public/projects/**/*.{png,jpg,jpeg,webp,avif}",
  { eager: true }
) as Record<string, { default: string }>;
