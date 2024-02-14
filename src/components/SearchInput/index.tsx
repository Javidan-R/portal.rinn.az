import React, { useState } from 'react';
import { BtnData, Category, Organisation } from '../../types/type';
import SearchAdvanced from './SearchAdvanced';

interface SearchInputProps {
  onSearch: (searchCriteria: BtnData[]) => void;
  organisations: Organisation[];
  categories: Category[];
  data: BtnData[];
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, organisations, categories, data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  
  const handleSearch = () => {
    const filteredServices: BtnData[] = data.reduce((acc: BtnData[], btn) => {
      const matchingServices = btn.serviceName?.filter((service) =>
        service.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchingBtnData = matchingServices?.map((service) => ({
        id: service.serviceId,
        serviceId: service.serviceId,
        name: btn.name,
        serviceName: [service],
      })) || [];
      return acc.concat(matchingBtnData);
    }, []);
    if (onSearch) {
      onSearch(filteredServices);
    }
    setIsDropdownOpen(false); // Close dropdown after search
  };

  return (
    <div className="row justify-center">
      <div className="col-12 col-lg-7 header__search-col">
        <div className="margin-home search">
          <div className="search__input">
            <input
              placeholder="Hansı xidməti axtarırsınız?"
              className={`w-full h-[60px] ${!isDropdownOpen ? 'rounded-tl-lg rounded-rt-lg' : 'rounded-lg'} placeholder:text-sm tracking-wide text-#14142b border border-solid border-gray-300 outline-none py-3 px-4 box-border text-sm font-semibold leading-1 transition-all duration-500 ease-in-out`}
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
              <span className="hidden xl:block lg:block md:block text-base">Ətraflı axtarış</span>
            </div>
            {isDropdownOpen && (
              <>
                <SearchAdvanced
                  organisations={organisations}
                  categories={categories}
                />
                              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
