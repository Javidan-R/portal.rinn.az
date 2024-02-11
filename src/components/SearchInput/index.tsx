import { FC, useState } from 'react';
import SearchAdvanced from './SearchAdvanced';
import { BtnData, Category, Organisation } from '../../types/type';

interface SearchInputProps {
  onSearch: (searchCriteria: BtnData[]) => void;
  organisations: Organisation[];
  categories: Category[];
  data: BtnData[];
}

const SearchInput: FC<SearchInputProps> = ({ onSearch, organisations, categories, data }) => {
  const [searchResults, setSearchResults] = useState<BtnData[]>([]);
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
  
    setSearchResults(filteredServices);
  
    if (onSearch) {
      onSearch(filteredServices);
    }
  };
  
  const handleFilter = () => {
    // Filter logic here
  
    // For example, filter the search results based on some criteria
    // const filteredResults = searchResults.filter(result => result === true);
  
    // Update the search results state with filtered data
    // setSearchResults(filteredResults);
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
                className="ml-[3px] w-[1.6rem]  "
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
              <SearchAdvanced
                organisations={organisations}
                onFilter={handleFilter}
                categories={categories}
              />
            )}
            
            {/* Render search results */}
            {searchResults.map((result,index) => (
              <div key={index}>
                {/* Render each search result as needed */}
                {result.serviceName.map((item,index)=>(
                  <div key={index}>
                    {item.title}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
