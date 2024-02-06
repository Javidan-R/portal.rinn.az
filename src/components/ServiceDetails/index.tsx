import React from "react";
import { BtnData,  } from "../../types/type";
import ServiceHeading from "../ServiceHeading";
import TransitionSection from "../Widgets/TransitionSection";
import { ServiceDetail } from "./ServiceDetail";

interface ServiceDetailsProps {
  service: BtnData[];
}
// ResultCount component
const ResultCount: React.FC<{ count: number }> = ({ count }) => (
  <div className="mt-4">
    <p className="text-base font-bold"><span className="text-indigo-500">{count}</span> nəticə tapıldı</p>
  </div>
);

// ServiceDetails component
const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  const breadcrumbItems = [
    { link: "/", name: "Əsas səhifə" },
    { link: "/services", name: "Ətraflı Axtarış" },
  ];

  const resultCount = service ? service.length : 0;

  return (
    <div className="bg-[#f6f7f9] ">
      <div className="container-fluid v-container">
        <ServiceHeading
          mainLink="/services"
          backButtonProps={{
            customClassName: "flex items-center",
          }}
          breadcrumbItems={breadcrumbItems}
        />
        <TransitionSection>
          <section className="container mx-auto p-6 bg-white rounded-lg shadow-md mt-6 mb-10">
            <div>
              <div>
                <ResultCount count={resultCount} />
                <hr className="my-4 border-t border-gray-300" />
              </div>
              {service.map((item) => (
                <ServiceDetail
                service={item.serviceName}              />
              ))}
            </div>
          </section>
        </TransitionSection>
      </div>
    </div>
  );
};

export default ServiceDetails;
