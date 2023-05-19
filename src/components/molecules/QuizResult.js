import React from 'react'

function QuizResult(props) {

    return (
        <>
            <div className='show-score'>
                <h5 id='failed'>Oops! you have failed.</h5>
                {props.score} out of  {props.totalScore} correct
            </div>
            <button id="next-btn" onClick={props.tryAgain}>Restart Test</button>
        </>
    )
}

export default QuizResult