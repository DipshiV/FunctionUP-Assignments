import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import movieReducer from './movieSlice'

const store= configureStore({
    reducer:{
     cart : cartReducer,
     movie: movieReducer
    
    }
})
export default store;