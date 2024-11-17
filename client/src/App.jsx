import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import ProtectedRoute from '/ProtectedRoute';
import AdminRoute from '/AdminRoute';
import AdminSelectSliderAds from './Pages/AdminPanel/SelectSliderAds/AdminSelectSliderAds';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
   localStorage.getItem("isAdminAuthenticated") === "true" && 
    localStorage.getItem("role")==="admin" && 
    localStorage.getItem("isAdminLogIn")==="true"
  );

  // Function to set authentication state upon user login
  const onLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to set authentication state upon admin login
  const loginAdmin = () => {
    setIsAdminAuthenticated(true);
  };

  // Sync authentication states with localStorage
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem("isAdminAuthenticated", isAdminAuthenticated);
  }, [isAdminAuthenticated]);

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
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <RichTextEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ebook"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Ebook />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/home"
          element={
            <AdminRoute isAdminAuthenticated={isAdminAuthenticated}>
              <AdminHome />
              </AdminRoute>
          }
        />
        <Route
          path="/showUsers"
          element={
            <AdminRoute isAdminAuthenticated={isAdminAuthenticated}>
              <ShowUsers />
              </AdminRoute>
          }
        />
        <Route
          path="/showMessage"
          element={
            <AdminRoute isAdminAuthenticated={isAdminAuthenticated}>
              <ShowMessage />
              </AdminRoute>
          }
        />
        <Route
          path="/admin/headernews"
          element={
            <AdminRoute isAdminAuthenticated={isAdminAuthenticated}>
              <AdminHeaderNews />
              </AdminRoute>
          }
        />
        <Route
          path="/showNewsLetter"
          element={
           
              <ShowNewsLetter />
           
          }
        />
        <Route
          path="/adminTextSlider"
          element={
             <AdminRoute isAdminAuthenticated={isAdminAuthenticated}>
              <AdminTextSlider />
             </AdminRoute>
          }
        />



<Route
          path="/uploadSliderAds"
          element={
            <AdminRoute isAdminAuthenticated={isAdminAuthenticated}>
             <AdminSelectSliderAds />
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
