"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  { img: "/images/mjrn1.png", alt: "Web Development", delay: "0.15s", wide: true },
  { img: "/images/mjrn3.png", alt: "Mobile App Development", delay: "0.35s" },
  { img: "/images/mjrn4.png", alt: "AI Solutions", delay: "0.5s", tall: true },
  { img: "/images/mjrn5.png", alt: "School Management", delay: "0.7s" },
  { img: "/images/mjrn6.png", alt: "Church Management", delay: "0.9s" },
  { img: "/images/mjrn7.png", alt: "Hospital Management", delay: "1.1s" },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
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

  const classNames = [
    "service-card",
    "reveal",
    service.wide ? "service-card--wide" : "",
    service.tall ? "service-card--tall" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      ref={ref}
      className={classNames}
      style={{ "--card-delay": service.delay }}
    >
      <div className="card-media">
        <img src={service.img} alt={service.alt} loading="lazy" />
      </div>
    </article>
  );
}

export default function ServicesSection() {
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
    <section className="services-preview" id="services">
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">
            Our <span className="accent-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        <div className="services-cta reveal">
          <Link href="/services" className="btn btn-outline">
            View All Services <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
