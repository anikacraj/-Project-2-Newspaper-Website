import React from 'react'
import Header from '../../../Components/ForUsers/Header/Header'
import Footer from '../../../Components/ForUsers/Footer/Footer'
import UpBody from '../../../Components/ForUsers/MainBody/UpBody'
import SectionTitle from '../../../Components/ForUsers/SectionTitle'
import Textslider from '../../../Components/Textslider'
import AdSlider from '../../../Components/ForUsers/ADslider/AdSlider'
import TopAds from '../../../Components/ForUsers/TopAdd/TopAds'
import Messenger from '../Messenger/Messenger'
import CommentSection from '../../../Components/ForUsers/CommentSection/CommentSection'





export default function Home() {
  return (
    <div> 
      <TopAds />
<Header />
<Textslider />
<Messenger />
<AdSlider />

<UpBody />

<SectionTitle />
<CommentSection />
<Footer />



    </div>
  )
}
