export default function Loading() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center pt-[var(--header-h)]" role="status" aria-label="Loading">
      <span className="h-px w-24 animate-pulse bg-gradient-to-r from-violet to-magenta" />
    </div>
  );
}
