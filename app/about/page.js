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

/* ---- Stat counter animation (matches navigation.js pattern) ---- */
function useStatCounters() {
  const containerRef = useRef(null);

  useEffect(() => {
    const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animateCounter = (el) => {
      const raw = el.getAttribute("data-count");
      const target = parseFloat(raw);
      if (isNaN(target)) return;

      const suffix = el.getAttribute("data-suffix") || "";
      const isDecimal = raw.indexOf(".") !== -1;
      const duration = 1800;
      let startTime = null;

      const format = (n) =>
        (isDecimal ? n.toFixed(1) : Math.round(n)) + suffix;

      const tick = (timestamp) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        el.textContent = format(target * easeOutExpo(progress));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = format(target);
        }
      };

      requestAnimationFrame(tick);
    };

    const counterEls =
      containerRef.current?.querySelectorAll("[data-count]") || [];

    if ("IntersectionObserver" in window && counterEls.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counterEls.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else if (counterEls.length) {
      counterEls.forEach(animateCounter);
    }
  }, []);

  return containerRef;
}

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
  const storyRef = useStatCounters();
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
              We design intelligent digital systems that help ambitious
              businesses move faster, serve better, and scale with confidence.
            </p>
          </div>
        </section>

        {/* ==================== STORY SECTION ==================== */}
        <section className="story-section" ref={storyRef}>
          <div className="section-container">
            <div className="story-grid">
              <div className="story-content" data-reveal data-reveal-delay="0">
                <span className="section-tag">Who We Are</span>
                <h2 className="section-title">
                  Engineering the <span className="accent-text">Future</span>
                </h2>
                <p className="story-text">
                  M.A.R.J.E.N.E was built on a simple but ambitious idea: great
                  technology should do more than function — it should create
                  clarity, momentum, and measurable value for the people who use
                  it.
                </p>
                <p className="story-text">
                  Based in Uganda and building for a global market, we bring
                  together engineering, design, and strategy to create powerful
                  digital experiences that are thoughtful, scalable, and built to
                  last.
                </p>
                <p className="story-text">
                  Whether we are creating a business platform, an AI solution, or
                  a customer-facing product, we combine technical depth with
                  business understanding to deliver work that feels premium and
                  performs with purpose.
                </p>
                <div className="story-stats">
                  <div className="story-stat">
                    <span className="stat-number" data-count="100">
                      0
                    </span>
                    <span className="stat-suffix">+</span>
                    <span className="stat-label">Projects Delivered</span>
                  </div>
                  <div className="story-stat">
                    <span className="stat-number" data-count="50">
                      0
                    </span>
                    <span className="stat-suffix">+</span>
                    <span className="stat-label">Happy Clients</span>
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
                    <h3>Innovation First</h3>
                    <p>
                      We push boundaries and explore new technologies to deliver
                      cutting-edge solutions.
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
                    <h3>People Centered</h3>
                    <p>
                      Technology is for people. We design with empathy and build
                      for impact.
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
                    <h3>Global Reach</h3>
                    <p>
                      From Uganda to the world, we serve clients across
                      continents and industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== MISSION & VISION ==================== */}
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
                <h3>Our Mission</h3>
                <p>
                  To help ambitious businesses unlock growth through intelligent,
                  secure, and scalable digital systems. We design and build
                  solutions that simplify operations, strengthen user
                  experiences, and create real-world impact.
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
                <h3>Our Vision</h3>
                <p>
                  To become the trusted technology partner for organizations
                  that want to grow with clarity and confidence — known for
                  precision, reliability, and digital products that feel as
                  thoughtful as they are effective.
                </p>
                <div className="mv-accent" />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CORE VALUES ==================== */}
        <section className="values-section">
          <div className="section-container">
            <div className="section-header" data-reveal data-reveal-delay="0">
              <span className="section-tag">What Drives Us</span>
              <h2 className="section-title">
                Core <span className="accent-text">Values</span>
              </h2>
              <p className="section-subtitle">
                The principles that guide everything we do
              </p>
            </div>

            <div className="values-grid">
              {[
                {
                  num: "01",
                  icon: "fa-lightbulb",
                  title: "Innovation",
                  text: "We constantly explore new technologies and creative approaches to solve complex problems.",
                  delay: 100,
                },
                {
                  num: "02",
                  icon: "fa-shield-halved",
                  title: "Integrity",
                  text: "We build trust through transparency, honesty, and ethical practices in all our dealings.",
                  delay: 200,
                },
                {
                  num: "03",
                  icon: "fa-gem",
                  title: "Excellence",
                  text: "We pursue the highest standards in design, code quality, and user experience.",
                  delay: 300,
                },
                {
                  num: "04",
                  icon: "fa-heart",
                  title: "Customer Success",
                  text: "Your success is our success. We measure our achievements by the value we create for you.",
                  delay: 400,
                },
                {
                  num: "05",
                  icon: "fa-chart-line",
                  title: "Growth",
                  text: "We believe in continuous learning and improvement, both for ourselves and our clients.",
                  delay: 500,
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

        {/* ==================== TIMELINE ==================== */}
        <section className="timeline-section">
          <div className="section-container">
            <div className="section-header" data-reveal data-reveal-delay="0">
              <span className="section-tag">Our Journey</span>
              <h2 className="section-title">
                Company <span className="accent-text">Timeline</span>
              </h2>
              <p className="section-subtitle">
                The milestones that shaped M.A.R.J.E.N.E
              </p>
            </div>

            <div className="timeline">
              {[
                {
                  year: "2021",
                  title: "The Beginning",
                  text: "M.A.R.J.E.N.E was founded with a vision to bring world-class software development to Uganda and beyond.",
                  delay: 100,
                  active: false,
                },
                {
                  year: "2022",
                  title: "First Major Projects",
                  text: "Delivered our first enterprise solutions and expanded our team of talented engineers.",
                  delay: 200,
                  active: false,
                },
                {
                  year: "2023",
                  title: "AI & Innovation",
                  text: "Launched our AI solutions division and integrated machine learning into our core offerings.",
                  delay: 300,
                  active: false,
                },
                {
                  year: "2024",
                  title: "Global Expansion",
                  text: "Expanded our client base internationally and established partnerships across Africa and beyond.",
                  delay: 400,
                  active: false,
                },
                {
                  year: "2025",
                  title: "Enterprise Solutions",
                  text: "Launched comprehensive enterprise solutions including ERP, POS, and management systems.",
                  delay: 500,
                  active: false,
                },
                {
                  year: "2026",
                  title: "The Future",
                  text: "Continuing to innovate and expand our impact, building the next generation of intelligent systems.",
                  delay: 600,
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
              <h2>Want to Join Our Journey?</h2>
              <p>
                We are building a team of thoughtful builders who care about
                craft, impact, and solving meaningful problems with technology.
              </p>
              <div className="cta-buttons">
                <Link href="/careers" className="btn btn-primary btn-large">
                  <span>View Open Positions</span>
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
