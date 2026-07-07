import Reveal from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Skills
          </h2>
          <p className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            What I bring
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal key={group} delay={i * 0.08}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
