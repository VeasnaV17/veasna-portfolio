import Link from "next/link";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Reveal from "../../../components/Reveal";
import { getAllPostSlugs, getPostData, getOtherPosts } from "../../../lib/posts";
import { blogCategories } from "../../../lib/data";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostData(params.slug);
  return { title: `${post.title} — Veasna Vunn` };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostData(params.slug);
  const otherPosts = getOtherPosts(params.slug);
  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <>
      <Nav />
      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-40 pb-32 flex flex-col lg:flex-row gap-16">
        <article className="lg:w-2/3 max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="font-mono text-xs text-accent">{formatted}</div>
              {post.category && (
                <span
                  className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: `${blogCategories[post.category] || "#8b8e96"}22`,
                    color: blogCategories[post.category] || "#8b8e96"
                  }}
                >
                  {post.category}
                </span>
              )}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-10 leading-tight">{post.title}</h1>
            <div
              className="prose-custom text-ivory/90 font-light leading-relaxed [&_p]:mb-5 [&_a]:text-accent [&_a]:underline [&_strong]:text-ivory [&_strong]:font-semibold [&_em]:italic [&_h2]:font-serif [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-medium [&_h2]:text-accent [&_h2]:mt-9 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:md:text-xl [&_h3]:font-medium [&_h3]:text-accent [&_h3]:mt-7 [&_h3]:mb-3 [&_ul]:mb-5 [&_ul]:pl-5 [&_ul]:list-disc [&_ol]:mb-5 [&_ol]:pl-5 [&_ol]:list-decimal [&_li]:mb-2 [&_img]:rounded-2xl [&_img]:border [&_img]:border-white/10 [&_img]:my-8 [&_img]:w-full"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
              >
                ← Back to Blog
              </Link>
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </Reveal>
        </article>

        {otherPosts.length > 0 && (
          <aside className="lg:w-1/3">
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-32">
                <div className="text-xs uppercase tracking-widest text-muted2 mb-6">Other Posts</div>
                <div className="flex flex-col gap-5">
                  {otherPosts.map((item) => {
                    const itemFormatted = new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    });
                    return (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="group block relative rounded-xl overflow-hidden border border-white/10 hover:border-accent/40 transition-colors aspect-[16/10]"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image || "/images/profile.jpg"}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
                        {item.category && (
                          <span
                            className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium"
                            style={{
                              backgroundColor: `${blogCategories[item.category] || "#8b8e96"}dd`,
                              color: "#08090b"
                            }}
                          >
                            {item.category}
                          </span>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="text-xs font-mono text-accent mb-1">{itemFormatted}</div>
                          <div className="font-serif text-base leading-snug text-ivory">{item.title}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </aside>
        )}
      </div>
      <Footer />
    </>
  );
}