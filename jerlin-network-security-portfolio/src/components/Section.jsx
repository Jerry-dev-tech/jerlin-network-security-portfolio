export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {intro && <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-400">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
