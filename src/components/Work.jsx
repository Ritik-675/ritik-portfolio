import { Cloud, Workflow, Smartphone, Bot } from "lucide-react";
import Reveal from "./Reveal";
import { caseStudies } from "../data";

const icons = [Cloud, Workflow, Smartphone, Bot];

export default function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Featured Work
          </h2>
          <p className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Case studies
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {caseStudies.map((study, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={study.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {study.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {study.subtitle}
                  </p>

                  <div className="mt-6 space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Problem</p>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">{study.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Action</p>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">{study.action}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-700 dark:text-emerald-400">Result</p>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">{study.result}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
