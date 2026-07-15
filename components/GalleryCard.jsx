"use client";

import { motion } from "framer-motion";

export default function GalleryCard({ title, category, image }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-72 md:w-80 rounded-2xl overflow-hidden border border-white/10 bg-panel"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-5">
        <div className="text-[11px] uppercase tracking-widest text-muted2 mb-1">{category}</div>
        <div className="font-serif text-lg">{title}</div>
      </div>
    </motion.div>
  );
}
