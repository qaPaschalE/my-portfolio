import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isSticky: boolean;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ isSticky, activeSection }) => {
  // 1. New state to control the visibility of the dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg ${isSticky ? "is-sticky" : ""}`}>
      <div className="container">
        <a href="#section_1" className="navbar-brand mx-auto mx-lg-0">
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
          {!isSticky && <span className="navbar-brand-text">Enyimiri</span>}
        </a>

        <div className="d-flex align-items-center d-lg-none">
          <i className="navbar-icon bi-telephone-plus me-3"></i>
          <a className="custom-btn btn" href="#section_7">
            +2347062641241
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item">
              <a
                className={`nav-link click-scroll ${
                  activeSection === "section_1" ? "active" : ""
                }`}
                href="#section_1"
              >
                Home
              </a>
            </li>

            {/* --- NEW DROPDOWN MENU FOR ABOUT --- */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                // The main link is active if we are in the 'About' section
                className={`nav-link click-scroll ${
                  activeSection === "section_2" ? "active" : ""
                }`}
                href="#section_2"
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
                    transition={{ duration: 0.2 }}
                  >
                    <li>
                      <a className="dropdown-item" href="#section_2">
                        My Story
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#section_2">
                        Education
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link click-scroll ${
                  activeSection === "section_3" ? "active" : ""
                }`}
                href="#section_3"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link click-scroll ${
                  activeSection === "section_4" ? "active" : ""
                }`}
                href="#section_4"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link click-scroll ${
                  activeSection === "section_5" ? "active" : ""
                }`}
                href="#section_5"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link click-scroll ${
                  activeSection === "section_7" ? "active" : ""
                }`}
                href="#section_7"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="d-lg-flex align-items-center d-none ms-auto">
            <i className="navbar-icon bi-telephone-plus me-3"></i>
            <a className="custom-btn btn" href="#section_7">
              +2347062641241
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
