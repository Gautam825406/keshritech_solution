export function LoadingSkeleton({ className = "h-4 w-full" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-slate-200/80 dark:bg-slate-700/60 ${className}`} />;
}