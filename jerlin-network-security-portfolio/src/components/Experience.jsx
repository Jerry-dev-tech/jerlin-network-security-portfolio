import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10 border-l border-line pl-6 dark:border-white/15">
        {experience.map((e) => (
          <li key={e.company + e.period} className="relative">
            <span
              className={`absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full ${e.primary ? "bg-signal" : "bg-slate-400 dark:bg-slate-500"}`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className={e.primary ? "text-xl font-semibold" : "text-lg font-semibold"}>
                {e.role}, {e.company}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{e.period}</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">{e.place}</p>
            <ul className={`mt-3 list-disc space-y-1.5 pl-5 text-slate-700 dark:text-slate-300 ${e.primary ? "" : "text-[15px]"}`}>
              {e.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
