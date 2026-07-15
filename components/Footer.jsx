import { profile } from "../lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-10 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-muted2">
      <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
      <div className="flex gap-6">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
        <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">Email</a>
        <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="hover:text-accent transition-colors">Phone</a>
      </div>
    </footer>
  );
}
