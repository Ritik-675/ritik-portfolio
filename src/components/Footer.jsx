import { personal, navLinks } from "../data";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-slate-500 transition-colors hover:text-emerald-600 dark:text-slate-500 dark:hover:text-emerald-400"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
