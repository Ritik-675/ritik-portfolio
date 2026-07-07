import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { personal } from "../data";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center px-6 pt-24 pb-16">
      <div className="mx-auto max-w-4xl">
        <Reveal y={16}>
          <p className="mb-5 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            {personal.title}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-serif text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl md:text-7xl dark:text-white">
            {personal.name}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
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
    </section>
  );
}
