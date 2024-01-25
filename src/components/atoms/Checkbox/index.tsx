import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Checkbox: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  { label, className, ...props },
  ref
) => {
  const { id, name, checked, ...rest } = props;

  return (
    <div className={`form__group ${className || ''} my-3`}>
      <input
        type="checkbox"
        className="hidden"
        id={id || name}
        ref={ref}
        {...rest}
      />
      <label
        className="v-label cursor-pointer flex items-center gap-2 space-x-2"
        htmlFor={id || name}
      >
        <span className="relative flex justify-center items-center align-center  ">
          {checked ? <FaCheckSquare style={{
            color: '#304b82',
            border: '1px solid #304b82 !important',
            borderRadius: '8px',
            width: '24px',
            height: '24px',
          }} /> : <FaRegSquare style={{
            borderRadius: '8px',
            outline: 'none',
            border: '4px solid #304b82 !important',
            backgroundColor: '#fff',
            width: '24px',
            height: '24px'
          }} />}
        </span>
        <span className='text-lg '>{label}</span>
      </label>
    </div>
  );
};

export default forwardRef(Checkbox);
