const sliderImages = [
  { src: "/images/mjrn3.png", title: "Fast Development", desc: "Rapid prototyping" },
  { src: "/images/mjrn12.jpeg", title: "Secure Architecture", desc: "Enterprise-grade security" },
  { src: "/images/mjrn12.jpeg", title: "Cloud Integration", desc: "Scalable cloud solutions" },
  { src: "/images/mjrn3.png", title: "AI Powered", desc: "Intelligent automation" },
  { src: "/images/mjrn5.png", title: "Cross Platform", desc: "Universal reach" },
  { src: "/images/mjrn6.png", title: "24/7 Support", desc: "Always available" },
  { src: "/images/mjrn7.png", title: "Enterprise Ready", desc: "Built to scale" },
  { src: "/images/mjrn8.png", title: "Modern Tech", desc: "Latest stack" },
  { src: "/images/mjrn.png", title: "Custom Solutions", desc: "Tailored for you" },
  { src: "/images/mjrn.png", title: "Data Driven", desc: "Insights that matter" },
  { src: "/images/mjrn.png", title: "Performance", desc: "Optimized speed" },
  { src: "/images/mjrn12.jpeg", title: "Reliable", desc: "99.9% uptime" },
  { src: "/images/mjrn12.jpeg", title: "Innovative", desc: "Cutting edge" },
  { src: "/images/mjrn12.jpeg", title: "Collaborative", desc: "Team synergy" },
  { src: "/images/mjrn3.png", title: "Agile", desc: "Fast iterations" },
  { src: "/images/mjrn2.png", title: "Robust", desc: "Battle tested" },
  { src: "/images/mjrn4.png", title: "Scalable", desc: "Grows with you" },
  { src: "/images/mjrn11.png", title: "Flexible", desc: "Adaptive design" },
  { src: "/images/mjrn6.png", title: "Dedicated", desc: "Committed team" },
  { src: "/images/mjrn7.png", title: "Professional", desc: "Expert delivery" },
  { src: "/images/mjrn11.png", title: "Creative", desc: "Unique solutions" },
];

function SliderItem({ img, index }) {
  return (
    <div className="slider-img-item">
      <img src={img.src} alt={img.title} loading="lazy" />
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
            {sliderImages.map((img, i) => (
              <SliderItem key={`a-${i}`} img={img} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
