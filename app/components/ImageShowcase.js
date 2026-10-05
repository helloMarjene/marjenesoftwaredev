"use client";

import { useEffect, useRef } from "react";

const images = [
  { src: "/images/mjrn12.jpeg", alt: "Project showcase 1" },
  { src: "/images/mjrn6.png", alt: "Project showcase 2" },
  { src: "/images/mjrn4.png", alt: "Project showcase 3" },
  { src: "/images/mjrn8.png", alt: "Project showcase 5" },
  { src: "/images/mjrn3.png", alt: "Project showcase 6" },
  ...Array.from({ length: 27 }, (_, index) => ({
    src: `/images/new-image (${index + 1}).jpeg`,
    alt: `Additional project showcase ${index + 1}`,
  })),
];
const uniqueImages = Array.from(new Map(images.map((image) => [image.src, image])).values());

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

        <div className="portfolio-gallery-columns">
          {uniqueImages.map((img) => (
            <figure className="portfolio-gallery-item" key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
