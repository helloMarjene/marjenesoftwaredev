"use client";

import Link from "next/link";
import BrandWordmark from "./BrandWordmark";

const supportedCountries = [
  { code: "ug", name: "Uganda" },
  { code: "cd", name: "DR Congo" },
  { code: "ru", name: "Russia" },
  { code: "us", name: "United States" },
  { code: "cn", name: "China" },
  { code: "gb", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "jp", name: "Japan" },
];

const paymentOptions = [
  { name: "American Express", icon: "americanexpress" },
  { name: "Bitcoin", icon: "bitcoin" },
  { name: "Mastercard", icon: "mastercard" },
  { name: "PayPal", icon: "paypal" },
  { name: "Visa", icon: "visa" },
  { name: "Discover", icon: "discover", discover: true },
];
const footerEmails = [
  "tech@marjenesoftwaredev.com",
  "engineering@marjenesoftwaredev.com",
  "support@marjenesoftwaredev.com",
  "hello@marjenesoftwaredev.com",
  "info@marjenesoftwaredev.com",
  "marjenesoftwaredev@gmail.com",
];

const gmailComposeUrl = (email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <BrandWordmark variant="footer" />
            </Link>
            <p className="footer-tagline">Engineering Intelligent Digital Solutions</p>
            <p className="footer-desc">
              Transforming ideas into intelligent systems. We build software that drives growth and innovation.
            </p>
            <div className="footer-social">
              <a className="footer-social__link--x" href="https://x.com/hellomarjene?s=11" target="_blank" rel="noopener noreferrer" aria-label="X">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a className="footer-social__link--facebook" href="https://www.facebook.com/share/1MgyDyTToQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="footer-social__link--instagram" href="https://www.instagram.com/hellomarjene?stkn=MXQ1cnZtd3VuOXl2MQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="footer-social__link--tiktok" href="https://www.tiktok.com/@m.a.r.j.e.n.e_soft.dev?_r=1&_t=ZS-9AKFiZ7BlPJ" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a className="footer-social__link--linkedin" href="https://www.linkedin.com/in/m-a-r-j-e-n-e-software-development-company-2236713ab?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="footer-social__link--github" href="https://github.com/hellomarjene" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
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
            <div className="contact-item contact-item--emails">
              <i className="fas fa-envelope"></i>
              <div className="footer-email-list">
                {footerEmails.slice(0, 5).map((email) => (
                  <a href={gmailComposeUrl(email)} target="_blank" rel="noopener noreferrer" key={email}>
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href={gmailComposeUrl(footerEmails[5])} target="_blank" rel="noopener noreferrer">
                {footerEmails[5]}
              </a>
            </div>
            <div className="contact-item">
              <i className="fas fa-location-dot"></i>
              <a href="https://maps.app.goo.gl/bhYLHz8MvyRnVkgB8?g_st=aw" target="_blank" rel="noopener noreferrer">Uganda</a>
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
          <p>&copy; 2026 MARJENE. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>

      <section className="footer-support" aria-labelledby="footer-support-title">
        <div className="footer-container footer-support__inner">
          <h2 id="footer-support-title">WE SUPPORT</h2>
          <ul className="footer-country-list">
            {supportedCountries.map((country) => (
              <li key={country.code}>
                <img
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={`${country.name} flag`}
                  loading="lazy"
                />
                <span>{country.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="footer-trust-row" aria-label="Company and payment information">
        <div className="footer-container footer-trust-row__grid">
          <div className="footer-trust-brand">
            <img src="/images/logo1.png" alt="M.A.R.J.E.N.E logo" loading="lazy" />
            <div>
              <BrandWordmark variant="trust" />
              <p className="footer-trust-tagline">We build. You grow.</p>
              <p className="footer-trust-description">
                Building modern websites, mobile applications, graphic designs and software solutions.
              </p>
            </div>
          </div>

          <div className="footer-payments">
            <h2>Payment Options</h2>
            <ul className="footer-payment-list">
              {paymentOptions.map((payment) => (
                <li className={payment.discover ? "footer-payment--discover" : ""} key={payment.name}>
                  <img
                    src={`https://cdn.simpleicons.org/${payment.icon}`}
                    alt={payment.name}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-connect">
            <h2>Let&apos;s talk</h2>
            <p>Have a project in mind? Our team is ready to help.</p>
            <div className="footer-connect__links">
              <a href="https://wa.me/256704125517" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
                <i className="fab fa-whatsapp" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <a href={gmailComposeUrl("hello@marjenesoftwaredev.com")} target="_blank" rel="noopener noreferrer" aria-label="Email M.A.R.J.E.N.E">
                <i className="fas fa-envelope" aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
