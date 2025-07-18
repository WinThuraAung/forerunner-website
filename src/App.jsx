import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Partners from './pages/partners';
import Products from './pages/products';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Layout from './Layout';
import './index.css';



function App() {
  return (
    
      <Routes >
        
        <Route element={<Layout />}>

          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path = "/partners" element = {<Partners />} />
          <Route path = "/products" element = {<Products />} />

        </Route>

      </Routes>

  );
}

export default App
