import { profile } from "@/data/portfolio";
import PacketPath from "./PacketPath";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-10 pt-14 sm:px-8 sm:pt-24">
      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 animate-rise">
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        <span>{profile.location}</span>
      </div>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl animate-rise" style={{ animationDelay: ".05s" }}>
        {profile.name}
      </h1>
      <p className="mt-3 text-xl font-medium text-signal sm:text-2xl animate-rise" style={{ animationDelay: ".1s" }}>
        {profile.title}
      </p>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300 animate-rise" style={{ animationDelay: ".15s" }}>
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3 animate-rise" style={{ animationDelay: ".2s" }}>
        <a href="#projects" className="rounded-md bg-signal px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700">
          See my projects
        </a>
        <a href={`mailto:${profile.email}`} className="rounded-md border border-line px-5 py-2.5 font-medium transition-colors hover:border-signal hover:text-signal dark:border-white/15">
          Email me
        </a>
        {profile.resume && (
          <a href={profile.resume} className="rounded-md border border-line px-5 py-2.5 font-medium transition-colors hover:border-signal hover:text-signal dark:border-white/15">
            Download resume
          </a>
        )}
      </div>

      <div className="mt-14 animate-rise" style={{ animationDelay: ".3s" }}>
        <PacketPath />
      </div>
    </section>
  );
}
