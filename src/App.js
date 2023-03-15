import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import "./Style/App.css";

const App = () => {
  return (
    <div id="main">
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/profile"} element={<Profile />}></Route>
        
      </Routes>
    </div>
  );
};

export default App;
