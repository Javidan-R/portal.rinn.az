import { FC } from "react";

interface PageHeaderProps {
  img: string;
  text: string;
}

const PageHeader: FC<PageHeaderProps> = ({ img, text }) => {
  return (
    <div className="row shadow-lg  bg-white border mt-8 p-6 rounded-xl ">
      <div className="flex justify-center  align-center items-center gap-4">
      <img src={img} alt="" />
      <h3 className="text-3xl font-semibold">{text}</h3>
      </div>
    </div>
  );
};

export default PageHeader;
