/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginmobile from "../../assets/images/services/loginmobile.svg";
import menublue from "../../assets/images/services/menu-blue.svg";
import telmobile from "../../assets/images/services/telmobile.svg";
import Appeals from "../../pages/Auth/Account/Appeals";
import { MenuItem, Menu } from "../../pages/Auth/Account/AuthAccount";
import UserContact from "../../pages/Auth/Account/UserContact";
import UserInfo from "../../pages/Auth/Account/Userİnfo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

interface MobileFooterProps {
  onClose: () => void;
}

export const MobileFooter: FC<MobileFooterProps> = ({ onClose }) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const role = useSelector((state: any) => state.auth.role);

  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(
    null
  );
  const handleMenuItemClick = (title: MenuItem) => {
    setSelectedMenuItem((prevSelectedMenuItem) =>
      prevSelectedMenuItem === title ? null : title
    );
  };
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    onClose();
  };

  return (
    <div>
      <div
  className={`absolute h-auto inset-0 z-[9999] transition-opacity ${
    isMenuOpen ? "opacity-100" : "opacity-0 "
  }`}
  style={{
    transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
    maxHeight: "100%", 
    overflowY:'auto'
    // Maksimum hündürlüyü dəyişin
  }}
>
        <div
          className="  bg-white  transition-transform transform 1s ease-linear transform-gpu flex flex-col "
        >
          <div className="modal modal--lg bg-white p-4 flex-grow overflow-y-auto overflow-x-hidden   h-100 max-h-full  ">
            <div className="modal__content">
              <div className="modal__header flex justify-between items-center p-4 py-8 ">
                <button onClick={closeMenu}>
                  <img src={menublue} alt="menu" className="w-6 h-6" />
                </button>
                {isAuthenticated && role === "USER" ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={loginmobile}
                      alt="mobile-menu"
                      className="w-6 h-6"
                    />
                    <Link to={"/"} onClick={handleLogout}>
                      Çıxış Et
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <img
                      src={loginmobile}
                      alt="mobile-menu"
                      className="w-6 h-6"
                    />
                    <Link to={"/auth/login"} onClick={handleLinkClick}>
                      Daxil ol
                    </Link>
                  </div>
                )}
              </div>
              <hr />
              {isAuthenticated && role === "USER" && (
                <>
                  <Menu
                    onItemClick={handleMenuItemClick}
                    selectedMenuItem={selectedMenuItem}
                  />
                  {selectedMenuItem === "Şəxsi Məlumatlarım" && (
                    <UserInfo selectedMenuItems={selectedMenuItem} />
                  )}
                  {selectedMenuItem === "Müraciətlərim" && <Appeals />}
                  {selectedMenuItem === "Əks Əlaqə" && <UserContact />}
                </>
              )}
              <div className="p-4">
                <div className="py-3">
                  <Link to={"/information/22"} onClick={handleLinkClick}>
                    <p className="cursor-pointer">Haqqımızda</p>
                  </Link>
                </div>
                <div className="py-3">
                  <Link to={"/information/23"} onClick={handleLinkClick}>
                    <p>Məxfilik siyasəti</p>
                  </Link>
                </div>
                <div className="py-3">
                  <Link to={"/faq"} onClick={handleLinkClick}>
                    <p>FAQ</p>
                  </Link>
                </div>
              </div>
              <hr />
              <div className="my-20 mt-80">
                <Link
                  to="1655"
                  onClick={handleLinkClick}
                  className="flex justify-center gap-4 items-center"
                >
                  <img src={telmobile} alt="call" className="w-6 h-6" />
                  <span className="text-[#304b82] font-extrabold font-semibold text-base">
                    1655 Çağrı Mərkəzi
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
