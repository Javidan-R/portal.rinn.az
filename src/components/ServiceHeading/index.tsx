import React, { FC, ReactNode,  } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import BackButton from '../atoms/Button/BackButton';
import Breadcrumb from '../Common/BredCrumb';
interface BreadcrumbItem {
  link: string;
  name: string;
}

interface ServiceHeadingProps {
  mainLink: string;
  backButtonProps: {
    customClassName?: string;
    customStyle?: React.CSSProperties;
  };
  breadcrumbItems: BreadcrumbItem[];
  children:ReactNode
}



const ServiceHeading: FC<ServiceHeadingProps> = ({ mainLink, backButtonProps, breadcrumbItems,children}) => {
  
  return (
    <div>
      <section className="flex justify-start gap-10 py-4">
        <Link to={mainLink}>
          <div className="px-6 flex justify-center text-sm text-[#304b82] cursor-pointer outline-none bg-transparent border border-[#304b82] box-border rounded-lg w-[91px] h-[39px]">
            <BackButton {...backButtonProps}>
              <HiOutlineArrowNarrowLeft className="text-xl font-bold" style={{ fontWeight: 'bolder' }} />
              <span className="lg:block sm:none"> Geri</span>
            </BackButton>
          </div>
        </Link>
        <div className="flex items-center">
         <Breadcrumb items={breadcrumbItems}/>
        </div>
      </section>
      {children}
    </div>
  );
};

export default ServiceHeading;
