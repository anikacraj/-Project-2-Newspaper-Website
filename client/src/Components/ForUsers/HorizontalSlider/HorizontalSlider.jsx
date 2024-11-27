import React, { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Hori.css";
import useFetch from "../../../Pages/ForUsers/Home/useFetch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HorizontalSlider = () => {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3004/admin/national/text`
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the latest 9 news items
  const newsData = data ? data.slice(-9) : [];

  const itemsPerPage = 3; // Show 3 news items at a time

  // Calculate the total number of slides
  const totalSlides = Math.ceil(newsData.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const formattedDate = (upload) => {
    return upload.createdAt
      ? format(new Date(upload.createdAt), "PPpp") // Example: Nov 21, 2024, 2:12 PM
      : "Unknown Date";
  };

  if (isLoading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news: {error.message}</p>;
  if (newsData.length === 0) return <p>No news available</p>;

  // Get the news items for the current slide
  const currentNews = newsData.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="slider__container">
      <button className="arrow left-arrow" onClick={prevSlide}>
      <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="slider__wrapper">
        {currentNews.map((upload) => (
          <div key={upload._id} className="slide__item">
            <article className="product">
              <h6>Published on: {formattedDate(upload)}</h6>
              <Link
               className="product__link"
               to={`/user/news/${upload._id}`}
               state={upload}
             >
                 <div
             dangerouslySetInnerHTML ={{
                 __html: upload.content.substring(0,1200),
             }}
     />
     See More
             </Link>
            </article>
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={nextSlide}>
      <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default HorizontalSlider;
