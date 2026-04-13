import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import About from './pages/About'
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/country' element={<Country />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App