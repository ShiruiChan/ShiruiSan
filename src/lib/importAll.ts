export function importAll(r: Record<string, any>) {
  return Object.keys(r).map((key) => ({
    src: r[key].default,
    filename: key.replace("./", ""),
  }));
}
