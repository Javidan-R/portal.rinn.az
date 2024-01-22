// pages/Home.tsx
import { useState, useEffect } from "react";
import { GETAPIData } from "../../../HTTP/HTTP";
import  {LeadCard}  from "../../../components/LeadCard";
import ServicesCard from "../../../components/ServicesCard";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import { Organisation, Service } from "../../../types/type";

export const Home: React.FC = () => {
  const [organisations, setOrganisations] = useState<Organisation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETAPIData("/db.json");
        setOrganisations(response.data.organisations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const shuffleArray = (array: Service[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const selectedServices: Service[] = organisations
    .flatMap((organisation) => organisation.serviceName)
    .filter((service) => [1, 2, 3].includes(service.serviceId))
    .slice(0, 3);

  const allServices: Service[] = organisations.flatMap(
    (organisation) => organisation.serviceName
  );
  const shuffledServices: Service[] = shuffleArray(allServices).slice(5, 11);

  return (
    <div className="bg-[#F6F7F9]">
      <div className="container mx-auto p-4">
        {/* HomeCard Section */}
        <TransitionSection className="flex justify-center mb-14">
          <div className="lg:absolute lg:bottom-[-30px] lg:w-2/3 xl:w-[1140px] w-full mx-auto lg:h-[100px] gap-7  flex flex-col justify-center items-stretch md:flex-row sm:flex-row ">
            <LeadCard
              key={1}
              name="Elektron Xidmətlər"
              desc="Sorğu, Tətbiq və Ödəniş xidmətləri"
              image="./src/assets/images/services/services.svg"
              to="/services"
              serviceId={0}
              title=""
              link=""
              sing=""
              pay=""
            />
            <LeadCard
              key={2}
              name="Qurumlar"
              desc="Rəsmi qurumların xidmətləri və əlaqə məlumatları"
              image="./src/assets/images/services/Institutions.svg"
              to="/organisations"
              serviceId={0}
              title=""
              link=""
              sing=""
              pay=""
            />
            <LeadCard
              key={3}
              name="Sürətli Kömək"
              desc="Şikayətlərinizi, təkliflərinizi, suallarınızı və istəklərinizi bizə göndərin"
              image="./src/assets/images/services/Question.svg"
              to="#modal"
              serviceId={0}
              title=""
              link=""
              sing=""
              pay=""
            />
          </div>
        </TransitionSection>

        {/* Selected Services Section */}
        <TransitionSection>
          <section
            id="pinned-services"
            className="pt-6 md:pt-10 pb-8  sm:h-auto md:h-96 lg:h-[22rem] bg-[#F6F7F9]"
          >
            <div className="container mx-auto">
              <div className="h-20">
                <h3 className="font-semibold text-3xl text-#14142b">
                  Seçilmiş Xidmətlər
                </h3>
              </div>

              <div className=" flex flex-wrap gap-4 flex-col sm:flex-row md:flex-row justify-between items-stretch align-center">
                {selectedServices.map((service) => (
                  <ServicesCard {...service} key={service.serviceId} />
                ))}
              </div>
            </div>
          </section>
        </TransitionSection>

        {/* Most Used Section */}
        <TransitionSection>
          <section
            id="most-used"
            className="sm:h-auto md:h-96 lg:h-[574px] bg-[#F6F7F9] py-16"
          >
            <div className="container mx-auto">
              <div className="h-20">
                <h3 className="font-semibold text-3xl text-#14142b font-xl">
                  Ən çox istifadə olunan xidmətlər
                </h3>
              </div>
              <div className="w-full flex flex-fill flex-grow-1 flex-wrap gap-4 flex-col sm:flex-row md:flex-row justify-between items-stretch align-center">
                {shuffledServices.map((service) => (
                  <ServicesCard key={service.serviceId} {...service} />
                ))}
              </div>
            </div>
          </section>
        </TransitionSection>
      </div>
    </div>
  );
};

export default Home;
