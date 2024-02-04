import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface SelectProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement> | HTMLTextAreaElement | React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void;
  options: string[];
  children?: React.ReactNode;
  placeholder:string;
  className?:string;
  width?:number;
  
}

const Select: React.FC<SelectProps> = ({ name, value, onChange, onBlur, options ,placeholder ,className , width }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`relative  w-{${width}} my-2`}>
      <div
        className="select__name px-4 py-3 border border-gray-300 rounded-md flex items-center justify-between transition duration-300 ease-in-out focus-within:border-blue-500 cursor-pointer"
        onClick={toggleSelect}
        tabIndex={0}
      >
        <div className={`${value ? 'turnucate' :'text-gray-400'}`}>{value || placeholder}</div>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <select
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-white ${className}`}
        >
          {options.map((option) => (
            <option key={option} value={option} className=''>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Select;
