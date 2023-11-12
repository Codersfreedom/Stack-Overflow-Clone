import axios from 'axios';
import React, { useState } from 'react'
import './Chatbot.css'
import { auth, firebase } from '../../firebase.js';
import {useTheme} from '../../context/ThemeContext';



const ChatInterface = ({ isOpen }) => {

  const [isVerified, setIsVerified] = useState(true);
  const [otp, setOtp] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhone, setPhone] = useState(false);
  const [verificationId, setVerificationId] = useState(null);

  //Theme section

  const { isDarkTheme } = useTheme();

  const componentStyles = {
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#333',
   
    
  };

  const handleSendOTP = async () => {

    if (phoneNumber === "" || phoneNumber.length < 10) {
      alert("Enter a Valid phone number.")
      return;
    }
    try {
      let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      const confirmation = await auth.signInWithPhoneNumber(phoneNumber, verify);
      setVerificationId(confirmation.verificationId);
      setPhone(true);
      // console.log(verificationId);
      alert("Otp Send");

    } catch (error) {
      // window.location.reload();
      console.error('Error sending OTP:', error);
    }
  }

  const handleVerifyOTP = async () => {
    if (otp === null) {
      alert("Enter a valid OTP");
      return;
    }

    try {
      const credential = await auth.signInWithCredential(firebase.auth.PhoneAuthProvider.credential(verificationId, otp))
      // console.log('User signed in:', credential.user);
      setIsVerified(true);
      const Msg = "Welcome to the Chatbot, How can i assist you today?"
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: Msg, isUser: false },
      ]);
    } catch (error) {
      alert("Wrong Code,enter a valid otp");
      console.error('Error verifying OTP:', error);
    }
  }



  // For chat interface
  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (!messages) return;
  };

  const sendMessageToOpenAI = async (message) => {

    try {
      const botResponse = await axios.post('https://stack-overflow-clone-api-wng3.onrender.com/chat', { prompt: message });
      // const botResponse = await axios.post('http://localhost:5000/chat', { prompt: message });

      // Adding bot Response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse.data.response, isUser: false },
      ]);

    } catch (error) {
      let Error = 'You are offline!';
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: Error, isUser: false },
      ]);
      console.log(error);
    }

  }

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Adding the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, isUser: true },
    ]);
    setInput('');

    // Sending the user's message to Backend API and get a response
    await sendMessageToOpenAI(input);

  };



  return (


    <div>

      <div className={`chat-interface ${isOpen ? 'open' : ''}`} >



        <div className="top">
          <h2>Chatbot</h2>
        </div>

        <div className='chat-container'style={componentStyles}>
          {!isVerified ?
            (
              <div className="verification-container">

                {!isPhone && (
                  <div>

                    <h2>Verify Your Phone Number to Use the bot</h2>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <div id="recaptcha-container"></div>
                    <button onClick={handleSendOTP}>Send OTP</button>

                  </div>
                )}
                {verificationId && (
                  <div>
                    <h2>Enter the OTP </h2>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={handleVerifyOTP}>Verify</button>

                  </div>


                )}

              </div>
            ) : (


              <div className='chatbox'>
                <div >



                  <div className='chat-messages'>


                    {messages.map((message, index) => (


                      <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}  >

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