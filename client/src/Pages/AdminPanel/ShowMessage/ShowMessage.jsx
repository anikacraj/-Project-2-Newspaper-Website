import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowMessage.css';

function ShowMessage() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/contact")
      .then(response => {
        console.log(response.data); // Check if data is correct
        setMessage(response.data);
      })
      .catch(err => console.error(err)); // Log any errors
  }, []);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Contact Message</h1>

      <div>
        <table className='table'>
          <thead>
            <tr className='tr' >
              <th className='th'>Name</th>
              <th className='th'>Email</th>
              <th className='th'>Message</th>
            </tr>
            </thead>
          <tbody>
            {message.map((msg, index) => (
             
                <tr className='tr' key={index}> 
          
              <td className='td'>{msg.name}</td>
              <td className='td'>{msg.email}</td>
              <td className='td'>{msg.message}</td>
          
            </tr>
             
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}

export default ShowMessage;
