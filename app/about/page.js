"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

/* ------------------------------------------------------------
   About Page — M.A.R.J.E.N.E Software Development
   Converted from about.html
   ------------------------------------------------------------ */

/* ---- Scroll reveal via IntersectionObserver (self-contained) ---- */
function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-reveal]") || [];
    if (!els.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(
              entry.target.dataset.revealDelay || "0",
              10
            );
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ------------------------------------------------------------ */

export default function AboutPage() {
  const revealRef = useScrollReveal();

  return (
    <>
      <Navbar />

      <main ref={revealRef}>
        {/* ==================== PAGE HERO ==================== */}
        <section className="page-hero page-hero--with-image about-hero">
          <div className="hero-bg">
            <div className="soft-orb orb-1" />
            <div className="soft-orb orb-2" />
          </div>
          <div className="page-hero-visual">
            <img src="/images/hero-about.jpeg" alt="About hero" loading="eager" />
          </div>
          <div className="page-hero-content">
            <span className="page-tag" data-reveal data-reveal-delay="0">
              About Us
            </span>
            <h1 className="page-title" data-reveal data-reveal-delay="100">
              Our <span className="accent-text">Story</span>
            </h1>
            <p className="page-subtitle" data-reveal data-reveal-delay="200">
              A Uganda-based software development company building intelligent
              digital solutions for organizations and individuals.
            </p>
          </div>
        </section>

        {/* ==================== STORY SECTION ==================== */}
        <section className="story-section">
          <div className="section-container">
            <div className="story-grid">
              <div className="story-content" data-reveal data-reveal-delay="0">
                <span className="section-tag">Who We Are</span>
                <h2 className="section-title">
                  Intelligent Digital <span className="accent-text">Solutions</span>
                </h2>
                <p className="story-text">
                  M.A.R.J.E.N.E Software Development is a Uganda-based
                  technology company that designs and delivers intelligent
                  digital solutions for businesses, institutions,
                  organizations, and individuals.
                </p>
                <p className="story-text">
                  We combine software engineering, modern technology,
                  user-centered design, and business understanding to create
                  reliable products that improve operations and customer
                  experiences.
                </p>
                <p className="story-text">
                  Our name stands for Modular Autonomous Responsive Judgement
                  Execution Network Engine. Based in Uganda, we serve a global
                  market and support digital transformation within and beyond
                  the country.
                </p>
                <div className="story-stats">
                  <div className="story-stat">
                    <span className="stat-number">Uganda</span>
                    <span className="stat-label">Our home base</span>
                  </div>
                  <div className="story-stat">
                    <span className="stat-number">Global</span>
                    <span className="stat-label">Our market</span>
                  </div>
                </div>
              </div>

              <div className="story-visual" data-reveal data-reveal-delay="100">
                <div className="story-card">
                  <div className="story-card-icon">
                    <img
                      src="/images/mjrn4.png"
                      alt="Innovation preview"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3>Client-Focused Solutions</h3>
                    <p>
                      We begin by understanding each client&apos;s goals, users,
                      challenges, and operational requirements.
                    </p>
                  </div>
                </div>
                <div className="story-card">
                  <div className="story-card-icon">
                    <img
                      src="/images/mjrn5.png"
                      alt="People centered preview"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3>Connected Operations</h3>
                    <p>
                      Our management systems support records, finance,
                      attendance, scheduling, reporting, and communication.
                    </p>
                  </div>
                </div>
                <div className="story-card">
                  <div className="story-card-icon">
                    <img
                      src="/images/mjrn6.png"
                      alt="Global reach preview"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3>Built to Adapt</h3>
                    <p>
                      We tailor digital platforms to the needs of each client,
                      sector, and organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PURPOSE & POSITIONING ==================== */}
        <section className="mission-vision-section">
          <div className="section-container">
            <div className="mv-grid">
              <div
                className="mv-card mission"
                data-reveal
                data-reveal-delay="100"
              >
                <div className="mv-icon">
                  <i className="fas fa-bullseye" />
                </div>
                <h3>Our Purpose</h3>
                <p>
                  To help businesses and organizations turn ideas, challenges,
                  and manual processes into effective digital solutions that
                  simplify operations, improve service delivery, and support
                  sustainable growth.
                </p>
                <div className="mv-accent" />
              </div>

              <div
                className="mv-card vision"
                data-reveal
                data-reveal-delay="200"
              >
                <div className="mv-icon">
                  <i className="fas fa-eye" />
                </div>
                <h3>Our Position</h3>
                <p>
                  We partner with organizations adopting, improving, or
                  expanding their use of technology, building solutions suited
                  to their requirements rather than relying only on standard
                  software products.
                </p>
                <div className="mv-accent" />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CORE AREAS ==================== */}
        <section className="values-section">
          <div className="section-container">
            <div className="section-header" data-reveal data-reveal-delay="0">
              <span className="section-tag">What We Do</span>
              <h2 className="section-title">
                Core Areas of <span className="accent-text">Business</span>
              </h2>
              <p className="section-subtitle">
                Digital products and services tailored to real operational needs
              </p>
            </div>

            <div className="values-grid">
              {[
                {
                  num: "01",
                  icon: "fa-laptop-code",
                  title: "Web Development",
                  text: "Business websites, custom web applications, portals, and content management solutions.",
                  delay: 100,
                },
                {
                  num: "02",
                  icon: "fa-mobile-screen-button",
                  title: "Mobile Applications",
                  text: "Responsive, user-friendly Android and iOS applications built around business and organizational needs.",
                  delay: 200,
                },
                {
                  num: "03",
                  icon: "fa-sitemap",
                  title: "Management Systems",
                  text: "Business, school, church, and healthcare systems for records, finance, attendance, scheduling, and reporting.",
                  delay: 300,
                },
                {
                  num: "04",
                  icon: "fa-brain",
                  title: "AI & Automation",
                  text: "Intelligent assistants, chatbots, workflow automation, analytics, and AI-powered applications.",
                  delay: 400,
                },
                {
                  num: "05",
                  icon: "fa-cloud",
                  title: "Cloud & Data",
                  text: "Cloud-based digital solutions, databases, and information systems that support connected operations.",
                  delay: 500,
                },
                {
                  num: "06",
                  icon: "fa-compass-drafting",
                  title: "Design & Consulting",
                  text: "User interface and experience design, custom software, and digital transformation consulting.",
                  delay: 600,
                },
              ].map((v) => (
                <div
                  key={v.num}
                  className="value-card"
                  data-reveal
                  data-reveal-delay={v.delay}
                >
                  <div className="value-number">{v.num}</div>
                  <div className="value-icon">
                    <i className={`fas ${v.icon}`} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== DELIVERY APPROACH ==================== */}
        <section className="timeline-section">
          <div className="section-container">
            <div className="section-header" data-reveal data-reveal-delay="0">
              <span className="section-tag">How We Work</span>
              <h2 className="section-title">
                A Clear <span className="accent-text">Process</span>
              </h2>
              <p className="section-subtitle">
                From understanding the challenge to improving the finished solution
              </p>
            </div>

            <div className="timeline">
              {[
                {
                  year: "01",
                  title: "Discovery",
                  text: "We clarify client goals, users, challenges, and operational requirements.",
                  delay: 100,
                  active: false,
                },
                {
                  year: "02",
                  title: "Design",
                  text: "We shape a practical solution around the needs of the organization and its users.",
                  delay: 200,
                  active: false,
                },
                {
                  year: "03",
                  title: "Development",
                  text: "We build the software using appropriate modern technologies and development tools.",
                  delay: 300,
                  active: false,
                },
                {
                  year: "04",
                  title: "Testing & Deployment",
                  text: "We test the solution and prepare it for reliable use in the client's operations.",
                  delay: 400,
                  active: false,
                },
                {
                  year: "05",
                  title: "Continuous Improvement",
                  text: "We refine the product over time, with attention to usability, scalability, security, and reliability.",
                  delay: 500,
                  active: true,
                },
              ].map((item) => (
                <div
                  key={item.year}
                  className="timeline-item"
                  data-reveal
                  data-reveal-delay={item.delay}
                >
                  <div
                    className={`timeline-marker${
                      item.active ? " active" : ""
                    }`}
                  />
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="cta-section">
          <div className="cta-bg">
            <div className="soft-orb orb-cta-1" />
            <div className="soft-orb orb-cta-2" />
          </div>
          <div className="section-container">
            <div className="cta-content" data-reveal data-reveal-delay="0">
              <h2>Ready to build a digital solution?</h2>
              <p>
                Tell us about your organization&apos;s goals, challenges, or manual
                processes. We will help you explore a solution that fits.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  <span>Discuss your project</span>
                  <i className="fas fa-arrow-right" />
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-large">
                  <span>Get In Touch</span>
                  <i className="fas fa-chevron-right" />
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
