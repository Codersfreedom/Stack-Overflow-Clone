import React from 'react'
import './ChatIcon.css'
const ChatIcon = ({toggleChat, isOpen}) => {
    console.log("click")
  return (
    <body>
    <button className={`chatbot-toggler ${isOpen ? 'open' : ''}` } onClick={toggleChat} >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
    </body>
  )
}

export default ChatIcon
