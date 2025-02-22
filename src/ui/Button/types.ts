import { ReactNode } from "react";

export type TButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
  type?: HTMLButtonElement["type"];
};
