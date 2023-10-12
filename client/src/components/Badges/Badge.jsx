import React, { useState } from 'react'
import probadge from '../../assests/pro_badge.jpg'
import legendbadge from '../../assests/legend_badge.png'


const Badge =  ({ upVote }) => {
  
  const count = upVote.length;
  const [Badge, setBadge] = useState("pro");




  return (


    <div className='badge'>
      {count >= 1 && (

        <img src={probadge} alt="probadge" title='Pro Badge' width="37" />
      )}
      {count >= 50 && (
        <img src={legendbadge} alt="probadge" title='Legend Badge' width="37" />
      )}
    </div>
  )
}

export default Badge
