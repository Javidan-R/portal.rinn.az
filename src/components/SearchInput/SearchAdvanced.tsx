import React, {  ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PrimaryButton from '../atoms/Button/PrimaryButton';
import Checkbox from '../atoms/Checkbox';
import Select from '../atoms/SelectOption';
import { resetFilters, selectFilters, updateFilters, updateFilteredOrganisations, SearchAdvancedState } from '../../redux/searchadvanced';
import { Organisation, Category } from '../../types/type';
export interface RootState {
  searchAdvanced: SearchAdvancedState;
}
interface SearchAdvancedProps {
  organisations: Organisation[];
  categories: Category[];
  onFilter: () => void;
}

const SearchAdvanced: React.FC<SearchAdvancedProps> = ({ organisations, categories, onFilter }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => selectFilters(state));

  const handleChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLSelectElement; 
    dispatch(updateFilters({ [name]: value }));
}, [dispatch]);
  const handleCheckboxChange = useCallback((name: string, checked: boolean) => {
    dispatch(updateFilters({ [name]: checked }));
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  const handleSearch = useCallback(() => {
    const filteredOrganisations = organisations.filter(org => {
      const { paid, dontPaid, registered, dontRegistered, selectedOrganization, selectedCategory } = filters;

      const paymentMatch = (!paid || org.serviceName.some(s => s.pay === 'Ödənişli')) &&
          (!dontPaid || org.serviceName.every(s => s.pay !== 'Ödənişli'));

      const registrationMatch = (!registered || org.serviceName.some(s => s.sing === 'Qeydiyyatlı')) &&
          (!dontRegistered || org.serviceName.every(s => s.sing !== 'Qeydiyyatlı'));

      const organizationMatch = !selectedOrganization || org.name.toLowerCase().includes(selectedOrganization.toLowerCase());

      const categoryMatch = !selectedCategory || org.serviceName.some(s => s.title?.toLowerCase() === selectedCategory.toLowerCase());

      return paymentMatch && registrationMatch && organizationMatch && categoryMatch;
    });

    dispatch(updateFilteredOrganisations(filteredOrganisations));
    onFilter();
  }, [organisations, filters, dispatch, onFilter]);

  return (
    <div className="absolute bg-gray-100 px-6 top-11 transition w-full" style={{ position: 'absolute', padding: '2rem 1.5rem', backgroundColor: '#fafafa', zIndex: 1, borderRadius: '0 0 16px 16px', boxShadow: '0 5px 10px 0 rgba(0,0,0,.1)' }}>
      <form action="" className="form">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 sm:col-span-12">
            <div className="mt-6">
              <label className="v-label truncate text-xl">Qurumlar</label>
              <Select
                name="selectedOrganization"
                value={filters.selectedOrganization}
                onChange={handleChangeSelect}
                options={organisations.map(org => org.name)}
                placeholder="Qurumun adını daxil edin"
                className="mt-2"
                width={80}
              />
            </div>
            <div className="form__checkbox mt-6">
              <Checkbox name="paid" label="Ödənişli" checked={filters.paid} onChange={(checked) => handleCheckboxChange("paid", checked)} />
              <Checkbox name="dontPaid" label="Ödənişsiz" checked={filters.dontPaid} onChange={(checked) => handleCheckboxChange("dontPaid", checked)} />
              <Checkbox name="registered" label="Qeydiyyatlı" checked={filters.registered} onChange={(checked) => handleCheckboxChange("registered", checked)} />
              <Checkbox name="dontRegistered" label="Qeydiyyatsız" checked={filters.dontRegistered} onChange={(checked) => handleCheckboxChange("dontRegistered", checked)} />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:block hidden mt-6">
            <div className="form__group">
              <label className="v-label truncate text-xl">Kateqoriya</label>
              <Select
                name="selectedCategory"
                value={filters.selectedCategory}
                onChange={handleChangeSelect}
                options={categories.map(cat => cat.title)}
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
                className="mr-2 text-[#000] border border-1 font-normal"
                style={{ backgroundColor: '#fff', border: '1px solid #000', color: "#000" }}
                onClick={handleReset}
              >
                Sıfırla
              </PrimaryButton>
              <PrimaryButton
                type="button"
                className="mr-2 text-[#fff] text-base font-normal"
                style={{ backgroundColor: '#304b82' }}
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
