import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route,Router, Navigate } from 'react-router-dom';
import Home from './Pages/ForUsers/Home/Home';
import Signup from './Pages/ForUsers/Register/UserSignIN/Signup';
import Login from './Pages/ForUsers/Register/UserLogin/Login';
import AboutPage from './Pages/ForUsers/About/AboutPage';
import ContactPage from './Pages/ForUsers/Contact/ContactPage';
import NationalPage from './Pages/ForUsers/National/NationalPage';
import InternationalPage from './Pages/ForUsers/International/InternationalPage';
import Cricket from './Pages/ForUsers/Sports/Cricket';
import Football from './Pages/ForUsers/Sports/Football';
import Business from './Pages/ForUsers/Business/Business';
import RichTextEditor from './Components/ForUsers/RichTextEditor';
import ShowMessage from './Pages/AdminPanel/ShowMessage/ShowMessage';
import ShowUsers from './Pages/AdminPanel/ShowUsers/ShowUsers';
import AdminHome from './Pages/AdminPanel/AdminHome';
import AdminHeaderNews from './Pages/AdminPanel/AdminHeaderNews/AdminHeaderNews';
import Advertisment from './Pages/ForUsers/Advertisment/Advertisment';
import NewsLetter from './Pages/ForUsers/Newsletter/NewsLetter';
import CommentPolicy from './Pages/ForUsers/CommentPolicy/CommentPolicy';
import PrivacyPolicy from './Pages/ForUsers/PrivacyPolicy/PrivacyPolicy';
import Ebook from './Pages/ForUsers/Ebook/Ebook';
import ShowNewsLetter from './Pages/AdminPanel/ShowNewsLetter/ShowNewsLetter';
import AdminTextSlider from './Pages/AdminPanel/AdminTextSlider/AdminTextslider';

import AdminRoute from '/AdminRoute';
import AdminSelectSliderAds from './Pages/AdminPanel/SelectSliderAds/AdminSelectSliderAds';
import AdminNational from './Pages/AdminPanel/AdminNational/AdminNational';
import AdminEditNews from './Pages/AdminPanel/AdminEditNews';
// import AdminInternational from './Pages/AdminPanel/AdminInternational/AdminInternational';
// import AdminFootball from './Pages/AdminPanel/AdminFootball/AdminFootball';
// import AdminCricket from './Pages/AdminPanel/AdminCricket/AdminCricket';
// import AdminBusiness from './Pages/AdminPanel/AdminBusiness/AdminBusiness';
import AdminSeeMore from './Pages/AdminPanel/AdminSeeMore';
import ProtectedRoute from '../ProtectedRoute';
import UserSeeMore from './Components/ForUsers/UserSeeMore';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const onLogin = () => {
    setIsAuthenticated(true);
    
  };
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    const userRole = localStorage.getItem("role");
    setIsAuthenticated(authStatus);
    setRole(userRole);
  }, []);
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/national" element={<NationalPage />} />
        <Route path="/international" element={<InternationalPage />} />
        <Route path="/football" element={<Football />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/business" element={<Business />} />
        <Route path="/advertisment" element={<Advertisment />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/commentpolicy" element={<CommentPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Protected User Route */}
        <Route
        path="/texteditor"
        element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            role={role}
            allowedRoles={["user"]}
          >
            <RichTextEditor />
          </ProtectedRoute>
        }
      />
        <Route
          path="/ebook"
          element={
             
             
           <ProtectedRoute 
         
           >
             <Ebook />
           </ProtectedRoute>
          }
        />

<Route
  path="/user/news/:_id"
  element={

   <UserSeeMore />
  
  }
/>

        {/* Admin Routes */}
        <Route
          path="/adminHome"
          element={
            <AdminRoute >
              <AdminHome />
              </AdminRoute>
          }
        />
        <Route
          path="/showUsers"
          element={
            <AdminRoute >
              <ShowUsers />
              </AdminRoute>
          }
        />
        <Route
          path="/showMessage"
          element={
            <AdminRoute >
              <ShowMessage />
              </AdminRoute>
          }
        />
     
        <Route
          path="/showNewsLetter"
          element={
            <AdminRoute >
              <ShowNewsLetter />
              </AdminRoute>
          }
        />
        <Route
          path="/adminTextSlider"
          element={
             <AdminRoute >
              <AdminTextSlider />
             </AdminRoute>
          }
        />



<Route
          path="/uploadSliderAds"
          element={
            <AdminRoute>
             <AdminSelectSliderAds />
             </AdminRoute>
          }
        />


        {/* ----------------------------Admin Page------------------------- */}

        <Route
          path="/admin/:category"
          element={
             <AdminRoute >
              <AdminNational />
             </AdminRoute>
          }
        />

        
<Route
          path="/admin/:category/text"
          element={
             <AdminRoute >
              <RichTextEditor />
             </AdminRoute>
          }
        />

  
        {/* <Route path="/admin/:category" element={<AdminNational />} />
        <Route path="/admin/:id" element={<AdminSeeMore />} /> */}
    
   

<Route
  path="/admin/edit/:_id"
  element={
    <AdminRoute >
      <AdminEditNews />
    </AdminRoute>
  }
/>

<Route
  path="/news/:_id"
  element={
    <AdminRoute >
      <AdminSeeMore />
    </AdminRoute>
  }
/>






        {/* Fallback Route */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
