import React from 'react';
import './SectionTitle.css';
import { Link, NavLink } from 'react-router-dom';
const InternationalSectionTitle = () => {
  return (
    <div className="section-title-international">
     <div className="line-container">
        <div className="line"></div>
        <div className="line"></div>
      </div>
    <a href="/international">   <span className="international-text">International</span></a>
      
      
      <div className="line-container">
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
    </div>
  );
};

export default InternationalSectionTitle;
