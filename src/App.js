import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage'
import './App.css';
import ContactPage from './pages/contactPage/ContactPage';

function App() {
  return (
    <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/contact" Component={ContactPage}></Route>
    </Routes>
  )
}

export default App;
