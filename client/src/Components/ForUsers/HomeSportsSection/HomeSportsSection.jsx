import React, { useEffect, useState } from 'react'
import useFetch from '../../../Pages/AdminPanel/Fetch/useFetch';
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from 'date-fns';
import SportsSectionTitle from '../SectionTitle/SportsSectionTitle';


function HomeSportsSection() {
//     const { data, isLoading, error } = useFetch(
//         `http://localhost:3004/admin/international/text`
//       );
// const [uploadNews,setUploadNews] =useState([]);

// useEffect(()=>{
//     setUploadNews(data || []);
// },[data]);

// const formattedDate =(upload) =>{
//     return upload.createdAt ?
//     format(new Date(upload.createdAt), "PPpp")
//     : "unknown Date"
// }

  return (
   <div>

   </div>
  )
}

export default HomeSportsSection