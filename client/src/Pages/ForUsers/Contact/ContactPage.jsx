import React ,{useState,useEffect } from 'react' 


import axios from 'axios'
import Header from '../../../Components/ForUsers/Header/Header';
import Footer from '../../../Components/ForUsers/Footer/Footer';




function ContactPage() {

  const [name, setName] = useState('');   
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 

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

const click=()=>{
 alert("successfully done ")
}

  return (


    <>

<Header />
  <div >


   <div className='container' >
     <div className="form-container" >

    
   <div> <img className='signinImage'  src="../../Media/signPage.jpg" alt="" />  </div>

   <div className="form-box" id="signin-box">
    
        <form id="signin-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' id="name" required onChange={(e) => setName(e.target.value)} />

          <label htmlFor="signin-email">Email:</label>
          <input type="email" name='email' id="signin-email" required onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="signin-password">write Message :</label>
          <textarea type="message" name='message' id="message" required onChange={(e) => setMessage(e.target.value)} />

          <button className='button' type="submit" onClick={click}>Send Message </button>
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