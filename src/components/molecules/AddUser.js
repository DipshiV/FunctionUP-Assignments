import React,{useState} from 'react';
import List from './UserList.js';
export default function AddUser(){
    const [user,setUser]= useState("");
    const [name,setName] = useState([])
    function handleSubmit(e){
       e.preventDefault();
       if(!user) return;
        setName((oldData)=>{return [...oldData,user]});
        setUser(" ");

    }
    function deleteUSer(id){
        setName((oldData)=>{
            return oldData.filter((newArr,index)=>{
                return index!== id;
            });
        });
    }
    return(
        <div>
       <h1>List of Users</h1>
       <br/>
       <form onSubmit={handleSubmit}>
        <input className="task-input" type='text' placeholder='Add New User'  value={user} onChange={(e)=> setUser(e.target.value)}/>
        </form>
       <div >
       {name.map((item,index)=>{
        return <List key={index} text={item} id={index} onSelect={deleteUSer}
         />})}
       </div>
      
        </div>
    )
}