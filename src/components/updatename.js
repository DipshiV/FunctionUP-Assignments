
import './nameUpdate.css'
import {Fragment, useState} from 'react'

export default function NameUpdate () {

    const [name , setName] = useState(null)
    const [print,setPrint] = useState(false);
   

    function getData(e) {
        setName(e.target.value);
        setPrint(false);
    }
    function handleClick(){
     setPrint(true);
     
    }

    return (
       <Fragment> 
          <div className='container'>
            <input type='text' placeholder='Enter your Name'
            onChange={getData}
            />
           
            <button onClick={handleClick}>change name</button>
           <h1><span> My Name is: </span> {print? <span>{name} </span>:null}</h1>
           </div>
       </Fragment>
    )
}