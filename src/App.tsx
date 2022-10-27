import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar";
function App() {
  localStorage.removeItem("auth");
  console.log(localStorage.getItem("auth"));
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}
export default App;
