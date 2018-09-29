import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
          {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
