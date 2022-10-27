import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import cl from "./MyButton.module.css";
interface ButtonProps {
  [key: string]: string | number | boolean;
}
type ButtonPropsWithChildren =
  | ButtonProps
  | PropsWithChildren<HTMLAttributes<HTMLButtonElement>>;
const MyButton: FC<ButtonPropsWithChildren> = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.MyButton}>
      {children}
    </button>
  );
};
export default MyButton;
