import project1 from "../assets/images/projects/project_01.png";
import project2 from "../assets/images/projects/project_02.png";
import { useLanguage } from "../contexts/LanguageContext";
/*
font-size: 48px;
font-weight: 700;
line-height: 48px;
letter-spacing: 0.01em;
text-align: left;

box-shadow: 0px 18px 88px -4px #18274B24;

box-shadow: 0px 8px 28px -6px #18274B1F;

font-family: Inter;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;


*/
const Projects = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-[#CBF281] dark:bg-[#1A210B] py-12">
      <h1 className=" pb-12 lg:pb-12 text-center lg:text-left text-5xl lg:mx-80 lg:text-5xl font-bold text-[#4731D3] dark:text-[#CBF281]">
        {t("projects")}
      </h1>
      <div className="lg:ml-80 lg:mr-80 rounded-xl bg-white dark:bg-[#2B2727] mb-12">
        <div className="flex">
          <div className="mt-10 mr-10 lg:mt-0 lg:mr-0">
            <img
              className=" rounded-xl  lg:mt-0 lg:w-[360px] lg:h-[360px]"
              src={project1}
              alt="proje 1"
            ></img>
          </div>
          <div className=" lg:p-10 grid justify-between lg:w-[960px] h-[360px]">
            <div>
              <h1 className="text-3xl font-bold text-[#4731D3] dark:text-[#C1BAED]">
                Workintech
              </h1>
            </div>
            <div>
              <p className=" font-light lg:font-normal lg:text-base dark:text-white">
                {t("projectInfo1")}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex w-16 h-8 bg-[#8173DA] text-center justify-center items-center rounded-3xl">
                react
              </div>
              <div className="flex w-16 h-8 bg-[#8173DA] text-center justify-center items-center rounded-3xl">
                redux
              </div>
              <div className="flex w-16 h-8 bg-[#8173DA] text-center justify-center items-center rounded-3xl">
                vercel
              </div>
            </div>
            <div className="flex gap-10">
              <div className=" text-slate-900 dark:text-lime-300 text-base font-medium underline leading-none">
                <a href="github.com">{t("viewSite")}</a>
              </div>
              <div className=" text-slate-900 dark:text-lime-300 text-base font-medium underline leading-none">
                <a href="github.com">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:ml-80 lg:mr-80 rounded-xl bg-white dark:bg-[#2B2727] mb-12">
        <div className="flex">
          <div className="mt-10 mr-10 lg:mt-0 lg:mr-0">
            <img
              className=" rounded-xl  lg:mt-0 lg:w-[360px] lg:h-[360px]"
              src={project2}
              alt="proje 1"
            ></img>
          </div>
          <div className=" lg:p-10 grid justify-between lg:w-[960px] h-[360px]">
            <div>
              <h1 className="text-3xl font-bold text-[#4731D3] dark:text-[#C1BAED]">
                Journey
              </h1>
            </div>
            <div>
              <p className=" font-light lg:font-normal lg:text-base dark:text-white">
                {t("projectInfo2")}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex w-16 h-8 bg-[#8173DA] text-center justify-center items-center rounded-3xl">
                react
              </div>
              <div className="flex w-16 h-8 bg-[#8173DA] text-center justify-center items-center rounded-3xl">
                redux
              </div>
              <div className="flex w-16 h-8 bg-[#8173DA] text-center justify-center items-center rounded-3xl">
                vercel
              </div>
            </div>
            <div className="flex gap-10">
              <div className=" text-slate-900 dark:text-lime-300 text-base font-medium underline leading-none">
                <a href="github.com">{t("viewSite")}</a>
              </div>
              <div className=" text-slate-900 dark:text-lime-300 text-base font-medium underline leading-none">
                <a href="github.com">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
