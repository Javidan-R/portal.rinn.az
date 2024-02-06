import React from "react";
import { Link } from "react-router-dom";
import { Service } from "../../types/type";
interface ServiceDetailProps {
 service:Service[]
}
export const ServiceDetail: React.FC<ServiceDetailProps> = ({service}) => {
  return (
   service.map((s,index)=>(
    <div className=" pb-4" key={index}>
    <div className=" flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between items-center pt-3 pb-6">
      {/* Service Image and Title */}
      <Link to={`/services/${s.link}`}>
        <div className="flex flex-col lg:flex-row  lg:mr-2 w-full ">
          <img
            src={`../../${s.image}`}
            alt={s.name}
            className="w-7 h-7 object-cover lg:mr-2 mb-2 lg:mb-0 hidden lg:block md:block"
          />
          <div className=" text-left ">
            <p className="text-[#304b82] text-base font-bold mb-2">
              {s.title}
            </p>
            <p className="text-gray-600 font-bold ">{s.name}</p>
          </div>
        </div>
      </Link>
      {/* Service Keys */}
      <div className=" flex flex-row  items-center lg:justify-end  justify-between   gap-4 lg:gap-10 md:text-left mt-4 md:mt-0">
        <div> 
          <p className="text-[#304b82] text-lg font-bold">{s.pay}</p>
        </div>
        <div>
          <p className="text-lg font-bold">{s.sing}</p>
        </div>
      </div>
    </div>
    <hr />
    </div>
   ))
  );
};
