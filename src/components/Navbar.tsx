import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isSticky: boolean;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ isSticky, activeSection }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const cvFileName = "Enyimiri Chetachi Paschal _CV updated.pdf";

  return (
    <nav className={`navbar navbar-expand-lg ${isSticky ? "is-sticky" : ""}`}>
      <div className="container">
        {/* --- BRAND (LEFT SIDE) --- */}
        <a href="#section_1" className="navbar-brand">
          <AnimatePresence>
            {isSticky ? (
              <motion.div
                layoutId="paschal-avatar"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/smiling-paschal.jpeg"}
                  alt="Enyimiri"
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                />
              </motion.div>
            ) : (
              <span className="brand-text">Paschal.E</span>
            )}
          </AnimatePresence>
        </a>

        {/* --- DOWNLOAD CV BUTTON (VISIBLE ON MOBILE) --- */}
        <a
          href={`${process.env.PUBLIC_URL}/files/${cvFileName}`}
          download="Enyimiri-Paschal-CV.pdf"
          className="custom-btn btn d-lg-none"
        >
          Download CV
        </a>

        {/* --- HAMBURGER TOGGLER (RIGHT SIDE) --- */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* --- COLLAPSIBLE MENU --- */}
        <div
          className={`collapse navbar-collapse ${
            !isNavCollapsed ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "section_1" ? "active" : ""
                }`}
                href="#section_1"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "section_2" ? "active" : ""
                }`}
                href="#section_2"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "section_3" ? "active" : ""
                }`}
                href="#section_3"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "section_4" ? "active" : ""
                }`}
                href="#section_4"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "section_5" ? "active" : ""
                }`}
                href="#section_5"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "section_7" ? "active" : ""
                }`}
                href="#section_7"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons for Desktop View (Hidden on Mobile) */}
          <div className="d-none d-lg-flex align-items-center">
            <a
              href={`${process.env.PUBLIC_URL}/files/${cvFileName}`}
              download="Enyimiri-Paschal-CV.pdf"
              className="custom-btn btn"
            >
              Download CV
            </a>
            <div className="d-flex align-items-center ms-3">
              <i className="navbar-icon bi-telephone-plus"></i>
              <a
                className="custom-btn btn"
                href="#section_7"
                style={{ marginLeft: "10px" }}
              >
                +2347062641241
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
