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
  className = "bg-[#304b82] text-white font-base cursor-pointer ",
  type = "button",
  text,
  disabled,
  children,
  outline = false,
  fullWidth = false,
  onClick,
  ...props
}) => {
  const baseClass = ` rounded border border-[${color}] bg-[${color}] hover:bg-[${color}]-dark text-white  text-[${color}] ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  const buttonClass = `${baseClass} ${
    outline
      ? `border border-[${color}] text-[${color}] hover:bg-[${color}] hover:text-white`
      : `bg-[${color}] hover:bg-[${color}]-dark text-white `
  } ${fullWidth ? "w-full" : ""} ${className}`;

  return (
    <button
      {...props}
      className={buttonClass}
      type={type}
      disabled={disabled}
      onClick={onClick}
      color={color}
    >
      {children || text}
    </button>
  );
};

export default PrimaryButton;
