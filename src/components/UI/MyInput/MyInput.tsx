import React, { FC } from "react";
import { ChangeHandler, RefCallBack } from "react-hook-form";
import cl from "./MyInput.module.css";
interface InputProps {
  [key: string]: string | number | ChangeHandler | RefCallBack | boolean;
}
const MyInput: FC<InputProps> = ({ ...props }) => {
  return <input className={cl.MyInput} {...props} />;
};
export default MyInput;
