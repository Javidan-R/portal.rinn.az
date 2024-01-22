import React, { FC } from 'react';
import { CardProps } from '../../types/type';
import { Link } from 'react-router-dom';

interface LeadCardProps extends CardProps {
  customWidth?: string;
  customHeight?: string;
  to: string;
}

export const LeadCard: FC<LeadCardProps> = ({ name, desc, image, customWidth = '350px', to }) => (
  <>
    
      <Link to={to}>
        <div className={`p-5 bg-white border border-solid border-gray-200  cursor-pointer shadow-md lg:w-[${customWidth}] lg:h-[104px]   w-full flex items-center w-full flex items-center rounded-lg`}>
          <div className="cursor-pointer text-gray-900  flex items-center ">
            <div className="flex-none">
              <img src={image} alt="icon" className="h-12 w-12 object-contain" />
            </div>
             <article className="ml-4  w-60 text-wrap">
          <div className="font-bold overflow-hidden truncate text-base">{name}</div>
          <div className="text-xs md:text-sm opacity-60">{desc}</div>
        </article>
          </div>
        </div>
      </Link>
   
  </>
);
