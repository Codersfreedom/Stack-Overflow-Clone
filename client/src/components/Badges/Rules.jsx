import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import risingStar from '../../assests/rising_star.png';
import superStar from '../../assests/super_star.png'
import goldUser from '../../assests/gold user.png';
import superUser from '../../assests/trophy.png';
import './Badge.css';

const Rules = ({ slideIn, handleSlideIn, styles, logoStyle }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} styles={styles} logoStyle={logoStyle} />
      <div className="home-container-2" >
        <h1 className="rules-h1" >Instructions</h1>
        <p className="rules-p">
          Follow this rules to earn badges
        </p>

        <div className="badge-container">

          <div className="badges rising-star">
            <img src={risingStar} alt="risging-star" title='Rising Star' />
            Rising Star
          </div>
          <div className="badges super-star">
            <img src={superStar} alt="" title='Super Star' />
            Super Star
          </div>
          <div className="badges gold-user">
            <img src={goldUser} alt="" title='Gold User' />
            Gold User
          </div>
          <div className="super-user">
            <img src={superUser} alt=""  title='Super User' />
          Super User
          </div>
        </div>

        <div className="rules-list-container">
          
            <p>Rising Star: User will get this badge after getting 10 upvotes on a certain question.</p>
            <p>Super Star: User will get this badge after getting 50 upvotes on a certain question.</p>
            <p>Gold User: User will get this badge after posting total 10 answers .</p>
            <p>Super User: User will get this badge after posting total 20 answers.</p>
          
        </div>
      </div>
    </div>
  )
}

export default Rules
