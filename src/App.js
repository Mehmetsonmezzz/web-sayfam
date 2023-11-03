import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Tarayıcı açıldığında yerel depolamadan dark mod tercihini al
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dark mod tercihini yerel depolamada sakla
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Normal Mod" : "Dark Mod"}
      </button>
      <h1>My App</h1>
      <p>This is a sample app with dark mode.</p>
    </div>
  );
}

export default App;
