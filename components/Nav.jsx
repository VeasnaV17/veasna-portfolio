"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 backdrop-blur-md bg-void/70 border-b border-white/5">
      <Link href="/" className="font-serif text-lg flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(143,155,255,0.6)]" />
        Veasna Vunn
      </Link>
      <nav className="hidden md:flex gap-8 text-sm text-muted">
        <Link href="/#about" className="hover:text-ivory transition-colors">About</Link>
        <Link href="/#experience" className="hover:text-ivory transition-colors">Experience</Link>
        <Link href="/gallery" className="hover:text-ivory transition-colors">Gallery</Link>
        <Link href="/blog" className="hover:text-ivory transition-colors">Blog</Link>
        <Link href="/#contact" className="hover:text-ivory transition-colors">Contact</Link>
      </nav>
    </header>
  );
}
