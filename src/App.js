import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" Component={HomePage}></Route>
    </Routes>
    </>
  )
      
}

export default App;
