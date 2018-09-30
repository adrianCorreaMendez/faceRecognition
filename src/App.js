import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
          {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
