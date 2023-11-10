import React from "react";
import hero from "../assets/images/header/hero.png";
import "./deneme.css";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import githubLight from "../assets/images/header/githubLight.png";
import githubDark from "../assets/images/header/githubDark.png";
import linkedinLight from "../assets/images/header/linkedinLight.png";
import linkedinDark from "../assets/images/header/linkedinDark.png";
export default function Denemee() {
  const { theme, toggleTheme } = useTheme();
  const { t, language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    // Şu anki dil "en" ise "tr" yap, aksi halde "en" yap
    const newLanguage = language === "en" ? "tr" : "en";
    changeLanguage(newLanguage);
  };
  return (
    <div
      className={`main-container ${
        theme === "dark" ? "bg-[#171043] text-white" : "bg-[#4731D3] text-black"
      }`}
    >
      <div className="container-about">
        <div className="navbar">
          <button onClick={toggleLanguage}>
            {language === "en" ? "TÜRKÇE'YE GEÇ " : "SWITCH TO ENGLISH "}
          </button>
        </div>
        <h3 className="name text-blue-50 dark:text-black">almila</h3>
        <div className="container-text">
          <h1>
            I am Frontend a<br /> Developer...
          </h1>
          <p>
            ...who likes to craft solid and scalable frontend <br /> products
            with great user experiences.
          </p>
          <div className="button-div">
            <button>
              <img
                src={` ${theme === "dark" ? githubDark : githubLight}`}
                alt="github"
              ></img>
            </button>
            <button>
              <img
                src={` ${theme === "dark" ? linkedinDark : linkedinLight}`}
                alt="github"
              ></img>
            </button>
          </div>
        </div>
        <img className="hero-div" src={hero} alt=""></img>
      </div>
      <div
        className={`container-to-right ${
          theme === "dark"
            ? "bg-[#1A210B] text-white"
            : "bg-[#CBF281] text-white"
        }`}
      >
        <label>
          <input type="checkbox" placeholder="bla" onClick={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
