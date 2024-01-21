import React from "react";
import { PagesCard } from "../../../components/PagesCard";
import { ImeiTariffService } from "./ImeiTariffService";
import ServiceHeading from "../../../components/ServiceHeading";
import imeiyoxlama from '../../../assets/images/services/Imeiyoxlama.png'
const breadcrumbItems = [
  { link: '/', name: 'Home' },
  { link: '/services', name: 'Services' },
  { link: '/imei-check-service', name: 'IMEI Tariff Service' },
];
const imeitarif = [
  {
    "serviceId": 3,
    "image": imeiyoxlama,
    "title": "IMEI yoxlama",
    "name": "“AzInTelecom” MMC",
    "link": "imei-check-service",
    "sing": "Qeydiyyatsız",
    "pay": "Ödənişsiz"
  },
]
export const ImeiTariff: React.FC = () => (
  <div className="bg-gray-100">
    <div className="container-fluid v-container">
    <ServiceHeading mainLink={"services"} backButtonProps={{
          customClassName: "flex flex-row flex-nowrap justify-center gap-2 items-center align-center",
          customStyle: undefined
        }} breadcrumbItems={breadcrumbItems}/>
        <section>
          <PagesCard services={imeitarif}/>
        </section>
      <section className="bg-white rounded-xl mt-6">
        <ImeiTariffService />
      </section>
    </div>
  </div>
);
