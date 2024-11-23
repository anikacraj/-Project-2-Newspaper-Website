import React, { useEffect, useState } from "react";
import { useLocation,Link } from 'react-router-dom'
import AdminHeader from '../../Components/ForAdmin/AdminHomePage/AdminHeader/AdminHeader'
function AdminSeeMore() {
  const {state} =useLocation()


  if(!state){
      return <h4>Product not found </h4>
  }




  return (
<div>
  <AdminHeader />
<div className="news-details">
     
     <div dangerouslySetInnerHTML={{ __html: state.content }} />
     <Link to="/adminHome" className="back-link">
       Go Back
     </Link>
   </div>
</div>
  );
}

export default AdminSeeMore;
