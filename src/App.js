import React from "react";
import { Link } from "react-router-dom";
import "./Style/App.css";

const App = () => {
  return (
    <div id="main">
      <div className="left">
        <div className="leftCircle"></div>
        <div className="leftInput">
          <input type="text" />
        </div>
        <a href="#">Dashboard</a>
        <a href="#">Dashboard</a>
        <a href="#">Dashboard</a>
        <a href="#">Dashboard</a>
        <a href="#">Dashboard</a>
        <hr className="lhr" />
        <a href="#">Dashboard</a>
        <a href="#">Dashboard</a>
      </div>
      <div className="right">
        <div className="rtop">
          <h1>Dashboard</h1>
          <div className="rtopright">
            <div className="prodiv">
              <div className="lprodiv">
                <div className="prodivcirc"></div>
                <h3>John Doe</h3>
              </div>
              <div className="rprodiv"></div>
            </div>
          </div>
        </div>
        <div className="rbottom">
          <div className="rbottleft">
            <div className="fourcomp">
              <div id="fourleft">
                <div className="fourltop"></div>
                <div className="fourlbott"></div>
              </div>
              <div id="charright">
                <div id="halffour"></div>
                <div id="halffour"></div>
              </div>
            </div>
            <div className="fourbott"></div>
          </div>
          <div className="rbottreft"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
