import React,{Fragment} from 'react'
import style from './Result.module.css'
export default function({result}){
    return(
        <div className={style.result}>
       {result.state_name}
        </div>
    )
}