import { useState,useEffect } from 'react';
export default function Image() {
  const [image , setImage] = useState('https://images.pexels.com/photos/3177388/pexels-photo-3177388.jpeg?auto=compress&cs=tinysrgb&w=800')
    useEffect(() => {
        getDog();
  }, []);

  async function getDog () {
    try{
      
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        setImage(data.message)
    }
    catch(error){
      console.log('i am from catch' ,error)
    }
  }
  return (
    <div className="container">
      <img 
        src={image}
        height={'200px'}
        width={'200px'}
        alt='dog image'
      />
    </div>
  );
}

