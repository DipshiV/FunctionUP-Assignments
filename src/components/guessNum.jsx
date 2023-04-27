import { Fragment, useState } from "react";
import './guessNum.css';
let randNo = Math.floor(Math.random() * 100) + 1;
export default function GuessLuckyNumber() {
    const [GuessNumber, setGuessNumber] = useState('');
    const [Count, setCount] = useState(0);
    const [printMessage, setprintMessage] = useState('');
    function handlePrint() {
        if (randNo == GuessNumber) {
            setprintMessage("congratulations you guessed the right number in" + " " + Count + " " + "attempts");
        }
        else if (GuessNumber< randNo) {
            setprintMessage("you guessed a smaller number .")
            alert("you guessed a smaller number")
        } else if(GuessNumber > randNo){
            setprintMessage("you guessed a bigger number .")
            alert("you guessed a bigger number");
        }
        setCount(Count + 1);


    }
    function handleNumber(e) {
        setGuessNumber(e.target.value)

    }
    return (
        <Fragment>
            <h1>Guess The Lucky Number </h1>
            <br />
            <p>{setprintMessage}</p>
            <input value={GuessNumber} type='text' placeholder="Enter your Lucky Number...." onChange={handleNumber} />
            <button onClick={handlePrint}>Match Number</button>
            <p>Random number:{randNo}</p>
            <div><p>{printMessage}</p>

            </div>
        </Fragment>
    )
}