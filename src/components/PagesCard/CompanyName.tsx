import  { FC } from "react";

interface CompanyNameProps {
  image: string;
  name?: string;
  title?: string;
}

const CompanyName: FC<CompanyNameProps> = ({ image, name, title }) => {
  return (
    <div className="flex items-center align-center justify-start gap-6 h-[56px]">
      <div className="hidden md:block">
        <img src={image} alt={name} className="max-w-full h-auto object-cover" />
      </div>
      <div className="">
        <span className="text-lg font-medium text-[#304b82]">{name}</span>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default CompanyName;
