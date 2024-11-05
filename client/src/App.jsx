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
import AdminHome from './Pages/AdminPanel/AdminHome'
import AdminHeaderNews from './Pages/AdminPanel/AdminHeaderNews/AdminHeaderNews'
import Advertisment from './Pages/ForUsers/Advertisment/Advertisment'
import NewsLetter from './Pages/ForUsers/Newsletter/NewsLetter'
import CommentPOlicy from './Pages/ForUsers/CommentPolicy/CommentPOlicy'
import PrivacyPolicy from './Pages/ForUsers/PrivacyPolicy/PrivacyPolicy'
import Ebook from './Pages/ForUsers/Ebook/Ebook'
import ShowNewsLetter from './Pages/AdminPanel/ShowNewsLetter/ShowNewsLetter'
import AdminTextslider from './Pages/AdminPanel/AdminTextSlider/AdminTextslider'
import AdminSelectSliderAds from './Pages/AdminPanel/SelectSliderAds/AdminSelectSliderAds'





function App() {
 
const submitHandle=(Data)=>{
  console.log(Data)
}


const data ="check data "

  return (
 <BrowserRouter>
 <Routes>




 <Route path='/' element={<Home />}>  </Route>
 
 <Route path='/national' element={<NationalPage />} /> 
 <Route path='/international' element={<InternationalPage />} /> 
 <Route path='/football' element={<Football />} />
 <Route path='/cricket' element={<Cricket />} />
 <Route path='/business' element={<Business />} />
  <Route path='/advertisment' element={<Advertisment />} /> 
 <Route path='/newsletter' element={<NewsLetter />} /> 
 <Route path='/commentpolicy' element={<CommentPOlicy />} />
 <Route path='/privacy' element={<PrivacyPolicy />} /> 
 <Route path='/ebook' element={<Ebook />} /> 
 {/* <Route path='/MessengerChatUser' element={<MessengerChatUser />} />  */}





 <Route path='/register' element={<Signup />}> </Route>
  <Route path='/login' element={<Login />}> </Route>
  <Route path='/about' element={<AboutPage />}> </Route>
  <Route path='/contact' element={<ContactPage />}> </Route>

{/* admin router  */}


 <Route path='/texteditor' element={<RichTextEditor />}> </Route>
 <Route path='/showUsers' element={<ShowUsers />}> </Route>
 <Route path='/showMessage' element={<ShowMessage />}> </Route>
 <Route path='/admin/home' element={<AdminHome />}> </Route>
 <Route path='/admin/headernews' element={<AdminHeaderNews />}> </Route>
 <Route path='/showNewsLetter' element={<ShowNewsLetter />}> </Route>
 <Route path='/adminTextSlider' element={<AdminTextslider />}> </Route>
 <Route path='/uploadSliderAds' element={<AdminSelectSliderAds />}> </Route>



  







  <Route path='*' element={<Error />}> </Route>




 
 </Routes>
 </BrowserRouter>
  )
}

export default App