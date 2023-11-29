import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assests/Globe.svg";

const LeftSidebar = ({ slideIn, handleSlideIn,styles,logoStyle }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

const combinedStyle = {
    ...(slideIn ? slideInStyle : slideOutStyle),
    ...styles, 
  };
  return (
    <div
      className="left-sidebar"
      style={combinedStyle} 
      
    >
      <nav className="side-nav" style={styles}>
        <button onClick={() => handleSlideIn()} className="nav-btn">
          <NavLink to="/" className="side-nav-links " activeclassname="active" style={styles}>
            <p>Home</p>
          </NavLink>
        </button>
         <div className="side-nav-div" >
          <div>
            <p>PUBLIC</p>
          </div>  
          <button onClick={() => handleSlideIn()} className="nav-btn" >
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
              style={styles}
            >
              <img src={Globe} alt="Globe" style={logoStyle} />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px",...styles}}
            >
              <p>Tags</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" ,...styles}}
            >
              <p>Users</p>
            </NavLink>
          </button>

          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Rules"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" ,...styles}}
            >
              <p>Instructions</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
