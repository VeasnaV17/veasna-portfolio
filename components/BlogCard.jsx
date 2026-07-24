"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogCategories } from "../lib/data";

export default function BlogCard({ slug, title, date, excerpt, category }) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const categoryColor = blogCategories[category] || "#8b8e96";

  return (
    <Link href={`/blog/${slug}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-72 md:w-96 rounded-2xl border border-white/10 bg-panel p-6 h-full flex flex-col"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-mono text-accent">{formatted}</div>
          {category && (
            <span
              className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium"
              style={{ backgroundColor: `${categoryColor}22`, color: categoryColor }}
            >
              {category}
            </span>
          )}
        </div>
        <div className="font-serif text-xl mb-2">{title}</div>
        <p className="text-sm text-muted leading-relaxed">{excerpt}</p>
      </motion.div>
    </Link>
  );
}