"use client";

import Link from "next/link";
import ScrollProgressIndicator from "./ScrollProgress";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 backdrop-blur-md bg-void/70 border-b border-white/5">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-serif text-lg flex items-center gap-2 shrink-0">
          <img src="/images/logo.png" alt="Veasna Vunn" className="w-7 h-7 rounded-full object-cover" />
          Veasna Vunn
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <ScrollProgressIndicator />
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-muted shrink-0">
          <Link href="/#about" className="hover:text-ivory transition-colors">About</Link>
          <Link href="/#experience" className="hover:text-ivory transition-colors">Experience</Link>
          <Link href="/gallery" className="hover:text-ivory transition-colors">Gallery</Link>
          <Link href="/blog" className="hover:text-ivory transition-colors">Blog</Link>
          <Link href="/#contact" className="hover:text-ivory transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
