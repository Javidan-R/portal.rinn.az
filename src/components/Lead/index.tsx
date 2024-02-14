import React, { useState } from "react";
import { LeadCard } from "./LeadCard";
import ModalContent from "../Widgets/ModalContent";

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
    <>
      <div className=" h-auto m-auto relative lg:relative  lg:bottom-[67px] lg:w-full lg:max-w-[1110px] md:relative md:bottom-20 z-0   md:w-full md:max-w-[720px] sm:relative bottom-[67px]  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 ">
        {leadcard.map((leadItem) => (
          <LeadCard
            key={leadItem.id}
            {...leadItem}
            onClick={
              leadItem.name === "Sürətli Kömək" ? toggleModal : undefined
            }
          />
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="transition-opacity duration-300 ease-in-out"></div>
            <div
              className=" fixed top-0 left-0 right-0 bottom-0 transition-transform duration-300 ease-in-out transform"
              style={{
                transform: isModalOpen ? "translateY(0%)" : "translateY(100%)",
              }}
            >
              <div className="flex items-center justify-center min-h-screen">
                  <ModalContent onClose={toggleModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Lead;
