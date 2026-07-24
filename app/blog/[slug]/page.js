import Link from "next/link";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Reveal from "../../../components/Reveal";
import { getAllPostSlugs, getPostData, getOtherPosts } from "../../../lib/posts";

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
            <div className="font-mono text-xs text-accent mb-4">{formatted}</div>
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
                        className="block rounded-xl border border-white/10 bg-panel p-5 hover:border-accent/40 transition-colors"
                      >
                        <div className="text-xs font-mono text-accent mb-2">{itemFormatted}</div>
                        <div className="font-serif text-lg mb-2 leading-snug">{item.title}</div>
                        <p className="text-sm text-muted leading-relaxed line-clamp-2">{item.excerpt}</p>
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