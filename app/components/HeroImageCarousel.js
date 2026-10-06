"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero-newset1.jpeg",
  "/images/hero-newset2.jpeg",
  "/images/hero-newset3.jpeg",
  "/images/hero-newset4.jpeg",
];

export default function HeroImageCarousel({ alt = "", className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    heroImages.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroImages.length);
    }, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <img
      key={heroImages[activeIndex]}
      className={`hero-image-carousel-image ${className}`.trim()}
      src={heroImages[activeIndex]}
      alt={alt}
      loading="eager"
      decoding="async"
    />
  );
}