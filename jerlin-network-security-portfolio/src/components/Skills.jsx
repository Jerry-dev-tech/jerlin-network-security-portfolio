import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group}>
            <dt className="font-semibold">{g.group}</dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded border border-line px-2.5 py-1 text-sm transition-colors hover:border-signal hover:text-signal dark:border-white/15">
                    {i}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
