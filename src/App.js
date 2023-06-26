
import React, { useState } from 'react';
import loginform from './component/loginform.js';



function App() {

  const[popupstyle,showpopup]=useState("hide");
    
  const popup=()=>{
    showpopup("login-popup")
    setTimeout(()=> showpopup("hide"),3000)
  }

  return (
    <div className='page'>
    <div className="cover">
      <h1 style={{color:"blue"}}>Login</h1>
   <input type='text' placeholder='username'/>
   <input type='password' placeholder='password'/>

   <div className='login-btn' onClick={popup}>Login</div>

   <p className='text'>Or Login using</p>

   <div className='alt-login'>
    <div className='facebook'></div>
    <div  className='google'></div>
   </div>

   <div className={popupstyle}>
    <h3>Login Failed</h3>
    <p>Username or password incorrect</p>
   </div>

    </div>
    </div>
  );
}

export default App;
