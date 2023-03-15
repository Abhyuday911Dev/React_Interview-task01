import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dash = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="right">
        <div className="rtop">
          <h1>Dashboard</h1>
          <div className="rtopright">
            <div onClick={()=> navigate("/options")} className="prodiv">
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
    </>
  )
}

export default Dash