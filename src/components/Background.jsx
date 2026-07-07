export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid text-slate-200 opacity-60 dark:text-slate-800 dark:opacity-40" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/10" />
      <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl dark:bg-slate-700/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white dark:from-slate-950 dark:via-slate-950/70 dark:to-slate-950" />
    </div>
  );
}
