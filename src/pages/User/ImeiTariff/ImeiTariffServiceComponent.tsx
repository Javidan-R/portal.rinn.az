import React from "react";
import Input from "../../../components/atoms/Input/Input";
export interface ImeiTariffServiceComponentProps {
  label: string;
  id: string;
  value: string;
  selectedOption: string | null;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImeiTariffServiceComponent: React.FC<
  ImeiTariffServiceComponentProps
> = ({ label, id, value, selectedOption, handleOptionChange }) => (
  <div className="p-6 flex justify-center items-center gap-4">
    <Input
      id={id}
      value={value}
      name={"imeitarif"}
      checked={selectedOption === value}
      onChange={handleOptionChange}
      type={"checkbox"}
      placeholder={""}
      className="w-6 h-6 rounded-full focus:ring-dark-blue checked:bg-dark-blue checked:border-transparent"
    />

    <label htmlFor={id} className="text-lg text-dark-blue font-semibold">
      {label}
    </label>
  </div>
);
