// BackButton.tsx

import React, { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customClassName?: string;
  customStyle?: CSSProperties;
}

const BackButton: React.FC<BackButtonProps> = ({ customClassName, customStyle, children, ...props }) => {
  return (
    <button
      className={`flex flex-row flex-nowrap justify-center gap-2 items-center align-center rounded-lg outline-none border-none cursor-pointer ${customClassName}`}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default BackButton;
