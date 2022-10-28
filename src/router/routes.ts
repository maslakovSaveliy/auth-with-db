import { IRoute } from "../models/IRoute";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
export const publicRoutes: IRoute[] = [
  { path: "/register", element: Registration },
  { path: "/login", element: Login },
];
export const privateRoutes: IRoute[] = [
  { path: "/", element: Home },
  { path: "/profile", element: Profile },
];
