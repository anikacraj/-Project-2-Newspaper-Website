import React,{useEffect, useState} from 'react'
import './AdSlider.css'

function AdSlider() {
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay=2500;
const [index,setIndex]=useState(0);

useEffect(() => {

 
  const timeout = setTimeout(() => {
    setIndex((prevIndex) =>
       (prevIndex === 
        colors.length - 1 ? 0 : prevIndex + 1));
  }, delay);

  return () => clearTimeout(timeout);
}, [index]);


  return (
    <div>
<div className='slideshow'>
  <div className='slideshowSlider' 
  style={{ transform: `translate3d(${-index * 100}%, 0, 0)
  ` }}
>

{
  colors.map((color,index)=>(
<div className='slide' key={index} 
 style={{backgroundColor:color}}></div>

  ))

}



  </div>

  <div className='dots'>
{colors.map((_,idx)=>(
  <div key={idx} className='dot'></div>
))}
</div>
</div>


    </div>
  )
}

export default AdSlider