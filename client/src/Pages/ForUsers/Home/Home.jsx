import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import Header from '../../../Components/ForUsers/Header/Header'
import Footer from '../../../Components/ForUsers/Footer/Footer'
import UpBody from '../../../Components/ForUsers/MainBody/UpBody'

import Textslider from '../../../Components/Textslider'
import AdSlider from '../../../Components/ForUsers/ADslider/AdSlider'
import TopAds from '../../../Components/ForUsers/TopAdd/TopAds'
import Messenger from '../Messenger/Messenger'
import CommentSection from '../../../Components/ForUsers/CommentSection/CommentSection'
import useFetch from "./useFetch";
import HorizontalSlider from "../../../Components/ForUsers/HorizontalSlider/HorizontalSlider";
import SectionTitle from "../../../Components/ForUsers/SectionTitle/SectionTitle";
import InternationalSectionTitle from "../../../Components/ForUsers/SectionTitle/InternationalSection";
import SportsSectionTitle from "../../../Components/ForUsers/SectionTitle/SportsSectionTitle";
import BusinessSectionTitle from "../../../Components/ForUsers/SectionTitle/BusinessSection";







export default function Home() {

  const { category } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch(
    `http://localhost:3004/admin/home/text`
  );

  const [uploadNews, setUploadNews] = useState([]);

  useEffect(() => {
    setUploadNews(data || []);
  }, [data]);

  const formattedDate = (upload) => {
    return upload.createdAt
      ? format(new Date(upload.createdAt), "PPpp") // Example: Nov 21, 2024, 2:12 PM
      : "Unknown Date";
  };



  return (
    <div className="products-container"> 
      <TopAds />
<Header />
<Textslider />
<Messenger />
<AdSlider />

<div style={{ marginTop: "60px" }}> 
       
      </div>

      <div className="displayNews">

        <section className="products">
          {uploadNews && uploadNews.length > 0 ? (
            uploadNews.map((upload) => (
              <article className="product" key={upload._id}>
                <h6>Published on: {formattedDate(upload)}</h6>
              
                <div
                  dangerouslySetInnerHTML={{
                    __html: upload.content.substring(0, 1200),
                  }}
                />
                <Link
                  className="product__link"
                  to={`/news/${upload._id}`}
                  state={upload}
                >
                  See more
                </Link>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    position: "relative",
                  }}
                >
               
                </div>
              </article>
            ))
          ) : (
            <p>No news available</p>
          )}
        </section>
      </div>





<SectionTitle />
<HorizontalSlider />
<InternationalSectionTitle />
<SportsSectionTitle />
<BusinessSectionTitle />
<CommentSection />
<Footer />



    </div>
  )
}
