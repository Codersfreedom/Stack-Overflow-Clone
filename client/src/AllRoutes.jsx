import React from 'react'
import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import Questions from './Pages/Questions/Questions'
import { Routes, Route } from 'react-router-dom'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile';

const AllRoutes = () => {
  return (
  
      <Routes>
       
        <Route  path ='/AskQuestion' element={<AskQuestion />}/>
        <Route path ='/' element={<Home/>}/>
        <Route  path ='/Home' element={<Home />}/>
        <Route  path ='/Auth' element={<Auth />}/>
        <Route  path ='/Questions' element={<Questions />}/>
        <Route  path ='/Questions/:id' element={<DisplayQuestion/>}/>
        <Route path = '/Users/' element ={<Users/>}/>
        <Route path ='/Users/:id' element ={<UserProfile/>}/>
      </Routes>
  
  )
}

export default AllRoutes
