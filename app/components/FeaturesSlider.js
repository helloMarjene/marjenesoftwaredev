import SITE_IMAGES from "../siteImages";

const existingSliderImages = [
  { src: "/images/mjrn3.png", title: "Fast Development", desc: "Rapid prototyping" },
  { src: "/images/mjrn12.jpeg", title: "Secure Architecture", desc: "Enterprise-grade security" },
  { src: "/images/mjrn5.png", title: "Cross Platform", desc: "Universal reach" },
  { src: "/images/mjrn6.png", title: "24/7 Support", desc: "Always available" },
  { src: "/images/mjrn7.png", title: "Enterprise Ready", desc: "Built to scale" },
  { src: "/images/mjrn8.png", title: "Modern Tech", desc: "Latest stack" },
  { src: "/images/mjrn.png", title: "Custom Solutions", desc: "Tailored for you" },
  { src: "/images/mjrn4.png", title: "Scalable", desc: "Grows with you" },
  { src: "/images/mjrn11.png", title: "Flexible", desc: "Adaptive design" },
];

const newSliderImages = SITE_IMAGES
  .filter((src) => /^\/images\/new-image \(\d+\)\.jpeg$/.test(src))
  .map((src, index) => ({
    src,
    title: `Project Showcase ${index + 1}`,
    desc: "Additional project image",
  }));
const sliderImages = [...existingSliderImages, ...newSliderImages];

function SliderItem({ img, decorative = false }) {
  return (
    <div className="slider-img-item">
      <img src={img.src} alt={decorative ? "" : img.title} loading="lazy" />
      <div className="slider-img-caption">
        <div className="slider-icon">
          <i className="fas fa-star"></i>
        </div>
        <div>
          <h4>{img.title}</h4>
          <p>{img.desc}</p>
        </div>
      </div>
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
