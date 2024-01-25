import { FC } from "react";
import { ServicesCardProps } from "../../types/type";
import { Link } from "react-router-dom";

const ServicesCard: FC<ServicesCardProps> = ({
  image,
  title,
  name,
  sing,
  link,
}) => {
  const buttonClass =
    "w-[90.8px] h-[30px] font-normal text-sm leading-none text-blue-700 bg-blue-100 rounded-md px-2 py-1 h-5";

  return (
    <div className="p-5 bg-white border border-solid border-gray-200  cursor-pointer shadow-md  lg:h-[160px]    w-auto flex items-center w-full flex items-center rounded-lg">
      <Link to={`/services/${link}`}>
        <div className="card p-2 h-full flex flex-col items-start">
          <div className="w-full mb-3 h-[45px]">
            {sing === "Qeydiyyatlı" && sing.length > 0 && (
              <div className="flex justify-between items-start">
                <img
                  src={image}
                  alt={title}
                  className="max-w-full h-auto object-contain"
                />
                <div className="">
                  <button className={buttonClass}>{sing}</button>
                </div>
              </div>
            )}
            {sing === "Qeydiyyatsız" && (
              <img
                src={image}
                alt={title}
                className="max-w-full h-auto object-contain"
              />
            )}
          </div>

          <div className="mt-2 ">
            <div className="text-base font-medium mb-1">{name}</div>
            <div className="line-clamp-2 font-black text-xl max-w-full h-auto leading-5 h-[42px]">
              {title}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServicesCard;
