import React, { useState, useEffect } from 'react'
import { QuizData } from '../../Data/QuizData';
import Timer from '../molecules/Timer';
import QuizResult from '../molecules/QuizResult';
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const changeQuestion = () => {
        updateScore();
        setCurrentQuestion(currentQuestion + 1);
        setClickedOption(0);

    }
    const finishQuiz = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        }
        else {

            setShowResult(true)
        }
    };
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 2);
        }


    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    return (
        <div>
            <p className="heading-txt">Quiz APP</p>
            <p className="text">To pass this quiz you have to score 12 marks out of 20.</p>
            <div className="container">

                {showResult ? (
                    <>
                        {score < 12 ? <QuizResult score={score} totalScore={2 * (QuizData.length)} tryAgain={resetAll} /> : <h2 id="greet">Congratulations, you have passed this quiz</h2>}

                    </>
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption == i + 1 ? "checked" : null
                                            }`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>  <Timer setShowResult={setShowResult} questionNumber={QuizData.length} />
                        {currentQuestion == QuizData.length - 1 ?
                            <input type="button" value="Submit" id="next-button" onClick={finishQuiz} /> :
                            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />}
                    </>)}
            </div>
        </div>
    )
}

export default Quiz;