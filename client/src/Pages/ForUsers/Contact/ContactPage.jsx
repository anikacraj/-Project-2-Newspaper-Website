import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../../Components/ForUsers/Header/Header';
import Footer from '../../../Components/ForUsers/Footer/Footer';
import '../Register/UserSignIN/Signup.css';

function ContactPage() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/contact', { name, email, message })
      .then(result => {
        console.log(result);
        alert('Message sent successfully!');
        setContact({ name: '', email: '', message: '' });
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Header />

      <div className="signup-container">
        <div className="signup-card">
          {/* Optional Illustration */}
          <div className="signup-image">
            <img src="../../Media/red.png" alt="Contact Illustration" />
          </div>

          {/* Contact Form Section */}
          <div className="signup-form-section">
            <h2 className="signup-title">Contact Us</h2>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) =>
                    setContact({ name: e.target.value, email, message })
                  }
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) =>
                    setContact({ name, email: e.target.value, message })
                  }
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  value={message}
                  onChange={(e) =>
                    setContact({ name, email, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button type="submit" className="signup-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
