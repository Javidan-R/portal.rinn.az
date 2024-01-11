import React, { FC } from 'react';
import { CardProps } from '../../types/type';
import { Link } from 'react-router-dom';

interface LeadCardProps extends CardProps {
  customWidth?: string;
  customHeight?: string;
  to: string;
}

export const LeadCard: FC<LeadCardProps> = ({ name, desc, image, customWidth = '350px', customHeight = '104px', to }) => (
  <>
    
      <Link to={to}>
        <div className={`p-5 bg-white border border-solid border-gray-200 shadow-md flex items-center rounded-lg h-100 cursor-pointer `}
          style={{
            width: `${customWidth}`,
            height: `${customHeight}`
          }}>
          <div className="cursor-pointer text-gray-900  flex items-center ">
            <div className="flex-none">
              <img src={image} alt="icon" className="h-12 w-12 object-contain" />
            </div>
            <article className={`ml-2  w-60 text-wrap hover:text-balance  `}>
              <div className="font-bold overflow-hidden truncate text-base font-bold mb-1">{name}</div>
              <div className="w-auto text-xs opacity-60 ">{desc}</div>
            </article>
          </div>
        </div>
      </Link>
   
  </>
);
