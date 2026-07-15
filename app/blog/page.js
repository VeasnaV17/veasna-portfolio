import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import Carousel from "../../components/Carousel";
import BlogCard from "../../components/BlogCard";
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
          <p className="text-muted max-w-lg mb-16">
            Notes on marketing, content, and campaigns. Add a new post by creating a{" "}
            <code className="text-accent">.md</code> file in the <code className="text-accent">posts/</code> folder.
          </p>
        </Reveal>

        {posts.length > 0 ? (
          <>
            <Reveal delay={0.05} className="mb-16">
              <Carousel speedSeconds={34}>
                {posts.map((item) => <BlogCard key={item.slug} {...item} />)}
              </Carousel>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.04}>
                  <BlogCard {...post} />
                </Reveal>
              ))}
            </div>
          </>
        ) : (
          <p className="text-muted">No posts yet — add one to the posts/ folder to get started.</p>
        )}
      </section>
      <Footer />
    </>
  );
}
