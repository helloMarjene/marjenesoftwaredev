import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const services = [
  {
    title: "Web Development",
    image: "/images/mjrn1.png",
    text: "High-performance websites and business platforms built to generate leads, improve operations, and grow your digital presence.",
    features: ["Custom web apps", "Business portals", "CMS integrations"],
    icon: "fas fa-laptop-code",
  },
  {
    title: "Mobile Apps",
    image: "/images/mjrn3.png",
    text: "Responsive mobile products designed for speed, usability, and business growth across Android and iOS ecosystems.",
    features: ["Android & iOS", "User experience design", "Launch support"],
    icon: "fas fa-mobile-alt",
  },
  {
    title: "AI Solutions",
    image: "/images/mjrn4.png",
    text: "AI products and automation that streamline operations, improve analytics, and support smarter decision making.",
    features: ["Chatbots", "Automation", "Smart insights"],
    icon: "fas fa-robot",
  },
  {
    title: "School Systems",
    image: "/images/mjrn5.png",
    text: "Digital school management systems that simplify admissions, records, fees, attendance, and academic reporting.",
    features: ["Student portals", "Fee tracking", "Reports"],
    icon: "fas fa-school",
  },
  {
    title: "Church Systems",
    image: "/images/mjrn6.png",
    text: "Modern church management tools for members, contributions, events, announcements, and community engagement.",
    features: ["Member records", "Donation tracking", "Communication"],
    icon: "fas fa-church",
  },
  {
    title: "Hospital Systems",
    image: "/images/mjrn7.png",
    text: "Healthcare software that supports patient records, appointments, and operational workflows with reliability in mind.",
    features: ["Patient records", "Scheduling", "Performance dashboards"],
    icon: "fas fa-hospital",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    text: "We learn your goals, users, and pain points before shaping the solution.",
  },
  {
    step: "02",
    title: "Design",
    text: "We define a practical user experience that keeps the product useful and scalable.",
  },
  {
    step: "03",
    title: "Build",
    text: "We develop and test the product using modern architecture and a reliable workflow.",
  },
  {
    step: "04",
    title: "Launch",
    text: "We support rollout, optimization, and continuous improvement after deployment.",
  },
];

export default function ServicesPage() {
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
            <img src="/images/hero-services.jpeg" alt="Services hero" loading="eager" />
          </div>
          <div className="page-hero-content">
            <span className="page-tag">Our Services</span>
            <h1 className="page-title">
              Built for <span className="accent-text">growth</span>
            </h1>
            <p className="page-subtitle">
              End-to-end digital solutions designed to help organizations work smarter, serve better, and scale faster.
            </p>
          </div>
        </section>

        <section className="services-page">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">What We Deliver</span>
              <h2 className="section-title">
                Smart technology <span className="accent-text">for real business needs</span>
              </h2>
            </div>

            <div className="services-full-grid">
              {services.map((service) => (
                <article key={service.title} className="service-full-card">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-full-icon">
                    <i className={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <i className="fas fa-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">Process</span>
              <h2 className="section-title">
                A simple path to <span className="accent-text">digital execution</span>
              </h2>
            </div>

            <div className="process-grid">
              {process.map((item) => (
                <div key={item.step} className="process-card">
                  <div className="process-step">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Need a solution built for your business?</h2>
              <p>Let’s design a system that supports your goals, teams, and future growth.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <span>Book a consultation</span>
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
