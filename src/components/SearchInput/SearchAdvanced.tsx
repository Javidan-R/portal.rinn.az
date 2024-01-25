import React, { useState, useEffect } from 'react';
import Checkbox from '../atoms/Checkbox';
import Select from '../atoms/SelectOption';
import PrimaryButton from '../atoms/Button/PrimaryButton';

interface SearchAdvancedProps {
  onSearch: () => void;
}

const SearchAdvanced: React.FC<SearchAdvancedProps> = ({ onSearch }) => {
  const [paid, setPaid] = useState(false);
  const [dontPaid, setDontPaid] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [dontRegistered, setDontRegistered] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    // Additional logic can be added here when the state changes
  }, [paid, dontPaid, registered, dontRegistered]);

  const handleReset = () => {
    setPaid(false);
    setDontPaid(false);
    setRegistered(false);
    setDontRegistered(false);
    setSelectedOrganization('');
    setSelectedCategory('');
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    }
  };

  const organizationOptions = [
    "AzInTelecom MMC",
    "Aztelekom MMC",
    "Azərpoçt MMC",
    // Add other organization options
  ];

  const categoryOptions = [
    "Dövlət və qanunvericilik",
    "Ümumi məlumat",
    "İş və karyera",
    "Telekommunikasiya",
    "Poçt",
    "Nəqliyyat",
    // Add other category options
  ];

  return (
    <div className="search__advanced bg-white px-6 "> 
      <form action="" className="form ">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 sm:col-span-12">
            <div className="mt-6">
              <label className="v-label turnucate text-xl ">Qurumlar</label>
              <Select
                name="organization"
                value={selectedOrganization}
                onChange={(e) => setSelectedOrganization(e.target.value)}
                options={organizationOptions}
                placeholder='Qurumun adını daxil edin'
                className="mt-2"
              />
            </div>
            <div className="form__group md:hidden mt-6">
              <label className="v-label  turnucate text-xl">Kateqoriya</label>
              <Select
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                options={categoryOptions}
                placeholder='Kateqoriyanı daxil edin'
                
              />
            </div>
            <div className="form__checkbox mt-6">
              <div className="grid grid-cols-6 gap-6 ">
                <div className="col-span-6 md:col-span-3 ">
                  <Checkbox
                    name="paid"
                    label="Ödənişli"
                    checked={paid}
                    onChange={() => setPaid(!paid)}
                  />
                  <Checkbox
                    name="dontPaid"
                    label="Ödənişsiz"
                    checked={dontPaid}
                    onChange={() => setDontPaid(!dontPaid)}
                  />
                </div>
                <div className="col-span-6 md:col-span-3">
                  <Checkbox
                    name="registered"
                    label="Qeydiyyatlı"
                    checked={registered}
                    onChange={() => setRegistered(!registered)}
                  />
                  <Checkbox
                    name="dontRegistered"
                    label="Qeydiyyatsız"
                    checked={dontRegistered}
                    onChange={() => setDontRegistered(!dontRegistered)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:block hidden mt-6">
            <div className="form__group">
              <label className="v-label  turnucate text-xl">Kateqoriya</label>
              <Select
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                options={categoryOptions}
                placeholder='Kateqoriyanı daxil edin'
              />
            </div>
          </div>
          <div className="col-span-12">
            <hr className="divider my-6" />
            <div className="button-group">
              <PrimaryButton  type="reset" className='black mr-2 text-black border border-1'
              onClick={handleReset}>
              Sıfırla
              </PrimaryButton>
              <PrimaryButton  type="reset" className='black mr-2 text-black border border-1'
               onClick={handleSearch}
               >
              Axtar
              </PrimaryButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchAdvanced;
