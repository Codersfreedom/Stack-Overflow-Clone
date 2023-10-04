import React from 'react'
import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import Questions from './Pages/Questions/Questions'
import { Routes, Route } from 'react-router-dom'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile';


const AllRoutes = ({slideIn,handleSlideIn}) => {
  return (
  
      <Routes>
       
        <Route  path ='/AskQuestion' element={<AskQuestion />}/>
        <Route path ='/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
        <Route  path ='/Home' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>

        <Route  path ='/Auth' element={<Auth />}/>
        <Route  path ='/Questions' element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
        <Route  path ='/Questions/:id' element={<DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn}  />}/>
        <Route path = '/Users' element ={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
        <Route path ='/Users/:id' element ={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
      </Routes>
  
  )
}

export default AllRoutes
