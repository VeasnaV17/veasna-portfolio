"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ slug, title, date, excerpt }) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <Link href={`/blog/${slug}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-72 md:w-96 rounded-2xl border border-white/10 bg-panel p-6 h-full flex flex-col"
      >
        <div className="text-xs font-mono text-accent mb-3">{formatted}</div>
        <div className="font-serif text-xl mb-2">{title}</div>
        <p className="text-sm text-muted leading-relaxed">{excerpt}</p>
      </motion.div>
    </Link>
  );
}
