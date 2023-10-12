import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import probadge from '../../assests/pro_badge.jpg'
import legendbadge from '../../assests/legend_badge.png'
import './ProfileBio.css'
const ProfileBio = ({ currentProfile }) => {
  var  {id}  = useParams();
console.log(id)

  const questionsList = useSelector((state) => state.questionsReducer);
 
    

  return (
    <div>
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

 {question.upVote.length ===1 &&(
        <img src={probadge} alt="probadge" className="probadge" title="Pro Badge"  />
 )} 
 
 {question.upVote.length ===1 &&(
 <img src={legendbadge} alt="legendbadge" className="legendbadge" title="Legend Badg1"  />
 ) }

{question.upVote.length <1 &&(
<p>User has no badge till now.</p>
 ) }
</div>

            ))}
         
        </div>
      </div>
    </div>
  );
};

export default ProfileBio;
