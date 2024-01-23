import React, { ChangeEvent, FocusEvent, useState } from 'react';

interface SelectProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (event: FocusEvent<HTMLSelectElement>) => void;
  options: string[];
  children?: React.ReactNode; 
}

const Select: React.FC<SelectProps> = ({ name, value, onChange, onBlur, options }) => {
  const [isOpen, setIsOpen] = useState(false);



  const toggleSelect = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block w-64">
      <div
        className="select__name px-4 py-2 border border-gray-300 rounded-md flex items-center justify-between transition duration-300 ease-in-out focus-within:border-blue-500 cursor-pointer"
        onClick={toggleSelect}
      >
        <div className="truncate">{value}</div>

      </div>
      {isOpen && (
        <select
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Select;
