import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import './Ebook.css'
function Ebook() {
    const [dayName, setDayName] = useState("");
    const [currentDate, setCurrentDate] = useState("");
useEffect(()=>{
    const today =new Date();
    const dayOptions ={weekday: 'long'};
    const dayNameString =today.toLocaleDateString("en-Us",dayOptions);

    const dateOptions ={year:'numeric',month:'long',day:'numeric'};
    const currentDateString = today.toLocaleDateString("en-US", dateOptions);
    setDayName(dayNameString);
    setCurrentDate(currentDateString);
},[]);



  return (
    <div>

<nav>
        <div >
        <div className="firstRow" id='firstRow'>
            <div className="logo">
       
                <div className="name">
                <div> <img className='logoImage'  src="../../Media/red.png" alt="" />  </div>
                </div>
            </div>
            <div className="newsDiv">
               <h2 className='Subcription'> Subscription </h2>
            </div>
        </div>
        </div>
        <div className="secondRow" style={{borderBottom:'0.5px solid #333', display: 'flex', justifyContent:'space-around'}} >
           <div className="left">
           <div className="Home"><li style={{marginTop:'-15px'}}><h4>{dayName} {currentDate}</h4> </li></div>
          
          
          
        
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

export default Ebook