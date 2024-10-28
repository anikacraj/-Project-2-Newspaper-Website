import React from 'react'
import './Messenger.css'
import { FaRegCommentDots } from 'react-icons/fa'; 

function Messenger() {
  return (
    <div>


        <div className="message">

       <a href="/MessengerChatUser">
       <FaRegCommentDots size={54} color="gray" /> 
       <br />
       <span >MessageUs </span>
      
       {/* <FontAwesomeIcon icon="fa-solid fa-message" /> */}
       </a>
        </div>
    </div>
  )
}

export default Messenger