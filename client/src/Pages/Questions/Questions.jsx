import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
const Questions = ({slideIn,handleSlideIn,styles,logoStyle}) => {
  return (
    <div className='home-container-1'>

      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle} />
      <div className="home-container-2">
        <HomeMainbar/>
        <RightSidebar styles={styles}/>
      </div>
      
    </div>
  )
}

export default Questions

