import React, {Component} from 'react';
import './App.css';
import photos from './photos.json';
import ImageCard from './components/imageCards';

class App extends Component {

  state = {
    photos
  }

  hover = id => {
    const element = document.getElementById(id);
    element.classList.add("hovered")
  }

  render () {
    return(
    <div className='wrapper'>
      {this.state.photos.map(photo => (
        <ImageCard
        key={photo.id}
        id={photo.id}
        image={photo.image}
        hover={this.hover}
        />
      ))}
    </div>
  );
}
}

export default App;
