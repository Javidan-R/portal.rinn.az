/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import { Service } from "../../types/type";
import CompanyName from "./CompanyName";
import telimat from "../../assets/images/services/telimat.png";
import reqlament from "../../assets/images/services/reqlament.png";
import qanun from "../../assets/images/services/qanun.png";
import ekselaqe from "../../assets/images/services/ekselaqe.svg";
import coins from "../../assets/images/services/coins.svg";
import identity from "../../assets/images/services/identity.svg";
import { useSelector } from "react-redux";
import { MenuItem } from "../../pages/Auth/Account/AuthAccount";
import { useSelectedUser } from "../../redux/userSlice";

interface PagesCardProps {
  services: Service[];
}

export const PagesCard: FC<PagesCardProps> = ({ services }) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const role = useSelector((state: any) => state.auth.role);

  return (
    <>
      <div className="w-full card p-6 bg-white border rounded-xl">
        {services.map((service, index) => (
          <CompanyName
            key={index}
            image={service.image}
            name={service.name}
            title={service.title}
          />
        ))}
        <Dvider />
        <div className="px-5">
          <CompanyData />
        </div>
      </div>
      {isAuthenticated && role === "USER" ? (
        <UserInfo selectedMenuItems={"Şəxsi Məlumatlarım"} />
      ) : (
        <div></div>
      )}
    </>
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
          <div className="flex items-center justify-center gap-4 border-r-2 py-4 ">
            <div className="services-data__icon">
              <img
                src={identity}
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
          <div className=" flex items-center justify-center gap-4 px-4 py-4 w-[200px]">
            {/* The hidden class ensures that this div is hidden on small screens */}
            <div className="services-data__icon">
              <img
                src={coins}
                alt="service"
                className="max-w-full h-auto object-contain"
              />
            </div>
            <div className="leading-5 ">
              <div>Dövlət rüsumu</div>
              <span className="font-bold">Ödənişli</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1    md:col-span-1 lg:col-span-3 md:hidden lg:hidden block">
        <Dvider />
      </div>
      <DataInstructions />
    </div>
  );
}

function DataInstructions() {
  return (
    <div className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-3     ">
      <div className="flex flex-col lg:flex-row  md:flex-col sm:flex-col lg:justify-end sm:justify-start  lg:gap-12 sm:gap-5">
        <div
          style={{ cursor: "pointer", opacity: 1 }}
          className="flex lg:justify-center  sm:justify-start align-center py-4 lg:gap-4 sm:gap-0 lg:border-none sm: border-b-2"
        >
          <a href="" className="flex justify-center align-center gap-4 ">
            <img src={telimat} alt="telimat" />
            <span>Təlimat</span>
          </a>
        </div>
        <div className="opacity-0.5 flex lg:justify-center  sm:justify-start align-center py-4 gap-4 lg:border-none sm: border-b-2">
          <img src={reqlament} alt="reqlament" />
          <span>Reqlament</span>
        </div>
        <div
          style={{ cursor: "pointer", opacity: 1 }}
          className="flex lg:justify-center  sm:justify-start align-center  py-4 gap-4 lg:border-none sm: border-b-2"
        >
          <img src={qanun} alt="qanun" />
          <span>Qanunvericilik</span>
        </div>
        <div
          onClick={() => {}}
          className="opacity-0.5  lg:border-none sm: border-b-2"
        >
          <div className="flex lg:justify-center  sm:justify-start align-center  py-4 gap-4">
            <img src={ekselaqe} alt="contact" />
            <span>Əks Əlaqə</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const UserInfo: FC<{ selectedMenuItems: MenuItem }> = ({
  selectedMenuItems,
}) => {
  const selectedUser = useSelectedUser("Cavidan"); // You may need to determine the username dynamically
  const userDetail = selectedUser?.userdetail[0];

  if (!selectedUser || !userDetail) {
    return <div>İstifadəçi tapılmadı.</div>;
  }

  return (
    <div className="w-full">
      {selectedMenuItems === "Şəxsi Məlumatlarım" && (
        <div className="row">
          <div className=" col-12 w-full  p-4  bg-white border rounded-xl  my-10 shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-full sm:h-[5rem] md:w-1/5  mb-4  flex-justify-center align-center items-center">
                <img
                  src={`../../${userDetail.image}`}
                  alt="User Avatar"
                  className="w-full h-auto  sm:h-[5rem]  object-contain   rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-4">
                <div className="flex flex-col md:flex-row mb-4">
                  <div className="md:w-1/2">
                    <div className="flex flex-col mb-4">
                      <span className="font-base">
                        Soyad, adı və atasının adı:
                      </span>
                      <span className="font-bold">
                        {userDetail.userAllName}
                      </span>
                    </div>
                    <div className="flex flex-col mb-4">
                      <span className="font-base">Sənədi verilmə tarixi:</span>
                      <span className="font-bold">{userDetail.pasDate}</span>
                    </div>
                    <div className="flex flex-col mb-4">
                      <span className="font-base">Doğum yeri:</span>
                      <span className="font-bold">{userDetail.address2}</span>
                    </div>
                    <div className="flex flex-col mb-4">
                      <span className="font-base">Sənədi verən orqan:</span>
                      <span className="font-bold">{userDetail.document}</span>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="flex flex-col mb-4">
                      <span className="font-base">
                        Fərdi identifikasiya nömrəsi:
                      </span>
                      <span className="font-bold">{userDetail.number}</span>
                    </div>
                    <div className="flex flex-col mb-4">
                      <span className="font-base">Doğum tarixi:</span>
                      <span className="font-bold">{userDetail.birthday}</span>
                    </div>
                    <div className="flex flex-col mb-4">
                      <span className="font-base">
                        Sənədi seriya və nömrəsi:
                      </span>
                      <span className="font-bold">{userDetail.password}</span>
                    </div>
                    <div className="flex flex-col mb-4">
                      <span className="font-base">
                        Qeydiyyatda olduğu ünvan:
                      </span>
                      <span className="font-bold">{userDetail.address1}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
