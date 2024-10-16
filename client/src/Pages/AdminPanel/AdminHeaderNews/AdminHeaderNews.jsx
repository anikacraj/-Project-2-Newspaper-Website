import React, { useState } from 'react';
import './headernews.css'
import axios from 'axios';

function AdminHeaderNews() {
  const [messageOne, setmessageOne] = useState('');   
  const [messageTwo, setmessageTwo] = useState(''); 
  const [messageThree, setmessageThree] = useState(''); 
  const [messageFour, setmessageFour] = useState(''); 
  
  const [wordCountOne, setWordCountOne] = useState(0);
  const [wordCountTwo, setWordCountTwo] = useState(0);
  const [wordCountThree, setWordCountThree] = useState(0);
  const [wordCountFour, setWordCountFour] = useState(0);
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/admin/headernews', { messageOne, messageTwo, messageThree, messageFour })
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

  return (
    <div >
   <center> <h1>Header News </h1></center>
      <div className="form-container-Admin_headerNews">
        <div>
          <form  onSubmit={handleSubmit}>

            <div className="AdminheaderNews"> 
            <label className='label' htmlFor="messageOne">Write News One:</label>
            <textarea className='textarea'
              name="news1"
              id="messageOne"
              value={messageOne}
              required
              onChange={(e) => handleWordLimit(e.target.value, setmessageOne, setWordCountOne)}
              rows="3" cols="40" />
            <p>{wordCountOne}/{maxWords} words</p>

            <label className='label' htmlFor="messageTwo">Write News Two:</label>
            <textarea className='textarea'
              name="news2"
              id="messageTwo"
              value={messageTwo}
              required
              onChange={(e) => handleWordLimit(e.target.value, setmessageTwo, setWordCountTwo)}
              rows="3" cols="40" />
            <p>{wordCountTwo}/{maxWords} words</p>
</div>
<div  className="AdminheaderNews">
            <label className='label' htmlFor="messageThree">Write News Three:</label>
            <textarea className='textarea'
              name="news3"
              id="messageThree"
              value={messageThree}
              required
              onChange={(e) => handleWordLimit(e.target.value, setmessageThree, setWordCountThree)}
              rows="3" cols="40" />
            <p>{wordCountThree}/{maxWords} words</p>

            <label className='label' htmlFor="messageFour">Write News Four:</label>
            <textarea className='textarea'
              name="news4"
              id="messageFour"
              value={messageFour}
              required
              onChange={(e) => handleWordLimit(e.target.value, setmessageFour, setWordCountFour)}
              rows="3" cols="40"
              
              />
         
            <p>{wordCountFour}/{maxWords} words</p>
            </div>
           <center> <button className="buttonHeaderNews" type="submit" onClick={click}>Send Message</button></center>
          </form>
          </div>
      </div>
    </div>
  );
}

export default AdminHeaderNews;
