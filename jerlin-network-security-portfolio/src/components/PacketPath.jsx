// Decorative diagram of the NIDS pipeline from the candidate's project.
// A single packet dot travels along the path (CSS only, disabled for reduced motion).
const stages = ["Packet capture", "Feature extraction", "Rules + Random Forest", "Alert and dashboard"];

export default function PacketPath() {
  return (
    <figure aria-label="Pipeline of my network intrusion detection project" className="rounded-lg border border-line bg-white/60 p-5 dark:border-white/10 dark:bg-panel">
      <div className="relative">
        <div className="absolute left-3 right-3 top-[14px] hidden h-px bg-line dark:bg-white/20 sm:block" aria-hidden="true" />
        <div className="absolute left-3 right-3 top-[11px] hidden sm:block" aria-hidden="true">
          <span
            className="absolute h-[7px] w-[7px] rounded-full bg-amber"
            style={{ animation: "packetx 5s linear infinite" }}
          />
        </div>
        <ol className="relative grid gap-4 sm:grid-cols-4">
          {stages.map((s) => (
            <li key={s} className="flex items-center gap-3 sm:block">
              <span className="block h-[29px] w-[29px] shrink-0 rounded-full border-2 border-signal bg-paper dark:bg-ink sm:mb-3" aria-hidden="true" />
              <span className="text-sm font-medium">{s}</span>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-400">
        How my Network Intrusion Detection System processes traffic.
      </figcaption>
      <style>{`@keyframes packetx{0%{left:0;opacity:0}8%{opacity:1}92%{opacity:1}100%{left:calc(100% - 7px);opacity:0}}`}</style>
    </figure>
  );
}
