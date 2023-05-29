import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../redux/cartSlice'

function Cart() {
    const items= useSelector(state => state.cart)
    const dispatch= useDispatch();
    function handleRemove(mov){
  dispatch(remove(mov))
    }
  return (
   <>
   <h2 className='heading'> Favourite Movies </h2>
    <div className='productsWrapper'> 
    {items.map(mov=>(
     <div className='card' key={mov.imdbID}>
     <img key={mov.Poster} src={mov.Poster} alt=''/>
     <h5 key={mov.Title}>{mov.Title}</h5>
     <h6>Year: {mov.Year}</h6>
     <button className="btn" onClick={()=> handleRemove(mov)}>Remove</button>
     </div>
     
    ))}
    </div>
    </>
    
  )
}

export default Cart
