import { configureStore } from '@reduxjs/toolkit'
import todoReducre from './todoSlice'
export default configureStore({
    reducer:{ 
        todos: todoReducre,

    },
});
