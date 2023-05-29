import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state,action){
            const key=state.find((elem)=>elem.imdbID === action.payload.imdbID)
            if(!key){
            state.push(action.payload)
            }
            else{
                alert("data is added");
            }
        },
        remove(state, action){
            return state.filter((item)=> item.imdbID !== action.payload.imdbID);
        },
    }

})
export const {add, remove}= cartSlice.actions;
export default cartSlice.reducer;
 
