// pages/Home.tsx
import { useState, useEffect } from "react";
import { GETAPIData } from "../../../HTTP/HTTP";
import { Organisation, Service } from "../../../types/type";
import TransitionSection from "../../../components/Widgets/TransitionSection";
import Lead from "../../../components/Lead";
import ServicesCard from "../../../components/ServicesCard";
import { Categories } from "../Categories";
// import { useSelector } from "react-redux";

export const Home: React.FC = () => {
  // const auth = useSelector(((state: { auth: { isAuthenticated: false; }; })=>state.auth.isAuthenticated))

  const [organisations, setOrganisations] = useState<Organisation[]>([]);

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
  const shuffledServices: Service[] = shuffleArray(allServices).slice(4, 10);
  return (
    <div>
      <div className="bg-[#F6F7F9] ">
        <div className="v-container mx-auto p-4">
          {/* HomeCard Section */}
          <TransitionSection className=" lg:flex lg:justify-center m-auto">
            <Lead />
          </TransitionSection>
          {/* Selected Services Section */}
          <TransitionSection className="">
            <section
              id="pinned-services"
              className="pt-6 md:pt-10 pb-8 mt-10 sm:h-auto md:h-96 lg:h-[22rem] md:h-auto bg-[#F6F7F9]"
            >
              <div className="">
                <div className="h-10">
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
      <div className="bg-[#e5e7ee]  sm:pb-40 lg:pb-2">
        <div className="v-container mx-auto p-4">
          <TransitionSection>
            <Categories />
          </TransitionSection>
        </div>
      </div>
      {/* Most used Services */}
      <div className="bg-[#F6F7F9]  h-auto  sm:pb-72 lg:pb-2">
        <div className="v-container mx-auto p-4">
          <TransitionSection>
            <section
              id="most-used"
              className="sm:h-100 md:h-96 lg:h-[574px] bg-[#F6F7F9] py-16"
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
