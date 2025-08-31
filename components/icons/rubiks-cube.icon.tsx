// icons/rubik-cube-icon.tsx
export function RubikCubeIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="An icon of a Rubik's cube."
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer cube */}
      <rect x="8" y="8" width="48" height="48" stroke="currentColor" strokeWidth="2" rx="2" />

      {/* Horizontal lines */}
      <line x1="8" y1="24" x2="56" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="40" x2="56" y2="40" stroke="currentColor" strokeWidth="2" />

      {/* Vertical lines */}
      <line x1="24" y1="8" x2="24" y2="56" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="8" x2="40" y2="56" stroke="currentColor" strokeWidth="2" />

      {/* Optional: colored squares for flair */}
      <rect x="10" y="10" width="12" height="12" fill="#FF3B30" />
      <rect x="26" y="10" width="12" height="12" fill="#FFCC00" />
      <rect x="42" y="10" width="12" height="12" fill="#34C759" />
      <rect x="10" y="26" width="12" height="12" fill="#007AFF" />
      <rect x="26" y="26" width="12" height="12" fill="#FF9500" />
      <rect x="42" y="26" width="12" height="12" fill="#AF52DE" />
      <rect x="10" y="42" width="12" height="12" fill="#5AC8FA" />
      <rect x="26" y="42" width="12" height="12" fill="#FF2D55" />
      <rect x="42" y="42" width="12" height="12" fill="#4CD964" />
    </svg>
  );
}
