import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminHeader from '../../../Components/ForAdmin/AdminHomePage/AdminHeader/AdminHeader';
import './AdminNational.css';

function AdminNational() {
  const { category } = useParams(); 

  return (
    <div>
      <AdminHeader />

      <div style={{ marginTop: '60px' }}>
        <div className="new-post">
          <div className="new-post__links">
            {/* Dynamically generate the link using the current category */}
            <Link to={`/admin/${category}/text`}>Create New News</Link>
          </div>
        </div>
      </div>

      <div className="displayNews">
        <h1 style={{ textAlign: 'center', marginTop: '60px' }}>Latest News Uploaded</h1>
      </div>
    </div>
  );
}

export default AdminNational;
