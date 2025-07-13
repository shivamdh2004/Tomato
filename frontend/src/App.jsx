import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer.jsx';
import AppDownload from './components/AppDownload/AppDownload.jsx';
const App = () => {
  return (
    <>
    <div className='app'>      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />

      </Routes>
      
    </div>
    <AppDownload/>
    <Footer/>
  </>  
  )
}

export default App
