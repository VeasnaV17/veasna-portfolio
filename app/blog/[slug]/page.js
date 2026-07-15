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
            className="prose-custom text-ivory/90 font-light leading-relaxed [&_p]:mb-5 [&_a]:text-accent [&_a]:underline [&_strong]:text-ivory [&_em]:italic"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </Reveal>
      </article>
      <Footer />
    </>
  );
}
