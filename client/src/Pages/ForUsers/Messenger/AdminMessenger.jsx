import React, { useEffect, useState } from 'react';
import './Messenger.css';
import { FaRegCommentDots } from 'react-icons/fa';
import axios from 'axios';
import useFetch from '../../AdminPanel/Fetch/useFetch';

function AdminMessenger() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [adminMessage, setAdminMessage] = useState('');

  const [Owners, setOwners] = useState({
    messages: [],
    isLoading: true,
    error: false,
  })

  useEffect(() => {
    const renderData = async () => {
      try {
        const userArr = await axios.get('http://localhost:3004');
        const adminArr = await axios.get('http://localhost:3004/adminHome');

        setOwners({
          messages: [
            ...userArr.data.map((msg) => ({ text: msg.message, sender: 'You', timestamp: msg.timestamp }))
            ,
            ...adminArr.data.map((msg) => ({ text: msg.adminMessage, sender: 'Admin', timestamp: msg.timestamp }))
          ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
          ,
          isLoading: false,
          error: false
        })

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
  }, [])


  const handleChatbox = () => {
    setIsChatboxOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsChatboxOpen(false);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3004/adminHome', { adminMessage });
      setOwners((prev) => ({
        ...prev,
        messages: [...prev.messages, {
          text: adminMessage,
          sender: "admin", timespam: new Date()
        }]
      }))
      setAdminMessage('');

    } catch (error) {
      console.log(error)
      alert("error admin messenger: "+error.message);
    }
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
            <p style={{ textAlign: 'center', fontSize: '29px', fontWeight: 'bold', color: 'white' }}>Messages</p>
            <div className='chatting'>
              {Owners.isLoading ? (
                <p>Loading messages...</p>
              ) : Owners.error ? (
                <p>Error loading messages</p>
              ) : (
                Owners.messages.map((msg, index) => (
                  <div key={index} style={{ textAlign: msg.sender === 'You' ? 'left' : 'right', color: 'white' }}>
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
                  value={adminMessage}
                  onChange={(e) => setAdminMessage(e.target.value)}
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

export default AdminMessenger;
