import { Images } from "../../assets/images/images";

const Footer = () => {
  return (
    <div>
      <div className="grid text-center gap-5 my-8">
        <h1 className=" text-5xl font-bold leading*[72px] text-[#4731D3]">
          Send me a message
        </h1>
        <p className="font-normal">
          Got a question or proposal, or just want <br /> to say hello? Go
          ahead.
        </p>
        <a href="#">mehmetsonmez216@gmail.com</a>
        <div className="flex justify-center">
          {Images.socials.map((item, index) => {
            return (
              <a href={item.name} key={index}>
                <img src={item.img} alt={item.name} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
