import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import img from "../../assets/hero-right1x.png";
import "./Header.css";
const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`header ${theme === "dark" ? "dark" : ""}`}>
      <div className="headerContainer">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div className={`leftDiv ${theme === "dark" ? "dark" : ""}`}>
          I am front end
        </div>
        <img src={img}></img>
        <div className={`rightDiv ${theme === "dark" ? "dark" : ""}`}></div>
      </div>
    </div>
  );
};

export default Header;
