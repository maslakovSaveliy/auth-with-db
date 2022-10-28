import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
interface AuthState {
  isAuth: boolean;
  account?: IUser | null;
}
const initialState: AuthState = {
  isAuth: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUser(state, action: PayloadAction<IUser | undefined>) {
      state.account = action.payload;
    },
  },
});
export default authSlice.reducer;
