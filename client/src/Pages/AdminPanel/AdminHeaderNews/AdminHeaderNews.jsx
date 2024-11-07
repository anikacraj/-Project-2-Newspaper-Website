import React, { useState,useEffect } from 'react';
import './headernews.css'
import axios from 'axios';
import useFetch from '../Fetch/useFetch';

function AdminHeaderNews() {
  const [messageOne, setMessageOne] = useState('');   
  const [messageTwo, setMessageTwo] = useState(''); 
  const [messageThree,setMessageThree] = useState(''); 
  const [messageFour, setMessageFour] = useState(''); 
  
  const [wordCountOne, setWordCountOne] = useState(0);
  const [wordCountTwo, setWordCountTwo] = useState(0);
  const [wordCountThree, setWordCountThree] = useState(0);
  const [wordCountFour, setWordCountFour] = useState(0);



const [isEditing,setIsEditing]=useState({
messageOne:false,
messageTwo:false,
messageThree:false,
messageFour:false
})




  const [dayName, setDayName] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  
  const maxWords = 15;

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



const {data,isLoading,error} =useFetch("http://localhost:3004/admin/headernews");

useEffect(()=>{
  if (data) {
    setMessageOne(data.messageOne)
    setMessageTwo(data.messageTwo)
    setMessageThree(data.messageThree)
    setMessageFour(data.messageFour)
    
  }
},[data])


const handleEditToggle = (field) => {
  setIsEditing((prev) => ({
    ...prev,
    [field]: !prev[field]
  }));
};

const handleSave = (field, text) => {
  axios.put('http://localhost:3004/admin/headernews', { [field]: text })
    .then(result => {
      setIsEditing((prev) => ({ ...prev, [field]: false }));
      alert("Update successful");
    })
    .catch(err => {
      console.log(err);
    });
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
<h4 style={{marginLeft:'16px',padding:'3px 3px', textShadow:'green' ,fontSize:'18p' }}>{dayName} {currentDate}</h4>

   <center> <h1>Header News </h1>
   
   
   </center>
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
              onChange={(e) => handleWordLimit(e.target.value, setMessageOne, setWordCountOne)}
              rows="2.5" cols="40" readOnly={!isEditing.messageOne} />
            <p>{wordCountOne}/{maxWords} words</p>
         
            {isEditing.messageOne ? (
              <button onClick={() => handleSave("messageOne", messageOne)}>Save</button>
            ) : (
              <button onClick={() => handleEditToggle("messageOne")}>Edit</button>
            )}
          </div>


          <div className="AdminheaderNews">
            <label className='label' htmlFor="messageTwo">Write News Two:</label>
            <textarea className='textarea'
              name="news2"
              id="messageTwo"
              value={messageTwo}
              required
              onChange={(e) => handleWordLimit(e.target.value, setMessageTwo, setWordCountTwo)}
              rows="2.5" cols="10" 
              readOnly={!isEditing.messageTwo}
              />
            <p>{wordCountTwo}/{maxWords} words</p>
            {isEditing.messageTwo ? (
              <button onClick={() => handleSave("messageTwo", messageTwo)}>Save</button>
            ) : (
              <button onClick={() => handleEditToggle("messageTwo")}>Edit</button>
            )}

</div>
<div  className="AdminheaderNews">
            <label className='label' htmlFor="messageThree">Write News Three:</label>
            <textarea className='textarea'
              name="news3"
              id="messageThree"
              value={messageThree}
              required
              onChange={(e) => handleWordLimit(e.target.value, setMessageThree, setWordCountThree)}
              rows="2.5" cols="40"
              readOnly={!isEditing.messageThree}
              />
            <p>{wordCountThree}/{maxWords} words</p>
            {isEditing.messageThree ? (
              <button onClick={() => handleSave("messageThree", messageThree)}>Save</button>
            ) : (
              <button onClick={() => handleEditToggle("messageThree")}>Edit</button>
            )}
          </div>


          <div  className="AdminheaderNews">
            <label className='label' htmlFor="messageFour">Write News Four:</label>
            <textarea className='textarea'
              name="news4"
              id="messageFour"
              value={messageFour}
              required
              onChange={(e) => handleWordLimit(e.target.value, setMessageFour, setWordCountFour)}
              rows="2.5" cols="40"
              readOnly={!isEditing.messageFour}
              />
         
            <p>{wordCountFour}/{maxWords} words</p>
            {isEditing.messageFour ? (
              <button onClick={() => handleSave("messageFour", messageFour)}>Save</button>
            ) : (
              <button onClick={() => handleEditToggle("messageFour")}>Edit</button>
            )}

            </div>
        
          </form>
          </div>
      </div>

<center>
  <h1>Display News </h1>
  
 
    <div  style={{ display: 'flex', gap: '10px', justifyContent:'center' }}>
     
    <div className='showHeaderNews'>
          {data?.messageOne} <button onClick={() => handleEditToggle("messageOne")}>Edit</button>
        </div>

        <div className='showHeaderNews'>
          {data?.messageTwo} <button onClick={() => handleEditToggle("messageTwo")}>Edit</button>
        </div>

        <div className='showHeaderNews'>
          {data?.messageThree} <button onClick={() => handleEditToggle("messageThree")}>Edit</button>
        </div>

        <div className='showHeaderNews'>
          {data?.messageFour} <button onClick={() => handleEditToggle("messageFour")}>Edit</button>
        </div>

    </div> 



</center>



    </div>
  );
}

export default AdminHeaderNews;
