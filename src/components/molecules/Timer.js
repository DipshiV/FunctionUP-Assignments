import React, { useEffect, useState } from "react";

const Timer = ({ setShowResult, questionNumber }) => {
    const [timer, setTimer] = useState(120);
    useEffect(() => {
        if (timer === 0)
            return setShowResult(true)
        const interval = setInterval(() => {
            setTimer((previous) => previous - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [setShowResult, timer]);

    useEffect(() => {
        setTimer(120);
    }, [questionNumber]);
    return <div className="timer">Timer:{timer}</div>;
};

export default Timer;