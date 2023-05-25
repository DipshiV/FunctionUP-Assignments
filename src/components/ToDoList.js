import React from 'react';
import TodoItem from './ToDoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
	const todos = useSelector((state) => state.todos);
	return (
		<ul className='list-group' style={{listStyle:'none'}}>
			{todos.map((todo) => (
				<TodoItem id={todo.id} name={todo.name} status={todo.status} />
			))}
		</ul>
	);
};
export default TodoList;