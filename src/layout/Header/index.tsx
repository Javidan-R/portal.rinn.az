import React from 'react';
import MainLogo from '../../assets/images/MainLogo.svg';

const Header = () => {
  return (
    <div className="header header--home">
      <div className="container-fluid v-container">
        <div className="row align-center mb-60">
          <div className="col-10 col-lg-6">
            <div className="header__logo">
              <a href="/az" className="router-link-active router-link-exact-active"  aria-current="page">
                <img alt="logo" src={MainLogo}  />
              </a>
            </div>
          </div>
          <div className="col-2 d-lg-none d-block">
            <div className="mobile-menu__button">
              <img src="https://portal.rinn.az/img/menu.6f936fc4.svg" alt="menu" />
            </div>
          </div>
          <div className="col-12 col-md-6 text-right d-lg-block d-none">
            <div className="header__login">
              <a href="tel:1655" className="header__call d-md-inline d-none">
                <img src="https://portal.rinn.az/img/call.859bda17.svg" alt="call" /> 1655 Çağrı Mərkəzi
              </a>
              <button className="btn btn--white py-13 px-15">
                <img src="https://portal.rinn.az/img/asan-login.d86aada9.svg" alt="asan-login" />
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-center">
          <div className="col-12 col-lg-7 header__search-col">
            <div className="margin-home search">
              <div className="search__input mb-20">
                <input placeholder="Hansı xidməti axtarırsınız?" className="v-input" type="text" />
                <button className="search__button">
                  <img src="/img/search.9f2c397b.svg" alt="search" />
                </button>
                <div className="search__advanced-icon">
                  <img src="/img/filter.6f5fda6c.svg" alt="filter" />
                  <span className="d-none d-md-block">Ətraflı axtarış</span>
                </div>
              </div>
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

