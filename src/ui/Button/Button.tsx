import { TButtonProps } from "./types";
import "./Button.scss";

export const Button = ({ children, onClick, className, disabled, type = "submit" }: TButtonProps) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`button ${className} ${disabled && "disabled"}`}>
      {children}
    </button>
  );
};
