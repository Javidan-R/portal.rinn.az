import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainLogo from "../../assets/images/MainLogo.svg";
import SearchInput from "../../components/SearchInput";
import SwiperComponent from "../../components/SearchInput/SwipperButtons";
import { MobileFooter } from "../Footer/MobileFooter";
import { GETAPIData } from "../../HTTP/HTTP";
import { BtnData, Category, Organisation } from "../../types/type";
import UserButton from "../../components/atoms/Button/UserButton";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {

  const [btnData , SetBtnData]  = useState<BtnData[]>([])
  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  const [categories,setCategories] = useState<Category[]>([])
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const location = useLocation();

  
  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location.pathname]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETAPIData("organisations");
        setOrganisations(response.data);
      } catch (error) {
        console.error("Error fetching data organisations is header:", error);
      }
    };

    fetchData();
    const fetchCategories = async () => {
      try {
        const response = await GETAPIData("categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories is Header:", error);
      }
    };
  
    fetchCategories();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETAPIData("buttons");
        SetBtnData(response.data);
      } catch (error) {
        console.error("Error fetching data buttons is Header:", error);
      }
    };

    fetchData();
  }, []);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header
      className={`header bg-white py-2 shadow-md sm:h-30rem lg:transition-all lg:duration-1000 lg:ease-in-out ${
        isHomePage
          ? "lg:h-[32rem] sm:h-[23rem] header--home-lg"
          : "lg:h-[20rem] sm:h-30rem header--not-home-lg"
      }`}
    >
      <div className="v-container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-48 md:w-64 lg:w-auto">
            <Link to="/" aria-current="page">
              <img
                alt="logo"
                src={MainLogo}
                className="object-contain"
                style={{
                  width: "18.75rem",
                  height: "4.375rem",
                  verticalAlign: "middle",
                }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div
            className={`lg:hidden transition-transform transform ease-in-out duration-300 ${
              isMobileMenuOpen ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div
              className="mobile-menu__button cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <img
                src="https://portal.rinn.az/img/menu.6f936fc4.svg"
                alt="menu"
                style={{
                  maxWidth: "100%",
                  verticalAlign: "middle",
                }}
              />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-14">
            <Link to="tel:1655" className="flex justify-center gap-4">
              <img
                src="https://portal.rinn.az/img/call.859bda17.svg"
                alt="call"
              />
              <b className="text-white font-extrabold font-semibold text-base">
                1655 Çağrı Mərkəzi
              </b>
            </Link>
            <UserButton/>
           
          </div>
        </div>
        
        <div className="relative flex items-center justify-center lg:top-10 mt-6 v-container">
          <div
            className={` lg:absolute  z-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 `}
            style={{
              maxWidth: isHomePage ? "45.5rem" : "100%", 
              width: "100%", 
              transition: isHomePage
                ? "max-width 0.5s ease-in-out, margin 0.7s ease-in-out, transform 0.5s ease-in-out"
                : "max-width 1s ease-in, margin 1s ease-in, transform 1s ease-in",
              filter: isHomePage ? "grayscale(0%)" : "grayscale(100%)",
              zIndex:'1',
            }}
          >
            <SearchInput onSearch={()=>{}} organisations={organisations} categories={categories} data={btnData} />
            <SwiperComponent data={btnData} />
          </div>
        </div>

        {isMobileMenuOpen && <MobileFooter onClose={toggleMobileMenu} />}
      </div>
    </header>
  );
};

export default Header;
