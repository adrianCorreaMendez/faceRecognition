import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition.js';
import Rank from './components/rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
     value: 300,
    density: {
      enable: true,
      value_area: 800,
      }
    }
  }
}

const app = new Clarifai.App({
 apiKey: '86de0b2e991f4c23abae54f7fe6e1a01'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl:''
    }
  }

  onInputChange = (event) => {
  this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
        this.state.input)
        .then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'
           params={particlesOptions}
           />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
         onInputChange={this.onInputChange}
         onButtonSubmit ={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
