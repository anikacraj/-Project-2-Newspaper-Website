import React, { useState } from 'react';
// import {FaFacebook,FaAffiliatetheme} from 'react-icons/fa'
import '../../../ForUsers/Header/Header.css';
import './AdminHeader.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';


function Header() {
   
    const[signIn,setSignIn]=useState(true)
    const navigate =useNavigate();
    const [submenuVisible, setSubmenuVisible] = useState(false);
  
    const handleMouseEnter = () => {
        setSubmenuVisible(true);
    };

    const handleMouseLeave = () => {
        setSubmenuVisible(false);
    };

const handleSignIn=()=>{
if(signIn){
    localStorage.removeItem("isAdminAuthenticated") 
    localStorage.removeItem("role")
    localStorage.removeItem("isAdminLogIn")
    setSignIn(false); 
    useNavigate('/login')
}
else{
    useNavigate('/login')
}
   
}


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
                   <div className="Home"><li><NavLink to="/admin/home">Breaking News </NavLink></li></div>
                    <div className="national"><li><NavLink to="/admin/national">National News </NavLink></li></div>
                    <div className="international"><li><NavLink to="/admin/international">International News</NavLink></li></div>
                    <div 
                        className="sports" 
                        id='menu' 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <li><NavLink to="/cricket">Sports News</NavLink>
                            <ul className="submenu-content" id='submenu' style={{ display: submenuVisible ? 'block' : 'none' }}>
                                <li><NavLink to="/admin/cricket">Cricket</NavLink></li>
                                <li><NavLink to="/admin/football">Football</NavLink></li>
                            </ul>
                        </li>
                    </div>
                    <div className="business"><li><NavLink to="/admin/business">Business News</NavLink></li></div>
                   </div>
                   <div className="right">
                  <div className='input'>
                    <input type="text" id='search' />
                    <button className='searchButton' type='submit'>Search </button>
                    
                  </div>
                    <div  className="right-menuitems"><li><NavLink to="#" onClick={handleSignIn}>{signIn ? '👤signOut' :'👤signIn'}</NavLink> </li></div>
                    <div  className="right-menuitems"><li><NavLink to="/admin/ebook">🖨️E-Book</NavLink> </li></div>
                    <div  className="right-menuitems"><li><NavLink to="/ShowUsers">👥Users</NavLink> </li></div>
                   
                    <div className="right-menuitems"><li><NavLink to="/ShowMessage">📜Messages</NavLink></li></div>
                   </div>
                </div>
            </nav>

        


        </div>




    );
}

export default Header;