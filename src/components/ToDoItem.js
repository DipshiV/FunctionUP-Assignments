import React from 'react';
import { useDispatch } from 'react-redux';
import ReactSwitch from 'react-switch'
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
const ToDoItem = ({ id, name, status }) => {
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(toggleComplete({ id, status: 'completed'}));
    };
    const handleDelete = () => {
        dispatch(deleteTodo({ id }));
    };
    return (
        <li >
            <div style={{border:"10px"}} >
                <span  style={{ textDecoration: status=='completed' && 'line-through' }}>
                     <ReactSwitch
                        type='checkbox'
                        onChange={handleComplete}
                        checked={ status=='completed'}
                    />
                    {name}
                </span>
                <button  style={{margin:"20px 20px",width:"90px" ,padding:"6px" ,color:"red"}} onClick={handleDelete} >Delete</button>
            </div>
        </li>
    );
};
export default ToDoItem;