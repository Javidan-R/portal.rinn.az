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
    <button
      data-modal-target="crud-modal"
      data-modal-toggle="crud-modal"
      type="button"
      className={`p-5 bg-white border border-solid border-gray-200 cursor-pointer shadow-md w-full flex items-center rounded-lg h-[104px] `}
    >
      <div className="text-gray-900 flex items-center">
        <div className="flex-none">
          <img
            src={image}
            alt={`Icon for ${name}`}
            className="h-12 w-12 object-contain"
          />
        </div>
        <article className="ml-4 w-60 text-wrap text-left">
          <div className="font-bold overflow-hidden truncate text-sm">
            {name}
          </div>
          <div className="text-xs md:text-sm opacity-60">{desc}</div>
        </article>
      </div>
    </button>
  </Link>
);
