import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  type?: "button" | "submit" | "reset";
  text?: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  outline?: boolean;
  fullWidth?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  color = "#304b82",
  className = "bg-[#304b82] text-white font-base py-4 px-8 rounded shadow-none cursor-pointer ",
  type = "button",
  text,
  disabled,
  children,
  outline = false,
  fullWidth = false,
  onClick,
  ...props
}) => {
  const baseClass = `font-bold py-2 px-4 rounded ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  const buttonClass = `${baseClass} ${
    outline
      ? `border border-${color} text-${color} hover:bg-${color} hover:text-white`
      : `bg-${color} hover:bg-${color}-dark text-white `
  } ${fullWidth ? "w-full" : ""} ${className}`;

  return (
    <button
      {...props}
      className={buttonClass}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
};

export default PrimaryButton;
