import React, { useState } from 'react';
// import {FaFacebook,FaAffiliatetheme} from 'react-icons/fa'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';


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
                      
                        <div className="headerNews" style={{width:'200px'}}><span style={{fontSize:"12px", fontWeight:"20", color:'green'}}>{getDate+"/"+getMonth+"/"+getYear}</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, possimus qui maxime at tempora necessitatibus!</div>
                        <div className="headerNews" style={{width:'200px'}}><span style={{fontSize:"12px", fontWeight:"20", color:'green'}}>{getDate+"/"+getMonth+"/"+getYear}</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, possimus qui maxime at tempora necessitatibus!</div>
                        <div className="headerNews" style={{width:'200px'}}><span style={{fontSize:"12px", fontWeight:"20", color:'green'}}>{getDate+"/"+getMonth+"/"+getYear}</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, possimus qui maxime at tempora necessitatibus!</div>
                        <div className="headerNews" style={{width:'200px'}}><span style={{fontSize:"12px", fontWeight:"20", color:'green'}}>{getDate+"/"+getMonth+"/"+getYear}</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, possimus qui maxime at tempora necessitatibus!</div>
                      
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