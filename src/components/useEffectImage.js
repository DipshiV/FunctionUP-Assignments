import './useEffectImage.css'
import { useEffect, useState, useRef } from "react";

export default function Imageshow() {

  const [Image, setImage] = useState(false)
  const imageRef = useRef(null);
  function handleImage() {
    if (Image === true)
      setImage(false);
    else
      setImage(true);
  }

  useEffect(() => {
    if (Image === true) {
      imageRef.current.src = "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg";
    } else {
      imageRef.current.src = "https://kingdoodle.com/wp-content/uploads/2019/12/Red_Printo.jpg";
    }

  }, [Image, imageRef]);
  return (
    <div className="container">
      <img ref={imageRef} alt="Picture" height="134" width="130" />
      <button onClick={handleImage}>change picture</button>
    </div>
  );
}
