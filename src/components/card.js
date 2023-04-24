
import * as React from 'react';

import './profile.css';
export default function Card(props) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={props.imageUrl} alt='' />
      </div>
        <div className='card-title'>
        <p>{props.designation}</p>
        <h1>{props.name}</h1>
          <p>{props.body}</p>
        </div>
      <div className='btn'>
        <button><a>
          See more</a>
        </button>
        </div>
    </div>
  )
}
