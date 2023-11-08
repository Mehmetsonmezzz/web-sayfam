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
  const [language, setLanguage] = useState(storedLanguage || "en"); // Varsayılan dil: Türkçe
  const translations = {
    en,
    tr,
  };

  useEffect(() => {
    localStorage.setItem("language", language); // Tema değiştiğinde localStorage güncelle
  }, [language]);

  const [postData, setPostData] = useState(null); // Post isteği sonucu gelen veriyi saklamak için state

  const t = (key) => {
    // Eğer post isteği sonucu veri gelmişse, onu kullan
    if (postData) {
      return postData[key];
    }

    return translations[language][key];
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);

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

  useEffect(() => {
    // Sayfa yüklendiğinde varsayılan dil olarak Türkçe'yi kullanın
    changeLanguage("tr");
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
