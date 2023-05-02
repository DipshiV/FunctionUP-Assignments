import './useEffectImage.css'
import { useEffect, useState, useRef } from "react";

export default function Imageshow() {
  const [ImageIndex, setImageIndex] = useState(0)
  const Image=['https://kingdoodle.com/wp-content/uploads/2019/12/Red_Printo.jpg',
'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg',
'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
'https://media.istockphoto.com/id/1410264904/photo/cute-dog-in-a-unicorn-costume-sitting-on-a-pink-background-funny-golden-retriever-in-a-cap.jpg?s=612x612&w=is&k=20&c=tbTe1yB8_VzC9MhWBADN2ZRJm-grWEaAhZhl1HVrgD0=',
'https://media.istockphoto.com/id/1366310374/photo/a-dog-with-a-red-gift-bow-on-his-head-golden-retriever-for-valentines-day-christmas-wedding.jpg?s=612x612&w=is&k=20&c=lstzNlyghA7H_TCWf7_BTKgixTAa94HuGOlqXQi6kHk=',
'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80',
'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'];
  
  const imageRef = useRef();
  function handleImage() {
    if(ImageIndex<Image.length-1){
    setImageIndex(ImageIndex+1);
  }
  else{
alert('No more Images');
  }}

  useEffect(() => {
   
      imageRef.current.src = Image[ImageIndex];
    } 

  , [ImageIndex]);
  return (
    <div className="container">
      <img ref={imageRef} alt="Picture" height="134" width="130" />
      <button onClick={handleImage}>change picture</button>
    </div>
  );
}
