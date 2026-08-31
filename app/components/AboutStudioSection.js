const highlights = [
  "Strategy-first digital products",
  "Modern websites and mobile apps",
  "AI automation and business systems",
];

export default function AboutStudioSection() {
  return (
    <section className="about-studio-section">
      <div className="about-studio-container">
        <div className="about-studio-text">
          <div className="about-tag">ABOUT M.A.R.J.E.N.E</div>
          <h2>
            We help ambitious businesses look sharper, move faster, and grow with
            confidence.
          </h2>
          <p>
            M.A.R.J.E.N.E designs and builds digital experiences that bring clarity,
            performance, and momentum to modern brands. From corporate websites to
            custom software systems, we turn ideas into polished products that work.
          </p>
          <p>
            Our team blends strategy, design, engineering, and AI-driven thinking so
            every launch is built to deliver measurable business value.
          </p>

          <div className="about-studio-points">
            {highlights.map((item) => (
              <span key={item} className="about-point">
                <i className="fas fa-check" aria-hidden="true"></i>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="about-studio-image">
          <img src="/images/mjrn1.png" alt="M.A.R.J.E.N.E team and digital product work" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
