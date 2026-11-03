import Section from "./Section";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
      </div>
    </Section>
  );
}
