import { Images } from "../assets/images/images";
import { useLanguage } from "../contexts/LanguageContext";
export default function Skills() {
  const { t } = useLanguage();
  return (
    <div className="dark:bg-[#252128]">
      <div className="lg:flex lg:w-[70%] py-[6rem] lg:mx-auto lg:justify-between justify-end ">
        <h2 className=" text-center lg:w-[33%] mb-7 lg:ml-6 text-indigo-700 dark:text-[#CBF281] text-5xl font-bold">
          {t("skills")}
        </h2>
        <div className="flex  gap-8 lg:gap-16 flex-wrap lg:justify-around">
          {Images.skills.map((item, index) => {
            return (
              <div className="xl:flex lg:gap-6 lg:w-[35%] m-auto" key={index}>
                <img src={item.img} alt={item.name} />
                <h3 className=" flex lg:grid text-neutral-500 text-2xl font-medium leading-9 lg:justify-center items-center dark: dark:text-white">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
