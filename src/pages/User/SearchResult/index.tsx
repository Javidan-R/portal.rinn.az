import React from 'react';
import { useSelector } from 'react-redux';
import ServiceDetails from '../../../components/ServiceDetails';
import { selectSelectedService } from '../../../redux/serviceBtnSlice';


export const ServiceResult: React.FC = () => {
  const selectedService = useSelector(selectSelectedService);
  return (
    <>
      {selectedService && <ServiceDetails service={selectedService}/>}
    </>
  );
};

