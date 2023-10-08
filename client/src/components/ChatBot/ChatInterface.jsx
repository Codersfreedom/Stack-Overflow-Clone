import axios from 'axios';
import React, { useState } from 'react'
import './Chatbot.css'
const ChatInterface = ({ isOpen }) => {

  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isPhone, setPhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');


  const toggleChat = () => {
    console.log('Chat icon clicked')
    setIsChatVisible(!isChatVisible);
    console.log('isvisiable', isChatVisible);
  };

  const handlePhoneNumberSubmit = () => {
    if (phoneNumber) {
      setPhone(true);
    } else {
      alert('Please enter a valid phone number.');
    }
  };


  const handleVerification = () => {
    // Implement your OTP verification logic here
    // For simplicity, we'll consider it verified if the OTP is '123456'
      setIsVerified(true)
      const WelcomeMsg = "Welcome! How can I assist you today?";
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: WelcomeMsg, isUser: false },
      ]);
    
    // if (otp === '123456') {
    //   setIsVerified(true);
    //   // Simulate a welcome message from the chatbot
    //   
    // } else {
    //   alert('Invalid OTP. Please try again.');
    // }
  };


  // For chat interface
  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (!messages) return;
  };

  const sendMessageToOpenAI = async (message) => {

    try {
      const botResponse = await axios.post('http://localhost:5000/chat', { prompt: message });

      // Add bot Response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse.data.response, isUser: false },
      ]);
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

    // Send the user's message to Backend API and get a response

    await sendMessageToOpenAI(input);



  };





  return (


    <div>

      <div className={`chat-interface ${isOpen ? 'open' : ''}`}>



        <div className="top">
          <h2>Chatbot</h2>
        </div>

        <div className={`chat-container ${isChatVisible ? 'visible' : ''}`}>
          {!isVerified ?
            (
              <div className="verification-container">

                <h2>OTP Verification</h2>
                {!isPhone ? (
                  <div>

                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <button onClick={handlePhoneNumberSubmit}>Submit</button>


                  </div>
                )


                  : (

                    <div>
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      <button onClick={handleVerification}>Verify</button>

                    </div>
                  )}

              </div>
            ) : (


              <div className='chatbox'>
                <div >



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
            )}

        </div>

      </div>

    </div>
  );
}

export default ChatInterface