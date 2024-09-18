import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserSignIN/Signup.css';
import HeaderSign from './Header/HeaderSign';



function RichTextEditor() {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3004/texteditor', { name, email, password })
  //     .then(result => {
  //       console.log(result);
         
  //       setName(''); 
  //       setEmail(''); 
  //       setPassword('');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }


  return (
    <div>
<HeaderSign />


    </div>
  )
}

export default RichTextEditor