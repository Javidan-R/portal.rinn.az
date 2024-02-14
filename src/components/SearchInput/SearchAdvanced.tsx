  /* eslint-disable @typescript-eslint/no-explicit-any */
  import React, { useCallback, useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import PrimaryButton from '../atoms/Button/PrimaryButton';
  import Checkbox from '../atoms/Checkbox';
  import Select from '../atoms/SelectOption';
  import { resetFilters, selectFilters, updateFilters, updateFilteredOrganisations } from '../../redux/searchadvanced';
  import { Organisation, Category } from '../../types/type';
  import { useNavigate } from 'react-router-dom';

  interface SearchAdvancedProps {
    organisations: Organisation[];
    categories: Category[];
  }

  const SearchAdvanced: React.FC<SearchAdvancedProps> = ({ organisations, categories }) => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    const navigate = useNavigate();
    const [searchResultData, setSearchResultData] = useState<any>(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
      dispatch(updateFilters({ [name]: newValue }));
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
      setSearchResultData(filteredOrganisations); // Set search result data
      navigateToSearchResult();
    }, [organisations, filters, dispatch, navigate]);

   const navigateToSearchResult = useCallback(() => {
  const queryParams = new URLSearchParams();
    if (filters.paid) {
    queryParams.append('paid', filters.paid.toString());
  }
  if (filters.dontPaid) {
    queryParams.append('unpaid', filters.dontPaid.toString());
  }
  if (filters.registered) {
    queryParams.append('registered', filters.registered.toString());
  }
  if (filters.dontRegistered) {
    queryParams.append('unregistered', filters.dontRegistered.toString());
  }
  if (filters.selectedOrganization) {
    queryParams.append('organisation', filters.selectedOrganization);
  }
  if (filters.selectedCategory) {
    queryParams.append('category', filters.selectedCategory);
  }
  navigate(`/search-result?${queryParams.toString()}`);
}, [filters, navigate]);

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
                  onChange={handleChange}
                  options={organisations.map(org => org.name)}
                  placeholder="Qurumun adını daxil edin"
                  className="mt-2"
                  width={80}
                />
              </div>
              <div className='flex  flex-col sm:flex-row justify-between align-start '>
                <div className="form__checkbox mt-6">
                  <Checkbox name="paid" label="Ödənişli" checked={filters.paid} onChange={(checked) => handleCheckboxChange("paid", checked)} />
                  <Checkbox name="dontPaid" label="Ödənişsiz" checked={filters.dontPaid} onChange={(checked) => handleCheckboxChange("dontPaid", checked)} />
                </div>
                <div className="form__checkbox mt-6">
                  <Checkbox name="registered" label="Qeydiyyatlı" checked={filters.registered} onChange={(checked) => handleCheckboxChange("registered", checked)} />
                  <Checkbox name="dontRegistered" label="Qeydiyyatsız" checked={filters.dontRegistered} onChange={(checked) => handleCheckboxChange("dontRegistered", checked)} />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:block hidden mt-6">
              <div className="form__group">
                <label className="v-label truncate text-xl">Kateqoriya</label>
                <Select
                  name="selectedCategory"
                  value={filters.selectedCategory}
                  onChange={handleChange}
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
                  className="px-6 py-2 mr-2 text-[#000] border border-1 font-normal"
                  style={{ backgroundColor: '#fff', border: '1px solid #000', color: "#000" }}
                  onClick={handleReset}
                >
                  Sıfırla
                </PrimaryButton>
                <PrimaryButton
                  type="button"
                  className="px-6 py-2 mr-2 text-[#fff] text-base font-normal"
                  style={{ backgroundColor: '#304b82' }}
                  onClick={handleSearch}
                >
                  Axtar
                </PrimaryButton>
              </div>
            </div>
          </div>
        </form>
        
        {/* Display search result data */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Search Result:</h2>
          <div>
            {searchResultData && searchResultData.map((org: Organisation) => (
              <div key={org.id}>
                <p>{org.name}</p>
                {/* Add other fields you want to display */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default SearchAdvanced;
