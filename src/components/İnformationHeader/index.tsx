import { FC } from "react";

interface InformationHeaderProps {
    image: string;
  }
  export const InformationHeader: FC<InformationHeaderProps> = ({ image }) => {
    return (
      <div className="row  rounded-xl shadow-xl border  border-1  mt-10 mb-2 p-6">
        <div className="col-12 ">
          <img
            src={image}
            alt="AzIntelecom"
            className="max-w-full h-14 object-contain"
            style={{
              width: "336px",
              height: "62px",
            }}
          />
        </div>
      </div>
    );
  };