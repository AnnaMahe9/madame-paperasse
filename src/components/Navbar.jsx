import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="logo.png" alt="logo" className="navbar-logo"/>
      <section>
        <a href="/" className="nav-item">Accueil</a>
        <a href="/" className="nav-item">Prestations</a>
        <a href="/" className="nav-item">Contact</a>
      </section>
    </div>
  )
}
