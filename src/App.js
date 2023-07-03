import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ContactButton from './components/contactButton/ContactButton';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path='/contact' Component={ContactButton}></Route>
    </Routes>
    </>
  )
      
}

export default App;
