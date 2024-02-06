import  { FC, useState, useEffect } from 'react';
import SearchAdvanced from './SearchAdvanced';
import { BtnData, Category, Organisation } from '../../types/type';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

interface SearchInputProps {
  organisations: Organisation[];
  categories: Category[];
  data: BtnData[];
}

const SearchInput: FC<SearchInputProps> = ({ organisations, categories, data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<BtnData[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleSearch = () => {
    const filteredServices: BtnData[] = data.flatMap(btn =>
      btn.serviceName?.filter(service =>
        service.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )?.map(service => ({
        id: service.serviceId,
        serviceId: service.serviceId,
        name: btn.name,
        serviceName: [service],
      })) || []
    );

    setSearchResults(filteredServices);
  };

  // const handleResultClick = (services: BtnData[]) => {
  //   const selectedServices = services.flatMap(btn =>
  //     btn.serviceName || []
  //   );
  //   dispatch(setSelectedBtn(selectedServices));
  //   navigate('/service-details');
  // };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };
  
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  

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
              <SearchAdvanced
                organisations={organisations}
                categories={categories} onFilter={() =>{} }                
              />
            )}

            {/* Render search results */}
            {/* {searchResults.map((result, index) => (
              <div key={index} onClick={() => handleResultClick([result])}>
                {result.serviceName.map((item, idx) => (
                  <div key={idx}>{item.title}</div>
                ))}
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;

