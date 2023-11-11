import { Images } from "../assets/images/images";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t, theme } = useLanguage();
  return (
    <div>
      <div className="grid text-center gap-5 py-8 dark:bg-[#252128]">
        <h1 className=" text-5xl font-bold leading*[72px] text-[#4731D3] dark:text-[#8F88FF]">
          {t("sendMe")}
        </h1>
        <p className="font-normal text-black dark:text-white">
          {t("sendMe2")}
          <br /> {t("sendMe2Br")}
        </p>
        <a
          href="https://web-sayfam-theta.vercel.app/"
          className="dark:text-white"
        >
          mehmetsonmez216@gmail.com
        </a>
        <div className="flex justify-center">
          {theme === "dark"
            ? Images.socials.map((icon, index) => (
                <a
                  className="m-3"
                  key={index}
                  href="https://web-sayfam-theta.vercel.app/"
                >
                  <img src={icon.img} alt={icon.name} />
                </a>
              ))
            : Images.socialsD.map((icon, index) => (
                <a
                  className="m-3"
                  key={index}
                  href="https://web-sayfam-theta.vercel.app/"
                >
                  <img src={icon.img} alt={icon.name} />
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
/*<a className="m-3 text-[#8F88FF]" href={item.name} key={index}>
<img src={item.img} alt={item.name} />
</a>*/
