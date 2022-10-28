import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { useAppSelector } from "./hooks/redux";
function App() {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return (
    <BrowserRouter>
      <div>
        {isAuth && <Navbar />}
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}
export default App;
