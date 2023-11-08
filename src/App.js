import React, { useState, useEffect } from "react";
import "./App.css";
import { useLanguage } from "./contexts/LanguageContext";
import axios from "axios";
import en from "./languages/en";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import { useTheme } from "./contexts/ThemeContext";
import Skills from "./pages/Skills";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  //Tarayıcı açıldığında yerel depolamadan dark mod tercihini al

  const postData = en;
  // axios
  //   .post("https://reqres.in/api/workintech", {
  //     en.json
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // axios.get().then((response) => {
  //   const translations = response.data; // API'den gelen verilere bağlı olarak ayarlayın
  //   // Çeviri metinlerini kullanın
  // });
  const translatedText = t("welcome");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const languageHandleClick = () => {
    if (language === "tr") {
      return setLanguage("en");
    } else {
      return setLanguage("tr");
    }
  };

  // Dark mod tercihini yerel depolamada sakla

  // useEffect(() => {
  //   axios
  //     .get("https://reqres.in/api/deneme", postData)
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // }, []);
  const languageHandler = () => {
    setLanguage(language === "tr" ? "en" : "tr");
    localStorage.setItem("language", language === "tr" ? "en" : "tr");
  };

  // axios
  //   .get("https://reqres.in/api/deneme")
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <Skills />
      <Footer />
      <div>
        <button onClick={languageHandler}>{t("language")}</button>
        <h1>{t("welcome")}</h1>
        <h1>{translatedText}</h1>
        <p>{t("about")}</p>
      </div>
    </div>
  );
}

export default App;
