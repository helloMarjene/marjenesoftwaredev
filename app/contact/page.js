"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import HeroImageCarousel from "../components/HeroImageCarousel";

const buildWhatsAppMessage = (data) => {
  const name = data.get("name")?.toString().trim() || "Client";
  const email = data.get("email")?.toString().trim() || "Not provided";
  const subject = data.get("subject")?.toString().trim() || "New inquiry";
  const message = data.get("message")?.toString().trim() || "No message provided";

  return encodeURIComponent(
    `Hello M.A.R.J.E.N.E,\n\nMy name is ${name}.\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
  );
};

const contactItems = [
  {
    title: "Call us",
    details: "+256 704 125517\n+256 792 096974",
    icon: "fas fa-phone",
  },
  {
    title: "Email",
    details: "hello@marjenesoftwaredev.com",
    icon: "fas fa-envelope",
  },
  {
    title: "Location",
    details: "Uganda",
    icon: "fas fa-location-dot",
  },
];

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const text = buildWhatsAppMessage(formData);
    const phoneNumber = "256704125517";
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
            <HeroImageCarousel alt="Contact M.A.R.J.E.N.E Software Development" />
          </div>
          <div className="page-hero-content">
            <span className="page-tag">Contact</span>
            <h1 className="page-title">
              Let&apos;s build <span className="accent-text">your next step</span>
            </h1>
            <p className="page-subtitle">
              Tell us what you need. We will help turn your idea into a system that works for your business.
            </p>
          </div>
        </section>

        <section className="contact-page">
          <div className="section-container">
            <div className="contact-grid">
              <div className="contact-panel">
                <span className="section-tag">Get in touch</span>
                <h2 className="section-title">
                  Talk to our <span className="accent-text">team</span>
                </h2>
                <p className="section-subtitle" style={{ margin: "0", textAlign: "left", maxWidth: "100%" }}>
                  We help businesses design, build, and launch digital products that improve systems and drive measurable growth.
                </p>

                <div className="contact-card-list">
                  {contactItems.map((item) => (
                    <div key={item.title} className="contact-item-box">
                      <i className={item.icon} />
                      <div>
                        <h4>{item.title}</h4>
                        {item.title === "Email" ? (
                          <a href="mailto:hello@marjenesoftwaredev.com">{item.details}</a>
                        ) : (
                          <p>{item.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-form">
                <h3 className="section-title" style={{ marginBottom: "1rem" }}>
                  Send a message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input id="name" type="text" name="name" placeholder="Your name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" name="email" placeholder="Your email" required />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" name="subject" placeholder="Project or inquiry" required />
                  </div>

                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us about your project" required />
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Need a quick response?</h2>
              <p>We normally respond to project inquiries with clear recommendations and next steps.</p>
              <div className="cta-buttons">
                <Link href="mailto:hello@marjenesoftwaredev.com" className="btn btn-primary btn-large">
                  <span>Email us directly</span>
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
