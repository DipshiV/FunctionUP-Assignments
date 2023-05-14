
import React from 'react';
export default function ToDoList({todos, index, completeTask, deleteTask }){
    
    return (
        <div
            className="task"
            style={{ textDecoration: todos.completed ? "line-through" : "" }}
        >
            {todos.title}
            <button style={{ background: "red",float:"right",width:"20px"}} onClick={() => deleteTask(index)}>x</button>
            <button  style={{ background: "blue"  ,float:"right" ,borderRadius:"5px" ,height:"21px" ,marginRight:"10px",width:"80px"}} onClick={() => completeTask(index)}>Complete</button>
           

        </div>
    );
}