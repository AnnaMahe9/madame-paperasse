import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import PrestationsPage from './pages/prestationsPage/PrestationsPage';
import Navbar from './components/navbar/Navbar';
import ContactButton from './components/contactButton/ContactButton';
import Footer from './components/footer/Footer';
import './App.css';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path='/prestations' Component={PrestationsPage}></Route>
        <Route path='/contact' Component={ContactButton}></Route>
    </Routes>
    <Footer/>
    </>
  )
      
}

export default App;
