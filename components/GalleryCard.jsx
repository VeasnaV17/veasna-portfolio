"use client";

import { motion } from "framer-motion";

export default function GalleryCard({ image, title = "Gallery image", onClick, className = "" }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`aspect-square overflow-hidden rounded-[1rem] border border-white/10 bg-panel text-left ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </motion.button>
  );
}
