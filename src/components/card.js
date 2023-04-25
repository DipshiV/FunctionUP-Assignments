import './card.css'
import React from 'react';
export default function ProductCard (props) {

   console.log(props);
    return (
       
            <div className='card-container'>
            <div className='row'>
                <div className='image-container'>
                    <img src={props.productPic} alt='' />
                </div>
                <div className='card-title'>
                     <h3>{props.productDescription}</h3>
                     <h1>{props.productName}</h1>
                     <p>{props.Brand}</p>
                     <p>{props.Price}</p>
                    <p>{props.Rating}</p>
                </div>
                <div className='btn'>
                    <button onClick={props.alertFunction}>Add To Cart</button>
                </div>
            </div>
            </div>
           
       
    )
}