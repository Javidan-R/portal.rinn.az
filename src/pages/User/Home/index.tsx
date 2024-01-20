import { useState, useEffect } from "react";
import { GETAPIData } from "../../../HTTP/HTTP";
import { LeadCard } from "../../../components/LeadCard";
import ServicesCard from "../../../components/ServicesCard";
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

  // Function to shuffle an array randomly
  const shuffleArray = (array: Service[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Get services with serviceId 1, 2, 3 for "Seçilmiş Xidmətlər"
  const selectedServices: Service[] = organisations
    .flatMap((organisation) => organisation.serviceName)
    .filter((service) => [1, 2, 3].includes(service.serviceId))
    .slice(0, 3); // Display only 3 services

  // Get all services for "Ən çox istifadə olunan xidmətlər" and shuffle them
  const allServices: Service[] = organisations.flatMap(
    (organisation) => organisation.serviceName
  );
  const shuffledServices: Service[] = shuffleArray(allServices).slice(5, 11);

  return (
    <div className="bg-[#F6F7F9]">
      <div className="container-fluid v-container">
        {/* HomeCard Section */}
        <div className="flex justify-center lg:absolute">
          <div className="lg:bottom-12 lg:relative lg:left-20 w-full md:w-2/5 lg:w-[1140px] justify-center flex flex-col items-stretch h-[100px] gap-7 md:flex-row">
            <LeadCard
              key={1}
              name="Elektron Xidmətlər"
              desc="Sorğu, Tətbiq və Ödəniş xidmətləri"
              image="./src/assets/images/services/services.svg"
              to="/services"
              serviceId={0}
              title={""}
              link={""}
              sing={""}
              pay={""}            />
            <LeadCard
              key={2}
              name="Qurumlar"
              desc="Rəsmi qurumların xidmətləri və əlaqə məlumatları"
              image="./src/assets/images/services/Institutions.svg"
              to="/organisations"
              serviceId={0}
              title={""}
              link={""}
              sing={""}
              pay={""}            />
            <LeadCard
              key={3}
              name="Sürətli Kömək"
              desc="Şikayətlərinizi, təkliflərinizi, suallarınızı və istəklərinizi bizə göndərin"
              image="./src/assets/images/services/Question.svg"
              to="#modal"
              serviceId={0}
              title={""}
              link={""}
              sing={""}
              pay={""}            />
          </div>
        </div>

        {/* Selected Services Section */}
        <section
          id="pinned-services"
          className="pt-32 md:pt-16 pb-24 sm:h-auto md:h-96 lg:h-[22rem] bg-[#F6F7F9]"
        >
          <div className="container-fluid v-container">
            <div className="h-20">
              <h3 className="font-semibold text-3xl text-#14142b">
                Seçilmiş Xidmətlər
              </h3>
            </div>

            <div className=" min-w-full flex flex-wrap gap-3  flex-col sm:flex-row md:flex-row justify-between items-stretch align-center">
              {selectedServices.map((service) => (
                <ServicesCard {...service} key={service.serviceId} />
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
                {organisations.map((card) => (
                  <LeadCard to={""} image={""} title={"eqer"} sing={""} pay={""} organisations={[]} key={card.id} {...card} customWidth="w-full" customHeight="h-32" />
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Most Used Section */}
        <section
          id="most-used"
          className="sm:h-auto md:h-96 lg:h-[574px] bg-[#F6F7F9] py-16"
        >
          <div className="container-fluid v-container">
            <div>
              <div className="h-20">
                <h3 className="font-semibold text-3xl text-#14142b font-xl">
                  Ən çox istifadə olunan xidmətlər
                </h3>
              </div>
              <div className=" w-full flex flex-fill flex-grow-1 flex-wrap gap-3  flex-col sm:flex-row md:flex-row justify-between items-stretch align-center">
                {shuffledServices.map((service) => (
                  <ServicesCard  key={service.serviceId} {...service} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
