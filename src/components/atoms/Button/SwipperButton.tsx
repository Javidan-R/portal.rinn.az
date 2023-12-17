import React, { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?:string;
  style? : CSSProperties;
}
const SwipperButton: React.FC<ButtonProps> = ({ className, style ,children, ...props }) => {
  return (
    
    <button
    className={className}
    style={style}
     
      {...props}
      
    >
      {children}
    </button>
  );
};

export default SwipperButton;
