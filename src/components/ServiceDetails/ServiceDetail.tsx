import React from "react";
import { Link } from "react-router-dom";
interface ServiceDetailProps {
  image: string;
  title?: string;
  name?: string;
  sing?: string;
  pay?: string;
  link?: string;
}
export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  image,
  title,
  name,
  sing,
  pay,
  link,
}) => {
  return (
    <div className=" pb-4">
    <div className=" flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between items-center pt-3 pb-6">
      {/* Service Image and Title */}
      <Link to={`/services/${link}`}>
        <div className="flex flex-col lg:flex-row  lg:mr-2 w-full ">
          <img
            src={`../../${image}`}
            alt={name}
            className="w-7 h-7 object-cover lg:mr-2 mb-2 lg:mb-0 hidden lg:block md:block"
          />
          <div className=" text-left ">
            <p className="text-[#304b82] text-base font-bold mb-2">
              {title}
            </p>
            <p className="text-gray-600 font-bold ">{name}</p>
          </div>
        </div>
      </Link>
      {/* Service Keys */}
      <div className=" flex flex-row  items-center lg:justify-end  justify-between   gap-4 lg:gap-10 md:text-left mt-4 md:mt-0">
        <div> 
          <p className="text-[#304b82] text-lg font-bold">{pay}</p>
        </div>
        <div>
          <p className="text-lg font-bold">{sing}</p>
        </div>
      </div>
    </div>
    <hr />
    </div>
  );
};
