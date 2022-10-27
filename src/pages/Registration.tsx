import React, { FC, useState } from "react";
import { userAPI } from "../services/UserService";
import { IUser } from "../models/IUser";
import { Link } from "react-router-dom";
import { authSlice } from "../store/reducers/AuthSlice";
import { useAppDispatch } from "../hooks/redux";
interface FormValues {
  username?: string | undefined;
  password?: string | undefined;
}
const Registration: FC = () => {
  const [inputs, setInputs] = useState<FormValues>({
    username: "",
    password: "",
  });
  const { setAuth } = authSlice.actions;
  const dispatch = useAppDispatch();
  const { data: users } = userAPI.useFetchAllUsersQuery(null);
  const [createUser, {}] = userAPI.useCreateUserMutation({});
  const reg = async (e: React.FormEvent) => {
    e.preventDefault();
    if (users?.find(({ username }) => username === inputs.username)) {
      localStorage.setItem("auth", "false");
    } else {
      await createUser({
        username: inputs?.username,
        password: inputs?.password,
      });
      localStorage.setItem("auth", "true");
      dispatch(setAuth(true));
    }
    console.log(localStorage.getItem("auth"));
    setInputs({ username: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={reg}>
        <label>
          Username:
          <input
            type="text"
            value={inputs?.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, username: e.target.value })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={inputs?.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, password: e.target.value })
            }
          />
        </label>
        <Link to="/login">Have an account?</Link>
        {localStorage.getItem("auth") == "false" && (
          <p style={{ color: "red" }}>already reg</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Registration;
