import React from 'react';

const Navigation = ({onRouteChange,isSignedIn,signin}) => {
    if(isSignedIn){
      return (
    //adding nav styling
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='fs link dim black underline pa3 pointer'> Sign out </p>
      </nav>
    );
    }else{
      return(
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='fs link dim black underline pa3 pointer'> SignIn </p>
        <p onClick={() => onRouteChange('Register')} className='fs link dim black underline pa3 pointer'> Register</p>
      </nav>
  );
 }
}
export default Navigation;
