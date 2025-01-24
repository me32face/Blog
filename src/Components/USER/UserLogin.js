import React from 'react'
import '../../Assets/Styles/UserLogin.css'

function UserLogin() {

    

  return (
    <div className="align-items-center container d-flex justify-content-center vh-100">
        <div className='card p-4 shadow-lg UserLogin-custom-card-size'>
            <nav className='mb-3'>
                <ul class="nav justify-content-end nav pb-2">
                    <li class="nav-item">
                        <a class="m-2 nav-link text-bg-secondary HomeBtn" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="m-2 nav-link text-bg-info RegisterBtn" href="#">Register</a>
                    </li>
                </ul>
            </nav>
            <h2 className='mb-4 text-center fw-bold'>Login</h2>
            <div className='mb-3'>
                <label htmlFor='username' className='form-label'>Username : </label>
                <input type='text' className='form-control' id='username' placeholder='Enter your username'/>
            </div>
            <div className="mb-3">
                <label htmlFor='password'className='form-label'>Password : </label>
                <input type='password' className='form-control' id='password' placeholder='Enter the password'/>
            </div>
            <button className='btn btn-primary w-50 align-self-center'>Login</button>
            <div className="text-center mt-3">
                <a className='text-danger ForgotPwd'>Forgot Password?</a>
            </div>
        </div>
    </div>
  )
}

export default UserLogin
