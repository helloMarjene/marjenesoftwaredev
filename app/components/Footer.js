"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="logo-text">M.A.R.J.E.N.E</span>
            </Link>
            <p className="footer-tagline">Engineering Intelligent Digital Solutions</p>
            <p className="footer-desc">
              Transforming ideas into intelligent systems. We build software that drives growth and innovation.
            </p>
            <div className="footer-social">
              <a href="https://x.com/Toptown869" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/m-a-r-j-e-n-e-software-development-company-2236713ab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/hellomarjene" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://instagram.com/hellomarjene" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">Mobile Apps</Link></li>
              <li><Link href="/services">AI Solutions</Link></li>
              <li><Link href="/services">Cloud Solutions</Link></li>
              <li><Link href="/services">Cybersecurity</Link></li>
              <li><Link href="/services">UI/UX Design</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Resources</h4>
            <ul>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+256 704 125517</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+256 792 096974</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:hello@marjenesoftwaredev.com">hello@marjenesoftwaredev.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:arsenekahungamjrn17165@gmail.com">arsenekahungamjrn17165@gmail.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-location-dot"></i>
              <span>Uganda</span>
            </div>

            <div className="footer-newsletter">
              <h5>Newsletter</h5>
              <form
                className="newsletter-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing!");
                }}
              >
                <input type="email" placeholder="Your email" required />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; 2026 M.A.R.J.E.N.E. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
