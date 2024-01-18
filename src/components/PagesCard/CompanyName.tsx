import { FC } from "react";
import { Service } from "../../types/type";

interface CompanyNameProps {
  service: Service;
}

export const CompanyName: FC<CompanyNameProps> = ({ service }) => {
  return (
    <>
      <div className="flex items-center align-center justify-start gap-6 h-[56px]">
        <div className="hidden md:block">
          <img
            src={service.image}
            alt="logo"
            className="max-w-full h-auto object-cover"
          />
        </div>
        <div className="">
          <span className="text-lg font-medium text-[#304b82]">
            {service.name}
          </span>
          <h1 className="text-2xl font-bold">{service.title}</h1>
        </div>
      </div>
    </>
  );
};