import { createContext, useContext, useEffect, useState } from "react";
import en from "../languages/en.json";
import tr from "../languages/tr.json";
import axios from "axios";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(storedLanguage || "en");
  const translations = {
    en,
    tr,
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const [postData, setPostData] = useState("");

  const t = (key) => {
    if (postData) {
      return postData[key];
    }

    return translations[language][key];
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", language);
    axios
      .post(
        "https://6549df66e182221f8d520b29.mockapi.io/keyvalue",
        translations[newLanguage]
      )
      .then((response) => {
        // Gelen veriyi state'e sakla
        console.log(response);
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Post İsteği Hatası:", error);
      });
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
