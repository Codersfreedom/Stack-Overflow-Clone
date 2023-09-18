import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'

import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'

const HomeMainbar = () =>{
const location = useLocation()

const user = 1;
    const navigate = useNavigate()

const checkAuth =()=>{
  if(user===null){
    alert("Login or signup to ask a question")
    navigate('/Auth')
  }
  else{
    navigate('/AskQuestion')
  }
}
const questionsList = useSelector(state =>state.questionsReducer)
console.log(questionsList);
//var questionsList =[{

//   _id:1,
//   upVotes:3,
//   downVotes:3,
//   noOfAnswer:2,
//   questionTitle:"what is a function",
//   questionBody:"Help me",
//   questionTags:["Java","node js","react"],
//   userPosted:"sam",
//   userId:1,
//   askedOn:"mar 1",
//   answer:[{
//     answerBody:"Answer",
//     userAnswered:"ram",
//     answeredOn:"jan 23",
//     userId:2,

//   }]
// }]

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div >
        {
          questionsList.data == null ?
          <h1>Loading...</h1>:
          <>
          <p>{questionsList.data.length} questions found</p>
         <QuestionList questionsList ={questionsList.data} />
       
        
          </>
        }
      </div>
    </div>
  )

      }
export default HomeMainbar
