import React, {useEffect, useState } from 'react';
// import {FaFacebook,FaAffiliatetheme} from 'react-icons/fa'

import { Link, NavLink } from 'react-router-dom';
import axios from 'axios'
import useFetch from '../Pages/AdminPanel/Fetch/useFetch';
import './ForUsers/TextSlider.css'


function Textslider() {

  const {data,isLoading,error} =useFetch("http://localhost:3004/admin/adminSliderText");

  return (

    <div className="movingtext">

      <div className="slider">

     
        

       <div className="slidertext"> 
       
       <div class="gole"></div><h4>{data.messageOne}</h4>
    
     <div class="gole"></div><h4> {data.messageTwo}</h4>
     <div class="gole"></div> <h4>{data.messageThree}</h4>
     <div class="gole"></div> <h4>{data.messageFour}</h4>
     </div>
     
   
      

     <div className="slidertext"> <div class="gole">
      </div> 
     <h4></h4>
       <div class="gole"></div>
       <h4>This is a newspaper website</h4>
      <div class="gole"></div><h4>This is a news website</h4>
     
     </div>
     <div className="slidertext"> <div class="gole">
      </div> 
     <h4>This is a nice website</h4>
       <div class="gole"></div>
       <h4>This is a newspaper website</h4>
      <div class="gole"></div><h4>This is a news website</h4>
     
     </div>
      </div>
    </div>

    
  )
}

export default Textslider