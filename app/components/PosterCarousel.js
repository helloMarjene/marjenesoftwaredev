"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const POSTERS = [
  {
    image: "/images/mjrn.png",
    tag: "Web App",
    title: "E-Commerce Platform",
    text: "Full-stack e-commerce solution with AI-driven product recommendations and real-time inventory.",
  },
  {
    image: "/images/mjrn.png",
    tag: "Mobile App",
    title: "Health Tracker",
    text: "Cross-platform health monitoring app with wearable sync and personalized insights.",
  },
  {
    image: "/images/mjrn.png",
    tag: "Business System",
    title: "School ERP",
    text: "End-to-end school management system covering admissions, grading, and fee tracking.",
  },
  {
    image: "/images/mjrn.png",
    tag: "AI Solution",
    title: "Smart Analytics",
    text: "AI-powered business intelligence dashboard turning raw data into decisions.",
  },
  {
    image: "/images/mjrn.png",
    tag: "Enterprise",
    title: "Hospital Management",
    text: "Secure patient records, appointment scheduling, and billing in one platform.",
  },
];

const TRANSITIONS = ["slide", "slide-reverse", "fade", "zoom", "flip"];
const INTERVAL_MS = 4500;

export default function PosterCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitionIndex, setTransitionIndex] = useState(0);
  const [slides, setSlides] = useState([
    { ...POSTERS[0], id: 0, state: "active", transition: "" },
  ]);
  const timerRef = useRef(null);
  const frameRef = useRef(null);
  const nextIdRef = useRef(1);

  const nextTransition = useCallback(() => {
    const t = TRANSITIONS[transitionIndex % TRANSITIONS.length];
    setTransitionIndex((i) => i + 1);
    return t;
  }, [transitionIndex]);

  const goToNext = useCallback(() => {
    const nextIndex = (current + 1) % POSTERS.length;
    const transition = nextTransition();
    const newSlide = {
      ...POSTERS[nextIndex],
      id: nextIdRef.current++,
      state: `${transition}-enter-from`,
      transition,
    };

    setSlides((prev) => [
      ...prev.map((s) =>
        s.state === "active"
          ? { ...s, state: `${s.transition || transition}-exit-to` }
          : s
      ),
      newSlide,
    ]);

    requestAnimationFrame(() => {
      setSlides((prev) =>
        prev.map((s) => {
          if (s.id === newSlide.id) {
            return { ...s, state: "active" };
          }
          if (s.state.includes("exit-to")) {
            return s;
          }
          return s;
        })
      );
    });

    setTimeout(() => {
      setSlides((prev) => prev.filter((s) => s.state !== `${transition}-exit-to` && !s.state.includes("exit-to")));
    }, 800);

    setCurrent(nextIndex);
  }, [current, nextTransition]);

  const start = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goToNext, INTERVAL_MS);
  }, [goToNext]);

  const stop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  useEffect(() => {
    start();
    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [start, stop]);

  const goToDot = (index) => {
    if (index === current) return;
    stop();
    const transition = "fade";
    const newSlide = {
      ...POSTERS[index],
      id: nextIdRef.current++,
      state: `${transition}-enter-from`,
      transition,
    };
    setSlides((prev) => [
      ...prev.map((s) =>
        s.state === "active" ? { ...s, state: `${transition}-exit-to` } : s
      ),
      newSlide,
    ]);
    requestAnimationFrame(() => {
      setSlides((prev) =>
        prev.map((s) =>
          s.id === newSlide.id ? { ...s, state: "active" } : s
        )
      );
    });
    setTimeout(() => {
      setSlides((prev) => prev.filter((s) => !s.state.includes("exit-to")));
    }, 800);
    setCurrent(index);
    start();
  };

  return (
    <section className="poster-carousel-section">
      <div className="section-container">
        <div
          className="poster-carousel-frame"
          id="posterCarouselFrame"
          ref={frameRef}
          onMouseEnter={stop}
          onMouseLeave={start}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={`poster-slide ${slide.state}`}>
              <img src={slide.image} alt={slide.title} />
              <div className="poster-slide-text">
                <span className="poster-slide-tag">{slide.tag}</span>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
          <div className="poster-carousel-dots" id="posterCarouselDots">
            {POSTERS.map((_, i) => (
              <span
                key={i}
                className={i === current ? "active" : ""}
                onClick={() => goToDot(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
