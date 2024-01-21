import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../../assets/images/MainLogo.svg';

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer bg-[#14142b] text-white  lg:block md:hidden sm:hidden ">
      <div className="container-fluid v-container ">
        <div className="grid grid-cols-12 pt-12 ">
          <div className="col-span-9">
            <div className="footer__menu grid grid-cols-12">
              <div className="col-span-6">
                <div className="footer-menu-item">
                  <div className=" font-medium text-xl mb-1">Portal</div>
                  <ul className=" list-none p-0 m-0">
                    <li className="">
                      <Link to="/information/23" className="footer-menu-item__link cursor-pointer font-medium text-lg text-white opacity-50 flex items-center">
                        Haqqımızda
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/information/22" className="footer-menu-item__link cursor-pointer font-medium text-lg text-white opacity-50 flex items-center">
                        Məxfilik siyasəti
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/faq" className="footer-menu-item__link cursor-pointer font-medium text-lg text-white opacity-50 flex items-center">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-6" style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                <div className="footer-menu-item">
                  <div className="font-meduim text-xl  mb-1">Sürətli keçid</div>
                  <ul className="footer-menu-item__container list-none p-0 m-0">
                    <li className="footer-menu-item__content">
                      <div>
                        <Link to="/selected-services" className="footer-menu-item__link cursor-pointer font-medium text-lg text-white opacity-50 flex items-center">
                          Seçilmiş xidmətlər
                        </Link>
                      </div>
                    </li>
                    <li className="footer-menu-item__content">
                      <div>
                        <Link to="/categories" className="footer-menu-item__link cursor-pointer font-medium text-lg text-white opacity-50 flex items-center">
                          Kateqoriyalar
                        </Link>
                      </div>
                    </li>
                    <li className="footer-menu-item__content">
                      <div>
                        <Link to="/most-used" className="footer-menu-item__link cursor-pointer font-medium text-lg text-white opacity-50 flex items-center">
                          Ən çox istifadə olunan
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 hidden lg:flex justify-end">
            <div className='mr-2'>
              <div className="font-medium text-xl  mb-1">Əlaqə</div>
              <div className="mb-4 opacity-50">
                <Link to="tel:1655" className="footer__call flex justify-start items-center gap-4 cursor-pointer font-bold text-base leading-5">
                  <img src="https://portal.rinn.az/img/call.859bda17.svg" alt="call" />
                  <span className='font-extrabold text-base leading-5'>1655 Çağrı Mərkəzi</span>
                </Link>
              </div>
              <div className="mb-12 opacity-50">
                <Link to="mailto:info@azintelecom.az" className="footer__call flex justify-center gap-4 cursor-pointer font-bold text-base leading-5">
                  <img src="https://portal.rinn.az/img/email.ba64fe19.svg" alt="call" />
                  <span className="email font-extrabold text-base leading-5">mincom@mincom.gov.az</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 pb-6">
          <div className="col-span-12">
            <hr className="divider h-[1px] bg-opacity-15 bg-gray-200 w-full border-none mt-3 mb-2" />
            <div className="footer__logo flex justify-between items-center py-4">
              <img
                src={MainLogo}
                alt="logo-footer"
                className="max-w-full h-14 object-contain"
                style={{
                  width: '335px',
                  height: '58px'
                }}
              />
              <div className="footer__copyright w-70 h-9 font-medium text-lg text-white opacity-70 text-right">
                © {currentDate}. Bütün hüquqlar qorunur.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal hidden">
        <div className="modal--lg hidden">
          <div className="modal__content">
            <div className="modal__header flex justify-between items-center">
              <div className="modal__title"></div>
              <button type="button" className="modal__close bg-none border-none cursor-pointer">
                <img src="/img/modal-close.efba9567.svg" alt="" />
              </button>
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
  );
};

export default Footer;
