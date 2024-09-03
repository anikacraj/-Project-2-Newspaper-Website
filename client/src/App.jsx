import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/UserSignIN/Signup'
import Login from './Components/UserLogin/Login'
import  Home  from './Components/Home'


function App() {
 

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/register' element={<Signup />}> </Route>
  <Route path='/login' element={<Login />}> </Route>
  <Route path='/' element={<Home />}> </Route>
 </Routes>
 </BrowserRouter>
  )
}

export default App
