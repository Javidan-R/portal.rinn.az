import React from "react";
import { PagesCard } from "../../../components/PagesCard";
import { ImeiTariffService } from "./ImeiTariffService";
import ServiceHeading from "../../../components/ServiceHeading";
import mobiltarif from '../../../assets/images/services/Mobiltarifler.png'
import TransitionSection from "../../../components/Widgets/TransitionSection";
const breadcrumbItems = [
  { link: '/', name: 'Əsas Səhifə' },
  { link: '/services', name: 'Xidmətlər' },
  { link: '/imei-tariff-service', name: 'Mobil cihazların qeydiyyat tarifləri' },
];
const imeitarif = [
  {
    "serviceId": 2,
    "image": mobiltarif,
    "title": "Mobil cihazların qeydiyyat tarifləri",
    "name": "“AzInTelecom” MMC",
    "link": "imei-tariff-service",
    "sing": "Qeydiyyatsız",
    "pay": "Ödənişsiz"
  }
]
export const ImeiTariff: React.FC = () => (
  <div className="bg-gray-100">
    <div className="container-fluid v-container">
    <ServiceHeading mainLink={"/services"} backButtonProps={{
          customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
          customStyle: undefined
        }} breadcrumbItems={breadcrumbItems}/>
        <TransitionSection>
        <section>
          <PagesCard services={imeitarif}/>
        </section>
      <section className="bg-white rounded-xl mt-6">
        <ImeiTariffService />
      </section>
        </TransitionSection>
      
    </div>
  </div>
);
