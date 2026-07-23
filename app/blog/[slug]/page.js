import Link from "next/link";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Reveal from "../../../components/Reveal";
import { getAllPostSlugs, getPostData } from "../../../lib/posts";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostData(params.slug);
  return { title: `${post.title} — Veasna Vunn` };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostData(params.slug);
  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <>
      <Nav />
      <article className="max-w-2xl mx-auto px-6 md:px-0 pt-40 pb-32">
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
      <Footer />
    </>
  );
}