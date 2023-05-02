import { React,useState, useEffect } from 'react';
import './userCard.css';
export default function UserCardApi() {
    const [users, setUsers] = useState([]);
    const [visible, setVisible] = useState(1);

    const getUsers = async () => {
      try{
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
     console.log(json)
      setUsers(json.data);
      }catch(error){
        console.error(' get user error',error);
      }
    };

    const loadMore = () => {
      if(visible<users.length)
      setVisible(visible + 5);
      else
      setVisible(1)
    };
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='card-container'>
        {users.length &&
            users.slice(0, visible).map((user) => {
              return (
                <div key={user.id} >
                <div className='image-container'>
                <img key={user.avatar} src={user.avatar} alt='' />
            </div>
            <div className='card-title'>
                 <h1>{user.first_name}  {user.last_name}</h1>
                 <p>{user.email}</p>
            </div>
          
                </div>
              )})
              }
              <div className='btn'>
              <button  onClick={loadMore}>get users</button>
          </div>
      </div>
    );
 
            }

