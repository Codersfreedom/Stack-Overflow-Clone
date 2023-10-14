import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from "./QuestionDetails"

const DisplayQuestion = ({slideIn,handleSlideIn,styles,logoStyle}) => {
  return (
       
    <div className='home-container-1'>
<LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle}  />
    <div className="home-container-2">
<QuestionDetails styles = {styles} logoStyle={logoStyle}/>
      
<RightSidebar styles={styles} />
   
  
    </div>
    
 </div>
  )
}

export default DisplayQuestion
