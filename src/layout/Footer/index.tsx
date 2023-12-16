import MainLogo from '../../assets/images/MainLogo.svg';

const Footer = () => {
  return (
    <div className="footer d-lg-block d-none">
      <div className="container-fluid v-container">
        <div className="row">
          <div className="col-lg-9">
            <div className="footer__menu">
              <div className="row">
                <div className="col-lg-6">
                  <div className="footer-menu-item mb-40">
                    <div className="footer-menu-item__title mb-8">Portal</div>
                    <ul className="footer-menu-item__container">
                      <li className="footer-menu-item__content mb-8">
                        <a
                          href="/az/information/23"
                          className="footer-menu-item__link"
                        >
                          Haqqımızda
                        </a>
                      </li>
                      <li className="footer-menu-item__content mb-8">
                        <a
                          href="/az/information/22"
                          className="footer-menu-item__link"
                        >
                          Məxfilik siyasəti
                        </a>
                      </li>
                      <li className="footer-menu-item__content mb-8">
                        <a href="/az/faq" className="footer-menu-item__link">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="footer-menu-item mb-40">
                    <div className="footer-menu-item__title mb-8">
                      Sürətli keçid
                    </div>
                    <ul className="footer-menu-item__container">
                      <li className="footer-menu-item__content mb-8">
                        <div>
                          <a className="footer-menu-item__link a">
                            Seçilmiş xidmətlər
                          </a>
                        </div>
                      </li>
                      <li className="footer-menu-item__content mb-8">
                        <div>
                          <a className="footer-menu-item__link a">
                            Kateqoriyalar
                          </a>
                        </div>
                      </li>
                      <li className="footer-menu-item__content mb-8">
                        <div>
                          <a className="footer-menu-item__link a">
                            Ən çox istifadə olunan
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-block d-lg-flex justify-end">
            <div>
              <div className="footer-menu-item__title mb-8"> Əlaqə </div>
              <div className="mb-12 mr-40">
                <a
                  href="tel:1655"
                  className="footer__call footer-menu-item__link"
                >
                  <img src="https://portal.rinn.az/img/call.859bda17.svg" alt="call" />
                  <span>1655 Çağrı Mərkəzi</span>
                </a>
              </div>
              <div className="mb-12">
                <span className="footer__call footer-menu-item__link">
                  <img src="https://portal.rinn.az/img/email.ba64fe19.svg" alt="call" />
                  <a className="email" href="mailto:info@azintelecom.az">
                    mincom@mincom.gov.az
                  </a>
                </span>
              </div>
            </div>
            <div></div>
          </div>
        
        </div>
        <div className="row">
         <div className="col-12">
            <hr className="divider" />
            <div className="footer__logo py-14 d-block d-md-flex justify-between">
              <img src={MainLogo} alt="logo-footer" />
              <div className="mt-20 footer__copyright">
                
                © 2023. Bütün hüquqlar qorunur.
              </div>
            </div>
          </div>
         </div>
      </div>
      <div className="modal" style={{ display: "none" }}>
        <div className="modal--lg modal__dialog" style={{ display: "none" }}>
          <div className="modal__content">
            <div className="modal__header">
              <div className="modal__title"></div>
              <button type="button" className="modal__close">
                <img src="/img/modal-close.efba9567.svg" alt="" />
              </button>
            </div>
            <div className="modal__body d-flex justify-center align-center">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="modal__content">
                      <div className="modal-text"></div>
                      <div className="modal-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal__footer">
              <div className="modal-button d-flex justify-center">
                <button className="btn btn----white">Bağla</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
