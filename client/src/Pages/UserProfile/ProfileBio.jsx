import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import risingStar from '../../assests/rising_star.png';
import superStar from '../../assests/super_star.jpg'
import goldUser from '../../assests/gold user.png';
import superUser from '../../assests/trophy.png';
import './ProfileBio.css'
import UserLocation from "../UserLocation/UserLocation";

const ProfileBio = ({ currentProfile }) => {
  const { id } = useParams();
  const currentUser = useSelector((state) => state.currentUserReducer);

  const questionsList = useSelector((state) => state.questionsReducer);

  const totalAnswers = calculateTotalAnswers(questionsList.data, id);

  function calculateTotalAnswers(questions, id) {
    let totalAnswers = 0;
    questions.forEach((question) => {
      totalAnswers += question.answer.filter((ans) => ans.userId === id).length;
    });
    return totalAnswers;
  }



  return (
    <>
    <div className="user-data-container">
      <div className="user-data" >
        <div>
          {currentProfile?.tags.length !== 0 ? (
            <>
              <h4>Tags watched</h4>
              {currentProfile?.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </>
          ) : (
            <p>0 tags watched</p>
          )}
        </div>
        <div>
          {currentProfile?.about ? (
            <>
              <h4>About</h4>
              <p>{currentProfile?.about}</p>
            </>
          ) : (
            <p>No bio found</p>
          )}

          <div className="Badges">

            <h4>Earned Badges</h4>

            {questionsList.data
              .filter((question) => question.userId === id)
              .map((question) => (
                <div key={question._id} className="badge_section">

                  {question.upVote.length >= 10 && (
                    <img src={risingStar} alt="risingstar" className="probadge" title="Rising Star" />
                  )}

                  {question.upVote.length >= 50 && (
                    <img src={superStar} alt="legendbadge" className="legendbadge" title="Super Star" />
                  )}




                  {question.upVote.length < 10 && (
                    <p>User has no badge till now.</p>
                  )}
                </div>
              ))}

            <div className="Total_answer">

              {totalAnswers > 0 && totalAnswers >= 20 && (
                <div className=" image-container ">
                  <img src={goldUser} alt="golduser" title="Gold User" />


                </div>
              )}
              {totalAnswers > 0 && totalAnswers >= 100 && (
                <div className=" image-container ">

                  <img src={superUser} alt="superuser" title="Super User" />

                </div>
              )}





            </div>


          </div>




        </div>
      </div>
 {currentUser?.result._id === id?(
     <div className="user-location-container">


  <h2>Your Current Location</h2>

 
<UserLocation/>

</div>

  ):(
    <div className="user-location-container">


  <h2>Login to see your location</h2>
</div>
  )

  }
 

    </div>



</>

  );
};



export default ProfileBio;
