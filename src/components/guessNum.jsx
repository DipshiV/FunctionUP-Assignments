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
            <h1>Guess The Lucky Number  between 1 to 100</h1>
            <br />
            <input value={GuessNumber} type='Number' placeholder="Enter your Lucky Number...." onChange={handleNumber} />
            <button onClick={handlePrint}>Match Number</button>
            <div><p>{printMessage}</p>
            </div>
        </Fragment>
    )
}