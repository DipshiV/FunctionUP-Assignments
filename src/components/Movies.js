import React,{useState,useEffect} from 'react'
import { add } from '../redux/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movieSlice';



;
const Movies=()=>{
  

   const movieState= useSelector((state) => state.movie)
   const dispatch = useDispatch();
  
    useEffect(()=>{
         dispatch(fetchMovies());
    // const getMovies=async()=>{
    //     const res = await fetch('https://www.omdbapi.com/?s=action&apikey=cc627d4&page=1')
    //     const data= await res.json();
    //     console.log(data.Search);
    //     const data1= (data.Search);
    //     setMovie(data1)
    // }
    // getMovies();
    },[]);
  
   const handleAdd =(movee)=>{
    dispatch(add(movee))
   
   }
  
    
    return(
        <div className='productsWrapper'> 
      {movieState.movie.map(mov=>(
       <div className='card' key={mov.id}>
       <img src={mov.Poster} alt=''/>
       <h5>{mov.Title}</h5>
       <h6>Year: {mov.Year}</h6>
       <button className="btn" onClick={()=> handleAdd(mov)}>Add to Favourite</button>
       </div>
        
      ))}
      </div>)
}
export default Movies;