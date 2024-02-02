import { FC } from "react";
import { AuthData } from "../../types/type";

interface AuthChooseProps extends AuthData {}

export const AuthChoose: FC<AuthChooseProps> = ({title, desc, image, sign ,handleButtonClick }) => (
  <div className="col-md-12  z-2 mt-6 transition-transform duration-1000 transform hover:scale-105 ">
    <div className="bg-[#fff] w-full flex fle-row align-center justify-between p-4 transition-colors hover:bg-blue-100 cursor-pointer h-[80px] border rounded-xl shadow-xl">
      <div className="cursor-pointer text-left flex flex-row items-center gap-4">
        <img src={image} alt="Fin" className="h-[65px]" />
        <div>
          <p className="text-[#0757bc] mb-[10px] text-xl font-semibold ">
            {title}
          </p>
          <p className="text-[#7d7d7d] mt-[10px] text-base ">{desc}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        {sign && (
          <button
            onClick={handleButtonClick}
            className="bg-[#0c66ff] text-[#fff] w-[75px] h-[32px] text-center pt-[4%] border-none rounded-lg cursor-pointer text-sm"
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
