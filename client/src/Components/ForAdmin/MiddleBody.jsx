import React from 'react'

function MiddleBody() {
  return (
    <div>
            <div className="middleBody">

<div className="newsletter">  <a href="/adminHeadernews">  <h4>Header News </h4>  </a>  </div>
 <div className="newsletter"> <a href="/uploadSliderAds"> <h4> Slider Ads </h4>   </a>  </div>
 <div className="newsletter"> <a href="/adminTextSlider"> <h4>Slider Text </h4>  </a> </div>
 <div className="newsletter"> <a href=""> <h4> Contact Us </h4> </a>  </div>
</div>


<div className="middleBody">
<div className="newsletter"> <a href="/adminShowNewsLetter"><h4>News Letter </h4> </a>      </div>
 <div className="newsletter"><a href="/adminPrivacyPolicy"> <h4> Privacy Policy</h4></a>   </div>
 <div className="newsletter"><a href="/adminCommunityPolicy"> <h4>Community Policy </h4></a>   </div>
 <div className="newsletter"><a href="/adminAdvertisementRequest">  <h4> Advertisement Request </h4> </a> </div>
</div>
    </div>
  )
}

export default MiddleBody