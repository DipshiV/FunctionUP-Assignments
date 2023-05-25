import { createSlice } from '@reduxjs/toolkit';
export const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, name: 'ToDo1', status: 'Pending' },
        { id: 2, name: 'ToDo2', status: 'Pending' },
        { id: 3, name: 'ToDo2', status: 'Pending' },
       
    ],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                name: action.payload.name,
                status: false,
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].status = action.payload.status;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;