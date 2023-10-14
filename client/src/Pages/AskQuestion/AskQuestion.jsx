import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './AskQuestion.css'
import { askQuestion } from "../../actions/question";



const AskQuestion = ({styles}) => {
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionBody, setQuestionBody] = useState("");
    const [questionTags, setQuestionTags] = useState("");
  
    const dispatch = useDispatch();
  
  const User = useSelector((state) => state.currentUserReducer);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({questionTitle,questionBody,questionTags})
        if (User) {
          if (questionTitle && questionBody && questionTags) {
            dispatch(
              askQuestion(
                {
                  questionTitle,
                  questionBody,
                  questionTags,
                  userPosted: User.result.name,
                },
                navigate
              )
            );
          } else alert("Please enter all the fields");
        } else alert("Login to ask question");
      };
    
      const handleEnter = (e) => {
        if (e.key === "Enter") {
          setQuestionBody(questionBody + "\n");
        }
      };
    
  return (
    <div className="ask-question" style={styles} >
    <div className="ask-ques-container" style={styles}>
      <h1>Ask a public Question</h1>
      <form onSubmit={handleSubmit}>
        <div className="ask-form-container" style={styles}>
          <label htmlFor="ask-ques-title" >
            <h4>Title</h4>
            <p>
              Be specific and imagine you’re asking a question to another
              person
            </p>
            <input
              type="text"
              id="ask-ques-title"
              onChange={(e) => {
                setQuestionTitle(e.target.value);
              }}
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?" 
              style={styles}
            />
          </label>
          <label htmlFor="ask-ques-body">
            <h4>Body</h4>
            <p>
              Include all the information someone would need to answer your
              question
            </p>
            <textarea
              name=""
              id="ask-ques-body"
              style={styles}
              onChange={(e) => {
                setQuestionBody(e.target.value);
              }}
              cols="30"
              rows="10"
              onKeyPress={handleEnter}
            ></textarea>
          </label>
          <label htmlFor="ask-ques-tags">
            <h4>Tags</h4>
            <p>Add up to 5 tags to describe what your question is about</p>
            <input
              type="text"
              id="ask-ques-tags"
              style={styles}
              onChange={(e) => {
                setQuestionTags(e.target.value.split(" "));
              }}
              placeholder="e.g. (xml typescript wordpress)"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Reivew your question"
          className="review-btn"
        />
      </form>
    </div>
  </div>
);
};

export default AskQuestion;
