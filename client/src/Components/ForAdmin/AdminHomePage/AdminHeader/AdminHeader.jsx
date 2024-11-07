import React, { useState } from 'react';
// import {FaFacebook,FaAffiliatetheme} from 'react-icons/fa'
import '../../../ForUsers/Header/Header.css';
import './AdminHeader.css'
import { Link, NavLink } from 'react-router-dom';


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
                        <div> <img className='logoImage'  src="../../Media/red.png" alt="" />  </div>
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
                    <div  className="right-menuitems"><li><NavLink to="/ShowUsers">👥Users</NavLink> </li></div>
                   
                    <div className="right-menuitems"><li><NavLink to="/ShowMessage">📜Messages</NavLink></li></div>
                   </div>
                </div>
            </nav>

            <div className="middleBody">

           <div className="newsletter">  <a href="/admin/headernews">  <h4>Header News </h4>  </a>  </div>
            <div className="newsletter"> <a href="/uploadSliderAds"> <h4> Slider Ads </h4>   </a>  </div>
            <div className="newsletter"> <a href="/adminTextSlider"> <h4>Slider Text </h4>  </a> </div>
            <div className="newsletter"> <a href=""> <h4> Contact Us </h4> </a>  </div>
           </div>


           <div className="middleBody">
           <div className="newsletter"> <a href=""><h4>News Letter </h4> </a>      </div>
            <div className="newsletter"><a href=""> <h4> Privacy Policy</h4></a>   </div>
            <div className="newsletter"><a href=""> <h4>Community Policy </h4></a>   </div>
            <div className="newsletter"><a href="">  <h4> Advertisment Request </h4> </a> </div>
           </div>


        </div>




    );
}

export default Header;