import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-slate-600 dark:border-white/10 dark:text-slate-400">
      {profile.name}, {profile.location}
    </footer>
  );
}
