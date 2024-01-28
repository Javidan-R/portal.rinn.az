import React, { InputHTMLAttributes, useRef, useEffect, FC } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  size?: number;
  className?: string;
  value?: string;
  checked?: boolean;
  readOnly?: boolean;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const Input: FC<InputProps> = ({
  type,
  placeholder,
  required = true,
  min,
  max,
  size,
  name,
  className,
  value,
  checked,
  readOnly,
  onChange,
  onClick,
  onBlur,
  error,
  id,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const commonClasses = `border p-2 rounded-md ${
    error ? 'border-red-500 focus:outline-none focus:ring focus:border-red-500' : 'border-gray-300'
  } ${className || 'input'}`;


  return (
    <div className="mb-4">
         <input
      type={type}
      placeholder={placeholder || 'Enter'}
      required={required}
      min={min}
      max={max}
      size={size}
      name={name}
      className={commonClasses}
      value={value}
      checked={checked}
      readOnly={readOnly}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      id={id}
    />
     
      {error && <p className="text-red-500 text-sm mt-1">Error message goes here</p>}
    </div>
  );
};

export default Input;





