import React from "react";
import { clsx } from "clsx";
import { selectedClasses, variantClasses } from "./styles";

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | "action"
    | "icon-action"
    | "icon-menu"
    | "icon-gray-circle"
    | "icon-black-circle"
    | "icon-secondary"
    | "cancel"
    | "success"
    | "icon-add"
    | "secondary"
    | "tertiary"
    | "tertiary-icon"
    | "primary"
    | "primary-light"
    | "tab"
    | "tab-secondary"
    | "group";
  isSelected?: boolean;
  icon?: React.ReactNode;
  title?: string;
}

const Button = ({
  children,
  title,
  variant = "action",
  isSelected,
  icon,
  className,
  disabled,
  ...res
}: PropsButton) => {
  return (
    <button
      title={title}
      disabled={disabled}
      className={clsx(
        "h-[35px] px-[17px] py-[9px] font-semibold flex items-center justify-center rounded-[18px] text-[14px] font-medium cursor-pointer disabled:bg-[#dddddd] disabled:text-[#8d8d8d]",
        variantClasses[variant],
        isSelected && selectedClasses[variant],
        className
      )}
      {...res}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
