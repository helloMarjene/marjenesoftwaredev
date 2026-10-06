"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SITE_IMAGES from "../siteImages";
import BrandWordmark from "./BrandWordmark";
import HeroImageCarousel from "./HeroImageCarousel";

function ParticleCanvas() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef(null);
  const isActiveRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const count = isTouchDevice ? 30 : 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      particlesRef.current = particles;
    };
    createParticles();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    if (!isTouchDevice) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }
    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    const animate = () => {
      if (!isActiveRef.current) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (!isTouchDevice) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (100 - dist) / 100;
            p.vx -= (dx / dist) * force * 0.02;
            p.vy -= (dy / dist) * force * 0.02;
          }
        }

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.8) {
          p.vx = (p.vx / speed) * 0.8;
          p.vy = (p.vy / speed) * 0.8;
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < 150) {
            const opacity = (1 - cdist / 150) * 0.3;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity.toFixed(2)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity.toFixed(2)})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${(p.opacity * 0.2).toFixed(2)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isActiveRef.current = entry.isIntersecting;
          if (entry.isIntersecting) animate();
          else if (rafRef.current) cancelAnimationFrame(rafRef.current);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);
    animate();

    const handleVisibility = () => {
      isActiveRef.current = !document.hidden;
      if (!document.hidden) animate();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
}

export default function HeroSection() {
  const heroVideos = ["/videos/clip1.mp4", "/videos/clip2.mp4", "/videos/clip3.mp4"];
  const [activeVideo, setActiveVideo] = useState(0);
  const [activePhonePair, setActivePhonePair] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePhonePair((pair) => (pair + 1) % (SITE_IMAGES.length / 2));
    }, 3500);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <HeroImageCarousel className="hero-image-carousel--home" decorative />
        <div className="subtle-orb orb-1"></div>
        <div className="subtle-orb orb-2"></div>
        <div className="subtle-orb orb-3"></div>
        <ParticleCanvas />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Based in Uganda, Serving the World</span>
        </div>

        <h1 className="hero-title hero-title--wordmark">
          <BrandWordmark variant="hero" />
        </h1>

        <div className="hero-video-showcase" aria-label="Featured video showcase">
          <div className="hero-video-frame">
            <video
              key={heroVideos[activeVideo]}
              className="hero-video"
              src={heroVideos[activeVideo]}
              autoPlay
              muted
              playsInline
              preload="metadata"
              onEnded={() => setActiveVideo((prev) => (prev + 1) % heroVideos.length)}
            />
            <div className="hero-video-meta">
              <span>Featured work</span>
              <span>
                {activeVideo + 1}/{heroVideos.length}
              </span>
            </div>
          </div>
          <div className="phone-stack" aria-hidden="true">
            <div className="phone-mockup phone-mockup--left">
              <img src={SITE_IMAGES[activePhonePair * 2]} alt="" loading="lazy" />
            </div>
            <div className="phone-mockup phone-mockup--right">
              <img src={SITE_IMAGES[activePhonePair * 2 + 1]} alt="" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="hero-cta">
          <Link href="/contact" className="btn btn-primary">
            <span>Get Started</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link href="/services" className="btn btn-secondary">
            <span>Explore Services</span>
            <i className="fas fa-chevron-right"></i>
          </Link>
        </div>

      </div>

      <div className="hero-floating-cards">
        <div className="float-card card-1">
          <img src="/images/mjrn1.png" alt="Featured project preview" loading="lazy" />
          <span>Innovation</span>
        </div>
        <div className="float-card card-2">
          <img src="/images/mjrn4.png" alt="Secure delivery preview" loading="lazy" />
          <span>Secure</span>
        </div>
        <div className="float-card card-3">
          <img src="/images/mjrn6.png" alt="Cloud solutions preview" loading="lazy" />
          <span>Cloud Native</span>
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
