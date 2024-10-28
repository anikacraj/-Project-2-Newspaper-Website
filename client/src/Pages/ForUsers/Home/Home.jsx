import React from 'react'
import Header from '../../../Components/ForUsers/Header/Header'
import Footer from '../../../Components/ForUsers/Footer/Footer'
import UpBody from '../../../Components/ForUsers/MainBody/UpBody'
import SectionTitle from '../../../Components/ForUsers/SectionTitle'
import Textslider from '../../../Components/Textslider'
import AdSlider from '../../../Components/ForUsers/ADslider/AdSlider'





export default function Home() {
  return (
    <div> 
<Header />
<Textslider />
<AdSlider />

<UpBody />

<SectionTitle />

<Footer />



    </div>
  )
}
