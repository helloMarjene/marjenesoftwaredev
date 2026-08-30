"use client";

import { useEffect, useRef } from "react";

const images = [
  { src: "/images/mjrn12.jpeg", alt: "Project showcase 1", large: true },
  { src: "/images/mjrn6.png", alt: "Project showcase 2" },
  { src: "/images/mjrn4.png", alt: "Project showcase 3" },
  { src: "/images/mjrn6.png", alt: "Project showcase 4" },
  { src: "/images/mjrn8.png", alt: "Project showcase 5" },
  { src: "/images/mjrn3.png", alt: "Project showcase 6", large: true },
];

export default function ImageShowcase() {
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
    <section className="image-showcase-section" aria-label="Project gallery">
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">Visual Showcase</span>
          <h2 className="section-title">
            A <span className="accent-text">Gallery</span> of Our Work
          </h2>
          <p className="section-subtitle">
            Real visuals, real products, and a more immersive experience across the site.
          </p>
        </div>

        <div className="image-showcase-grid">
          {images.map((img, i) => (
            <div
              key={i}
              className={`image-showcase-card ${img.large ? "large" : ""}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
