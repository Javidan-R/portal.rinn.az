import React, { FC } from "react";
import { CardProps } from "../../types/type";

const btn =
  "w-[90.8px] h-[30px] font-normal text-sm leading-none text-blue-700 bg-blue-100 rounded-md px-2 py-1 h-5";

const ServiceCard: FC<CardProps> = ({ image, name, desc, sing }) => (
  <div className="w-[403px] h-[160px] cursor-pointer">
    <div className={`card p-6 h-100 w-full   flex-column`}>
      <div className="flex flex-col items-start">
        <div className="w-full">
          <div
            className={
              sing && sing.length > 0
                ? "flex justify-between items-start"
                : "mb-4 "
            }
          >
            <img src={image} alt="" className="max-w-full h-auto" />
            {sing && sing.length > 0 && (
              <div className="">
                <button className={btn}>{sing}</button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4">
          <div className="text-xs font-semibold">{name}</div>
          <div className="font-black truncate  line-clamp-2  text-xl">
            {desc}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceCard;
