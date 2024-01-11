import { LeadCard } from "../../../components/LeadCard";
import ServicesCard from "../../../components/ServicesCard";

// const homecard = [
//   {
//     id: 1,
//     name: "Elektron Xidmətlər",
//     desc: "Sorğu, Tətbiq və Ödəniş xidmətləri",
//     image: "./src/assets/images/services/services.svg",
//     link:"/services"
//   },
//   {
//     id: 2,
//     name: "Qurumlar",
//     desc: "Rəsmi qurumların xidmətləri və əlaqə məlumatları",
//     image: "./src/assets/images/services/Institutions.svg",
//     link:"/organisations"

//   },
//   {
//     id: 3,
//     name: "Sürətli Kömək",
//     desc: "Şikayətlərinizi, təkliflərinizi, suallarınızı və istəklərinizi bizə göndərin ",
//     image: "./src/assets/images/services/Question.svg",
    
//   },
// ];

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
    <div className="bg-[#F6F7F9]">
      <div className="container-fluid v-container">
        {/* HomeCard Section */}
        <div className="flex justify-center lg:absolute">
          <div className="lg:bottom-12 lg:relative lg:left-20 w-full md:w-2/5 lg:w-[1140px] justify-center flex flex-col items-stretch h-[100px] gap-7 md:flex-row">
          <LeadCard key={1} name="Elektron Xidmətlər" desc="Sorğu, Tətbiq və Ödəniş xidmətləri" image="./src/assets/images/services/services.svg" to="/services" />
<LeadCard key={2} name="Qurumlar" desc="Rəsmi qurumların xidmətləri və əlaqə məlumatları" image="./src/assets/images/services/Institutions.svg" to="/organisations" />
<LeadCard key={3} name="Sürətli Kömək" desc="Şikayətlərinizi, təkliflərinizi, suallarınızı və istəklərinizi bizə göndərin" image="./src/assets/images/services/Question.svg" to="#modal" />

          </div>
        </div>

        {/* Selected Services Section */}
        <section id="pinned-services" className="pt-32 md:pt-16 pb-24 sm:h-auto md:h-96 lg:h-[22rem] bg-[#F6F7F9]">
          <div className="container-fluid v-container">
            <div className="h-20">
              <h3 className="font-semibold text-3xl text-#14142b">Seçilmiş Xidmətlər</h3>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-row justify-between items-stretch">
              {selectedServices.map((service) => (
                <ServicesCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        {/* <section id="categories" className="sm:h-auto md:h-96 lg:h-[489px] bg-[#e5e7ee] py-16">
          <div className="container-fluid v-container">
            <div>
              <div className="h-20">
                <h3 className="font-semibold text-3xl text-[#14142b]">Elektron xidmət kateqoriyaları</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {homecard.map((card) => (
                  <LeadCard key={card.id} {...card} customWidth="w-full" customHeight="h-32" />
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Most Used Section */}
        <section id="most-used" className="sm:h-auto md:h-96 lg:h-[574px] bg-[#F6F7F9] py-16">
          <div className="container-fluid v-container">
            <div>
              <div className="h-20">
                <h3 className="font-semibold text-3xl text-#14142b font-xl">Ən çox istifadə olunan xidmətlər</h3>
              </div>
              <div className="flex flex-wrap justify-between">
                {selectedServices.map((service) => (
                  <ServicesCard key={service.id} {...service} sing="Qeydiyyatlı" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
