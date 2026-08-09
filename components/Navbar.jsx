"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for background change and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on scroll
      const sections = ["home", "about", "skills", "timeline", "projects", "contact"];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Journey", href: "#timeline", id: "timeline" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="nav-logo">
          <span>RI</span>.Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta-btn">
            Let's Talk
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={`nav-mobile-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`nav-mobile-drawer ${isOpen ? "open" : ""}`}>
        <nav className="nav-mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-mobile-link ${activeSection === link.id ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary mobile-cta-btn"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
