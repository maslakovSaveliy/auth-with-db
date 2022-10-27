import { IRoute } from "../models/IRoute";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Success from "../pages/Success";
export const publicRoutes: IRoute[] = [
  { path: "/register", element: Registration },
  { path: "/login", element: Login },
];
export const privateRoutes: IRoute[] = [{ path: "/", element: Success }];
