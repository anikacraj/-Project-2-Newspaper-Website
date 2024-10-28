import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../ShowMessage/ShowMessage.css';

import useFetch from '../Fetch/useFetch';

function ShowNewsLetter() {
  const {data,isLoading,error} = useFetch("http://localhost:3004/texteditor");

  return (
    <div>
    
      {data.map((letter, index) => (
        <div key={index}>
        
          <div dangerouslySetInnerHTML={{ __html: letter.content }} />
          <br /><br />
        </div>
      ))}
    </div>
  );
}

export default ShowNewsLetter;
