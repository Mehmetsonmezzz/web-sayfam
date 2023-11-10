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
    <div>
      <div>
        <button onClick={toggleLanguage}>
          {language === "en" ? "Türkçe" : "English"}
        </button>
        <button
          onClick={toggleTheme}
          className={`${
            theme === "dark" ? "bg-black text-white" : "bg-white text-dark"
          }`}
        >{`${theme === "dark" ? "Dark" : "Normal"}`}</button>

        <div className="flex">
          <div className="mr-5 h-10 justify-end">
            <button onClick={toggleLanguage}>
              {language === "en" ? "Türkçe " : "English "}
            </button>
          </div>

          <div className="toggle-switch h-10">
            <label>
              <input type="checkbox" placeholder="bla" onClick={toggleTheme} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <div className="relative flex">
          <div></div>
          <div
            className={`h-custom bg-[#171043] text-white dark:"bg-[#4731D3] text-black"
        w-3/4 ${
          theme === "dark"
            ? "bg-[#171043] text-white"
            : "bg-[#4731D3] text-black"
        }`}
          ></div>
          <div className="flex absolute h-avatar mt-16">
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

            <div className="inline-block">
              <img src={hero} alt="Header img"></img>
            </div>
          </div>
          <div
            className={`h-custom w-1/4 ${
              theme === "dark"
                ? "bg-[#1A210B] text-white"
                : "bg-[#CBF281] text-white"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
