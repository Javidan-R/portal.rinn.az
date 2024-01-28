
import { FC } from "react";
import { OrganisationCardProps } from "../../types/type";
import { Link } from "react-router-dom";

const OrganisationCard: FC<OrganisationCardProps> = ({
  servicesCount,
  name,
  photo,
  customStyles,
  additionalComponent,
  organisationsId,
  
}) => {
  return (
    <div
      className=" bg-white border border-solid border-1 rounded-lg shadow-md flex justify-center align-center"
      style={customStyles}
    >
      <div className="p-6 w-full flex flex-col">
        <div className="flex justify-start  items-start  gap-4 h-[80px]">
          <img src={photo} className="max-w-full h-auto object-contain h-[45px] w-[40px]" alt={name} />
          <div className="font-black text-xl max-w-full h-auto">{name}</div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold ">{servicesCount}</span> Xidmət
          </div>
          <div className="flex items-center">
            {additionalComponent}
            <Link to={`/organisations/${organisationsId}`}>
              <button className="font-normal text-[#0f52ba] text-md">Ətraflı Məlumat</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationCard;