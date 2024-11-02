import React, { useState } from 'react';
import './Messenger.css';
import { FaRegCommentDots } from 'react-icons/fa';
import axios from 'axios';
import useFetch from '../../AdminPanel/Fetch/useFetch';

function Messenger() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [text, setText] = useState('');

  const { data: userMessages, isLoading: isUserLoading, error: userError } = useFetch("http://localhost:3004");
  const { data: adminMessages, isLoading: isAdminLoading, error: adminError } = useFetch("http://localhost:3004/admin/home");

  const handleChatbox = () => {
    setIsChatboxOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsChatboxOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004', { message: text })
      .then(() => {
        setText('');
      })
      .catch(err => {
        console.error(err);
      });
  };


  const combinedMessages = [
    ...(userMessages || []).map(msg => ({ text: msg.message, sender: 'You', timestamp: msg.timestamp })),
    ...(adminMessages || []).map(msg => ({ text: msg.adminMessage, sender: 'Admin', timestamp: msg.timestamp }))
  ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)); // Sort by timestamp (earliest first)

  return (
    <div className='container-chatbox'>
      <div className="message" onClick={handleChatbox}>
        <br />
        <span style={{ cursor: 'pointer' }}>{isChatboxOpen ? '' : <FaRegCommentDots size={54} color="gray" />} </span>
      </div>
      <div id='chatbox' className={isChatboxOpen ? 'chatbox-open' : 'chatbox-closed'}>
        <div>
          <div className="header-chatbox">
            <p onClick={handleClose} style={{ cursor: 'pointer', position: 'absolute', right: 0, top: '0', marginRight: '10px' }}>❌</p>
            <p style={{ textAlign: 'center', fontSize: '29px', fontWeight: 'bold', color: 'white' }}>Message Us</p>
            <div className='chatting'>
              {isUserLoading || isAdminLoading ? (
                <p>Loading messages...</p>
              ) : userError || adminError ? (
                <p>Error loading messages</p>
              ) : (
                combinedMessages.map((msg, index) => (
                  <div key={index} style={{ textAlign: msg.sender === 'You' ? 'right' : 'left', color: 'white' }}>
                    <span style={{ color: msg.sender === 'You' ? 'gold' : 'yellow', fontWeight: 'bold' }}>
                      {msg.sender}
                    </span>
                    <br />
                    {msg.text}
                  </div>
                ))
              )}
              <form className='textarea' onSubmit={handleSubmit}>
                <textarea
                  rows='1.5'
                  cols='27'
                  className='messageArea'
                  placeholder='write here...'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
                <button type='submit' className='send'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messenger;
