import React, { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customClassName?: string;
  customStyle?: CSSProperties;
}

const BackButton: React.FC<BackButtonProps> = ({ customClassName, customStyle, children, ...props }) => {
  return (
    <button
      className={`bg-black text-black-50 ${customClassName}`}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default BackButton;
