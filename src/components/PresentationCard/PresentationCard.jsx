import React from 'react'
import 'animate.css'
import "./PresentationCard.scss"

export default function PresentationCard({title, img, text}) {
  return(
    <div className="presentation-card animate__animated animate__fadeInUp">
      <h3>{title}</h3>
      <img src={img} alt="illustration" className="presentation-picture" />
      <p>
        {text}
      </p>
    </div>
  )

}
