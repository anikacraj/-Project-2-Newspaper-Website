import React, { useState } from 'react'

function CommentSection() {
    const[comment,setComment]=useState('');
    const handleSubmit=(e)=>{

    }
  return (
    <div className='comment-section'>
        <form onSubmit={handleSubmit}>
        <textarea type="message" name='comment' id="comment" required onChange={(e) => setContact({comment: e.target.value })} rows="1.5" cols="20" />
       <button className='send'>Send</button>
        </form>
    </div>
  )
}

export default CommentSection