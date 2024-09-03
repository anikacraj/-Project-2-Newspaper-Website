import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from'axios'
import { useNavigate } from 'react-router-dom';


import './SignUP.css';
function Signup(){
  const[name,setname] =useState();
  const[email,setemail] =useState();
  const[password,setpassword] =useState();
  const navigate =useNavigate();
 
const handleSubmit=(e)=>{
  e.preventDefault();
axios.post('http://localhost:3004/register',{name,email,password})
.then(result => {console.log(result)
navigate('/login')
useState('');
}
)
.catch(err =>{console.log(err)})
}


  return (
    <div className="form-container">
      <div className="form-box" id="signin-box">
        <h3 style={{textAlign:'center',}}>Sign In</h3>
        <form id="signin-form" onSubmit={handleSubmit}>
        <label htmlFor="signin-email">Name:</label>
 <input type="name" name='name' id="name" required onChange={(e)=>{setname(e.target.value)}} />

          <label htmlFor="signin-email">Email:</label>
          <input type="email" name='email' id="signin-email" required onChange={(e)=>{setemail(e.target.value)}}  />

          <label htmlFor="signin-password">Password:</label>
          <input type="password" name='password' id="signin-password" required onChange={(e)=>{setpassword(e.target.value)}}   />

         

          <button type="submit" >Sign In</button>
        </form>
        <p>already have an account</p>
   <Link to="/login">Log in</Link>
      </div>
    </div>
  )
}

export default Signup
