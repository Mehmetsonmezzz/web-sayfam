import { Images } from "../assets/images/images";

export default function Skills() {
  return (
    <div className="flex w-[70%]  py-[6rem] first-letter: mx-auto gap-16 justify-between">
      <h2 className=" w-[33%] text-indigo-700 text-5xl font-bold tracking-wide">
        Skills
      </h2>
      <div className="w-[67%] flex gap-10 flex-wrap justify-between">
        {Images.skills.map((item, index) => {
          return (
            <div className="flex gap-6 items-center w-[35%]" key={index}>
              <img src={item.img} alt={`${item.name}icon`} />
              <h3 className=" text-neutral-500 text-2xl font-medium uppercase leading-9">
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
