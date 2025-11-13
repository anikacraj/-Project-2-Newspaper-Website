import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUP.css';
import Header from '../../../../Components/ForUsers/Header/Header';
import Footer from '../../../../Components/ForUsers/Footer/Footer';

function Signup() {
  const [name, setName] = useState('');   
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3004/register", { name, email, password })
      .then(result => {
        localStorage.setItem('user', JSON.stringify({
          name,
          email,
          signInDate: new Date().toISOString()
        }));
        navigate('/login');
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Header />

      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-image">
            <img src="../../Media/red.png" alt="Sign Up Illustration" />
          </div>

          <div className="signup-form-section">
            <h2 className="signup-title">Create Account</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button type="submit" className="signup-btn">Sign Up</button>
            </form>

            <p className="signin-text">
              Already have an account? <Link to="/login" className="signin-link">Login</Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
