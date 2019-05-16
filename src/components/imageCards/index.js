import React from 'react';
import './style.css';

function ImageCard(props) {
    return(
        <div className='images'>
        <img src={props.image}></img>
        </div>
    )
}

export default ImageCard;