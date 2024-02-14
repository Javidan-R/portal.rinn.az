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
  const limitTitle = (title: string = ""): string => {
    const words = title.split(" ");
    if (words.length > 12) {
      return words.slice(0, 12).join(" ") + "...";
    }
    return title;
  };

    const buttonClass =
    "w-[90.8px] h-[30px] font-normal text-sm leading-none text-blue-700 bg-blue-100 rounded-md px-2 py-1 h-5";
  return (
    <Link to={`/services/${link}`}>
      <div className="px-4 bg-white border border-solid border-gray-200 cursor-pointer shadow-md h-[160px] md:h-[160px]     w-auto flex items-center w-full flex items-center rounded-lg">
        <div className=" w-full p-[2px] h-auto flex flex-col items-start">
          <div className="w-full min-h-[40px]">
            {sing === "Qeydiyyatlı" && sing.length > 0 && (
              <div className="flex justify-between items-start w-full mb-2">
                <img
                  src={`../../${image}`}
                  alt={name}
                  className="max-w-full h-auto object-contain "
                />
                <div className="">
                  <button className={buttonClass}>{sing}</button>
                </div>
              </div>
            )}
            {sing === "Qeydiyyatsız" && (
              <img
                src={`../../${image}`}
                alt={name}
                className="max-w-full h-auto object-contain"
              />
            )}
          </div>

          <div className="mt-2 ">
            {name &&
              <div className="text-base font-medium mb-1">{name}</div>
            }
            <div className=" font-black  max-w-full leading-4  break-words">
              {limitTitle(title)}
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default ServicesCard;
