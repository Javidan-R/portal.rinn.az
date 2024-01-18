import React, { FC } from "react";
import { Link } from "react-router-dom";
interface BreadcrumbItem {
  link: string;
  name: string;
}
interface BreadcrumbProps {
  items: BreadcrumbItem[];
  lastItemTextColor?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items, lastItemTextColor = "text-[#304b82]" }) => {
  return (
    <div aria-label="breadcrumb" className="flex justify-center items-center">
      <ol className="breadcrumb hidden md:flex items-center justify-center align-center gap-2 font-medium text-xl">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link to={item.link} className={index === items.length - 1 ? lastItemTextColor : "text-[#a0a3bd]"}>
              {item.name}
            </Link>
            {index !== items.length - 1 && (
              <span className="w-[5px] h-[5px] rounded-full bg-[#a0a3bd] mx-2"></span>
            )}
          </li>
        ))}
      </ol>
      <div className="flex md:hidden lg:hidden justify-center items-center mt-2">
        <span className="text-[#a0a3bd]"></span>
        <li className="flex items-center">
          <Link to={items[items.length - 1].link} className={lastItemTextColor}>
            {items[items.length - 1].name}
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Breadcrumb;
