import React, {Component} from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import mind from './mind.png';

const Logo = () => {
  return (
    //adding div  styling
    <div className='ma4 mt0 '>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 70 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
         <img style={{paddingTop: '5px'}} alt='Logo' src={mind}/>
        </div>
      </Tilt>
    </div>
  );
}
export default Logo;
