import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import PrestationsPage from './pages/prestationsPage/PrestationsPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './App.css';
import ContactPage from './pages/contactPage/ContactPage';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path='/prestations' Component={PrestationsPage}></Route>
        <Route path='/contact' Component={ContactPage}></Route>
    </Routes>
    <Footer/>
    </>
  )
      
}

export default App;
