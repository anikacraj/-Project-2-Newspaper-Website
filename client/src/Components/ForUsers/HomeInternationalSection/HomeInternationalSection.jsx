import React, { useEffect, useState } from 'react'
import useFetch from '../../../Pages/AdminPanel/Fetch/useFetch';
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from 'date-fns';
import InternationalSectionTitle from '../SectionTitle/InternationalSection';
function HomeInternationalSection() {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3004/admin/national/text`
      );
const [uploadNews,setUploadNews] =useState([]);

useEffect(()=>{
    setUploadNews(data || []);
},[data]);

const formattedDate =(upload) =>{
    return upload.createdAt ?
    format(new Date(upload.createdAt), "PPpp")
    : "unknown Date"
}

  return (
    <div style={{backgroundColor:'#EAECF0', marginTop:'10px',marginBottom:'10px' }} >

<div className="products-container" >
<InternationalSectionTitle />
<section className="products">
{ uploadNews && uploadNews.length >0 ?(
     uploadNews.map((upload)=>(
         <article className="product" key={upload._id}>
             <h6>Published On : {formattedDate(upload)}</h6>
         <div
             dangerouslySetInnerHTML ={{
                 __html: upload.content.substring(0,1200),
             }}
     />

         <Link
               className="product__link"
               to={`/news/${upload._id}`}
               state={upload}
             >
               See more
             </Link>

         </article>
     ))
 ) :(
     <h3>No news available </h3>
 )

}
</section>
</div>
    </div>
  )
}

export default HomeInternationalSection