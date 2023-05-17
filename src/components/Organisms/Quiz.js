import React, { useState,useEffect } from 'react'
import { QuizData } from '../../Data/QuizData';
import QuizResult from '../molecules/QuizResult';
function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
//     const [seconds,setSeconds]=useState(0);
//     const [minutes,setMinutes] = useState(0);
//     var timer;
//     useEffect(()=>{
//         timer=setInterval(()=>{
//             setSeconds(seconds+1);
//             if(seconds === 59){
//                 setMinutes(minutes+1);
//                 setSeconds(0);
//             }
//         },1000)
//     return ()=> clearInterval(timer);
// });
    
    const changeQuestion = ()=>{
        if(minutes<10){
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    else{
        resetAll();
    }
    }
    const updateScore=()=>{
       
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+2);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
        setSeconds(0);
        setMinutes(0);
    }
  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={2*(QuizData.length)} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
          
            </>)}
        </div>
    </div>
  )
}

export default Quiz;