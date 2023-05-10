import {React,Fragment,useState,useEffect,useRef} from 'react';
import styles from './usercard.module.css'
export default function UserData(){
    const [data,setData]=useState([]);
    const carousel=useRef(null);
    const getUsers = async () => {
        try{
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
       console.log(json)
        setData(json.data);
        }catch(error){
          console.error(' get user error',error);
        }
      };
   
   useEffect(()=>{
    getUsers();
    
  
   },[]);
  const  handleLeft=(e)=>{
    e.preventDefault();
  
    carousel.current.scrollLeft-=carousel.current.offsetWidth;

  }
const  handleRight=(e)=>{
    e.preventDefault();
   
    carousel.current.scrollLeft+=carousel.current.offsetWidth;
    
  }
    return(<>
        <div className={styles.app} ref={carousel} >
        {data.map((user)=>{
        const {id,avatar,first_name,last_name,email}=user;
        return (
            
        <div className={styles.card}   key={id}  >  
        <img key={avatar} src={avatar} alt='' />
         <h3>{first_name}  {last_name}</h3>
         <p>{email}</p>
        </div>

    )})}
    </div>
    <div className={styles.button}>
    <button onClick={handleLeft}> <img src='https://cdn.icon-icons.com/icons2/1238/PNG/512/scrollarrowtoleft_83879.png' alt='Scroll Left' width='30px' /></button>
    <button onClick={handleRight}> <img src='https://cdn.icon-icons.com/icons2/1238/PNG/512/scrollarrowtoright1_83720.png' alt='Scroll Right' width='30px'/></button>

   
   
        </div>
        </>
      )
}