import React, { useState } from 'react'
import { API_URL } from '../../data/apiPath';
const Register = ({showLoginHandler}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response=await fetch(`${API_URL}vendor/register`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,email,password})
      });
      const data=await response.json();
      if(response.status===200){
        console.log(data);
        setUsername('');setEmail('');setPassword('');
        alert("Vendor registered successfully");
        showLoginHandler();
      }
    } catch (error) {
      console.error("registration failed",error);
      alert("Registration failed");
    }
  }
  return (
    <div className="registerSection">
        
        <form className='authForm' onSubmit={handleSubmit}>
        <h3>Vendor Register</h3>
            <label>Username</label><br/>
            <input type='text' name='username' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your username'/><br/>
            <label>Email</label><br/>
            <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/><br/>
            <label>Password</label><br/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='Enter your password'/>
            <button className='btnSubmit' type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register
