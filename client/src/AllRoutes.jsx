import React from 'react'
import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import Questions from './Pages/Questions/Questions'
import { Routes, Route } from 'react-router-dom'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile';
import Tags from './Pages/Tags/Tags'
import About from './Pages/About/About'
import ForgetPass from './Pages/Auth/ForgetPass'
import PasswordReset from './Pages/Auth/PasswordReset'
import Rules from './components/Badges/Rules'


const AllRoutes = ({slideIn,handleSlideIn,styles,logoStyle}) => {
  return (
  
      <Routes >
       
     
        <Route path ='/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} styles ={styles} logoStyle={logoStyle} />}/>
        <Route  path ='/Auth' element={<Auth styles={styles} logoStyle={logoStyle} />}/>
        <Route  path ='/ForgetPass' element={<ForgetPass styles={styles} logoStyle={logoStyle} />}/>
        <Route exact path ='/PasswordReset/:id/:token' element={<PasswordReset styles={styles} logoStyle={logoStyle} />}/>
        <Route  path ='/AskQuestion' element={<AskQuestion styles={styles} />} />
        <Route  path ='/Questions' element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle} />}/>
        <Route  path ='/Questions/:id' element={<DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} styles ={styles} logoStyle={logoStyle}  />}/>
        <Route  path ='/Tags' element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} styles = {styles} logoStyle={logoStyle} />}/>
        <Route path ="/About" element={<About/>}/>
        <Route path = '/Users' element ={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle} />}/>
        <Route path ='/Users/:id' element ={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle}  />}/>
        <Route path ='/Rules' element ={<Rules slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle}  />}/>
      </Routes>
  
  )
}

export default AllRoutes
