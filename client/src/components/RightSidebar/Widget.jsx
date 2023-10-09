import React from 'react'
import './RightSidebar.css'
import comment from '../../assests/comment-alt-solid.svg'
import pen from '../../assests/pen-solid.svg'
import blacklogo from '../../assests/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width='18' />
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width='18' />
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <h4>Featured on blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width='18' />
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width='18' />
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" width='18' />
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>

      </div>

      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>24</p>
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>12</p>
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Widget
