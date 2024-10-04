import { TButtonProps } from "./types";
import "./Button.scss";

export const Button = ({ children, onClick, className, disabled }: TButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`button ${className} ${disabled && "disabled"}`}>
      {children}
    </button>
  );
};
