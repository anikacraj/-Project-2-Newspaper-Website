import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/UserSignIN/Signup'
import Login from './Components/UserLogin/Login'
import Home from './Pages/Home/Home'
import Error from './Pages/ErrorPage/Error'
import AboutPage from './Pages/About/AboutPage'
import ContactPage from './Pages/Contact/ContactPage'
import NationalPage from '../src/Pages/National/NationalPage'
import InternationalPage from './Pages/International/InternationalPage'
import Football from './Pages/Sports/Football'
import Cricket from './Pages/Sports/Cricket'
import Business from './Pages/Business/Business'


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
  







  <Route path='*' element={<Error />}> </Route>




 
 </Routes>
 </BrowserRouter>
  )
}

export default App
