import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import React, { useEffect, useState } from "react";
import { fetchAllQuestions } from "./actions/question";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./actions/users";
import { useTheme } from "./context/ThemeContext";
import ChatInterface from "./components/ChatBot/ChatInterface";
import ChatIcon from "./components/ChatBot/ChatIcon";
import ToastContainer from "./components/Toast";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const dispatch = useDispatch();


  const { isDarkTheme } = useTheme();

  const componentStyles = {
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#333',
  
    
    
  };
  const logoStyles ={
    filter: isDarkTheme ? 'invert(1)' : 'none',
  }

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);


  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, [dispatch]);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    //console.log(isOpen);
    // console.log("clicked")
  };

  return (
    <div className="App" style={componentStyles} >
      <HashRouter >
        
        <Navbar handleSlideIn={handleSlideIn} styles ={componentStyles} logoStyle ={logoStyles}/>
        <ToastContainer/>
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} styles={componentStyles} logoStyle ={logoStyles}  />
        <ChatIcon toggleChat={toggleChat} isOpen={isOpen} />
        <ChatInterface isOpen={isOpen} />
       
      </HashRouter>
    </div>
  );
}

export default App;
