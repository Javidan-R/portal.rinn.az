import React from "react";
import { PagesCard } from "../../../components/PagesCard";
import { ImeiTariffService } from "./ImeiTariffService";
import ServiceHeading from "../../../components/ServiceHeading";
const breadcrumbItems = [
  { link: '/', name: 'Home' },
  { link: '/services', name: 'Services' },
  { link: '/imei-check-service', name: 'IMEI Tariff Service' },
];
export const ImeiTariff: React.FC = () => (
  <div className="bg-gray-100">
    <div className="container-fluid v-container">
    <ServiceHeading mainLink={"services"} backButtonProps={{
          customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
          customStyle: undefined
        }} breadcrumbItems={breadcrumbItems}/>
        <section>
          <PagesCard/>
        </section>
      <section className="bg-white rounded-xl mt-6">
        <ImeiTariffService />
      </section>
    </div>
  </div>
);
