"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SITE_IMAGES from "../siteImages";

const previewTransitions = ["fade", "slide", "zoom", "flip", "rise"];
const initialPreviewIndex = SITE_IMAGES.indexOf("/images/mjrn11.png");

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

    const [previewIndex, setPreviewIndex] = useState(initialPreviewIndex);
    const [transitionIndex, setTransitionIndex] = useState(0);

    useEffect(() => {
      const intervalId = window.setInterval(() => {
        setPreviewIndex((index) => (index + 1) % SITE_IMAGES.length);
        setTransitionIndex((index) => (index + 1) % previewTransitions.length);
      }, 2600);
      return () => window.clearInterval(intervalId);
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
                {i === projects.length - 1 ? (
                  <img
                    key={previewIndex}
                    className={`portfolio-photo portfolio-preview-photo portfolio-preview-photo--${previewTransitions[transitionIndex]}`}
                    src={SITE_IMAGES[previewIndex]}
                    alt={`${project.title} image preview`}
                    loading="lazy"
                  />
                ) : (
                  <img
                    className="portfolio-photo"
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                  />
                )}
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
