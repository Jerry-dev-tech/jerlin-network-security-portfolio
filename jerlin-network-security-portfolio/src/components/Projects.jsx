import Section from "./Section";
import { projects } from "@/data/portfolio";

function Chip({ children }) {
  return (
    <li className="rounded border border-line px-2 py-0.5 font-mono text-xs text-slate-700 dark:border-white/15 dark:text-slate-300">
      {children}
    </li>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <dt className="text-sm font-semibold">{label}</dt>
      <dd className="mt-1 text-slate-700 dark:text-slate-300">{children}</dd>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Projects" intro="Two security tools I built end to end, plus an earlier Android project.">
      <div className="space-y-8">
        {featured.map((p) => (
          <article key={p.name} className="rounded-lg border border-line bg-white/60 p-6 transition-colors hover:border-signal dark:border-white/10 dark:bg-panel dark:hover:border-signal sm:p-8">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.kind}</p>
            <dl className="mt-5 grid gap-5 md:grid-cols-2">
              <Field label="Problem">{p.problem}</Field>
              <Field label="Solution">{p.solution}</Field>
            </dl>
            <h4 className="mt-6 text-sm font-semibold">What I built</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
              {p.contribution.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {p.tech.map((t) => <Chip key={t}>{t}</Chip>)}
            </ul>
          </article>
        ))}
        {other.map((p) => (
          <article key={p.name} className="rounded-lg border border-line p-6 dark:border-white/10">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.kind}</p>
            <p className="mt-3 text-slate-700 dark:text-slate-300">{p.solution}</p>
            <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
