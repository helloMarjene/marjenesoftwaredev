import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import HeroImageCarousel from "../components/HeroImageCarousel";

const faqs = [
  {
    question: "What types of projects do you build?",
    answer: "We build business websites, web applications, mobile apps, internal business systems, AI-powered tools, and platform solutions for organizations across multiple industries.",
  },
  {
    question: "Do you work with startups and businesses?",
    answer: "Yes. We work with startups, growing businesses, NGOs, schools, churches, hospitals, and organizations that need better digital systems and stronger customer experiences.",
  },
  {
    question: "Can you build custom systems for our internal operations?",
    answer: "Yes. We build custom software that supports workflows, records, reporting, automation, and operational management for organizations with specific business needs.",
  },
  {
    question: "Do you handle design and development together?",
    answer: "Yes. We combine product strategy, UX design, system architecture, frontend development, backend development, and deployment support under one delivery workflow.",
  },
  {
    question: "Can I get a WhatsApp quote or inquiry?",
    answer: "Yes. The contact page includes direct WhatsApp messaging so a client can send their project information quickly from the website.",
  },
  {
    question: "Do you support future updates and growth?",
    answer: "Yes. We design systems with scalability in mind so they can evolve with your business, your users, and your operational needs over time.",
  },
];

export default function FAQPage() {
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
            <HeroImageCarousel alt="M.A.R.J.E.N.E frequently asked questions" />
          </div>
          <div className="page-hero-content">
            <span className="page-tag">FAQ</span>
            <h1 className="page-title">
              Frequently asked <span className="accent-text">questions</span>
            </h1>
            <p className="page-subtitle">
              Helpful answers about our delivery process, capabilities, communication, and business support.
            </p>
          </div>
        </section>

        <section className="resource-page">
          <div className="section-container">
            <div className="faq-list">
              {faqs.map((item) => (
                <article key={item.question} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Have another question?</h2>
              <p>We are happy to talk through your idea, needs, and the best digital path forward.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <span>Ask us directly</span>
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
