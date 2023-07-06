import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to='/'className="nav-item"><img src="logo.png" alt="logo" className="navbar-logo"/></NavLink>
      <div className="navlinks">
        <NavLink to='/'className="nav-item">Accueil</NavLink>
        <NavLink to='/prestations'className="nav-item">Prestations</NavLink>
        <NavLink to='/contact'className="nav-item">Contact</NavLink>
      </div>
    </div>
  )
}
