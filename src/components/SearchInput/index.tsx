import React, { FC, useState } from 'react';
import SearchAdvanced from './SearchAdvanced';

interface SearchInputProps {
  onSearch: (searchCriteria: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleAdvancedSearch = () => {
    // Perform advanced search
  };

  return (
    <div className="row justify-center">
      <div className="col-12 col-lg-7 header__search-col">
        <div className="margin-home search">
          <div className="search__input">
            <input
              placeholder="Hansı xidməti axtarırsınız?"
              className={`w-full  ${!isDropdownOpen ? " rounded-tl-lg rounded-rt-lg": "rounded-lg"} font-medium tracking-wide text-#14142b border border-solid border-gray-300 outline-none py-3 px-5 box-border text-xm leading-4 transition-all duration-500 ease-in-out`}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search__button" onClick={handleSearch}>
              <img
                src="https://portal.rinn.az/img/search.9f2c397b.svg"
                alt="search"
                className="ml-[3px] w-[1.6rem]"
              />
            </button>
            <div className="search__advanced-icon" onClick={toggleDropdown}>
                <img
                  src="https://portal.rinn.az/img/filter.6f5fda6c.svg"
                  alt="filter"
                />
                <span className="d-none d-md-block">Ətraflı axtarış</span>
              </div>

         
            {isDropdownOpen && (
              <>
            
                <SearchAdvanced onSearch={handleAdvancedSearch} />
                </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
