import React, {Component} from 'react';
import './App.css';
import photos from './photos.json';
import ImageCard from './components/imageCards';

class App extends Component {

  state = {
    photos,
    photos1: [],
    photos2: []
  }

  // When loading calls split function
  componentDidMount() {
    this.split();
  }

  // Splits images into to groups to be used in two seperate grids
  split() {
    let length = this.state.photos.length;
    let photos1 = [];
    let photos2 = [];
    for (let i = 0; i < length; i++) {
      if (i < 9) {
        photos1.push(this.state.photos[i]);
      } else {
        photos2.push(this.state.photos[i]);
      }
    }

    this.setState({photos1: photos1});
    this.setState({photos2: photos2});
  }

  render () {
    return(
    <div>
      <div className='wrapper'>
        {this.state.photos1.map(photo => (
          <ImageCard
          key={photo.id}
          id={photo.id}
          image={photo.image}
          hover={this.hover}
          />
        ))}
      </div>
      <div className='wrapper'>
        {this.state.photos2.map(photo => (
          <ImageCard
          key={photo.id}
          id={photo.id}
          image={photo.image}
          hover={this.hover}
          />
        ))}
      </div>
      </div>
  
  );
}
}

export default App;
