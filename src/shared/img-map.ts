// Helper functions for image handling
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findImageForTitle(title: string): string {
  const slug = slugify(title);
  return `/projects/${slug}.webp`;
}
