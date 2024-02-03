import React from "react";
import { Service } from "../../types/type";
import { Link } from "react-router-dom";

export const ServiceDetail: React.FC<{ service: Service }> = ({ service }) => {
  if (!service) {
    return null; // Or you can render a loading state or an error message
  }

  const { image, title, name, sing, pay ,link } = service;

  return (
    <Link to={`/services/${link}`}>
    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between items-center">
      {/* Service Image and Title */}
      <div className="flex flex-col lg:flex-row items-center lg:mr-4">
        <img
          src={`../../${image}`}
          alt={name}
          className="w-10 h-10 object-cover lg:mr-4 mb-2 lg:mb-0"
        />
        <div className="text-center md:text-left">
          <p className="text-[#304b82] text-xl font-bold mb-2 md:text-xl">{title}</p>
          <p className="text-gray-600">{name}</p>
        </div>
      </div>

      {/* Service Keys */}
      <div className="flex flex-col md:flex-row items-center md:justify-between lg:justify-start gap-4 lg:gap-10 text-center md:text-left mt-4 md:mt-0">
      <div>
          <p className="text-[#304b82] text-lg font-semibold">{pay}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">{sing}</p>
        </div>
        
      </div>
    </div>
    </Link>
  );
};
