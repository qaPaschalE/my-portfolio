import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isSticky: boolean;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ isSticky, activeSection }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const cvFileName = "Enyimiri Chetachi Paschal _CV updated.pdf";

  return (
    <nav className={`navbar navbar-expand-lg ${isSticky ? "is-sticky" : ""}`}>
      <div className="container">
        <a href="#hero" className="navbar-brand mx-auto mx-lg-0">
          <AnimatePresence>
            {isSticky && (
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
            )}
          </AnimatePresence>
          {!isSticky && <span className="navbar-brand-text">Paschal.E</span>}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            !isNavCollapsed ? "show" : ""
          }`}
          id="navbarNav"
        >
          {/* THE FIX IS HERE: All hrefs and activeSection checks are updated */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "hero" ? "active" : ""
                }`}
                href="#hero"
              >
                Home
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                className={`nav-link ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="#about"
              >
                About
              </a>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <li>
                      <a className="dropdown-item" href="#about">
                        My Story
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about">
                        Education
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "skills" ? "active" : ""
                }`}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "experience" ? "active" : ""
                }`}
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "projects" ? "active" : ""
                }`}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "contact" ? "active" : ""
                }`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row align-items-center mt-3 mt-lg-0">
            <a
              href={`${process.env.PUBLIC_URL}/files/${cvFileName}`}
              download="Enyimiri-Paschal-CV.pdf"
              className="custom-btn btn"
            >
              Download CV
            </a>
            <a className="custom-btn btn d-lg-none mt-2" href="#contact">
              Contact Me
            </a>
            <div className="d-none d-lg-flex align-items-center ms-lg-3">
              <i className="navbar-icon bi-telephone-plus"></i>
              <a
                className="custom-btn btn"
                href="#contact"
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
