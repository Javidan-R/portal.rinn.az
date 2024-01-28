// pages/Home.tsx
import { useState, useEffect } from "react";
import { GETAPIData } from "../../../HTTP/HTTP";
import { LeadCard } from "../../../components/LeadCard";
import ServicesCard from "../../../components/ServicesCard";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import { Organisation, Service } from "../../../types/type";
import HomeModal from "../../../components/Widgets/HomeModal";

export const Home: React.FC = () => {
  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    GETAPIData("organisations").then((res) => {
      setOrganisations(res.data);
    });
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
    <div>
      <div className="bg-[#F6F7F9] ">
        <div className="v-container mx-auto p-4">
          {/* HomeCard Section */}
          <TransitionSection className=" lg:flex lg:justify-center m-auto">
            {/* This Componen is make to effect right to left*/}
            <div className="m-auto relative lg:absolute  lg:bottom-[-35px] lg:w-full lg:max-w-[1100px] h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-7 ">
              {/* First Cards Section */}
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
                onClick={toggleModal}
                serviceId={0}
                title=""
                link=""
                sing=""
                pay=""
              />
            </div>
            {/* Modal toggle area */}
            {isModalOpen && <HomeModal onClose={toggleModal} />}
          </TransitionSection>

          {/* Selected Services Section */}
          <TransitionSection className="">
            <section
              id="pinned-services"
              className="pt-6 md:pt-10 pb-8 mt-10 sm:h-auto md:h-96 lg:h-[22rem] md:h-auto bg-[#F6F7F9]"
            >
              <div className="">
                <div className="h-20">
                  <h3 className="font-semibold text-3xl text-#14142b">
                    Seçilmiş Xidmətlər
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {selectedServices.map((service) => (
                    <ServicesCard {...service} key={service.serviceId} />
                  ))}
                </div>
              </div>
            </section>
          </TransitionSection>
        </div>
      </div>
      {/* Categories Area */}
      <div className="bg-[#e5e7ee] ">
        <div className="v-container mx-auto p-4">
          <TransitionSection>
            <section
              id="categories"
              className="pt-6 md:pt-10 pb-8  sm:h-auto md:h-96 lg:h-[27rem] "
            >
              <div className="container mx-auto">
                <div className="h-20">
                  <h3 className="font-semibold text-3xl text-#14142b">
                    Elektron xidmət kateqoriyaları
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {shuffledServices.map((service) => (
                  <ServicesCard key={service.serviceId} {...service} />
                ))}
              </div>
            </section>
          </TransitionSection>
        </div>
      </div>
      {/* Most used Services */}
      <div className="bg-[#F6F7F9] ">
        <div className="v-container mx-auto p-4">
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
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {shuffledServices.map((service) => (
                    <ServicesCard key={service.serviceId} {...service} />
                  ))}
                </div>
              </div>
            </section>
          </TransitionSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
