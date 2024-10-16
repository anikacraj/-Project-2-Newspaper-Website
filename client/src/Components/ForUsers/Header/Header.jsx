import React, {useEffect, useState } from 'react';
// import {FaFacebook,FaAffiliatetheme} from 'react-icons/fa'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios'


const date =new Date();
 const getDate =date.getDate();
 const getMonth =date.getMonth();
 const getYear  =date.getFullYear();
 
 




function Header() {
    const [submenuVisible, setSubmenuVisible] = useState(false);

    const handleMouseEnter = () => {
        setSubmenuVisible(true);
    };

    const handleMouseLeave = () => {
        setSubmenuVisible(false);
    };

    const [messages,setmessages] =useState([])
    useEffect(()=>{
       axios.get("http://localhost:3004/admin/headernews")
       .then(news => setmessages(news.data))
       .catch(err=> res.json(err))
     },[])

    return (
        <div>
            <nav>
                <div className="firstRow">
                    <div className="logo">
               
                        <div className="name">
                        <div> <img className='logoImage'  src="../../Media/logo.jpg" alt="" />  </div>
                        </div>
                    </div>
                    <div className="newsDiv">

                    
   
            <div className='HeaderNews' >
              <div className="header-News" >
               {messages.messageOne}
               
              </div>
              <div className="header-News" >
               {messages.messageTwo}
                <br />
                
              </div>
              <div className="header-News" >
                {messages.messageThree}
           
              </div>
              <div className="header-News" id='header-News4' >
               
                {messages.messageFour}
               
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
                    <div  className="right-menuitems"><li><NavLink to="/register">👤Sign Up </NavLink> </li></div>
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