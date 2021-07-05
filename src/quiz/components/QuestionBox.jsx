import React, {useEffect, useState} from "react";
import {colorDiv} from '../script'
import "../style.css";
  
// Function to question inside our app
const QuestionBox = ({ question, options, selected}) => {
  const [answer, setAnswer] = useState(options);

  useEffect(()=>{
    const answerDiv = document.querySelectorAll(".answer")
    answerDiv.forEach(e=>{
        e.addEventListener("click",colorDiv)
    })
  })

  return (
    <div className="questionBox">
        <div className="question">{question}</div>
        {answer && answer.map((text, index) => (
          <div
              key={index}
              className="answer"
              onClick={()=>{
                    selected(text);
                  }}> {text}
         </div>
        ))}
    </div>
  )
};
  
export default QuestionBox;