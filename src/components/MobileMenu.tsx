// src/components/MobileMenu.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const cvFileName = "Enyimiri Chetachi Paschal _CV updated.pdf";

  return (
    <>
      {/* Hamburger Menu Button (visible only on mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMenuOpen(true)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-menu-header">
              <span className="navbar-brand">Enyimiri</span>
              <button onClick={() => setMenuOpen(false)} className="close-btn">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <ul className="mobile-menu-links">
              <li>
                <a href="#hero" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => setMenuOpen(false)}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="mobile-menu-buttons">
              <a
                href={`${process.env.PUBLIC_URL}/files/${cvFileName}`}
                download="Enyimiri-Paschal-CV.pdf"
                className="custom-btn btn"
              >
                Download CV
              </a>
              <a
                className="custom-btn btn mt-2"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                +2347062641241
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
