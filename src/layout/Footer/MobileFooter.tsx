import { FC, useState } from "react";
import { Link } from "react-router-dom";
import loginmobile from "../../assets/images/services/loginmobile.svg";
import menublue from "../../assets/images/services/menu-blue.svg";
import telmobile from '../../assets/images/services/telmobile.svg'



interface MobileFooterProps {
  onClose: () => void;
}

export const MobileFooter: FC<MobileFooterProps> = ({ onClose }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    onClose();
  };

  return (
    <div>
      <div className={`fixed inset-0 z-50 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} overflow-xlip` }>
        <div className="bg-white h-full transition-transform transform 1s ease-linear transform-gpu " style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}>
          <div className="modal  modal--lg bg-white h-full p-4 transition-transform transform-gpu" >
            <div className="modal__content">
              <div className="modal__header flex justify-between items-center p-4 py-8">
                <button onClick={closeMenu}>
                  <img
                    src={menublue}
                    alt="menu"
                    className="w-6 h-6"
                  />
                </button>
                <div className="flex items-center gap-4">
                  <img src={loginmobile} alt="mobile-menu" className="w-6 h-6" />
                  <Link to={"/auth/login"} onClick={handleLinkClick}>Daxil ol</Link>
                </div>
              </div>
              <hr />
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
                <Link to="1655" onClick={handleLinkClick} className="flex justify-center gap-4 items-center">
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

