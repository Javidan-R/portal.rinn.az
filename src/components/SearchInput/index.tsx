import { FC, useState } from 'react';
import SearchAdvanced from './SearchAdvanced';
import { BtnData, Category, Organisation } from '../../types/type';

// import { setSelectedService } from "../../redux/serviceBtnSlice";

interface SearchInputProps {
  onSearch: (searchCriteria: BtnData[]) => void;
  organisations: Organisation[];
  categories: Category[];
  data: BtnData[];
}

const SearchInput: FC<SearchInputProps> = ({ onSearch, organisations, categories, data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleSearch = (searchResults: BtnData[]) => {
    const filteredServices: BtnData[] = data.reduce((acc: BtnData[], btn) => {
      const matchingServices = btn.serviceName?.filter((service) =>
        service.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      // Convert each Service to BtnData
      const matchingBtnData = matchingServices?.map((service) => ({
        id: service.serviceId, // Assuming serviceId is a suitable id
        serviceId: service.serviceId,
        name: btn.name, // Using btn name, you might need to adjust this based on your structure
        serviceName: [service], // Put the service into an array
      })) || [];
  
      return acc.concat(matchingBtnData);
    }, []);
  
    if (onSearch) {
      onSearch(filteredServices);
    }
    console.log('Search results:', searchResults);
    // if (services && services.length > 0) {
    //   onServiceClick(services); // Pass the entire array to onServiceClick
    //   dispatch(setSelectedService(services));
    //   console.log(services);      
    //         navigate("/search-result");
    // }
  };
  


  const handleFilter = () => {
    // Handle filtering logic if needed
  };

  return (
    <div className="row justify-center">
      <div className="col-12 col-lg-7 header__search-col">
        <div className="margin-home search">
          <div className="search__input">
            <input
              placeholder="Hansı xidməti axtarırsınız?"
              className={`w-full h-[60px] ${!isDropdownOpen ? 'rounded-tl-lg rounded-rt-lg' : 'rounded-lg'} font-medium tracking-wide text-#14142b border border-solid border-gray-300 outline-none py-3 px-4 box-border text-sm font-bold leading-4 transition-all duration-500 ease-in-out`}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search__button" onClick={()=>handleSearch}>
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
              <SearchAdvanced
                organisations={organisations}
                onFilter={handleFilter}
                categories={categories}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
