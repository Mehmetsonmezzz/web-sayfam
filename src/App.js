import React, { useState, useEffect } from "react";
import "./App.css";
import { useLanguage } from "./contexts/LanguageContext";
import axios from "axios";
import en from "./languages/en";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

import { useTheme } from "./contexts/ThemeContext";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      {/* 
      <Skills />
       */}
      {/* <Header /> */}
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      {/* <div>
        <button onClick={languageHandler}>{t("language")}</button>
        <h1>{t("welcome")}</h1>
        <h1>{translatedText}</h1>
        <p>{t("about")}</p>
      </div> */}
    </div>
  );
}

export default App;
