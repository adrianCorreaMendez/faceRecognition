import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition.js';
import Rank from './components/rank/Rank.js';
import SignIn from './components/signIn/SignIn.js';
import Register from './components/register/Register.js';
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
      imageUrl:'',
      box: {},
      route: 'signin',
      isSignedIn:false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  componentDidMount(){
    fetch('http://localhost:8080/')
    .then(response => response.json())
    .then(console.log)
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
 }

 displayFaceBox = (box) => {
   this.setState({box: box});
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
        .then(response =>{
          if(response){
          fetch('http://localhost:3000/image')
            fetch('http://localhost:8080/signin',{
              method: 'put',
              headers: {'content-type':'application/json'},
              body:JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
          })
        }
          this.displayFaceBox(this.calculateFaceLocation(response))
      })
        .catch(err => console.log('error'));
  }

   onRouteChange = (route) => {
     if(route === 'signout'){
       this.setState({isSignedIn: false})
     }else if (route === 'home'){
       this.setState({isSignedIn: true})
     }
     this.setState({route: route})
   }

  render() {
    const {isSignedIn, box, imageUrl, route} = this.state;
    return (
      <div className="App">
      <Particles className='particles'
            params={particlesOptions}
            />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home'
        ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit ={this.onButtonSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
          : (
            route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange} />
            :<Register loadUser= {this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
        </div>
    );
  }
}

export default App;
