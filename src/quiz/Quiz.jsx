import React, { useEffect, useState} from "react";
import "./style.css";
import {questionAPI} from './questions';
import QuestionBox from './components/QuestionBox';
import Result from './components/ResultBox';
  

const Quiz=()=> {
  
    const [questionBank,setQuestions]=useState(null);
    const [score,setScore]=useState(0)
    const [currQues,setCurrQues]=useState(0)
    const [value,setValue]=useState(null)
  
  // Function to get question from ./question
  const getQuestions = () => {
    questionAPI().then(question => {
      setQuestions(question);
    });
  };
  
  // Set state back to default and call function
  const playAgain = () => {
    getQuestions();
    setScore(0);
    setCurrQues(0);
  };
  
  // Function to compute scores
  const computeAnswer = (correctAns) => {
    if (value === correctAns) {
      setScore(score+1)
    }
    if(currQues<5){
        setCurrQues(currQues+1)
    }else{
        setCurrQues(5)
    }
  };
  const changeValue=(text)=>{
      setValue(text)
  }
  
  // componentDidMount function to get question
  useEffect(()=>{
      getQuestions()
  },[])

    return (
    <div className="container">
      <div className="title">
        QuizOn
      </div>
  
      {questionBank && questionBank.length > 0 && 
        currQues < 5 && 
       <QuestionBox question={questionBank[currQues].question} options={questionBank[currQues].answers} key={questionBank[currQues].questionId}
            selected={changeValue}/>

       }
       {currQues<4 && <button onClick={()=>computeAnswer(questionBank[currQues].correct)}>Next</button>}
       {currQues===4 && <button onClick={()=>computeAnswer(questionBank[currQues].correct)}>Submit</button>}
  
      {
        currQues === 5
          ? (<Result score={score}
            playAgain={playAgain}/>)
          : null
      }
  
    </div>
    )
}

export default Quiz