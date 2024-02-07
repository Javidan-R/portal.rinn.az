import ServiceHeading from "../../../components/ServiceHeading";
import mainlogoblue from "../../../assets/images/services/mainlogo-blue.svg";
import { FC } from "react";
import { Link } from "react-router-dom";
import TransitionSection from "../../../components/Widgets/TransitionSection";
const breadcrumbItems = [
  { link: "/", name: "Əsas səhifə" },
  { link: "/informatin/23", name: "AZINTELECOM" },
];
 const About = () => {
  return (
    <div className="bg-[#f6f7f9]">
      <div className="container-fluid v-container">
        <ServiceHeading
          mainLink="/"
          backButtonProps={{
            customClassName:
              "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
            customStyle: undefined,
          }}
          breadcrumbItems={breadcrumbItems}
        />
        <TransitionSection>
        <section>
          <InformationHeader image={mainlogoblue} />
          <AboutComponent />
        </section>
        </TransitionSection>
        
      </div>
    </div>
  );
};

function AboutComponent() {
  return (
    <div className="row  rounded-xl shadow-xl border  border-1 mt-10 mb-4 p-6">
      <div className="col-12">
        <div className="flex lg:flex-row jutify-start gap-6 align-center items-center">
          <div className="flex lg:flex-row jutify-start gap-6 align-center items-center">
            <p className="font-extrabold">Telefon</p>
            <Link
              to="tel:1655"
              className=" flex justify-start items-center gap-4 cursor-pointer font-bold text-base leading-5"
            >
              <span className="text-[#0f52ba] font-normal text-base leading-5">
                1655 Çağrı Mərkəzi
              </span>
            </Link>
          </div>
          <div className="flex lg:flex-row jutify-start gap-6 align-center items-center">
            <p className="font-extrabold">Email</p>
            <Link
              to="mailto:info@azintelecom.az"
              className=" flex justify-center gap-4 cursor-pointer font-bold text-base leading-5"
            >
              <span className="text-[#0f52ba] font-normal text-base leading-5">
                mincom@mincom.gov.az
              </span>
            </Link>
          </div>
        </div>
        <hr className="my-2" />
        <div className="">
          <p className="font-extrabold my-4">Haqqımızda</p>
          <span>
            Prezident İlham Əliyevin 2021-ci il 11 oktyabr tarixli
            “Rəqəmsallaşma, innovasiya, yüksək texnologiyalar və rabitə
            sahəsində idarəetmənin təkmilləşdirilməsi ilə bağlı bəzi tədbirlər
            haqqında” Fərmanı ilə Nəqliyyat, Rabitə və Yüksək Texnologiyalar
            Nazirliyi Azərbaycan Respublikasının Rəqəmsal İnkişaf və Nəqliyyat
            Nazirliyi adlandırılıb. Həmçinin, Nazirliyin strukturu yenidən
            formalaşdırılıb. 
            <br />
            Fərmanda rəqəmsallaşdırılmanın və innovasiyaların
            tətbiqinin genişləndirilməsi, rabitə və informasiya
            texnologiyalarının inkişafı, tənzimləmə mexanizmlərinin
            təkmilləşdirilməsi və qeyd olunan sahələrdə keyfiyyətin artırılması
            əsas məqsəd kimi qeyd edilib.
            <br /> <br />
             Son illərdə Azərbaycan dövlət qurumları təqdim etdiyi xidmətləri rəqəmsallaşdırmaq üçün bir sıra
            layihələr həyata keçirir. Artıq Rəqəmsal İnkişaf və Nəqliyyat
            Nazirliyi bu sahədə böyük işlər görərək 57 növ xidmətini
            rəqəmsallaşdırıb.
            <br /> <br />
             Hazırda Nazirliyə daxil olan qurumlarla əhalinin
            təmaslarının sadələşdirilməsi, daha çevik və keyfiyyətli xidmət
            göstərilməsi üçün bu xidmətlərin vahid portalda birləşdirilməsinə
            qərar verilib.
            <br /> <br />
            
             Bu məqsədlə yaradılan Vahid Elektron Xidmətlər
            Portalı Rəqəmsal İnkişaf və Nəqliyyat Nazirliyinin təqdim etdiyi
            bütün elektron xidmətləri bir yerə toplayıb. Artıq elektron
            xidmətləri daha rahat tapmaq, tam şəkildə idarə etmək, istifadə
            prosesini asanlaşdırılıb. 
            <br /> <br />
            Nazirliyə tabe olan bütün qurumların
            elektron xidmətləri sadə formada vahid bir platformada
            yerləşdirilib. Yeni portalda bütün proseslərə hərtərəfli nəzarət
            etməklə vətəndaşlara daha səmərəli xidmət göstəriləcək və müştəri
            məmnuniyyəti artırılması təmin olunacaq. Təhlillər nəticəsində
            xidmətlərin təkmilləşdirilməsi daha çevik həyata keçiriləcək.
            <br /> <br />
             Vahid Elektron Xidmətlər Portalı üzərindən istifadə edilən bütün xidmətlər
            üzrə dəqiq statistik məlumatları əldə etmək, vahid istifadəçi
            bazasını formalaşdırmaq mümkün olacaq.
          </span>
        </div>
      </div>
    </div>
  );
}
export default About;

interface InformationHeaderProps {
  image: string;
}
export const InformationHeader: FC<InformationHeaderProps> = ({ image }) => {
  return (
    <div className="row  rounded-xl shadow-xl border  border-1  mt-10 mb-2 p-6">
      <div className="col-12 ">
        <img
          src={image}
          alt="AzIntelecom"
          className="max-w-full h-14 object-contain"
          style={{
            width: "336px",
            height: "62px",
          }}
        />
      </div>
    </div>
  );
};
