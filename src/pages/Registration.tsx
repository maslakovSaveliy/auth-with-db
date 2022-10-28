import React, { FC, useState } from "react";
import { userAPI } from "../services/UserService";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { FormValues } from "../models/IFormValues";
import { registerUser } from "../store/reducers/ActionCreator";
const Registration: FC = () => {
  const [inputs, setInputs] = useState<FormValues>({
    username: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: users } = userAPI.useFetchAllUsersQuery(null);
  const [createUser, { isSuccess }] = userAPI.useCreateUserMutation({});
  const reg = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await dispatch(registerUser(inputs, users, createUser, isSuccess));
    setInputs({ username: "", password: "" });
    setIsLoading(false);
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
