import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navLinks, personal } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_IDS = navLinks.map((l) => l.id);

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_IDS);

  const handleClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleClick("hero")}
          className="font-serif text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {personal.name}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ${
                activeId === link.id
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-400"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-full border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-400"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`text-left text-sm font-medium ${
                  activeId === link.id
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
