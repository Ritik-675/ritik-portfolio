import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { personal, heroTechStack, heroHighlights } from "../data";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center px-6 pt-24 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <Reveal y={16}>
            <p className="mb-5 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              {personal.title}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
              {personal.name}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
              {personal.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("experience")}
                className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
              >
                View Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                Contact Me
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-5">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition-colors hover:text-emerald-600 dark:text-slate-500 dark:hover:text-emerald-400"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition-colors hover:text-emerald-600 dark:text-slate-500 dark:hover:text-emerald-400"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="text-slate-500 transition-colors hover:text-emerald-600 dark:text-slate-500 dark:hover:text-emerald-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/40">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Technical Snapshot
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {heroTechStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 divide-y divide-slate-200 dark:divide-slate-800">
              {heroHighlights.map((item) => (
                <div key={item.value} className="py-4 first:pt-0 last:pb-0">
                  <p className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
