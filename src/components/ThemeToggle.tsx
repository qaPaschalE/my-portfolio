// src/components/ThemeToggle.tsx
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
// 1. Import your new local icon components
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {/* 2. Use your custom components instead of the ones from the library */}
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
