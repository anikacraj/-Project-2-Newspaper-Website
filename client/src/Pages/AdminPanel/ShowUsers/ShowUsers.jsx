import React, { useEffect, useState } from 'react';
import '../ShowMessage/ShowMessage.css';
import useFetch from '../Fetch/useFetch';
import SearchBox from '../../../Components/SearchBox/SearchBox';

function ShowUsers() {
  const { data, isLoading, error } = useFetch("http://localhost:3004/register");

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

  const handleDelete=(e)=>{
alert("are you sure ?")

  }

  return (
    <div>
      <div style={{backgroundColor:'gray', paddingTop:'10px '}}>

<h1 style={{textAlign:'center', color:'white'}}>Users Display</h1>

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
              <th className='th'>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              filterName && filterName.map((user, index) => (
                <tr className='tr' key={index}>
                  <td className='td'>{user.name}</td>
                  <td className='td'>{user.email}</td>
                  <button  onClick={handleDelete}  style={{padding:'2px' ,marginTop:'4px'}}>Delete User</button>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowUsers;
