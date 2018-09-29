import React, {Component} from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    //adding div  styling
    <div>
      <p className='f3'>
        {'This Artificial Intelligent Mind Will detect faces in pictures'}
      </p>
       <div className='center'>
        <div className=' form pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex'/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
       </div>
    </div>
  );
}
export default ImageLinkForm;