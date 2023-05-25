import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
const AddToDo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					name: value,
				})
			);
		}
        setValue('')
	};
	return (
		<form onSubmit={onSubmit}  >
			<input style={{padding:"15px" , backgroundColor:"green" ,color:"black"}}
				type='text'
				placeholder='Add a todo'
				value={value}
				onChange={(event) => setValue(event.target.value)}>
			</input>

			<button type='submit' style={ { width:"60px",margin:" 40px 40px",padding:"10px" ,borderRadius:"10px" ,color:"white" , backgroundColor:'red'}}>
				Add
			</button>
		</form>
	);
};
export default AddToDo;
