
import React, { useState } from 'react'
import './Chatbot.css'
const ChatInterface = ({ isOpen }) => {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  // const [botMessages,setbotMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (!messages) return;
  };

  const sendMessageToOpenAI = async (message) => {
    const apiKey = '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';
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        })
      }
      await fetch(endpoint, requestOptions).then(res => res.json()).then(data => {
        data.choices[0].message.content.trim()
        let newMessage = data.choices[0].message.content.trim();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: newMessage, isUser: false },]);
      }).catch(() =>{
        let erorr = "Oops! Something wrong happened, please try again."
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: erorr, isUser: false },]);
      })


    } catch (error) {
      console.log(error);
    }



  }

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, isUser: true },
    ]);
    setInput('');

    // Send the user's message to OpenAI and get a response

    await sendMessageToOpenAI(input);


    //   // Add the bot's response to the chat
    //   setMessages([...messages, { text: botResponse, isUser: false }]);
  };





  return (
    <div className={`chat-interface ${isOpen ? 'open' : ''}`}>
      <div className="top">
        <h2>Chatbot</h2>
      </div>
      <div className='chatbox'>



        <div className='chat-messages'>


          {messages.map((message, index) => (


            <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`} >

              {message.text}

            </div>

          ))}


        </div>
      </div>
      <div className="chat-input">
        <textarea
          spellCheck="false" required
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>

    </div>

  )
}

export default ChatInterface