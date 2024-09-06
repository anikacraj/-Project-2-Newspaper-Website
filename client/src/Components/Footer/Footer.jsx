import React from 'react'
import './Footer.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Footer() {

const footerItem = [

{title : "About Us" , Path:"/"},


{title : " Contact Us" , Path:"/contact"},
{title : " RSS" , Path:"/"},
{title : "Newsletter " , Path:"/"},
{title : "Archives " , Path:"/"},
{title : " Apps" , Path:"/"},
{title : " FB Page" , Path:"/"},
{title : " Advertisement" , Path:"/"},
{title : "Privacy Policy " , Path:"/"},
{title : "Comment Policy" , Path:"/"},


]

  return (
    <div className='footer' >


  <div className='footer-container' >
  <div className="left">
   <a href="/"><h1>Newswired </h1></a>
   </div>
   <div >
   <ul className='right-menu'>
        {footerItem.map(({title,Path})=>(

            <li  key={title}> <NavLink style={{color :'white'}} to='{Path}'>{title} </NavLink></li>
        ))}
    </ul>
    <hr />
    </div>
    </div>
    <div className='downFooter'>
      <div className="downLeft"> 
     <h4 style={{color:'#98A2B3'}}> © 2024 thedailystar.net | Powered by: RSI LAB</h4>
     <pre style={{color:'#98A2B8' }}>Copyright: Any unauthorized use or reproduction of The Daily Star content for commercial purposes <br />is strictly prohibited and constitutes copyright infringement liable to legal action.
   

     </pre>

         </div>
      <div >
        
      <ul className="downRight">
          <li> <Link> fb </Link>  </li>
          <li> <Link> fb </Link>  </li>
          <li> <Link> fb </Link>  </li>
          <li> <Link> fb </Link>  </li>
          <li> <Link> fb </Link>  </li>
        </ul>
        
           </div>
    </div>
  
 
</div>


 
  )
}

export default Footer