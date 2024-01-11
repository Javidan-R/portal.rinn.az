import React from 'react';

const SearchInput = () => {
  return (
    <div className="row justify-center">
      <div className="col-12 col-lg-7 header__search-col">
        <div className="margin-home search">
          <div className="search__input ">
            <input
              placeholder="Hansı xidməti axtarırsınız?"
              className="v-input"
              type="text"
            />
            <button className="search__button">
              <img
                src="https://portal.rinn.az/img/search.9f2c397b.svg"
                alt="search"
                className='ml-[3px]  w-[1.6rem]'
              />
            </button>
            <div className="search__advanced-icon">
              <img
                src="https://portal.rinn.az/img/filter.6f5fda6c.svg"
                alt="filter"
              />
              <span className="d-none d-md-block">Ətraflı axtarış</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
