"use client";

import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import GalleryCard from "../../components/GalleryCard";
import { galleryItems } from "../../lib/gallery";

const tabs = [
  { key: "all", label: "All" },
  { key: "professional", label: "Professional" },
  { key: "personal", label: "Personal" },
  { key: "photography", label: "Photography" }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const visibleItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const expandedItem = visibleItems.find((item) => item.id === expandedId) || null;

  useEffect(() => {
    if (!expandedId) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setExpandedId(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expandedId]);

  return (
    <>
      <Nav />
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 md:px-10 lg:px-12">
        <Reveal>
          <div className="mb-6">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Gallery
            </span>
            <h1 className="font-serif text-4xl md:text-5xl">Photos</h1>
          </div>
          <p className="mb-8 max-w-lg text-sm text-muted sm:text-base">
            A collection of moments I want to share.
          </p>
        </Reveal>

        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-accent bg-accent text-void"
                    : "border-white/10 bg-panel/70 text-muted hover:border-accent/50 hover:text-ivory"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 lg:grid-cols-4">
          {visibleItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.03}>
              <GalleryCard
                {...item}
                onClick={() => setExpandedId(item.id)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {expandedItem && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-void/95 px-4 py-6 backdrop-blur-md"
          onClick={() => setExpandedId(null)}
        >
          <div className="absolute right-4 top-4 z-[71]">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setExpandedId(null);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-panel/80 text-xl text-ivory"
              aria-label="Close image"
            >
              ×
            </button>
          </div>

          <div
            className="relative z-[71] flex max-h-full max-w-5xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={expandedItem.image}
              alt={expandedItem.id}
              className="max-h-[90vh] max-w-[90vw] rounded-[1.25rem] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
