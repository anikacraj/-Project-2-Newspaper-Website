import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../Fetch/useFetch';

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
  const { data, isLoading, error } = useFetch("http://localhost:3004/admin/adminTextSlider");

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
    axios.put('http://localhost:3004/admin/adminTextSlider', { [field]: text })
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
     <div className='headingName'>
<h4 style={{marginLeft:'16px',padding:'3px 3px', textShadow:'green' ,fontSize:'18px' }}>{dayName} {currentDate}</h4>

<center> <h1 style={{marginBottom:'10px', marginTop:'-16px'}}>SLIDER TEXT  </h1>


</center>
</div>

      <div className="form-container-Admin_headerNews">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="AdminheaderNews">
            <label>Write News One:</label>
            <textarea className='textarea'
              value={newsOne}
              onChange={(e) => handleWordLimit(e.target.value, setNewsOne, setWordCountOne)}
              rows="3"
              cols="60"
              readOnly={!isEditing.newsOne}
            />
            <p>{wordCountOne}/{maxWords} words</p>
            {isEditing.newsOne ? (
              <button onClick={() => handleSave("newsOne", newsOne)}>Save</button>
            ) : (
              <button onClick={() => handleEditToggle("newsOne")}>Edit</button>
            )}
          </div>

          <div className="AdminheaderNews">
            <label>Write News Two:</label>
            <textarea className='textarea'
              value={newsTwo}
              onChange={(e) => handleWordLimit(e.target.value, setNewsTwo, setWordCountTwo)}
              rows="3"
              cols="60"
              readOnly={!isEditing.newsTwo}
            />
            <p>{wordCountTwo}/{maxWords} words</p>
            {isEditing.newsTwo ? (
              <button onClick={() => handleSave("newsTwo", newsTwo)}>Save</button>
            ) : (
              <button onClick={() => handleEditToggle("newsTwo")}>Edit</button>
            )}
          </div>

          <div className="AdminheaderNews">
            <label>Write News Three:</label>
            <textarea className='textarea'
              value={newsThree}
              onChange={(e) => handleWordLimit(e.target.value, setNewsThree, setWordCountThree)}
              rows="3"
              cols="60"
              readOnly={!isEditing.newsThree}
            />
            <p>{wordCountThree}/{maxWords} words</p>
            {isEditing.newsThree ? (
              <button onClick={() => handleSave("newsThree", newsThree)}>Save</button>
            ) : (
              <button onClick={() => handleEditToggle("newsThree")}>Edit</button>
            )}
          </div>

          <div className="AdminheaderNews">
            <label>Write News Four:</label>
            <textarea className='textarea'
              value={newsFour}
              onChange={(e) => handleWordLimit(e.target.value, setNewsFour, setWordCountFour)}
              rows="3"
              cols="60"
              readOnly={!isEditing.newsFour}
            />
            <p>{wordCountFour}/{maxWords} words</p>
            {isEditing.newsFour ? (
              <button onClick={() => handleSave("newsFour", newsFour)}>Save</button>
            ) : (
              <button onClick={() => handleEditToggle("newsFour")}>Edit</button>
            )}
          </div>
        </form>
      </div>

      <center><h2>Display News</h2></center>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <div className='showHeaderNews'>
          {data?.newsOne} <button onClick={() => handleEditToggle("newsOne")}>Edit</button>
        </div>
        <div className='showHeaderNews'>
          {data?.newsTwo} <button onClick={() => handleEditToggle("newsTwo")}>Edit</button>
        </div>
        <div className='showHeaderNews'>
          {data?.newsThree} <button onClick={() => handleEditToggle("newsThree")}>Edit</button>
        </div>
        <div className='showHeaderNews'>
          {data?.newsFour} <button onClick={() => handleEditToggle("newsFour")}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default AdminTextslider;
