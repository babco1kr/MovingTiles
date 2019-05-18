import React, {Component} from 'react';
import './style.css';

class ImageCard extends Component {

    state = {
        hovered: false
    };

    // On hover adds class to make image span 2 rows and 2 columns
    hover = id => {
        const thisElement = document.getElementById(id);
        let element;
        // Determines what set of photos is hovered, making sure there is only one hovered photo per set
        if (id < 10) {
            element = document.getElementsByClassName('images1');
        } else {
            element = document.getElementsByClassName('images2');
        }
        // Removes hovered class from each image of the set
            [].forEach.call(element, function(image) {
            image.classList.remove("hovered");
        });
        // Adds the hovered class for the specific image hovered
        thisElement.classList.add("hovered");
    }


    render() {
        // Returns div with different classes to distinguish the set of photos, also defaults 1 from each to already be hovered
        if (this.props.id === 3) {
            return(
                <div id={this.props.id} className='hovered images1' onMouseEnter={() => this.hover(this.props.id)}>
                    <img className='tileImages'src={this.props.image} alt='CHANGE'></img>
                </div>
                )
        } else if (this.props.id === 16) {
            return(
                <div id={this.props.id} className='hovered images2' onMouseEnter={() => this.hover(this.props.id)}>
                    <img className='tileImages' src={this.props.image} alt='CHANGE'></img>
                </div>
                )
        } else if (this.props.id < 10) {
            return(
                <div id={this.props.id} className='images1' onMouseEnter={() => this.hover(this.props.id)}>
                    <img className='tileImages' src={this.props.image} alt='CHANGE'></img>
                </div>
            )
        } else {
            return(
                <div id={this.props.id} className='images2' onMouseEnter={() => this.hover(this.props.id)}>
                    <img className='tileImages' src={this.props.image} alt ='CHANGE'></img>
                </div>
        )
        }
}
}

export default ImageCard;