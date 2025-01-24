import React, { useState } from 'react'

function Test() {

  const [loginPage,setLoginPage]=useState(true);

  let changeToWelcomePage=()=>{
    setLoginPage(false);
  }

  let changeToLoginPage=()=>{
    setLoginPage(true);
  }

  if (loginPage==true) {
    return (
      <div className='align-content-center text-center vh-100'>
        <h1>Please Login true</h1>
        <button className='btn btn-success' onClick={changeToWelcomePage}>Login</button>
      </div>
    )
  } else {
    return (
      <div className='align-content-center text-center vh-100'>
        <h1>WELCOME</h1>
        <button className='btn btn-dark' onClick={changeToLoginPage}>Logout</button>
      </div>
    )
  }

}

export default Test