import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web App",
    image: "/images/mjrn10.jpg",
    description: "A scalable online store with integrated product management, customer flow, and sales reporting features.",
    tags: ["UI/UX", "E-commerce", "Dashboard"],
  },
  {
    title: "Health Tracker",
    category: "Mobile App",
    image: "/images/mjrn5.png",
    description: "A mobile-driven health experience focused on patient tracking, reminders, and daily wellness engagement.",
    tags: ["HealthTech", "Mobile", "Analytics"],
  },
  {
    title: "School ERP",
    category: "Business System",
    image: "/images/mjrn7.png",
    description: "A management platform for schools covering academics, attendance, fees, and communication workflows.",
    tags: ["Education", "ERP", "Automation"],
  },
  {
    title: "Smart Analytics",
    category: "AI Solution",
    image: "/images/mjrn11.png",
    description: "A predictive business dashboard providing data visibility and decision support for operational teams.",
    tags: ["AI", "Insights", "Reporting"],
  },
  {
    title: "Church Management",
    category: "Community System",
    image: "/images/mjrn6.png",
    description: "A digital system for member records, tithe tracking, events, and communication across church communities.",
    tags: ["Community", "Operations", "Automation"],
  },
  {
    title: "Business Portal",
    category: "Operations",
    image: "/images/mjrn8.png",
    description: "A business portal for internal workflows, processes, and staff collaboration across departments.",
    tags: ["Workflow", "Operations", "Productivity"],
  },
];

const filters = ["All", "Web App", "Mobile App", "Business System", "AI Solution"];
const portfolioImages = Array.from({ length: 27 }, (_, index) => ({
  src: `/images/new-image (${index + 1}).jpeg`,
  alt: `Additional portfolio project ${index + 1}`,
}));
const people = Array.from({ length: 16 }, (_, index) => ({
  name: `Sample Person ${String(index + 1).padStart(2, "0")}`,
  image: `/images/people-sample-${String(index + 1).padStart(2, "0")}.jpg`,
}));

export default function PortfolioPage() {
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
            <img src="/images/hero-portfolio.jpeg" alt="Portfolio hero" loading="eager" />
          </div>
          <div className="page-hero-content">
            <span className="page-tag">Portfolio</span>
            <h1 className="page-title">
              Selected <span className="accent-text">work</span>
            </h1>
            <p className="page-subtitle">
              A snapshot of the digital products, systems, and experiences we build for modern organizations.
            </p>
          </div>
        </section>

        <section className="portfolio-page">
          <div className="section-container">
            <div className="portfolio-filter">
              {filters.map((filter) => (
                <button key={filter} type="button" className={`filter-btn ${filter === "All" ? "active" : ""}`}>
                  {filter}
                </button>
              ))}
            </div>

            <div className="portfolio-grid-full">
              {projects.map((project) => (
                <article key={project.title} className="portfolio-item">
                  <div className="portfolio-card-large">
                    <div className="portfolio-img">
                      <img src={project.image} alt={project.title} loading="lazy" />
                    </div>
                    <div className="portfolio-info">
                      <span className="portfolio-category">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="portfolio-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <Link href="/contact" className="portfolio-link">
                        Start similar project <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <section className="portfolio-gallery" aria-labelledby="portfolio-gallery-title">
              <div className="section-header">
                <span className="section-tag">More Work</span>
                <h2 className="section-title" id="portfolio-gallery-title">
                  Project <span className="accent-text">Gallery</span>
                </h2>
              </div>
              <div className="portfolio-gallery-columns">
                {portfolioImages.map((image) => (
                  <figure className="portfolio-gallery-item" key={image.src}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                  </figure>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="people-section" aria-labelledby="people-title">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">With Thanks</span>
              <h2 className="section-title" id="people-title">
                Our <span className="accent-text">People</span>
              </h2>
              <p className="section-subtitle">
                Sample portraits for future client and supporter profiles.
              </p>
            </div>
            <div className="people-grid">
              {people.map((person) => (
                <figure className="people-item" key={person.name}>
                  <div className="people-portrait">
                    {person.image ? (
                      <img src={person.image} alt={person.name} loading="lazy" />
                    ) : (
                      <span className="people-portrait-placeholder" aria-hidden="true">
                        <i className="fas fa-user" />
                      </span>
                    )}
                  </div>
                  <figcaption>{person.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Want a project with this level of impact?</h2>
              <p>We build digital systems that help organizations move faster and serve people better.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <span>Discuss your idea</span>
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
