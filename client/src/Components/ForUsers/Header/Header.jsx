import React, {useEffect, useState } from 'react';
// import {FaFacebook,FaAffiliatetheme} from 'react-icons/fa'

import { Link, NavLink } from 'react-router-dom';
import axios from 'axios'
import useFetch from '../../../Pages/AdminPanel/Fetch/useFetch';

import './Header.css';

const date =new Date();
 const getDate =date.getDate();
 const getMonth =date.getMonth();
 const getYear  =date.getFullYear();
 

 




function Header() {

  const [user, setUser] = useState(null);

    const [submenuVisible, setSubmenuVisible] = useState(false);

    const handleMouseEnter = () => {
        setSubmenuVisible(true);
    };

    const handleMouseLeave = () => {
        setSubmenuVisible(false);
    };


    const {data,isLoading,error} =useFetch("http://localhost:3004/admin/headernews");
   


   

   
useEffect (()=>{
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if(storedUser){
    setUser(storedUser);
  
  }
},[]);

const handleLogOut = () => {
  localStorage.removeItem("user"); // Use quotes around "user"
  setUser(null); // Ensure setUser is defined and updates the login state
};



    return (
        <div>
            <nav>
                <div className="firstRow">
                    <div className="logo">
               
                        <div className="name">
                        <div> <img className='logoImage'  src="../../Media/red.png" alt="" />  </div>
                        </div>
                    </div>
                    <div className="newsDiv">

                    
   
            <div className='HeaderNews' >
              <div style={{fontWeight:'300'}} className="header-News" >
            {data.messageOne}
               
              </div>
              <div  style={{fontWeight:'300'}} className="header-News" >
               {data.messageTwo}
                <br />
                
              </div>
              <div  style={{fontWeight:'300'}} className="header-News" >
                {data.messageThree}
           
              </div>
              <div  style={{fontWeight:'300'}} className="header-News" id='header-News4' >
               
                {data.messageFour}
               
                <br />
               
              </div>
            </div>
        
        
      
    
                      
                     
                      
                    </div>
                </div>
                <div className="secondRow">
                   <div className="left">
                   <div className="Home"><li><NavLink to="/">Breaking News </NavLink></li></div>
                    <div className="national"><li><NavLink to="/national">National News </NavLink></li></div>
                    <div className="international"><li><NavLink to="/international">International News</NavLink></li></div>
                    <div 
                        className="sports" 
                        id='menu' 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <li><NavLink to="/cricket">Sports News</NavLink>
                            <ul className="submenu-content" id='submenu' style={{ display: submenuVisible ? 'block' : 'none' }}>
                                <li><NavLink to="/cricket">Cricket</NavLink></li>
                                <li><NavLink to="/football">Football</NavLink></li>
                            </ul>
                        </li>
                    </div>
                    <div className="business"><li><NavLink to="/business">Business News</NavLink></li></div>
                   </div>
                   <div className="right">
                  <div className='input'>
                  <input type="text" id='search' />
                    <button className='searchButton' type='submit'>Search </button>
                    
                  </div>
               <div>
               {user ? (
            // Show "Log Out" if user is logged in
            <li><NavLink to="/" onClick={handleLogOut}> 🧑‍✈️Log Out</NavLink></li>
          ) : (
            // Show "Sign Up" if no user is logged in
            <li><NavLink to="/register">👤Sign Up</NavLink></li>
          )}
               </div>
          
                    <div  className="right-menuitems"><li><NavLink to="/ebook">🖨️E-Book</NavLink> </li></div>
                    <div  className="right-menuitems"><li><NavLink to="#">🌐BN</NavLink> </li></div>
                   
                    <div className="right-menuitems"><li><NavLink to="/contact">📞Contact Us</NavLink></li></div>
                   </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;