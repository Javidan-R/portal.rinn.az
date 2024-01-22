import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLogo from "../../assets/images/MainLogo.svg";
import SearchInput from "../../components/SearchInput";
import SwiperComponent from "../../components/SearchInput/SwipperButtons";
import Footer from "../Footer";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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

  return (
    <header
      className={`header bg-white py-2 shadow-md lg:transition-all lg:duration-1000 lg:ease-in-out ${
        isHomePage
          ? "lg:h-[32rem] header--home-lg"
          : "lg:h-[20rem] header--not-home-lg"
      }`}
    >
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-48 md:w-64 lg:w-auto">
            <a href="/" aria-current="page">
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
            </a>
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
            <a href="tel:1655" className="flex justify-center gap-4">
              <img
                src="https://portal.rinn.az/img/call.859bda17.svg"
                alt="call"
              />
              <b className="text-white font-extrabold font-semibold text-base">
                1655 Çağrı Mərkəzi
              </b>
            </a>
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
        <div
          className="m-auto mt-16"
          style={{
            maxWidth: isHomePage ? "50rem" : "100%",
            transition: isHomePage
              ? "max-width 0.7s ease-in-out, margin 0.7s ease-in-out, transform 0.5s ease-in-out"
              : "max-width 1s ease-in, margin 1s ease-in, transform 1s ease-in",
            filter: isHomePage ? "grayscale(0%)" : "grayscale(100%)", // Grayscale effect
          }}
        >
          <SearchInput onSearch={() => {}} />
          <SwiperComponent />
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white transition-transform transform ease-in-out duration-300">
            <div className="p-4 transition-transform transform ease-in-out duration-300">
              <div className="flex justify-end">
                <div className="cursor-pointer" onClick={toggleMobileMenu}>
                  Close Menu
                </div>
              </div>
              <Footer />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
