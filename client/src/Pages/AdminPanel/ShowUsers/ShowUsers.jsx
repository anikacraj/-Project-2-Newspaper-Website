import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ShowUsers()
{
const [users,setUsers] =useState([])
  useEffect(()=>{
    axios.get("http://localhost:3004/register")
    .then(users => setUsers(users.data))
    .catch(err=> res.json(err))
  },[])

  return (
    <div>

      <h1>Show all Users </h1>

<div style={{}}>
<table>
  <thead>
    <tr >
      <th>Name </th>
      <th>Email </th>
    </tr>
  </thead>
  <tbody>

    {
      users.map(user =>  {
       return  <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      })
    }
  </tbody>
</table>
</div>

    </div>
  )
}

export default ShowUsers