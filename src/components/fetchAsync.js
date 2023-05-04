import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Image() {
  const [image , setImage] = useState('');
   
  useEffect(() => {
        getDog();
  }, []);
  
    async function getDog() {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random')
       console.log(response)
        setImage(response.data.message)
      } catch (error) {
        console.error('Error from API',error);
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

