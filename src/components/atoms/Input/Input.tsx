import React, { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: string;
    placeholder: string;
    className:string;
}

const Input: React.FC<InputProps> = ({ type, name, placeholder, className,...props }) => {
    return (
        <>
            <input
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                {...props}
            />
           
        </>
    );
};

export default Input;
