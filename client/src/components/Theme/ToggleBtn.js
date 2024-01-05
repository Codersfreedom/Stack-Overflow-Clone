import React from "react";
import {  useTheme } from "../../context/ThemeContext"
import "./ToggleBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faToggleOn ,faToggleOff} from "@fortawesome/free-solid-svg-icons";


function ToggleBtn() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div
      className="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <span className="material-symbols-outlined"> <FontAwesomeIcon icon={faToggleOn} /></span>
      ) : (
        <span className="material-symbols-outlined"><FontAwesomeIcon icon={faToggleOff} /></span>
      )}
    </div>
  );
}

export default ToggleBtn;
