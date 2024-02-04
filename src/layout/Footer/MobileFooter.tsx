import { FC } from "react";
import loginmobile from "../../assets/images/services/loginmobile.svg";
import telmobile from "../../assets/images/services/telmobile.svg";
import { Link } from "react-router-dom";
interface MobileFooterPorp {
  onClose: () => void;
}
export const MobileFooter:FC<MobileFooterPorp> = ({  onClose }) => {
  return (
    <div>
        <div className="modal ">
        <div className="modal--lg ">
          <div className="modal__content">
            <div className="modal__header flex justify-between items-center">
              <div className="modal__title"></div>
              <button type="button" className="modal__close bg-none border-none cursor-pointer">
                <img src="https://portal.rinn.az/img/modal-close.efba9567.svg" alt="" />
              </button> <div className="lg:hidden overflow-hidden fixed inset-0 z-50 bg-white transition-transform transform ease-in-out duration-300">
            <div className="px-8 py-4 transition-transform transform ease-in-out duration-300">
              <div className="flex justify-between align-center items-center mt-4 mb-6">
                <div className="cursor-pointer" onClick={onClose}>
                  <img
                    src="https://portal.rinn.az/img/menu.6f936fc4.svg"
                    alt="menu"
                    style={{
                      maxWidth: "100%",
                      verticalAlign: "middle",
                      backgroundColor: "blue ",
                      padding: "10px",
                      border: "1px solid blue",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="cursor-pointer flex justify-center align-center gap-4">
                  <div>
                    <img src={loginmobile} alt="mobile-menu" />
                  </div>
                  <div>

                    <Link to={'/auth/login'}><p>Daxil ol</p></Link>
                  </div>
                </div>
              </div>
              <hr />
              <div className="py-4">
                <div className="py-2">
                  <Link to={"/information/22"} >
                    <p className="cursor-pointer">Haqqımızda</p>
                  </Link>
                </div>
                <div className="py-2">
                  <Link to={"/information/23"}>
                    <p>Məxfilik siyasəti</p>
                  </Link>
                </div>
                <div className="py-2">
                  <Link to={"/faq"}>
                    <p>FAQ</p>
                  </Link>
                </div>
              </div>
              <hr />
              <div className="my-20 mt-80">
                <Link to={"1655"} className="flex justify-center gap-4 ">
                  <img
                    src={telmobile}
                    alt="call"
                  />
                  <b className="text-[#304b82;] font-extrabold font-semibold text-base">
                    1655 Çağrı Mərkəzi
                  </b>
                </Link>
              </div>
            </div>
          </div>
            </div>
            <div className="modal__body flex justify-center items-center">
              <div className="container">
                <div className="grid grid-cols-12">
                  <div className="col-span-12">
                    <div className="modal__content">
                      <div className="modal-text"></div>
                      <div className="modal-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal__footer">
              <div className="modal-button flex justify-center">
                <button className="btn bg-white">Bağla</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
