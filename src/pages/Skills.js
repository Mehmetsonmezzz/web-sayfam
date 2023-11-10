import { Images } from "../assets/images/images";
export default function Skills() {
  return (
    <div className="flex w-[70%] py-[6rem]  lg:mx-auto justify-between">
      <h2 className="w-[33%] ml-6 text-indigo-700 text-3xl lg:text-5xl font-bold tracking-wide">
        Skills
      </h2>
      <div className=" flex gap-10 lg:gap-16  flex-wrap justify-around">
        {Images.skills.map((item, index) => {
          return (
            <div
              className="xl:flex gap-6 items-center  w-[30%] lg:w-[35%]"
              key={index}
            >
              <img src={item.img} alt={item.name} />
              <h3 className="  text-neutral-500 lg:text-2xl font-medium  leading-9">
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
