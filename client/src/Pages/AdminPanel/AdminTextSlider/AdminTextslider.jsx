import React, { useState,useEffect } from 'react';
// import './headernews.css'
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
  
  const maxWords = 10;
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

  useEffect(()=>{
    const today =new Date();
    const dayOptions ={weekday: 'long'};
    const dayNameString =today.toLocaleDateString("en-Us",dayOptions);

    const dateOptions ={year:'numeric',month:'long',day:'numeric',time:'numeric'};
    const currentDateString = today.toLocaleDateString("en-US", dateOptions);
    setDayName(dayNameString);
    setCurrentDate(currentDateString);
},[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/admin/adminTextSlider', { newsOne, newsTwo, newsThree, newsFour })
      .then(result => {
        console.log(result);
        location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }

  const click = () => {
    alert("successfully done");
  }

  const {data,isLoading,error} =useFetch("http://localhost:3004/admin/adminTextSlider");


  const handleEdit=()=>{

  }


  return (
    <div>
    <center> <h1>Text Slider News </h1>
   
   
   </center>
      <div className="form-container-Admin_headerNews">
        <div>
          <form  onSubmit={handleSubmit}>

            <div className="AdminheaderNews"> 
            <label className='label' htmlFor="messageOne">Write News One:</label>
            <textarea className='textarea'
              name="news1"
              id="messageOne"
              value={newsOne}
              required
              onChange={(e) => handleWordLimit(e.target.value, setNewsOne, setWordCountOne)}
              rows="3" cols="40" />
            <p>{wordCountOne}/{maxWords} words</p>

            <label className='label' htmlFor="messageTwo">Write News Two:</label>
            <textarea className='textarea'
              name="news2"
              id="messageTwo"
              value={newsTwo}
              required
              onChange={(e) => handleWordLimit(e.target.value, setNewsTwo, setWordCountTwo)}
              rows="3" cols="40" />
            <p>{wordCountTwo}/{maxWords} words</p>
</div>
<div  className="AdminheaderNews">
            <label className='label' htmlFor="messageThree">Write News Three:</label>
            <textarea className='textarea'
              name="news3"
              id="messageThree"
              value={newsThree}
              required
              onChange={(e) => handleWordLimit(e.target.value, setNewsThree, setWordCountThree)}
              rows="3" cols="40" />
            <p>{wordCountThree}/{maxWords} words</p>

            <label className='label' htmlFor="messageFour">Write News Four:</label>
            <textarea className='textarea'
              name="news4"
              id="messageFour"
              value={newsFour}
              required
              onChange={(e) => handleWordLimit(e.target.value, setNewsFour, setWordCountFour)}
              rows="3" cols="40"
              
              />
         
            <p>{wordCountFour}/{maxWords} words</p>
            </div>
           <center> <button className="buttonHeaderNews" type="submit" onClick={click}>Send Message</button></center>
          </form>
          </div>
      </div>

<center>
  <h1>Display News </h1>
  
 
    <div  style={{ display: 'flex', gap: '10px' }}>
      <div className='showHeaderNews'>{data.newsOne}   <button style={{width:'80px', borderRadius:'8px'}} onClick={handleEdit}>Edit </button> </div>
      <div className='showHeaderNews'>{data.newsTwo}   <button style={{width:'80px', borderRadius:'8px'}} onClick={handleEdit}>Edit </button> </div>
      <div className='showHeaderNews'>{data.newsThree} <button style={{width:'80px', borderRadius:'8px'}} onClick={handleEdit}>Edit </button> </div>
      <div className='showHeaderNews'>{data.newsFour}  <button style={{width:'80px', borderRadius:'8px'}} onClick={handleEdit}>Edit </button> </div>
    </div> 



</center>



    </div>
  )
}

export default AdminTextslider