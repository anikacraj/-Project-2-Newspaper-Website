import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import JoditEditor from 'jodit-react';




function RichTextEditor() {


const editor =useRef(null)
const[content,setContent]=useState('')

const handleSubmit =(e)=>{
  e.preventDefault();
  axios.post('http://localhost:3004/texteditor',{content})
  .then(result =>{
    console.log(result);
    location.reload()
  })
  .catch(err=>{
    console.log(err);
  })

}
const click=()=>{
  alert("Are you sure? ")
 }

  return (
    <div>



<div className='container' >
     <div className="form-container" >

    
  

   <div className="form-box" id="signin-box">
    
        <form id="signin-form" onSubmit={handleSubmit}>
        <JoditEditor 
ref={editor}
value={content}
onChange={newContent=>setContent(newContent)} />

          <button className='button' type="submit" onClick={click}>Create Post </button>
        </form>
       
      </div>
    </div>
   </div >







    </div>
  )
}

export default RichTextEditor