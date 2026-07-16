"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollProgressIndicator from "./ScrollProgress";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 backdrop-blur-md bg-void/70 border-b border-white/5">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-serif text-lg flex items-center gap-2 shrink-0">
          <img src="/images/logo.png" alt="Veasna Vunn" className="w-7 h-7 rounded-full object-cover" />
          Veasna Vunn
        </Link>

        <div className="flex flex-1 justify-center">
          <ScrollProgressIndicator />
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex gap-8 text-sm text-muted shrink-0">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ivory transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden h-10 w-10 rounded-full border border-white/10 bg-panel2 text-muted flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <span className="text-2xl leading-none text-ivory">×</span>
            ) : (
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-ivory" />
                <span className="block h-0.5 w-5 rounded-full bg-ivory" />
                <span className="block h-0.5 w-5 rounded-full bg-ivory" />
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-b-[28px] bg-panel backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20 transition-all duration-200 ease-out md:hidden ${
          menuOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <nav className="flex flex-col gap-3 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-3 py-2 text-center text-base font-medium text-ivory transition-colors hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
