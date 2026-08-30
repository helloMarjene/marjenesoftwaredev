"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lockedScrollY, setLockedScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = useCallback(() => {
    setLockedScrollY(window.scrollY);
    document.body.style.top = `-${window.scrollY}px`;
    document.body.classList.add("mje-menu-open");
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    document.body.classList.remove("mje-menu-open");
    document.body.style.top = "";
    window.scrollTo(0, lockedScrollY);
    setMenuOpen(false);
  }, [lockedScrollY]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && menuOpen) closeMenu();
    };
    const onClick = (e) => {
      const nav = document.getElementById("mjeNav");
      if (menuOpen && nav && !nav.contains(e.target)) closeMenu();
    };
    const onResize = () => {
      if (window.innerWidth > 860 && menuOpen) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen, closeMenu]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
  ];

  const isActivePath = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="mje-nav"
      id="mjeNav"
      data-state={scrolled ? "scrolled" : "top"}
    >
      <div className="mje-nav__inner">
        <Link href="/" className="mje-nav__logo" aria-label="M.A.R.J.E.N.E — home">
          <span className="mje-nav__mark">M.A.R.J.E.N.E</span>
          <span className="mje-nav__tag">SOFTWARE DEVELOPMENT</span>
        </Link>

        <nav
          className="mje-nav__links"
          id="mjeNavLinks"
          data-open={menuOpen ? "true" : "false"}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mje-nav__link"
              aria-current={isActivePath(link.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mje-nav__link mje-nav__cta"
            onClick={closeMenu}
          >
            Start a project
          </Link>
        </nav>

        <button
          className="mje-nav__toggle"
          id="mjeNavToggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mjeNavLinks"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={(e) => {
            e.stopPropagation();
            menuOpen ? closeMenu() : openMenu();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
