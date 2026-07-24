import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import BlogFilterView from "../../components/BlogFilterView";
import { getSortedPostsData } from "../../lib/posts";

export const metadata = {
  title: "Blog — Veasna Vunn"
};

export default function BlogIndexPage() {
  const posts = getSortedPostsData();

  return (
    <>
      <Nav />
      <section className="max-w-6xl mx-auto px-6 md:px-16 pt-40 pb-20">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">Blog</span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Writing</h1>
          <p className="text-muted max-w-lg mb-10">Thoughts, lessons, and the occasional coffee review.</p>
        </Reveal>

        <BlogFilterView posts={posts} />
      </section>
      <Footer />
    </>
  );
}