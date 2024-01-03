import MainLogo from "../../assets/images/MainLogo.svg";
import SearcInput from "../../components/SearchInput";
import SwiperComponent from "../../components/SearchInput/SwipperButtons";
const Header = () => {
  return (
    <div className="header header--home">
      <div className="container-fluid v-container">
        <div className="row align-center mb-60">
          <div className="col-10 col-lg-6">
            <div className="header__logo">
              <a
                href="/az"
                className="router-link-active router-link-exact-active"
                aria-current="page"
              >
                <img alt="logo" src={MainLogo} />
              </a>
            </div>
          </div>
          <div className="col-2 d-lg-none d-block">
            <div className="mobile-menu__button">
              <img
                src="https://portal.rinn.az/img/menu.6f936fc4.svg"
                alt="menu"
              />
            </div>
          </div>
          <div className=" col-md-6 text-right d-lg-block d-none">
            <div className="header__login">
              <a href="tel:1655" className="header__call d-md-inline d-none">
                <img
                  src="https://portal.rinn.az/img/call.859bda17.svg"
                  alt="call"
                />{" "}
                1655 Çağrı Mərkəzi
              </a>
              <button className="btn btn--white py-13 px-15">
                <img
                  src="https://portal.rinn.az/img/asan-login.d86aada9.svg"
                  alt="asan-login"
                />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div style={{
            width:'728px',
            margin:'auto',
        
          }}>
          <SearcInput />
          <SwiperComponent />

          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
