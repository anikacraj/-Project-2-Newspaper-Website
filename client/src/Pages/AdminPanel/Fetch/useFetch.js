import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setData(res.data); // Axios directly returns the data here
      setIsLoading(false);
      setError(null);
    })
    .catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
}, [url]);

  return {data,isLoading,error}; // Return the fetched data
}

export default useFetch;
