export function PlaceholderAvatar() {
  return (
    <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/20">
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="currentColor" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect width="128" height="128" fill="url(#g)" />
        <circle cx="64" cy="48" r="24" fill="white" opacity="0.8" />
        <rect
          x="24"
          y="80"
          width="80"
          height="36"
          rx="18"
          fill="white"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
