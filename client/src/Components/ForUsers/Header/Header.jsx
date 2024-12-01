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

  const [user, setUser] = useState(
    [
      localStorage.getItem("role" =="user")
    ]
  );

    const [submenuVisible, setSubmenuVisible] = useState(false);

    const handleMouseEnter = () => {
        setSubmenuVisible(true);
    };

    const handleMouseLeave = () => {
        setSubmenuVisible(false);
    };


    const {data,isLoading,error} =useFetch("http://localhost:3004/admin/Header/text");
    const [uploadNews,setUploadNews] =useState([]);

    useEffect(()=>{
      setUploadNews(data || []);
    },[data]);

    
   
const [light,setLight]=useState(false);

const lightChange=()=>{
  setLight(!light);
}

   

   
useEffect(() => {
  if (data && Array.isArray(data)) {
    // Assuming the news items have a `createdAt` property for sorting
    const sortedNews = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setUploadNews(sortedNews.slice(0, 4)); // Limit to the latest 4 items
  }
}, [data]);

const handleLogOut = () => {
  localStorage.clear();
  // Use quotes around "user"
  setUser(null); // Ensure setUser is defined and updates the login state
};



    return (
      <div className={light ? "light-green-bg" : "white-bg"}>
    <nav>
      <div className="firstRow">
        {/* Logo Section */}
        <div className="logo">
          <div className="name">
            <img className="logoImage" src="../../Media/red.png" alt="Logo" />
          </div>
        </div>

        {/* News Section */}
        <div className="newsDiv">
          <div
            style={{
            
             
            }}
          >
            <div className="headerNews-container">
              <section className="header-News">
                {uploadNews && uploadNews.length > 0 ? (
                  uploadNews.map((upload) => (
                    <article
                      className="header-news__single"
                      key={upload._id}
                    >
                      <Link
                        className="news__link"
                        to={`/user/news/${upload._id}`}
                        state={upload}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: upload.content.substring(0, 1200),
                          }}
                        />
                        ......{/* Other content */}
                      </Link>
                    </article>
                  ))
                ) : (
                  <h3>No news available</h3>
                )}
              </section>
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
                    <div className="business"><li style={{marginRight:'2px'}}><NavLink to="/business">Business News</NavLink></li></div>
                   </div>
                   <div className="right">
                  <div className='input'>
                  <input style={{marginTop:'-5px'}} type="text" id='search' />
                    <button className='searchButton' type='submit'>Search </button>
                    
                  </div>
               <div>
               { user ? (
            // Show "Log Out" if user is logged in
            <li><NavLink to="/" onClick={handleLogOut}> 🧑‍✈️Log Out</NavLink></li>
          ) : (
            // Show "Sign Up" if no user is logged in
            <li><NavLink to="/register">👤Sign Up</NavLink></li>
          )}
               </div>
          
                    <div  className="right-menuitems"><li><NavLink to="/ebook">🖨️E-Book</NavLink> </li></div>
                    <div  onClick={lightChange}  className="right-menuitems" ><li>🌐BN </li></div>
                   
                    <div className="right-menuitems"><li><NavLink to="/contact">📞Contact Us</NavLink></li></div>
                   </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;