import Reveal from "./Reveal";
import { about, aboutStats } from "../data";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            About
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-2xl font-medium leading-relaxed text-slate-800 sm:text-3xl dark:text-slate-200">
            {about}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {aboutStats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 + i * 0.05}>
              <div className="border-l-2 border-emerald-500/40 pl-4">
                <p className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
