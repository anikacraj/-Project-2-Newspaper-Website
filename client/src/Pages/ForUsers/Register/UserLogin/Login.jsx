import React, { useState } from 'react';
import '../UserSignIN/SignUP.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3004/login', { email, password })
      .then(result => {
        const { status, role, message } = result.data;

        if (status === "success") {
          localStorage.setItem("isAuthenticated", "true");

          if (role === "admin") {
            // Admin-specific behavior
            localStorage.setItem("isAdminAuthenticated", "true");
            localStorage.setItem("role", "admin");
            localStorage.setItem("isAdminLogIn", "true");


            // Use navigate here
            navigate('/admin/home');
          } else if (role === "user") {
            // User-specific behavior
            localStorage.setItem("role", "user");
            localStorage.setItem("isUserLogIn", "true");
            localStorage.setItem("user", JSON.stringify({
              email: email,
              loginDate: new Date().toISOString()
            }));
            navigate('/'); // Use navigate here
          }
        } else {
          alert(message || "Login failed. Please try again.");
        }
      })
      .catch(err => {
        console.error("Error during login:", err);
        alert("An error occurred. Please try again later.");
      });
  };
  






  

  return (
    <div>
      <div className='signin-container'>
        <div className="signin-form-container">
        <div> <img className='signinImage'  src="../../Media/red.png" alt="" />  </div>
          <div className="signin-form-box" id="signin-form-box">
          <h3 className="login-heading">Log In</h3>

            <form id="signin-form" onSubmit={handleSubmit}>
              <label htmlFor="signin-email">Email:</label>
              <input
                className='input-login'
                type="email"
                name="email"
                id="signin-email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="signin-password">Password:</label>
              <input
                className='input-login'
                type="password"
                name="password"
                id="signin-password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='signin-button' type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;