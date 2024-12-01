import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../Fetch/useFetch';
import './AdminTextslider.css'


function AdminTextslider() {
  const [newsOne, setNewsOne] = useState('');
  const [newsTwo, setNewsTwo] = useState('');
  const [newsThree, setNewsThree] = useState('');
  const [newsFour, setNewsFour] = useState('');
  
  const [wordCountOne, setWordCountOne] = useState(0);
  const [wordCountTwo, setWordCountTwo] = useState(0);
  const [wordCountThree, setWordCountThree] = useState(0);
  const [wordCountFour, setWordCountFour] = useState(0);

  const [dayName, setDayName] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const [isEditing, setIsEditing] = useState({
    newsOne: false,
    newsTwo: false,
    newsThree: false,
    newsFour: false
  });

  const maxWords = 10;
  const { data, isLoading, error } = useFetch("http://localhost:3004/adminTextSlider");

  // Initialize news state with fetched data
  useEffect(() => {
    if (data) {
      setNewsOne(data.newsOne);
      setNewsTwo(data.newsTwo);
      setNewsThree(data.newsThree);
      setNewsFour(data.newsFour);
    }
  }, [data]);

  useEffect(()=>{
    const today =new Date();
    const dayOptions ={weekday: 'long'};
    const dayNameString =today.toLocaleDateString("en-Us",dayOptions);

    const dateOptions ={year:'numeric',month:'long',day:'numeric',time:'numeric'};
    const currentDateString = today.toLocaleDateString("en-US", dateOptions);
    setDayName(dayNameString);
    setCurrentDate(currentDateString);
},[]);



  // Function to limit word count
  const handleWordLimit = (text, setText, setWordCount) => {
    const words = text.trim().split(/\s+/);
    const wordCount = words.filter(word => word.length > 0).length;

    if (wordCount > maxWords) {
      const truncatedWords = words.slice(0, maxWords).join(' ');
      setText(truncatedWords);
    } else {
      setText(text);
    }

    setWordCount(Math.min(wordCount, maxWords));
  };

  // Toggle edit mode
  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  // Save the edited news item
  const handleSave = (field, text) => {
    axios.put('http://localhost:3004/adminTextSlider', { [field]: text })
      .then(result => {
        setIsEditing((prev) => ({ ...prev, [field]: false }));
        alert("Update successful");
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>

     <div className='sliderTextName'>

<div>
<h4 style={{marginLeft:'16px',padding:'3px 3px', textShadow:'green' ,
  fontSize:'18px' ,textAlign:'left' }}>🗓️{dayName} {currentDate}</h4>
</div>
<center> <h1 style={{}}> 📩SLIDER TEXT  </h1>


</center>
</div>

      <div className="form-container-Admin_sliderNews">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="Admin_sliderNews">
            <label>Write News One:</label>
            <textarea className='Admin_sliderNews_textarea'
              value={newsOne}
              onChange={(e) => handleWordLimit(e.target.value, setNewsOne, setWordCountOne)}
              rows="3"
              cols="60"
              readOnly={!isEditing.newsOne}
            />
            <p>{wordCountOne}/{maxWords} words</p>
            {isEditing.newsOne ? (
              <button className='Admin_sliderNews_Button' onClick={() => handleSave("newsOne", newsOne)}>Save</button>
            ) : (
              <button className='Admin_sliderNews_Button' onClick={() => handleEditToggle("newsOne")}>Edit</button>
            )}
          </div>

          <div className="AdminSliderNews">
            <label>Write News Two:</label>
            <textarea className='Admin_sliderNews_textarea'
              value={newsTwo}
              onChange={(e) => handleWordLimit(e.target.value, setNewsTwo, setWordCountTwo)}
              rows="3"
              cols="60"
              readOnly={!isEditing.newsTwo}
            />
            <p>{wordCountTwo}/{maxWords} words</p>
            {isEditing.newsTwo ? (
              <button className='Admin_sliderNews_Button' onClick={() => handleSave("newsTwo", newsTwo)}>Save</button>
            ) : (
              <button className='Admin_sliderNews_Button' onClick={() => handleEditToggle("newsTwo")}>Edit</button>
            )}
          </div>

          <div className="AdminheaderNews">
            <label>Write News Three:</label>
            <textarea className='Admin_sliderNews_textarea'
              value={newsThree}
              onChange={(e) => handleWordLimit(e.target.value, setNewsThree, setWordCountThree)}
              rows="3"
              cols="60"
              readOnly={!isEditing.newsThree}
            />
            <p>{wordCountThree}/{maxWords} words</p>
            {isEditing.newsThree ? (
              <button className='Admin_sliderNews_Button' onClick={() => handleSave("newsThree", newsThree)}>Save</button>
            ) : (
              <button  className='Admin_sliderNews_Button' onClick={() => handleEditToggle("newsThree")}>Edit</button>
            )}
          </div>

          <div className="AdminheaderNews">
            <label>Write News Four:</label>
            <textarea className='Admin_sliderNews_textarea'
              value={newsFour}
              onChange={(e) => handleWordLimit(e.target.value, setNewsFour, setWordCountFour)}
              rows="3"
              cols="60"
              readOnly={!isEditing.newsFour}
            />
            <p>{wordCountFour}/{maxWords} words</p>
            {isEditing.newsFour ? (
              <button className='Admin_sliderNews_Button' onClick={() => handleSave("newsFour", newsFour)}>Save</button>
            ) : (
              <button className='Admin_sliderNews_Button' onClick={() => handleEditToggle("newsFour")}>Edit</button>
            )}
          </div>
        </form>
      </div>

      <center><h2>Display News</h2></center>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <div className='showSliderNews'>
          {data?.newsOne} <button className='Admin_sliderNews_Button' onClick={() => handleEditToggle("newsOne")}>Edit</button>
        </div>
        <div className='showSliderNews'>
          {data?.newsTwo} <button className='Admin_sliderNews_Button' onClick={() => handleEditToggle("newsTwo")}>Edit</button>
        </div>
        <div className='showSliderNews'>
          {data?.newsThree} <button className='Admin_sliderNews_Button' onClick={() => handleEditToggle("newsThree")}>Edit</button>
        </div>
        <div className='showSliderNews'>
          {data?.newsFour} <button className='Admin_sliderNews_Button' onClick={() => handleEditToggle("newsFour")}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default AdminTextslider;
