import React,{useState} from 'react';
import  styles from './DisplayResult.module.css';
import Result from '../Atom/Result';
export default function DisplayResult({results}){
    return (
        <div className={styles.display}>
        {results.map((result,id)=>{return<Result result={result} key={id}/>})}
        </div>
      
    )

}