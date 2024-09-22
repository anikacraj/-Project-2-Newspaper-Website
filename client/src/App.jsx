import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/ForUsers/Home/Home'
import Signup from './Pages/ForUsers/Register/UserSignIN/Signup'
import Login from './Pages/ForUsers/Register/UserLogin/Login'
import AboutPage from './Pages/ForUsers/About/AboutPage'
import ContactPage from './Pages/ForUsers/Contact/ContactPage'
import NationalPage from './Pages/ForUsers/National/NationalPage'
import InternationalPage from './Pages/ForUsers/International/InternationalPage'
import Cricket from './Pages/ForUsers/Sports/Cricket'
import Football from './Pages/ForUsers/Sports/Football'
import Business from './Pages/ForUsers/Business/Business'
import RichTextEditor from './Components/ForUsers/RichTextEditor'
import ShowMessage from './Pages/AdminPanel/ShowMessage/ShowMessage'
import ShowUsers from './Pages/AdminPanel/ShowUsers/ShowUsers'




function App() {
 

  return (
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Home />}> </Route>
  <Route path='/register' element={<Signup />}> </Route>
  <Route path='/login' element={<Login />}> </Route>
  <Route path='/about' element={<AboutPage />}> </Route>
  <Route path='/contact' element={<ContactPage />}> </Route>
 <Route path='/national' element={<NationalPage />}> </Route>
 <Route path='/international' element={<InternationalPage />}> </Route>
 <Route path='/cricket' element={<Cricket />}> </Route>
 <Route path='/football' element={<Football />}> </Route>
 <Route path='/business' element={<Business />}> </Route>
 <Route path='/texteditor' element={<RichTextEditor />}> </Route>
 <Route path='/showUsers' element={<ShowUsers />}> </Route>
 <Route path='/showMessage' element={<ShowMessage />}> </Route>


  







  <Route path='*' element={<Error />}> </Route>




 
 </Routes>
 </BrowserRouter>
  )
}

export default App
