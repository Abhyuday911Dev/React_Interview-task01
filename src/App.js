import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Cars from "./Components/Cars";
import Dash from "./Components/Dash";
import Home from "./Components/Home";
import Options from "./Components/Options";
import Profile from "./Components/Profile";
import "./Style/App.css";

const App = () => {
  return (
    <div id="main">
      <Routes>
        <Route path={"/"} element={<Home />}>
          <Route path={"/"} element={<Dash />}></Route>
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path={"/cars"} element={<Cars />}></Route>
          <Route path="/options" element={<Options />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
