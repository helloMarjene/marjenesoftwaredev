"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    img: "/images/mjrn10.jpg",
    tag: "Web App",
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with AI recommendations",
    large: true,
  },
  {
    img: "/images/mjrn5.png",
    tag: "Mobile App",
    title: "Health Tracker",
    desc: "Cross-platform health monitoring application",
  },
  {
    img: "/images/mjrn7.png",
    tag: "Business System",
    title: "School ERP",
    desc: "Complete school management system",
  },
  {
    img: "/images/mjrn11.png",
    tag: "AI Solution",
    title: "Smart Analytics",
    desc: "AI-powered business intelligence dashboard",
  },
];

export default function PortfolioSection() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio-preview">
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">
            Featured <span className="accent-text">Projects</span>
          </h2>
          <p className="section-subtitle">Explore our latest work and success stories</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`portfolio-card ${project.large ? "large" : ""}`}
            >
              <div className="portfolio-image">
                <img
                  className="portfolio-photo"
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <Link href="/portfolio" className="portfolio-link">
                    View Project <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta reveal">
          <Link href="/portfolio" className="btn btn-outline">
            View All Projects <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
