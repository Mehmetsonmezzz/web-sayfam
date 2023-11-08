import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import hero from "../../assets/images/header/hero.png";
const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, language, changeLanguage } = useLanguage();
  const toggleLanguage = () => {
    // Şu anki dil "en" ise "tr" yap, aksi halde "en" yap
    const newLanguage = language === "en" ? "tr" : "en";
    changeLanguage(newLanguage);
  };
  return (
    <div className="container">
      <div className="lg:w-1/2 pr-4 pl-4 flex">
        <div
          className={`h-custom bg-[#171043] text-white dark:"bg-[#4731D3] text-black"
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
          className={`h-custom w-1/4 ${
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
      <div className="lg:w-1/2 pr-4 pl-4">
        <img src={hero} alt="Header img"></img>
      </div>
    </div>
  );
};

export default Footer;
