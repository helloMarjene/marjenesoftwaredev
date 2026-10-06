import SITE_IMAGES from "../siteImages";

const existingSliderImages = [
  { src: "/images/mjrn3.png", alt: "Software development project" },
  { src: "/images/mjrn12.jpeg", alt: "Secure architecture project" },
  { src: "/images/mjrn5.png", alt: "Cross-platform application" },
  { src: "/images/mjrn6.png", alt: "Support platform" },
  { src: "/images/mjrn7.png", alt: "Enterprise system" },
  { src: "/images/mjrn8.png", alt: "Modern technology project" },
  { src: "/images/mjrn.png", alt: "Custom software solution" },
  { src: "/images/mjrn4.png", alt: "Scalable software system" },
  { src: "/images/mjrn11.png", alt: "Flexible digital product" },
];

const newSliderImages = SITE_IMAGES
  .filter((src) => /^\/images\/new-image \(\d+\)\.jpeg$/.test(src))
  .map((src, index) => ({
    src,
    alt: `Additional project image ${index + 1}`,
  }));
const sliderImages = [...existingSliderImages, ...newSliderImages];

function SliderItem({ img, decorative = false }) {
  return (
    <div className="slider-img-item">
      <img src={img.src} alt={decorative ? "" : img.alt} loading="lazy" />
    </div>
  );
}

export default function FeaturesSlider() {
  return (
    <section className="features-section image-slider-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            Built for <span className="accent-text">Excellence</span>
          </h2>
          <p className="section-subtitle">
            We combine innovation, expertise, and dedication to deliver exceptional results
          </p>
        </div>
      </div>

      <div className="image-slider-container">
        <div className="image-slider-track">
          <div className="image-slider-set">
            {sliderImages.map((img) => (
              <SliderItem key={img.src} img={img} />
            ))}
          </div>
          <div className="image-slider-set" aria-hidden="true">
            {sliderImages.map((img) => (
              <SliderItem key={`loop-${img.src}`} img={img} decorative />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
