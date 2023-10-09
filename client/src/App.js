
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import React, {  useEffect,useState } from 'react';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';

import ChatInterface from './components/ChatBot/ChatInterface';
import ChatIcon from './components/ChatBot/ChatIcon';






function App() {

  const dispatch = useDispatch()

  useEffect (() =>{
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  },[dispatch])

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, [dispatch]);

  const handleSlideIn  = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    
    }
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    
    setIsOpen(!isOpen);
    console.log(isOpen);
    // console.log("clicked")
  };

  return (
    <div className="App">
    <Router>
      <Navbar handleSlideIn={handleSlideIn} />
      <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <ChatIcon toggleChat={toggleChat} isOpen={isOpen}/>
        <ChatInterface isOpen={isOpen}  />
    </Router>

  </div>
  );
}

export default App;
