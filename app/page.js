import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Carousel from "../components/Carousel";
import GalleryCard from "../components/GalleryCard";
import BlogCard from "../components/BlogCard";
import HeroAmbient from "../components/HeroAmbient";
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
import TypingText from "../components/TypingText";

export default function Home() {
  const posts = getSortedPostsData().slice(0, 4);

  return (
    <>
      <Nav />

      {/* HERO */}
      <HeroAmbient>
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-muted mb-6 md:mb-7 flex items-center gap-3">
                <span className="w-6 h-px bg-accent" /> {profile.title}
              </div>
              <div className="flex flex-col items-start text-left mt-2 md:mt-3">
                <h1 className="font-khmer text-6xl md:text-8xl leading-[0.85] tracking-tight text-[#D4AF37] mt-1 md:mt-2 text-left">
                  វ៉ុន វាសនា
                </h1>
                <p className="text-xl md:text-2xl text-ivory mt-3 md:mt-4 font-sans text-left">Veasna Vunn</p>
              </div>
              <p className="text-lg md:text-xl text-muted mt-6 max-w-xl font-light">
                <TypingText text="Building brand presence across social, content, and campaigns — from Siem Reap to Phnom Penh." />
              </p>
              <div className="flex flex-wrap gap-4 mt-11"></div>
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

            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[280px] lg:w-[320px] pointer-events-none">
              <img
                src="/images/route-map.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </HeroAmbient>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-16 pt-14 pb-0">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">01 — About</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Profile</h2>
        </Reveal>
        <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-14 items-start">
          <Reveal>
            <div className="aspect-[3/4] rounded-2xl border border-white/10 bg-panel flex items-center justify-center overflow-hidden">
              <img src="/images/profile.jpg" alt="Veasna Vunn" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed font-light">
              Enthusiastically dedicated to advancing my proficiency beyond my existing marketing skill sets, I am{" "}
              <span className="text-[#D4AF37] font-medium">wholeheartedly committed to continual enhancement</span>.
            </p>
              <div className="grid grid-cols-2 gap-8 mt-10">
                <div className="border-t border-white/10 pt-5">
                  <div className="text-xs uppercase tracking-widest text-muted2 mb-2">Based In</div>
                  <div className="text-lg font-serif">{profile.location}</div>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <div className="text-xs uppercase tracking-widest text-muted2 mb-2">Current Role</div>
                  <div className="text-lg font-serif">Assistant Marketing Manager</div>
                </div>
              </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 md:px-16 pt-14 pb-0">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">02 — Career</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Work Experience</h2>
          <p className="text-muted max-w-lg mb-10">
            A timeline of roles across hospitality, F&amp;B, B2B media, and remote digital marketing internships.
          </p>
        </Reveal>

        <div className="relative pl-10 md:pl-16">
          <div className="absolute left-2 md:left-5 top-1 bottom-1 w-px bg-white/10" />
          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative">
                  <div className="absolute -left-[38px] md:-left-[46px] top-2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
                  <div className="rounded-2xl border border-white/10 bg-panel p-7 md:p-9 transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.35)]">
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
      <section id="education" className="max-w-6xl mx-auto px-6 md:px-16 pt-14 pb-0">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">03 — Education</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Education Background</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-panel p-8 h-full flex flex-col items-center text-center">
                  <a
                    href={
                      ed.institution.includes("Thammasat") ? "https://sgs.tu.ac.th/" : "https://www.jpa.org.kh/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-6"
                  >
                  <img
                    src={ed.institution.includes("Thammasat") ? "/images/logos/thammasat.png" : "/images/logos/jpa.png"}
                    alt={ed.institution}
                    className="w-20 h-20 object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
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

        <Reveal delay={0.15} className="mt-10">
          <div className="text-xs uppercase tracking-widest text-muted2 mb-5">Academic Achievements</div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-panel p-8 h-full flex flex-col items-center text-center">
                    <a
                    href={
                      achievement.name.includes("National University of Singapore")
                        ? "https://www.science.nus.edu.sg/"
                        : achievement.name.includes("Henly") || achievement.name.includes("Henley")
                        ? "https://www.henleyhs.sa.edu.au/"
                        : "https://www.jpa.org.kh/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-6"
                  >
                    <img
                      src={
                        achievement.name.includes("National University of Singapore")
                          ? "/images/logos/nus.webp"
                          : achievement.name.includes("Henly") || achievement.name.includes("Henley")
                          ? "/images/logos/henley.webp"
                          : "/images/logos/jpa.png"
                      }
                      alt={achievement.name}
                      className={`object-contain hover:opacity-80 transition-opacity ${
                        achievement.name.includes("National University of Singapore") ? "w-36 h-20" : "w-20 h-20"
                      }`}
                  />
                  </a>
                  <div className="font-serif text-xl mb-2">{achievement.name}</div>
                  <div className="font-mono text-sm text-accent">{achievement.date}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 md:px-16 py-20">
        <Reveal>
          <span className="block font-mono text-xs text-accent mb-4">04 — Capabilities</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Skills</h2>
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
      <section id="gallery" className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-end justify-between mb-10">
          <div>
            <span className="block font-mono text-xs text-accent mb-4">05 — Work</span>
            <h2 className="font-serif text-3xl md:text-4xl">Gallery</h2>
          </div>
          <a href="/gallery" className="text-sm text-muted hover:text-accent transition-colors whitespace-nowrap">View all →</a>
        </div>
        <Carousel speedSeconds={28}>
          {galleryItems.map((item) => (
            <GalleryCard
              key={item.id}
              {...item}
              className="w-64 h-64 shrink-0 md:w-72 md:h-72"
            />
          ))}
        </Carousel>
      </section>

      {/* BLOG TEASER */}
      {posts.length > 0 && (
        <section id="blog" className="py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-end justify-between mb-10">
            <div>
              <span className="block font-mono text-xs text-accent mb-4">06 — Writing</span>
              <h2 className="font-serif text-3xl md:text-4xl">From the Blog</h2>
            </div>
            <a href="/blog" className="text-sm text-muted hover:text-accent transition-colors whitespace-nowrap">Read all →</a>
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-10 md:gap-12">
            <a
              href={`/blog/${posts[0].slug}`}
              className="block md:w-1/2 rounded-2xl border border-white/10 bg-panel overflow-hidden hover:border-accent/40 transition-colors group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={posts[0].image || "/images/profile.jpg"}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="text-xs font-mono text-accent mb-3">
                  {new Date(posts[0].date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  })}
                </div>
                <div className="font-serif text-2xl md:text-3xl mb-3 leading-tight">{posts[0].title}</div>
                <p className="text-sm text-muted leading-relaxed">{posts[0].excerpt}</p>
              </div>
            </a>

            <div className="md:w-1/2 flex flex-col justify-center">
              {posts.length > 1 ? (
                <Carousel speedSeconds={34}>
                  {posts.slice(1).map((item) => <BlogCard key={item.slug} {...item} />)}
                </Carousel>
              ) : (
                <div className="text-sm text-muted">More posts coming soon.</div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 md:px-16 py-20">
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