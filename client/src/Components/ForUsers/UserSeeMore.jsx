import React, { useEffect, useState } from "react";
import { useLocation,Link } from 'react-router-dom'
import Header from "./Header/Header";

function UserSeeMore() {
    const {state} =useLocation();
    
  if(!state){
    return <h4>Product not found </h4>
}
  return (
    <div>
<Header />

<div className="news-details">
     
     <div dangerouslySetInnerHTML={{ __html: state.content }} />
     <Link to="/" className="back-link">
       Go Home
     </Link>
   </div>


    </div>
  )
}

export default UserSeeMore