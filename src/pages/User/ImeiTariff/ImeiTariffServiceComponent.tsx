import React from "react";
import Input from "../../../components/atoms/Input/Input";
import Label from "../../../components/atoms/Label";
export interface ImeiTariffServiceComponentProps {
  label: string;
  name?:string;
  id: string;
  value: string;
  selectedOption: string | null;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "checkbox" | "radio";
}

export const ImeiTariffServiceComponent: React.FC<
  ImeiTariffServiceComponentProps
> = ({
  label,
  name = "imeitarif",
  id,
  value,
  selectedOption,
  handleOptionChange,
  type = "checkbox",
}) => (
  <div className="p-6 flex justify-center items-center gap-4">
    <Input
      id={id}
      value={value}
      name={name}
      checked={selectedOption === value}
      onChange={handleOptionChange}
      type={type}
      placeholder={""}
      className="w-6 h-6 rounded-full focus:ring-dark-blue checked:bg-dark-blue checked:border-transparent"
    />

    <Label
      htmlFor={id}
      className="text-lg text-dark-blue font-semibold"
      text={label}
    />
  </div>
);
