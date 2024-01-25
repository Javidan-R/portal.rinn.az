import { FC } from 'react';
import { CardProps } from '../../types/type';
import { Link } from 'react-router-dom';

interface LeadCardProps extends CardProps {
  customWidth?: string;
  customHeight?: string;
  to: string;
  onClick?:()=>void;
}

export const LeadCard: FC<LeadCardProps> = ({ name, desc, image,customHeight, customWidth , to, onClick }) => (
  <>
    
      <Link to={to} onClick={onClick}>
        <div className={`p-5 bg-white border border-solid border-gray-200  cursor-pointer shadow-md    w-full flex items-center w-full flex items-center rounded-lg  h-[104px] lg:w-[${customWidth}] h-[${customHeight}]`}>
          <div className="cursor-pointer text-gray-900  flex items-center ">
            <div className="flex-none">
              <img src={image} alt="icon" className="h-12 w-12 object-contain" />
            </div>
             <article className="ml-4  w-60 text-wrap">
          <div className="font-extrabold overflow-hidden truncate text-base">{name}</div>
          <div className="text-xs md:text-sm opacity-60">{desc}</div>
        </article>
          </div>
        </div>
      </Link>
   
  </>
);
