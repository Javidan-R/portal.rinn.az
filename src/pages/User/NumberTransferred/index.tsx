import React, { FC } from 'react';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import nomredasima from '../../../../src/assets/images/services/Nomredasinma.png';
import { PagesCard } from '../../../components/PagesCard';
import ServiceHeading from '../../../components/ServiceHeading';
import TransitionSection from '../../../components/Widgets/TransitionSection';

interface SelectProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
  options: string[];
}

interface InputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

const BreadcrumbItems = [
  { link: '/', name: 'Əsas səhifə' },
  { link: '/services', name: 'Bütün xidmətlər' },
  {
    link: '/numbers-transferred-service',
    name: 'Mobil nömrə daşınması xidməti vasitəsilə digər şəbəkəyə daşınmış nömrələr barədə məlumatın verilməsi',
  },
];

const Mcqs = [
  {
    serviceId: 5,
    image: nomredasima,
    title: 'Mobil nömrə daşınması xidməti vasitəsiylə digər ',
    name: '“AzInTelecom” MMC',
    link: 'numbers-transferred-service',
    sing: 'Qeydiyyatsız',
    pay: 'Ödənişsiz',
  },
];

const Select: React.FC<SelectProps> = ({ name, value, onChange, onBlur, options }) => (
  <div className="select">
    <div className="select__name" title={value}>
      <div>{value}</div>
    </div>
    <select name={name} onChange={onChange} onBlur={onBlur} value={value}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export const Input:FC<InputProps> = ({ name, value, onChange, onBlur, placeholder, error }) => {
  return(
    
  <div className="form__group">
  <input
    className={`v-input ${error ? 'error' : ''}`}
    placeholder={placeholder}
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />
  {error && <p className="error-message">{error}</p>}
</div>
  )
  };

interface MobileNumberFormProps {
  onSubmit: (mobileNumber: string) => void;
}

const MobileNumberForm: React.FC<MobileNumberFormProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      prefix: '050',
      mobileNumber: '',
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      if (!values.prefix || !/^(050|051|055|010|099|070|077|066)$/.test(values.prefix)) {
        errors.prefix = 'Invalid prefix';
      }

      if (!/^\d{3}\d{2}\d{2}$/.test(values.mobileNumber)) {
        errors.mobileNumber = 'Invalid format. Use 123-33-33 format.';
      }

      return errors;
    },
    onSubmit: (values) => {
      const fullNumber = `${values.prefix}${values.mobileNumber}`;
      onSubmit(fullNumber);
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors } = formik;

  return (
    <form onSubmit={handleSubmit} className='bg-white rounded-xl shadow-xl border  border-1 mt-10 mb-4 p-6'>
      <div className="number-checked">
        <div className="number-checked__wrapper">
          <div className="row">
            <div className="col-12 d-lg-block d-none">
              <label className="v-label">Mobil nömrə</label>
            </div>
            <div className="col-12 d-lg-none d-block">
              <label className="v-label">Prefiks</label>
            </div>
            <div className="col-lg-2 col-12">
              <Select
                name="prefix"
                value={values.prefix}
                onChange={handleChange}
                onBlur={handleBlur}
                options={['050', '051', '055', '010', '099', '070', '077', '066']}
              />
              {errors.prefix && <p className="error-message">{errors.prefix}</p>}
            </div>
            <div className="col-12 d-lg-none d-block mt-24">
              <label className="v-label">Mobil nömrə</label>
            </div>
            <div className="col-lg-3 col-12">
              <InputMask
                mask="999-99-99"
                maskChar={null}
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                
              </InputMask>
            </div>
            <div className="col-12 d-lg-none d-block">
              <hr className="divider my-30" />
            </div>
            <div className="col-lg-2 col-12 d-sm-flex d-md-block justify-center pl-0">
              <button type="submit" className="btn btn--dark form__btn">
                Yoxla
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export const NumberTransferred = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <ServiceHeading
          mainLink="/services"
          backButtonProps={{
            customClassName: 'flex flex-row flex-nowrap justify-center gap-2 items-center align-center',
            customStyle: undefined,
          }}
          breadcrumbItems={BreadcrumbItems}
        />
        <TransitionSection>
        <section>
          <PagesCard services={Mcqs} />
        </section>
        <section className="bg-white rounded-xl mt-6">
        <MobileNumberForm onSubmit={(mobileNumber: string) => { mobileNumber }} />
      </section>
        
        </TransitionSection>
       
      </div>
    </div>
  );
};
