import React, { FC } from "react";
import { CardProps } from "../../types/type";

const ServiceCard: FC<CardProps> = ({ image, name, desc, sing }) => (
  <div className="w-[403px]  h-[160px]">
      <div className="card p-24 h-100 w-full">
        <div className="box box--column items-start">
          <div className="box__icon mb-15">
            <img src={image} alt="" className="max-w-full h-auto" />
          </div>
          <div className="mt-4 box__wrapper">
            <div className="box--font-14 box__title">{name}</div>
            <div className="box--bold box--font-16 box__description">
              {desc}
            </div>
          </div>
          {sing && sing.length > 0 && (
            <div>
              <button className="btn">{sing}</button>
            </div>
          )}
        </div>
      </div>
    </div>
);

export default ServiceCard;
