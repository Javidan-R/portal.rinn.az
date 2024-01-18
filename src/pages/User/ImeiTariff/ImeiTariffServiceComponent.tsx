import React from 'react';
export interface ImeiTariffServiceComponentProps {
  label: string;
  id: string;
  value: string;
  selectedOption: string | null;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const ImeiTariffServiceComponent: React.FC<ImeiTariffServiceComponentProps> = ({
  label, id, value, selectedOption, handleOptionChange,
}) => (
  <div className="p-6 flex justify-center items-center gap-4">
    <input
      type="checkbox"
      className="w-6 h-6 rounded-full focus:ring-dark-blue checked:bg-dark-blue checked:border-transparent"
      id={id}
      value={value}
      checked={selectedOption === value}
      onChange={handleOptionChange} />
    <label htmlFor={id} className="text-lg text-dark-blue font-semibold">
      {label}
    </label>
  </div>
);
