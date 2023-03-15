import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div className="left">
        <div className="leftCircle"></div>
        <div className="leftInput">
          <input type="text" />
        </div>
        <Link to={"/"} href="#">
          Dashboard
        </Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/Cars"}>Cars</Link>
        <Link to={"/profile"}>Profile</Link>

        <Link to={"/"}>Dashboard</Link>
        <hr className="lhr" />
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/"}>Dashboard</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
