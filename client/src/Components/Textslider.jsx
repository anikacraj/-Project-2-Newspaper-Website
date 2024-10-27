import React, {useEffect, useState } from 'react';
// import {FaFacebook,FaAffiliatetheme} from 'react-icons/fa'

import { Link, NavLink } from 'react-router-dom';
import axios from 'axios'
import useFetch from '../Pages/AdminPanel/Fetch/useFetch';
import './ForUsers/TextSlider.css'


function Textslider() {

  

  const {data,isLoading,error} =useFetch("http://localhost:3004/admin/adminTextSlider");

  return (

    <div className="movingtext">

      <div className="slider">

     
        

       <div className="slidertext"> 
       
       <div class="gole"></div><h4>{data.newsOne}</h4>
    
     <div class="gole"></div><h4> {data.newsTwo}</h4>
     <div class="gole"></div> <h4>{data.newsThree}</h4>
     <div class="gole"></div> <h4>{data.newsFour}</h4>
     </div>

     <div className="slidertext"> 
       
       <div class="gole"></div><h4>{data.newsOne}</h4>
    
     <div class="gole"></div><h4> {data.newsTwo}</h4>
     <div class="gole"></div> <h4>{data.newsThree}</h4>
     <div class="gole"></div> <h4>{data.newsFour}</h4>
     </div>


     <div className="slidertext"> 
       
       <div class="gole"></div><h4>{data.newsOne}</h4>
    
     <div class="gole"></div><h4> {data.newsTwo}</h4>
     <div class="gole"></div> <h4>{data.newsThree}</h4>
     <div class="gole"></div> <h4>{data.newsFour}</h4>
     </div>



     </div>
    </div>

    
  )
}

export default Textslider