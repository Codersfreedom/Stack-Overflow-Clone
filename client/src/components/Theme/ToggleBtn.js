import React from "react";
import {  useTheme } from "../../context/ThemeContext"
import "./ToggleBtn.css";

function ToggleBtn() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <span className="material-symbols-outlined">dark_mode</span>
      ) : (
        <span className="material-symbols-outlined">light_mode</span>
      )}
    </button>
  );
}

export default ToggleBtn;
