import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegCommentDots } from 'react-icons/fa';

import './Messenger.css';

function Messenger() {

  const [Owners, setOwners] = useState({
    messages: [],
    isLoading: true,
    error: false
  });

  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [text, setText] = useState('');



  useEffect(() => {
    const renderData = async () => {
      try {
        const userArr = await axios.get('http://localhost:3004');
        const adminArr = await axios.get('http://localhost:3004/adminHome');
        setOwners(
          {
            messages: [
              ...userArr.data.map((msg) => ({ text: msg.message, sender: 'You', timestamp: msg.timestamp })),
              ...adminArr.data.map((msg) => ({ text: msg.adminMessage, sender: 'Admin', timestamp: msg.timestamp }))
            ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)),
            isLoading: false,
            error: false
          }
        );

      } catch (error) {
        setOwners((prev) => ({
          ...prev,
          isLoading: false,
          error: true
        }));
        console.log(error);
        window.alert('Error on messanger: ' + error.message);
      }
    }

    renderData();

  }, []);

  const handleChatbox = () => {
    setIsChatboxOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsChatboxOpen(false);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3004', { message: text })
      .then(() => {
        setOwners((prev) => ({
          ...prev,
          messages: [...prev.messages, { text: text, sender: "You", timespam: new Date() }]
        }))
        setText('');
      })
      .catch(err => {
        console.error(err);
      });
  };





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
              {Owners.isLoading ? (
                <p>Loading messages...</p>
              ) : Owners.error ? (
                <p>Error loading messages</p>
              ) : (
                Owners.messages.map((msg, index) => (
                  <div key={index} style={{ textAlign: msg.sender === 'You' ? 'right' : 'left', color: 'white' }}>
                    <span style={{ color: msg.sender === 'You' ? 'gold' : 'yellow', fontWeight: 'bold' }}>
                      {msg.sender}
                    </span>
                    <br />
                    {msg.text}
                  </div>
                ))
              )}
              <form className='msgarea' onSubmit={handleSubmit}>
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

export default React.memo(Messenger);