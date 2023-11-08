import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./Header.css";
import { useLanguage } from "../../contexts/LanguageContext";
import hero from "../../assets/images/header/hero.png";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    // Şu anki dil "en" ise "tr" yap, aksi halde "en" yap
    const newLanguage = language === "en" ? "tr" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <div className="flex relative">
      <div
        className={`h-custom z-[1] bg-[#171043] text-white dark:"bg-[#4731D3] text-black"
            w-3/4 ${
              theme === "dark"
                ? "bg-[#171043] text-white"
                : "bg-[#4731D3] text-black"
            }`}
      >
        <div className="flex justify-end">
          <button onClick={toggleLanguage}>
            {language === "en" ? "TÜRKÇE'YE GEÇ " : "SWITCH TO ENGLISH "}
          </button>
        </div>
        <div>
          <h4 className="pb-20 text-5xl text-[#CBF281]">{t("name")}</h4>
          <h3 className="text-6xl text-[#CBF281]">
            I am a Frontend <br />
            Developer...
          </h3>
          <p className="text-2xl text-white">
            ...who likes to craft solid and sacalable frontend
            <br /> products with great user experiences
          </p>
        </div>
      </div>
      <div
        className={`h-custom w-1/4 z-[1] ${
          theme === "dark"
            ? "bg-[#1A210B] text-white"
            : "bg-[#CBF281] text-white"
        }`}
      >
        <div className="toggle-switch flex justify-start">
          <label>
            <input type="checkbox" placeholder="bla" onClick={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>
        
      </div>
    </div>
  );
};
export default Header;
