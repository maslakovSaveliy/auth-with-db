import React, { FC } from "react";
import { useAppDispatch } from "../hooks/redux";
import { authSlice } from "../store/reducers/AuthSlice";
const Navbar: FC = () => {
  const { setUser, setAuth } = authSlice.actions;
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(setUser(undefined));
    dispatch(setAuth(false));
  };
  return (
    <div>
      <div>Logo</div>
      <div>Home</div>
      <div>Profile</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Navbar;
