import React from "react";
import hero from "../assets/images/header/hero.png";
import "./Header.css";
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
      className={`main-container h-[400px] lg:h-[671px] ${
        theme === "dark" ? "bg-[#171043] text-white" : "bg-[#4731D3] text-black"
      }`}
    >
      <div className="container-about">
        <div className="navbar">
          <button
            c
            onClick={toggleLanguage}
            className=" mr-[90px] lg:mr-0 font-bold text-[#CBF281]"
          >
            {language === "en" ? "TÜRKÇE'YE GEÇ " : "SWITCH TO ENGLISH "}
          </button>
        </div>
        <h3 className=" ml-5 lg:ml-[320px] mt-20 lg:mt-5 text-[#CBF281] font-bold text-3xl">
          {t("name")}
        </h3>
        <div className="ml-5 lg:ml-[320px] lg:mt-48">
          <h1 className=" text-[#CBF281] lg:font-bold text-3xl lg:text-6xl mb-12">
            {t("info")}
            <br /> {t("infoBr")}
          </h1>
          <p className=" text-[12px] lg:text-2xl lg:font-normal lg:leading-7 mb-10 text-white">
            {t("info2")}
            <br /> {t("info2Br")}
          </p>
          <div className="flex w-[200px] lg:w-[300px] lg:h-[50px] gap-5">
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
        <img
          className="hero-div lg:w-[600px] w-[250px] mt-"
          src={hero}
          alt=""
        ></img>
      </div>
      <div
        className={`container-to-right ${
          theme === "dark"
            ? "bg-[#1A210B] text-white"
            : "bg-[#CBF281] text-white"
        }`}
      >
        <label className=" ml-4">
          <input type="checkbox" placeholder="bla" onClick={toggleTheme} />
          <span
            className={`slider ${
              theme === "dark" ? ".slider::before" : "slider"
            }`}
          ></span>
        </label>
      </div>
    </div>
  );
}
