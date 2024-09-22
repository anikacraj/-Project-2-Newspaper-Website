import React from 'react'
import './Header.css';
import './HeaderSign.css'
import { Link, NavLink } from 'react-router-dom';


function HeaderSign() {
  return (
    <div>
    <nav>
        <div style={{backgroundColor :'#006EC5'}}>
        <div className="firstRow" >
            <div className="logo">
       
                <div className="name">Newswire Today</div>
            </div>
            <div className="newsDiv">
               
            </div>
        </div>
        </div>
        <div className="secondRow" style={{borderBottom:'0.5px solid #333', display: 'flex', justifyContent:'space-around'}} >
           <div className="left">
           <div className="Home"><li><NavLink to="/">Breaking News </NavLink></li></div>
          
          
          
        
           </div>
           <div className="right" >
        
            <div  ><li><NavLink to="/about">About Us </NavLink> </li></div>
     
            
            <div style={{borderLeft : '1px solid #333'}}><li><NavLink to="/contact">📞Contact</NavLink></li></div>
           </div>
        </div>
    </nav>
</div>
  )
}

export default HeaderSign