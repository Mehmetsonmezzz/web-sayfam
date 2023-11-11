import hero2 from "../assets/images/profile/hero2.png";
import { useLanguage } from "../contexts/LanguageContext";
//flex-col justify-center items-center lg:flex
const Profile = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-[#4731D3] dark:bg-[#171043] pt-[10rem] pb-[5rem]">
      <div className=" block center lg:flex lg:justify-center">
        <div>
          <h1 className=" ml-12 lg:ml-0 mb-[20px] mt-[-90px] lg:text-left text-[48px] text-white">
            {t("profile")}
          </h1>
          <div className="w-[28rem] h-[290px] ml-12 lg:ml-0">
            <h1 className="text-left text-[30px] leading-7  mb-5 text-white">
              {t("basicInfo")}
            </h1>
            <div className="flex gap-2 leading-10">
              <div className="text-[#CBF281] font-bold">
                <p>{t("birthday")} </p>
                <p>{t("cityOfResidance")}</p>
                <p>
                  {t("educationStatus")}

                  {t("educationStatusBr")}
                </p>
                <p>
                  {t("preferredRole")}

                  {t("preferredRoleBr")}
                </p>
              </div>
              <div className="text-white">
                <p>22.01.2000 </p>
                <p>Bursa </p>
                <p>Akdeniz Unv. YBS Lisans/2023</p>
                <p>Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:block w-[24rem] h-[290px]  ml-12 lg:ml-0 lg:mr-8">
          <img src={hero2} alt="hero2" className=" rounded-lg " />
        </div>
        <div className=" w-[20rem] h-[290px] leading-7  ml-12 lg:ml-6  ">
          <h1 className="text-[30px] leading-7 mb-3 text-white ">
            {t("aboutMe")}
          </h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
