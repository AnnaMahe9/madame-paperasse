import React from 'react'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="logo.png" alt="logo" className="navbar-logo"/>
      <div className="navlinks">
        <a href="/" className="nav-item">Accueil</a>
        <a href="/" className="nav-item">Prestations</a>
        <a href="/" className="nav-item">Contact</a>
      </div>
    </div>
  )
}
