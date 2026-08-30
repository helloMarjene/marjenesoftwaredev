import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const posts = [
  {
    title: "Why businesses need better digital systems",
    summary: "Operational bottlenecks often begin with fragmented tools and manual work. Digital systems remove friction and create better visibility.",
    tag: "Strategy",
  },
  {
    title: "A smarter way to launch web products",
    summary: "The best product launches are built on planning, usability, and scalable architecture rather than rushed decisions.",
    tag: "Product",
  },
  {
    title: "AI should support business, not complicate it",
    summary: "AI works best when it solves real business pain points and improves the speed and clarity of how teams work.",
    tag: "AI",
  },
  {
    title: "How custom software creates long-term leverage",
    summary: "When systems are aligned to your operations, decision-making becomes faster, cleaner, and much easier to scale.",
    tag: "Operations",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="page-shell">
        <section className="page-hero page-hero--with-image">
          <div className="hero-bg">
            <div className="soft-orb orb-1" />
            <div className="soft-orb orb-2" />
          </div>
          <div className="page-hero-visual">
            <img src="/images/mjrn1.png" alt="Blog hero" loading="eager" />
          </div>
          <div className="page-hero-content">
            <span className="page-tag">Insights</span>
            <h1 className="page-title">
              Ideas for <span className="accent-text">smarter growth</span>
            </h1>
            <p className="page-subtitle">
              Thoughtful conversations about software, operations, digital systems, and modern business growth.
            </p>
          </div>
        </section>

        <section className="resource-page">
          <div className="section-container">
            <div className="resource-grid">
              {posts.map((post) => (
                <article key={post.title} className="resource-card">
                  <span className="resource-tag">{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <Link href="/contact" className="portfolio-link">
                    Discuss this topic <i className="fas fa-arrow-right" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
