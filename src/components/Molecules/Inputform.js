import {React, useState } from "react";

export default function CreateTask({addTask}){
    const [input,setInput]= useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        if(!input)return;
        addTask(input);
        setInput("");

    }
   
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <input className="task-input"
        type='text' placeholder="Enter a task..."
        value={input} onChange={(e)=>setInput(e.target.value)}></input>
        </form>
        </div>
    )
}
