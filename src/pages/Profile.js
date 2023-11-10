import hero2 from "../assets/images/profile/hero2.png";
//flex-col justify-center items-center lg:flex
const Profile = () => {
  return (
    <div className="bg-[#4731D3] pt-[10rem] pb-[5rem]">
      <div className=" block center lg:flex lg:justify-center">
        <div>
          <h1 className=" mb-[20px] mt-[-90px]  ml-12 lg:text-left text-[48px]">
            Profile
          </h1>
          <div className="w-[24rem] h-[290px]  ml-12 mr-0">
            <h1 className="text-left text-[30px] leading-7  mb-5">
              Basic İnformation
            </h1>
            <div className="flex gap-4 leading-10">
              <div>
                <p>Doğum tarihi </p>
                <p>İkamet Şehri </p>
                <p>Eğitim Durumu</p>
                <p>Tercih Ettiği Rol</p>
              </div>
              <div>
                <p>22.01.2000 </p>
                <p>Bursa </p>
                <p>Akdeniz Ünv. YBS Lisans</p>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:block w-[24rem] h-[290px]  ml-12 lg:mr-8">
          <img src={hero2} alt="hero2" className=" rounded-lg " />
        </div>
        <div className=" w-[24rem] h-[290px] leading-7  ml-16 lg:ml-4  ">
          <h1 className="text-[30px] leading-7 mb-3  ">About me</h1>
          <p>
            Lorem5 fdhgkdfhldfhlfghlfg lhlfghlfghlfghlgfh
            fhlfghlflghlfghlfLorem5 fdhgkdfhldfhlfghlfg lhlfghlfghlfghlgfh
            fhlfghlflghlfghlfLorem5 fdhgkdfhldfhlfghlfg lhlfghlfghlfghlgfh
            fhlfghlflghlfghlfdhgkdfhldfhlfghlfg lhlfghlfghlfghlgfh
            fhlfghlflghlfghlfdhgkdfhldfhlfghlfg lhlfghlfghlfghlgfh
            fhlfghlflghlfghlf
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
