"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTASection() {
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

  return (
    <section className="cta-section">
      <div className="cta-bg">
        <div className="subtle-orb orb-cta-1" style={{ width: "400px", height: "400px", background: "#94a3b8", top: "-20%", left: "-10%", opacity: 0.06 }}></div>
        <div className="subtle-orb orb-cta-2" style={{ width: "350px", height: "350px", background: "#cbd5e1", bottom: "-20%", right: "-10%", opacity: 0.06 }}></div>
      </div>
      <div className="section-container">
        <div className="cta-content reveal" ref={ref}>
          <h2>Ready to Transform Your Business?</h2>
          <p>Let&apos;s build something extraordinary together. Your vision, our expertise.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-large">
              <span>Start a Project</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="/about" className="btn btn-secondary btn-large">
              <span>Learn About Us</span>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
