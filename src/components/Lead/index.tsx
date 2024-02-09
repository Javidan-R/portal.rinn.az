import React, { useState } from "react";
import { LeadCard } from "./LeadCard";
import HomeModal from "../Widgets/HomeModal";

interface LeadItem {
  id: number;
  name: string;
  desc: string;
  image: string;
  to: string;
}

const leadcard: LeadItem[] = [
  {
    id: 1,
    name: "Elektron Xidmətlər",
    desc: "Sorğu, Tətbiq və Ödəniş xidmətləri",
    image: "./src/assets/images/services/services.svg",
    to: "services",
  },
  {
    id: 2,
    name: "Qurumlar",
    desc: "Rəsmi qurumların xidmətləri və əlaqə məlumatları",
    image: "./src/assets/images/services/Institutions.svg",
    to: "organisations",
  },
  {
    id: 3,
    name: "Sürətli Kömək",
    desc: "Şikayətlərinizi, təkliflərinizi, suallarınızı və istəklərinizi bizə göndərin",
    image: "./src/assets/images/services/Question.svg",
    to: "#modal",
  },
];

const Lead: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className=" h-auto m-auto relative lg:relative  lg:bottom-[67px] lg:w-full lg:max-w-[1110px] md:relative md:bottom-20 z-0   md:w-full md:max-w-[720px] sm:relative bottom-[67px]  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 ">
      {leadcard.map((leadItem) => (
        <LeadCard key={leadItem.id} {...leadItem} onClick={leadItem.name === "Sürətli Kömək" ? toggleModal : undefined} />
      ))}
      {isModalOpen && <HomeModal onClose={toggleModal} />}
    
    </div>
  );
};

export default Lead;
