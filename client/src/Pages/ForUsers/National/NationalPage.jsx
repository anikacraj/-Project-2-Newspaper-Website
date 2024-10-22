import React from 'react'
import Header from '../../../Components/ForUsers/Header/Header'
import UpBody from '../../../Components/ForUsers/MainBody/UpBody'
import Footer from '../../../Components/ForUsers/Footer/Footer'


function NationalPage(props) {
  const childData ='From child'
  props.onHandle(childData)
  return (
    <div>

<h1>From app component : {props.data} </h1>
<Header />

<UpBody />

<Footer />
    </div>
  )
}

export default NationalPage