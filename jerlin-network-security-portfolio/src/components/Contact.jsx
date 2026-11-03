import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const rows = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["LinkedIn", "Jerlin G George", profile.linkedin],
    ["Website", "jerry-byte-ai.github.io", profile.website],
  ];
  return (
    <Section id="contact" title="Contact" intro="Open to network operations, NOC, network security and SOC-adjacent roles.">
      <ul className="max-w-md divide-y divide-line rounded-lg border border-line dark:divide-white/10 dark:border-white/10">
        {rows.map(([label, text, href]) => (
          <li key={label}>
            <a href={href} className="flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-signal/5 hover:text-signal" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
              <span className="font-medium">{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
