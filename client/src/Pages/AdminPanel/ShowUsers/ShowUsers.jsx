import React, { useEffect, useState } from 'react'
import '../ShowMessage/ShowMessage.css'
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

      <h1 style={{textAlign:'center'}}>Show all Users </h1>

<div >
<table className='table'>
  <thead>
    <tr className='tr'>
      <th className='th'>Name </th>
      <th className='th'>Email </th>
    </tr>
  </thead>
  <tbody>

    {
      users.map(user =>  {
       return  <tr className='tr'>
          <td className='td' >{user.name}</td>
          <td className='td'>{user.email}</td>
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