import React, {Component} from 'react';
import './style.css';

class ImageCard extends Component {

    state = {
        hovered: false
    };

    // On hover adds class to make image span 2 rows and 2 columns
    hover = id => {
        let element;
        if (id < 10) {
            element = document.getElementsByClassName('images1');
        } else {
            element = document.getElementsByClassName('images2');
        }
            const thisElement = document.getElementById(id);
            [].forEach.call(element, function(image) {
            image.classList.remove("hovered");
            image.classList.add("notHovered");
        });
        thisElement.classList.remove("notHovered");
        thisElement.classList.add("hovered");
    }


    render() {
        if (this.props.id < 10) {
        return(
        <div id={this.props.id} className='notHovered images1' onMouseEnter={() => this.hover(this.props.id)}>
        <img src={this.props.image}></img>
        </div>
        )
        } else {
        return(
            <div id={this.props.id} className='notHovered images2' onMouseEnter={() => this.hover(this.props.id)}>
            <img src={this.props.image}></img>
            </div>
        )
        }
}
}

export default ImageCard;