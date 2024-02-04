import { FC } from "react";
import { AuthData } from "../../types/type";

interface AuthChooseProps extends AuthData {}

export const AuthChoose: FC<AuthChooseProps> = ({title, desc, image, sign ,handleButtonClick }) => (
  <div className="col-md-12  z-2 mt-6 transition-transform duration-1000 transform hover:scale-105 ">
        <div onClick={sign ? handleButtonClick : undefined}
    className="bg-[#fff] w-full flex fle-row align-center justify-between p-4 transition-colors hover:bg-blue-100 cursor-pointer h-[50px] md:h-[70px] lg:h-[80px] border rounded-xl shadow-xl">
      <div className="cursor-pointer text-left flex flex-row items-center gap-4 align-center">
        <img src={image} alt="Fin" className="sm:h-[20px] md:h-[55px] lg:h-[65px]" />
        <div>
          <p className="text-[#0757bc] mb-[2px] lg:mb-[10px] text-sm lg:text-xl  md:text-lg font-semibold  ">
            {title}
          </p>
          <p className="text-[#7d7d7d] mt-[10px] text-base hidden lg:block md:block">{desc}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        {sign && (
          <button
            onClick={handleButtonClick}
            className="bg-[#0c66ff] text-[#fff] w-[55px] lg:w-[75px] h-[22px] lg:h-[32px] text-center pt-[1%] lg:pt-[4%] border-none rounded-lg cursor-pointer text-[11px] lg:text-sm"
          >
            <p className="mb-1">Qeydiyyat</p>
          </button>
        )}

        <button className="text-[#005abc] text-base cursor-pointer">
          Ətraflı
        </button>
      </div>
    </div>
  </div>
);
