import React from 'react'
import './ChatIcon.css'
const ChatIcon = ({toggleChat, isOpen}) => {
    console.log("click")
  return (
    <body>
    <button class={`chatbot-toggler ${isOpen ? 'open' : ''}` } onClick={toggleChat} >
        <span class="material-symbols-rounded">mode_comment</span>
        <span class="material-symbols-outlined">close</span>
      </button>
    </body>
  )
}

export default ChatIcon
