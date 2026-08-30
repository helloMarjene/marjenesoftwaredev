import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const benefits = [
  {
    title: "Creative environment",
    text: "Work on meaningful digital products with a team that values thoughtful execution.",
    icon: "fas fa-lightbulb",
  },
  {
    title: "Career growth",
    text: "Learn quickly, evolve with new technology, and build practical expertise in real projects.",
    icon: "fas fa-chart-line",
  },
  {
    title: "Impact-driven work",
    text: "Every project contributes to real-world business outcomes and community transformation.",
    icon: "fas fa-bullseye",
  },
  {
    title: "Collaborative culture",
    text: "Work alongside developers, designers, strategists, and implementers in a practical team setup.",
    icon: "fas fa-people-group",
  },
];

const roles = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote / Kampala",
    summary: "Build polished user interfaces and modern web experiences for business platforms and digital products.",
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote / Kampala",
    summary: "Develop robust server-side systems, APIs, and business logic for scalable applications.",
  },
  {
    title: "UI/UX Designer",
    type: "Contract",
    location: "Hybrid",
    summary: "Design clear, compelling experiences that align user needs with business outcomes.",
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Remote",
    summary: "Coordinate projects, client communication, and delivery timelines from planning to launch.",
  },
];

export default function CareersPage() {
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
            <img src="/images/hero-careers.jpeg" alt="Careers hero" loading="eager" />
          </div>
          <div className="page-hero-content">
            <span className="page-tag">Careers</span>
            <h1 className="page-title">
              Build your <span className="accent-text">future</span>
            </h1>
            <p className="page-subtitle">
              Join a growing digital team focused on innovation, execution, and long-term value creation.
            </p>
          </div>
        </section>

        <section className="careers-page">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">Why Join Us</span>
              <h2 className="section-title">
                A team focused on <span className="accent-text">real growth</span>
              </h2>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="benefit-card">
                  <i className={benefit.icon} />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">Open Roles</span>
              <h2 className="section-title">
                Current <span className="accent-text">opportunities</span>
              </h2>
            </div>

            <div className="roles-list">
              {roles.map((role) => (
                <div key={role.title} className="role-card">
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.summary}</p>
                  </div>

                  <div className="role-meta">
                    <span>{role.type}</span>
                    <span>{role.location}</span>
                    <Link href="/contact" className="btn btn-primary">
                      Apply now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Ready to build with us?</h2>
              <p>We are growing a team that values skill, creativity, and meaningful execution.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <span>Send your application</span>
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
