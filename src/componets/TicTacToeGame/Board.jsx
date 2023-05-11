import React,{useState} from "react";
import styles from './Board.module.css';
import Block from "./Block";
const Board=()=>{

    const[state,setState] = useState(Array(9).fill(null));
    const[isXTurn, setIsXturn] = useState(true);
    console.log("state",state);

    const winner=()=>{
       const win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i of win){
        const [a,b,c] = i;
        if(state[a] !==null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }
    return false;
    };

    const isWinner = winner();

    const handleClick=(index)=>{
        if(state[index]!== null){
            return;
        }
        const cpState=[...state]
        cpState[index]= isXTurn?"X":"0";
        setState(cpState);
        setIsXturn(!isXTurn)
        console.log("clicked",index);
    }

    const handlestart=()=>{
        setState(Array(9).fill(null));
    }

    return(
    <div className={styles.container}>
   {isWinner ?(<><h3>{isWinner} won the game </h3><button onClick={handlestart}>Start Again</button> </>):
    (<>
    <h1>Player {isXTurn? "A" :"B"} Please start </h1>

    <div className={styles.row}>
    <Block onClick={()=> handleClick(0)} value={state[0]}/>
    <Block onClick={()=> handleClick(1)} value={state[1]}/>
    <Block onClick={()=> handleClick(2)} value={state[2]}/>
    </div>
    <div   className={styles.row}>
    <Block onClick={()=> handleClick(3)} value={state[3]}/>
    <Block onClick={()=> handleClick(4)} value={state[4]}/>
    <Block onClick={()=> handleClick(5)} value={state[5]}/></div>
    <div className={styles.row}>
    <Block onClick={()=> handleClick(6)} value={state[6]}/>
    <Block onClick={()=> handleClick(7)} value={state[7]}/>
    <Block onClick={()=> handleClick(8)} value={state[8]}/></div>
    <div className={styles.btn}><button onClick={handlestart}>clear Game</button></div>
    </>)}
   
    </div>
)
}
export default Board;