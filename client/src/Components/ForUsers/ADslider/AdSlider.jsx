import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdSlider.css';

function AdSlider() {
  const [images, setImages] = useState({ ImageOne: "", ImageTwo: "", ImageThree: "" });
  const delay = 2500;
  const [index, setIndex] = useState(0);

  // Fetch images from the server on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get("http://localhost:3004/uploadSliderAds");
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  // Update slide index to cycle through images
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Cycle through 3 images
    }, delay);

    return () => clearTimeout(timeout);
  }, [index]);

  // Check if images are available
  if (!images.ImageOne || !images.ImageTwo || !images.ImageThree) {
    return <div>Loading images...</div>;
  }

  // Array of image URLs to simplify rendering
  const imageUrls = [
    `http://localhost:3004/uploads/${images.ImageOne}`,
    `http://localhost:3004/uploads/${images.ImageTwo}`,
    `http://localhost:3004/uploads/${images.ImageThree}`
  ];

  return (
<>

<div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imageUrls.map((url, idx) => (
          <div className="slide" key={idx}>
            <img src={url} alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="dots">
        {imageUrls.map((_, idx) => (
          <div
            key={idx}
            className={`dot${index === idx ? " active" : ""}`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
     
    </div>
<hr style={{width:'80%', backgroundColor:'#717171'}} />
</>

  );
}

export default AdSlider;
