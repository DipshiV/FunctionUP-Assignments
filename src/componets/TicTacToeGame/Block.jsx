import React from "react";
import style from './Block.module.css';
const Block=(props)=>{
    return(
        <div onClick={props.onClick} className={style.block}>
        <h5>{props.value}</h5>
        </div>
    )
}
export default Block;