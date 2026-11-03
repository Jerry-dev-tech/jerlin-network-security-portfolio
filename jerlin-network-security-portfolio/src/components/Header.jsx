import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/portfolio";

const links = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur dark:border-white/10 dark:bg-ink/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight">{profile.name}</a>
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          <ul className="hidden gap-6 sm:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-slate-600 transition-colors hover:text-signal dark:text-slate-400">{label}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
