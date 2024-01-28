import  { FC, useState } from 'react';
import SearchAdvanced from './SearchAdvanced';
import { Organisation } from '../../types/type';

interface SearchInputProps {
  onSearch: (searchCriteria: string) => void;
  organisations: Organisation[];
}

const SearchInput: FC<SearchInputProps> = ({ onSearch, organisations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredOrganisations, setFilteredOrganisations] = useState<Organisation[]>(organisations);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleSearch = () => {
    const filteredOrganisations = organisations.filter((org) =>
      org.serviceName.some((service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  
    // Now you can use the filteredOrganisations as needed
    setFilteredOrganisations(filteredOrganisations);
  
    if (onSearch) {
      onSearch(searchTerm);
    }
  };
  const handleFilter = (filteredOrganisations: Organisation[]) => {
    setFilteredOrganisations(filteredOrganisations);
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
          <SearchAdvanced organisations={organisations} onFilter={handleFilter} />
             </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
