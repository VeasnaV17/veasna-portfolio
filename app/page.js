import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Carousel from "../components/Carousel";
import GalleryCard from "../components/GalleryCard";
import BlogCard from "../components/BlogCard";
import {
  profile,
  experience,
  education,
  achievements,
  hardSkills,
  softSkills
} from "../lib/data";
import { galleryItems } from "../lib/gallery";
import { getSortedPostsData } from "../lib/posts";

export default function Home() {
  const posts = getSortedPostsData().slice(0, 4);

  return (
    <>
      <Nav />

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(143,155,255,0.12),transparent)]" />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="text-xs uppercase tracking-[0.2em] text-muted mb-7 flex items-center gap-3">
            <span className="w-6 h-px bg-accent" /> {profile.title}
          </div>
          <h1 className="font-serif font-normal text-6xl md:text-8xl leading-none tracking-tight">
            Veasna <em className="italic text-accent font-light">Vunn</em>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-xl font-light">
            Building brand presence across social, content, and campaigns — from Siem Reap to Phnom Penh.
          </p>
          <p className="text-sm text-muted2 mt-5 max-w-lg leading-relaxed">{profile.summary}</p>
          <div className="flex flex-wrap gap-4 mt-11">
            <a href="#experience" className="px-7 py-3.5 rounded-full bg-ivory text-void text-sm font-medium hover:shadow-[0_0_0_6px_rgba(143,155,255,0.35)] transition-shadow">
              View Experience
            </a>
            <a id="downloadCv" href="#" className="px-7 py-3.5 rounded-full border border-white/10 text-sm font-medium hover:border-accent hover:text-accent transition-colors">
              Download CV ↓
            </a>
            <a href="#contact" className="px-7 py-3.5 rounded-full border border-white/10 text-sm font-medium hover:border-accent hover:text-accent transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-16 py-32">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">01 — About</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-14">Profile</h2>
        </Reveal>
        <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-14 items-start">
          <Reveal>
            <div className="aspect-[3/4] rounded-2xl border border-white/10 bg-panel flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accentDim to-accent flex items-center justify-center font-serif text-4xl text-void">
                VV
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed font-light">{profile.summary}</p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-t border-white/10 pt-3">
                <div className="text-[11px] uppercase tracking-widest text-muted2 mb-1">Based In</div>
                <div className="text-sm">{profile.location}</div>
              </div>
              <div className="border-t border-white/10 pt-3">
                <div className="text-[11px] uppercase tracking-widest text-muted2 mb-1">Current Role</div>
                <div className="text-sm">Digital Marketing Executive</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 md:px-16 py-32">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">02 — Career</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Work Experience</h2>
          <p className="text-muted max-w-lg mb-16">
            A timeline of roles across hospitality, F&amp;B, B2B media, and remote digital marketing internships.
          </p>
        </Reveal>

        <div className="relative pl-10 md:pl-16">
          <div className="absolute left-2 md:left-5 top-1 bottom-1 w-px bg-white/10" />
          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative">
                  <div className="absolute -left-[38px] md:-left-[46px] top-2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(143,155,255,0.5)]" />
                  <div className="rounded-2xl border border-white/10 bg-panel p-7 md:p-9 hover:border-accent/40 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-1">
                      <div className="font-serif text-xl md:text-2xl">{job.role}</div>
                      <div className="font-mono text-xs text-accent whitespace-nowrap pt-1">{job.dates}</div>
                    </div>
                    <div className="text-sm text-muted mb-5">{job.company} · {job.location}</div>
                    <ul className="flex flex-col gap-2.5">
                      {job.points.map((p, j) => (
                        <li key={j} className="text-sm text-ivory/85 font-light leading-relaxed pl-5 relative">
                          <span className="absolute left-0 text-accentDim">—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto px-6 md:px-16 py-32">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">03 — Education</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-14">Education Background</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-panel p-8 h-full">
                <div className="font-mono text-xs text-muted2 mb-2">{ed.year}</div>
                <div className="font-serif text-xl mb-1">{ed.degree}</div>
                <div className="text-sm text-muted mb-5">{ed.institution}</div>
                <ul className="flex flex-col gap-2">
                  {ed.notes.map((n, j) => (
                    <li key={j} className="text-sm text-ivory/85 font-light pl-4 relative">
                      <span className="absolute left-0 text-accent">·</span>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16">
          <div className="text-xs uppercase tracking-widest text-muted2 mb-5">Academic Achievements</div>
          <div className="flex flex-col gap-3">
            {achievements.map((a, i) => (
              <div key={i} className="flex flex-wrap justify-between gap-4 py-4 border-b border-white/10">
                <span className="text-sm">{a.name}</span>
                <span className="font-mono text-xs text-muted2">{a.date}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 md:px-16 py-32">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">04 — Capabilities</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-14">Skills</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-14">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-muted2 mb-6">Hard Skills</div>
            <div className="flex flex-wrap gap-3">
              {hardSkills.map((s, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full border border-white/10 bg-panel text-sm hover:border-accent hover:-translate-y-1 transition-all">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-widest text-muted2 mb-6">Soft Skills</div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((s, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full border border-white/10 bg-panel text-sm hover:border-accent hover:-translate-y-1 transition-all">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-end justify-between mb-10">
          <div>
            <span className="block font-mono text-xs text-accent mb-4">05 — Work</span>
            <h2 className="font-serif text-3xl md:text-4xl">Gallery</h2>
          </div>
          <a href="/gallery" className="text-sm text-muted hover:text-accent transition-colors whitespace-nowrap">View all →</a>
        </div>
        <Carousel speedSeconds={28}>
          {galleryItems.map((item) => <GalleryCard key={item.id} {...item} />)}
        </Carousel>
      </section>

      {/* BLOG TEASER */}
      {posts.length > 0 && (
        <section className="py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-end justify-between mb-10">
            <div>
              <span className="block font-mono text-xs text-accent mb-4">06 — Writing</span>
              <h2 className="font-serif text-3xl md:text-4xl">From the Blog</h2>
            </div>
            <a href="/blog" className="text-sm text-muted hover:text-accent transition-colors whitespace-nowrap">Read all →</a>
          </div>
          <Carousel speedSeconds={34}>
            {posts.map((item) => <BlogCard key={item.slug} {...item} />)}
          </Carousel>
        </section>
      )}

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 md:px-16 py-32">
        <Reveal>
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-panel to-panel2 p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            <span className="block font-mono text-xs text-accent mb-6 relative">07 — Get In Touch</span>
            <h2 className="font-serif text-3xl md:text-5xl max-w-2xl mx-auto mb-5 relative">
              Let&apos;s talk about marketing, content, or the next opportunity.
            </h2>
            <p className="text-muted max-w-md mx-auto mb-11 relative">
              Reach out directly — every channel below goes straight to me.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative">
              <a href={`mailto:${profile.email}`} className="px-6 py-3.5 rounded-full border border-white/10 bg-void/30 text-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all">
                ✉ {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="px-6 py-3.5 rounded-full border border-white/10 bg-void/30 text-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all">
                ☎ {profile.phone}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full border border-white/10 bg-void/30 text-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all">
                in LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
