import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { FormValues } from "../models/IFormValues";
import { userAPI } from "../services/UserService";
import { loginUser } from "../store/reducers/ActionCreator";
const Login: FC = () => {
  const [inputs, setInputs] = useState<FormValues>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { data: users } = userAPI.useFetchAllUsersQuery(null);
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(loginUser(inputs, users));
    setInputs({ username: "", password: "" });
    setIsLoading(false);
  };
  return (
    <div>
      <form onSubmit={login}>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          back
        </button>
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
        {localStorage.getItem("auth") == "false" && (
          <p style={{ color: "red" }}>wrong data</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
