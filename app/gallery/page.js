import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import Carousel from "../../components/Carousel";
import GalleryCard from "../../components/GalleryCard";
import { galleryItems } from "../../lib/gallery";

export const metadata = {
  title: "Gallery — Veasna Vunn"
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <section className="max-w-6xl mx-auto px-6 md:px-16 pt-40 pb-20">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">Gallery</span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Selected Work</h1>
          <p className="text-muted max-w-lg mb-16">
            Social content, print materials, and campaign design. Replace the placeholders in{" "}
            <code className="text-accent">lib/gallery.js</code> with real work whenever it&apos;s ready.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mb-16">
          <Carousel speedSeconds={30}>
            {galleryItems.map((item) => <GalleryCard key={item.id} {...item} />)}
          </Carousel>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <GalleryCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
