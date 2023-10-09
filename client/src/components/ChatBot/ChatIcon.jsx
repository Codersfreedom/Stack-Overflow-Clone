import React from 'react'
import './ChatIcon.css'
const ChatIcon = ({ toggleChat, isOpen }) => {

  return (
    <div className='chatIcon'>
      <button className={`chatbot-toggler ${isOpen ? 'open' : ''}`} onClick={toggleChat} >
       
          <span className="material-symbols-rounded">mode_comment</span>
       

          <span className="material-symbols-rounded">close</span>
       














      </button>
    </div>
  )
}

export default ChatIcon
