import React, { useState } from 'react';
import '../UserSignIN/SignUP.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeaderSign from '../Header/HeaderSign';
import Footer from '../Footer/footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/login', { email, password })
      .then(result => {
        console.log(result);

        if (result.data === "success") {
          navigate('/');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch(err => {
        console.log(err);
        alert('An error occurred. Please try again.');
      });
  };

  return (
  <div >
    <HeaderSign />
     <div className='container'>
     <div className="form-container">
      <div className="form-box" id="signin-box">
        <h3 style={{ textAlign: 'center' }}>Log In</h3>
        <form id="signin-form" onSubmit={handleSubmit}>
          <label htmlFor="signin-email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="signin-email" 
            required 
            onChange={(e) => setEmail(e.target.value)} 
          />

          <label htmlFor="signin-password">Password:</label>
          <input 
            type="password" 
            name="password" 
            id="signin-password" 
            required 
            onChange={(e) => setPassword(e.target.value)} 
          />

          <button className='button' type="submit">Log In</button>
        </form>
      </div>
    </div>
   </div>
   <Footer />
  </div>
  );
}

export default Login;
