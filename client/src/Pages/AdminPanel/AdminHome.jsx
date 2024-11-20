import React from 'react'
import AdminHeader from '../../Components/ForAdmin/AdminHomePage/AdminHeader/AdminHeader'
import AdminMessenger from '../ForUsers/Messenger/AdminMessenger'
import MiddleBody from '../../Components/ForAdmin/MiddleBody'

function AdminHome() {
  return (
    <div>
        <AdminHeader />
        <MiddleBody />
        
<AdminMessenger />


    </div>
  )
}

export default AdminHome