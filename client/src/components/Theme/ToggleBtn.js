import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function ToggleBtn () {

    const { toggleTheme } = useTheme();
    console.log("clicked")


  return (
    <div className='dark_mode'>
        <button className='dark_mode_input' id='darkmode-toggle'onClick={toggleTheme}>
        Toggle Theme
        </button>
      
    </div>
  )
}

export default ToggleBtn
