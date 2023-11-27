import React from 'react'
import risingStar from '../../assests/rising_star.png';
import superStar from '../../assests/super_star.png'
import './Badge.css'

const Badge =  ({ upVote }) => {
  
  const count = upVote.length;
  




  return (


    <div className='badge'>
      {count >= 10 && (

        <img src={risingStar} alt="probadge" title='Rising Star' width="44" />
      )}
      {count >= 50 && (
        <img src={superStar} alt="probadge" title='Super Star' width="44" />
      )}
    </div>
  )
}

export default Badge
