"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Carousel from "./Carousel";
import BlogCard from "./BlogCard";
import { blogCategories } from "../lib/data";

export default function BlogFilterView({ posts }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const categoryNames = Object.keys(blogCategories);

  const visiblePosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  return (
    <>
      <Reveal delay={0.03} className="mb-12">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              activeFilter === "all"
                ? "border-accent bg-accent text-void"
                : "border-white/10 bg-panel/70 text-muted hover:border-accent/50 hover:text-ivory"
            }`}
          >
            All
          </button>
          {categoryNames.map((name) => {
            const isActive = activeFilter === name;
            const color = blogCategories[name];
            return (
              <button
                key={name}
                type="button"
                onClick={() => setActiveFilter(name)}
                style={
                  isActive
                    ? { backgroundColor: color, borderColor: color, color: "#08090b" }
                    : { borderColor: `${color}55`, color: color }
                }
                className="rounded-full border px-4 py-2 text-sm font-medium transition-all bg-panel/70 hover:opacity-80"
              >
                {name}
              </button>
            );
          })}
        </div>
      </Reveal>

      {visiblePosts.length > 0 ? (
        <>
          <Reveal delay={0.05} className="mb-16">
            <Carousel speedSeconds={34}>
              {visiblePosts.map((item) => <BlogCard key={item.slug} {...item} />)}
            </Carousel>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.04}>
                <BlogCard {...post} />
              </Reveal>
            ))}
          </div>
        </>
      ) : (
        <p className="text-muted">No posts in this category yet.</p>
      )}
    </>
  );
}