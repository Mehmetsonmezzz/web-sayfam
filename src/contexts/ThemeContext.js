import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme); // localstorage değerini değiştir
  }, [theme]);
  // İşletim sistemi temasının değişimini dinleyen fonksiyon
  const handleSystemThemeChange = (e) => {
    if (e.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    // İşletim sistemi temasını dinlemek için bir event listener ekleyin
    const systemThemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    systemThemeMediaQuery.addEventListener("change", handleSystemThemeChange);

    // Component unmount olduğunda event listener'ı temizleyin
    return () => {
      systemThemeMediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
