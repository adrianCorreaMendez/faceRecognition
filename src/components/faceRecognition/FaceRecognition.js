import React from 'react';

const FaceRecognition = ({imageUrl}) => {
  return (
    <div className='center ma'>
     <div className='obsolute mt2'>
      <img alt=''src={imageUrl} width='500px' height='auto'/>
     </div>
    </div>
  );
}
export default FaceRecognition;
