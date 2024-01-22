import {FC, useEffect, useState } from "react";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import { Service } from "../../types/type";
import CompanyName from "./CompanyName";

interface PagesCardProps {
  services: Service[];
}

export const PagesCard: FC<PagesCardProps> = ({ services }) => {
  return (
    <div className="w-full card p-6 bg-white border rounded-xl">
      {services.map((service) => (
        <>
          <CompanyName
            key={service.serviceId}
            image={service.image}
            name={service.name}
            title={service.title}
          />
          <Dvider />
          <div className="px-5">
            <CompanyData />
          </div>
        </>
      ))}
    </div>
  );
};

function Dvider() {
  return (
    <div className="w-full block pt-6 pb-4 ">
      <hr className="border-2" />
    </div>
  );
}
const CompanyData = () => {
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const toggleMoreDropdown = () => {
    setMoreDropdownOpen(!isMoreDropdownOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 974); // Adjust the width as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isSmallScreen && (
        <>
          <div
            className="flex justify-between py-4"
            onClick={toggleMoreDropdown}
          >
            <div>
              <h3 className="font-bold text-2xl">Xidmət Haqqında</h3>
            </div>
            <div className="bg-gray rounder-md">
              {isMoreDropdownOpen ? (
                <IoMdArrowRoundUp />
              ) : (
                <IoMdArrowRoundDown />
              )}
            </div>
          </div>
          {isMoreDropdownOpen && <CompanyDataRow />}
        </>
      )}
      {!isSmallScreen && <CompanyDataRow />}
    </>
  );
};
function CompanyDataRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 ">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  ">
        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1   ">
          <div className="flex items-center justify-center gap-4 border-r-2">
            <div className="services-data__icon">
              <img
                src="https://portal.rinn.az/img/identity-card.a828aa59.svg"
                alt="service"
                className="max-w-full h-auto object-contain"
              />
            </div>
            <div className="leading-5">
              <div>Xidmət</div>
              <span className="font-bold">Qeydiyyatsız</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div className=" flex items-center justify-center gap-4">
            {/* The hidden class ensures that this div is hidden on small screens */}
            <div className="services-data__icon">
              <img
                src="https://portal.rinn.az/img/coins.a71428dd.svg"
                alt="service"
                className="max-w-full h-auto object-contain"
              />
            </div>
            <div className="leading-5">
              <div>Dövlət rüsumu</div>
              <span className="font-bold">Ödənişli</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1    md:col-span-1 lg:col-span-3 md:hidden lg:hidden block">
        <Dvider />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-3     ">
        <div className="flex flex-col lg:flex-row  md:flex-col sm:flex-col lg:justify-end sm:justify-start  lg:gap-12 sm:gap-5">
          <div
            style={{ cursor: "pointer", opacity: 1 }}
            className="flex lg:justify-center  sm:justify-start align-center py-4 lg:gap-4 sm:gap-0 lg:border-none sm: border-b-2"
          >
            <a href="" className="flex justify-center align-center gap-4 ">
              <img
                src="https://portal.rinn.az/img/contact.2e002628.svg"
                alt="icon"
              />
              <span>Təlimat</span>
            </a>
          </div>
          <div className="opacity-0.5 flex lg:justify-center  sm:justify-start align-center py-4 gap-4 lg:border-none sm: border-b-2">
            <img
              src="https://portal.rinn.az/img/contact.2e002628.svg"
              alt="icon"
            />
            <span>Reqlament</span>
          </div>
          <div
            style={{ cursor: "pointer", opacity: 1 }}
            className="flex lg:justify-center  sm:justify-start align-center  py-4 gap-4 lg:border-none sm: border-b-2"
          >
            <img
              src="https://portal.rinn.az/img/contact.2e002628.svg"
              alt="icon"
            />
            <span>Qanunvericilik</span>
          </div>
          <div className="opacity-0.5 flex lg:justify-center  sm:justify-start align-center  py-4 gap-4 lg:border-none sm: border-b-2">
            <img
              src="https://portal.rinn.az/img/contact.2e002628.svg"
              alt="contact"
            />
            <span>Əks Əlaqə</span>
          </div>
        </div>
      </div>
    </div>
  );
}
