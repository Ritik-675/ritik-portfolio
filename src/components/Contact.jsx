import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { personal } from "../data";

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "ritik-yadav-675abc",
    href: personal.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "Ritik-675",
    href: personal.github,
    icon: GithubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Contact
          </h2>
          <p className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Let's talk
          </p>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            Open to conversations about product roles, enterprise SaaS, and AI-agent products. Reach out directly.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-emerald-400"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <link.icon size={20} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{link.label}</p>
                  <p className="mt-1 truncate text-sm text-slate-500 dark:text-slate-400">{link.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
