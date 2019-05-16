import React, {Component} from 'react';
import './App.css';
import photos from './photos.json';
import ImageCard from './components/imageCards';

class App extends Component {

  state = {
    photos
  }

  render () {
    return(
    <div className='wrapper'>
      {this.state.photos.map(photo => (
        <ImageCard
        key={photo.id}
        id={photo.id}
        image={photo.image}
        />
      ))}
    </div>
  );
}
}

export default App;
