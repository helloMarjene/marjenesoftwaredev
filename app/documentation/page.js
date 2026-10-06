import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import HeroImageCarousel from "../components/HeroImageCarousel";

const docs = [
  {
    title: "Product strategy",
    description: "How custom digital projects are planned to meet business needs, user expectations, and future growth goals.",
  },
  {
    title: "System design",
    description: "Architecture decisions that shape scalability, reliability, maintainability, and ease of future upgrades.",
  },
  {
    title: "Implementation roadmap",
    description: "The steps used to move from planning to launch while keeping technical risks and business uncertainty low.",
  },
  {
    title: "Support & optimization",
    description: "How digital products are monitored, refined, and improved after launch to keep business momentum high.",
  },
];

export default function DocumentationPage() {
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
            <HeroImageCarousel alt="M.A.R.J.E.N.E software documentation" />
          </div>
          <div className="page-hero-content">
            <span className="page-tag">Documentation</span>
            <h1 className="page-title">
              Clear digital <span className="accent-text">roadmaps</span>
            </h1>
            <p className="page-subtitle">
              Practical guidance for building digital systems, shaping business products, and supporting long-term growth.
            </p>
          </div>
        </section>

        <section className="resource-page">
          <div className="section-container">
            <div className="resource-grid">
              {docs.map((doc) => (
                <article key={doc.title} className="resource-card">
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Need help turning your process into a system?</h2>
              <p>We can help structure your idea into a usable digital product roadmap.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <span>Start the conversation</span>
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
