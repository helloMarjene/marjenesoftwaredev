import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import HeroImageCarousel from "../components/HeroImageCarousel";

const caseStudies = [
  {
    title: "School Operations Overhaul",
    category: "Education",
    summary: "A digital transformation project for a school network that needed smoother admissions, attendance tracking, and parent communication.",
    result: "Reduced manual admin work and improved reporting visibility across departments.",
    tags: ["ERP", "Education", "Automation"],
  },
  {
    title: "Church Member Platform",
    category: "Community",
    summary: "A platform for member records, pledges, event planning, and communication across church leadership teams.",
    result: "Gave church teams a central digital hub for planning and engagement.",
    tags: ["Community", "Member Portal", "Operations"],
  },
  {
    title: "Hospital Workflow System",
    category: "Healthcare",
    summary: "A healthcare workflow platform designed to support patient management, scheduling, and record visibility.",
    result: "Improved operational clarity across clinics and departments.",
    tags: ["Healthcare", "Workflow", "Digital Systems"],
  },
  {
    title: "AI Insight Dashboard",
    category: "AI & Analytics",
    summary: "An intelligent analytics system that helped a business get better visibility into operations and decision-making patterns.",
    result: "Enabled faster insights and better business planning with less manual reporting overhead.",
    tags: ["AI", "Analytics", "Insights"],
  },
];

export default function CaseStudiesPage() {
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
            <HeroImageCarousel alt="M.A.R.J.E.N.E project case studies" />
          </div>
          <div className="page-hero-content">
            <span className="page-tag">Case Studies</span>
            <h1 className="page-title">
              Real <span className="accent-text">results</span>
            </h1>
            <p className="page-subtitle">
              Solutions built to solve real operational problems, improve service delivery, and create long-term value.
            </p>
          </div>
        </section>

        <section className="resource-page">
          <div className="section-container">
            <div className="resource-grid">
              {caseStudies.map((study) => (
                <article key={study.title} className="resource-card">
                  <span className="resource-tag">{study.category}</span>
                  <h3>{study.title}</h3>
                  <p>{study.summary}</p>
                  <div className="resource-tags">
                    {study.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="resource-result">
                    <strong>Outcome:</strong>
                    <p>{study.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Need a similar outcome for your business?</h2>
              <p>We help organizations replace manual pain points with digital systems that scale.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <span>Discuss your project</span>
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
