import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-contener">
        <h1>Sign Up </h1>
        <div className="login-fields">
          <input type="text" placeholder='Yours Name' />
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='login-log'>Already have an account? <span>Login here</span> </p>
        <div className="login-agree">
          <input className='checkbox' type="checkbox " name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login