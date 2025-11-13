import React, { useState } from 'react';
import '../UserSignIN/SignUP.css'; // Reuse same styling file
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Header from '../../../../Components/ForUsers/Header/Header';
import Footer from '../../../../Components/ForUsers/Footer/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3004/login", { email, password })
      .then((result) => {
        const { status, role, message } = result.data;

        if (status === "success") {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("role", role);

          if (role === "admin") {
            navigate("/adminHome");
          } else if (role === "user") {
            localStorage.setItem(
              "user",
              JSON.stringify({ email, loginDate: new Date().toISOString() })
            );
            navigate('/');
          }
        } else {
          alert(message || "Login failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
 <div>
      <Header />
         <div className="signup-container">

      <div className="signup-card">
        {/* Left Image Section */}
        <div className="signup-image">
          <img src="../../Media/red.png" alt="Login Illustration" />
        </div>

        {/* Right Form Section */}
        <div className="signup-form-section">
          <h2 className="signup-title">Welcome Back</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="signup-btn">Log In</button>
          </form>

          <p className="signin-text">
            Don’t have an account?{" "}
            <a href="/signup" className="signin-link">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
 </div>
  );
}

export default Login;
