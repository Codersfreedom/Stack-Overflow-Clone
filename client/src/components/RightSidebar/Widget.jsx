import React from 'react'
import './RightSidebar.css'
import comment from '../../assests/comment-alt-solid.svg'
import pen from '../../assests/pen-solid.svg'
import blacklogo from '../../assests/blacklogo.svg'
import { useTheme } from '../../context/ThemeContext'

const Widget = () => {

  const { isDarkTheme } = useTheme();

  const componentStyles = {
    backgroundColor: isDarkTheme ? '#333' : '',
    color: isDarkTheme ? '#fff' : '#333',
   
    
  };

  const logoStyles ={
    filter: isDarkTheme ? 'invert(1)' : 'none',
  }
  return (
    <div className='widget' >
      <h4 style={componentStyles}>The Overflow Blog</h4>
      <div className="right-sidebar-div-1"style={componentStyles} >
        <div className="right-sidebar-div-2"style={componentStyles} >
          <img src={pen} alt="pen" width='18' style={logoStyles} />
          <p >Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="right-sidebar-div-2"style={componentStyles} >
          <img src={pen} alt="pen" width='18'style={logoStyles} />
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <h4 style={componentStyles}>Featured on blog</h4>
      <div className="right-sidebar-div-1"style={componentStyles}>
        <div className="right-sidebar-div-2"style={componentStyles}>
          <img src={comment} alt="pen" width='18'style={logoStyles} />
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="right-sidebar-div-2"style={componentStyles}>
          <img src={comment} alt="pen" width='18'style={logoStyles} />
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <h4 style={componentStyles}>The Overflow Blog</h4>
      <div className="right-sidebar-div-1"style={componentStyles}>
        <div className="right-sidebar-div-2"style={componentStyles}>
          <img src={blacklogo} alt="pen" width='18'style={logoStyles} />
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>

      </div>

      <h4 style={componentStyles}>The Overflow Blog</h4>
      <div className="right-sidebar-div-1"style={componentStyles}>
        <div className="right-sidebar-div-2"style={componentStyles}>
          <p>24</p>
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="right-sidebar-div-2"style={componentStyles}>
          <p>12</p>
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Widget
