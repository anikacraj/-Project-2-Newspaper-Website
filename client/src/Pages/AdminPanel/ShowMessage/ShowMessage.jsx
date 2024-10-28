import React,{useState, useEffect} from 'react';
import './ShowMessage.css';
import useFetch from '../Fetch/useFetch';
import SearchBox from '../../../Components/SearchBox/SearchBox';

function ShowMessage() {
  const {data,isLoading,error} = useFetch("http://localhost:3004/contact"); // Use the fetched data

  const [filterName, setFilterName] = useState(data);

  useEffect(() => {
    setFilterName(data);
  }, [data]);

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newData = data.filter((d) => {
      const dataName = d.name.toLowerCase();
      return dataName.startsWith(value);
    });
    setFilterName(newData);
  };

  return (
    <div>
  <div style={{backgroundColor:'gray', paddingTop:'10px '}}>

  <h1 style={{textAlign:'center', color:'white'}}>Contact Message</h1>

<div className="search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
   marginBottom: '10px', marginLeft:'145px'}}>
  <SearchBox onSearch={handleSearch} />
  <span style={{ fontSize: '26px',fontWeight:'300',marginLeft:"8px", color:'white' }}> Results: {filterName.length}/{data ? data.length : 0}</span>
</div>
  </div>


      <div>
        <table className='table'>
          <thead>
            <tr className='tr'>
              <th className='th'>Name</th>
              <th className='th'>Email</th>
              <th className='th'>Message</th>
            </tr>
          </thead>
          <tbody>
            {filterName && filterName.map((msg, index) => ( 
              <tr className='tr' key={index}> 
                <td className='td'>{msg.name}</td>
                <td className='td'>{msg.email}</td>
                <td className='td'>{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowMessage;
