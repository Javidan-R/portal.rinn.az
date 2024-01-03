import { HomeCard } from "../../../components/HomeCard";
import ServicesCard from "../../../components/ServicesCard";

const homecard = [
  {
    id: 1,
    name: "Elektron Xidmətlər",
    desc: "Sorğu, Tətbiq və Ödəniş xidmətləri",
    image: "./src/assets/images/services/services.svg",
  },
  {
    id: 2,
    name: "Qurumlar",
    desc: "Rəsmi qurumların xidmətləri və əlaqə məlumatları",
    image: "./src/assets/images/services/Institutions.svg",
  },
  {
    id: 3,
    name: "Sürətli Kömək",
    desc: "Şikayətlərinizi, təkliflərinizi, suallarınızı və istəklərinizi bizə göndərin ",
    image: "./src/assets/images/services/Question.svg",
  },
];

const selectedServices = [
  {
    id: 1,
    name: "“AzInTelecom” MMC",
    desc: "IMEI Qeydiyyat",
    image: "../../../src/assets/images/services/Imei.png",
  },
  {
    id: 2,
    name: "“AzInTelecom” MMC",
    desc: "Mobil cihazların qeydiyyat tarifləri",
    image: "../../../src/assets/images/services/Mobiltarifler.png",
  },
  {
    id: 3,
    name: "“AzInTelecom” MMC",
    desc: "IMEI yoxlama",
    image: "../../../src/assets/images/services/Imeiyoxlama.png",
  },
];

export const Home: React.FC = () => {
  return (
    <div>
      <div className="container-fluid v-container">
        <div className="flex justify-center">
          <div className="lead home-card-container w-[1140px] justify-center flex items-strech h-[100px] gap-8">
            {homecard.map((card, index) => (
              <HomeCard
                name={card.name}
                desc={card.desc}
                image={card.image}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <section id="pinned-services " className="pt-12 pb-24 h-[22rem]">
        <div className="container-fluid v-container">
          <div className="h-20">
            <h3 className="font-semibold text-3xl text-#14142b  ">
              Seçilmiş Xidmətlər
            </h3>
          </div>
          <div className="flex justify-between items-strech">
            {selectedServices.map((selected, index) => (
              <ServicesCard
                key={index}
                image={selected.image}
                name={selected.name}
                desc={selected.desc}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="h-[489px] bg-[#e5e7ee] py-16"
      >
        <div className="container-fluid v-container">
          <div>
            <div className="h-20">
              <h3 className="font-semibold text-3xl text-[#14142b]">
                Elektron xidmət kateqoriyaları
              </h3>
            </div>
            <div className="flex justify-between">
              {homecard.map((card, index) => (
                <HomeCard
                  name={card.name}
                  desc={card.desc}
                  image={card.image}
                  key={index}
                  
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="most-used"
        style={{ background: "#F6F7F9", height: "574px" }}
      >
         <div className="container-fluid v-container">
        <div>
          <div className="h-20">
            <h3 className="font-semibold text-3xl text-#14142b font-xl ">
              Ən çox istifadə olunan xidmətlər
            </h3>
          </div>
          <div className="flex justify-between">
            {selectedServices.map((selected, index) => (
              <ServicesCard
                key={index}
                image={selected.image}
                name={selected.name}
                desc={selected.desc}
                sing="Qeydiyyatlı"
              />
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};
