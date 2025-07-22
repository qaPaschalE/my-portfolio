import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import ThemeToggle from "./ThemeToggle"; // 1. Import the toggle component

interface NavbarProps {
  isSticky: boolean;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ isSticky, activeSection }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const cvFileName = "Enyimiri Chetachi Paschal _CV updated.pdf";
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
        <div className="d-flex d-lg-none ms-auto me-2 align-items-center">
          {/* 2. Add the ThemeToggle to the mobile view */}
          <ThemeToggle />
          <a
            href={`${process.env.PUBLIC_URL}/files/${cvFileName}`}
            download="Enyimiri-Paschal-CV.pdf"
            className="custom-btn btn"
            style={{ fontSize: "12px", padding: "6px 12px", marginLeft: "8px" }}
            onClick={handleDownloadClick}
          >
            CV
          </a>
        </div>

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
          <ul className="navbar-nav mx-auto">{/* ... your nav links ... */}</ul>

          {/* Buttons for Desktop View (Hidden on Mobile) */}
          <div className="d-none d-lg-flex align-items-center">
            {/* 3. Add the ThemeToggle to the desktop view */}
            <ThemeToggle />
            <a
              href={`${process.env.PUBLIC_URL}/files/${cvFileName}`}
              download="Enyimiri-Paschal-CV.pdf"
              className="custom-btn btn ms-3" // Added margin here
              onClick={handleDownloadClick}
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
