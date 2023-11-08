import React from 'react'
import hero from "../assets/images/header/hero.png";
import './deneme.css'
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';



export default function Denemee() {
    const { theme, toggleTheme } = useTheme();
  const { t, language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    // Şu anki dil "en" ise "tr" yap, aksi halde "en" yap
    const newLanguage = language === "en" ? "tr" : "en";
    changeLanguage(newLanguage);
  };
  return (
        <div className='main-container'>
            <div className='container-about'>
                <div className='navbar'>
                    <p>almila</p>
                    <button onClick={toggleLanguage}>
            {language === "en" ? "TÜRKÇE'YE GEÇ " : "SWITCH TO ENGLISH "}
          </button>
                </div>
                <div className='container-text'>
                    <h1>
                        I am Frontend a<br /> Developer...
                    </h1>
                    <p>
                        ...who likes to craft solid and scalable frontend <br /> products with great user experiences.
                    </p>
                </div>
                <img src={hero}>

                </img>
            </div>
            <div className='container-to-right'>
                <button>
                    Dark Mode
                </button>
            </div>
        </div>
  )
}
