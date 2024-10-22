import React, { useState, useEffect } from "react";
import './SearchBox.css'

function SearchBox(props) {
const [searchText,setSearchText]=useState("");
 
const handleChange =(e)=>{
setSearchText(e.target.value)
};

useEffect(()=>{
    props.onSearch(searchText);
},[searchText])


  return (
    <div>

<center>
<div className='input'>
                  <input type="text" id='search' placeholder="search here" value={searchText}
                   onChange={handleChange}/>
                   
                    
                  </div>
</center>
    </div>
  )
}

export default SearchBox