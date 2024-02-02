import { FC } from "react";
import { ServicesCardProps } from "../../types/type";
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';

const ServicesCard: FC<ServicesCardProps> = ({
  image,
  title,
  name,
  sing,
  link,
}) => {
  // const { isAuthenticated, role } = useSelector(
  //   (state: { auth: { isAuthenticated: boolean; role: string } }) => state.auth
  // );
    const buttonClass =
    "w-[90.8px] h-[30px] font-normal text-sm leading-none text-blue-700 bg-blue-100 rounded-md px-2 py-1 h-5";

  // Check if user is authenticated and has the USER role
  // const canAccessService = isAuthenticated && role === 'USER' ;

  return (
    <Link to={`/services/${link}`}>

      <div className="p-5 bg-white border border-solid border-gray-200 cursor-pointer shadow-md  lg:h-[160px]    w-auto flex items-center w-full flex items-center rounded-lg">
        <div className="card w-full p-1 h-full flex flex-col items-start">
          <div className="w-full  h-[40px]">
            {sing === "Qeydiyyatlı" && sing.length > 0 && (
              <div className="flex justify-between items-start">
                <img
                  src={`../../${image}`}
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
                src={`../../${image}`}
                alt={title}
                className="max-w-full h-auto object-contain"
              />
            )}
          </div>

          <div className="mt-3 ">
            {name &&
              <div className="text-base font-medium mb-1">{name}</div>
            }
            <div className="line-clamp-2 font-bold text-lg max-w-full leading-5">
              {title}
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default ServicesCard;
