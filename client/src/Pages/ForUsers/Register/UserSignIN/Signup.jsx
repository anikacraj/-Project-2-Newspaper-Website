import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUP.css';
import HeaderSign from '../../../../Components/ForUsers/Header/HeaderSign';
import Footer from '../../../../Components/ForUsers/Footer/Footer';


function Signup() {
  const [name, setName] = useState('');   
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  // Sign In Function (Register)
const handleSubmit=(e)=>{

  e.preventDefault();
  axios.post("http://localhost:3004/register",{name,email,password})
  .then(result =>{
    console.log(result)

localStorage.setItem('user',JSON.stringify({
  name:name,
  email:email,
  signInDate: new Date().toISOString()
}));
navigate('/login');
setName('');
setEmail('');
setPassword('');

  })
  .catch(err =>{
    console.log(err);
  })


}



  return (

<div >
<HeaderSign />

   <div className='signin-container' >
     <div className="signin-form-container" >
   <div> <img className='signinImage'  src="../../Media/red.png" alt="" />  </div>

   <div className="signin-form-box" id="signin-signin-box">
   <h3 className="login-heading">Sign In</h3>
        <form id="signin-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' id="name" required onChange={(e) => setName(e.target.value)} />

          <label htmlFor="signin-email">Email:</label>
          <input type="email" name='email' id="signin-email" required onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="signin-password">Password:</label>
          <input type="password" name='password' id="signin-password" required onChange={(e) => setPassword(e.target.value)} />

          <button className='signin-button' type="submit">Sign Up</button>
        </form>
        <p className='signin-message'>Already have an account?</p>
        <Link className='link' to="/login">Login</Link>
      </div>
    </div>
   </div >

   <Footer />
   </div>
  );
}

export default Signup;