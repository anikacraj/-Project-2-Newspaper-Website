import React, { useState, useEffect } from 'react'


import axios from 'axios'
import Header from '../../../Components/ForUsers/Header/Header';
import Footer from '../../../Components/ForUsers/Footer/Footer';
import '../Register/UserSignIN/Signup.css'



function ContactPage() {


  const [contact, setContact] = useState({ name: " ", email: " ", message: " " })
  const { name, email, message } = contact;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/contact', { name, email, message })
      .then(result => {
        console.log(result);

        location.reload()
      })
      .catch(err => {
        console.log(err);
      });
  }

  const click = () => {
    alert("successfully done ")
  }

  return (


    <>

      <Header />
      <div >


        <div className='signin-container' >
          <div className="signin-form-container" >


          
            <div className="signin-form-box" id="signin-box">
<h3 className='login-heading'>Contact Us</h3>
              <form id="signin-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' id="name" required onChange={(e) => setContact({ name: e.target.value, email, message })} rows="2" cols="55" />

                <label htmlFor="signin-email">Email:</label>
                <input type="email" name='email' id="signin-email" required onChange={(e) => setContact({ name, email: e.target.value, message })} rows="2" cols="55" />

                <label htmlFor="signin-password">write Message :</label>
                <textarea style={{backgroundColor:'transparent'}} type="message" name='message' id="message" required onChange={(e) => setContact({ name, email, message: e.target.value })} rows="4" cols="60" />

                <button className='signin-button' type="submit" onClick={click}>Send Message </button>
              </form>

            </div>
          </div>
        </div >


      </div>

      <Footer />
    </>
  )
}

export default ContactPage