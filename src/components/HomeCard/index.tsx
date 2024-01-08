import { FC } from "react";
import './style.css';
import { CardProps } from '../../types/type';

interface HomeCardProps extends CardProps {
  customWidth?: string;
  customHeight?: string;
}

export const HomeCard: FC<HomeCardProps> = ({ name, desc, image, customWidth, customHeight}) => {
  return (
    <div className={`card p-24 lead__box cursor-pointer px-4 pb-5 ${customWidth} ${customHeight}`} >
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
