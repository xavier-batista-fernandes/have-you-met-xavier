export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-neutral-300 dark:bg-amber-50 ${className}`}
    ></div>
  );
}
