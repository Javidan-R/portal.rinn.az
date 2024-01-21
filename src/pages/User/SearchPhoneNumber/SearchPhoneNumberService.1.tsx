import React, { FC, useState } from "react";

interface City {
  id: number;
  name: string;
  phoneNumber: string;
}

interface SearchPhoneNumberProps {
  onSelect: (city: City | null) => void;
}

const SearchPhoneNumberService: FC<SearchPhoneNumberProps> = ({ onSelect }) => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const cities: City[] = [
    { id: 1, name: "Baku", phoneNumber: "+994(12)" },
    { id: 2, name: "Ganja", phoneNumber: "+994(22)" },
    { id: 3, name: "Sumgait", phoneNumber: "+994(30)" },
    // Add more cities as needed
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (city: City) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  const handleSearch = () => {
    if (selectedCity) {
      const [, areaCode] = selectedCity.phoneNumber.match(/\(([^)]+)\)/) || [];
      const formattedPhoneNumber = `+994(${areaCode}) ${inputValue}`;
      setSearchResult(formattedPhoneNumber);
      onSelect({ ...selectedCity, phoneNumber: formattedPhoneNumber });
    } else {
      setSearchResult(null);
      onSelect(null);
    }
  };

  return (
    <div className="lg:flex lg:justify-start lg:items-center p-6">
      <div className="flex flex-col gap-4 ">
        <div className="relative inline-block text-left lg:w-[480px] lg:h-[50px]">
          <select
            value={selectedCity ? selectedCity.id.toString() : ''}
            onChange={(e) => {
              const cityId = parseInt(e.target.value);
              const city = cities.find((c) => c.id === cityId);
              if (city) {
                handleSelect(city);
              }
            }}
            className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 lg:w-[480px] lg:h-[50px] p-4"
          >
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 lg:w-[480px] lg:h-[50px] p-4 ">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleSelect(city)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 lg:w-[480px] lg:h-[50px]"
                    role="menuitem"
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md"
            placeholder="Enter 7 digits"
            value={selectedCity ? selectedCity.phoneNumber : ""}
            readOnly
          />

          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>

        {searchResult && (
          <div className="text-green-500 text-sm mt-2">
            Search Result: {searchResult}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPhoneNumberService;
