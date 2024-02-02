import React from "react";
import { Service } from "../../types/type";

interface ServiceDetailsProps {
  service: Service; // İstifadə etdiyiniz dataların tipini əlavə edin
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  return (
    <div>
      <h2>{service.title}</h2>
      {/* Əlavə məlumatları burada göstər */}
    </div>
  );
};

export default ServiceDetails;