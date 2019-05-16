import React from 'react';
import './style.css';

function ImageCard(props) {
    return(
        <div id={props.id} className='images' onMouseEnter={() => props.hover(props.id)}>
        <img src={props.image}></img>
        </div>
    )
}

export default ImageCard;