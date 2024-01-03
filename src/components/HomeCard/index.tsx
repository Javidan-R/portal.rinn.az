import { FC } from "react";
import './style.css'
import {CardProps} from '../../types/type';
export const HomeCard:FC<CardProps> = ({name,desc,image}) => {
  return (
    <div className="card p-24 h-[104px] lead__box">
      <div className="box d-flex box--row align-center">
        <div className="box__icon">
          <img src={image} alt="icon" />
        </div>
        <div className="ml-4 box__wrapper">
          <div className="box--bold box--font-14 box__title">
            {name}
          </div>
          <div className="box--font-12 lead__box-desc box__description">
            {desc}
          </div>
        </div>
    </div>
    </div>
  );
};
