import React from 'react'
import './Banner.scss'

export default function Banner() {
  return (
    <div className="banner">
      <section>
      <h1>Bienvenue sur Madame Paperasse</h1>
      <p>
        Madame Paperasse c’est à la fois une assistante administrative, une assistante RH et une assistante de gestion… 
      </p>
      </section>
      <img src="logo.png" alt="Madame Paperasse" className="banner-logo" />
    </div>
  )
}
