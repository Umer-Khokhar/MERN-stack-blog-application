import React from 'react'
import './App.css'
import { Dashboard, Home, About, Contact, Services } from "./pages"
import { Navbar } from "./components"
import DetailPage from './pages/detail_page/DetailPage'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path="/blog/:id" element={<DetailPage />}/>
        <Route path="/about-us" element={<About />}/>
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
