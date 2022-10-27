import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { IRoute } from "../models/IRoute";
import { privateRoutes, publicRoutes } from "../router/routes";
const AppRouter: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route: IRoute, index: number) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/register" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route: IRoute, index: number) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
export default AppRouter;
