import React, { useState } from 'react';
import Select from '../atoms/SelectOption';
import PrimaryButton from '../atoms/Button/PrimaryButton';
import Checkbox from '../atoms/Checkbox';
import { Category, Organisation } from '../../types/type';

interface SearchAdvancedProps {
  organisations: Organisation[];
  categories:Category[]
  onFilter: (filters: Organisation[]) => void;
}

const SearchAdvanced: React.FC<SearchAdvancedProps> = ({ organisations, onFilter,categories }) => {
  const [paid, setPaid] = useState(false);
  const [dontPaid, setDontPaid] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [dontRegistered, setDontRegistered] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleReset = () => {
    setPaid(false);
    setDontPaid(false);
    setRegistered(false);
    setDontRegistered(false);
    setSelectedOrganization('');
    setSelectedCategory('');
  };

  const handleSearch = () => {
    const filteredOrganisations = organisations.filter((org) => {
      const { serviceName } = org;

      const isPaymentMatch = (paid && serviceName.some(({ pay }) => pay === 'Ödənişli')) ||
        (dontPaid && serviceName.every(({ pay }) => pay !== 'Ödənişli'));

      const isRegistrationMatch = (registered && serviceName.some(({ sing }) => sing === 'Qeydiyyatlı')) ||
        (dontRegistered && serviceName.every(({ sing }) => sing !== 'Qeydiyyatlı'));

      const isOrganizationMatch = !selectedOrganization ||
        org.name.toLowerCase().includes(selectedOrganization.toLowerCase());

      const isCategoryMatch = !selectedCategory ||
        serviceName.some(({ title }) => title?.toLowerCase().includes(selectedCategory.toLowerCase()));

      return isPaymentMatch && isRegistrationMatch && isOrganizationMatch && isCategoryMatch;
    });

    if (onFilter) {
      onFilter(filteredOrganisations);
    }
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "organization") {
      setSelectedOrganization(value);
    } else if (name === "category") {
      setSelectedCategory(value);
    }
  };
  

  const organizationOptions = organisations.map((org) => org.name);
  const categoryOptions = categories.map((cat)=>cat.title)

 
  return (
    <div className="absolute bg-gray-100 px-6 top-11 transition  w-full" style={{ position: 'absolute', padding: '2rem 1.5rem', backgroundColor: '#fafafa', zIndex: 9, borderRadius: '0 0 16px 16px', boxShadow: '0 5px 10px 0 rgba(0,0,0,.1)' }}>

      <form action="" className="form">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 sm:col-span-12">
            <div className="mt-6">
              <label className="v-label turnucate text-xl">Qurumlar</label>
              <Select
                name="organization"
                value={selectedOrganization}
                onChange={()=>{handleChangeSelect}}
                options={organizationOptions}
                placeholder="Qurumun adını daxil edin"
                className="mt-2"
                width={80}
              />
            </div>
            <div className="form__group md:hidden mt-6">
              <label className="v-label turnucate text-xl">Kateqoriya</label>
              <Select
                name="category"
                value={selectedCategory}
                onChange={()=>{handleChangeSelect}}
                options={categoryOptions}
                placeholder="Kateqoriyanı daxil edin"
                className="mt-2"
                width={80}
              />
            </div>
            <div className="form__checkbox mt-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 md:col-span-3">
                  <Checkbox name="paid" label="Ödənişli" />
                  <Checkbox name="dontPaid" label="Ödənişsiz" />
                </div>
                <div className="col-span-6 md:col-span-3">
                  <Checkbox name="registered" label="Qeydiyyatlı" />
                  <Checkbox name="dontRegistered" label="Qeydiyyatsız" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:block hidden mt-6">
            <div className="form__group">
              <label className="v-label turnucate text-xl">Kateqoriya</label>
              <Select
                name="category"
                value={selectedCategory}
                onChange={()=>{handleChangeSelect}}
                options={categoryOptions}
                placeholder="Kateqoriyanı daxil edin"
                className="mt-2"
                width={80}
              />
            </div>
          </div>
          <div className="col-span-12">
            <hr className="divider my-6" />
            <div className="button-group flex justify-center">
              <PrimaryButton
                type="reset"
                className="mr-2 text-[#000] border border-1 font-normal "
                style={{
                  backgroundColor:'#fff',
                  border:'1px solid #000',
                  color:"#000"
                }}

                onClick={handleReset}
              >
                Sıfırla
              </PrimaryButton>
              <PrimaryButton
                type="submit"
                className="mr-2 text-[#fff]  text-base font-normal"
                style={{
                  backgroundColor:'#304b82'
                }}
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
