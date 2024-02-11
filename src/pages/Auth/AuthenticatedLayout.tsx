import { FC, useState } from "react";
import backauth from "../../assets/images/auth/backauth.svg";
import asanlogin from "../../assets/images/auth/asanlogin.svg";
import question from "../../assets/images/auth/question.svg";
import asan from "../../assets/images/auth/asan.svg";
import fin from "../../assets/images/auth/fin.svg";
import sima from "../../assets/images/auth/sima.svg";
import asanimza from "../../assets/images/auth/asanimza.svg";
import simatoken from "../../assets/images/auth/simatoken.svg";
import bsxm from "../../assets/images/auth/bsxm.svg";
import { AuthData } from "../../types/type";
import { AuthChoose } from "./AuthChoose";
import { RegistrationLayout } from "./RegistrationLayout";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/atoms/Button/PrimaryButton";

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

const AuthenticatedLayout: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <section className="bg-[#fff] relative m-0 text-left text-[#212529]">
      <div className="bg-[#005abc] w-full absolute h-[360px]"></div>
      <div className="absolute top-[240px] w-full h-[180px]">
        <img src={backauth} className="w-full border-none" alt="Asana Login" />
      </div>
      <div className="w-full min-h-screen bg-[#fbfbfb] pt-[50px] pb-[3%]">
        <div className="bg-[#fff] sm:w-[90%] md:w-[80%] lg:w-[90%] xl:w-[64%] 2xl:w-[60%] mx-auto min-h-[660px] relative overflow-hidden rounded-xl shadow-xl v-container">
          <div className="row h-full">
            <div className="col-12 hover-bg-black-10 p-6 lg:p-8 xl:p-10">
              <div className="w-full">
                <Link to={"/"} className="w-full">
                  <PrimaryButton className=" bg-blue-500 text-lg rounded-xl border-none px-6 py-2 w-40  lg:w-24 md:w-20 abslolute z-10">
                    Geri
                  </PrimaryButton>
                </Link>
              </div>
              <div className="col-md-12 flex h-[140px] justify-center items-center">
                <img
                  src={asanlogin}
                  alt="Asan Login"
                  className="w-[150px] cursor-pointer transition transiton-delay"
                />
              </div>
              {isOpen ? (
                <RegistrationLayout />
              ) : (
                <div className="grid grid-cols-1 ">
                  {auth.map((item) => (
                    <AuthChoose
                      key={item.id}
                      {...item}
                      handleButtonClick={handleButtonClick}
                    />
                  ))}
                </div>
              )}
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
          <p>
            © “İnnovasiya və Rəqəmsal İnkişaf Agentliyi” Publik Hüquqi Şəxsi
          </p>
        </div>
      </div>
    </section>
  );
};
export default AuthenticatedLayout;
