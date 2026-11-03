import Section from "./Section";
import { education, certifications, trainings } from "@/data/portfolio";

function Item({ title, org, period }) {
  return (
    <li>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-slate-600 dark:text-slate-400">{[org, period].filter(Boolean).join(", ")}</p>
    </li>
  );
}

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Education</h3>
          <ul className="mt-4 space-y-4">{education.map((e) => <Item key={e.title} {...e} />)}</ul>
          <h3 className="mt-8 text-lg font-semibold">Training</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
            {trainings.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Certifications</h3>
          <ul className="mt-4 space-y-4">{certifications.map((c) => <Item key={c.title} {...c} />)}</ul>
        </div>
      </div>
    </Section>
  );
}
