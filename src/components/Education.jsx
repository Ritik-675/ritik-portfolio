import { GraduationCap, Award, Users } from "lucide-react";
import Reveal from "./Reveal";
import { education, leadershipRole, awards } from "../data";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Education & Leadership
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white/70 p-8 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-slate-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{education.school}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">{education.period}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white/70 p-8 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Users size={20} />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-slate-900 dark:text-white">
                {leadershipRole.title}, {leadershipRole.org}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">{leadershipRole.period}</p>
              <ul className="mt-3 space-y-2">
                {leadershipRole.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-6">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-8 dark:border-slate-800 dark:bg-slate-900/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Award size={20} />
            </div>
            <h3 className="mt-5 font-serif text-lg font-bold text-slate-900 dark:text-white">
              Recognition
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {awards.map((award) => (
                <div
                  key={award.name}
                  className="rounded-xl border border-slate-200 bg-white/60 p-5 dark:border-slate-800 dark:bg-slate-800/40"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Award size={16} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {award.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">{award.org}</p>
                  <span className="mt-3 inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
