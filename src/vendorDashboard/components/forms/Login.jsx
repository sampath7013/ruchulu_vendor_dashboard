import React, { useState } from 'react'
import { API_URL } from '../../data/apiPath';

const Login = ({showWelcomeHandler}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler=async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`${API_URL}vendor/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
      })
      const data=await response.json();
      if(response.status===200){
        alert("Login successful");
        setEmail('');setPassword('');
        localStorage.setItem('vendorToken',data.token);
        showWelcomeHandler();
      }
    } catch (error) {
      console.error("login failed",error);
      alert("Login failed");
    }
  }
  return (
    <div className="loginSection">
       
        <form className='authForm' onSubmit={loginHandler}>
        <h3>Vendor Login</h3>
            <label>Email</label><br/>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' placeholder='Enter your email'/><br/>
            <label>Password</label><br/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='Enter your password'/>
            <button type='submit' className='btnSubmit'>Login</button>
        </form>
    </div>
  )
}

export default Login
