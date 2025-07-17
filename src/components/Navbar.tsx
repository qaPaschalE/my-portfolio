import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify"; // 1. Import the toast function

interface NavbarProps {
  isSticky: boolean;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ isSticky, activeSection }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const cvFileName = "Enyimiri Chetachi Paschal _CV updated.pdf";

  // 2. New function to show the download toast
  const handleDownloadClick = () => {
    toast.info("CV download started!");
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isSticky ? "is-sticky" : ""}`}>
      <div className="container">
        <a href="#hero" className="navbar-brand">
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
              <span className="brand-text">QAPaschalE</span>
            )}
          </AnimatePresence>
        </a>

        {/* --- BUTTONS FOR MOBILE VIEW --- */}
        <div className="d-flex d-lg-none ms-auto me-2">
          <a
            href={`${process.env.PUBLIC_URL}/files/${cvFileName}`}
            download="Enyimiri-Paschal-CV.pdf"
            className="custom-btn btn"
            style={{ fontSize: "12px", padding: "6px 12px" }}
            onClick={handleDownloadClick} // 3. Add onClick handler here
          >
            CV
          </a>
          <a
            className="custom-btn btn"
            href="#contact"
            style={{ fontSize: "12px", padding: "6px 12px", marginLeft: "8px" }}
          >
            Contact
          </a>
        </div>

        {/* --- HAMBURGER TOGGLER --- */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
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

          {/* Buttons for Desktop View (Hidden on Mobile) */}
          <div className="d-none d-lg-flex align-items-center">
            <a
              href={`${process.env.PUBLIC_URL}/files/${cvFileName}`}
              download="Enyimiri-Paschal-CV.pdf"
              className="custom-btn btn"
              onClick={handleDownloadClick} // 3. Add onClick handler here too
            >
              Download CV
            </a>
            <div className="d-flex align-items-center ms-3">
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
