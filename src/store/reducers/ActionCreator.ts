import { FormValues } from "../../models/IFormValues";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { authSlice } from "./AuthSlice";
const { setAuth, setUser } = authSlice.actions;
export const registerUser =
  (
    inputs: FormValues,
    users: IUser[] | undefined,
    createUser: ({}: IUser) => void,
    isSucces: boolean
  ) =>
  async (dispatch: AppDispatch) => {
    if (!users?.find(({ username }) => username == inputs.username)) {
      localStorage.removeItem("auth");
      const user = {
        username: inputs.username,
        password: inputs.password,
      };
      await createUser(user);
      await dispatch(
        setUser(
          users?.find(
            ({ username, password }) =>
              username == inputs.username && password == inputs.password
          )
        )
      );
      dispatch(setAuth(true));
    } else {
      localStorage.setItem("auth", "false");
    }
  };
export const loginUser =
  (inputs: FormValues, users: IUser[] | undefined) =>
  (dispatch: AppDispatch) => {
    if (
      users?.find(
        ({ username, password }) =>
          username === inputs.username && password === inputs.password
      )
    ) {
      localStorage.removeItem("auth");
      dispatch(
        setUser(
          users?.find(
            ({ username, password }) =>
              username == inputs.username && password == inputs.password
          )
        )
      );
      dispatch(setAuth(true));
    } else {
      localStorage.setItem("auth", "false");
    }
  };
