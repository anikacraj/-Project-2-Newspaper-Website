import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUP.css';
import HeaderSign from '../Header/HeaderSign';
import Footer from '../Footer/footer';
import * as yup from "yup";
import { useFormik } from 'formik';

function Signup() {
  const [submittedValuesList, setSubmittedValuesList] = useState([]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        password: '',
    },
    validationSchema: yup.object({
        name: yup.string().min(2, "Name must have at least two characters").required("Name is required"),
        email: yup.string().email("Invalid email address").required("Email is required"),
        password: yup.string().min(6, "Password must have at least six characters").required("Password is required"),
    }),

    onSubmit: (values, { resetForm }) => {
        // Store submitted values in the state
        setSubmittedValuesList([...submittedValuesList, values]);

        // Post data to server
        axios.post('http://localhost:3004/register', {
            name: values.name,
            email: values.email,
            password: values.password
        })
        .then(result => {
            console.log(result);
            navigate('/login'); // Redirect to login page after successful signup
            resetForm(); // Reset the form after successful submission
        })
        .catch(err => {
            console.log(err);
        });
    }
  });

  return (
    <div>
      <HeaderSign />
      <div className='container'>
        <div className="form-container" style={{ width: '1000px' }}>
          <div className="form-box" id="signin-box">
            <h3 style={{ textAlign: 'center' }}>Sign Up</h3>
            <form id="signin-form" onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <h6>{formik.errors.name}</h6> : null}

              <label htmlFor="signin-email">Email:</label>
              <input
                type="email"
                name="email"
                id="signin-email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <h6>{formik.errors.email}</h6> : null}

              <label htmlFor="signin-password">Password:</label>
              <input
                type="password"
                name="password"
                id="signin-password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? <h6>{formik.errors.password}</h6> : null}

              <button className='button' type="submit">Sign Up</button>
            </form>
            <p className='message'>Already have an account?</p>
            <Link className='link' to="/login">Login</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
