import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainLogo from "../../assets/images/MainLogo.svg";
import SearchInput from "../../components/SearchInput";
import SwiperComponent from "../../components/SearchInput/SwipperButtons";
import { MobileFooter } from "../Footer/MobileFooter";
import { GETAPIData } from "../../HTTP/HTTP";
import { Category, Organisation } from "../../types/type";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  const [categories,setCategories] = useState<Category[]>([])

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isHeaderExpanded, setHeaderExpanded] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHeaderSize = () => {
    setHeaderExpanded(!isHeaderExpanded);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETAPIData("organisations");
        setOrganisations(response.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const fetchCategories = async () => {
      try {
        const response = await GETAPIData("categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    fetchCategories();
  }, []);

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
            <button
              className="flex item-center justify-center align-center py-[13px] px-[14px] text-[0.875rem] text-#304b82 cursor-pointer font-semibold bg-white border border-solid border-#304b82 rounded-md"
              onClick={toggleHeaderSize}
            >
              <img
                src="https://portal.rinn.az/img/asan-login.d86aada9.svg"
                alt="asan-login"
              />
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center lg:top-10 mt-6 v-container">
          <div
            className={` lg:absolute lg:z-50 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 `}
            style={{
              maxWidth: isHomePage ? "46rem" : "100%", // Only for large screens
              width: "100%", // Full width for small screens
              transition: isHomePage
                ? "max-width 0.5s ease-in-out, margin 0.7s ease-in-out, transform 0.5s ease-in-out"
                : "max-width 1s ease-in, margin 1s ease-in, transform 1s ease-in",
              filter: isHomePage ? "grayscale(0%)" : "grayscale(100%)",
            }}
          >
            <SearchInput onSearch={() => { } } organisations={organisations} categories={categories} />
            <SwiperComponent />
          </div>
        </div>

        {isMobileMenuOpen && <MobileFooter onClose={toggleMobileMenu} />}
      </div>
    </header>
  );
};

export default Header;
