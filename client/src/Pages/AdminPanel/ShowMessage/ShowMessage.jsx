import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


function ShowMessage() {
    const [message,setMessage] =useState([])
    useEffect(()=>{
      axios.get("http://localhost:3004/contact")
      .then(message => setMessage(message.data))
      .catch(err=> res.json(err))
    },[])
  
    return (
      <div>
  
        <h1>Contact Message </h1>
  
  <div style={{}}>
  <table>
    <thead>
      <tr >
        <th>Name </th>
        <th>Email </th>
        <th>Message </th>
      </tr>
    </thead>
    <tbody>
  
      {
        message.map(msg =>  {
         return  <tr>
            <td>{msg.name}</td>
            <td>{msg.email}</td>
            <td>{msg.message}</td>
          </tr>
        })
      }
    </tbody>
  </table>
  </div>
  
      </div>
    )
}

export default ShowMessage