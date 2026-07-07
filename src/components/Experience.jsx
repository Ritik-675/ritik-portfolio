import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Experience
          </h2>
          <p className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Where I've built
          </p>
        </Reveal>

        <div className="relative mt-14 space-y-10">
          <div className="absolute top-2 bottom-2 left-[15px] hidden w-px bg-slate-200 sm:block dark:bg-slate-800" />

          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 0.08}>
              <div className="relative flex gap-6">
                <div className="hidden sm:block">
                  <div
                    className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border ${
                      job.current
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : "border-slate-300 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400"
                    }`}
                  >
                    <Briefcase size={14} />
                  </div>
                </div>

                <div className="flex-1 rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 dark:border-slate-800 dark:bg-slate-900/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                      {job.role} · {job.company}
                    </h3>
                    {job.current && (
                      <span className="rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {job.location} · {job.period}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
