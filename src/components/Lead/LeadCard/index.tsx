import React from "react";
import { Link } from "react-router-dom";

interface LeadCardProps {
  id: number;
  name: string;
  desc: string;
  image: string;
  to: string;
  onClick?: () => void;
}

export const LeadCard: React.FC<LeadCardProps> = ({
  name,
  desc,
  image,
  to,
  onClick,
}) => (
  <Link to={to} onClick={onClick}>
    <div  className={`  w-full  h-[104px] p-5 bg-white border border-solid border-gray-100 cursor-pointer shadow flex items-center rounded-xl  `}   >
      <div className="text-gray-900 flex items-center">
        <div className="flex-none">
          <img
            src={image}
            alt={name}
            className="h-12 w-12  object-scale-down "
          />
        </div>
        <article className="ml-4 w-60 text-wrap text-left">
          <div className="font-black  overflow-hidden font-custom truncate text-sm " >
            {name}
          </div>
          <div className="text-sm  opacity-50 font-semibold" style={{fontSize:'12px'}}>{desc}</div>
        </article>
      </div>
    </div>
  </Link>
);



