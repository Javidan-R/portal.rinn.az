import React, { FC, useState } from "react";
import backauth from "../../assets/images/auth/backauth.svg";
import asanlogin from "../../assets/images/auth/asanlogin.svg";
import fin from "../../assets/images/auth/fin.svg";
import sima from "../../assets/images/auth/sima.svg";
import asanimza from "../../assets/images/auth/asanimza.svg";
import simatoken from "../../assets/images/auth/simatoken.svg";
import bsxm from "../../assets/images/auth/bsxm.svg";
import question from "../../assets/images/auth/question.svg";
import asan from "../../assets/images/auth/asan.svg";
import usericon from "../../assets/images/auth/usericon.svg"
import passwordicon from "../../assets/images/auth/passwordicon.svg"

import { Link } from "react-router-dom";

const auth: AuthData[] = [
  {
    id: 1,
    title: "İdentifikasiya nömrəsi ilə",
    desc: "Hesabınıza identifikasiya nömrəsi ilə daxil olun",
    image: fin,
    detail:
      "İstifadəçi identifikasiya nömrəsi ilə Onlayn qaydada vətəndaşların heç bir xidmət məntəqəsinə müraciət etmədən birbaşa internet üzərindən müraciət edərək qeydiyyatını tamamlaya bilməsi üçün nəzərdə tutulmuşdur.Bunun üçün “Qeydiyyat” düyməsini sıxıb, video qeydiyyata başlaya bilərsiniz.Video qeydiyyat zamanı mobil nömrənin adınıza olması ilə bağlı hər hansı tələb mövcud deyil, müraciət 5 iş günü ərzində sistem operatoru tərəfindən yoxlanıldıqdan və təsdiq edildikdən sonra hesab aktivləşir. ",
    sign: true,
  },
  {
    id: 2,
    title: "SIMA Rəqəmsal  imza ilə",
    desc: "Hesabınıza SIMA Rəqəmsal  imza ilə daxil olun",
    image: sima,
    detail:
      "İstifadəçi identifikasiya nömrəsi ilə Onlayn qaydada vətəndaşların heç bir xidmət məntəqəsinə müraciət etmədən birbaşa internet üzərindən müraciət edərək qeydiyyatını tamamlaya bilməsi üçün nəzərdə tutulmuşdur.Bunun üçün “Qeydiyyat” düyməsini sıxıb, video qeydiyyata başlaya bilərsiniz.Video qeydiyyat zamanı mobil nömrənin adınıza olması ilə bağlı hər hansı tələb mövcud deyil, müraciət 5 iş günü ərzində sistem operatoru tərəfindən yoxlanıldıqdan və təsdiq edildikdən sonra hesab aktivləşir. ",
  },
  {
    id: 3,
    title: "Asan imza ilə",
    desc: "Hesabınıza Asan imza ilə daxil olun",
    image: asanimza,
    detail:
      "İstifadəçi identifikasiya nömrəsi ilə Onlayn qaydada vətəndaşların heç bir xidmət məntəqəsinə müraciət etmədən birbaşa internet üzərindən müraciət edərək qeydiyyatını tamamlaya bilməsi üçün nəzərdə tutulmuşdur.Bunun üçün “Qeydiyyat” düyməsini sıxıb, video qeydiyyata başlaya bilərsiniz.Video qeydiyyat zamanı mobil nömrənin adınıza olması ilə bağlı hər hansı tələb mövcud deyil, müraciət 5 iş günü ərzində sistem operatoru tərəfindən yoxlanıldıqdan və təsdiq edildikdən sonra hesab aktivləşir. ",
  },
  {
    id: 4,
    title: "SIMA Token (Elektron Imza) ilə",
    desc: "Hesabınıza SIMA Token (Elektron Imza) ilə daxil olun",
    image: simatoken,
    detail:
      "İstifadəçi identifikasiya nömrəsi ilə Onlayn qaydada vətəndaşların heç bir xidmət məntəqəsinə müraciət etmədən birbaşa internet üzərindən müraciət edərək qeydiyyatını tamamlaya bilməsi üçün nəzərdə tutulmuşdur.Bunun üçün “Qeydiyyat” düyməsini sıxıb, video qeydiyyata başlaya bilərsiniz.Video qeydiyyat zamanı mobil nömrənin adınıza olması ilə bağlı hər hansı tələb mövcud deyil, müraciət 5 iş günü ərzində sistem operatoru tərəfindən yoxlanıldıqdan və təsdiq edildikdən sonra hesab aktivləşir. ",
  },
  {
    id: 5,
    title: "BSXM Elektron Imza ilə",
    desc: "Hesabınıza BSXM Elektron Imza ilə daxil olun",
    image: bsxm,
    detail:
      "İstifadəçi identifikasiya nömrəsi ilə Onlayn qaydada vətəndaşların heç bir xidmət məntəqəsinə müraciət etmədən birbaşa internet üzərindən müraciət edərək qeydiyyatını tamamlaya bilməsi üçün nəzərdə tutulmuşdur.Bunun üçün “Qeydiyyat” düyməsini sıxıb, video qeydiyyata başlaya bilərsiniz.Video qeydiyyat zamanı mobil nömrənin adınıza olması ilə bağlı hər hansı tələb mövcud deyil, müraciət 5 iş günü ərzində sistem operatoru tərəfindən yoxlanıldıqdan və təsdiq edildikdən sonra hesab aktivləşir. ",
  },
];

interface AuthData {
  id: number;
  title: string;
  desc: string;
  image: string;
  detail: string;
  sign?: boolean;
  handleButtonClick?:()=>void
}

interface AuthChooseProps extends AuthData {}

const AuthChoose: FC<AuthChooseProps> = ({title, desc, image, sign ,handleButtonClick }) => (
  <div className="col-md-12  z-2 mt-6 transition-transform duration-1000 transform hover:scale-105 ">
    <div className="bg-[#fff] w-full flex fle-row align-center justify-between p-4 transition-colors hover:bg-blue-100 cursor-pointer h-[80px] border rounded-xl shadow-xl">
      <div className="cursor-pointer text-left flex flex-row items-center gap-4">
        <img src={image} alt="Fin" className="h-[65px]" />
        <div>
          <p className="text-[#0757bc] mb-[10px] text-xl font-semibold ">
            {title}
          </p>
          <p className="text-[#7d7d7d] mt-[10px] text-base ">{desc}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        {sign && (
          <button
            onClick={handleButtonClick}
            className="bg-[#0c66ff] text-[#fff] w-[75px] h-[32px] text-center pt-[4%] border-none rounded-lg cursor-pointer text-sm"
          >
            <p className="mb-1">Qeydiyyat</p>
          </button>
        )}

        <button className="text-[#005abc] text-base cursor-pointer">
          Ətraflı
        </button>
      </div>
    </div>
  </div>
);

const AuthenticatedLayout: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return(
  <section className="bg-[#fff] relative m-0 text-left text-[#212529]">
  <div className="bg-[#005abc] w-full absolute h-[360px]"></div>
  <div className="absolute top-[240px] w-full h-[180px]">
    <img src={backauth} className="w-full border-none" alt="Asana Login" />
  </div>
  <div className="w-full min-h-screen bg-[#fbfbfb] pt-[50px] pb-[3%]">
    <div className="bg-[#fff] w-full sm:w-[90%] md:w-[80%] lg:w-[90%] xl:w-[60%] 2xl:w-[50%] mx-auto min-h-[660px] relative overflow-hidden rounded-xl shadow-xl v-container">
      <div className="row h-full">
        <div className="col-12 hover-bg-black-10 p-6 lg:p-8 xl:p-10">
          <div className="col-md-12 flex h-[140px] justify-center items-center">
            <img
              src={asanlogin}
              alt="Asan Login"
              className="w-[150px] cursor-pointer transition transiton-delay"
            />
          </div>
          {
            isOpen ?  <RegistrationLayout/> :(
              <div className="grid grid-cols-1 ">
            {auth.map((item) => (
              <AuthChoose key={item.id} {...item}  handleButtonClick={handleButtonClick}/>
            ))}
          </div>
            )
          }
          
          
        </div>
      </div>
    </div>
  </div>
  <div className="text-[#7d8b92] text-center p-2 mt-[80px]">
    <div className="flex justify-center gap-6">
      <p className="text-[#0757bc] cursor-pointer text-base font-semibold ">
        <img src={asan} alt=" Şərtlər və qaydalar" />
        Şərtlər və qaydalar
      </p>
      <p className="text-[#0757bc] cursor-pointer text-base font-semibold ">
        <img src={question} alt=" Şərtlər və qaydalar" />
        Tez - tez verilən suallar
      </p>
    </div>
    <div className="mb-1">
      <p>© “İnnovasiya və Rəqəmsal İnkişaf Agentliyi” Publik Hüquqi Şəxsi</p>
    </div>
  </div>
</section>

)}
export default AuthenticatedLayout;

interface RegistrationLayoutProps {
  // Add any props you need for registration
}
export const RegistrationLayout: FC<RegistrationLayoutProps> = () => {
  const [formData, setFormData] = useState({
    pin: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Form submitted with data:", formData);
  };

  return (
    <section className="bg-[#fff] relative m-0 text-left text-[#212529]">

        <div className={`bg-[#fff]  w-full  mx-auto min-h-[360px] relative overflow-hidden `}>
          <div className="row h-full">
            <div className="col-12 hover-bg-black-10 p-6 lg:p-8 xl:p-10">
              <h1 className="text-3xl font-bold mb-4 text-center">Giriş səhifəsi</h1>
              <form
                className="form-horizontal form-material input-wrapper"
                onSubmit={handleSubmit}
              >
                <div className="finInput flex align-center border border-1 relative w-full p-0    my-3">
                  <img
                    className="person-img absolute  w-[25px] ml-[15px] "
                    src={usericon}
                  />
                  <input
                    className="input-field bg-[#fcfcfe] w-full font-lg  block border-none  py-3 px-4  pl-14"
                    name="pin"
                    placeholder="İdentifikasiya nömrəsini daxil edin"
                    type="text"
                    value={formData.pin}
                    onChange={handleChange}
                  />
                  <span className="icon icon-alert-circle info-icon FinIcon"></span>
                </div>
                <div className="passwordInput flex align-center border border-1 relative w-full p-0 my-3 " >
                  <img
                    className="lock-img w-[28px] ml-[15px]"
                    src={passwordicon}
                  />
                  <input
                    className="input-field bg-[#fcfcfe] w-full font-lg  block border-none  py-3 px-4"
                    name="password"
                    placeholder="Şifrənizi daxil edin"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="btn btn-primary login-button check-fin-login-button w-full bg-blue-600 py-2 rounded-md shadow-lg "
                  type="submit"
                >
                  <p className="text-3xl text-white">İrəli</p>
                </button>
              </form>
              <div
                className="w-full mt-6"
                
              >
                <Link to="" className=" text-center text-2xl text-blue-600 mt-2">
                  <p>Şifrəni unutmusunuz?</p>
                </Link>
                <Link to="" className="  text-center text-2xl text-blue-600 mt-2">
                  <p>Qeydiyyat</p>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
